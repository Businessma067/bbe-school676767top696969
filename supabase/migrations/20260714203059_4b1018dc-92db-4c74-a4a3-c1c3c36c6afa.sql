
-- profiles
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- practice_sessions
CREATE TABLE public.practice_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('practice','timed_test')),
  subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
  topic_id UUID REFERENCES public.topics(id) ON DELETE SET NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  total_questions INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.practice_sessions TO authenticated;
GRANT ALL ON public.practice_sessions TO service_role;
ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own sessions" ON public.practice_sessions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX practice_sessions_user_started_idx ON public.practice_sessions (user_id, started_at DESC);
CREATE TRIGGER update_practice_sessions_updated_at BEFORE UPDATE ON public.practice_sessions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- session_answers
CREATE TABLE public.session_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.practice_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  statement_id UUID NOT NULL REFERENCES public.statements(id) ON DELETE CASCADE,
  selected_answer BOOLEAN NOT NULL,
  is_correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.session_answers TO authenticated;
GRANT ALL ON public.session_answers TO service_role;
ALTER TABLE public.session_answers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own answers" ON public.session_answers FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX session_answers_session_idx ON public.session_answers (session_id);
CREATE INDEX session_answers_user_idx ON public.session_answers (user_id);

-- handle new user: create profile + assign student role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (user_id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
