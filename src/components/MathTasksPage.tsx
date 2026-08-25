import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AuthNav } from "@/components/AuthNav";
import { FlashcardMath, indexOfUnescapedDollar } from "@/components/FlashcardMath";
import { PracticeCalcProvider, usePracticeCalcOptional } from "@/components/calculator/PracticeCalcContext";
import { PracticeCalculatorInline, PracticeRightSlot } from "@/components/calculator/Ti30MathPrint";
import { TheoryReader } from "@/components/TheoryReader";
import { PRACTICE_BODY_STACK, PRACTICE_HEADER_INNER, PRACTICE_PAGE } from "@/lib/practice-layout";
import { cn } from "@/lib/utils";
import { useSetPracticeCase } from "@/lib/practice-case-context";
import { recordTaskAttempt } from "@/lib/user-progress";
import { trackEvent } from "@/lib/activity-tracker";
import { Collapse } from "@/components/Collapse";
import {
  MATH_CHAPTERS,
  DEMO_MATH_FREE_LIMIT,
  type MathChapter,
  type MathTask,
} from "@/data/math-chapters";
import { mathChapterHasTheory } from "@/data/math-course-theory";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  BookOpen,
  AlertTriangle,
  Settings2,
  Lock,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
} from "lucide-react";

export type MathTasksTier = "demo" | "lite" | "full";

type Progress = {
  passed: string[];
  revision: string[];
};

const STORAGE_KEY = "bbe.math.progress.v1";

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

function freeLimitOf(tier: MathTasksTier, _ch: number | "revision" | null): number {
  if (tier === "demo") return DEMO_MATH_FREE_LIMIT;
  return Number.POSITIVE_INFINITY;
}

function phantomCountFor(tier: MathTasksTier): number {
  // Demo already has locked real placeholder slots past the free limit.
  if (tier === "demo") return 0;
  return 0;
}

function isLocked(tier: MathTasksTier, chapter: number | "revision" | null, idx: number) {
  return idx >= freeLimitOf(tier, chapter);
}

type Props = {
  tier: MathTasksTier;
  backTo: string;
  backLabel?: string;
};

