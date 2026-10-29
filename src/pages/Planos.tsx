import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../lib/useAuth'

const free = ['Todas as aulas e resumos das 12 matérias', 'Exercícios comentados', 'Simulados com nota estimada', 'Caderno de erros e flashcards', 'Plano de estudos até a prova', '3 correções de redação com IA por mês', '30 explicações do tutor por mês']
const pro = ['Tudo do plano Grátis', 'Correções de redação com IA ilimitadas*', 'Tutor com IA ilimitado*', 'Simulados completos de 180 questões', 'Relatórios de evolução por competência', 'Sincronização do caderno de erros e do plano em todos os dispositivos', 'Suporte prioritário']

export default function Planos() {
  const { user } = useAuth()
  const [status, setStatus] = useState<'idle' | 'saving' | 'in' | 'error'>('idle')
  useEffect(() => {
    if (!supabase || !user) return
    supabase.from('waitlist').select('user_id').eq('user_id', user.id).maybeSingle().then(({ data }) => { if (data) setStatus('in') })
  }, [user])
  const join = async () => {
    if (!supabase || !user?.email) return
    setStatus('saving')
    const { error } = await supabase.from('waitlist').upsert({ user_id: user.id, email: user.email, plan: 'pro' })
    setStatus(error ? 'error' : 'in')
  }
  return <div className="page max-w-5xl">
    <div className="text-center mt-8"><span className="tag">PLANOS</span><h1 className="page-title mt-3">Estude grátis. <span>Acelere com o Pro.</span></h1>
      <p className="page-sub mx-auto">O essencial para a aprovação é gratuito. O Pro é para quem quer correção ilimitada de redação e um tutor sempre disponível.</p></div>
    <div className="grid md:grid-cols-2 gap-5 mt-8 stagger">
      <div className="card p-7"><h2 className="m-0 text-xl font-bold">Grátis</h2><div className="flex items-baseline gap-1 mt-3"><span className="text-4xl font-black">R$ 0</span><span className="text-slate-400">/sempre</span></div>
        <ul className="list-none p-0 mt-6 grid gap-3">{free.map(f => <li key={f} className="flex gap-3 text-sm text-slate-300"><span className="text-sky-300">✓</span>{f}</li>)}</ul>
        <span className="btn-ghost mt-6 w-full justify-center">Seu plano atual</span></div>
      <div className="card p-7 relative overflow-hidden" style={{ borderColor: 'rgba(76,141,255,.7)', boxShadow: '0 20px 60px rgba(76,141,255,.25)' }}>
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,189,248,.35), transparent 70%)', animation: 'float 7s ease-in-out infinite' }} />
        <div className="relative"><div className="flex items-center gap-2"><h2 className="m-0 text-xl font-bold">Pro</h2><span className="tag">EM BREVE</span></div>
          <div className="flex items-baseline gap-1 mt-3"><span className="text-4xl font-black">R$ 19,90</span><span className="text-slate-400">/mês</span></div><small className="text-sky-300">ou R$ 149 por ano (2 meses grátis)</small>
          <ul className="list-none p-0 mt-6 grid gap-3">{pro.map(f => <li key={f} className="flex gap-3 text-sm text-slate-200"><span className="text-sky-300">✦</span>{f}</li>)}</ul>
          {status === 'in' ? <div className="btn mt-6 w-full" style={{ cursor: 'default' }}>✓ Você está na lista de espera</div>
            : <button className="btn mt-6 w-full" onClick={join} disabled={status === 'saving' || !user}>{status === 'saving' ? 'Entrando…' : 'Quero ser avisado do lançamento'}</button>}
          {status === 'error' && <p className="text-amber-300 text-xs mt-2">Não foi possível entrar na lista agora. Tente de novo mais tarde.</p>}
          <p className="text-xs text-slate-500 mt-3 mb-0">Quem entrar na lista terá preço de fundador. *Sujeito a uso justo.</p></div>
      </div>
    </div>
    <div className="grid sm:grid-cols-3 gap-3 mt-8 stagger">{[['🎯', 'Foco no ENEM', 'Conteúdo organizado pelo que mais cai na prova.'], ['🧠', 'Aprende com o erro', 'Revisão espaçada transforma erros em acertos.'], ['✍️', 'Redação 1000', 'Aulas, modelo comentado e correção com IA.']].map(([i, t, d]) => <div key={t} className="card text-center"><div className="text-3xl">{i}</div><b className="block mt-2">{t}</b><small className="text-slate-400">{d}</small></div>)}</div>
  </div>
}
