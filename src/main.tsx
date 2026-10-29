import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './index.css'
import 'katex/dist/katex.min.css'
import { Study, TopicPage } from './pages/Study'
import { useProgress } from './lib/useProgress'
import { topics } from './content/topics'
import Calculator from './pages/Calculator'
import Notes from './pages/Notes'
import Login from './pages/Login'

const links = [
  { to: '/', label: 'Visão geral', icon: '⌂' },
  { to: '/estudos', label: 'Central de estudos', icon: '▣' },
  { to: '/calculadora', label: 'Calculadora', icon: '＋' },
  { to: '/notas', label: 'Caderno', icon: '✎' },
]

function Home() {
  const p = useProgress()
  const done = topics.filter(t => p.done[t.id]).length
  const favs = topics.filter(t => p.fav[t.id]).length
  const answered = Object.values(p.answers).reduce((n, a) => n + Object.keys(a).length, 0)
  const percent = topics.length ? Math.round((done / topics.length) * 100) : 0
  const nextTopic = topics.find(t => !p.done[t.id]) ?? topics[0]

  return <div className="dashboard space-y-6">
    <section className="hero-card">
      <div className="hero-copy">
        <span className="eyebrow">SEU ESPAÇO DE APRENDIZADO</span>
        <h1>Aprenda no seu ritmo.<br /><span>Chegue mais longe.</span></h1>
        <p>Organize sua rotina, pratique com intenção e acompanhe cada conquista.</p>
        <NavLink to="/estudos" className="primary-button">Continuar estudando <span>→</span></NavLink>
      </div>
      <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-star">✦</div></div>
    </section>

    <section className="welcome-row">
      <div><p className="eyebrow">BOM TE VER POR AQUI</p><h2>Olá, estudante 👋</h2><p className="muted">Que tal avançar um pouco hoje?</p></div>
      <div className="study-streak"><span>✦</span><div><strong>7 dias</strong><small>de sequência</small></div></div>
    </section>

    <section className="stats-grid" aria-label="Resumo do seu progresso">
      <div className="stat-card stat-progress"><div className="stat-icon">◔</div><div><small>Progresso geral</small><strong>{percent}%</strong></div><div className="progress-ring" style={{ '--progress': `${percent * 3.6}deg` } as React.CSSProperties}><span>{done}/{topics.length}</span></div></div>
      <div className="stat-card"><div className="stat-icon purple">◈</div><div><small>Conteúdos vistos</small><strong>{done}</strong><span className="stat-note">de {topics.length} disponíveis</span></div></div>
      <div className="stat-card"><div className="stat-icon orange">★</div><div><small>Favoritos</small><strong>{favs}</strong><span className="stat-note">para revisar depois</span></div></div>
      <div className="stat-card"><div className="stat-icon green">✓</div><div><small>Exercícios</small><strong>{answered}</strong><span className="stat-note">respostas registradas</span></div></div>
    </section>

    <section className="content-grid">
      <div className="panel next-panel"><div className="panel-heading"><div><p className="eyebrow">RECOMENDADO PARA VOCÊ</p><h2>Continue de onde parou</h2></div><NavLink to="/estudos" className="text-link">Ver tudo →</NavLink></div>
        <NavLink to={`/estudos/${nextTopic.id}`} className="next-topic"><div className="topic-badge">{nextTopic.subject.slice(0, 1)}</div><div className="topic-info"><span>{nextTopic.subject} · {nextTopic.area}</span><strong>{nextTopic.title}</strong><small>{p.done[nextTopic.id] ? 'Revisão recomendada' : 'Próximo conteúdo sugerido'} <b>·</b> nível {nextTopic.level}</small></div><span className="topic-arrow">→</span></NavLink>
        <div className="mini-progress"><span style={{ width: `${Math.max(percent, 8)}%` }} /></div>
      </div>
      <div className="panel quick-panel"><div className="panel-heading"><div><p className="eyebrow">ACESSO RÁPIDO</p><h2>Ferramentas</h2></div></div><div className="quick-actions"><NavLink to="/notas"><span className="quick-icon purple">✎</span><strong>Caderno</strong><small>Anote suas ideias</small></NavLink><NavLink to="/calculadora"><span className="quick-icon orange">＋</span><strong>Calculadora</strong><small>Resolva problemas</small></NavLink></div></div>
    </section>

    <section className="tip-card"><span className="tip-icon">✦</span><div><strong>Dica de estudo</strong><p>Estudar em sessões curtas e consistentes ajuda a fixar mais. Tente fazer 25 minutos agora.</p></div><NavLink to="/estudos" className="text-link">Começar →</NavLink></section>
  </div>
}

function OldTopic() { const { id } = useParams(); return <Navigate to={`/estudos/${id}`} replace /> }

function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const closeMenu = () => setMobileOpen(false)
  return <div className="app-shell">
    <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menu">☰</button>
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-mark">✦</span><span>Study<span>Hub</span></span></div>
      <p className="sidebar-label">MENU PRINCIPAL</p>
      <nav className="sidebar-nav">{links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span className="nav-icon">{link.icon}</span>{link.label}</NavLink>)}</nav>
      <div className="sidebar-spacer" />
      <div className="upgrade-card"><span className="upgrade-star">✦</span><strong>Desbloqueie seu potencial</strong><p>Tenha acesso a recursos para estudar ainda melhor.</p><NavLink to="/login" onClick={closeMenu}>Conhecer recursos <span>→</span></NavLink></div>
      <NavLink to="/login" onClick={closeMenu} className={`nav-item account-link ${location.pathname === '/login' ? 'active' : ''}`}><span className="avatar">ES</span><span><b>Minha conta</b><small>Plano gratuito</small></span><span className="account-arrow">›</span></NavLink>
    </aside>
    {mobileOpen && <button className="sidebar-overlay" onClick={closeMenu} aria-label="Fechar menu" />}
    <main className="main-content"><header className="topbar"><div className="breadcrumb">StudyHub <span>/</span> <b>{links.find(link => link.to === location.pathname)?.label ?? 'Estudos'}</b></div><div className="topbar-actions"><button aria-label="Notificações" className="icon-button">♢<i /></button><NavLink to="/login" className="top-avatar">ES</NavLink></div></header><Routes><Route path="/" element={<Home />} /><Route path="/estudos" element={<Study />} /><Route path="/estudos/:id" element={<TopicPage />} /><Route path="/biblioteca" element={<Navigate to="/estudos" replace />} /><Route path="/biblioteca/:id" element={<OldTopic />} /><Route path="/formulas" element={<Navigate to="/estudos?modo=formulas" replace />} /><Route path="/calculadora" element={<Calculator />} /><Route path="/notas" element={<Notes />} /><Route path="/login" element={<Login />} /></Routes></main>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><AppShell /></BrowserRouter></React.StrictMode>)
