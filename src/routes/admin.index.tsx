import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminUsersTable } from "@/components/admin/AdminUsersTable";
import { adminGetCohortStats, adminListUsers } from "@/lib/admin.functions";
import type { AdminCohortStats, AdminUserRow } from "@/lib/admin-types";

export const Route = createFileRoute("/admin/")({
  component: AdminOverviewPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/admin" }],
    meta: [
      { title: "Admin panel · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminOverviewPage() {
  const [stats, setStats] = useState<AdminCohortStats | null>(null);
  const [users, setUsers] = useState<AdminUserRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [cohort, list] = await Promise.all([
          adminGetCohortStats(),
          adminListUsers({
            data: { page: 1, pageSize: 100, sortBy: "lastSeen", sortDir: "desc" },
          }),
        ]);
        if (cancelled) return;
        setStats(cohort);
        setUsers(list.users);
        setHint(list.hint ?? null);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AdminLayout title="Accounts" wide>
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

      {stats ? (
        <div className="mb-4 flex flex-wrap gap-2 text-sm">
          <Pill label="Accounts" value={stats.totalUsers} />
          <Pill label="Today" value={stats.dau} />
          <Pill label="Tasks (all)" value={stats.totalTaskAttempts} />
        </div>
      ) : (
        <p className="mb-3 text-sm text-muted-foreground">Loading…</p>
      )}

      <AdminUsersTable rows={users} />
    </AdminLayout>
  );
}

function Pill({ label, value }: { label: string; value: string | number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-semibold tabular-nums">{value}</span>
    </span>
  );
}
