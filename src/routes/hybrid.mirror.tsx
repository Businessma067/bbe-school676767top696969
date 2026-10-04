import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { HYBRID_MIRROR_SETS } from "@/data/hybrid-mirror-sets";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { loadHybridProgress, markMirrorPassed } from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hybrid/mirror")({
  head: () => ({
    meta: [
      { title: "Mirror Drill — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridMirrorPage,
});

function HybridMirrorPage() {
  const [setId, setSetId] = useState(HYBRID_MIRROR_SETS[0]?.id ?? "");
  const active = HYBRID_MIRROR_SETS.find((s) => s.id === setId) ?? HYBRID_MIRROR_SETS[0];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState(() => new Set(loadHybridProgress().mirrorPassed));

  if (!active) {
    return (
      <HybridShell title="Mirror Drill" lead="No mirror sets yet.">
        <p className="text-muted-foreground">Content coming soon.</p>
      </HybridShell>
    );
  }

  const item = active.items[idx];
  const chosen = answers[item.id];

  const finishIfComplete = (nextAnswers: Record<string, boolean>) => {
    const allAnswered = active.items.every((it) => nextAnswers[it.id] != null);
    if (!allAnswered) return;
    markMirrorPassed(active.id);
    setDone(new Set(loadHybridProgress().mirrorPassed));
  };

  return (
    <HybridShell
      title="Mirror Drill"
      lead="Alternate English and German micro-statements on the same concept until the idea is language-proof."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {HYBRID_MIRROR_SETS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setSetId(s.id);
              setIdx(0);
              setAnswers({});
              setChecked(false);
            }}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold",
              s.id === active.id ? "text-white" : "border border-border bg-card",
            )}
            style={s.id === active.id ? { backgroundColor: HYBRID_ACCENT } : undefined}
          >
            {done.has(s.id) ? "✓ " : ""}
            {s.title}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: item.lang === "en" ? "#C2643A" : "#3730A3" }}
          >
            {item.lang === "en" ? "English" : "German"}
          </span>
          <span className="text-xs text-muted-foreground">
            {idx + 1} / {active.items.length}
          </span>
        </div>
        <p className="mt-4 font-display text-xl font-semibold leading-snug">{item.text}</p>
        <div className="mt-5 flex gap-2">
          {([true, false] as const).map((val) => (
            <button
              key={String(val)}
              type="button"
              onClick={() => {
                const next = { ...answers, [item.id]: val };
                setAnswers(next);
                setChecked(true);
                finishIfComplete(next);
              }}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold",
                chosen === val ? "text-white" : "border border-border",
                checked && item.answer === val && "ring-2 ring-emerald-500",
              )}
              style={chosen === val ? { backgroundColor: HYBRID_ACCENT } : undefined}
            >
              {val ? "True / Wahr" : "False / Falsch"}
            </button>
          ))}
        </div>
        {checked ? (
          <p className="mt-4 text-sm text-muted-foreground">{item.explanation}</p>
        ) : null}
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            disabled={idx === 0}
            onClick={() => {
              setIdx((v) => Math.max(0, v - 1));
              setChecked(answers[active.items[Math.max(0, idx - 1)]?.id] != null);
            }}
            className="rounded-md border border-border px-3 py-2 text-sm font-semibold disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            disabled={idx >= active.items.length - 1}
            onClick={() => {
              const nextIdx = Math.min(active.items.length - 1, idx + 1);
              setIdx(nextIdx);
              setChecked(answers[active.items[nextIdx]?.id] != null);
            }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
            style={{ backgroundColor: HYBRID_ACCENT }}
          >
            Next language flip
          </button>
        </div>
      </div>
    </HybridShell>
  );
}
