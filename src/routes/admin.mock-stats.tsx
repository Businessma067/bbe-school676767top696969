import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Fragment, useEffect, useMemo, useState } from "react";
import { AdminMockAttemptReview } from "@/components/admin/AdminMockAttemptReview";
import { AdminLayout, StatCard, fmtDate, fmtDuration } from "@/components/admin/AdminLayout";
import { adminGetMockExamStats } from "@/lib/admin.functions";
import type { AdminMockAttemptRow, AdminMockExamStats } from "@/lib/admin-mock-stats";
import type { AdminMockRow } from "@/lib/admin-types";

export const Route = createFileRoute("/admin/mock-stats")({
  component: AdminMockStatsPage,
  head: () => ({
    meta: [
      { title: "Mock exam statistics · Admin · BBE School" },
      { name: "description", content: "Admin statistics for submitted mock exams." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function toAdminMockRow(exam: AdminMockExamStats, attempt: AdminMockAttemptRow): AdminMockRow {
  return {
    id: attempt.id,
    examId: exam.examId,
    examTitle: exam.title,
    status: "submitted",
    pointsEarned: attempt.pointsEarned,
    pointsTotal: attempt.pointsTotal,
    perSubject: {},
    secondsTaken: attempt.secondsTaken,
    timed: attempt.secondsTaken != null,
    startedAt: null,
    completedAt: attempt.completedAt,
    scorePct: attempt.pct,
    hasReview: Boolean(attempt.marks),
    answers: attempt.marks ? { marks: attempt.marks } : null,
  };
}

function AdminMockStatsPage() {
  const load = useServerFn(adminGetMockExamStats);
  const [exams, setExams] = useState<AdminMockExamStats[]>([]);
  const [examId, setExamId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [openQ, setOpenQ] = useState<string | null>(null);
  const [openA, setOpenA] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [review, setReview] = useState<{ exam: AdminMockExamStats; attempt: AdminMockAttemptRow } | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    load()
      .then((res) => {
        if (cancelled) return;
        setExams(res.exams);
        setExamId(res.exams[0]?.examId ?? "");
      })
      .catch((e: unknown) => !cancelled && setError(e instanceof Error ? e.message : "Failed to load"))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [load]);

  const exam = exams.find((e) => e.examId === examId);
  const maxBucket = Math.max(1, ...(exam?.distribution ?? [0]));
  const attempts = useMemo(
    () => (exam?.attempts ?? []).filter((a) => a.email.toLowerCase().includes(search.toLowerCase())),
    [exam, search],
  );

  if (review) {
    return (
      <AdminLayout title="Mock attempt review" wide>
        <AdminMockAttemptReview
          mock={toAdminMockRow(review.exam, review.attempt)}
          userId={review.attempt.userId}
          onBack={() => setReview(null)}
        />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Mock exam statistics" wide>
      {loading ? <p className="text-sm text-muted-foreground">Loading…</p> : null}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {!loading && !error && exams.length === 0 ? (
        <p className="text-sm text-muted-foreground">No submitted mock exams yet.</p>
      ) : null}
      {exam ? (
        <div className="space-y-6">
          <select
            value={examId}
            onChange={(e) => {
              setExamId(e.target.value);
              setOpenQ(null);
              setOpenA(null);
            }}
            className="rounded-lg border border-border bg-card px-3 py-2 text-sm"
          >
            {exams.map((e) => (
              <option key={e.examId} value={e.examId}>
                {e.title} ({e.attemptCount})
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatCard label="Submissions" value={exam.attemptCount} />
            <StatCard label="Average score" value={`${exam.avgPct}%`} />
            <StatCard
              label="With saved answers"
              value={exam.detailedCount}
              hint="Full answer review is available for these attempts"
            />
            <StatCard label="Students" value={new Set(exam.attempts.map((a) => a.userId)).size} />
          </div>

          <section className="rounded-xl border border-border bg-card p-4">
            <h2 className="mb-3 font-semibold">Score distribution</h2>
            <div className="flex h-40 items-end gap-2">
              {exam.distribution.map((n, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-xs text-muted-foreground">{n}</span>
                  <div className="w-full rounded-t bg-primary" style={{ height: `${(n / maxBucket) * 110}px` }} />
                  <span className="text-[10px] text-muted-foreground">
                    {i * 10}–{i === 9 ? 100 : i * 10 + 9}%
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 font-semibold">By question</h2>
            {exam.detailedCount === 0 ? (
              <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                No attempts with saved answers yet for this exam. New submits keep statement marks — after
                students finish a mock, question-level stats appear here.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-border bg-secondary/50 text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2">#</th>
                      <th className="px-3 py-2">Subject</th>
                      <th className="px-3 py-2">Question</th>
                      <th className="px-3 py-2">Avg</th>
                      <th className="px-3 py-2">Full</th>
                      <th className="px-3 py-2">Zero</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {exam.questions.map((q) => (
                      <Fragment key={q.id}>
                        <tr
                          className="cursor-pointer hover:bg-secondary/30"
                          onClick={() => setOpenQ(openQ === q.id ? null : q.id)}
                        >
                          <td className="px-3 py-2 font-semibold">{q.index}</td>
                          <td className="px-3 py-2 capitalize">{q.subject}</td>
                          <td className="max-w-md truncate px-3 py-2">{q.stem}</td>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 overflow-hidden rounded bg-secondary">
                                <div className="h-full bg-primary" style={{ width: `${q.avgPct}%` }} />
                              </div>
                              {q.avgScore}/{q.maxPoints}
                            </div>
                          </td>
                          <td className="px-3 py-2">{q.fullScoreCount}</td>
                          <td className="px-3 py-2">{q.zeroScoreCount}</td>
                        </tr>
                        {openQ === q.id ? (
                          <tr>
                            <td colSpan={6} className="bg-secondary/20 px-3 py-3">
                              <p className="mb-2 text-xs text-muted-foreground">{q.stem}</p>
                              {q.statements.map((s) => (
                                <div key={s.letter} className="flex items-start gap-3 py-1 text-xs">
                                  <span className="w-5 font-bold">{s.letter}</span>
                                  <span
                                    className={`w-12 font-semibold ${s.isTrue ? "text-primary" : "text-muted-foreground"}`}
                                  >
                                    {s.isTrue ? "True" : "False"}
                                  </span>
                                  <span className="w-28">
                                    ticked {s.markedCount}/{q.attempts}
                                  </span>
                                  <span className="w-24">{s.correctPct}% right</span>
                                  <span className="flex-1">{s.text}</span>
                                </div>
                              ))}
                            </td>
                          </tr>
                        ) : null}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="font-semibold">All submissions</h2>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search email"
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm"
              />
            </div>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/50 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2">Student</th>
                    <th className="px-3 py-2">Finished</th>
                    <th className="px-3 py-2">Score</th>
                    <th className="px-3 py-2">Time</th>
                    <th className="px-3 py-2">Answers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {attempts.map((a) => (
                    <Fragment key={a.id}>
                      <tr>
                        <td className="px-3 py-2">
                          <Link
                            to="/admin/users/$userId"
                            params={{ userId: a.userId }}
                            className="font-medium text-primary hover:underline"
                          >
                            {a.email}
                          </Link>
                        </td>
                        <td className="px-3 py-2">{fmtDate(a.completedAt)}</td>
                        <td className="px-3 py-2">
                          {a.pointsEarned}/{a.pointsTotal} ({a.pct}%)
                        </td>
                        <td className="px-3 py-2">{fmtDuration(a.secondsTaken)}</td>
                        <td className="px-3 py-2">
                          {a.marks ? (
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary hover:bg-primary/15"
                                onClick={() => setReview({ exam, attempt: a })}
                              >
                                View answers
                              </button>
                              <button
                                type="button"
                                className="text-sm text-muted-foreground underline"
                                onClick={() => setOpenA(openA === a.id ? null : a.id)}
                              >
                                {openA === a.id ? "Hide grid" : "Quick grid"}
                              </button>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">Score only</span>
                          )}
                        </td>
                      </tr>
                      {openA === a.id && a.answers ? (
                        <tr>
                          <td colSpan={5} className="bg-secondary/20 px-3 py-3">
                            <div className="grid grid-cols-2 gap-1 text-xs sm:grid-cols-4 lg:grid-cols-6">
                              {a.answers.map((ans) => (
                                <div
                                  key={ans.questionIndex}
                                  className="rounded border border-border bg-card px-2 py-1"
                                >
                                  <span className="font-bold">Q{ans.questionIndex}</span>{" "}
                                  <span className={ans.marked === ans.correct ? "text-primary" : ""}>
                                    {ans.marked || "—"}
                                  </span>
                                  <span className="text-muted-foreground"> / {ans.correct || "none"}</span>
                                  <span className="float-right">
                                    {ans.score}/{ans.maxPoints}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <p className="mt-2 text-[11px] text-muted-foreground">
                              Ticked / correct letters, points.
                            </p>
                          </td>
                        </tr>
                      ) : null}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      ) : null}
    </AdminLayout>
  );
}
