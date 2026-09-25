# Payments admin details — Supabase SQL

If Lovable / Supabase SQL Editor fails with:

`ERROR: 42P01: relation "public.payments" does not exist`

run the full script below once in **Supabase → SQL Editor → New query → Run**.

It is idempotent (`IF NOT EXISTS` / `ADD COLUMN IF NOT EXISTS`) and also creates
`payment_webhook_logs` plus payer country/method columns used by the admin panel.

Use the contents of:

`supabase/migrations/20260925162110_payments_payer_details.sql`
