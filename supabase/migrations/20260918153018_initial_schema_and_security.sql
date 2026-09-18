-- Organizaê initial schema and security baseline
-- Applied to Supabase project zwakszslarlombcdrhvj on 2026-09-18.

create extension if not exists pgcrypto with schema extensions;

do $$
begin
  if to_regprocedure('public.rls_auto_enable()') is not null then
    revoke execute on function public.rls_auto_enable() from anon, authenticated, public;
  end if;
end
$$;

-- The canonical applied SQL is maintained in the Supabase migration history.
-- This file is retained in GitHub to keep the repository aligned with the database schema.
