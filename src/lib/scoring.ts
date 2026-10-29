// Regras de pontuação do app, em funções puras (sem React) para poderem ser testadas.
import type { Topic } from '../content/topics'

// ---------- Nota estimada do simulado (inspirada na TRI) ----------
const weight: Record<Topic['level'], number> = { 'Básico': 1, 'Médio': 2, 'Avançado': 3 }
export type SimAnswer = { level: Topic['level']; correct: boolean }

/** Nota de 300 a 1000. Acertos em questões difíceis valem mais, e acertar difíceis errando
 *  fáceis é tratado como incoerência (provável chute), como na TRI. Não é a nota oficial. */
export function estimateScore(answers: SimAnswer[]) {
  if (!answers.length) return { score: 300, hits: 0, coherence: 1 }
  const total = answers.reduce((s, a) => s + weight[a.level], 0)
  const earned = answers.reduce((s, a) => s + (a.correct ? weight[a.level] : 0), 0)
  let pairs = 0, incoherent = 0
  for (const easy of answers) for (const hard of answers) {
    if (weight[hard.level] <= weight[easy.level]) continue
    pairs++
    if (!easy.correct && hard.correct) incoherent++
  }
  const coherence = pairs ? 1 - 0.5 * (incoherent / pairs) : 1
  const score = Math.round(300 + 700 * (earned / total) * coherence)
  return { score, hits: answers.filter(a => a.correct).length, coherence }
}

// ---------- XP, níveis e medalhas ----------
export type Stats = { done: number; correct: number; wrong: number; streak: number; subjectsStudied: number; simulados: number; reviewed: number; essays: number }
export const xpFrom = (s: Stats) => s.done * 20 + s.correct * 10 + s.wrong * 3 + s.simulados * 50 + s.reviewed * 8 + s.essays * 40 + s.streak * 15
/** Nível n começa em 50·(n−1)² XP: os primeiros níveis vêm rápido, os seguintes exigem constância. */
export function levelFrom(xp: number) {
  const level = Math.floor(Math.sqrt(xp / 50)) + 1
  const floor = 50 * (level - 1) ** 2, next = 50 * level ** 2
  return { level, xp, floor, next, progress: (xp - floor) / (next - floor) }
}
export const medals: { id: string; icon: string; name: string; desc: string; won: (s: Stats) => boolean }[] = [
  { id: 'start', icon: '🚀', name: 'Primeiro passo', desc: 'Responda 1 exercício', won: s => s.correct + s.wrong >= 1 },
  { id: 'streak3', icon: '🔥', name: 'Em chamas', desc: '3 dias seguidos', won: s => s.streak >= 3 },
  { id: 'streak7', icon: '⚡', name: 'Imparável', desc: '7 dias seguidos', won: s => s.streak >= 7 },
  { id: 'hits20', icon: '🎯', name: 'Mira certeira', desc: '20 acertos', won: s => s.correct >= 20 },
  { id: 'hits100', icon: '🏆', name: 'Centenário', desc: '100 acertos', won: s => s.correct >= 100 },
  { id: 'topics10', icon: '📚', name: 'Explorador', desc: '10 conteúdos estudados', won: s => s.done >= 10 },
  { id: 'poly', icon: '🧠', name: 'Polímata', desc: 'Estude 6 matérias', won: s => s.subjectsStudied >= 6 },
  { id: 'sim', icon: '📝', name: 'Simulado feito', desc: 'Termine 1 simulado', won: s => s.simulados >= 1 },
  { id: 'review', icon: '🔁', name: 'Aprende com o erro', desc: 'Revise 10 erros', won: s => s.reviewed >= 10 },
  { id: 'essay', icon: '✍️', name: 'Redator', desc: 'Escreva 1 redação', won: s => s.essays >= 1 },
]

// ---------- Revisão espaçada ----------
export const reviewIntervals = [1, 3, 7, 15] // dias até a próxima revisão, a cada acerto seguido
export type ReviewItem = { step: number; due: string }
export const addDays = (day: string, n: number) => { const d = new Date(`${day}T12:00:00`); d.setDate(d.getDate() + n); return d.toLocaleDateString('sv-SE') }
/** Acertou: avança um degrau (ou sai da lista, se já dominou). Errou: volta ao início, amanhã. */
export function nextReview(item: ReviewItem, correct: boolean, today: string): ReviewItem | null {
  if (!correct) return { step: 0, due: addDays(today, 1) }
  if (item.step >= reviewIntervals.length - 1) return null
  return { step: item.step + 1, due: addDays(today, reviewIntervals[item.step + 1]) }
}

// ---------- Plano de estudos ----------
// Peso aproximado de cada matéria no ENEM (número de questões e recorrência), usado para priorizar.
export const subjectPriority: Record<string, number> = { 'Matemática': 10, 'ENEM e vestibulares': 9, 'Português': 9, 'Biologia': 7, 'História': 7, 'Geografia': 7, 'Química': 6, 'Física': 6, 'Filosofia': 4, 'Sociologia': 4, 'Literatura': 4, 'Inglês': 3 }
export type PlanWeek = { start: string; topics: Topic[]; review: boolean }
/** Distribui os tópicos ainda não estudados pelas semanas até a prova, por prioridade.
 *  As 2 últimas semanas ficam reservadas para revisão e simulados. */
export function buildPlan(all: Topic[], done: Record<string, boolean>, today: string, exam: string): PlanWeek[] {
  const days = Math.round((new Date(`${exam}T12:00:00`).getTime() - new Date(`${today}T12:00:00`).getTime()) / 86_400_000)
  if (days <= 0) return []
  const weeks = Math.max(1, Math.ceil(days / 7))
  const studyWeeks = weeks > 3 ? weeks - 2 : weeks
  const pending = all.filter(t => !done[t.id]).sort((a, b) => (subjectPriority[b.subject] ?? 0) - (subjectPriority[a.subject] ?? 0))
  // Intercala matérias: evita uma semana inteira só de Matemática.
  const bySubject = new Map<string, Topic[]>()
  for (const t of pending) bySubject.set(t.subject, [...(bySubject.get(t.subject) ?? []), t])
  const mixed: Topic[] = []
  while (mixed.length < pending.length) for (const list of bySubject.values()) { const t = list.shift(); if (t) mixed.push(t) }
  const perWeek = Math.ceil(mixed.length / studyWeeks)
  return Array.from({ length: weeks }, (_, i) => ({
    start: addDays(today, i * 7),
    topics: i < studyWeeks ? mixed.slice(i * perWeek, (i + 1) * perWeek) : [],
    review: i >= studyWeeks,
  }))
}
