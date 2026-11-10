import { supabase } from "@/integrations/supabase/client";
import { enrollmentConveysAccess } from "@/lib/enrollment-access";
import { mirrorTaskAttempt } from "@/lib/activity-tracker";
import type { MockExamSession } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { queueMockSave } from "@/lib/mock-save-queue";
import type { Json } from "@/integrations/supabase/types";

/* ----------------------------- types ----------------------------- */

export type CourseSlug =
  | "demo-practice"
  | "full-course"
  | "wiso-full-course"
  | "hybrid-full-course";

/** Legacy BBE Lite SKU — still recognized for existing enrollments. */
export const LITE_BBE_COURSE_SLUG = "lite-bbe-course" as const;

export const HYBRID_FULL_COURSE_SLUG = "hybrid-full-course" as const;

export type Enrollment = {
  id: string;
  product_slug: string;
  product_name: string;
  tier: string;
  created_at: string;
};

/** BBE-track paid enrollments (WiSo is a separate SKU). Includes legacy Lite. */
export const BBE_PAID_PRODUCT_SLUGS = ["full-course", LITE_BBE_COURSE_SLUG] as const;

export const WISO_FULL_COURSE_SLUG = "wiso-full-course" as const;

export type StatementResult = { statement_index: number; correct: boolean };

export type TaskAttempt = {
  id: string;
  subject: string;
  chapter: string;
  task_key: string;
  task_title: string | null;
  correct_count: number;
  statement_count: number;
  is_passed: boolean;
  created_at: string;
  duration_seconds?: number | null;
  attempt_number?: number | null;
  statement_results?: StatementResult[] | null;
  source?: string;
};

export type MockAttempt = {
  id: string;
  exam_id: string;
  exam_title: string;
  points_earned: number;
  points_total: number;
  per_subject: Record<string, number>;
  seconds_taken: number | null;
  timed: boolean;
  completed_at: string;
  /** Statement-level totals when recorded; null for legacy rows. */
  correct_count: number | null;
  statement_count: number | null;
};

/** Payload stored in `mock_attempts.answers` for study-progress history. */
export type MockAnswersPayload = {
  correct_count: number;
  statement_count: number;
  /** Per-question ticks (question id → 5 booleans), kept for admin statistics. */
  marks?: Record<string, boolean[]>;
  timeByQuestion?: Record<string, number>;
  flagged?: string[];
  questions?: ExamQuestion[];
  track?: "bbe" | "wiso";
};

function parseMockAnswers(raw: unknown): { correct_count: number | null; statement_count: number | null } {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { correct_count: null, statement_count: null };
  }
  const obj = raw as Record<string, unknown>;
  const correct_count = typeof obj.correct_count === "number" ? obj.correct_count : null;
  const statement_count = typeof obj.statement_count === "number" ? obj.statement_count : null;
  return { correct_count, statement_count };
}

export const COURSE_CATALOG: Record<
  CourseSlug,
  { name: string; tier: string; href: string }
> = {
  "demo-practice": { name: "Demo Practice Package", tier: "demo", href: "/demo-practice" },
  "full-course": { name: "Full BBE Course", tier: "full", href: "/products/full-course-subjects" },
  "wiso-full-course": {
    name: "Full WiSo Course",
    tier: "full",
    href: "/wiso/products/full-course-subjects",
  },
  "hybrid-full-course": {
    name: "Hybrid BBE + WiSo Course",
    tier: "full",
    href: "/hybrid/course",
  },
};

/* --------------------------- enrollments -------------------------- */

async function currentUserId(): Promise<string | null> {
  const { data } = await supabase.auth.getSession();
  return data.session?.user?.id ?? null;
}

export async function enrollInCourse(slug: CourseSlug): Promise<boolean> {
  const userId = await currentUserId();
  if (!userId) return false;
  const meta = COURSE_CATALOG[slug];
  // Paid tiers are granted only by Monobank checkout or promocode (service role).
  if (meta.tier === "full" || meta.tier === "lite") {
    console.error("enrollInCourse: paid tiers require checkout or promocode");
    return false;
  }
  const { error } = await supabase
    .from("enrollments")
    .upsert(
      {
        user_id: userId,
        product_slug: slug,
        product_name: meta.name,
        tier: meta.tier,
      },
      { onConflict: "user_id,product_slug" },
    );
  if (error) console.error("enrollInCourse", error);
  return !error;
}

export async function fetchEnrollments(): Promise<Enrollment[]> {
  const userId = await currentUserId();
  if (!userId) return [];
  const { data, error } = await supabase
    .from("enrollments")
    .select("id, product_slug, product_name, tier, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  if (error) {
    console.error("fetchEnrollments", error);
    return [];
  }
  return ((data ?? []) as Enrollment[]).filter(enrollmentConveysAccess);
}

