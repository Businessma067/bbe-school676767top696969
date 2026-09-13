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
