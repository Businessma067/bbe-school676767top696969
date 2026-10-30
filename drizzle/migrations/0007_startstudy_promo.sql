-- STARTSTUDY: 10% partner discount, one per account forever, every paid course
-- (same rules as STUDYLINE / VSTUPUNI).

ALTER TABLE public.account_partner_bindings
  DROP CONSTRAINT IF EXISTS account_partner_bindings_code_check;

ALTER TABLE public.account_partner_bindings
  ADD CONSTRAINT account_partner_bindings_code_check
  CHECK (upper(code) IN ('STUDYLINE', 'VSTUPUNI', 'STARTSTUDY'));

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('STARTSTUDY', 'any-paid', 'discount', 10, NULL, NULL, 'Start Study')
ON CONFLICT (code) DO UPDATE SET
  product_slug = EXCLUDED.product_slug,
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = EXCLUDED.max_uses,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name;

-- Backfill bindings if anyone already used STARTSTUDY before this seed.
INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  'STARTSTUDY',
  10,
  updated_at
FROM public.promo_course_selections
WHERE upper(code) = 'STARTSTUDY'
ORDER BY user_id, updated_at ASC
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  'STARTSTUDY',
  10,
  created_at
FROM public.promo_usages
WHERE user_id IS NOT NULL
  AND upper(code) = 'STARTSTUDY'
ORDER BY user_id, created_at ASC
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  'STARTSTUDY',
  10,
  coalesce(created_at, now())
FROM public.payments
WHERE user_id IS NOT NULL
  AND promo_code IS NOT NULL
  AND upper(promo_code) = 'STARTSTUDY'
  AND status NOT IN ('failure', 'expired', 'reversed')
ORDER BY user_id, created_at ASC NULLS LAST
ON CONFLICT (user_id) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
