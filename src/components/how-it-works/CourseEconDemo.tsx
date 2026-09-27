import { useState } from "react";
import { Timer } from "lucide-react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CourseSolution } from "./CourseSolution";
import { scrollPanelTo } from "./course-motion";

const STMTS = [
  "The rented workshop and the ovens are capital used in the production process.",
  "Buying flour from local farms means the bakery itself operates in the primary sector.",
  "Baking the bread is a secondary-sector activity, while running the two shops is tertiary.",
  "The work of the owner is entrepreneurship, since the owner also organises the other factors and bears the risk.",
  "Because the bakery is small and family-run, it cannot be described as profit-oriented.",
];
const KEY = [true, false, true, true, false];
const NOTES = [
  {
    title: "A. → True",
    body: "Rented premises and ovens are capital — produced means of production used in the bakery.",
  },
  {
    title: "B. → False",
    body: "Buying flour does not put the bakery in the primary sector. The farms are primary; the bakery is not.",
  },
  {
    title: "C. → True",
    body: "Making the bread is secondary-sector production. Selling it in the shops is a tertiary service.",
  },
  {
    title: "D. → True",
    body: "The owner organises land, labour and capital and bears the business risk — that is entrepreneurship.",
  },
  {
    title: "E. → False",
    body: "Size and family ownership do not decide the objective. A small firm can still be profit-oriented.",
  },
];

/** Course · Economics: timed case, mark A–E, then the explanation beside each statement. */
export function CourseEconDemo() {
  const [timed, setTimed] = useState(false);
  const [seconds, setSeconds] = useState(90);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setTimed(false);
    setSeconds(90);
    setMarks({});
    setChecked(false);
    setExpl(false);
    setActive(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(420);

    await api.moveTo('[data-d="timed"]');
    await api.click();
    setTimed(true);
    setSeconds(89);
    await api.wait(320);

    for (const i of [0, 2, 3, 1]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      setSeconds((s) => Math.max(80, s - 1));
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

    for (let i = 0; i < NOTES.length; i++) {
      if (api.cancelled()) return;
      setActive(i);
      await scrollPanelTo(api, '[data-d="expl-scroll"]', `[data-d="e${i}"]`);
      await api.moveTo(`[data-d="e${i}"]`);
      await api.wait(420);
    }
    await api.wait(700);
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
        <CourseSolution
          open={expl}
          kicker="Explanation"
          answerKey={KEY}
          notes={NOTES}
          active={active}
        />
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task 7
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          ECON-3.07
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          Chapter 3 · Types of businesses
        </span>
        <span
          data-d="timed"
          className={cn(
            "ml-auto inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
            timed
              ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
              : "border-border bg-background text-foreground",
          )}
        >
          <Timer className="h-4 w-4" />
          {timed ? `Timed Mode · 1:${String(seconds).padStart(2, "0")}` : "Timed Mode"}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">
        Factors of production and business sectors
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        A family-run bakery buys flour from local farms, bakes bread in its own rented workshop and
        sells it in two small shops in the city. The owner works in the bakery every day and employs
        four staff members.
      </p>
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
