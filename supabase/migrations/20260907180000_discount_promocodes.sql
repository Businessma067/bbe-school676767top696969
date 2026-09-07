-- Multi-use 15% discount promocodes (lite + full), usage tracking, expiry.
-- Safe to re-run (idempotent).

ALTER TABLE public.promocodes
  ADD COLUMN IF NOT EXISTS kind text NOT NULL DEFAULT 'unlock',
  ADD COLUMN IF NOT EXISTS discount_pct integer NULL,
  ADD COLUMN IF NOT EXISTS max_uses integer NULL,
  ADD COLUMN IF NOT EXISTS expires_at timestamptz NULL,
  ADD COLUMN IF NOT EXISTS name text NULL;

COMMENT ON COLUMN public.promocodes.kind IS 'unlock = one-time free enrollment; discount = percent off checkout';
COMMENT ON COLUMN public.promocodes.max_uses IS 'NULL means unlimited uses (discount codes)';

ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS promo_code text NULL;

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

-- 10 unlimited 15% discount codes for lite + full, expire 90 days from 2026-09-07.
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15-7A3DCE', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · 7A3DCE'),
  ('BBE-15-D4ED00', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · D4ED00'),
  ('BBE-15-BDFD7A', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · BDFD7A'),
  ('BBE-15-365CF4', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · 365CF4'),
  ('BBE-15-C0D548', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · C0D548'),
  ('BBE-15-CA5B41', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · CA5B41'),
  ('BBE-15-A3466D', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · A3466D'),
  ('BBE-15-0D260B', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · 0D260B'),
  ('BBE-15-10C6E9', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · 10C6E9'),
  ('BBE-15-CA3022', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · CA3022')
ON CONFLICT (code) DO NOTHING;

-- Keep the legacy hardcoded discount code in DB as well (unlimited, same expiry window).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-JFKDJT15', 'any-paid', 'discount', 15, NULL, '2026-12-06T23:59:59+00:00', 'BBE 15% · Legacy')
ON CONFLICT (code) DO NOTHING;
