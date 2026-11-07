import { useEffect, useMemo, useState } from "react";
import { isCustomExamId } from "@/config/custom-mock-builder";
import { resolveExam } from "@/lib/custom-mock-builder/resolve-exam";
import type { ExamQuestion, MockExamSummary } from "@/lib/mock-exams";
import {
  buildExamAnalytics,
  handoffFromStoredMockAnswers,
} from "@/lib/mock-exam-analytics";
import { adminGetCustomMockPaper } from "@/lib/admin.functions";
import type { AdminMockRow } from "@/lib/admin-types";
import { ExamResultOverview } from "@/components/mock-exam/ExamResultOverview";
import { ReviewViewToggle, TaskReviewWorkspace } from "@/components/mock-exam/ExamTaskReview";
import { fmtDate, fmtDuration } from "@/components/admin/AdminLayout";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";

export function AdminMockAttemptReview({
  mock,
  userId,
  onBack,
}: {
  mock: AdminMockRow;
  userId: string;
  onBack: () => void;
}) {
  const getCustomPaper = useServerFn(adminGetCustomMockPaper);
  const [exam, setExam] = useState<MockExamSummary | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [examTrack, setExamTrack] = useState<"bbe" | "wiso">("bbe");
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTaskReview, setShowTaskReview] = useState(false);

  const attempt = useMemo(
    () =>
      handoffFromStoredMockAnswers(mock.answers, {
        timed: mock.timed,
        secondsTaken: mock.secondsTaken,
      }),
    [mock.answers, mock.secondsTaken, mock.timed],
  );

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    setLoadError(null);
    (async () => {
      const payload = mock.answers as Record<string, unknown> | null;
      if (payload && Array.isArray(payload.questions) && payload.questions.length > 0) {
        setQuestions(payload.questions as ExamQuestion[]);
        setExamTrack(payload.track === "wiso" ? "wiso" : "bbe");
        setReady(true);
        return;
      }
      if (isCustomExamId(mock.examId)) {
        const paper = await getCustomPaper({
          data: { userId, examId: mock.examId },
        });
        if (cancelled) return;
        if (!paper) {
          setLoadError("This custom mock paper could not be loaded.");
          setReady(true);
          return;
        }
        setExam(paper.summary);
        setQuestions(paper.questions);
        setExamTrack(paper.track);
        setReady(true);
        return;
      }

      const resolved = await resolveExam(mock.examId);
      if (cancelled) return;
      if (!resolved) {
        setLoadError("This exam could not be loaded.");
        setReady(true);
        return;
      }
      setExam(resolved.summary);
      setQuestions(resolved.questions);
      setExamTrack(resolved.track);
      setReady(true);
    })().catch(() => {
      if (!cancelled) {
        setLoadError("The exam paper could not be loaded. Please try again.");
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [mock.examId, mock.answers, userId, getCustomPaper]);

  const uiLocale = examTrack === "wiso" ? "de" : "en";
  const analytics = useMemo(
    () => buildExamAnalytics(questions, attempt, uiLocale),
    [questions, attempt, uiLocale],
  );

  useEffect(() => {
    if (currentIndex >= analytics.tasks.length && analytics.tasks.length > 0) {
      setCurrentIndex(0);
    }
  }, [analytics.tasks.length, currentIndex]);

  if (!ready) {
    return <p className="text-sm text-muted-foreground">Loading mock review…</p>;
  }

  if (loadError || !attempt) {
    return (
      <div className="space-y-3">
        <Button variant="link"
          type="button"
          onClick={onBack}
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← Back to mocks
        </Button>
        <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
          {loadError ??
            "Full answer review is not stored for this attempt (submitted before per-answer marks were saved)."}
        </p>
      </div>
    );
  }

  const current = analytics.tasks[currentIndex] ?? null;
  const de = examTrack === "wiso";

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button variant="link"
            type="button"
            onClick={onBack}
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to mocks
          </Button>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {exam?.title ?? mock.examTitle}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {fmtDate(mock.completedAt ?? mock.startedAt)}
            {" · "}
            {mock.scorePct != null ? `${mock.scorePct}%` : "—"}
            {" · "}
            {mock.pointsEarned}/{mock.pointsTotal} pts
            {" · "}
            {fmtDuration(mock.secondsTaken)}
            {mock.timed ? " · timed" : ""}
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
          examTitle={exam?.title ?? mock.examTitle}
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
    </div>
  );
}
