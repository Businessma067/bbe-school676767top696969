import { recordTaskAttempt } from "@/lib/user-progress";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnnotatablePassage } from "@/components/AnnotatablePassage";
import { AuthNav } from "@/components/AuthNav";
import { PracticeCalcProvider } from "@/components/calculator/PracticeCalcContext";
import { PracticeCalculatorInline, PracticeRightSlot } from "@/components/calculator/Ti30MathPrint";
import { PRACTICE_BODY_STACK, PRACTICE_HEADER_INNER, PRACTICE_PAGE } from "@/lib/practice-layout";
import { cn } from "@/lib/utils";
import {
  DEMO_ENGLISH_FREE_LIMIT,
  englishChaptersForTier,
  passageForTask,
  type EnglishChapter,
  type EnglishTask,
  type EnglishTasksTier,
} from "@/data/english-chapters";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  BookOpen,
  AlertTriangle,
  Lock,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

type Progress = { passed: string[]; revision: string[] };

const STORAGE_KEY = "bbe.english.course.progress.v1";

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

function freeLimitOf(tier: EnglishTasksTier): number {
  if (tier === "demo") return DEMO_ENGLISH_FREE_LIMIT;
  return Number.POSITIVE_INFINITY;
}

function isLocked(tier: EnglishTasksTier, idx: number) {
  return idx >= freeLimitOf(tier);
}

type Props = {
  tier: EnglishTasksTier;
  backTo: string;
  backLabel?: string;
};

type ExplanationState = {
  key: string;
  caseId: string;
  statementIndex: number;
  statementText: string;
  correctAnswer: boolean;
  highlight: string;
};

