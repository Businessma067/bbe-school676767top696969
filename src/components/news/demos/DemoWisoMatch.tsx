import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#3a5a78";

const LEFT = [
  { id: 0, term: "Angebot" },
  { id: 1, term: "Nachfrage" },
  { id: 2, term: "Knappheit" },
];

/** Meanings shuffled so connector lines cross instead of sitting in a row. */
const RIGHT = [
  { id: 2, meaning: "Scarcity" },
  { id: 0, meaning: "Supply" },
  { id: 1, meaning: "Demand" },
];

type Line = { id: string; d: string; draw: number };

function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mid = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mid} ${a.y}, ${mid} ${b.y}, ${b.x} ${b.y}`;
}

function edge(
  board: HTMLElement,
  selector: string,
  side: "left" | "right",
): { x: number; y: number } | null {
  const el = board.querySelector<HTMLElement>(selector);
  if (!el) return null;
  const b = board.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return {
    x: side === "left" ? r.right - b.left : r.left - b.left,
    y: r.top - b.top + r.height / 2,
  };
}

/**
 * WiSo Zuordnung: German terms on the left, shuffled English glosses on the
 * right, emerald connector lines that draw in. Not a lock-bench.
 */
export function DemoWisoMatch({ caption }: DemoProps) {
  const [sel, setSel] = useState(-1);
  const [matched, setMatched] = useState<number[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setSel(-1);
    setMatched([]);
    setLines([]);
    setFade(false);
    await api.wait(480);

    const order = [0, 1, 2];
    for (const i of order) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="t${i}"]`);
      await api.click();
      setSel(i);
      await api.wait(240);
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();

      const board = api.stage()?.querySelector<HTMLElement>('[data-d="board"]');
      const a = board ? edge(board, `[data-d="t${i}"]`, "left") : null;
      const b = board ? edge(board, `[data-d="m${i}"]`, "right") : null;
      const id = `l${i}`;
      if (a && b) {
        const d = curve(a, b);
        setLines((prev) => [...prev, { id, d, draw: 0 }]);
        await api.tween(560, (eased) => {
          setLines((prev) =>
            prev.map((line) => (line.id === id ? { ...line, draw: eased } : line)),
          );
        });
      }
      setMatched((m) => [...m, i]);
      setSel(-1);
      await api.wait(280);
    }
    await api.wait(1100);
  }, []);

  return (
    <DemoShell
      url="/wiso/matching/economics"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[400px] max-w-lg flex-col justify-center transition-opacity duration-500 sm:h-[440px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3a5a78]">
                WiSo · Zuordnung
              </p>
              <h3 className="font-display text-lg font-bold">Begriff → Bedeutung</h3>
            </div>
            <span className="rounded-full border border-[#3a5a78]/30 bg-card px-2.5 py-1 text-[10px] font-semibold text-[#3a5a78]">
              Zugeordnet {matched.length}/3
            </span>
          </div>

          <div data-d="board" className="relative">
            <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible">
              {lines.map((line) => (
                <path
                  key={line.id}
                  d={line.d}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1 - line.draw}
                />
              ))}
            </svg>

            <div className="relative z-0 grid grid-cols-2 gap-x-14 gap-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Begriffe
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Bedeutungen
              </p>
              {LEFT.map((row, visual) => {
                const right = RIGHT[visual]!;
                const leftOn = matched.includes(row.id);
                const rightOn = matched.includes(right.id);
                const leftSel = sel === row.id;
                return (
                  <div key={row.id} className="contents">
                    <div
                      data-d={`t${row.id}`}
                      className={cn(
                        "rounded-xl border bg-card px-3 py-3 text-sm font-semibold transition-all",
                        leftOn
                          ? "border-emerald-400 bg-emerald-50"
                          : leftSel
                            ? "text-white"
                            : "border-border",
                      )}
                      style={
                        leftSel && !leftOn
                          ? { backgroundColor: ACCENT, borderColor: ACCENT }
                          : undefined
                      }
                    >
                      {row.term}
                    </div>
                    <div
                      data-d={`m${right.id}`}
                      className={cn(
                        "rounded-xl border bg-card px-3 py-3 text-sm transition-all",
                        rightOn
                          ? "border-emerald-400 bg-emerald-50 font-semibold"
                          : "border-border",
                      )}
                    >
                      {right.meaning}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Linien bleiben stehen, sobald das Paar stimmt.
          </p>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
