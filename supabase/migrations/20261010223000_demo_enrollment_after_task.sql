-- Demo Practice Package is earned by finishing a demo task, not by signing up.

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

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Take the package back from accounts that never submitted a task.
DELETE FROM public.enrollments e
WHERE e.product_slug = 'demo-practice'
  AND NOT EXISTS (
    SELECT 1
    FROM public.task_attempts t
    WHERE t.user_id = e.user_id
  );

-- Anyone who already finished a demo task, or practiced without a paid course.
INSERT INTO public.enrollments (user_id, product_slug, product_name, tier, created_at)
SELECT t.user_id, 'demo-practice', 'Demo Practice Package', 'demo', MIN(t.created_at)
FROM public.task_attempts t
WHERE t.task_key LIKE 'demo:%'
   OR NOT EXISTS (
     SELECT 1
     FROM public.enrollments p
     WHERE p.user_id = t.user_id
       AND p.tier IN ('full', 'lite')
   )
GROUP BY t.user_id
ON CONFLICT (user_id, product_slug) DO NOTHING;
