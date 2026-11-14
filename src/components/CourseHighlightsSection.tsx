import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

import { ExplanationProse } from "@/components/ExplanationProse";
import { LazyFlashcardMath as FlashcardMath } from "@/components/LazyFlashcardMath";
import { StatementMarkTable } from "@/components/StatementMarkTable";
import {
  courseHighlightBullets,
  courseHighlightSubjects,
  type CourseHighlightSubject,
  type CourseHighlightTrack,
} from "@/config/course-highlights";
import { cleanExplanation } from "@/lib/clean-explanation";
import { fullExplanation } from "@/components/how-it-works/course-motion";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
  practiceTryAgainButtonClass,
} from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { tryItTaskFor } from "@/components/course-highlights/tryit-tasks";

const LETTERS = "ABCDE";

type Props = {
  track?: CourseHighlightTrack;
  /** Compact product-page layout vs landing hero placement. */
  variant?: "landing" | "product";
  className?: string;
};

export function CourseHighlightsSection({
  track = "bbe",
  variant = "landing",
  className,
}: Props) {
  const bullets = courseHighlightBullets(track);
  const subjects = courseHighlightSubjects(track);
  const accent = track === "wiso" ? "wiso" : track === "hybrid" ? "hybrid" : "bbe";
  const [subject, setSubject] = useState<CourseHighlightSubject>(subjects[0]!.id);

  return (
    <section
      className={cn(variant === "landing" ? "w-full" : "mt-12", className)}
      aria-labelledby="course-highlights-heading"
    >
      <h2 id="course-highlights-heading" className="sr-only">
        {track === "wiso"
          ? "What you get in the WiSo course"
          : track === "hybrid"
            ? "What you get in the Hybrid course"
            : "What you get in the BBE course"}
      </h2>

      <ul className="grid grid-cols-1 gap-5 text-foreground sm:grid-cols-2 sm:gap-6 sm:text-center lg:grid-cols-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex flex-col items-start gap-2.5 sm:items-center">
            <span
              className={cn(
                "h-3 w-3 shrink-0 rounded-full",
                accent === "wiso"
                  ? "bg-indigo-700"
                  : accent === "hybrid"
                    ? "bg-teal-700"
                    : "bg-[var(--exam-red)]",
              )}
              aria-hidden
            />
            <span className="max-w-[16rem] text-lg font-bold leading-snug tracking-tight sm:text-xl">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 sm:mt-6">
        <TryItQuestionBox
          track={track}
          subject={subject}
          subjects={subjects}
          onSubjectChange={setSubject}
          accent={accent}
        />
      </div>
    </section>
  );
}

