-- Seed: 5× unlimited 15% codes, 20× single-use 15% codes.
-- Restore full-course unlock (BBE-FREE-*) codes.
-- Safe to re-run (idempotent).

-- Unlimited 15% (max_uses NULL = infinite).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15U-A7K2M9', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · A7K2M9'),
  ('BBE-15U-B3N8Q1', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · B3N8Q1'),
  ('BBE-15U-C5P4R6', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · C5P4R6'),
  ('BBE-15U-D9T2W4', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · D9T2W4'),
  ('BBE-15U-E1X7Y3', 'any-paid', 'discount', 15, NULL, '2026-12-31T23:59:59+00:00', 'BBE 15% unlimited · E1X7Y3')
ON CONFLICT (code) DO UPDATE
SET
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = NULL,
  product_slug = EXCLUDED.product_slug,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name,
  used_at = NULL,
  used_by = NULL,
  used_by_email = NULL;

-- Single-use 15% (max_uses = 1).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15S-F2H8J4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · F2H8J4'),
  ('BBE-15S-G6K1L9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · G6K1L9'),
  ('BBE-15S-H3M5N7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · H3M5N7'),
  ('BBE-15S-J8P2Q6', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · J8P2Q6'),
  ('BBE-15S-K4R9T1', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · K4R9T1'),
  ('BBE-15S-L7V3W5', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · L7V3W5'),
  ('BBE-15S-M1X6Y8', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · M1X6Y8'),
  ('BBE-15S-N9A2B4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · N9A2B4'),
  ('BBE-15S-P5C8D3', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · P5C8D3'),
  ('BBE-15S-Q2E7F9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Q2E7F9'),
  ('BBE-15S-R6G1H4', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · R6G1H4'),
  ('BBE-15S-S3J8K2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · S3J8K2'),
  ('BBE-15S-T9L4M7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · T9L4M7'),
  ('BBE-15S-V1N5P8', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · V1N5P8'),
  ('BBE-15S-W4Q6R2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · W4Q6R2'),
  ('BBE-15S-X8S1T5', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · X8S1T5'),
  ('BBE-15S-Y2U7V9', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Y2U7V9'),
  ('BBE-15S-Z5W3X6', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · Z5W3X6'),
  ('BBE-15S-A8Y1B7', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · A8Y1B7'),
  ('BBE-15S-C3D9E2', 'any-paid', 'discount', 15, 1, '2026-12-31T23:59:59+00:00', 'BBE 15% once · C3D9E2')
ON CONFLICT (code) DO UPDATE
SET
  kind = EXCLUDED.kind,
  discount_pct = EXCLUDED.discount_pct,
  max_uses = 1,
  product_slug = EXCLUDED.product_slug,
  expires_at = EXCLUDED.expires_at,
  name = EXCLUDED.name;

-- Restore original full-course unlock codes (one-time free Full Course).
INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-FREE-2JH3JC', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · 2JH3JC'),
  ('BBE-FREE-9BT2Y3', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · 9BT2Y3'),
  ('BBE-FREE-B3AHAS', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · B3AHAS'),
  ('BBE-FREE-DXEHZ5', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · DXEHZ5'),
  ('BBE-FREE-R4229B', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · R4229B'),
  ('BBE-FREE-SV6E64', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · SV6E64'),
  ('BBE-FREE-VZ4Q6F', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · VZ4Q6F'),
  ('BBE-FREE-WW6NBW', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · WW6NBW'),
  ('BBE-FREE-WWDC5Y', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · WWDC5Y'),
  ('BBE-FREE-ZXTE5Y', 'full-course', 'unlock', NULL, 1, NULL, 'Full Course unlock · ZXTE5Y')
ON CONFLICT (code) DO UPDATE
SET
  kind = 'unlock',
  product_slug = 'full-course',
  discount_pct = NULL,
  max_uses = 1,
  name = EXCLUDED.name;

COMMENT ON COLUMN public.promocodes.max_uses IS
  'NULL = unlimited uses (multi-use discount). 1 = single-use. Unlock codes use used_at.';
