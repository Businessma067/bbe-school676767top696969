import { useState } from "react";
import {
  practiceExplanationToggleClass,
  practiceInlineLocateButtonClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { scrollPanelTo } from "./course-motion";

const PASSAGE = [
  "The council approved a new tram line through the old district last spring.",
  "Nevertheless, weekday ridership on the existing buses stayed flat.",
  "In spite of the extra stops, many residents still drove to work.",
];

const STMTS = [
  "“Nevertheless” contrasts the new tram line with ridership that stayed flat.",
  "The passage says the new line replaced every bus route.",
  "“In spite of” is followed by a noun phrase, not a finite clause.",
  "Residents stopped driving once the extra stops opened.",
  "Weekday bus ridership did not rise after the tram was approved.",
];
const KEY = [true, false, true, false, true];

/** Course · English: mark the passage, then Show solution in the text jumps to the line. */
export function CourseEnglishDemo() {
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [shown, setShown] = useState(false);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setMarks({});
    setChecked(false);
    setExpl(false);
    setShown(false);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(420);

    for (const i of [0, 2, 4, 1]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      await api.wait(240);
    }

    await api.moveTo('[data-d="submit"]');
    await api.click();
    setChecked(true);
    await api.flush();
    await api.wait(360);

    await api.moveTo('[data-d="expl"]');
    await api.click();
    setExpl(true);
    await api.wait(960);

    await scrollPanelTo(api, '[data-d="expl-scroll"]', '[data-d="show"]');
    await api.moveTo('[data-d="show"]');
    await api.click();
    setShown(true);
    await api.flush();
    await api.wait(520);
    await api.moveTo('[data-d="line"]');
    await api.wait(1200);
  }, []);

  const score = demoCorrectCount(marks, KEY);

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      overlay={
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[5] bg-black/75 transition-opacity duration-700 ease-in-out",
              expl && !shown ? "opacity-100" : "opacity-0",
            )}
          />
          <div
            className={cn(
              "absolute inset-y-0 right-0 z-10 w-full transition-transform duration-[900ms] ease-in-out sm:w-[54%]",
              expl ? "translate-x-0" : "pointer-events-none translate-x-[105%]",
            )}
          >
            <div
              data-d="expl-scroll"
              className="practice-scroll h-full overflow-y-auto border-l border-border bg-card p-4 shadow-2xl sm:p-5"
            >
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">
                Explanation
              </p>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  A
                </span>
                <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                  TRUE
                </span>
                <span data-d="show" className={practiceInlineLocateButtonClass(shown)}>
                  {shown ? "Located in text" : "Show solution in the text"}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                “Nevertheless” turns against the approval: the line was agreed, and weekday bus
                ridership still stayed flat.
              </p>
            </div>
          </div>
        </>
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task 4
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          ENG-2.08
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          Reading · Connectors
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">The tram line</h3>
      <div className="mt-3 space-y-2 rounded-xl border border-border bg-background px-4 py-3 font-serif text-sm leading-relaxed">
        <p>{PASSAGE[0]}</p>
        <p>
          <span data-d="line" className={shown ? "passage-ai-highlight" : undefined}>
            {PASSAGE[1]}
          </span>
        </p>
        <p>{PASSAGE[2]}</p>
      </div>
      <DemoStatementTable statements={STMTS} marks={marks} checked={checked} answerKey={KEY} />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        {!checked ? (
          <span data-d="submit" className={practiceSubmitButtonClass}>
            Check Answers / Submit
          </span>
        ) : (
          <span data-d="expl" className={practiceExplanationToggleClass(expl)}>
            {expl ? "Hide Explanation" : "Explanation"}
          </span>
        )}
        {checked ? (
          <span className="text-sm font-semibold text-muted-foreground">
            {score}/{KEY.length} correct
          </span>
        ) : (
          <span data-d="expl" className="invisible">
            Explanation
          </span>
        )}
      </div>
    </CourseFrame>
  );
}
