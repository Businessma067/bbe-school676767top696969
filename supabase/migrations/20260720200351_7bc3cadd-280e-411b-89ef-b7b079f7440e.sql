ALTER TABLE public.economics_cases DROP CONSTRAINT IF EXISTS economics_cases_case_id_key;
ALTER TABLE public.economics_cases ADD CONSTRAINT economics_cases_case_id_tier_key UNIQUE (case_id, tier);

-- Insert demo previews: first N cases from each chapter, copied from the full tier
INSERT INTO public.economics_cases
  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)
SELECT subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, 'demo'
FROM (
  SELECT *, row_number() OVER (PARTITION BY subsection ORDER BY sort_order) AS rn
  FROM public.economics_cases WHERE tier = 'full'
) t
WHERE (subsection = '2' AND rn <= 6)
   OR (subsection = '3' AND rn <= 5)
   OR (subsection = '4' AND rn <= 6)
   OR (subsection = '5' AND rn <= 8)
ON CONFLICT (case_id, tier) DO NOTHING;