import { recordTaskAttempt } from "@/lib/user-progress";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { explainCase } from "@/lib/explain-case.functions";
import { useTimedSession } from "@/lib/timed-practice";
import { TimedModeBar, TimeoutModal, TimerStatusDot } from "@/components/TimedModeControls";
import { AuthModal } from "@/components/AuthModal";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseContextRich } from "@/components/CaseContextRich";
import { ExplanationProse } from "@/components/ExplanationProse";
import { scrubStatementHints } from "@/lib/case-context";
import { PRACTICE_BODY_STACK, PRACTICE_PAGE } from "@/lib/practice-layout";
import {
  practiceExplanationToggleClass,
  practiceInlineAiButtonClass,
  practicePanelSectionLabelClass,
  practiceSubmitButtonClass,
  practiceTryAgainButtonClass,
} from "@/lib/practice-button-styles";
import { PracticeCalcProvider, usePracticeCalcOptional } from "@/components/calculator/PracticeCalcContext";
import { PracticeRightSlot } from "@/components/calculator/Ti30MathPrint";
import {
  PracticeChaptersOpenButton,
  PracticeChaptersShell,
} from "@/components/PracticeMobileChapters";
import { useSetPracticeCase } from "@/lib/practice-case-context";
import { useAuthGate } from "@/hooks/use-auth-gate";
import { Check, X, ChevronLeft, ChevronRight, ChevronDown, Loader2, RotateCcw, BookOpen, AlertTriangle, NotebookPen, Settings2, Lock, PanelLeftClose, PanelLeftOpen } from "lucide-react";

