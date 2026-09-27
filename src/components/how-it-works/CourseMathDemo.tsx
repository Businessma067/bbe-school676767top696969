import { useState } from "react";
import { Calculator, Timer } from "lucide-react";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { DemoStatementTable, demoCorrectCount } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { CourseSolution } from "./CourseSolution";
import { scrollPanelTo } from "./course-motion";

const STMTS = [
  "The total number of distinct 5-card hands that could be dealt is greater than 2.5 million.",
  "The probability of being dealt a full house is more than 10 times the probability of being dealt four of a kind.",
  "The probability of being dealt a flush (5 cards of one suit, excluding straight flushes) is less than 1 in 500.",
  "The probability that Amanda's hand contains at least one pair (i.e., is not a 'nothing' / high-card hand) is greater than 50%.",
  "The probability of being dealt a straight (excluding straight flushes) is greater than the probability of being dealt three of a kind.",
];
const KEY = [true, false, true, false, false];
const NOTES = [
  {
    title: "A. → True",
    body: "C(52, 5) = 52×51×50×49×48 / 120 = 2,598,960, which is greater than 2,500,000.",
  },
  {
    title: "B. → False",
    body: "Full house / four of a kind = 3,744 / 624 = 6. The claim needs more than 10.",
  },
  {
    title: "C. → True",
    body: "Flush excluding straight flushes is 5,108 / 2,598,960 ≈ 0.00197, and 1/500 = 0.002.",
  },
  {
    title: "D. → False",
    body: "At least one pair is about 49.88%. That is not greater than 50%.",
  },
  {
    title: "E. → False",
    body: "A straight excluding straight flushes is 10,200 hands. Three of a kind is 54,912.",
  },
];

const KEY_ROWS = [
  ["2nd", "Mode", "←", "CE", "ON"],
  ["sin", "cos", "tan", "π", "EE"],
  ["ln", "log", "x²", "^", "√"],
  ["(", ")", "1/x", "%", "÷"],
  ["7", "8", "9", "×", "nCr"],
  ["4", "5", "6", "−", "nPr"],
  ["1", "2", "3", "+", "!"],
  ["(−)", "0", ".", "=", "F↔D"],
];

/** Course · Math: timed mode, exam calculator, then the solution for every statement. */
export function CourseMathDemo() {
  const [timed, setTimed] = useState(false);
  const [seconds, setSeconds] = useState(90);
  const [calc, setCalc] = useState(false);
  const [lcd, setLcd] = useState("0");
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [expl, setExpl] = useState(false);
  const [active, setActive] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setTimed(false);
    setSeconds(90);
    setCalc(false);
    setLcd("0");
    setMarks({});
    setChecked(false);
    setExpl(false);
    setActive(-1);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(400);

    await api.moveTo('[data-d="timed"]');
    await api.click();
    setTimed(true);
    setSeconds(88);
    await api.wait(280);

    await api.moveTo('[data-d="calc"]');
    await api.click();
    setCalc(true);
    setLcd("0");
    await api.flush();
    await api.wait(280);

    await api.moveTo('[data-d="key-ncr"]');
    await api.click();
    setLcd("nCr(52,5)");
    await api.wait(420);

    await api.moveTo('[data-d="key-eq"]');
    await api.click();
    setLcd("2598960");
    await api.wait(640);

    await api.moveTo('[data-d="calc"]');
    await api.click();
    setCalc(false);
    await api.wait(280);

    for (const i of [0, 2, 1]) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="m${i}"]`);
      await api.click();
      setMarks((m) => ({ ...m, [i]: true }));
      await api.wait(240);
    }

    await api.moveTo('[data-d="submit"]');
    await api.click();
    setChecked(true);
    await api.flush();
    await api.wait(360);

    await api.moveTo('[data-d="expl"]');
    await api.click();
    setExpl(true);
    await api.wait(960);

    for (let i = 0; i < NOTES.length; i++) {
      if (api.cancelled()) return;
      setActive(i);
      await scrollPanelTo(api, '[data-d="expl-scroll"]', `[data-d="e${i}"]`);
      await api.moveTo(`[data-d="e${i}"]`);
      await api.wait(480);
    }
    await api.wait(640);
  }, []);

  const score = demoCorrectCount(marks, KEY);

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
          kicker="Explanation"
          answerKey={KEY}
          notes={NOTES}
          active={active}
        />
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Task 25
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          MATH 12.25
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          Chapter 12.1 · Probability
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span
            data-d="timed"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
              timed
                ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                : "border-border bg-background text-foreground",
            )}
          >
            <Timer className="h-4 w-4" />
            {timed ? `Timed Mode · 1:${String(seconds).padStart(2, "0")}` : "Timed Mode"}
          </span>
          <span
            data-d="calc"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
              calc
                ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                : "border-border bg-background text-foreground",
            )}
          >
            <Calculator className="h-4 w-4" />
            Calculator
          </span>
        </div>
      </div>

      {calc ? (
        <div className="mb-4 overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-sm">
          <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-caramel-deep" />
              <div>
                <div className="font-display text-xs font-bold tracking-tight">MathPrint calc</div>
                <div className="text-[9px] text-taupe">DEG · FLOAT · MATHPRINT</div>
              </div>
            </div>
            <div className="flex gap-0.5 text-[9px] font-semibold text-muted-foreground">
              {["Home", "Mode", "PRB", "Dist"].map((tab) => (
                <span
                  key={tab}
                  className={cn(
                    "rounded-md px-1.5 py-1",
                    tab === "Home" ? "bg-secondary text-foreground" : "",
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-3 mt-3 rounded-xl border border-border bg-ivory px-3 py-2 font-mono text-foreground shadow-inner">
            <div className="text-right text-sm tabular-nums">{lcd}</div>
          </div>
          <div className="grid grid-cols-5 gap-1.5 p-3">
            {KEY_ROWS.flat().map((label) => (
              <span
                key={label}
                data-d={label === "nCr" ? "key-ncr" : label === "=" ? "key-eq" : undefined}
                className={cn(
                  "flex min-h-8 items-center justify-center rounded-lg border px-0.5 py-1 text-center text-[11px] font-semibold",
                  label === "="
                    ? "border-caramel-deep/50 bg-caramel-deep text-primary-foreground"
                    : label === "ON"
                      ? "border-destructive/40 bg-destructive/10 text-destructive"
                      : "border-border bg-background text-foreground",
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <h3 className="font-display text-lg font-bold tracking-tight">Poker Night</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        At a friend&apos;s poker night, the host shuffles a standard, well-mixed 52-card deck and
        deals a 5-card hand to the first player, Amanda. No cards are shown or removed beforehand —
        Amanda&apos;s hand is a uniformly random 5-card subset of the deck.
      </p>
      <DemoStatementTable statements={STMTS} marks={marks} checked={checked} answerKey={KEY} />
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
            {score}/{KEY.length} correct
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
