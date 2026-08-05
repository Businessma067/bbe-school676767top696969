import { recordTaskAttempt } from "@/lib/user-progress";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { explainCase } from "@/lib/explain-case.functions";
import { Check, X, ChevronLeft, ChevronRight, ChevronDown, Loader2, RotateCcw, BookOpen, AlertTriangle, NotebookPen, Settings2, Lock, Sparkles, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { TheoryReader } from "@/components/TheoryReader";
import { useTimedSession } from "@/lib/timed-practice";
import { TimedModeBar, TimeoutModal, TimerStatusDot } from "@/components/TimedModeControls";

// Full course: everything is unlocked. No free-tier gating, no phantom locked rows.
const phantomCountFor = (_ch: number): number => 0;
const freeLimitOf = (_ch: number | "revision" | null): number => Number.POSITIVE_INFINITY;
const isLocked = (_chapter: number | "revision" | null, _idx: number) => false;


export const Route = createFileRoute("/products/full-course-economics")({
  head: () => ({
    meta: [
      { title: "Economics — Full Course — BBE School" },
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
  const [activeChapter, setActiveChapter] = useState<number | "revision" | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [theoryChapter, setTheoryChapter] = useState<number | null>(null);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const timed = useTimedSession();

  type ExplanationData = { classic_explanation: string; textbook_context: string; highlight_text: string };
  type ExplanationState = {
    key: string; // caseId + ":" + statementIndex
    caseId: string;
    statementIndex: number;
    statementText: string;
    correctAnswer: boolean;
    loading: boolean;
    data: ExplanationData | null;
    error: string | null;
  };
  const [explanation, setExplanation] = useState<ExplanationState | null>(null);
  const explainFn = useServerFn(explainCase);

  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    () => Object.fromEntries(CHAPTERS.map((c) => [c.num, false])),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const { data, error } = await supabase
        .from("economics_cases")
        .select("id, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order")
        .eq("tier", "full")
        .order("sort_order", { ascending: true });
      if (cancel) return;
      if (error) setError(error.message);
      else setCases((data as Case[]) ?? []);
    })();
    return () => { cancel = true; };
  }, []);

  useEffect(() => { setActiveIdx(0); setExplanation(null); }, [activeChapter]);
  useEffect(() => { setExplanation(null); }, [activeIdx]);

  const requestExplanation = async (caseData: Case, i: number) => {
    const key = `${caseData.id}:${i}`;
    if (explanation?.key === key) return;
    const stmt = caseData.statements[i];
    const correct = caseData.answer_key[i];
    setExplanation({
      key, caseId: caseData.id, statementIndex: i,
      statementText: stmt, correctAnswer: correct,
      loading: true, data: null, error: null,
    });
    try {
      const result = await explainFn({
        data: { stem: caseData.context, statement: stmt, correctAnswer: correct },
      });
      setExplanation((prev) => prev && prev.key === key
        ? { ...prev, loading: false, data: result as ExplanationData }
        : prev);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load explanation.";
      setExplanation((prev) => prev && prev.key === key
        ? { ...prev, loading: false, error: msg }
        : prev);
    }
  };

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
      : activeChapter === null
        ? []
        : byChapter.get(activeChapter) ?? [];
  const activeCase = activeList[activeIdx];

  useEffect(() => {
    if (!timed.enabled) return;
    timed.openQuestion(activeCase?.id ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timed.enabled, activeCase?.id]);

  const activeTimer = timed.get(activeCase?.id);

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

  const resetCaseIds = (ids: string[]) => {
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

  const resetChapter = (ch: number) => {
    const list = byChapter.get(ch) ?? [];
    resetCaseIds(list.map((c) => c.id));
  };

  const [customResetOpen, setCustomResetOpen] = useState(false);

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
          <Link to="/products/full-course-subjects" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">All subjects</span>
          </Link>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">Economics</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU BBE · Cases</span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-none flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-10 2xl:px-12">
        {/* Sidebar — expandable chapters with per-case checklist */}
        {!sidebarCollapsed && (
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-80 lg:shrink-0 2xl:w-96">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> Chapters
              </h3>
              <button
                type="button"
                onClick={() => setSidebarCollapsed(true)}
                title="Collapse chapters"
                aria-label="Collapse chapters"
                className="hidden lg:grid h-7 w-7 place-items-center rounded-md border border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <PanelLeftClose className="h-3.5 w-3.5" />
              </button>
            </div>
            <ul className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {CHAPTERS.map((ch) => {
                const list = byChapter.get(ch.num) ?? [];
                const done = list.filter((c) => progress.passed.includes(c.id)).length;
                const total = list.length;
                const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                const isOpen = !!expanded[ch.num];
                const isActiveCh = activeChapter === ch.num;
                return (
                  <li key={ch.num} className={cn(
                    "rounded-xl border transition-colors",
                    isActiveCh ? "border-primary/40 bg-primary/5" : "border-transparent",
                  )}>
                  <div className="flex items-stretch">
                    <button
                      onClick={() => setExpanded((e) => ({ ...e, [ch.num]: !e[ch.num] }))}
                      className="grid w-9 shrink-0 place-items-center rounded-l-xl text-muted-foreground hover:bg-secondary/60"
                      aria-label={isOpen ? "Collapse chapter" : "Expand chapter"}
                    >
                      <ChevronDown className={cn("h-4 w-4 transition-transform", !isOpen && "-rotate-90")} />
                    </button>
                    <button
                      onClick={() => {
                        setActiveChapter(ch.num);
                        setTheoryChapter(ch.num);
                      }}
                      className="flex flex-1 items-center gap-2 py-2.5 pr-2 text-left hover:bg-secondary/60"
                      title="Open Theory Reader for this chapter"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="truncate text-sm font-bold text-foreground">{ch.num}. {ch.title}</span>
                          <span className="shrink-0 text-[10px] font-bold text-muted-foreground">{done}/{total}</span>
                        </div>
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                          <div
                            className={cn("h-full rounded-full transition-all", pct === 100 ? "bg-emerald-500" : "bg-primary")}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (done + (list.filter((c) => progress.revision.includes(c.id)).length) === 0) return;
                        if (window.confirm(`Reset all progress for Chapter ${ch.num}?`)) resetChapter(ch.num);
                      }}
                      title={`Reset Chapter ${ch.num}`}
                      aria-label={`Reset Chapter ${ch.num}`}
                      className="grid w-9 shrink-0 place-items-center rounded-r-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  </div>
                    {isOpen && (
                      <ul className="border-t border-border/60 py-1">
                        {list.length === 0 && (
                          <li className="px-4 py-2 text-[11px] text-muted-foreground">No cases yet.</li>
                        )}
                        {list.map((c, i) => {
                          const passed = progress.passed.includes(c.id);
                          const rev = progress.revision.includes(c.id);
                          const active = isActiveCh && activeList[activeIdx]?.id === c.id;
                          const locked = isLocked(ch.num, i);
                          const lockedPos = locked ? i - freeLimitOf(ch.num) : -1;
                          // Fade text toward invisibility as tasks get deeper into locked territory
                          const lockedOpacity = locked
                            ? Math.max(0.15, 0.6 - Math.min(lockedPos, 2) * 0.22)
                            : undefined;
                          return (
                            <li key={c.id}>
                              <button
                                onClick={() => {
                                  setTheoryChapter(null);
                                  setActiveChapter(ch.num);
                                  setTimeout(() => setActiveIdx(i), 0);
                                }}
                                disabled={locked}
                                style={locked ? { opacity: lockedOpacity } : undefined}
                                className={cn(
                                  "flex w-full items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs transition-colors",
                                  active ? "text-primary font-semibold" : "text-foreground hover:bg-secondary/60",
                                  locked && "cursor-not-allowed hover:bg-transparent text-muted-foreground",
                                )}
                              >
                                <span
                                  className={cn(
                                    "grid h-4 w-4 shrink-0 place-items-center rounded border",
                                    locked
                                      ? "border-transparent bg-transparent text-muted-foreground"
                                      : passed
                                        ? "border-muted-foreground/40 bg-transparent text-muted-foreground"
                                        : rev
                                          ? "border-destructive bg-destructive/10 text-destructive"
                                          : "border-border bg-background",
                                  )}
                                >
                                  {locked && <Lock className="h-2.5 w-2.5" strokeWidth={2.5} />}
                                  {!locked && passed && <Check className="h-3 w-3" strokeWidth={3} />}
                                  {!locked && !passed && rev && <X className="h-3 w-3" strokeWidth={3} />}
                                </span>
                                <span className={cn("truncate", passed && !locked && "line-through text-muted-foreground")}>
                                  Task {i + 1}{locked && " · Locked"}
                                </span>
                                {timed.enabled && !locked && (
                                  <TimerStatusDot entry={timed.state[c.id]} />
                                )}
                              </button>
                            </li>
                          );


                        })}
                        {Array.from({ length: phantomCountFor(ch.num) }).map((_, p) => {
                          const num = list.length + p + 1;
                          const opacity = Math.max(0.08, 0.45 - p * 0.15);
                          return (
                            <li key={`phantom-${ch.num}-${p}`}>
                              <button
                                type="button"
                                disabled
                                style={{ opacity }}
                                className="flex w-full cursor-not-allowed items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs text-muted-foreground"
                              >
                                <span className="grid h-4 w-4 shrink-0 place-items-center rounded border border-transparent bg-transparent text-muted-foreground">
                                  <Lock className="h-2.5 w-2.5" strokeWidth={2.5} />
                                </span>
                                <span className="truncate">Task {num} · Locked</span>
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

            {/* Revision folder */}
            <div className="mt-3 border-t border-border pt-3">
              <button
                onClick={() => { setActiveChapter("revision"); }}
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
              </button>
            </div>

            <button
              onClick={() => setCustomResetOpen(true)}
              className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              <Settings2 className="h-3.5 w-3.5" /> Customize reset
            </button>
          </div>
        </aside>
        )}

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(false)}
              className="mb-4 hidden lg:inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary"
            >
              <PanelLeftOpen className="h-3.5 w-3.5" /> Show chapters
            </button>
          )}
          {theoryChapter !== null ? (
            <TheoryReader
              chapter={theoryChapter}
              title={CHAPTERS.find((c) => c.num === theoryChapter)?.title ?? ""}
              onGoToPractice={() => {
                setTheoryChapter(null);
                setActiveChapter(theoryChapter);
                setActiveIdx(0);
              }}
            />
          ) : (
            <>
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



          {cases !== null && activeChapter !== null && (
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

          {cases !== null && activeChapter !== null && activeList.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              {activeChapter === "revision"
                ? "Nothing to revise — all attempted cases are clean. Keep going."
                : "No cases here yet. Add some in the admin panel."}
            </div>
          )}

          {activeCase && <TimedModeBar session={timed} />}


          {activeCase && isLocked(activeChapter, activeIdx) ? (() => {
            const freeLimit = freeLimitOf(activeChapter);

            return (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-bold">Locked in demo</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                Chapter {activeChapter} tasks {freeLimit + 1}+ are part of the full course. The first {freeLimit} are free.
              </p>
              <button
                onClick={() => setActiveIdx(freeLimit - 1)}
                className="mt-5 inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
              >
                <ChevronLeft className="h-4 w-4" /> Back to Task {freeLimit}
              </button>
            </div>
            );
          })() : activeCase && (
            <CaseCard
              key={activeCase.id}
              data={activeCase}
              index={activeIdx}
              inRevision={progress.revision.includes(activeCase.id)}
              alreadyPassed={progress.passed.includes(activeCase.id)}
              onGraded={(allCorrect, correctCount) => {
                recordResult(activeCase.id, allCorrect);
                void recordTaskAttempt({
                  subject: "economics",
                  chapter: `Chapter ${chapterOf(activeCase)}`,
                  taskKey: `full:${activeCase.case_id}`,
                  taskTitle: activeCase.title,
                  correctCount,
                  statementCount: activeCase.statements.length || 5,
                });
              }}
              onResetProgress={() => resetCaseIds([activeCase.id])}
              activeExplanationIndex={explanation?.caseId === activeCase.id ? explanation.statementIndex : null}
              onRequestExplanation={(i) => requestExplanation(activeCase, i)}
            />
          )}

          {activeList.length > 0 && activeChapter !== null && (
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
                disabled={
                  activeIdx >= activeList.length - 1 ||
                  isLocked(activeChapter, activeIdx + 1)
                }
                title={isLocked(activeChapter, activeIdx + 1) ? "Next task is locked in the demo" : undefined}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                {isLocked(activeChapter, activeIdx + 1) ? <><Lock className="h-3.5 w-3.5" /> Locked</> : <>Next <ChevronRight className="h-4 w-4" /></>}
              </button>
            </div>
          )}
            </>
          )}
        </main>

        {/* Right panel: AI Explanation Engine when active, Theory otherwise. */}
        {theoryChapter === null && (
        <aside className="lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:w-96 lg:shrink-0">
          {explanation ? (
            <ExplanationPanels
              state={explanation}
              onClose={() => setExplanation(null)}
              onRetry={() => {
                if (!activeCase) return;
                requestExplanation(activeCase, explanation.statementIndex);
              }}
            />
          ) : (
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <NotebookPen className="h-3.5 w-3.5" /> Theory
              </h3>
              {activeCase ? (
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">Task {activeIdx + 1}</p>
                  <div className="mt-4 rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
                    After you check your answers, tap <span className="font-semibold text-primary">Show AI textbook explanation</span> under any statement to open the double-panel engine here — a plain-English reasoning card plus the actual textbook passage with the key line highlighted.
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs text-muted-foreground">
                  Open a case to see its theory notes here.
                </div>
              )}
            </div>
          )}
        </aside>
        )}
      </div>

      {customResetOpen && (
        <CustomResetModal
          chapters={CHAPTERS}
          byChapter={byChapter}
          progress={progress}
          onClose={() => setCustomResetOpen(false)}
          onReset={(ids) => { resetCaseIds(ids); setCustomResetOpen(false); }}
        />
      )}
    </div>
  );
}

function CustomResetModal({
  chapters, byChapter, progress, onClose, onReset,
}: {
  chapters: { num: number; title: string }[];
  byChapter: Map<number, Case[]>;
  progress: Progress;
  onClose: () => void;
  onReset: (ids: string[]) => void;
}) {
  const attempted = (c: Case) => progress.passed.includes(c.id) || progress.revision.includes(c.id);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [openCh, setOpenCh] = useState<Record<number, boolean>>(
    () => Object.fromEntries(chapters.map((c) => [c.num, true])),
  );

  const toggle = (id: string) => setSelected((s) => ({ ...s, [id]: !s[id] }));
  const toggleChapter = (ch: number) => {
    const list = (byChapter.get(ch) ?? []).filter(attempted);
    const allOn = list.every((c) => selected[c.id]);
    setSelected((s) => {
      const next = { ...s };
      list.forEach((c) => { next[c.id] = !allOn; });
      return next;
    });
  };

  const chosenIds = Object.entries(selected).filter(([, v]) => v).map(([k]) => k);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-border bg-card shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-bold">Customize reset</h2>
            <p className="text-xs text-muted-foreground">Pick individual cases to clear from your progress.</p>
          </div>
          <button onClick={onClose} className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {chapters.map((ch) => {
            const list = byChapter.get(ch.num) ?? [];
            const attemptedList = list.filter(attempted);
            const isOpen = !!openCh[ch.num];
            return (
              <div key={ch.num} className="mb-3 rounded-xl border border-border">
                <div className="flex items-center justify-between px-3 py-2">
                  <button
                    onClick={() => setOpenCh((s) => ({ ...s, [ch.num]: !s[ch.num] }))}
                    className="flex flex-1 items-center gap-2 text-left"
                  >
                    <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", !isOpen && "-rotate-90")} />
                    <span className="text-sm font-bold">Ch. {ch.num} — {ch.title}</span>
                    <span className="text-[10px] font-semibold text-muted-foreground">({attemptedList.length} attempted)</span>
                  </button>
                  <button
                    onClick={() => toggleChapter(ch.num)}
                    disabled={attemptedList.length === 0}
                    className="rounded-md border border-border px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:bg-secondary disabled:opacity-40"
                  >
                    Toggle all
                  </button>
                </div>
                {isOpen && (
                  <ul className="border-t border-border/60 p-2">
                    {list.length === 0 && (
                      <li className="px-2 py-2 text-xs text-muted-foreground">No cases.</li>
                    )}
                    {list.map((c, i) => {
                      const dis = !attempted(c);
                      const passed = progress.passed.includes(c.id);
                      const rev = progress.revision.includes(c.id);
                      return (
                        <li key={c.id}>
                          <label className={cn(
                            "flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-xs",
                            dis ? "cursor-not-allowed opacity-50" : "hover:bg-secondary/60",
                          )}>
                            <input
                              type="checkbox"
                              checked={!!selected[c.id]}
                              disabled={dis}
                              onChange={() => toggle(c.id)}
                              className="h-3.5 w-3.5 rounded border-border"
                            />
                            <span className="flex-1 truncate">
                              <span className="font-semibold">Task {i + 1}</span>
                              <span className="ml-2 text-muted-foreground">{c.case_id}</span>
                            </span>
                            {passed && <span className="text-[10px] font-bold text-emerald-600">passed</span>}
                            {rev && <span className="text-[10px] font-bold text-destructive">revision</span>}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-border px-5 py-3">
          <span className="text-xs text-muted-foreground">{chosenIds.length} selected</span>
          <div className="flex gap-2">
            <button onClick={onClose} className="rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary">
              Cancel
            </button>
            <button
              onClick={() => onReset(chosenIds)}
              disabled={chosenIds.length === 0}
              className="inline-flex items-center gap-1.5 rounded-md bg-destructive px-3 py-2 text-xs font-semibold text-destructive-foreground hover:bg-destructive/90 disabled:opacity-40"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset selected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function CaseCard({
  data, index, onGraded, inRevision, alreadyPassed, onResetProgress,
  activeExplanationIndex, onRequestExplanation,
}: {
  data: Case; index: number;
  onGraded: (allCorrect: boolean, correctCount: number) => void;
  inRevision: boolean; alreadyPassed: boolean;
  onResetProgress: () => void;
  activeExplanationIndex: number | null;
  onRequestExplanation: (i: number) => void;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setAnswers([null, null, null, null, null]);
    setChecked(false);
    setOpenExpl({});
  }, [data.id]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = data.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    onGraded(correctCount === 5, correctCount);
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers([null, null, null, null, null]);
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
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          Difficulty {data.difficulty_level}
        </span>
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
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setOpenExpl((s) => ({ ...s, [i]: !s[i] }))}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
                    aria-expanded={!!openExpl[i]}
                  >
                    Explanation
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openExpl[i] && "rotate-180")} />
                  </button>
                  <button
                    onClick={() => onRequestExplanation(i)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                      activeExplanationIndex === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
                    )}
                  >
                    <Sparkles className="h-3 w-3" />
                    {activeExplanationIndex === i ? "AI textbook shown →" : "Show AI textbook explanation"}
                  </button>
                  {openExpl[i] && (
                    <p className={cn(
                      "mt-1 w-full rounded-md p-3 text-xs leading-relaxed",
                      isCorrect ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200" : "bg-destructive/10 text-destructive",
                    )}>
                      {data.tactical_explanations[i]}
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

function StatsOverview({
  cases, progress, byChapter,
}: {
  cases: Case[];
  progress: Progress;
  byChapter: Map<number, Case[]>;
}) {
  const total = cases.length;
  const passed = progress.passed.length;
  const rev = progress.revision.length;
  const attempted = passed + rev;
  const accuracy = attempted > 0 ? Math.round((passed / attempted) * 100) : 0;

  return (
    <section className="mb-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Your progress
        </h2>
        <span className="text-[10px] font-semibold text-muted-foreground">
          {passed}/{total} tasks passed
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Attempted" value={attempted} />
        <StatTile label="Passed" value={passed} tone="pass" />
        <StatTile label="In revision" value={rev} tone="rev" />
        <StatTile label="Accuracy" value={`${accuracy}%`} />
      </div>
      <ul className="mt-5 space-y-2">
        {CHAPTERS.map((ch) => {
          const list = byChapter.get(ch.num) ?? [];
          const done = list.filter((c) => progress.passed.includes(c.id)).length;
          const pct = list.length ? Math.round((done / list.length) * 100) : 0;
          return (
            <li key={ch.num} className="flex items-center gap-3">
              <span className="w-8 shrink-0 text-xs font-bold text-muted-foreground">Ch.{ch.num}</span>
              <span className="flex-1 truncate text-xs text-foreground">
                {ch.title}
              </span>
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                <div
                  className={cn("h-full rounded-full", pct === 100 ? "bg-emerald-500" : "bg-primary")}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-14 shrink-0 text-right text-[11px] font-semibold text-muted-foreground">
                {done}/{list.length}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function StatTile({ label, value, tone }: { label: string; value: number | string; tone?: "pass" | "rev" }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-3",
        tone === "pass"
          ? "border-emerald-500/30 bg-emerald-500/5"
          : tone === "rev"
            ? "border-destructive/30 bg-destructive/5"
            : "border-border bg-secondary/40",
      )}
    >
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

type ExplanationPanelState = {
  key: string;
  statementIndex: number;
  statementText: string;
  correctAnswer: boolean;
  loading: boolean;
  data: { classic_explanation: string; textbook_context: string; highlight_text: string } | null;
  error: string | null;
};

function ExplanationPanels({
  state, onClose, onRetry,
}: {
  state: ExplanationPanelState;
  onClose: () => void;
  onRetry: () => void;
}) {
  const [reveal, setReveal] = useState(false);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setReveal(false);
    if (!state.data) return;
    const t = setTimeout(() => setReveal(true), 350);
    return () => clearTimeout(t);
  }, [state.key, state.data]);

  useEffect(() => {
    if (!reveal || !highlightRef.current) return;
    const el = highlightRef.current;
    const done = () => el.classList.add("done");
    el.addEventListener("animationend", done, { once: true });
    return () => el.removeEventListener("animationend", done);
  }, [reveal]);

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between rounded-2xl border border-primary/40 bg-primary/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            AI Explanation · Statement {state.statementIndex + 1}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close explanation"
          className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Panel B: Classic Explanation */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Classic Explanation
          </span>
          <span className={cn(
            "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
            state.correctAnswer ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-destructive/15 text-destructive",
          )}>
            Answer: {state.correctAnswer ? "TRUE" : "FALSE"}
          </span>
        </div>
        <p className="mb-3 text-[11px] italic text-muted-foreground">"{state.statementText}"</p>
        {state.loading && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Reasoning through the textbook…
          </div>
        )}
        {state.error && (
          <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive">
            {state.error}
            <button onClick={onRetry} className="ml-2 underline">Retry</button>
          </div>
        )}
        {state.data && (
          <p className="text-sm leading-relaxed text-foreground">{state.data.classic_explanation}</p>
        )}
      </div>

      {/* Panel C: Textbook Canvas */}
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-border bg-[#fdf9f0] shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 bg-white/60 px-4 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-taupe">
            <BookOpen className="h-3.5 w-3.5" /> Textbook Canvas
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            Fuhrmann · WU 2019
          </span>
        </div>
        <div className="h-full overflow-y-auto px-5 py-4 font-serif text-[13px] leading-relaxed text-[#3a2e1f]">
          {state.loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Fetching the page…
            </div>
          )}
          {state.data && (
            <TextbookCanvasBody
              text={state.data.textbook_context}
              highlight={state.data.highlight_text}
              reveal={reveal}
              highlightRef={highlightRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TextbookCanvasBody({
  text, highlight, reveal, highlightRef,
}: {
  text: string;
  highlight: string;
  reveal: boolean;
  highlightRef: React.MutableRefObject<HTMLSpanElement | null>;
}) {
  const idx = highlight ? text.indexOf(highlight) : -1;
  if (idx === -1 || !highlight) {
    return <p>{text}</p>;
  }
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <p>
      {before}
      <span
        ref={highlightRef}
        className={reveal ? "neon-highlight" : undefined}
        style={reveal ? undefined : { padding: "0 2px" }}
      >
        {match}
      </span>
      {after}
    </p>
  );
}

