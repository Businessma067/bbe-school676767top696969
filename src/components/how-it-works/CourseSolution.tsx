import type { ReactNode } from "react";
import { ExplanationProse } from "@/components/ExplanationProse";
import { FlashcardMath } from "@/components/FlashcardMath";
import { practiceInlineLocateButtonClass } from "@/lib/practice-button-styles";
import { cleanExplanation } from "@/lib/clean-explanation";
import { englishBankExplanation, evenExplanation, fullExplanation } from "./course-motion";
import { EN_CHROME, type CourseChrome } from "./course-copy";
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
  bank = false,
  overview,
  locateAt,
  located = false,
  chrome = EN_CHROME,
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
  /** English practice body, unshortened, same strips as the task page. */
  bank?: boolean;
  overview?: string;
  locateAt?: number;
  located?: boolean;
  chrome?: CourseChrome;
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
            ? "translate-x-0 opacity-100 transition-opacity duration-300"
            : "pointer-events-none translate-x-[105%] opacity-0 transition-none",
        )}
      >
        <div
          data-d="expl-scroll"
          className="practice-scroll h-full overflow-y-auto border-l border-border bg-card p-4 shadow-2xl sm:p-5"
        >
          <div data-glide-inner>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">
            {chrome.sheetTitle}
          </p>
          <section className="mb-3 overflow-x-auto border-b border-border/60 pb-3">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
              {chrome.answerKey}
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
                      {isTrue ? chrome.trueWord : chrome.falseWord}
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
              const verdict = answerKey[i] ? chrome.trueWord : chrome.falseWord;
              const raw = explanations[i] ?? "";
              const body = bank
                ? englishBankExplanation(raw)
                : full
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
                  {bank ? (
                    <>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          {letter}
                        </span>
                        <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                          {answerKey[i] ? chrome.trueWord : chrome.falseWord}
                        </span>
                        {locateAt === i ? (
                          <span data-d="show" className={practiceInlineLocateButtonClass(located)}>
                            {located ? chrome.locatedInText : chrome.showInText}
                          </span>
                        ) : null}
                      </div>
                      <div data-d={`prose${i}`}>
                        <ExplanationProse text={body} />
                      </div>
                    </>
                  ) : math ? (
                    <div data-d={`prose${i}`} className="text-[13px] leading-relaxed text-foreground/90">
                      <FlashcardMath text={prose} />
                    </div>
                  ) : (
                    <div data-d={`prose${i}`}>
                      <ExplanationProse text={prose} className="text-[13px]" />
                    </div>
                  )}
                  {!bank && locateAt === i ? (
                    <span data-d="show" className={cn("mt-3", practiceInlineLocateButtonClass(located))}>
                      {located ? chrome.locatedInText : chrome.showInText}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
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
