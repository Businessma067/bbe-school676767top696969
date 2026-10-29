CREATE TABLE public.promo_course_selections (
  user_id uuid NOT NULL,
  code text NOT NULL,
  product_slug text NOT NULL,
  discount_pct integer NOT NULL CHECK (discount_pct > 0 AND discount_pct < 100),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, code)
);
GRANT SELECT ON public.promo_course_selections TO authenticated;
GRANT ALL ON public.promo_course_selections TO service_role;
ALTER TABLE public.promo_course_selections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own promo selections" ON public.promo_course_selections FOR SELECT TO authenticated USING (auth.uid() = user_id);