import { lazy, Suspense, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock,
  FileSpreadsheet,
  Flag,
  Flame,
  Layers,
  Loader2,
  PanelLeftOpen,
  PenLine,
  Sparkles,
  StickyNote,
  Target,
  ThumbsDown,
  ThumbsUp,
  Timer,
  TrendingUp,
  Trophy,
  Wand2,
} from "lucide-react";
import { AuthNav } from "@/components/AuthNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FlashcardMath } from "@/components/FlashcardMath";
import { StudyProgressSection } from "@/components/StudyProgressSection";
import { Ti30MathPrint } from "@/components/calculator/Ti30MathPrint";
import { TopicWeightSelector } from "@/components/custom-mock/TopicWeightSelector";
import { ExamAnswerSheet } from "@/components/mock-exam/ExamAnswerSheet";
import { ExamQuestionBody, ExamStatementText } from "@/components/mock-exam/ExamQuestionContent";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import { ReviewViewToggle } from "@/components/mock-exam/ExamTaskReview";
import { MockScoreTrend } from "@/components/mock-exam/MockScoreTrend";
import { QuestionPalette } from "@/components/mock-exam/QuestionPalette";
import { TheoryArticle } from "@/components/TheoryReader";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  durationMinutesForQuestionCount,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG, SUBJECT_META, subjectLabel } from "@/config/scoring-config";
import { ECONOMICS_COURSE_THEORY } from "@/data/economics-course-theory";
import { getCustomMockChapters } from "@/data/custom-mock-catalog";
import { countCards, ECONOMICS_FLASHCARD_SECTIONS } from "@/data/flashcards";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { buildMockExam1Questions } from "@/lib/mock-exam-1-content";
import { formatExamTime, formatQuestionTime } from "@/lib/mock-exam-session";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { PRACTICE_BODY, PRACTICE_HEADER_INNER, PRACTICE_PAGE } from "@/lib/practice-layout";
import { TUTOR_CORRECT, TUTOR_GREETINGS } from "@/lib/tutor-exam";
import { balancedPoint, type TopicWeightTopic } from "@/lib/topic-weight-engine";
import {
  COURSE_CATALOG,
  summarizeTaskAttempts,
  type CourseSlug,
  type MockAttempt,
  type TaskAttempt,
} from "@/lib/user-progress";
import { cn } from "@/lib/utils";
import { CoursePassage, CourseSolution } from "./CourseSolution";
import { CourseTimedBar } from "./CourseTimedBar";
import {
  COURSE_ECON,
  COURSE_ENGLISH,
  COURSE_ENGLISH_HIGHLIGHTS,
  COURSE_ENGLISH_PASSAGE,
  COURSE_MATH,
} from "./course-tasks";

const FlashcardsModeArt = lazy(() =>
  import("@/components/study-modes/ModeArt").then((m) => ({ default: m.FlashcardsModeArt })),
);
const MatchingModeArt = lazy(() =>
  import("@/components/study-modes/ModeArt").then((m) => ({ default: m.MatchingModeArt })),
);
const TutorModeArt = lazy(() =>
  import("@/components/study-modes/ModeArt").then((m) => ({ default: m.TutorModeArt })),
);

const ECON = COURSE_ECON;
const MATH = COURSE_MATH;
const ENGLISH = COURSE_ENGLISH;
const ENGLISH_AT = 2;
const HIGHLIGHT = COURSE_ENGLISH_HIGHLIGHTS[ENGLISH_AT] ?? "";
const PASSAGE =
  COURSE_ENGLISH_PASSAGE.split(/\n\n/).find((paragraph) => paragraph.includes(HIGHLIGHT)) ??
  COURSE_ENGLISH_PASSAGE;
const ENGLISH_MARKS: Record<number, boolean> = { 2: true, 4: true };

const CHAPTERS = Object.values(ECONOMICS_COURSE_THEORY);
const BUILDER_CHAPTERS = getCustomMockChapters("economics").slice(0, 3);
const BUILDER_CHAPTER = BUILDER_CHAPTERS[0];
const BUILDER_PICKS = BUILDER_CHAPTER?.subtopics.slice(0, 4) ?? [];

if (!BUILDER_CHAPTER || BUILDER_PICKS.length < 4) {
  throw new Error("Course tour builder topics missing");
}

export const TOUR_BUILDER_CHAPTER = BUILDER_CHAPTER.num;

const QUESTIONS = buildMockExam1Questions();
const EXAM_AT = 1;
const EXAM_SECONDS = 2 * 60 * 60;
const TIMES = [
  128, 152, 114, 176, 139, 163, 102, 192, 133, 147, 246, 268, 214, 287, 233, 122, 101, 134, 111,
  144, 118, 214, 248, 192, 286, 231, 180, 322, 218, 254, 201, 268, 175, 234,
] as const;
const TIME_TAKEN = TIMES.reduce((sum, seconds) => sum + seconds, 0);
const REMAINING = EXAM_SECONDS - TIME_TAKEN;
const EMPTY_MARKS = [false, false, false, false, false];
const COMPLETED = Object.fromEntries(
  QUESTIONS.map((question) => [
    question.id,
    question.statements.map((statement) => statement.isTrue),
  ]),
);

const ACCENT = "#c8763a";
const BUILDER_ACCENT = "#E85D3A";

const SUBJECT_COLORS: Record<string, string> = {
  economics: "#c8763a",
  math: "#10b981",
  english: "#0ea5e9",
};
const SUBJECT_LABEL: Record<string, string> = {
  economics: "Economics",
  math: "Math",
  english: "English",
};

