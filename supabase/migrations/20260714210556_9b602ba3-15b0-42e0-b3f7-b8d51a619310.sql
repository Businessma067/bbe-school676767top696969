GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.practice_sessions TO authenticated;
GRANT ALL ON public.practice_sessions TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.session_answers TO authenticated;
GRANT ALL ON public.session_answers TO service_role;