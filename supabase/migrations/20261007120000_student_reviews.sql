-- Public reading, one note per signed-in account.
CREATE TABLE public.student_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  track text NOT NULL,
  stars integer NOT NULL,
  body text NOT NULL,
  display_name text NOT NULL,
  city text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT student_reviews_track_check CHECK (track IN ('bbe', 'wiso', 'hybrid')),
  CONSTRAINT student_reviews_stars_check CHECK (stars BETWEEN 1 AND 5),
  CONSTRAINT student_reviews_body_check CHECK (char_length(btrim(body)) BETWEEN 40 AND 900),
  CONSTRAINT student_reviews_display_name_check CHECK (char_length(btrim(display_name)) BETWEEN 1 AND 80),
  CONSTRAINT student_reviews_city_check CHECK (city IS NULL OR char_length(city) <= 80),
  CONSTRAINT student_reviews_one_per_user UNIQUE (user_id)
);

CREATE INDEX student_reviews_created_idx
  ON public.student_reviews (created_at DESC);

GRANT SELECT ON public.student_reviews TO anon, authenticated;
GRANT INSERT ON public.student_reviews TO authenticated;
GRANT ALL ON public.student_reviews TO service_role;

ALTER TABLE public.student_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read student reviews"
  ON public.student_reviews
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users insert their own review"
  ON public.student_reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
