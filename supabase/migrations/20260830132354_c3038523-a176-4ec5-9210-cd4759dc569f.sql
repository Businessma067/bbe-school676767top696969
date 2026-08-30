-- 1. economics_cases: paywall non-demo content
drop policy if exists "Anyone can view economics cases" on public.economics_cases;
create policy "Anon can view demo economics cases"
  on public.economics_cases for select to anon
  using (tier = 'demo');
create policy "Authenticated can view economics cases"
  on public.economics_cases for select to authenticated
  using (true);

-- 2. is_admin_caller no longer needs elevated rights (reads JWT only)
create or replace function public.is_admin_caller()
returns boolean
language sql
stable
security invoker
set search_path = public
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = any (
    array['georgtyrin@gmail.com', 'info@spray-go.com']
  );
$$;

-- 3. admin_list_users is only invoked server-side with elevated credentials
revoke execute on function public.admin_list_users() from authenticated, anon, public;
grant execute on function public.admin_list_users() to service_role;

-- 4. explicit storage policies for the private app-data bucket (admins only; server uses service role)
drop policy if exists "Admins manage app-data objects" on storage.objects;
create policy "Admins manage app-data objects"
  on storage.objects for all to authenticated
  using (bucket_id = 'app-data' and public.is_admin_caller())
  with check (bucket_id = 'app-data' and public.is_admin_caller());