function sectionOrThrow(id: string) {
  const section = ECONOMICS_FLASHCARD_SECTIONS.find((item) => item.id === id);
  if (!section) throw new Error(`Economics flashcard section missing: ${id}`);
  return section;
}

const CORE = sectionOrThrow("econ-1");
const TYPES = sectionOrThrow("econ-3");
const FLASH_CARD = CORE.cards[0];
const DECK_TOTAL = countCards(ECONOMICS_FLASHCARD_SECTIONS);
const MATCH_TERMS = ["Labour", "Land", "Entrepreneurship", "Factors of production"] as const;

function pairByTerm(term: string) {
  const card = TYPES.cards.find((item) => item.term === term);
  if (!card) throw new Error(`Missing flashcard: ${term}`);
  return card;
}

const MATCH_PAIRS = MATCH_TERMS.map((term, id) => ({ id, ...pairByTerm(term) }));
const MATCH_RIGHT = [1, 0, 3, 2];

if (!FLASH_CARD) throw new Error("Course tour flashcards missing");

const TUTOR_CHOICES = pairByTerm("Labour");
const TUTOR_OPTIONS = ["Labour", "Land", "Capital (factor of production)", "Entrepreneurship"].map(
  (term) => pairByTerm(term).explanation,
);
const TUTOR_CORRECT_AT = 0;
const GREETING = TUTOR_GREETINGS[1];
const CORRECT_LINE = TUTOR_CORRECT[0];

export type TourDashTab = "courses" | "mocks" | "custom" | "games";
export type TourToolMode = "flash" | "match" | "tutor";

function daysAgo(n: number) {
  const day = new Date();
  day.setDate(day.getDate() - n);
  return day.toISOString();
}

function sampleTasks(): TaskAttempt[] {
  const plan = [
    { subject: "economics", chapter: "Chapter 3 · Types of businesses", n: 8, pass: 6 },
    { subject: "math", chapter: "Chapter 12 · Elementary probability", n: 6, pass: 4 },
    { subject: "english", chapter: "Texts · The four-day workweek", n: 5, pass: 4 },
  ];
  const tasks: TaskAttempt[] = [];
  for (const row of plan) {
    for (let i = 0; i < row.n; i++) {
      tasks.push({
        id: `${row.subject}-${i}`,
        subject: row.subject,
        chapter: row.chapter,
        task_key: `${row.subject}-${i}`,
        task_title: `Task ${i + 1}`,
        correct_count: 4,
        statement_count: 5,
        is_passed: i < row.pass,
        created_at: daysAgo(i % 6),
      });
    }
  }
  return tasks;
}

const TASKS = sampleTasks();
const SESSION_ANSWERS = TASKS.flatMap((task, index) =>
  Array.from({ length: task.statement_count }, (_, statement) => ({
    is_correct: statement < task.correct_count,
    created_at: task.created_at,
    question_id: `${task.id}-${statement}-${index}`,
  })),
);
const SAMPLE_MOCKS: MockAttempt[] = [
  {
    id: "mock-1",
    exam_id: "mock-exam-1",
    exam_title: "Mock Exam 1",
    points_earned: 112,
    points_total: 160,
    per_subject: { economics: 42, math: 48, english: 22 },
    seconds_taken: 6120,
    timed: true,
    completed_at: daysAgo(1),
    correct_count: 112,
    statement_count: 160,
  },
  {
    id: "mock-2",
    exam_id: "mock-exam-2",
    exam_title: "Mock Exam 2",
    points_earned: 98,
    points_total: 160,
    per_subject: { economics: 36, math: 40, english: 22 },
    seconds_taken: 6480,
    timed: true,
    completed_at: daysAgo(4),
    correct_count: 98,
    statement_count: 160,
  },
];

function SideButton({
  icon,
  label,
  active,
  tip,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  tip: string;
}) {
  return (
    <span
      data-d={tip}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold",
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground",
      )}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
    </span>
  );
}

function StatPill({
  icon,
  label,
  value,
  sub,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-display text-xl font-bold leading-tight">{value}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function ProgressRing({ pct, stroke }: { pct: number; stroke: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
        <circle
          cx="40"
          cy="40"
          r={r}
          strokeWidth="8"
          fill="none"
          className="text-secondary"
          stroke="currentColor"
        />
        <circle
          cx="40"
          cy="40"
          r={r}
          stroke={stroke}
          strokeWidth="8"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-lg font-bold">{pct}%</span>
      </div>
    </div>
  );
}

