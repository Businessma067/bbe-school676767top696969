CREATE TABLE IF NOT EXISTS public.custom_mocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  subject text NOT NULL DEFAULT 'economics',
  title text NOT NULL,
  chapters text[] NOT NULL,
  question_count integer NOT NULL,
  duration_minutes integer NOT NULL,
  points_total numeric NOT NULL DEFAULT 0,
  questions jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT custom_mocks_question_count_check CHECK (question_count > 0 AND question_count <= 40),
  CONSTRAINT custom_mocks_duration_check CHECK (duration_minutes > 0)
);

CREATE INDEX IF NOT EXISTS custom_mocks_user_idx ON public.custom_mocks (user_id, created_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.custom_mocks TO authenticated;
GRANT ALL ON public.custom_mocks TO service_role;

ALTER TABLE public.custom_mocks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage own custom mocks" ON public.custom_mocks;
CREATE POLICY "Users manage own custom mocks"
  ON public.custom_mocks
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);