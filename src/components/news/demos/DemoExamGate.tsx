import { useState } from "react";
import { Clock, Lock, UserRound } from "lucide-react";
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

/** MockBuilder FIRST_QUESTION verbatim. */
const QUESTION = {
  caseId: "ECON-3.07",
  chapter: "Chapter 3 · Focus on different types of businesses",
  title: "Factors of production and business sectors",
  context:
    "A family-run bakery buys flour from local farms, bakes bread in its own rented workshop and sells it in two small shops in the city. The owner works in the bakery every day and employs four staff members.",
  statements: [
    "The rented workshop and the ovens are capital used in the production process.",
    "Buying flour from local farms means the bakery itself operates in the primary sector.",
    "Baking the bread is a secondary-sector activity, while running the two shops is tertiary.",
    "The work of the owner is entrepreneurship, since the owner also organises the other factors of production and bears the risk.",
    "Because the bakery is small and family-run, it cannot be described as profit-oriented.",
  ],
};

/** Free Demo Exam: account gate → timed start → mark A,C,D on full 5-statement cluster. */
export function DemoExamGate({ caption }: DemoProps) {
  const [gate, setGate] = useState(false);
  const [exam, setExam] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [seconds, setSeconds] = useState(7200);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(240);
    setGate(false);
    setExam(false);
    setMarks({});
    setSeconds(7200);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
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

    for (const i of [0, 2, 3]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      await api.wait(420);
    }
    await api.wait(1400);
  }, []);

  return (
    <DemoShell url="/demo-mock" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[480px] overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm transition-opacity duration-500 sm:h-[560px] sm:p-5",
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
                Same True/False clusters and partial-credit scoring. The page is public. Starting
                saves the attempt.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["2 hours", "24 questions", "No credit card"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>
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
                <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                  {QUESTION.caseId}
                </span>
                <span className="ml-auto inline-flex items-center gap-2 rounded-lg border border-caramel-deep bg-caramel-deep px-3 py-2 text-xs font-bold tabular-nums text-primary-foreground">
                  <Clock className="h-4 w-4" />
                  {formatClock(seconds)}
                </span>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {QUESTION.chapter}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold tracking-tight">
                {QUESTION.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{QUESTION.context}</p>
              <DemoStatementTable statements={QUESTION.statements} marks={marks} />
            </>
          )}
        </div>

        {gate && !exam ? (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-2xl bg-black/60 p-4">
            <div className="news-uniq-rise w-full max-w-xs rounded-2xl border border-border bg-card p-4 shadow-2xl">
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
