import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AuthNav } from "@/components/AuthNav";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { supabase } from "@/integrations/supabase/client";
import {
  COURSE_CATALOG,
  computeStreak,
  fetchEnrollments,
  fetchMockAttempts,
  fetchTaskAttempts,
  summarizeTaskAttempts,
  type CourseSlug,
  type Enrollment,
  type MockAttempt,
  type SubjectStats,
  type TaskAttempt,
} from "@/lib/user-progress";
import {
  fetchCustomMocks,
} from "@/lib/custom-mock-builder/client";
import type { CustomMockSummary } from "@/lib/custom-mock-builder/types";
import { isCustomExamId } from "@/config/custom-mock-builder";
import {
  fetchSessionAnswerStats,
  type SessionAnswerStat,
} from "@/lib/study-progress";
import { StudyProgressSection } from "@/components/StudyProgressSection";
import {
  BookOpen,
  ClipboardCheck,
  Flame,
  Target,
  TrendingUp,
  Trophy,
  Sparkles,
  AlertTriangle,
  GraduationCap,
  Wand2,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard · BBE School" },
      { name: "description", content: "Your BBE School practice dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type TabId = "courses" | "mocks" | "custom";

const SUBJECT_COLORS: Record<string, string> = {
  economics: "#c8763a",
  math: "#10b981",
  english: "#0ea5e9",
};

const SUBJECT_LABEL: Record<string, string> = {
  economics: "Economics",
  math: "Math",
  english: "English",
};

function DashboardPage() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState | null | undefined>(undefined);
  const [tab, setTab] = useState<TabId>("courses");
  const [enrollments, setEnrollments] = useState<Enrollment[] | null>(null);
  const [tasks, setTasks] = useState<TaskAttempt[] | null>(null);
  const [mocks, setMocks] = useState<MockAttempt[] | null>(null);
  const [customMocks, setCustomMocks] = useState<CustomMockSummary[] | null>(null);
  const [sessionAnswers, setSessionAnswers] = useState<SessionAnswerStat[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const next = await getCurrentAuthState();
      if (cancelled) return;
      if (!next) {
        navigate({ to: "/login" });
        return;
      }
      setAuth(next);
      const [e, t, m, s, c] = await Promise.all([
        fetchEnrollments(),
        fetchTaskAttempts(),
        fetchMockAttempts(),
        fetchSessionAnswerStats(),
        fetchCustomMocks(),
      ]);
      if (cancelled) return;
      setEnrollments(e);
      setTasks(t);
      setMocks(m);
      setSessionAnswers(s);
      setCustomMocks(c);
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (auth === undefined || auth === null) {
    return (
      <Shell>
        <p className="px-6 py-10 text-sm text-muted-foreground">Loading…</p>
      </Shell>
    );
  }

  const initial = auth.name.charAt(0).toUpperCase();
  const loading =
    enrollments === null ||
    tasks === null ||
    mocks === null ||
    sessionAnswers === null ||
    customMocks === null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  return (
    <Shell>
      <div className="flex min-h-[calc(100vh-57px)]">
        <aside className="hidden w-56 shrink-0 border-r border-border/60 bg-card/40 py-6 sm:block">
          <nav className="flex flex-col gap-1 px-3">
            <SideItem
              icon={<BookOpen className="h-4 w-4" />}
              label="Courses"
              active={tab === "courses"}
              onClick={() => setTab("courses")}
            />
            <SideItem
              icon={<ClipboardCheck className="h-4 w-4" />}
              label="Mock Exams"
              active={tab === "mocks"}
              onClick={() => setTab("mocks")}
            />
            <SideItem
              icon={<Wand2 className="h-4 w-4" />}
              label="Custom Mocks"
              active={tab === "custom"}
              onClick={() => setTab("custom")}
            />
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-sm">
              {initial}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Dashboard</p>
              <h1 className="mt-0.5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome back, {auth.name}
              </h1>
            </div>
            <Link
              to="/account"
              className="hidden shrink-0 items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary sm:inline-flex"
            >
              ⚙ Account settings
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="hidden shrink-0 items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary sm:inline-flex"
            >
              Log out
            </button>
          </div>
          <div className="mt-4 flex gap-2 sm:hidden">
            <Link
              to="/account"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              ⚙ Account settings
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Log out
            </button>
          </div>

          <div className="mt-6 flex gap-2 sm:hidden">
            <MobileTab active={tab === "courses"} onClick={() => setTab("courses")}>Courses</MobileTab>
            <MobileTab active={tab === "mocks"} onClick={() => setTab("mocks")}>Mock Exams</MobileTab>
            <MobileTab active={tab === "custom"} onClick={() => setTab("custom")}>Custom</MobileTab>
          </div>

          <div className="mt-8">
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading your progress…</p>
            ) : tab === "courses" ? (
              <CoursesTab
                enrollments={enrollments!}
                tasks={tasks!}
                mocks={mocks!}
                sessionAnswers={sessionAnswers!}
              />
            ) : tab === "mocks" ? (
              <MocksTab mocks={mocks!.filter((m) => !isCustomExamId(m.exam_id))} />
            ) : (
              <CustomMocksTab
                customMocks={customMocks!}
                attempts={mocks!.filter((m) => isCustomExamId(m.exam_id))}
              />
            )}
          </div>
        </main>
      </div>
    </Shell>
  );
}

