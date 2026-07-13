
DROP POLICY IF EXISTS "Book chunks are public read" ON public.book_chunks;
CREATE POLICY "Authenticated users can read book chunks"
  ON public.book_chunks FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.book_chunks FROM anon;

DROP POLICY IF EXISTS "Anyone can view economics cases" ON public.economics_cases;
CREATE POLICY "Authenticated users can view economics cases"
  ON public.economics_cases FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.economics_cases FROM anon;
