import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import {
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
  const [answers, setAnswers] = useState<Array<boolean | null>>([]);
  const [checked, setChecked] = useState(false);
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
    setAnswers(Array.from({ length: statementCount }, () => null));
    setChecked(false);
  }, [taskId, side, statementCount]);

  if (!tasks) {
    return <div className="h-40 animate-pulse rounded-2xl bg-secondary" />;
  }

  const translated = tasks.filter((item) => item.translated).length;
  const chapterPassed = countSharedMathPassedIn(
    passed,
    tasks.map((item) => item.task),
  );
  const source = step ? (step.side === "wiso" ? step.task.de : step.task.en) : null;
  const answerKey = step?.task.en.answer_key ?? [];
  const complete =
    !!source &&
    answers.length === source.statements.length &&
    answers.every((value) => value != null);
  const correctCount = source
    ? source.statements.reduce(
        (sum, _statement, i) => sum + (answers[i] === answerKey[i] ? 1 : 0),
        0,
      )
    : 0;
  const accent = step?.side === "wiso" ? WISO : BBE;
  const trueLabel = step?.side === "wiso" ? "Richtig" : "True";
  const falseLabel = step?.side === "wiso" ? "Falsch" : "False";

  const check = () => {
    if (!step || !source || !complete) return;
    setChecked(true);
    if (correctCount === source.statements.length) {
      writePassed(step.task.id);
      setPassed(readPassed());
    }
  };

  return (
    <div>
      <div
        className="mb-6 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
        style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Chapter {chapter}
        </p>
        <h2 className="mt-1 font-display text-2xl font-semibold">{titles.en}</h2>
        <p className="text-sm text-muted-foreground">{titles.de}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {translated}/{tasks.length} tasks have a German stem. {chapterPassed} in this chapter are
          already counted. One task is on screen. The other language of that task comes next.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
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
          <label className="ml-auto text-xs font-semibold text-muted-foreground">
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
        <p className="text-sm text-muted-foreground">No tasks match this filter.</p>
      ) : (
        <div
          className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
          style={{ borderTop: `4px solid ${accent}` }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: accent }}
            >
              {step.part} · {step.side === "bbe" ? "BBE · English" : "WiSo · Deutsch"}
              {!step.task.translated && step.side === "wiso"
                ? " · English stem, no overlay yet"
                : ""}
            </p>
            <p className="text-xs text-muted-foreground">
              {stepIndex + 1} / {steps.length} · {step.task.caseId}
            </p>
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold">{source.title}</h3>
          {source.context ? (
            <div className="mt-2 text-sm leading-relaxed">
              <FlashcardMath text={source.context} />
            </div>
          ) : null}

          <ul className="mt-4 space-y-3">
            {source.statements.map((statement, i) => {
              const chosen = answers[i];
              const right = answerKey[i];
              return (
                <li key={i} className="rounded-xl border border-border/80 p-3">
                  <div className="text-sm leading-relaxed">
                    <FlashcardMath text={statement} />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      [
                        [true, trueLabel],
                        [false, falseLabel],
                      ] as const
                    ).map(([value, label]) => {
                      const selected = chosen === value;
                      const good = checked && value === right && selected;
                      const bad = checked && selected && value !== right;
                      return (
                        <button
                          key={label}
                          type="button"
                          disabled={checked}
                          onClick={() =>
                            setAnswers((prev) => prev.map((item, j) => (j === i ? value : item)))
                          }
                          className={cn(
                            "rounded-md px-3 py-1.5 text-xs font-semibold",
                            !selected && "border border-border bg-background",
                            selected && !checked && "text-white",
                            good && "bg-emerald-600 text-white",
                            bad && "bg-destructive text-white",
                          )}
                          style={selected && !checked ? { backgroundColor: accent } : undefined}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                  {checked ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {
                        (step.side === "wiso"
                          ? step.task.de.tactical_explanations
                          : step.task.en.tactical_explanations)?.[i]
                      }
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!complete || checked}
              onClick={check}
              className={practiceSubmitButtonClass}
            >
              Check
            </button>
            {checked ? (
              <span className="text-sm font-semibold">
                {correctCount}/{source.statements.length}
                {passed.includes(step.task.id) ? " · counted once" : ""}
              </span>
            ) : null}
            <button
              type="button"
              disabled={stepIndex === 0}
              onClick={() => setStepIndex((n) => n - 1)}
              className={cn(practiceTryAgainButtonClass, "disabled:opacity-40")}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={!checked || stepIndex >= steps.length - 1}
              onClick={() => setStepIndex((n) => n + 1)}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:opacity-40"
              style={{ backgroundColor: HYBRID_ACCENT }}
            >
              {step.part === 1 ? (step.side === "bbe" ? "Next · WiSo" : "Next · BBE") : "Next task"}
            </button>
            <Link
              to="/hybrid/math"
              search={{ chapter }}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              Paper player
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
