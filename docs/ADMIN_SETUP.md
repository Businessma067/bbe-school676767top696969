# Admin panel

Sign in as **georgtyrin@gmail.com** or **info@spray-go.com** → open `/admin`.

Same full access for both: users list, per-user stats, charts, local admin store.

## Per-user stats

- `/admin` — список аккаунтов: email + личная статистика
- `/admin/users` — то же, с поиском
- `/admin/users/{id}` — полная карточка одного человека (Tasks, Mocks, Activity…)

Данные пишутся в `data/admin-store/users/{userId}.json`, когда пользователь заходит и решает задания.

## Storage

```
data/admin-store/
  index.json
  users/
    {user-id}.json
```
