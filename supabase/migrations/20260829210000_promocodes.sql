-- One-time Full Course promocodes + IP-based redeem attempt tracking.
-- Safe to re-run (idempotent).

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

INSERT INTO public.promocodes (code, product_slug) VALUES
  ('BBE-FREE-2JH3JC', 'full-course'),
  ('BBE-FREE-9BT2Y3', 'full-course'),
  ('BBE-FREE-B3AHAS', 'full-course'),
  ('BBE-FREE-DXEHZ5', 'full-course'),
  ('BBE-FREE-R4229B', 'full-course'),
  ('BBE-FREE-SV6E64', 'full-course'),
  ('BBE-FREE-VZ4Q6F', 'full-course'),
  ('BBE-FREE-WW6NBW', 'full-course'),
  ('BBE-FREE-WWDC5Y', 'full-course'),
  ('BBE-FREE-ZXTE5Y', 'full-course')
ON CONFLICT (code) DO NOTHING;
