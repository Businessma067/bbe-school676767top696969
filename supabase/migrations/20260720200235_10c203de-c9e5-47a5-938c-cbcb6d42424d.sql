ALTER TABLE public.economics_cases
  ADD COLUMN IF NOT EXISTS tier text NOT NULL DEFAULT 'demo'
  CHECK (tier IN ('demo','full'));

UPDATE public.economics_cases SET tier = 'full' WHERE subsection IN ('2','3','4','5');
UPDATE public.economics_cases SET tier = 'demo' WHERE subsection = '6';

CREATE INDEX IF NOT EXISTS economics_cases_tier_sort_idx
  ON public.economics_cases (tier, sort_order);