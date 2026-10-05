import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRIDGE_CASE_COUNT } from "@/data/hybrid-bridge-library";
import { storeExamTrack } from "@/lib/exam-track";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { HYBRID_MATH_TARGET } from "@/lib/hybrid-math";
import { buildTodayPlan, type PlannerItem } from "@/lib/hybrid-planner";
import {
  computeTwinReadiness,
  loadHybridProgress,
  patchHybridProgress,
  type HybridProgress,
  type TwinReadiness,
} from "@/lib/hybrid-progress";

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="tabular-nums font-semibold">{value}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: HYBRID_ACCENT }}
        />
      </div>
    </div>
  );
}

export function HybridStudyBoard() {
  const [progress, setProgress] = useState<HybridProgress | null>(null);

  useEffect(() => {
    setProgress(loadHybridProgress());
  }, []);

  if (!progress) {
    return <div className="h-40 animate-pulse rounded-2xl bg-secondary" />;
  }

  const readiness: TwinReadiness = computeTwinReadiness(progress, {
    bridgeTotal: BRIDGE_CASE_COUNT,
    sharedMathTarget: HYBRID_MATH_TARGET,
  });
  const plan = buildTodayPlan(progress);

  const openLanguage = (item: PlannerItem) => {
    if (item.to.startsWith("/wiso")) storeExamTrack("wiso");
    else if (item.kind === "language" || item.kind === "econ") storeExamTrack("bbe");
    if (item.to.includes("full-course-english")) {
      const current = loadHybridProgress();
      setProgress(patchHybridProgress({ englishSessions: current.englishSessions + 1 }));
    }
    if (item.to.includes("full-course-german")) {
      const current = loadHybridProgress();
      setProgress(patchHybridProgress({ germanSessions: current.germanSessions + 1 }));
    }
  };

  return (
    <section className="mb-14 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div
        className="rounded-2xl border border-border bg-card p-5"
        style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em]"
          style={{ color: HYBRID_ACCENT }}
        >
          Twin readiness
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">BBE</p>
            <p className="font-display text-3xl font-semibold tabular-nums">{readiness.bbe}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">WiSo</p>
            <p className="font-display text-3xl font-semibold tabular-nums">{readiness.wiso}</p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <Bar label="Shared math" value={readiness.sharedMath} />
          <Bar label="Bridge" value={readiness.bridge} />
          <Bar label="English lane" value={readiness.languageEn} />
          <Bar label="German lane" value={readiness.languageDe} />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Math and bridge raise both numbers. English moves only BBE. German moves only WiSo.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Today
          </p>
          <p className="text-xs text-muted-foreground">
            {plan.completedCount}/{plan.items.length} · {plan.stamp}
          </p>
        </div>
        <ul className="mt-3 divide-y divide-border">
          {plan.items.map((item) => {
            const done = item.doneHint?.(progress, plan.stamp) ?? false;
            return (
              <li key={item.id} className="flex items-start justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-semibold">
                    {done ? "✓ " : ""}
                    {item.title}
                    <span className="ml-2 font-normal text-muted-foreground">
                      {item.minutes} min
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </p>
                </div>
                <Link
                  to={item.to}
                  onClick={() => openLanguage(item)}
                  className="shrink-0 text-xs font-semibold"
                  style={{ color: HYBRID_ACCENT }}
                >
                  Open
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
