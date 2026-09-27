import { useState } from "react";
import { Calculator, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const MATH = "#10b981";
const STMTS = [
  "The expression is defined for all x ≥ 2.",
  "x = 5 must be excluded because the denominator is zero.",
  "x = 2 is included because √0 is defined.",
];
const KEY = [false, true, true];

/** Math subject room: calculator peek + domain statements + check. */
export function DemoMathRoom({ caption }: DemoProps) {
  const [calc, setCalc] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [peek, setPeek] = useState<"math" | "english" | "economics">("math");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setCalc(false);
    setMarks({});
    setChecked(false);
    setPeek("math");
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(420);

    await api.moveTo('[data-d="english"]');
    setPeek("english");
    await api.wait(420);
    await api.moveTo('[data-d="math"]');
    setPeek("math");
    await api.wait(200);

    await api.moveTo('[data-d="calc"]');
    await api.click();
    setCalc(true);
    await api.wait(900);
    await api.moveTo('[data-d="calc"]');
    await api.click();
    setCalc(false);
    await api.wait(350);

    for (const i of [1, 2]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      await api.wait(400);
    }
    // trap mark on A
    await api.moveTo('[data-d="m0"]');
    await api.click();
    setMarks((m) => ({ ...m, 0: true }));
    await api.wait(400);

    await api.moveTo('[data-d="submit"]');
    await api.click();
    setChecked(true);
    await api.wait(1500);
  }, []);

  return (
    <DemoShell url="/practice/mathematics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[380px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[420px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 grid grid-cols-3 gap-1.5">
            {(
              [
                ["math", "Mathematics"],
                ["english", "English"],
                ["economics", "Economics"],
              ] as const
            ).map(([id, label]) => (
              <span
                key={id}
                data-d={id === "economics" ? undefined : id}
                className={cn(
                  "rounded-lg border px-2 py-1.5 text-center text-[11px] font-semibold transition-colors",
                  peek === id
                    ? "border-transparent text-white"
                    : "border-border bg-background text-muted-foreground",
                )}
                style={peek === id ? { backgroundColor: MATH } : undefined}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: MATH }}
            >
              Mathematics room
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              MATH-D.12 · Domains
            </span>
            <span
              data-d="calc"
              className={cn(
                "ml-auto inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold",
                calc
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background",
              )}
            >
              <Calculator className="h-3.5 w-3.5" /> Calculator
            </span>
          </div>

          {calc ? (
            <div className="mb-4 rounded-xl border border-border bg-background p-3">
              <div className="mb-2 rounded-md border border-border bg-card px-2 py-2 text-right font-mono text-sm tabular-nums">
                √(x−2)
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  "7",
                  "8",
                  "9",
                  "÷",
                  "4",
                  "5",
                  "6",
                  "×",
                  "1",
                  "2",
                  "3",
                  "−",
                  "0",
                  ".",
                  "=",
                  "+",
                ].map((k) => (
                  <span
                    key={k}
                    className="grid h-7 place-items-center rounded border border-border bg-secondary/40 text-xs font-semibold"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <h3 className="font-display text-base font-bold">Domain of √(x − 2) / (x − 5)</h3>
          <p className="mt-2 text-sm text-foreground/90">
            Decide which statements about the domain are true.
          </p>

          <ol className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
            {STMTS.map((s, i) => {
              const on = marks[i] === true;
              const ok = checked && on === KEY[i];
              return (
                <li key={i} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="w-5 text-xs font-bold text-muted-foreground">{"ABC"[i]}.</span>
                  <p className="flex-1 text-sm leading-snug">{s}</p>
                  <span
                    data-d={`m${i}`}
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded border-2",
                      on ? "border-primary bg-primary text-primary-foreground" : "border-border",
                    )}
                  >
                    {on ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                  </span>
                  {checked ? (
                    <span
                      className={cn(
                        "grid h-6 w-6 place-items-center rounded-full",
                        ok ? "bg-emerald-500 text-white" : "bg-destructive text-white",
                      )}
                    >
                      {ok ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>

          <span
            data-d="submit"
            className="mt-4 inline-flex rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: MATH }}
          >
            {checked ? "2/3 correct" : "Check Answers"}
          </span>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