export function EnglishTasksPage({ tier, backTo, backLabel = "All subjects" }: Props) {
  const chapters = useMemo(() => englishChaptersForTier(tier), [tier]);
  const [activeChapter, setActiveChapter] = useState<EnglishChapter["key"] | "revision" | null>(
    null,
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(chapters.map((c) => [c.key, false])),
  );
  const [expandedSub, setExpandedSub] = useState<Record<string, boolean>>({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [explanation, setExplanation] = useState<ExplanationState | null>(null);

  useEffect(() => {
    setActiveIdx(0);
    setExplanation(null);
  }, [activeChapter]);

  useEffect(() => {
    setExplanation(null);
  }, [activeIdx]);

  const byChapter = useMemo(() => {
    const map = new Map<EnglishChapter["key"], EnglishTask[]>();
    chapters.forEach((c) => map.set(c.key, c.tasks));
    return map;
  }, [chapters]);

  const revisionCases = useMemo(
    () => chapters.flatMap((c) => c.tasks).filter((t) => progress.revision.includes(t.id)),
    [chapters, progress.revision],
  );

  const activeList: EnglishTask[] =
    activeChapter === "revision"
      ? revisionCases
      : activeChapter === null
        ? []
        : (byChapter.get(activeChapter) ?? []);
  const activeCase = activeList[activeIdx];
  const activePassage = passageForTask(activeCase, chapters);
  const isTextsCase =
    !!activeCase &&
    (activeChapter === "texts" ||
      activeCase.kind === "reading" ||
      !!activeCase.passage ||
      !!activePassage);

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

  const resetChapter = (key: EnglishChapter["key"]) => {
    const list = byChapter.get(key) ?? [];
    resetCaseIds(list.map((c) => c.id));
  };

  const recordResult = (id: string, allCorrect: boolean) => {
    setProgress((prev) => {
      const passed = new Set(prev.passed);
      const revision = new Set(prev.revision);
      if (allCorrect) {
        passed.add(id);
        revision.delete(id);
      } else {
        revision.add(id);
        passed.delete(id);
      }
      const next = { passed: [...passed], revision: [...revision] };
      saveProgress(next);
      return next;
    });
  };

  const requestExplanation = (t: EnglishTask, i: number) => {
    const key = `${t.id}:${i}`;
    if (explanation?.key === key) return;
    setExplanation({
      key,
      caseId: t.id,
      statementIndex: i,
      statementText: t.statements[i] ?? "",
      correctAnswer: !!t.answer_key[i],
      highlight: t.highlights[i] ?? "",
    });
  };

  const tierLabel =
    tier === "demo" ? "Demo" : tier === "lite" ? "Lite Course" : "Full Course";

  const chapterTitle =
    activeChapter === "revision"
      ? "Fix what tripped you up"
      : chapters.find((c) => c.key === activeChapter)?.title;

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
                <span className="font-display text-sm font-bold tracking-tight">English</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                  {tierLabel} · Texts · Grammar · Vocabulary
                </span>
              </div>
              <AuthNav />
            </div>
          </div>
        </header>

        <div className={cn(PRACTICE_BODY_STACK, "lg:flex lg:items-start lg:gap-6")}>
          {!sidebarCollapsed && (
            <aside className="mb-6 w-full shrink-0 lg:sticky lg:top-20 lg:mb-0 lg:h-[calc(100vh-6rem)] lg:w-80 2xl:w-96">
              <div className="flex max-h-[min(70vh,36rem)] flex-col rounded-2xl border border-border bg-card p-3 shadow-sm lg:h-full lg:max-h-none">
                <div className="mb-2 flex shrink-0 items-center justify-between px-1">
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" /> Chapters
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

                <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
                  {chapters.map((ch) => {
                    const list = byChapter.get(ch.key) ?? [];
                    const done = list.filter((c) => progress.passed.includes(c.id)).length;
                    const total = list.length;
                    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                    const isOpen = !!expanded[ch.key];
                    const isActiveCh = activeChapter === ch.key;
                    return (
                      <li key={ch.key} className="overflow-hidden rounded-xl border border-transparent">
                        <div
                          className={cn(
                            "flex items-stretch rounded-xl transition-colors",
                            isActiveCh ? "bg-primary/10" : "hover:bg-secondary/70",
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setExpanded((e) => ({ ...e, [ch.key]: !e[ch.key] }));
                              setActiveChapter(ch.key);
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
                              if (window.confirm(`Reset all progress for ${ch.title}?`))
                                resetChapter(ch.key);
                            }}
                            title={`Reset ${ch.title}`}
                            aria-label={`Reset ${ch.title}`}
                            className="grid w-9 shrink-0 place-items-center rounded-r-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        {isOpen && (
                          <ul className="border-t border-border/60 py-1">
                            {list.length === 0 && (
                              <li className="px-4 py-2 text-[11px] text-muted-foreground">
                                No tasks yet.
                              </li>
                            )}
                            {ch.subsections.length > 0
                              ? ch.subsections.map((sub) => {
                                  const subTasks = list
                                    .map((c, i) => ({ c, i }))
                                    .filter(({ c }) => c.subsection === sub.id);
                                  if (subTasks.length === 0) return null;
                                  const subKey = `${ch.key}:${sub.id}`;
                                  const subOpen = expandedSub[subKey] ?? true;
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
                                          {sub.id} {sub.title}
                                        </span>
                                        <ChapterProgressRing
                                          pct={subPct}
                                          done={subDone}
                                          total={subTasks.length}
                                        />
                                      </button>
                                      {subOpen && (
                                        <ul className="pb-1">
                                          {subTasks.map(({ c, i }, localI) => {
                                            const passed = progress.passed.includes(c.id);
                                            const rev = progress.revision.includes(c.id);
                                            const active =
                                              isActiveCh && activeList[activeIdx]?.id === c.id;
                                            const locked = isLocked(tier, i);
                                            const lockedPos = locked
                                              ? i - freeLimitOf(tier)
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
                                                    setActiveChapter(ch.key);
                                                    setTimeout(() => setActiveIdx(i), 0);
                                                  }}
                                                  disabled={locked}
                                                  style={
                                                    locked
                                                      ? { opacity: lockedOpacity }
                                                      : undefined
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
                                                      <Lock
                                                        className="h-2.5 w-2.5"
                                                        strokeWidth={2.5}
                                                      />
                                                    )}
                                                    {!locked && passed && (
                                                      <Check
                                                        className="h-3 w-3"
                                                        strokeWidth={3}
                                                      />
                                                    )}
                                                    {!locked && !passed && rev && (
                                                      <X
                                                        className="h-3 w-3"
                                                        strokeWidth={3}
                                                      />
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
                                                  {!locked && c.difficulty_level !== "—" && (
                                                    <DifficultyBars
                                                      level={c.difficulty_level}
                                                    />
                                                  )}
                                                </button>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                })
                              : list.map((c, i) => {
                                  const passed = progress.passed.includes(c.id);
                                  const rev = progress.revision.includes(c.id);
                                  const active =
                                    isActiveCh && activeList[activeIdx]?.id === c.id;
                                  const locked = isLocked(tier, i);
                                  return (
                                    <li key={c.id}>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveChapter(ch.key);
                                          setTimeout(() => setActiveIdx(i), 0);
                                        }}
                                        disabled={locked}
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
                                          Task {i + 1}
                                          {locked && " · Locked"}
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

                <div className="mt-3 shrink-0 border-t border-border pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveChapter("revision")}
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
              </div>
            </aside>
          )}

          <main className="min-w-0 flex-1">
            {sidebarCollapsed && (
              <button
                type="button"
                onClick={() => setSidebarCollapsed(false)}
                className="mb-4 hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary lg:inline-flex"
              >
                <PanelLeftOpen className="h-3.5 w-3.5" /> Show chapters
              </button>
            )}

            {activeChapter === null && (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="font-display text-xl font-bold">Pick a chapter</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Open Texts, Grammar, or Vocabulary on the left to browse English tasks for the WU
                  BBE exam.
                </p>
              </div>
            )}

            {activeChapter !== null && (
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                    {activeChapter === "revision"
                      ? "Revision folder"
                      : `Chapter ${chapters.find((c) => c.key === activeChapter)?.num}`}
                  </span>
                  <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {chapterTitle}
                  </h1>
                </div>
                <PracticeCalculatorInline />
              </div>
            )}

            {activeChapter !== null && activeList.length === 0 && (
              <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
                {activeChapter === "revision"
                  ? "Nothing to revise — all attempted tasks are clean. Keep going."
                  : "No tasks here yet. Content will be added soon."}
              </div>
            )}

            {activeCase && isLocked(tier, activeIdx) ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-muted-foreground">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="font-display text-xl font-bold">Locked in demo</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Tasks {freeLimitOf(tier) + 1}+ are part of the full course. The first{" "}
                  {freeLimitOf(tier)} are free.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveIdx(freeLimitOf(tier) - 1)}
                  className="mt-5 inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to Task {freeLimitOf(tier)}
                </button>
              </div>
            ) : activeCase ? (
              <CaseCard
                key={activeCase.id}
                data={activeCase}
                index={activeIdx}
                passage={isTextsCase ? activePassage : ""}
                inRevision={progress.revision.includes(activeCase.id)}
                alreadyPassed={progress.passed.includes(activeCase.id)}
                isTexts={isTextsCase}
                activeExplanationIndex={
                  explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                }
                onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                onGraded={(ok, correctCount) => {
                  recordResult(activeCase.id, ok);
                  const chLabel =
                    activeChapter && activeChapter !== "revision"
                      ? chapters.find((c) => c.key === activeChapter)?.title ?? activeChapter
                      : "Revision";
                  void recordTaskAttempt({
                    subject: "english",
                    chapter: chLabel,
                    taskKey: `${tier}:${activeCase.case_id || activeCase.id}`,
                    taskTitle: activeCase.title,
                    correctCount,
                    statementCount: activeCase.answer_key.length || activeCase.statements.length,
                  });
                }}
                onResetProgress={() => resetCaseIds([activeCase.id])}
              />
            ) : null}

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
                    activeIdx >= activeList.length - 1 || isLocked(tier, activeIdx + 1)
                  }
                  className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
                >
                  {isLocked(tier, activeIdx + 1) ? (
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
          </main>

          <PracticeRightSlot>
            {isTextsCase ? (
              <ReadingPanel
                passage={activePassage}
                storageKey={`english-course:${activeCase?.subsection ?? "none"}`}
                explanation={explanation}
                onClose={() => setExplanation(null)}
              />
            ) : (
              <GrammarExplanationPanel
                explanation={explanation}
                tactical={
                  activeCase && explanation?.caseId === activeCase.id
                    ? (activeCase.tactical_explanations[explanation.statementIndex] ?? "")
                    : ""
                }
                onClose={() => setExplanation(null)}
              />
            )}
          </PracticeRightSlot>
        </div>
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

const DIFFICULTY_BAR_COLORS = [
  "bg-emerald-500",
  "bg-lime-500",
  "bg-amber-400",
  "bg-orange-500",
  "bg-red-500",
] as const;

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

function CaseCard({
  data,
  index,
  passage,
  onGraded,
  inRevision,
  alreadyPassed,
  onResetProgress,
  isTexts,
  activeExplanationIndex,
  onRequestExplanation,
}: {
  data: EnglishTask;
  index: number;
  passage: string;
  onGraded: (allCorrect: boolean, correctCount: number) => void;
  inRevision: boolean;
  alreadyPassed: boolean;
  onResetProgress: () => void;
  isTexts: boolean;
  activeExplanationIndex: number | null;
  onRequestExplanation: (i: number) => void;
}) {
  const n = data.statements.length;
  const [answers, setAnswers] = useState<(boolean | null)[]>(() =>
    data.statements.map(() => null),
  );
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setAnswers(data.statements.map(() => null));
    setChecked(false);
    setOpenExpl({});
  }, [data.id, data.statements]);

  const setAt = (i: number, v: boolean) => {
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  };

  const correctCount = data.answer_key.reduce<number>(
    (acc, key, i) => acc + ((answers[i] === true) === key ? 1 : 0),
    0,
  );

  const handleSubmit = () => {
    setChecked(true);
    onGraded(correctCount === data.answer_key.length, correctCount);
  };

  const handleReset = () => {
    setChecked(false);
    setAnswers(data.statements.map(() => null));
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
        {data.case_id && (
          <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
            {data.case_id}
          </span>
        )}
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
            type="button"
            onClick={handleFullReset}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            <RotateCcw className="h-3 w-3" /> Reset task
          </button>
        )}
      </div>

      {data.exam_title && (
        <p className="mb-2 text-sm font-semibold text-foreground">{data.exam_title}</p>
      )}
      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {data.context}
      </p>

      {isTexts && passage && (
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-[#fdf9f0] lg:hidden">
          <div className="border-b border-border/60 bg-white/60 px-4 py-2">
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-taupe">
              <BookOpen className="h-3.5 w-3.5" /> Reading Text
            </span>
          </div>
          <div className="max-h-72 overflow-y-auto px-4 py-3 font-serif text-[13px] leading-relaxed text-[#3a2e1f]">
            <AnnotatablePassage
              passage={passage}
              storageKey={`english-course-inline:${data.subsection ?? data.id}`}
            />
          </div>
        </div>
      )}

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
          const isCorrect = checked && isChecked === correctAns;
          return (
            <li key={i} className="px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                  {i + 1}.
                </span>
                <p className="flex-1 text-sm leading-relaxed text-foreground">{stmt}</p>
                <div className="flex w-14 justify-center">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
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
                  >
                    {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                )}
              </div>

              {checked && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenExpl((s) => ({ ...s, [i]: !s[i] }))}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
                  >
                    Explanation
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openExpl[i] && "rotate-180",
                      )}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => onRequestExplanation(i)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                      activeExplanationIndex === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
                    )}
                  >
                    <Sparkles className="h-3 w-3" />
                    {isTexts
                      ? activeExplanationIndex === i
                        ? "Highlighted in passage →"
                        : "Show AI text explanation"
                      : activeExplanationIndex === i
                        ? "Open in coach →"
                        : "Show AI breakdown"}
                  </button>
                  {openExpl[i] && (
                    <p
                      className={cn(
                        "mt-1 w-full rounded-md p-3 text-xs leading-relaxed whitespace-pre-line",
                        isCorrect
                          ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                          : "bg-destructive/10 text-destructive",
                      )}
                    >
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
          <div
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-bold",
              correctCount === n
                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                : "bg-destructive/15 text-destructive",
            )}
          >
            {correctCount === n
              ? `${n}/${n} — case counted ✓`
              : `${correctCount}/${n} — sent to Revision`}
          </div>
        )}
      </div>
    </article>
  );
}

function ReadingPanel({
  passage,
  storageKey,
  explanation,
  onClose,
}: {
  passage: string;
  storageKey: string;
  explanation: ExplanationState | null;
  onClose: () => void;
}) {
  const [reveal, setReveal] = useState(false);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setReveal(false);
    if (!explanation) return;
    const t = setTimeout(() => setReveal(true), 250);
    return () => clearTimeout(t);
  }, [explanation?.key, explanation]);

  useEffect(() => {
    if (!reveal || !highlightRef.current) return;
    const el = highlightRef.current;
    const done = () => el.classList.add("done");
    el.addEventListener("animationend", done, { once: true });
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    return () => el.removeEventListener("animationend", done);
  }, [reveal]);

  if (!passage) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-border bg-card p-6 text-center text-xs text-muted-foreground">
        Select a Texts task to load its reading passage.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {explanation
              ? `AI Highlight · Statement ${explanation.statementIndex + 1}`
              : "Reading Passage"}
          </span>
        </div>
        {explanation && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close explanation"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {explanation && (
        <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Statement {explanation.statementIndex + 1}
            </span>
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                explanation.correctAnswer
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                  : "bg-destructive/15 text-destructive",
              )}
            >
              {explanation.correctAnswer ? "TRUE" : "FALSE"}
            </span>
          </div>
          <p className="text-[11px] italic text-muted-foreground">
            &ldquo;{explanation.statementText}&rdquo;
          </p>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-border bg-[#fdf9f0] shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 bg-white/60 px-4 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-taupe">
            <BookOpen className="h-3.5 w-3.5" /> Reading Text
          </span>
        </div>
        <div className="h-[calc(100%-2.25rem)] overflow-y-auto px-5 py-4 font-serif text-[13px] leading-relaxed text-[#3a2e1f]">
          <AnnotatablePassage
            passage={passage}
            storageKey={storageKey}
            aiHighlight={explanation?.highlight ?? ""}
            reveal={reveal && !!explanation}
            aiHighlightRef={highlightRef}
          />
        </div>
      </div>
    </div>
  );
}

