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

## Pages

- `/admin` — accounts + stats
- `/admin/users` — searchable list
- `/admin/users/{id}` — per-user detail
