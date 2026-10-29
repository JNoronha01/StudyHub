import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rich from '../lib/Rich'
import ExplainButton from '../components/ExplainButton'
import { byId } from '../lib/questions'
import { nextReview, reviewIntervals, type ReviewItem } from '../lib/scoring'
import { dayKey, useProgress } from '../lib/useProgress'
import { useStats } from '../lib/useStats'
import { useUserStorage } from '../lib/useUserStorage'

// Caderno de erros com revisão espaçada: cada erro volta em 1, 3, 7 e 15 dias até ser dominado.
export function useReviews() {
  const [store, setStore] = useUserStorage<{ items: Record<string, ReviewItem> }>('revisao', { items: {} })
  const addWrong = (ids: string[]) => setStore(s => {
    const items = { ...s.items }
    for (const id of ids) if (!items[id]) items[id] = { step: 0, due: dayKey() }
    return { items }
  })
  const answer = (id: string, correct: boolean) => setStore(s => {
    const items = { ...s.items }
    const next = items[id] ? nextReview(items[id], correct, dayKey()) : null
    if (next) items[id] = next; else delete items[id]
    return { items }
  })
  return { items: store.items, addWrong, answer }
}

export default function Revisao() {
  const p = useProgress()
  const { items, addWrong, answer } = useReviews()
  const { bump } = useStats()
  const [queue, setQueue] = useState<string[] | null>(null)
  const [pos, setPos] = useState(0)
  const [chosen, setChosen] = useState<number>()
  const today = dayKey()

  // Erros feitos na Central de Estudos entram automaticamente no caderno.
  useEffect(() => {
    const wrong = Object.entries(p.answers).flatMap(([topicId, a]) => Object.entries(a).filter(([i, opt]) => byId.get(`${topicId}:${i}`)?.answer !== opt).map(([i]) => `${topicId}:${i}`))
    const missing = wrong.filter(id => byId.has(id) && !items[id])
    if (missing.length) addWrong(missing)
  }, [p.answers]) // reage só a respostas novas; items e addWrong mudam a cada gravação

  const entries = Object.entries(items).filter(([id]) => byId.has(id))
  const due = entries.filter(([, it]) => it.due <= today).map(([id]) => id)
  const upcoming = entries.filter(([, it]) => it.due > today).sort((a, b) => a[1].due.localeCompare(b[1].due))

  if (queue && pos < queue.length) {
    const q = byId.get(queue[pos])!
    const answered = chosen !== undefined
    const pick = (j: number) => { if (answered) return; setChosen(j); answer(q.id, j === q.answer); bump('reviewed') }
    return <div className="page max-w-3xl mt-6">
      <div className="flex items-center gap-3 mb-4"><span className="tag">Revisão {pos + 1}/{queue.length}</span><div className="bar flex-1"><span style={{ width: `${(pos / queue.length) * 100}%` }} /></div></div>
      <div key={q.id} className="card page"><p className="text-brand text-sm m-0">{q.topic.subject} · {q.topic.title}</p><p className="text-lg leading-8 mt-2"><Rich t={q.q} /></p>
        <div className="grid gap-2 mt-3">{q.options.map((o, j) => <button key={j} onClick={() => pick(j)} disabled={answered} className={`text-left p-3 rounded-xl border transition-all ${!answered ? 'border-line hover:border-brand' : j === q.answer ? 'border-green-500 bg-[rgba(52,211,153,.1)]' : chosen === j ? 'border-red-500 bg-[rgba(248,113,113,.1)]' : 'border-line opacity-60'}`} style={{ background: !answered ? 'transparent' : undefined, color: 'inherit' }}><Rich t={o} /></button>)}</div>
        {answered && <div className="page mt-4"><p className="m-0"><b className={chosen === q.answer ? 'text-green-400' : 'text-red-400'}>{chosen === q.answer ? 'Boa! Esse erro está sendo superado.' : 'Ainda não. Ela volta amanhã.'}</b> <Rich t={q.why} /></p>
          <ExplainButton q={q} chosen={chosen} />
          <button className="btn mt-4" onClick={() => { setChosen(undefined); setPos(pos + 1) }}>{pos + 1 < queue.length ? 'Próxima →' : 'Concluir'}</button></div>}
      </div></div>
  }

  return <div className="page max-w-4xl">
    <h1 className="page-title">Caderno de <span>erros</span></h1>
    <p className="page-sub">Quem passa com nota alta não estuda mais: estuda os próprios erros. Cada questão errada volta em {reviewIntervals.join(', ')} dias até você dominá-la.</p>
    {queue && <div className="card mb-4 page" style={{ borderColor: 'rgba(52,211,153,.4)' }}>🎉 Revisão concluída! Volte amanhã para a próxima rodada.</div>}
    <div className="grid sm:grid-cols-3 gap-3 stagger">
      <div className="card"><small className="text-slate-400">Para revisar hoje</small><div className="big-number mt-1">{due.length}</div></div>
      <div className="card"><small className="text-slate-400">Agendadas</small><div className="big-number mt-1">{upcoming.length}</div></div>
      <div className="card flex flex-col justify-center gap-2"><button className="btn" disabled={!due.length} onClick={() => { setQueue(due); setPos(0); setChosen(undefined) }}>{due.length ? `Revisar ${due.length} agora →` : 'Nada para hoje ✓'}</button><Link to="/simulado" className="text-link text-center">Fazer um simulado</Link></div>
    </div>
    {!entries.length && <div className="card mt-4 text-slate-300">Seu caderno está vazio. Resolva exercícios na <Link className="text-link" to="/estudos">Central de Estudos</Link> ou faça um <Link className="text-link" to="/simulado">simulado</Link>: os erros aparecem aqui.</div>}
    {upcoming.length > 0 && <div className="card mt-4"><p className="eyebrow mb-3">PRÓXIMAS REVISÕES</p><div className="grid gap-2">{upcoming.slice(0, 8).map(([id, it]) => { const q = byId.get(id)!; return <div key={id} className="flex justify-between gap-3 text-sm"><span className="text-slate-300 truncate">{q.topic.subject} · {q.topic.title}</span><span className="tag shrink-0">{it.due.split('-').reverse().slice(0, 2).join('/')}</span></div> })}</div></div>}
  </div>
}
