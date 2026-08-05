import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Flag, PanelRightClose, PanelRightOpen, PenLine, Timer } from "lucide-react";
import { SUBJECT_META } from "@/config/scoring-config";
import { buildExamQuestions, getExamById } from "@/lib/mock-exams";
import {
  answersStorageKey,
  clearSession,
  createFreshSession,
  EXAM_SECONDS,
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

  const questions = useMemo(() => buildExamQuestions(examId), [examId]);
  const exam = getExamById(examId);
  const questionIds = useMemo(() => questions.map((q) => q.id), [questions]);

  const [session, setSession] = useState<MockExamSession | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [phase, setPhase] = useState<Phase>("exam");
  const [annotationMode, setAnnotationMode] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [saveError, setSaveError] = useState<string | null>(null);
  const submitted = useRef(false);
  const remoteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sessionRef = useRef(session);
  sessionRef.current = session;

  // Hydrate from localStorage (+ remote if newer / missing local)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const fresh = createFreshSession(examId, timed, questionIds);
      const local = loadSession(examId);
      // Prefer local same timed mode; ignore incompatible sittings
      const localOk = local && local.timed === timed ? local : null;
      let remote: MockExamSession | null = null;
      try {
        remote = await fetchInProgressMockSession(examId);
        if (remote && remote.timed !== timed) remote = null;
        // Fill missing answer keys from question set
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
      // Ensure all question keys exist
      merged.answers = { ...fresh.answers, ...merged.answers };
      if (!merged.visited.includes(questions[merged.currentIndex]?.id ?? "")) {
        const id = questions[merged.currentIndex]?.id;
        if (id) merged.visited = [...new Set([...merged.visited, id])];
      }
      setSession(merged);
      setHydrated(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [examId, timed, questionIds, questions]);

  // Local auto-save on every session change
  useEffect(() => {
    if (!hydrated || !session) return;
    saveSession(session);
  }, [session, hydrated]);

  // Debounced remote auto-save
  useEffect(() => {
    if (!hydrated || !session) return;
    if (remoteTimer.current) clearTimeout(remoteTimer.current);
    remoteTimer.current = setTimeout(() => {
      void upsertMockExamProgress({
        examId,
        examTitle: exam?.title ?? examId,
        session,
      }).then(() => setSaveError(null)).catch(() => {
        setSaveError("Could not sync progress — your work is still saved on this device.");
      });
    }, 1200);
    return () => {
      if (remoteTimer.current) clearTimeout(remoteTimer.current);
    };
  }, [session, hydrated, examId, exam?.title]);

  // Timer
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
      const secondsTaken =
        elapsed ??
        (s.timed && s.secondsLeft != null ? EXAM_SECONDS - s.secondsLeft : null);
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

  // Auto-submit when timer hits 0
  useEffect(() => {
    if (!session?.timed || session.secondsLeft !== 0 || submitted.current) return;
    submit(EXAM_SECONDS);
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
    },
    [patch, questions],
  );

  const toggleMark = useCallback(
    (questionNumber: number, statementIndex: number) => {
      const q = questions[questionNumber - 1];
      if (!q) return;
      patch((prev) => {
        const marks = [...(prev.answers[q.id] ?? [false, false, false, false, false])];
        marks[statementIndex] = !marks[statementIndex];
        const visited = prev.visited.includes(q.id) ? prev.visited : [...prev.visited, q.id];
        return {
          ...prev,
          answers: { ...prev.answers, [q.id]: marks },
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

  // Keyboard: arrows + F for flag (when not typing)
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, session, questions.length, goTo, toggleFlag]);

  const flaggedSet = useMemo(
    () => new Set(session?.flagged ?? []),
    [session?.flagged],
  );
  const visitedSet = useMemo(
    () => new Set(session?.visited ?? []),
    [session?.visited],
  );

  const marksByNumber = useMemo(() => {
    const map: Record<number, boolean[]> = {};
    if (!session) return map;
    for (const q of questions) {
      map[q.index] = session.answers[q.id] ?? [false, false, false, false, false];
    }
    return map;
  }, [questions, session]);

  const flaggedNumbers = useMemo(() => {
    const set = new Set<number>();
    for (const q of questions) {
      if (flaggedSet.has(q.id)) set.add(q.index);
    }
    return set;
  }, [questions, flaggedSet]);

  if (!hydrated || !session) {
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
  const secondsLeft = session.secondsLeft ?? EXAM_SECONDS;
  const timerWarn =
    session.timed && secondsLeft < 5 * 60
      ? "critical"
      : session.timed && secondsLeft < 15 * 60
        ? "warn"
        : null;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
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
                {timerWarn === "warn" && (
                  <span className="ml-1 hidden text-[10px] font-sans font-medium uppercase tracking-wide sm:inline">
                    15 min
                  </span>
                )}
                {timerWarn === "critical" && (
                  <span className="ml-1 hidden text-[10px] font-sans font-medium uppercase tracking-wide sm:inline">
                    5 min
                  </span>
                )}
              </span>
            )}
            <button
              type="button"
              onClick={() => setPhase("review")}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
            >
              Review
            </button>
            <button
              type="button"
              onClick={() => setAnnotationMode((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors",
                annotationMode
                  ? "border-caramel-deep bg-caramel-deep text-white"
                  : "border-border bg-card hover:bg-secondary",
              )}
              aria-pressed={annotationMode}
            >
              <PenLine className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Annotate</span>
            </button>
            <button
              type="button"
              onClick={() => setToolsOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary lg:hidden"
              aria-expanded={toolsOpen}
            >
              {toolsOpen ? <PanelRightClose className="h-3.5 w-3.5" /> : <PanelRightOpen className="h-3.5 w-3.5" />}
              Tools
            </button>
          </div>
        </div>
        {saveError && (
          <div className="border-t border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-center text-xs text-amber-900 dark:text-amber-200">
            {saveError}
          </div>
        )}
      </header>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:gap-5">
        {/* LEFT — question info + palette */}
        <aside className="w-full shrink-0 space-y-4 lg:w-[220px] xl:w-[240px]">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Question
            </div>
            <div className="mt-1 font-display text-2xl font-bold tabular-nums">{q.index}</div>
            <div className={`mt-2 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${meta.badgeClass}`}>
              {meta.label}
            </div>
            <button
              type="button"
              onClick={toggleFlag}
              aria-pressed={isFlagged}
              className={cn(
                "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold transition-colors",
                isFlagged
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-border bg-background hover:bg-secondary",
              )}
            >
              <Flag className={cn("h-3.5 w-3.5", isFlagged && "fill-current")} />
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

        {/* CENTER — stimulus only */}
        <main className="relative min-w-0 flex-1">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
              annotationMode && "select-none",
            )}
          >
            <div className="relative p-5 sm:p-7">
              <p className="font-display text-lg font-semibold leading-relaxed sm:text-xl">
                {q.stem}
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border bg-secondary/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-taupe">
                  Statements
                </div>
                {q.statements.map((s, i) => (
                  <div
                    key={s.id}
                    className="border-b border-border px-4 py-3.5 last:border-b-0"
                  >
                    <p className="text-sm leading-relaxed sm:text-[15px]">
                      <span className="mr-2 font-semibold text-taupe">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Mark answers on the Answer Sheet.{" "}
                {isQuestionAnswered(session.answers[q.id])
                  ? "This question has marks on the sheet."
                  : "No marks yet for this question."}
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

        {/* RIGHT — answer sheet + notes */}
        <aside
          className={cn(
            "w-full shrink-0 space-y-4 lg:w-[300px] xl:w-[340px]",
            !toolsOpen && "hidden lg:block",
          )}
        >
          <div className="lg:sticky lg:top-[4.5rem] lg:max-h-[calc(100vh-5rem)] lg:space-y-4 lg:overflow-y-auto">
            <ExamAnswerSheet
              marksByNumber={marksByNumber}
              questionCount={questions.length}
              currentQuestion={q.index}
              flaggedNumbers={flaggedNumbers}
              onToggle={toggleMark}
              onNavigate={(n) => goTo(n - 1)}
            />
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <ExamNotesPanel
                value={session.notes[q.id] ?? ""}
                onChange={setNotes}
                questionLabel={`Question ${q.index}`}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
