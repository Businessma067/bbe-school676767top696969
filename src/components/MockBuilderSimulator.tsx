import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Calculator, Check, ChevronDown, Clock, Loader2 } from "lucide-react";
import { TopicWeightSelector } from "@/components/custom-mock/TopicWeightSelector";
import { getCustomMockChapters } from "@/data/custom-mock-catalog";
import {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  durationMinutesForQuestionCount,
} from "@/config/custom-mock-builder";
import { balancedPoint, type TopicWeightTopic, type Vec2 } from "@/lib/topic-weight-engine";
import { cn } from "@/lib/utils";

const ACCENT = "#E85D3A";
const LETTERS = "ABCDEF";

type SimQuestion = {
  caseId: string;
  chapter: string;
  title: string;
  context: string;
  statements: string[];
};

const FIRST_QUESTION: SimQuestion = {
  caseId: "ECON-3.07",
  chapter: "Chapter 3 · Focus on different types of businesses",
  title: "Factors of production and business sectors",
  context:
    "A family-run bakery buys flour from local farms, bakes bread in its own rented workshop and sells it in two small shops in the city. The owner works in the bakery every day and employs four staff members.",
  statements: [
    "The rented workshop and the ovens are capital used in the production process.",
    "Buying flour from local farms means the bakery itself operates in the primary sector.",
    "Baking the bread is a secondary-sector activity, while running the two shops is tertiary.",
    "The work of the owner is entrepreneurship, since the owner also organises the other factors of production and bears the risk.",
    "Because the bakery is small and family-run, it cannot be described as profit-oriented.",
  ],
};

const SECOND_QUESTION: SimQuestion = {
  caseId: "ECON-3.12",
  chapter: "Chapter 3 · Focus on different types of businesses",
  title: "Stakeholders of a growing company",
  context:
    "A regional logistics company plans to open a new depot. Local residents complain about noise, employees ask for more shifts, and the bank that financed the fleet asks for updated figures.",
  statements: [
    "Employees are internal stakeholders, while local residents are external stakeholders.",
    "The bank is a stakeholder because the repayment of its loan depends on the company's performance.",
    "Only shareholders can be described as stakeholders of the company.",
    "Conflicting stakeholder interests can force management to compromise between growth and local acceptance.",
  ],
};

const SIM_QUESTIONS: SimQuestion[] = [FIRST_QUESTION, SECOND_QUESTION];



/**
 * Looping, cursor-driven animation of the real Custom Mock Builder:
 * pick subtopics → set the question count → shape the topic weights →
 * build the exam → open the first question.
 */
