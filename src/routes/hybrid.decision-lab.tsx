import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import {
  HYBRID_DECISION_QUESTIONS,
  scoreDecision,
  type DecisionResult,
} from "@/data/hybrid-decision-lab";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { patchHybridProgress } from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hybrid/decision-lab")({
  head: () => ({
    meta: [
      { title: "Decision Lab — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridDecisionLabPage,
});

function HybridDecisionLabPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<DecisionResult | null>(null);

  const allAnswered = HYBRID_DECISION_QUESTIONS.every((q) => answers[q.id]);

  return (
    <HybridShell
      title="Decision Lab"
      lead="Bought Hybrid because you are still deciding? This diagnostic does not lock you in — it weights your planner and Twin Readiness story."
    >
      <div className="space-y-4">
        {HYBRID_DECISION_QUESTIONS.map((q, i) => (
          <div key={q.id} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold text-muted-foreground">Question {i + 1}</p>
            <h2 className="mt-1 font-display text-lg font-semibold">{q.prompt}</h2>
            <div className="mt-3 space-y-2">
              {q.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                  className={cn(
                    "flex w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    answers[q.id] === opt.id
                      ? "border-teal-600 bg-teal-50 text-foreground dark:bg-teal-950/30"
                      : "border-border hover:bg-secondary",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        disabled={!allAnswered}
        onClick={() => {
          const scored = scoreDecision(answers);
          setResult(scored);
          patchHybridProgress({ decisionLean: scored.lean });
        }}
        className="mt-6 rounded-md px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
        style={{ backgroundColor: HYBRID_ACCENT }}
      >
        See my current lean
      </button>

      {result ? (
        <div className="mt-6 rounded-2xl border border-teal-200/80 bg-teal-50/50 p-5 dark:border-teal-800/40 dark:bg-teal-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-800 dark:text-teal-300">
            Result
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold capitalize">
            {result.lean === "close" ? "Too close to call" : `Edge: ${result.lean.toUpperCase()}`}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{result.summary}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Scores — BBE {result.bbeScore} · WiSo {result.wisoScore}
          </p>
        </div>
      ) : null}
    </HybridShell>
  );
}
