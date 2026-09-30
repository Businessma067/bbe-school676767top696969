import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

type Cell = { q: number; letter: string; filled: boolean };

/** Official answer-sheet bubbles filling under the cursor. */
export function DemoAnswerSheet({ caption }: DemoProps) {
  const [cells, setCells] = useState<Cell[]>([
    { q: 1, letter: "A", filled: false },
    { q: 1, letter: "B", filled: false },
    { q: 1, letter: "C", filled: false },
    { q: 1, letter: "D", filled: false },
    { q: 1, letter: "E", filled: false },
    { q: 2, letter: "A", filled: false },
    { q: 2, letter: "B", filled: false },
    { q: 2, letter: "C", filled: false },
    { q: 2, letter: "D", filled: false },
    { q: 2, letter: "E", filled: false },
  ]);
  const [hint, setHint] = useState("Leave unmarked when unsure");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(200);
    setCells((c) => c.map((x) => ({ ...x, filled: false })));
    setHint("Leave unmarked when unsure");
    setFade(false);
    await api.wait(180);

    // Fill Q1 A, C, D — leave B blank on purpose
    for (const key of ["1A", "1C", "1D"]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="${key}"]`);
      await api.click();
      setCells((prev) =>
        prev.map((c) => (`${c.q}${c.letter}` === key ? { ...c, filled: true } : c)),
      );
      await api.wait(70);
    }
    setHint("Blank ≠ wrong: blanks neither add nor subtract");
    await api.wait(100);

    await api.moveTo('[data-d="2A"]');
    await api.click();
    setCells((prev) =>
      prev.map((c) => (c.q === 2 && c.letter === "A" ? { ...c, filled: true } : c)),
    );
    await api.wait(70);
    await api.moveTo('[data-d="2B"]');
    await api.click();
    setCells((prev) =>
      prev.map((c) => (c.q === 2 && c.letter === "B" ? { ...c, filled: true } : c)),
    );
    await api.wait(360);
  }, []);

  return (
    <DemoShell url="/features/answer-sheet" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[340px] max-w-md flex-col justify-center transition-opacity duration-500 sm:h-[380px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Official format
          </p>
          <h3 className="font-display text-lg font-bold">Answer sheet practice</h3>
          <p className="mt-1 text-sm text-muted-foreground">{hint}</p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-secondary/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              BBE · Candidate answer sheet
            </div>
            <div className="space-y-3 p-4">
              {[1, 2].map((q) => (
                <div key={q} className="flex items-center gap-3">
                  <span className="w-8 font-display text-sm font-bold tabular-nums">Q{q}</span>
                  <div className="flex flex-wrap gap-2">
                    {["A", "B", "C", "D", "E"].map((letter) => {
                      const cell = cells.find((c) => c.q === q && c.letter === letter)!;
                      return (
                        <span
                          key={letter}
                          data-d={`${q}${letter}`}
                          className={cn(
                            "grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-bold transition-all duration-300",
                            cell.filled
                              ? "border-transparent text-white"
                              : "border-border bg-background text-muted-foreground",
                          )}
                          style={
                            cell.filled
                              ? { backgroundColor: ACCENT, boxShadow: `0 0 0 3px ${ACCENT}33` }
                              : q === 1 && letter === "B" && hint.startsWith("Blank")
                                ? { boxShadow: "0 0 0 3px #E85D3A55", borderStyle: "dashed" }
                                : undefined
                          }
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
