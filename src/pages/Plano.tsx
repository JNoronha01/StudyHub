import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../content/topics'
import { buildPlan } from '../lib/scoring'
import { dayKey, useProgress } from '../lib/useProgress'
import { useUserStorage } from '../lib/useUserStorage'

// Plano de estudos até a prova: distribui os tópicos pendentes por semana, priorizando o que mais cai.
export default function Plano() {
  const p = useProgress()
  const [cfg, setCfg] = useUserStorage('plano', { exam: '', name: 'ENEM' })
  const today = dayKey()
  const plan = useMemo(() => cfg.exam ? buildPlan(topics, p.done, today, cfg.exam) : [], [cfg.exam, p.done, today])
  const days = cfg.exam ? Math.max(0, Math.round((new Date(`${cfg.exam}T12:00:00`).getTime() - new Date(`${today}T12:00:00`).getTime()) / 86_400_000)) : 0
  const thisWeek = plan[0]
  const doneThisWeek = thisWeek ? thisWeek.topics.filter(t => p.done[t.id]).length : 0

  return <div className="page max-w-5xl">
    <h1 className="page-title">Plano até a <span>aprovação</span></h1>
    <p className="page-sub">Informe a data da sua prova e o StudyHub monta um cronograma semanal, priorizando as matérias que mais pesam no ENEM e reservando as últimas semanas para revisão e simulados.</p>
    <div className="card grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
      <label className="grid gap-1"><span className="eyebrow">PROVA</span><input className="field" value={cfg.name} onChange={e => setCfg(c => ({ ...c, name: e.target.value }))} placeholder="ENEM, Fuvest, Unicamp…" /></label>
      <label className="grid gap-1"><span className="eyebrow">DATA</span><input className="field" type="date" min={today} value={cfg.exam} onChange={e => setCfg(c => ({ ...c, exam: e.target.value }))} /></label>
      {cfg.exam && <div className="text-right"><div className="big-number">{days}</div><small className="text-slate-400">dias até o {cfg.name || 'dia da prova'}</small></div>}
    </div>

    {!cfg.exam && <div className="card mt-4 text-slate-300">📅 Escolha a data da prova para gerar seu plano.</div>}
    {cfg.exam && days === 0 && <div className="card mt-4">É hoje ou já passou! Boa prova. 🍀</div>}

    {thisWeek && <div className="card mt-4" style={{ borderColor: 'rgba(76,141,255,.5)' }}>
      <div className="panel-heading"><div><p className="eyebrow">ESTA SEMANA</p><h2 className="text-lg font-bold m-0 mt-1">{thisWeek.review ? 'Revisão e simulados' : `${thisWeek.topics.length} conteúdos para estudar`}</h2></div>
        {!thisWeek.review && <span className="tag">{doneThisWeek}/{thisWeek.topics.length} feitos</span>}</div>
      {!thisWeek.review && <div className="bar mt-3"><span style={{ width: `${thisWeek.topics.length ? (doneThisWeek / thisWeek.topics.length) * 100 : 0}%` }} /></div>}
      <div className="grid-auto mt-4 stagger">{thisWeek.review
        ? [<Link key="s" to="/simulado" className="card">📝 Faça 2 simulados completos</Link>, <Link key="r" to="/revisao" className="card">🔁 Zere o caderno de erros</Link>, <Link key="w" to="/redacao" className="card">✍️ Escreva 2 redações</Link>]
        : thisWeek.topics.map(t => <Link key={t.id} to={`/estudos/${t.id}`} className="card" style={p.done[t.id] ? { opacity: .55 } : undefined}><small className="text-sky-300">{t.subject}</small><b className="block mt-1">{p.done[t.id] ? '✓ ' : ''}{t.title}</b></Link>)}</div>
    </div>}

    {plan.length > 1 && <div className="mt-6"><h2 className="text-lg font-bold">Próximas semanas</h2>
      <div className="grid gap-2 stagger">{plan.slice(1).map((w, i) => <div key={w.start} className="card flex flex-wrap items-center gap-3 py-3">
        <span className="tag shrink-0">Semana {i + 2} · {w.start.split('-').reverse().slice(0, 2).join('/')}</span>
        <span className="text-sm text-slate-300 flex-1 min-w-[200px]">{w.review ? 'Revisão geral, simulados e redação' : w.topics.map(t => t.title).join(' · ') || 'Semana livre para revisar'}</span></div>)}</div></div>}
  </div>
}
