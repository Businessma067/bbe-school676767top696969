import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Check, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export const Route = createFileRoute("/demo-practice/economics")({
  head: () => ({
    meta: [
      { title: "Economics Tasks — BBE School" },
      { name: "description", content: "Interactive Economics practice and exam-tier cases for the WU BBE entrance exam." },
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

const PRACTICE_LIMIT = 7;

function EconomicsTasks() {
  const [cases, setCases] = useState<Case[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [tier, setTier] = useState<"practice" | "exam">("practice");

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

  const practiceCases = useMemo(() => (cases ?? []).slice(0, PRACTICE_LIMIT), [cases]);
  const examCases = useMemo(() => (cases ?? []).slice(PRACTICE_LIMIT), [cases]);
  const activeList = tier === "practice" ? practiceCases : examCases;
  const activeCase = activeList[activeIdx];

  useEffect(() => { setActiveIdx(0); }, [tier]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/demo-practice" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> All subjects
          </Link>
          <div className="flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">Economics</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU BBE · Cases</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
        {/* Tier switcher */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <TierPill
            active={tier === "practice"}
            label={`Practice / Warm-up (${practiceCases.length})`}
            sub="Baseline 3/5"
            onClick={() => setTier("practice")}
          />
          <TierPill
            active={tier === "exam"}
            label={`EXAM TASKS (${examCases.length})`}
            sub="Maximum 5/5"
            onClick={() => setTier("exam")}
            danger
          />
        </div>

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

        {cases !== null && activeList.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            {tier === "exam"
              ? "No exam tasks yet. Add cases past #7 in the admin panel to unlock this tier."
              : "No practice cases yet. Add some in the admin panel."}
          </div>
        )}

        {activeCase && (
          <CaseCard
            key={activeCase.id}
            data={activeCase}
            index={activeIdx}
            tier={tier}
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
  );
}

function TierPill({
  active, label, sub, onClick, danger,
}: { active: boolean; label: string; sub: string; onClick: () => void; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-start rounded-xl border px-4 py-2 text-left transition-all",
        active
          ? danger
            ? "border-destructive bg-destructive/10 text-destructive"
            : "border-primary bg-primary/10 text-primary"
          : "border-border bg-card text-foreground hover:bg-secondary",
      )}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-[10px] uppercase tracking-widest opacity-70">{sub}</span>
    </button>
  );
}

function CaseCard({ data, index, tier }: { data: Case; index: number; tier: "practice" | "exam" }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAnswers([null, null, null, null, null]);
    setChecked(false);
  }, [data.id]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = answers.reduce<number>(
    (acc, a, i) => acc + (a !== null && a === data.answer_key[i] ? 1 : 0),
    0,
  );
  const allAnswered = answers.every((a) => a !== null);

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className={cn(
          "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
          tier === "exam" ? "bg-destructive/15 text-destructive" : "bg-primary/15 text-primary",
        )}>
          {tier === "exam" ? "Exam" : `Practice #${index + 1}`}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          Difficulty {data.difficulty_level}
        </span>
        <span className="text-xs font-semibold text-muted-foreground">{data.case_id}</span>
      </div>

      <h2 className="font-display text-2xl font-bold tracking-tight">{data.title}</h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {data.context}
      </p>

      <ol className="mt-6 space-y-4">
        {data.statements.map((stmt, i) => {
          const userAns = answers[i];
          const correctAns = data.answer_key[i];
          const isCorrect = checked && userAns === correctAns;
          const isWrong = checked && userAns !== null && userAns !== correctAns;
          return (
            <li
              key={i}
              className={cn(
                "rounded-xl border p-4 transition-all",
                isCorrect && "border-emerald-500/60 bg-emerald-500/5",
                isWrong && "border-destructive/60 bg-destructive/5",
                !checked && "border-border bg-background",
              )}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xs font-bold text-muted-foreground">{i + 1}.</span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
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

              <div className="mt-3 flex gap-2">
                <TFButton
                  label="True"
                  selected={userAns === true}
                  disabled={checked}
                  correct={checked && correctAns === true}
                  wrongPick={checked && userAns === true && correctAns !== true}
                  onClick={() => setAt(i, true)}
                />
                <TFButton
                  label="False"
                  selected={userAns === false}
                  disabled={checked}
                  correct={checked && correctAns === false}
                  wrongPick={checked && userAns === false && correctAns !== false}
                  onClick={() => setAt(i, false)}
                />
              </div>

              {checked && (
                <p className={cn(
                  "mt-3 rounded-md p-3 text-xs leading-relaxed",
                  isCorrect ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200" : "bg-destructive/10 text-destructive",
                )}>
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
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            Check Answers / Submit
          </button>
        ) : (
          <button
            onClick={() => { setChecked(false); setAnswers([null, null, null, null, null]); }}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Try again
          </button>
        )}

        {checked && (
          <div className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold",
            correctCount === 5 ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              : correctCount >= 3 ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
              : "bg-destructive/15 text-destructive",
          )}>
            Score: {correctCount}/5 statements correct
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
