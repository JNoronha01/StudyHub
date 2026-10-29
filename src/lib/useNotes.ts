import { useEffect, useState, useCallback, useRef } from 'react'
import { supabase } from './supabase'
import { useAuth } from './useAuth'
export type Note = { id: string; title: string; body: string; subject: string|null; pinned: boolean; favorite: boolean; updated_at: string }
export type SaveStatus = 'idle' | 'pending' | 'saving' | 'saved'
const KEY = 'studyhub-notes'
const SAVE_DELAY = 600
export function useNotes() {
  const { user } = useAuth()
  const [notes, setNotes] = useState<Note[]>([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(''); const [status, setStatus] = useState<SaveStatus>('idle')
  // Alterações ainda não enviadas, agrupadas por nota: digitar não dispara uma requisição por tecla.
  const pending = useRef<Record<string, Partial<Note>>>({})
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})
  const load = useCallback(async () => {
    setLoading(true)
    if (supabase && user) { const { data, error } = await supabase.from('notes').select('*').order('updated_at', { ascending: false }); if (error) setError(error.message); else setNotes(data as Note[]) }
    else setNotes(JSON.parse(localStorage.getItem(KEY) || '[]'))
    setLoading(false)
  }, [user])
  useEffect(() => { load() }, [load])
  const flush = useCallback(async (id: string) => {
    clearTimeout(timers.current[id]); delete timers.current[id]
    const patch = pending.current[id]; delete pending.current[id]
    if (!patch || !supabase) return
    setStatus('saving')
    const { error } = await supabase.from('notes').update(patch).eq('id', id)
    if (error) setError(error.message)
    setStatus(Object.keys(pending.current).length ? 'pending' : error ? 'idle' : 'saved')
  }, [])
  // Ao sair da página, envia o que ficou pendente.
  useEffect(() => () => { Object.keys(pending.current).forEach(id => { void flush(id) }) }, [flush])
  const persistLocal = (fn: (n: Note[]) => Note[]) => setNotes(ns => { const n = fn(ns); localStorage.setItem(KEY, JSON.stringify(n)); return n })
  const add = async () => { const base = { title: 'Nova nota', body: '', subject: null, pinned: false, favorite: false }
    if (supabase && user) { const { data, error } = await supabase.from('notes').insert(base).select().single(); if (error) setError(error.message); else setNotes(ns => [data as Note, ...ns]) }
    else persistLocal(ns => [{ ...base, id: crypto.randomUUID(), updated_at: new Date().toISOString() }, ...ns]) }
  const update = (id: string, patch: Partial<Note>) => { const p = { ...patch, updated_at: new Date().toISOString() }
    if (supabase && user) {
      setNotes(ns => ns.map(n => n.id === id ? { ...n, ...p } : n))
      pending.current[id] = { ...pending.current[id], ...p }
      clearTimeout(timers.current[id]); timers.current[id] = setTimeout(() => { void flush(id) }, SAVE_DELAY)
      setStatus('pending')
    }
    else persistLocal(ns => ns.map(n => n.id === id ? { ...n, ...p } : n)) }
  const remove = async (id: string) => { clearTimeout(timers.current[id]); delete timers.current[id]; delete pending.current[id]
    if (supabase && user) { const { error } = await supabase.from('notes').delete().eq('id', id); if (error) setError(error.message); else setNotes(ns => ns.filter(n => n.id !== id)) } else persistLocal(ns => ns.filter(n => n.id !== id)) }
  return { notes, loading, error, status, add, update, remove }
}
