ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS payer_country TEXT,
  ADD COLUMN IF NOT EXISTS payer_method TEXT,
  ADD COLUMN IF NOT EXISTS payer_payment_system TEXT,
  ADD COLUMN IF NOT EXISTS masked_pan TEXT;