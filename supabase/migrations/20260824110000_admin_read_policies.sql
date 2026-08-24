-- Allow georgtyrin@gmail.com to read all user progress data (no service role needed).

CREATE OR REPLACE FUNCTION public.is_admin_caller()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT lower(coalesce(auth.jwt() ->> 'email', '')) = 'georgtyrin@gmail.com';
$$;

GRANT EXECUTE ON FUNCTION public.is_admin_caller() TO authenticated;

CREATE POLICY "Admin read all profiles"
  ON public.profiles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all user roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all enrollments"
  ON public.enrollments FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all task attempts"
  ON public.task_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all mock attempts"
  ON public.mock_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all practice sessions"
  ON public.practice_sessions FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE POLICY "Admin read all session answers"
  ON public.session_answers FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

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
    p.user_id,
    u.email::text,
    p.display_name,
    COALESCE(p.created_at, u.created_at)
  FROM public.profiles p
  JOIN auth.users u ON u.id = p.user_id
  ORDER BY COALESCE(p.created_at, u.created_at) DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_list_users() TO authenticated;
