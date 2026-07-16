
WITH picked AS (
  SELECT q.id, q.stem_text,
         ROW_NUMBER() OVER (ORDER BY q.id) AS rn
  FROM public.questions q
  WHERE q.topic_id = '06bcc980-71eb-4679-bd98-4e479f48d21f'
  ORDER BY q.id
  LIMIT 6
),
agg AS (
  SELECT p.id, p.stem_text, p.rn,
    array_agg(s.statement_text ORDER BY s.statement_order) AS statements,
    array_agg(s.correct_answer ORDER BY s.statement_order) AS answer_key,
    array_agg(COALESCE(s.explanation, '') ORDER BY s.statement_order) AS tactical_explanations
  FROM picked p
  JOIN public.statements s ON s.question_id = p.id
  GROUP BY p.id, p.stem_text, p.rn
)
INSERT INTO public.economics_cases
  (subject, subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order)
SELECT
  'economics',
  '5',
  'CASE 5.' || LPAD(rn::text, 2, '0'),
  'Marketing — Case ' || rn,
  stem_text,
  statements,
  answer_key,
  tactical_explanations,
  'medium',
  500 + rn
FROM agg
ORDER BY rn;
