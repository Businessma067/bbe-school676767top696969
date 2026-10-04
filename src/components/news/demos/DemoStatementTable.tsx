import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const DEMO_STATEMENT_LETTERS = "ABCDE";

type DemoStatementTableProps = {
  statements: string[];
  /** Statement index → marked true */
  marks: Record<number, boolean>;
  /** Show verdict circles (when answerKey provided). */
  checked?: boolean;
  answerKey?: boolean[];
  /** data-d attribute prefix, e.g. "m" → data-d="m0". */
  dataPrefix?: string;
  className?: string;
  statementLabel?: string;
  trueLabel?: string;
};

/**
 * Shared A–E True/False statement table matching PracticeSimulator / ExamScreen.
 * Keeps news demos in sync with live practice/mock chrome.
 */
export function DemoStatementTable({
  statements,
  marks,
  checked = false,
  answerKey,
  dataPrefix = "m",
  className,
  statementLabel = "Statement",
  trueLabel = "True",
}: DemoStatementTableProps) {
  const showVerdict = checked && Array.isArray(answerKey);

  return (
    <ol
      className={cn(
        "mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background",
        className,
      )}
    >
      <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        <span className="w-6 text-center">#</span>
        <span className="flex-1">{statementLabel}</span>
        <span className="w-14 text-center">{trueLabel}</span>
        {showVerdict ? <span className="w-6" aria-hidden /> : null}
      </li>
      {statements.map((stmt, i) => {
        const marked = marks[i] === true;
        const isCorrect = showVerdict && marked === answerKey![i];
        return (
          <li key={i} className="px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                {DEMO_STATEMENT_LETTERS[i]}.
              </span>
              <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
              <div className="flex w-14 justify-center">
                <span
                  data-d={`${dataPrefix}${i}`}
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                    marked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background",
                  )}
                >
                  {marked ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                </span>
              </div>
              {showVerdict ? (
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
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function demoCorrectCount(
  marks: Record<number, boolean>,
  answerKey: boolean[],
): number {
  return answerKey.reduce((n, key, i) => n + ((marks[i] === true) === key ? 1 : 0), 0);
}
