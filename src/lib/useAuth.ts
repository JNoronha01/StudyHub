import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from './supabase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(Boolean(supabase))

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    let active = true
    supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setUser(data.user)
        setLoading(false)
      }
    })
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [])

  return { user, loading, signOut: () => supabase?.auth.signOut() }
}
