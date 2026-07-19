import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AuthNav } from "@/components/AuthNav";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { BookOpen, ClipboardCheck, Flame, Clock, AlertTriangle, TrendingUp, Trophy, Sparkles } from "lucide-react";

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

type TabId = "courses" | "mocks";

type Chapter = {
  id: string;
  name: string;
  done: number;
  total: number;
  accuracy: number; // 0-100, null-ish if not started
  started: boolean;
};

type Subject = {
  key: "economics" | "math" | "english";
  name: string;
  color: string; // tailwind ring/bar color
  attempted: number;
  passed: number;
  accuracy: number;
  chapters: Chapter[];
};

type Mock = {
  id: string;
  date: string; // ISO
  score: number; // %
  timeTakenMin: number;
  timeAllottedMin: number;
  perSubject: { economics: number; math: number; english: number };
};

const SUBJECTS: Subject[] = [
  {
    key: "economics",
    name: "Economics",
    color: "bg-caramel-deep",
    attempted: 142,
    passed: 108,
    accuracy: 76,
    chapters: [
      { id: "e1", name: "Ch 1 · Foundations of Economics", done: 12, total: 12, accuracy: 88, started: true },
      { id: "e2", name: "Ch 2 · Demand & Supply", done: 10, total: 12, accuracy: 82, started: true },
      { id: "e3", name: "Ch 3 · Elasticity", done: 6, total: 10, accuracy: 54, started: true },
      { id: "e4", name: "Ch 4 · Marketing", done: 4, total: 12, accuracy: 71, started: true },
      { id: "e5", name: "Ch 5 · Forms of Business Ownership", done: 2, total: 12, accuracy: 48, started: true },
      { id: "e6", name: "Ch 6 · Accounting", done: 0, total: 14, accuracy: 0, started: false },
    ],
  },
  {
    key: "math",
    name: "Math",
    color: "bg-emerald-500",
    attempted: 96,
    passed: 71,
    accuracy: 74,
    chapters: [
      { id: "m1", name: "Ch 1 · Algebra Essentials", done: 14, total: 14, accuracy: 91, started: true },
      { id: "m2", name: "Ch 2 · Functions & Graphs", done: 9, total: 12, accuracy: 77, started: true },
      { id: "m3", name: "Ch 3 · Derivatives", done: 5, total: 12, accuracy: 58, started: true },
      { id: "m4", name: "Ch 4 · Optimization", done: 0, total: 10, accuracy: 0, started: false },
      { id: "m5", name: "Ch 5 · Probability", done: 0, total: 10, accuracy: 0, started: false },
    ],
  },
  {
    key: "english",
    name: "English",
    color: "bg-sky-500",
    attempted: 64,
    passed: 52,
    accuracy: 81,
    chapters: [
      { id: "en1", name: "Ch 1 · Reading Comprehension", done: 8, total: 10, accuracy: 84, started: true },
      { id: "en2", name: "Ch 2 · Grammar in Context", done: 7, total: 10, accuracy: 79, started: true },
      { id: "en3", name: "Ch 3 · Vocabulary in Use", done: 3, total: 10, accuracy: 62, started: true },
      { id: "en4", name: "Ch 4 · Business Writing", done: 0, total: 8, accuracy: 0, started: false },
    ],
  },
];

const MOCKS: Mock[] = [
  { id: "m6", date: "2026-07-14", score: 84, timeTakenMin: 108, timeAllottedMin: 120, perSubject: { economics: 82, math: 80, english: 90 } },
  { id: "m5", date: "2026-07-02", score: 78, timeTakenMin: 116, timeAllottedMin: 120, perSubject: { economics: 74, math: 78, english: 84 } },
  { id: "m4", date: "2026-06-20", score: 71, timeTakenMin: 119, timeAllottedMin: 120, perSubject: { economics: 68, math: 70, english: 76 } },
  { id: "m3", date: "2026-06-05", score: 66, timeTakenMin: 120, timeAllottedMin: 120, perSubject: { economics: 60, math: 66, english: 74 } },
  { id: "m2", date: "2026-05-22", score: 59, timeTakenMin: 118, timeAllottedMin: 120, perSubject: { economics: 55, math: 58, english: 66 } },
  { id: "m1", date: "2026-05-08", score: 52, timeTakenMin: 120, timeAllottedMin: 120, perSubject: { economics: 48, math: 52, english: 58 } },
];