export function MathTasksPage({ tier, backTo, backLabel = "All subjects" }: Props) {
  const chapters = MATH_CHAPTERS;
  const [activeChapter, setActiveChapter] = useState<number | "revision" | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [theoryChapter, setTheoryChapter] = useState<number | null>(null);
  const [progress, setProgress] = useState<Progress>({ passed: [], revision: [] });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    () => Object.fromEntries(chapters.map((c) => [c.num, false])),
  );
  const [expandedSub, setExpandedSub] = useState<Record<string, boolean>>({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customResetOpen, setCustomResetOpen] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const setPracticeCase = useSetPracticeCase();

  useEffect(() => {
    setActiveIdx(0);
  }, [activeChapter]);

  useEffect(() => {
    setShowExplanations(false);
  }, [activeChapter, activeIdx]);

  const byChapter = useMemo(() => {
    const map = new Map<number, MathTask[]>();
    chapters.forEach((c) => map.set(c.num, c.tasks));
    return map;
  }, [chapters]);

  const revisionCases = useMemo(
    () =>
      chapters
        .flatMap((c) => c.tasks)
        .filter((t) => progress.revision.includes(t.id)),
    [chapters, progress.revision],
  );

  const activeList: MathTask[] =
    activeChapter === "revision"
      ? revisionCases
      : activeChapter === null
        ? []
        : byChapter.get(activeChapter) ?? [];
  const activeCase = activeList[activeIdx];

  useEffect(() => {
    if (!activeCase || activeCase.placeholder) return;
    void trackEvent({
      eventType: "task_start",
      subject: "math",
      entityType: "task",
      entityId: activeCase.id,
    });
  }, [activeCase?.id]);

  useEffect(() => {
    if (theoryChapter !== null) {
      const ch = chapters.find((c) => c.num === theoryChapter);
      setPracticeCase({
        subject: "math",
        chapterLabel: `Chapter ${theoryChapter}`,
        taskId: `theory-math-${theoryChapter}`,
        title: ch?.title ? `${ch.title} (theory)` : `Theory · Chapter ${theoryChapter}`,
        context: "",
        statements: [],
        theorySnippet: `Mathematics theory for chapter ${theoryChapter}${ch?.title ? `: ${ch.title}` : ""}. The student is reading the theory reader for this chapter.`,
      });
      return () => setPracticeCase(null);
    }

    if (
      activeCase &&
      !activeCase.placeholder &&
      !isLocked(tier, activeChapter, activeIdx)
    ) {
      const chapterTitle =
        activeChapter === "revision"
          ? "Revision"
          : (chapters.find((c) => c.num === activeChapter)?.title ?? "Mathematics");
      setPracticeCase({
        subject: "math",
        chapterLabel:
          activeChapter === "revision"
            ? "Revision"
            : `Chapter ${activeChapter} · ${chapterTitle}`,
        taskId: activeCase.id,
        title: `${activeCase.case_id} · ${activeCase.title}`,
        context: activeCase.context,
        statements: activeCase.statements,
        solutionOverview: activeCase.solution_overview,
        tacticalExplanations: activeCase.tactical_explanations,
        answerKey: activeCase.answer_key,
      });
    } else {
      setPracticeCase(null);
    }
    return () => setPracticeCase(null);
  }, [
    theoryChapter,
    activeCase,
    activeChapter,
    activeIdx,
    tier,
    chapters,
    setPracticeCase,
  ]);

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

  const tierLabel =
    tier === "demo" ? "Demo" : tier === "lite" ? "Lite Course" : "Full Course";

  return (
    <PracticeCalcProvider>
    <div className={PRACTICE_PAGE}>
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className={PRACTICE_HEADER_INNER}>
          <Link
            to={backTo}
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />{" "}
            <span className="hidden sm:inline">{backLabel}</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="font-display text-sm font-bold tracking-tight">Mathematics</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                {tierLabel}
              </span>
            </div>
            <AuthNav />
          </div>
        </div>
      </header>

      <div
        className={cn(
          PRACTICE_BODY_STACK,
          "lg:flex lg:items-start lg:transition-[gap] lg:duration-300 lg:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
          sidebarCollapsed ? "lg:gap-0" : "lg:gap-6",
        )}
      >
          <aside
            className={cn(
              "mb-6 w-full shrink-0 transition-[width,opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:sticky lg:top-20 lg:mb-0 lg:block lg:h-[calc(100vh-6rem)] lg:overflow-hidden lg:will-change-[width,transform]",
              sidebarCollapsed
                ? "hidden lg:pointer-events-none lg:block lg:w-0 lg:-translate-x-4 lg:opacity-0"
                : "lg:w-80 lg:translate-x-0 lg:opacity-100",
              // On phones, hide the chapter list while reading theory so text has the screen.
              theoryChapter !== null && "hidden lg:block",
            )}
            aria-hidden={sidebarCollapsed}
          >
            <div className="flex max-h-[min(70vh,36rem)] flex-col rounded-2xl border border-border bg-card p-3 shadow-sm lg:h-full lg:w-80 lg:max-h-none">
              <div className="mb-2 flex shrink-0 items-center justify-between px-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Chapters
                </span>
                <button
                  type="button"
                  onClick={() => setSidebarCollapsed(true)}
                  className="hidden rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground lg:inline-flex"
                  title="Hide chapters"
                >
                  <PanelLeftClose className="h-3.5 w-3.5" />
                </button>
              </div>

              <ul className="practice-scroll min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
                {chapters.map((ch) => {
                  const list = byChapter.get(ch.num) ?? [];
                  const done = list.filter((c) => progress.passed.includes(c.id)).length;
                  const total = list.length;
                  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                  const isOpen = !!expanded[ch.num];
                  const isActiveCh = activeChapter === ch.num;
                  const hasTheory = mathChapterHasTheory(ch.num);
                  return (
                    <li key={ch.num} className="overflow-hidden rounded-xl border border-transparent">
                      <div
                        className={cn(
                          "flex items-stretch rounded-xl transition-colors",
                          isActiveCh ? "bg-primary/10" : "hover:bg-secondary/70",
                        )}
                      >
                        {hasTheory ? (
                          <>
                            <button
                              type="button"
                              onClick={() => {
                                // Same as Economics: opening the chapter goes to theory first.
                                setExpanded((e) => ({ ...e, [ch.num]: true }));
                                setActiveChapter(ch.num);
                                setTheoryChapter(ch.num);
                              }}
                              className="grid w-9 shrink-0 place-items-center rounded-l-xl text-muted-foreground hover:bg-secondary/60"
                              aria-label="Open learning material"
                              title="Open learning material for this chapter"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  !isOpen && "-rotate-90",
                                )}
                              />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setExpanded((e) => ({ ...e, [ch.num]: true }));
                                setActiveChapter(ch.num);
                                setTheoryChapter(ch.num);
                              }}
                              className="flex min-w-0 flex-1 items-center gap-2 py-2.5 pr-2 text-left hover:bg-secondary/60"
                              title="Open learning material for this chapter"
                            >
                              <div className="flex min-w-0 flex-1 items-center gap-2">
                                <span className="min-w-0 flex-1 truncate text-sm font-bold text-foreground">
                                  {ch.num}. {ch.title}
                                </span>
                                <ChapterProgressRing pct={pct} done={done} total={total} />
                              </div>
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setExpanded((e) => ({ ...e, [ch.num]: !e[ch.num] }));
                              setTheoryChapter(null);
                              setActiveChapter(ch.num);
                            }}
                            className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5 text-left"
                          >
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                                !isOpen && "-rotate-90",
                              )}
                            />
                            <div className="flex min-w-0 flex-1 items-center gap-2">
                              <span className="min-w-0 flex-1 truncate text-sm font-bold text-foreground">
                                {ch.num}. {ch.title}
                              </span>
                              <ChapterProgressRing pct={pct} done={done} total={total} />
                            </div>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              done +
                                list.filter((c) => progress.revision.includes(c.id)).length ===
                              0
                            )
                              return;
                            if (window.confirm(`Reset all progress for Chapter ${ch.num}?`))
                              resetChapter(ch.num);
                          }}
                          title={`Reset Chapter ${ch.num}`}
                          aria-label={`Reset Chapter ${ch.num}`}
                          className="grid w-9 shrink-0 place-items-center rounded-r-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <Collapse open={isOpen}>
                        <ul className="border-t border-border/60 py-1">
                          {list.length === 0 && (
                            <li className="px-4 py-2 text-[11px] text-muted-foreground">
                              No tasks yet.
                            </li>
                          )}
                          {ch.subsections && ch.subsections.length > 0
                            ? ch.subsections.map((sub) => {
                                const subTasks = list
                                  .map((c, i) => ({ c, i }))
                                  .filter(({ c }) => c.subsection === sub.id);
                                if (subTasks.length === 0) return null;
                                const subKey = `${ch.num}:${sub.id}`;
                                const subOpen = expandedSub[subKey] ?? false;
                                const subDone = subTasks.filter(({ c }) =>
                                  progress.passed.includes(c.id),
                                ).length;
                                const subPct =
                                  subTasks.length === 0
                                    ? 0
                                    : Math.round((subDone / subTasks.length) * 100);
                                return (
                                  <li key={sub.id} className="mt-1">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setExpandedSub((e) => ({
                                          ...e,
                                          [subKey]: !subOpen,
                                        }))
                                      }
                                      className="flex w-full items-center gap-2 px-3 py-1.5 pl-6 text-left hover:bg-secondary/50"
                                    >
                                      <ChevronDown
                                        className={cn(
                                          "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
                                          !subOpen && "-rotate-90",
                                        )}
                                      />
                                      <span className="min-w-0 flex-1 truncate text-[11px] font-bold text-foreground">
                                        {sub.title}
                                      </span>
                                      <ChapterProgressRing
                                        pct={subPct}
                                        done={subDone}
                                        total={subTasks.length}
                                      />
                                    </button>
                                    <Collapse open={subOpen}>
                                      <ul className="pb-1">
                                        {subTasks.map(({ c, i }, localI) => {
                                          const passed = progress.passed.includes(c.id);
                                          const rev = progress.revision.includes(c.id);
                                          const active =
                                            isActiveCh && activeList[activeIdx]?.id === c.id;
                                          const locked = isLocked(tier, ch.num, i);
                                          const lockedPos = locked
                                            ? i - freeLimitOf(tier, ch.num)
                                            : -1;
                                          const lockedOpacity = locked
                                            ? Math.max(
                                                0.15,
                                                0.6 - Math.min(lockedPos, 2) * 0.22,
                                              )
                                            : undefined;
                                          return (
                                            <li key={c.id}>
                                              <button
                                                type="button"
                                                onClick={() => {
                                                  setTheoryChapter(null);
                                                  setActiveChapter(ch.num);
                                                  setTimeout(() => setActiveIdx(i), 0);
                                                }}
                                                disabled={locked}
                                                style={
                                                  locked ? { opacity: lockedOpacity } : undefined
                                                }
                                                className={cn(
                                                  "flex w-full items-center gap-2 px-3 py-1.5 pl-12 text-left text-xs transition-colors",
                                                  active
                                                    ? "font-semibold text-primary"
                                                    : "text-foreground hover:bg-secondary/60",
                                                  locked &&
                                                    "cursor-not-allowed text-muted-foreground hover:bg-transparent",
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
                                                  {locked && (
                                                    <Lock className="h-2.5 w-2.5" strokeWidth={2.5} />
                                                  )}
                                                  {!locked && passed && (
                                                    <Check className="h-3 w-3" strokeWidth={3} />
                                                  )}
                                                  {!locked && !passed && rev && (
                                                    <X className="h-3 w-3" strokeWidth={3} />
                                                  )}
                                                </span>
                                                <span
                                                  className={cn(
                                                    "min-w-0 flex-1 truncate",
                                                    passed &&
                                                      !locked &&
                                                      "text-muted-foreground line-through",
                                                  )}
                                                >
                                                  Task {localI + 1}
                                                  {locked && " · Locked"}
                                                </span>
                                                {!locked &&
                                                  !c.placeholder &&
                                                  c.difficulty_level !== "—" && (
                                                    <DifficultyBars level={c.difficulty_level} />
                                                  )}
                                              </button>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </Collapse>
                                  </li>
                                );
                              })
                            : list.map((c, i) => {
                                const passed = progress.passed.includes(c.id);
                                const rev = progress.revision.includes(c.id);
                                const active = isActiveCh && activeList[activeIdx]?.id === c.id;
                                const locked = isLocked(tier, ch.num, i);
                                const lockedPos = locked ? i - freeLimitOf(tier, ch.num) : -1;
                                const lockedOpacity = locked
                                  ? Math.max(0.15, 0.6 - Math.min(lockedPos, 2) * 0.22)
                                  : undefined;
                                return (
                                  <li key={c.id}>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setTheoryChapter(null);
                                        setActiveChapter(ch.num);
                                        setTimeout(() => setActiveIdx(i), 0);
                                      }}
                                      disabled={locked}
                                      style={locked ? { opacity: lockedOpacity } : undefined}
                                      className={cn(
                                        "flex w-full items-center gap-2 px-3 py-1.5 pl-9 text-left text-xs transition-colors",
                                        active
                                          ? "font-semibold text-primary"
                                          : "text-foreground hover:bg-secondary/60",
                                        locked &&
                                          "cursor-not-allowed text-muted-foreground hover:bg-transparent",
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
                                        {!locked && passed && (
                                          <Check className="h-3 w-3" strokeWidth={3} />
                                        )}
                                        {!locked && !passed && rev && (
                                          <X className="h-3 w-3" strokeWidth={3} />
                                        )}
                                      </span>
                                      <span
                                        className={cn(
                                          "min-w-0 flex-1 truncate",
                                          passed && !locked && "text-muted-foreground line-through",
                                        )}
                                      >
                                        Task {i + 1}
                                        {locked && " · Locked"}
                                      </span>
                                      {!locked && !c.placeholder && c.difficulty_level !== "—" && (
                                        <DifficultyBars level={c.difficulty_level} />
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                          {!ch.subsections?.length &&
                            Array.from({ length: phantomCountFor(tier) }).map((_, p) => {
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
                      </Collapse>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 shrink-0 border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setTheoryChapter(null);
                    setActiveChapter("revision");
                  }}
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
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold",
                        revisionCases.length > 0
                          ? "bg-destructive text-destructive-foreground"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      {revisionCases.length}
                    </span>
                  </div>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCustomResetOpen(true)}
                className="mt-2 flex w-full shrink-0 items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <Settings2 className="h-3.5 w-3.5" /> Customize reset
              </button>
            </div>
          </aside>

        <main className="min-w-0 flex-1" data-practice-surface>
          {sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(false)}
              className="mb-4 hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary lg:inline-flex"
            >
              <PanelLeftOpen className="h-3.5 w-3.5" /> Show chapters
            </button>
          )}

          {theoryChapter !== null ? (
            <TheoryReader
              subject="math"
              chapter={theoryChapter}
              title={chapters.find((c) => c.num === theoryChapter)?.title ?? ""}
              onGoToPractice={() => {
                setTheoryChapter(null);
                setActiveChapter(theoryChapter);
                setActiveIdx(0);
              }}
            />
          ) : (
            <>
          {activeChapter === null && (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-bold">Pick a chapter</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                Open a topic on the left to browse mathematics tasks for the WU BBE exam.
              </p>
            </div>
          )}

          {activeChapter !== null && (
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                {activeChapter === "revision"
                  ? "Revision folder"
                  : `Chapter ${activeChapter}`}
              </span>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {activeChapter === "revision"
                  ? "Fix what tripped you up"
                  : chapters.find((c) => c.num === activeChapter)?.title}
              </h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {typeof activeChapter === "number" && mathChapterHasTheory(activeChapter) && (
                  <button
                    type="button"
                    onClick={() => setTheoryChapter(activeChapter)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-2 text-xs font-bold text-foreground hover:bg-secondary sm:px-3 sm:text-sm"
                  >
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="hidden sm:inline">Theory</span>
                  </button>
                )}
                <PracticeCalculatorInline />
              </div>
            </div>
          )}

          {activeChapter !== null && activeList.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              {activeChapter === "revision"
                ? "Nothing to revise — all attempted tasks are clean. Keep going."
                : "No tasks here yet. Content will be added soon."}
            </div>
          )}

          <div key={activeCase?.id ?? "empty-task"} className="practice-panel-enter">
            {activeCase && isLocked(tier, activeChapter, activeIdx) ? (
              <LockedDemoCard
                chapter={activeChapter}
                freeLimit={freeLimitOf(tier, activeChapter)}
                onBack={() => setActiveIdx(freeLimitOf(tier, activeChapter) - 1)}
              />
            ) : activeCase?.placeholder ? (
              <PlaceholderTaskCard
                task={activeCase}
                index={activeIdx}
                chapterTitle={
                  activeChapter === "revision"
                    ? "Revision"
                    : (chapters.find((c) => c.num === activeChapter)?.title ?? "Mathematics")
                }
              />
            ) : activeCase ? (
              <MathTaskCard
                task={activeCase}
                index={activeIdx}
                alreadyPassed={progress.passed.includes(activeCase.id)}
                inRevision={progress.revision.includes(activeCase.id)}
                explanationsOpen={showExplanations}
                onShowExplanations={() => setShowExplanations(true)}
                onToggleExplanations={() => setShowExplanations((v) => !v)}
                onGraded={(result) => {
                  setProgress((prev) => {
                    const next: Progress = {
                      passed: prev.passed.filter((x) => x !== activeCase.id),
                      revision: prev.revision.filter((x) => x !== activeCase.id),
                    };
                    if (result.allCorrect) next.passed = [...next.passed, activeCase.id];
                    else next.revision = [...next.revision, activeCase.id];
                    saveProgress(next);
                    return next;
                  });
                  const chLabel =
                    activeChapter === "revision"
                      ? "Revision"
                      : `Chapter ${activeChapter}`;
                  void recordTaskAttempt({
                    subject: "math",
                    chapter: chLabel,
                    taskKey: `${tier}:${activeCase.case_id || activeCase.id}`,
                    taskTitle: activeCase.title,
                    correctCount: result.correctCount,
                    statementCount: result.statementCount,
                    statementResults: result.statementResults,
                  });
                  void trackEvent({
                    eventType: "task_submit",
                    subject: "math",
                    entityType: "task",
                    entityId: activeCase.id,
                    metadata: {
                      correct: result.correctCount,
                      total: result.statementCount,
                      passed: result.allCorrect,
                    },
                  });
                }}
                onResetProgress={() => {
                  resetCaseIds([activeCase.id]);
                  setShowExplanations(false);
                }}
              />
            ) : null}
          </div>

          {activeList.length > 0 && activeChapter !== null && (
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
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
                type="button"
                onClick={() => setActiveIdx((i) => Math.min(activeList.length - 1, i + 1))}
                disabled={
                  activeIdx >= activeList.length - 1 ||
                  isLocked(tier, activeChapter, activeIdx + 1)
                }
                title={
                  isLocked(tier, activeChapter, activeIdx + 1)
                    ? "Next task is locked in the demo"
                    : undefined
                }
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
              >
                {isLocked(tier, activeChapter, activeIdx + 1) ? (
                  <>
                    <Lock className="h-3.5 w-3.5" /> Locked
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
            </>
          )}
        </main>

        {theoryChapter === null && (
        <MathPracticeAside
          showExplanations={
            showExplanations &&
            !!activeCase &&
            !activeCase.placeholder &&
            !isLocked(tier, activeChapter, activeIdx)
          }
        >
          {showExplanations &&
          activeCase &&
          !activeCase.placeholder &&
          !isLocked(tier, activeChapter, activeIdx) ? (
            <AllExplanationsPanel
              task={activeCase}
              index={activeIdx}
              onClose={() => setShowExplanations(false)}
            />
          ) : null}
        </MathPracticeAside>
        )}
      </div>

      {customResetOpen && (
        <CustomResetModal
          chapters={chapters}
          byChapter={byChapter}
          progress={progress}
          onClose={() => setCustomResetOpen(false)}
          onReset={(ids) => {
            resetCaseIds(ids);
            setCustomResetOpen(false);
          }}
        />
      )}
    </div>
    </PracticeCalcProvider>
  );
}

function parseDifficulty(level: string): { n: number; max: number } {
  const [rawN, rawMax] = level.split("/");
  const max = Math.max(1, Number(rawMax) || 5);
  const n = Math.max(0, Math.min(Number(rawN) || 0, max));
  return { n, max };
}

/** Green → red heat for difficulty 1…5. */
const DIFFICULTY_BAR_COLORS = [
  "bg-emerald-500",
  "bg-lime-500",
  "bg-amber-400",
  "bg-orange-500",
  "bg-red-500",
] as const;

/** Cell-signal bars for the chapter sidebar task list. */
function DifficultyBars({ level }: { level: string }) {
  const { n, max } = parseDifficulty(level);
  const color = DIFFICULTY_BAR_COLORS[Math.max(0, n - 1)] ?? DIFFICULTY_BAR_COLORS[0];
  const heights = ["h-[3px]", "h-[5px]", "h-[7px]", "h-[9px]", "h-[11px]"];
  return (
    <span
      className="inline-flex h-[11px] shrink-0 items-end gap-[2px]"
      title={`Difficulty ${level}`}
      aria-label={`Difficulty ${level}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-[1px]",
            heights[i] ?? "h-[11px]",
            i < n ? color : "bg-muted-foreground/20",
          )}
        />
      ))}
    </span>
  );
}

/** Chapter completion ring — sits to the right of the chapter title. */
function ChapterProgressRing({
  pct,
  done,
  total,
}: {
  pct: number;
  done: number;
  total: number;
}) {
  const size = 28;
  const stroke = 2.5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const complete = total > 0 && pct === 100;
  const dash = (Math.min(Math.max(pct, 0), 100) / 100) * c;
  return (
    <span
      className="relative inline-grid h-7 w-7 shrink-0 place-items-center"
      title={`${done} of ${total} tasks passed (${pct}%)`}
      aria-label={`Chapter progress ${pct} percent`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={cn(
          "absolute inset-0 -rotate-90",
          complete ? "text-emerald-500" : "text-primary",
        )}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="opacity-15"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${Math.max(c - dash, 0)}`}
        />
      </svg>
      <span
        className={cn(
          "relative text-[8px] font-bold tabular-nums leading-none",
          complete ? "text-emerald-600 dark:text-emerald-400" : "text-foreground",
        )}
      >
        {pct}
        <span className="text-[7px] font-semibold opacity-70">%</span>
      </span>
    </span>
  );
}

/** Screenshot-style section titles: "Part 1: …" */
function isSectionHeading(label: string): boolean {
  return /^(What's going on|Part\s*\d+.*|Model|Solve|Answer|Building the system|Given|Rule|Work|Results)(\.|:)?$/i.test(
    label.trim(),
  );
}

/** Numbered step titles: "1. Translate…" or bare "1." */
function isStepLabel(label: string): boolean {
  const t = label.trim();
  return (
    /^\d+\.\s+\S/.test(t) ||
    /^\d+\.\s*$/.test(t) ||
    /^Step\s+\d+\./i.test(t)
  );
}

function isNoteLabel(label: string): boolean {
  return /^Note\.?$/i.test(label.trim());
}

function classifyBoldLabel(label: string): "section" | "step" | "note" | "emphasis" {
  const t = label.trim();
  if (isNoteLabel(t)) return "note";
  if (isSectionHeading(t)) return "section";
  if (isStepLabel(t) || /^[A-E]\)/.test(t)) return "step";
  return "emphasis";
}

function isDisplayMathPara(trimmed: string): boolean {
  return /^\$\$[\s\S]+\$\$$/.test(trimmed) || /^\$[^$\n]+\$\s*$/.test(trimmed);
}

function isStepStartPara(trimmed: string): boolean {
  return /^\*\*(?:Step\s+)?\d+\./i.test(trimmed);
}

function isPartStartPara(trimmed: string): boolean {
  const m = trimmed.match(/^\*\*([^*]+)\*\*\s*$/);
  return !!m && classifyBoldLabel(m[1]) === "section";
}

/**
 * Tutorial prose matching the reference screenshots:
 * Inter body, bold Part / step titles, airy centered KaTeX, Note callouts.
 * Spacing mirrors the samples: ~24–32px between steps, generous air around equations.
 */
function MathProse({ text, className }: { text: string; className?: string }) {
  // Keep blank-line paragraphs, but also split consecutive bullet lines apart.
  const paragraphs = text
    .split(/\n\n+/)
    .flatMap((block) => {
      const trimmed = block.trim();
      if (!trimmed) return [];
      if (/^[•\-]/.test(trimmed) && /\n[•\-]/.test(trimmed)) {
        return trimmed
          .split(/\n(?=[•\-]\s+)/)
          .map((line) => line.trim())
          .filter(Boolean);
      }
      return [trimmed];
    });

  // Group: each numbered step keeps its following prose/math until the next step/part/claim.
  type Chunk =
    | { kind: "part"; title: string }
    | { kind: "sectionLead"; title: string; body: string }
    | { kind: "step"; paras: string[] }
    | { kind: "reason"; number: string; body: string }
    | { kind: "conclusion"; body: string }
    | { kind: "note"; body: string }
    | { kind: "bullet"; body: string }
    | { kind: "claim"; text: string }
    | { kind: "math"; text: string }
    | { kind: "table"; text: string }
    | { kind: "para"; text: string };

  const chunks: Chunk[] = [];
  let i = 0;
  while (i < paragraphs.length) {
    const p = paragraphs[i];

    if (parseMarkdownTable(p)) {
      chunks.push({ kind: "table", text: p });
      i += 1;
      continue;
    }

    if (isDisplayMathPara(p) && (chunks.length === 0 || chunks[chunks.length - 1].kind !== "step")) {
      chunks.push({ kind: "math", text: p });
      i += 1;
      continue;
    }

    const headerOnly = p.match(/^\*\*([^*]+)\*\*\s*$/);
    if (headerOnly && classifyBoldLabel(headerOnly[1]) === "section") {
      chunks.push({ kind: "part", title: headerOnly[1].replace(/[.!:]+$/, "") });
      i += 1;
      continue;
    }

    const conclusionLead = p.match(/^\*\*Conclusion:\*\*\s*([\s\S]*)$/i);
    if (conclusionLead) {
      chunks.push({ kind: "conclusion", body: conclusionLead[1] });
      i += 1;
      continue;
    }

    const sectionLead = p.match(/^\*\*([^*\n]{1,40}?):\*\*\s*([\s\S]+)$/);
    if (sectionLead) {
      chunks.push({
        kind: "sectionLead",
        title: sectionLead[1].trim(),
        body: sectionLead[2],
      });
      i += 1;
      continue;
    }

    const noteLead = p.match(/^\*\*(Note\.?)\*\*\s*([\s\S]*)$/i);
    if (noteLead) {
      chunks.push({ kind: "note", body: noteLead[2] });
      i += 1;
      continue;
    }

    const bulletLead = p.match(/^[•\-]\s+([\s\S]+)$/);
    if (bulletLead) {
      chunks.push({ kind: "bullet", body: bulletLead[1] });
      i += 1;
      continue;
    }

    if (/^\*\*[A-F][.)]/.test(p)) {
      chunks.push({ kind: "claim", text: p });
      i += 1;
      continue;
    }

    const reason = p.match(/^(\d+)\)\s*([\s\S]*)$/);
    if (reason) {
      chunks.push({ kind: "reason", number: reason[1], body: reason[2] });
      i += 1;
      continue;
    }

    if (isStepStartPara(p)) {
      const paras = [p];
      i += 1;
      while (i < paragraphs.length) {
        const nxt = paragraphs[i];
        if (
          isStepStartPara(nxt) ||
          isPartStartPara(nxt) ||
          /^\*\*[A-F][.)]/.test(nxt) ||
          /^\*\*(Note\.?)\*\*/i.test(nxt)
        ) {
          break;
        }
        paras.push(nxt);
        i += 1;
      }
      chunks.push({ kind: "step", paras });
      continue;
    }

    chunks.push({ kind: "para", text: p });
    i += 1;
  }

  return (
    <div
      className={cn(
        "font-expl text-[15px] leading-[1.6] text-[#1f1f1f] sm:text-[15.5px]",
        "[&_.katex]:text-[1.12em]",
        className,
      )}
    >
      {chunks.map((chunk, idx) => {
        if (chunk.kind === "part") {
          return (
            <h4
              key={idx}
              className="mb-3 mt-9 text-[16.5px] font-bold leading-snug tracking-tight text-[#111] first:mt-0 sm:text-[17.5px]"
            >
              {chunk.title}
            </h4>
          );
        }

        if (chunk.kind === "sectionLead") {
          return (
            <div key={idx} className="mb-5 mt-6 first:mt-0">
              <p className="mb-1 font-bold leading-snug text-[#111]">
                <RichMathLine text={chunk.title} />
              </p>
              <p className="m-0 leading-[1.65]">
                <RichMathLine text={chunk.body} />
              </p>
            </div>
          );
        }

        if (chunk.kind === "note") {
          return (
            <aside
              key={idx}
              className="my-6 border-l-[3px] border-[#c4c4c4] py-1.5 pl-4 text-[14.5px] font-semibold italic leading-[1.6] text-[#2a2a2a]"
            >
              <span className="font-bold">Note: </span>
              <RichMathLine text={chunk.body} />
            </aside>
          );
        }

        if (chunk.kind === "bullet") {
          return (
            <div key={idx} className="mb-1.5 flex gap-2.5 leading-[1.65]">
              <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1f]" />
              <p className="m-0 min-w-0 flex-1">
                <RichMathLine text={chunk.body} />
              </p>
            </div>
          );
        }

        if (chunk.kind === "claim") {
          return (
            <p
              key={idx}
              className="mb-3 mt-10 text-[15.5px] font-bold leading-snug text-[#111] first:mt-0 sm:text-[16.5px]"
            >
              <RichMathLine text={chunk.text} />
            </p>
          );
        }

        if (chunk.kind === "reason") {
          return (
            <div
              key={idx}
              className="mb-2.5 flex gap-2 leading-[1.65] last:mb-0"
            >
              <span className="shrink-0 font-bold text-[#111]">
                {chunk.number})
              </span>
              <p className="m-0 min-w-0 flex-1 leading-[1.65]">
                <RichMathLine text={chunk.body} />
              </p>
            </div>
          );
        }

        if (chunk.kind === "conclusion") {
          return (
            <p key={idx} className="mb-7 mt-3 font-bold leading-[1.6] text-[#111]">
              <span>Conclusion: </span>
              <RichMathLine text={chunk.body} />
            </p>
          );
        }

        if (chunk.kind === "math") {
          return (
            <div key={idx} className="my-5">
              <FlashcardMath text={chunk.text} displayPrefer />
            </div>
          );
        }

        if (chunk.kind === "table") {
          const table = parseMarkdownTable(chunk.text);
          return table ? (
            <div key={idx} className="my-5 overflow-x-auto text-[14px]">
              <MarkdownTable data={table} />
            </div>
          ) : null;
        }

        if (chunk.kind === "step") {
          return (
            <div key={idx} className="mb-6 mt-5 first:mt-2">
              {chunk.paras.map((para, j) => {
                if (isDisplayMathPara(para)) {
                  return (
                    <div key={j} className="my-5">
                      <FlashcardMath text={para} displayPrefer />
                    </div>
                  );
                }
                // First line of step = bold title (+ optional rest); hang following prose slightly
                return (
                  <p
                    key={j}
                    className={cn(
                      "m-0 leading-[1.6]",
                      j === 0 ? "mb-2" : "mt-3",
                      j > 0 && "pl-0",
                    )}
                  >
                    <RichMathLine text={para} />
                  </p>
                );
              })}
            </div>
          );
        }

        return (
          <p key={idx} className="mb-4 mt-0 leading-[1.6]">
            <RichMathLine text={chunk.text} />
          </p>
        );
      })}
    </div>
  );
}

function parseMarkdownTable(block: string): string[][] | null {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return null;
  if (!lines.every((l) => l.startsWith("|") && l.endsWith("|"))) return null;
  const rows = lines
    .filter((l) => !/^\|\s*:?-{3,}/.test(l.replace(/\|/g, "|")))
    .filter((l) => !/^(\|\s*:?-+:?\s*)+\|$/.test(l))
    .map((l) =>
      l
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim()),
    );
  return rows.length >= 1 ? rows : null;
}

function MarkdownTable({ data }: { data: string[][] }) {
  if (!data.length) return null;
  const [header, ...body] = data;
  return (
    <table className="w-full min-w-[20rem] border-collapse overflow-hidden rounded-xl border border-foreground/20 text-left text-[14px] shadow-sm">
      <thead>
        <tr className="bg-foreground text-background">
          {header.map((cell, i) => (
            <th
              key={i}
              className="border-b border-foreground/20 px-3 py-2.5 text-[12px] font-bold uppercase tracking-wide"
            >
              <RichMathLine text={cell} />
            </th>
          ))}
        </tr>
      </thead>
      {body.length > 0 && (
        <tbody>
          {body.map((row, ri) => (
            <tr
              key={ri}
              className={cn(
                "border-b border-border last:border-b-0",
                ri % 2 === 0 ? "bg-card" : "bg-secondary/40",
              )}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-3 py-2.5 text-[14px] leading-snug text-foreground",
                    ci === 0 && "font-semibold",
                  )}
                >
                  <RichMathLine text={cell || "—"} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

function RichMathLine({ text }: { text: string }) {
  /**
   * Bold/italic only — never regex-pair `$…$` here.
   * FlashcardMath owns currency vs KaTeX. We mask $ regions first so `**`
   * splitting cannot cut through math/currency.
   */
  const bag: string[] = [];
  const stash = (whole: string) => {
    const key = `¤R${bag.length}¤`;
    bag.push(whole);
    return key;
  };

  // Walk like FlashcardMath: $$ , escaped \$, currency-or-math $ , else copy
  let masked = "";
  const src = text;
  let i = 0;
  while (i < src.length) {
    if (src.startsWith("$$", i)) {
      const end = src.indexOf("$$", i + 2);
      if (end !== -1) {
        masked += stash(src.slice(i, end + 2));
        i = end + 2;
        continue;
      }
    }
    if (src[i] === "\\" && src[i + 1] === "$") {
      masked += stash("\\$");
      i += 2;
      continue;
    }
    if (src[i] === "$") {
      const currency = src
        .slice(i)
        .match(
          /^\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/,
        );
      if (currency) {
        const after = indexOfUnescapedDollar(src, i + currency[0].length);
        const between = after === -1 ? "" : src.slice(i + 1, after);
        const asMath =
          after !== -1 &&
          /[=<>≠≤≥+×·\-/^\\()_]/.test(between) &&
          !between.includes("|") &&
          !/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(between) &&
          !/\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned)\b/i.test(
            between.replace(/\\[a-zA-Z]+/g, " "),
          ) &&
          !(
            /[A-Za-z]{4,}/.test(between) &&
            !/[=<>≠≤≥]/.test(between) &&
            !/\\[a-zA-Z]+/.test(between)
          );
        if (!asMath) {
          masked += stash(currency[0]);
          i += currency[0].length;
          continue;
        }
      }
      const end = indexOfUnescapedDollar(src, i + 1);
      if (end !== -1) {
        masked += stash(src.slice(i, end + 1));
        i = end + 1;
        continue;
      }
    }
    masked += src[i];
    i += 1;
  }

  const parts: { kind: "text" | "bold" | "italic"; value: string }[] = [];
  const simple = /(\*\*[^*]+?\*\*|\*[^*\n]+?\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = simple.exec(masked))) {
    if (m.index > last) parts.push({ kind: "text", value: masked.slice(last, m.index) });
    const raw = m[0];
    if (raw.startsWith("**")) {
      parts.push({ kind: "bold", value: raw.slice(2, -2) });
    } else {
      parts.push({ kind: "italic", value: raw.slice(1, -1) });
    }
    last = m.index + raw.length;
  }
  if (last < masked.length) parts.push({ kind: "text", value: masked.slice(last) });
  if (parts.length === 0) parts.push({ kind: "text", value: masked });

  const restore = (s: string) => s.replace(/¤R(\d+)¤/g, (_, idx) => bag[Number(idx)] ?? "");

  return (
    <span>
      {parts.map((p, idx) => {
        const value = restore(p.value);
        if (p.kind === "bold") {
          const kind = classifyBoldLabel(value);
          if (kind === "section") {
            return (
              <strong key={idx} className="font-bold text-[#111]">
                {value.replace(/[.!:]+$/, "")}.{" "}
              </strong>
            );
          }
          if (kind === "step") {
            return (
              <strong key={idx} className="font-bold text-[#111]">
                <FlashcardMath text={value} />
              </strong>
            );
          }
          if (kind === "note") {
            return (
              <strong key={idx} className="font-bold text-[#111]">
                Note:{" "}
              </strong>
            );
          }
          return (
            <strong key={idx} className="font-bold text-[#111]">
              <FlashcardMath text={value} />
            </strong>
          );
        }
        if (p.kind === "italic") {
          return (
            <em key={idx} className="italic text-[#444]">
              <FlashcardMath text={value} />
            </em>
          );
        }
        return <FlashcardMath key={idx} text={value} />;
      })}
    </span>
  );
}

function MathPracticeAside({
  showExplanations,
  children,
}: {
  showExplanations: boolean;
  children: ReactNode;
}) {
  const calc = usePracticeCalcOptional();
  if (!showExplanations && !calc?.open) return null;
  return (
    <PracticeRightSlot className="lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:w-[28rem] lg:shrink-0 xl:w-[32rem] 2xl:w-[36rem]">
      {children}
    </PracticeRightSlot>
  );
}

function AllExplanationsPanel({
  task,
  index,
  onClose,
}: {
  task: MathTask;
  index: number;
  onClose: () => void;
}) {
  const letters = "ABCDEF";
  const body = [
    task.solution_overview?.trim() ?? "",
    "",
    ...task.statements.flatMap((_, i) => {
      const letter = letters[i] ?? String(i + 1);
      const verdict = task.answer_key[i] ? "True" : "False";
      let expl = (task.tactical_explanations[i] ?? "").trim();
      if (expl) {
        // Always bind panel block i to statement i / answer_key[i], Ch4/Ch13 header.
        expl = expl.replace(/^\*\*[A-F]\.\*\*\s*→\s*(?:True|False)\s*/i, "").trim();
        return [`**${letter}.** → ${verdict}\n\n${expl}`, ""];
      }
      return [
        `**${letter}.** → ${verdict}\n\n${task.statements[i]}`,
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
          <h3 className="mt-0.5 truncate font-display text-sm font-bold">
            <FlashcardMath text={task.title} />
          </h3>
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
        <MathAnswerKeyTable answerKey={task.answer_key} />
        <MathProse text={body} />
      </div>
    </div>
  );
}

function MathAnswerKeyTable({ answerKey }: { answerKey: boolean[] }) {
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

function LockedDemoCard({
  chapter,
  freeLimit,
  onBack,
}: {
  chapter: number | "revision" | null;
  freeLimit: number;
  onBack: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
        <Lock className="h-6 w-6" />
      </div>
      <h2 className="font-display text-xl font-bold">Locked in demo</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
        Chapter {chapter} tasks {freeLimit + 1}+ are part of the full course. The first{" "}
        {freeLimit} are free.
      </p>
      <button
        type="button"
        onClick={onBack}
        className="mt-5 inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Task {freeLimit}
      </button>
    </div>
  );
}

function MathTaskCard({
  task,
  index,
  alreadyPassed,
  inRevision,
  explanationsOpen,
  onShowExplanations,
  onToggleExplanations,
  onGraded,
  onResetProgress,
}: {
  task: MathTask;
  index: number;
  alreadyPassed: boolean;
  inRevision: boolean;
  explanationsOpen: boolean;
  onShowExplanations: () => void;
  onToggleExplanations: () => void;
  onGraded: (result: {
    allCorrect: boolean;
    correctCount: number;
    statementCount: number;
    statementResults: { statement_index: number; correct: boolean }[];
  }) => void;
  onResetProgress: () => void;
}) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(() =>
    task.statements.map(() => null),
  );
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAnswers(task.statements.map(() => null));
    setChecked(false);
  }, [task.id, task.statements]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = task.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    const statementResults = task.answer_key.map((key, i) => ({
      statement_index: i,
      correct: (answers[i] === true) === key,
    }));
    onGraded({
      allCorrect: correctCount === task.answer_key.length,
      correctCount,
      statementCount: task.answer_key.length,
      statementResults,
    });
    onShowExplanations();
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers(task.statements.map(() => null));
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task {index + 1}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {task.case_id}
        </span>
        {task.subsection && (
          <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
            {task.subsection}
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
            type="button"
            onClick={() => {
              handleReset();
              onResetProgress();
            }}
            title="Reset this task"
            aria-label="Reset this task"
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            <RotateCcw className="h-3 w-3" /> Reset task
          </button>
        )}
      </div>

      <h2 className="font-display text-lg font-bold tracking-tight">
        <FlashcardMath text={task.title} />
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
        <MathProse text={task.context} className="text-sm" />
        {task.figure ? (
          <img
            src={task.figure}
            alt=""
            className="mx-auto mt-3 max-h-80 w-full max-w-lg rounded-xl border border-border bg-white object-contain p-2"
          />
        ) : null}
        {task.tables_markdown ? (
          <div className="overflow-x-auto rounded-xl">
            <MathProse text={task.tables_markdown} className="text-sm" />
          </div>
        ) : null}
      </div>

      <ol className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
        <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span className="w-6 text-center">#</span>
          <span className="flex-1">Statement</span>
          <span className="w-14 text-center">True</span>
          {checked && <span className="w-6" aria-hidden />}
        </li>
        {task.statements.map((stmt, i) => {
          const isChecked = answers[i] === true;
          const correctAns = task.answer_key[i];
          const isCorrect = checked && isChecked === correctAns;
          return (
            <li
              key={i}
              className="px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                  {String.fromCharCode(65 + i)}.
                </span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  <FlashcardMath text={stmt} />
                </p>
                <div className="flex w-14 justify-center">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={`Mark statement ${String.fromCharCode(65 + i)} as true`}
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
          {!checked ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Check Answers / Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Try again
            </button>
          )}
          {checked && (
            <button
              type="button"
              onClick={onToggleExplanations}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-4 py-2.5 text-sm font-semibold transition-all",
                explanationsOpen
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:bg-secondary",
              )}
            >
              <Sparkles className="h-4 w-4" />
              {explanationsOpen ? "Hide Explanation" : "Explanation"}
            </button>
          )}
        </div>
        {checked && (
          <span className="text-sm font-semibold text-muted-foreground">
            {correctCount}/{task.answer_key.length} correct
          </span>
        )}
      </div>
    </article>
  );
}

function PlaceholderTaskCard({
  task,
  index,
  chapterTitle,
}: {
  task: MathTask;
  index: number;
  chapterTitle: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task {index + 1}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {task.case_id}
        </span>
      </div>
      <h2 className="font-display text-lg font-bold tracking-tight">{chapterTitle}</h2>
      <div className="mt-6 rounded-xl border border-dashed border-border bg-background/60 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-secondary text-muted-foreground">
          <BookOpen className="h-5 w-5" />
        </div>
        <p className="text-sm font-semibold text-foreground">Task content coming soon</p>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
          Practice statements for this mathematics topic will be added here. The chapter
          structure is ready — check back for new tasks.
        </p>
      </div>
    </article>
  );
}

function CustomResetModal({
  chapters,
  byChapter,
  progress,
  onClose,
  onReset,
}: {
  chapters: MathChapter[];
  byChapter: Map<number, MathTask[]>;
  progress: Progress;
  onClose: () => void;
  onReset: (ids: string[]) => void;
}) {
  const attempted = (c: MathTask) =>
    progress.passed.includes(c.id) || progress.revision.includes(c.id);
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
      list.forEach((c) => {
        next[c.id] = !allOn;
      });
      return next;
    });
  };

  const chosenIds = Object.entries(selected)
    .filter(([, v]) => v)
    .map(([k]) => k);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="border-b border-border px-5 py-4">
          <h2 className="font-display text-lg font-bold">Customize reset</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Select attempted tasks to clear from your progress.
          </p>
        </div>
        <div className="flex-1 space-y-2 overflow-y-auto px-5 py-4">
          {chapters.map((ch) => {
            const list = (byChapter.get(ch.num) ?? []).filter(attempted);
            if (list.length === 0) return null;
            const isOpen = !!openCh[ch.num];
            return (
              <div key={ch.num} className="rounded-xl border border-border">
                <div className="flex items-stretch">
                  <button
                    type="button"
                    onClick={() => setOpenCh((o) => ({ ...o, [ch.num]: !o[ch.num] }))}
                    className="flex flex-1 items-center gap-2 px-3 py-2.5 text-left text-sm font-semibold hover:bg-secondary/60"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform",
                        !isOpen && "-rotate-90",
                      )}
                    />
                    {ch.num}. {ch.title}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleChapter(ch.num)}
                    className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground"
                  >
                    Toggle
                  </button>
                </div>
                {isOpen && (
                  <ul className="border-t border-border/60 py-1">
                    {list.map((c, i) => {
                      const passed = progress.passed.includes(c.id);
                      const rev = progress.revision.includes(c.id);
                      return (
                        <li key={c.id}>
                          <label className="flex cursor-pointer items-center gap-2.5 px-3 py-1.5 pl-9 text-xs hover:bg-secondary/60">
                            <input
                              type="checkbox"
                              checked={!!selected[c.id]}
                              onChange={() => toggle(c.id)}
                              className="h-3.5 w-3.5 rounded border-border"
                            />
                            <span className="flex-1 truncate">
                              <span className="font-semibold">Task {i + 1}</span>
                              <span className="ml-2 text-muted-foreground">{c.case_id}</span>
                            </span>
                            {passed && (
                              <span className="text-[10px] font-bold text-emerald-600">
                                passed
                              </span>
                            )}
                            {rev && (
                              <span className="text-[10px] font-bold text-destructive">
                                revision
                              </span>
                            )}
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
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
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
