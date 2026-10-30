import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, NavLink, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './index.css'
import 'katex/dist/katex.min.css'
import { Study, TopicPage } from './pages/Study'
import { ProgressProvider, dayKey, useProgress } from './lib/useProgress'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Notes from './pages/Notes'
import Login from './pages/Login'
import Simulado from './pages/Simulado'
import Revisao, { useReviews } from './pages/Revisao'
import Flashcards from './pages/Flashcards'
import Plano from './pages/Plano'
import Redacao from './pages/Redacao'
import Planos from './pages/Planos'
import { useAuth } from './lib/useAuth'
import { useStats } from './lib/useStats'
import { supabase } from './lib/supabase'

const sections = [
  { label: 'ESTUDAR', links: [
    { to: '/', label: 'Visão geral', icon: '⌂' },
    { to: '/estudos', label: 'Central de estudos', icon: '▣' },
    { to: '/plano', label: 'Plano de estudos', icon: '📅' },
  ] },
  { label: 'PRATICAR', links: [
    { to: '/simulado', label: 'Simulado ENEM', icon: '📝' },
    { to: '/redacao', label: 'Redação', icon: '✍️' },
    { to: '/revisao', label: 'Caderno de erros', icon: '🔁' },
    { to: '/flashcards', label: 'Flashcards', icon: '🃏' },
  ] },
  { label: 'FERRAMENTAS', links: [
    { to: '/calculadora', label: 'Calculadora', icon: '＋' },
    { to: '/notas', label: 'Caderno', icon: '✎' },
  ] },
]
const links = sections.flatMap(s => s.links)

function OldTopic() { const { id } = useParams(); return <Navigate to={`/estudos/${id}`} replace /> }

function RequireAuth() {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <div className="p-6 text-slate-400">Verificando sua conta...</div>
  if (!supabase || !user) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}

function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { user } = useAuth()
  const displayName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'Minha conta'
  const initials = displayName.slice(0, 2).toUpperCase()
  const { syncError } = useProgress()
  const { level } = useStats()
  const { items } = useReviews()
  const due = Object.values(items).filter(i => i.due <= dayKey()).length
  const closeMenu = () => setMobileOpen(false)
  return <div className="app-shell">
    <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menu">☰</button>
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-mark">✦</span><span>Study<span>Hub</span></span></div>
      {sections.map(s => <div key={s.label}><p className="sidebar-label">{s.label}</p>
        <nav className="sidebar-nav">{s.links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span className="nav-icon">{link.icon}</span>{link.label}{link.to === '/revisao' && due > 0 && <span className="nav-badge">{due}</span>}</NavLink>)}</nav></div>)}
      <div className="sidebar-spacer" />
      <div className="upgrade-card"><span className="upgrade-star">✦</span><strong>StudyHub Pro</strong><p>Correções de redação e tutor com IA ilimitados.</p><NavLink to="/planos" onClick={closeMenu}>Conhecer planos <span>→</span></NavLink></div>
      <NavLink to="/login" onClick={closeMenu} className="nav-item account-link"><span className="avatar">{initials}</span><span><b>{displayName}</b><small>Nível {level.level} · {level.xp} XP</small></span><span className="account-arrow">›</span></NavLink>
    </aside>
    {mobileOpen && <button className="sidebar-overlay" onClick={closeMenu} aria-label="Fechar menu" />}
    <main className="main-content">
      <header className="topbar"><div className="breadcrumb">StudyHub <span>/</span> <b>{links.find(link => link.to === location.pathname)?.label ?? (location.pathname === '/planos' ? 'Planos' : 'Estudos')}</b></div>
        <div className="topbar-actions">{user && <NavLink to="/" className="xp-pill" title="Seu nível"><b>{level.level}</b><span>{level.xp} XP</span></NavLink>}<NavLink to="/login" className="top-avatar">{initials}</NavLink></div></header>
      {syncError && <p role="alert" className="text-red-400 text-sm mt-3">{syncError}</p>}
      {/* A key muda a cada rota: o React remonta a página e a animação de entrada roda de novo. */}
      <div key={location.pathname} className="page"><Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} /><Route path="/estudos" element={<Study />} /><Route path="/estudos/:id" element={<TopicPage />} /><Route path="/biblioteca" element={<Navigate to="/estudos" replace />} /><Route path="/biblioteca/:id" element={<OldTopic />} /><Route path="/formulas" element={<Navigate to="/estudos?modo=formulas" replace />} /><Route path="/calculadora" element={<Calculator />} /><Route path="/notas" element={<Notes />} />
          <Route path="/simulado" element={<Simulado />} /><Route path="/redacao" element={<Redacao />} /><Route path="/revisao" element={<Revisao />} /><Route path="/flashcards" element={<Flashcards />} /><Route path="/plano" element={<Plano />} /><Route path="/planos" element={<Planos />} />
        </Route>
      </Routes></div>
    </main>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><ProgressProvider><AppShell /></ProgressProvider></BrowserRouter></React.StrictMode>)
