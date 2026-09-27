import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

type Fate = "pending" | "keep" | "cut" | "rework";

type Draft = {
  id: string;
  title: string;
  issue: string;
  fate: Fate;
};

const INITIAL: Draft[] = [
  {
    id: "E-41",
    title: "Market equilibrium",
    issue: "False statement too obvious",
    fate: "pending",
  },
  { id: "E-42", title: "Stakeholder conflict", issue: "Key matches the solution", fate: "pending" },
  { id: "E-43", title: "Sector trap", issue: "Hard only via muddy prose", fate: "pending" },
  {
    id: "E-44",
    title: "Opportunity cost bakery",
    issue: "Explanation still soft",
    fate: "pending",
  },
];

const COLUMNS: { id: Fate; label: string }[] = [
  { id: "pending", label: "Inbox" },
  { id: "keep", label: "Keep" },
  { id: "rework", label: "Rework" },
  { id: "cut", label: "Cut" },
];

/** Kanban keep/cut: cards leave the inbox and land in Keep, Rework, or Cut. */
export function DemoBankCraft({ caption }: DemoProps) {
  const [drafts, setDrafts] = useState(INITIAL);
  const [focus, setFocus] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setDrafts(INITIAL);
    setFocus(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(460);

    const actions: Array<{ i: number; fate: Fate; btn: string }> = [
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
      await api.wait(280);
      await api.moveTo(`[data-d="${a.btn}"]`);
      await api.click();
      setDrafts((d) => d.map((x, j) => (j === a.i ? { ...x, fate: a.fate } : x)));
      setFocus(-1);
      await api.wait(420);
    }
    await api.wait(1200);
  }, []);

  return (
    <DemoShell
      url="/news/how-we-build-mock-exams"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[380px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[420px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Exam craft
          </p>
          <h3 className="font-display text-lg font-bold">Keep · Rework · Cut</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A draft leaves the inbox only when the column accepts it.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {COLUMNS.map((col) => {
              const cards = drafts.filter((d) => d.fate === col.id);
              const tone =
                col.id === "keep"
                  ? "border-emerald-300 bg-emerald-50/70"
                  : col.id === "cut"
                    ? "border-red-200 bg-red-50/70"
                    : col.id === "rework"
                      ? "border-amber-300 bg-amber-50/70"
                      : "border-border bg-secondary/30";
              return (
                <section key={col.id} className={cn("rounded-xl border p-2", tone)}>
                  <div
                    data-d={col.id === "pending" ? undefined : col.id}
                    className="mb-2 flex items-center justify-between gap-1"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider">{col.label}</p>
                    <span className="text-[10px] font-semibold tabular-nums text-muted-foreground">
                      {cards.length}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {cards.map((d) => {
                      const index = drafts.findIndex((x) => x.id === d.id);
                      const lifted = focus === index;
                      return (
                        <li
                          key={d.id}
                          data-d={d.fate === "pending" ? `row${index}` : undefined}
                          className={cn(
                            "news-uniq-rise rounded-lg border bg-card px-2 py-1.5 shadow-sm transition-transform",
                            lifted && "scale-[1.03] shadow-md",
                          )}
                        >
                          <span
                            className="rounded px-1 py-0.5 text-[9px] font-bold text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {d.id}
                          </span>
                          <p className="mt-1 text-[11px] font-semibold leading-snug">{d.title}</p>
                          <p className="text-[10px] leading-snug text-muted-foreground">
                            {d.issue}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
