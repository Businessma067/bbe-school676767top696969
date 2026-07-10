import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Check, X, ChevronLeft, ChevronRight, Loader2, RotateCcw, BookOpen, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/demo-practice/economics")({
  head: () => ({
    meta: [
      { title: "Economics Tasks — BBE School" },
      { name: "description", content: "Interactive Economics practice grouped by chapter for the WU BBE entrance exam." },
    ],
  }),
  component: EconomicsTasks,
});

type Case = {
  id: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level: string;
  sort_order: number;
};

const CHAPTERS: { num: number; title: string }[] = [
  { num: 2, title: "Basic Economic Concepts" },
  { num: 3, title: "Focus on different types of businesses" },
  { num: 4, title: "Forms of business ownership and sources of finance" },
  { num: 5, title: "Marketing" },
  { num: 6, title: "Accounting – keeping record of business transactions" },
];

const STORAGE_KEY = "bbe.economics.progress.v1";

type Progress = {
  passed: string[];   // case ids fully correct
  revision: string[]; // case ids with any wrong statement
};

function loadProgress(): Progress {
  if (typeof window === "undefined") return { passed: [], revision: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { passed: [], revision: [] };
    const p = JSON.parse(raw) as Progress;
    return { passed: p.passed ?? [], revision: p.revision ?? [] };
  } catch {
    return { passed: [], revision: [] };
  }
}

function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function chapterOf(c: Case): number {
  // Parse "CASE 2.11" or "2.11" → 2
  const m = c.case_id.match(/(\d+)\s*\.\s*\d+/);
  return m ? parseInt(m[1], 10) : 0;
}

