import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FileSpreadsheet, Flag, StickyNote, PenLine, Timer, X } from "lucide-react";
import { SUBJECT_META } from "@/config/scoring-config";
import type { ExamQuestion, MockExamSummary } from "@/lib/mock-exams";
import { resolveExam } from "@/lib/custom-mock-builder/resolve-exam";
import {
  answersStorageKey,
  clearSession,
  createFreshSession,
  formatExamTime,
  isQuestionAnswered,
  loadSession,
  saveSession,
  type AnnotationStroke,
  type MockExamSession,
} from "@/lib/mock-exam-session";
import {
  fetchInProgressMockSession,
  upsertMockExamProgress,
} from "@/lib/user-progress";
import { AnnotationLayer } from "@/components/mock-exam/AnnotationLayer";
import { ExamAnswerSheet } from "@/components/mock-exam/ExamAnswerSheet";
import { ExamNotesPanel } from "@/components/mock-exam/ExamNotesPanel";
import { ExamReviewScreen } from "@/components/mock-exam/ExamReviewScreen";
import { QuestionPalette } from "@/components/mock-exam/QuestionPalette";
import {
  seedFiredTimerWarnings,
  TimerWarningPlaque,
} from "@/components/mock-exam/TimerWarningPlaque";
import { AuthNav } from "@/components/AuthNav";
import { CaseContextRich } from "@/components/CaseContextRich";
import { scrubStatementHints } from "@/lib/case-context";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mock-exams/$examId/take")({
  validateSearch: (search: Record<string, unknown>) => ({
    timed: search.timed === true || search.timed === "true",
  }),
  head: () => ({
    meta: [
      { title: "Mock Exam — In Progress — BBE School" },
      { name: "description", content: "Take a full-length WU BBE mock exam." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TakeExamPage,
});

/** @deprecated use answersStorageKey from mock-exam-session — kept for review import compat */
export { answersStorageKey };

type Phase = "exam" | "review";
type RightPanel = "sheet" | "notes" | null;

function mergeSessions(
  local: MockExamSession | null,
  remote: MockExamSession | null,
  fresh: MockExamSession,
): MockExamSession {
  const candidates = [local, remote].filter(Boolean) as MockExamSession[];
  if (candidates.length === 0) return fresh;
  return candidates.sort((a, b) => b.updatedAt - a.updatedAt)[0];
}

function TakeExamPage() {
  const { examId } = Route.useParams();
  const { timed } = Route.useSearch();
  const navigate = useNavigate();

  const [exam, setExam] = useState<MockExamSummary | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [examSeconds, setExamSeconds] = useState(2 * 60 * 60);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [contentReady, setContentReady] = useState(false);

  const questionIds = useMemo(() => questions.map((q) => q.id), [questions]);
  const examSecondsRef = useRef(examSeconds);
  examSecondsRef.current = examSeconds;

  const [session, setSession] = useState<MockExamSession | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [phase, setPhase] = useState<Phase>("exam");
  const [annotationMode, setAnnotationMode] = useState(false);
  const [rightPanel, setRightPanel] = useState<RightPanel>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const submitted = useRef(false);
  const remoteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sessionRef = useRef(session);
  sessionRef.current = session;
  const firedWarningsRef = useRef<Set<number>>(new Set());
  const warningsSeeded = useRef(false);

  useEffect(() => {
    let cancelled = false;
    setContentReady(false);
    setHydrated(false);
    setSession(null);
    setLoadError(null);
    warningsSeeded.current = false;
    submitted.current = false;
    (async () => {
      const resolved = await resolveExam(examId);
      if (cancelled) return;
      if (!resolved) {
        setLoadError("This exam could not be loaded. It may have been deleted.");
        setContentReady(true);
        return;
      }
      setExam(resolved.summary);
      setQuestions(resolved.questions);
      setExamSeconds(resolved.durationSeconds);
      setContentReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [examId]);

  useEffect(() => {
    if (!contentReady || questions.length === 0 || loadError) return;
    let cancelled = false;
    (async () => {
      const fresh = createFreshSession(examId, timed, questionIds, examSeconds);
      const local = loadSession(examId);
      const localOk = local && local.timed === timed ? local : null;
      let remote: MockExamSession | null = null;
      try {
        remote = await fetchInProgressMockSession(examId);
        if (remote && remote.timed !== timed) remote = null;
        if (remote) {
          remote = {
            ...remote,
            answers: {
              ...fresh.answers,
              ...remote.answers,
            },
          };
        }
      } catch {
        /* offline */
      }
      if (cancelled) return;
      const merged = mergeSessions(localOk, remote, fresh);
      merged.answers = { ...fresh.answers, ...merged.answers };
      if (!merged.visited.includes(questions[merged.currentIndex]?.id ?? "")) {
        const id = questions[merged.currentIndex]?.id;
        if (id) merged.visited = [...new Set([...merged.visited, id])];
      }
      setSession(merged);
      setHydrated(true);
      if (merged.timed && merged.secondsLeft != null) {
        firedWarningsRef.current = seedFiredTimerWarnings(merged.secondsLeft);
        warningsSeeded.current = true;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [contentReady, examId, timed, questionIds, questions, examSeconds, loadError]);

  // If a fresh timed session starts at full duration, allow all thresholds later.
  useEffect(() => {
    if (!hydrated || !session?.timed || warningsSeeded.current) return;
    if (session.secondsLeft != null) {
      firedWarningsRef.current = seedFiredTimerWarnings(session.secondsLeft);
      warningsSeeded.current = true;
    }
  }, [hydrated, session?.timed, session?.secondsLeft]);

  useEffect(() => {
    if (!hydrated || !session) return;
    saveSession(session);
  }, [session, hydrated]);

  useEffect(() => {
    if (!hydrated || !session) return;
    if (remoteTimer.current) clearTimeout(remoteTimer.current);
    remoteTimer.current = setTimeout(() => {
      void upsertMockExamProgress({
        examId,
        examTitle: exam?.title ?? examId,
        session,
        pointsTotal: exam?.pointsTotal,
      })
        .then(() => setSaveError(null))
        .catch(() => {
          setSaveError("Could not sync progress — your work is still saved on this device.");
        });
    }, 1200);
    return () => {
      if (remoteTimer.current) clearTimeout(remoteTimer.current);
    };
  }, [session, hydrated, examId, exam?.title]);

  useEffect(() => {
    if (!hydrated || !session?.timed || phase !== "exam") return;
    const id = setInterval(() => {
      setSession((prev) => {
        if (!prev || prev.secondsLeft == null) return prev;
        if (prev.secondsLeft <= 1) {
          return { ...prev, secondsLeft: 0 };
        }
        return { ...prev, secondsLeft: prev.secondsLeft - 1 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [hydrated, session?.timed, phase]);

  const submit = useCallback(
    (elapsed?: number) => {
      if (submitted.current || !sessionRef.current) return;
      submitted.current = true;
      const s = sessionRef.current;
      const totalSeconds = examSecondsRef.current;
      const secondsTaken =
        elapsed ??
        (s.timed && s.secondsLeft != null ? totalSeconds - s.secondsLeft : null);
      try {
        sessionStorage.setItem(
          answersStorageKey(examId),
          JSON.stringify({
            answers: s.answers,
            timed: s.timed,
            secondsTaken,
          }),
        );
      } catch {
        /* review falls back */
      }
      clearSession(examId);
      navigate({ to: "/mock-exams/$examId/review", params: { examId } });
    },
    [examId, navigate],
  );

  useEffect(() => {
    if (!session?.timed || session.secondsLeft !== 0 || submitted.current) return;
    submit(examSecondsRef.current);
  }, [session?.secondsLeft, session?.timed, submit]);

  const patch = useCallback((updater: (prev: MockExamSession) => MockExamSession) => {
    setSession((prev) => (prev ? updater(prev) : prev));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      patch((prev) => {
        const id = questions[index]?.id;
        const visited = id && !prev.visited.includes(id) ? [...prev.visited, id] : prev.visited;
        return { ...prev, currentIndex: index, visited };
      });
      setPhase("exam");
      setAnnotationMode(false);
    },
    [patch, questions],
  );

  const toggleMark = useCallback(
    (questionNumber: number, statementIndex: number) => {
      const qItem = questions[questionNumber - 1];
      if (!qItem) return;
      patch((prev) => {
        const marks = [...(prev.answers[qItem.id] ?? [false, false, false, false, false])];
        marks[statementIndex] = !marks[statementIndex];
        const visited = prev.visited.includes(qItem.id)
          ? prev.visited
          : [...prev.visited, qItem.id];
        return {
          ...prev,
          answers: { ...prev.answers, [qItem.id]: marks },
          visited,
        };
      });
    },
    [patch, questions],
  );

  const toggleFlag = useCallback(() => {
    if (!session) return;
    const id = questions[session.currentIndex]?.id;
    if (!id) return;
    patch((prev) => {
      const has = prev.flagged.includes(id);
      return {
        ...prev,
        flagged: has ? prev.flagged.filter((x) => x !== id) : [...prev.flagged, id],
      };
    });
  }, [patch, questions, session]);

  const setNotes = useCallback(
    (value: string) => {
      if (!session) return;
      const id = questions[session.currentIndex]?.id;
      if (!id) return;
      patch((prev) => ({
        ...prev,
        notes: { ...prev.notes, [id]: value },
      }));
    },
    [patch, questions, session],
  );

  const setAnnotations = useCallback(
    (strokes: AnnotationStroke[]) => {
      if (!session) return;
      const id = questions[session.currentIndex]?.id;
      if (!id) return;
      patch((prev) => ({
        ...prev,
        annotations: { ...prev.annotations, [id]: strokes },
      }));
    },
    [patch, questions, session],
  );

  const openPanel = useCallback((panel: Exclude<RightPanel, null>) => {
    setAnnotationMode(false);
    setRightPanel(panel);
  }, []);

  const toggleDraw = useCallback(() => {
    setRightPanel(null);
    setAnnotationMode((v) => !v);
  }, []);

  useEffect(() => {
    if (phase !== "exam" || !session) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT" || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goTo(Math.min(questions.length - 1, session.currentIndex + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(Math.max(0, session.currentIndex - 1));
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFlag();
      } else if (e.key === "Escape" && annotationMode) {
        e.preventDefault();
        setAnnotationMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, session, questions.length, goTo, toggleFlag, annotationMode]);

  const flaggedSet = useMemo(() => new Set(session?.flagged ?? []), [session?.flagged]);
  const visitedSet = useMemo(() => new Set(session?.visited ?? []), [session?.visited]);

  const marksByNumber = useMemo(() => {
    const map: Record<number, boolean[]> = {};
    if (!session) return map;
    for (const item of questions) {
      map[item.index] = session.answers[item.id] ?? [false, false, false, false, false];
    }
    return map;
  }, [questions, session]);

  const flaggedNumbers = useMemo(() => {
    const set = new Set<number>();
    for (const item of questions) {
      if (flaggedSet.has(item.id)) set.add(item.index);
    }
    return set;
  }, [questions, flaggedSet]);

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 font-sans text-foreground">
        <p className="text-sm text-muted-foreground">{loadError}</p>
        <Link
          to="/products/custom-mock-builder"
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
        >
          ← Custom Mock Builder
        </Link>
      </div>
    );
  }

  if (!hydrated || !session || questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background font-sans text-muted-foreground">
        Loading exam…
      </div>
    );
  }

  if (phase === "review") {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ExamReviewScreen
          questions={questions}
          answers={session.answers}
          flagged={flaggedSet}
          onJump={goTo}
          onBack={() => setPhase("exam")}
          onSubmit={() => submit()}
        />
      </div>
    );
  }

  const q = questions[session.currentIndex];
  const meta = SUBJECT_META[q.subject];
  const isLast = session.currentIndex === questions.length - 1;
  const isFlagged = flaggedSet.has(q.id);
  const secondsLeft = session.secondsLeft ?? examSeconds;
  const timerWarn =
    session.timed && secondsLeft < 5 * 60
      ? "critical"
      : session.timed && secondsLeft < 15 * 60
        ? "warn"
        : null;
  const hasNotes = Boolean(session.notes[q.id]?.trim());
  const hasInk = (session.annotations[q.id]?.length ?? 0) > 0;
  const answered = isQuestionAnswered(session.answers[q.id]);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      {session.timed && (
        <TimerWarningPlaque
          timed={session.timed}
          secondsLeft={session.secondsLeft}
          firedRef={firedWarningsRef}
        />
      )}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <h1 className="truncate font-display text-base font-bold">
              {exam?.title ?? "Mock Exam"}
            </h1>
            <span
              className={`hidden rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest sm:inline ${meta.badgeClass}`}
            >
              {meta.label}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-sm text-muted-foreground tabular-nums">
              Question {session.currentIndex + 1} / {questions.length}
            </span>
            {session.timed && (
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
                aria-live={timerWarn === "critical" ? "assertive" : "polite"}
                aria-label={`Time remaining ${formatExamTime(secondsLeft)}`}
              >
                <Timer className="h-3.5 w-3.5 shrink-0" />
                {formatExamTime(secondsLeft)}
              </span>
            )}
            <button
              type="button"
              onClick={() => setPhase("review")}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
            >
              Review
            </button>
            <AuthNav />
          </div>
        </div>
        {saveError && (
          <div className="border-t border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-center text-xs text-amber-900 dark:text-amber-200">
            {saveError}
          </div>
        )}
        {annotationMode && (
          <div className="flex items-center justify-center gap-3 border-t border-caramel-deep/30 bg-caramel-deep/10 px-4 py-1.5 text-xs font-medium text-caramel-deep">
            Draw mode on — drag to annotate. Esc or Draw again to exit.
            <button
              type="button"
              onClick={() => setAnnotationMode(false)}
              className="inline-flex items-center gap-1 rounded border border-caramel-deep/40 px-2 py-0.5 font-semibold hover:bg-caramel-deep/15"
            >
              <X className="h-3 w-3" /> Exit
            </button>
          </div>
        )}
      </header>

      <div className="mx-auto flex w-full max-w-[1200px] flex-1 gap-4 px-4 py-4 sm:px-6 lg:gap-5">
        <aside className="hidden w-[200px] shrink-0 space-y-4 xl:block xl:w-[220px]">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Question
            </div>
            <div className="mt-1 font-display text-2xl font-bold tabular-nums">{q.index}</div>
            <div
              className={`mt-2 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${meta.badgeClass}`}
            >
              {meta.label}
            </div>
            <button
              type="button"
              onClick={toggleFlag}
              aria-pressed={isFlagged}
              className={cn(
                "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold transition-colors",
                isFlagged
                  ? "border-red-600/40 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200"
                  : "border-border bg-background hover:bg-secondary",
              )}
            >
              <Flag
                className={cn(
                  "h-3.5 w-3.5",
                  isFlagged ? "fill-red-600 text-red-700 dark:fill-red-400 dark:text-red-300" : "text-taupe",
                )}
              />
              {isFlagged ? "Flagged" : "Flag for review"}
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Question palette
            </h2>
            <QuestionPalette
              questions={questions}
              currentIndex={session.currentIndex}
              answers={session.answers}
              flagged={flaggedSet}
              visited={visitedSet}
              onNavigate={goTo}
              compact
            />
          </div>
        </aside>

        <main className="relative min-w-0 flex-1">
          <div className="mb-4 rounded-2xl border border-border bg-card p-3 shadow-sm xl:hidden">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Q{q.index} · {meta.label}
              </span>
              <button
                type="button"
                onClick={toggleFlag}
                aria-pressed={isFlagged}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold",
                  isFlagged
                    ? "border-red-600/40 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200"
                    : "border-border bg-background hover:bg-secondary",
                )}
              >
                <Flag
                  className={cn(
                    "h-3 w-3",
                    isFlagged ? "fill-red-600 text-red-700 dark:fill-red-400 dark:text-red-300" : "text-taupe",
                  )}
                />
                Flag
              </button>
            </div>
            <QuestionPalette
              questions={questions}
              currentIndex={session.currentIndex}
              answers={session.answers}
              flagged={flaggedSet}
              visited={visitedSet}
              onNavigate={goTo}
              compact
            />
          </div>

          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
              annotationMode && "select-none ring-2 ring-caramel-deep/40",
            )}
          >
            <div className="relative p-5 sm:p-8 lg:p-10">
              <CaseContextRich content={q.stem} emphasized className="text-foreground" />

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border bg-secondary/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-taupe">
                  Statements
                </div>
                {q.statements.map((s, i) => (
                  <div
                    key={s.id}
                    className="border-b border-border px-4 py-4 last:border-b-0 sm:px-5"
                  >
                    <p className="text-sm leading-relaxed sm:text-[15px] lg:text-base">
                      <span className="mr-2 font-semibold text-taupe">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {scrubStatementHints(s.text)}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Use <strong>Answer Sheet</strong> on the right to mark True.{" "}
                {answered ? "This question has marks on the sheet." : "No marks yet."}
              </p>
            </div>

            <AnnotationLayer
              key={q.id}
              enabled={annotationMode}
              strokes={session.annotations[q.id] ?? []}
              onChange={setAnnotations}
            />
          </div>

          <nav className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={session.currentIndex === 0}
              onClick={() => goTo(session.currentIndex - 1)}
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {isLast ? (
              <button
                type="button"
                onClick={() => setPhase("review")}
                className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Review & submit
              </button>
            ) : (
              <button
                type="button"
                onClick={() => goTo(session.currentIndex + 1)}
                className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                Next
              </button>
            )}
          </nav>
        </main>

        <aside className="sticky top-[4.5rem] flex h-fit w-14 shrink-0 flex-col gap-2 sm:w-16">
          <ToolRailButton
            label="Answer Sheet"
            short="Sheet"
            active={rightPanel === "sheet"}
            badge={answered}
            onClick={() => (rightPanel === "sheet" ? setRightPanel(null) : openPanel("sheet"))}
          >
            <FileSpreadsheet className="h-5 w-5" />
          </ToolRailButton>
          <ToolRailButton
            label="Notes"
            short="Notes"
            active={rightPanel === "notes"}
            badge={hasNotes}
            onClick={() => (rightPanel === "notes" ? setRightPanel(null) : openPanel("notes"))}
          >
            <StickyNote className="h-5 w-5" />
          </ToolRailButton>
          <ToolRailButton
            label="Draw"
            short="Draw"
            active={annotationMode}
            badge={hasInk}
            onClick={toggleDraw}
          >
            <PenLine className="h-5 w-5" />
          </ToolRailButton>
        </aside>
      </div>

      <Sheet open={rightPanel === "sheet"} onOpenChange={(o) => setRightPanel(o ? "sheet" : null)}>
        <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
          <SheetHeader className="pr-8 text-left">
            <SheetTitle className="font-display">Answer Sheet</SheetTitle>
            <SheetDescription>
              Mark ✕ for True. This is the only place answers are recorded.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 pb-8">
            <ExamAnswerSheet
              marksByNumber={marksByNumber}
              questionCount={questions.length}
              currentQuestion={q.index}
              flaggedNumbers={flaggedNumbers}
              onToggle={toggleMark}
              onNavigate={(n) => {
                goTo(n - 1);
              }}
            />
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={rightPanel === "notes"} onOpenChange={(o) => setRightPanel(o ? "notes" : null)}>
        <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
          <SheetHeader className="pr-8 text-left">
            <SheetTitle className="font-display">Notes</SheetTitle>
            <SheetDescription>
              Typed notes for question {q.index}. Independent from drawings.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 flex min-h-0 flex-1 flex-col pb-6">
            <ExamNotesPanel
              value={session.notes[q.id] ?? ""}
              onChange={setNotes}
              questionLabel={`Question ${q.index}`}
              className="min-h-[280px] flex-1"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function ToolRailButton({
  children,
  label,
  short,
  active,
  badge,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  short: string;
  active?: boolean;
  badge?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-1 rounded-xl border px-1.5 py-2.5 text-[10px] font-semibold transition-colors",
        active
          ? "border-caramel-deep bg-caramel-deep text-white shadow-sm"
          : "border-border bg-card text-foreground hover:bg-secondary",
      )}
    >
      {children}
      <span className="leading-none">{short}</span>
      {badge && (
        <span
          className={cn(
            "absolute right-1 top-1 h-1.5 w-1.5 rounded-full",
            active ? "bg-white" : "bg-caramel-deep",
          )}
          aria-hidden
        />
      )}
    </button>
  );
}
