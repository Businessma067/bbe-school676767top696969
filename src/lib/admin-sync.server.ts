import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import {
  emptyUserRecord,
  listStoredUserIds,
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

  // Keep local-only activity that Supabase sync cannot see yet.
  const existing = await import("@/lib/admin-store.server").then((m) => m.readUserRecord(userId));
  if (existing) {
    record.events = existing.events;
    record.flashcards = existing.flashcards;
    record.theory = existing.theory;
    if (existing.profile.lastSeenAt) {
      record.profile.lastSeenAt = existing.profile.lastSeenAt;
      record.profile.lastPath = existing.profile.lastPath;
      record.profile.userAgent = existing.profile.userAgent;
    }
    const remoteTaskIds = new Set(record.taskAttempts.map((t) => t.id));
    const remoteTaskKeys = new Set(
      record.taskAttempts.map((t) => `${t.taskKey}|${t.createdAt}`),
    );
    for (const local of existing.taskAttempts) {
      if (remoteTaskIds.has(local.id)) continue;
      if (remoteTaskKeys.has(`${local.taskKey}|${local.createdAt}`)) continue;
      // Keep recent local mirrors (e.g. when Supabase insert failed earlier).
      if (local.source === "web" || local.source === "local_mirror") {
        record.taskAttempts.push(local);
      }
    }
  }

  await replaceUserRecord(userId, record);
}

async function syncViaServiceRole(): Promise<number> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  let count = 0;

  for (let page = 1; page <= 50; page++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 100 });
    if (error) break;

    for (const u of data.users) {
      if (!u.email) continue;
      await syncSingleUserFromSupabase(supabaseAdmin, u.id, {
        email: u.email,
        created_at: u.created_at,
      });
      count += 1;
    }

    if (data.users.length < 100) break;
  }

  return count;
}

function serviceRoleConfigured(): boolean {
  return Boolean(resolveServiceRoleKey());
}

export function resolveServiceRoleKey(): string | undefined {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ||
    process.env.SUPABASE_SECRET_KEY?.trim() ||
    undefined
  );
}

async function syncViaAdminClient(db: Db): Promise<{ synced: number; error?: string }> {
  const { data, error } = await db.rpc("admin_list_users");
  if (error) {
    const message = error.message ?? "admin_list_users failed";
    console.error("[admin-sync] admin_list_users failed:", message);
    return { synced: 0, error: message };
  }

  let synced = 0;
  for (const u of data ?? []) {
    await syncSingleUserFromSupabase(db, u.user_id, {
      email: u.email,
      created_at: u.registered_at,
    });
    synced += 1;
  }
  return { synced };
}

let syncPromise: Promise<SyncResult> | null = null;
const SYNC_INTERVAL_MS = 60_000;
let lastSyncAttempt = 0;

export type SyncResult = {
  synced: number;
  source: "service_role" | "admin_rpc" | "skipped";
  totalLocal: number;
  error?: string;
  hint?: string;
};

function syncHint(error?: string): string | undefined {
  if (serviceRoleConfigured()) return undefined;
  if (error?.includes("admin_list_users")) {
    return "В Supabase нет функции admin_list_users. Выполните SQL из supabase/migrations/20260824110000_admin_read_policies.sql в SQL Editor, ИЛИ добавьте SUPABASE_SERVICE_ROLE_KEY в .env";
  }
  if (!serviceRoleConfigured()) {
    return "Добавьте SUPABASE_SERVICE_ROLE_KEY в .env (Supabase → Settings → API → service_role), либо примените миграцию admin_read_policies.sql";
  }
  return undefined;
}

/** Sync every registered Supabase user into separate local files. */
export async function trySyncAllUsers(db?: Db, force = false): Promise<SyncResult> {
  const now = Date.now();
  if (!force && now - lastSyncAttempt < SYNC_INTERVAL_MS && syncPromise) {
    return syncPromise;
  }

  lastSyncAttempt = now;
  syncPromise = (async (): Promise<SyncResult> => {
    let synced = 0;
    let source: SyncResult["source"] = "skipped";
    let error: string | undefined;

    try {
      if (serviceRoleConfigured()) {
        synced = await syncViaServiceRole();
        source = "service_role";
      } else if (db) {
        const rpc = await syncViaAdminClient(db);
        synced = rpc.synced;
        error = rpc.error;
        source = synced > 0 ? "admin_rpc" : "skipped";
      } else {
        error = "No Supabase client — not logged in as admin?";
      }

      if (synced > 0) await markSupabaseSynced();
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
      console.error("[admin-sync] failed:", err);
    }

    const totalLocal = (await listStoredUserIds()).length;
    const hint = synced === 0 ? syncHint(error) : undefined;

    return { synced, source, totalLocal, error, hint };
  })();

  return syncPromise;
}

/** @deprecated use trySyncAllUsers */
export async function trySyncAllFromSupabase(db?: Db): Promise<void> {
  await trySyncAllUsers(db);
}
