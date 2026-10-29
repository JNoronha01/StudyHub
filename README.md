# ✦ StudyHub

[![CI](https://github.com/JNoronha01/StudyHub/actions/workflows/ci.yml/badge.svg)](https://github.com/JNoronha01/StudyHub/actions/workflows/ci.yml)

Plataforma de estudos para o **ENEM e vestibulares**: aulas objetivas das 12 matérias, simulados com nota estimada no estilo da TRI, caderno de erros com revisão espaçada, flashcards, plano de estudos até a prova e um módulo completo de **redação nota 1000**, com correção por IA.

## Funcionalidades

| | |
|---|---|
| 📚 **Central de estudos** | 56 tópicos com teoria, exemplos resolvidos, resumo, erros comuns, fórmulas (LaTeX) e ~250 exercícios comentados |
| 📝 **Simulado ENEM** | Por área, com cronômetro de 3 min/questão, nota estimada (300–1000) que pune respostas incoerentes como a TRI, desempenho por matéria e histórico |
| 🔁 **Caderno de erros** | Todo erro volta em 1, 3, 7 e 15 dias até ser dominado (revisão espaçada) |
| ✍️ **Redação** | 8 aulas, redação-modelo comentada, banco de repertórios por eixo, temas oficiais 2014–2024, conectivos e editor com análise instantânea dos 5 elementos da proposta |
| ✦ **Tutor com IA** | "Explica de novo" nas questões e correção de redação por competência (Claude, via Supabase Edge Function) |
| 📅 **Plano de estudos** | Cronograma semanal até a data da prova, priorizando o que mais cai |
| 🃏 **Flashcards** | Cartões com virada 3D a partir das fórmulas e exercícios |
| 🏆 **Gamificação** | XP, níveis, sequência de dias e 10 medalhas |

## Stack

React 18 + TypeScript + Vite · Tailwind CSS · Supabase (Auth, Postgres com RLS, Edge Functions) · KaTeX · Vitest · GitHub Actions · Vercel

## Começar localmente

1. `npm install`
2. Crie um projeto no Supabase, rode `supabase-schema.sql` no SQL Editor e copie `.env.example` para `.env` com a URL e a chave anon.
3. `npm run dev`

Use a URL de **Supabase > Project Settings > API > Project URL** (formato `https://abcdefghijklmnop.supabase.co`, sem `/rest/v1/` no final). O app exige login: `/login` é a única rota pública.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm test` | Testes (validação de todo o conteúdo + regras de pontuação, revisão e plano) |
| `npm run build` | Typecheck + build de produção |

### Tutor com IA (opcional)

A chave da Anthropic fica só no servidor, nunca no navegador. Com a [CLI do Supabase](https://supabase.com/docs/guides/cli):

```bash
supabase secrets set ANTHROPIC_API_KEY=sua-chave
supabase functions deploy tutor
```

O plano gratuito tem 3 correções de redação e 30 explicações por mês (tabela `ai_usage`); os limites ficam em `supabase/functions/tutor/index.ts`.

### Contas de teste

Em **Authentication > Providers > Email**, desative **Confirm email** para um teste fechado. Em **Authentication > URL Configuration**, cadastre a URL local e a da Vercel.

## Conteúdo

- Tópicos: `src/content/topics/`, um arquivo por matéria. Use `$...$` para fórmulas.
- Redação: `src/content/redacao.ts`.
- Fórmulas: `src/content/formulas.ts`.

Todo conteúdo é validado por `src/content/content.test.ts` (gabaritos, LaTeX, ids e cobertura das matérias).

## Publicar na Vercel

1. Importe o repositório na Vercel (preset Vite; `vercel.json` define build e rotas).
2. Em **Settings > Environment Variables**, defina `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`. A chave `anon` é pública por desenho; a segurança vem do RLS.
3. No Supabase, cadastre o domínio da Vercel em **Authentication > URL Configuration**.
