/** Client-side mock exam progress — primary recovery store (works for guests). */

export type AnnotationTool = "pen" | "highlighter" | "eraser";

export type AnnotationStroke = {
  tool: AnnotationTool;
  color: string;
  size: number;
  /** [x, y, pressure] samples in canvas-local coords */
  points: number[][];
};

export type MockExamSession = {
  version: 1;
  examId: string;
  timed: boolean;
  startedAt: number;
  /** Remaining seconds when timed; null when untimed */
  secondsLeft: number | null;
  currentIndex: number;
  /** questionId → five statement marks (true = marked / True) */
  answers: Record<string, boolean[]>;
  flagged: string[];
  visited: string[];
  /** Per-question typed notes */
  notes: Record<string, string>;
  /** Per-question ink strokes */
  annotations: Record<string, AnnotationStroke[]>;
  updatedAt: number;
};

export const EXAM_SECONDS = 2 * 60 * 60;

export function progressStorageKey(examId: string) {
  return `bbe-mock-progress:${examId}`;
}

export function answersStorageKey(examId: string) {
  return `bbe-mock-answers:${examId}`;
}

export function emptyAnswers(questionIds: string[]): Record<string, boolean[]> {
  return Object.fromEntries(questionIds.map((id) => [id, [false, false, false, false, false]]));
}

export function createFreshSession(
  examId: string,
  timed: boolean,
  questionIds: string[],
): MockExamSession {
  const now = Date.now();
  return {
    version: 1,
    examId,
    timed,
    startedAt: now,
    secondsLeft: timed ? EXAM_SECONDS : null,
    currentIndex: 0,
    answers: emptyAnswers(questionIds),
    flagged: [],
    visited: questionIds[0] ? [questionIds[0]] : [],
    notes: {},
    annotations: {},
    updatedAt: now,
  };
}

export function loadSession(examId: string): MockExamSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(progressStorageKey(examId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as MockExamSession;
    if (parsed?.version !== 1 || parsed.examId !== examId) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveSession(session: MockExamSession): void {
  if (typeof window === "undefined") return;
  try {
    const next = { ...session, updatedAt: Date.now() };
    localStorage.setItem(progressStorageKey(session.examId), JSON.stringify(next));
  } catch {
    /* quota / private mode */
  }
}

export function clearSession(examId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(progressStorageKey(examId));
  } catch {
    /* ignore */
  }
}

export function isQuestionAnswered(marks: boolean[] | undefined): boolean {
  return Boolean(marks?.some(Boolean));
}

export function formatExamTime(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