export default function MockBuilderSimulator() {
  const chapters = useMemo(() => getCustomMockChapters("economics").slice(0, 4), []);

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [countDraft, setCountDraft] = useState("10");
  const [weightPoint, setWeightPoint] = useState<Vec2>(balancedPoint());
  const [building, setBuilding] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [exam, setExam] = useState(false);
  const [examIndex, setExamIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const [calcOpen, setCalcOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  // answers per question index -> statement index -> true
  const [answers, setAnswers] = useState<Record<number, Record<number, boolean>>>({});

  const [fade, setFade] = useState(false);
  // The cursor is driven straight through the DOM (no React state) so the
  // 60fps animation never re-renders this tree — that was the source of the
  // stutter while scrolling the page.
  const cursorRef = useRef({ x: 40, y: 40 });
  const cursorElRef = useRef<HTMLDivElement | null>(null);
  const [clicking, setClicking] = useState(false);
  const visibleRef = useRef(true);


  const stageRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const weightTopics: TopicWeightTopic[] = useMemo(
    () =>
      selected.map((id) => ({
        id,
        label: id,
        shortLabel: id,
      })),
    [selected],
  );

  const durationMinutes = durationMinutesForQuestionCount(questionCount);

  useEffect(() => {
    let cancelled = false;
    const MOVE = 420;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(() => r(), ms));
    // Pause the whole loop while the stage is off-screen so scrolling the page
    // never competes with the animation for frames.
    const wait = async (ms: number) => {
      await sleep(ms);
      while (!cancelled && !visibleRef.current) await sleep(200);
    };


    // Generic rAF tween — every animated value in this simulator goes through
    // this so nothing is driven by setTimeout stepping (which causes jitter).
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const tween = (duration: number, onFrame: (eased: number) => void) =>
      new Promise<void>((resolve) => {
        if (duration <= 0) {
          onFrame(1);
          return resolve();
        }
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - t0) / duration);
          onFrame(easeInOut(t));
          if (t < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });

    const smoothScroll = (el: HTMLElement, to: number, duration: number) => {
      const start = el.scrollTop;
      const change = to - start;
      if (Math.abs(change) < 1) return Promise.resolve();
      return tween(duration, (eased) => {
        el.scrollTop = Math.round(start + change * eased);
      });
    };


    const clampToStage = (p: { x: number; y: number }) => {
      const stage = stageRef.current;
      if (!stage) return p;
      const r = stage.getBoundingClientRect();
      return {
        x: Math.max(4, Math.min(p.x, r.width - 14)),
        y: Math.max(4, Math.min(p.y, r.height - 14)),
      };
    };

    const setCursorAt = (p: { x: number; y: number }) => {
      const c = clampToStage(p);
      cursorRef.current = c;
      const el = cursorElRef.current;
      if (el) el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
    };


    const glideCursor = (target: { x: number; y: number }, duration = 620) => {
      const start = { ...cursorRef.current };
      const goal = clampToStage(target);
      const dist = Math.hypot(goal.x - start.x, goal.y - start.y);
      if (dist < 1) return Promise.resolve();
      // scale duration a bit with distance so short hops don't feel sluggish
      const d = Math.max(320, Math.min(duration, 240 + dist * 1.6));
      return tween(d, (eased) => {
        setCursorAt({
          x: start.x + (goal.x - start.x) * eased,
          y: start.y + (goal.y - start.y) * eased,
        });
      });
    };

    const pointOf = (selector: string) => {
      const stage = stageRef.current;
      if (!stage) return null;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return null;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      if (eb.width === 0 && eb.height === 0) return null;
      return {
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      };
    };

    const moveTo = async (selector: string) => {
      const stage = stageRef.current;
      const box = scrollRef.current;
      if (!stage) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;

      if (box && box.contains(el)) {
        const lb = box.getBoundingClientRect();
        const eb0 = el.getBoundingClientRect();
        const desired = box.scrollTop + (eb0.top - lb.top) - lb.height / 2 + eb0.height / 2;
        const clamped = Math.max(0, Math.min(desired, box.scrollHeight - box.clientHeight));
        if (Math.abs(clamped - box.scrollTop) > 1) {
          // Scroll and let the cursor chase the element's *live* position, so it
          // never lands on a stale coordinate once the list has moved.
          const startCursor = { ...cursorRef.current };
          const startScroll = box.scrollTop;
          const change = clamped - startScroll;
          await tween(700, (eased) => {
            box.scrollTop = startScroll + change * eased;
            const live = pointOf(selector);
            if (!live) return;
            setCursorAt({
              x: startCursor.x + (live.x - startCursor.x) * eased,
              y: startCursor.y + (live.y - startCursor.y) * eased,
            });
          });
        }
      }
      if (cancelled) return;
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      const target = pointOf(selector);
      if (!target) return;
      await glideCursor(target);
      await wait(MOVE);
    };

    const snapCursor = (selector: string) => {
      const p = pointOf(selector);
      if (!p) return;
      setCursorAt(p);
    };



    const click = async () => {
      setClicking(true);
      await wait(120);
      setClicking(false);
      await wait(140);
    };

    const run = async () => {
      while (!cancelled) {
        // ---- reset ----
        setFade(true);
        await wait(260);
        setExpanded({});
        setSelected([]);
        setQuestionCount(10);
        setCountDraft("10");
        setWeightPoint(balancedPoint());
        setBuilding(false);
        setDialog(false);
        setExam(false);
        setExamIndex(0);
        setVisited([]);
        setCalcOpen(false);
        setAnswers({});

        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        setFade(false);
        await wait(420);

        // ---- 1. open a chapter ----
        const chapter = chapters[1] ?? chapters[0];
        if (!chapter) return;
        await moveTo(`[data-sim-chapter="${chapter.num}"]`);
        await click();
        setExpanded({ [chapter.num]: true });
        await wait(520);

        // ---- 2. tick subtopics ----
        const picks = chapter.subtopics.slice(0, 3);
        for (const s of picks) {
          if (cancelled) return;
          await moveTo(`[data-sim-sub="${s.id}"]`);
          await click();
          setSelected((prev) => [...prev, s.id]);
          await wait(420);
        }
        await wait(500);

        // ---- 3. type the question count ----
        await moveTo("[data-sim-count]");
        await click();
        for (const chunk of ["", "1", "12"]) {
          if (cancelled) return;
          setCountDraft(chunk);
          await wait(260);
        }
        setQuestionCount(12);
        await wait(600);

        // ---- 4. shape the topic weights (cursor drags the handle) ----
        const path: Vec2[] = [
          { x: 0.12, y: -0.32 },
          { x: 0.42, y: -0.1 },
          { x: 0.3, y: 0.28 },
          { x: -0.18, y: 0.2 },
          { x: -0.05, y: -0.08 },
        ];
        await moveTo("[data-sim-weight] [data-weight-handle]");
        await click();
        let from: Vec2 = balancedPoint();
        for (const p of path) {
          if (cancelled) return;
          const dist = Math.hypot(p.x - from.x, p.y - from.y);
          const start = from;
          await tween(700 + dist * 900, (eased) => {
            setWeightPoint({
              x: start.x + (p.x - start.x) * eased,
              y: start.y + (p.y - start.y) * eased,
            });
            snapCursor("[data-sim-weight] [data-weight-handle]");
          });
          from = p;
          await wait(320);
        }
        await wait(600);


        // ---- 5. build ----
        await moveTo("[data-sim-build]");
        await click();
        setBuilding(true);
        await wait(1700);
        setBuilding(false);
        setDialog(true);
        await wait(900);

        // ---- 6. start timed ----
        await moveTo("[data-sim-start]");
        await click();
        setDialog(false);
        setFade(true);
        await wait(320);
        setExam(true);
        setExamIndex(0);
        setVisited([0]);
        setSecondsLeft(12 * CUSTOM_MOCK_MINUTES_PER_QUESTION * 60);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        setFade(false);
        await wait(900);

        // ---- 7. answer the first question ----
        for (const i of [0, 2, 3]) {
          if (cancelled) return;
          await moveTo(`[data-sim-answer="${i}"]`);
          await click();
          setAnswers((prev) => ({ ...prev, 0: { ...(prev[0] ?? {}), [i]: true } }));
          await wait(420);
        }
        await wait(700);

        // ---- 8. open the calculator, then close it ----
        await moveTo("[data-sim-calc]");
        await click();
        setCalcOpen(true);
        await wait(1500);
        await moveTo("[data-sim-calc]");
        await click();
        setCalcOpen(false);
        await wait(600);

        // ---- 9. jump to question 2 via the palette ----
        await moveTo('[data-sim-tile="2"]');
        await click();
        setExamIndex(1);
        setVisited((prev) => (prev.includes(1) ? prev : [...prev, 1]));
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        await wait(900);

        for (const i of [0, 1]) {
          if (cancelled) return;
          await moveTo(`[data-sim-answer="${i}"]`);
          await click();
          setAnswers((prev) => ({ ...prev, 1: { ...(prev[1] ?? {}), [i]: true } }));
          await wait(420);
        }
        await wait(1600);

      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [chapters]);

  // Pause the loop while the stage is off-screen (keeps page scrolling smooth).
  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Exam countdown
  useEffect(() => {
    if (!exam) return;
    const id = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [exam]);

  return (
    <div ref={stageRef} className="relative">
      <div
        ref={scrollRef}
        className={cn(
          "practice-scroll h-[520px] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-5 shadow-sm transition-opacity duration-500 sm:h-[560px] sm:p-6 lg:h-[620px]",
          fade ? "opacity-0" : "opacity-100",
        )}
      >
        {exam ? (
          <ExamScreen
            index={examIndex}
            answers={answers}
            visited={visited}
            calcOpen={calcOpen}
            secondsLeft={secondsLeft}
          />

        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Custom Mock Builder
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                Economics
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold">Select topics & subtopics</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Expand a chapter and tick sections. Topics appear as vertices on the right.
                </p>

                <ul className="mt-4 space-y-2">
                  {chapters.map((ch) => {
                    const open = expanded[ch.num] === true;
                    const count = ch.subtopics.filter((s) => selected.includes(s.id)).length;
                    return (
                      <li key={ch.num} className="overflow-hidden rounded-xl border border-border">
                        <div
                          data-sim-chapter={ch.num}
                          className="flex items-center gap-2 bg-secondary/30 px-3 py-2.5 text-left"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                              open ? "rotate-0" : "-rotate-90",
                            )}
                          />
                          <span className="font-display text-sm font-semibold">{ch.heading}</span>
                          <span className="truncate text-xs text-muted-foreground">{ch.title}</span>
                          {count > 0 && (
                            <span
                              className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                              style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                            >
                              {count}/{ch.subtopics.length}
                            </span>
                          )}
                        </div>
                        {open && (
                          <ul className="divide-y divide-border/60 px-2 py-1">
                            {ch.subtopics.map((s) => {
                              const checked = selected.includes(s.id);
                              return (
                                <li key={s.id}>
                                  <div
                                    className={cn(
                                      "flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                                      checked ? "bg-secondary/60" : "",
                                    )}
                                  >
                                    <span
                                      data-sim-sub={s.id}
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
                                      {checked && <Check className="h-3 w-3" strokeWidth={3} />}
                                    </span>
                                    <span>
                                      <span className="text-sm font-semibold tabular-nums">
                                        {s.id}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                        {s.title}
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <h3 className="mt-6 font-display text-sm font-semibold">Number of Questions</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  1–{CUSTOM_MOCK_MAX_QUESTIONS} for the whole mock ·{" "}
                  {CUSTOM_MOCK_MINUTES_PER_QUESTION} min each timed
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">Questions</span>
                  <span
                    data-sim-count
                    className="w-24 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold tabular-nums"
                    style={{ borderColor: countDraft !== "10" ? ACCENT : undefined }}
                  >
                    {countDraft || "|"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {durationMinutes} min timed
                  </span>
                </div>
              </div>

              <div data-sim-weight className="min-w-0">
                <TopicWeightSelector
                  topics={weightTopics}
                  questionCount={questionCount}
                  point={weightPoint}
                  onPointChange={setWeightPoint}
                  title="Topic Weight Selector"
                  accent={ACCENT}
                  subjectLabel="Economics"
                />
              </div>
            </div>

            <div
              data-sim-build
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: ACCENT, boxShadow: `0 4px 14px -4px ${ACCENT}80` }}
            >
              {building ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Building mock…
                </>
              ) : (
                <>
                  <BookOpen className="h-4 w-4" />
                  Create Economics Mock from Full Course
                </>
              )}
            </div>
          </>
        )}
      </div>

      {/* Start dialog */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-2xl bg-black/70 p-4 transition-opacity duration-500",
          dialog ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className={cn(
            "w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl transition-all duration-500",
            dialog ? "translate-y-0 scale-100" : "translate-y-3 scale-95",
          )}
        >
          <p className="font-display text-base font-semibold">
            Economics Mock · Chapter {chapters[1]?.num ?? 2}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {questionCount} questions · {durationMinutes} minutes timed
          </p>
          <div className="mt-4 grid gap-2">
            <span
              data-sim-start
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background"
            >
              <Clock className="h-4 w-4" />
              Timed ({durationMinutes} min)
            </span>
            <span className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold">
              Untimed practice
            </span>
          </div>
        </div>
      </div>

      {/* Animated cursor (transform is written directly to the DOM) */}
      <div
        ref={cursorElRef}
        className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
        style={{ transform: "translate3d(40px, 40px, 0)" }}
      >

        <div className={cn("transition-transform duration-150 ease-out", clicking ? "scale-90" : "scale-100")}>

          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 3l14 8.5-6.2 1.3L9.6 20 5 3z"
              fill="white"
              stroke="black"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          {clicking && (
            <span className="absolute left-0 top-0 h-6 w-6 animate-ping rounded-full bg-primary/40" />
          )}
        </div>
      </div>
    </div>
  );
}

const TOTAL_SIM_QUESTIONS = 12;

function formatClock(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function ExamScreen({
  index,
  answers,
  visited,
  calcOpen,
  secondsLeft,
}: {
  index: number;
  answers: Record<number, Record<number, boolean>>;
  visited: number[];
  calcOpen: boolean;
  secondsLeft: number;
}) {
  const question = SIM_QUESTIONS[Math.min(index, SIM_QUESTIONS.length - 1)]!;
  const marks = answers[index] ?? {};

  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Question {index + 1} / {TOTAL_SIM_QUESTIONS}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {question.caseId}
        </span>
        <span
          data-sim-calc
          className={cn(
            "ml-auto inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors",
            calcOpen
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card text-foreground",
          )}
        >
          <Calculator className="h-4 w-4" />
          Calculator
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg border border-caramel-deep bg-caramel-deep px-3 py-2 text-xs font-bold tabular-nums text-primary-foreground">
          <Clock className="h-4 w-4" />
          {formatClock(secondsLeft)}
        </span>
      </div>

      {/* Question palette */}
      <div className="mb-5 rounded-xl border border-border bg-secondary/25 p-3">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Economics · {TOTAL_SIM_QUESTIONS} questions
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: TOTAL_SIM_QUESTIONS }, (_, i) => {
            const answered = Object.values(answers[i] ?? {}).some(Boolean);
            const current = i === index;
            return (
              <span
                key={i}
                data-sim-tile={i + 1}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-md border text-xs font-semibold transition-colors",
                  current
                    ? "border-foreground bg-foreground text-background ring-2 ring-foreground/25 ring-offset-2 ring-offset-card"
                    : answered
                      ? "border-orange-500/50 bg-orange-500 text-white"
                      : visited.includes(i)
                        ? "border-blue-500/40 bg-blue-500/15 text-blue-700 dark:text-blue-300"
                        : "border-border bg-muted/40 text-muted-foreground",
                )}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {question.chapter}
      </p>
      <h3 className="mt-1 font-display text-lg font-bold tracking-tight">{question.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{question.context}</p>

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">True</span>
        </li>
        {question.statements.map((stmt, i) => {
          const checked = marks[i] === true;
          return (
            <li key={i} className="flex items-center gap-3 px-4 py-3">
              <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                {LETTERS[i]}.
              </span>
              <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
              <div className="flex w-14 justify-center">
                <span
                  data-sim-answer={i}
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                    checked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background",
                  )}
                >
                  {checked && <Check className="h-4 w-4" strokeWidth={3} />}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Calculator popover */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-12 z-10 w-52 rounded-xl border border-border bg-card p-3 shadow-2xl transition-all duration-300",
          calcOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        )}
      >
        <div className="mb-2 rounded-md border border-border bg-background px-2 py-2 text-right text-sm font-semibold tabular-nums">
          0
        </div>
        <div className="grid grid-cols-4 gap-1">
          {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"].map(
            (k) => (
              <span
                key={k}
                className="grid h-7 place-items-center rounded border border-border bg-secondary/40 text-xs font-semibold"
              >
                {k}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

