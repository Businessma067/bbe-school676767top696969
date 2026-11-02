import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

import { ExplanationProse } from "@/components/ExplanationProse";
import { FlashcardMath } from "@/components/FlashcardMath";
import { StatementMarkTable } from "@/components/StatementMarkTable";
import {
  courseHighlightPoints,
  courseHighlightSubjects,
  type CourseHighlightSubject,
  type CourseHighlightTrack,
} from "@/config/course-highlights";
import { cleanExplanation } from "@/lib/clean-explanation";
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
  /** Compact product-page layout vs landing section. */
  variant?: "landing" | "product";
  className?: string;
};

export function CourseHighlightsSection({
  track = "bbe",
  variant = "landing",
  className,
}: Props) {
  const points = courseHighlightPoints(track);
  const subjects = courseHighlightSubjects(track);
  const accent = track === "wiso" ? "wiso" : "bbe";
  const [subject, setSubject] = useState<CourseHighlightSubject>(subjects[0]!.id);

  return (
    <section
      className={cn(
        variant === "landing"
          ? "relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
          : "mt-12",
        className,
      )}
      aria-labelledby="course-highlights-heading"
    >
      <div className={cn(variant === "landing" ? "mx-auto max-w-6xl" : undefined)}>
        <div className={cn(variant === "landing" ? "mx-auto max-w-3xl text-center" : "text-center")}>
          <h2
            id="course-highlights-heading"
            className="font-display text-[1.65rem] font-semibold leading-tight text-foreground sm:text-4xl"
          >
            {track === "wiso" ? "What you get in the WiSo course" : "What you get in the BBE course"}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real bank size, real exam format — try one question below the way it works in the course.
          </p>
        </div>

        <ol className="mx-auto mt-8 max-w-3xl space-y-4 sm:mt-10">
          {points.map((point, index) => (
            <li key={point.title} className="flex items-start gap-3 sm:gap-4">
              <span
                className={cn(
                  "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md text-sm font-bold text-white",
                  accent === "wiso" ? "bg-indigo-700" : "bg-[var(--exam-red)]",
                )}
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {point.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {point.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <TryItQuestionBox
            track={track}
            subject={subject}
            subjects={subjects}
            onSubjectChange={setSubject}
            accent={accent}
          />
        </div>
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
  accent: "bbe" | "wiso";
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
        "overflow-hidden rounded-sm border bg-card shadow-sm",
        accent === "wiso" ? "border-indigo-200/80 dark:border-indigo-900/60" : "border-border",
      )}
    >
      <div
        className={cn(
          "border-b px-4 py-3 sm:px-5",
          accent === "wiso"
            ? "border-indigo-200/80 bg-indigo-50/50 dark:border-indigo-900/60 dark:bg-indigo-950/30"
            : "border-border bg-secondary/40",
        )}
      >
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Try a real question
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Mark True where it holds, submit, then open the explanations — same flow as in the course.
        </p>
        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Subject">
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

      <div className="px-4 py-5 sm:px-5 sm:py-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
              accent === "wiso"
                ? "bg-indigo-700/15 text-indigo-900 dark:text-indigo-200"
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
          <div className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-background px-4 py-3 font-serif text-sm leading-relaxed">
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

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          {!checked ? (
            <button
              type="button"
              className={practiceSubmitButtonClass}
              onClick={() => setChecked(true)}
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

        {checked && showExpl ? (
          <div className="mt-6 rounded-xl border border-border bg-background p-4 sm:p-5">
            <p
              className={cn(
                "mb-4 text-[11px] font-bold uppercase tracking-widest",
                accent === "wiso" ? "text-indigo-700 dark:text-indigo-300" : "text-primary",
              )}
            >
              {chrome.sheetTitle} · Task 1
            </p>
            <section className="mb-4 overflow-x-auto border-b border-border/60 pb-3">
              <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
                {chrome.answerKey}
              </p>
              <table className="w-full min-w-[14rem] border-collapse border border-foreground/20 text-center text-[13px] shadow-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    {task.answerKey.map((_, i) => (
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
                    {task.answerKey.map((isTrue, i) => (
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

            {task.overview ? (
              <div className="mb-4 text-[13px] leading-relaxed text-foreground/90">
                <FlashcardMath text={task.overview} />
              </div>
            ) : null}

            <div className="space-y-3">
              {task.explanations.map((raw, i) => {
                const letter = LETTERS[i] ?? String(i + 1);
                const verdict = task.answerKey[i] ? chrome.trueWord : chrome.falseWord;
                const body = task.math ? raw : cleanExplanation(raw);
                const userMarked = marked[i] === true;
                const isCorrect = userMarked === task.answerKey[i];
                return (
                  <div key={letter} className="rounded-xl border border-border bg-card p-3">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {letter}
                      </span>
                      <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {verdict}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white",
                          isCorrect ? "bg-emerald-500" : "bg-destructive",
                        )}
                      >
                        {isCorrect ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>
                    {task.math ? (
                      <div className="text-[13px] leading-relaxed text-foreground/90">
                        <FlashcardMath text={`**${letter}.** → ${verdict}\n\n${body}`} />
                      </div>
                    ) : (
                      <ExplanationProse
                        text={`**${letter}.** → ${verdict}\n\n${body}`}
                        className="text-[13px]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
