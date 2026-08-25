import { Minus, Plus } from "lucide-react";
import type { StatementResult } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export type ScoringExample = {
  title: string;
  note: string;
  pattern: boolean[];
  statements: StatementResult[];
  score: number;
};

type StatementBreakdown = {
  letter: string;
  isTrue: boolean;
  userMarked: boolean;
  points: number;
  label: string;
};

function breakdownStatement(
  s: StatementResult,
  letter: string,
  perCorrect: number,
  perWrong: number,
): StatementBreakdown {
  if (s.isTrue && s.userMarked) {
    return {
      letter,
      isTrue: true,
      userMarked: true,
      points: perCorrect,
      label: `Correct: you marked a true statement (+${perCorrect.toFixed(1)})`,
    };
  }
  if (s.isTrue && !s.userMarked) {
    return {
      letter,
      isTrue: true,
      userMarked: false,
      points: 0,
      label: "Missed: true statement left unmarked (0, no penalty)",
    };
  }
  if (!s.isTrue && s.userMarked) {
    return {
      letter,
      isTrue: false,
      userMarked: true,
      points: -perWrong,
      label: `Wrong tick: false statement marked (−${perWrong.toFixed(1)})`,
    };
  }
  return {
    letter,
    isTrue: false,
    userMarked: false,
    points: 0,
    label: "Correct skip: false statement left unmarked (0)",
  };
}

function formatPoints(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
}

function StatementCell({ item }: { item: StatementBreakdown }) {
  const tone =
    item.points > 0
      ? "border-emerald-300/80 bg-emerald-50/90"
      : item.points < 0
        ? "border-red-300/80 bg-red-50/90"
        : "border-border bg-secondary/30";

  const pointsTone =
    item.points > 0
      ? "text-emerald-800"
      : item.points < 0
        ? "text-red-800"
        : "text-muted-foreground";

  return (
    <li
      className={cn("flex flex-col rounded-xl border p-3 sm:p-3.5", tone)}
      title={item.label}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-background/80 font-display text-sm font-bold text-foreground shadow-sm">
          {item.letter}
        </span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
            item.isTrue ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900",
          )}
        >
          {item.isTrue ? "True" : "False"}
        </span>
      </div>

      <p className="mt-2 text-xs leading-snug text-muted-foreground">
        {item.userMarked ? "You marked" : "You left blank"}
      </p>

      <p className={cn("mt-2 font-display text-lg font-bold tabular-nums", pointsTone)}>
        {formatPoints(item.points)} pts
      </p>

      <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{item.label}</p>
    </li>
  );
}

export function ScoringExampleCard({
  example,
  maxPoints,
  perCorrect,
  perWrong,
}: {
  example: ScoringExample;
  maxPoints: number;
  perCorrect: number;
  perWrong: number;
}) {
  const items = example.statements.map((s, i) =>
    breakdownStatement(s, String.fromCharCode(65 + i), perCorrect, perWrong),
  );

  const earned = items.filter((i) => i.points > 0).reduce((sum, i) => sum + i.points, 0);
  const lost = items.filter((i) => i.points < 0).reduce((sum, i) => sum + i.points, 0);
  const rawTotal = earned + lost;

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-secondary/30 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
              {example.title}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {example.note}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background px-4 py-3 text-right shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Task score
            </p>
            <p className="font-display text-2xl font-bold tabular-nums text-foreground">
              {example.score.toFixed(1)}{" "}
              <span className="text-base font-semibold text-muted-foreground">/ {maxPoints}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <StatementCell key={`${example.title}-${item.letter}`} item={item} />
          ))}
        </ul>

        <div className="overflow-x-auto rounded-xl border border-border bg-secondary/20">
          <table className="w-full min-w-[20rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-2.5 font-semibold">Step</th>
                <th className="px-4 py-2.5 font-semibold">Points</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              <tr className="border-b border-border/70">
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1.5 text-emerald-800">
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    Credit for correct marks
                  </span>
                </td>
                <td className="px-4 py-3 font-display font-bold tabular-nums text-emerald-800">
                  +{earned.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-border/70">
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1.5 text-red-800">
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    Penalties for wrong ticks
                  </span>
                </td>
                <td className="px-4 py-3 font-display font-bold tabular-nums text-red-800">
                  {lost.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-border/70 bg-background/60">
                <td className="px-4 py-3 font-medium">Raw total (before zero floor)</td>
                <td className="px-4 py-3 font-display font-bold tabular-nums">
                  {rawTotal.toFixed(1)}
                </td>
              </tr>
              <tr className="bg-background/80">
                <td className="px-4 py-3 font-semibold">Final task score</td>
                <td className="px-4 py-3 font-display text-base font-bold tabular-nums">
                  {example.score.toFixed(1)} / {maxPoints}
                  {rawTotal < 0 ? (
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      (floored at 0)
                    </span>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}

export function ScoringExamplesLegend({
  maxPoints,
  perCorrect,
  perWrong,
  r,
  f,
}: {
  maxPoints: number;
  perCorrect: number;
  perWrong: number;
  r: number;
  f: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <p className="font-display text-base font-semibold text-foreground">How to read these examples</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Each task below is worth <span className="font-medium text-foreground">{maxPoints} points</span>.
        The correct truth pattern is A, B, and D true; C and E false. With three true and two false
        statements, each correct true mark earns{" "}
        <span className="font-medium text-emerald-800">+{perCorrect.toFixed(1)}</span> and each wrong
        tick on a false statement costs{" "}
        <span className="font-medium text-red-800">−{perWrong.toFixed(1)}</span>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50 px-3 py-1.5 font-medium text-emerald-900">
          Green: points added
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-red-300/80 bg-red-50 px-3 py-1.5 font-medium text-red-900">
          Red: points deducted
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-medium text-muted-foreground">
          Grey: 0 (missed credit or correct skip)
        </span>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Formula for this pattern: perCorrect = {maxPoints} ÷ {r} = {perCorrect.toFixed(1)}; perWrong ={" "}
        {maxPoints} ÷ {f} = {perWrong.toFixed(1)}.
      </p>
    </div>
  );
}
