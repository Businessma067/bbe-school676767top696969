-- STUDYLINE partner discount: 5% off any paid course, once per account.
-- Safe to re-run (idempotent). Appears on /admin/promocodes after apply.
-- Account limits are enforced in app code and via the unique indexes below.

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('STUDYLINE', 'any-paid', 'discount', 5, NULL, NULL, 'Studyline 5% · once per account')
ON CONFLICT (code) DO UPDATE
SET
  product_slug = EXCLUDED.product_slug,
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = EXCLUDED.max_uses,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name;

-- One pending/paid STUDYLINE checkout per account (failed/expired/reversed may retry).
CREATE UNIQUE INDEX IF NOT EXISTS payments_studyline_once_per_account
  ON public.payments (user_id)
  WHERE upper(promo_code) = 'STUDYLINE'
    AND status NOT IN ('failure', 'expired', 'reversed');

-- One recorded STUDYLINE usage per account (admin tracking + re-apply block).
CREATE UNIQUE INDEX IF NOT EXISTS promo_usages_studyline_once_per_account
  ON public.promo_usages (user_id)
  WHERE upper(code) = 'STUDYLINE';
