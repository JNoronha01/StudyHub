import { useCallback, useEffect, useState } from 'react'
type State = { done: Record<string, boolean>; fav: Record<string, boolean>; answers: Record<string, Record<number, number>> }
const KEY = 'studyhub-progress'
const empty: State = { done: {}, fav: {}, answers: {} }
function read(): State { try { return { ...empty, ...JSON.parse(localStorage.getItem(KEY) || '{}') } } catch { return empty } }
// Progresso, favoritos e respostas dos exercícios, salvos neste navegador.
export function useProgress() {
  const [s, setS] = useState<State>(read)
  const save = useCallback((fn: (p: State) => State) => setS(p => { const n = fn(p); try { localStorage.setItem(KEY, JSON.stringify(n)) } catch { /* armazenamento cheio ou bloqueado */ } return n }), [])
  useEffect(() => { const f = (e: StorageEvent) => { if (e.key === KEY) setS(read()) }; window.addEventListener('storage', f); return () => window.removeEventListener('storage', f) }, [])
  return {
    ...s,
    toggleDone: (id: string) => save(p => ({ ...p, done: { ...p.done, [id]: !p.done[id] } })),
    toggleFav: (id: string) => save(p => ({ ...p, fav: { ...p.fav, [id]: !p.fav[id] } })),
    answer: (id: string, q: number, opt: number) => save(p => ({ ...p, answers: { ...p.answers, [id]: { ...p.answers[id], [q]: opt } } })),
    resetAnswers: (id: string) => save(p => { const a = { ...p.answers }; delete a[id]; return { ...p, answers: a } }),
  }
}
