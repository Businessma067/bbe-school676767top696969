import { useState } from "react";
import { Lock, LockOpen } from "lucide-react";
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

/**
 * BBE matching as a lock bench: term chips in a tray, meanings stacked
 * underneath. Liquidity locks first, then the other two pairs.
 */
export function DemoMatchLock({ caption }: DemoProps) {
  const [sel, setSel] = useState(-1);
  const [locked, setLocked] = useState<number[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setSel(-1);
    setLocked([]);
    setFade(false);
    await api.wait(460);

    const order = [1, 0, 2];
    for (const i of order) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="t${i}"]`);
      await api.click();
      setSel(i);
      await api.wait(280);
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setLocked((m) => [...m, i]);
      setSel(-1);
      await api.wait(420);
    }
    await api.wait(1100);
  }, []);

  const active = sel >= 0 ? PAIRS[sel] : null;

  return (
    <DemoShell url="/matching/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[400px] max-w-lg flex-col transition-opacity duration-500 sm:h-[440px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Study tools · English
              </p>
              <h3 className="font-display text-lg font-bold">Matching · lock in</h3>
            </div>
            <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold">
              Round 1 · {locked.length}/{PAIRS.length} locked
            </span>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Term tray
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {PAIRS.map((p, i) => {
              const on = locked.includes(i);
              const selected = sel === i;
              return (
                <span
                  key={p.term}
                  data-d={`t${i}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all",
                    on
                      ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                      : selected
                        ? "text-white shadow-sm"
                        : "border-border bg-card",
                  )}
                  style={selected ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
                >
                  {on ? <Lock className="h-3 w-3" /> : null}
                  {p.term}
                </span>
              );
            })}
          </div>

          <div
            className={cn(
              "mt-3 flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-colors",
              active ? "border-[#c8763a] bg-[#c8763a]/10" : "border-dashed border-border bg-card",
            )}
          >
            {active ? (
              <LockOpen className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
            ) : (
              <Lock className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}
            <span className="font-medium">
              {active
                ? `Open lock · ${active.term}`
                : locked.length === PAIRS.length
                  ? "All three pairs locked"
                  : "Pick a term, then its meaning"}
            </span>
          </div>

          <p className="mb-1.5 mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Meanings
          </p>
          <ul className="space-y-2">
            {PAIRS.map((p, i) => {
              const on = locked.includes(i);
              return (
                <li
                  key={p.meaning}
                  data-d={`m${i}`}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border bg-card px-3 py-2.5 text-sm transition-all",
                    on ? "border-emerald-400 bg-emerald-50" : "border-border",
                    sel === i && !on && "shadow-[0_0_0_2px_#c8763a]",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded-md border",
                      on
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : "border-border text-muted-foreground",
                    )}
                  >
                    {on ? <Lock className="h-3.5 w-3.5" /> : <LockOpen className="h-3.5 w-3.5" />}
                  </span>
                  <span className={cn("flex-1", on && "font-semibold text-emerald-900")}>
                    {p.meaning}
                  </span>
                  {on ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Locked
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
