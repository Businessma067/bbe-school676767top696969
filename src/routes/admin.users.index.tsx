import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminUsersTable } from "@/components/admin/AdminUsersTable";
import { adminListUsers } from "@/lib/admin.functions";
import type { AdminUserRow } from "@/lib/admin-types";

export const Route = createFileRoute("/admin/users/")({
  component: AdminUsersPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/admin/users" }],
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
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await adminListUsers({
          data: {
            page,
            pageSize: 50,
            search: search || undefined,
            sortBy: "lastSeen",
            sortDir: "desc",
          },
        });
        if (cancelled) return;
        setRows(res.users);
        setTotal(res.total);
        setHint(res.hint ?? null);
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
      <div className="mb-3 flex flex-wrap items-center gap-2">
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
            placeholder="Email or name…"
            className="min-w-[180px] flex-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"
          >
            Search
          </button>
        </form>
        <span className="text-xs text-muted-foreground">{total} accounts</span>
      </div>

      {error ? (
        <p className="mb-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {hint ? (
        <p className="mb-3 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-900 dark:text-amber-100">
          {hint}
        </p>
      ) : null}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : (
        <>
          <AdminUsersTable rows={rows} />
          {pageCount > 1 ? (
            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded-md border border-border px-2.5 py-1 text-sm disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-xs text-muted-foreground">
                {page} / {pageCount}
              </span>
              <button
                type="button"
                disabled={page >= pageCount}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-md border border-border px-2.5 py-1 text-sm disabled:opacity-40"
              >
                Next
              </button>
            </div>
          ) : null}
        </>
      )}
    </AdminLayout>
  );
}
