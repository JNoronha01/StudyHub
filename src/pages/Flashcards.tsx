import { useMemo, useState } from 'react'
import { allSubjects, topics } from '../content/topics'
import Rich from '../lib/Rich'
import Tex from '../lib/Tex'
import { shuffle } from '../lib/questions'
import { useUserStorage } from '../lib/useUserStorage'

// Cartões de memorização: perguntas dos exercícios e fórmulas de cada tópico.
type Card = { id: string; subject: string; topic: string; front: string; back: string; tex?: string }
const cards: Card[] = topics.flatMap(t => [
  ...t.formulas.map((f, i) => ({ id: `${t.id}:f${i}`, subject: t.subject, topic: t.title, front: `Qual é a fórmula de: ${f.name}?`, back: f.note, tex: f.tex })),
  ...t.quiz.map((q, i) => ({ id: `${t.id}:q${i}`, subject: t.subject, topic: t.title, front: q.q, back: `${q.options[q.answer]}. ${q.why}` })),
])

export default function Flashcards() {
  const [subject, setSubject] = useState(allSubjects[0])
  const [deck, setDeck] = useState<Card[] | null>(null)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useUserStorage<{ ids: Record<string, boolean> }>('flashcards', { ids: {} })
  const pool = useMemo(() => cards.filter(c => c.subject === subject), [subject])
  const mastered = pool.filter(c => known.ids[c.id]).length

  const start = (onlyNew: boolean) => { setDeck(shuffle(onlyNew ? pool.filter(c => !known.ids[c.id]) : pool).slice(0, 20)); setPos(0); setFlipped(false) }
  const rate = (ok: boolean) => { const c = deck![pos]; setKnown(k => ({ ids: { ...k.ids, [c.id]: ok } })); setFlipped(false); setTimeout(() => setPos(pos + 1), 150) }

  if (deck && pos < deck.length) {
    const c = deck[pos]
    return <div className="page max-w-2xl mx-auto mt-8">
      <div className="flex items-center gap-3 mb-4"><span className="tag">{pos + 1}/{deck.length}</span><div className="bar flex-1"><span style={{ width: `${(pos / deck.length) * 100}%` }} /></div><button className="btn-ghost text-xs" onClick={() => setDeck(null)}>Sair</button></div>
      <div className={`flip ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)} role="button" tabIndex={0} aria-label="Virar cartão" onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && setFlipped(!flipped)}>
        <div className="flip-inner" key={c.id}>
          <div className="flip-face"><p className="eyebrow m-0">{c.subject.toUpperCase()} · {c.topic.toUpperCase()}</p><p className="text-xl leading-8 m-0"><Rich t={c.front} /></p><small className="text-slate-500">Toque para ver a resposta</small></div>
          <div className="flip-face flip-back">{c.tex && <div className="text-2xl overflow-x-auto"><Tex f={c.tex} /></div>}<p className="text-base leading-7 m-0 text-slate-100"><Rich t={c.back} /></p></div>
        </div></div>
      <div className={`flex gap-3 justify-center mt-6 transition-opacity ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button className="btn-ghost" onClick={() => rate(false)}>😕 Ainda não sei</button><button className="btn" onClick={() => rate(true)}>😎 Já sei</button></div>
    </div>
  }

  return <div className="page max-w-4xl">
    <h1 className="page-title">Flash<span>cards</span></h1>
    <p className="page-sub">Memorização ativa: tente lembrar a resposta antes de virar o cartão. Os que você ainda não sabe voltam nas próximas rodadas.</p>
    {deck && <div className="card mb-4 page" style={{ borderColor: 'rgba(52,211,153,.4)' }}>🎉 Rodada concluída! Que tal mais uma?</div>}
    <div className="flex flex-wrap gap-2 mb-5">{allSubjects.map(s => <button key={s} className={`btn-ghost ${subject === s ? 'on' : ''}`} onClick={() => setSubject(s)}>{s}</button>)}</div>
    <div className="card grid sm:grid-cols-[1fr_auto] gap-4 items-center">
      <div><h2 className="m-0 text-lg font-bold">{subject}</h2><p className="text-slate-400 text-sm mt-1 mb-3">{pool.length} cartões · {mastered} dominados</p><div className="bar"><span style={{ width: `${pool.length ? (mastered / pool.length) * 100 : 0}%` }} /></div></div>
      <div className="flex flex-wrap gap-2"><button className="btn" disabled={!pool.length || mastered === pool.length} onClick={() => start(true)}>Estudar novos →</button><button className="btn-ghost" disabled={!pool.length} onClick={() => start(false)}>Todos</button></div>
    </div>
  </div>
}
