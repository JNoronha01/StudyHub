import { useMemo, useState } from 'react'
import { conectivos, eixos, lessons, modelo, repertorios, temas } from '../content/redacao'
import { analyzeEssay } from '../lib/essay'
import { askTutor } from '../lib/ai'
import { useUserStorage } from '../lib/useUserStorage'
import { useStats } from '../lib/useStats'

const tabs = ['Aulas', 'Redação-modelo', 'Repertórios', 'Temas do ENEM', 'Conectivos', 'Treinar'] as const
type Tab = typeof tabs[number]

export default function Redacao() {
  const [tab, setTab] = useState<Tab>('Aulas')
  const [draft, setDraft] = useUserStorage('redacao', { tema: temas[0].tema, texto: '', lidas: {} as Record<string, boolean> })
  const go = (t: Tab, tema?: string) => { if (tema) setDraft(d => ({ ...d, tema })); setTab(t); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const lidas = Object.values(draft.lidas).filter(Boolean).length
  return <div className="page max-w-5xl">
    <h1 className="page-title">Redação <span>nota 1000</span></h1>
    <p className="page-sub">A redação vale tanto quanto uma prova inteira na sua média do SISU. Estude as aulas, use o modelo comentado como referência e treine com análise instantânea.</p>
    <div className="flex flex-wrap items-center gap-3 mb-6"><div className="tabs" role="tablist">{tabs.map(t => <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>)}</div>
      <span className="tag">{lidas}/{lessons.length} aulas concluídas</span></div>
    <div key={tab} className="page">
      {tab === 'Aulas' && <Aulas lidas={draft.lidas} marcar={id => setDraft(d => ({ ...d, lidas: { ...d.lidas, [id]: !d.lidas[id] } }))} />}
      {tab === 'Redação-modelo' && <Modelo />}
      {tab === 'Repertórios' && <Repertorios />}
      {tab === 'Temas do ENEM' && <div className="grid gap-3 stagger">{temas.map(t => <div key={t.year} className="card card-hover flex flex-wrap items-center gap-4"><span className="big-number" style={{ fontSize: 28 }}>{t.year}</span><p className="flex-1 min-w-[220px] m-0 text-slate-200">{t.tema}</p><button className="btn-ghost" onClick={() => go('Treinar', t.tema)}>Treinar este tema →</button></div>)}</div>}
      {tab === 'Conectivos' && <div className="grid-auto stagger">{conectivos.map(c => <div key={c.pos} className="card"><p className="eyebrow mb-3">{c.pos.toUpperCase()}</p><div className="flex flex-wrap gap-2">{c.list.map(x => <span key={x} className="tag">{x}</span>)}</div></div>)}</div>}
      {tab === 'Treinar' && <Treinar draft={draft} setDraft={setDraft} />}
    </div>
  </div>
}

function Aulas({ lidas, marcar }: { lidas: Record<string, boolean>; marcar: (id: string) => void }) {
  const [open, setOpen] = useState(lessons[0].id)
  return <div className="grid gap-3 stagger">{lessons.map(l => <article key={l.id} className="card">
    <button className="w-full flex items-center gap-3 text-left bg-transparent border-0 text-inherit cursor-pointer p-0" onClick={() => setOpen(open === l.id ? '' : l.id)} aria-expanded={open === l.id}>
      <span className={`grid place-items-center w-9 h-9 rounded-full text-sm font-bold ${lidas[l.id] ? 'bg-brand' : 'border border-line text-slate-400'}`}>{lidas[l.id] ? '✓' : l.title.split('.')[0]}</span>
      <span className="flex-1"><b className="block text-[15px]">{l.title}</b><small className="text-slate-400">{l.intro}</small></span>
      <span className="tag">{l.minutes} min</span><span className="text-slate-500 text-xl transition-transform" style={{ transform: open === l.id ? 'rotate(90deg)' : 'none' }}>›</span></button>
    {open === l.id && <div className="prose-study mt-4 page">{l.sections.map(s => <section key={s.h}><h3>{s.h}</h3>{s.p.map((p, i) => <p key={i}>{p}</p>)}</section>)}
      <div className="tip-card mt-4"><span className="tip-icon">✦</span><div><strong>Dicas de corretor</strong>{l.tips.map(t => <p key={t}>{t}</p>)}</div></div>
      <button className={lidas[l.id] ? 'btn-ghost mt-4' : 'btn mt-4'} onClick={() => marcar(l.id)}>{lidas[l.id] ? 'Marcar como não lida' : 'Concluir aula ✓'}</button></div>}
  </article>)}</div>
}

function Modelo() {
  return <div className="grid gap-4">
    <div className="card"><p className="eyebrow">TEMA</p><h2 className="text-lg font-bold m-0 mt-1">{modelo.tema}</h2><p className="text-slate-400 text-sm mt-2 mb-0">Leia cada parágrafo e o comentário do corretor ao lado. Observe como a tese anunciada na introdução organiza todo o texto.</p></div>
    <div className="grid gap-3 stagger">{modelo.paragraphs.map(p => <div key={p.label} className="grid md:grid-cols-[1.6fr_1fr] gap-3">
      <div className="card"><span className="tag mb-2">{p.label}</span><p className="text-slate-200 leading-7 m-0 mt-2" style={{ textIndent: '2em' }}>{p.text}</p></div>
      <div className="card" style={{ borderColor: 'rgba(56,189,248,.35)' }}><p className="eyebrow">COMENTÁRIO</p><p className="text-sm text-slate-300 m-0 mt-2 leading-6">{p.comment}</p></div></div>)}</div>
  </div>
}

function Repertorios() {
  const [eixo, setEixo] = useState('Todos')
  const list = repertorios.filter(r => eixo === 'Todos' || r.eixos.includes(eixo))
  return <div><div className="flex flex-wrap gap-2 mb-4">{eixos.map(e => <button key={e} className={`btn-ghost ${eixo === e ? 'on' : ''}`} onClick={() => setEixo(e)}>{e}</button>)}</div>
    <div className="grid-auto stagger" key={eixo}>{list.map(r => <div key={r.name} className="card card-hover"><div className="flex items-center gap-2 mb-2"><span className="tag">{r.kind}</span></div><h3 className="m-0 text-[15px] font-bold">{r.name}</h3><p className="text-sm text-slate-300 mt-2 mb-2">{r.idea}</p><p className="text-xs text-sky-300 m-0"><b>Como usar:</b> {r.use}</p></div>)}</div></div>
}

type Draft = { tema: string; texto: string; lidas: Record<string, boolean> }
function Treinar({ draft, setDraft }: { draft: Draft; setDraft: (fn: (d: Draft) => Draft) => void }) {
  const a = useMemo(() => analyzeEssay(draft.texto), [draft.texto])
  const { bump } = useStats()
  const [ai, setAi] = useState<{ loading?: boolean; text?: string; error?: string }>({})
  const elements = [['agente', 'Agente'], ['acao', 'Ação'], ['meio', 'Meio/modo'], ['finalidade', 'Finalidade'], ['detalhamento', 'Detalhamento']] as const
  const corrigir = async () => {
    setAi({ loading: true })
    const r = await askTutor({ kind: 'redacao', tema: draft.tema, texto: draft.texto })
    setAi(r)
    if (r.text) bump('essays')
  }
  return <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4">
    <div className="card">
      <label className="eyebrow" htmlFor="tema">TEMA</label>
      <input id="tema" className="field mt-2 mb-4" value={draft.tema} onChange={e => setDraft(d => ({ ...d, tema: e.target.value }))} />
      <textarea aria-label="Sua redação" className="field leading-7" rows={22} placeholder="Escreva sua redação aqui. Separe os parágrafos com uma linha em branco." value={draft.texto} onChange={e => setDraft(d => ({ ...d, texto: e.target.value }))} />
      <div className="flex flex-wrap gap-2 mt-3"><button className="btn" disabled={a.words < 80 || ai.loading} onClick={corrigir}>{ai.loading ? 'Corrigindo…' : '✦ Corrigir com IA'}</button><span className="text-xs text-slate-500 self-center">Rascunho salvo automaticamente neste navegador.</span></div>
    </div>
    <div className="grid gap-4 content-start">
      <div className="card"><p className="eyebrow mb-3">ANÁLISE INSTANTÂNEA</p>
        <div className="grid grid-cols-3 gap-2 text-center">{[['linhas', a.lines], ['parágrafos', a.paragraphs], ['conectivos', a.connectives.length]].map(([k, v]) => <div key={k} className="rounded-lg border border-line p-2"><b className="block text-xl">{v}</b><small className="text-slate-400">{k}</small></div>)}</div>
        <div className="bar mt-4" title="Linhas (meta: 20 a 30)"><span style={{ width: `${Math.min(100, (a.lines / 30) * 100)}%` }} /></div><small className="text-slate-500">meta: 20 a 30 linhas</small></div>
      <div className="card"><p className="eyebrow mb-3">PROPOSTA DE INTERVENÇÃO (ÚLTIMO PARÁGRAFO)</p>
        <div className="grid gap-2">{elements.map(([k, label]) => <div key={k} className="flex items-center justify-between text-sm"><span>{label}</span><span className={`tag ${a.proposal[k] ? 'green' : 'red'}`}>{a.proposal[k] ? 'encontrado' : 'faltando'}</span></div>)}</div>
        <small className="block mt-3 text-slate-500">Detecção automática por palavras-chave: confira você também.</small></div>
      {a.warnings.length > 0 && <div className="card"><p className="eyebrow mb-2">ATENÇÃO</p><ul className="m-0 pl-4 text-sm text-amber-200 space-y-1">{a.warnings.map(w => <li key={w}>{w}</li>)}</ul></div>}
      {(ai.text || ai.error) && <div className="card page" style={{ borderColor: 'rgba(76,141,255,.5)' }}><p className="eyebrow mb-2">CORREÇÃO DA IA</p>
        {ai.error ? <p className="text-amber-300 text-sm m-0">{ai.error}</p> : <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200 m-0 leading-6">{ai.text}</pre>}</div>}
    </div>
  </div>
}
