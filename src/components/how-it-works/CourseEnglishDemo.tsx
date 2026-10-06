import { useState } from "react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { howItWorksGlide, useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CoursePassage, CourseSolution } from "./CourseSolution";
import { scrollPanelTo } from "./course-motion";
import { COURSE_ENGLISH, COURSE_ENGLISH_HIGHLIGHTS, COURSE_ENGLISH_PASSAGE, type CourseTask } from "./course-tasks";
import { EN_CHROME, type CourseChrome } from "./course-copy";

const TASK = COURSE_ENGLISH;
const SHOW_AT = 2;
const HIGHLIGHT = COURSE_ENGLISH_HIGHLIGHTS[SHOW_AT] ?? "";
const PASSAGE =
  COURSE_ENGLISH_PASSAGE.split(/\n\n/).find((paragraph) => paragraph.includes(HIGHLIGHT)) ??
  COURSE_ENGLISH_PASSAGE;
const DEFAULT_MARKS = [2, 4];

/** Course · English: ENG T.1.01, then Show solution in the text on the real line. */
export function CourseEnglishDemo({
  task = TASK,
  passage = PASSAGE,
  highlight = HIGHLIGHT,
  showAt = SHOW_AT,
  markAt = DEFAULT_MARKS,
  chrome = EN_CHROME,
  rest = 1,
  lockCopy = false,
}: {
  task?: CourseTask;
  passage?: string;
  highlight?: string;
  showAt?: number;
  markAt?: number[];
  chrome?: CourseChrome;
  rest?: number;
  lockCopy?: boolean;
} = {}) {
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
    await api.wait(200);

    for (const i of markAt) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click(() => setMarks((m) => ({ ...m, [i]: true })));
      await api.wait(50);
    }

    await api.moveTo('[data-d="submit"]');
    await api.click(() => setChecked(true));
    await api.wait(70);

    await api.moveTo('[data-d="expl"]');
    await api.click(() => setExpl(true));
    await api.wait(rest > 1 ? 420 : 80);

    await scrollPanelTo(api, '[data-d="expl-scroll"]', '[data-d="show"]');
    await api.moveTo('[data-d="show"]');
    setActive(showAt);
    await api.click(() => setShown(true));
    await api.wait(70);
    await api.moveTo('[data-d="line"]');
    await api.wait(rest > 1 ? 520 : 400);
  }, [markAt, rest, showAt], { rest, glideScale: howItWorksGlide(rest) });

  const score = demoCorrectCount(marks, task.answerKey);

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      lane={expl}
      overlay={
        <CourseSolution
          open={expl}
          dimmed={expl && !shown}
          answerKey={task.answerKey}
          explanations={task.explanations}
          shown={task.explanations.map((_, index) => index)}
          bank
          active={active}
          locateAt={showAt}
          located={shown}
          chrome={chrome}
        />
      }
    >
      <div className="mb-3 flex flex-wrap items-center gap-2" data-case={task.caseId}>
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
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
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{task.context}</p>
      <CoursePassage text={passage} highlight={highlight} active={shown} />
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
