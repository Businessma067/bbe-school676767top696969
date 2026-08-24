# Admin panel

Sign in as **georgtyrin@gmail.com** to access `/admin`.

## Storage — one file per user

```
data/admin-store/
  index.json
  users/
    {user-id-1}.json   ← all data for user 1
    {user-id-2}.json   ← all data for user 2
    ...
```

Each JSON file contains that user's profile, task attempts, mocks, practice, flashcards, theory, and activity — completely separate.

## Auto-sync

- **On login:** that user's Supabase data is imported into their own file
- **On admin page open:** if `SUPABASE_SERVICE_ROLE_KEY` is set, every registered user is synced individually from Supabase
- **During use:** new activity is appended only to that user's file

No Lovable migrations required for the admin panel to work.
