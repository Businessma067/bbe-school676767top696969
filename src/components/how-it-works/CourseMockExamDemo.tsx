import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, Check, FileSpreadsheet, Flag, PenLine, StickyNote, Timer } from "lucide-react";
import { AuthNav } from "@/components/AuthNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamReviewScreen } from "@/components/mock-exam/ExamReviewScreen";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import { ReviewViewToggle, TaskReviewWorkspace } from "@/components/mock-exam/ExamTaskReview";
import { ExamQuestionBody, ExamStatementText } from "@/components/mock-exam/ExamQuestionContent";
import { QuestionPalette } from "@/components/mock-exam/QuestionPalette";
import { SUBJECT_META, subjectLabel } from "@/config/scoring-config";
import { guestNavItems } from "@/config/site-nav";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { buildMockExam1Questions } from "@/lib/mock-exam-1-content";
import { formatExamTime, formatQuestionTime } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { PRACTICE_BODY, PRACTICE_HEADER_INNER, PRACTICE_PAGE } from "@/lib/practice-layout";
import { cn } from "@/lib/utils";
import { howItWorksGlide, useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { glideFrame, glideRead } from "./course-motion";

const DWELL = 40;
const EXAM_SECONDS = 2 * 60 * 60;
const BBE_QUESTIONS = buildMockExam1Questions();

/**
 * A finished 34-question sitting. Reading runs longer than a short case,
 * grammar is quicker, and a few math items take the most time.
 */
const EXAM_TIMES = [
  128, 152, 114, 176, 139, 163, 102, 192, 133, 147, 246, 268, 214, 287, 233, 122, 101, 134, 111,
  144, 118, 214, 248, 192, 286, 231, 180, 322, 218, 254, 201, 268, 175, 234,
] as const;

if (EXAM_TIMES.length !== BBE_QUESTIONS.length) {
  throw new Error("Mock exam demo needs one time for every question");
}

export type MockExamDemoCopy = {
  locale: "en" | "de";
  examTitle: string;
  question: (index: number, total: number) => string;
  thisQuestion: string;
  questionsHeading: string;
  flag: string;
  flagShort: string;
  previous: string;
  next: string;
  finish: string;
  review: string;
  sheet: string;
  sheetShort: string;
  calc: string;
  calcShort: string;
  notes: string;
  notesShort: string;
  draw: string;
  drawShort: string;
  overviewHint: string;
  backLabel: string;
  navTrack: "bbe" | "wiso";
};

const EN_EXAM: MockExamDemoCopy = {
  locale: "en",
  examTitle: "Mock Exam 1",
  question: (index, total) => `Question ${index} / ${total}`,
  thisQuestion: "This question",
  questionsHeading: "Questions",
  flag: "Flag for review",
  flagShort: "Flag",
  previous: "Previous",
  next: "Next",
  finish: "Finish exam",
  review: "Review",
  sheet: "Answer Sheet",
  sheetShort: "Sheet",
  calc: "Calculator",
  calcShort: "Calc",
  notes: "Notes",
  notesShort: "Notes",
  draw: "Draw",
  drawShort: "Draw",
  overviewHint: "Score overview, or tasks with answers and explanations.",
  backLabel: "← All mock exams",
  navTrack: "bbe",
};

export const DE_MOCK_EXAM_COPY: MockExamDemoCopy = {
  locale: "de",
  examTitle: "WiSo Mock Exam 1",
  question: (index, total) => `Aufgabe ${index} / ${total}`,
  thisQuestion: "Diese Aufgabe",
  questionsHeading: "Aufgaben",
  flag: "Zur Überprüfung markieren",
  flagShort: "Markieren",
  previous: "Zurück",
  next: "Weiter",
  finish: "Prüfung beenden",
  review: "Prüfen",
  sheet: "Antwortbogen",
  sheetShort: "Bogen",
  calc: "Rechner",
  calcShort: "Rechner",
  notes: "Notizen",
  notesShort: "Notizen",
  draw: "Zeichnen",
  drawShort: "Stift",
  overviewHint: "Ergebnisübersicht oder Aufgaben mit Lösungen und Erklärungen.",
  backLabel: "← Alle Probeprüfungen",
  navTrack: "wiso",
};

const EMPTY_MARKS = [false, false, false, false, false];
const NO_FLAGS = new Set<string>();

function trueIndexes(question: ExamQuestion): number[] {
  return question.statements.flatMap((statement, index) => (statement.isTrue ? [index] : []));
}

function completedAnswers(list: ExamQuestion[]): Record<string, boolean[]> {
  return Object.fromEntries(
    list.map((question) => [
      question.id,
      question.statements.map((statement) => statement.isTrue),
    ]),
  );
}

/** Same walk: first case, first language item, first math item, then chapter 11. */
function paperPlan(list: ExamQuestion[]) {
  const languageAt = list.findIndex(
    (question) => question.subject === "english" || question.subject === "german",
  );
  const mathAt = list.findIndex((question) => question.subject === "math");
  const byChapter = list.findIndex(
    (question) => question.subject === "math" && (question.subtopicTag ?? "").startsWith("#11"),
  );
  const byNumber = list.findIndex((question) => question.index === 32);
  const derivAt = byChapter >= 0 ? byChapter : byNumber >= 0 ? byNumber : Math.max(0, mathAt);
  const show = [...new Set([0, languageAt, mathAt].filter((index) => index >= 0))];
  const times: readonly number[] =
    list.length === EXAM_TIMES.length
      ? EXAM_TIMES
      : Array.from({ length: list.length }, (_, i) => EXAM_TIMES[i] ?? 180);
  const timeTaken = times.reduce((sum, seconds) => sum + seconds, 0);
  return { show, derivAt, times, timeTaken, remaining: EXAM_SECONDS - timeTaken };
}

type Phase = "exam" | "check" | "stats" | "tasks";

/** How it works · Mock Exams: the live 34-question paper, full screen. */
export function CourseMockExamDemo({
  rest = 1,
  lockCopy = false,
  questions = BBE_QUESTIONS,
  copy = EN_EXAM,
}: {
  rest?: number;
  lockCopy?: boolean;
  questions?: ExamQuestion[];
  copy?: MockExamDemoCopy;
} = {}) {
  const plan = useMemo(() => paperPlan(questions), [questions]);
  const completed = useMemo(() => completedAnswers(questions), [questions]);
  const guestNav = useMemo(() => guestNavItems(copy.navTrack), [copy.navTrack]);
  const [phase, setPhase] = useState<Phase>("exam");
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState<Record<string, boolean[]>>({});
  const [visited, setVisited] = useState<Set<string>>(() => new Set([questions[0]!.id]));
  const [taskIndex, setTaskIndex] = useState(0);

  const openQuestion = (next: number) => {
    setIndex(next);
    setVisited((prev) => {
      const id = questions[next]?.id;
      if (!id || prev.has(id)) return prev;
      const nextVisited = new Set(prev);
      nextVisited.add(id);
      return nextVisited;
    });
  };

  const openReview = () => {
    setMarks(completed);
    setPhase("check");
  };

  const analytics = useMemo(
    () =>
      buildExamAnalytics(questions, {
        answers: phase === "exam" ? marks : completed,
        timed: true,
        secondsTaken: plan.timeTaken,
        timeByQuestion: Object.fromEntries(
          questions.map((question, i) => [question.id, plan.times[i] ?? 0]),
        ),
      }),
    [completed, marks, phase, plan.timeTaken, plan.times, questions],
  );

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const resetScroll = () => {
      if (api.scroll()) api.scroll()!.scrollTop = 0;
    };

    setFade(true);
    await api.wait(140);
    setPhase("exam");
    setIndex(0);
    setMarks({});
    setVisited(new Set([questions[0]!.id]));
    setTaskIndex(0);
    resetScroll();
    setFade(false);
    await api.wait(260);

    for (let step = 0; step < plan.show.length; step++) {
      if (api.cancelled()) return;
      const at = plan.show[step]!;
      if (step > 0) {
        await api.moveTo(`[data-q="${at + 1}"]`, DWELL);
        await api.click(() => openQuestion(at));
        await api.flush();
        resetScroll();
        await api.wait(70);
      }
      const question = questions[at]!;
      for (const statement of trueIndexes(question)) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="m${statement}"]`, DWELL);
        await api.click(() =>
          setMarks((prev) => {
            const next = [...(prev[question.id] ?? EMPTY_MARKS)];
            next[statement] = true;
            return { ...prev, [question.id]: next };
          }),
        );
        await api.wait(80);
      }
    }

    await api.moveTo('[data-d="review"]', DWELL);
    await api.click(openReview);
    await api.flush();
    resetScroll();
    await api.wait(80);

    await api.moveTo('[data-d="submit-exam"]', DWELL);
    await api.click(() => setPhase("stats"));
    await api.flush();
    resetScroll();
    await api.wait(120);
    await glideFrame(api, '[data-d^="stat"], [data-d="time-chart"]');
    await api.wait(80);
    await api.moveTo('[data-d="tasks"]', DWELL);
    await api.click(() => {
      setTaskIndex(plan.derivAt);
      setPhase("tasks");
    });
    await api.flush();
    resetScroll();
    await api.wait(90);
    await api.moveTo('[data-d="prose0"]', 40);
    await glideRead(api, '[data-d="prose2"]', "[data-d^='prose']");
    await api.wait(280);
  }, [rest, questions], { rest, glideScale: howItWorksGlide(rest) });

  const question = questions[index] ?? questions[0]!;
  const currentMarks = marks[question.id] ?? EMPTY_MARKS;
  const meta = SUBJECT_META[question.subject];
  const subjectName = subjectLabel(question.subject, copy.locale);
  const isLast = index === questions.length - 1;
  const secondsLeft = plan.remaining;
  const timerWarn = secondsLeft < 5 * 60 ? "critical" : secondsLeft < 15 * 60 ? "warn" : null;
  const questionSeconds = plan.times[index] ?? 0;
  const currentTask = analytics.tasks[taskIndex] ?? null;

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      bleed
    >
      {phase === "exam" ? (
        <div className={`flex flex-col ${PRACTICE_PAGE}`}>
          <header
            data-d="exam-chrome"
            className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur"
          >
            <div className={PRACTICE_HEADER_INNER} data-exam-fit="header">
              <div className="flex min-w-0 items-center gap-3">
                <h1 className="truncate font-display text-base font-bold">{copy.examTitle}</h1>
                <span
                  className={`hidden rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest sm:inline ${meta.badgeClass}`}
                >
                  {subjectName}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span data-exam-fit="count" className="text-sm tabular-nums text-muted-foreground">
                  {copy.question(index + 1, questions.length)}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-sm font-semibold tabular-nums",
                    timerWarn === "critical" &&
                      "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400",
                    timerWarn === "warn" &&
                      "border-amber-500/50 bg-amber-500/10 text-amber-800 dark:text-amber-300",
                    !timerWarn && "border-border bg-card",
                  )}
                  role="timer"
                  aria-label={`Time remaining ${formatExamTime(secondsLeft)}`}
                >
                  <Timer className="h-3.5 w-3.5 shrink-0" />
                  {formatExamTime(secondsLeft)}
                </span>
                <button
                  type="button"
                  data-d="review"
                  onClick={openReview}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
                >
                  {copy.review}
                </button>
                <span data-exam-fit="auth" className="inline-flex items-center gap-2">
                  <ThemeToggle />
                  <AuthNav />
                </span>
              </div>
            </div>
          </header>

          <div className={cn(PRACTICE_BODY, "pb-24 lg:pb-4")}>
            <aside className="hidden w-72 shrink-0 space-y-4 lg:sticky lg:top-[4.5rem] lg:block lg:max-h-[calc(100cqh-5.5rem)] lg:overflow-y-auto 2xl:w-80">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <p className="font-display text-2xl font-semibold tabular-nums tracking-tight">
                  {question.index}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{subjectName}</p>
                <p className="mt-3 text-xs tabular-nums text-muted-foreground">
                  {copy.thisQuestion} · {formatQuestionTime(questionSeconds)}
                </p>
                <button
                  type="button"
                  aria-pressed={false}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                >
                  <Flag className="h-3.5 w-3.5 text-taupe" />
                  {copy.flag}
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <h2 className="mb-3 font-display text-sm font-semibold">{copy.questionsHeading}</h2>
                <QuestionPalette
                  questions={questions}
                  currentIndex={index}
                  answers={marks}
                  flagged={NO_FLAGS}
                  visited={visited}
                  onNavigate={openQuestion}
                  compact
                />
              </div>
            </aside>

            <main className="relative min-w-0 flex-1">
              <div className="mb-4 rounded-2xl border border-border bg-card p-3 shadow-sm lg:hidden">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {copy.locale === "de" ? "A" : "Q"}
                    {question.index} · {subjectName} · {formatQuestionTime(questionSeconds)}
                  </span>
                  <button
                    type="button"
                    aria-pressed={false}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold hover:bg-secondary"
                  >
                    <Flag className="h-3 w-3 text-taupe" />
                    {copy.flagShort}
                  </button>
                </div>
                <QuestionPalette
                  questions={questions}
                  currentIndex={index}
                  answers={marks}
                  flagged={NO_FLAGS}
                  visited={visited}
                  onNavigate={openQuestion}
                  compact
                />
              </div>

              <div className="relative overflow-x-auto overflow-y-visible rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative isolate z-0 min-w-0 p-5 sm:p-8 lg:p-10">
                  <ExamQuestionBody q={question} emphasized />
                  <ol className="mt-6 divide-y divide-border overflow-visible rounded-xl border border-border bg-background">
                    {question.statements.map((statement, i) => {
                      const marked = currentMarks[i] === true;
                      return (
                        <li key={statement.id} className="px-3 py-3.5 sm:px-4 sm:py-4">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <span className="mt-1 w-6 shrink-0 text-center text-xs font-bold text-muted-foreground">
                              {String.fromCharCode(65 + i)}.
                            </span>
                            <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere] sm:text-[15px]">
                              <ExamStatementText q={question} text={statement.text} />
                            </p>
                            <div className="flex w-11 shrink-0 justify-center pt-0.5 lg:w-14">
                              <button
                                type="button"
                                role="checkbox"
                                data-d={`m${i}`}
                                aria-checked={marked}
                                aria-label={`Mark statement ${String.fromCharCode(65 + i)} as true`}
                                onClick={() =>
                                  setMarks((prev) => {
                                    const next = [...(prev[question.id] ?? EMPTY_MARKS)];
                                    next[i] = !next[i];
                                    return { ...prev, [question.id]: next };
                                  })
                                }
                                className={cn(
                                  "grid h-11 w-11 place-items-center rounded-lg border-2 transition-all lg:h-6 lg:w-6 lg:rounded",
                                  marked
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border bg-background hover:border-primary/60",
                                )}
                              >
                                {marked ? (
                                  <Check className="h-5 w-5 lg:h-4 lg:w-4" strokeWidth={3} />
                                ) : null}
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>

              <nav className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={index === 0}
                  onClick={() => openQuestion(index - 1)}
                  className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copy.previous}
                </button>
                {isLast ? (
                  <button
                    type="button"
                    onClick={openReview}
                    className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                  >
                    {copy.finish}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => openQuestion(index + 1)}
                    className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                  >
                    {copy.next}
                  </button>
                )}
              </nav>
            </main>

            <aside
              data-d="exam-chrome"
              data-exam-fit="rail"
              className="fixed inset-x-0 bottom-0 z-30 flex flex-row items-stretch justify-around gap-1 border-t border-border bg-background/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:gap-2 lg:sticky lg:inset-auto lg:bottom-auto lg:top-[4.5rem] lg:h-fit lg:w-16 lg:shrink-0 lg:flex-col lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
            >
              <ToolRailButton label={copy.sheet} short={copy.sheetShort}>
                <FileSpreadsheet className="h-5 w-5" />
              </ToolRailButton>
              <ToolRailButton label={copy.calc} short={copy.calcShort}>
                <Calculator className="h-5 w-5" />
              </ToolRailButton>
              <ToolRailButton label={copy.notes} short={copy.notesShort}>
                <StickyNote className="h-5 w-5" />
              </ToolRailButton>
              <ToolRailButton label={copy.draw} short={copy.drawShort}>
                <PenLine className="h-5 w-5" />
              </ToolRailButton>
            </aside>
          </div>
        </div>
      ) : null}

      {phase === "check" ? (
        <div className="min-h-dvh bg-background font-sans text-foreground antialiased">
          <ExamReviewScreen
            questions={questions}
            answers={marks}
            flagged={NO_FLAGS}
            usesAnswerSheet
            onJump={openQuestion}
            onSubmit={() => setPhase("stats")}
            onBack={() => setPhase("exam")}
            locale={copy.locale}
          />
        </div>
      ) : null}

      {phase === "stats" || phase === "tasks" ? (
        <div className={PRACTICE_PAGE}>
          <div data-d="exam-chrome" className="sticky top-0 z-30">
            <SiteHeader
              sticky={false}
              maxWidthClassName="max-w-none"
              navItems={guestNav}
              actions={
                copy.navTrack === "wiso" ? (
                  <Link
                    to="/wiso/mock-exams"
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
                  >
                    {copy.backLabel}
                  </Link>
                ) : (
                  <Link
                    to="/mock-exams"
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
                  >
                    {copy.backLabel}
                  </Link>
                )
              }
            />
          </div>
          <main className={`${PRACTICE_BODY} flex-col py-8 sm:py-10`}>
            <div
              data-exam-fit="viewbar"
              className="sticky top-16 z-20 -mx-1 mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-background/95 px-3 py-3 shadow-sm backdrop-blur-sm sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-4"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {copy.examTitle}
                </p>
                <p data-exam-fit="viewbar-copy" className="mt-0.5 text-sm text-muted-foreground">
                  {copy.overviewHint}
                </p>
              </div>
              <ReviewViewToggle
                showTaskReview={phase === "tasks"}
                onShowResults={() => setPhase("stats")}
                onShowTasks={() => setPhase("tasks")}
                de={copy.locale === "de"}
                tasksAnchor="tasks"
              />
            </div>
            {phase === "stats" ? (
              <ExamResultOverview
                examTitle={copy.examTitle}
                analytics={analytics}
                locale={copy.locale}
                onOpenTask={(next) => {
                  setTaskIndex(next);
                  setPhase("tasks");
                }}
              />
            ) : currentTask ? (
              <TaskReviewWorkspace
                tasks={analytics.tasks}
                currentIndex={taskIndex}
                onNavigate={setTaskIndex}
                onBackToResults={() => setPhase("stats")}
                explanationAnchors
                locale={copy.locale}
              />
            ) : null}
          </main>
        </div>
      ) : null}
    </CourseFrame>
  );
}

function ToolRailButton({
  children,
  label,
  short,
}: {
  children: ReactNode;
  label: string;
  short: string;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className="relative flex min-h-11 flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card px-2 py-2 text-[10px] font-semibold text-foreground transition-colors hover:bg-secondary lg:min-h-0 lg:flex-none lg:px-1.5 lg:py-2.5"
    >
      {children}
      <span className="leading-none">{short}</span>
    </button>
  );
}
