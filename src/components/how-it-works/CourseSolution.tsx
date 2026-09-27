import type { ReactNode } from "react";
import { ExplanationProse } from "@/components/ExplanationProse";
import { FlashcardMath } from "@/components/FlashcardMath";
import { cleanExplanation } from "@/lib/clean-explanation";
import { practiceInlineLocateButtonClass } from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";

const LETTERS = "ABCDE";

/** Right-hand sheet: answer key plus the bank's tactical explanations, unedited. */
export function CourseSolution({
  open,
  dimmed = open,
  answerKey,
  explanations,
  active,
  math = false,
  locateAt,
  located = false,
}: {
  open: boolean;
  dimmed?: boolean;
  answerKey: boolean[];
  explanations: string[];
  active: number;
  math?: boolean;
  locateAt?: number;
  located?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[5] bg-black/75 transition-opacity duration-700 ease-in-out",
          dimmed ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 z-10 w-full transition-transform duration-[900ms] ease-in-out sm:w-[54%]",
          open ? "translate-x-0" : "pointer-events-none translate-x-[105%]",
        )}
      >
        <div
          data-d="expl-scroll"
          className="practice-scroll h-full overflow-y-auto border-l border-border bg-card p-4 shadow-2xl sm:p-5"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">
            Explanation
          </p>
          <section className="mb-6 overflow-x-auto border-b border-border/60 pb-5">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
              Answer key
            </p>
            <table className="w-full min-w-[14rem] border-collapse border border-foreground/20 text-center text-[13px] shadow-sm">
              <thead>
                <tr className="bg-foreground text-background">
                  {answerKey.map((_, i) => (
                    <th
                      key={i}
                      className="border-b border-foreground/20 px-2 py-2 text-[11px] font-bold uppercase tracking-wide"
                    >
                      {LETTERS[i]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  {answerKey.map((isTrue, i) => (
                    <td
                      key={i}
                      className="px-2 py-2.5 text-[12px] font-bold uppercase tracking-widest text-foreground"
                    >
                      {isTrue ? "TRUE" : "FALSE"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>
          <div className="space-y-4">
            {explanations.map((raw, i) => {
              const letter = LETTERS[i];
              const verdict = answerKey[i] ? "True" : "False";
              const body = cleanExplanation(raw);
              const prose = `**${letter}.** → ${verdict}\n\n${body}`;
              return (
                <div
                  key={letter}
                  data-d={`e${i}`}
                  className={cn(
                    "rounded-xl border p-3 transition-all duration-700 ease-out",
                    active === i
                      ? "border-primary/40 bg-primary/5 opacity-100 shadow-sm"
                      : "border-transparent bg-transparent opacity-45",
                  )}
                >
                  {math ? (
                    <div className="text-[13px] leading-relaxed text-foreground/90">
                      <FlashcardMath text={prose} />
                    </div>
                  ) : (
                    <ExplanationProse text={prose} className="text-[13px]" />
                  )}
                  {locateAt === i ? (
                    <span data-d="show" className={cn("mt-3", practiceInlineLocateButtonClass(located))}>
                      {located ? "Located in text" : "Show solution in the text"}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export function CoursePassage({
  text,
  highlight,
  active,
}: {
  text: string;
  highlight: string;
  active: boolean;
}) {
  const idx = highlight ? text.indexOf(highlight) : -1;
  let body: ReactNode = text;
  if (idx >= 0 && highlight) {
    body = (
      <>
        {text.slice(0, idx)}
        <span data-d="line" className={active ? "passage-ai-highlight" : undefined}>
          {text.slice(idx, idx + highlight.length)}
        </span>
        {text.slice(idx + highlight.length)}
      </>
    );
  }
  return (
    <div className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-background px-4 py-3 font-serif text-sm leading-relaxed">
      {body}
    </div>
  );
}
