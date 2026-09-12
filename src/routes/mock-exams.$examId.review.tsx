import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SCORING_CONFIG, SUBJECT_META } from "@/config/scoring-config";
import { isCustomExamId } from "@/lib/mock-exams";
import { resolveExam } from "@/lib/custom-mock-builder/resolve-exam";
import type { ExamQuestion, MockExamSummary } from "@/lib/mock-exams";
import { getWi2Rates, statementPointDelta } from "@/lib/scoring";
import {
  buildExamAnalytics,
  parseMockAttemptHandoff,
  type MockAttemptHandoff,
  type TaskAnalyticsRow,
} from "@/lib/mock-exam-analytics";
import { answersStorageKey, formatQuestionTime } from "@/lib/mock-exam-session";
import { recordMockAttempt } from "@/lib/user-progress";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import { PRACTICE_BODY, PRACTICE_PAGE } from "@/lib/practice-layout";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamSolutionOverview,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
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

function readAttempt(examId: string): MockAttemptHandoff | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(answersStorageKey(examId));
    return raw ? parseMockAttemptHandoff(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function formatDelta(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
}

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
  const [showTaskReview, setShowTaskReview] = useState(false);

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

  const analytics = useMemo(() => buildExamAnalytics(questions, attempt), [questions, attempt]);

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
    const perSubject = { economics: 0, math: 0, english: 0 };
    for (const row of analytics.sections) {
      if (row.key === "economics" || row.key === "math" || row.key === "english") {
        perSubject[row.key] = Number(row.earned.toFixed(2));
      }
    }
    void recordMockAttempt({
      examId,
      examTitle: exam?.title ?? examId,
      pointsEarned: Number(analytics.total.toFixed(2)),
      pointsTotal,
      perSubject,
      secondsTaken: attempt.secondsTaken ?? null,
      timed: attempt.timed,
      correctCount: analytics.statementCorrect,
      statementCount: analytics.statementCount,
    });
  }, [ready, attempt, exam, examId, analytics, pointsTotal, questions.length]);

  useEffect(() => {
    if (currentIndex >= analytics.tasks.length && analytics.tasks.length > 0) {
      setCurrentIndex(0);
    }
  }, [analytics.tasks.length, currentIndex]);

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

  const current = analytics.tasks[currentIndex] ?? null;

  return (
    <div className={PRACTICE_PAGE}>
      <SiteHeader
        maxWidthClassName="max-w-none"
        actions={
          <div className="flex flex-wrap items-center gap-2">
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
              Results
            </button>
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
              Tasks
            </button>
            <Link
              to={isCustom ? "/products/custom-mock-builder" : "/mock-exams"}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              {isCustom ? "← Custom Mock Builder" : "← All mock exams"}
            </Link>
          </div>
        }
      />
      <main className={`${PRACTICE_BODY} flex-col py-8 sm:py-10`}>
        {!showTaskReview ? (
          <ExamResultOverview
            examTitle={exam?.title ?? "Mock Exam"}
            analytics={analytics}
            onOpenTask={(index) => {
              setCurrentIndex(index);
              setShowTaskReview(true);
            }}
          />
        ) : current ? (
          <TaskReviewWorkspace
            tasks={analytics.tasks}
            currentIndex={currentIndex}
            onNavigate={setCurrentIndex}
            onBackToResults={() => setShowTaskReview(false)}
          />
        ) : null}
      </main>
    </div>
  );
}

function TaskReviewWorkspace({
  tasks,
  currentIndex,
  onNavigate,
  onBackToResults,
}: {
  tasks: TaskAnalyticsRow[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onBackToResults: () => void;
}) {
  const current = tasks[currentIndex]!;
  const q = current.question;
  const sm = SUBJECT_META[q.subject];
  const rates = getWi2Rates(q.maxPoints, current.statements);
  const deltas = current.statements.map((s) => statementPointDelta(s, rates));

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
      <aside className="w-full shrink-0 rounded-2xl border border-border bg-card p-4 shadow-sm lg:sticky lg:top-20 lg:w-56 xl:w-64">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="font-display text-sm font-semibold">Tasks</h2>
          <button
            type="button"
            onClick={onBackToResults}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Results
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tasks.map((m, i) => {
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
                  allCorrect && !isCurrent && "border-emerald-500/50 bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
                  anyWrong && !allCorrect && !isCurrent && "border-red-500/40 bg-red-500/10 text-red-800 dark:text-red-300",
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
          Green = all five judged correctly. Red = at least one mistake.
        </p>
      </aside>

      <div className="min-w-0 flex-1 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-display text-lg font-semibold tabular-nums">Q{q.index}</span>
            <span className="text-muted-foreground">{sm.label}</span>
            {q.subtopicTag ? (
              <span className="text-muted-foreground">{current.topicLabel}</span>
            ) : null}
            <span className="tabular-nums text-muted-foreground">
              {current.score.toFixed(1)} / {q.maxPoints.toFixed(1)} pts
            </span>
            <span className="tabular-nums text-muted-foreground">
              {current.accuracyPct}% · {formatQuestionTime(current.seconds)}
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
              disabled={currentIndex >= tasks.length - 1}
              onClick={() => onNavigate(currentIndex + 1)}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <ExamQuestionBody q={q} emphasized />

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2 text-xs text-muted-foreground">
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
                      delta > 0 && "text-emerald-700 dark:text-emerald-400",
                      delta < 0 && "text-red-700 dark:text-red-400",
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
            <p className="font-display text-sm font-semibold">Explanations · Task {q.index}</p>
            <p className="mt-0.5 text-xs tabular-nums text-muted-foreground">
              {current.statementCorrect}/{current.statementCount} correct · {formatQuestionTime(current.seconds)}
            </p>
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
                    <span className="text-xs font-semibold text-muted-foreground">
                      {String.fromCharCode(65 + si)} · {result.isTrue ? "True" : "False"}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs font-bold tabular-nums",
                        delta > 0 && "text-emerald-700 dark:text-emerald-400",
                        delta < 0 && "text-red-700 dark:text-red-400",
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
