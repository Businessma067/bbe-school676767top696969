import { useState, type CSSProperties } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#c8763a";
const PAIRS = [
  { term: "Angebot", meaning: "Supply" },
  { term: "Nachfrage", meaning: "Demand" },
  { term: "Knappheit", meaning: "Scarcity" },
];

/** WiSo Zuordnung board — select term then meaning, emerald lock-in. */
export function DemoWisoMatch({ caption }: DemoProps) {
  const [selTerm, setSelTerm] = useState(-1);
  const [matched, setMatched] = useState<number[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setSelTerm(-1);
      setMatched([]);
      setFade(false);
      await api.wait(450);

      for (let i = 0; i < PAIRS.length; i++) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="t${i}"]`);
        await api.click();
        setSelTerm(i);
        await api.wait(350);
        await api.moveTo(`[data-d="m${i}"]`);
        await api.click();
        setMatched((m) => [...m, i]);
        setSelTerm(-1);
        await api.wait(480);
      }
      await api.wait(1300);
    },
    [],
  );

  return (
    <DemoShell url="/wiso/matching/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
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
                Study tools · WiSo
              </p>
              <h3 className="font-display text-lg font-bold">Zuordnung · Wirtschaft</h3>
            </div>
            <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
              Matched {matched.length}/{PAIRS.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Begriffe
            </p>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Bedeutungen
            </p>
            {PAIRS.map((p, i) => {
              const on = matched.includes(i);
              const sel = selTerm === i;
              return (
                <div key={p.term} className="contents">
                  <div
                    data-d={`t${i}`}
                    className={cn(
                      "mb-2.5 rounded-xl border bg-card px-3 py-3 text-sm font-semibold transition-all",
                      on
                        ? "border-emerald-400 bg-emerald-50"
                        : sel
                          ? "border-transparent shadow-[0_0_0_2px_var(--ring)]"
                          : "border-border",
                    )}
                    style={sel ? ({ ["--ring" as string]: ACCENT } as CSSProperties) : undefined}
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
                          "grid h-5 w-5 place-items-center rounded-full border text-[10px]",
                          on
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-border text-muted-foreground",
                        )}
                      >
                        {on ? <Check className="h-3 w-3" /> : "·"}
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