function DashboardPage() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState | null | undefined>(undefined);
  const [tab, setTab] = useState<TabId>("courses");

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
    })();
    return () => { cancelled = true; };
  }, [navigate]);

  if (auth === undefined || auth === null) {
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">Loading…</p>
      </Shell>
    );
  }

  const initial = auth.name.charAt(0).toUpperCase();

  return (
    <Shell>
      <div className="flex min-h-[calc(100vh-57px)]">
        {/* Sidebar */}
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
              label="Mocks"
              active={tab === "mocks"}
              onClick={() => setTab("mocks")}
            />
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">
          {/* Persistent header */}
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
          </div>
          <Link
            to="/account"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary sm:hidden"
          >
            ⚙ Account settings
          </Link>

          {/* Mobile tab switcher */}
          <div className="mt-6 flex gap-2 sm:hidden">
            <MobileTab active={tab === "courses"} onClick={() => setTab("courses")}>Courses</MobileTab>
            <MobileTab active={tab === "mocks"} onClick={() => setTab("mocks")}>Mocks</MobileTab>
          </div>

          <div className="mt-8">
            {tab === "courses" ? <CoursesTab /> : <MocksTab />}
          </div>
        </main>
      </div>
    </Shell>
  );
}

function SideItem({
  icon, label, active, onClick,
}: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors " +
        (active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-foreground hover:bg-secondary")
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
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:bg-secondary")
      }
    >
      {children}
    </button>
  );
}

/* -------------------- COURSES TAB -------------------- */

