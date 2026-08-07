-- Raise custom mock question_count ceiling to 50 (matches builder + Zod).
ALTER TABLE public.custom_mocks
  DROP CONSTRAINT IF EXISTS custom_mocks_question_count_check;

ALTER TABLE public.custom_mocks
  ADD CONSTRAINT custom_mocks_question_count_check
  CHECK (question_count > 0 AND question_count <= 50);
