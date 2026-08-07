GRANT SELECT ON public.economics_cases TO anon;
DROP POLICY IF EXISTS "Authenticated users can view economics cases" ON public.economics_cases;
CREATE POLICY "Anyone can view economics cases"
ON public.economics_cases FOR SELECT
TO anon, authenticated
USING (true);