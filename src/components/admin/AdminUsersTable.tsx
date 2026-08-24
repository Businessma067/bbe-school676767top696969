import { Link } from "@tanstack/react-router";
import { fmtDate } from "@/components/admin/AdminLayout";
import type { AdminUserRow } from "@/lib/admin-types";

/** Dense one-row-per-account list. Click opens full user stats. */
export function AdminUsersTable({
  rows,
  empty = "No accounts yet.",
}: {
  rows: AdminUserRow[];
  empty?: string;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        {empty}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-border bg-secondary/50 text-[11px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-3 py-2 font-semibold">Email</th>
            <th className="px-3 py-2 font-semibold">Name</th>
            <th className="px-3 py-2 font-semibold tabular-nums">Tasks</th>
            <th className="px-3 py-2 font-semibold tabular-nums">Acc.</th>
            <th className="px-3 py-2 font-semibold tabular-nums">Mocks</th>
            <th className="px-3 py-2 font-semibold tabular-nums">Practice</th>
            <th className="px-3 py-2 font-semibold tabular-nums">Streak</th>
            <th className="px-3 py-2 font-semibold">Last seen</th>
            <th className="px-3 py-2 font-semibold" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {rows.map((u) => (
            <tr key={u.userId} className="hover:bg-secondary/40">
              <td className="px-3 py-2">
                <Link
                  to="/admin/users/$userId"
                  params={{ userId: u.userId }}
                  className="font-mono text-[13px] font-semibold text-primary hover:underline"
                >
                  {u.email || "—"}
                </Link>
              </td>
              <td className="max-w-[10rem] truncate px-3 py-2 text-muted-foreground">{u.displayName}</td>
              <td className="px-3 py-2 tabular-nums">
                {u.tasksPassed}/{u.tasksAttempted}
              </td>
              <td className="px-3 py-2 tabular-nums">
                {u.averageAccuracy != null ? `${Math.round(u.averageAccuracy)}%` : "—"}
              </td>
              <td className="px-3 py-2 tabular-nums">{u.mockAttempts}</td>
              <td className="px-3 py-2 tabular-nums">{u.practiceSessions}</td>
              <td className="px-3 py-2 tabular-nums">{u.currentStreak}d</td>
              <td className="whitespace-nowrap px-3 py-2 text-xs text-muted-foreground">
                {fmtDate(u.lastSeenAt)}
              </td>
              <td className="px-3 py-2 text-right">
                <Link
                  to="/admin/users/$userId"
                  params={{ userId: u.userId }}
                  className="inline-flex rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90"
                >
                  Open →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
