import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuthModal } from "@/components/AuthModal";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import { useAuthGate } from "@/hooks/use-auth-gate";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { MOCK_EXAM_DEMO_SECTION_COUNTS } from "@/lib/mock-exam-demo-content";
import { getFreeDemoMockExam, type MockExamSummary } from "@/lib/mock-exams";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import { fetchMockAttempts, type MockAttempt } from "@/lib/user-progress";
import { Clock, FileText, PlayCircle, Timer, Trophy } from "lucide-react";

const DEMO = getFreeDemoMockExam();

export const Route = createFileRoute("/demo-mock")({
  head: () => ({
    links: [
      ...hreflangLinks("/demo-mock"),
      { rel: "canonical", href: "https://bbe-school.com/demo-mock" },
    ],
    meta: [
      { title: "Demo Mock Exam — BBE School" },
      {
        name: "description",
        content:
          "Free hard diagnostic mock of the WU BBE entrance exam. Same format and scoring — sign in free to start.",
      },
      { property: "og:title", content: "Demo Mock Exam — BBE School" },
      {
        property: "og:description",
        content:
          "Free hard diagnostic mock of the WU BBE entrance exam. Same format and scoring — sign in free to start.",
      },
    ],
  }),
  component: DemoMockPage,
});

export function DemoMockPage() {
  const navigate = useNavigate();
  const authGate = useAuthGate();
  const [startOpen, setStartOpen] = useState(false);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [bestAttempt, setBestAttempt] = useState<MockAttempt | null>(null);
  const [completed, setCompleted] = useState<MockAttempt[]>([]);
  const [attemptsReady, setAttemptsReady] = useState(false);
  const [inProgress, setInProgress] = useState<{ timed: boolean; answerSheet: boolean } | null>(
    null,
  );
  /** After guest signs in from a Start/Resume click, open the start dialog. */
  const [pendingStart, setPendingStart] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const history = await fetchMockAttempts();
      if (cancelled) return;
      const mine = history.filter((a) => a.exam_id === DEMO.id);
      setCompleted(mine);
      let best: MockAttempt | null = null;
      for (const a of mine) {
        if (!best || a.points_earned > best.points_earned) best = a;
      }
      setBestAttempt(best);

      const s = loadSession(DEMO.id);
      setInProgress(s ? { timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) } : null);
      setAttemptsReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [authGate.signedIn]);

  useEffect(() => {
    if (!authGate.signedIn || !pendingStart) return;
    setPendingStart(false);
    setWithAnswerSheet(true);
    setStartOpen(true);
  }, [authGate.signedIn, pendingStart]);

  const requireAuthThen = (action: () => void) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      return;
    }
    action();
  };

  const openStart = () => {
    requireAuthThen(() => {
      setWithAnswerSheet(true);
      setStartOpen(true);
    });
  };

  const start = (timed: boolean) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      setStartOpen(false);
      return;
    }
    clearSession(DEMO.id);
    setInProgress(null);
    setStartOpen(false);
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: DEMO.id },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = () => {
    requireAuthThen(() => {
      if (!inProgress) return;
      navigate({
        to: "/mock-exams/$examId/take",
        params: { examId: DEMO.id },
        search: { timed: inProgress.timed, answerSheet: inProgress.answerSheet },
      });
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName="max-w-5xl" />
      <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-caramel-deep">
            Free after sign-up
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Demo Mock Exam
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A full-length hard diagnostic of the WU BBE entrance exam. Same structure, same time
            limit, same scoring method — free with a BBE School account.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="mb-5 font-display text-xl font-semibold">Available Exam</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <ExamCard
              exam={DEMO}
              best={bestAttempt}
              inProgress={inProgress}
              onStart={openStart}
              onResume={resume}
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for the full mock catalog?{" "}
            <Link to="/mock-exams" className="font-semibold text-caramel-deep">
              Open all mock exams →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="mb-5 font-display text-xl font-semibold">Your results</h2>
          {!authGate.ready || !attemptsReady ? (
            <p className="text-sm text-muted-foreground">Loading your results…</p>
          ) : !authGate.signedIn ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
              <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
              <p className="text-sm text-muted-foreground">
                Sign in to start the demo mock and see your results here.
              </p>
              <button
                type="button"
                onClick={() => authGate.setAuthOpen(true)}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
              >
                Sign in to continue
              </button>
            </div>
          ) : completed.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
              <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
              <p className="text-sm text-muted-foreground">
                No demo attempts yet. Finish the mock and your score will show up here.
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
                        Open
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Dialog open={startOpen} onOpenChange={setStartOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{DEMO.title}</DialogTitle>
            <DialogDescription>
              Full-length simulation, {DEMO.pointsTotal} points total.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Economics</span>
              <span className="font-semibold">
                {MOCK_EXAM_DEMO_SECTION_COUNTS.economics} questions
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">English</span>
              <span className="font-semibold">
                {MOCK_EXAM_DEMO_SECTION_COUNTS.english} questions
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Math</span>
              <span className="font-semibold">{MOCK_EXAM_DEMO_SECTION_COUNTS.math} questions</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{DEMO.questionCount} questions</span>
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

      <AuthModal
        open={authGate.authOpen}
        onOpenChange={(open) => {
          authGate.setAuthOpen(open);
          if (!open) setPendingStart(false);
        }}
        defaultMode="signup"
      />
    </div>
  );
}

function ExamCard({
  exam,
  best,
  inProgress,
  onStart,
  onResume,
}: {
  exam: MockExamSummary;
  best: MockAttempt | null;
  inProgress: { timed: boolean; answerSheet: boolean } | null;
  onStart: () => void;
  onResume: () => void;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2">
        <FileText className="h-4 w-4 text-caramel-deep" />
        <h3 className="font-display text-lg font-semibold">{exam.title}</h3>
      </div>
      <p className="flex-1 text-sm text-muted-foreground">
        {exam.questionCount} questions · {exam.durationMinutes / 60} hours
        {exam.contentRev ? (
          <span className="mt-1 block font-mono text-[10px] tracking-wide text-muted-foreground/70">
            rev {exam.contentRev}
          </span>
        ) : null}
      </p>
      {best && (
        <p className="mt-2 text-xs font-semibold text-caramel-deep">
          Completed · best {best.points_earned.toFixed(1)}/{best.points_total}
        </p>
      )}
      {inProgress && (
        <p className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          In progress — you can resume where you left off
        </p>
      )}
      {inProgress ? (
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={onResume}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            <PlayCircle className="h-4 w-4" />
            Resume Exam
          </button>
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
          >
            Start over…
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onStart}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
        >
          <PlayCircle className="h-4 w-4" />
          {best ? "Retake Exam" : "Start Exam"}
        </button>
      )}
    </div>
  );
}
