import { appendTaskAttempt, markSupabaseSynced, upsertMock, upsertStoredUser } from "@/lib/admin-store.server";

let syncPromise: Promise<void> | null = null;
const SYNC_INTERVAL_MS = 5 * 60_000;
let lastSyncAttempt = 0;

/** Optional: import all Supabase data when SERVICE_ROLE_KEY is available. */
export async function trySyncAllFromSupabase(): Promise<void> {
  const now = Date.now();
  if (now - lastSyncAttempt < SYNC_INTERVAL_MS && syncPromise) {
    await syncPromise;
    return;
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return;

  lastSyncAttempt = now;
  syncPromise = (async () => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const users: { id: string; email: string; created_at: string }[] = [];
      for (let page = 1; page <= 50; page++) {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 200 });
        if (error) break;
        for (const u of data.users) {
          if (u.email) users.push({ id: u.id, email: u.email, created_at: u.created_at });
        }
        if (data.users.length < 200) break;
      }

      const profilesRes = await supabaseAdmin.from("profiles").select("user_id, display_name, created_at");
      const profileMap = new Map((profilesRes.data ?? []).map((p) => [p.user_id, p]));

      for (const u of users) {
        const profile = profileMap.get(u.id);
        const [rolesRes, enrollmentsRes] = await Promise.all([
          supabaseAdmin.from("user_roles").select("role").eq("user_id", u.id),
          supabaseAdmin.from("enrollments").select("product_slug, product_name, tier, created_at").eq("user_id", u.id),
        ]);
        await upsertStoredUser({
          userId: u.id,
          email: u.email,
          displayName: profile?.display_name?.trim() || u.email.split("@")[0] || "User",
          registeredAt: profile?.created_at ?? u.created_at,
          lastSeenAt: null,
          lastPath: null,
          userAgent: null,
          roles: (rolesRes.data ?? []).map((r) => r.role),
          enrollments: (enrollmentsRes.data ?? []).map((e) => ({
            productSlug: e.product_slug,
            productName: e.product_name,
            tier: e.tier,
            createdAt: e.created_at,
          })),
        });
      }

      const tasksRes = await supabaseAdmin.from("task_attempts").select("*");
      for (const row of tasksRes.data ?? []) {
        await appendTaskAttempt(row.user_id, {
          id: row.id,
          subject: row.subject,
          chapter: row.chapter,
          taskKey: row.task_key,
          taskTitle: row.task_title,
          correctCount: row.correct_count,
          statementCount: row.statement_count,
          isPassed: row.is_passed,
          durationSeconds: (row as { duration_seconds?: number }).duration_seconds ?? null,
          attemptNumber: (row as { attempt_number?: number }).attempt_number ?? null,
          statementResults: null,
          source: (row as { source?: string }).source ?? "supabase_sync",
          createdAt: row.created_at,
        });
      }

      const mocksRes = await supabaseAdmin.from("mock_attempts").select("*");
      for (const row of mocksRes.data ?? []) {
        const pointsEarned = Number(row.points_earned);
        const pointsTotal = Number(row.points_total);
        await upsertMock(row.user_id, {
          id: row.id,
          examId: row.exam_id,
          examTitle: row.exam_title,
          status: (row as { status?: string }).status ?? "submitted",
          pointsEarned,
          pointsTotal,
          perSubject: (row.per_subject ?? {}) as Record<string, number>,
          secondsTaken: row.seconds_taken,
          timed: row.timed,
          startedAt: (row as { started_at?: string }).started_at ?? null,
          completedAt: row.completed_at ?? null,
          scorePct: pointsTotal > 0 ? Math.round((pointsEarned / pointsTotal) * 1000) / 10 : null,
        });
      }

      await markSupabaseSynced();
    } catch (err) {
      console.error("[admin-sync] Supabase import skipped:", err);
    }
  })();

  await syncPromise;
}
