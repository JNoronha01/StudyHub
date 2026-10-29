-- Rode no SQL Editor do Supabase
create table if not exists profiles (id uuid primary key references auth.users on delete cascade, display_name text not null default '', created_at timestamptz not null default now());
alter table profiles enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create table if not exists notes (id uuid primary key default gen_random_uuid(), user_id uuid not null default auth.uid() references auth.users on delete cascade,
  title text not null default '', body text not null default '', subject text, pinned boolean default false, favorite boolean default false, updated_at timestamptz default now());
create table if not exists progress (user_id uuid not null default auth.uid() references auth.users on delete cascade, topic_id text not null, done boolean default false, favorite boolean default false, primary key (user_id, topic_id));
create table if not exists tasks (id uuid primary key default gen_random_uuid(), user_id uuid not null default auth.uid() references auth.users on delete cascade, title text not null, due date, done boolean default false);
create table if not exists attempts (id uuid primary key default gen_random_uuid(), user_id uuid not null default auth.uid() references auth.users on delete cascade, question_id text not null, answer int, correct boolean, created_at timestamptz default now());
create unique index if not exists attempts_user_question_idx on attempts (user_id, question_id);
alter table notes enable row level security; alter table progress enable row level security; alter table tasks enable row level security; alter table attempts enable row level security;
drop policy if exists "own profiles" on profiles;
drop policy if exists "own notes" on notes;
drop policy if exists "own progress" on progress;
drop policy if exists "own tasks" on tasks;
drop policy if exists "own attempts" on attempts;
create policy "own profiles" on profiles for all using (id = auth.uid()) with check (id = auth.uid());
create policy "own notes" on notes for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own progress" on progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own tasks" on tasks for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own attempts" on attempts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
