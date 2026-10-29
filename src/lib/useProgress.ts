import { useCallback, useEffect, useRef, useState } from 'react'
import { supabase } from './supabase'
type State = { done: Record<string, boolean>; fav: Record<string, boolean>; answers: Record<string, Record<number, number>> }
const KEY = 'studyhub-progress'
const empty: State = { done: {}, fav: {}, answers: {} }
function read(): State { try { return { ...empty, ...JSON.parse(localStorage.getItem(KEY) || '{}') } } catch { return empty } }
// Progresso, favoritos e respostas dos exercícios, salvos neste navegador.
export function useProgress() {
  const [s, setS] = useState<State>(read)
  const [syncError, setSyncError] = useState('')
  const userId = useRef<string | null>(null)
  const syncProgress = useCallback(async (next: State) => {
    if (!supabase || !userId.current) return
    const rows = Object.keys({ ...next.done, ...next.fav }).map(topic_id => ({
      user_id: userId.current, topic_id, done: !!next.done[topic_id], favorite: !!next.fav[topic_id],
    }))
    const { error } = await supabase.from('progress').upsert(rows, { onConflict: 'user_id,topic_id' })
    if (error) setSyncError(`Não foi possível sincronizar o progresso: ${error.message}`)
  }, [])
  const syncAttempt = useCallback(async (topicId: string, question: number, answer: number, correct: boolean) => {
    if (!supabase || !userId.current) return
    const { error } = await supabase.from('attempts').upsert({
      user_id: userId.current, question_id: `${topicId}:${question}`, answer, correct,
    }, { onConflict: 'user_id,question_id' })
    if (error) setSyncError(`Não foi possível sincronizar a resposta: ${error.message}`)
  }, [])
  const save = useCallback((fn: (p: State) => State) => setS(p => {
    const n = fn(p)
    try { localStorage.setItem(KEY, JSON.stringify(n)) } catch { /* armazenamento cheio ou bloqueado */ }
    return n
  }), [])
  const updateAndSync = useCallback((fn: (p: State) => State) => {
    setS(previous => fn(previous))
  }, [])
  useEffect(() => {
    if (!supabase) return
    let active = true
    const loadRemote = async (id: string) => {
      userId.current = id
      const { data, error } = await supabase!.from('progress').select('topic_id, done, favorite').eq('user_id', id)
      if (error) { setSyncError(`Não foi possível carregar seu progresso: ${error.message}`); return }
      const { data: attempts, error: attemptsError } = await supabase!.from('attempts').select('question_id, answer').eq('user_id', id)
      if (attemptsError) { setSyncError(`Não foi possível carregar suas respostas: ${attemptsError.message}`); return }
      if (!active) return
      const remote = (data ?? []).reduce<State>((state, row) => ({
        done: { ...state.done, ...(row.done ? { [row.topic_id]: true } : {}) },
        fav: { ...state.fav, ...(row.favorite ? { [row.topic_id]: true } : {}) },
        answers: state.answers,
      }), empty)
      setS(current => {
        const remoteAnswers = (attempts ?? []).reduce<Record<string, Record<number, number>>>((answers, attempt) => {
          const separator = attempt.question_id.lastIndexOf(':')
          if (separator < 1 || typeof attempt.answer !== 'number') return answers
          const topicId = attempt.question_id.slice(0, separator)
          const question = Number(attempt.question_id.slice(separator + 1))
          return { ...answers, [topicId]: { ...answers[topicId], [question]: attempt.answer } }
        }, {})
        const merged = { done: { ...current.done, ...remote.done }, fav: { ...current.fav, ...remote.fav }, answers: { ...current.answers, ...remoteAnswers } }
        localStorage.setItem(KEY, JSON.stringify(merged))
        return merged
      })
    }
    supabase.auth.getUser().then(({ data, error }) => {
      if (error) setSyncError(`Não foi possível verificar a sessão: ${error.message}`)
      else if (data.user) loadRemote(data.user.id)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') userId.current = null
      if (session?.user) loadRemote(session.user.id)
    })
    const f = (e: StorageEvent) => { if (e.key === KEY) setS(read()) }
    window.addEventListener('storage', f)
    return () => { active = false; listener.subscription.unsubscribe(); window.removeEventListener('storage', f) }
  }, [])
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* armazenamento cheio ou bloqueado */ }
    void syncProgress(s)
  }, [s, syncProgress])
  return {
    ...s,
    syncError,
    toggleDone: (id: string) => updateAndSync(p => ({ ...p, done: { ...p.done, [id]: !p.done[id] } })),
    toggleFav: (id: string) => updateAndSync(p => ({ ...p, fav: { ...p.fav, [id]: !p.fav[id] } })),
    answer: (id: string, q: number, opt: number, correct: boolean) => {
      save(p => ({ ...p, answers: { ...p.answers, [id]: { ...p.answers[id], [q]: opt } } }))
      void syncAttempt(id, q, opt, correct)
    },
    resetAnswers: (id: string) => {
      save(p => { const a = { ...p.answers }; delete a[id]; return { ...p, answers: a } })
      if (supabase && userId.current) void supabase.from('attempts').delete().eq('user_id', userId.current).like('question_id', `${id}:%`)
    },
  }
}
