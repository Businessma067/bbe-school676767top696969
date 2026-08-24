-- Allow both hardcoded admin emails to read all user data and list accounts.
-- Run in Supabase SQL Editor if not applied via migrations.

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

DROP POLICY IF EXISTS "Admin read all profiles" ON public.profiles;
CREATE POLICY "Admin read all profiles"
  ON public.profiles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all user roles" ON public.user_roles;
CREATE POLICY "Admin read all user roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all enrollments" ON public.enrollments;
CREATE POLICY "Admin read all enrollments"
  ON public.enrollments FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all task attempts" ON public.task_attempts;
CREATE POLICY "Admin read all task attempts"
  ON public.task_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all mock attempts" ON public.mock_attempts;
CREATE POLICY "Admin read all mock attempts"
  ON public.mock_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all practice sessions" ON public.practice_sessions;
CREATE POLICY "Admin read all practice sessions"
  ON public.practice_sessions FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all session answers" ON public.session_answers;
CREATE POLICY "Admin read all session answers"
  ON public.session_answers FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin read all custom mocks" ON public.custom_mocks;
CREATE POLICY "Admin read all custom mocks"
  ON public.custom_mocks FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.admin_list_users()
RETURNS TABLE (
  user_id uuid,
  email text,
  display_name text,
  registered_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_caller() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;

  RETURN QUERY
  SELECT
    u.id AS user_id,
    u.email::text,
    COALESCE(p.display_name, split_part(u.email::text, '@', 1)) AS display_name,
    COALESCE(p.created_at, u.created_at) AS registered_at
  FROM auth.users u
  LEFT JOIN public.profiles p ON p.user_id = u.id
  WHERE u.email IS NOT NULL
  ORDER BY COALESCE(p.created_at, u.created_at) DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_list_users() TO authenticated;
