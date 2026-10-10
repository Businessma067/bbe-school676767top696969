-- Every account gets the free Demo Practice Package.
-- Signup previously created a profile only, so people who practiced
-- without opening the demo product page stayed on "No enrollment."

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (
    NEW.id,
    COALESCE(
      NULLIF(NEW.raw_user_meta_data->>'display_name', ''),
      NULLIF(NEW.raw_user_meta_data->>'name', ''),
      split_part(NEW.email, '@', 1)
    )
  )
  ON CONFLICT (user_id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student'::public.app_role)
  ON CONFLICT (user_id, role) DO NOTHING;

  INSERT INTO public.enrollments (user_id, product_slug, product_name, tier, created_at)
  VALUES (NEW.id, 'demo-practice', 'Demo Practice Package', 'demo', NEW.created_at)
  ON CONFLICT (user_id, product_slug) DO NOTHING;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Accounts that already exist (including people who already solved tasks).
INSERT INTO public.enrollments (user_id, product_slug, product_name, tier, created_at)
SELECT u.id, 'demo-practice', 'Demo Practice Package', 'demo', u.created_at
FROM auth.users u
WHERE NOT EXISTS (
  SELECT 1
  FROM public.enrollments e
  WHERE e.user_id = u.id
    AND e.product_slug = 'demo-practice'
);
