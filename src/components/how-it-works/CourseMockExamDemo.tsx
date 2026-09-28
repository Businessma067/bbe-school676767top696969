import { useMemo, useState } from "react";
import { Check, Timer } from "lucide-react";
import { ExamReviewScreen } from "@/components/mock-exam/ExamReviewScreen";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import { QuestionPalette } from "@/components/mock-exam/QuestionPalette";
import { SUBJECT_META, subjectLabel } from "@/config/scoring-config";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { buildMockExam1Questions } from "@/lib/mock-exam-1-content";
import { formatExamTime } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { cn } from "@/lib/utils";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { skimPanel } from "./course-motion";

const DWELL = 150;
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
  128, 152, 114, 176, 139, 163, 102, 192, 133, 147,
  246, 268, 214, 287, 233, 122, 101, 134, 111, 144, 118,
  214, 248, 192, 286, 231, 180, 322, 218, 254, 201, 268, 175, 234,
] as const;

if (TIMES.length !== QUESTIONS.length) {
  throw new Error("Mock exam demo needs one time for every question");
}

const TIME_TAKEN = TIMES.reduce((sum, seconds) => sum + seconds, 0);
const REMAINING = EXAM_SECONDS - TIME_TAKEN;
const EMPTY_MARKS = [false, false, false, false, false];
const NO_FLAGS = new Set<string>();

function trueIndexes(question: ExamQuestion): number[] {
  return question.statements.flatMap((statement, index) => (statement.isTrue ? [index] : []));
}

function completedAnswers(): Record<string, boolean[]> {
  return Object.fromEntries(
    QUESTIONS.map((question) => [question.id, question.statements.map((statement) => statement.isTrue)]),
  );
}

const COMPLETED = completedAnswers();

type Phase = "exam" | "check" | "stats" | "tasks";

/** How it works · Mock Exams: the real 34-question paper, then its results chart. */
export function CourseMockExamDemo() {
  const [phase, setPhase] = useState<Phase>("exam");
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState<Record<string, boolean[]>>({});
  const [visited, setVisited] = useState<Set<string>>(() => new Set([QUESTIONS[0]!.id]));

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

  const analytics = useMemo(
    () =>
      buildExamAnalytics(QUESTIONS, {
        answers: phase === "exam" ? marks : COMPLETED,
        timed: true,
        secondsTaken: TIME_TAKEN,
        timeByQuestion: Object.fromEntries(QUESTIONS.map((question, i) => [question.id, TIMES[i] ?? 0])),
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
        await api.wait(200);
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
    await api.click(() => {
      setMarks(COMPLETED);
      setPhase("check");
    });
    await api.flush();
    resetScroll();
    await api.wait(280);

    await api.moveTo('[data-d="submit-exam"]', DWELL);
    await api.click(() => setPhase("stats"));
    await api.flush();
    await api.wait(360);
    await api.moveTo('[data-d="time-chart"]', 100);
    await api.wait(1100);
    await api.moveTo('[data-d="tasks"]', DWELL);
    await api.click(() => setPhase("tasks"));
    await api.flush();
    await api.wait(220);
    await skimPanel(api, '[data-d="expl-scroll"]', 0.62);
    await api.wait(280);
  }, []);

  const question = QUESTIONS[index] ?? QUESTIONS[0]!;
  const currentMarks = marks[question.id] ?? EMPTY_MARKS;
  const meta = SUBJECT_META[question.subject];
  const read = analytics.tasks[0];

  return (
    <CourseFrame stageRef={stageRef} scrollRef={scrollRef} cursorRef={cursorRef} clicking={clicking} fade={fade}>
      {phase === "exam" ? (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2 border-b border-border/60 pb-2">
            <h3 className="truncate font-display text-base font-bold">Mock Exam 1</h3>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                meta.badgeClass,
              )}
            >
              {subjectLabel(question.subject)}
            </span>
            <span className="text-sm tabular-nums text-muted-foreground">
              Question {question.index} / {QUESTIONS.length}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm font-semibold tabular-nums">
              <Timer className="h-3.5 w-3.5 shrink-0" />
              {formatExamTime(REMAINING)}
            </span>
            <span
              data-d="review"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold"
            >
              Review
            </span>
          </div>

          <div className="mb-4 rounded-2xl border border-border bg-card p-3 shadow-sm">
            <h4 className="mb-2 font-display text-sm font-semibold">Questions</h4>
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

          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
            <ExamQuestionBody q={question} emphasized />
            <ol className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
              {question.statements.map((statement, i) => {
                const marked = currentMarks[i] === true;
                return (
                  <li key={statement.id} className="px-3 py-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 w-6 shrink-0 text-center text-xs font-bold text-muted-foreground">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
                        <ExamStatementText q={question} text={statement.text} />
                      </p>
                      <span
                        data-d={`m${i}`}
                        className={cn(
                          "grid h-6 w-6 shrink-0 place-items-center rounded border-2 transition-all",
                          marked
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background",
                        )}
                      >
                        {marked ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ) : null}

      {phase === "check" ? (
        <ExamReviewScreen
          questions={QUESTIONS}
          answers={marks}
          flagged={NO_FLAGS}
          usesAnswerSheet={false}
          onJump={() => {}}
          onSubmit={() => setPhase("stats")}
          onBack={() => setPhase("exam")}
        />
      ) : null}

      {phase === "stats" || phase === "tasks" ? (
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-3 py-3 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mock Exam 1</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Score overview, or tasks with answers and explanations.
              </p>
            </div>
            <div role="tablist" aria-label="Switch view" className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm">
              <span
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold",
                  phase === "stats" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground",
                )}
              >
                Results
              </span>
              <span
                data-d="tasks"
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold",
                  phase === "tasks" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground",
                )}
              >
                Tasks
              </span>
            </div>
          </div>

          {phase === "stats" ? (
            <ExamResultOverview
              examTitle="Mock Exam 1"
              analytics={analytics}
              onOpenTask={() => setPhase("tasks")}
            />
          ) : read ? (
            <div className="rounded-2xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-5 py-3.5">
                <p className="font-display text-sm font-semibold">Explanations · Task {read.question.index}</p>
                <p className="mt-0.5 text-xs tabular-nums text-muted-foreground">
                  {read.statementCorrect}/{read.statementCount} correct · {subjectLabel(read.question.subject)}
                </p>
              </div>
              <div data-d="expl-scroll" className="h-72 space-y-4 overflow-y-auto px-5 py-4">
                {read.question.statements.slice(0, 3).map((statement, i) => (
                  <div key={statement.id} data-d={`prose${i}`} className="rounded-xl border border-border bg-secondary/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-taupe">
                      {String.fromCharCode(65 + i)} · {statement.isTrue ? "True" : "False"}
                    </p>
                    <ExamExplanationText
                      q={read.question}
                      text={statement.explanation}
                      className="mt-2 text-sm text-foreground"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </CourseFrame>
  );
}
