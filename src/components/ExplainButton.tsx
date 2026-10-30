import { useState } from 'react'
import Rich from '../lib/Rich'
import { askTutor } from '../lib/ai'
import type { Question } from '../content/topics'

// "Explica de novo": pede ao tutor com IA uma explicação mais simples da questão.
export default function ExplainButton({ q, chosen }: { q: Question; chosen?: number }) {
  const [state, setState] = useState<{ loading?: boolean; text?: string; error?: string }>({})
  const ask = async () => {
    setState({ loading: true })
    setState(await askTutor({ kind: 'explicar', question: q.q, options: q.options, correct: q.options[q.answer], chosen: chosen === undefined ? 'não respondeu' : q.options[chosen], why: q.why }))
  }
  if (state.text) return <div className="mt-3 p-3 rounded-xl border text-sm leading-6 page" style={{ borderColor: 'rgba(56,189,248,.4)', background: 'rgba(56,189,248,.06)' }}><b className="text-sky-300">✦ Tutor:</b> <span className="whitespace-pre-wrap"><Rich t={state.text} /></span></div>
  return <div className="mt-2"><button className="btn-ghost text-xs" onClick={ask} disabled={state.loading}>{state.loading ? 'Pensando…' : '✦ Explica de novo (IA)'}</button>
    {state.error && <p className="text-amber-300 text-xs mt-2 mb-0">{state.error}</p>}</div>
}
