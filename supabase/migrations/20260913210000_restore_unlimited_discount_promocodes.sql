-- Restore unlimited 15%/30% discount promocodes after a prior bug that set
-- used_at when a code was merely applied (before payment).
-- Safe to re-run (idempotent).

-- Discount codes must never be muted via used_at; usage lives in promo_usages
-- and is written only after a successful Monobank payment.
UPDATE public.promocodes
SET
  used_at = NULL,
  used_by = NULL,
  used_by_email = NULL
WHERE kind = 'discount'
  AND used_at IS NOT NULL;

-- Ensure seeded multi-use discount codes stay unlimited (max_uses NULL).
UPDATE public.promocodes
SET max_uses = NULL
WHERE kind = 'discount'
  AND (
    code LIKE 'BBE-15-%'
    OR code LIKE 'BBE-30-%'
    OR upper(code) = 'BBE-JFKDJT15'
  );
