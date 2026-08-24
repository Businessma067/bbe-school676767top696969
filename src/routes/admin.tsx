import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout, DataTable, fmtDate, StatCard } from "@/components/admin/AdminLayout";
import { UserListRowLink } from "@/components/admin/UserDetailView";
import { adminGetCohortStats } from "@/lib/admin.functions";
import type { AdminCohortStats } from "@/lib/admin-types";
import { Users, BookOpen, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Admin panel · BBE School" },
      { name: "description", content: "Admin tools for BBE School." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminPage() {
  const [stats, setStats] = useState<AdminCohortStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await adminGetCohortStats();
        if (!cancelled) setStats(res);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load stats");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AdminLayout title="Overview">
      {error ? (
        <p className="mb-4 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {stats ? (
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total users" value={stats.totalUsers} />
          <StatCard label="Active today" value={stats.dau} hint={`WAU ${stats.wau} · MAU ${stats.mau}`} />
          <StatCard label="Task attempts" value={stats.totalTaskAttempts} />
          <StatCard
            label="Avg mock score"
            value={stats.averageMockScorePct != null ? `${stats.averageMockScorePct}%` : "—"}
            hint={`${stats.totalMockSubmissions} submissions`}
          />
        </div>
      ) : (
        <p className="mb-6 text-sm text-muted-foreground">Loading cohort stats…</p>
      )}

      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <Link
          to="/admin/users"
          className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:bg-secondary"
        >
          <Users className="mt-0.5 h-5 w-5 text-primary" />
          <span>
            <span className="block font-semibold">Users & analytics</span>
            <span className="mt-1 block text-sm text-muted-foreground">
              Full progress, tasks, mocks, time and activity per person.
            </span>
          </span>
        </Link>
        <Link
          to="/admin/economics"
          className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:bg-secondary"
        >
          <BookOpen className="mt-0.5 h-5 w-5 text-primary" />
          <span>
            <span className="block font-semibold">Economics cases</span>
            <span className="mt-1 block text-sm text-muted-foreground">
              Create and manage economics practice cases.
            </span>
          </span>
        </Link>
      </div>

      {stats && stats.atRiskUsers.length > 0 ? (
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <h2 className="font-display text-lg font-semibold">At-risk users</h2>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Inactive 7+ days or accuracy below 40%.
          </p>
          <DataTable
            columns={[
              { key: "name", label: "Name" },
              { key: "email", label: "Email" },
              { key: "lastSeen", label: "Last seen" },
              { key: "accuracy", label: "Accuracy" },
            ]}
            rows={stats.atRiskUsers.map((u) => ({
              name: <UserListRowLink userId={u.userId}>{u.displayName}</UserListRowLink>,
              email: u.email,
              lastSeen: fmtDate(u.lastSeenAt),
              accuracy: u.averageAccuracy != null ? `${Math.round(u.averageAccuracy)}%` : "—",
            }))}
          />
        </section>
      ) : null}
    </AdminLayout>
  );
}
