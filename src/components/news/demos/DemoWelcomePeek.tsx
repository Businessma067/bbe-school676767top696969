import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#3d6b5a";

const STMTS = [
  "“Nevertheless” signals contrast with the previous clause.",
  "“Affect” is always a noun in academic English.",
  "“In spite of” takes a noun phrase, not a full clause.",
];
const KEY = [true, false, true];

/** Welcome / news feed peek: English practice cluster with explanation open. */
export function DemoWelcomePeek({ caption }: DemoProps) {
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(220);
      setMarks({});
      setChecked(false);
      setExpl(false);
      setActive(-1);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(450);

      for (const i of [0, 2]) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="m${i}"]`);
        await api.click();
        setMarks((m) => ({ ...m, [i]: true }));
        await api.wait(380);
      }
      // trap
      await api.moveTo('[data-d="m1"]');
      await api.click();
      setMarks((m) => ({ ...m, 1: true }));
      await api.wait(350);

      await api.moveTo('[data-d="submit"]');
      await api.click();
      setChecked(true);
      await api.wait(600);

      await api.moveTo('[data-d="expl"]');
      await api.click();
      setExpl(true);
      await api.wait(500);
      for (let i = 0; i < 3; i++) {
        if (api.cancelled()) return;
        setActive(i);
        await api.moveTo(`[data-d="e${i}"]`);
        await api.wait(650);
      }
      await api.wait(900);
    },
    [],
  );

  return (
    <DemoShell url="/demo-practice/english" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll relative h-[400px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-opacity duration-500 sm:h-[440px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="h-full overflow-y-auto p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: ACCENT }}
              >
                English · Task 4
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                ENG-2.08 · Connectors
              </span>
            </div>
            <h3 className="font-display text-base font-bold">Linking words under pressure</h3>
            <p className="mt-2 text-sm text-foreground/90">
              Choose which statements about academic connectors are true.
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
            <div className="mt-4 flex gap-2">
              <span
                data-d="submit"
                className={cn(
                  "rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background",
                  checked && "hidden",
                )}
              >
                Check Answers
              </span>
              <span
                data-d="expl"
                className={cn(
                  "rounded-md border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold",
                  !checked && "invisible",
                )}
              >
                Explanation
              </span>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-y-0 right-0 z-10 w-[92%] max-w-sm border-l border-border bg-card p-4 shadow-2xl transition-transform duration-700 ease-in-out sm:w-[70%]",
              expl ? "translate-x-0" : "translate-x-[105%]",
            )}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">
              Explanation
            </p>
            <div className="space-y-3">
              {[
                "A → True. “Nevertheless” contrasts with what came before.",
                "B → False. “Affect” is usually a verb; “effect” is the noun.",
                "C → True. “In spite of” + noun / -ing, not a full finite clause.",
              ].map((t, i) => (
                <div
                  key={i}
                  data-d={`e${i}`}
                  className={cn(
                    "rounded-xl border p-3 text-sm transition-all duration-500",
                    active === i
                      ? "border-primary/40 bg-primary/5 opacity-100"
                      : "border-transparent opacity-45",
                  )}
                >
                  {t}
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
