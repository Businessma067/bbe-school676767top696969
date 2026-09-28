import { useMemo, useState } from "react";
import { Check, Timer } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import { SUBJECT_META, subjectLabel, type SubjectKey } from "@/config/scoring-config";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { formatCompactDuration, formatExamTime, formatQuestionTime } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { cn } from "@/lib/utils";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { skimPanel } from "./course-motion";
import {
  COURSE_ECON,
  COURSE_ENGLISH,
  COURSE_ENGLISH_PASSAGE,
  COURSE_MATH,
  type CourseTask,
} from "./course-tasks";

const DWELL = 150;
/** Seconds a real sitting would spend: reading, then a calculation, then a shorter case. */
const TIMES = [252, 395, 168] as const;
const REMAINING = 2 * 60 * 60 - TIMES.reduce((sum, seconds) => sum + seconds, 0);

function asExam(
  task: CourseTask,
  subject: SubjectKey,
  index: number,
  maxPoints: number,
  passage?: string,
): ExamQuestion {
  return {
    id: `hiw-${task.caseId}`,
    index,
    subject,
    stem: task.context,
    maxPoints,
    passage,
    solutionOverview: task.overview,
    subtopicTag: task.caseId,
    statements: task.statements.map((text, statement) => ({
      id: `${task.caseId}-s${statement}`,
      text,
      isTrue: task.answerKey[statement] === true,
      explanation: task.explanations[statement] ?? "",
    })),
  };
}

const QUESTIONS: ExamQuestion[] = [
  asExam(COURSE_ENGLISH, "english", 1, 4, COURSE_ENGLISH_PASSAGE),
  asExam(COURSE_MATH, "math", 2, 5),
  asExam(COURSE_ECON, "economics", 3, 6),
];

const EMPTY = [false, false, false, false, false];

function trueIndexes(question: ExamQuestion): number[] {
  return question.statements.flatMap((statement, index) => (statement.isTrue ? [index] : []));
}

