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
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { glideFrame, glideRead } from "./course-motion";

const DWELL = 40;
const EXAM_SECONDS = 2 * 60 * 60;
const QUESTIONS = buildMockExam1Questions();
const ENGLISH_AT = QUESTIONS.findIndex((question) => question.subject === "english");
const MATH_AT = QUESTIONS.findIndex((question) => question.subject === "math");
const SHOW = [0, ENGLISH_AT, MATH_AT] as const;

/**
 * A finished 34-question sitting. Reading runs longer than a short case,
 * grammar is quicker, and a few math items take the most time.
 */
const TIMES = [
  128, 152, 114, 176, 139, 163, 102, 192, 133, 147, 246, 268, 214, 287, 233, 122, 101, 134, 111,
  144, 118, 214, 248, 192, 286, 231, 180, 322, 218, 254, 201, 268, 175, 234,
] as const;

if (TIMES.length !== QUESTIONS.length) {
  throw new Error("Mock exam demo needs one time for every question");
}

const TIME_TAKEN = TIMES.reduce((sum, seconds) => sum + seconds, 0);
const REMAINING = EXAM_SECONDS - TIME_TAKEN;
const EMPTY_MARKS = [false, false, false, false, false];
const NO_FLAGS = new Set<string>();
const GUEST_NAV = guestNavItems("bbe");

function trueIndexes(question: ExamQuestion): number[] {
  return question.statements.flatMap((statement, index) => (statement.isTrue ? [index] : []));
}

function completedAnswers(): Record<string, boolean[]> {
  return Object.fromEntries(
    QUESTIONS.map((question) => [
      question.id,
      question.statements.map((statement) => statement.isTrue),
    ]),
  );
}

const COMPLETED = completedAnswers();

type Phase = "exam" | "check" | "stats" | "tasks";

