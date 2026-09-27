import { useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { DemoStatementTable } from "./DemoStatementTable";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

function formatClock(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const QUESTIONS = [
  {
    caseId: "ECON-3.12",
    chapter: "Chapter 3 · Focus on different types of businesses",
    title: "Stakeholders of a growing company",
    context:
      "A regional logistics company plans to open a new depot. Local residents complain about noise, employees ask for more shifts, and the bank that financed the fleet asks for updated figures.",
    statements: [
      "Employees are internal stakeholders, while local residents are external stakeholders.",
      "The bank is a stakeholder because the repayment of its loan depends on the company's performance.",
      "Only shareholders can be described as stakeholders of the company.",
      "Conflicting stakeholder interests can force management to compromise between growth and local acceptance.",
      "Banks can be external stakeholders through lending even when they hold no equity in the firm.",
    ],
  },
  {
    caseId: "ECON-3.07",
    chapter: "Chapter 3 · Focus on different types of businesses",
    title: "Business sectors across a bakery",
    context:
      "A family-run bakery buys flour from local farms, bakes bread in its own rented workshop and sells it in two small shops in the city.",
    statements: [
      "Primary-sector activity extracts raw materials such as crops, timber and minerals.",
      "Buying flour from farms means the bakery itself operates in the primary sector.",
      "Baking the bread from flour is a secondary-sector manufacturing activity.",
      "Running the two shops that sell the finished bread is a tertiary-sector service.",
      "A single firm can span more than one sector when it both manufactures and retails.",
    ],
  },
] as const;

/** Hard mock sitting: palette jumps, timer, full 5-statement tables. */
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

    for (const i of [0, 1, 3]) {
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
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    await api.wait(700);

    for (const i of [0, 2, 3]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="a${i}"]`);
      await api.click();
      setAnswers((prev) => ({ ...prev, 1: { ...(prev[1] ?? {}), [i]: true } }));
      await api.wait(400);
    }
    await api.wait(1400);
  }, []);

  const q = QUESTIONS[qi]!;
  const marks = answers[qi] ?? {};

  return (
    <DemoShell url="/mock-exams" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[420px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[480px] sm:p-5",
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
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              Question {qi + 1} / 12
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
              {q.caseId}
            </span>
            <span className="ml-auto inline-flex items-center gap-2 rounded-lg border border-caramel-deep bg-caramel-deep px-3 py-2 text-xs font-bold tabular-nums text-primary-foreground">
              <Clock className="h-4 w-4" />
              {formatClock(seconds)}
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
                        ? "border-foreground bg-foreground text-background ring-2 ring-foreground/25 ring-offset-2 ring-offset-card"
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
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {q.chapter}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold tracking-tight">{q.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{q.context}</p>
            <DemoStatementTable statements={[...q.statements]} marks={marks} dataPrefix="a" />
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
