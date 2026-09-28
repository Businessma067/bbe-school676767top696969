import type { ReactNode } from "react";
import { ExplanationProse } from "@/components/ExplanationProse";
import { FlashcardMath } from "@/components/FlashcardMath";
import { practiceInlineLocateButtonClass } from "@/lib/practice-button-styles";
import { cleanExplanation } from "@/lib/clean-explanation";
import { evenExplanation, fullExplanation } from "./course-motion";
import { cn } from "@/lib/utils";

const LETTERS = "ABCDE";

/** Right-hand sheet: answer key plus the bank's tactical explanations, unedited. */
export function CourseSolution({
  open,
  dimmed = open,
  answerKey,
  explanations,
  shown = explanations.map((_, index) => index),
  active,
  math = false,
  full = false,
  overview,
  locateAt,
  located = false,
}: {
  open: boolean;
  dimmed?: boolean;
  answerKey: boolean[];
  explanations: string[];
  /** Statement indexes to show. A short even set, not the whole sheet. */
  shown?: number[];
  active: number;
  math?: boolean;
  /** Render the bank text in full, including formula blocks. */
  full?: boolean;
  overview?: string;
  locateAt?: number;
  located?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[5] bg-black/75 ease-in-out",
          dimmed ? "opacity-100 transition-opacity duration-700" : "opacity-0 transition-none",
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 z-10 w-full ease-in-out sm:w-[54%]",
          open
            ? "translate-x-0 transition-transform duration-[900ms]"
            : "pointer-events-none translate-x-[105%] transition-none",
        )}
      >
        <div
          data-d="expl-scroll"
          className="practice-scroll h-full overflow-y-auto border-l border-border bg-card p-4 shadow-2xl sm:p-5"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">
            Explanation
          </p>
          <section className="mb-3 overflow-x-auto border-b border-border/60 pb-3">
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
          {overview ? (
            <div className="mb-4 text-[13px] leading-relaxed text-foreground/90">
              <FlashcardMath text={overview} />
            </div>
          ) : null}
          <div className="space-y-3">
            {shown.map((i) => {
              const letter = LETTERS[i];
              const verdict = answerKey[i] ? "True" : "False";
              const raw = explanations[i] ?? "";
              const body = full
                ? math
                  ? fullExplanation(raw)
                  : cleanExplanation(raw)
                : evenExplanation(raw);
              const prose = `**${letter}.** → ${verdict}\n\n${body}`;
              return (
                <div
                  key={letter}
                  data-d={`card${i}`}
                  className={cn(
                    "relative rounded-xl border p-3 transition-colors duration-300",
                    active === i
                      ? "border-primary/40 bg-primary/5 shadow-sm"
                      : "border-border bg-background",
                  )}
                >
                  <div data-d={`e${i}`} className="pointer-events-none absolute left-8 top-7 h-2 w-2" />
                  {math ? (
                    <div data-d={`prose${i}`} className="text-[13px] leading-relaxed text-foreground/90">
                      <FlashcardMath text={prose} />
                    </div>
                  ) : (
                    <div data-d={`prose${i}`}>
                      <ExplanationProse text={prose} className="text-[13px]" />
                    </div>
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
