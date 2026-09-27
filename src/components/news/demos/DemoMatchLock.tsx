import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#c8763a";
const PAIRS = [
  { term: "Sunk cost", meaning: "Already incurred cost" },
  { term: "Liquidity", meaning: "Ease of converting to cash" },
  { term: "Marginal cost", meaning: "Cost of one extra unit" },
];

/** BBE matching board with accent ring → emerald lock. */
export function DemoMatchLock({ caption }: DemoProps) {
  const [sel, setSel] = useState(-1);
  const [matched, setMatched] = useState<number[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setSel(-1);
      setMatched([]);
      setFade(false);
      await api.wait(420);

      // Match out of order for a different motion story than WiSo demo
      const order = [1, 0, 2];
      for (const i of order) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="t${i}"]`);
        await api.click();
        setSel(i);
        await api.wait(320);
        await api.moveTo(`[data-d="m${i}"]`);
        await api.click();
        setMatched((m) => [...m, i]);
        setSel(-1);
        await api.wait(460);
      }
      await api.wait(1200);
    },
    [],
  );

  return (
    <DemoShell url="/matching/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[340px] max-w-lg flex-col justify-center transition-opacity duration-500 sm:h-[380px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Study tools
              </p>
              <h3 className="font-display text-lg font-bold">Matching · Economics</h3>
            </div>
            <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold">
              Round 1 · {matched.length}/{PAIRS.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Terms
            </p>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Meanings
            </p>
            {PAIRS.map((p, i) => {
              const on = matched.includes(i);
              const selected = sel === i;
              return (
                <div key={p.term} className="contents">
                  <div
                    data-d={`t${i}`}
                    className={cn(
                      "mb-2.5 rounded-xl border bg-card px-3 py-3 text-sm font-semibold transition-all",
                      on
                        ? "border-emerald-400 bg-emerald-50"
                        : selected
                          ? "shadow-[0_0_0_2px_#c8763a]"
                          : "border-border",
                    )}
                    style={selected ? { borderColor: ACCENT } : undefined}
                  >
                    {p.term}
                  </div>
                  <div
                    data-d={`m${i}`}
                    className={cn(
                      "mb-2.5 rounded-xl border bg-card px-3 py-3 text-sm transition-all",
                      on ? "border-emerald-400 bg-emerald-50" : "border-border",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={cn(
                          "grid h-5 w-5 place-items-center rounded-full border",
                          on
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-border text-muted-foreground",
                        )}
                      >
                        {on ? <Check className="h-3 w-3" /> : <span className="text-[10px]">·</span>}
                      </span>
                      {p.meaning}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
