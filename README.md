# StudyHub AI
1. `npm install`
2. Crie um projeto no Supabase, rode `supabase-schema.sql` no SQL Editor e copie `.env.example` para `.env` com URL e chave anon.
3. `npm run dev` (ou `npm run build` e hospede a pasta `dist` na Vercel/Netlify).
Sem .env o caderno usa localStorage e o aviso aparece na tela.

## Central de Estudos
Conteúdos ficam em `src/content/topics.ts` (um objeto por tópico: Aprender, Resumo, Fórmulas, Exercícios; use `$...$` para fórmulas no texto). O catálogo de fórmulas fica em `src/content/formulas.ts`. Ambos aparecem em **Central de Estudos**; não é preciso mexer nas telas. Progresso, favoritos e respostas ficam no navegador (`localStorage`). A sincronização do progresso com o Supabase ainda não foi implementada.

## Publicar na Vercel
1. Envie o projeto ao GitHub e importe o repositório na Vercel (preset Vite; `vercel.json` já define build e rotas).
2. Em Settings > Environment Variables, defina `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` (a chave anon é pública por desenho; a segurança vem do RLS).
3. No Supabase, em Authentication > URL Configuration, cadastre o domínio da Vercel.

## Se você já tinha ativado o Tutor de IA
Rode no SQL Editor: `drop table if exists messages, conversations;` e no terminal: `supabase functions delete tutor` e `supabase secrets unset OPENAI_API_KEY OPENAI_MODEL OPENAI_BASE_URL`.
