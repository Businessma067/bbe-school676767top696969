-- Add missing payer detail columns (payments table already exists).
-- Paste into Supabase SQL Editor and Run.

ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS payer_country TEXT,
  ADD COLUMN IF NOT EXISTS payer_method TEXT,
  ADD COLUMN IF NOT EXISTS payer_payment_system TEXT,
  ADD COLUMN IF NOT EXISTS masked_pan TEXT;

-- Optional: refresh PostgREST schema cache so the API sees new columns immediately
NOTIFY pgrst, 'reload schema';

-- Quick check (should return the 4 column names):
SELECT column_name
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'payments'
  AND column_name IN ('payer_country', 'payer_method', 'payer_payment_system', 'masked_pan')
ORDER BY column_name;
