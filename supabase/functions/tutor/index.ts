// Tutor com IA do StudyHub (Supabase Edge Function, Deno).
// A chave do Gemini fica só aqui, nos secrets do Supabase: nunca vai para o navegador.
// Deploy:  supabase secrets set GEMINI_API_KEY=...   e   supabase functions deploy tutor
import { createClient } from 'npm:@supabase/supabase-js@2'

// Limite mensal do plano gratuito, por tipo de pedido. Ajuste quando o plano Pro existir.
const LIMITS = { explicar: 30, redacao: 3 } as const
type Kind = keyof typeof LIMITS

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' }
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })

// Um modelo por tipo: o limite gratuito do Gemini é por modelo, então dividir também espalha a cota.
// Lite para explicações curtas; o Flash, mais capaz, para corrigir redação.
const MODELS: Record<Kind, string> = { explicar: 'gemini-3.5-flash-lite', redacao: 'gemini-3.8-flash' }
const GEMINI_URL = (model: string) => `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`

const system: Record<Kind, string> = {
  explicar: `Você é um professor brasileiro de cursinho pré-vestibular, paciente e didático.
O aluno respondeu uma questão e quer uma nova explicação, mais simples que a do gabarito.
Explique em português do Brasil, em no máximo 180 palavras: por que a alternativa correta está certa,
por que a escolhida pelo aluno está errada (se ele errou) e uma dica para não errar de novo.
Use linguagem de conversa, exemplos do dia a dia e, se houver conta, mostre o passo a passo.
Fórmulas podem ser escritas em LaTeX entre $...$, mas só com símbolos e números: palavras ficam fora das fórmulas
(escreva "a área é $\\frac{b \\cdot h}{2}$", nunca "$Área = ...$"). Escreva dinheiro por extenso, como "100 reais",
nunca com o símbolo do real, porque o cifrão marca fórmula. Não use markdown: nada de títulos, listas, *itálico* ou **negrito**.`,
  redacao: `Você é um corretor experiente da redação do ENEM e segue a matriz oficial das 5 competências.
Avalie a redação do aluno sobre o tema informado. Seja justo, específico e encorajador, sem inflar notas.
Responda em português do Brasil, exatamente neste formato de texto simples:

NOTA ESTIMADA: <total de 0 a 1000>
C1 (norma-padrão): <0, 40, 80, 120, 160 ou 200> — <1 frase>
C2 (tema e repertório): <nota> — <1 frase>
C3 (argumentação): <nota> — <1 frase>
C4 (coesão): <nota> — <1 frase>
C5 (proposta de intervenção): <nota> — <diga quais dos 5 elementos apareceram>

PONTOS FORTES
- <2 ou 3 itens>

O QUE MELHORAR
- <3 a 5 itens, citando trechos do texto>

REESCRITA SUGERIDA
<reescreva o parágrafo mais fraco, mostrando como ficaria melhor>

Se o texto fugir totalmente do tema, não for dissertativo-argumentativo ou tiver até 7 linhas, explique que receberia nota zero e por quê.`,
}

Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (req.method !== 'POST') return json({ error: 'Método não permitido.' }, 405)

  // O cliente do Supabase usa o token do próprio aluno: o RLS garante que ele só vê e grava o próprio uso.
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } } })
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return json({ error: 'Faça login para usar o tutor.' }, 401)

  const body = await req.json().catch(() => null)
  const kind = body?.kind as Kind
  if (!(kind in LIMITS)) return json({ error: 'Pedido inválido.' }, 400)

  const since = new Date(Date.now() - 30 * 86_400_000).toISOString()
  const { count, error: countError } = await supabase.from('ai_usage').select('id', { count: 'exact', head: true }).eq('kind', kind).gte('created_at', since)
  if (countError) return json({ error: 'Não foi possível verificar seu limite de uso.' }, 500)
  if ((count ?? 0) >= LIMITS[kind]) return json({ error: `Você usou os ${LIMITS[kind]} pedidos gratuitos deste mês. Conheça o plano Pro para ter mais.`, limit: true }, 429)

  const clip = (s: unknown, n: number) => String(s ?? '').slice(0, n)
  const content = kind === 'explicar'
    ? `Questão: ${clip(body.question, 1500)}\nAlternativas:\n${(Array.isArray(body.options) ? body.options : []).map((o: unknown, i: number) => `${String.fromCharCode(65 + i)}) ${clip(o, 300)}`).join('\n')}\nCorreta: ${clip(body.correct, 300)}\nResposta do aluno: ${clip(body.chosen, 300)}\nExplicação do gabarito: ${clip(body.why, 1000)}`
    : `Tema: ${clip(body.tema, 300)}\n\nRedação do aluno:\n${clip(body.texto, 7000)}`

  const res = await fetch(GEMINI_URL(MODELS[kind]), {
    method: 'POST',
    // A chave vai no cabeçalho, não na URL, para não aparecer em logs.
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': Deno.env.get('GEMINI_API_KEY') ?? '' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system[kind] }] },
      contents: [{ role: 'user', parts: [{ text: content }] }],
      // Raciocínio "low" na redação: o padrão (medium) levava cerca de 90 s, perto do limite de 150 s da função.
      generationConfig: { maxOutputTokens: 8192, temperature: kind === 'redacao' ? 0.3 : 0.7, ...(kind === 'redacao' && { thinkingConfig: { thinkingLevel: 'low' } }) },
    }),
  })
  if (res.status === 429) return json({ error: 'Muitos pedidos agora. Tente de novo em instantes.' }, 429)
  if (!res.ok) { console.error('gemini', res.status, await res.text()); return json({ error: 'O tutor está indisponível no momento.' }, 502) }

  const data = await res.json()
  const candidate = data.candidates?.[0]
  // Bloqueio por segurança pode vir no pedido (promptFeedback) ou na resposta (finishReason).
  if (data.promptFeedback?.blockReason || ['SAFETY', 'PROHIBITED_CONTENT', 'BLOCKLIST'].includes(candidate?.finishReason)) return json({ error: 'O tutor não conseguiu responder a esse conteúdo.' }, 422)
  // Partes marcadas como "thought" são o raciocínio interno do modelo, não a resposta.
  const text = (candidate?.content?.parts ?? []).filter((p: { thought?: boolean }) => !p.thought).map((p: { text?: string }) => p.text ?? '').join('').trim()
  if (!text) return json({ error: 'O tutor está indisponível no momento.' }, 502)
  await supabase.from('ai_usage').insert({ kind })
  return json({ text, remaining: LIMITS[kind] - (count ?? 0) - 1 })
})
