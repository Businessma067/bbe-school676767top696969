import { useState } from "react";
import { Ti30MathPrint } from "@/components/calculator/Ti30MathPrint";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { howItWorksGlide, useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CourseSolution } from "./CourseSolution";
import { CourseTimedBar } from "./CourseTimedBar";
import { parkCalcKeys, pressCalcKey, readPanel } from "./course-motion";
import { COURSE_MATH, type CourseTask } from "./course-tasks";
import { EN_CHROME, type CourseChrome } from "./course-copy";

const TASK = COURSE_MATH;
const KEYS = ["1", "2", "×", "1", "1", "="];
const DEFAULT_MARKS = [3, 4];

/** Course · Math: MATH 12.01, timed 1:30, the exam calculator, then the bank solution. */
export function CourseMathDemo({
  task = TASK,
  chrome = EN_CHROME,
  markAt = DEFAULT_MARKS,
  rest = 1,
  lockCopy = false,
  showOverview = true,
}: {
  task?: CourseTask;
  chrome?: CourseChrome;
  markAt?: number[];
  rest?: number;
  lockCopy?: boolean;
  showOverview?: boolean;
} = {}) {
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

    await api.moveTo('[data-d="calc"]');
    await api.click(() => setCalc(true));
    await parkCalcKeys(api, KEYS);
    for (const key of KEYS) {
      if (api.cancelled()) return;
      await pressCalcKey(api, key);
    }
    await api.moveTo('[data-d="calc"]');
    await api.click(() => setCalc(false));

    for (const i of markAt) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click(() => setMarks((m) => ({ ...m, [i]: true })));
    }

    await api.moveTo('[data-d="submit"]');
    await api.click(() => setChecked(true));

    await api.moveTo('[data-d="expl"]');
    await api.click(() => {
      setExpl(true);
      setActive(0);
    });
    await readPanel(api, '[data-d="expl-scroll"]');
    await api.wait(200);
  }, [markAt, rest], { rest, glideScale: howItWorksGlide(rest) });

  const score = demoCorrectCount(marks, task.answerKey);

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
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
            answerKey={task.answerKey}
            explanations={task.explanations}
            shown={task.explanations.map((_, index) => index)}
            active={active}
            math
            full
            overview={showOverview ? task.overview : undefined}
            chrome={chrome}
          />
        </>
      }
    >
      <CourseTimedBar on={timed} calculator calcOpen={calc} chrome={chrome} />
      <div className="mb-3 flex flex-wrap items-center gap-2" data-case={task.caseId}>
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          {chrome.taskLabel}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {task.caseId}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {task.chapter}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{task.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{task.context}</p>
      <DemoStatementTable
        statements={task.statements}
        marks={marks}
        checked={checked}
        answerKey={task.answerKey}
        statementLabel={chrome.statement}
        trueLabel={chrome.trueColumn}
      />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-2">
        {!checked ? (
          <span data-d="submit" className={`${practiceSubmitButtonClass} min-w-56`}>
            {chrome.submit}
          </span>
        ) : (
          <span data-d="expl" className={`${practiceExplanationToggleClass(expl)} min-w-56`}>
            {expl ? chrome.hideExplanation : chrome.explanation}
          </span>
        )}
        {checked ? (
          <span className="text-sm font-semibold text-muted-foreground">
            {score}/{task.answerKey.length} {chrome.correct}
          </span>
        ) : (
          <span data-d="expl" className="invisible">
            {chrome.explanation}
          </span>
        )}
      </div>
    </CourseFrame>
  );
}
