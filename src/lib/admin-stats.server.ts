import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type {
  AdminActivityEvent,
  AdminFlashcardDeckSummary,
  AdminJsonValue,
  AdminMockRow,
  AdminPracticeSessionRow,
  AdminTaskAttemptRow,
  AdminTheoryRow,
  AdminUserDetail,
  AdminUserRow,
} from "@/lib/admin-types";
import { buildStudyProgress, type SessionAnswerStat } from "@/lib/study-progress";
import {
  computeStreak,
  summarizeTaskAttempts,
  type MockAttempt,
  type TaskAttempt,
} from "@/lib/user-progress";

type AdminClient = SupabaseClient<Database>;

function pct(n: number, d: number): number | null {
  return d > 0 ? Math.round((n / d) * 1000) / 10 : null;
}

function parseStatementResults(raw: unknown): AdminTaskAttemptRow["statementResults"] {
  if (!Array.isArray(raw)) return null;
  const out: { statement_index: number; correct: boolean }[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    if (typeof row.statement_index !== "number" || typeof row.correct !== "boolean") continue;
    out.push({ statement_index: row.statement_index, correct: row.correct });
  }
  return out.length ? out : null;
}

function parseMockAnswers(raw: unknown): { correct_count: number | null; statement_count: number | null } {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { correct_count: null, statement_count: null };
  }
  const obj = raw as Record<string, unknown>;
  return {
    correct_count: typeof obj.correct_count === "number" ? obj.correct_count : null,
    statement_count: typeof obj.statement_count === "number" ? obj.statement_count : null,
  };
}

function mapTaskRow(row: Record<string, unknown>): AdminTaskAttemptRow {
  return {
    id: String(row.id),
    subject: String(row.subject),
    chapter: String(row.chapter),
    taskKey: String(row.task_key),
    taskTitle: row.task_title != null ? String(row.task_title) : null,
    correctCount: Number(row.correct_count ?? 0),
    statementCount: Number(row.statement_count ?? 0),
    isPassed: Boolean(row.is_passed),
    durationSeconds: row.duration_seconds != null ? Number(row.duration_seconds) : null,
    attemptNumber: row.attempt_number != null ? Number(row.attempt_number) : null,
    statementResults: parseStatementResults(row.statement_results),
    source: String(row.source ?? "web"),
    createdAt: String(row.created_at),
  };
}

function mapMockRow(row: Record<string, unknown>): AdminMockRow {
  const pointsEarned = Number(row.points_earned ?? 0);
  const pointsTotal = Number(row.points_total ?? 0);
  return {
    id: String(row.id),
    examId: String(row.exam_id),
    examTitle: String(row.exam_title),
    status: String(row.status ?? "submitted"),
    pointsEarned,
    pointsTotal,
    perSubject: (row.per_subject ?? {}) as Record<string, number>,
    secondsTaken: row.seconds_taken != null ? Number(row.seconds_taken) : null,
    timed: Boolean(row.timed),
    startedAt: row.started_at != null ? String(row.started_at) : null,
    completedAt: row.completed_at != null ? String(row.completed_at) : null,
    scorePct: pct(pointsEarned, pointsTotal),
  };
}

function toTaskAttempts(rows: AdminTaskAttemptRow[]): TaskAttempt[] {
  return rows.map((r) => ({
    id: r.id,
    subject: r.subject,
    chapter: r.chapter,
    task_key: r.taskKey,
    task_title: r.taskTitle,
    correct_count: r.correctCount,
    statement_count: r.statementCount,
    is_passed: r.isPassed,
    created_at: r.createdAt,
  }));
}

function toMockAttempts(rows: AdminMockRow[]): MockAttempt[] {
  return rows
    .filter((r) => r.status === "submitted")
    .map((r) => ({
      id: r.id,
      exam_id: r.examId,
      exam_title: r.examTitle,
      points_earned: r.pointsEarned,
      points_total: r.pointsTotal,
      per_subject: r.perSubject,
      seconds_taken: r.secondsTaken,
      timed: r.timed,
      completed_at: r.completedAt ?? r.startedAt ?? new Date().toISOString(),
      correct_count: null,
      statement_count: null,
    }));
}

function highestTier(tiers: string[]): string {
  if (tiers.includes("full")) return "full";
  if (tiers.includes("lite")) return "lite";
  if (tiers.length > 0) return tiers[0]!;
  return "none";
}

function computeUserStreak(taskAttempts: AdminTaskAttemptRow[], mocks: AdminMockRow[]): number {
  const dates = [
    ...taskAttempts.map((t) => t.createdAt),
    ...mocks.filter((m) => m.status === "submitted").map((m) => m.completedAt ?? m.startedAt ?? ""),
  ].filter(Boolean);
  return computeStreak(dates);
}

function computeAverageAccuracy(taskAttempts: AdminTaskAttemptRow[]): number | null {
  let correct = 0;
  let total = 0;
  for (const t of taskAttempts) {
    correct += t.correctCount;
    total += t.statementCount;
  }
  return pct(correct, total);
}

