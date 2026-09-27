import { useState } from "react";
import { Check, Scissors, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

type Draft = {
  id: string;
  title: string;
  issue: string;
  fate: "pending" | "keep" | "cut" | "rework";
};

const INITIAL: Draft[] = [
  {
    id: "E-41",
    title: "Market equilibrium wording",
    issue: "False statement too obvious",
    fate: "pending",
  },
  {
    id: "E-42",
    title: "Stakeholder conflict case",
    issue: "Key matches solution",
    fate: "pending",
  },
  {
    id: "E-43",
    title: "Sector classification trap",
    issue: "Hard only via unclear prose",
    fate: "pending",
  },
  {
    id: "E-44",
    title: "Opportunity cost bakery",
    issue: "Needs sharper explanation",
    fate: "pending",
  },
];

/** Exam-craft keep/cut board for how we build mocks. */
export function DemoBankCraft({ caption }: DemoProps) {
  const [drafts, setDrafts] = useState(INITIAL);
  const [focus, setFocus] = useState(-1);
  const [stats, setStats] = useState({ keep: 0, cut: 0, rework: 0 });

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setDrafts(INITIAL);
      setFocus(-1);
      setStats({ keep: 0, cut: 0, rework: 0 });
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(450);

      const actions: Array<{ i: number; fate: Draft["fate"]; btn: string }> = [
        { i: 0, fate: "cut", btn: "cut" },
        { i: 1, fate: "keep", btn: "keep" },
        { i: 2, fate: "cut", btn: "cut" },
        { i: 3, fate: "rework", btn: "rework" },
      ];

      for (const a of actions) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="row${a.i}"]`);
        await api.click();
        setFocus(a.i);
        await api.wait(350);
        await api.moveTo(`[data-d="${a.btn}"]`);
        await api.click();
        setDrafts((d) => d.map((x, j) => (j === a.i ? { ...x, fate: a.fate } : x)));
        if (a.fate === "keep" || a.fate === "cut" || a.fate === "rework") {
          const key = a.fate;
          setStats((s) => ({ ...s, [key]: s[key] + 1 }));
        }
        setFocus(-1);
        await api.wait(480);
      }
      await api.wait(1400);
    },
    [],
  );

  return (
    <DemoShell url="/news/how-we-build-mock-exams" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[380px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[420px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Exam craft
              </p>
              <h3 className="font-display text-lg font-bold">Keep · Rework · Cut</h3>
            </div>
            <div className="flex gap-2 text-[11px] font-semibold">
              <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-emerald-800">
                Keep {stats.keep}
              </span>
              <span className="rounded-md bg-amber-500/15 px-2 py-1 text-amber-800">
                Rework {stats.rework}
              </span>
              <span className="rounded-md bg-red-500/15 px-2 py-1 text-red-800">
                Cut {stats.cut}
              </span>
            </div>
          </div>

          <ul className="space-y-2">
            {drafts.map((d, i) => (
              <li
                key={d.id}
                data-d={`row${i}`}
                className={cn(
                  "rounded-xl border px-3 py-2.5 transition-all duration-400",
                  focus === i
                    ? "border-foreground/30 bg-secondary/60 shadow-sm"
                    : d.fate === "keep"
                      ? "border-emerald-300 bg-emerald-50/80"
                      : d.fate === "cut"
                        ? "border-red-200 bg-red-50/60 opacity-70"
                        : d.fate === "rework"
                          ? "border-amber-300 bg-amber-50/80"
                          : "border-border bg-background",
                )}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="mt-0.5 rounded px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {d.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{d.title}</p>
                    <p className="text-xs text-muted-foreground">{d.issue}</p>
                  </div>
                  {d.fate !== "pending" ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {d.fate}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <span
              data-d="keep"
              className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-800"
            >
              <Check className="h-4 w-4" /> Keep
            </span>
            <span
              data-d="rework"
              className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-900"
            >
              <Scissors className="h-4 w-4" /> Rework
            </span>
            <span
              data-d="cut"
              className="inline-flex items-center gap-1.5 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-800"
            >
              <Trash2 className="h-4 w-4" /> Cut
            </span>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
