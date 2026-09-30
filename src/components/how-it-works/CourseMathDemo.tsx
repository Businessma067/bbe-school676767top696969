import { useState } from "react";
import { Ti30MathPrint } from "@/components/calculator/Ti30MathPrint";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CourseSolution } from "./CourseSolution";
import { CourseTimedBar } from "./CourseTimedBar";
import { parkCalcKeys, pressCalcKey, readPanel } from "./course-motion";
import { COURSE_MATH } from "./course-tasks";

const TASK = COURSE_MATH;
const KEYS = ["1", "2", "×", "1", "1", "="];

/** Course · Math: MATH 12.01, timed 1:30, the exam calculator, then the bank solution. */
export function CourseMathDemo() {
  const [timed, setTimed] = useState(false);
  const [calc, setCalc] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(180);
    setTimed(false);
    setCalc(false);
    setMarks({});
    setChecked(false);
    setExpl(false);
    setActive(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(200);

    await api.moveTo('[data-d="timed"]');
    await api.click(() => setTimed(true));
    await api.wait(70);

    await api.moveTo('[data-d="calc"]');
    await api.click(() => setCalc(true));
    await api.wait(70);
    await parkCalcKeys(api, KEYS);
    for (const key of KEYS) {
      if (api.cancelled()) return;
      await pressCalcKey(api, key);
      await api.wait(50);
    }
    await api.wait(100);
    await api.moveTo('[data-d="calc"]');
    await api.click(() => setCalc(false));
    await api.wait(70);

    for (const i of [3, 4]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click(() => setMarks((m) => ({ ...m, [i]: true })));
      await api.wait(50);
    }

    await api.moveTo('[data-d="submit"]');
    await api.click(() => setChecked(true));
    await api.wait(70);

    await api.moveTo('[data-d="expl"]');
    await api.click(() => {
      setExpl(true);
      setActive(0);
    });
    await api.wait(80);
    await readPanel(api, '[data-d="expl-scroll"]');
    await api.wait(200);
  }, []);

  const score = demoCorrectCount(marks, TASK.answerKey);

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      overlay={
        <>
          {calc ? (
            <div className="pointer-events-none absolute bottom-2 left-2 right-2 top-2 z-[8] sm:left-auto sm:top-[4.5rem] sm:w-[19rem]">
              <div data-d="calc-panel" className="pointer-events-auto h-full min-h-0">
                <Ti30MathPrint compact hideChrome className="h-full shadow-xl" />
              </div>
            </div>
          ) : null}
          <CourseSolution
            open={expl}
            answerKey={TASK.answerKey}
            explanations={TASK.explanations}
            shown={TASK.explanations.map((_, index) => index)}
            active={active}
            math
            full
            overview={TASK.overview}
          />
        </>
      }
    >
      <CourseTimedBar on={timed} calculator calcOpen={calc} />
      <div className="mb-3 flex flex-wrap items-center gap-2" data-case={TASK.caseId}>
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Task 1
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
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        {!checked ? (
          <span data-d="submit" className={`${practiceSubmitButtonClass} min-w-56`}>
            Check Answers / Submit
          </span>
        ) : (
          <span data-d="expl" className={`${practiceExplanationToggleClass(expl)} min-w-56`}>
            {expl ? "Hide Explanation" : "Explanation"}
          </span>
        )}
        {checked ? (
          <span className="text-sm font-semibold text-muted-foreground">
            {score}/{TASK.answerKey.length} correct
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
