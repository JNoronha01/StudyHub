import { topics, type Question, type Topic } from '../content/topics'

// Banco único de questões, montado a partir dos exercícios de cada tópico.
export type BankQuestion = Question & { id: string; topic: Topic; index: number }
export const bank: BankQuestion[] = topics.flatMap(topic => topic.quiz.map((q, index) => ({ ...q, id: `${topic.id}:${index}`, topic, index })))
export const byId = new Map(bank.map(q => [q.id, q]))

// As quatro grandes áreas do ENEM.
export const areas = {
  'Linguagens': ['Português', 'Literatura', 'Inglês'],
  'Ciências Humanas': ['História', 'Geografia', 'Filosofia', 'Sociologia'],
  'Ciências da Natureza': ['Física', 'Química', 'Biologia'],
  'Matemática': ['Matemática'],
} as const
export type Area = keyof typeof areas
export const areaOf = (subject: string) => (Object.keys(areas) as Area[]).find(a => (areas[a] as readonly string[]).includes(subject))

export function shuffle<T>(list: T[], random = Math.random): T[] {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}
