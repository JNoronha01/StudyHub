import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Tex from '../lib/Tex'
import { formulas, subjects } from '../content/formulas'
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const KEY = 'studyhub-ffav'
export default function Formulas({ embedded = false, initialQ }: { embedded?: boolean; initialQ?: string }) {
  const [sp] = useSearchParams(); const [q, setQ] = useState(initialQ ?? sp.get('q') ?? ''); const [subj, setSubj] = useState(''); const [onlyFav, setOnlyFav] = useState(false)
  const [fav, setFav] = useState<Record<number, boolean>>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} } })
  const [open, setOpen] = useState<Record<number, boolean>>({}); const [copied, setCopied] = useState(-1)
  const toggle = (id: number) => { const n = { ...fav, [id]: !fav[id] }; setFav(n); localStorage.setItem(KEY, JSON.stringify(n)) }
  const copy = async (id: number, tex: string) => { try { await navigator.clipboard.writeText(tex); setCopied(id); setTimeout(() => setCopied(-1), 1500) } catch { alert('Não foi possível copiar.') } }
  const list = formulas.filter(f => (!subj || f.subject === subj) && (!onlyFav || fav[f.id]) && norm([f.name, f.subject, f.category, f.when].join(' ')).includes(norm(q)))
  return <div>{!embedded && <h1 className="text-2xl font-bold">Fórmulas</h1>}
    <p className="text-slate-400 mb-3">{formulas.length} fórmulas com variáveis, exemplo resolvido e exercício. Favoritos ficam salvos neste navegador.</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <input aria-label="Pesquisar" placeholder="Pesquisar por nome ou matéria" value={q} onChange={e => setQ(e.target.value)} className="flex-1 min-w-48 bg-card border border-line rounded px-3 py-2" />
      <select aria-label="Matéria" value={subj} onChange={e => setSubj(e.target.value)} className="bg-card border border-line rounded px-2"><option value="">Todas as matérias</option>{subjects.map(s => <option key={s}>{s}</option>)}</select>
      <button aria-pressed={onlyFav} onClick={() => setOnlyFav(!onlyFav)} className={`px-3 rounded border ${onlyFav ? 'bg-brand border-brand' : 'border-line'}`}>★ Favoritas</button></div>
    {!list.length && <p className="text-slate-400">Nenhuma fórmula encontrada.</p>}
    <div className="grid lg:grid-cols-2 gap-3">{list.map(f => <article key={f.id} className="bg-card border border-line rounded p-4 space-y-2">
      <div className="text-brand text-sm">{f.subject} · {f.category}</div><h2 className="font-semibold">{f.name}</h2>
      <div className="bg-bg rounded p-3 overflow-x-auto"><Tex f={f.tex} /></div>
      <ul className="text-sm text-slate-300 list-disc pl-5">{f.vars.map(v => <li key={v}>{v}</li>)}</ul>
      <p className="text-sm"><b>Quando usar:</b> {f.when}</p>
      <div className="text-sm bg-bg rounded p-2"><b>Exemplo:</b> {f.exProblem}<br />{f.exSolution}</div>
      <div className="flex flex-wrap gap-2 text-sm"><button onClick={() => copy(f.id, f.tex)} className="border border-line rounded px-2 py-1">{copied === f.id ? 'Copiado' : 'Copiar LaTeX'}</button>
        <button onClick={() => toggle(f.id)} aria-pressed={!!fav[f.id]} className="border border-line rounded px-2 py-1">{fav[f.id] ? '★ Favorita' : '☆ Favoritar'}</button>
        <button onClick={() => setOpen({ ...open, [f.id]: !open[f.id] })} className="border border-line rounded px-2 py-1">{open[f.id] ? 'Ocultar exercício' : 'Praticar'}</button></div>
      {open[f.id] && <PracticeBox q={f.pQ} a={f.pA} why={f.pWhy} />}</article>)}</div></div>
}
function PracticeBox({ q, a, why }: { q: string; a: string; why: string }) {
  const [show, setShow] = useState(false)
  return <div className="border border-line rounded p-2 text-sm"><p><b>Exercício:</b> {q}</p>
    {show ? <p className="text-green-400 mt-1"><b>Resposta:</b> {a}. {why}</p> : <button onClick={() => setShow(true)} className="mt-1 border border-line rounded px-2 py-1">Ver resposta</button>}</div>
}