function GrammarExplanationPanel({
  explanation,
  tactical,
  onClose,
}: {
  explanation: ExplanationState | null;
  tactical: string;
  onClose: () => void;
}) {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    setReveal(false);
    if (!explanation) return;
    const t = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(t);
  }, [explanation?.key, explanation]);

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {explanation
              ? `AI Breakdown · Statement ${explanation.statementIndex + 1}`
              : "AI English Coach"}
          </span>
        </div>
        {explanation && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close explanation"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {!explanation && (
        <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-border bg-card p-6 text-center text-xs text-muted-foreground">
          Submit answers, then tap{" "}
          <span className="mx-1 font-semibold text-foreground">Explanation</span>
          below any statement to see the detailed breakdown.
        </div>
      )}

      {explanation && (
        <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Statement {explanation.statementIndex + 1}
            </span>
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                explanation.correctAnswer
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                  : "bg-destructive/15 text-destructive",
              )}
            >
              {explanation.correctAnswer ? "TRUE" : "FALSE"}
            </span>
          </div>

          <div className="rounded-xl border border-border bg-[#fdf9f0] p-3 font-serif text-[13px] leading-relaxed text-[#3a2e1f]">
            <SentenceWithHighlight
              text={explanation.statementText}
              highlight={explanation.highlight}
              reveal={reveal}
            />
          </div>

          <div className="mt-4">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Where the exam catches you
            </p>
            <p className="whitespace-pre-line text-[13px] leading-relaxed text-foreground">
              {tactical}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function SentenceWithHighlight({
  text,
  highlight,
  reveal,
}: {
  text: string;
  highlight: string;
  reveal: boolean;
}) {
  const idx = highlight ? text.indexOf(highlight) : -1;
  if (idx === -1 || !highlight) return <>{text}</>;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span
        className={reveal ? "neon-highlight" : undefined}
        style={reveal ? undefined : { padding: "0 2px" }}
      >
        {match}
      </span>
      {after}
    </>
  );
}
