import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import {
  chapterTermPairs,
  chapterTitlePair,
  loadPairedChapter,
  type PairedMathTask,
} from "@/lib/hybrid-math-pair";
import {
  HYBRID_MATH_STORAGE_KEY,
  isSharedMathTaskId,
  syncSharedMathIntoHybrid,
} from "@/lib/hybrid-math";
import { cn } from "@/lib/utils";

type View = "en" | "both" | "de";

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

function Stem({
  label,
  title,
  context,
  statements,
  accent,
}: {
  label: string;
  title: string;
  context: string;
  statements: string[];
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: accent }}
      >
        {label}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
      {context ? (
        <div className="mt-2 text-sm leading-relaxed text-foreground">
          <FlashcardMath text={context} />
        </div>
      ) : null}
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
        {statements.map((statement, index) => (
          <li key={index}>
            <FlashcardMath text={statement} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BilingualMathDesk({ chapter }: { chapter: number }) {
  const [tasks, setTasks] = useState<PairedMathTask[] | null>(null);
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<View>("both");
  const [subsection, setSubsection] = useState<string | null>(null);
  const [onlyTranslated, setOnlyTranslated] = useState(false);
  const [answers, setAnswers] = useState<Array<boolean | null>>([]);
  const [checked, setChecked] = useState(false);
  const [passed, setPassed] = useState<string[]>([]);
  const titles = chapterTitlePair(chapter);
  const terms = chapterTermPairs(chapter);

  useEffect(() => {
    let cancelled = false;
    setTasks(null);
    setIndex(0);
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
    return tasks.filter((item) => {
      if (onlyTranslated && !item.translated) return false;
      if (subsection && item.subsection !== subsection) return false;
      return true;
    });
  }, [tasks, onlyTranslated, subsection]);

  const task = visible[index];

  const taskId = task?.id;
  const statementCount = task?.en.statements.length ?? 0;

  useEffect(() => {
    setAnswers(Array.from({ length: statementCount }, () => null));
    setChecked(false);
  }, [taskId, statementCount]);

  if (!tasks) {
    return <div className="h-40 animate-pulse rounded-2xl bg-secondary" />;
  }

  const translated = tasks.filter((item) => item.translated).length;
  const chapterPassed = passed.filter((id) => isSharedMathTaskId(id, chapter)).length;

  const complete =
    !!task &&
    answers.length === task.en.statements.length &&
    answers.every((value) => value != null);
  const correctCount = task
    ? task.en.statements.reduce(
        (sum, _statement, i) => sum + (answers[i] === task.en.answer_key[i] ? 1 : 0),
        0,
      )
    : 0;

  const check = () => {
    if (!task || !complete) return;
    setChecked(true);
    if (correctCount === task.en.statements.length) {
      writePassed(task.id);
      setPassed(readPassed());
    }
  };

  const trueLabel = view === "de" ? "Richtig" : view === "both" ? "True · Richtig" : "True";
  const falseLabel = view === "de" ? "Falsch" : view === "both" ? "False · Falsch" : "False";

  return (
    <div>
      <div className="mb-4 rounded-2xl border border-border bg-card p-4">
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em]"
          style={{ color: HYBRID_ACCENT }}
        >
          Chapter {chapter}
        </p>
        <h2 className="mt-1 font-display text-xl font-semibold">{titles.en}</h2>
        <p className="text-sm text-muted-foreground">{titles.de}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {translated}/{tasks.length} tasks have a German stem. {chapterPassed} in this chapter are
          already counted. The answer key is shared, so a correct result is stored once.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs font-semibold text-muted-foreground">
            Subsection
            <select
              value={subsection ?? ""}
              onChange={(event) => {
                setSubsection(event.target.value || null);
                setIndex(0);
              }}
              className="ml-2 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground"
            >
              <option value="">All</option>
              {terms.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.id} · {term.en}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <input
              type="checkbox"
              checked={onlyTranslated}
              onChange={(event) => {
                setOnlyTranslated(event.target.checked);
                setIndex(0);
              }}
            />
            German stem only
          </label>
        </div>
        <div className="inline-flex rounded-lg border border-border p-0.5">
          {(
            [
              ["en", "English"],
              ["both", "Both"],
              ["de", "Deutsch"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-semibold",
                view === id ? "text-white" : "text-foreground",
              )}
              style={view === id ? { backgroundColor: HYBRID_ACCENT } : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {terms.length > 0 ? (
        <ul className="mb-4 flex flex-wrap gap-2">
          {terms.map((term) => {
            const active = subsection === term.id;
            return (
              <li key={term.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSubsection(active ? null : term.id);
                    setIndex(0);
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-left text-[11px]",
                    active ? "text-white" : "border-border bg-card",
                  )}
                  style={
                    active
                      ? { backgroundColor: HYBRID_ACCENT, borderColor: HYBRID_ACCENT }
                      : undefined
                  }
                >
                  <span className="font-semibold">{term.en}</span>
                  <span className={active ? "text-white/80" : "text-muted-foreground"}>
                    {" "}
                    · {term.de}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {!task ? (
        <p className="text-sm text-muted-foreground">No tasks match this filter.</p>
      ) : (
        <>
          <div className={cn("grid gap-4", view === "both" && "lg:grid-cols-2")}>
            {view !== "de" ? (
              <Stem
                label="BBE · English"
                title={task.en.title}
                context={task.en.context}
                statements={task.en.statements}
                accent="#C2643A"
              />
            ) : null}
            {view !== "en" ? (
              <Stem
                label={
                  task.translated
                    ? "WiSo · Deutsch"
                    : "WiSo · Deutsch (English stem, no overlay yet)"
                }
                title={task.de.title}
                context={task.de.context}
                statements={task.de.statements}
                accent="#115E59"
              />
            ) : null}
          </div>

          <ul className="mt-4 space-y-3">
            {task.en.statements.map((_statement, i) => {
              const chosen = answers[i];
              const right = task.en.answer_key[i];
              const stem =
                view === "de"
                  ? (task.de.statements[i] ?? task.en.statements[i])
                  : task.en.statements[i];
              return (
                <li key={i} className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs font-semibold text-muted-foreground">Statement {i + 1}</p>
                  <div className="mt-1 text-sm leading-relaxed">
                    <FlashcardMath text={stem} />
                  </div>
                  {view === "both" && task.translated ? (
                    <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      <FlashcardMath text={task.de.statements[i] ?? ""} />
                    </div>
                  ) : null}
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
                      const reveal = checked && value === right && !selected;
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
                            !selected && !reveal && "border border-border bg-background",
                            selected && !checked && "text-white",
                            good && "bg-emerald-600 text-white",
                            bad && "bg-destructive text-white",
                            reveal && "border border-emerald-600 text-emerald-700",
                          )}
                          style={
                            selected && !checked ? { backgroundColor: HYBRID_ACCENT } : undefined
                          }
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                  {checked ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {view === "de"
                        ? task.de.tactical_explanations?.[i]
                        : task.en.tactical_explanations?.[i]}
                    </p>
                  ) : null}
                  {checked && view === "both" && task.translated ? (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {task.de.tactical_explanations?.[i]}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!complete || checked}
              onClick={check}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
              style={{ backgroundColor: HYBRID_ACCENT }}
            >
              Check
            </button>
            {checked ? (
              <span className="text-sm font-semibold">
                {correctCount}/{task.en.statements.length}
                {passed.includes(task.id) ? " · counted once" : ""}
              </span>
            ) : null}
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((n) => n - 1)}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={index >= visible.length - 1}
              onClick={() => setIndex((n) => n + 1)}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
            <label className="text-xs text-muted-foreground">
              Task
              <select
                value={index}
                onChange={(event) => setIndex(Number(event.target.value))}
                className="ml-2 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground"
              >
                {visible.map((item, i) => (
                  <option key={item.id} value={i}>
                    {i + 1}. {item.caseId}
                    {item.translated ? " · DE" : ""}
                    {passed.includes(item.id) ? " · counted" : ""}
                  </option>
                ))}
              </select>
            </label>
            <span className="text-xs text-muted-foreground">
              {index + 1} / {visible.length}
            </span>
            <Link
              to="/hybrid/math"
              search={{ chapter }}
              className="text-xs font-semibold"
              style={{ color: HYBRID_ACCENT }}
            >
              Open the full paper player
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
