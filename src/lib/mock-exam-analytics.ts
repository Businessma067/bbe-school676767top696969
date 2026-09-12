import { SUBJECT_META, type SubjectKey } from "@/config/scoring-config";
import { findCustomMockSubtopic, getCustomMockChapters } from "@/data/custom-mock-catalog";
import type { ExamQuestion } from "@/lib/mock-exams";
import {
  calculateExamScore,
  getWi2Rates,
  statementPointDelta,
  type StatementResult,
} from "@/lib/scoring";

export type MockAttemptHandoff = {
  answers: Record<string, boolean[]>;
  timed: boolean;
  secondsTaken: number | null;
  timeByQuestion?: Record<string, number>;
  flagged?: string[];
};

export type StatementJudgment = {
  index: number;
  letter: string;
  isTrue: boolean;
  userMarked: boolean;
  judgedOk: boolean;
  delta: number;
};

export type TaskAnalyticsRow = {
  question: ExamQuestion;
  statements: StatementResult[];
  score: number;
  maxPoints: number;
  statementCorrect: number;
  statementCount: number;
  accuracyPct: number;
  seconds: number;
  flagged: boolean;
  judgments: StatementJudgment[];
  topicKey: string;
  topicLabel: string;
  chapterKey: string | null;
  chapterLabel: string | null;
};

export type GroupAnalytics = {
  key: string;
  label: string;
  color: string;
  taskCount: number;
  earned: number;
  max: number;
  scorePct: number;
  statementCorrect: number;
  statementCount: number;
  accuracyPct: number;
  seconds: number;
};

const EMPTY_MARKS = [false, false, false, false, false];
const SUBJECT_ORDER: SubjectKey[] = ["economics", "english", "math"];
const REVIEW_BELOW = 70;
const STRONG_AT = 85;

export function parseMockAttemptHandoff(raw: unknown): MockAttemptHandoff | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (!o.answers || typeof o.answers !== "object" || Array.isArray(o.answers)) return null;
  const timeRaw = o.timeByQuestion;
  const timeByQuestion: Record<string, number> = {};
  if (timeRaw && typeof timeRaw === "object" && !Array.isArray(timeRaw)) {
    for (const [id, value] of Object.entries(timeRaw as Record<string, unknown>)) {
      if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
        timeByQuestion[id] = Math.round(value);
      }
    }
  }
  return {
    answers: o.answers as Record<string, boolean[]>,
    timed: o.timed === true,
    secondsTaken: typeof o.secondsTaken === "number" && Number.isFinite(o.secondsTaken) ? o.secondsTaken : null,
    timeByQuestion,
    flagged: Array.isArray(o.flagged) ? o.flagged.filter((x): x is string => typeof x === "string") : [],
  };
}

