-- Prefer supabase/migrations/20261028150000_studyline_promocode.sql (seed + indexes).
-- Kept here so drizzle journal stays consistent with existing deploys.
CREATE UNIQUE INDEX IF NOT EXISTS payments_studyline_once_per_account ON public.payments (user_id) WHERE upper(promo_code) = 'STUDYLINE' AND status NOT IN ('failure', 'expired', 'reversed');
CREATE UNIQUE INDEX IF NOT EXISTS promo_usages_studyline_once_per_account ON public.promo_usages (user_id) WHERE upper(code) = 'STUDYLINE';