import { supabase } from "@/integrations/supabase/client";

/* ----------------------------- types ----------------------------- */

export type CourseSlug = "demo-practice" | "lite-bbe-course" | "full-course";

export type Enrollment = {
  id: string;
  product_slug: string;
  product_name: string;
  tier: string;
  created_at: string;
};

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
};

export const COURSE_CATALOG: Record<
  CourseSlug,
  { name: string; tier: string; href: string }
> = {
  "demo-practice": { name: "Demo Practice Package", tier: "demo", href: "/demo-practice" },
  "lite-bbe-course": { name: "Lite BBE Course", tier: "lite", href: "/products/lite-bbe-course" },
  "full-course": { name: "Full BBE Course", tier: "full", href: "/products/full-course-subjects" },
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
  return (data ?? []) as Enrollment[];
}

/** Highest tier the user owns; used for exam access. */
export function highestTier(enrollments: Enrollment[]): "none" | "demo" | "lite" | "full" {
  if (enrollments.some((e) => e.tier === "full")) return "full";
  if (enrollments.some((e) => e.tier === "lite")) return "lite";
  if (enrollments.length > 0) return "demo";
  return "none";
}

/* -------------------------- task attempts ------------------------- */

export async function recordTaskAttempt(input: {
  subject: string;
  chapter: string;
  taskKey: string;
  taskTitle?: string | null;
  correctCount: number;
  statementCount: number;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;
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
  if (error) console.error("recordTaskAttempt", error);
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

export async function recordMockAttempt(input: {
  examId: string;
  examTitle: string;
  pointsEarned: number;
  pointsTotal: number;
  perSubject: Record<string, number>;
  secondsTaken: number | null;
  timed: boolean;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;
  const { error } = await supabase.from("mock_attempts").insert({
    user_id: userId,
    exam_id: input.examId,
    exam_title: input.examTitle,
    points_earned: input.pointsEarned,
    points_total: input.pointsTotal,
    per_subject: input.perSubject,
    seconds_taken: input.secondsTaken,
    timed: input.timed,
  });
  if (error) console.error("recordMockAttempt", error);
}

export async function fetchMockAttempts(): Promise<MockAttempt[]> {
  const userId = await currentUserId();
  if (!userId) return [];
  const { data, error } = await supabase
    .from("mock_attempts")
    .select("id, exam_id, exam_title, points_earned, points_total, per_subject, seconds_taken, timed, completed_at")
    .eq("user_id", userId)
    .order("completed_at", { ascending: false });
  if (error) {
    console.error("fetchMockAttempts", error);
    return [];
  }
  return (data ?? []).map((row) => ({
    ...row,
    points_earned: Number(row.points_earned),
    points_total: Number(row.points_total),
    per_subject: (row.per_subject ?? {}) as Record<string, number>,
  })) as MockAttempt[];
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
