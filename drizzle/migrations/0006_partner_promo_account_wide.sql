-- Partner discounts (STUDYLINE / VSTUPUNI): one code per account forever, every paid course.
-- Drop per-course uniqueness so the same partner code can be used on every course.
-- Bind the account to a single partner code so a second partner code cannot be activated.

DROP INDEX IF EXISTS public.payments_studyline_once_per_account_course;
DROP INDEX IF EXISTS public.promo_usages_studyline_once_per_account_course;
DROP INDEX IF EXISTS public.payments_vstupuni_once_per_account_course;
DROP INDEX IF EXISTS public.promo_usages_vstupuni_once_per_account_course;

CREATE TABLE IF NOT EXISTS public.account_partner_bindings (
  user_id uuid PRIMARY KEY,
  code text NOT NULL,
  discount_pct integer NOT NULL CHECK (discount_pct > 0 AND discount_pct < 100),
  bound_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT account_partner_bindings_code_check
    CHECK (upper(code) IN ('STUDYLINE', 'VSTUPUNI'))
);

CREATE INDEX IF NOT EXISTS account_partner_bindings_code_idx
  ON public.account_partner_bindings (upper(code));

GRANT SELECT ON public.account_partner_bindings TO authenticated;
GRANT ALL ON public.account_partner_bindings TO service_role;

ALTER TABLE public.account_partner_bindings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own partner bindings" ON public.account_partner_bindings;
CREATE POLICY "Users read own partner bindings"
  ON public.account_partner_bindings FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- Seed bindings from existing partner selections / usages / payments (earliest wins).
INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  upper(code),
  CASE upper(code) WHEN 'STUDYLINE' THEN 5 ELSE 10 END,
  updated_at
FROM public.promo_course_selections
WHERE upper(code) IN ('STUDYLINE', 'VSTUPUNI')
ORDER BY user_id, updated_at ASC
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  upper(code),
  CASE upper(code) WHEN 'STUDYLINE' THEN 5 ELSE 10 END,
  created_at
FROM public.promo_usages
WHERE user_id IS NOT NULL
  AND upper(code) IN ('STUDYLINE', 'VSTUPUNI')
ORDER BY user_id, created_at ASC
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.account_partner_bindings (user_id, code, discount_pct, bound_at)
SELECT DISTINCT ON (user_id)
  user_id,
  upper(promo_code),
  CASE upper(promo_code) WHEN 'STUDYLINE' THEN 5 ELSE 10 END,
  coalesce(created_at, now())
FROM public.payments
WHERE user_id IS NOT NULL
  AND promo_code IS NOT NULL
  AND upper(promo_code) IN ('STUDYLINE', 'VSTUPUNI')
  AND status NOT IN ('failure', 'expired', 'reversed')
ORDER BY user_id, created_at ASC NULLS LAST
ON CONFLICT (user_id) DO NOTHING;

-- Keep partner discount rows healthy (never unlock / never single-course).
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

SELECT pg_notify('pgrst', 'reload schema');
