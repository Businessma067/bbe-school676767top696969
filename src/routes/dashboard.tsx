import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AuthNav } from "@/components/AuthNav";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { supabase } from "@/integrations/supabase/client";
import {
  dailyAggregate,
  planTotals,
  type DayStat,
  type Plan,
} from "@/lib/practice-history";
import { BookOpen, Flame, Target, CheckCircle2, Calendar } from "lucide-react";

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

type PlanMeta = {
  id: Plan;
  name: string;
  subtitle: string;
  href: string;
  accent: string; // rgb triple for heatmap
};

const PLANS: PlanMeta[] = [
  {
    id: "demo",
    name: "Demo Practice",
    subtitle: "Free preview cases",
    href: "/demo-practice/economics",
    accent: "16,185,129", // emerald
  },
  {
    id: "full",
    name: "Full Course",
    subtitle: "All 281 Economics cases",
    href: "/products/full-course-economics",
    accent: "200,118,58", // caramel-deep
  },
];

function DashboardPage() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState | null | undefined>(undefined);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const next = await getCurrentAuthState();
      if (cancelled) return;
      if (!next) { navigate({ to: "/login" }); return; }
      setAuth(next);
    })();
    return () => { cancelled = true; };
  }, [navigate]);

  useEffect(() => {
    const bump = () => setTick((t) => t + 1);
    window.addEventListener("bbe:history-updated", bump);
    window.addEventListener("storage", bump);
    return () => {
      window.removeEventListener("bbe:history-updated", bump);
      window.removeEventListener("storage", bump);
    };
  }, []);

  if (auth === undefined || auth === null) {
    return (
      <Shell>
        <p className="px-6 py-10 text-sm text-muted-foreground">Loading…</p>
      </Shell>
    );
  }

  const initial = auth.name.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  return (
    <Shell>
      <main className="mx-auto min-w-0 max-w-6xl px-6 py-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-sm">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Dashboard</p>
            <h1 className="mt-0.5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, {auth.name}
            </h1>
          </div>
          <Link
            to="/account"
            className="shrink-0 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            ⚙ Account settings
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="shrink-0 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Log out
          </button>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Separate stats for every plan you practice. Tap any day on the graph to see what you did.
        </p>

        <div className="mt-8 space-y-8">
          {PLANS.map((p) => (
            <PlanCard key={p.id + tick} plan={p} />
          ))}
        </div>
      </main>
    </Shell>
  );
}

function PlanCard({ plan }: { plan: PlanMeta }) {
  const totals = useMemo(() => planTotals(plan.id), [plan.id]);
  const days = useMemo(() => dailyAggregate(plan.id), [plan.id]);
  const [selected, setSelected] = useState<DayStat | null>(null);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-caramel-deep" />
            <h2 className="font-display text-2xl font-bold tracking-tight">{plan.name}</h2>
          </div>
          <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
        </div>
        <Link
          to={plan.href}
          className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          {totals.tasks > 0 ? "Continue practice" : "Start practicing"}
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={<CheckCircle2 className="h-4 w-4 text-caramel-deep" />} label="Tasks done" value={totals.tasks} />
        <Stat icon={<Target className="h-4 w-4 text-caramel-deep" />} label="Accuracy" value={totals.total > 0 ? `${totals.accuracy}%` : "—"} />
        <Stat icon={<CheckCircle2 className="h-4 w-4 text-caramel-deep" />} label="All-correct cases" value={totals.passed} />
        <Stat icon={<Flame className="h-4 w-4 text-caramel-deep" />} label="Active days" value={totals.activeDays} />
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-caramel-deep" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Daily activity · last 12 weeks
          </h3>
        </div>
        <Heatmap
          days={days}
          accent={plan.accent}
          onSelect={setSelected}
          selectedDate={selected?.date ?? null}
        />
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Darker = higher accuracy that day</span>
          <div className="flex items-center gap-1">
            <span>0%</span>
            {[0.15, 0.35, 0.6, 0.85, 1].map((a) => (
              <span
                key={a}
                className="inline-block h-3 w-3 rounded-sm"
                style={{ background: `rgba(${plan.accent},${a})` }}
              />
            ))}
            <span>100%</span>
          </div>
        </div>

        <DayDetails selected={selected} totalsTasks={totals.tasks} />
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 px-3 py-3">
      <div className="flex items-center gap-1.5">
        {icon}
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
      <p className="mt-1 font-display text-xl font-bold">{value}</p>
    </div>
  );
}

/* -------------------- Heatmap -------------------- */

const WEEKS = 12;