export function topicOf(q: ExamQuestion): { key: string; label: string } {
  const tag = q.subtopicTag?.trim();
  if (tag) {
    return { key: tag, label: tag.replace(/^#\s*/, "") };
  }
  return { key: `subject:${q.subject}`, label: SUBJECT_META[q.subject].label };
}

function parseSubtopicId(tag: string): string | null {
  return tag.trim().match(/^#\s*([A-Za-z0-9.]+)/)?.[1] ?? null;
}

export function chapterOf(q: ExamQuestion): { key: string; label: string } | null {
  const tag = q.subtopicTag?.trim();
  if (!tag) return null;
  const id = parseSubtopicId(tag);
  if (!id) return null;
  const meta = findCustomMockSubtopic(q.subject, id);
  const chapters = getCustomMockChapters(q.subject);
  const ch = meta ? chapters.find((c) => c.num === meta.chapter) : undefined;
  if (ch) {
    const heading =
      ch.heading.startsWith("Chapter ") && ch.title ? `${ch.num} ${ch.title}` : ch.heading;
    return {
      key: `${q.subject}:${ch.num}`,
      label: `${SUBJECT_META[q.subject].label} · ${heading}`,
    };
  }
  const num = id.match(/^(\d+)/)?.[1];
  if (!num) return null;
  return {
    key: `${q.subject}:${num}`,
    label: `${SUBJECT_META[q.subject].label} · ${num}`,
  };
}

export function medianNumber(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1 ? (sorted[mid] ?? 0) : ((sorted[mid - 1] ?? 0) + (sorted[mid] ?? 0)) / 2;
}

export function splitFocus(rows: GroupAnalytics[]) {
  const sorted = [...rows].sort((a, b) => a.accuracyPct - b.accuracyPct || a.label.localeCompare(b.label));
  return {
    toReview: sorted.filter((r) => r.accuracyPct < REVIEW_BELOW),
    watch: sorted.filter((r) => r.accuracyPct >= REVIEW_BELOW && r.accuracyPct < STRONG_AT),
    holdingWell: [...sorted.filter((r) => r.accuracyPct >= STRONG_AT)].reverse(),
  };
}

function groupRows(
  items: TaskAnalyticsRow[],
  keyFn: (t: TaskAnalyticsRow) => string,
  labelFn: (t: TaskAnalyticsRow) => string,
  colorFn: (t: TaskAnalyticsRow) => string,
): GroupAnalytics[] {
  const map = new Map<string, GroupAnalytics>();
  for (const t of items) {
    const key = keyFn(t);
    const existing = map.get(key);
    if (!existing) {
      map.set(key, {
        key,
        label: labelFn(t),
        color: colorFn(t),
        taskCount: 1,
        earned: t.score,
        max: t.maxPoints,
        scorePct: 0,
        statementCorrect: t.statementCorrect,
        statementCount: t.statementCount,
        accuracyPct: 0,
        seconds: t.seconds,
      });
    } else {
      existing.taskCount += 1;
      existing.earned += t.score;
      existing.max += t.maxPoints;
      existing.statementCorrect += t.statementCorrect;
      existing.statementCount += t.statementCount;
      existing.seconds += t.seconds;
    }
  }
  return [...map.values()].map((g) => ({
    ...g,
    scorePct: g.max > 0 ? Math.round((g.earned / g.max) * 100) : 0,
    accuracyPct: g.statementCount ? Math.round((g.statementCorrect / g.statementCount) * 100) : 0,
  }));
}

export function buildExamAnalytics(questions: ExamQuestion[], attempt: MockAttemptHandoff | null) {
  const flagged = new Set(attempt?.flagged ?? []);
  const timeByQuestion = attempt?.timeByQuestion ?? {};

  const marked = questions.map((q) => {
    const stored = attempt?.answers?.[q.id];
    const userMarks = stored ?? EMPTY_MARKS;
    return {
      question: q,
      statements: q.statements.map((s, i) => ({
        isTrue: s.isTrue,
        userMarked: userMarks[i] ?? false,
      })) as StatementResult[],
    };
  });

  const { taskScores, total } = calculateExamScore(
    marked.map((m) => ({ maxPoints: m.question.maxPoints, statements: m.statements })),
  );

  const pointsTotal = questions.reduce((sum, q) => sum + q.maxPoints, 0);

  const tasks: TaskAnalyticsRow[] = marked.map((m, i) => {
    const rates = getWi2Rates(m.question.maxPoints, m.statements);
    const judgments = m.statements.map((s, si) => ({
      index: si,
      letter: String.fromCharCode(65 + si),
      isTrue: s.isTrue,
      userMarked: s.userMarked,
      judgedOk: s.userMarked === s.isTrue,
      delta: statementPointDelta(s, rates),
    }));
    const statementCorrect = judgments.filter((j) => j.judgedOk).length;
    const statementCount = judgments.length;
    const topic = topicOf(m.question);
    const chapter = chapterOf(m.question);
    return {
      question: m.question,
      statements: m.statements,
      score: taskScores[i] ?? 0,
      maxPoints: m.question.maxPoints,
      statementCorrect,
      statementCount,
      accuracyPct: statementCount ? Math.round((statementCorrect / statementCount) * 100) : 0,
      seconds: timeByQuestion[m.question.id] ?? 0,
      flagged: flagged.has(m.question.id),
      judgments,
      topicKey: topic.key,
      topicLabel: topic.label,
      chapterKey: chapter?.key ?? null,
      chapterLabel: chapter?.label ?? null,
    };
  });

  let statementCorrect = 0;
  let statementCount = 0;
  for (const t of tasks) {
    statementCorrect += t.statementCorrect;
    statementCount += t.statementCount;
  }

  const sections = groupRows(
    tasks,
    (t) => t.question.subject,
    (t) => SUBJECT_META[t.question.subject].label,
    (t) => SUBJECT_META[t.question.subject].color,
  ).sort(
    (a, b) => SUBJECT_ORDER.indexOf(a.key as SubjectKey) - SUBJECT_ORDER.indexOf(b.key as SubjectKey),
  );

  const hasTopicBreakdown = questions.some((q) => Boolean(q.subtopicTag?.trim()));
  const topics = hasTopicBreakdown
    ? groupRows(
        tasks,
        (t) => t.topicKey,
        (t) => t.topicLabel,
        (t) => SUBJECT_META[t.question.subject].color,
      )
    : [];

  const chapterTasks = tasks.filter((t) => t.chapterKey && t.chapterLabel);
  const chapters = chapterTasks.length
    ? groupRows(
        chapterTasks,
        (t) => t.chapterKey!,
        (t) => t.chapterLabel!,
        (t) => SUBJECT_META[t.question.subject].color,
      )
    : [];

  const times = tasks.map((t) => t.seconds);
  const focus = splitFocus(hasTopicBreakdown ? topics : sections);

  return {
    tasks,
    taskScores,
    total,
    pointsTotal,
    pct: pointsTotal > 0 ? Math.round((total / pointsTotal) * 100) : 0,
    statementCorrect,
    statementCount,
    statementPct: statementCount ? Math.round((statementCorrect / statementCount) * 100) : 0,
    sections,
    topics,
    chapters,
    hasTopicBreakdown,
    secondsTaken: attempt?.secondsTaken ?? null,
    timed: attempt?.timed ?? false,
    answeredTasks: tasks.filter((t) => t.statements.some((s) => s.userMarked)).length,
    medianSeconds: medianNumber(times),
    meanSeconds: times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0,
    toReview: focus.toReview,
    watch: focus.watch,
    holdingWell: focus.holdingWell,
  };
}
