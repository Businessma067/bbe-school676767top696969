-- Idempotent: create payments (+ webhook logs) if missing, then add payer details.
-- Safe to paste into Supabase SQL Editor even when public.payments does not exist yet.

-- ---------------------------------------------------------------------------
-- 1) Core payments table
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  user_email TEXT,
  product_slug TEXT NOT NULL,
  product_name TEXT NOT NULL,
  tier TEXT NOT NULL,
  invoice_id TEXT NOT NULL UNIQUE,
  amount_minor INTEGER NOT NULL,
  currency_code INTEGER NOT NULL DEFAULT 978,
  status TEXT NOT NULL DEFAULT 'created',
  failure_reason TEXT,
  page_url TEXT,
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS payments_user_id_idx ON public.payments (user_id);

ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS promo_code TEXT,
  ADD COLUMN IF NOT EXISTS payment_type TEXT NOT NULL DEFAULT 'debit',
  ADD COLUMN IF NOT EXISTS payer_country TEXT,
  ADD COLUMN IF NOT EXISTS payer_method TEXT,
  ADD COLUMN IF NOT EXISTS payer_payment_system TEXT,
  ADD COLUMN IF NOT EXISTS masked_pan TEXT;

COMMENT ON COLUMN public.payments.payer_country IS
  'ISO 3166-1 numeric country code from Monobank paymentInfo.country (e.g. 804 = Ukraine).';
COMMENT ON COLUMN public.payments.payer_method IS
  'Monobank paymentInfo.paymentMethod (pan, apple, google, …).';
COMMENT ON COLUMN public.payments.payer_payment_system IS
  'Monobank paymentInfo.paymentSystem (visa, mastercard, …).';
COMMENT ON COLUMN public.payments.masked_pan IS
  'Monobank paymentInfo.maskedPan when available.';

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

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_proc
    WHERE proname = 'update_updated_at_column'
      AND pg_function_is_visible(oid)
  ) THEN
    DROP TRIGGER IF EXISTS update_payments_updated_at ON public.payments;
    CREATE TRIGGER update_payments_updated_at
      BEFORE UPDATE ON public.payments
      FOR EACH ROW
      EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 2) Webhook logs (used for backfill + debugging)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payment_webhook_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id TEXT,
  status TEXT,
  amount_minor INTEGER,
  currency_code INTEGER,
  signature_valid BOOLEAN NOT NULL DEFAULT false,
  headers JSONB NOT NULL DEFAULT '{}'::jsonb,
  payload JSONB,
  raw_body TEXT,
  error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_payment_webhook_logs_invoice
  ON public.payment_webhook_logs (invoice_id);
CREATE INDEX IF NOT EXISTS idx_payment_webhook_logs_created
  ON public.payment_webhook_logs (created_at DESC);

GRANT ALL ON public.payment_webhook_logs TO service_role;
GRANT SELECT ON public.payment_webhook_logs TO authenticated;

ALTER TABLE public.payment_webhook_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can read webhook logs" ON public.payment_webhook_logs;
CREATE POLICY "Admins can read webhook logs"
  ON public.payment_webhook_logs FOR SELECT TO authenticated
  USING (public.is_admin_caller());

-- ---------------------------------------------------------------------------
-- 3) Backfill payer details from webhook payloads when available
-- ---------------------------------------------------------------------------
UPDATE public.payments p
SET
  payer_country = COALESCE(
    p.payer_country,
    NULLIF(trim(w.payload -> 'paymentInfo' ->> 'country'), '')
  ),
  payer_method = COALESCE(
    p.payer_method,
    NULLIF(trim(w.payload -> 'paymentInfo' ->> 'paymentMethod'), '')
  ),
  payer_payment_system = COALESCE(
    p.payer_payment_system,
    NULLIF(trim(w.payload -> 'paymentInfo' ->> 'paymentSystem'), '')
  ),
  masked_pan = COALESCE(
    p.masked_pan,
    NULLIF(trim(w.payload -> 'paymentInfo' ->> 'maskedPan'), '')
  )
FROM (
  SELECT DISTINCT ON (invoice_id)
    invoice_id,
    payload
  FROM public.payment_webhook_logs
  WHERE invoice_id IS NOT NULL
    AND payload IS NOT NULL
    AND payload -> 'paymentInfo' IS NOT NULL
  ORDER BY invoice_id, created_at DESC
) w
WHERE w.invoice_id = p.invoice_id;
