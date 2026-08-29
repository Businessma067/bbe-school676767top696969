# Admin panel

Sign in as **georgtyrin@gmail.com** or **info@spray-go.com** → open `/admin`.

## Supabase connection (required)

Admin reads **all Auth users** through the **service role** client (same as the original panel).

Set in Lovable Cloud secrets / local `.env`:

```
SUPABASE_SERVICE_ROLE_KEY=...   # Project Settings → API → service_role
SUPABASE_URL=https://kntpsdgggolkqnywxedq.supabase.co
SUPABASE_PUBLISHABLE_KEY=...
```

Without `SUPABASE_SERVICE_ROLE_KEY` the panel shows an error instead of an empty list.

## Promocodes (required for `/admin/promocodes` and checkout redeem)

Run this migration once in **Supabase → SQL Editor** (safe to re-run):

`supabase/migrations/20260829210000_promocodes.sql`

It creates `promocodes` + `promo_redeem_attempts` and seeds the ten `BBE-FREE-*` codes.

## Revoke Full Course enrollments

To clear existing Full Course access for everyone and block self-enroll into paid tiers, run:

`supabase/migrations/20260829220000_revoke_full_course_enrollments.sql`

## Pages

- `/admin` — accounts + stats
- `/admin/users` — searchable list
- `/admin/users/{id}` — per-user detail
- `/admin/promocodes` — available vs used Full Course codes
