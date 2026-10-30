// String.raw: permite escrever LaTeX (\frac, \sqrt...) sem escapar cada barra invertida.
export const r = String.raw
export type Question = { q: string; options: string[]; answer: number; why: string }
export type Topic = {
  id: string; subject: string; area: string; title: string; level: 'Básico' | 'Médio' | 'Avançado'
  learn: { h: string; p: string[] }[]          // Aprender: teoria em blocos (use $...$ para fórmulas inline)
  summary: string[]; mistakes: string[]         // Resumo
  formulas: { name: string; tex: string; note: string }[]
  examples: { q: string; steps: string[] }[]   // exemplos resolvidos (aparecem em Aprender)
  quiz: Question[]                              // Exercícios
}
