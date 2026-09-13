-- One-shot bootstrap: create promocodes stack (if missing) + seed 2× 30% Full Course codes.
-- Paste into Lovable / Supabase SQL Editor and Run.
-- Idempotent (safe to re-run).

CREATE OR REPLACE FUNCTION public.is_admin_caller()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT lower(coalesce(auth.jwt() ->> 'email', '')) = ANY (
    ARRAY[
      'georgtyrin@gmail.com',
      'info@spray-go.com'
    ]
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_admin_caller() TO authenticated;

CREATE TABLE IF NOT EXISTS public.promocodes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL,
  product_slug text NOT NULL DEFAULT 'full-course',
  used_at timestamptz NULL,
  used_by uuid NULL,
  used_by_email text NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT promocodes_code_unique UNIQUE (code)
);

CREATE INDEX IF NOT EXISTS promocodes_used_at_idx ON public.promocodes (used_at);

ALTER TABLE public.promocodes
  ADD COLUMN IF NOT EXISTS kind text NOT NULL DEFAULT 'unlock',
  ADD COLUMN IF NOT EXISTS discount_pct integer NULL,
  ADD COLUMN IF NOT EXISTS max_uses integer NULL,
  ADD COLUMN IF NOT EXISTS expires_at timestamptz NULL,
  ADD COLUMN IF NOT EXISTS name text NULL;

COMMENT ON COLUMN public.promocodes.kind IS 'unlock = one-time free enrollment; discount = percent off checkout';
COMMENT ON COLUMN public.promocodes.max_uses IS 'NULL means unlimited uses (discount codes)';

GRANT ALL ON public.promocodes TO service_role;
GRANT SELECT ON public.promocodes TO authenticated;

ALTER TABLE public.promocodes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin read promocodes" ON public.promocodes;
CREATE POLICY "Admin read promocodes"
  ON public.promocodes FOR SELECT TO authenticated
  USING (public.is_admin_caller());

CREATE TABLE IF NOT EXISTS public.promo_redeem_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  code_attempted text NOT NULL DEFAULT '',
  success boolean NOT NULL DEFAULT false,
  user_id uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS promo_redeem_attempts_ip_created_idx
  ON public.promo_redeem_attempts (ip_address, created_at DESC);

GRANT ALL ON public.promo_redeem_attempts TO service_role;
GRANT SELECT ON public.promo_redeem_attempts TO authenticated;

ALTER TABLE public.promo_redeem_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin read promo redeem attempts" ON public.promo_redeem_attempts;
CREATE POLICY "Admin read promo redeem attempts"
  ON public.promo_redeem_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller());

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'payments'
  ) THEN
    ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS promo_code text NULL;
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.promo_usages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  promocode_id uuid NOT NULL REFERENCES public.promocodes (id) ON DELETE CASCADE,
  code text NOT NULL,
  user_id uuid NULL,
  user_email text NULL,
  product_slug text NOT NULL,
  payment_id uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS promo_usages_promocode_id_idx ON public.promo_usages (promocode_id);
CREATE INDEX IF NOT EXISTS promo_usages_code_idx ON public.promo_usages (code);
CREATE UNIQUE INDEX IF NOT EXISTS promo_usages_payment_id_unique
  ON public.promo_usages (payment_id);

GRANT ALL ON public.promo_usages TO service_role;
GRANT SELECT ON public.promo_usages TO authenticated;

ALTER TABLE public.promo_usages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin read promo usages" ON public.promo_usages;
CREATE POLICY "Admin read promo usages"
  ON public.promo_usages FOR SELECT TO authenticated
  USING (public.is_admin_caller());

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-30-0B49A5', 'full-course', 'discount', 30, NULL, '2026-12-06T23:59:59+00:00', 'BBE 30% Full · 0B49A5'),
  ('BBE-30-04FAFE', 'full-course', 'discount', 30, NULL, '2026-12-06T23:59:59+00:00', 'BBE 30% Full · 04FAFE')
ON CONFLICT (code) DO NOTHING;

-- Restore unlimited discount codes if an older claim-on-apply path muted them.
UPDATE public.promocodes
SET
  used_at = NULL,
  used_by = NULL,
  used_by_email = NULL
WHERE kind = 'discount'
  AND used_at IS NOT NULL;

UPDATE public.promocodes
SET max_uses = NULL
WHERE kind = 'discount'
  AND (
    code LIKE 'BBE-15-%'
    OR code LIKE 'BBE-30-%'
    OR upper(code) = 'BBE-JFKDJT15'
  );


-- Sticky per-account discount claims: after Apply, that user forever pays the
-- discounted price. Discount codes stay multi-use across accounts (max_uses NULL).
-- Safe to re-run (idempotent).

