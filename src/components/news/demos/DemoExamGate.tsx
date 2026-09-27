import { useState } from "react";
import { Check, Clock, Lock, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";
const STMTS = [
  "Capital includes rented ovens used every baking day.",
  "Buying flour alone makes the bakery a primary-sector firm.",
  "Retail shops are a tertiary-sector activity.",
];

/** Free Demo Exam: account gate → timed start → mark statements. */
export function DemoExamGate({ caption }: DemoProps) {
  const [gate, setGate] = useState(true);
  const [exam, setExam] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [seconds, setSeconds] = useState(7200);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(240);
      setGate(true);
      setExam(false);
      setMarks({});
      setSeconds(7200);
      setFade(false);
      await api.wait(500);

      await api.moveTo('[data-d="start"]');
      await api.click();
      setGate(true);
      await api.wait(700);

      await api.moveTo('[data-d="account"]');
      await api.click();
      setGate(false);
      setExam(true);
      await api.wait(900);

      for (const i of [0, 2]) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="m${i}"]`);
        await api.click();
        setMarks((m) => ({ ...m, [i]: true }));
        await api.wait(420);
      }
      await api.wait(1400);
    },
    [],
  );

  return (
    <DemoShell url="/demo-mock" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[340px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[400px] sm:p-5",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          {!exam ? (
            <div className="flex h-full flex-col justify-center">
              <span
                className="mb-3 w-fit rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Demo Exam
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight">Free hard mock</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Same True/False clusters and partial-credit scoring. Free account required to save
                your attempt — no credit card.
              </p>
              <span
                data-d="start"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: ACCENT }}
              >
                <Clock className="h-4 w-4" />
                Start Demo Exam
              </span>
            </div>
          ) : (
            <>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                  Question 1 / 24
                </span>
                <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  ECON-D.01
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-caramel-deep bg-caramel-deep px-2.5 py-1.5 text-[11px] font-bold tabular-nums text-primary-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {Math.floor(seconds / 3600)}:{String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:00
                </span>
              </div>
              <h3 className="font-display text-base font-bold">Factors of production</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                A family bakery rents ovens, buys flour from farms, and sells bread in two shops.
              </p>
              <ol className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
                {STMTS.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 px-3 py-2.5">
                    <span className="w-5 text-center text-xs font-bold text-muted-foreground">
                      {"ABC"[i]}.
                    </span>
                    <p className="flex-1 text-sm leading-snug">{s}</p>
                    <span
                      data-d={`m${i}`}
                      className={cn(
                        "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                        marks[i]
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background",
                      )}
                    >
                      {marks[i] ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                    </span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>

        {gate && !exam ? (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-2xl bg-black/55 p-4">
            <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-4 shadow-2xl">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Lock className="h-4 w-4 text-muted-foreground" />
                Free account to save
              </div>
              <p className="text-xs text-muted-foreground">
                Sign up with email or Google. No payment for Demo Exam.
              </p>
              <span
                data-d="account"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2.5 text-sm font-semibold text-background"
              >
                <UserRound className="h-4 w-4" />
                Continue with free account
              </span>
            </div>
          </div>
        ) : null}

        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
