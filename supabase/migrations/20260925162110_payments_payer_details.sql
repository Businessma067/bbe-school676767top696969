-- Persist Monobank paymentInfo fields so admin can show
-- plan, payer country, payment method, and paid_at per user.

ALTER TABLE public.payments
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

-- Backfill from the latest webhook payload that includes paymentInfo.
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
