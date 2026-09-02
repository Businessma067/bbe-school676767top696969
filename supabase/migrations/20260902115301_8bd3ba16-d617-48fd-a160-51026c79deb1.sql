CREATE TABLE public.payment_webhook_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id text,
  status text,
  amount_minor integer,
  currency_code integer,
  signature_valid boolean NOT NULL DEFAULT false,
  headers jsonb NOT NULL DEFAULT '{}'::jsonb,
  payload jsonb,
  raw_body text,
  error text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.payment_webhook_logs TO service_role;
GRANT SELECT ON public.payment_webhook_logs TO authenticated;

ALTER TABLE public.payment_webhook_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read webhook logs"
ON public.payment_webhook_logs FOR SELECT TO authenticated
USING (public.is_admin_caller());

CREATE INDEX idx_payment_webhook_logs_invoice ON public.payment_webhook_logs (invoice_id);
CREATE INDEX idx_payment_webhook_logs_created ON public.payment_webhook_logs (created_at DESC);