import { topics } from '../content/topics'
import { byId } from './questions'
import { levelFrom, medals, xpFrom, type Stats } from './scoring'
import { useProgress } from './useProgress'
import { useUserStorage } from './useUserStorage'

// Contadores de atividades que não ficam no progresso (simulados, revisões, redações).
export type Activity = { simulados: number; reviewed: number; essays: number }
export function useActivity() { return useUserStorage<Activity>('atividade', { simulados: 0, reviewed: 0, essays: 0 }) }

export function useStats() {
  const p = useProgress()
  const [activity, setActivity] = useActivity()
  let correct = 0, wrong = 0
  for (const [topicId, answers] of Object.entries(p.answers)) for (const [i, opt] of Object.entries(answers)) {
    const q = byId.get(`${topicId}:${i}`)
    if (q) { if (q.answer === opt) correct++; else wrong++ }
  }
  const studied = topics.filter(t => p.done[t.id] || p.answers[t.id])
  const stats: Stats = { done: topics.filter(t => p.done[t.id]).length, correct, wrong, streak: p.streak, subjectsStudied: new Set(studied.map(t => t.subject)).size, ...activity }
  const level = levelFrom(xpFrom(stats))
  const won = medals.filter(m => m.won(stats))
  const bump = (k: keyof Activity) => setActivity(a => ({ ...a, [k]: a[k] + 1 }))
  return { stats, level, won, bump }
}
