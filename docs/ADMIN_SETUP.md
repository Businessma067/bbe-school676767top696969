# Admin panel setup

Access is restricted to a single admin account via **two checks** (both required):

1. Environment variable `ADMIN_EMAIL` — your login email (set in Lovable Cloud secrets or `.env.local`).
2. Row in `user_roles` with role `admin` for your user.

## One-time setup

1. Set `ADMIN_EMAIL=you@example.com` in project secrets.
2. Sign up / log in on the site with that email.
3. Run in Supabase SQL Editor:

```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users WHERE email = 'you@example.com'
ON CONFLICT (user_id, role) DO NOTHING;
```

## Where to open the panel

- **Direct URL:** `/admin`
- **Header:** “Admin panel” button (desktop)
- **Account menu:** “Admin panel” item
- **Account page:** “Open admin panel” in the Administration card

Sub-routes: `/admin/users`, `/admin/users/{userId}`, `/admin/economics`
