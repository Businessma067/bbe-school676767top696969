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
