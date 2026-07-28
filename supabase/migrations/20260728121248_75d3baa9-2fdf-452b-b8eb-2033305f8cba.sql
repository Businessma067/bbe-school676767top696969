
CREATE TABLE public.enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  product_slug text NOT NULL,
  product_name text NOT NULL,
  tier text NOT NULL DEFAULT 'demo',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, product_slug)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.enrollments TO authenticated;
GRANT ALL ON public.enrollments TO service_role;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own enrollments" ON public.enrollments FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON public.enrollments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.task_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  subject text NOT NULL,
  chapter text NOT NULL,
  task_key text NOT NULL,
  task_title text,
  correct_count integer NOT NULL DEFAULT 0,
  statement_count integer NOT NULL DEFAULT 0,
  is_passed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX task_attempts_user_idx ON public.task_attempts (user_id, subject, chapter);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.task_attempts TO authenticated;
GRANT ALL ON public.task_attempts TO service_role;
ALTER TABLE public.task_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own task attempts" ON public.task_attempts FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.mock_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  exam_id text NOT NULL,
  exam_title text NOT NULL,
  points_earned numeric NOT NULL DEFAULT 0,
  points_total numeric NOT NULL DEFAULT 160,
  per_subject jsonb NOT NULL DEFAULT '{}'::jsonb,
  seconds_taken integer,
  timed boolean NOT NULL DEFAULT false,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  completed_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX mock_attempts_user_idx ON public.mock_attempts (user_id, completed_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.mock_attempts TO authenticated;
GRANT ALL ON public.mock_attempts TO service_role;
ALTER TABLE public.mock_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own mock attempts" ON public.mock_attempts FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
