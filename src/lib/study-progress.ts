import { supabase } from "@/integrations/supabase/client";
import type { MockAttempt, TaskAttempt } from "@/lib/user-progress";

/** One row of statement-level practice data from `/practice`. */
export type SessionAnswerStat = {
  is_correct: boolean;
  created_at: string;
  question_id: string;
};

export type DayProgress = {
  /** Local calendar date `YYYY-MM-DD` */
  date: string;
  statementsAnswered: number;
  correctStatements: number;
  /** Null when no statements were answered that day. */
  accuracy: number | null;
  /** Task attempts (economics / English cases, etc.). */
  assignmentsCompleted: number;
  /** Distinct practice questions completed. */
  questionsCompleted: number;
  /** Mock exams finished that day. */
  mocksCompleted: number;
  /** Sum of mock `seconds_taken` for the day; null if unavailable. */
  studyTimeSeconds: number | null;
  /** True for padded cells after today (current week alignment). */
  isFuture?: boolean;
};

export type StudyProgressSummary = {
  currentStreak: number;
  longestStreak: number;
  /** Statement-level: total correct ÷ total answered (all history in range). */
  averageAccuracy: number | null;
  statementsThisMonth: number;
  assignmentsThisMonth: number;
  days: DayProgress[];
};

/** Parse `YYYY-MM-DD` in the user's local timezone. */
export function toLocalDateKey(isoOrDate: string | Date): string {
  const d = typeof isoOrDate === "string" ? new Date(isoOrDate) : isoOrDate;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Color intensity from daily statement accuracy only.
 * Level 0 = no activity. Levels 1–7 = orange intensity bands.
 */
export function accuracyToLevel(accuracy: number | null): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 {
  if (accuracy === null) return 0;
  if (accuracy < 50) return 1;
  if (accuracy < 60) return 2;
  if (accuracy < 70) return 3;
  if (accuracy < 80) return 4;
  if (accuracy < 90) return 5;
  if (accuracy < 95) return 6;
  return 7;
}

/** Seven orange intensity shades + idle gray — brand caramel family. */
export const HEATMAP_LEVEL_COLORS: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, string> = {
  0: "#e9e9e9",
  1: "#fde8d0",
  2: "#f7c894",
  3: "#efaa62",
  4: "#e48c3d",
  5: "#d47328",
  6: "#c45f1a",
  7: "#a34a12",
};

export async function fetchSessionAnswerStats(sinceIso?: string): Promise<SessionAnswerStat[]> {
  const { data: session } = await supabase.auth.getSession();
  const userId = session.session?.user?.id;
  if (!userId) return [];

  const since =
    sinceIso ??
    (() => {
      const d = new Date();
      d.setFullYear(d.getFullYear() - 1);
      d.setHours(0, 0, 0, 0);
      return d.toISOString();
    })();

  const { data, error } = await supabase
    .from("session_answers")
    .select("is_correct, created_at, question_id")
    .eq("user_id", userId)
    .gte("created_at", since)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("fetchSessionAnswerStats", error);
    return [];
  }
  return (data ?? []) as SessionAnswerStat[];
}

type MutableDay = {
  statementsAnswered: number;
  correctStatements: number;
  assignmentsCompleted: number;
  questionIds: Set<string>;
  mocksCompleted: number;
  studyTimeSeconds: number;
  hasStudyTime: boolean;
};

function emptyDay(): MutableDay {
  return {
    statementsAnswered: 0,
    correctStatements: 0,
    assignmentsCompleted: 0,
    questionIds: new Set(),
    mocksCompleted: 0,
    studyTimeSeconds: 0,
    hasStudyTime: false,
  };
}

function ensureDay(map: Map<string, MutableDay>, key: string): MutableDay {
  let day = map.get(key);
  if (!day) {
    day = emptyDay();
    map.set(key, day);
  }
  return day;
}

/**
 * Build daily statement-level progress from real attempt data.
 * Accuracy = Σ correct statements ÷ Σ statements that day (never averaged per assignment).
 */
