import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { StatementMarkTable } from "@/components/StatementMarkTable";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
  practiceTryAgainButtonClass,
} from "@/lib/practice-button-styles";
import {
  chapterTermPairs,
  chapterTitlePair,
  loadPairedChapter,
  type PairedMathTask,
} from "@/lib/hybrid-math-pair";
import {
  HYBRID_MATH_STORAGE_KEY,
  countSharedMathPassedIn,
  syncSharedMathIntoHybrid,
} from "@/lib/hybrid-math";
import { cn } from "@/lib/utils";
import type { HybridLeanId } from "@/config/hybrid-mock-builder";

const BBE = "#C2643A";
const WISO = "#3730A3";

type Side = "bbe" | "wiso";

const FOCI: { id: HybridLeanId; title: string; accent: string }[] = [
  { id: "bbe", title: "BBE", accent: BBE },
  { id: "half", title: "Half", accent: HYBRID_ACCENT },
  { id: "wiso", title: "WiSo", accent: WISO },
];

function readPassed(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HYBRID_MATH_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { passed?: string[] };
    return Array.isArray(parsed.passed) ? parsed.passed : [];
  } catch {
    return [];
  }
}

function writePassed(id: string): void {
  try {
    const raw = localStorage.getItem(HYBRID_MATH_STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as { passed?: string[]; revision?: string[] }) : {};
    const passed = Array.isArray(parsed.passed) ? parsed.passed : [];
    const revision = Array.isArray(parsed.revision) ? parsed.revision : [];
    localStorage.setItem(
      HYBRID_MATH_STORAGE_KEY,
      JSON.stringify({
        passed: passed.includes(id) ? passed : [...passed, id],
        revision: revision.filter((item) => item !== id),
      }),
    );
  } catch {
    localStorage.setItem(HYBRID_MATH_STORAGE_KEY, JSON.stringify({ passed: [id], revision: [] }));
  }
  syncSharedMathIntoHybrid();
}

function leadFor(focus: HybridLeanId, taskIndex: number): Side {
  if (focus === "wiso") return "wiso";
  if (focus === "half" && taskIndex % 2 === 1) return "wiso";
  return "bbe";
}

/** Book order. One stem on screen, then the other stem of that task. */
function stepsFor(tasks: PairedMathTask[], focus: HybridLeanId) {
  const ordered = [...tasks].sort(
    (a, b) => a.en.sort_order - b.en.sort_order || a.id.localeCompare(b.id),
  );
  return ordered.flatMap((task, taskIndex) => {
    const lead = leadFor(focus, taskIndex);
    const follow: Side = lead === "bbe" ? "wiso" : "bbe";
    return [
      { task, side: lead, part: 1 as const },
      { task, side: follow, part: 2 as const },
    ];
  });
}