export function ownsProductSlug(enrollments: Enrollment[], slug: string): boolean {
  return enrollments.some((e) => e.product_slug === slug && enrollmentConveysAccess(e));
}

/** Highest tier across every enrollment (incl. WiSo). Prefer track-scoped helpers for gates. */
export function highestTier(enrollments: Enrollment[]): "none" | "demo" | "lite" | "full" {
  const validEnrollments = enrollments.filter(enrollmentConveysAccess);
  if (validEnrollments.some((e) => e.tier === "full")) return "full";
  if (validEnrollments.some((e) => e.tier === "lite")) return "lite";
  if (validEnrollments.length > 0) return "demo";
  return "none";
}

/** Highest BBE-track tier — WiSo Full does not unlock BBE tools; Hybrid does. */
export function highestBbeTier(enrollments: Enrollment[]): "none" | "demo" | "lite" | "full" {
  const bbe = enrollments.filter(
    (e) =>
      (BBE_PAID_PRODUCT_SLUGS as readonly string[]).includes(e.product_slug) ||
      e.product_slug === "demo-practice" ||
      e.product_slug === HYBRID_FULL_COURSE_SLUG,
  );
  return highestTier(bbe);
}

/* -------------------------- task attempts ------------------------- */

export async function recordTaskAttempt(input: {
  subject: string;
  chapter: string;
  taskKey: string;
  taskTitle?: string | null;
  correctCount: number;
  statementCount: number;
  durationSeconds?: number | null;
  statementResults?: StatementResult[] | null;
  source?: string;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;

  // Always mirror to local admin store first so /admin sees attempts even if Supabase schema lags.
  void mirrorTaskAttempt({
    subject: input.subject,
    chapter: input.chapter,
    taskKey: input.taskKey,
    taskTitle: input.taskTitle ?? null,
    correctCount: input.correctCount,
    statementCount: input.statementCount,
    durationSeconds: input.durationSeconds ?? null,
    statementResults: input.statementResults ?? null,
    source: input.source ?? "web",
  });

  // Base columns only — extended analytics columns may not exist until migration is applied.
  const { error } = await supabase.from("task_attempts").insert({
    user_id: userId,
    subject: input.subject,
    chapter: input.chapter,
    task_key: input.taskKey,
    task_title: input.taskTitle ?? null,
    correct_count: input.correctCount,
    statement_count: input.statementCount,
    is_passed: input.correctCount === input.statementCount,
  });
  if (error) {
    console.error("recordTaskAttempt", error);
    return;
  }
  if (input.taskKey.startsWith("demo:")) {
    void enrollInCourse("demo-practice");
  }
}

export async function fetchTaskAttempts(): Promise<TaskAttempt[]> {
  const userId = await currentUserId();
  if (!userId) return [];
  const { data, error } = await supabase
    .from("task_attempts")
    .select("id, subject, chapter, task_key, task_title, correct_count, statement_count, is_passed, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  if (error) {
    console.error("fetchTaskAttempts", error);
    return [];
  }
  return (data ?? []) as TaskAttempt[];
}

/* -------------------------- mock attempts ------------------------- */

function marksFromAnswersJson(raw: unknown): Record<string, boolean[]> | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const o = raw as Record<string, unknown>;
  const nested = o.marks;
  if (nested && typeof nested === "object" && !Array.isArray(nested)) {
    const out: Record<string, boolean[]> = {};
    for (const [id, value] of Object.entries(nested as Record<string, unknown>)) {
      if (!Array.isArray(value) || value.length === 0) continue;
      out[id] = value.map((v) => v === true);
    }
    if (Object.keys(out).length > 0) return out;
  }
  return null;
}

