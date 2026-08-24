# Admin panel

Admin access: sign in as **georgtyrin@gmail.com**.

## Local database (no Lovable / service role required)

Analytics are stored in **`data/admin-store/store.json`** on the server.

- Every logged-in user auto-syncs their Supabase progress into this file on first visit
- New activity (tasks, flashcards, theory, page views) is written here automatically
- Admin panel reads from this local store — works without `SUPABASE_SERVICE_ROLE_KEY`

If you add `SUPABASE_SERVICE_ROLE_KEY` to `.env`, the admin panel also imports all users from Supabase every 5 minutes.

## Where to open

- `/admin` — overview
- `/admin/users` — all users
- `/account` — Administration card
