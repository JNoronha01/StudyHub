import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Rich from '../lib/Rich'
import { areaOf, areas, bank, shuffle, type Area, type BankQuestion } from '../lib/questions'
import { estimateScore } from '../lib/scoring'
import { useReviews } from './Revisao'
import { useStats } from '../lib/useStats'
import { useUserStorage } from '../lib/useUserStorage'
import { dayKey } from '../lib/useProgress'

type Phase = 'setup' | 'running' | 'done'
type History = { list: { date: string; area: string; score: number; hits: number; total: number }[] }
const SECONDS_PER_QUESTION = 180 // o ENEM dá cerca de 3 minutos por questão

export default function Simulado() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [area, setArea] = useState<Area | 'Todas'>('Todas')
  const [size, setSize] = useState(10)
  const [questions, setQuestions] = useState<BankQuestion[]>([])
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [current, setCurrent] = useState(0)
  const [left, setLeft] = useState(0)
  const [history, setHistory] = useUserStorage<History>('simulados', { list: [] })
  const { addWrong } = useReviews()
  const { bump } = useStats()

  const pool = useMemo(() => bank.filter(q => area === 'Todas' ? areaOf(q.topic.subject) : areaOf(q.topic.subject) === area), [area])
  const start = () => { const qs = shuffle(pool).slice(0, size); setQuestions(qs); setAnswers({}); setCurrent(0); setLeft(qs.length * SECONDS_PER_QUESTION); setPhase('running') }
  const finish = () => {
    setPhase('done')
    const result = estimateScore(questions.map((q, i) => ({ level: q.topic.level, correct: answers[i] === q.answer })))
    setHistory(h => ({ list: [{ date: dayKey(), area, score: result.score, hits: result.hits, total: questions.length }, ...h.list].slice(0, 20) }))
    addWrong(questions.filter((q, i) => answers[i] !== q.answer).map(q => q.id))
    bump('simulados')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (phase !== 'running') return
    if (left <= 0) { finish(); return }
    const t = setTimeout(() => setLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, left]) // só o relógio dispara este efeito; finish sempre lê o estado atual

  if (phase === 'running') return <Running questions={questions} answers={answers} setAnswers={setAnswers} current={current} setCurrent={setCurrent} left={left} finish={finish} />
  if (phase === 'done') return <Result questions={questions} answers={answers} restart={() => setPhase('setup')} />

  return <div className="page max-w-4xl">
    <h1 className="page-title">Simulado <span>ENEM</span></h1>
    <p className="page-sub">Treine no ritmo da prova: 3 minutos por questão, nota estimada no estilo da TRI e correção comentada. Seus erros vão direto para a revisão.</p>
    <div className="card grid gap-5">
      <div><p className="eyebrow mb-2">ÁREA</p><div className="flex flex-wrap gap-2">{(['Todas', ...Object.keys(areas)] as const).map(a => <button key={a} className={`btn-ghost ${area === a ? 'on' : ''}`} onClick={() => setArea(a as Area | 'Todas')}>{a}</button>)}</div></div>
      <div><p className="eyebrow mb-2">QUANTIDADE</p><div className="flex flex-wrap gap-2">{[10, 20, 45].map(n => <button key={n} className={`btn-ghost ${size === n ? 'on' : ''}`} onClick={() => setSize(n)}>{n} questões · {Math.round(n * 3)} min</button>)}</div>
        <small className="text-slate-500 block mt-2">{pool.length} questões disponíveis nesta área{pool.length < size ? `: o simulado terá ${pool.length}` : ''}.</small></div>
      <button className="btn w-fit" onClick={start} disabled={!pool.length}>Começar simulado →</button>
    </div>
    {history.list.length > 0 && <div className="card mt-4"><p className="eyebrow mb-3">SEUS ÚLTIMOS SIMULADOS</p><Sparkline values={history.list.map(h => h.score).reverse()} />
      <div className="grid gap-2 mt-3">{history.list.slice(0, 5).map((h, i) => <div key={i} className="flex justify-between text-sm text-slate-300"><span>{h.date.split('-').reverse().join('/')} · {h.area}</span><span>{h.hits}/{h.total} · <b className="text-sky-300">{h.score}</b></span></div>)}</div></div>}
  </div>
}

function Running({ questions, answers, setAnswers, current, setCurrent, left, finish }: { questions: BankQuestion[]; answers: Record<number, number>; setAnswers: (fn: (a: Record<number, number>) => Record<number, number>) => void; current: number; setCurrent: (n: number) => void; left: number; finish: () => void }) {
  const q = questions[current]
  const mm = String(Math.floor(left / 60)).padStart(2, '0'), ss = String(left % 60).padStart(2, '0')
  const answered = Object.keys(answers).length
  return <div className="page max-w-4xl mt-6">
    <div className="card flex flex-wrap items-center gap-4 mb-4" style={{ position: 'sticky', top: 80, zIndex: 5, backdropFilter: 'blur(12px)' }}>
      <span className={`tag ${left < 120 ? 'red' : ''}`}>⏱ {mm}:{ss}</span><div className="bar flex-1 min-w-[120px]"><span style={{ width: `${(answered / questions.length) * 100}%` }} /></div>
      <span className="text-sm text-slate-400">{answered}/{questions.length}</span><button className="btn" onClick={() => confirm('Entregar o simulado?') && finish()}>Entregar</button></div>
    <div key={current} className="card page">
      <p className="text-brand text-sm m-0">Questão {current + 1} · {q.topic.subject} · {q.topic.area}</p>
      <p className="text-lg leading-8 mt-2"><Rich t={q.q} /></p>
      <div className="grid gap-2 mt-4">{q.options.map((o, j) => <button key={j} onClick={() => setAnswers(a => ({ ...a, [current]: j }))} className={`flex gap-3 items-center text-left p-3 rounded-xl border transition-all ${answers[current] === j ? 'border-brand bg-[rgba(76,141,255,.15)] translate-x-1' : 'border-line hover:border-slate-500'}`} style={{ background: answers[current] === j ? undefined : 'transparent', color: 'inherit', cursor: 'pointer' }}>
        <span className={`grid place-items-center w-7 h-7 rounded-full text-xs font-bold ${answers[current] === j ? 'bg-brand' : 'border border-line'}`}>{String.fromCharCode(65 + j)}</span><Rich t={o} /></button>)}</div>
      <div className="flex justify-between mt-5"><button className="btn-ghost" disabled={current === 0} onClick={() => setCurrent(current - 1)}>← Anterior</button>
        {current < questions.length - 1 ? <button className="btn-ghost" onClick={() => setCurrent(current + 1)}>Próxima →</button> : <button className="btn" onClick={finish}>Entregar</button>}</div>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">{questions.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-9 h-9 rounded-lg text-xs font-bold border ${i === current ? 'border-brand text-white' : 'border-line text-slate-400'} ${answers[i] !== undefined ? 'bg-[rgba(76,141,255,.25)]' : 'bg-transparent'}`}>{i + 1}</button>)}</div>
  </div>
}

