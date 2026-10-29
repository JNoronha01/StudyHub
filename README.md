# StudyHub

Minha pequena "Startup": um aplicativo de estudos focado em pessoas que estão se preparando para vestibulares, estudantes do ensino médio e quem quer relembrar conteúdos e manter o cérebro em atividade.

## Começar localmente

1. `npm install`
2. Crie um projeto no Supabase, rode `supabase-schema.sql` no SQL Editor e copie `.env.example` para `.env` com URL e chave anon.
3. Execute `npm run dev`.

Sem `.env`, o caderno usa `localStorage` e um aviso aparece na tela. O progresso, favoritos e respostas também ficam salvos no navegador enquanto a sincronização com o Supabase não for implementada.

Com `.env` e usuário autenticado, progresso, favoritos, notas e respostas dos exercícios são sincronizados no Supabase. Pessoas sem login continuam podendo testar o app localmente no navegador.

Use a URL real exibida em **Supabase > Project Settings > API > Project URL**. Ela terá um formato parecido com `https://abcdefghijklmnop.supabase.co`; não use `https://studyhub.supabase.co` como exemplo literal.

O app exige login para acessar a área de estudos. `/login` é a única rota pública; qualquer tentativa de abrir estudos, notas ou calculadora sem sessão redireciona para o login e retorna à rota original depois da autenticação.

### Contas de teste

Depois de executar o schema, vá em **Authentication > Providers > Email** no Supabase. Para um teste fechado do MVP, você pode desativar **Confirm email**, assim os convidados conseguem criar a conta e entrar imediatamente. Se deixar ativado, eles precisam clicar no link enviado por e-mail. Em **Authentication > URL Configuration**, cadastre a URL local e a URL da Vercel.

## Central de Estudos

Os conteúdos ficam em `src/content/topics.ts`, organizados em Aprender, Resumo, Fórmulas e Exercícios. Use `$...$` para fórmulas no texto. O catálogo de fórmulas fica em `src/content/formulas.ts`.

## Publicar na Vercel

1. Envie o projeto ao GitHub e importe o repositório na Vercel (preset Vite; `vercel.json` define build e rotas).
2. Em **Settings > Environment Variables**, defina `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`. A chave `anon` é pública por desenho; a segurança vem do RLS.
3. No Supabase, em **Authentication > URL Configuration**, cadastre o domínio da Vercel.
