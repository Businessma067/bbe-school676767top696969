import { Check, X } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { cn } from "@/lib/utils";

/** Same statement table as Full Course practice and the mock-exam player: mark True, not a True/False pair. */
export function StatementMarkTable({
  statements,
  marked,
  answerKey,
  checked,
  onToggle,
  statementHeading = "Statement",
  trueHeading = "True",
  math = false,
}: {
  statements: string[];
  marked: boolean[];
  answerKey?: boolean[];
  checked: boolean;
  onToggle: (index: number) => void;
  statementHeading?: string;
  trueHeading?: string;
  math?: boolean;
}) {
  return (
    <ol className="mt-6 divide-y divide-border overflow-visible rounded-xl border border-border bg-background">
      <li className="flex items-center gap-2 bg-secondary/60 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:gap-3 sm:px-4">
        <span className="w-6 text-center">#</span>
        <span className="flex-1">{statementHeading}</span>
        <span className="w-11 text-center lg:w-14">{trueHeading}</span>
        {checked ? <span className="w-6" aria-hidden /> : null}
      </li>
      {statements.map((stmt, i) => {
        const isChecked = marked[i] === true;
        const correctAns = answerKey?.[i];
        const isCorrect = checked && correctAns != null && isChecked === correctAns;
        return (
          <li key={i} className="px-3 py-3 sm:px-4">
            <div className="flex items-start gap-2 sm:items-center sm:gap-3">
              <span className="mt-2 w-6 text-center text-xs font-bold text-muted-foreground sm:mt-0">
                {String.fromCharCode(65 + i)}.
              </span>
              <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
                {math ? <FlashcardMath text={stmt} /> : stmt}
              </p>
              <div className="flex w-11 shrink-0 justify-center lg:w-14">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  aria-label={`Mark statement ${String.fromCharCode(65 + i)} as true`}
                  disabled={checked}
                  onClick={() => onToggle(i)}
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-lg border-2 transition-all lg:h-6 lg:w-6 lg:rounded",
                    isChecked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/60",
                    checked && "cursor-default",
                  )}
                >
                  {isChecked ? <Check className="h-5 w-5 lg:h-4 lg:w-4" strokeWidth={3} /> : null}
                </button>
              </div>
              {checked ? (
                <span
                  className={cn(
                    "mt-2 grid h-6 w-6 shrink-0 place-items-center rounded-full sm:mt-0",
                    isCorrect
                      ? "bg-emerald-500 text-white"
                      : "bg-destructive text-destructive-foreground",
                  )}
                  aria-label={isCorrect ? "Correct" : "Incorrect"}
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
