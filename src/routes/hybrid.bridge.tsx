import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { HYBRID_BRIDGE_CASES, type BridgeCase } from "@/data/hybrid-bridge-cases";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { loadHybridProgress, markBridgePassed } from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hybrid/bridge")({
  head: () => ({
    meta: [
      { title: "Bridge Cases — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridBridgePage,
});

type Side = "bbe" | "wiso";

function SidePlayer({
  side,
  label,
  accent,
  answers,
  checked,
  onToggle,
}: {
  side: BridgeCase["bbe"];
  label: string;
  accent: string;
  answers: Record<number, boolean | null>;
  checked: boolean;
  onToggle: (idx: number, value: boolean) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{side.stem}</p>
      <ul className="mt-4 space-y-3">
        {side.statements.map((st, idx) => {
          const chosen = answers[idx];
          const correct = checked && chosen === st.answer;
          const wrong = checked && chosen != null && chosen !== st.answer;
          return (
            <li key={idx} className="rounded-xl border border-border/80 p-3">
              <p className="text-sm text-foreground">{st.text}</p>
              <div className="mt-2 flex gap-2">
                {([true, false] as const).map((val) => (
                  <button
                    key={String(val)}
                    type="button"
                    disabled={checked}
                    onClick={() => onToggle(idx, val)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                      chosen === val ? "text-white" : "border border-border bg-background text-foreground",
                      checked && st.answer === val && "ring-2 ring-emerald-500",
                      wrong && chosen === val && "bg-destructive text-white",
                      correct && chosen === val && "bg-emerald-600 text-white",
                    )}
                    style={!checked && chosen === val ? { backgroundColor: accent } : undefined}
                  >
                    {val ? "True" : "False"}
                  </button>
                ))}
              </div>
              {checked ? (
                <p className="mt-2 text-xs text-muted-foreground">{st.explanation}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function HybridBridgePage() {
  const passed = useMemo(() => new Set(loadHybridProgress().bridgePassed), []);
  const [activeId, setActiveId] = useState(HYBRID_BRIDGE_CASES[0]?.id ?? "");
  const active = HYBRID_BRIDGE_CASES.find((c) => c.id === activeId) ?? HYBRID_BRIDGE_CASES[0];
  const [stage, setStage] = useState<Side>("bbe");
  const [bbeAnswers, setBbeAnswers] = useState<Record<number, boolean | null>>({});
  const [wisoAnswers, setWisoAnswers] = useState<Record<number, boolean | null>>({});
  const [bbeChecked, setBbeChecked] = useState(false);
  const [wisoChecked, setWisoChecked] = useState(false);
  const [doneIds, setDoneIds] = useState(passed);

  if (!active) {
    return (
      <HybridShell title="Bridge Cases" lead="No bridge cases yet.">
        <p className="text-muted-foreground">Content coming soon.</p>
      </HybridShell>
    );
  }

  const resetCase = (id: string) => {
    setActiveId(id);
    setStage("bbe");
    setBbeAnswers({});
    setWisoAnswers({});
    setBbeChecked(false);
    setWisoChecked(false);
  };

  const completeIfReady = () => {
    if (!bbeChecked || !wisoChecked) return;
    markBridgePassed(active.id);
    setDoneIds(new Set(loadHybridProgress().bridgePassed));
  };

  return (
    <HybridShell
      title="Bridge Cases"
      lead="One economics concept, two stems: English (BBE) then German (WiSo). Finish both sides to mark the concept done once."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {HYBRID_BRIDGE_CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => resetCase(c.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
              c.id === active.id ? "text-white" : "border border-border bg-card text-foreground",
            )}
            style={c.id === active.id ? { backgroundColor: HYBRID_ACCENT } : undefined}
          >
            {doneIds.has(c.id) ? "✓ " : ""}
            {c.conceptTitle}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-2">
        {(["bbe", "wiso"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(s)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold",
              stage === s ? "text-white" : "border border-border bg-card",
            )}
            style={
              stage === s ? { backgroundColor: s === "bbe" ? "#C2643A" : "#3730A3" } : undefined
            }
          >
            {s === "bbe" ? "1 · BBE English" : "2 · WiSo German"}
          </button>
        ))}
      </div>

      {stage === "bbe" ? (
        <SidePlayer
          side={active.bbe}
          label="BBE · English"
          accent="#C2643A"
          answers={bbeAnswers}
          checked={bbeChecked}
          onToggle={(idx, value) => setBbeAnswers((prev) => ({ ...prev, [idx]: value }))}
        />
      ) : (
        <SidePlayer
          side={active.wiso}
          label="WiSo · German"
          accent="#3730A3"
          answers={wisoAnswers}
          checked={wisoChecked}
          onToggle={(idx, value) => setWisoAnswers((prev) => ({ ...prev, [idx]: value }))}
        />
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {stage === "bbe" ? (
          <button
            type="button"
            onClick={() => {
              setBbeChecked(true);
              setStage("wiso");
            }}
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: "#C2643A" }}
          >
            Check BBE side → continue German
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setWisoChecked(true);
              completeIfReady();
              // also mark if bbe already checked
              if (bbeChecked) {
                markBridgePassed(active.id);
                setDoneIds(new Set([...loadHybridProgress().bridgePassed]));
              }
            }}
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: "#3730A3" }}
          >
            Check WiSo side & complete bridge
          </button>
        )}
        {doneIds.has(active.id) ? (
          <span className="inline-flex items-center text-sm font-semibold text-teal-700">
            Concept bridged ✓
          </span>
        ) : null}
      </div>
    </HybridShell>
  );
}
