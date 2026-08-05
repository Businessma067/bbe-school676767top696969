ALTER TABLE public.mock_attempts
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'submitted',
  ADD COLUMN IF NOT EXISTS started_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS current_index integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS flags jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS notes jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS annotations jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS progress jsonb NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE public.mock_attempts ALTER COLUMN completed_at DROP NOT NULL;

ALTER TABLE public.mock_attempts DROP CONSTRAINT IF EXISTS mock_attempts_status_check;
ALTER TABLE public.mock_attempts
  ADD CONSTRAINT mock_attempts_status_check CHECK (status IN ('in_progress', 'submitted'));

CREATE UNIQUE INDEX IF NOT EXISTS mock_attempts_one_in_progress
  ON public.mock_attempts (user_id, exam_id)
  WHERE status = 'in_progress';

CREATE INDEX IF NOT EXISTS mock_attempts_status_idx
  ON public.mock_attempts (user_id, status, exam_id);