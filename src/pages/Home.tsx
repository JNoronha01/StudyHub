import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { topics } from '../content/topics'
import { medals } from '../lib/scoring'
import { dayKey, useProgress } from '../lib/useProgress'
import { useAuth } from '../lib/useAuth'
import { useStats } from '../lib/useStats'
import { useUserStorage } from '../lib/useUserStorage'
import { useReviews } from './Revisao'

const tips = [
  'Estudar em sessões curtas e consistentes fixa mais do que maratonas. Tente 25 minutos agora.',
  'Na TRI, garantir as questões fáceis vale mais do que arriscar nas difíceis.',
  'Revisar os próprios erros é o estudo com maior retorno por minuto.',
  'Uma redação por semana, com correção e reescrita, muda sua nota em poucos meses.',
  'Explique em voz alta o que acabou de estudar. Se travar, é ali que precisa revisar.',
]

export default function Home() {
  const p = useProgress()
  const { user } = useAuth()
  const { stats, level, won } = useStats()
  const { items } = useReviews()
  const [plano] = useUserStorage('plano', { exam: '', name: 'ENEM' })
  const displayName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'estudante'
  const done = stats.done
  const percent = topics.length ? Math.round((done / topics.length) * 100) : 0
  const nextTopic = topics.find(t => !p.done[t.id]) ?? topics[0]
  const due = Object.values(items).filter(i => i.due <= dayKey()).length
  const days = plano.exam ? Math.max(0, Math.round((new Date(`${plano.exam}T12:00:00`).getTime() - Date.now()) / 86_400_000)) : null
  const tip = tips[new Date().getDate() % tips.length]
  // Começa em 0 e anima até o valor real (a transição do anel está no CSS).
  const [ring, setRing] = useState(0)
  useEffect(() => { const id = setTimeout(() => setRing(percent), 60); return () => clearTimeout(id) }, [percent])

  return <div className="dashboard page">
    <section className="hero-card">
      <div className="hero-copy">
        <span className="eyebrow">{days !== null ? `FALTAM ${days} DIAS PARA O ${plano.name.toUpperCase()}` : 'SEU ESPAÇO DE APRENDIZADO'}</span>
        <h1>Sua aprovação<br /><span>começa aqui.</span></h1>
        <p>Aulas objetivas, simulados com nota estimada, revisão inteligente dos seus erros e treino de redação. Tudo num lugar só.</p>
        <div className="hero-actions"><NavLink to={`/estudos/${nextTopic.id}`} className="primary-button">Continuar estudando <span>→</span></NavLink><NavLink to="/simulado" className="btn-ghost">Fazer simulado</NavLink></div>
      </div>
      <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-star">✦</div></div>
    </section>

    <section className="welcome-row">
      <div><p className="eyebrow">BOM TE VER POR AQUI</p><h2>Olá, {displayName} 👋</h2><p className="muted">{due ? `Você tem ${due} ${due === 1 ? 'erro' : 'erros'} para revisar hoje.` : 'Que tal avançar um pouco hoje?'}</p></div>
      <div className="study-streak"><span>🔥</span><div>{p.streak ? <><strong>{p.streak} {p.streak === 1 ? 'dia' : 'dias'}</strong><small>de sequência</small></> : <><strong>Comece hoje</strong><small>responda um exercício</small></>}</div></div>
    </section>

    <section className="card mt-4 grid sm:grid-cols-[auto_1fr_auto] gap-4 items-center">
      <div className="grid place-items-center w-14 h-14 rounded-2xl text-2xl font-black" style={{ background: 'var(--grad)', boxShadow: '0 10px 30px rgba(76,141,255,.35)' }}>{level.level}</div>
      <div><div className="flex justify-between text-sm"><b>Nível {level.level}</b><span className="text-slate-400">{level.xp} XP · faltam {level.next - level.xp} para o nível {level.level + 1}</span></div><div className="bar mt-2"><span style={{ width: `${Math.round(level.progress * 100)}%` }} /></div></div>
      <span className="tag">{won.length}/{medals.length} medalhas</span>
    </section>

    <section className="stats-grid stagger" aria-label="Resumo do seu progresso">
      <div className="stat-card stat-progress"><div className="stat-icon">◔</div><div><small>Progresso geral</small><strong>{percent}%</strong></div><div className="progress-ring" style={{ '--progress': `${ring * 3.6}deg` } as React.CSSProperties}><span>{done}/{topics.length}</span></div></div>
      <div className="stat-card"><div className="stat-icon green">✓</div><div><small>Acertos</small><strong>{stats.correct}</strong><span className="stat-note">de {stats.correct + stats.wrong} respostas</span></div></div>
      <div className="stat-card"><div className="stat-icon purple">📝</div><div><small>Simulados</small><strong>{stats.simulados}</strong><span className="stat-note">concluídos</span></div></div>
      <div className="stat-card"><div className="stat-icon orange">🔁</div><div><small>Revisões</small><strong>{stats.reviewed}</strong><span className="stat-note">erros revisados</span></div></div>
    </section>

    <section className="content-grid">
      <div className="panel next-panel"><div className="panel-heading"><div><p className="eyebrow">RECOMENDADO PARA VOCÊ</p><h2>Continue de onde parou</h2></div><NavLink to="/plano" className="text-link">Meu plano →</NavLink></div>
        <NavLink to={`/estudos/${nextTopic.id}`} className="next-topic"><div className="topic-badge">{nextTopic.subject.slice(0, 1)}</div><div className="topic-info"><span>{nextTopic.subject} · {nextTopic.area}</span><strong>{nextTopic.title}</strong><small>Próximo conteúdo sugerido <b>·</b> nível {nextTopic.level}</small></div><span className="topic-arrow">→</span></NavLink>
        <div className="mini-progress"><span style={{ width: `${Math.max(ring, 4)}%` }} /></div>
      </div>
      <div className="panel quick-panel"><div className="panel-heading"><div><p className="eyebrow">TREINE AGORA</p><h2>Ferramentas</h2></div></div><div className="quick-actions">
        <NavLink to="/simulado"><span className="quick-icon">📝</span><strong>Simulado</strong><small>Nota estimada</small></NavLink>
        <NavLink to="/redacao"><span className="quick-icon purple">✍️</span><strong>Redação</strong><small>Aulas e correção</small></NavLink>
        <NavLink to="/revisao"><span className="quick-icon orange">🔁</span><strong>Revisão</strong><small>{due} para hoje</small></NavLink>
        <NavLink to="/flashcards"><span className="quick-icon sky">🃏</span><strong>Flashcards</strong><small>Memorização</small></NavLink>
      </div></div>
    </section>

    <section className="panel mt-4"><div className="panel-heading"><div><p className="eyebrow">CONQUISTAS</p><h2>Suas medalhas</h2></div></div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">{medals.map(m => { const ok = won.some(w => w.id === m.id); return <div key={m.id} className={`medal ${ok ? 'won' : ''}`} title={m.desc}><span>{m.icon}</span><b>{m.name}</b><small>{m.desc}</small></div> })}</div></section>

    <section className="tip-card"><span className="tip-icon">✦</span><div><strong>Dica do dia</strong><p>{tip}</p></div><NavLink to="/estudos" className="text-link">Começar →</NavLink></section>
  </div>
}
