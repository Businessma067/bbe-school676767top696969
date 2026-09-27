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
    "A → False. Walking uses on foot, not by foot. By is for vehicles (by bus, by train).",
    "B → True. By train correctly names the means of transport — the default by + vehicle lock.",
    "C → False. Days and dated evenings take on: on Monday evening, not in Monday evening.",
    "D → False. At night is the fixed time phrase. Bare in night is not standard.",
    "E → True. On plus a day or date phrase is standard: on a cold Friday afternoon.",
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
    await api.wait(520);
    for (let i = 0; i < 5; i++) {
      if (api.cancelled()) return;
      setActive(i);
      await api.wait(40);
      const panel = explRef.current;
      const item = panel?.querySelector<HTMLElement>(`[data-d="e${i}"]`);
      if (panel && item) {
        const pb = panel.getBoundingClientRect();
        const ib = item.getBoundingClientRect();
        const target = Math.max(
          0,
          Math.min(
            panel.scrollTop + (ib.top - pb.top) - 12,
            panel.scrollHeight - panel.clientHeight,
          ),
        );
        const start = panel.scrollTop;
        const change = target - start;
        if (Math.abs(change) > 1) {
          await api.tween(700, (eased) => {
            panel.scrollTop = start + change * eased;
          });
        }
      }
      await api.moveTo(`[data-d="e${i}"]`);
      await api.wait(480);
    }
    await api.wait(800);
  }, []);

  const score = demoCorrectCount(marks, TASK.answerKey);

  return (
    <DemoShell url="/demo-practice/english" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          className={cn(
            "relative h-[420px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-opacity duration-500 sm:h-[480px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div ref={scrollRef} className="news-uniq-scroll h-full overflow-y-auto p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Task 7
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                {TASK.caseId}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                {TASK.chapter}
              </span>
            </div>
            <h3 className="font-display text-base font-bold">{TASK.title}</h3>
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
            ref={explRef}
            className={cn(
              "practice-scroll absolute inset-y-0 right-0 z-10 w-[92%] max-w-sm overflow-y-auto border-l border-border bg-card p-4 shadow-2xl transition-transform duration-700 ease-in-out sm:w-[70%]",
              expl ? "translate-x-0" : "translate-x-[105%]",
            )}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">
              Explanation
            </p>
            <div className="space-y-3">
              {TASK.explanations.map((t, i) => (
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
                  <p className="mb-1 font-display text-sm font-bold text-foreground">
                    {DEMO_STATEMENT_LETTERS[i]}. → {TASK.answerKey[i] ? "True" : "False"}
                  </p>
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
