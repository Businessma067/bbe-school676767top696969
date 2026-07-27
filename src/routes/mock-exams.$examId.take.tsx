import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SUBJECT_META } from "@/config/scoring-config";
import { buildExamQuestions, getExamById } from "@/lib/mock-exams";
import { Timer } from "lucide-react";

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

const EXAM_SECONDS = 2 * 60 * 60;

export function answersStorageKey(examId: string) {
  return `bbe-mock-answers:${examId}`;
}

function formatTime(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function TakeExamPage() {
  const { examId } = Route.useParams();
  const { timed } = Route.useSearch();
  const navigate = useNavigate();

  const questions = useMemo(() => buildExamQuestions(examId), [examId]);
  const exam = getExamById(examId);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean[]>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, [false, false, false, false, false]])),
  );
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const submitted = useRef(false);

  const answeredCount = useMemo(
    () => questions.filter((q) => answers[q.id]?.some(Boolean)).length,
    [questions, answers],
  );

  const submit = useCallback(
    (elapsed?: number) => {
      if (submitted.current) return;
      submitted.current = true;
      try {
        sessionStorage.setItem(
          answersStorageKey(examId),
          JSON.stringify({
            answers,
            timed,
            secondsTaken: elapsed ?? (timed ? EXAM_SECONDS - secondsLeft : null),
          }),
        );
      } catch {
        /* storage unavailable — review falls back to mock answers */
      }
      navigate({ to: "/mock-exams/$examId/review", params: { examId } });
    },
    [answers, examId, navigate, secondsLeft, timed],
  );

  useEffect(() => {
    if (!timed) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          submit(EXAM_SECONDS);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timed, submit]);

  const q = questions[current];
  const meta = SUBJECT_META[q.subject];
  const isLast = current === questions.length - 1;

  const toggle = (i: number) =>
    setAnswers((prev) => {
      const next = [...(prev[q.id] ?? [])];
      next[i] = !next[i];
      return { ...prev, [q.id]: next };
    });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-base font-bold">
              {exam?.title ?? "Mock Exam"}
            </h1>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${meta.badgeClass}`}
            >
              {meta.label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Question {current + 1} of {questions.length}
            </span>
            {timed && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm font-semibold tabular-nums">
                <Timer className="h-3.5 w-3.5 text-caramel-deep" />
                {formatTime(secondsLeft)}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        {/* Navigator */}
        <div className="mb-8 space-y-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
          {(["economics", "english", "math"] as const).map((subject) => {
            const group = questions.filter((x) => x.subject === subject);
            if (group.length === 0) return null;
            const sm = SUBJECT_META[subject];
            return (
              <div key={subject}>
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">
                  <span
                    className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                    style={{ backgroundColor: sm.color }}
                  />
                  {sm.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.map((item) => {
                    const answered = answers[item.id]?.some(Boolean);
                    const isCurrent = item.index - 1 === current;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrent(item.index - 1)}
                        className={`h-8 w-8 rounded-md border text-xs font-semibold transition-all ${
                          answered
                            ? "border-transparent text-white"
                            : "border-border bg-background text-muted-foreground hover:bg-secondary"
                        } ${isCurrent ? "ring-2 ring-offset-2 ring-offset-card" : ""}`}
                        style={{
                          backgroundColor: answered ? sm.color : undefined,
                          ...(isCurrent ? ({ "--tw-ring-color": sm.color } as Record<string, string>) : {}),
                        }}
                      >
                        {item.index}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Question panel */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="font-display text-lg font-semibold leading-relaxed">
            {q.stem}
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-taupe">
              <span>Statement</span>
              <span className="w-12 text-center">True</span>
            </div>
            {q.statements.map((s, i) => (
              <label
                key={s.id}
                className="flex cursor-pointer items-center justify-between gap-4 border-b border-border px-4 py-3 last:border-b-0 transition-colors hover:bg-secondary/30"
              >
                <span className="text-sm leading-relaxed">
                  <span className="mr-2 font-semibold text-taupe">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {s.text}
                </span>
                <span className="flex w-12 justify-center">
                  <input
                    type="checkbox"
                    checked={answers[q.id]?.[i] ?? false}
                    onChange={() => toggle(i)}
                    className="h-5 w-5 cursor-pointer rounded border-border accent-[var(--caramel-deep)]"
                  />
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              disabled={current === 0}
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {isLast ? (
              <button
                type="button"
                onClick={() =>
                  answeredCount < questions.length ? setConfirmOpen(true) : submit()
                }
                className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Submit Exam
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display">Submit exam?</DialogTitle>
            <DialogDescription>
              You have answered {answeredCount} of {questions.length} questions.
              Submit anyway?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setConfirmOpen(false)}
              className="flex-1 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
            >
              Keep working
            </button>
            <button
              type="button"
              onClick={() => submit()}
              className="flex-1 rounded-md bg-caramel-deep px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
