-- Paywall full economics cases at the database layer.
-- Previously any signed-in account could SELECT every row (demo + full).
-- Demo rows stay readable; full rows require a Full Course enrollment or admin.

drop policy if exists "Authenticated can view economics cases" on public.economics_cases;
drop policy if exists "Authenticated can view entitled economics cases" on public.economics_cases;

create policy "Authenticated can view entitled economics cases"
  on public.economics_cases
  for select
  to authenticated
  using (
    tier = 'demo'
    or public.is_admin_caller()
    or exists (
      select 1
      from public.enrollments e
      where e.user_id = auth.uid()
        and e.tier = 'full'
    )
  );
