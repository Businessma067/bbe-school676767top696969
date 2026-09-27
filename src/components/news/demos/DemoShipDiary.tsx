import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ENTRIES = [
  { date: "22 Sep", title: "Demo Exam landing", tone: "#E85D3A" },
  { date: "11 Sep", title: "Mock Builder for courses", tone: "#c8763a" },
  { date: "27 Aug", title: "WiSo track opens", tone: "#3a5a78" },
  { date: "14 Aug", title: "Flashcards & Matching", tone: "#c8763a" },
  { date: "3 Jul", title: "Tutor exam mode", tone: "#10b981" },
  { date: "16 May", title: "First hard mocks", tone: "#E85D3A" },
];

/** Ship diary: release rows illuminate one-by-one as the cursor walks the log. */
export function DemoShipDiary({ caption }: DemoProps) {
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState<number[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setActive(-1);
      setDone([]);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(400);

      for (let i = 0; i < ENTRIES.length; i++) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="row${i}"]`);
        await api.click();
        setActive(i);
        setDone((d) => [...d, i]);
        await api.wait(520);
      }
      await api.wait(1200);
    },
    [],
  );

  return (
    <DemoShell url="/news/what-shipped-since-may" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[340px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[400px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Ship diary</p>
          <h3 className="font-display text-lg font-bold tracking-tight">May → September</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Major releases that changed how students practice.
          </p>
          <ul className="mt-4 space-y-2">
            {ENTRIES.map((e, i) => {
              const on = done.includes(i);
              const now = active === i;
              return (
                <li
                  key={e.title}
                  data-d={`row${i}`}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500",
                    now
                      ? "border-foreground/30 bg-secondary/70 shadow-sm"
                      : on
                        ? "border-border bg-secondary/30"
                        : "border-border/70 bg-background opacity-55",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full border text-[10px] font-bold transition-colors",
                      on ? "border-transparent text-white" : "border-border text-muted-foreground",
                    )}
                    style={on ? { backgroundColor: e.tone } : undefined}
                  >
                    {on ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                      {e.date}
                    </p>
                    <p className="truncate text-sm font-semibold">{e.title}</p>
                  </div>
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