async function persistMockAttempt(input: {
  examId: string;
  examTitle: string;
  pointsEarned: number;
  pointsTotal: number;
  perSubject: Record<string, number>;
  secondsTaken: number | null;
  timed: boolean;
  correctCount: number;
  statementCount: number;
  marks?: Record<string, boolean[]>;
  timeByQuestion?: Record<string, number>;
  flagged?: string[];
  questions?: ExamQuestion[];
  track?: "bbe" | "wiso";
}): Promise<boolean> {
  const userId = await currentUserId();
  if (!userId) return false;

  // Prefer converting in-progress row → submitted so recovery state is cleared.
  const { data: existing, error: lookupError } = await supabase
    .from("mock_attempts")
    .select("id, answers")
    .eq("user_id", userId)
    .eq("exam_id", input.examId)
    .eq("status", "in_progress")
    .maybeSingle();
  if (lookupError) throw new Error("Could not load your exam submission. Please retry.");

  const inputMarks =
    input.marks && Object.keys(input.marks).length > 0 ? input.marks : null;
  const priorMarks = marksFromAnswersJson(existing?.answers);
  const marks = inputMarks ?? priorMarks;

  const answers: MockAnswersPayload = {
    correct_count: input.correctCount,
    statement_count: input.statementCount,
    ...(input.questions ? { questions: input.questions, track: input.track } : {}),
    ...(marks ? { marks } : {}),
    ...(input.timeByQuestion && Object.keys(input.timeByQuestion).length > 0
      ? { timeByQuestion: input.timeByQuestion }
      : {}),
    ...(input.flagged && input.flagged.length > 0 ? { flagged: input.flagged } : {}),
  };

  if (existing?.id) {
    const { error } = await supabase
      .from("mock_attempts")
      .update({
        exam_title: input.examTitle,
        points_earned: input.pointsEarned,
        points_total: input.pointsTotal,
        per_subject: input.perSubject,
        seconds_taken: input.secondsTaken,
        timed: input.timed,
        answers: JSON.parse(JSON.stringify(answers)) as Json,
        status: "submitted",
        completed_at: new Date().toISOString(),
        flags: {},
        notes: {},
        annotations: {},
        progress: {},
      })
      .eq("id", existing.id);
    if (error) throw new Error("Could not save your exam answers. Please retry.");
    return true;
  }

  const { error } = await supabase.from("mock_attempts").insert({
    user_id: userId,
    exam_id: input.examId,
    exam_title: input.examTitle,
    points_earned: input.pointsEarned,
    points_total: input.pointsTotal,
    per_subject: input.perSubject,
    seconds_taken: input.secondsTaken,
    timed: input.timed,
    answers: JSON.parse(JSON.stringify(answers)) as Json,
    status: "submitted",
    completed_at: new Date().toISOString(),
  });
  if (error) throw new Error("Could not save your exam answers. Please retry.");
  return true;
}

export function recordMockAttempt(input: Parameters<typeof persistMockAttempt>[0]): Promise<boolean> {
  return queueMockSave(input.examId, () => persistMockAttempt(input));
}

