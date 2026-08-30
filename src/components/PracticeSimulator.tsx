import { useEffect, useMemo, useRef, useState } from "react";
import { Calculator, Check, Timer, X } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { ExplanationProse } from "@/components/ExplanationProse";
import { Ti30MathPrint } from "@/components/calculator/Ti30MathPrint";
import { SIM_TASKS, type SimTask } from "@/data/how-it-works-tasks";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";

export type SimSubject = "economics" | "math" | "english";

const LETTERS = "ABCDEF";

function Prose({
  text,
  subject,
  className,
}: {
  text: string;
  subject: SimSubject;
  className?: string;
}) {
  if (subject === "math") {
    return <FlashcardMath text={text} className={className} />;
  }
  return <ExplanationProse text={text} className={className} />;
}

function Inline({
  text,
  subject,
  className,
}: {
  text: string;
  subject: SimSubject;
  className?: string;
}) {
  if (subject === "math") {
    return <FlashcardMath text={text} className={className} />;
  }
  return <span className={className}>{text.replace(/\*\*/g, "")}</span>;
}

function clock(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function cleanExplanation(text: string) {
  const withoutVerdictLead = text
    .replace(/^(?:TRUE|FALSE)\s*[—-]\s*/i, "")
    .replace(/\*\*/g, "")
    .trim();
  const seen = new Set<string>();
  let verdictSeen = false;
  return withoutVerdictLead
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => {
      if (!paragraph) return false;
      const isVerdict = /^the statement is (?:true|false)\b/i.test(paragraph);
      if (isVerdict && verdictSeen) return false;
      if (isVerdict) verdictSeen = true;
      const key = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join("\n\n");
}

/**
 * Pure DOM animation of the real practice screen: task panel on the left,
 * explanation panel on the right (exactly like the live practice pages).
 * Phase 1 focuses on the statements (they gently scale up while the cursor
 * answers them); phase 2 opens the right panel and walks the explanations.
 */
export default function PracticeSimulator({ subject }: { subject: SimSubject }) {
  // Economics: skip cases whose context embeds tables/charts (they render badly here).
  const pool = useMemo(() => {
    const all = SIM_TASKS[subject];
    if (subject !== "economics") return all;
    const clean = all.filter(
      (t) => !t.context.includes("[[CHART") && !t.context.includes("|"),
    );
    return clean.length ? clean : all;
  }, [subject]);
  const [taskIdx, setTaskIdx] = useState(0);

  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [activeExpl, setActiveExpl] = useState(-1);
  const [, setFocusTask] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [timed, setTimed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [cursor, setCursor] = useState({ x: 40, y: 40 });
  const [clicking, setClicking] = useState(false);
  const [fade, setFade] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const explRef = useRef<HTMLDivElement | null>(null);

  const task: SimTask = pool[Math.min(taskIdx, pool.length - 1)];

  // Pick ONE random task per subject on mount and keep it for the whole loop.
  useEffect(() => {
    setTaskIdx(Math.floor(Math.random() * pool.length));
  }, [pool]);

  // Timed Mode countdown (economics demo only).
  useEffect(() => {
    if (!timed || checked) return;
    const id = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [timed, checked]);

  const correctCount = useMemo(
    () => task.answerKey.filter((a, i) => (answers[i] === true) === a).length,
    [answers, task],
  );

  useEffect(() => {
    let cancelled = false;
    // Per-subject pacing: economics steady, english calmer, math the slowest.
    const PACE = subject === "math" ? 2.4 : subject === "english" ? 1.9 : 1.5;
    const MOVE = 260;
    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));
    const pause = (ms: number) => wait(Math.round(ms * PACE));

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

      // Bring the target into view first, then measure its final painted position.
      if (box && box.contains(el)) {
        const lb = box.getBoundingClientRect();
        const eb0 = el.getBoundingClientRect();
        const desired =
          box.scrollTop + (eb0.top - lb.top) - lb.height / 2 + eb0.height / 2;
        const clamped = Math.max(
          0,
          Math.min(desired, box.scrollHeight - box.clientHeight),
        );
        await smoothScroll(box, clamped, 420);
      }
      if (cancelled) return;
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      setCursor({
        // The SVG pointer hotspot is at (5, 3), not at its centre.
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      });
      await wait(MOVE);
    };

    const click = async () => {
      setClicking(true);
      await wait(110);
      setClicking(false);
      await wait(110);
    };

    const run = async () => {
      while (!cancelled) {
        // ---- reset ----
        setFade(true);
        await wait(220);
        setAnswers({});
        setChecked(false);
        setShowSolution(false);
        setActiveExpl(-1);
        setFocusTask(false);
        setCalcOpen(false);
        setTimed(false);
        setSecondsLeft(90);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        if (explRef.current) explRef.current.scrollTop = 0;
        setFade(false);
        await wait(320);

        // ---- feature demo (kept snappy: no long cursor idling) ----
        if (subject === "economics") {
          await moveTo("[data-sim-timed]");
          await click();
          setTimed(true);
          await wait(160);
        } else if (subject === "math") {
          await moveTo("[data-sim-calc]");
          await click();
          setCalcOpen(true);
          await wait(500);
          await moveTo("[data-sim-calc]");
          await click();
          setCalcOpen(false);
          await wait(120);
        }


        // ---- phase 1: read the case, statements gently grow ----
        if (scrollRef.current) await smoothScroll(scrollRef.current, 90, 900);
        setFocusTask(true);
        await pause(700);

        const current = pool[Math.min(taskIdx, pool.length - 1)];
        const trap = current.answerKey.findIndex((v) => !v);
        const toMark = current.answerKey.map((v, i) => (v ? i : -1)).filter((i) => i >= 0);
        if (trap >= 0) toMark.push(trap);
        toMark.sort((a, b) => a - b);
        for (const i of toMark) {
          if (cancelled) return;
          await moveTo(`[data-sim-check="${i}"]`);
          await click();
          setAnswers((a) => ({ ...a, [i]: true }));
          await pause(280);
        }

        await pause(260);
        await moveTo("[data-sim-submit]");
        await click();
        setChecked(true);
        await pause(650);

        // ---- phase 2: open the explanation panel and study it ----
        await moveTo("[data-sim-explain]");
        await click();
        setFocusTask(false);
        setShowSolution(true);
        await pause(700);

        const box = explRef.current;
        for (let i = 0; i < current.explanations.length; i++) {
          if (cancelled) return;
          setActiveExpl(i);
          await new Promise<void>((r) => requestAnimationFrame(() => r()));
          const panel = explRef.current;
          const item = panel?.querySelector<HTMLElement>(`[data-sim-expl="${i}"]`);
          if (panel && item) {
            const pb = panel.getBoundingClientRect();
            const ib = item.getBoundingClientRect();
            const target = Math.max(
              0,
              Math.min(
                panel.scrollTop + (ib.top - pb.top) - 24,
                panel.scrollHeight - panel.clientHeight,
              ),
            );
            await smoothScroll(panel, target, 900);
            // Long explanation: creep down through it so it stays readable.
            const overflow = ib.height - (panel.clientHeight - 60);
            if (overflow > 40) {
              const steps = Math.min(4, Math.ceil(overflow / 220));
              for (let s = 1; s <= steps; s++) {
                if (cancelled) return;
                await pause(500);
                await smoothScroll(panel, target + (overflow * s) / steps, 900);
              }
            }
          }
          await pause(750);
        }
        setActiveExpl(-1);
        if (box) await smoothScroll(box, 0, 900);
        await pause(900);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [pool, taskIdx, subject]);

  return (
    <div ref={stageRef} className="relative">
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-stretch">
        {/* ---------------- Task panel ---------------- */}
        <div className="min-w-0 lg:w-full">

          <div
            ref={scrollRef}
            className={cn(
              "practice-scroll h-[520px] overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-500 sm:h-[560px] sm:p-6 lg:h-[640px]",
              fade ? "opacity-0" : "opacity-100",
            )}
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Task {taskIdx + 1}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                {task.caseId}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                {task.chapter}
              </span>

              <div className="ml-auto flex items-center gap-2">
                {subject === "economics" ? (
                  <span
                    data-sim-timed
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
                      timed
                        ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                        : "border-border bg-background text-foreground",
                    )}
                  >
                    <Timer className="h-4 w-4" />
                    {timed ? `Timed Mode · ${clock(secondsLeft)}` : "Timed Mode"}
                  </span>
                ) : null}
                {subject === "math" ? (
                  <span
                    data-sim-calc
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
                      calcOpen
                        ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                        : "border-border bg-background text-foreground",
                    )}
                  >
                    <Calculator className="h-4 w-4" /> Calculator
                  </span>
                ) : null}
              </div>
            </div>

            {calcOpen ? (
              <div className="mb-5 rounded-xl border border-border bg-background p-2">
                <Ti30MathPrint compact className="w-full" />
              </div>
            ) : null}

            <h2 className="font-display text-lg font-bold tracking-tight">
              <Inline text={task.title} subject={subject} />
            </h2>

            <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
              <Prose text={task.context} subject={subject} className="text-sm" />
            </div>

            <ol
              className={cn(
                "mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background",
              )}
            >
              <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="w-6 text-center">#</span>
                <span className="flex-1">Statement</span>
                <span className="w-14 text-center">True</span>
                {checked && <span className="w-6" aria-hidden />}
              </li>
              {task.statements.map((stmt, i) => {
                const isChecked = answers[i] === true;
                const isCorrect = checked && isChecked === task.answerKey[i];
                return (
                  <li key={i} className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                        {LETTERS[i]}.
                      </span>
                      <p
                        className={cn(
                          "flex-1 text-sm leading-relaxed text-foreground",
                        )}
                      >
                        <Inline text={stmt} subject={subject} />
                      </p>
                      <div className="flex w-14 justify-center">
                        <span
                          data-sim-check={i}
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                            isChecked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background",
                          )}
                        >
                          {isChecked && <Check className="h-4 w-4" strokeWidth={3} />}
                        </span>
                      </div>
                      {checked && (
                        <span
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded-full",
                            isCorrect
                              ? "bg-emerald-500 text-white"
                              : "bg-destructive text-destructive-foreground",
                          )}
                        >
                          {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {!checked ? (
                  <span data-sim-submit className={practiceSubmitButtonClass}>
                    Check Answers / Submit
                  </span>
                ) : (
                  <span data-sim-explain className={practiceExplanationToggleClass(showSolution)}>
                    {showSolution ? "Hide Explanation" : "Explanation"}
                  </span>
                )}
              </div>
              {checked && (
                <span className="text-sm font-semibold text-muted-foreground">
                  {correctCount}/{task.answerKey.length} correct
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- Dim backdrop ---------------- */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[5] rounded-2xl bg-background/70 transition-opacity duration-700 ease-in-out",
            showSolution ? "opacity-100" : "opacity-0",
          )}
        />

        {/* ---------------- Explanation panel (slides in from the right) ---------------- */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 z-10 w-full transition-transform duration-[900ms] ease-in-out lg:w-[56%]",
            showSolution ? "translate-x-0" : "pointer-events-none translate-x-[105%]",
          )}
        >
          <div
            ref={explRef}
            className="practice-scroll h-full max-h-full overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6"
          >

            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">
              Explanation
            </p>

            <section className="mb-8 overflow-x-auto border-b border-border/60 pb-7">
              <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
                Answer key
              </p>
              <table className="w-full min-w-[16rem] border-collapse border border-foreground/20 text-center text-[14px] shadow-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    {task.answerKey.map((_, i) => (
                      <th
                        key={i}
                        className="border-b border-foreground/20 px-3 py-2.5 text-[12px] font-bold uppercase tracking-wide"
                      >
                        {LETTERS[i]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card">
                    {task.answerKey.map((isTrue, i) => (
                      <td
                        key={i}
                        className="border-border px-3 py-3 text-[13px] font-bold uppercase tracking-widest text-foreground"
                      >
                        {isTrue ? "TRUE" : "FALSE"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </section>

            <div className="space-y-6">
              {task.explanations.map((expl, i) => (
                <div
                  key={i}
                  data-sim-expl={i}
                  className={cn(
                    "rounded-xl border p-4 transition-all duration-700 ease-out",
                    activeExpl === i
                      ? "border-primary/40 bg-primary/5 opacity-100 shadow-sm"
                      : "border-transparent bg-transparent opacity-45",
                  )}
                >
                  <p className="mb-2 font-display text-sm font-bold text-foreground">
                    {LETTERS[i]}. → {task.answerKey[i] ? "True" : "False"}
                  </p>
                  {subject === "math" ? (
                    <div className="text-[13px] leading-relaxed text-foreground/90">
                      <FlashcardMath text={cleanExplanation(expl)} />
                    </div>
                  ) : (
                    <ExplanationProse text={cleanExplanation(expl)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated cursor */}
      <div
        data-sim-cursor
        className="pointer-events-none absolute left-0 top-0 z-20 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <div
          className={cn(
            "transition-transform duration-75",
            clicking ? "scale-90" : "scale-100",
          )}
        >
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
