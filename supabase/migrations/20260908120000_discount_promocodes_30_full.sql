-- Two multi-use 30% discount promocodes for Full Course only.
-- Safe to re-run (idempotent).

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-30-0B49A5', 'full-course', 'discount', 30, NULL, '2026-12-06T23:59:59+00:00', 'BBE 30% Full · 0B49A5'),
  ('BBE-30-04FAFE', 'full-course', 'discount', 30, NULL, '2026-12-06T23:59:59+00:00', 'BBE 30% Full · 04FAFE')
ON CONFLICT (code) DO NOTHING;