function EconomicsTasks() {
  const [cases, setCases] = useState<Case[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | "revision">(2);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const { data, error } = await supabase
        .from("economics_cases")
        .select("id, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order")
        .order("sort_order", { ascending: true });
      if (cancel) return;
      if (error) setError(error.message);
      else setCases((data as Case[]) ?? []);
    })();
    return () => { cancel = true; };
  }, []);

  useEffect(() => { setActiveIdx(0); }, [activeChapter]);

  const byChapter = useMemo(() => {
    const map = new Map<number, Case[]>();
    CHAPTERS.forEach((c) => map.set(c.num, []));
    (cases ?? []).forEach((c) => {
      const ch = chapterOf(c);
      if (!map.has(ch)) map.set(ch, []);
      map.get(ch)!.push(c);
    });
    return map;
  }, [cases]);

  const revisionCases = useMemo(
    () => (cases ?? []).filter((c) => progress.revision.includes(c.id)),
    [cases, progress.revision],
  );

  const activeList: Case[] =
    activeChapter === "revision"
      ? revisionCases
      : byChapter.get(activeChapter) ?? [];
  const activeCase = activeList[activeIdx];

  const recordResult = (caseId: string, allCorrect: boolean) => {
    setProgress((prev) => {
      const passed = new Set(prev.passed);
      const revision = new Set(prev.revision);
      if (allCorrect) {
        passed.add(caseId);
        revision.delete(caseId);
      } else {
        revision.add(caseId);
        passed.delete(caseId);
      }
      const next = { passed: [...passed], revision: [...revision] };
      saveProgress(next);
      return next;
    });
  };

  const chapterProgress = (ch: number) => {
    const list = byChapter.get(ch) ?? [];
    if (list.length === 0) return { pct: 0, done: 0, total: 0 };
    const done = list.filter((c) => progress.passed.includes(c.id)).length;
    return { pct: Math.round((done / list.length) * 100), done, total: list.length };
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/demo-practice" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">All subjects</span>
          </Link>
          <button
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold lg:hidden"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? "Close chapters" : "Chapters"}
          </button>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">Economics</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU BBE · Cases</span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-10">
        {/* Sidebar */}
        <aside className={cn(
          "lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-72 lg:shrink-0",
          !navOpen && "hidden lg:block",
        )}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-4">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> Chapters
              </h3>
              <ul className="space-y-1.5">
                {CHAPTERS.map((ch) => {
                  const { pct, done, total } = chapterProgress(ch.num);
                  const active = activeChapter === ch.num;
                  return (
                    <li key={ch.num}>
                      <button
                        onClick={() => { setActiveChapter(ch.num); setNavOpen(false); }}
                        className={cn(
                          "w-full rounded-xl border p-3 text-left transition-all",
                          active
                            ? "border-primary bg-primary/10"
                            : "border-transparent bg-background hover:border-border hover:bg-secondary",
                        )}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className={cn("text-sm font-bold", active ? "text-primary" : "text-foreground")}>
                            {ch.num}. {ch.title.split(" ").slice(0, 3).join(" ")}
                            {ch.title.split(" ").length > 3 ? "…" : ""}
                          </span>
                          <span className="text-[10px] font-bold text-muted-foreground">{pct}%</span>
                        </div>
                        <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{ch.title}</p>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <div
                            className={cn("h-full rounded-full transition-all", pct === 100 ? "bg-emerald-500" : "bg-primary")}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="mt-1 text-[10px] text-muted-foreground">{done}/{total} cases</p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Revision folder at bottom */}
            <div className="mt-4 border-t border-border pt-4">
              <button
                onClick={() => { setActiveChapter("revision"); setNavOpen(false); }}
                className={cn(
                  "w-full rounded-xl border p-3 text-left transition-all",
                  activeChapter === "revision"
                    ? "border-destructive bg-destructive/10"
                    : "border-transparent bg-background hover:border-border hover:bg-secondary",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <AlertTriangle className="h-4 w-4 text-destructive" /> Revision
                  </span>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    revisionCases.length > 0 ? "bg-destructive text-destructive-foreground" : "bg-secondary text-muted-foreground",
                  )}>
                    {revisionCases.length}
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  Cases with any wrong statement land here until you nail them.
                </p>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {error && (
            <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {cases === null && !error && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading cases…
            </div>
          )}

          {cases !== null && (
            <div className="mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                {activeChapter === "revision" ? "Revision folder" : `Chapter ${activeChapter}`}
              </span>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {activeChapter === "revision"
                  ? "Fix what tripped you up"
                  : CHAPTERS.find((c) => c.num === activeChapter)?.title}
              </h1>
            </div>
          )}

          {cases !== null && activeList.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              {activeChapter === "revision"
                ? "Nothing to revise — all attempted cases are clean. Keep going."
                : "No cases here yet. Add some in the admin panel."}
            </div>
          )}

          {activeCase && (
            <CaseCard
              key={activeCase.id}
              data={activeCase}
              index={activeIdx}
              inRevision={progress.revision.includes(activeCase.id)}
              alreadyPassed={progress.passed.includes(activeCase.id)}
              onGraded={(allCorrect) => recordResult(activeCase.id, allCorrect)}
            />
          )}

          {activeList.length > 0 && (
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                disabled={activeIdx === 0}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <span className="text-xs text-muted-foreground">
                {activeIdx + 1} / {activeList.length}
              </span>
              <button
                onClick={() => setActiveIdx((i) => Math.min(activeList.length - 1, i + 1))}
                disabled={activeIdx >= activeList.length - 1}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function CaseCard({
  data, index, onGraded, inRevision, alreadyPassed,
}: {
  data: Case; index: number;
  onGraded: (allCorrect: boolean) => void;
  inRevision: boolean; alreadyPassed: boolean;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAnswers([null, null, null, null, null]);
    setChecked(false);
  }, [data.id]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  // Effective answer: checked = true, otherwise (null or false) = false
  const correctCount = data.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    onGraded(correctCount === 5);
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers([null, null, null, null, null]);
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Case #{index + 1}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          Difficulty {data.difficulty_level}
        </span>
        <span className="text-xs font-semibold text-muted-foreground">{data.case_id}</span>
        {alreadyPassed && (
          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
            Passed
          </span>
        )}
        {inRevision && (
          <span className="rounded-md bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive">
            In revision
          </span>
        )}
      </div>

      <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{data.title}</h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {data.context}
      </p>

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">Correct</span>
          {checked && <span className="w-6" aria-hidden />}
        </li>
        {data.statements.map((stmt, i) => {
          const userAns = answers[i];
          const isChecked = userAns === true;
          const correctAns = data.answer_key[i];
          const effective = isChecked;
          const isCorrect = checked && effective === correctAns;
          const isWrong = checked && effective !== correctAns;
          return (
            <li
              key={i}
              className={cn(
                "px-4 py-3 transition-colors",
                isCorrect && "bg-emerald-500/5",
                isWrong && "bg-destructive/5",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center text-xs font-bold text-muted-foreground">{i + 1}.</span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
                <div className="flex w-14 justify-center">
                  <button
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={`Mark statement ${i + 1} as correct`}
                    disabled={checked}
                    onClick={() => setAt(i, !isChecked)}
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                      isChecked
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/60",
                      checked && "cursor-default",
                    )}
                  >
                    {isChecked && <Check className="h-4 w-4" strokeWidth={3} />}
                  </button>
                </div>
                {checked && (
                  <span
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded-full",
                      isCorrect ? "bg-emerald-500 text-white" : "bg-destructive text-destructive-foreground",
                    )}
                    aria-label={isCorrect ? "Correct" : "Incorrect"}
                  >
                    {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                )}
              </div>

              {checked && (
                <p className={cn(
                  "mt-3 rounded-md p-3 text-xs leading-relaxed",
                  isCorrect ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200" : "bg-destructive/10 text-destructive",
                )}>
                  <span className="font-bold">
                    {correctAns ? "Correct answer: ✓ checked. " : "Correct answer: ☐ unchecked. "}
                  </span>
                  {data.tactical_explanations[i]}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {!checked ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            Check Answers / Submit
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
        )}

        {checked && (
          <div className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold",
            correctCount === 5 ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              : "bg-destructive/15 text-destructive",
          )}>
            {correctCount === 5
              ? "5/5 — case counted ✓"
              : `${correctCount}/5 — sent to Revision`}
          </div>
        )}
      </div>
    </article>
  );
}

function TFButton({
  label, selected, disabled, correct, wrongPick, onClick,
}: {
  label: string; selected: boolean; disabled: boolean;
  correct?: boolean; wrongPick?: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex-1 rounded-md border px-3 py-2 text-xs font-semibold transition-all",
        !disabled && "hover:bg-secondary",
        selected && !disabled && "border-primary bg-primary/10 text-primary",
        !selected && !disabled && "border-border bg-background text-foreground",
        disabled && correct && "border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200",
        disabled && wrongPick && "border-destructive bg-destructive/15 text-destructive",
        disabled && !correct && !wrongPick && "border-border bg-background text-muted-foreground opacity-70",
      )}
    >
      {label}
    </button>
  );
}
