import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ENTRIES = [
  { date: "22 Sep", title: "Demo Exam landing", note: "Free account to start", tone: "#E85D3A" },
  { date: "11 Sep", title: "Mock Builder", note: "Course subscribers", tone: "#c8763a" },
  { date: "27 Aug", title: "WiSo track opens", note: "Second entrance path", tone: "#3a5a78" },
  { date: "14 Aug", title: "Flashcards & Matching", note: "Shorter study days", tone: "#c8763a" },
  { date: "2 Aug", title: "Answer-sheet guide", note: "Official bubble format", tone: "#E85D3A" },
  { date: "18 Jul", title: "Scoring page", note: "Floor at zero", tone: "#10b981" },
  { date: "16 May", title: "First hard mocks", note: "Papers leave the lab", tone: "#E85D3A" },
];

/** Vertical ship log: a spine fills as the cursor walks releases that sit below the fold. */
export function DemoShipDiary({ caption }: DemoProps) {
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState<number[]>([]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setActive(-1);
    setDone([]);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(420);

    for (let i = 0; i < ENTRIES.length; i++) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="row${i}"]`);
      await api.click();
      setActive(i);
      setDone((d) => (d.includes(i) ? d : [...d, i]));
      await api.wait(380);
    }
    await api.wait(1100);
  }, []);

  const spine = done.length === 0 ? 0 : (done.length / ENTRIES.length) * 100;

  return (
    <DemoShell
      url="/news/what-shipped-since-may"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[340px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[400px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Ship diary
          </p>
          <h3 className="font-display text-lg font-bold tracking-tight">May → September</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            The cursor walks the log. Later rows scroll into view.
          </p>

          <div className="relative mt-4">
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-border" />
            <div
              className="absolute left-[7px] top-3 w-px origin-top bg-[#E85D3A] transition-[height] duration-700 ease-in-out"
              style={{ height: `calc(${spine}% - 12px)` }}
            />
            <ul className="space-y-3">
              {ENTRIES.map((e, i) => {
                const on = done.includes(i);
                const now = active === i;
                return (
                  <li
                    key={e.title}
                    data-d={`row${i}`}
                    className={cn(
                      "relative flex items-start gap-3 rounded-xl border py-2 pl-2 pr-3 transition-all duration-500",
                      now
                        ? "border-foreground/25 bg-secondary/70 shadow-sm"
                        : on
                          ? "border-border bg-background"
                          : "border-transparent opacity-60",
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 bg-card transition-colors",
                        on ? "border-transparent" : "border-border",
                      )}
                      style={
                        on
                          ? { backgroundColor: e.tone, boxShadow: `0 0 0 3px ${e.tone}33` }
                          : undefined
                      }
                    />
                    <div className="min-w-0">
                      <p
                        className="text-[11px] font-semibold tabular-nums"
                        style={{ color: on ? e.tone : undefined }}
                      >
                        {e.date}
                      </p>
                      <p className="text-sm font-semibold">{e.title}</p>
                      <p className="text-xs text-muted-foreground">{e.note}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
