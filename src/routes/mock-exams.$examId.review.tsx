import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SCORING_CONFIG, SUBJECT_META, type SubjectKey } from "@/config/scoring-config";
import { buildExamQuestions, getExamById, SECTION_TOTALS } from "@/lib/mock-exams";
import { calculateExamScore, calculateTaskScore } from "@/lib/scoring";
import { answersStorageKey } from "./mock-exams.$examId.take";
import { recordMockAttempt } from "@/lib/user-progress";
import { Check, ChevronDown, Clock, Target, TrendingUp, X } from "lucide-react";

export const Route = createFileRoute("/mock-exams/$examId/review")({
  head: () => ({
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
    return raw ? (JSON.parse(raw) as { answers: Record<string, boolean[]>; timed: boolean; secondsTaken: number | null }) : null;
  } catch {
    return null;
  }
}

function fmtDuration(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function ReviewExamPage() {
  const { examId } = Route.useParams();
  const exam = getExamById(examId);
  const questions = useMemo(() => buildExamQuestions(examId), [examId]);
  const attempt = useMemo(() => readAttempt(examId), [examId]);
  const [open, setOpen] = useState<string | null>(null);

  const marked = useMemo(() => {
    // fall back to deterministic mock ticks when no stored attempt exists
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
    () => calculateExamScore(marked.map((m) => ({ maxPoints: m.question.maxPoints, statements: m.statements }))),
    [marked],
  );

  const perSubject = useMemo(() => {
    const acc: Record<SubjectKey, number> = { economics: 0, math: 0, english: 0 };
    marked.forEach((m, i) => {
      acc[m.question.subject] += taskScores[i];
    });
    return acc;
  }, [marked, taskScores]);

  const pct = Math.round((total / SCORING_CONFIG.examTotalPoints) * 100);

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

  // Persist the attempt to the user's account once per finished exam.
  const saved = useRef(false);
  useEffect(() => {
    if (saved.current || !attempt) return;
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
      pointsTotal: SCORING_CONFIG.examTotalPoints,
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
  }, [attempt, exam, examId, perSubject, statementTotals, total]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              {exam?.title ?? "Mock Exam"} — Review
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Scored with the official wi2 method.
            </p>
          </div>
          <Link
            to="/mock-exams"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold transition-all hover:bg-secondary"
          >
            ← All mock exams
          </Link>
        </div>

        {/* Summary cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-taupe">
              <Target className="h-3.5 w-3.5" /> Overall score
            </div>
            <div className="font-display text-3xl font-bold text-caramel-deep">
              {total.toFixed(1)} / {SCORING_CONFIG.examTotalPoints}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{pct}%</div>
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
              <TrendingUp className="h-3.5 w-3.5" /> Tasks scored
            </div>
            <div className="font-display text-3xl font-bold">
              {taskScores.filter((s) => s > 0).length} / {taskScores.length}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Tasks above zero</div>
          </div>
        </div>

        {/* Subject breakdown */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 font-display text-lg font-semibold">By subject</h2>
          <div className="space-y-4">
            {(["economics", "english", "math"] as const).map((s) => {
              const sm = SUBJECT_META[s];
              const earned = perSubject[s];
              const max = SECTION_TOTALS[s];
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
                      style={{ width: `${Math.min(100, (earned / max) * 100)}%`, backgroundColor: sm.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Per-question breakdown */}
        <h2 className="mb-4 font-display text-xl font-semibold">Question breakdown</h2>
        <div className="space-y-2">
          {marked.map((m, i) => {
            const q = m.question;
            const sm = SUBJECT_META[q.subject];
            const score = calculateTaskScore(q.maxPoints, m.statements);
            const isOpen = open === q.id;
            return (
              <div key={q.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : q.id)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-secondary/40"
                >
                  <span className="w-7 shrink-0 font-mono text-sm text-taupe">{q.index}</span>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${sm.badgeClass}`}
                  >
                    {sm.label}
                  </span>
                  <span className="flex-1 truncate text-sm">{q.stem}</span>
                  <span className="shrink-0 font-mono text-sm font-semibold tabular-nums">
                    {score.toFixed(1)} / {q.maxPoints.toFixed(1)} pts
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-taupe transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4">
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{q.stem}</p>
                    <div className="space-y-3">
                      {q.statements.map((s, si) => {
                        const userMarked = m.statements[si].userMarked;
                        const correct = userMarked === s.isTrue;
                        return (
                          <div
                            key={s.id}
                            className={`rounded-lg border p-3 ${
                              correct ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0">
                                {correct ? (
                                  <Check className="h-4 w-4 text-emerald-600" />
                                ) : (
                                  <X className="h-4 w-4 text-red-600" />
                                )}
                              </span>
                              <div className="flex-1">
                                <p className="text-sm">
                                  <span className="mr-2 font-semibold text-taupe">
                                    {String.fromCharCode(65 + si)}.
                                  </span>
                                  {s.text}
                                </p>
                                <p className="mt-1.5 text-xs text-taupe">
                                  Your answer: <strong>{userMarked ? "True" : "—"}</strong> · Correct answer:{" "}
                                  <strong>{s.isTrue ? "True" : "False"}</strong>
                                </p>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                  {s.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
