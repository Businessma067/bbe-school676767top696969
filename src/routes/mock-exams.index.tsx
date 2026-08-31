import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SiteHeader } from "@/components/SiteHeader";
import { SCORING_CONFIG } from "@/config/scoring-config";
import {
  MOCK_EXAMS,
  getExamsForTier,
  type MockExamSummary,
  type ProductTier,
} from "@/lib/mock-exams";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import { userOwnsFullCourse } from "@/lib/full-course-access";
import {
  fetchMockAttempts,
  type MockAttempt,
} from "@/lib/user-progress";
import { Clock, FileText, PlayCircle, Timer, Trophy } from "lucide-react";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";

export const Route = createFileRoute("/mock-exams/")({
  head: () => ({
    meta: [
      { title: "Mock Exams — BBE School" },
      {
        name: "description",
        content:
          "Full-length WU BBE mock exams: 34 tasks, 160 points, scored with the official wi2 method.",
      },
      { property: "og:title", content: "Mock Exams — BBE School" },
      {
        property: "og:description",
        content:
          "Full-length WU BBE mock exams: 34 tasks, 160 points, scored with the official wi2 method.",
      },
    ],
  }),
  component: MockExamsPage,
});

function MockExamsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<MockExamSummary | null>(null);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [tier, setTier] = useState<ProductTier | "none" | null>(null);
  const [attempts, setAttempts] = useState<MockAttempt[] | null>(null);
  const [inProgress, setInProgress] = useState<Record<string, { timed: boolean; answerSheet: boolean }>>(
    {},
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [owns, history] = await Promise.all([userOwnsFullCourse(), fetchMockAttempts()]);
      if (cancelled) return;
      // Site lockdown: only allowlisted full-site accounts see mock exams.
      setTier(owns ? "full" : "none");
      setAttempts(history);

      const progress: Record<string, { timed: boolean; answerSheet: boolean }> = {};
      for (const exam of MOCK_EXAMS) {
        const s = loadSession(exam.id);
        if (s) progress[exam.id] = { timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) };
      }
      setInProgress(progress);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const exams = tier === "full" || tier === "lite" ? getExamsForTier(tier) : [];
  const completed = attempts ?? [];
  const bestByExam = new Map<string, MockAttempt>();
  for (const a of completed) {
    const prev = bestByExam.get(a.exam_id);
    if (!prev || a.points_earned > prev.points_earned) bestByExam.set(a.exam_id, a);
  }
  const lockedExams = MOCK_EXAMS.filter((e) => !exams.some((x) => x.id === e.id));

  const start = (timed: boolean) => {
    if (!selected) return;
    clearSession(selected.id);
    setInProgress((prev) => {
      const next = { ...prev };
      delete next[selected.id];
      return next;
    });
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: selected.id },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = (exam: MockExamSummary) => {
    const saved = inProgress[exam.id];
    if (!saved) return;
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: exam.id },
      search: { timed: saved.timed, answerSheet: saved.answerSheet },
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-5xl"
        actions={
          <Link
            to="/dashboard"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Dashboard
          </Link>
        }
      />
      <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-caramel-deep" />
            <span className="text-xs font-medium tracking-wide text-taupe">
              34 tasks · 160 points · wi2 scoring
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Mock Exams</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Full-length simulations of the WU BBE entrance exam. Same structure, same time limit,
            same scoring method.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="mb-5 font-display text-xl font-semibold">Available Exams</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-caramel-deep" />
                  <h3 className="font-display text-lg font-semibold">{exam.title}</h3>
                </div>
                <p className="flex-1 text-sm text-muted-foreground">
                  {exam.questionCount} questions · {exam.durationMinutes / 60} hours
                </p>
                {bestByExam.has(exam.id) && (
                  <p className="mt-2 text-xs font-semibold text-caramel-deep">
                    Completed · best {bestByExam.get(exam.id)!.points_earned.toFixed(1)}/
                    {bestByExam.get(exam.id)!.points_total}
                  </p>
                )}
                {inProgress[exam.id] && (
                  <p className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    In progress — you can resume where you left off
                  </p>
                )}
                {inProgress[exam.id] ? (
                  <div className="mt-5 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => resume(exam)}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                    >
                      <PlayCircle className="h-4 w-4" />
                      Resume Exam
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWithAnswerSheet(true);
                        setSelected(exam);
                      }}
                      className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
                    >
                      Start over…
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setWithAnswerSheet(true);
                      setSelected(exam);
                    }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                  >
                    <PlayCircle className="h-4 w-4" />
                    {bestByExam.has(exam.id) ? "Retake Exam" : "Start Exam"}
                  </button>
                )}
              </div>
            ))}
          </div>
          {lockedExams.length > 0 && (
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-card/50 p-5 text-sm text-muted-foreground">
              {lockedExams.length} more mock exam{lockedExams.length > 1 ? "s" : ""} are included in
              the Full BBE Course.{" "}
              <Link to="/products/full-course" className="font-semibold text-caramel-deep">
                See Full Course →
              </Link>
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-5 font-display text-xl font-semibold">Completed Exams</h2>
          {attempts === null ? (
            <p className="text-sm text-muted-foreground">Loading your results…</p>
          ) : completed.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
              <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
              <p className="text-sm text-muted-foreground">
                No exams completed yet. Finish your first mock exam and your results will show up
                here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {completed.map((c) => {
                const pct = Math.round((c.points_earned / c.points_total) * 100);
                return (
                  <div
                    key={c.id}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-base font-semibold">{c.exam_title}</h3>
                      <p className="mt-1 flex items-center gap-2 text-xs text-taupe">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(c.completed_at).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <div className="font-display text-lg font-bold text-caramel-deep">
                          {c.points_earned.toFixed(1)}/{c.points_total}
                        </div>
                        <div className="text-xs text-taupe">{pct}%</div>
                      </div>
                      <Link
                        to="/mock-exams/$examId/review"
                        params={{ examId: c.exam_id }}
                        className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold transition-all hover:bg-secondary/70"
                      >
                        Review Exam
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{selected?.title}</DialogTitle>
            <DialogDescription>
              Full-length simulation, {SCORING_CONFIG.examTotalPoints} points total.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Economics</span>
              <span className="font-semibold">10 questions</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">English</span>
              <span className="font-semibold">11 questions</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Math</span>
              <span className="font-semibold">13 questions</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">34 questions</span>
            </div>
          </div>

          <p className="text-xs text-taupe">
            If you choose the timed option, the exam is limited to 2 hours and submits automatically
            when the timer reaches zero.
          </p>

          <ExamStartAnswerMode withAnswerSheet={withAnswerSheet} onChange={setWithAnswerSheet} />

          <div className="mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => start(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              <Timer className="h-4 w-4" />
              Start with Timer (2:00:00)
            </button>
            <button
              type="button"
              onClick={() => start(false)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
            >
              Start without Timer
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
