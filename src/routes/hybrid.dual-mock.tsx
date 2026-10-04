import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { loadHybridProgress, patchHybridProgress } from "@/lib/hybrid-progress";

export const Route = createFileRoute("/hybrid/dual-mock")({
  head: () => ({
    meta: [
      { title: "Dual Mock Day — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridDualMockPage,
});

function HybridDualMockPage() {
  const [dual, setDual] = useState(() => loadHybridProgress().dualMock);

  const toggle = (key: "bbeDone" | "wisoDone") => {
    const next = patchHybridProgress({
      dualMock: { ...loadHybridProgress().dualMock, [key]: !loadHybridProgress().dualMock[key] },
    });
    setDual(next.dualMock);
  };

  return (
    <HybridShell
      title="Dual Mock Day"
      lead="Not a third fake exam format — two real formats in one calendar day. Mark each side when finished, then review mistakes by concept."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#C2643A]/40 bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#C2643A]">Morning</p>
          <h2 className="mt-1 font-display text-2xl font-bold">BBE mock</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Full BBE simulation with English language pillar and BBE scoring habits.
          </p>
          <Link
            to="/mock-exams"
            className="mt-5 inline-flex rounded-md bg-[#C2643A] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Open BBE mocks →
          </Link>
          <label className="mt-5 flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={dual.bbeDone}
              onChange={() => toggle("bbeDone")}
              className="h-4 w-4"
            />
            Mark BBE mock done today
          </label>
        </div>

        <div className="rounded-2xl border border-indigo-300/50 bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Evening</p>
          <h2 className="mt-1 font-display text-2xl font-bold">WiSo mock</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Full WiSo simulation with German reading and Teilpunktesystem pacing.
          </p>
          <Link
            to="/wiso/mock-exams"
            className="mt-5 inline-flex rounded-md bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Open WiSo mocks →
          </Link>
          <label className="mt-5 flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={dual.wisoDone}
              onChange={() => toggle("wisoDone")}
              className="h-4 w-4"
            />
            Mark WiSo mock done today
          </label>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-lg font-semibold">Suggested day structure</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Shared Math warm-up (20 min) on /hybrid/math</li>
          <li>BBE full or diagnostic mock</li>
          <li>Transfer Review: list weak concept IDs (elasticity, binomial, …)</li>
          <li>Light German lane, then WiSo mock</li>
          <li>Compare readiness rings on the Hybrid hub</li>
        </ol>
        {dual.bbeDone && dual.wisoDone ? (
          <p className="mt-4 text-sm font-semibold" style={{ color: HYBRID_ACCENT }}>
            Dual Mock Day complete — both formats logged.
          </p>
        ) : null}
      </div>
    </HybridShell>
  );
}
