CREATE TABLE IF NOT EXISTS public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  user_email TEXT,
  product_slug TEXT NOT NULL,
  product_name TEXT NOT NULL,
  tier TEXT NOT NULL,
  invoice_id TEXT NOT NULL UNIQUE,
  amount_minor INTEGER NOT NULL,
  currency_code INTEGER NOT NULL DEFAULT 980,
  status TEXT NOT NULL DEFAULT 'created',
  failure_reason TEXT,
  page_url TEXT,
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS payments_user_id_idx ON public.payments(user_id);

GRANT SELECT ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own payments" ON public.payments;
CREATE POLICY "Users read own payments" ON public.payments
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins read all payments" ON public.payments;
CREATE POLICY "Admins read all payments" ON public.payments
  FOR SELECT TO authenticated
  USING (public.is_admin_caller());

DROP TRIGGER IF EXISTS update_payments_updated_at ON public.payments;
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON public.payments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();