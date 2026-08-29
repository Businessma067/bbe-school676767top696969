-- Revoke all Full Course enrollments (reset access).
-- Paid unlocks must go through checkout / promocode (service role) going forward.

DELETE FROM public.enrollments
WHERE product_slug = 'full-course'
   OR tier = 'full';

-- Block clients from self-enrolling into paid tiers (demo remains allowed).
CREATE OR REPLACE FUNCTION public.block_client_paid_enrollment()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.tier IN ('full', 'lite')
     AND coalesce(auth.jwt() ->> 'role', '') IS DISTINCT FROM 'service_role' THEN
    RAISE EXCEPTION 'Paid course enrollment requires checkout or a promocode';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enrollments_block_client_paid ON public.enrollments;
CREATE TRIGGER enrollments_block_client_paid
  BEFORE INSERT OR UPDATE ON public.enrollments
  FOR EACH ROW
  EXECUTE FUNCTION public.block_client_paid_enrollment();
