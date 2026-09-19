-- Reliable paid enrollment grants for Monobank / promocode (service path).
-- The client-paid trigger blocks authenticated self-inserts; this SECURITY DEFINER
-- RPC sets a session flag the trigger recognizes so WiSo/BBE purchases always
-- land in `enrollments` (and therefore Dashboard → My courses).

CREATE OR REPLACE FUNCTION public.block_client_paid_enrollment()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.tier IN ('full', 'lite')
     AND coalesce(auth.jwt() ->> 'role', '') IS DISTINCT FROM 'service_role'
     AND coalesce(current_setting('bbe.allow_paid_enrollment', true), '') IS DISTINCT FROM 'on'
  THEN
    RAISE EXCEPTION 'Paid course enrollment requires checkout or a promocode';
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.grant_paid_enrollment(
  p_user_id uuid,
  p_product_slug text,
  p_product_name text,
  p_tier text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM set_config('bbe.allow_paid_enrollment', 'on', true);
  INSERT INTO public.enrollments (user_id, product_slug, product_name, tier)
  VALUES (p_user_id, p_product_slug, p_product_name, p_tier)
  ON CONFLICT (user_id, product_slug) DO UPDATE
    SET product_name = EXCLUDED.product_name,
        tier = EXCLUDED.tier,
        updated_at = now();
END;
$$;

REVOKE ALL ON FUNCTION public.grant_paid_enrollment(uuid, text, text, text) FROM public;
GRANT EXECUTE ON FUNCTION public.grant_paid_enrollment(uuid, text, text, text) TO service_role;