/** Same courses shell as /dashboard: welcome, study progress, course card, stats. */
export function TourDash({ tab }: { tab: TourDashTab }) {
  const stats = summarizeTaskAttempts(TASKS);
  const totalPassed = stats.reduce((sum, row) => sum + row.passed, 0);
  const totalAttempted = stats.reduce((sum, row) => sum + row.attempted, 0);
  const overallAccuracy = totalAttempted ? Math.round((totalPassed / totalAttempted) * 100) : 0;
  const enrolled = new Set(["full-course"]);
  const available = (Object.keys(COURSE_CATALOG) as CourseSlug[]).filter(
    (slug) => !enrolled.has(slug),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex min-h-[36rem]">
        <aside className="w-44 shrink-0 border-r border-border/60 bg-card/40 py-4">
          <nav className="flex flex-col gap-1 px-2">
            <SideButton
              icon={<BookOpen className="h-4 w-4" />}
              label="Courses"
              active={tab === "courses"}
              tip="tab-courses"
            />
            <SideButton
              icon={<ClipboardCheck className="h-4 w-4" />}
              label="Mock Exams"
              active={tab === "mocks"}
              tip="tab-mocks"
            />
            <SideButton
              icon={<Wand2 className="h-4 w-4" />}
              label="Custom Mocks"
              active={tab === "custom"}
              tip="tab-custom"
            />
            <SideButton
              icon={<Layers className="h-4 w-4" />}
              label="Study tools"
              active={tab === "games"}
              tip="tab-games"
            />
          </nav>
        </aside>
        <div className="min-w-0 flex-1 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-sm">
              A
            </div>
            <h1 className="min-w-0 flex-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </h1>
            <span className="hidden shrink-0 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold sm:inline-flex">
              Account settings
            </span>
          </div>
          <div className="mt-6">
            {tab === "courses" ? (
              <div className="space-y-8">
                <StudyProgressSection
                  tasks={TASKS}
                  mocks={SAMPLE_MOCKS}
                  sessionAnswers={SESSION_ANSWERS}
                />
                <section>
                  <h2 className="mb-3 font-display text-xl font-bold tracking-tight">My courses</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <p className="text-xs text-muted-foreground">full access</p>
                      <h3 className="mt-1 font-display text-lg font-bold">Full BBE Course</h3>
                      <p className="mt-1 text-xs text-muted-foreground">Enrolled 12 Mar 2026</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full bg-caramel-deep"
                            style={{ width: `${overallAccuracy}%` }}
                          />
                        </div>
                        <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                          {totalPassed} tasks passed
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span
                          data-d="continue"
                          className="inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                        >
                          Continue
                        </span>
                        <span className="inline-flex rounded-md border border-border bg-secondary px-4 py-2 text-xs font-semibold">
                          Open flashcards →
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="mb-3 font-display text-xl font-bold tracking-tight">
                    Available courses
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {available.map((slug) => (
                      <div
                        key={slug}
                        className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                      >
                        <p className="text-xs text-muted-foreground">
                          {COURSE_CATALOG[slug].tier} access
                        </p>
                        <h3 className="mt-1 font-display text-base font-bold">
                          {COURSE_CATALOG[slug].name}
                        </h3>
                        <p className="mt-2 text-xs font-semibold text-caramel-deep">
                          View course →
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
                <div data-d="stats" className="grid gap-3 sm:grid-cols-3">
                  <StatPill
                    icon={<Target className="h-4 w-4 text-caramel-deep" />}
                    label="Tasks attempted"
                    value={`${totalAttempted}`}
                    sub={`${totalPassed} passed`}
                  />
                  <StatPill
                    icon={<TrendingUp className="h-4 w-4 text-caramel-deep" />}
                    label="Accuracy"
                    value={`${overallAccuracy}%`}
                    sub="across all subjects"
                  />
                  <StatPill
                    icon={<Flame className="h-4 w-4 text-caramel-deep" />}
                    label="Current streak"
                    value="6 days"
                    sub="days with activity"
                  />
                </div>
                {stats.map((row) => {
                  const color = SUBJECT_COLORS[row.subject] ?? "#c8763a";
                  const pct = row.attempted ? Math.round((row.passed / row.attempted) * 100) : 0;
                  return (
                    <section
                      key={row.subject}
                      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-6">
                        <ProgressRing pct={pct} stroke={color} />
                        <div className="min-w-0 flex-1">
                          <h2 className="font-display text-2xl font-bold tracking-tight">
                            {SUBJECT_LABEL[row.subject] ?? row.subject}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {row.passed} of {row.attempted} attempted tasks passed
                          </p>
                        </div>
                      </div>
                      <ul className="mt-6 divide-y divide-border/60">
                        {row.chapters.map((chapter) => {
                          const cpct = chapter.attempted
                            ? Math.round((chapter.passed / chapter.attempted) * 100)
                            : 0;
                          return (
                            <li
                              key={chapter.chapter}
                              className="flex flex-wrap items-center gap-4 py-3"
                            >
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold">{chapter.chapter}</p>
                                <div className="mt-1.5 flex items-center gap-3">
                                  <div className="h-1.5 w-full max-w-[280px] overflow-hidden rounded-full bg-secondary">
                                    <div
                                      className="h-full"
                                      style={{ width: `${cpct}%`, backgroundColor: color }}
                                    />
                                  </div>
                                  <span className="shrink-0 text-xs font-medium text-muted-foreground">
                                    {chapter.passed}/{chapter.attempted} passed · {chapter.accuracy}
                                    % acc
                                  </span>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  );
                })}
              </div>
            ) : null}
            {tab === "mocks" ? <TourMocks /> : null}
            {tab === "custom" ? <TourCustomList /> : null}
            {tab === "games" ? <TourGamesHome /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function TourMocks() {
  const best = SAMPLE_MOCKS[0]!;
  const latest = SAMPLE_MOCKS[0]!;
  const avg = (key: string) => {
    const vals = SAMPLE_MOCKS.map((mock) => Number(mock.per_subject?.[key] ?? 0));
    return Math.round(vals.reduce((sum, n) => sum + n, 0) / vals.length);
  };
  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <Highlight
          icon={<Trophy className="h-5 w-5 text-caramel-deep" />}
          label="Best score"
          value={`${Math.round((best.points_earned / best.points_total) * 100)}%`}
          sub={`${best.exam_title} · ${best.points_earned}/${best.points_total}`}
        />
        <Highlight
          icon={<Sparkles className="h-5 w-5 text-caramel-deep" />}
          label="Most recent"
          value={`${Math.round((latest.points_earned / latest.points_total) * 100)}%`}
          sub={`${latest.exam_title}`}
        />
      </div>
      <MockScoreTrend attempts={[...SAMPLE_MOCKS].reverse()} />
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-lg font-bold tracking-tight">
          Average points per subject
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Across {SAMPLE_MOCKS.length} completed mocks
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <SubjectAvg
            name="Economics"
            points={avg("economics")}
            max={SCORING_CONFIG.economics.totalPoints}
            color={SUBJECT_COLORS.economics}
          />
          <SubjectAvg
            name="Math"
            points={avg("math")}
            max={SCORING_CONFIG.math.totalPoints}
            color={SUBJECT_COLORS.math}
          />
          <SubjectAvg
            name="English"
            points={avg("english")}
            max={SCORING_CONFIG.english.totalPoints}
            color={SUBJECT_COLORS.english}
          />
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-3 py-2">Exam</th>
              <th className="px-3 py-2">Score</th>
              <th className="px-3 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_MOCKS.map((mock) => (
              <tr key={mock.id} className="border-t border-border/60">
                <td className="px-3 py-3 font-medium">{mock.exam_title}</td>
                <td className="px-3 py-3">
                  <span className="font-display text-lg font-bold">
                    {Math.round((mock.points_earned / mock.points_total) * 100)}%
                  </span>
                </td>
                <td className="px-3 py-3 text-muted-foreground">
                  {mock.seconds_taken != null ? `${Math.round(mock.seconds_taken / 60)} min` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function Highlight({
  icon,
  label,
  value,
  sub,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-caramel-deep/30 bg-gradient-to-br from-caramel-deep/10 to-transparent p-5 shadow-sm">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      </div>
      <p className="mt-2 font-display text-4xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function SubjectAvg({
  name,
  points,
  max,
  color,
}: {
  name: string;
  points: number;
  max: number;
  color: string;
}) {
  const pct = Math.round((points / max) * 100);
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold">{name}</p>
        <p className="font-display text-xl font-bold">
          {points}/{max}
        </p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full"
          style={{ width: `${Math.min(100, pct)}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function TourCustomList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">Custom Mock Builder</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Generated mocks and your practice history.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold">
          <Wand2 className="h-3.5 w-3.5" />
          Build new mock
        </span>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-taupe">Economics</p>
        <h3 className="mt-1 font-display text-lg font-bold">Chapter 3 · Factors of production</h3>
        <p className="mt-1 text-sm text-muted-foreground">12 questions · 18 min timed</p>
      </div>
    </div>
  );
}

function TourGamesHome() {
  const cards = [
    {
      title: "Flashcards",
      blurb: "Drill Economics terms, Math formulas, and English vocabulary with flip cards.",
      cta: "Open BBE flashcards →",
      art: <FlashcardsModeArt />,
    },
    {
      title: "Matching",
      blurb: "Connect each concept to the right definition. Same decks, different interaction.",
      cta: "Open BBE matching →",
      art: <MatchingModeArt />,
    },
    {
      title: "Tutor Exam",
      blurb: "A tutor robot runs a random theoretical quiz. New questions every time.",
      cta: "Open BBE tutor exam →",
      art: <TutorModeArt />,
    },
  ];
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-caramel-deep">BBE course</p>
      <h2 className="font-display text-xl font-bold tracking-tight">Study tools</h2>
      <p className="text-sm text-muted-foreground">
        Open BBE flashcards, matching, and tutor exam for Economics, Math, and English.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm"
          >
            <div className="h-32 w-full overflow-hidden bg-secondary">
              <Suspense fallback={<div className="h-full w-full bg-secondary" />}>
                {card.art}
              </Suspense>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.blurb}</p>
              <p className="mt-4 text-xs font-semibold text-caramel-deep">{card.cta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TourTheoryList() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        Chapters
      </div>
      <ul className="space-y-1">
        {CHAPTERS.map((item) => (
          <li key={item.num}>
            <div className="flex h-10 items-center gap-2 rounded-xl px-2">
              <ChevronDown className="h-4 w-4 shrink-0 -rotate-90 text-muted-foreground" />
              <span
                data-d={`ch-${item.num}`}
                className="block w-fit max-w-[85%] truncate text-sm font-bold text-foreground"
              >
                {item.num}. {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TourTheoryReader() {
  const chapter = ECONOMICS_COURSE_THEORY[3];
  const chip = useMemo(() => {
    const line = chapter.markdown.split("\n").find((item) => /^##\s+\d+\.\d+\b/.test(item));
    return line?.replace(/^##\s+/, "").replace(/^(\d+\.\d+)\s+/, "$1 · ") ?? "";
  }, [chapter.markdown]);
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-card">
      <div className="shrink-0 border-b border-border px-3 py-1.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[10px] font-bold uppercase tracking-widest text-taupe">
              Chapter {chapter.num} · Theory
            </div>
            <div
              data-d="theory-title"
              className="truncate font-display text-sm font-bold leading-tight"
            >
              {chapter.title}
            </div>
          </div>
          <span className="inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-border bg-card px-2 text-[11px] font-semibold">
            <PanelLeftOpen className="h-3.5 w-3.5" />
            Show chapters
          </span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full w-full origin-left rounded-full bg-primary"
            style={{ transform: "scaleX(0.22)" }}
          />
        </div>
        {chip ? (
          <div className="mt-1.5 flex">
            <span className="max-w-full truncate rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
              {chip}
            </span>
          </div>
        ) : null}
      </div>
      <div data-d="theory-scroll" className="min-h-0 flex-1 overflow-y-auto">
        <article className="mx-auto w-full max-w-[78rem] px-4 py-3 sm:px-5 [&_.katex]:text-[1.03em] [&_.katex-display]:my-3">
          <TheoryArticle markdown={chapter.markdown} enableMath dense />
        </article>
      </div>
    </div>
  );
}

export function TourEconTask({
  marks,
  timed,
  checked,
}: {
  marks: Record<number, boolean>;
  timed: boolean;
  checked: boolean;
}) {
  const score = demoCorrectCount(marks, ECON.answerKey);
  return (
    <div>
      <CourseTimedBar on={timed} />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {ECON.caseId}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {ECON.chapter}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{ECON.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{ECON.context}</p>
      <DemoStatementTable
        statements={ECON.statements}
        marks={marks}
        checked={checked}
        answerKey={ECON.answerKey}
      />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        {!checked ? (
          <span data-d="submit" className={`${practiceSubmitButtonClass} min-w-56`}>
            Check Answers / Submit
          </span>
        ) : (
          <span data-d="expl" className={`${practiceExplanationToggleClass(true)} min-w-56`}>
            Hide Explanation
          </span>
        )}
        {checked ? (
          <span className="text-sm font-semibold text-muted-foreground">
            {score}/{ECON.answerKey.length} correct
          </span>
        ) : (
          <span className="invisible" aria-hidden>
            Explanation
          </span>
        )}
      </div>
    </div>
  );
}

export function TourEnglishTask({ shown }: { shown: boolean }) {
  const score = demoCorrectCount(ENGLISH_MARKS, ENGLISH.answerKey);
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {ENGLISH.caseId}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {ENGLISH.chapter}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{ENGLISH.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{ENGLISH.context}</p>
      <CoursePassage text={PASSAGE} highlight={HIGHLIGHT} active={shown} />
      <DemoStatementTable
        statements={ENGLISH.statements}
        marks={ENGLISH_MARKS}
        checked
        answerKey={ENGLISH.answerKey}
      />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        <span data-d="expl" className={`${practiceExplanationToggleClass(true)} min-w-56`}>
          Hide Explanation
        </span>
        <span className="text-sm font-semibold text-muted-foreground">
          {score}/{ENGLISH.answerKey.length} correct
        </span>
      </div>
    </div>
  );
}

export function TourEnglishSolution({ shown }: { shown: boolean }) {
  return (
    <CourseSolution
      open
      dimmed={!shown}
      answerKey={ENGLISH.answerKey}
      explanations={ENGLISH.explanations}
      shown={ENGLISH.explanations.map((_, index) => index)}
      bank
      active={shown ? ENGLISH_AT : -1}
      locateAt={ENGLISH_AT}
      located={shown}
    />
  );
}

export function TourMathTask({ calcOpen }: { calcOpen: boolean }) {
  return (
    <div>
      <CourseTimedBar on calculator calcOpen={calcOpen} />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {MATH.caseId}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {MATH.chapter}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{MATH.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{MATH.context}</p>
      <DemoStatementTable statements={MATH.statements} marks={{}} answerKey={MATH.answerKey} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        <span data-d="submit" className={`${practiceSubmitButtonClass} min-w-56`}>
          Check Answers / Submit
        </span>
        <span className="invisible" aria-hidden>
          Explanation
        </span>
      </div>
    </div>
  );
}

export function TourCalc() {
  return (
    <div className="pointer-events-none absolute bottom-2 left-2 right-2 top-2 z-[8] sm:left-auto sm:top-[4.5rem] sm:w-[19rem]">
      <div data-d="calc-panel" className="pointer-events-auto h-full min-h-0">
        <Ti30MathPrint compact hideChrome className="h-full shadow-xl" />
      </div>
    </div>
  );
}

function ToolRailButton({
  children,
  label,
  short,
  tip,
}: {
  children: ReactNode;
  label: string;
  short: string;
  tip?: string;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      data-d={tip}
      className="relative flex min-h-11 flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card px-1.5 py-2.5 text-[10px] font-semibold text-foreground"
    >
      {children}
      <span className="leading-none">{short}</span>
    </button>
  );
}

/** The live Mock Exam 1 paper: header, question, palette, flag, tool rail. */
export function TourExam({ flagged }: { flagged: boolean }) {
  const question = QUESTIONS[EXAM_AT] ?? QUESTIONS[0]!;
  const meta = SUBJECT_META[question.subject];
  const subjectName = subjectLabel(question.subject);
  const flaggedIds = flagged ? new Set([question.id]) : new Set<string>();
  const visited = new Set([QUESTIONS[0]!.id, question.id]);
  return (
    <div className={`flex flex-col ${PRACTICE_PAGE}`}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className={PRACTICE_HEADER_INNER}>
          <div className="flex min-w-0 items-center gap-3">
            <h1 className="truncate font-display text-base font-bold">Mock Exam 1</h1>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${meta.badgeClass}`}
            >
              {subjectName}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-sm tabular-nums text-muted-foreground">
              Question {EXAM_AT + 1} / {QUESTIONS.length}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm font-semibold tabular-nums">
              <Timer className="h-3.5 w-3.5 shrink-0" />
              {formatExamTime(REMAINING)}
            </span>
            <span className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold">
              Review
            </span>
            <span className="inline-flex items-center gap-2">
              <ThemeToggle />
              <AuthNav />
            </span>
          </div>
        </div>
      </header>
      <div className={cn(PRACTICE_BODY, "items-start")}>
        <aside className="w-56 shrink-0 space-y-4 xl:w-72">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <p className="font-display text-2xl font-semibold tabular-nums tracking-tight">
              {question.index}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{subjectName}</p>
            <p className="mt-3 text-xs tabular-nums text-muted-foreground">
              This question · {formatQuestionTime(TIMES[EXAM_AT] ?? 0)}
            </p>
            <button
              type="button"
              data-d="flag"
              aria-pressed={flagged}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold"
            >
              <Flag
                className={cn("h-3.5 w-3.5", flagged ? "fill-primary text-primary" : "text-taupe")}
              />
              {flagged ? "Flagged" : "Flag for review"}
            </button>
          </div>
          <div data-d="palette" className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <h2 className="mb-3 font-display text-sm font-semibold">Questions</h2>
            <QuestionPalette
              questions={QUESTIONS}
              currentIndex={EXAM_AT}
              answers={{}}
              flagged={flaggedIds}
              visited={visited}
              onNavigate={() => {}}
              compact
            />
          </div>
        </aside>
        <main className="relative min-w-0 flex-1">
          <div className="relative overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative min-w-0 p-5 sm:p-8">
              <ExamQuestionBody q={question} emphasized />
              <ol className="mt-6 divide-y divide-border overflow-visible rounded-xl border border-border bg-background">
                {question.statements.map((statement, i) => (
                  <li key={statement.id} className="px-3 py-3.5 sm:px-4 sm:py-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-1 w-6 shrink-0 text-center text-xs font-bold text-muted-foreground">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground sm:text-[15px]">
                        <ExamStatementText q={question} text={statement.text} />
                      </p>
                      <div className="flex w-11 shrink-0 justify-center pt-0.5">
                        <span
                          role="checkbox"
                          aria-checked={false}
                          data-d={`m${i}`}
                          className="grid h-6 w-6 place-items-center rounded border-2 border-border bg-background"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <nav className="mt-4 flex items-center justify-between gap-3">
            <span className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold">
              Previous
            </span>
            <span className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background">
              Next
            </span>
          </nav>
        </main>
        <aside className="flex w-16 shrink-0 flex-col gap-2">
          <ToolRailButton label="Answer Sheet" short="Sheet" tip="sheet-tool">
            <FileSpreadsheet className="h-5 w-5" />
          </ToolRailButton>
          <ToolRailButton label="Calculator" short="Calc">
            <Calculator className="h-5 w-5" />
          </ToolRailButton>
          <ToolRailButton label="Notes" short="Notes">
            <StickyNote className="h-5 w-5" />
          </ToolRailButton>
          <ToolRailButton label="Draw" short="Draw">
            <PenLine className="h-5 w-5" />
          </ToolRailButton>
        </aside>
      </div>
    </div>
  );
}

export function TourSheet({ flagged }: { flagged: boolean }) {
  const question = QUESTIONS[EXAM_AT] ?? QUESTIONS[0]!;
  return (
    <div
      data-d="sheet"
      className="absolute inset-y-0 right-0 z-[8] flex w-full max-w-md flex-col overflow-y-auto border-l border-border bg-background p-4 shadow-2xl"
    >
      <p className="font-display text-lg font-bold">Answer Sheet</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Mark ✕ for True. Same marks as the True checkboxes on the question.
      </p>
      <div className="mt-4 flex min-h-0 flex-1 flex-col pb-6">
        <ExamAnswerSheet
          marksByNumber={{ [question.index]: [true, false, false, false, false] }}
          questionCount={QUESTIONS.length}
          currentQuestion={question.index}
          flaggedNumbers={flagged ? new Set([question.index]) : new Set()}
          onToggle={() => {}}
          onNavigate={() => {}}
        />
        <span className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-caramel-deep px-4 py-2.5 text-sm font-semibold text-white">
          Finish exam
        </span>
      </div>
    </div>
  );
}

export function TourResults() {
  const analytics = useMemo(
    () =>
      buildExamAnalytics(QUESTIONS, {
        answers: COMPLETED,
        timed: true,
        secondsTaken: TIME_TAKEN,
        timeByQuestion: Object.fromEntries(
          QUESTIONS.map((question, i) => [question.id, TIMES[i] ?? 0]),
        ),
      }),
    [],
  );
  return (
    <div className={PRACTICE_PAGE}>
      <main className={`${PRACTICE_BODY} flex-col py-6 sm:py-8`}>
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-background px-3 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Mock Exam 1
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Score overview, or tasks with answers and explanations.
            </p>
          </div>
          <ReviewViewToggle
            showTaskReview={false}
            onShowResults={() => {}}
            onShowTasks={() => {}}
            de={false}
            tasksAnchor="tasks"
          />
        </div>
        <ExamResultOverview examTitle="Mock Exam 1" analytics={analytics} onOpenTask={() => {}} />
      </main>
    </div>
  );
}

export function TourBuilder({ open, built }: { open: boolean; built: boolean }) {
  const selected = open ? BUILDER_PICKS.map((topic) => topic.id) : [];
  const weightTopics: TopicWeightTopic[] = selected.map((id) => ({
    id,
    label: id,
    shortLabel: id,
  }));
  const questionCount = 12;
  const durationMinutes = durationMinutesForQuestionCount(questionCount);
  return (
    <div className="relative">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ backgroundColor: BUILDER_ACCENT }}
        >
          Custom Mock Builder
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          Economics
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold">Select topics & subtopics</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Expand a chapter and tick sections. Topics appear as vertices on the right.
          </p>
          <ul className="mt-3 space-y-2">
            {BUILDER_CHAPTERS.map((item) => {
              const expanded = open && item.num === BUILDER_CHAPTER.num;
              const count = item.subtopics.filter((topic) => selected.includes(topic.id)).length;
              return (
                <li key={item.num} className="overflow-hidden rounded-xl border border-border">
                  <div
                    data-d={`ch-${item.num}`}
                    className="flex items-center gap-2 bg-secondary/30 px-3 py-2 text-left"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground",
                        expanded ? "rotate-0" : "-rotate-90",
                      )}
                    />
                    <span className="font-display text-sm font-semibold">{item.heading}</span>
                    <span className="truncate text-xs text-muted-foreground">{item.title}</span>
                    {count > 0 ? (
                      <span
                        className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: `${BUILDER_ACCENT}22`, color: BUILDER_ACCENT }}
                      >
                        {count}/{item.subtopics.length}
                      </span>
                    ) : null}
                  </div>
                  {expanded ? (
                    <ul className="divide-y divide-border/60 px-2 py-1">
                      {item.subtopics.map((topic) => {
                        const checked = selected.includes(topic.id);
                        return (
                          <li key={topic.id}>
                            <div
                              className={cn(
                                "flex items-start gap-3 rounded-lg px-3 py-2",
                                checked && "bg-secondary/60",
                              )}
                            >
                              <span
                                data-d={`sub-${topic.id}`}
                                className={cn(
                                  "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border-2",
                                  checked ? "text-white" : "border-border bg-background",
                                )}
                                style={
                                  checked
                                    ? {
                                        backgroundColor: BUILDER_ACCENT,
                                        borderColor: BUILDER_ACCENT,
                                      }
                                    : undefined
                                }
                              >
                                {checked ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                              </span>
                              <span>
                                <span className="text-sm font-semibold tabular-nums">
                                  {topic.id}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                  {topic.title}
                                </span>
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <h3 className="mt-4 font-display text-sm font-semibold">Number of Questions</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            1–{CUSTOM_MOCK_MAX_QUESTIONS} for the whole mock · {CUSTOM_MOCK_MINUTES_PER_QUESTION}{" "}
            min each timed
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">Questions</span>
            <span
              data-d="count"
              className="w-24 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold tabular-nums"
            >
              {questionCount}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {durationMinutes} min timed
            </span>
          </div>
        </div>
        <div data-d="weight" className="min-w-0">
          <TopicWeightSelector
            topics={weightTopics}
            questionCount={questionCount}
            point={balancedPoint()}
            onPointChange={() => {}}
            title="Topic Weight Selector"
            accent={BUILDER_ACCENT}
            subjectLabel="Economics"
          />
        </div>
      </div>
      <div
        data-d="build"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
        style={{
          backgroundColor: BUILDER_ACCENT,
          boxShadow: `0 4px 14px -4px ${BUILDER_ACCENT}80`,
        }}
      >
        {built ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Building mock…
          </>
        ) : (
          <>
            <BookOpen className="h-4 w-4" />
            Create Economics Mock from Full Course
          </>
        )}
      </div>
      {built ? (
        <div className="absolute inset-0 z-20 grid place-items-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl">
            <p className="font-display text-base font-semibold">
              Economics Mock · Chapter {BUILDER_CHAPTER.num}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {questionCount} questions · {durationMinutes} minutes timed · {selected.length} topics
            </p>
            <div className="mt-4 grid gap-2">
              <span className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background">
                <Clock className="h-4 w-4" />
                Timed ({durationMinutes} min)
              </span>
              <span className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold">
                Untimed practice
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StatChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "known" | "unknown" | "new";
}) {
  const cls =
    tone === "known"
      ? "border-emerald-500/25 bg-emerald-500/10"
      : tone === "unknown"
        ? "border-red-500/25 bg-red-500/10"
        : "border-border bg-card";
  return (
    <div className={cn("rounded-xl border px-2 py-1.5 text-center shadow-sm", cls)}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-base font-bold leading-tight">{value}</p>
    </div>
  );
}

function TutorFace({ mood }: { mood: "idle" | "happy" }) {
  return (
    <div
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm",
        mood === "happy" ? "border-emerald-300 bg-emerald-50" : "border-border bg-card",
      )}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-foreground/80">
        <rect x="5" y="9" width="22" height="16" rx="5" fill="currentColor" opacity="0.12" />
        <rect
          x="5"
          y="9"
          width="22"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path
            d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 21.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line x1="16" y1="7" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
}

function boardEdge(board: HTMLElement, el: HTMLElement, edge: "left" | "right") {
  const boardRect = board.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const scaleX = boardRect.width / Math.max(board.offsetWidth, 1);
  const scaleY = boardRect.height / Math.max(board.offsetHeight, 1);
  const x = (edge === "left" ? rect.right : rect.left) - boardRect.left;
  const y = rect.top + rect.height / 2 - boardRect.top;
  return { x: x / scaleX, y: y / scaleY };
}

export function TourTools({
  mode,
  flipped,
  matched,
  picked,
}: {
  mode: TourToolMode;
  flipped: boolean;
  matched: boolean;
  picked: boolean;
}) {
  if (mode === "match") return <TourMatch matched={matched} />;
  if (mode === "tutor") return <TourTutor picked={picked} />;
  const fresh = DECK_TOTAL;
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        Study tools · Economics
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">Flashcards</h3>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <StatChip label="Known" value={0} tone="known" />
        <StatChip label="Don't know" value={0} tone="unknown" />
        <StatChip label="New" value={fresh} tone="new" />
      </div>
      <p className="mb-2 mt-3 text-center text-[11px] font-semibold text-muted-foreground">
        {CORE.title}
      </p>
      <div className="hiw-study-flash flashcard-viewport relative overflow-x-clip py-1">
        <div data-d="card" className="flashcard-stage relative w-full">
          <div className="flashcard-flip w-full">
            <div className={cn("flashcard-inner", flipped && "is-flipped")}>
              <div className="flashcard-face flashcard-front rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Term
                </div>
                <div className="flex h-full items-center justify-center px-3 text-center">
                  <FlashcardMath
                    text={FLASH_CARD.term}
                    className="font-display text-xl font-bold tracking-tight sm:text-2xl"
                  />
                </div>
              </div>
              <div className="flashcard-face flashcard-back rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Explanation
                </div>
                <div className="flex h-full items-center justify-center px-3 text-center">
                  <FlashcardMath
                    text={FLASH_CARD.explanation}
                    className="text-[13px] leading-snug"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-700">
          <ThumbsDown className="h-3.5 w-3.5" /> Don't know
        </span>
        <span
          data-d="flip"
          className="rounded-md px-4 py-2 text-xs font-semibold text-white shadow-sm"
          style={{ backgroundColor: ACCENT }}
        >
          Flip
        </span>
        <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-700">
          <ThumbsUp className="h-3.5 w-3.5" /> Know
        </span>
      </div>
    </div>
  );
}

function TourMatch({ matched }: { matched: boolean }) {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<{ id: number; d: string }[]>([]);
  const locked = matched ? [0] : [];
  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const ids = matched ? [0] : [];
    const next: { id: number; d: string }[] = [];
    for (const id of ids) {
      const left = board.querySelector<HTMLElement>(
        `[data-match-side="left"][data-match-id="${id}"]`,
      );
      const right = board.querySelector<HTMLElement>(
        `[data-match-side="right"][data-match-id="${id}"]`,
      );
      if (!left || !right) continue;
      const a = boardEdge(board, left, "left");
      const b = boardEdge(board, right, "right");
      next.push({ id, d: curve(a.x, a.y, b.x, b.y) });
    }
    setLines(next);
  }, [matched]);
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Study tools · Economics
          </p>
          <h3 className="font-display text-lg font-bold tracking-tight">
            Connect concept → meaning
          </h3>
        </div>
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold">
          Round 1 · {locked.length}/{MATCH_PAIRS.length}
        </span>
      </div>
      <p className="mb-2 text-[11px] font-semibold text-muted-foreground">{TYPES.title}</p>
      <div className="mb-1.5 grid grid-cols-2 gap-x-8 sm:gap-x-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Concepts</p>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Meanings</p>
      </div>
      <div ref={boardRef} className="relative">
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          aria-hidden
        >
          {lines.map((line) => (
            <path
              key={line.id}
              d={line.d}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2.5}
              strokeLinecap="round"
              opacity={0.85}
            />
          ))}
        </svg>
        <div className="relative z-0 grid grid-cols-2 items-stretch gap-x-8 gap-y-2 sm:gap-x-14">
          {MATCH_PAIRS.map((pair, index) => {
            const right = MATCH_PAIRS[MATCH_RIGHT[index]]!;
            return <MatchPair key={pair.id} left={pair} right={right} locked={locked} />;
          })}
        </div>
      </div>
    </div>
  );
}

function MatchPair({
  left,
  right,
  locked,
}: {
  left: (typeof MATCH_PAIRS)[number];
  right: (typeof MATCH_PAIRS)[number];
  locked: number[];
}) {
  return (
    <>
      <MatchCard
        side="left"
        pairId={left.id}
        text={left.term}
        matched={locked.includes(left.id)}
        marker={`L${left.id}`}
      />
      <MatchCard
        side="right"
        pairId={right.id}
        text={right.explanation}
        matched={locked.includes(right.id)}
        marker={`R${right.id}`}
      />
    </>
  );
}

function MatchCard({
  side,
  pairId,
  text,
  matched,
  marker,
}: {
  side: "left" | "right";
  pairId: number;
  text: string;
  matched: boolean;
  marker: string;
}) {
  return (
    <div
      data-d={marker}
      data-match-side={side}
      data-match-id={pairId}
      className={cn(
        "flex h-full min-h-12 items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[12px] leading-snug sm:text-[13px]",
        matched ? "border-emerald-300 bg-emerald-50/90" : "border-border bg-card",
        side === "left" && "font-semibold",
      )}
    >
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px]",
          matched
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-border bg-background text-muted-foreground",
        )}
      >
        {matched ? <Check className="h-3 w-3" /> : "·"}
      </span>
      <FlashcardMath text={text} className="min-w-0 flex-1" />
    </div>
  );
}

function TourTutor({ picked }: { picked: boolean }) {
  const mood = picked ? "happy" : "idle";
  const bubble = picked ? CORRECT_LINE : GREETING;
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        Study tools · Economics
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">Theory exam with Tutor Bot</h3>
      <div className="mb-2 mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <span className="rounded-full border border-border bg-card px-2 py-0.5 font-semibold text-foreground">
          Exam 1
        </span>
        <span>Question 1 / 2</span>
        <span>
          Score {picked ? 1 : 0}
          {picked ? " · 50%" : ""}
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="relative h-1.5 w-full bg-border/60">
          <div
            className="absolute inset-y-0 left-0"
            style={{ width: "50%", backgroundColor: ACCENT }}
          />
        </div>
        <div className="flex gap-3 border-b border-border p-3">
          <TutorFace mood={mood} />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Tutor Bot · Q1
            </p>
            <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm leading-snug">
              {bubble}
            </div>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            What does this concept mean?
          </p>
          <div className="rounded-xl border border-dashed border-border bg-background/80 px-3 py-2">
            <FlashcardMath
              text={TUTOR_CHOICES.term}
              className="text-sm font-semibold leading-snug"
            />
          </div>
          <p className="text-[11px] text-muted-foreground">{TYPES.title}</p>
          <ul className="space-y-1.5">
            {TUTOR_OPTIONS.map((choice, index) => {
              const show = picked && index === TUTOR_CORRECT_AT;
              return (
                <li key={choice}>
                  <div
                    data-d={`c${index}`}
                    className={cn(
                      "flex min-h-11 items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[13px] leading-snug",
                      show ? "border-emerald-300 bg-emerald-50/90" : "border-border bg-card",
                      picked && !show && "opacity-60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                        show
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-border bg-background text-muted-foreground",
                      )}
                    >
                      {show ? <Check className="h-3 w-3" /> : String.fromCharCode(65 + index)}
                    </span>
                    <FlashcardMath text={choice} className="min-w-0 flex-1" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
