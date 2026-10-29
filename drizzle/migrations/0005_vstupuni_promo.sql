-- VSTUPUNI: 10% off any paid course, once per account per course (same rules as STUDYLINE).
-- Also re-assert STUDYLINE so both partner codes exist and show usages in /admin/promocodes.

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('STUDYLINE', 'any-paid', 'discount', 5, NULL, NULL, 'Studyline'),
  ('VSTUPUNI', 'any-paid', 'discount', 10, NULL, NULL, 'Vstup Uni')
ON CONFLICT (code) DO UPDATE SET
  product_slug = EXCLUDED.product_slug,
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = EXCLUDED.max_uses,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name;

CREATE UNIQUE INDEX IF NOT EXISTS payments_vstupuni_once_per_account_course
  ON public.payments (user_id, product_slug)
  WHERE upper(promo_code) = 'VSTUPUNI'
    AND status NOT IN ('failure', 'expired', 'reversed');

CREATE UNIQUE INDEX IF NOT EXISTS promo_usages_vstupuni_once_per_account_course
  ON public.promo_usages (user_id, product_slug)
  WHERE upper(code) = 'VSTUPUNI';