export function BilingualMathDesk({ chapter }: { chapter: number }) {
  const [tasks, setTasks] = useState<PairedMathTask[] | null>(null);
  const [focus, setFocus] = useState<HybridLeanId>("bbe");
  const [subsection, setSubsection] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [marked, setMarked] = useState<boolean[]>([]);
  const [checked, setChecked] = useState(false);
  const [explanationsOpen, setExplanationsOpen] = useState(false);
  const [passed, setPassed] = useState<string[]>([]);
  const titles = chapterTitlePair(chapter);
  const terms = chapterTermPairs(chapter);

  useEffect(() => {
    let cancelled = false;
    setTasks(null);
    setStepIndex(0);
    setSubsection(null);
    void loadPairedChapter(chapter).then((rows) => {
      if (!cancelled) setTasks(rows);
    });
    setPassed(readPassed());
    return () => {
      cancelled = true;
    };
  }, [chapter]);

  const visible = useMemo(() => {
    if (!tasks) return [];
    return tasks.filter((item) => !subsection || item.subsection === subsection);
  }, [tasks, subsection]);

  const steps = useMemo(() => stepsFor(visible, focus), [visible, focus]);
  const step = steps[stepIndex];
  const taskId = step?.task.id;
  const side = step?.side;
  const statementCount = step
    ? (step.side === "wiso" ? step.task.de.statements : step.task.en.statements).length
    : 0;

  useEffect(() => {
    setMarked(Array.from({ length: statementCount }, () => false));
    setChecked(false);
    setExplanationsOpen(false);
  }, [taskId, side, statementCount]);

  if (!tasks) {
    return <div className="h-40 animate-pulse rounded-2xl bg-secondary" />;
  }

  const translated = tasks.filter((item) => item.translated).length;
  const chapterPassed = countSharedMathPassedIn(
    passed,
    tasks.map((item) => item.en),
  );
  const source = step ? (step.side === "wiso" ? step.task.de : step.task.en) : null;
  const answerKey = step?.task.en.answer_key ?? [];
  const correctCount = source
    ? source.statements.reduce(
        (sum, _statement, i) => sum + ((marked[i] === true) === Boolean(answerKey[i]) ? 1 : 0),
        0,
      )
    : 0;
  const explanations = source
    ? ((step?.side === "wiso"
        ? step.task.de.tactical_explanations
        : step?.task.en.tactical_explanations) ?? [])
    : [];

  const check = () => {
    if (!step || !source) return;
    setChecked(true);
    setExplanationsOpen(true);
    if (correctCount === source.statements.length) {
      writePassed(step.task.id);
      setPassed(readPassed());
    }
  };

  const germanSide = step?.side === "wiso";

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
            Chapter {chapter}
          </span>
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {titles.en}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {titles.de}
            {" · "}
            {translated}/{tasks.length} with a German stem · {chapterPassed} counted in this chapter
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {FOCI.map((item) => {
            const active = focus === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setFocus(item.id);
                  setStepIndex(0);
                }}
                className={cn(
                  "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all",
                  active
                    ? "text-white shadow-md"
                    : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
                style={
                  active ? { backgroundColor: item.accent, borderColor: item.accent } : undefined
                }
              >
                {item.title}
              </button>
            );
          })}
          <label className="text-xs font-semibold text-muted-foreground">
            Subsection
            <select
              value={subsection ?? ""}
              onChange={(event) => {
                setSubsection(event.target.value || null);
                setStepIndex(0);
              }}
              className="ml-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground"
            >
              <option value="">All</option>
              {terms.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.id} · {term.en}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {!step || !source ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">No tasks match this filter.</p>
        </div>
      ) : (
        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              Task {stepIndex + 1}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
              {step.task.caseId}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
              {germanSide ? "WiSo · Deutsch" : "BBE · English"}
              {!step.task.translated && germanSide ? " · English stem" : ""}
            </span>
            {passed.includes(step.task.id) ? (
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
                Passed
              </span>
            ) : null}
            <span className="ml-auto text-xs text-muted-foreground">
              {stepIndex + 1} / {steps.length}
            </span>
          </div>

          <h2 className="font-display text-lg font-bold tracking-tight">
            <FlashcardMath text={source.title} />
          </h2>
          {source.context ? (
            <div className="mt-3 text-sm leading-relaxed text-foreground/90">
              <FlashcardMath text={source.context} />
            </div>
          ) : null}

          <StatementMarkTable
            statements={source.statements}
            marked={marked}
            answerKey={answerKey.map(Boolean)}
            checked={checked}
            math
            statementHeading={germanSide ? "Aussage" : "Statement"}
            trueHeading={germanSide ? "Richtig" : "True"}
            onToggle={(index) =>
              setMarked((prev) => prev.map((item, j) => (j === index ? !item : item)))
            }
          />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {!checked ? (
                <button type="button" onClick={check} className={practiceSubmitButtonClass}>
                  Check Answers / Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setChecked(false);
                    setExplanationsOpen(false);
                    setMarked(source.statements.map(() => false));
                  }}
                  className={practiceTryAgainButtonClass}
                >
                  Try again
                </button>
              )}
              {checked ? (
                <button
                  type="button"
                  onClick={() => setExplanationsOpen((open) => !open)}
                  className={practiceExplanationToggleClass(explanationsOpen)}
                >
                  {explanationsOpen ? "Hide Explanation" : "Explanation"}
                </button>
              ) : null}
              <button
                type="button"
                disabled={stepIndex === 0}
                onClick={() => setStepIndex((n) => n - 1)}
                className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={!checked || stepIndex >= steps.length - 1}
                onClick={() => setStepIndex((n) => n + 1)}
                className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step.part === 1 ? (step.side === "bbe" ? "Next · WiSo" : "Next · BBE") : "Next"}
              </button>
              <Link
                to="/hybrid/math"
                search={{ chapter }}
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Chapter list
              </Link>
            </div>
            {checked ? (
              <span className="text-sm font-semibold text-muted-foreground">
                {correctCount}/{source.statements.length} correct
              </span>
            ) : null}
          </div>

          {checked && explanationsOpen ? (
            <div className="mt-4 space-y-3 rounded-xl border border-border bg-secondary/30 p-4 text-sm sm:p-5">
              {source.statements.map((_, i) => (
                <p key={i} className="leading-relaxed text-foreground">
                  <span className="font-semibold">{String.fromCharCode(65 + i)}.</span>{" "}
                  {explanations[i] ||
                    (answerKey[i]
                      ? germanSide
                        ? "Richtig."
                        : "True."
                      : germanSide
                        ? "Falsch."
                        : "False.")}
                </p>
              ))}
            </div>
          ) : null}
        </article>
      )}
    </div>
  );
}