function summarizeFlashcards(
  rows: { subject_id: string; knowledge: string; updated_at: string }[],
): AdminFlashcardDeckSummary[] {
  const bySubject = new Map<string, { known: number; unknown: number; unset: number; lastUpdated: string | null }>();
  for (const row of rows) {
    const bucket = bySubject.get(row.subject_id) ?? { known: 0, unknown: 0, unset: 0, lastUpdated: null };
    if (row.knowledge === "known") bucket.known += 1;
    else if (row.knowledge === "unknown") bucket.unknown += 1;
    else bucket.unset += 1;
    if (!bucket.lastUpdated || row.updated_at > bucket.lastUpdated) bucket.lastUpdated = row.updated_at;
    bySubject.set(row.subject_id, bucket);
  }
  return [...bySubject.entries()].map(([subjectId, s]) => {
    const total = s.known + s.unknown + s.unset;
    return {
      subjectId,
      known: s.known,
      unknown: s.unknown,
      unset: s.unset,
      total,
      masteryPct: pct(s.known, total),
      lastUpdated: s.lastUpdated,
    };
  });
}

export async function fetchUserBundle(
  db: AdminClient,
  userId: string,
  email: string,
  registeredAt: string,
): Promise<AdminUserDetail> {
  const [
    profileRes,
    rolesRes,
    enrollmentsRes,
    presenceRes,
    tasksRes,
    mocksRes,
    customMocksRes,
    practiceRes,
    sessionAnswersRes,
    flashRes,
    theoryRes,
    activityRes,
  ] = await Promise.all([
    db.from("profiles").select("display_name, created_at").eq("user_id", userId).maybeSingle(),
    db.from("user_roles").select("role").eq("user_id", userId),
    db
      .from("enrollments")
      .select("product_slug, product_name, tier, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
    db.from("user_presence").select("last_seen_at, last_path, user_agent").eq("user_id", userId).maybeSingle(),
    db
      .from("task_attempts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
    db.from("mock_attempts").select("*").eq("user_id", userId).order("completed_at", { ascending: false }),
    db.from("custom_mocks").select("id, title, subject, question_count, created_at").eq("user_id", userId),
    db
      .from("practice_sessions")
      .select("id, mode, subject_id, topic_id, total_questions, correct_answers, started_at, completed_at")
      .eq("user_id", userId)
      .order("started_at", { ascending: false }),
    db
      .from("session_answers")
      .select("is_correct, created_at, question_id")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
    db.from("flashcard_progress").select("subject_id, knowledge, updated_at").eq("user_id", userId),
    db
      .from("theory_progress")
      .select("subject, chapter_id, section_id, time_seconds, scroll_pct, completed, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false }),
    db
      .from("activity_events")
      .select("id, event_type, subject, entity_type, entity_id, metadata, duration_ms, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(200),
  ]);

  const taskAttempts = (tasksRes.data ?? []).map((r) => mapTaskRow(r as Record<string, unknown>));
  const mocks = (mocksRes.data ?? []).map((r) => mapMockRow(r as Record<string, unknown>));
  const sessionAnswers = (sessionAnswersRes.data ?? []) as SessionAnswerStat[];

  const studyProgress = buildStudyProgress(
    toTaskAttempts(taskAttempts),
    toMockAttempts(mocks),
    sessionAnswers,
  );

  const practiceSessions: AdminPracticeSessionRow[] = (practiceRes.data ?? []).map((row) => {
    const started = new Date(row.started_at);
    const completed = row.completed_at ? new Date(row.completed_at) : null;
    const durationSeconds = completed ? Math.round((completed.getTime() - started.getTime()) / 1000) : null;
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
      durationSeconds,
    };
  });

  const theory: AdminTheoryRow[] = (theoryRes.data ?? []).map((row) => ({
    subject: row.subject,
    chapterId: row.chapter_id,
    sectionId: row.section_id,
    timeSeconds: row.time_seconds,
    scrollPct: row.scroll_pct,
    completed: row.completed,
    updatedAt: row.updated_at,
  }));

  const recentActivity: AdminActivityEvent[] = (activityRes.data ?? []).map((row) => ({
    id: row.id,
    eventType: row.event_type,
    subject: row.subject,
    entityType: row.entity_type,
    entityId: row.entity_id,
    metadata: (row.metadata ?? {}) as Record<string, AdminJsonValue>,
    durationMs: row.duration_ms,
    createdAt: row.created_at,
  }));

  const flashcards = summarizeFlashcards(
    (flashRes.data ?? []).map((r) => ({
      subject_id: r.subject_id,
      knowledge: r.knowledge,
      updated_at: r.updated_at,
    })),
  );

  const taskDurationSeconds = taskAttempts.reduce((acc, t) => acc + (t.durationSeconds ?? 0), 0);
  const mockDurationSeconds = mocks
    .filter((m) => m.status === "submitted")
    .reduce((acc, m) => acc + (m.secondsTaken ?? 0), 0);
  const theoryTimeSeconds = theory.reduce((acc, t) => acc + t.timeSeconds, 0);

  const displayName =
    profileRes.data?.display_name?.trim() ||
    email.split("@")[0] ||
    "User";

  return {
    profile: {
      userId,
      email,
      displayName,
      registeredAt: profileRes.data?.created_at ?? registeredAt,
      lastSeenAt: presenceRes.data?.last_seen_at ?? null,
      lastPath: presenceRes.data?.last_path ?? null,
      userAgent: presenceRes.data?.user_agent ?? null,
      roles: (rolesRes.data ?? []).map((r) => r.role),
    },
    enrollments: (enrollmentsRes.data ?? []).map((e) => ({
      productSlug: e.product_slug,
      productName: e.product_name,
      tier: e.tier,
      createdAt: e.created_at,
    })),
    subjectStats: summarizeTaskAttempts(toTaskAttempts(taskAttempts)),
    studyProgress,
    taskAttempts,
    mocks,
    customMocks: (customMocksRes.data ?? []).map((m) => ({
      id: m.id,
      title: m.title,
      subject: m.subject,
      questionCount: m.question_count,
      createdAt: m.created_at,
    })),
    practiceSessions,
    flashcards,
    theory,
    recentActivity,
    totals: {
      totalStudyTimeSeconds: taskDurationSeconds + mockDurationSeconds + theoryTimeSeconds,
      taskDurationSeconds,
      mockDurationSeconds,
      theoryTimeSeconds,
      practiceSessionsCount: practiceSessions.length,
      flashcardsRated: (flashRes.data ?? []).filter((r) => r.knowledge !== "new").length,
    },
  };
}

export async function buildAdminUserRow(
  db: AdminClient,
  userId: string,
  email: string,
  registeredAt: string,
  displayName: string | null,
): Promise<AdminUserRow> {
  const [rolesRes, enrollmentsRes, presenceRes, tasksRes, mocksRes] = await Promise.all([
    db.from("user_roles").select("role").eq("user_id", userId),
    db.from("enrollments").select("tier").eq("user_id", userId),
    db.from("user_presence").select("last_seen_at, last_path").eq("user_id", userId).maybeSingle(),
    db.from("task_attempts").select("is_passed, created_at, correct_count, statement_count").eq("user_id", userId),
    db.from("mock_attempts").select("points_earned, points_total, status, completed_at, started_at").eq("user_id", userId),
  ]);

  // Ignore missing optional analytics tables (migration not applied yet).
  const presence = presenceRes.error ? null : presenceRes.data;
  const taskRows = tasksRes.error ? [] : (tasksRes.data ?? []);
  const mockData = mocksRes.error ? [] : (mocksRes.data ?? []);
  const roles = rolesRes.error ? [] : (rolesRes.data ?? []);
  const enrollments = enrollmentsRes.error ? [] : (enrollmentsRes.data ?? []);

  const passed = taskRows.filter((t) => t.is_passed).length;
  const mockRows = mockData.filter((m) => !m.status || m.status === "submitted");
  let mockBestPct: number | null = null;
  for (const m of mockRows) {
    const score = pct(Number(m.points_earned), Number(m.points_total));
    if (score != null && (mockBestPct == null || score > mockBestPct)) mockBestPct = score;
  }

  const taskAttemptsMapped = taskRows.map((r) =>
    mapTaskRow({
      id: "",
      subject: "",
      chapter: "",
      task_key: "",
      task_title: null,
      correct_count: r.correct_count,
      statement_count: r.statement_count,
      is_passed: r.is_passed,
      created_at: r.created_at,
    }),
  );

  return {
    userId,
    email,
    displayName: displayName?.trim() || email.split("@")[0] || "User",
    registeredAt,
    lastSeenAt: presence?.last_seen_at ?? null,
    lastPath: presence?.last_path ?? null,
    tier: highestTier(enrollments.map((e) => e.tier)),
    roles: roles.map((r) => r.role),
    tasksPassed: passed,
    tasksAttempted: taskRows.length,
    mockBestPct,
    mockAttempts: mockRows.length,
    practiceSessions: 0,
    currentStreak: computeStreak([
      ...taskRows.map((t) => t.created_at),
      ...mockRows.map((m) => m.completed_at ?? m.started_at ?? ""),
    ]),
    averageAccuracy: (() => {
      let c = 0;
      let t = 0;
      for (const row of taskRows) {
        c += row.correct_count;
        t += row.statement_count;
      }
      return pct(c, t);
    })(),
  };
}

export function isAtRisk(row: AdminUserRow): boolean {
  const lastSeen = row.lastSeenAt ? new Date(row.lastSeenAt).getTime() : 0;
  const sevenDaysAgo = Date.now() - 7 * 86_400_000;
  const inactive = !row.lastSeenAt || lastSeen < sevenDaysAgo;
  const lowAccuracy = row.averageAccuracy != null && row.averageAccuracy < 40;
  return inactive || lowAccuracy;
}

export { parseMockAnswers, pct };