/** How it works · Mock Exams: the live 34-question paper, full screen. */
export function CourseMockExamDemo({
  rest = 1,
  lockCopy = false,
}: { rest?: number; lockCopy?: boolean } = {}) {
  const [phase, setPhase] = useState<Phase>("exam");
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState<Record<string, boolean[]>>({});
  const [visited, setVisited] = useState<Set<string>>(() => new Set([QUESTIONS[0]!.id]));
  const [taskIndex, setTaskIndex] = useState(0);

  const openQuestion = (next: number) => {
    setIndex(next);
    setVisited((prev) => {
      const id = QUESTIONS[next]?.id;
      if (!id || prev.has(id)) return prev;
      const copy = new Set(prev);
      copy.add(id);
      return copy;
    });
  };

  const openReview = () => {
    setMarks(COMPLETED);
    setPhase("check");
  };

  const analytics = useMemo(
    () =>
      buildExamAnalytics(QUESTIONS, {
        answers: phase === "exam" ? marks : COMPLETED,
        timed: true,
        secondsTaken: TIME_TAKEN,
        timeByQuestion: Object.fromEntries(
          QUESTIONS.map((question, i) => [question.id, TIMES[i] ?? 0]),
        ),
      }),
    [marks, phase],
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
    setVisited(new Set([QUESTIONS[0]!.id]));
    setTaskIndex(0);
    resetScroll();
    setFade(false);
    await api.wait(260);

    for (let step = 0; step < SHOW.length; step++) {
      if (api.cancelled()) return;
      const at = SHOW[step]!;
      if (step > 0) {
        await api.moveTo(`[data-q="${at + 1}"]`, DWELL);
        await api.click(() => openQuestion(at));
        await api.flush();
        resetScroll();
        await api.wait(70);
      }
      const question = QUESTIONS[at]!;
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
    await api.click(() => setPhase("tasks"));
    await api.flush();
    resetScroll();
    await api.wait(70);
    await api.moveTo('[data-d="prose0"]', 40);
    await glideRead(api, '[data-d="prose2"]', "[data-d^='prose']");
    await api.wait(280);
  }, [rest], { rest });

  const question = QUESTIONS[index] ?? QUESTIONS[0]!;
  const currentMarks = marks[question.id] ?? EMPTY_MARKS;
  const meta = SUBJECT_META[question.subject];
  const subjectName = subjectLabel(question.subject);
  const isLast = index === QUESTIONS.length - 1;
  const secondsLeft = REMAINING;
  const timerWarn = secondsLeft < 5 * 60 ? "critical" : secondsLeft < 15 * 60 ? "warn" : null;
  const questionSeconds = TIMES[index] ?? 0;
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
                <h1 className="truncate font-display text-base font-bold">Mock Exam 1</h1>
                <span
                  className={`hidden rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest sm:inline ${meta.badgeClass}`}
                >
                  {subjectName}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span data-exam-fit="count" className="text-sm tabular-nums text-muted-foreground">
                  Question {index + 1} / {QUESTIONS.length}
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
                  Review
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
                  This question · {formatQuestionTime(questionSeconds)}
                </p>
                <button
                  type="button"
                  aria-pressed={false}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                >
                  <Flag className="h-3.5 w-3.5 text-taupe" />
                  Flag for review
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <h2 className="mb-3 font-display text-sm font-semibold">Questions</h2>
                <QuestionPalette
                  questions={QUESTIONS}
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
                    Q{question.index} · {subjectName} · {formatQuestionTime(questionSeconds)}
                  </span>
                  <button
                    type="button"
                    aria-pressed={false}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold hover:bg-secondary"
                  >
                    <Flag className="h-3 w-3 text-taupe" />
                    Flag
                  </button>
                </div>
                <QuestionPalette
                  questions={QUESTIONS}
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
                  Previous
                </button>
                {isLast ? (
                  <button
                    type="button"
                    onClick={openReview}
                    className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                  >
                    Finish exam
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => openQuestion(index + 1)}
                    className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                  >
                    Next
                  </button>
                )}
              </nav>
            </main>

            <aside
              data-d="exam-chrome"
              data-exam-fit="rail"
              className="fixed inset-x-0 bottom-0 z-30 flex flex-row items-stretch justify-around gap-1 border-t border-border bg-background/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:gap-2 lg:sticky lg:inset-auto lg:bottom-auto lg:top-[4.5rem] lg:h-fit lg:w-16 lg:shrink-0 lg:flex-col lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
            >
              <ToolRailButton label="Answer Sheet" short="Sheet">
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
      ) : null}

      {phase === "check" ? (
        <div className="min-h-dvh bg-background font-sans text-foreground antialiased">
          <ExamReviewScreen
            questions={QUESTIONS}
            answers={marks}
            flagged={NO_FLAGS}
            usesAnswerSheet
            onJump={openQuestion}
            onSubmit={() => setPhase("stats")}
            onBack={() => setPhase("exam")}
          />
        </div>
      ) : null}

      {phase === "stats" || phase === "tasks" ? (
        <div className={PRACTICE_PAGE}>
          <div data-d="exam-chrome" className="sticky top-0 z-30">
            <SiteHeader
              sticky={false}
              maxWidthClassName="max-w-none"
              navItems={GUEST_NAV}
              actions={
                <Link
                  to="/mock-exams"
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  ← All mock exams
                </Link>
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
                  Mock Exam 1
                </p>
                <p data-exam-fit="viewbar-copy" className="mt-0.5 text-sm text-muted-foreground">
                  Score overview, or tasks with answers and explanations.
                </p>
              </div>
              <ReviewViewToggle
                showTaskReview={phase === "tasks"}
                onShowResults={() => setPhase("stats")}
                onShowTasks={() => setPhase("tasks")}
                de={false}
                tasksAnchor="tasks"
              />
            </div>
            {phase === "stats" ? (
              <ExamResultOverview
                examTitle="Mock Exam 1"
                analytics={analytics}
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
