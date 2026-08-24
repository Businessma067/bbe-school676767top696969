import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import {
  emptyUserRecord,
  markSupabaseSynced,
  replaceUserRecord,
  type StoredUser,
  type UserRecord,
} from "@/lib/admin-store.server";
import type { AdminMockRow, AdminPracticeSessionRow, AdminTaskAttemptRow } from "@/lib/admin-types";
import type { SessionAnswerStat } from "@/lib/study-progress";

type Db = SupabaseClient<Database>;

function pct(n: number, d: number): number | null {
  return d > 0 ? Math.round((n / d) * 1000) / 10 : null;
}

/** Import one user's complete Supabase data into their own local file. */
export async function syncSingleUserFromSupabase(
  db: Db,
  userId: string,
  authMeta?: { email: string; created_at: string },
): Promise<void> {
  const [profileRes, rolesRes, enrollmentsRes, tasksRes, mocksRes, practiceRes, answersRes, customRes] =
    await Promise.all([
      db.from("profiles").select("display_name, created_at").eq("user_id", userId).maybeSingle(),
      db.from("user_roles").select("role").eq("user_id", userId),
      db.from("enrollments").select("product_slug, product_name, tier, created_at").eq("user_id", userId),
      db.from("task_attempts").select("*").eq("user_id", userId).order("created_at", { ascending: true }),
      db.from("mock_attempts").select("*").eq("user_id", userId).order("completed_at", { ascending: false }),
      db.from("practice_sessions").select("*").eq("user_id", userId).order("started_at", { ascending: false }),
      db.from("session_answers").select("is_correct, created_at, question_id").eq("user_id", userId),
      db.from("custom_mocks").select("id, title, subject, question_count, created_at").eq("user_id", userId),
    ]);

  const email = authMeta?.email ?? "";
  const profile: StoredUser = {
    userId,
    email,
    displayName:
      profileRes.data?.display_name?.trim() || email.split("@")[0] || "User",
    registeredAt: profileRes.data?.created_at ?? authMeta?.created_at ?? new Date().toISOString(),
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
  };

  const record: UserRecord = emptyUserRecord(profile);

  record.taskAttempts = (tasksRes.data ?? []).map(
    (row): AdminTaskAttemptRow => ({
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
    }),
  );

  record.mocks = (mocksRes.data ?? []).map((row): AdminMockRow => {
    const pointsEarned = Number(row.points_earned);
    const pointsTotal = Number(row.points_total);
    return {
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
      scorePct: pct(pointsEarned, pointsTotal),
    };
  });

  record.practiceSessions = (practiceRes.data ?? []).map((row): AdminPracticeSessionRow => {
    const started = new Date(row.started_at);
    const completed = row.completed_at ? new Date(row.completed_at) : null;
    return {
      id: row.id,
      mode: row.mode,
      subjectId: row.subject_id,
      topicId: row.topic_id,
      totalQuestions: row.total_questions,
      correctAnswers: row.correct_answers,
      accuracyPct: pct(row.correct_answers, row.total_questions),
      startedAt: row.started_at,
      completedAt: row.completed_at,
      durationSeconds: completed ? Math.round((completed.getTime() - started.getTime()) / 1000) : null,
    };
  });

  record.sessionAnswers = (answersRes.data ?? []) as SessionAnswerStat[];

  record.customMocks = (customRes.data ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    subject: m.subject,
    questionCount: m.question_count,
    createdAt: m.created_at,
  }));

  await replaceUserRecord(userId, record);
}

let syncPromise: Promise<void> | null = null;
const SYNC_INTERVAL_MS = 2 * 60_000;
let lastSyncAttempt = 0;

/** Sync every registered Supabase user into their own local file. */
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

      for (let page = 1; page <= 50; page++) {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 100 });
        if (error) break;

        for (const u of data.users) {
          if (!u.email) continue;
          await syncSingleUserFromSupabase(supabaseAdmin, u.id, {
            email: u.email,
            created_at: u.created_at,
          });
        }

        if (data.users.length < 100) break;
      }

      await markSupabaseSynced();
    } catch (err) {
      console.error("[admin-sync] failed:", err);
    }
  })();

  await syncPromise;
}
