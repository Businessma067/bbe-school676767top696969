import { useState } from "react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CoursePassage, CourseSolution } from "./CourseSolution";
import { scrollPanelTo } from "./course-motion";
import { COURSE_ENGLISH, COURSE_ENGLISH_HIGHLIGHTS, COURSE_ENGLISH_PASSAGE } from "./course-tasks";

const TASK = COURSE_ENGLISH;
const SHOW_AT = 2;
const HIGHLIGHT = COURSE_ENGLISH_HIGHLIGHTS[SHOW_AT] ?? "";

/** Course · English: ENG T.1.01, then Show solution in the text on the real line. */
export function CourseEnglishDemo() {
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(180);
    setMarks({});
    setChecked(false);
    setExpl(false);
    setShown(false);
    setActive(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(360);

    for (const i of [2, 4, 0]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click(() => setMarks((m) => ({ ...m, [i]: true })));
      await api.wait(180);
    }

    await api.moveTo('[data-d="submit"]');
    await api.click(() => setChecked(true));
    await api.wait(280);

    await api.moveTo('[data-d="expl"]');
    await api.click(() => setExpl(true));
    await api.wait(960);

    await scrollPanelTo(api, '[data-d="expl-scroll"]', '[data-d="show"]');
    await api.moveTo('[data-d="show"]');
    setActive(SHOW_AT);
    await api.click(() => setShown(true));
    await api.wait(280);
    await api.moveTo('[data-d="line"]');
    await api.wait(1100);
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
          dimmed={expl && !shown}
          answerKey={TASK.answerKey}
          explanations={TASK.explanations}
          active={active}
          locateAt={SHOW_AT}
          located={shown}
        />
      }
    >
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
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{TASK.context}</p>
      <CoursePassage text={COURSE_ENGLISH_PASSAGE} highlight={HIGHLIGHT} active={shown} />
      <DemoStatementTable
        statements={TASK.statements}
        marks={marks}
        checked={checked}
        answerKey={TASK.answerKey}
      />
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
