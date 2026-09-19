-- Make all 15% discount promocodes one-time (claimed on Apply via used_at/used_by).
-- max_uses=1 documents the limit and also caps paid usages as a safety net.

UPDATE public.promocodes
SET max_uses = 1
WHERE kind = 'discount'
  AND discount_pct = 15
  AND (max_uses IS NULL OR max_uses <> 1);

COMMENT ON COLUMN public.promocodes.max_uses IS
  'NULL means unlimited uses (e.g. multi-use 30% codes). 15% discount codes use max_uses=1 and are claimed on Apply.';