const CHAPTER5_FREE_LIMIT = 8;
const CHAPTER2_FREE_LIMIT = 6;
const CHAPTER3_FREE_LIMIT = 5;
const CHAPTER4_FREE_LIMIT = 6;
const CHAPTER6_FREE_LIMIT = 8;
const DEFAULT_PHANTOM_LOCKED_COUNT = 3;
const phantomCountFor = (ch: number): number => {
  // Chapters 2 & 3 already have 3 real locked gradient tasks; no extra phantom rows needed.
  if (ch === 2 || ch === 3) return 0;
  return DEFAULT_PHANTOM_LOCKED_COUNT;
};
const freeLimitOf = (ch: number | "revision" | null): number => {
  if (ch === 2) return CHAPTER2_FREE_LIMIT;
  if (ch === 3) return CHAPTER3_FREE_LIMIT;
  if (ch === 4) return CHAPTER4_FREE_LIMIT;
  if (ch === 5) return CHAPTER5_FREE_LIMIT;
  if (ch === 6) return CHAPTER6_FREE_LIMIT;
  return Number.POSITIVE_INFINITY;
};
const isLocked = (chapter: number | "revision" | null, idx: number) =>
  idx >= freeLimitOf(chapter);


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
  const [activeChapter, setActiveChapter] = useState<number | "revision" | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const authGate = useAuthGate();

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
  const [showExplanations, setShowExplanations] = useState(false);
  const explainFn = useServerFn(explainCase);

  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    () => Object.fromEntries(CHAPTERS.map((c) => [c.num, false])),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const timed = useTimedSession();

  useEffect(() => {
    setMobileChaptersOpen(false);
  }, [activeChapter, activeIdx]);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const { data, error } = await supabase
        .from("economics_cases")
        .select("id, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order")
        .eq("tier", "demo")
        .order("sort_order", { ascending: true });
      if (cancel) return;
      if (error) setError(error.message);
      else setCases((data as Case[]) ?? []);
    })();
    return () => { cancel = true; };
  }, []);

  useEffect(() => { setActiveIdx(0); setExplanation(null); setShowExplanations(false); }, [activeChapter]);
  useEffect(() => { setExplanation(null); setShowExplanations(false); }, [activeIdx]);

  const requestExplanation = async (caseData: Case, i: number) => {
    const key = `${caseData.id}:${i}`;
    if (explanation?.key === key) return;
    setShowExplanations(false);
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
  const setPracticeCase = useSetPracticeCase();

  useEffect(() => {
    if (activeCase && !isLocked(activeChapter, activeIdx)) {
      const chNum = chapterOf(activeCase);
      const chTitle = CHAPTERS.find((c) => c.num === chNum)?.title ?? "";
      setPracticeCase({
        subject: "economics",
        chapterLabel:
          activeChapter === "revision"
            ? "Revision"
            : `Chapter ${chNum}${chTitle ? ` · ${chTitle}` : ""}`,
        taskId: activeCase.id,
        title: `${activeCase.case_id} · ${activeCase.title}`,
        context: activeCase.context,
        statements: activeCase.statements,
        tacticalExplanations: activeCase.tactical_explanations,
        answerKey: activeCase.answer_key,
      });
    } else {
      setPracticeCase(null);
    }
    return () => setPracticeCase(null);
  }, [activeCase, activeChapter, activeIdx, setPracticeCase]);

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
    <PracticeCalcProvider>
    <div className={PRACTICE_PAGE}>
      <SiteHeader maxWidthClassName="max-w-none" compact />

      <div
        className={cn(
          PRACTICE_BODY_STACK,
          "lg:flex lg:items-start lg:transition-[gap] lg:duration-300 lg:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
          sidebarCollapsed ? "lg:gap-0" : "lg:gap-6",
        )}
      >
        {/* Sidebar — expandable chapters with per-case checklist */}
        <PracticeChaptersShell
          mobileOpen={mobileChaptersOpen}
          onMobileOpenChange={setMobileChaptersOpen}
          desktopCollapsed={sidebarCollapsed}
        >
          <div className="flex h-full max-h-dvh flex-col rounded-2xl border border-border bg-card p-3 shadow-sm lg:h-full lg:max-h-none lg:w-80 2xl:w-96">
            <div className="mb-2 flex shrink-0 items-center justify-between px-1">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> Chapters
              </h3>
              <button
                type="button"
                onClick={() => {
                  setSidebarCollapsed(true);
                  setMobileChaptersOpen(false);
                }}
                title="Collapse chapters"
                aria-label="Collapse chapters"
                className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground lg:inline-flex lg:p-1"
              >
                <PanelLeftClose className="h-3.5 w-3.5" />
              </button>
            </div>
            <ul className="practice-scroll min-h-0 flex-1 space-y-1.5 overflow-y-auto overscroll-contain pr-1">
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
                      className="flex flex-1 items-center gap-2 rounded-l-xl px-3 py-2.5 text-left hover:bg-secondary/60"
                    >
                      <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", !isOpen && "-rotate-90")} />
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
              className="mt-2 flex w-full shrink-0 items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              <Settings2 className="h-3.5 w-3.5" /> Customize reset
            </button>
          </div>
        </PracticeChaptersShell>

        {/* Main content */}
        <main className="min-w-0 flex-1" data-practice-surface>
          <PracticeChaptersOpenButton
            onClick={() => {
              setSidebarCollapsed(false);
              setMobileChaptersOpen(true);
            }}
          />
          {sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(false)}
              className="mb-4 hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary lg:inline-flex"
            >
              <PanelLeftOpen className="h-3.5 w-3.5" /> Show chapters
            </button>
          )}
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

          {cases !== null && activeChapter === null && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center sm:p-10">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-bold">Pick a chapter</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                Tap <span className="font-semibold text-foreground">Chapters</span> above to browse
                economics tasks for the WU BBE exam.
              </p>
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

          {activeCase && !isLocked(activeChapter, activeIdx) && <TimedModeBar session={timed} />}

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
              reviewOnly={!!activeTimer?.reviewOnly}
              timerNote={
                activeTimer?.timedOut && activeTimer.status !== "submitted"
                  ? "Failed on time"
                  : null
              }
              requireAuth={authGate.requireAuth}
              onGraded={(allCorrect, correctCount) => {
                recordResult(activeCase.id, allCorrect);
                if (timed.enabled) timed.markSubmitted(activeCase.id);
                void recordTaskAttempt({
                  subject: "economics",
                  chapter: `Chapter ${chapterOf(activeCase)}`,
                  taskKey: `demo:${activeCase.case_id}`,
                  taskTitle: activeCase.title,
                  correctCount,
                  statementCount: activeCase.statements.length || 5,
                });
              }}
              onResetProgress={() => resetCaseIds([activeCase.id])}
              explanationsOpen={showExplanations && !explanation}
              onShowExplanations={() => {
                setExplanation(null);
                setShowExplanations(true);
              }}
              onToggleExplanations={() => {
                setExplanation(null);
                setShowExplanations((v) => !v);
              }}
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
        </main>

        {/* Right panel: Calculator, Full solution, or AI Explanation */}
        <DemoEconPracticeAside hasExplanation={showExplanations || !!explanation}>
          {explanation ? (
            <ExplanationPanels
              state={explanation}
              onClose={() => setExplanation(null)}
              onRetry={() => {
                if (!activeCase) return;
                requestExplanation(activeCase, explanation.statementIndex);
              }}
            />
          ) : showExplanations && activeCase ? (
            <AllExplanationsPanel
              task={activeCase}
              index={activeIdx}
              onClose={() => setShowExplanations(false)}
              onRequestAi={(i) => requestExplanation(activeCase, i)}
            />
          ) : null}
        </DemoEconPracticeAside>
      </div>

      {timed.enabled && activeCase && activeTimer?.awaitingChoice && (
        <TimeoutModal
          onOvertime={() => timed.chooseOvertime(activeCase.id)}
          onReview={() => timed.chooseReview(activeCase.id)}
        />
      )}

      {customResetOpen && (
        <CustomResetModal
          chapters={CHAPTERS}
          byChapter={byChapter}
          progress={progress}
          onClose={() => setCustomResetOpen(false)}
          onReset={(ids) => { resetCaseIds(ids); setCustomResetOpen(false); }}
        />
      )}

      <AuthModal open={authGate.authOpen} onOpenChange={authGate.setAuthOpen} />
    </div>
    </PracticeCalcProvider>
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
  explanationsOpen, onShowExplanations, onToggleExplanations,
  reviewOnly = false, timerNote = null,
  requireAuth,
}: {
  data: Case; index: number;
  reviewOnly?: boolean;
  timerNote?: string | null;
  onGraded: (allCorrect: boolean, correctCount: number) => void;
  inRevision: boolean; alreadyPassed: boolean;
  onResetProgress: () => void;
  explanationsOpen: boolean;
  onShowExplanations: () => void;
  onToggleExplanations: () => void;
  requireAuth?: () => boolean;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAnswers([null, null, null, null, null]);
    setChecked(false);
  }, [data.id]);

  // Timed mode: user chose "Check the answer" after a timeout → review-only view.
  useEffect(() => {
    if (!reviewOnly) return;
    setChecked(true);
    onShowExplanations();
    // Only re-run when the timed review state or case changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onShowExplanations is an inline parent callback
  }, [reviewOnly, data.id]);

  const setAt = (i: number, v: boolean) => {
    if (requireAuth && !requireAuth()) return;
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = data.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    if (requireAuth && !requireAuth()) return;
    setChecked(true);
    onGraded(correctCount === 5, correctCount);
    onShowExplanations();
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers([null, null, null, null, null]);
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
        {timerNote && (
          <span className="rounded-md bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive">
            {timerNote}
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
            type="button"
            onClick={handleFullReset}
            title="Reset this task"
            aria-label="Reset this task"
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            <RotateCcw className="h-3 w-3" /> Reset task
          </button>
        )}
      </div>

      <CaseContextRich content={data.context} className="mt-3" />

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-2 bg-secondary/60 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:gap-3 sm:px-4">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-11 text-center lg:w-14">True</span>
          {checked && <span className="w-6" aria-hidden />}
        </li>
        {data.statements.map((stmt, i) => {
          const isChecked = answers[i] === true;
          const correctAns = data.answer_key[i];
          const isCorrect = checked && isChecked === correctAns;
          return (
            <li
              key={i}
              className="px-3 py-3 sm:px-4"
            >
              <div className="flex items-start gap-2 sm:items-center sm:gap-3">
                <span className="mt-2 w-6 text-center text-xs font-bold text-muted-foreground sm:mt-0">
                  {String.fromCharCode(65 + i)}.
                </span>
                <p className="min-w-0 flex-1 text-sm leading-relaxed text-foreground">{scrubStatementHints(stmt)}</p>
                <div className="flex w-11 shrink-0 justify-center lg:w-14">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={`Mark statement ${String.fromCharCode(65 + i)} as true`}
                    disabled={checked}
                    onClick={() => setAt(i, !isChecked)}
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-lg border-2 transition-all lg:h-6 lg:w-6 lg:rounded",
                      isChecked
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/60",
                      checked && "cursor-default",
                    )}
                  >
                    {isChecked && <Check className="h-5 w-5 lg:h-4 lg:w-4" strokeWidth={3} />}
                  </button>
                </div>
                {checked && (
                  <span
                    className={cn(
                      "mt-2 grid h-6 w-6 shrink-0 place-items-center rounded-full sm:mt-0",
                      isCorrect ? "bg-emerald-500 text-white" : "bg-destructive text-destructive-foreground",
                    )}
                    aria-label={isCorrect ? "Correct" : "Incorrect"}
                  >
                    {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {reviewOnly ? (
            <span className="text-xs font-semibold text-muted-foreground">
              Review only — the countdown ran out on this task.
            </span>
          ) : !checked ? (
            <button
              type="button"
              onClick={handleSubmit}
              className={practiceSubmitButtonClass}
            >
              Check Answers / Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className={practiceTryAgainButtonClass}
            >
              Try again
            </button>
          )}
          {checked && (
            <button
              type="button"
              onClick={onToggleExplanations}
              className={practiceExplanationToggleClass(explanationsOpen)}
            >
              {explanationsOpen ? "Hide Explanation" : "Explanation"}
            </button>
          )}
        </div>
        {checked && !reviewOnly && (
          <span className="text-sm font-semibold text-muted-foreground">
            {correctCount}/{data.answer_key.length} correct
          </span>
        )}
      </div>
    </article>
  );
}

function AllExplanationsPanel({
  task,
  index,
  onClose,
  onRequestAi,
}: {
  task: Case;
  index: number;
  onClose: () => void;
  onRequestAi: (i: number) => void;
}) {
  const letters = "ABCDEF";
  const body = [
    ...task.statements.flatMap((_, i) => {
      const letter = letters[i] ?? String(i + 1);
      const verdict = task.answer_key[i] ? "True" : "False";
      const expl = (task.tactical_explanations[i] ?? "").trim();
      if (expl) {
        return [`**${letter}.** → ${verdict}\n\n${expl}`, ""];
      }
      return [
        `**${letter}.** → ${verdict}\n\n${scrubStatementHints(task.statements[i])}`,
        "",
      ];
    }),
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return (
    <div className="practice-fade-in flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm" data-practice-surface>
      <div className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
            Full solution · Task {index + 1}
          </p>
          <h3 className="mt-0.5 truncate font-display text-sm font-bold">{task.title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          Close
        </button>
      </div>
      <div className="practice-scroll min-h-0 flex-1 overflow-y-auto bg-white px-7 py-7 sm:px-9 sm:py-8">
        <EconAnswerKeyTable answerKey={task.answer_key} />
        <div className="mb-6 flex flex-wrap gap-2">
          {task.statements.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onRequestAi(i)}
              className={practiceInlineAiButtonClass(false)}
            >
              AI · {letters[i] ?? i + 1}
            </button>
          ))}
        </div>
        <ExplanationProse text={body} />
      </div>
    </div>
  );
}

function EconAnswerKeyTable({ answerKey }: { answerKey: boolean[] }) {
  const letters = "ABCDEF";

  return (
    <section className="mb-8 overflow-x-auto border-b border-border/60 pb-7">
      <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
        Answer key
      </p>
      <table className="w-full min-w-[16rem] border-collapse border border-foreground/20 text-center text-[14px] shadow-sm">
        <thead>
          <tr className="bg-foreground text-background">
            {answerKey.map((_, i) => (
              <th
                key={i}
                className="border-b border-foreground/20 px-3 py-2.5 text-[12px] font-bold uppercase tracking-wide"
              >
                {letters[i] ?? i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-card">
            {answerKey.map((isTrue, i) => (
              <td
                key={i}
                className="border-border px-3 py-3 text-[13px] font-bold uppercase tracking-widest text-foreground"
              >
                {isTrue ? "TRUE" : "FALSE"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
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
          const chLocked = ch.num === 5;
          return (
            <li key={ch.num} className="flex items-center gap-3">
              <span className="w-8 shrink-0 text-xs font-bold text-muted-foreground">Ch.{ch.num}</span>
              <span className="flex-1 truncate text-xs text-foreground">
                {ch.title}
                {chLocked && (
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-secondary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    <Lock className="h-2.5 w-2.5" /> Demo · {CHAPTER5_FREE_LIMIT} free
                  </span>
                )}
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

function DemoEconPracticeAside({
  hasExplanation,
  children,
}: {
  hasExplanation: boolean;
  children: ReactNode;
}) {
  const calc = usePracticeCalcOptional();
  if (!hasExplanation && !calc?.open) return null;
  return <PracticeRightSlot>{children}</PracticeRightSlot>;
}

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
    <div className="flex h-full flex-col gap-3" data-practice-surface>
      {/* Header */}
      <div className="flex items-center justify-between rounded-2xl border border-primary/40 bg-primary/5 px-4 py-2.5">
        <span className={practicePanelSectionLabelClass}>
          AI Explanation · Statement {state.statementIndex + 1}
        </span>
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
            Textbook Canvas
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            BBE School Textbook
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

