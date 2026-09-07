import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SCORING_CONFIG, SUBJECT_META, type SubjectKey } from "@/config/scoring-config";
import { isCustomExamId, SECTION_TOTALS } from "@/lib/mock-exams";
import { resolveExam } from "@/lib/custom-mock-builder/resolve-exam";
import type { ExamQuestion, MockExamSummary } from "@/lib/mock-exams";
import {
  calculateExamScore,
  getWi2Rates,
  statementPointDelta,
  type StatementResult,
} from "@/lib/scoring";
import { answersStorageKey } from "@/lib/mock-exam-session";
import { recordMockAttempt } from "@/lib/user-progress";
import { SiteHeader } from "@/components/SiteHeader";
import { PRACTICE_BODY, PRACTICE_PAGE } from "@/lib/practice-layout";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamSolutionOverview,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import { Check, ChevronLeft, ChevronRight, Clock, Target, TrendingUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mock-exams/$examId/review")({
  head: ({ params }) => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com/mock-exams/${params.examId}/review` }],
    meta: [
      { title: "Mock Exam Review — BBE School" },
      { name: "description", content: "Detailed wi2-scored review of your WU BBE mock exam." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ReviewExamPage,
});

function readAttempt(examId: string) {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(answersStorageKey(examId));
    return raw
      ? (JSON.parse(raw) as {
          answers: Record<string, boolean[]>;
          timed: boolean;
          secondsTaken: number | null;
        })
      : null;
  } catch {
    return null;
  }
}

function fmtDuration(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function formatDelta(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
}

type MarkedTask = {
  question: ExamQuestion;
  statements: StatementResult[];
};

function ReviewExamPage() {
  const { examId } = Route.useParams();
  const [exam, setExam] = useState<MockExamSummary | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [pointsTotal, setPointsTotal] = useState<number>(SCORING_CONFIG.examTotalPoints);
  const [isCustom, setIsCustom] = useState(false);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const attempt = useMemo(() => readAttempt(examId), [examId]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTaskReview, setShowTaskReview] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const resolved = await resolveExam(examId);
      if (cancelled) return;
      if (!resolved) {
        setLoadError("This exam could not be loaded.");
        setReady(true);
        return;
      }
      setExam(resolved.summary);
      setQuestions(resolved.questions);
      setPointsTotal(resolved.pointsTotal);
      setIsCustom(resolved.isCustom);
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [examId]);

  const marked = useMemo<MarkedTask[]>(() => {
    return questions.map((q) => {
      const stored = attempt?.answers?.[q.id];
      const userMarks =
        stored ??
        q.statements.map((s, i) => (s.isTrue ? (q.index + i) % 4 !== 0 : (q.index + i) % 5 === 0));
      return {
        question: q,
        statements: q.statements.map((s, i) => ({
          isTrue: s.isTrue,
          userMarked: userMarks[i] ?? false,
        })),
      };
    });
  }, [questions, attempt]);

  const { taskScores, total } = useMemo(
    () =>
      calculateExamScore(
        marked.map((m) => ({ maxPoints: m.question.maxPoints, statements: m.statements })),
      ),
    [marked],
  );

  const perSubject = useMemo(() => {
    const acc: Record<SubjectKey, number> = { economics: 0, math: 0, english: 0 };
    marked.forEach((m, i) => {
      acc[m.question.subject] += taskScores[i] ?? 0;
    });
    return acc;
  }, [marked, taskScores]);

  const pct = pointsTotal > 0 ? Math.round((total / pointsTotal) * 100) : 0;

  const statementTotals = useMemo(() => {
    let correctCount = 0;
    let statementCount = 0;
    for (const m of marked) {
      for (const s of m.statements) {
        statementCount += 1;
        if (s.userMarked === s.isTrue) correctCount += 1;
      }
    }
    return { correctCount, statementCount };
  }, [marked]);

  const subjectsToShow = useMemo(() => {
    if (isCustom) return ["economics"] as const;
    return ["economics", "english", "math"] as const;
  }, [isCustom]);

  const subjectMax = useMemo(() => {
    if (!isCustom) return SECTION_TOTALS;
    return {
      economics: pointsTotal,
      math: 0,
      english: 0,
    } as Record<SubjectKey, number>;
  }, [isCustom, pointsTotal]);

  const saved = useRef(false);
  useEffect(() => {
    if (!ready || saved.current || !attempt || questions.length === 0) return;
    saved.current = true;
    const flag = `bbe-mock-saved:${examId}:${attempt.secondsTaken ?? "x"}`;
    try {
      if (sessionStorage.getItem(flag)) return;
      sessionStorage.setItem(flag, "1");
    } catch {
      /* ignore */
    }
    void recordMockAttempt({
      examId,
      examTitle: exam?.title ?? examId,
      pointsEarned: Number(total.toFixed(2)),
      pointsTotal,
      perSubject: {
        economics: Number(perSubject.economics.toFixed(2)),
        math: Number(perSubject.math.toFixed(2)),
        english: Number(perSubject.english.toFixed(2)),
      },
      secondsTaken: attempt.secondsTaken ?? null,
      timed: attempt.timed,
      correctCount: statementTotals.correctCount,
      statementCount: statementTotals.statementCount,
    });
  }, [
    ready,
    attempt,
    exam,
    examId,
    perSubject,
    statementTotals,
    total,
    pointsTotal,
    questions.length,
  ]);

  useEffect(() => {
    if (currentIndex >= marked.length && marked.length > 0) {
      setCurrentIndex(0);
    }
  }, [marked.length, currentIndex]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
        Loading review…
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6">
        <p className="text-sm text-muted-foreground">{loadError}</p>
        {isCustomExamId(examId) ? (
          <Link
            to="/products/custom-mock-builder"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            ← Back
          </Link>
        ) : (
          <Link
            to="/mock-exams"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            ← Back
          </Link>
        )}
      </div>
    );
  }

  const current = marked[currentIndex] ?? null;
  const currentScore = current ? (taskScores[currentIndex] ?? 0) : 0;

  return (
    <div className={PRACTICE_PAGE}>
      <SiteHeader
        maxWidthClassName="max-w-none"
        actions={
          <Link
            to={isCustom ? "/products/custom-mock-builder" : "/mock-exams"}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            {isCustom ? "← Custom Mock Builder" : "← All mock exams"}
          </Link>
        }
      />
      <main className={`${PRACTICE_BODY} flex-col py-8 sm:py-10`}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              {exam?.title ?? "Mock Exam"} — Review
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse tasks again. Correct marks glow green, mistakes glow red. Points per statement
              sit to the right.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowTaskReview(true)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors",
                showTaskReview
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-secondary",
              )}
            >
              Review tasks
            </button>
            <button
              type="button"
              onClick={() => setShowTaskReview(false)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors",
                !showTaskReview
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-secondary",
              )}
            >
              Score overview
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-taupe">
              <Target className="h-3.5 w-3.5" /> {isCustom ? "Result" : "Overall score"}
            </div>
            <div className="font-display text-3xl font-bold text-caramel-deep">
              {isCustom ? `${pct}%` : `${total.toFixed(1)} / ${pointsTotal}`}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {isCustom ? `${total.toFixed(1)} / ${pointsTotal} pts` : `${pct}%`}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-taupe">
              <Clock className="h-3.5 w-3.5" /> Time taken
            </div>
            <div className="font-display text-3xl font-bold">
              {attempt?.secondsTaken != null ? fmtDuration(attempt.secondsTaken) : "—"}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {attempt?.timed ? "Timed attempt" : "Untimed attempt"}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-taupe">
              <TrendingUp className="h-3.5 w-3.5" /> {isCustom ? "Tasks" : "Tasks scored"}
            </div>
            <div className="font-display text-3xl font-bold">
              {isCustom
                ? `${marked.filter((m) => m.statements.some((s) => s.userMarked === s.isTrue)).length} / ${marked.length}`
                : `${taskScores.filter((s) => s > 0).length} / ${taskScores.length}`}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {isCustom ? "Tasks with any correct mark" : "Tasks above zero"}
            </div>
          </div>
        </div>

        {!showTaskReview ? (
          <>
            {!isCustom && (
              <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-4 font-display text-lg font-semibold">By subject</h2>
                <div className="space-y-4">
                  {subjectsToShow.map((s) => {
                    const sm = SUBJECT_META[s];
                    const earned = perSubject[s];
                    const max = subjectMax[s];
                    return (
                      <div key={s}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium">{sm.label}</span>
                          <span className="font-mono tabular-nums text-muted-foreground">
                            {earned.toFixed(1)} / {max}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${Math.min(100, max > 0 ? (earned / max) * 100 : 0)}%`,
                              backgroundColor: sm.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-semibold">All tasks</h2>
              <button
                type="button"
                onClick={() => setShowTaskReview(true)}
                className="rounded-md bg-caramel-deep px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110"
              >
                Open task review →
              </button>
            </div>
            <div className="space-y-2">
              {marked.map((m, i) => {
                const q = m.question;
                const sm = SUBJECT_META[q.subject];
                const score = taskScores[i] ?? 0;
                const correctMarks = m.statements.filter((s) => s.userMarked === s.isTrue).length;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(i);
                      setShowTaskReview(true);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-left shadow-sm transition-colors hover:bg-secondary/40"
                  >
                    <span className="w-7 shrink-0 font-mono text-sm text-taupe">{q.index}</span>
                    {!isCustom && (
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${sm.badgeClass}`}
                      >
                        {sm.label}
                      </span>
                    )}
                    <span className="flex-1 truncate text-sm">{q.stem}</span>
                    <span className="shrink-0 font-mono text-sm font-semibold tabular-nums">
                      {isCustom
                        ? `${correctMarks}/5 · ${score.toFixed(1)} pts`
                        : `${score.toFixed(1)} / ${q.maxPoints.toFixed(1)} pts`}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        ) : current ? (
          <TaskReviewWorkspace
            marked={marked}
            currentIndex={currentIndex}
            onNavigate={setCurrentIndex}
            isCustom={isCustom}
            currentScore={currentScore}
          />
        ) : null}
      </main>
    </div>
  );
}

function TaskReviewWorkspace({
  marked,
  taskScores,
  currentIndex,
  onNavigate,
  isCustom,
  currentScore,
}: {
  marked: MarkedTask[];
  taskScores: number[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  isCustom: boolean;
  currentScore: number;
}) {
  const current = marked[currentIndex]!;
  const q = current.question;
  const sm = SUBJECT_META[q.subject];
  const rates = getWi2Rates(q.maxPoints, current.statements);
  const deltas = current.statements.map((s) => statementPointDelta(s, rates));

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
      <aside className="w-full shrink-0 rounded-2xl border border-border bg-card p-4 shadow-sm lg:sticky lg:top-20 lg:w-56 xl:w-64">
        <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-taupe">
          Tasks
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {marked.map((m, i) => {
            const allCorrect = m.statements.every((s) => s.userMarked === s.isTrue);
            const anyWrong = m.statements.some((s) => s.userMarked !== s.isTrue);
            const isCurrent = i === currentIndex;
            return (
              <button
                key={m.question.id}
                type="button"
                onClick={() => onNavigate(i)}
                aria-current={isCurrent ? "true" : undefined}
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-md border text-xs font-semibold transition-colors",
                  isCurrent && "ring-2 ring-foreground/30 ring-offset-2 ring-offset-card",
                  allCorrect && !isCurrent && "border-emerald-500/50 bg-emerald-500/15 text-emerald-800",
                  anyWrong && !allCorrect && !isCurrent && "border-red-500/40 bg-red-500/10 text-red-800",
                  isCurrent && allCorrect && "border-emerald-700 bg-emerald-600 text-white",
                  isCurrent && anyWrong && !allCorrect && "border-red-700 bg-red-600 text-white",
                  isCurrent && !allCorrect && !anyWrong && "border-foreground bg-foreground text-background",
                )}
              >
                {m.question.index}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-[11px] leading-snug text-muted-foreground">
          Green = all statements judged correctly. Red = at least one mistake.
        </p>
      </aside>

      <div className="min-w-0 flex-1 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm text-taupe">Q{q.index}</span>
            {!isCustom && (
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${sm.badgeClass}`}
              >
                {sm.label}
              </span>
            )}
            <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-xs font-semibold tabular-nums">
              {currentScore.toFixed(1)} / {q.maxPoints.toFixed(1)} pts
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => onNavigate(currentIndex - 1)}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Prev
            </button>
            <button
              type="button"
              disabled={currentIndex >= marked.length - 1}
              onClick={() => onNavigate(currentIndex + 1)}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          {q.subtopicTag ? (
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground/70">
              {q.subtopicTag}
            </p>
          ) : null}
          <ExamQuestionBody q={q} emphasized />

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-taupe">
              <span className="w-6">#</span>
              <span className="flex-1">Statement</span>
              <span className="w-16 text-center sm:w-20">Yours</span>
              <span className="w-16 text-center sm:w-20">Key</span>
              <span className="w-16 text-right sm:w-20">Points</span>
            </div>
            {q.statements.map((s, si) => {
              const result = current.statements[si]!;
              const judgedOk = result.userMarked === result.isTrue;
              const delta = deltas[si] ?? 0;
              return (
                <div
                  key={s.id}
                  className={cn(
                    "flex items-start gap-2 border-b border-border px-3 py-3.5 last:border-b-0 sm:items-center sm:gap-3 sm:px-4",
                    judgedOk
                      ? "bg-emerald-500/10 shadow-[inset_3px_0_0_0_rgb(16,185,129)]"
                      : "bg-red-500/10 shadow-[inset_3px_0_0_0_rgb(239,68,68)]",
                  )}
                >
                  <span className="mt-0.5 flex w-6 shrink-0 items-center justify-center sm:mt-0">
                    {judgedOk ? (
                      <Check className="h-4 w-4 text-emerald-600" aria-label="Correct judgment" />
                    ) : (
                      <X className="h-4 w-4 text-red-600" aria-label="Incorrect judgment" />
                    )}
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed">
                    <span className="mr-2 font-semibold text-taupe">
                      {String.fromCharCode(65 + si)}.
                    </span>
                    <ExamStatementText q={q} text={s.text} />
                  </p>
                  <span
                    className={cn(
                      "w-16 shrink-0 text-center text-xs font-semibold sm:w-20",
                      result.userMarked ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {result.userMarked ? "True" : "—"}
                  </span>
                  <span className="w-16 shrink-0 text-center text-xs font-semibold sm:w-20">
                    {result.isTrue ? "True" : "False"}
                  </span>
                  <span
                    className={cn(
                      "w-16 shrink-0 text-right font-mono text-sm font-bold tabular-nums sm:w-20",
                      delta > 0 && "text-emerald-700",
                      delta < 0 && "text-red-700",
                      delta === 0 && "text-muted-foreground",
                    )}
                  >
                    {formatDelta(delta)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="w-full shrink-0 lg:sticky lg:top-20 lg:w-[min(100%,22rem)] xl:w-[26rem]">
        <div className="flex h-full max-h-[min(70vh,44rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:max-h-[calc(100vh-6rem)]">
          <div className="border-b border-border px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
              Explanations · Task {q.index}
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold">{q.stem.slice(0, 80)}</p>
          </div>
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {q.solutionOverview ? (
              <ExamSolutionOverview text={q.solutionOverview} subject={q.subject} />
            ) : null}
            {q.statements.map((s, si) => {
              const result = current.statements[si]!;
              const judgedOk = result.userMarked === result.isTrue;
              const delta = deltas[si] ?? 0;
              return (
                <div
                  key={s.id}
                  className={cn(
                    "rounded-xl border p-3",
                    judgedOk ? "border-emerald-500/25 bg-emerald-500/5" : "border-red-500/25 bg-red-500/5",
                  )}
                >
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                      {String.fromCharCode(65 + si)} · {result.isTrue ? "True" : "False"}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs font-bold tabular-nums",
                        delta > 0 && "text-emerald-700",
                        delta < 0 && "text-red-700",
                        delta === 0 && "text-muted-foreground",
                      )}
                    >
                      {formatDelta(delta)} pts
                    </span>
                  </div>
                  <ExamExplanationText
                    q={q}
                    text={s.explanation}
                    className="text-sm text-muted-foreground"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
