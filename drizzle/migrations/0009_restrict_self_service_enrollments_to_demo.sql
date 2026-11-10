ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own enrollments" ON public.enrollments;
CREATE POLICY "Users read own enrollments" ON public.enrollments FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users insert own demo enrollment" ON public.enrollments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id AND product_slug = 'demo-practice' AND tier = 'demo');
CREATE POLICY "Users update own demo enrollment" ON public.enrollments FOR UPDATE TO authenticated USING (auth.uid() = user_id AND product_slug = 'demo-practice' AND tier = 'demo') WITH CHECK (auth.uid() = user_id AND product_slug = 'demo-practice' AND tier = 'demo');
CREATE POLICY "Users delete own demo enrollment" ON public.enrollments FOR DELETE TO authenticated USING (auth.uid() = user_id AND product_slug = 'demo-practice' AND tier = 'demo');
GRANT SELECT, INSERT, UPDATE, DELETE ON public.enrollments TO authenticated;
GRANT ALL ON public.enrollments TO service_role;