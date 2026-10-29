import { createClient } from '@supabase/supabase-js'
const configuredUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const key = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()
const url = configuredUrl?.replace(/\/+$/, '')
export const supabase = url && key ? createClient(url, key) : null
export const hasSupabase = !!supabase
