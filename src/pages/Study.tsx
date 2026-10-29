import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { allSubjects, topics } from '../content/topics'
import { formulas } from '../content/formulas'
import Formulas from './Formulas'
import Rich from '../lib/Rich'
import Tex from '../lib/Tex'
import { useProgress } from '../lib/useProgress'
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const chip = (on: boolean) => `px-3 py-1 rounded border text-sm ${on ? 'bg-brand border-brand' : 'border-line hover:border-brand'}`

export function Study() {
  const [sp, setSp] = useSearchParams(); const p = useProgress()
  const modo = sp.get('modo') === 'formulas' ? 'formulas' : 'conteudos'
  const [q, setQ] = useState(sp.get('q') ?? ''); const subj = sp.get('m') ?? ''; const area = sp.get('a') ?? ''; const [onlyFav, setOnlyFav] = useState(false)
  const set = (k: string, v: string) => { const n = new URLSearchParams(sp); v ? n.set(k, v) : n.delete(k); if (k === 'm') n.delete('a'); setSp(n, { replace: true }) }
  const areas = [...new Set(topics.filter(t => !subj || t.subject === subj).map(t => t.area))]
  const text = (t: typeof topics[number]) => norm([t.title, t.subject, t.area, ...t.summary, ...t.learn.flatMap(b => [b.h, ...b.p])].join(' '))
  const list = topics.filter(t => (!subj || t.subject === subj) && (!area || t.area === area) && (!onlyFav || p.fav[t.id]) && text(t).includes(norm(q)))
  const nf = q ? formulas.filter(f => norm([f.name, f.subject, f.category].join(' ')).includes(norm(q))).length : 0
  return <div><h1 className="text-2xl font-bold mb-3">Central de Estudos</h1>
    <div className="flex gap-2 mb-3"><button className={chip(modo === 'conteudos')} onClick={() => set('modo', '')}>Conteúdos</button><button className={chip(modo === 'formulas')} onClick={() => set('modo', 'formulas')}>Todas as fórmulas</button></div>
    {modo === 'formulas' ? <Formulas embedded initialQ={q} /> : <>
      <input aria-label="Pesquisar na Central de Estudos" placeholder="Pesquisar conteúdo, assunto ou fórmula" value={q} onChange={e => setQ(e.target.value)} className="w-full bg-card border border-line rounded px-3 py-2 mb-3" />
      <div className="flex flex-wrap gap-2 mb-2"><button className={chip(!subj)} onClick={() => set('m', '')}>Todas</button>
        {allSubjects.map(s => { const c = topics.filter(t => t.subject === s).length; return <button key={s} onClick={() => set('m', s)} className={`${chip(subj === s)} ${c ? '' : 'opacity-50'}`}>{s} ({c})</button> })}</div>
      {areas.length > 1 && <div className="flex flex-wrap gap-2 mb-2">{areas.map(a => <button key={a} className={chip(area === a)} onClick={() => set('a', area === a ? '' : a)}>{a}</button>)}</div>}
      <button aria-pressed={onlyFav} onClick={() => setOnlyFav(!onlyFav)} className={`${chip(onlyFav)} mb-3`}>★ Favoritos</button>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{list.map(t => <Link key={t.id} to={`/estudos/${t.id}`} className="bg-card border border-line rounded p-4 hover:border-brand">
        <div className="text-brand text-sm">{t.subject} · {t.area} · {t.level}</div><div className="font-semibold">{p.fav[t.id] && '★ '}{t.title}</div>
        <div className="text-xs text-slate-400 mt-1">{p.done[t.id] ? 'Estudado' : 'Não estudado'}{p.answers[t.id] ? ` · ${Object.keys(p.answers[t.id]).length}/${t.quiz.length} exercícios respondidos` : ''}</div></Link>)}</div>
      {!list.length && <p className="text-slate-400">{subj && !topics.some(t => t.subject === subj) ? `${subj}: conteúdo ainda em preparação.` : 'Nenhum conteúdo encontrado.'}</p>}
      {nf > 0 && <p className="mt-4"><Link className="text-brand" to={`/estudos?modo=formulas&q=${encodeURIComponent(q)}`}>{nf} fórmula(s) encontrada(s) para “{q}” →</Link></p>}</>}</div>
}

