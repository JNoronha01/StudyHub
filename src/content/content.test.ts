import { describe, expect, it } from 'vitest'
import katex from 'katex'
import { allSubjects, topics } from './topics'
import { formulas } from './formulas'

// Todo trecho entre $...$ precisa ser LaTeX válido (o app renderiza com throwOnError: false e esconderia o erro).
const texParts = (s: string) => s.split(/\$([^$]+)\$/g).filter((_, i) => i % 2 === 1)
const texts = (t: typeof topics[number]) => [
  t.title, ...t.learn.flatMap(b => [b.h, ...b.p]), ...t.summary, ...t.mistakes,
  ...t.examples.flatMap(e => [e.q, ...e.steps]), ...t.quiz.flatMap(q => [q.q, ...q.options, q.why]),
]

describe('conteúdo dos tópicos', () => {
  it('ids são únicos e no formato materia-assunto', () => {
    const ids = topics.map(t => t.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z]+-[a-z0-9-]+$/)
  })

  it('toda matéria tem pelo menos 3 tópicos', () => {
    for (const s of allSubjects) expect(topics.filter(t => t.subject === s).length, s).toBeGreaterThanOrEqual(3)
  })

  it.each(topics.map(t => [t.id, t] as const))('%s está completo e com quiz coerente', (_, t) => {
    expect(allSubjects).toContain(t.subject)
    expect(t.learn.length).toBeGreaterThan(0)
    expect(t.summary.length).toBeGreaterThan(0)
    expect(t.quiz.length).toBeGreaterThanOrEqual(3)
    for (const q of t.quiz) {
      expect(q.options.length, q.q).toBeGreaterThanOrEqual(4)
      expect(new Set(q.options).size, `alternativas repetidas: ${q.q}`).toBe(q.options.length)
      expect(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `gabarito fora das alternativas: ${q.q}`).toBe(true)
      expect(q.why.length, q.q).toBeGreaterThan(0)
    }
  })

  it.each(topics.map(t => [t.id, t] as const))('%s tem LaTeX válido e $ balanceado', (_, t) => {
    for (const s of texts(t)) {
      // "R$" quebraria o texto: o app entende qualquer $ como início de fórmula. Escreva "reais".
      expect(s, s).not.toMatch(/R\$\s?\d/)
      expect((s.match(/\$/g) ?? []).length % 2, `$ sem par: ${s}`).toBe(0)
      for (const f of texParts(s)) expect(() => katex.renderToString(f, { throwOnError: true }), f).not.toThrow()
    }
    for (const f of t.formulas) expect(() => katex.renderToString(f.tex, { throwOnError: true }), f.tex).not.toThrow()
  })
})

describe('catálogo de fórmulas', () => {
  it('ids únicos e LaTeX válido', () => {
    expect(new Set(formulas.map(f => f.id)).size).toBe(formulas.length)
    for (const f of formulas) expect(() => katex.renderToString(f.tex, { throwOnError: true }), f.name).not.toThrow()
  })
})
