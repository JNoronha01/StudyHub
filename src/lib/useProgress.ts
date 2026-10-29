import { createContext, createElement, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { supabase } from './supabase'
import { useAuth } from './useAuth'
type State = { done: Record<string, boolean>; fav: Record<string, boolean>; answers: Record<string, Record<number, number>>; days: Record<string, boolean> }
const LEGACY_KEY = 'studyhub-progress'
const empty: State = { done: {}, fav: {}, answers: {}, days: {} }
// Cada conta tem a própria chave: num navegador compartilhado, uma pessoa não herda o progresso da outra.
const keyFor = (userId: string | null) => `${LEGACY_KEY}:${userId ?? 'visitante'}`
function read(key: string): State { try { return { ...empty, ...JSON.parse(localStorage.getItem(key) || '{}') } } catch { return empty } }
function write(key: string, s: State) { try { localStorage.setItem(key, JSON.stringify(s)) } catch { /* armazenamento cheio ou bloqueado */ } }
// Data local no formato AAAA-MM-DD.
export const dayKey = (d: Date = new Date()) => d.toLocaleDateString('sv-SE')

// Dias seguidos com atividade, terminando hoje (ou ontem, se ainda não estudou hoje).
export function streakFrom(days: Record<string, boolean>) {
  const d = new Date(); let n = 0
  if (!days[dayKey(d)]) d.setDate(d.getDate() - 1)
  while (days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1) }
  return n
}

// Progresso, favoritos e respostas dos exercícios: salvos neste navegador e sincronizados com a conta.
function useProgressState() {
  const { user } = useAuth()
  const userId = user?.id ?? null
  const key = keyFor(userId)
  const [s, setS] = useState<State>(() => read(key))
  const [syncError, setSyncError] = useState('')
  const keyRef = useRef(key)
  const stateRef = useRef(s)
  stateRef.current = s

  useEffect(() => {
    // A chave antiga era compartilhada entre todas as contas do navegador.
    try { localStorage.removeItem(LEGACY_KEY) } catch { /* armazenamento bloqueado */ }
  }, [])

  useEffect(() => {
    keyRef.current = key
    setS(read(key))
    setSyncError('')
    const f = (e: StorageEvent) => { if (e.key === key) setS(read(key)) }
    window.addEventListener('storage', f)
    return () => window.removeEventListener('storage', f)
  }, [key])

  useEffect(() => {
    if (!supabase || !userId) return
    let active = true
    const loadRemote = async () => {
      const { data, error } = await supabase!.from('progress').select('topic_id, done, favorite').eq('user_id', userId)
      if (error) { setSyncError(`Não foi possível carregar seu progresso: ${error.message}`); return }
      const { data: attempts, error: attemptsError } = await supabase!.from('attempts').select('question_id, answer, created_at').eq('user_id', userId)
      if (attemptsError) { setSyncError(`Não foi possível carregar suas respostas: ${attemptsError.message}`); return }
      if (!active) return
      const remote = (data ?? []).reduce<State>((state, row) => ({
        ...state,
        done: { ...state.done, ...(row.done ? { [row.topic_id]: true } : {}) },
        fav: { ...state.fav, ...(row.favorite ? { [row.topic_id]: true } : {}) },
      }), empty)
      for (const attempt of attempts ?? []) {
        if (attempt.created_at) remote.days = { ...remote.days, [dayKey(new Date(attempt.created_at))]: true }
        const separator = attempt.question_id.lastIndexOf(':')
        if (separator < 1 || typeof attempt.answer !== 'number') continue
        const topicId = attempt.question_id.slice(0, separator)
        const question = Number(attempt.question_id.slice(separator + 1))
        remote.answers = { ...remote.answers, [topicId]: { ...remote.answers[topicId], [question]: attempt.answer } }
      }
      setS(current => {
        const merged = { done: { ...current.done, ...remote.done }, fav: { ...current.fav, ...remote.fav }, answers: { ...current.answers, ...remote.answers }, days: { ...current.days, ...remote.days } }
        write(keyRef.current, merged)
        return merged
      })
    }
    void loadRemote()
    return () => { active = false }
  }, [userId])

  const save = useCallback((fn: (p: State) => State) => setS(p => {
    const n = fn(p)
    write(keyRef.current, n)
    return n
  }), [])
  // Envia só o tópico alterado, em vez de todas as linhas a cada mudança.
  const syncTopic = async (topic_id: string, done: boolean, favorite: boolean) => {
    if (!supabase || !userId) return
    const { error } = await supabase.from('progress').upsert({ user_id: userId, topic_id, done, favorite }, { onConflict: 'user_id,topic_id' })
    if (error) setSyncError(`Não foi possível sincronizar o progresso: ${error.message}`)
  }
  const today = () => ({ ...stateRef.current.days, [dayKey()]: true })

  return {
    ...s,
    syncError,
    streak: streakFrom(s.days),
    toggleDone: (id: string) => {
      const done = !stateRef.current.done[id]; const days = done ? today() : stateRef.current.days
      save(p => ({ ...p, days, done: { ...p.done, [id]: done } }))
      void syncTopic(id, done, !!stateRef.current.fav[id])
    },
    toggleFav: (id: string) => {
      const favorite = !stateRef.current.fav[id]
      save(p => ({ ...p, fav: { ...p.fav, [id]: favorite } }))
      void syncTopic(id, !!stateRef.current.done[id], favorite)
    },
    answer: async (id: string, q: number, opt: number, correct: boolean) => {
      const days = today()
      save(p => ({ ...p, days, answers: { ...p.answers, [id]: { ...p.answers[id], [q]: opt } } }))
      if (!supabase || !userId) return
      const { error } = await supabase.from('attempts').upsert({ user_id: userId, question_id: `${id}:${q}`, answer: opt, correct }, { onConflict: 'user_id,question_id' })
      if (error) setSyncError(`Não foi possível sincronizar a resposta: ${error.message}`)
    },
    resetAnswers: (id: string) => {
      save(p => { const a = { ...p.answers }; delete a[id]; return { ...p, answers: a } })
      if (supabase && userId) void supabase.from('attempts').delete().eq('user_id', userId).like('question_id', `${id}:%`)
    },
  }
}

const ProgressContext = createContext<ReturnType<typeof useProgressState> | null>(null)
// Um único estado de progresso para o app inteiro (antes, cada página tinha sua cópia e sincronizava sozinha).
export function ProgressProvider({ children }: { children: ReactNode }) {
  return createElement(ProgressContext.Provider, { value: useProgressState() }, children)
}
export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress precisa estar dentro de <ProgressProvider>')
  return ctx
}
