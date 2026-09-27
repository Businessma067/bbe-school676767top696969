import { useRef, useState } from "react";
import { BookOpen, Check, ChevronDown, Clock, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

const CHAPTERS = [
  {
    id: 1,
    title: "Scarcity & choice",
    subs: ["1.1 Opportunity cost", "1.2 Production possibility"],
  },
  {
    id: 3,
    title: "Types of businesses",
    subs: ["3.1 Factors of production", "3.2 Stakeholders", "3.3 Sectors"],
  },
];

/** Original Mock Builder chrome — topic picks, count, weight drag, build. Not MockBuilderSimulator. */
export function DemoBuilderMix({ caption }: DemoProps) {
  const [open, setOpen] = useState(3);
  const [picked, setPicked] = useState<string[]>([]);
  const [count, setCount] = useState(10);
  const [weight, setWeight] = useState({ x: 50, y: 48 });
  const [building, setBuilding] = useState(false);
  const [ready, setReady] = useState(false);
  const handleRef = useRef<HTMLSpanElement | null>(null);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setOpen(3);
    setPicked([]);
    setCount(10);
    setWeight({ x: 50, y: 48 });
    setBuilding(false);
    setReady(false);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(450);

    await api.moveTo('[data-d="ch3"]');
    await api.click();
    setOpen(3);
    await api.wait(400);

    for (const id of ["3.1", "3.2"]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="sub-${id}"]`);
      await api.click();
      setPicked((p) => [...p, id]);
      await api.wait(380);
    }

    await api.moveTo('[data-d="count"]');
    await api.click();
    for (const n of [1, 12]) {
      setCount(n);
      await api.wait(220);
    }
    await api.wait(400);

    await api.moveTo('[data-d="handle"]');
    await api.click();
    const path = [
      { x: 68, y: 32 },
      { x: 38, y: 62 },
      { x: 55, y: 44 },
    ];
    let from = { x: 50, y: 48 };
    for (const p of path) {
      if (api.cancelled()) return;
      const start = from;
      const dist = Math.hypot(p.x - start.x, p.y - start.y);
      await api.tween(700 + dist * 4, (eased) => {
        const x = start.x + (p.x - start.x) * eased;
        const y = start.y + (p.y - start.y) * eased;
        const el = handleRef.current;
        if (el) {
          el.style.left = `${x}%`;
          el.style.top = `${y}%`;
        }
        setWeight({ x, y });
        api.snapTo('[data-d="handle"]');
      });
      from = p;
      await api.wait(280);
    }

    await api.moveTo('[data-d="build"]');
    await api.click();
    setBuilding(true);
    await api.wait(1200);
    setBuilding(false);
    setReady(true);
    await api.wait(1600);
  }, []);

  return (
    <DemoShell
      url="/products/custom-mock-builder"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[320px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[360px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Custom Mock Builder
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              Economics
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="font-display text-sm font-semibold">Select topics</h3>
              <ul className="mt-2 space-y-2">
                {CHAPTERS.map((ch) => (
                  <li key={ch.id} className="overflow-hidden rounded-xl border border-border">
                    <div
                      data-d={`ch${ch.id}`}
                      className="flex items-center gap-2 bg-secondary/30 px-3 py-2 text-sm"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform",
                          open === ch.id ? "rotate-0" : "-rotate-90",
                        )}
                      />
                      <span className="font-display font-semibold">Ch {ch.id}</span>
                      <span className="truncate text-xs text-muted-foreground">{ch.title}</span>
                    </div>
                    {open === ch.id ? (
                      <ul className="divide-y divide-border/60 px-2 py-1">
                        {ch.subs.map((s) => {
                          const id = s.slice(0, 3);
                          const on = picked.includes(id);
                          return (
                            <li key={s} className="flex items-center gap-2 px-2 py-2 text-sm">
                              <span
                                data-d={`sub-${id}`}
                                className={cn(
                                  "grid h-4 w-4 place-items-center rounded border-2",
                                  on ? "text-white" : "border-border",
                                )}
                                style={
                                  on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined
                                }
                              >
                                {on ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                              </span>
                              {s}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <span>Questions</span>
                <span
                  data-d="count"
                  className="w-16 rounded-md border border-border bg-background px-2 py-1.5 text-center font-semibold tabular-nums"
                  style={{ borderColor: count !== 10 ? ACCENT : undefined }}
                >
                  {count}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {count * 3} min
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/20 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Topic weights
              </p>
              <div className="relative mt-2 aspect-square w-full max-w-[180px] rounded-lg border border-dashed border-border bg-background">
                <span
                  className="absolute left-2 top-2 text-[10px] font-semibold"
                  style={{ color: ACCENT }}
                >
                  3.1
                </span>
                <span className="absolute right-2 top-2 text-[10px] font-semibold text-[#c8763a]">
                  3.2
                </span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#10b981]">
                  Mix
                </span>
                <span
                  ref={handleRef}
                  data-d="handle"
                  className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
                  style={{
                    left: `${weight.x}%`,
                    top: `${weight.y}%`,
                    backgroundColor: ACCENT,
                  }}
                />
              </div>
              <p className="mt-2 text-[11px] font-semibold tabular-nums text-muted-foreground">
                3.1 {Math.round(100 - weight.y)}% · 3.2 {Math.round(weight.x)}%
              </p>
            </div>
          </div>

          <span
            data-d="build"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: ACCENT }}
          >
            {building ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Building…
              </>
            ) : ready ? (
              <>Ready · {count} questions</>
            ) : (
              <>
                <BookOpen className="h-4 w-4" /> Create Economics Mock
              </>
            )}
          </span>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