function Heatmap({
  days, accent, onSelect, selectedDate,
}: {
  days: Map<string, DayStat>;
  accent: string;
  onSelect: (d: DayStat | null) => void;
  selectedDate: string | null;
}) {
  // Build a grid of the last WEEKS*7 days ending today.
  const today = useMemo(() => startOfLocalDay(new Date()), []);
  const cells = useMemo(() => {
    const totalDays = WEEKS * 7;
    // Align to weeks ending on today's weekday
    const arr: { date: string; stat: DayStat | null }[] = [];
    for (let i = totalDays - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key = isoLocal(d);
      arr.push({ date: key, stat: days.get(key) ?? null });
    }
    return arr;
  }, [days, today]);

  // Reshape into 7 rows (weekdays) x WEEKS columns
  const rows: { date: string; stat: DayStat | null }[][] = Array.from({ length: 7 }, () => []);
  cells.forEach((c, i) => rows[i % 7].push(c));

  const monthLabels = useMemo(() => {
    const labels: { col: number; text: string }[] = [];
    let lastMonth = -1;
    for (let col = 0; col < WEEKS; col++) {
      const c = cells[col * 7];
      if (!c) continue;
      const m = new Date(c.date + "T00:00:00").getMonth();
      if (m !== lastMonth) {
        labels.push({ col, text: new Date(c.date + "T00:00:00").toLocaleDateString(undefined, { month: "short" }) });
        lastMonth = m;
      }
    }
    return labels;
  }, [cells]);

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="mb-1 grid" style={{ gridTemplateColumns: `28px repeat(${WEEKS}, 1fr)` }}>
          <span />
          {Array.from({ length: WEEKS }).map((_, col) => {
            const l = monthLabels.find((m) => m.col === col);
            return (
              <span key={col} className="text-[10px] font-medium text-muted-foreground">
                {l?.text ?? ""}
              </span>
            );
          })}
        </div>
        <div className="grid gap-1" style={{ gridTemplateColumns: `28px repeat(${WEEKS}, 1fr)` }}>
          {rows.map((row, ri) => (
            <div key={"row-" + ri} className="contents">
              <span className="text-[10px] leading-5 text-muted-foreground">
                {ri % 2 === 1 ? ["Mon", "Wed", "Fri"][(ri - 1) / 2] ?? "" : ""}
              </span>
              {row.map((c) => {
                const acc = c.stat ? c.stat.accuracy / 100 : 0;
                const tasks = c.stat?.tasks ?? 0;
                const bg = tasks === 0
                  ? "rgba(148,163,184,0.15)"
                  : `rgba(${accent}, ${0.15 + acc * 0.85})`;
                const isSelected = selectedDate === c.date;
                return (
                  <button
                    key={c.date + "-" + ri}
                    type="button"
                    aria-label={
                      c.stat
                        ? `${c.date}: ${c.stat.tasks} tasks, ${c.stat.accuracy}% accuracy`
                        : `${c.date}: no activity`
                    }
                    onClick={() => onSelect(c.stat ?? { date: c.date, tasks: 0, correct: 0, total: 0, accuracy: 0 })}
                    className={
                      "aspect-square min-h-[16px] rounded-sm transition-transform hover:scale-110 " +
                      (isSelected ? "ring-2 ring-primary ring-offset-1 ring-offset-card" : "")
                    }
                    style={{ background: bg }}
                    title={
                      c.stat
                        ? `${prettyDate(c.date)} — ${c.stat.tasks} tasks · ${c.stat.accuracy}%`
                        : `${prettyDate(c.date)} — no activity`
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DayDetails({ selected, totalsTasks }: { selected: DayStat | null; totalsTasks: number }) {
  if (!selected) {
    return (
      <div className="mt-4 rounded-xl border border-dashed border-border/70 bg-background/40 px-4 py-3 text-xs text-muted-foreground">
        {totalsTasks === 0
          ? "No practice yet — complete a case to start filling this graph."
          : "Tap any day above to see how many cases you finished and your accuracy."}
      </div>
    );
  }
  return (
    <div className="mt-4 rounded-xl border border-border bg-background/60 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {prettyDate(selected.date)}
      </p>
      {selected.tasks === 0 ? (
        <p className="mt-1 text-sm text-muted-foreground">No cases completed this day.</p>
      ) : (
        <div className="mt-1 flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <p className="font-display text-2xl font-bold">
            {selected.tasks} <span className="text-sm font-medium text-muted-foreground">case{selected.tasks === 1 ? "" : "s"}</span>
          </p>
          <p className="font-display text-2xl font-bold">
            {selected.accuracy}% <span className="text-sm font-medium text-muted-foreground">correct ({selected.correct}/{selected.total} statements)</span>
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------- helpers -------------------- */

function startOfLocalDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function isoLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function prettyDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
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
      {children}
    </div>
  );
}