export function buildStudyProgress(
  tasks: TaskAttempt[],
  mocks: MockAttempt[],
  sessionAnswers: SessionAnswerStat[],
  opts?: { months?: number },
): StudyProgressSummary {
  const months = opts?.months ?? 12;
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const rangeStart = new Date(today);
  rangeStart.setMonth(rangeStart.getMonth() - months);
  rangeStart.setHours(0, 0, 0, 0);

  // Align heatmap start to Monday of the week containing rangeStart.
  const gridStart = new Date(rangeStart);
  const dow = (gridStart.getDay() + 6) % 7; // Mon=0 … Sun=6
  gridStart.setDate(gridStart.getDate() - dow);

  const byDay = new Map<string, MutableDay>();

  for (const t of tasks) {
    const created = new Date(t.created_at);
    if (created < gridStart || created > today) continue;
    const key = toLocalDateKey(created);
    const day = ensureDay(byDay, key);
    day.statementsAnswered += t.statement_count;
    day.correctStatements += t.correct_count;
    day.assignmentsCompleted += 1;
  }

  for (const a of sessionAnswers) {
    const created = new Date(a.created_at);
    if (created < gridStart || created > today) continue;
    const key = toLocalDateKey(created);
    const day = ensureDay(byDay, key);
    day.statementsAnswered += 1;
    if (a.is_correct) day.correctStatements += 1;
    day.questionIds.add(a.question_id);
  }

  for (const m of mocks) {
    const completed = new Date(m.completed_at);
    if (completed < gridStart || completed > today) continue;
    const key = toLocalDateKey(completed);
    const day = ensureDay(byDay, key);
    day.mocksCompleted += 1;
    if (m.seconds_taken != null) {
      day.studyTimeSeconds += m.seconds_taken;
      day.hasStudyTime = true;
    }
    // Only statement-accurate mocks (new recordings) contribute to accuracy color.
    if (m.correct_count != null && m.statement_count != null && m.statement_count > 0) {
      day.statementsAnswered += m.statement_count;
      day.correctStatements += m.correct_count;
    }
  }

  const days: DayProgress[] = [];
  const cursor = new Date(gridStart);
  const todayKey = toLocalDateKey(today);

  // Pad through Sunday of the current week so columns stay aligned.
  const weekEnd = new Date(today);
  weekEnd.setHours(12, 0, 0, 0);
  const todayDow = (weekEnd.getDay() + 6) % 7; // Mon=0
  weekEnd.setDate(weekEnd.getDate() + (6 - todayDow));
  const endKey = toLocalDateKey(weekEnd);

  while (toLocalDateKey(cursor) <= endKey) {
    const key = toLocalDateKey(cursor);
    const isFuture = key > todayKey;
    const raw = byDay.get(key);

    if (isFuture) {
      days.push({
        date: key,
        statementsAnswered: 0,
        correctStatements: 0,
        accuracy: null,
        assignmentsCompleted: 0,
        questionsCompleted: 0,
        mocksCompleted: 0,
        studyTimeSeconds: null,
        isFuture: true,
      });
    } else if (!raw || raw.statementsAnswered === 0) {
      days.push({
        date: key,
        statementsAnswered: 0,
        correctStatements: 0,
        accuracy: null,
        assignmentsCompleted: raw?.assignmentsCompleted ?? 0,
        questionsCompleted: raw?.questionIds.size ?? 0,
        mocksCompleted: raw?.mocksCompleted ?? 0,
        studyTimeSeconds: raw?.hasStudyTime ? raw.studyTimeSeconds : null,
      });
    } else {
      days.push({
        date: key,
        statementsAnswered: raw.statementsAnswered,
        correctStatements: raw.correctStatements,
        accuracy: (raw.correctStatements / raw.statementsAnswered) * 100,
        assignmentsCompleted: raw.assignmentsCompleted,
        questionsCompleted: raw.questionIds.size,
        mocksCompleted: raw.mocksCompleted,
        studyTimeSeconds: raw.hasStudyTime ? raw.studyTimeSeconds : null,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  const activeKeys = days
    .filter((d) => !d.isFuture && d.statementsAnswered > 0)
    .map((d) => d.date);
  const currentStreak = computeLocalStreak(activeKeys, todayKey);
  const longestStreak = computeLongestStreak(activeKeys);

  let totalCorrect = 0;
  let totalStatements = 0;
  for (const d of days) {
    if (d.isFuture) continue;
    totalCorrect += d.correctStatements;
    totalStatements += d.statementsAnswered;
  }
  const averageAccuracy =
    totalStatements > 0 ? (totalCorrect / totalStatements) * 100 : null;

  const monthPrefix = todayKey.slice(0, 7); // YYYY-MM
  let statementsThisMonth = 0;
  let assignmentsThisMonth = 0;
  for (const d of days) {
    if (d.isFuture || !d.date.startsWith(monthPrefix)) continue;
    statementsThisMonth += d.statementsAnswered;
    assignmentsThisMonth += d.assignmentsCompleted + d.questionsCompleted;
  }

  return {
    currentStreak,
    longestStreak,
    averageAccuracy,
    statementsThisMonth,
    assignmentsThisMonth,
    days,
  };
}

/** Consecutive local calendar days ending today or yesterday. */
export function computeLocalStreak(activeDateKeys: string[], todayKey: string): number {
  if (activeDateKeys.length === 0) return 0;
  const set = new Set(activeDateKeys);
  const start = new Date(todayKey + "T12:00:00");
  let streak = 0;

  // Allow an idle today — streak continues from yesterday.
  if (!set.has(todayKey)) {
    start.setDate(start.getDate() - 1);
  }

  for (let i = 0; i < 400; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() - i);
    const key = toLocalDateKey(d);
    if (set.has(key)) streak += 1;
    else break;
  }
  return streak;
}

export function computeLongestStreak(activeDateKeys: string[]): number {
  if (activeDateKeys.length === 0) return 0;
  const sorted = [...new Set(activeDateKeys)].sort();
  let longest = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1] + "T12:00:00");
    const curr = new Date(sorted[i] + "T12:00:00");
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / 86_400_000);
    if (diffDays === 1) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 1;
    }
  }
  return longest;
}