CREATE TABLE IF NOT EXISTS public.user_discount_claims (
  user_id uuid PRIMARY KEY,
  promocode_id uuid NULL REFERENCES public.promocodes (id) ON DELETE SET NULL,
  code text NOT NULL,
  discount_pct integer NOT NULL CHECK (discount_pct > 0 AND discount_pct <= 100),
  claimed_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS user_discount_claims_code_idx
  ON public.user_discount_claims (code);

COMMENT ON TABLE public.user_discount_claims IS
  'One sticky discount per user. Set when Apply is clicked; checkout always uses this price.';

GRANT ALL ON public.user_discount_claims TO service_role;
GRANT SELECT ON public.user_discount_claims TO authenticated;

ALTER TABLE public.user_discount_claims ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own discount claim" ON public.user_discount_claims;
CREATE POLICY "Users read own discount claim"
  ON public.user_discount_claims FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read discount claims" ON public.user_discount_claims;
CREATE POLICY "Admin read discount claims"
  ON public.user_discount_claims FOR SELECT TO authenticated
  USING (public.is_admin_caller());

-- One usage row per user+code (marks the code used for that account on Apply).
CREATE UNIQUE INDEX IF NOT EXISTS promo_usages_user_code_unique
  ON public.promo_usages (user_id, code)
  WHERE user_id IS NOT NULL;


-- Single-use 15% discounts; remove unlock + 30% full codes
-- 15% discount codes: single-use only.
-- Remove unlock (free full-course) promocodes and 30% full-only codes.
-- Safe to re-run.

-- Discount codes may be used by exactly one account.
UPDATE public.promocodes
SET max_uses = 1
WHERE kind = 'discount';

COMMENT ON COLUMN public.promocodes.max_uses IS
  'Use limit. Discount codes use 1 (single-use). NULL was unlimited (legacy).';

-- Drop free full-course unlock codes.
DELETE FROM public.promocodes
WHERE kind = 'unlock'
   OR code LIKE 'BBE-FREE-%'
   OR code LIKE 'BBE-FREE-%';

-- Drop full-course-only 30% codes (keep only shared 15% discount codes).
DELETE FROM public.promocodes
WHERE code LIKE 'BBE-30-%'
   OR (kind = 'discount' AND product_slug = 'full-course' AND discount_pct = 30);


-- Seed 5 unlimited + 20 single-use 15% + restore unlocks
-- Seed: 5× unlimited 15% codes, 20× single-use 15% codes.
-- Restore full-course unlock (BBE-FREE-*) codes.
-- Safe to re-run (idempotent).

-- Unlimited 15% (max_uses NULL = infinite).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15U-A7K2M9', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · A7K2M9'),
  ('BBE-15U-B3N8Q1', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · B3N8Q1'),
  ('BBE-15U-C5P4R6', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · C5P4R6'),
  ('BBE-15U-D9T2W4', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · D9T2W4'),
  ('BBE-15U-E1X7Y3', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · E1X7Y3')
ON CONFLICT (code) DO UPDATE
SET
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = NULL,
  product_slug = EXCLUDED.product_slug,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name,
  used_at = NULL,
  used_by = NULL,
  used_by_email = NULL;

-- Single-use 15% (max_uses = 1).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15S-F2H8J4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · F2H8J4'),
  ('BBE-15S-G6K1L9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · G6K1L9'),
  ('BBE-15S-H3M5N7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · H3M5N7'),
  ('BBE-15S-J8P2Q6', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · J8P2Q6'),
  ('BBE-15S-K4R9T1', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · K4R9T1'),
  ('BBE-15S-L7V3W5', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · L7V3W5'),
  ('BBE-15S-M1X6Y8', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · M1X6Y8'),
  ('BBE-15S-N9A2B4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · N9A2B4'),
  ('BBE-15S-P5C8D3', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · P5C8D3'),
  ('BBE-15S-Q2E7F9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Q2E7F9'),
  ('BBE-15S-R6G1H4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · R6G1H4'),
  ('BBE-15S-S3J8K2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · S3J8K2'),
  ('BBE-15S-T9L4M7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · T9L4M7'),
  ('BBE-15S-V1N5P8', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · V1N5P8'),
  ('BBE-15S-W4Q6R2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · W4Q6R2'),
  ('BBE-15S-X8S1T5', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · X8S1T5'),
  ('BBE-15S-Y2U7V9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Y2U7V9'),
  ('BBE-15S-Z5W3X6', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Z5W3X6'),
  ('BBE-15S-A8Y1B7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · A8Y1B7'),
  ('BBE-15S-C3D9E2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · C3D9E2')
ON CONFLICT (code) DO UPDATE
SET
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = 1,
  product_slug = EXCLUDED.product_slug,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name;

-- Restore original full-course unlock codes (one-time free Full Course).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-FREE-2JH3JC', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · 2JH3JC'),
  ('BBE-FREE-9BT2Y3', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · 9BT2Y3'),
  ('BBE-FREE-B3AHAS', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · B3AHAS'),
  ('BBE-FREE-DXEHZ5', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · DXEHZ5'),
  ('BBE-FREE-R4229B', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · R4229B'),
  ('BBE-FREE-SV6E64', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · SV6E64'),
  ('BBE-FREE-VZ4Q6F', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · VZ4Q6F'),
  ('BBE-FREE-WW6NBW', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · WW6NBW'),
  ('BBE-FREE-WWDC5Y', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · WWDC5Y'),
  ('BBE-FREE-ZXTE5Y', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · ZXTE5Y')
ON CONFLICT (code) DO UPDATE
SET
  kind = 'unlock',
  product_slug = 'full-course',
  discount_pct = NULL,
  max_uses = 1,
  name = EXCLUDED.name;

COMMENT ON COLUMN public.promocodes.max_uses IS
  'NULL = unlimited uses (multi-use discount). 1 = single-use. Unlock codes use used_at.';
