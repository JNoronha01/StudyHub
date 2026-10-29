// Análise automática (sem IA) de uma redação: roda no navegador, instantânea e gratuita.
import { conectivos } from '../content/redacao'

const allConnectives = [...new Set(conectivos.flatMap(c => c.list).map(c => c.replace(/,$/, '').toLowerCase()))]
const checks = {
  agente: /\b(minist[ée]rio|governo|estado|escolas?|m[íi]dia|ongs?|congresso|fam[íi]lias?|sociedade civil|secretarias?|poder p[úu]blico|empresas|plataformas|prefeituras?|universidades?)\b/i,
  acao: /\b(deve|devem|cabe|é (fundamental|necess[áa]rio|essencial|imprescind[íi]vel) que|precisa[m]?|promova|crie|invista|implemente|inclua)\b/i,
  meio: /\b(por meio de|mediante|atrav[ée]s de|por interm[ée]dio de|com o uso de|por via de)\b/i,
  finalidade: /\b(a fim de|com o intuito de|para que|com o objetivo de|com a finalidade de|visando)\b/i,
}
const informal = [/\beu (acho|penso|creio)\b/i, /\ba gente\b/i, /\btipo\b/i, /\bné\b/i, /\bpra\b/i, /\bvc\b/i, /\btá\b/i]

export type EssayAnalysis = {
  words: number; lines: number; paragraphs: number; connectives: string[]; repeated: string[]
  proposal: Record<keyof typeof checks | 'detalhamento', boolean>; warnings: string[]
}

export function analyzeEssay(text: string): EssayAnalysis {
  const clean = text.trim()
  const words = clean ? clean.split(/\s+/).length : 0
  const paras = clean.split(/\n\s*\n|\n/).map(p => p.trim()).filter(Boolean)
  const lines = Math.ceil(words / 11) // uma linha da folha do ENEM tem em média 10 a 12 palavras
  const lower = ` ${clean.toLowerCase()} `
  const found = allConnectives.filter(c => lower.includes(` ${c} `) || lower.includes(` ${c},`))
  const repeated = found.filter(c => lower.split(c).length - 1 > 2)
  const last = paras[paras.length - 1] ?? ''
  const proposal = {
    agente: checks.agente.test(last), acao: checks.acao.test(last), meio: checks.meio.test(last), finalidade: checks.finalidade.test(last),
    detalhamento: last.split(/\s+/).length > 45 && checks.meio.test(last), // estimativa: proposta longa e com meio costuma estar detalhada
  }
  const warnings: string[] = []
  if (words && lines < 20) warnings.push(`Texto curto: cerca de ${lines} linhas. Busque entre 20 e 30.`)
  if (lines > 30) warnings.push(`Cerca de ${lines} linhas: passa do limite de 30 linhas da folha oficial.`)
  if (words && paras.length !== 4) warnings.push(`${paras.length} parágrafo(s). A estrutura mais segura tem 4: introdução, 2 de desenvolvimento e conclusão.`)
  if (informal.some(r => r.test(clean))) warnings.push('Há marcas de informalidade ou de 1ª pessoa ("eu acho", "a gente", "pra"...).')
  if (words && found.length < 4) warnings.push('Poucos conectivos. Ligue melhor as ideias (competência 4).')
  if (repeated.length) warnings.push(`Conectivos repetidos demais: ${repeated.join(', ')}.`)
  return { words, lines, paragraphs: paras.length, connectives: found, repeated, proposal, warnings }
}
