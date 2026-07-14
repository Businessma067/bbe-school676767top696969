import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Loader2,
  RotateCcw,
  BookOpen,
  AlertTriangle,
  NotebookPen,
} from "lucide-react";

export const Route = createFileRoute("/demo-practice/economics")({
  head: () => ({
    meta: [
      { title: "Economics Tasks — BBE School" },
      {
        name: "description",
        content:
          "Interactive Economics practice grouped by topic for the WU BBE entrance exam.",
      },
    ],
  }),
  component: EconomicsTasks,
});

type Statement = {
  id: string;
  statement_order: number;
  statement_text: string;
  correct_answer: boolean;
  explanation: string | null;
};

type Question = {
  id: string;
  stem_text: string;
  difficulty: string | null;
  image_url: string | null;
  topic_id: string | null;
  statements: Statement[];
};

type Topic = {
  id: string;
  name: string;
  slug: string;
};

const STORAGE_KEY = "bbe.economics.progress.v2";

type Progress = {
  passed: string[]; // question ids fully correct
  revision: string[]; // question ids with any wrong statement
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

function EconomicsTasks() {
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<string | "revision" | null>(
    null,
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        // 1. Find the economics subject
        const { data: subject, error: sErr } = await supabase
          .from("subjects")
          .select("id")
          .eq("slug", "economics")
          .maybeSingle();
        if (sErr) throw sErr;
        if (!subject) throw new Error("Economics subject not found");

        // 2. Fetch topics under economics
        const { data: topicsData, error: tErr } = await supabase
          .from("topics")
          .select("id, name, slug")
          .eq("subject_id", subject.id)
          .order("name", { ascending: true });
        if (tErr) throw tErr;

        // 3. Fetch questions + statements for this subject
        const { data: qData, error: qErr } = await supabase
          .from("questions")
          .select(
            "id, stem_text, difficulty, image_url, topic_id, statements(id, statement_order, statement_text, correct_answer, explanation)",
          )
          .eq("subject_id", subject.id)
          .eq("is_active", true)
          .order("created_at", { ascending: true });
        if (qErr) throw qErr;

        if (cancel) return;
        const topicsList = (topicsData ?? []) as Topic[];
        const questionsList = ((qData ?? []) as Question[]).map((q) => ({
          ...q,
          statements: [...(q.statements ?? [])].sort(
            (a, b) => a.statement_order - b.statement_order,
          ),
        }));
        setTopics(topicsList);
        setQuestions(questionsList);
        setExpanded(Object.fromEntries(topicsList.map((t) => [t.id, true])));
      } catch (e) {
        if (!cancel) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancel = true;
    };
  }, []);

  useEffect(() => {
    setActiveIdx(0);
  }, [activeTopicId]);

  const byTopic = useMemo(() => {
    const map = new Map<string, Question[]>();
    (topics ?? []).forEach((t) => map.set(t.id, []));
    (questions ?? []).forEach((q) => {
      if (!q.topic_id) return;
      if (!map.has(q.topic_id)) map.set(q.topic_id, []);
      map.get(q.topic_id)!.push(q);
    });
    return map;
  }, [topics, questions]);

  const revisionQuestions = useMemo(
    () => (questions ?? []).filter((q) => progress.revision.includes(q.id)),
    [questions, progress.revision],
  );

  const activeList: Question[] =
    activeTopicId === "revision"
      ? revisionQuestions
      : activeTopicId === null
        ? []
        : byTopic.get(activeTopicId) ?? [];
  const activeQuestion = activeList[activeIdx];

  const recordResult = (qId: string, allCorrect: boolean) => {
    setProgress((prev) => {
      const passed = new Set(prev.passed);
      const revision = new Set(prev.revision);
      if (allCorrect) {
        passed.add(qId);
        revision.delete(qId);
      } else {
        revision.add(qId);
        passed.delete(qId);
      }
      const next = { passed: [...passed], revision: [...revision] };
      saveProgress(next);
      return next;
    });
  };

  const resetIds = (ids: string[]) => {
    if (ids.length === 0) return;
    const idSet = new Set(ids);
    setProgress((prev) => {
      const next = {
        passed: prev.passed.filter((x) => !idSet.has(x)),
        revision: prev.revision.filter((x) => !idSet.has(x)),
      };
      saveProgress(next);
      return next;
    });
  };

  const resetTopic = (tId: string) => {
    const list = byTopic.get(tId) ?? [];
    resetIds(list.map((q) => q.id));
  };

  const activeTopicName =
    activeTopicId && activeTopicId !== "revision"
      ? topics?.find((t) => t.id === activeTopicId)?.name
      : null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link
            to="/demo-practice"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />{" "}
            <span className="hidden sm:inline">All subjects</span>
          </Link>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">
              Economics
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
              WU BBE · Live
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-10">
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-80 lg:shrink-0">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Topics
            </h3>

            {topics === null && !error && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Loading…
              </div>
            )}

            <ul className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {(topics ?? []).map((t) => {
                const list = byTopic.get(t.id) ?? [];
                const done = list.filter((q) =>
                  progress.passed.includes(q.id),
                ).length;
                const total = list.length;
                const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                const isOpen = !!expanded[t.id];
                const isActive = activeTopicId === t.id;
                return (
                  <li
                    key={t.id}
                    className={cn(
                      "rounded-xl border transition-colors",
                      isActive
                        ? "border-primary/40 bg-primary/5"
                        : "border-transparent",
                    )}
                  >
                    <div className="flex items-stretch">
                      <button
                        onClick={() =>
                          setExpanded((e) => ({ ...e, [t.id]: !e[t.id] }))
                        }
                        className="flex flex-1 items-center gap-2 rounded-l-xl px-3 py-2.5 text-left hover:bg-secondary/60"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                            !isOpen && "-rotate-90",
                          )}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="truncate text-sm font-bold text-foreground">
                              {t.name}
                            </span>
                            <span className="shrink-0 text-[10px] font-bold text-muted-foreground">
                              {done}/{total}
                            </span>
                          </div>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all",
                                pct === 100 ? "bg-emerald-500" : "bg-primary",
                              )}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (
                            done +
                              list.filter((q) =>
                                progress.revision.includes(q.id),
                              ).length ===
                            0
                          )
                            return;
                          if (
                            window.confirm(`Reset all progress for ${t.name}?`)
                          )
                            resetTopic(t.id);
                        }}
                        title={`Reset ${t.name}`}
                        aria-label={`Reset ${t.name}`}
                        className="grid w-9 shrink-0 place-items-center rounded-r-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="border-t border-border/60 py-1">
                        {list.length === 0 && (
                          <li className="px-4 py-2 text-[11px] text-muted-foreground">
                            No questions yet.
                          </li>
                        )}
                        {list.map((q, i) => {
                          const passed = progress.passed.includes(q.id);
                          const rev = progress.revision.includes(q.id);
                          const active =
                            isActive && activeList[activeIdx]?.id === q.id;
                          return (
                            <li key={q.id}>
                              <button
                                onClick={() => {
                                  setActiveTopicId(t.id);
                                  setTimeout(() => setActiveIdx(i), 0);
                                }}
                                className={cn(
                                  "flex w-full items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs transition-colors",
                                  active
                                    ? "text-primary font-semibold"
                                    : "text-foreground hover:bg-secondary/60",
                                )}
                              >
                                <span
                                  className={cn(
                                    "grid h-4 w-4 shrink-0 place-items-center rounded border",
                                    passed
                                      ? "border-muted-foreground/40 bg-transparent text-muted-foreground"
                                      : rev
                                        ? "border-destructive bg-destructive/10 text-destructive"
                                        : "border-border bg-background",
                                  )}
                                >
                                  {passed && (
                                    <Check
                                      className="h-3 w-3"
                                      strokeWidth={3}
                                    />
                                  )}
                                  {!passed && rev && (
                                    <X className="h-3 w-3" strokeWidth={3} />
                                  )}
                                </span>
                                <span
                                  className={cn(
                                    "truncate",
                                    passed &&
                                      "line-through text-muted-foreground",
                                  )}
                                >
                                  Task {i + 1}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 border-t border-border pt-3">
              <button
                onClick={() => setActiveTopicId("revision")}
                className={cn(
                  "w-full rounded-xl border p-3 text-left transition-all",
                  activeTopicId === "revision"
                    ? "border-destructive bg-destructive/10"
                    : "border-transparent bg-background hover:border-border hover:bg-secondary",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <AlertTriangle className="h-4 w-4 text-destructive" />{" "}
                    Revision
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold",
                      revisionQuestions.length > 0
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {revisionQuestions.length}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </aside>

        <main
          className={cn(
            "min-w-0 flex-1",
            activeTopicId === null && "hidden lg:block",
          )}
        >
          {error && (
            <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {questions === null && !error && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading questions…
            </div>
          )}

          {questions !== null && activeTopicId === null && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Pick a topic on the left to start practicing.
            </div>
          )}

          {questions !== null && activeTopicId !== null && (
            <div className="mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                {activeTopicId === "revision" ? "Revision folder" : "Topic"}
              </span>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {activeTopicId === "revision"
                  ? "Fix what tripped you up"
                  : activeTopicName}
              </h1>
            </div>
          )}

          {questions !== null &&
            activeTopicId !== null &&
            activeList.length === 0 && (
              <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
                {activeTopicId === "revision"
                  ? "Nothing to revise — all attempted questions are clean. Keep going."
                  : "No questions in this topic yet."}
              </div>
            )}

          {activeQuestion && (
            <QuestionCard
              key={activeQuestion.id}
              data={activeQuestion}
              index={activeIdx}
              inRevision={progress.revision.includes(activeQuestion.id)}
              alreadyPassed={progress.passed.includes(activeQuestion.id)}
              onGraded={(allCorrect) =>
                recordResult(activeQuestion.id, allCorrect)
              }
              onResetProgress={() => resetIds([activeQuestion.id])}
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
                onClick={() =>
                  setActiveIdx((i) =>
                    Math.min(activeList.length - 1, i + 1),
                  )
                }
                disabled={activeIdx >= activeList.length - 1}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </main>

        <aside className="hidden xl:sticky xl:top-20 xl:block xl:h-[calc(100vh-6rem)] xl:w-80 xl:shrink-0">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <NotebookPen className="h-3.5 w-3.5" /> Theory
            </h3>
            {activeQuestion ? (
              <div className="min-h-0 flex-1 overflow-y-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                  Task {activeIdx + 1}
                </p>
                <div className="mt-4 rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
                  Theory notes will appear here as we build them out topic by
                  topic.
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs text-muted-foreground">
                Open a task to see its theory notes here.
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function QuestionCard({
  data,
  index,
  onGraded,
  inRevision,
  alreadyPassed,
  onResetProgress,
}: {
  data: Question;
  index: number;
  onGraded: (allCorrect: boolean) => void;
  inRevision: boolean;
  alreadyPassed: boolean;
  onResetProgress: () => void;
}) {
  const n = data.statements.length;
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    () => Array(n).fill(null),
  );
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setAnswers(Array(data.statements.length).fill(null));
    setChecked(false);
    setOpenExpl({});
  }, [data.id, data.statements.length]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = data.statements.reduce<number>(
    (acc, s, i) => acc + ((answers[i] === true) === s.correct_answer ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    onGraded(correctCount === n);
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers(Array(n).fill(null));
    setOpenExpl({});
  };

  const handleFullReset = () => {
    handleReset();
    onResetProgress();
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task {index + 1}
        </span>
        {data.difficulty && (
          <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
            {data.difficulty}
          </span>
        )}
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
        <span className="flex-1" />
        {(alreadyPassed || inRevision || checked) && (
          <button
            onClick={handleFullReset}
            title="Reset this task"
            aria-label="Reset this task"
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            <RotateCcw className="h-3 w-3" /> Reset task
          </button>
        )}
      </div>

      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {data.stem_text}
      </p>

      {data.image_url && (
        <img
          src={data.image_url}
          alt=""
          className="mt-4 max-h-72 rounded-lg border border-border object-contain"
        />
      )}

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">Correct</span>
          {checked && <span className="w-6" aria-hidden />}
        </li>
        {data.statements.map((s, i) => {
          const userAns = answers[i];
          const isChecked = userAns === true;
          const correctAns = s.correct_answer;
          const isCorrect = checked && isChecked === correctAns;
          const isWrong = checked && isChecked !== correctAns;
          return (
            <li
              key={s.id}
              className={cn(
                "px-4 py-3 transition-colors",
                isCorrect && "bg-emerald-500/5",
                isWrong && "bg-destructive/5",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                  {i + 1}.
                </span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  {s.statement_text}
                </p>
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
                      isCorrect
                        ? "bg-emerald-500 text-white"
                        : "bg-destructive text-destructive-foreground",
                    )}
                    aria-label={isCorrect ? "Correct" : "Incorrect"}
                  >
                    {isCorrect ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <X className="h-4 w-4" />
                    )}
                  </span>
                )}
              </div>

              {checked && s.explanation && (
                <div className="mt-3">
                  <button
                    onClick={() =>
                      setOpenExpl((st) => ({ ...st, [i]: !st[i] }))
                    }
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
                    aria-expanded={!!openExpl[i]}
                  >
                    Explanation
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openExpl[i] && "rotate-180",
                      )}
                    />
                  </button>
                  {openExpl[i] && (
                    <p
                      className={cn(
                        "mt-2 rounded-md p-3 text-xs leading-relaxed",
                        isCorrect
                          ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                          : "bg-destructive/10 text-destructive",
                      )}
                    >
                      {s.explanation}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {!checked ? (
          <button
            onClick={handleSubmit}
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
          <div
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-bold",
              correctCount === n
                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                : "bg-destructive/15 text-destructive",
            )}
          >
            {correctCount === n
              ? `${n}/${n} — task counted ✓`
              : `${correctCount}/${n} — sent to Revision`}
          </div>
        )}
      </div>
    </article>
  );
}
