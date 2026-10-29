// Tutor com IA do StudyHub (Supabase Edge Function, Deno).
// A chave da Anthropic fica só aqui, nos secrets do Supabase: nunca vai para o navegador.
// Deploy:  supabase secrets set ANTHROPIC_API_KEY=...   e   supabase functions deploy tutor
import Anthropic from 'npm:@anthropic-ai/sdk'
import { createClient } from 'npm:@supabase/supabase-js@2'

// Limite mensal do plano gratuito, por tipo de pedido. Ajuste quando o plano Pro existir.
const LIMITS = { explicar: 30, redacao: 3 } as const
type Kind = keyof typeof LIMITS

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' }
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })

const anthropic = new Anthropic() // lê ANTHROPIC_API_KEY do ambiente

const system: Record<Kind, string> = {
  explicar: `Você é um professor brasileiro de cursinho pré-vestibular, paciente e didático.
O aluno respondeu uma questão e quer uma nova explicação, mais simples que a do gabarito.
Explique em português do Brasil, em no máximo 180 palavras: por que a alternativa correta está certa,
por que a escolhida pelo aluno está errada (se ele errou) e uma dica para não errar de novo.
Use linguagem de conversa, exemplos do dia a dia e, se houver conta, mostre o passo a passo.
Fórmulas podem ser escritas em LaTeX entre $...$.`,
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

  try {
    const response = await anthropic.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      // Se o modelo recusar por política, a API tenta outro modelo automaticamente na mesma chamada.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: kind === 'redacao' ? 'high' : 'low' },
      system: system[kind],
      messages: [{ role: 'user', content }],
    })
    if (response.stop_reason === 'refusal') return json({ error: 'O tutor não conseguiu responder a esse conteúdo.' }, 422)
    const text = response.content.flatMap(b => (b.type === 'text' ? [b.text] : [])).join('\n').trim()
    await supabase.from('ai_usage').insert({ kind })
    return json({ text, remaining: LIMITS[kind] - (count ?? 0) - 1 })
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return json({ error: 'Muitos pedidos agora. Tente de novo em instantes.' }, 429)
    if (error instanceof Anthropic.APIError) return json({ error: 'O tutor está indisponível no momento.' }, 502)
    throw error
  }
})
