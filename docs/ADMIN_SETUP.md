# Admin panel

Sign in as **georgtyrin@gmail.com** or **info@spray-go.com** → open `/admin`.

## Lovable Cloud connection (required)

Admin reads **all Auth users** through the **service role** client (same as the original panel).

Set in **Lovable → Cloud → Secrets** / local `.env`:

```
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_URL=...
SUPABASE_PUBLISHABLE_KEY=...
```

Without `SUPABASE_SERVICE_ROLE_KEY` the panel shows an error instead of an empty list.

## Promocodes (required for `/admin/promocodes` and checkout redeem)

Apply migrations on **Lovable Cloud** (not a separate Supabase dashboard):

1. Prefer asking Lovable in chat to apply the pending migration file, **or**
2. Open **More → Cloud → SQL editor**, paste the file contents, and Run (confirm when prompted).

Base unlock codes:

`supabase/migrations/20260829210000_promocodes.sql`

Creates `promocodes` + `promo_redeem_attempts` and seeds the ten `BBE-FREE-*` codes.

Discount codes (after the base migration):

`supabase/migrations/20260907180000_discount_promocodes.sql`

Adds ten unlimited `BBE-15-*` codes (15% off Lite + Full, expire 2026-12-06) plus usage tracking.

Example Lovable chat prompt:

```text
Apply the pending Cloud migration supabase/migrations/20260907180000_discount_promocodes.sql
```

## Revoke Full Course enrollments

To clear existing Full Course access for everyone and block self-enroll into paid tiers, run in Cloud SQL editor:

`supabase/migrations/20260829220000_revoke_full_course_enrollments.sql`

## Pages

- `/admin` — redirects to Users
- `/admin/users` — searchable user list
- `/admin/users/{id}` — per-user detail (shows phone from signup metadata when present)
- `/admin/promocodes` — unlock codes + 15% discount codes (usages, courses, expiry)