/** Debounced remote backup of an in-progress sitting (logged-in users only). */
async function persistMockExamProgress(input: {
  examId: string;
  examTitle: string;
  session: MockExamSession;
  pointsTotal?: number;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;

  const row = {
    user_id: userId,
    exam_id: input.examId,
    exam_title: input.examTitle,
    points_earned: 0,
    points_total: input.pointsTotal ?? 160,
    per_subject: {},
    seconds_taken: null as number | null,
    timed: input.session.timed,
    answers: { marks: input.session.answers },
    status: "in_progress" as const,
    started_at: new Date(input.session.startedAt).toISOString(),
    current_index: input.session.currentIndex,
    flags: Object.fromEntries(input.session.flagged.map((id) => [id, true])),
    notes: input.session.notes,
    annotations: input.session.annotations as unknown as Record<string, unknown>,
    progress: {
      secondsLeft: input.session.secondsLeft,
      visited: input.session.visited,
      updatedAt: input.session.updatedAt,
      answerSheet: input.session.answerSheet,
      timeByQuestion: input.session.timeByQuestion ?? {},
    },
  };

  const { data: existing } = await supabase
    .from("mock_attempts")
    .select("id")
    .eq("user_id", userId)
    .eq("exam_id", input.examId)
    .eq("status", "in_progress")
    .maybeSingle();

  if (existing?.id) {
    const { error } = await supabase
      .from("mock_attempts")
      .update(row as never)
      .eq("id", existing.id)
      .eq("status", "in_progress");
    if (error) throw new Error("Could not sync exam progress.");
    return;
  }

  const { error } = await supabase.from("mock_attempts").insert(row as never);
  if (error) throw new Error("Could not sync exam progress.");
}

export function upsertMockExamProgress(input: Parameters<typeof persistMockExamProgress>[0]): Promise<void> {
  return queueMockSave(input.examId, () => persistMockExamProgress(input));
}

export async function fetchInProgressMockSession(
  examId: string,
): Promise<MockExamSession | null> {
  const userId = await currentUserId();
  if (!userId) return null;
  const { data, error } = await supabase
    .from("mock_attempts")
    .select(
      "exam_id, timed, started_at, current_index, flags, notes, annotations, progress, answers",
    )
    .eq("user_id", userId)
    .eq("exam_id", examId)
    .eq("status", "in_progress")
    .maybeSingle();
  if (error) {
    console.error("fetchInProgressMockSession", error);
    return null;
  }
  if (!data) return null;

  const progress = (data.progress ?? {}) as {
    secondsLeft?: number | null;
    visited?: string[];
    updatedAt?: number;
    answerSheet?: boolean;
    timeByQuestion?: Record<string, number>;
  };
  const answersRaw = (data.answers ?? {}) as { marks?: Record<string, boolean[]> };
  const flagsObj = (data.flags ?? {}) as Record<string, boolean>;

  return {
    version: 1,
    examId: data.exam_id,
    timed: data.timed,
    answerSheet: progress.answerSheet !== false,
    startedAt: data.started_at ? new Date(data.started_at).getTime() : Date.now(),
    secondsLeft: progress.secondsLeft ?? null,
    currentIndex: data.current_index ?? 0,
    answers: answersRaw.marks ?? {},
    flagged: Object.keys(flagsObj).filter((k) => flagsObj[k]),
    visited: progress.visited ?? [],
    notes: (data.notes ?? {}) as Record<string, string>,
    annotations: (data.annotations ?? {}) as MockExamSession["annotations"],
    timeByQuestion: progress.timeByQuestion ?? {},
    updatedAt: progress.updatedAt ?? Date.now(),
  };
}

export async function fetchMockAttempts(): Promise<MockAttempt[]> {
  const userId = await currentUserId();
  if (!userId) return [];
  const { data, error } = await supabase
    .from("mock_attempts")
    .select(
      "id, exam_id, exam_title, points_earned, points_total, per_subject, seconds_taken, timed, completed_at, answers, status",
    )
    .eq("user_id", userId)
    .order("completed_at", { ascending: false });
  if (error) {
    console.error("fetchMockAttempts", error);
    return [];
  }
  return (data ?? [])
    .filter((row) => {
      const status = (row as { status?: string }).status;
      return !status || status === "submitted";
    })
    .map((row) => {
      const statementStats = parseMockAnswers(row.answers);
      return {
        id: row.id,
        exam_id: row.exam_id,
        exam_title: row.exam_title,
        points_earned: Number(row.points_earned),
        points_total: Number(row.points_total),
        per_subject: (row.per_subject ?? {}) as Record<string, number>,
        seconds_taken: row.seconds_taken,
        timed: row.timed,
        completed_at: row.completed_at ?? new Date().toISOString(),
        correct_count: statementStats.correct_count,
        statement_count: statementStats.statement_count,
      };
    });
}

/* --------------------------- aggregation -------------------------- */

export type SubjectStats = {
  subject: string;
  attempted: number;
  passed: number;
  accuracy: number;
  chapters: {
    chapter: string;
    attempted: number;
    passed: number;
    accuracy: number;
  }[];
};

/** Latest attempt per task, grouped by subject and chapter. */
export function summarizeTaskAttempts(attempts: TaskAttempt[]): SubjectStats[] {
  const latest = new Map<string, TaskAttempt>();
  for (const a of attempts) {
    latest.set(`${a.subject}::${a.task_key}`, a); // ordered ascending → last wins
  }
  const bySubject = new Map<string, TaskAttempt[]>();
  for (const a of latest.values()) {
    if (!bySubject.has(a.subject)) bySubject.set(a.subject, []);
    bySubject.get(a.subject)!.push(a);
  }

  const pct = (passed: number, attempted: number) =>
    attempted > 0 ? Math.round((passed / attempted) * 100) : 0;

  return [...bySubject.entries()]
    .map(([subject, list]) => {
      const byChapter = new Map<string, TaskAttempt[]>();
      for (const a of list) {
        if (!byChapter.has(a.chapter)) byChapter.set(a.chapter, []);
        byChapter.get(a.chapter)!.push(a);
      }
      const chapters = [...byChapter.entries()]
        .map(([chapter, items]) => {
          const passed = items.filter((i) => i.is_passed).length;
          return { chapter, attempted: items.length, passed, accuracy: pct(passed, items.length) };
        })
        .sort((a, b) => a.chapter.localeCompare(b.chapter, undefined, { numeric: true }));

      const passed = list.filter((i) => i.is_passed).length;
      return { subject, attempted: list.length, passed, accuracy: pct(passed, list.length), chapters };
    })
    .sort((a, b) => a.subject.localeCompare(b.subject));
}

/** Consecutive-day streak based on any recorded activity. */
export function computeStreak(dates: string[]): number {
  if (dates.length === 0) return 0;
  const days = new Set(dates.map((d) => new Date(d).toISOString().slice(0, 10)));
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (days.has(key)) streak += 1;
    else if (i > 0 || !days.has(key)) {
      if (i === 0) continue; // today may be idle; streak can still run to yesterday
      break;
    }
  }
  return streak;
}
