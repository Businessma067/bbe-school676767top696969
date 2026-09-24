import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SCORING_CONFIG, subjectLabel } from "@/config/scoring-config";
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
import { TrackBrandMark } from "@/components/ExamTrackSwitcher";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import { PRACTICE_BODY, PRACTICE_PAGE } from "@/lib/practice-layout";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamSolutionOverview,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import { storeExamTrack } from "@/lib/exam-track";
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

function ReviewViewToggle({
  showTaskReview,
  onShowResults,
  onShowTasks,
  de,
}: {
  showTaskReview: boolean;
  onShowResults: () => void;
  onShowTasks: () => void;
  de: boolean;
}) {
  return (
    <div
      role="tablist"
      aria-label={de ? "Ansicht wechseln" : "Switch view"}
      className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm"
    >
      <button
        type="button"
        role="tab"
        aria-selected={!showTaskReview}
        onClick={onShowResults}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
          !showTaskReview
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {de ? "Ergebnis" : "Results"}
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={showTaskReview}
        onClick={onShowTasks}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
          showTaskReview
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {de ? "Aufgaben" : "Tasks"}
      </button>
    </div>
  );
}

function ReviewExamPage() {
  const { examId } = Route.useParams();
  const [exam, setExam] = useState<MockExamSummary | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [pointsTotal, setPointsTotal] = useState<number>(SCORING_CONFIG.examTotalPoints);
  const [isCustom, setIsCustom] = useState(false);
  const [examTrack, setExamTrack] = useState<"bbe" | "wiso">("bbe");
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
      setExamTrack(resolved.track);
      storeExamTrack(resolved.track);
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [examId]);

  const uiLocale = examTrack === "wiso" ? "de" : "en";
  const analytics = useMemo(
    () => buildExamAnalytics(questions, attempt, uiLocale),
    [questions, attempt, uiLocale],
  );

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
    const perSubject: Record<string, number> = { economics: 0, math: 0, english: 0, german: 0 };
    for (const row of analytics.sections) {
      if (
        row.key === "economics" ||
        row.key === "math" ||
        row.key === "english" ||
        row.key === "german"
      ) {
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
        {examTrack === "wiso" ? "Auswertung wird geladen…" : "Loading review…"}
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6">
        <p className="text-sm text-muted-foreground">{loadError}</p>
        {isCustomExamId(examId) ? (
          <Link
            to={examTrack === "wiso" ? "/wiso/mock-builder" : "/products/custom-mock-builder"}
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            {examTrack === "wiso" ? "← WiSo Mock-Builder" : "← Back"}
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
  const de = examTrack === "wiso";

  return (
    <div className={PRACTICE_PAGE}>
      <SiteHeader
        maxWidthClassName="max-w-none"
        left={de ? <TrackBrandMark forceTrack="wiso" /> : undefined}
        hideTrackSwitcher={de}
        actions={
          <Link
            to={
              isCustom
                ? de
                  ? "/wiso/mock-builder"
                  : "/products/custom-mock-builder"
                : de
                  ? "/wiso/mock-exams"
                  : "/mock-exams"
            }
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            {isCustom
              ? de
                ? "← WiSo Mock-Builder"
                : "← Custom Mock Builder"
              : de
                ? "← Alle Probeprüfungen"
                : "← All mock exams"}
          </Link>
        }
      />
      <main className={`${PRACTICE_BODY} flex-col py-8 sm:py-10`}>
        <div className="sticky top-16 z-20 -mx-1 mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-background/95 px-3 py-3 shadow-sm backdrop-blur-sm sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {de ? "Ansicht" : "View"}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {de
                ? "Ergebnisübersicht oder Aufgaben mit Lösungen und Erklärungen."
                : "Score overview, or tasks with answers and explanations."}
            </p>
          </div>
          <ReviewViewToggle
            showTaskReview={showTaskReview}
            onShowResults={() => setShowTaskReview(false)}
            onShowTasks={() => setShowTaskReview(true)}
            de={de}
          />
        </div>
        {!showTaskReview ? (
          <ExamResultOverview
            examTitle={exam?.title ?? (de ? "Probeprüfung" : "Mock Exam")}
            analytics={analytics}
            locale={uiLocale}
            onOpenTask={(index) => {
              setCurrentIndex(index);
              setShowTaskReview(true);
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          />
        ) : current ? (
          <TaskReviewWorkspace
            tasks={analytics.tasks}
            currentIndex={currentIndex}
            onNavigate={setCurrentIndex}
            onBackToResults={() => setShowTaskReview(false)}
            locale={uiLocale}
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
  locale = "en",
}: {
  tasks: TaskAnalyticsRow[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onBackToResults: () => void;
  locale?: "en" | "de";
}) {
  const de = locale === "de";
  const current = tasks[currentIndex]!;
  const q = current.question;
  const smLabel = subjectLabel(q.subject, locale);
  const rates = getWi2Rates(q.maxPoints, current.statements);
  const deltas = current.statements.map((s) => statementPointDelta(s, rates));
  const qWord = de ? "A" : "Q";

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
      <aside className="w-full shrink-0 rounded-2xl border border-border bg-card p-4 shadow-sm lg:sticky lg:top-20 lg:w-56 xl:w-64">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="font-display text-sm font-semibold">{de ? "Aufgaben" : "Tasks"}</h2>
          <button
            type="button"
            onClick={onBackToResults}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            {de ? "Ergebnis" : "Results"}
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
                  isCurrent && "ring-2 ring-caramel-deep/40 ring-offset-2 ring-offset-card",
                  allCorrect && !isCurrent && "border-border bg-secondary/60 text-foreground",
                  anyWrong && !allCorrect && !isCurrent && "border-border bg-card text-muted-foreground",
                  isCurrent && allCorrect && "border-caramel-deep bg-caramel-deep text-white",
                  isCurrent && anyWrong && !allCorrect && "border-caramel-deep bg-caramel-deep/90 text-white",
                  isCurrent && !allCorrect && !anyWrong && "border-foreground bg-foreground text-background",
                  !isCurrent && !allCorrect && !anyWrong && "border-border bg-card text-muted-foreground",
                )}
              >
                {m.question.index}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-[11px] leading-snug text-muted-foreground">
          {de
            ? "Gefüllt = alle fünf richtig beurteilt. Leise = mindestens ein Fehler. Akzent markiert die offene Aufgabe."
            : "Filled = all five judged correctly. Quiet = at least one mistake. Accent marks the open task."}
        </p>
      </aside>

      <div className="min-w-0 flex-1 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-display text-lg font-semibold tabular-nums">
              {qWord}
              {q.index}
            </span>
            <span className="text-muted-foreground">{smLabel}</span>
            {current.topicLabel ? (
              <span className="text-muted-foreground">{current.topicLabel}</span>
            ) : null}
            <span className="tabular-nums text-muted-foreground">
              {current.score.toFixed(1)} / {q.maxPoints.toFixed(1)} {de ? "Pkt." : "pts"}
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
              <ChevronLeft className="h-3.5 w-3.5" /> {de ? "Zurück" : "Prev"}
            </button>
            <button
              type="button"
              disabled={currentIndex >= tasks.length - 1}
              onClick={() => onNavigate(currentIndex + 1)}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              {de ? "Weiter" : "Next"} <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <ExamQuestionBody q={q} emphasized />

          <div className="mt-6 overflow-visible rounded-xl border border-border">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2 text-xs text-muted-foreground">
              <span className="w-6">#</span>
              <span className="flex-1">{de ? "Aussage" : "Statement"}</span>
              <span className="w-16 text-center sm:w-20">{de ? "Deine" : "Yours"}</span>
              <span className="w-16 text-center sm:w-20">{de ? "Schlüssel" : "Key"}</span>
              <span className="w-16 text-right sm:w-20">{de ? "Punkte" : "Points"}</span>
            </div>
            {q.statements.map((s, si) => {
              const result = current.statements[si]!;
              const judgedOk = result.userMarked === result.isTrue;
              const delta = deltas[si] ?? 0;
              return (
                <div
                  key={s.id}
                  className={cn(
                    "flex items-start gap-2 border-b border-border px-3 py-3.5 last:border-b-0 sm:gap-3 sm:px-4",
                    judgedOk
                      ? "bg-secondary/25 shadow-[inset_3px_0_0_0_var(--caramel-deep)]"
                      : "bg-card",
                  )}
                >
                  <span className="mt-0.5 flex w-6 shrink-0 items-center justify-center">
                    {judgedOk ? (
                      <Check className="h-4 w-4 text-caramel-deep" aria-label="Correct judgment" />
                    ) : (
                      <X className="h-4 w-4 text-taupe" aria-label="Incorrect judgment" />
                    )}
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed [overflow-wrap:anywhere]">
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
                    {result.userMarked ? (de ? "Richtig" : "True") : "—"}
                  </span>
                  <span className="w-16 shrink-0 text-center text-xs font-semibold sm:w-20">
                    {result.isTrue ? (de ? "Richtig" : "True") : de ? "Falsch" : "False"}
                  </span>
                  <span
                    className={cn(
                      "w-16 shrink-0 text-right font-mono text-sm font-bold tabular-nums sm:w-20",
                      delta !== 0 ? "text-caramel-deep" : "text-muted-foreground",
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

      <aside className="w-full shrink-0 lg:sticky lg:top-20 lg:w-[min(100%,28rem)] xl:w-[34rem] 2xl:w-[38rem]">
        <div className="flex flex-col rounded-2xl border border-border bg-card shadow-sm lg:h-full lg:max-h-[calc(100vh-5rem)] lg:overflow-hidden">
          <div className="border-b border-border px-5 py-3.5">
            <p className="font-display text-sm font-semibold">
              {de ? `Erklärungen · Aufgabe ${q.index}` : `Explanations · Task ${q.index}`}
            </p>
            <p className="mt-0.5 text-xs tabular-nums text-muted-foreground">
              {current.statementCorrect}/{current.statementCount}{" "}
              {de ? "richtig" : "correct"} · {formatQuestionTime(current.seconds)}
            </p>
          </div>
          <div className="min-h-0 flex-1 space-y-5 px-5 py-5 sm:px-7 sm:py-6 lg:overflow-y-auto lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:w-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-border">
            {q.solutionOverview ? (
              <ExamSolutionOverview text={q.solutionOverview} subject={q.subject} />
            ) : null}
            {q.statements.map((s, si) => {
              const result = current.statements[si]!;
              const delta = deltas[si] ?? 0;
              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-border bg-secondary/20 p-4 sm:p-5"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-taupe">
                      {String.fromCharCode(65 + si)} ·{" "}
                      {result.isTrue ? (de ? "Richtig" : "True") : de ? "Falsch" : "False"}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs font-bold tabular-nums",
                        delta !== 0 ? "text-caramel-deep" : "text-muted-foreground",
                      )}
                    >
                      {formatDelta(delta)} {de ? "Pkt." : "pts"}
                    </span>
                  </div>
                  <ExamExplanationText
                    q={q}
                    text={s.explanation}
                    className="text-sm text-foreground"
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
