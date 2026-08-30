import { useEffect, useMemo, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { ExplanationProse } from "@/components/ExplanationProse";
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

/**
 * Pure DOM animation of the real practice UI (task card + full-solution panel),
 * driven by a randomly picked task from the live banks. Used on the homepage
 * "How it works" section instead of screen recordings.
 */
export default function PracticeSimulator({ subject }: { subject: SimSubject }) {
  const pool = SIM_TASKS[subject];
  const [taskIdx, setTaskIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [cursor, setCursor] = useState({ x: 40, y: 40 });
  const [clicking, setClicking] = useState(false);
  const [fade, setFade] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const task: SimTask = pool[Math.min(taskIdx, pool.length - 1)];

  // Random starting task per mount (client-only → no hydration mismatch).
  useEffect(() => {
    setTaskIdx(Math.floor(Math.random() * pool.length));
  }, [pool]);

  const correctCount = useMemo(
    () => task.answerKey.filter((a, i) => (answers[i] === true) === a).length,
    [answers, task],
  );

  useEffect(() => {
    let cancelled = false;
    const MOVE = 520;
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
      const el = stage?.querySelector<HTMLElement>(selector);
      if (!stage || !el) return;
      const s = stage.getBoundingClientRect();
      const left = leftRef.current;
      let scrollPromise = Promise.resolve();
      let shift = 0;
      if (left && left.contains(el)) {
        const lb = left.getBoundingClientRect();
        const eb0 = el.getBoundingClientRect();
        const desired = left.scrollTop + (eb0.top - lb.top) - lb.height / 2 + eb0.height / 2;
        const clamped = Math.max(0, Math.min(desired, left.scrollHeight - left.clientHeight));
        shift = clamped - left.scrollTop;
        scrollPromise = smoothScroll(left, clamped, MOVE);
      }
      const eb = el.getBoundingClientRect();
      setCursor({
        x: eb.left - s.left + eb.width / 2,
        y: eb.top - s.top + eb.height / 2 - shift,
      });
      await Promise.all([scrollPromise, wait(MOVE)]);
      await wait(120);
    };

    const click = async () => {
      setClicking(true);
      await wait(90);
      setClicking(false);
      await wait(90);
    };

    const run = async () => {
      while (!cancelled) {
        // Fresh attempt
        setFade(true);
        await wait(280);
        setAnswers({});
        setChecked(false);
        setShowSolution(false);
        if (leftRef.current) leftRef.current.scrollTop = 0;
        setFade(false);
        await wait(500);

        // Read the stem
        if (leftRef.current) await smoothScroll(leftRef.current, 90, 900);
        await wait(500);

        // Tick the statements the student believes are TRUE (with one trap miss)
        const current = pool[Math.min(taskIdx, pool.length - 1)];
        const trap = current.answerKey.findIndex((v) => !v);
        const toMark = current.answerKey
          .map((v, i) => (v ? i : -1))
          .filter((i) => i >= 0);
        if (trap >= 0) toMark.push(trap);
        toMark.sort((a, b) => a - b);
        for (const i of toMark) {
          if (cancelled) return;
          await moveTo(`[data-sim-check="${i}"]`);
          await click();
          setAnswers((a) => ({ ...a, [i]: true }));
          await wait(180);
        }

        // Submit
        await moveTo("[data-sim-submit]");
        await click();
        setChecked(true);
        await wait(900);

        // Open the full solution panel
        await moveTo("[data-sim-explain]");
        await click();
        setShowSolution(true);
        await wait(900);

        // Read the solution slowly, top to bottom
        const panel = panelRef.current;
        if (panel) {
          const max = panel.scrollHeight - panel.clientHeight;
          const steps = 5;
          for (let s = 1; s <= steps; s++) {
            if (cancelled) return;
            await smoothScroll(panel, (max * s) / steps, 1500);
            await wait(1100);
          }
        }
        await wait(1200);

        // Next random task
        setTaskIdx((i) => {
          if (pool.length < 2) return i;
          let n = i;
          while (n === i) n = Math.floor(Math.random() * pool.length);
          return n;
        });
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [pool, taskIdx]);

  const solutionBlocks = task.explanations.map((expl, i) => ({
    letter: LETTERS[i],
    verdict: task.answerKey[i] ? "True" : "False",
    body: expl.replace(/\*\*/g, "").trim(),
  }));

  return (
    <div
      ref={stageRef}
      className="relative h-[520px] overflow-hidden rounded-2xl border border-border bg-secondary/20 p-3 sm:h-[560px] lg:h-[620px]"
    >
      <div
        className={cn(
          "flex h-full gap-3 transition-opacity duration-300",
          fade ? "opacity-0" : "opacity-100",
        )}
      >
        {/* Task card — mirrors the live practice card */}
        <div
          ref={leftRef}
          className="practice-scroll min-h-0 flex-1 overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
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
          </div>

          <h2 className="font-display text-lg font-bold tracking-tight">
            <Inline text={task.title} subject={subject} />
          </h2>

          <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
            <Prose text={task.context} subject={subject} className="text-sm" />
          </div>

          <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
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
                    <p className="flex-1 text-sm leading-relaxed text-foreground">
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
                <span
                  data-sim-explain
                  className={practiceExplanationToggleClass(showSolution)}
                >
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

        {/* Full solution panel — mirrors the live right-hand slot */}
        <div
          className={cn(
            "hidden min-h-0 w-[24rem] shrink-0 transition-all duration-500 lg:block xl:w-[28rem]",
            showSolution ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
          )}
          aria-hidden={!showSolution}
        >
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                  Full solution · Task {taskIdx + 1}
                </p>
                <h3 className="mt-0.5 truncate font-display text-sm font-bold">
                  <Inline text={task.title} subject={subject} />
                </h3>
              </div>
              <span className="shrink-0 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                Close
              </span>
            </div>
            <div
              ref={panelRef}
              className="practice-scroll min-h-0 flex-1 overflow-y-auto bg-white px-6 py-6"
            >
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
              <div className="space-y-7">
                {solutionBlocks.map((b) => (
                  <div key={b.letter}>
                    <p className="mb-2 font-display text-sm font-bold text-foreground">
                      {b.letter}. → {b.verdict}
                    </p>
                    {subject === "math" ? (
                      <div className="space-y-3 text-[13px] leading-relaxed text-foreground/90">
                        {b.body.split(/\n\n+/).map((p, k) => (
                          <p key={k}>
                            <FlashcardMath text={p} displayPrefer />
                          </p>
                        ))}
                      </div>
                    ) : (
                      <Prose text={b.body} subject={subject} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated cursor */}
      <div
        className="pointer-events-none absolute z-20 transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <div
          className={cn(
            "-ml-1 -mt-1 transition-transform duration-100",
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
