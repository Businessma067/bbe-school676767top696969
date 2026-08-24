-- Admin analytics V2: presence, events, flashcards, theory, extended task_attempts

CREATE TYPE public.activity_event_type AS ENUM (
  'page_view',
  'task_start',
  'task_submit',
  'mock_start',
  'mock_submit',
  'mock_abandon',
  'practice_start',
  'practice_complete',
  'theory_open',
  'theory_complete',
  'flashcard_rate',
  'login'
);

CREATE TYPE public.flashcard_knowledge AS ENUM ('known', 'unknown', 'new');

CREATE TABLE public.user_presence (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  last_path text,
  user_agent text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.user_presence TO authenticated;
GRANT ALL ON public.user_presence TO service_role;
ALTER TABLE public.user_presence ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own presence"
  ON public.user_presence FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER update_user_presence_updated_at
  BEFORE UPDATE ON public.user_presence
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.activity_events (
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

CREATE INDEX activity_events_user_created_idx ON public.activity_events (user_id, created_at DESC);
CREATE INDEX activity_events_type_created_idx ON public.activity_events (event_type, created_at DESC);

GRANT SELECT, INSERT ON public.activity_events TO authenticated;
GRANT ALL ON public.activity_events TO service_role;
ALTER TABLE public.activity_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own activity events"
  ON public.activity_events FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.flashcard_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_id text NOT NULL,
  card_id text NOT NULL,
  knowledge public.flashcard_knowledge NOT NULL DEFAULT 'new',
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, subject_id, card_id)
);

CREATE INDEX flashcard_progress_user_idx ON public.flashcard_progress (user_id, subject_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcard_progress TO authenticated;
GRANT ALL ON public.flashcard_progress TO service_role;
ALTER TABLE public.flashcard_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own flashcard progress"
  ON public.flashcard_progress FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER update_flashcard_progress_updated_at
  BEFORE UPDATE ON public.flashcard_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.theory_progress (
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

CREATE INDEX theory_progress_user_idx ON public.theory_progress (user_id, subject);

GRANT SELECT, INSERT, UPDATE ON public.theory_progress TO authenticated;
GRANT ALL ON public.theory_progress TO service_role;
ALTER TABLE public.theory_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own theory progress"
  ON public.theory_progress FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER update_theory_progress_updated_at
  BEFORE UPDATE ON public.theory_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER TABLE public.task_attempts
  ADD COLUMN IF NOT EXISTS duration_seconds integer,
  ADD COLUMN IF NOT EXISTS attempt_number integer,
  ADD COLUMN IF NOT EXISTS statement_results jsonb,
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'web';
