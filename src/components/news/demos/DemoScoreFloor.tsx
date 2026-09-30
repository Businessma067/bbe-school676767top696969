import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";
const KEY = [true, false, true, true, false];
const LABELS = ["A", "B", "C", "D", "E"];

type Mark = "blank" | "true";

function rawOf(marks: Mark[]) {
  return marks.reduce((sum, m, i) => {
    if (m !== "true") return sum;
    return sum + (KEY[i] ? 1 : -1);
  }, 0);
}

/** Score well with a hard floor: the marker can try to go negative, then stops at zero. */
export function DemoScoreFloor({ caption }: DemoProps) {
  const [marks, setMarks] = useState<Mark[]>(["blank", "blank", "blank", "blank", "blank"]);
  const [rawPin, setRawPin] = useState(0);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setMarks(["blank", "blank", "blank", "blank", "blank"]);
    setRawPin(0);
    setFade(false);
    await api.wait(180);

    let current = 0;
    const local: Mark[] = ["blank", "blank", "blank", "blank", "blank"];
    const apply = async (i: number) => {
      await api.moveTo(`[data-d="s${i}"]`);
      await api.click();
      local[i] = "true";
      setMarks([...local]);
      const next = rawOf(local);
      const from = current;
      await api.tween(480, (eased) => setRawPin(from + (next - from) * eased));
      current = next;
      await api.wait(50);
    };

    for (const i of [0, 2, 3]) {
      if (api.cancelled()) return;
      await apply(i);
    }
    await api.wait(80);
    await apply(1);
    await api.wait(70);
    await apply(4);
    await api.wait(360);
  }, []);

  const floored = Math.max(0, rawPin);
  const pos = (value: number) => `${((value + 2) / 5) * 100}%`;

  return (
    <DemoShell url="/bbe-exam-scoring" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[380px] max-w-lg flex-col justify-center transition-opacity duration-500 sm:h-[420px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Scoring rules
          </p>
          <h3 className="font-display text-lg font-bold">The score cannot pass zero</h3>

          <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Awarded
                </p>
                <p className="font-display text-5xl font-bold tabular-nums leading-none">
                  {floored.toFixed(0)}
                </p>
              </div>
              <p
                className="text-sm font-semibold tabular-nums"
                style={{ color: rawPin < 0 ? ACCENT : undefined }}
              >
                Raw {rawPin.toFixed(1)}
              </p>
            </div>

            <div className="relative mt-6 h-16">
              <span className="absolute left-[40%] top-0 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider">
                Floor
              </span>
              <div className="absolute inset-x-0 top-7 h-2 -translate-y-1/2 rounded-full bg-border" />
              <div
                className="absolute top-7 h-2 -translate-y-1/2 rounded-l-full bg-red-200"
                style={{ width: "40%" }}
              />
              <div
                className="absolute top-7 h-2 -translate-y-1/2 rounded-r-full bg-emerald-300"
                style={{ left: "40%", width: "60%" }}
              />
              <div
                className="absolute bottom-5 top-4 w-0.5 bg-foreground"
                style={{ left: "40%" }}
              />
              {rawPin < -0.05 ? (
                <span
                  className="absolute top-7 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed"
                  style={{ left: pos(rawPin), borderColor: ACCENT }}
                />
              ) : null}
              <span
                className="absolute top-7 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
                style={{ left: pos(floored), backgroundColor: rawPin < 0 ? ACCENT : "#10b981" }}
              />
            </div>
            <div className="relative mt-1 h-4 text-[10px] font-semibold text-muted-foreground">
              <span className="absolute left-0">−2</span>
              <span className="absolute left-[40%] -translate-x-1/2">0</span>
              <span className="absolute right-0">+3</span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {LABELS.map((letter, i) => {
              const on = marks[i] === "true";
              const good = KEY[i];
              return (
                <span
                  key={letter}
                  data-d={`s${i}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-colors",
                    !on && "border-border bg-card text-muted-foreground",
                    on && good && "border-emerald-500 bg-emerald-500 text-white",
                    on && !good && "border-red-500 bg-red-500 text-white",
                  )}
                >
                  {letter}
                  <span className="text-[10px] font-bold">{good ? "+1 true" : "−1 false"}</span>
                </span>
              );
            })}
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