function CoursesTab() {
  const totalHours = 47;
  const streak = 12;

  return (
    <div className="space-y-8">
      {/* Summary row */}
      <div className="grid gap-3 sm:grid-cols-2">
        <StatPill icon={<Clock className="h-4 w-4 text-caramel-deep" />} label="Total study time" value={`${totalHours}h`} sub="across all subjects" />
        <StatPill icon={<Flame className="h-4 w-4 text-caramel-deep" />} label="Current streak" value={`${streak} days`} sub="keep it going" />
      </div>

      {SUBJECTS.map((s) => (
        <SubjectSection key={s.key} subject={s} />
      ))}
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

function SubjectSection({ subject }: { subject: Subject }) {
  const totalDone = subject.chapters.reduce((a, c) => a + c.done, 0);
  const totalCount = subject.chapters.reduce((a, c) => a + c.total, 0);
  const pct = totalCount ? Math.round((totalDone / totalCount) * 100) : 0;

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-6">
        <ProgressRing pct={pct} color={subject.color} />
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-bold tracking-tight">{subject.name}</h2>
          <p className="text-sm text-muted-foreground">{totalDone} of {totalCount} tasks completed</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <MiniStat label="Attempted" value={subject.attempted} />
          <MiniStat label="Passed" value={subject.passed} />
          <MiniStat label="Accuracy" value={`${subject.accuracy}%`} />
        </div>
      </div>

      <ul className="mt-6 divide-y divide-border/60">
        {subject.chapters.map((c) => (
          <ChapterRow key={c.id} chapter={c} color={subject.color} />
        ))}
      </ul>
    </section>
  );
}

function ProgressRing({ pct, color }: { pct: number; color: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  // extract simple color from tailwind class → SVG stroke
  const stroke =
    color.includes("caramel") ? "#c8763a" :
    color.includes("emerald") ? "#10b981" :
    color.includes("sky") ? "#0ea5e9" : "#c8763a";

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

function ChapterRow({ chapter, color }: { chapter: Chapter; color: string }) {
  const pct = chapter.total ? Math.round((chapter.done / chapter.total) * 100) : 0;
  const needsReview = chapter.started && chapter.accuracy > 0 && chapter.accuracy < 60;

  return (
    <li className="flex flex-wrap items-center gap-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate font-semibold text-sm">{chapter.name}</p>
          {needsReview && (
            <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/40 bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-600">
              <AlertTriangle className="h-3 w-3" />
              Needs review
            </span>
          )}
        </div>
        <div className="mt-1.5 flex items-center gap-3">
          <div className="h-1.5 w-full max-w-[280px] overflow-hidden rounded-full bg-secondary">
            <div className={"h-full " + color} style={{ width: pct + "%" }} />
          </div>
          <span className="text-xs font-medium text-muted-foreground shrink-0">
            {chapter.done}/{chapter.total} tasks
            {chapter.started && chapter.accuracy > 0 && (
              <span className="ml-2">· {chapter.accuracy}% acc</span>
            )}
          </span>
        </div>
      </div>
      <button
        type="button"
        className={
          "shrink-0 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm transition-colors " +
          (chapter.started
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-border bg-card text-foreground hover:bg-secondary")
        }
      >
        {chapter.started ? "Resume" : "Start"}
      </button>
    </li>
  );
}

/* -------------------- MOCKS TAB -------------------- */

function MocksTab() {
  const sorted = useMemo(() => [...MOCKS].sort((a, b) => b.date.localeCompare(a.date)), []);
  const best = useMemo(() => [...MOCKS].sort((a, b) => b.score - a.score)[0], []);
  const latest = sorted[0];
  const avg = useMemo(() => {
    const sum = MOCKS.reduce(
      (acc, m) => ({
        economics: acc.economics + m.perSubject.economics,
        math: acc.math + m.perSubject.math,
        english: acc.english + m.perSubject.english,
      }),
      { economics: 0, math: 0, english: 0 },
    );
    const n = MOCKS.length;
    return { economics: Math.round(sum.economics / n), math: Math.round(sum.math / n), english: Math.round(sum.english / n) };
  }, []);

  return (
    <div className="space-y-6">
      {/* Highlights */}
      <div className="grid gap-3 sm:grid-cols-2">
        <HighlightCard
          icon={<Trophy className="h-5 w-5 text-caramel-deep" />}
          label="Best score"
          value={`${best.score}%`}
          sub={`Mock on ${formatDate(best.date)}`}
        />
        <HighlightCard
          icon={<Sparkles className="h-5 w-5 text-caramel-deep" />}
          label="Most recent"
          value={`${latest.score}%`}
          sub={`Mock on ${formatDate(latest.date)}`}
        />
      </div>

      {/* Trend chart */}
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-caramel-deep" />
          <h3 className="font-display text-lg font-bold tracking-tight">Score trend</h3>
        </div>
        <TrendChart mocks={[...MOCKS].sort((a, b) => a.date.localeCompare(b.date))} />
      </section>

      {/* Per-subject averages */}
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-lg font-bold tracking-tight">Average per subject</h3>
        <p className="mt-1 text-sm text-muted-foreground">Across {MOCKS.length} completed mocks</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <SubjectAvg name="Economics" pct={avg.economics} color="bg-caramel-deep" />
          <SubjectAvg name="Math" pct={avg.math} color="bg-emerald-500" />
          <SubjectAvg name="English" pct={avg.english} color="bg-sky-500" />
        </div>
      </section>

      {/* Table */}
      <section className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Score</th>
                <th className="px-3 py-2">Time</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((m) => (
                <tr key={m.id} className="border-t border-border/60">
                  <td className="px-3 py-3 font-medium">{formatDate(m.date)}</td>
                  <td className="px-3 py-3">
                    <span className="font-display text-lg font-bold">{m.score}%</span>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">
                    {m.timeTakenMin} / {m.timeAllottedMin} min
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button
                      type="button"
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
                    >
                      Review
                    </button>
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

function SubjectAvg({ name, pct, color }: { name: string; pct: number; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold">{name}</p>
        <p className="font-display text-xl font-bold">{pct}%</p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div className={"h-full " + color} style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}

function TrendChart({ mocks }: { mocks: Mock[] }) {
  const W = 640;
  const H = 200;
  const PAD_L = 32;
  const PAD_R = 12;
  const PAD_T = 12;
  const PAD_B = 28;
  const iw = W - PAD_L - PAD_R;
  const ih = H - PAD_T - PAD_B;

  const points = mocks.map((m, i) => {
    const x = PAD_L + (mocks.length === 1 ? iw / 2 : (i * iw) / (mocks.length - 1));
    const y = PAD_T + ih - (m.score / 100) * ih;
    return { x, y, m };
  });

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `${path} L${points[points.length - 1].x},${PAD_T + ih} L${points[0].x},${PAD_T + ih} Z`;

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
        <path d={area} fill="#c8763a" opacity="0.12" />
        <path d={path} fill="none" stroke="#c8763a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p) => (
          <g key={p.m.id}>
            <circle cx={p.x} cy={p.y} r={4} fill="#c8763a" />
            <text x={p.x} y={H - 10} textAnchor="middle" className="fill-muted-foreground" fontSize="10">
              {shortDate(p.m.date)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
function shortDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/* -------------------- SHELL -------------------- */

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30">
              <span className="font-display text-xs font-bold leading-none text-primary-foreground tracking-tight">BBE</span>
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
