import { useRef, useState } from "react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { DEMO_STATEMENT_LETTERS, DemoStatementTable, demoCorrectCount } from "./DemoStatementTable";
import { useDemoPlayer } from "./useDemoPlayer";

/** ENG G.18.07 from how-it-works-tasks.ts */
const TASK = {
  caseId: "ENG G.18.07",
  chapter: "Prepositions & Fixed Patterns",
  title: "Task 7",
  context: "Decide whether each sentence is grammatically correct as written.",
  statements: [
    "She goes to work by foot every morning.",
    "They travelled to the coast by train.",
    "The match starts in Monday evening.",
    "I usually read in night when the house is quiet.",
    "We met on a cold Friday afternoon.",
  ],
  answerKey: [false, true, false, false, true],
  explanations: [
    "Walking uses on foot, not by foot. By is for vehicles (by bus, by train).",
    "By train correctly names the means of transport, the default by + vehicle lock.",
    "Days and dated evenings take on: on Monday evening, not in Monday evening.",
    "At night is the fixed time phrase. Bare in night is not standard.",
    "On plus a day or date phrase is standard: on a cold Friday afternoon.",
  ],
};

/** Welcome / news feed peek: English practice cluster with explanation open. */
export function DemoWelcomePeek({ caption }: DemoProps) {
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);
  const explRef = useRef<HTMLDivElement | null>(null);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setMarks({});
    setChecked(false);
    setExpl(false);
    setActive(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    if (explRef.current) explRef.current.scrollTop = 0;
    setFade(false);
    await api.wait(450);

    // Mark B + E (true), then wrongly mark A
    for (const i of [1, 4]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      await api.wait(380);
    }
    await api.moveTo('[data-d="m0"]');
    await api.click();
    setMarks((m) => ({ ...m, 0: true }));
    await api.wait(350);

    await api.moveTo('[data-d="submit"]');
    await api.click();
    setChecked(true);
    await api.wait(600);

    await api.moveTo('[data-d="expl"]');
    await api.click();
    setExpl(true);
    // Panel slides for 900ms — wait until it has settled before chasing rows.
    await api.wait(960);
    for (let i = 0; i < TASK.explanations.length; i++) {
      if (api.cancelled()) return;
      const panel = explRef.current;
      const item = panel?.querySelector<HTMLElement>(`[data-d="e${i}"]`);
      if (panel && item) {
        const pb = panel.getBoundingClientRect();
        const ib = item.getBoundingClientRect();
        const target = Math.max(
          0,
          Math.min(
            panel.scrollTop + (ib.top - pb.top) - 24,
            panel.scrollHeight - panel.clientHeight,
          ),
        );
        const start = panel.scrollTop;
        const change = target - start;
        if (Math.abs(change) > 1) {
          await api.tween(900, (eased) => {
            panel.scrollTop = start + change * eased;
          });
        }
      }
      await api.moveTo(`[data-d="e${i}"]`);
      setActive(i);
      await api.wait(520);
    }
    setActive(-1);
    if (explRef.current) {
      const panel = explRef.current;
      const start = panel.scrollTop;
      if (start > 1) {
        await api.tween(900, (eased) => {
          panel.scrollTop = start * (1 - eased);
        });
      }
    }
    await api.wait(700);
  }, []);

  const score = demoCorrectCount(marks, TASK.answerKey);

  return (
    <DemoShell url="/demo-practice/english" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          className={cn(
            "relative h-[480px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-opacity duration-500 sm:h-[560px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div ref={scrollRef} className="news-uniq-scroll h-full overflow-y-auto p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Task 7
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                {TASK.caseId}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                {TASK.chapter}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold tracking-tight">{TASK.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{TASK.context}</p>
            <DemoStatementTable
              statements={TASK.statements}
              marks={marks}
              checked={checked}
              answerKey={TASK.answerKey}
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {!checked ? (
                  <span data-d="submit" className={practiceSubmitButtonClass}>
                    Check Answers / Submit
                  </span>
                ) : (
                  <span data-d="expl" className={practiceExplanationToggleClass(expl)}>
                    {expl ? "Hide Explanation" : "Explanation"}
                  </span>
                )}
              </div>
              {checked ? (
                <span className="text-sm font-semibold text-muted-foreground">
                  {score}/{TASK.answerKey.length} correct
                </span>
              ) : null}
            </div>
          </div>

          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[5] rounded-2xl bg-black/75 transition-opacity duration-700 ease-in-out",
              expl ? "opacity-100" : "opacity-0",
            )}
          />

          <div
            className={cn(
              "absolute inset-y-0 right-0 z-10 w-full transition-transform duration-[900ms] ease-in-out lg:w-[56%]",
              expl ? "translate-x-0" : "pointer-events-none translate-x-[105%]",
            )}
          >
            <div
              ref={explRef}
              className="practice-scroll h-full max-h-full overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6"
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">
                Explanation
              </p>

              <section className="mb-8 border-b border-border/60 pb-7">
                <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
                  Answer key
                </p>
                <table className="w-full table-fixed border-collapse border border-foreground/20 text-center text-[12px] shadow-sm">
                  <thead>
                    <tr className="bg-foreground text-background">
                      {TASK.answerKey.map((_, i) => (
                        <th
                          key={i}
                          className="border-b border-foreground/20 px-1 py-2 text-[11px] font-bold uppercase tracking-wide sm:text-[12px]"
                        >
                          {DEMO_STATEMENT_LETTERS[i]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      {TASK.answerKey.map((isTrue, i) => (
                        <td
                          key={i}
                          className="border-border px-0.5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-foreground sm:text-[12px]"
                        >
                          {isTrue ? "TRUE" : "FALSE"}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </section>

              <div className="space-y-6">
                {TASK.explanations.map((t, i) => (
                  <div
                    key={i}
                    data-d={`e${i}`}
                    className={cn(
                      "rounded-xl border p-4 transition-all duration-700 ease-out",
                      active === i
                        ? "border-primary/40 bg-primary/5 opacity-100 shadow-sm"
                        : "border-transparent bg-transparent opacity-45",
                    )}
                  >
                    <p className="mb-2 font-display text-sm font-bold text-foreground">
                      {DEMO_STATEMENT_LETTERS[i]}. → {TASK.answerKey[i] ? "True" : "False"}
                    </p>
                    <p className="text-[13px] leading-relaxed text-foreground/90">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
