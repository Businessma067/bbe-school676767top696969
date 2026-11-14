import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { SCORING_CONFIG } from "@/config/scoring-config";
import { isHybridMockExamId } from "@/config/hybrid-mock-builder";
import { isCustomExamId, isFreeDemoMockId, isWisoCuratedMockId } from "@/lib/mock-exams";
import { resolveExam } from "@/lib/custom-mock-builder/resolve-exam";
import type { ExamQuestion, MockExamSummary } from "@/lib/mock-exams";
import {
  buildExamAnalytics,
  parseMockAttemptHandoff,
  type MockAttemptHandoff,
} from "@/lib/mock-exam-analytics";
import { answersStorageKey } from "@/lib/mock-exam-session";
import { recordMockAttempt } from "@/lib/user-progress";
import { TrackBrandMark } from "@/components/ExamTrackSwitcher";
import { SiteHeader } from "@/components/SiteHeader";
import { ReviewViewToggle, TaskReviewWorkspace } from "@/components/mock-exam/ExamTaskReview";
import { PRACTICE_BODY, PRACTICE_PAGE } from "@/lib/practice-layout";
import { storeExamTrack } from "@/lib/exam-track";
import { navItemsForAccess } from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { Button } from "@/components/ui/button";

const ExamResultOverview = lazy(() =>
  import("@/components/mock-exam/ExamResultOverview").then((m) => ({
    default: m.ExamResultOverview,
  })),
);

export const Route = createFileRoute("/mock-exams/$examId/review")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://bbe-school.com/mock-exams/${params.examId}/review` },
    ],
    meta: [
      { title: "Mock Exam Review — BBE School" },
      { name: "description", content: "Detailed wi2-scored review of your WU BBE mock exam." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Mock Exam Review — BBE School" },
      { property: "og:description", content: "Your mock exam scores, answers and explanations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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

function ReviewExamPage() {
  const { examId } = Route.useParams();
  const { hasLite, hasFull, hasWisoFull } = useAccountNavTier();
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
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveRetry, setSaveRetry] = useState(0);
  useEffect(() => {
    if (!ready || saved.current || !attempt || questions.length === 0) return;
    saved.current = true;
    const flag = `bbe-mock-saved:${examId}:${JSON.stringify(attempt)}`;
    try {
      if (sessionStorage.getItem(flag)) return;
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
      marks: attempt.answers,
      timeByQuestion: attempt.timeByQuestion,
      flagged: attempt.flagged,
      questions,
      track: examTrack,
    }).then((persisted) => {
      if (persisted) {
        try { sessionStorage.setItem(flag, "1"); } catch { /* storage unavailable */ }
      }
      setSaveError(null);
    }).catch(() => {
      saved.current = false;
      setSaveError("Your exam answers were not saved. Please retry before leaving this page.");
    });
  }, [ready, attempt, exam, examId, analytics, pointsTotal, questions, examTrack, saveRetry]);

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
        {isHybridMockExamId(examId) ? (
          <Link
            to="/hybrid/mock-builder"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            ← Hybrid paper
          </Link>
        ) : isCustomExamId(examId) ? (
          <Link
            to={examTrack === "wiso" ? "/wiso/mock-builder" : "/products/custom-mock-builder"}
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            {examTrack === "wiso" ? "← WiSo Mock-Builder" : "← Back"}
          </Link>
        ) : (
          <Link
            to={
              isWisoCuratedMockId(examId) || examTrack === "wiso"
                ? "/wiso/mock-exams"
                : "/mock-exams"
            }
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
  const headerNavItems = navItemsForAccess(
    { hasLite, hasFull, hasWisoFull, hasHybrid: false },
    examTrack,
  );

  return (
    <div className={PRACTICE_PAGE}>
      <SiteHeader
        maxWidthClassName="max-w-none"
        navItems={headerNavItems}
        left={de ? <TrackBrandMark forceTrack="wiso" /> : undefined}
        hideTrackSwitcher={de}
        actions={
          <Link
            to={
              isHybridMockExamId(examId)
                ? "/hybrid/mock-builder"
                : isCustom
                  ? de
                    ? "/wiso/mock-builder"
                    : "/products/custom-mock-builder"
                  : de
                    ? isFreeDemoMockId(examId)
                      ? "/wiso/demo-mock"
                      : "/wiso/mock-exams"
                    : isFreeDemoMockId(examId)
                      ? "/demo-mock"
                      : "/mock-exams"
            }
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            {isHybridMockExamId(examId)
              ? "← Hybrid paper"
              : isCustom
                ? de
                  ? "← WiSo Mock-Builder"
                  : "← Custom Mock Builder"
                : isFreeDemoMockId(examId)
                  ? de
                    ? "← Demo-Probeprüfung"
                    : "← Demo Exam"
                  : de
                    ? "← Alle Probeprüfungen"
                    : "← All mock exams"}
          </Link>
        }
      />
      <main className={`${PRACTICE_BODY} flex-col py-8 sm:py-10`}>
        {saveError ? <div role="alert" className="mb-4 flex items-center gap-3 text-sm text-destructive">
          {saveError}
          <Button variant="outline" size="sm" onClick={() => setSaveRetry((value) => value + 1)}>Retry saving</Button>
        </div> : null}
        <div className="sticky top-16 z-20 -mx-1 mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-background/95 px-3 py-3 shadow-sm backdrop-blur-sm sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {exam?.title ?? (de ? "Probeprüfung" : "Mock Exam")}
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
          <Suspense fallback={<div className="min-h-[16rem]" aria-hidden />}>
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
          </Suspense>
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
