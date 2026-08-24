import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { AdminUserRow } from "@/lib/admin-types";
import { pct } from "@/lib/admin-stats.server";

type Db = SupabaseClient<Database>;

/** Live account list from Supabase (works on Lovable where local admin-store is empty). */
export async function fetchLiveUserRows(db: Db): Promise<{
  rows: AdminUserRow[];
  error?: string;
}> {
  const { data: users, error } = await db.rpc("admin_list_users");
  if (error) {
    return { rows: [], error: error.message };
  }
  if (!users?.length) return { rows: [] };

  const ids = users.map((u) => u.user_id);

  const [rolesRes, enrollRes, tasksRes, mocksRes, practiceRes] = await Promise.all([
    db.from("user_roles").select("user_id, role").in("user_id", ids),
    db.from("enrollments").select("user_id, tier").in("user_id", ids),
    db.from("task_attempts").select("user_id, is_passed").in("user_id", ids),
    db
      .from("mock_attempts")
      .select("user_id, points_earned, points_total, status")
      .in("user_id", ids),
    db.from("practice_sessions").select("user_id").in("user_id", ids),
  ]);

  const rolesByUser = new Map<string, string[]>();
  for (const r of rolesRes.data ?? []) {
    const list = rolesByUser.get(r.user_id) ?? [];
    list.push(r.role);
    rolesByUser.set(r.user_id, list);
  }

  const tierByUser = new Map<string, string>();
  for (const e of enrollRes.data ?? []) {
    if (!tierByUser.has(e.user_id)) tierByUser.set(e.user_id, e.tier);
  }

  const taskStats = new Map<string, { attempted: number; passed: number }>();
  for (const t of tasksRes.data ?? []) {
    const cur = taskStats.get(t.user_id) ?? { attempted: 0, passed: 0 };
    cur.attempted += 1;
    if (t.is_passed) cur.passed += 1;
    taskStats.set(t.user_id, cur);
  }

  const mockStats = new Map<string, { attempts: number; best: number | null }>();
  for (const m of mocksRes.data ?? []) {
    const cur = mockStats.get(m.user_id) ?? { attempts: 0, best: null };
    if ((m as { status?: string }).status === "submitted" || m.points_total != null) {
      cur.attempts += 1;
      const score = pct(Number(m.points_earned), Number(m.points_total));
      if (score != null && (cur.best == null || score > cur.best)) cur.best = score;
    }
    mockStats.set(m.user_id, cur);
  }

  const practiceCount = new Map<string, number>();
  for (const p of practiceRes.data ?? []) {
    practiceCount.set(p.user_id, (practiceCount.get(p.user_id) ?? 0) + 1);
  }

  const rows: AdminUserRow[] = users.map((u) => {
    const tasks = taskStats.get(u.user_id) ?? { attempted: 0, passed: 0 };
    const mocks = mockStats.get(u.user_id) ?? { attempts: 0, best: null };
    const email = u.email ?? "";
    return {
      userId: u.user_id,
      email,
      displayName: (u.display_name ?? "").trim() || email.split("@")[0] || "User",
      registeredAt: u.registered_at,
      lastSeenAt: null,
      lastPath: null,
      tier: tierByUser.get(u.user_id) ?? "none",
      roles: rolesByUser.get(u.user_id) ?? ["student"],
      tasksPassed: tasks.passed,
      tasksAttempted: tasks.attempted,
      mockBestPct: mocks.best,
      mockAttempts: mocks.attempts,
      practiceSessions: practiceCount.get(u.user_id) ?? 0,
      currentStreak: 0,
      averageAccuracy:
        tasks.attempted > 0 ? Math.round((tasks.passed / tasks.attempted) * 1000) / 10 : null,
    };
  });

  return { rows };
}
