import { useCallback, useEffect, useRef, useState } from 'react'
import { useAuth } from './useAuth'

const EVENT = 'studyhub-storage'

// Estado salvo no navegador, separado por conta (mesma regra do progresso: nada vaza entre usuários).
// Vários componentes podem usar a mesma chave: quem salva avisa os outros por um evento, e todos se atualizam.
export function useUserStorage<T extends object>(name: string, initial: T) {
  const { user } = useAuth()
  const key = `studyhub-${name}:${user?.id ?? 'visitante'}`
  // `initial` fica fora das dependências de propósito: só a troca de conta (key) deve reler o valor.
  const read = useCallback((): T => { try { const raw = localStorage.getItem(key); return raw ? { ...initial, ...JSON.parse(raw) } : initial } catch { return initial } }, [key])
  const [value, setValue] = useState<T>(read)
  const id = useRef(Math.random())
  const dirty = useRef(false)

  useEffect(() => {
    setValue(read())
    const onChange = (e: Event) => { const d = (e as CustomEvent).detail; if (d.key === key && d.from !== id.current) setValue(read()) }
    window.addEventListener(EVENT, onChange)
    return () => window.removeEventListener(EVENT, onChange)
  }, [key, read])

  // Grava e avisa os outros só depois do render, nunca durante (efeitos colaterais ficam fora do setState).
  useEffect(() => {
    if (!dirty.current) return
    dirty.current = false
    try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* armazenamento cheio ou bloqueado */ }
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { key, from: id.current } }))
  }, [value, key])

  const save = useCallback((next: T | ((prev: T) => T)) => {
    dirty.current = true
    setValue(prev => (typeof next === 'function' ? (next as (p: T) => T)(prev) : next))
  }, [])
  return [value, save] as const
}
