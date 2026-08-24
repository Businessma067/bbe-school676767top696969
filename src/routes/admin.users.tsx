import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout, DataTable, fmtDate } from "@/components/admin/AdminLayout";
import { UserListRowLink } from "@/components/admin/UserDetailView";
import { adminListUsers } from "@/lib/admin.functions";
import type { AdminUserRow } from "@/lib/admin-types";

export const Route = createFileRoute("/admin/users")({
  component: AdminUsersPage,
  head: () => ({
    meta: [
      { title: "Users · Admin · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminUsersPage() {
  const [rows, setRows] = useState<AdminUserRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchDraft, setSearchDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await adminListUsers({
          data: { page, pageSize: 50, search: search || undefined, sortBy: "lastSeen", sortDir: "desc" },
        });
        if (cancelled) return;
        setRows(res.users);
        setTotal(res.total);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load users");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page, search]);

  const pageCount = Math.max(1, Math.ceil(total / 50));

  return (
    <AdminLayout title="Users" wide>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <form
          className="flex flex-1 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setPage(1);
            setSearch(searchDraft.trim());
          }}
        >
          <input
            value={searchDraft}
            onChange={(e) => setSearchDraft(e.target.value)}
            placeholder="Search email or name…"
            className="min-w-[200px] flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Search
          </button>
        </form>
        <p className="text-sm text-muted-foreground">{total} users</p>
      </div>

      {error ? (
        <p className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      ) : loading ? (
        <p className="text-sm text-muted-foreground">Loading users…</p>
      ) : (
        <>
          <DataTable
            columns={[
              { key: "name", label: "Name" },
              { key: "email", label: "Email" },
              { key: "tier", label: "Tier" },
              { key: "tasks", label: "Tasks" },
              { key: "mock", label: "Best mock" },
              { key: "streak", label: "Streak" },
              { key: "accuracy", label: "Accuracy" },
              { key: "lastSeen", label: "Last seen" },
              { key: "registered", label: "Registered" },
            ]}
            rows={rows.map((u) => ({
              name: <UserListRowLink userId={u.userId}>{u.displayName}</UserListRowLink>,
              email: u.email,
              tier: u.tier,
              tasks: `${u.tasksPassed}/${u.tasksAttempted}`,
              mock: u.mockBestPct != null ? `${u.mockBestPct}%` : "—",
              streak: `${u.currentStreak}d`,
              accuracy: u.averageAccuracy != null ? `${Math.round(u.averageAccuracy)}%` : "—",
              lastSeen: fmtDate(u.lastSeenAt),
              registered: fmtDate(u.registeredAt),
            }))}
            empty="No users found."
          />

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-border px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {page} / {pageCount}
            </span>
            <button
              type="button"
              disabled={page >= pageCount}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-border px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
