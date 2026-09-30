import { useState } from "react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CourseSolution } from "./CourseSolution";
import { CourseTimedBar } from "./CourseTimedBar";
import { readPanel } from "./course-motion";
import { COURSE_ECON } from "./course-tasks";

const TASK = COURSE_ECON;

/** Course · Economics: chapter 3, task 1, with the bank explanations. */
export function CourseEconDemo() {
  const [timed, setTimed] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(180);
    setTimed(false);
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

    for (const i of [0, 1]) {
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
        <CourseSolution
          open={expl}
          answerKey={TASK.answerKey}
          explanations={TASK.explanations}
          shown={TASK.explanations.map((_, index) => index)}
          active={active}
          full
        />
      }
    >
      <CourseTimedBar on={timed} />
      <div className="mb-3 flex flex-wrap items-center gap-2" data-case={TASK.caseId}>
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
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
          <span className="invisible" aria-hidden>
            Explanation
          </span>
        )}
      </div>
    </CourseFrame>
  );
}
