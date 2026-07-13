
CREATE TABLE public.subjects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.subjects TO authenticated;
GRANT ALL ON public.subjects TO service_role;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone authenticated can read subjects" ON public.subjects FOR SELECT TO authenticated USING (true);

CREATE TABLE public.topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid REFERENCES public.subjects(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subject_id, slug)
);
GRANT SELECT ON public.topics TO authenticated;
GRANT ALL ON public.topics TO service_role;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone authenticated can read topics" ON public.topics FOR SELECT TO authenticated USING (true);

CREATE TABLE public.questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES public.topics(id) ON DELETE CASCADE,
  subject_id uuid REFERENCES public.subjects(id) NOT NULL,
  stem_text text NOT NULL,
  difficulty text CHECK (difficulty IN ('easy','medium','hard')) DEFAULT 'medium',
  image_url text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.questions TO authenticated;
GRANT ALL ON public.questions TO service_role;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone authenticated can read questions" ON public.questions FOR SELECT TO authenticated USING (is_active = true);

CREATE TABLE public.statements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id uuid REFERENCES public.questions(id) ON DELETE CASCADE,
  statement_text text NOT NULL,
  correct_answer boolean NOT NULL,
  explanation text,
  statement_order int NOT NULL CHECK (statement_order BETWEEN 1 AND 5),
  UNIQUE (question_id, statement_order)
);
GRANT SELECT ON public.statements TO authenticated;
GRANT ALL ON public.statements TO service_role;
ALTER TABLE public.statements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone authenticated can read statements" ON public.statements FOR SELECT TO authenticated USING (true);

CREATE OR REPLACE FUNCTION public.sync_question_subject()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  SELECT subject_id INTO NEW.subject_id FROM public.topics WHERE id = NEW.topic_id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_sync_question_subject
BEFORE INSERT OR UPDATE OF topic_id ON public.questions
FOR EACH ROW
EXECUTE FUNCTION public.sync_question_subject();
