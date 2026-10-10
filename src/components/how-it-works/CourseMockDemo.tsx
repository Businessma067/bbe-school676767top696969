import { useMemo, useState } from "react";
import { BookOpen, Check, ChevronDown, Clock, Loader2 } from "lucide-react";
import { TopicWeightSelector } from "@/components/custom-mock/TopicWeightSelector";
import {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  durationMinutesForQuestionCount,
} from "@/config/custom-mock-builder";
import { getCustomMockChapters } from "@/data/custom-mock-catalog";
import { balancedPoint, type TopicWeightTopic, type Vec2 } from "@/lib/topic-weight-engine";
import { cn } from "@/lib/utils";
import { DemoStatementTable } from "@/components/news/demos/DemoStatementTable";
import { formatExamTime } from "@/lib/mock-exam-session";
import { howItWorksGlide, useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { MOCK_BUILDER_FIRST, type CourseTask } from "./course-tasks";

const ACCENT = "#E85D3A";
const DWELL = 40;
const EXAM_SECONDS = 12 * CUSTOM_MOCK_MINUTES_PER_QUESTION * 60;

export type MockBuilderChapter = {
  num: number;
  heading: string;
  title: string;
  subtopics: { id: string; title: string }[];
};

export type MockBuilderCopy = {
  locale: "en" | "de";
  badge: string;
  subject: string;
  heading: string;
  hint: string;
  countHeading: string;
  countHint: (max: number, minutesEach: number) => string;
  questionsLabel: string;
  timedShort: (minutes: number) => string;
  weightTitle: string;
  building: string;
  create: string;
  dialogTitle: (chapterNum: number) => string;
  dialogBody: (count: number, minutes: number, topics: number) => string;
  timedStart: (minutes: number) => string;
  untimed: string;
  questionBadge: string;
};

const EN_BUILDER: MockBuilderCopy = {
  locale: "en",
  badge: "Custom Mock Builder",
  subject: "Economics",
  heading: "Select topics & subtopics",
  hint: "Expand a chapter and tick sections. Topics appear as vertices on the right.",
  countHeading: "Number of Questions",
  countHint: (max, minutesEach) => `1–${max} for the whole mock · ${minutesEach} min each timed`,
  questionsLabel: "Questions",
  timedShort: (minutes) => `${minutes} min timed`,
  weightTitle: "Topic Weight Selector",
  building: "Building mock…",
  create: "Create Economics Mock from Full Course",
  dialogTitle: (chapterNum) => `Economics Mock · Chapter ${chapterNum}`,
  dialogBody: (count, minutes, topics) =>
    `${count} questions · ${minutes} minutes timed · ${topics} topics`,
  timedStart: (minutes) => `Timed (${minutes} min)`,
  untimed: "Untimed practice",
  questionBadge: "Question 1 / 12",
};

export const DE_MOCK_BUILDER_COPY: MockBuilderCopy = {
  locale: "de",
  badge: "Mock-Builder",
  subject: "Wirtschaft",
  heading: "Themen & Unterkapitel",
  hint: "Kapitel öffnen und Abschnitte anhaken. Gewählte Themen erscheinen rechts als Gewichte.",
  countHeading: "Anzahl der Fragen",
  countHint: (max, minutesEach) =>
    `1–${max} für den gesamten Mock · ${minutesEach} Min. je Frage (mit Zeitlimit)`,
  questionsLabel: "Fragen",
  timedShort: (minutes) => `${minutes} Min. mit Zeitlimit`,
  weightTitle: "Themengewichtung",
  building: "Mock wird erstellt…",
  create: "Wirtschaft-Mock aus dem Full Course erstellen",
  dialogTitle: (chapterNum) => `Wirtschaft-Mock · Kapitel ${chapterNum}`,
  dialogBody: (count, minutes, topics) =>
    `${count} Fragen · ${minutes} Minuten mit Zeitlimit · ${topics} Unterkapitel`,
  timedStart: (minutes) => `Mit Zeitlimit (${minutes} Min.)`,
  untimed: "Ohne Zeitdruck üben",
  questionBadge: "Aufgabe 1 / 12",
};

/** How it works · Mock Builder: four real subtopics, then the mix, a step quicker than Course. */
export function CourseMockDemo({
  rest = 1,
  lockCopy = false,
  chapters: chaptersProp,
  preview = MOCK_BUILDER_FIRST,
  copy = EN_BUILDER,
}: {
  rest?: number;
  lockCopy?: boolean;
  chapters?: MockBuilderChapter[];
  preview?: CourseTask;
  copy?: MockBuilderCopy;
} = {}) {
  const chapters = useMemo(
    () => chaptersProp ?? getCustomMockChapters("economics").slice(0, 3),
    [chaptersProp],
  );
  const trueAt = useMemo(
    () => preview.answerKey.flatMap((on, index) => (on ? [index] : [])),
    [preview],
  );
  const chapter = chapters[0];
  const picks = useMemo(() => chapter?.subtopics.slice(0, 4) ?? [], [chapter]);

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [countDraft, setCountDraft] = useState("10");
  const [weightPoint, setWeightPoint] = useState<Vec2>(balancedPoint());
  const [building, setBuilding] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [exam, setExam] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});

  const weightTopics: TopicWeightTopic[] = useMemo(
    () => selected.map((id) => ({ id, label: id, shortLabel: id })),
    [selected],
  );
  const durationMinutes = durationMinutesForQuestionCount(questionCount);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(140);
      setExpanded({});
      setSelected([]);
      setQuestionCount(10);
      setCountDraft("10");
      setWeightPoint(balancedPoint());
      setBuilding(false);
      setDialog(false);
      setExam(false);
      setMarks({});
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(240);
      if (!chapter || picks.length < 4) return;

      await api.moveTo(`[data-d="ch-${chapter.num}"]`, DWELL);
      await api.click(() => setExpanded({ [chapter.num]: true }));

      for (const topic of picks) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="sub-${topic.id}"]`, DWELL);
        await api.click(() =>
          setSelected((prev) => (prev.includes(topic.id) ? prev : [...prev, topic.id])),
        );
      }

      await api.moveTo('[data-d="count"]', DWELL);
      await api.click();
      for (const chunk of ["", "1", "12"]) {
        if (api.cancelled()) return;
        setCountDraft(chunk);
        await api.wait(110);
      }
      setQuestionCount(12);

      const path: Vec2[] = [
        { x: 0.26, y: -0.2 },
        { x: -0.18, y: 0.16 },
        { x: 0.02, y: -0.02 },
      ];
      await api.moveTo('[data-d="weight"] [data-weight-handle]', DWELL);
      await api.click();
      const weightSvg = api.stage()?.querySelector<SVGSVGElement>('[data-d="weight"] svg');
      let from = balancedPoint();
      for (const point of path) {
        if (api.cancelled()) return;
        const start = from;
        const dist = Math.hypot(point.x - start.x, point.y - start.y);
        await api.tween(260 + dist * 240, (eased) => {
          // Read geometry before changing SVG attributes, not after a dirty React commit.
          const stageBox = api.stage()?.getBoundingClientRect();
          const svgBox = weightSvg?.getBoundingClientRect();
          const next = {
            x: start.x + (point.x - start.x) * eased,
            y: start.y + (point.y - start.y) * eased,
          };
          if (stageBox && svgBox) {
            api.setCursorAt({
              x: svgBox.left - stageBox.left + (120 + next.x * 102) / 240 * svgBox.width,
              y: svgBox.top - stageBox.top + (120 + next.y * 102) / 240 * svgBox.height,
            });
          }
          setWeightPoint(next);
        });
        from = point;
        await api.wait(90);
      }
      await api.wait(70);

      await api.moveTo('[data-d="build"]', DWELL);
      await api.click(() => setBuilding(true));
      setBuilding(false);
      setDialog(true);
      await api.flush();
      await api.moveTo('[data-d="start"]', DWELL);
      await api.click(() => {
        setDialog(false);
        setFade(true);
      });
      await api.flush();
      await api.wait(220);
      setExam(true);
      setMarks({});
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(160);

      for (const index of trueAt) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="q${index}"]`, DWELL);
        await api.click(() => setMarks((prev) => ({ ...prev, [index]: true })));
      }
      await api.wait(280);
    },
    [chapter, picks, preview, rest, trueAt],
    { rest, glideScale: howItWorksGlide(rest) },
  );

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      overlay={
        dialog && !exam ? (
          <div className="absolute inset-0 z-20 grid place-items-center bg-black/70 p-4">
            <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl">
              <p className="font-display text-base font-semibold">
                {copy.dialogTitle(chapter?.num ?? 2)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {copy.dialogBody(questionCount, durationMinutes, selected.length)}
              </p>
              <div className="mt-4 grid gap-2">
                <span
                  data-d="start"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background"
                >
                  <Clock className="h-4 w-4" />
                  {copy.timedStart(durationMinutes)}
                </span>
                <span className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold">
                  {copy.untimed}
                </span>
              </div>
            </div>
          </div>
        ) : null
      }
    >
      {exam ? (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              {copy.questionBadge}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
              {preview.caseId}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              {preview.chapter}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs font-semibold tabular-nums">
              <Clock className="h-3.5 w-3.5" />
              {formatExamTime(EXAM_SECONDS)}
            </span>
          </div>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {Array.from({ length: 12 }, (_, index) => (
              <span
                key={index}
                className={cn(
                  "grid h-7 w-7 place-items-center rounded-md border text-[11px] font-semibold",
                  index === 0
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-bold tracking-tight">{preview.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">{preview.context}</p>
          <DemoStatementTable
            statements={preview.statements}
            marks={marks}
            dataPrefix="q"
            className="mt-4"
          />
        </div>
      ) : (
        <>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {copy.badge}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              {copy.subject}
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">{copy.heading}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{copy.hint}</p>
              <ul className="mt-3 space-y-2">
                {chapters.map((item) => {
                  const open = expanded[item.num] === true;
                  const count = item.subtopics.filter((topic) =>
                    selected.includes(topic.id),
                  ).length;
                  return (
                    <li key={item.num} className="overflow-hidden rounded-xl border border-border">
                      <div
                        data-d={`ch-${item.num}`}
                        className="flex items-center gap-2 bg-secondary/30 px-3 py-2 text-left"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                            open ? "rotate-0" : "-rotate-90",
                          )}
                        />
                        <span className="font-display text-sm font-semibold">{item.heading}</span>
                        <span className="truncate text-xs text-muted-foreground">{item.title}</span>
                        {count > 0 ? (
                          <span
                            className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            {count}/{item.subtopics.length}
                          </span>
                        ) : null}
                      </div>
                      {open ? (
                        <ul className="divide-y divide-border/60 px-2 py-1">
                          {item.subtopics.map((topic) => {
                            const checked = selected.includes(topic.id);
                            return (
                              <li key={topic.id}>
                                <div
                                  className={cn(
                                    "flex items-start gap-3 rounded-lg px-3 py-2",
                                    checked ? "bg-secondary/60" : "",
                                  )}
                                >
                                  <span
                                    data-d={`sub-${topic.id}`}
                                    className={cn(
                                      "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border-2 transition-all",
                                      checked ? "text-white" : "border-border bg-background",
                                    )}
                                    style={
                                      checked
                                        ? { backgroundColor: ACCENT, borderColor: ACCENT }
                                        : undefined
                                    }
                                  >
                                    {checked ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                                  </span>
                                  <span>
                                    <span className="text-sm font-semibold tabular-nums">
                                      {topic.id}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                      {topic.title}
                                    </span>
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <h3 className="mt-4 font-display text-sm font-semibold">{copy.countHeading}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {copy.countHint(CUSTOM_MOCK_MAX_QUESTIONS, CUSTOM_MOCK_MINUTES_PER_QUESTION)}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">{copy.questionsLabel}</span>
                <span
                  data-d="count"
                  className="w-24 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold tabular-nums"
                  style={{ borderColor: countDraft !== "10" ? ACCENT : undefined }}
                >
                  {countDraft || "|"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {copy.timedShort(durationMinutes)}
                </span>
              </div>
            </div>

            <div data-d="weight" className="min-w-0">
              <TopicWeightSelector
                animated
                topics={weightTopics}
                questionCount={questionCount}
                point={weightPoint}
                onPointChange={setWeightPoint}
                title={copy.weightTitle}
                accent={ACCENT}
                subjectLabel={copy.subject}
                locale={copy.locale}
              />
            </div>
          </div>

          <div
            data-d="build"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: ACCENT, boxShadow: `0 4px 14px -4px ${ACCENT}80` }}
          >
            {building ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {copy.building}
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4" />
                {copy.create}
              </>
            )}
          </div>
        </>
      )}
    </CourseFrame>
  );
}