function Result({ questions, answers, restart }: { questions: BankQuestion[]; answers: Record<number, number>; restart: () => void }) {
  const r = estimateScore(questions.map((q, i) => ({ level: q.topic.level, correct: answers[i] === q.answer })))
  const shown = useCountUp(r.score)
  const bySubject = Object.entries(questions.reduce<Record<string, [number, number]>>((acc, q, i) => { const [h, t] = acc[q.topic.subject] ?? [0, 0]; acc[q.topic.subject] = [h + (answers[i] === q.answer ? 1 : 0), t + 1]; return acc }, {}))
  return <div className="page max-w-4xl">
    <div className="hero-card mt-6" style={{ minHeight: 220 }}><div className="hero-copy"><span className="eyebrow">NOTA ESTIMADA</span><div className="big-number mt-2">{shown}</div>
      <p className="mt-3">{r.hits} de {questions.length} acertos · coerência {Math.round(r.coherence * 100)}%. {r.coherence < .9 ? 'Você acertou difíceis e errou fáceis: na TRI isso parece chute e reduz a nota.' : 'Respostas coerentes: ótimo sinal para a TRI.'}</p>
      <div className="hero-actions"><button className="primary-button" onClick={restart}>Novo simulado <span>→</span></button><Link to="/revisao" className="btn-ghost">Revisar meus erros</Link></div></div></div>
    <p className="text-xs text-slate-500 mt-2">Estimativa inspirada na TRI, para treino. Não é a nota oficial do INEP.</p>
    <div className="card mt-4"><p className="eyebrow mb-3">DESEMPENHO POR MATÉRIA</p><div className="grid gap-3">{bySubject.map(([s, [h, t]]) => <div key={s}><div className="flex justify-between text-sm mb-1"><span>{s}</span><span className="text-slate-400">{h}/{t}</span></div><div className="bar"><span style={{ width: `${(h / t) * 100}%` }} /></div></div>)}</div></div>
    <h2 className="text-lg font-bold mt-6">Correção comentada</h2>
    <div className="grid gap-3 stagger">{questions.map((q, i) => { const ok = answers[i] === q.answer; return <div key={q.id} className="card">
      <div className="flex gap-2 items-center mb-2"><span className={`tag ${ok ? 'green' : 'red'}`}>{ok ? 'Acertou' : answers[i] === undefined ? 'Em branco' : 'Errou'}</span><small className="text-slate-500">{q.topic.subject} · {q.topic.title}</small></div>
      <p className="m-0"><b>{i + 1}.</b> <Rich t={q.q} /></p>
      <p className="text-sm text-slate-300 mt-2 mb-0"><b className="text-green-400">Resposta: <Rich t={q.options[q.answer]} /></b>{!ok && answers[i] !== undefined && <> · você marcou <Rich t={q.options[answers[i]]} /></>}. <Rich t={q.why} /></p>
      <Link to={`/estudos/${q.topic.id}`} className="text-link inline-block mt-2">Estudar {q.topic.title} →</Link></div> })}</div>
  </div>
}

// Conta de 0 até o valor com desaceleração. O setTimeout garante o número final mesmo se a aba
// estiver em segundo plano (onde o requestAnimationFrame pausa); sem animação para quem pede menos movimento.
function useCountUp(target: number, ms = 1200) {
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const [v, setV] = useState(reduce ? target : 0)
  useEffect(() => {
    if (reduce) { setV(target); return }
    let raf = 0; const t0 = performance.now()
    const tick = (t: number) => { const p = Math.min(1, Math.max(0, (t - t0) / ms)); setV(Math.round(target * (1 - (1 - p) ** 3))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    const done = setTimeout(() => setV(target), ms + 100)
    return () => { cancelAnimationFrame(raf); clearTimeout(done) }
  }, [target, ms, reduce])
  return v
}

function Sparkline({ values }: { values: number[] }) {
  if (values.length < 2) return null
  const w = 600, h = 80, min = 300, max = 1000
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / (max - min)) * h}`).join(' ')
  return <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20" preserveAspectRatio="none" role="img" aria-label="Evolução das notas nos simulados">
    <defs><linearGradient id="spark" x1="0" x2="1"><stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#6366f1" /></linearGradient></defs>
    <polyline points={pts} fill="none" stroke="url(#spark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg>
}
