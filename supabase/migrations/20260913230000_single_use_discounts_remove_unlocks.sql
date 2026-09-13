-- 15% discount codes: single-use only.
-- Remove unlock (free full-course) promocodes and 30% full-only codes.
-- Safe to re-run.

-- Discount codes may be used by exactly one account.
UPDATE public.promocodes
SET max_uses = 1
WHERE kind = 'discount';

COMMENT ON COLUMN public.promocodes.max_uses IS
  'Use limit. Discount codes use 1 (single-use). NULL was unlimited (legacy).';

-- Drop free full-course unlock codes.
DELETE FROM public.promocodes
WHERE kind = 'unlock'
   OR code LIKE 'BBE-FREE-%'
   OR code LIKE 'BBE-FREE-%';

-- Drop full-course-only 30% codes (keep only shared 15% discount codes).
DELETE FROM public.promocodes
WHERE code LIKE 'BBE-30-%'
   OR (kind = 'discount' AND product_slug = 'full-course' AND discount_pct = 30);
