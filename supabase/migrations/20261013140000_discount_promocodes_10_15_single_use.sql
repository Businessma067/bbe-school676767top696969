-- Single-use discount promocodes: 10× 10% and 10× 15% (any paid course).
-- Safe to re-run (idempotent).
-- After applying, codes appear on /admin/promocodes.

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-10-0D8243', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 0D8243'),
  ('BBE-10-6E86C3', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 6E86C3'),
  ('BBE-10-B77A4A', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · B77A4A'),
  ('BBE-10-E800FB', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · E800FB'),
  ('BBE-10-74C96A', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 74C96A'),
  ('BBE-10-F810B1', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · F810B1'),
  ('BBE-10-6929C4', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 6929C4'),
  ('BBE-10-5E18D6', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 5E18D6'),
  ('BBE-10-347FE0', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 347FE0'),
  ('BBE-10-5A46B8', 'any-paid', 'discount', 10, 1, NULL, 'BBE 10% once · 5A46B8')
ON CONFLICT (code) DO NOTHING;

INSERT INTO public.promocodes (code, product_slug, kind, discount_pct, max_uses, expires_at, name)
VALUES
  ('BBE-15-F1B6D2', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · F1B6D2'),
  ('BBE-15-7C9332', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 7C9332'),
  ('BBE-15-3FE768', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 3FE768'),
  ('BBE-15-96551B', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 96551B'),
  ('BBE-15-D705C0', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · D705C0'),
  ('BBE-15-51B75B', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 51B75B'),
  ('BBE-15-1B47A6', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 1B47A6'),
  ('BBE-15-2C356F', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 2C356F'),
  ('BBE-15-6A7559', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · 6A7559'),
  ('BBE-15-E8C2DA', 'any-paid', 'discount', 15, 1, NULL, 'BBE 15% once · E8C2DA')
ON CONFLICT (code) DO NOTHING;
