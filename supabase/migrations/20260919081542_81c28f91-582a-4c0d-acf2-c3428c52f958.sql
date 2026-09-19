
CREATE OR REPLACE FUNCTION public.has_paid_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.enrollments e
    WHERE e.user_id = _user_id
      AND e.tier IN ('lite', 'full')
  );
$$;

REVOKE ALL ON FUNCTION public.has_paid_access(uuid) FROM public;
GRANT EXECUTE ON FUNCTION public.has_paid_access(uuid) TO authenticated, service_role;

-- economics_cases: paid content only for entitled users
DROP POLICY IF EXISTS "Authenticated can view economics cases" ON public.economics_cases;
CREATE POLICY "Entitled users can view economics cases"
ON public.economics_cases
FOR SELECT
TO authenticated
USING (
  tier = 'demo'
  OR public.has_paid_access(auth.uid())
  OR public.is_admin_caller()
  OR public.has_role(auth.uid(), 'admin'::app_role)
);

-- questions / statements carry answer keys and explanations
DROP POLICY IF EXISTS "Anyone authenticated can read questions" ON public.questions;
CREATE POLICY "Entitled users can read questions"
ON public.questions
FOR SELECT
TO authenticated
USING (
  is_active = true
  AND (
    public.has_paid_access(auth.uid())
    OR public.is_admin_caller()
    OR public.has_role(auth.uid(), 'admin'::app_role)
  )
);

DROP POLICY IF EXISTS "Anyone authenticated can read statements" ON public.statements;
CREATE POLICY "Entitled users can read statements"
ON public.statements
FOR SELECT
TO authenticated
USING (
  public.has_paid_access(auth.uid())
  OR public.is_admin_caller()
  OR public.has_role(auth.uid(), 'admin'::app_role)
);