function TryItQuestionBox({
  track,
  subject,
  subjects,
  onSubjectChange,
  accent,
}: {
  track: CourseHighlightTrack;
  subject: CourseHighlightSubject;
  subjects: { id: CourseHighlightSubject; label: string }[];
  onSubjectChange: (subject: CourseHighlightSubject) => void;
  accent: "bbe" | "wiso" | "hybrid";
}) {
  const task = tryItTaskFor(track, subject);
  const [marked, setMarked] = useState<boolean[]>(() => task.statements.map(() => false));
  const [checked, setChecked] = useState(false);
  const [showExpl, setShowExpl] = useState(false);

  useEffect(() => {
    setMarked(task.statements.map(() => false));
    setChecked(false);
    setShowExpl(false);
  }, [task]);

  const correctCount = task.answerKey.reduce(
    (n, key, i) => n + ((marked[i] === true) === key ? 1 : 0),
    0,
  );

  const chrome =
    track === "wiso"
      ? {
          statement: "Aussage",
          trueColumn: "Richtig",
          trueWord: "Richtig",
          falseWord: "Falsch",
          submit: "Check Answers / Submit",
          explanation: "Explanation",
          hideExplanation: "Hide Explanation",
          tryAgain: "Try again",
          sheetTitle: "Full solution",
          answerKey: "Antwortschlüssel",
        }
      : {
          statement: "Statement",
          trueColumn: "True",
          trueWord: "True",
          falseWord: "False",
          submit: "Check Answers / Submit",
          explanation: "Explanation",
          hideExplanation: "Hide Explanation",
          tryAgain: "Try again",
          sheetTitle: "Full solution",
          answerKey: "Answer key",
        };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-sm border bg-card text-left shadow-sm",
        accent === "wiso"
          ? "border-indigo-200/80 dark:border-indigo-900/60"
          : accent === "hybrid"
            ? "border-teal-200/80 dark:border-teal-900/60"
            : "border-border",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5",
          accent === "wiso"
            ? "border-indigo-200/80 bg-indigo-50/50 dark:border-indigo-900/60 dark:bg-indigo-950/30"
            : accent === "hybrid"
              ? "border-teal-200/80 bg-teal-50/50 dark:border-teal-900/60 dark:bg-teal-950/30"
              : "border-border bg-secondary/40",
        )}
      >
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Try a real question
        </p>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Subject">
          {subjects.map((item) => {
            const active = item.id === subject;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSubjectChange(item.id)}
                className={cn(
                  "rounded-sm border px-3 py-1.5 text-sm font-semibold transition-colors",
                  active
                    ? accent === "wiso"
                      ? "border-indigo-700 bg-indigo-700 text-white"
                      : accent === "hybrid"
                        ? "border-teal-700 bg-teal-700 text-white"
                        : "border-[var(--exam-red)] bg-[var(--exam-red)] text-white"
                    : "border-border bg-background text-foreground hover:bg-secondary",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[18rem]">
        <div
          className={cn(
            "px-4 py-5 transition-[padding] sm:px-5 sm:py-6",
            showExpl && "lg:pr-[min(52%,28rem)]",
          )}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                accent === "wiso"
                  ? "bg-indigo-700/15 text-indigo-900 dark:text-indigo-200"
                  : accent === "hybrid"
                    ? "bg-teal-700/15 text-teal-900 dark:text-teal-200"
                    : "bg-primary/15 text-primary",
              )}
            >
              Task 1
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              {task.caseId}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              {task.chapter}
            </span>
          </div>

          <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{task.title}</h3>
          {task.passage ? (
            <div className="mt-3 max-h-40 overflow-y-auto whitespace-pre-wrap rounded-xl border border-border bg-background px-4 py-3 font-serif text-sm leading-relaxed">
              {task.passage}
            </div>
          ) : null}
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {task.math ? <FlashcardMath text={task.context} /> : task.context}
          </p>

          <StatementMarkTable
            statements={task.statements}
            marked={marked}
            answerKey={task.answerKey}
            checked={checked}
            math={task.math}
            statementHeading={chrome.statement}
            trueHeading={chrome.trueColumn}
            onToggle={(index) => {
              if (checked) return;
              setMarked((prev) => prev.map((value, i) => (i === index ? !value : value)));
            }}
          />

          <div className="relative z-20 mt-6 flex flex-wrap items-center justify-between gap-3">
            {!checked ? (
              <button
                type="button"
                className={practiceSubmitButtonClass}
                onClick={() => {
                  setChecked(true);
                  setShowExpl(true);
                }}
              >
                {chrome.submit}
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {correctCount}/{task.answerKey.length} correct
                </span>
                <button
                  type="button"
                  className={practiceExplanationToggleClass(showExpl)}
                  onClick={() => setShowExpl((open) => !open)}
                >
                  {showExpl ? chrome.hideExplanation : chrome.explanation}
                </button>
                <button
                  type="button"
                  className={practiceTryAgainButtonClass}
                  onClick={() => {
                    setMarked(task.statements.map(() => false));
                    setChecked(false);
                    setShowExpl(false);
                  }}
                >
                  {chrome.tryAgain}
                </button>
              </div>
            )}
          </div>

          {/* Mobile / narrow: explanations stack under the task when the side panel cannot fit. */}
          {checked && showExpl ? (
            <div className="mt-6 lg:hidden">
              <ExplanationPanel
                task={task}
                marked={marked}
                chrome={chrome}
                accent={accent}
              />
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[5] hidden bg-black/40 transition-opacity duration-300 lg:block",
            showExpl ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />

        {/* Desktop: course-style right sheet */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 z-10 hidden w-[min(52%,28rem)] border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out lg:block",
            showExpl ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-[105%] opacity-0",
          )}
          aria-hidden={!showExpl}
        >
          <div className="practice-scroll h-full overflow-y-auto p-3 sm:p-3.5">
            <ExplanationPanel task={task} marked={marked} chrome={chrome} accent={accent} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Complete bank explanation for the try-it sheet: keep calculations and steps,
 * strip letter/verdict chrome and raw ** markers, collapse empty vertical space.
 */
function cleanCompleteExplanation(raw: string, math: boolean): string {
  const base = math ? fullExplanation(raw) : cleanExplanation(raw);
  return base
    .replace(/^\*\*[A-E]\.\*\*\s*(?:→|->)?\s*(?:True|False|Richtig|Falsch)?\s*/i, "")
    .replace(/^[A-E]\.\s*(?:→|->)\s*(?:True|False|Richtig|Falsch)\s*/i, "")
    .replace(/\*\*/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function ExplanationPanel({
  task,
  marked,
  chrome,
  accent,
}: {
  task: ReturnType<typeof tryItTaskFor>;
  marked: boolean[];
  chrome: {
    sheetTitle: string;
    answerKey: string;
    trueWord: string;
    falseWord: string;
  };
  accent: "bbe" | "wiso" | "hybrid";
}) {
  const overview = task.overview ? cleanCompleteExplanation(task.overview, !!task.math) : "";

  return (
    <div className="text-[12.5px] leading-snug">
      <p
        className={cn(
          "mb-2.5 text-[10px] font-bold uppercase tracking-widest",
          accent === "wiso"
            ? "text-indigo-700 dark:text-indigo-300"
            : accent === "hybrid"
              ? "text-teal-700 dark:text-teal-300"
              : "text-primary",
        )}
      >
        {chrome.sheetTitle} · Task 1
      </p>
      <section className="mb-3 overflow-x-auto border-b border-border/60 pb-2.5">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-foreground">
          {chrome.answerKey}
        </p>
        <table className="w-full min-w-[14rem] border-collapse border border-foreground/20 text-center text-[12px] shadow-sm">
          <thead>
            <tr className="bg-foreground text-background">
              {task.answerKey.map((_, i) => (
                <th
                  key={i}
                  className="border-b border-foreground/20 px-1.5 py-1.5 text-[10px] font-bold uppercase tracking-wide"
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
                  className="px-1.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-foreground"
                >
                  {isTrue ? chrome.trueWord : chrome.falseWord}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {overview ? (
        <div className="mb-2.5 text-[12.5px] leading-snug text-foreground/90 [&_.katex-display]:my-1.5">
          {task.math ? <FlashcardMath text={overview} /> : <ExplanationProse text={overview} className="text-[12.5px] leading-snug" />}
        </div>
      ) : null}

      <div className="space-y-2">
        {task.explanations.map((raw, i) => {
          const letter = LETTERS[i] ?? String(i + 1);
          const verdict = task.answerKey[i] ? chrome.trueWord : chrome.falseWord;
          const body = cleanCompleteExplanation(raw, !!task.math);
          const userMarked = marked[i] === true;
          const isCorrect = userMarked === task.answerKey[i];
          return (
            <div key={letter} className="rounded-lg border border-border bg-background px-2.5 py-2">
              <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {letter}
                </span>
                <span className="rounded-md border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                  {verdict}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white",
                    isCorrect ? "bg-emerald-500" : "bg-destructive",
                  )}
                >
                  {isCorrect ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
              {task.math ? (
                <div className="text-[12.5px] leading-snug text-foreground/90 [&_.katex-display]:my-1.5 [&_p]:my-1">
                  <FlashcardMath text={body} />
                </div>
              ) : (
                <ExplanationProse text={body} className="text-[12.5px] leading-snug [&_p]:my-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
