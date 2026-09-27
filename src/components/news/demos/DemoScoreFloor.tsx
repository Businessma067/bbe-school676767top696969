import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

type Mark = "blank" | "true" | "false";

/** Partial-credit scoring: marks move, score animates, floor at zero. */
export function DemoScoreFloor({ caption }: DemoProps) {
  const [marks, setMarks] = useState<Mark[]>(["blank", "blank", "blank", "blank", "blank"]);
  const key = [true, false, true, true, false];

  const score = marks.reduce((sum, m, i) => {
    if (m === "blank") return sum;
    if (m === "true" && key[i]) return sum + 1;
    if (m === "true" && !key[i]) return sum - 1;
    return sum;
  }, 0);
  const floored = Math.max(0, score);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setMarks(["blank", "blank", "blank", "blank", "blank"]);
      setFade(false);
      await api.wait(450);

      // Correct marks on A, C, D → score 3
      for (const i of [0, 2, 3]) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="s${i}"]`);
        await api.click();
        setMarks((m) => m.map((x, j) => (j === i ? "true" : x)));
        await api.wait(400);
      }
      await api.wait(700);

      // Over-mark false B → score drops
      await api.moveTo('[data-d="s1"]');
      await api.click();
      setMarks((m) => m.map((x, j) => (j === 1 ? "true" : x)));
      await api.wait(900);

      // Also mark E (false) → would go negative, floor shown
      await api.moveTo('[data-d="s4"]');
      await api.click();
      setMarks((m) => m.map((x, j) => (j === 4 ? "true" : x)));
      await api.wait(1400);
    },
    [],
  );

  const labels = ["A", "B", "C", "D", "E"];

  return (
    <DemoShell url="/bbe-exam-scoring" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[360px] max-w-lg flex-col justify-center transition-opacity duration-500 sm:h-[400px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Scoring rules
          </p>
          <h3 className="font-display text-lg font-bold">Partial credit · floor at zero</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            True marks add · false marks subtract · blanks do neither.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
            <ol className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {labels.map((L, i) => (
                <li key={L} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="w-5 text-xs font-bold text-muted-foreground">{L}.</span>
                  <span className="flex-1 text-sm">
                    {key[i] ? "True statement" : "False statement"}
                  </span>
                  <span
                    data-d={`s${i}`}
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                      marks[i] === "true"
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background",
                    )}
                  >
                    {marks[i] === "true" ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                  </span>
                </li>
              ))}
            </ol>

            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Cluster score
              </p>
              <p
                className="mt-2 font-display text-4xl font-bold tabular-nums transition-colors"
                style={{ color: floored === 0 && score < 0 ? ACCENT : undefined }}
              >
                {floored}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Raw {score} → floored {floored}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5 text-emerald-700">
                  <Plus className="h-3.5 w-3.5" /> Correct true mark
                </li>
                <li className="flex items-center gap-1.5 text-red-700">
                  <Minus className="h-3.5 w-3.5" /> Mark on false
                </li>
                <li className="text-muted-foreground">Blank → 0 change</li>
              </ul>
            </div>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