const tabs = ['Aprender', 'Resumo', 'Fórmulas', 'Exercícios'] as const
export function TopicPage() {
  const { id } = useParams(); const t = topics.find(x => x.id === id); const [tab, setTab] = useState<typeof tabs[number]>('Aprender'); const p = useProgress()
  if (!t) return <p>Conteúdo não encontrado. <Link className="text-brand" to="/estudos">Voltar à Central de Estudos</Link></p>
  const ans = p.answers[t.id] ?? {}; const hits = t.quiz.filter((q, i) => ans[i] === q.answer).length
  return <article className="space-y-3 max-w-3xl"><Link className="text-brand text-sm" to="/estudos">← Central de Estudos</Link>
    <div className="text-brand text-sm">{t.subject} · {t.area} · {t.level}</div><h1 className="text-2xl font-bold">{t.title}</h1>
    <div className="flex flex-wrap gap-2"><button aria-pressed={!!p.done[t.id]} onClick={() => p.toggleDone(t.id)} className={chip(!!p.done[t.id])}>{p.done[t.id] ? '✓ Estudado' : 'Marcar como estudado'}</button>
      <button aria-pressed={!!p.fav[t.id]} onClick={() => p.toggleFav(t.id)} className={chip(!!p.fav[t.id])}>{p.fav[t.id] ? '★ Favorito' : '☆ Favoritar'}</button></div>
    <div role="tablist" className="flex gap-2 border-b border-line pb-2">{tabs.map(x => <button key={x} role="tab" aria-selected={tab === x} onClick={() => setTab(x)} className={chip(tab === x)}>{x}</button>)}</div>
    {tab === 'Aprender' && <div className="space-y-4">{t.learn.map(b => <section key={b.h}><h2 className="font-bold mb-1">{b.h.includes('$') ? <Rich t={b.h} /> : b.h}</h2>{b.p.map((x, i) => <p key={i} className="text-slate-300 mb-2"><Rich t={x} /></p>)}</section>)}
      <h2 className="font-bold">Exemplos resolvidos</h2>{t.examples.map((e, i) => <div key={i} className="bg-card border border-line rounded p-3"><p><b>{i + 1}.</b> <Rich t={e.q} /></p><ol className="list-decimal pl-6 text-slate-300 mt-1">{e.steps.map((s, j) => <li key={j}><Rich t={s} /></li>)}</ol></div>)}</div>}
    {tab === 'Resumo' && <div className="space-y-3"><ul className="list-disc pl-5 space-y-1">{t.summary.map((s, i) => <li key={i}><Rich t={s} /></li>)}</ul>
      <h2 className="font-bold">Erros comuns</h2><ul className="list-disc pl-5 space-y-1 text-slate-300">{t.mistakes.map((s, i) => <li key={i}><Rich t={s} /></li>)}</ul></div>}
    {tab === 'Fórmulas' && <div className="space-y-2">{t.formulas.map(f => <div key={f.name} className="bg-card border border-line rounded p-3"><div className="font-semibold">{f.name}</div><div className="bg-bg rounded p-2 my-1 overflow-x-auto"><Tex f={f.tex} /></div><div className="text-sm text-slate-400">{f.note}</div></div>)}
      <Link className="text-brand text-sm" to={`/estudos?modo=formulas&q=${encodeURIComponent(t.area)}`}>Ver mais fórmulas de {t.area} →</Link></div>}
    {tab === 'Exercícios' && <div className="space-y-3"><p className="text-slate-400 text-sm">Acertos: {hits} de {t.quiz.length} · respondidas: {Object.keys(ans).length}. Suas respostas ficam salvas neste navegador.</p>
      {t.quiz.map((q, i) => <div key={i} className="bg-card border border-line rounded p-3"><p><b>{i + 1}.</b> <Rich t={q.q} /></p>
        {q.options.map((o, j) => <button key={j} disabled={ans[i] !== undefined} onClick={() => p.answer(t.id, i, j)} className={`block w-full text-left border rounded px-2 py-1 my-1 ${ans[i] === undefined ? 'border-line hover:border-brand' : j === q.answer ? 'border-green-500' : ans[i] === j ? 'border-red-500' : 'border-line'}`}>{o}</button>)}
        {ans[i] !== undefined && <p className="mt-1"><b>{ans[i] === q.answer ? 'Correto. ' : 'Incorreto. '}</b><Rich t={q.why} /></p>}</div>)}
      {Object.keys(ans).length > 0 && <button onClick={() => p.resetAnswers(t.id)} className={chip(false)}>Refazer exercícios</button>}</div>}
  </article>
}
