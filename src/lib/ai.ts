import { supabase } from './supabase'

export type TutorRequest =
  | { kind: 'explicar'; question: string; options: string[]; correct: string; chosen: string; why: string }
  | { kind: 'redacao'; tema: string; texto: string }

// Chama a Edge Function "tutor". Devolve o texto da IA ou uma mensagem de erro amigável.
export async function askTutor(req: TutorRequest): Promise<{ text?: string; error?: string; limit?: boolean }> {
  if (!supabase) return { error: 'Configure o Supabase para usar o tutor.' }
  const { data, error } = await supabase.functions.invoke('tutor', { body: req })
  if (!error) return data
  const context = 'context' in error && error.context instanceof Response ? error.context : null
  const detail = context ? await context.json().catch(() => null) : null
  return { error: detail?.error ?? 'O tutor ainda não está disponível. (A função "tutor" precisa ser publicada no Supabase.)', limit: detail?.limit }
}
