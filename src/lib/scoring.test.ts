import { describe, expect, it } from 'vitest'
import { topics } from '../content/topics'
import { analyzeEssay } from './essay'
import { addDays, buildPlan, estimateScore, levelFrom, nextReview, xpFrom } from './scoring'

describe('nota estimada do simulado', () => {
  const B = 'Básico', M = 'Médio', A = 'Avançado'
  it('vai de 300 (nenhum acerto) a 1000 (todos)', () => {
    const qs = [B, M, A] as const
    expect(estimateScore(qs.map(level => ({ level, correct: false }))).score).toBe(300)
    expect(estimateScore(qs.map(level => ({ level, correct: true }))).score).toBe(1000)
  })
  it('pune incoerência: mesmos acertos, nota menor se acertou só as difíceis', () => {
    const coerente = estimateScore([{ level: B, correct: true }, { level: M, correct: true }, { level: A, correct: false }, { level: A, correct: false }])
    const chute = estimateScore([{ level: B, correct: false }, { level: M, correct: false }, { level: A, correct: true }, { level: A, correct: true }])
    expect(coerente.hits).toBe(chute.hits)
    expect(chute.coherence).toBeLessThan(coerente.coherence)
  })
})

describe('XP e níveis', () => {
  it('nível 1 começa em 0 XP e o nível 2 em 50 XP', () => {
    expect(levelFrom(0).level).toBe(1)
    expect(levelFrom(49).level).toBe(1)
    expect(levelFrom(50).level).toBe(2)
    expect(levelFrom(200).level).toBe(3)
  })
  it('estudar e acertar rende XP', () => {
    const base = { done: 0, correct: 0, wrong: 0, streak: 0, subjectsStudied: 0, simulados: 0, reviewed: 0, essays: 0 }
    expect(xpFrom({ ...base, done: 1, correct: 2 })).toBe(40)
  })
})

describe('revisão espaçada', () => {
  it('acerto avança o intervalo; erro volta para amanhã; dominado sai da lista', () => {
    expect(nextReview({ step: 0, due: '2026-01-01' }, true, '2026-01-01')).toEqual({ step: 1, due: '2026-01-04' })
    expect(nextReview({ step: 2, due: '2026-01-01' }, false, '2026-01-01')).toEqual({ step: 0, due: '2026-01-02' })
    expect(nextReview({ step: 3, due: '2026-01-01' }, true, '2026-01-01')).toBeNull()
  })
  it('soma dias atravessando o mês', () => { expect(addDays('2026-01-30', 3)).toBe('2026-02-02') })
})

describe('plano de estudos', () => {
  it('distribui todos os tópicos pendentes e reserva as 2 últimas semanas para revisão', () => {
    const plan = buildPlan(topics, {}, '2026-01-01', '2026-03-01')
    const planned = plan.flatMap(w => w.topics)
    expect(planned.length).toBe(topics.length)
    expect(new Set(planned.map(t => t.id)).size).toBe(topics.length)
    expect(plan.slice(-2).every(w => w.review && w.topics.length === 0)).toBe(true)
  })
  it('ignora o que já foi estudado e não gera plano para data passada', () => {
    const plan = buildPlan(topics, { [topics[0].id]: true }, '2026-01-01', '2026-03-01')
    expect(plan.flatMap(w => w.topics).some(t => t.id === topics[0].id)).toBe(false)
    expect(buildPlan(topics, {}, '2026-03-01', '2026-01-01')).toEqual([])
  })
})

describe('análise da redação', () => {
  const conclusao = 'Portanto, cabe ao Ministério da Educação incluir a educação midiática no currículo, por meio de oficinas práticas de checagem de fatos realizadas em parceria com agências de verificação em todas as escolas públicas do país, a fim de formar cidadãos capazes de identificar conteúdos enganosos e de agir com responsabilidade.'
  it('encontra os 5 elementos da proposta no último parágrafo', () => {
    const a = analyzeEssay(`Introdução.\n\nDesenvolvimento um.\n\nDesenvolvimento dois.\n\n${conclusao}`)
    expect(a.paragraphs).toBe(4)
    expect(a.proposal).toEqual({ agente: true, acao: true, meio: true, finalidade: true, detalhamento: true })
  })
  it('aponta informalidade e texto curto', () => {
    const a = analyzeEssay('Eu acho que a gente precisa mudar isso.')
    expect(a.warnings.some(w => w.includes('informalidade'))).toBe(true)
    expect(a.warnings.some(w => w.includes('curto'))).toBe(true)
  })
})
