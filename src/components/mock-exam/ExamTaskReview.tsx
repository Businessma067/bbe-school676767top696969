import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { subjectLabel } from "@/config/scoring-config";
import {
  ExamExplanationText,
  ExamQuestionBody,
  ExamSolutionOverview,
  ExamStatementText,
} from "@/components/mock-exam/ExamQuestionContent";
import type { TaskAnalyticsRow } from "@/lib/mock-exam-analytics";
import { formatQuestionTime } from "@/lib/mock-exam-session";
import { getWi2Rates, statementPointDelta } from "@/lib/scoring";
import { cn } from "@/lib/utils";

function formatDelta(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
}

export function ReviewViewToggle({
  showTaskReview,
  onShowResults,
  onShowTasks,
  de,
  tasksAnchor,
}: {
  showTaskReview: boolean;
  onShowResults: () => void;
  onShowTasks: () => void;
  de: boolean;
  /** Optional hit target for the How it works walkthrough. */
  tasksAnchor?: string;
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
        data-d={tasksAnchor}
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

export function TaskReviewWorkspace({
  tasks,
  currentIndex,
  onNavigate,
  onBackToResults,
  locale = "en",
  explanationAnchors = false,
}: {
  tasks: TaskAnalyticsRow[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onBackToResults: () => void;
  locale?: "en" | "de";
  /** Mark the explanation scroller so the walkthrough can read it. */
  explanationAnchors?: boolean;
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

          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <div className="min-w-[36rem]">
              <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2 text-xs text-muted-foreground">
                <span className="w-6 shrink-0">#</span>
                <span className="min-w-0 flex-1">{de ? "Aussage" : "Statement"}</span>
                <span className="w-16 shrink-0 text-center sm:w-20">{de ? "Deine" : "Yours"}</span>
                <span className="w-16 shrink-0 text-center sm:w-20">{de ? "Schlüssel" : "Key"}</span>
                <span className="w-16 shrink-0 text-right sm:w-20">{de ? "Punkte" : "Points"}</span>
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
                    <p className="min-w-0 flex-1 text-sm leading-relaxed break-words">
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
      </div>

      <aside className="w-full shrink-0 lg:sticky lg:top-20 lg:w-[min(100%,22rem)] xl:w-[26rem] 2xl:w-[28rem]">
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
          <div
            data-d={explanationAnchors ? "expl-scroll" : undefined}
            className={cn(
              "min-h-0 flex-1 space-y-5 px-5 py-5 sm:px-7 sm:py-6 lg:overflow-y-auto lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:w-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-border",
              explanationAnchors && "max-lg:max-h-[70dvh] max-lg:overflow-y-auto",
            )}
          >
            {q.solutionOverview ? (
              <ExamSolutionOverview text={q.solutionOverview} subject={q.subject} />
            ) : null}
            {q.statements.map((s, si) => {
              const result = current.statements[si]!;
              const delta = deltas[si] ?? 0;
              return (
                <div
                  key={s.id}
                  data-d={explanationAnchors ? `prose${si}` : undefined}
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
