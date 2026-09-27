import { useState } from "react";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

const Q1 = [
  "Employees are internal stakeholders.",
  "Only shareholders count as stakeholders.",
  "Banks can be external stakeholders via lending.",
];
const Q2 = [
  "Primary sector extracts raw materials.",
  "A bakery's retail shops are primary-sector.",
];

/** Hard mock sitting: palette jumps, timer, statement marks. */
export function DemoHardMock({ caption }: DemoProps) {
  const [qi, setQi] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [answers, setAnswers] = useState<Record<number, Record<number, boolean>>>({});
  const [seconds, setSeconds] = useState(48 * 60);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setQi(0);
    setVisited([0]);
    setAnswers({});
    setSeconds(48 * 60);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(450);

    for (const i of [0, 2]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="a${i}"]`);
      await api.click();
      setAnswers((prev) => ({ ...prev, 0: { ...(prev[0] ?? {}), [i]: true } }));
      await api.wait(380);
    }

    await api.moveTo('[data-d="tile2"]');
    await api.click();
    setQi(1);
    setVisited((v) => (v.includes(1) ? v : [...v, 1]));
    setSeconds((s) => s - 45);
    await api.wait(700);

    for (const i of [0]) {
      await api.moveTo(`[data-d="a${i}"]`);
      await api.click();
      setAnswers((prev) => ({ ...prev, 1: { ...(prev[1] ?? {}), [i]: true } }));
      await api.wait(400);
    }
    await api.wait(1400);
  }, []);

  const stmts = qi === 0 ? Q1 : Q2;
  const marks = answers[qi] ?? {};

  return (
    <DemoShell url="/mock-exams" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[380px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[420px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Hard mock · Economics
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-caramel-deep bg-caramel-deep px-2.5 py-1.5 text-[11px] font-bold tabular-nums text-primary-foreground">
              <Clock className="h-3.5 w-3.5" />
              {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
            </span>
          </div>

          <div className="mb-4 rounded-xl border border-border bg-secondary/25 p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Question palette · 12
            </p>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: 12 }, (_, i) => {
                const answered = Object.values(answers[i] ?? {}).some(Boolean);
                const current = i === qi;
                return (
                  <span
                    key={i}
                    data-d={i === 1 ? "tile2" : `tile${i + 1}`}
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-md border text-xs font-semibold",
                      current
                        ? "border-foreground bg-foreground text-background"
                        : answered
                          ? "border-orange-500/50 bg-orange-500 text-white"
                          : visited.includes(i)
                            ? "border-blue-500/40 bg-blue-500/15 text-blue-700"
                            : "border-border bg-muted/40 text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </span>
                );
              })}
            </div>
          </div>

          <div key={qi} className="news-uniq-slide-in">
            <h3 className="font-display text-base font-bold">
              {qi === 0 ? "Stakeholders of a growing firm" : "Business sectors"}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {qi === 0
                ? "Q1 stays on the clock. The palette is how you jump."
                : "Q2 slid in from the palette. The timer kept running."}
            </p>
            <ol className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
              {stmts.map((s, i) => (
                <li key={i} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="w-5 text-xs font-bold text-muted-foreground">{"ABCDE"[i]}.</span>
                  <p className="flex-1 text-sm leading-snug">{s}</p>
                  <span
                    data-d={`a${i}`}
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded border-2",
                      marks[i]
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border",
                    )}
                  >
                    {marks[i] ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
