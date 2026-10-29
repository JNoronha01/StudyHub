import { FormEvent, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../lib/useAuth'

export default function Login() {
  const { user, loading, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const destination = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/'

  useEffect(() => {
    if (user && !loading && location.pathname === '/login') navigate(destination, { replace: true })
  }, [destination, loading, location.pathname, navigate, user])

  if (user && !loading) {
    return <div className="max-w-md space-y-4"><p className="eyebrow">CONTA ATIVA</p><h1 className="text-2xl font-bold">Olá, {user.user_metadata?.display_name || user.email?.split('@')[0]} 👋</h1><p className="text-slate-400">Seus favoritos, progresso e notas ficam associados a esta conta.</p><button onClick={() => signOut()} className="bg-brand rounded px-4 py-2">Sair da conta</button></div>
  }

  if (!supabase) return <div className="max-w-sm space-y-3"><h1 className="text-2xl font-bold">Minha conta</h1><p className="text-amber-400">Configure o arquivo `.env` com os dados do Supabase para ativar contas.</p></div>
  if (loading) return <p>Verificando sua sessão...</p>

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setMessage('')
    if (password.length < 6) { setMessage('A senha precisa ter pelo menos 6 caracteres.'); return }
    if (mode === 'signup' && !name.trim()) { setMessage('Digite seu nome.'); return }
    setBusy(true)
    try {
      const result = mode === 'signup'
        ? await supabase!.auth.signUp({ email: email.trim(), password, options: { data: { display_name: name.trim() }, emailRedirectTo: window.location.origin } })
        : await supabase!.auth.signInWithPassword({ email: email.trim(), password })
      if (result.error) setMessage(result.error.message)
      else setMessage(mode === 'signup' ? 'Conta criada! Verifique seu e-mail antes de entrar.' : 'Login realizado!')
    } catch (error) {
      const detail = error instanceof TypeError && error.message === 'Failed to fetch'
        ? 'Não foi possível conectar ao Supabase. Confira VITE_SUPABASE_URL no arquivo .env e reinicie o servidor.'
        : error instanceof Error ? error.message : 'Não foi possível concluir a operação.'
      setMessage(detail)
    } finally {
      setBusy(false)
    }
  }

  return <div className="max-w-sm space-y-4">
    <div><p className="eyebrow">{mode === 'login' ? 'BEM-VINDO DE VOLTA' : 'COMECE AGORA'}</p><h1 className="text-2xl font-bold">{mode === 'login' ? 'Entrar no StudyHub' : 'Criar seu perfil'}</h1><p className="text-slate-400 mt-1 text-sm">{mode === 'login' ? 'Continue sua rotina de estudos.' : 'Salve seu progresso em qualquer dispositivo.'}</p></div>
    <form onSubmit={submit} className="space-y-3">
      {mode === 'signup' && <input required aria-label="Nome" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} className="w-full bg-card border border-line rounded p-2" />}
      <input required aria-label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-card border border-line rounded p-2" />
      <input required aria-label="Senha" type="password" minLength={6} placeholder="Senha (mínimo 6 caracteres)" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-card border border-line rounded p-2" />
      <button disabled={busy} type="submit" className="w-full bg-brand rounded px-3 py-2 disabled:opacity-60">{busy ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}</button>
    </form>
    {message && <p role="status" className={message.includes('realizado') || message.includes('criada') ? 'text-green-400' : 'text-red-400'}>{message}</p>}
    <button className="text-brand text-sm" onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setMessage('') }}>{mode === 'login' ? 'Ainda não tenho uma conta' : 'Já tenho uma conta'}</button>
    <p className="text-slate-500 text-xs">Ao continuar, você concorda em usar o StudyHub para fins de teste do MVP.</p>
    <Link to="/" className="text-brand text-sm">← Voltar ao início</Link>
  </div>
}
