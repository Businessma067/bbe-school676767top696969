import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Check, ChevronDown, Clock, Loader2 } from "lucide-react";
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

const FIRST_QUESTION = {
  caseId: "ECON-2.14",
  chapter: "Chapter 2 · Demand, supply and market equilibrium",
  title: "Market equilibrium after a supply shock",
  context:
    "A poor harvest reduces the quantity of wheat that farmers can bring to the market at every price level. Demand for wheat is unchanged and relatively price-inelastic.",
  statements: [
    "The supply curve shifts to the left and the new equilibrium price is higher.",
    "The equilibrium quantity traded falls compared with the previous equilibrium.",
    "Because demand is inelastic, total revenue of wheat farmers falls after the shock.",
    "The demand curve itself shifts to the left as soon as the market price rises.",
    "Consumer surplus in the wheat market is smaller at the new equilibrium.",
  ],
};

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
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [fade, setFade] = useState(false);
  const [cursor, setCursor] = useState({ x: 40, y: 40 });
  const [clicking, setClicking] = useState(false);

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
    const MOVE = 300;
    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));

    const smoothScroll = (el: HTMLElement, to: number, duration: number) => {
      const start = el.scrollTop;
      const change = to - start;
      if (Math.abs(change) < 1) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - t0) / duration);
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          el.scrollTop = start + change * eased;
          if (t < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    };

    const moveTo = async (selector: string) => {
      const stage = stageRef.current;
      const box = scrollRef.current;
      if (!stage) return;
      let el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;
      if (box && box.contains(el)) {
        const lb = box.getBoundingClientRect();
        const eb0 = el.getBoundingClientRect();
        const desired = box.scrollTop + (eb0.top - lb.top) - lb.height / 2 + eb0.height / 2;
        const clamped = Math.max(0, Math.min(desired, box.scrollHeight - box.clientHeight));
        await smoothScroll(box, clamped, 480);
      }
      if (cancelled) return;
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      setCursor({
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      });
      await wait(MOVE);
    };

    const snapCursor = (selector: string) => {
      const stage = stageRef.current;
      if (!stage) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      setCursor({
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      });
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
          const STEPS = 10;
          for (let i = 1; i <= STEPS; i++) {
            if (cancelled) return;
            const t = i / STEPS;
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            setWeightPoint({
              x: from.x + (p.x - from.x) * eased,
              y: from.y + (p.y - from.y) * eased,
            });
            await new Promise<void>((r) => requestAnimationFrame(() => r()));
            snapCursor("[data-sim-weight] [data-weight-handle]");
            await wait(45);
          }
          from = p;
          await wait(260);
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
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        setFade(false);
        await wait(900);

        // ---- 7. first question opens ----
        await moveTo('[data-sim-answer="0"]');
        await click();
        setAnswers({ 0: true });
        await wait(1400);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [chapters]);

  return (
    <div ref={stageRef} className="relative">
      <div
        ref={scrollRef}
        className={cn(
          "practice-scroll h-[520px] overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-sm transition-opacity duration-500 sm:h-[560px] sm:p-6 lg:h-[620px]",
          fade ? "opacity-0" : "opacity-100",
        )}
      >
        {exam ? (
          <ExamFirstQuestion answers={answers} durationMinutes={durationMinutes} />
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

      {/* Animated cursor */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <div className={cn("transition-transform duration-75", clicking ? "scale-90" : "scale-100")}>
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

function ExamFirstQuestion({
  answers,
  durationMinutes,
}: {
  answers: Record<number, boolean>;
  durationMinutes: number;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Question 1 / 12
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {FIRST_QUESTION.caseId}
        </span>
        <span className="ml-auto inline-flex items-center gap-2 rounded-lg border border-caramel-deep bg-caramel-deep px-3 py-2 text-xs font-bold text-primary-foreground">
          <Clock className="h-4 w-4" />
          {durationMinutes}:00
        </span>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {FIRST_QUESTION.chapter}
      </p>
      <h3 className="mt-1 font-display text-lg font-bold tracking-tight">{FIRST_QUESTION.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{FIRST_QUESTION.context}</p>

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">True</span>
        </li>
        {FIRST_QUESTION.statements.map((stmt, i) => {
          const checked = answers[i] === true;
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
    </div>
  );
}
