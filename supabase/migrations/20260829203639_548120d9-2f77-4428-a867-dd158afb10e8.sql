DO $$ BEGIN
  CREATE TYPE public.activity_event_type AS ENUM (
    'page_view','task_start','task_submit','mock_start','mock_submit','mock_abandon',
    'practice_start','practice_complete','theory_open','theory_complete','flashcard_rate','login'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.flashcard_knowledge AS ENUM ('known','unknown','new');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_presence (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  last_path text,
  user_agent text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.user_presence TO authenticated;
GRANT ALL ON public.user_presence TO service_role;
ALTER TABLE public.user_presence ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own presence" ON public.user_presence;
CREATE POLICY "Users manage own presence" ON public.user_presence FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP TRIGGER IF EXISTS update_user_presence_updated_at ON public.user_presence;
CREATE TRIGGER update_user_presence_updated_at BEFORE UPDATE ON public.user_presence
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.activity_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  event_type public.activity_event_type NOT NULL,
  subject text,
  entity_type text,
  entity_id text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  duration_ms integer,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS activity_events_user_created_idx ON public.activity_events (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS activity_events_type_created_idx ON public.activity_events (event_type, created_at DESC);
GRANT SELECT, INSERT ON public.activity_events TO authenticated;
GRANT ALL ON public.activity_events TO service_role;
ALTER TABLE public.activity_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own activity events" ON public.activity_events;
CREATE POLICY "Users manage own activity events" ON public.activity_events FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.flashcard_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_id text NOT NULL,
  card_id text NOT NULL,
  knowledge public.flashcard_knowledge NOT NULL DEFAULT 'new',
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, subject_id, card_id)
);
CREATE INDEX IF NOT EXISTS flashcard_progress_user_idx ON public.flashcard_progress (user_id, subject_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcard_progress TO authenticated;
GRANT ALL ON public.flashcard_progress TO service_role;
ALTER TABLE public.flashcard_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own flashcard progress" ON public.flashcard_progress;
CREATE POLICY "Users manage own flashcard progress" ON public.flashcard_progress FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP TRIGGER IF EXISTS update_flashcard_progress_updated_at ON public.flashcard_progress;
CREATE TRIGGER update_flashcard_progress_updated_at BEFORE UPDATE ON public.flashcard_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.theory_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject text NOT NULL,
  chapter_id text NOT NULL,
  section_id text NOT NULL DEFAULT '',
  time_seconds integer NOT NULL DEFAULT 0,
  scroll_pct integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, subject, chapter_id, section_id)
);
CREATE INDEX IF NOT EXISTS theory_progress_user_idx ON public.theory_progress (user_id, subject);
GRANT SELECT, INSERT, UPDATE ON public.theory_progress TO authenticated;
GRANT ALL ON public.theory_progress TO service_role;
ALTER TABLE public.theory_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own theory progress" ON public.theory_progress;
CREATE POLICY "Users manage own theory progress" ON public.theory_progress FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP TRIGGER IF EXISTS update_theory_progress_updated_at ON public.theory_progress;
CREATE TRIGGER update_theory_progress_updated_at BEFORE UPDATE ON public.theory_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER TABLE public.task_attempts
  ADD COLUMN IF NOT EXISTS duration_seconds integer,
  ADD COLUMN IF NOT EXISTS attempt_number integer,
  ADD COLUMN IF NOT EXISTS statement_results jsonb,
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'web';

DROP POLICY IF EXISTS "Admin read all profiles" ON public.profiles;
CREATE POLICY "Admin read all profiles" ON public.profiles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all user roles" ON public.user_roles;
CREATE POLICY "Admin read all user roles" ON public.user_roles FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all enrollments" ON public.enrollments;
CREATE POLICY "Admin read all enrollments" ON public.enrollments FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all task attempts" ON public.task_attempts;
CREATE POLICY "Admin read all task attempts" ON public.task_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all mock attempts" ON public.mock_attempts;
CREATE POLICY "Admin read all mock attempts" ON public.mock_attempts FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all practice sessions" ON public.practice_sessions;
CREATE POLICY "Admin read all practice sessions" ON public.practice_sessions FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all session answers" ON public.session_answers;
CREATE POLICY "Admin read all session answers" ON public.session_answers FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all custom mocks" ON public.custom_mocks;
CREATE POLICY "Admin read all custom mocks" ON public.custom_mocks FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all presence" ON public.user_presence;
CREATE POLICY "Admin read all presence" ON public.user_presence FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all activity events" ON public.activity_events;
CREATE POLICY "Admin read all activity events" ON public.activity_events FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all flashcard progress" ON public.flashcard_progress;
CREATE POLICY "Admin read all flashcard progress" ON public.flashcard_progress FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Admin read all theory progress" ON public.theory_progress;
CREATE POLICY "Admin read all theory progress" ON public.theory_progress FOR SELECT TO authenticated
  USING (public.is_admin_caller() OR auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.admin_list_users()
RETURNS TABLE (user_id uuid, email text, display_name text, registered_at timestamptz)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_caller() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;
  RETURN QUERY
  SELECT u.id, u.email::text,
    COALESCE(p.display_name, split_part(u.email::text, '@', 1)),
    COALESCE(p.created_at, u.created_at)
  FROM auth.users u
  LEFT JOIN public.profiles p ON p.user_id = u.id
  WHERE u.email IS NOT NULL
  ORDER BY COALESCE(p.created_at, u.created_at) DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_list_users() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_list_users() TO authenticated;
REVOKE ALL ON FUNCTION public.is_admin_caller() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin_caller() TO authenticated;