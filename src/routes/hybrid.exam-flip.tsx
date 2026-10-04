import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { HybridShell } from "@/components/hybrid/HybridShell";
import {
  HYBRID_EXAM_FLIP_ITEMS,
  scoreFlip,
  type FlipMode,
} from "@/data/hybrid-exam-flip";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { loadHybridProgress, patchHybridProgress } from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hybrid/exam-flip")({
  head: () => ({
    meta: [
      { title: "Exam Flip — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridExamFlipPage,
});

function HybridExamFlipPage() {
  const [mode, setMode] = useState<FlipMode>("bbe");
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(() =>
    Object.fromEntries(HYBRID_EXAM_FLIP_ITEMS.map((i) => [i.id, null])),
  );
  const [submitted, setSubmitted] = useState(false);
  const [sessions, setSessions] = useState(() => loadHybridProgress().examFlipSessions);

  const result = useMemo(
    () => (submitted ? scoreFlip(answers, HYBRID_EXAM_FLIP_ITEMS) : null),
    [answers, submitted],
  );

  return (
    <HybridShell
      title="Exam Flip"
      lead="Same sprint, two framings. Flip between BBE and WiSo language/chrome — scoring keeps the partial-credit mindset either way."
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <p className="text-sm font-semibold text-muted-foreground">Active exam mode</p>
        <div className="inline-flex rounded-lg border border-border p-1">
          {(["bbe", "wiso"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                mode === m ? "text-white" : "text-foreground",
              )}
              style={
                mode === m
                  ? { backgroundColor: m === "bbe" ? "#C2643A" : "#3730A3" }
                  : undefined
              }
            >
              {m === "bbe" ? "BBE mode" : "WiSo mode"}
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">Flip sessions completed: {sessions}</span>
      </div>

      <div
        className="mb-4 rounded-xl border px-4 py-3 text-sm"
        style={{
          borderColor: mode === "bbe" ? "#C2643A55" : "#3730A355",
          backgroundColor: mode === "bbe" ? "#C2643A0d" : "#3730A30d",
        }}
      >
        {mode === "bbe"
          ? "BBE framing: English stems, selective answering under penalty scoring."
          : "WiSo framing: German stems, same penalty mindset (Teilpunktesystem habits)."}
      </div>

      <div className="space-y-3">
        {HYBRID_EXAM_FLIP_ITEMS.map((item, i) => {
          const text = mode === "bbe" ? item.textEn : item.textDe;
          const chosen = answers[item.id];
          return (
            <div key={item.id} className="rounded-2xl border border-border bg-card p-4">
              <p className="text-xs font-semibold text-muted-foreground">Statement {i + 1}</p>
              <p className="mt-1 text-sm leading-relaxed">{text}</p>
              <div className="mt-3 flex gap-2">
                {([true, false] as const).map((val) => (
                  <button
                    key={String(val)}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((prev) => ({ ...prev, [item.id]: val }))}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-semibold",
                      chosen === val ? "text-white" : "border border-border",
                    )}
                    style={
                      chosen === val
                        ? { backgroundColor: mode === "bbe" ? "#C2643A" : "#3730A3" }
                        : undefined
                    }
                  >
                    {mode === "bbe" ? (val ? "True" : "False") : val ? "Wahr" : "Falsch"}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={submitted}
                  onClick={() => setAnswers((prev) => ({ ...prev, [item.id]: null }))}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  Skip
                </button>
              </div>
              {submitted ? (
                <p className="mt-2 text-xs text-muted-foreground">
                  {mode === "bbe" ? item.explanationEn : item.explanationDe}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setSubmitted(true);
            const next = patchHybridProgress({
              examFlipSessions: loadHybridProgress().examFlipSessions + 1,
            });
            setSessions(next.examFlipSessions);
          }}
          className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
          style={{ backgroundColor: HYBRID_ACCENT }}
        >
          Score this flip
        </button>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setAnswers(Object.fromEntries(HYBRID_EXAM_FLIP_ITEMS.map((i) => [i.id, null])));
          }}
          className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold"
        >
          Reset
        </button>
        {result ? (
          <p className="text-sm font-semibold">
            Score {result.earned} / {result.max} · correct {result.correct} · wrong {result.wrong} ·
            skipped {result.skipped}
          </p>
        ) : null}
      </div>
    </HybridShell>
  );
}
