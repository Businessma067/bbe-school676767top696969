DROP POLICY IF EXISTS "Anyone authenticated can read topics" ON public.topics;
CREATE POLICY "Paid or admin users can read topics" ON public.topics FOR SELECT TO authenticated USING (public.has_paid_access(auth.uid()));
DROP POLICY IF EXISTS "Anyone authenticated can read subjects" ON public.subjects;
CREATE POLICY "Paid or admin users can read subjects" ON public.subjects FOR SELECT TO authenticated USING (public.has_paid_access(auth.uid()));
DROP POLICY IF EXISTS "Authenticated users can read book chunks" ON public.book_chunks;
CREATE POLICY "Paid or admin users can read book chunks" ON public.book_chunks FOR SELECT TO authenticated USING (public.has_paid_access(auth.uid()));