function formatAxisSeconds(value: number) {
  const sec = Math.max(0, Math.round(value));
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

type Phase = "exam" | "check" | "stats" | "tasks";

/** How it works · Mock Exams: one question per subject, then results and three explanations. */
export function CourseMockExamDemo() {
  const [phase, setPhase] = useState<Phase>("exam");
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState<Record<string, boolean[]>>({});

  const analytics = useMemo(
    () =>
      buildExamAnalytics(QUESTIONS, {
        answers: Object.fromEntries(QUESTIONS.map((question) => [question.id, marks[question.id] ?? EMPTY])),
        timed: true,
        secondsTaken: TIMES.reduce((sum, seconds) => sum + seconds, 0),
        timeByQuestion: Object.fromEntries(QUESTIONS.map((question, i) => [question.id, TIMES[i]])),
      }),
    [marks],
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
    resetScroll();
    setFade(false);
    await api.wait(240);

    for (let q = 0; q < QUESTIONS.length; q++) {
      if (api.cancelled()) return;
      const question = QUESTIONS[q]!;
      for (const statement of trueIndexes(question)) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="m${statement}"]`, DWELL);
        await api.click(() =>
          setMarks((prev) => {
            const next = [...(prev[question.id] ?? EMPTY)];
            next[statement] = true;
            return { ...prev, [question.id]: next };
          }),
        );
        await api.wait(70);
      }
      const last = q === QUESTIONS.length - 1;
      await api.moveTo('[data-d="advance"]', DWELL);
      await api.click(() => {
        if (last) setPhase("check");
        else setIndex(q + 1);
      });
      await api.flush();
      resetScroll();
      await api.wait(last ? 240 : 180);
    }

    await api.moveTo('[data-d="submit-exam"]', DWELL);
    await api.click(() => setPhase("stats"));
    await api.flush();
    await api.wait(320);
    await api.moveTo('[data-d="time-chart"]', 80);
    await api.wait(900);
    await api.moveTo('[data-d="tasks"]', DWELL);
    await api.click(() => setPhase("tasks"));
    await api.flush();
    await api.wait(200);
    await skimPanel(api, '[data-d="expl-scroll"]', 0.78);
    await api.wait(280);
  }, []);

  const question = QUESTIONS[index] ?? QUESTIONS[0]!;
  const currentMarks = marks[question.id] ?? EMPTY;
  const meta = SUBJECT_META[question.subject];
  const slowest = [...analytics.tasks].sort((a, b) => b.seconds - a.seconds)[0];
  const series = analytics.tasks.map((task) => ({
    q: task.question.index,
    seconds: task.seconds,
    subject: subjectLabel(task.question.subject),
    accuracy: task.accuracyPct,
  }));
  const read = QUESTIONS[0]!;

  return (
    <CourseFrame stageRef={stageRef} scrollRef={scrollRef} cursorRef={cursorRef} clicking={clicking} fade={fade}>
      {phase === "exam" ? (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="truncate font-display text-sm font-bold">Mock Exam</h3>
            <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest", meta.badgeClass)}>
              {subjectLabel(question.subject)}
            </span>
            <span className="text-xs tabular-nums text-muted-foreground">
              Question {question.index} / {QUESTIONS.length}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs font-semibold tabular-nums">
              <Timer className="h-3.5 w-3.5" />
              {formatExamTime(REMAINING)}
            </span>
          </div>
          <div className="mb-3 flex gap-1.5">
            {QUESTIONS.map((item, i) => (
              <span
                key={item.id}
                className={cn(
                  "grid h-7 w-7 place-items-center rounded-md border text-[11px] font-semibold",
                  i === index
                    ? "border-foreground bg-foreground text-background"
                    : marks[item.id]?.some(Boolean)
                      ? "border-primary/40 bg-primary/15 text-foreground"
                      : "border-border bg-card text-muted-foreground",
                )}
              >
                {item.index}
              </span>
            ))}
          </div>
          {question.passage ? (
            <div className="mb-3 max-h-28 overflow-y-auto rounded-xl border border-border bg-secondary/20 p-3 text-xs leading-relaxed text-foreground/90">
              {question.passage}
            </div>
          ) : null}
          <ExamQuestionBody q={question} showPassage={false} />
          <ol className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
            {question.statements.map((statement, i) => {
              const marked = currentMarks[i] === true;
              return (
                <li key={statement.id} className="flex items-start gap-2 px-3 py-2.5">
                  <span className="mt-0.5 w-5 shrink-0 text-center text-xs font-bold text-muted-foreground">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed">
                    <ExamStatementText q={question} text={statement.text} />
                  </p>
                  <span
                    data-d={`m${i}`}
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded border-2",
                      marked ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background",
                    )}
                  >
                    {marked ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                  </span>
                </li>
              );
            })}
          </ol>
          <div className="mt-4 flex pb-2">
            <span
              data-d="advance"
              className="inline-flex min-w-36 items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
            >
              {index === QUESTIONS.length - 1 ? "Finish exam" : "Next"}
            </span>
          </div>
        </div>
      ) : null}

      {phase === "check" ? (
        <div className="py-2">
          <h3 className="font-display text-xl font-bold tracking-tight">Review before submission</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Check unanswered and flagged items. Submission uses the marks you selected next to each statement.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <ReviewStat label="Total questions" value={String(QUESTIONS.length)} />
            <ReviewStat label="Total statements" value={String(QUESTIONS.length * 5)} />
            <ReviewStat label="Answered questions" value={String(analytics.answeredTasks)} accent />
            <ReviewStat label="Unanswered questions" value="0" />
          </div>
          <span
            data-d="submit-exam"
            className="mt-6 inline-flex min-w-40 items-center justify-center rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white"
          >
            Submit exam
          </span>
        </div>
      ) : null}

      {phase === "stats" || phase === "tasks" ? (
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Mock Exam</p>
              <p className="text-xs text-muted-foreground">Score overview, or tasks with answers and explanations.</p>
            </div>
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              <span
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold",
                  phase === "stats" ? "bg-foreground text-background" : "text-muted-foreground",
                )}
              >
                Results
              </span>
              <span
                data-d="tasks"
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold",
                  phase === "tasks" ? "bg-foreground text-background" : "text-muted-foreground",
                )}
              >
                Tasks
              </span>
            </div>
          </div>

          {phase === "stats" ? (
            <div className="space-y-4">
              <section className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                  <Stat
                    value={`${analytics.pct}%`}
                    label="Exam score"
                    hint={`${analytics.total.toFixed(1)} / ${analytics.pointsTotal.toFixed(1)} pts`}
                  />
                  <Stat
                    value={`${analytics.statementPct}%`}
                    label="Statement accuracy"
                    hint={`${analytics.statementCorrect} of ${analytics.statementCount} judged correctly`}
                  />
                  <Stat
                    value={formatCompactDuration(analytics.secondsTaken ?? 0)}
                    label="Time"
                    hint="Timed sitting"
                  />
                  <Stat
                    value={formatQuestionTime(analytics.medianSeconds)}
                    label="Median per question"
                    hint={`Average ${formatQuestionTime(analytics.meanSeconds)}`}
                  />
                </div>
              </section>
              <section className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="border-b border-border px-4 py-3">
                  <h3 className="font-display text-base font-semibold">Time per question</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Q1 to Q{QUESTIONS.length}. Longest: Q{slowest?.question.index} ({formatQuestionTime(slowest?.seconds ?? 0)}).
                  </p>
                </div>
                <div data-d="time-chart" className="h-52 w-full px-1 pb-2 pt-2">
                  <ResponsiveContainer width="100%" height="100%" debounce={50}>
                    <AreaChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="hiwMockTimeFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-caramel-deep)" stopOpacity={0.22} />
                          <stop offset="100%" stopColor="var(--color-caramel-deep)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="var(--border)" vertical={false} />
                      <XAxis dataKey="q" tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} axisLine={false} tickLine={false} />
                      <YAxis
                        width={36}
                        tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={formatAxisSeconds}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          const row = payload?.[0]?.payload as { q: number; seconds: number; subject: string } | undefined;
                          if (!active || !row) return null;
                          return (
                            <div className="rounded-xl border border-border bg-popover px-3 py-2 text-xs shadow-md">
                              <p className="font-medium">Question {row.q}</p>
                              <p className="mt-0.5 text-muted-foreground">
                                {row.subject} · {formatQuestionTime(row.seconds)}
                              </p>
                            </div>
                          );
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="seconds"
                        stroke="var(--color-caramel-deep)"
                        strokeWidth={2}
                        fill="url(#hiwMockTimeFill)"
                        dot={{ r: 3, strokeWidth: 0, fill: "var(--color-caramel-deep)" }}
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <p className="font-display text-sm font-semibold">Explanations · Task {read.index}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {subjectLabel(read.subject)} · {read.subtopicTag}
              </p>
              <div data-d="expl-scroll" className="mt-3 h-64 space-y-3 overflow-y-auto pr-1">
                {read.statements.slice(0, 3).map((statement, i) => (
                  <div key={statement.id} data-d={`prose${i}`} className="rounded-xl border border-border bg-secondary/20 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-taupe">
                      {String.fromCharCode(65 + i)} · {statement.isTrue ? "True" : "False"}
                    </p>
                    <ExamExplanationText q={read} text={statement.explanation} className="mt-2 text-sm text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </CourseFrame>
  );
}

function ReviewStat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-taupe">{label}</div>
      <div className={cn("mt-1 font-display text-2xl font-bold tabular-nums", accent && "text-caramel-deep")}>{value}</div>
    </div>
  );
}

function Stat({ value, label, hint }: { value: string; label: string; hint: string }) {
  return (
    <div className="min-w-0 px-4 py-4">
      <p className="font-display text-2xl font-semibold tabular-nums leading-none">{value}</p>
      <p className="mt-2 text-xs text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-[11px] text-muted-foreground/80">{hint}</p>
    </div>
  );
}
