# Admin panel

Sign in as **georgtyrin@gmail.com** or **info@spray-go.com** → open `/admin`.

## Supabase connection

Admin prefers the **service role** client when available (lists Auth users + signup phone).

Set in Lovable Cloud secrets / local `.env`:

```
SUPABASE_SERVICE_ROLE_KEY=...   # Project Settings → API → service_role
SUPABASE_URL=https://kntpsdgggolkqnywxedq.supabase.co
SUPABASE_PUBLISHABLE_KEY=...
```

If `SUPABASE_SERVICE_ROLE_KEY` is missing (common on Lovable), the panel falls back to the
admin JWT + `admin_list_users` RPC / RLS policies from
`supabase/migrations/20260825010000_admin_emails_and_list_users.sql`.

## Promocodes (required for `/admin/promocodes` and checkout redeem)

Run this migration once in **Supabase → SQL Editor** (safe to re-run):

`supabase/migrations/20260829210000_promocodes.sql`

It creates `promocodes` + `promo_redeem_attempts` and seeds the ten `BBE-FREE-*` codes.

## Revoke Full Course enrollments

To clear existing Full Course access for everyone and block self-enroll into paid tiers, run:

`supabase/migrations/20260829220000_revoke_full_course_enrollments.sql`

## Support chat (required for site Support widget + `/admin/support`)

Visitors write via the floating **Support** button. Every admin (`georgtyrin@gmail.com`,
`info@spray-go.com`) sees the inbox at `/admin/support` and replies land back in the
visitor’s chat.

**Setup (automatic via Lovable):** push/merge `drizzle/migrations/0004_support_chat.sql`.
Lovable Cloud applies Drizzle migrations to the connected database. The server then uses,
in order: Postgres `DATABASE_URL` → service-role tables → RPCs → file fallback.

Optional secrets that make the primary path stronger:

- `DATABASE_URL` / `SUPABASE_DB_URL` / `LOVABLE_DB_MIGRATION_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Pages

- `/admin` — redirects to Users
- `/admin/users` — searchable user list
- `/admin/users/{id}` — per-user detail (shows phone from signup metadata when present)
- `/admin/support` — support inbox (reply to site chat)
- `/admin/promocodes` — unlock codes + 15% discount codes (usages, courses, expiry)

## Discount promocodes

Run after the base promocodes migration:

`supabase/migrations/20260907180000_discount_promocodes.sql`

Adds ten unlimited `BBE-15-*` codes (15% off Lite + Full, expire 2026-12-06) and usage tracking.

### Single-use 10% / 15% codes

Run in Supabase → SQL Editor (safe to re-run):

`supabase/migrations/20261013140000_discount_promocodes_10_15_single_use.sql`

Adds ten `BBE-10-*` (10% once) and ten `BBE-15-*` (15% once) codes for any paid course (`max_uses = 1`). They show on `/admin/promocodes` after the SQL runs.
