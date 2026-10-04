import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  FlipHorizontal2,
  GitBranch,
  Layers,
  Scale,
  Split,
  Target,
} from "lucide-react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { LocalizedLink } from "@/components/LocalizedLink";
import { HYBRID_BRIDGE_CASES } from "@/data/hybrid-bridge-cases";
import { HYBRID_MIRROR_SETS } from "@/data/hybrid-mirror-sets";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { buildTodayPlan } from "@/lib/hybrid-planner";
import {
  computeTwinReadiness,
  loadHybridProgress,
  patchHybridProgress,
  todayStamp,
  type HybridProgress,
} from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hybrid/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/hybrid" }],
    meta: [
      { title: "Hybrid BBE + WiSo Course Hub | BBE School" },
      {
        name: "description",
        content:
          "Hybrid hub: Twin Readiness, Shared-First Planner, Bridge Cases, Exam Flip, and dual exam modes for BBE and WiSo.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridHubPage,
});

const LIBRARY = [
  {
    title: "BBE Economics",
    to: "/products/full-course-economics",
    blurb: "English economics bank",
  },
  {
    title: "WiSo Economics",
    to: "/wiso/products/full-course-economics",
    blurb: "Wirtschaft verstehen",
  },
  {
    title: "English lane",
    to: "/products/full-course-english",
    blurb: "BBE language overlay",
    onOpen: () => patchHybridProgress({ englishSessions: loadHybridProgress().englishSessions + 1 }),
  },
  {
    title: "German lane",
    to: "/wiso/products/full-course-german",
    blurb: "WiSo reading overlay",
    onOpen: () => patchHybridProgress({ germanSessions: loadHybridProgress().germanSessions + 1 }),
  },
  { title: "BBE Mocks", to: "/mock-exams", blurb: "Full BBE simulations" },
  { title: "WiSo Mocks", to: "/wiso/mock-exams", blurb: "Full WiSo simulations" },
  { title: "BBE Flashcards", to: "/flashcards", blurb: "Recall drills" },
  { title: "WiSo Flashcards", to: "/wiso/flashcards", blurb: "DE recall drills" },
] as const;

const MODES = [
  {
    title: "Bridge Cases",
    blurb: "Same concept in EN + DE, back to back.",
    to: "/hybrid/bridge",
    icon: GitBranch,
  },
  {
    title: "Mirror Drill",
    blurb: "Alternate languages until the idea sticks.",
    to: "/hybrid/mirror",
    icon: Split,
  },
  {
    title: "Exam Flip",
    blurb: "Switch BBE ↔ WiSo framing on one sprint.",
    to: "/hybrid/exam-flip",
    icon: FlipHorizontal2,
  },
  {
    title: "Dual Mock Day",
    blurb: "Checklist for both full exam formats.",
    to: "/hybrid/dual-mock",
    icon: Layers,
  },
  {
    title: "Decision Lab",
    blurb: "See which track you currently lean toward.",
    to: "/hybrid/decision-lab",
    icon: Scale,
  },
  {
    title: "Shared Math",
    blurb: "One math bank with EN/DE flip.",
    to: "/hybrid/math",
    icon: Target,
  },
] as const;

function ReadinessRing({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "bbe" | "wiso";
}) {
  const color = tone === "bbe" ? "#C2643A" : "#3730A3";
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-2xl font-bold">{value}%</span>
        </div>
      </div>
      <p className="text-sm font-semibold" style={{ color }}>
        {label}
      </p>
    </div>
  );
}

function HybridHubPage() {
  const [progress, setProgress] = useState<HybridProgress | null>(null);

  useEffect(() => {
    setProgress(loadHybridProgress());
  }, []);

  if (!progress) {
    return (
      <HybridShell title="Hybrid Hub" lead="Loading your Twin Readiness…">
        <div className="h-40 animate-pulse rounded-2xl bg-secondary" />
      </HybridShell>
    );
  }

  const readiness = computeTwinReadiness(progress, {
    bridgeTotal: HYBRID_BRIDGE_CASES.length,
    mirrorTotal: HYBRID_MIRROR_SETS.length,
  });
  const plan = buildTodayPlan(progress);
  const stamp = todayStamp();

  return (
    <HybridShell
      title="Hybrid BBE + WiSo Hub"
      lead="One study path for both entrance exams: shared core once, language overlays in parallel, dual exam modes when you need format pressure."
    >
      <section className="rounded-2xl border border-teal-200/80 bg-teal-50/40 p-6 dark:border-teal-800/40 dark:bg-teal-950/20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
              Twin Readiness
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">Are you ready for both?</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Shared math and Bridge Cases feed both rings. English and German lanes move each ring
              separately.
            </p>
          </div>
          <div className="flex gap-8">
            <ReadinessRing label="BBE ready" value={readiness.bbe} tone="bbe" />
            <ReadinessRing label="WiSo ready" value={readiness.wiso} tone="wiso" />
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { label: "Shared math", value: readiness.sharedMath },
            { label: "Bridge", value: readiness.bridge },
            { label: "English lane", value: readiness.languageEn },
            { label: "German lane", value: readiness.languageDe },
          ].map((row) => (
            <div key={row.label} className="rounded-xl border border-border/70 bg-background/70 px-3 py-2">
              <p className="text-[11px] font-medium text-muted-foreground">{row.label}</p>
              <p className="font-display text-lg font-semibold">{row.value}%</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: HYBRID_ACCENT }}>
              Shared-First Planner
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">Today&apos;s plan</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {plan.completedCount}/{plan.items.length} started
          </p>
        </div>
        <div className="space-y-3">
          {plan.items.map((item, idx) => {
            const done = item.doneHint?.(progress);
            return (
              <LocalizedLink
                key={item.id}
                to={item.to}
                onClick={() => {
                  if (item.id === "shared-math" && !progress.plannerDays.includes(stamp)) {
                    setProgress(
                      patchHybridProgress({
                        plannerDays: [...progress.plannerDays, stamp],
                      }),
                    );
                  }
                  if (item.to.includes("english")) {
                    setProgress(
                      patchHybridProgress({
                        englishSessions: loadHybridProgress().englishSessions + 1,
                      }),
                    );
                  }
                  if (item.to.includes("german")) {
                    setProgress(
                      patchHybridProgress({
                        germanSessions: loadHybridProgress().germanSessions + 1,
                      }),
                    );
                  }
                }}
                className={cn(
                  "flex items-start gap-4 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
                  done ? "border-teal-300/80" : "border-border",
                )}
              >
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: done ? HYBRID_ACCENT : "#64748B" }}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      ~{item.minutes} min
                    </span>
                    {done ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-teal-700">
                        In progress
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.blurb}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              </LocalizedLink>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Hybrid modes</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Modes that do not exist in single-track courses.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            return (
              <LocalizedLink
                key={mode.to}
                to={mode.to}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
              >
                <span
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: HYBRID_ACCENT }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold">{mode.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{mode.blurb}</p>
              </LocalizedLink>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Library</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Deep links into Full BBE and Full WiSo banks — Hybrid orchestrates, it does not duplicate.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LIBRARY.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => {
                if ("onOpen" in item && typeof item.onOpen === "function") item.onOpen();
              }}
              className="rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:bg-secondary"
            >
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </HybridShell>
  );
}