/* -------------------- COURSES TAB -------------------- */

function CoursesTab({
  enrollments,
  tasks,
  mocks,
  sessionAnswers,
}: {
  enrollments: Enrollment[];
  tasks: TaskAttempt[];
  mocks: MockAttempt[];
  sessionAnswers: SessionAnswerStat[];
}) {
  const stats: SubjectStats[] = useMemo(() => summarizeTaskAttempts(tasks), [tasks]);
  const streak = useMemo(
    () => computeStreak([...tasks.map((t) => t.created_at), ...mocks.map((m) => m.completed_at)]),
    [tasks, mocks],
  );
  const totalPassed = stats.reduce((a, s) => a + s.passed, 0);
  const totalAttempted = stats.reduce((a, s) => a + s.attempted, 0);
  const overallAccuracy = totalAttempted ? Math.round((totalPassed / totalAttempted) * 100) : 0;

  const enrolledSlugs = new Set(enrollments.map((e) => e.product_slug));
  const available = (Object.keys(COURSE_CATALOG) as CourseSlug[]).filter((s) => !enrolledSlugs.has(s));

  return (
    <div className="space-y-8">
      <StudyProgressSection tasks={tasks} mocks={mocks} sessionAnswers={sessionAnswers} />

      {/* My courses */}
      <section>
        <h2 className="mb-3 font-display text-xl font-bold tracking-tight">My courses</h2>
        {enrollments.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
            <GraduationCap className="mx-auto mb-3 h-6 w-6 text-taupe" />
            <p className="text-sm text-muted-foreground">
              You are not enrolled in any course yet. Pick one below to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {enrollments.map((e) => (
              <div key={e.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                  {e.tier} access
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">{e.product_name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Enrolled {new Date(e.created_at).toLocaleDateString()}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-caramel-deep"
                      style={{ width: `${overallAccuracy && totalAttempted ? Math.min(100, Math.round((totalPassed / Math.max(totalAttempted, 1)) * 100)) : 0}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                    {totalPassed} tasks passed
                  </span>
                </div>
                <Link
                  to={COURSE_CATALOG[(e.product_slug as CourseSlug)]?.href ?? "/products"}
                  className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {available.length > 0 && (
        <section>
          <h2 className="mb-3 font-display text-xl font-bold tracking-tight">Available courses</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {available.map((slug) => (
              <Link
                key={slug}
                to={slug === "demo-practice" ? "/products/demo-practice" : slug === "lite-bbe-course" ? "/products/lite-bbe-course" : "/products/full-course"}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                  {COURSE_CATALOG[slug].tier} access
                </p>
                <h3 className="mt-1 font-display text-base font-bold">{COURSE_CATALOG[slug].name}</h3>
                <p className="mt-2 text-xs font-semibold text-caramel-deep">View course →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      <div className="grid gap-3 sm:grid-cols-3">
        <StatPill icon={<Target className="h-4 w-4 text-caramel-deep" />} label="Tasks attempted" value={`${totalAttempted}`} sub={`${totalPassed} passed`} />
        <StatPill icon={<TrendingUp className="h-4 w-4 text-caramel-deep" />} label="Accuracy" value={`${overallAccuracy}%`} sub="across all subjects" />
        <StatPill icon={<Flame className="h-4 w-4 text-caramel-deep" />} label="Current streak" value={`${streak} ${streak === 1 ? "day" : "days"}`} sub="days with activity" />
      </div>

      {stats.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No practice recorded yet. Your progress is 0% — start a chapter and your statistics will
            appear here automatically.
          </p>
        </div>
      ) : (
        stats.map((s) => <SubjectSection key={s.subject} stats={s} />)
      )}
    </div>
  );
}

function StatPill({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-display text-xl font-bold leading-tight">{value}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  );
}

function SubjectSection({ stats }: { stats: SubjectStats }) {
  const color = SUBJECT_COLORS[stats.subject] ?? "#c8763a";
  const pct = stats.attempted ? Math.round((stats.passed / stats.attempted) * 100) : 0;

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-6">
        <ProgressRing pct={pct} stroke={color} />
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {SUBJECT_LABEL[stats.subject] ?? stats.subject}
          </h2>
          <p className="text-sm text-muted-foreground">
            {stats.passed} of {stats.attempted} attempted tasks passed
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <MiniStat label="Attempted" value={stats.attempted} />
          <MiniStat label="Passed" value={stats.passed} />
          <MiniStat label="Accuracy" value={`${stats.accuracy}%`} />
        </div>
      </div>

      <ul className="mt-6 divide-y divide-border/60">
        {stats.chapters.map((c) => {
          const cpct = c.attempted ? Math.round((c.passed / c.attempted) * 100) : 0;
          const needsReview = c.accuracy < 60;
          return (
            <li key={c.chapter} className="flex flex-wrap items-center gap-4 py-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold">{c.chapter}</p>
                  {needsReview && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/40 bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-600">
                      <AlertTriangle className="h-3 w-3" />
                      Needs review
                    </span>
                  )}
                </div>
                <div className="mt-1.5 flex items-center gap-3">
                  <div className="h-1.5 w-full max-w-[280px] overflow-hidden rounded-full bg-secondary">
                    <div className="h-full" style={{ width: cpct + "%", backgroundColor: color }} />
                  </div>
                  <span className="shrink-0 text-xs font-medium text-muted-foreground">
                    {c.passed}/{c.attempted} passed · {c.accuracy}% acc
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ProgressRing({ pct, stroke }: { pct: number; stroke: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
        <circle cx="40" cy="40" r={r} stroke="currentColor" className="text-secondary" strokeWidth="8" fill="none" />
        <circle
          cx="40" cy="40" r={r}
          stroke={stroke}
          strokeWidth="8"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 800ms ease" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-lg font-bold">{pct}%</span>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="min-w-[88px]">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="font-display text-lg font-bold">{value}</p>
    </div>
  );
}

/* -------------------- MOCKS TAB -------------------- */

function CustomMocksTab({
  customMocks,
  attempts,
}: {
  customMocks: CustomMockSummary[];
  attempts: MockAttempt[];
}) {
  const attemptsByExam = useMemo(() => {
    const map = new Map<string, MockAttempt[]>();
    for (const a of attempts) {
      const list = map.get(a.exam_id) ?? [];
      list.push(a);
      map.set(a.exam_id, list);
    }
    for (const [, list] of map) {
      list.sort((a, b) => b.completed_at.localeCompare(a.completed_at));
    }
    return map;
  }, [attempts]);

  const sortedAttempts = useMemo(
    () => [...attempts].sort((a, b) => b.completed_at.localeCompare(a.completed_at)),
    [attempts],
  );

  if (customMocks.length === 0 && attempts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
        <Wand2 className="mx-auto mb-3 h-6 w-6 text-taupe" />
        <p className="text-sm text-muted-foreground">
          No custom mocks yet. Generate Economics mocks from Full Course material by book subtopic — they appear
          here with scores after you finish.
        </p>
        <Link
          to="/products/custom-mock-builder"
          className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Open Custom Mock Builder
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">Custom Mock Builder</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Generated mocks and your wi2 results.
          </p>
        </div>
        <Link
          to="/products/custom-mock-builder"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold hover:bg-secondary"
        >
          <Wand2 className="h-3.5 w-3.5" />
          Build new mock
        </Link>
      </div>

      {sortedAttempts.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <HighlightCard
            icon={<Trophy className="h-5 w-5 text-caramel-deep" />}
            label="Best custom score"
            value={`${Math.round(
              (Math.max(...sortedAttempts.map((a) => a.points_earned / Math.max(1, a.points_total))) *
                100),
            )}%`}
            sub={`${sortedAttempts.length} completed attempt${sortedAttempts.length > 1 ? "s" : ""}`}
          />
          <HighlightCard
            icon={<Sparkles className="h-5 w-5 text-caramel-deep" />}
            label="Most recent"
            value={`${Math.round(
              (sortedAttempts[0].points_earned / Math.max(1, sortedAttempts[0].points_total)) * 100,
            )}%`}
            sub={`${sortedAttempts[0].exam_title} · ${formatDate(sortedAttempts[0].completed_at)}`}
          />
        </div>
      )}

      <section className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
        <h3 className="mb-3 px-3 pt-2 font-display text-lg font-bold tracking-tight">
          Built mocks
        </h3>
        {customMocks.length === 0 ? (
          <p className="px-3 pb-3 text-sm text-muted-foreground">
            No saved blueprints yet — generate one in the builder.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-3 py-2">Mock</th>
                  <th className="px-3 py-2">Created</th>
                  <th className="px-3 py-2">Best result</th>
                  <th className="px-3 py-2">Attempts</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {customMocks.map((mock) => {
                  const examAttempts = attemptsByExam.get(mock.examId) ?? [];
                  const best = examAttempts[0]
                    ? examAttempts.reduce((a, b) =>
                        a.points_earned >= b.points_earned ? a : b,
                      )
                    : null;
                  return (
                    <tr key={mock.id} className="border-t border-border/60">
                      <td className="px-3 py-3">
                        <p className="font-medium">{mock.title}</p>
                        <p className="text-xs text-muted-foreground">
                          Ch. {mock.chapters.join(", ")} · {mock.questionCount}Q ·{" "}
                          {mock.durationMinutes} min
                        </p>
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        {formatDate(mock.createdAt)}
                      </td>
                      <td className="px-3 py-3">
                        {best ? (
                          <>
                            <span className="font-display text-lg font-bold">
                              {Math.round((best.points_earned / best.points_total) * 100)}%
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {best.points_earned.toFixed(1)}/{best.points_total}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs text-muted-foreground">Not taken yet</span>
                        )}
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">{examAttempts.length}</td>
                      <td className="px-3 py-3 text-right">
                        <Link
                          to="/products/custom-mock-builder"
                          className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
                        >
                          Open
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {sortedAttempts.length > 0 && (
        <section className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
          <h3 className="mb-3 px-3 pt-2 font-display text-lg font-bold tracking-tight">
            Attempt history
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-3 py-2">Exam</th>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2">Score</th>
                  <th className="px-3 py-2">Time</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {sortedAttempts.map((m) => (
                  <tr key={m.id} className="border-t border-border/60">
                    <td className="px-3 py-3 font-medium">{m.exam_title}</td>
                    <td className="px-3 py-3 text-muted-foreground">
                      {formatDate(m.completed_at)}
                    </td>
                    <td className="px-3 py-3">
                      <span className="font-display text-lg font-bold">
                        {Math.round((m.points_earned / m.points_total) * 100)}%
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {m.points_earned.toFixed(1)}/{m.points_total}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">
                      {m.seconds_taken != null ? `${Math.round(m.seconds_taken / 60)} min` : "—"}
                    </td>
                    <td className="px-3 py-3 text-right">
                      <Link
                        to="/mock-exams/$examId/review"
                        params={{ examId: m.exam_id }}
                        className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

function MocksTab({ mocks }: { mocks: MockAttempt[] }) {
  const sorted = useMemo(
    () => [...mocks].sort((a, b) => b.completed_at.localeCompare(a.completed_at)),
    [mocks],
  );
  const chronological = useMemo(() => [...sorted].reverse(), [sorted]);

  if (mocks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
        <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
        <p className="text-sm text-muted-foreground">
          No mock exams completed yet. Your scores appear here as soon as you finish one.
        </p>
        <Link
          to="/mock-exams"
          className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Browse mock exams
        </Link>
      </div>
    );
  }

  const best = [...mocks].sort((a, b) => b.points_earned - a.points_earned)[0];
  const latest = sorted[0];
  const avg = (key: string) => {
    const vals = mocks.map((m) => Number(m.per_subject?.[key] ?? 0));
    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <HighlightCard
          icon={<Trophy className="h-5 w-5 text-caramel-deep" />}
          label="Best score"
          value={`${Math.round((best.points_earned / best.points_total) * 100)}%`}
          sub={`${best.exam_title} · ${best.points_earned.toFixed(1)}/${best.points_total}`}
        />
        <HighlightCard
          icon={<Sparkles className="h-5 w-5 text-caramel-deep" />}
          label="Most recent"
          value={`${Math.round((latest.points_earned / latest.points_total) * 100)}%`}
          sub={`${latest.exam_title} · ${formatDate(latest.completed_at)}`}
        />
      </div>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-caramel-deep" />
          <h3 className="font-display text-lg font-bold tracking-tight">Score trend</h3>
        </div>
        <TrendChart mocks={chronological} />
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-lg font-bold tracking-tight">Average points per subject</h3>
        <p className="mt-1 text-sm text-muted-foreground">Across {mocks.length} completed mock{mocks.length > 1 ? "s" : ""}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <SubjectAvg name="Economics" points={avg("economics")} max={64} color={SUBJECT_COLORS.economics} />
          <SubjectAvg name="Math" points={avg("math")} max={62.4} color={SUBJECT_COLORS.math} />
          <SubjectAvg name="English" points={avg("english")} max={33.6} color={SUBJECT_COLORS.english} />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2">Exam</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Score</th>
                <th className="px-3 py-2">Time</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((m) => (
                <tr key={m.id} className="border-t border-border/60">
                  <td className="px-3 py-3 font-medium">{m.exam_title}</td>
                  <td className="px-3 py-3 text-muted-foreground">{formatDate(m.completed_at)}</td>
                  <td className="px-3 py-3">
                    <span className="font-display text-lg font-bold">
                      {Math.round((m.points_earned / m.points_total) * 100)}%
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {m.points_earned.toFixed(1)}/{m.points_total}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">
                    {m.seconds_taken != null ? `${Math.round(m.seconds_taken / 60)} min` : "—"}
                  </td>
                  <td className="px-3 py-3 text-right">
                    <Link
                      to="/mock-exams/$examId/review"
                      params={{ examId: m.exam_id }}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function HighlightCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-caramel-deep/30 bg-gradient-to-br from-caramel-deep/10 to-transparent p-5 shadow-sm">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
      <p className="mt-2 font-display text-4xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function SubjectAvg({ name, points, max, color }: { name: string; points: number; max: number; color: string }) {
  const pct = Math.round((points / max) * 100);
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold">{name}</p>
        <p className="font-display text-xl font-bold">{points}/{max}</p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full" style={{ width: Math.min(100, pct) + "%", backgroundColor: color }} />
      </div>
    </div>
  );
}

function TrendChart({ mocks }: { mocks: MockAttempt[] }) {
  const W = 640;
  const H = 200;
  const PAD_L = 32;
  const PAD_R = 12;
  const PAD_T = 12;
  const PAD_B = 28;
  const iw = W - PAD_L - PAD_R;
  const ih = H - PAD_T - PAD_B;

  const points = mocks.map((m, i) => {
    const score = (m.points_earned / m.points_total) * 100;
    const x = PAD_L + (mocks.length === 1 ? iw / 2 : (i * iw) / (mocks.length - 1));
    const y = PAD_T + ih - (score / 100) * ih;
    return { x, y, m };
  });

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area =
    points.length > 0
      ? `${path} L${points[points.length - 1].x},${PAD_T + ih} L${points[0].x},${PAD_T + ih} Z`
      : "";
  const yTicks = [0, 25, 50, 75, 100];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[560px]" role="img" aria-label="Mock score trend">
        {yTicks.map((t) => {
          const y = PAD_T + ih - (t / 100) * ih;
          return (
            <g key={t}>
              <line x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="currentColor" className="text-border" strokeDasharray="2 4" />
              <text x={PAD_L - 6} y={y + 3} textAnchor="end" className="fill-muted-foreground" fontSize="10">{t}</text>
            </g>
          );
        })}
        {area && <path d={area} fill="#c8763a" opacity="0.12" />}
        <path d={path} fill="none" stroke="#c8763a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p) => (
          <g key={p.m.id}>
            <circle cx={p.x} cy={p.y} r={4} fill="#c8763a" />
            <text x={p.x} y={H - 10} textAnchor="middle" className="fill-muted-foreground" fontSize="10">
              {shortDate(p.m.completed_at)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
function shortDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/* -------------------- SHELL -------------------- */

function SideItem({
  icon, label, active, onClick,
}: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors " +
        (active ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground hover:bg-secondary")
      }
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function MobileTab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex-1 rounded-md border px-3 py-2 text-sm font-semibold transition-colors " +
        (active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:bg-secondary")
      }
    >
      {children}
    </button>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30">
              <span className="font-display text-xs font-bold leading-none tracking-tight text-primary-foreground">BBE</span>
            </div>
            <span className="font-display text-sm font-bold tracking-tight">BBE School</span>
          </Link>
          <AuthNav />
        </div>
      </header>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
