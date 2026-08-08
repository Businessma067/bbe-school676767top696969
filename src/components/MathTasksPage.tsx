import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AuthNav } from "@/components/AuthNav";
import { FlashcardMath } from "@/components/FlashcardMath";
import { PracticeCalcProvider } from "@/components/calculator/PracticeCalcContext";
import { PracticeCalculatorInline, PracticeRightSlot } from "@/components/calculator/Ti30MathPrint";
import { PRACTICE_BODY_STACK, PRACTICE_HEADER_INNER, PRACTICE_PAGE } from "@/lib/practice-layout";
import { cn } from "@/lib/utils";
import {
  MATH_CHAPTERS,
  DEMO_MATH_FREE_LIMIT,
  type MathChapter,
  type MathTask,
} from "@/data/math-chapters";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  BookOpen,
  AlertTriangle,
  NotebookPen,
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
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    () => Object.fromEntries(chapters.map((c) => [c.num, false])),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customResetOpen, setCustomResetOpen] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

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

      <div className={cn(PRACTICE_BODY_STACK, "lg:flex lg:items-start lg:gap-6")}>
        {!sidebarCollapsed && (
          <aside className="mb-6 w-full shrink-0 lg:mb-0 lg:w-72">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-sm lg:sticky lg:top-20">
              <div className="mb-2 flex items-center justify-between px-1">
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

              <ul className="space-y-1">
                {chapters.map((ch) => {
                  const list = byChapter.get(ch.num) ?? [];
                  const done = list.filter((c) => progress.passed.includes(c.id)).length;
                  const total = list.length;
                  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                  const isOpen = !!expanded[ch.num];
                  const isActiveCh = activeChapter === ch.num;
                  return (
                    <li key={ch.num} className="overflow-hidden rounded-xl border border-transparent">
                      <div
                        className={cn(
                          "flex items-stretch rounded-xl transition-colors",
                          isActiveCh ? "bg-primary/10" : "hover:bg-secondary/70",
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setExpanded((e) => ({ ...e, [ch.num]: !e[ch.num] }));
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
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <span className="truncate text-sm font-bold text-foreground">
                                {ch.num}. {ch.title}
                              </span>
                              <span className="shrink-0 text-[10px] font-bold text-muted-foreground">
                                {done}/{total}
                              </span>
                            </div>
                            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                              <div
                                className={cn(
                                  "h-full rounded-full transition-all",
                                  pct === 100 && total > 0 ? "bg-emerald-500" : "bg-primary",
                                )}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
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
                      {isOpen && (
                        <ul className="border-t border-border/60 py-1">
                          {list.length === 0 && (
                            <li className="px-4 py-2 text-[11px] text-muted-foreground">
                              No tasks yet.
                            </li>
                          )}
                          {list.map((c, i) => {
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
                                    <DifficultyPill level={c.difficulty_level} active={active} />
                                  )}
                                </button>
                              </li>
                            );
                          })}
                          {Array.from({ length: phantomCountFor(tier) }).map((_, p) => {
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

              <div className="mt-3 border-t border-border pt-3">
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

              <button
                type="button"
                onClick={() => setCustomResetOpen(true)}
                className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <Settings2 className="h-3.5 w-3.5" /> Customize reset
              </button>
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
              onGraded={(allCorrect) => {
                setProgress((prev) => {
                  const next: Progress = {
                    passed: prev.passed.filter((x) => x !== activeCase.id),
                    revision: prev.revision.filter((x) => x !== activeCase.id),
                  };
                  if (allCorrect) next.passed = [...next.passed, activeCase.id];
                  else next.revision = [...next.revision, activeCase.id];
                  saveProgress(next);
                  return next;
                });
              }}
              onResetProgress={() => {
                resetCaseIds([activeCase.id]);
                setShowExplanations(false);
              }}
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
        </main>

        <PracticeRightSlot>
          {showExplanations &&
          activeCase &&
          !activeCase.placeholder &&
          !isLocked(tier, activeChapter, activeIdx) ? (
            <AllExplanationsPanel
              task={activeCase}
              index={activeIdx}
              onClose={() => setShowExplanations(false)}
            />
          ) : (
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <NotebookPen className="h-3.5 w-3.5" /> Theory
              </h3>
              {activeCase && !isLocked(tier, activeChapter, activeIdx) ? (
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                    Task {activeIdx + 1}
                    {!activeCase.placeholder && activeCase.title
                      ? ` · ${activeCase.title}`
                      : ""}
                  </p>
                  {activeCase.placeholder ? (
                    <div className="mt-4 rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
                      Theory notes for this topic will appear here once tasks are added.
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                      <p>
                        BBE format: mark each statement independently as True or False. Most
                        tasks have five statements (A–E); a few advanced tasks use six (A–F).
                        The number of true statements varies by case.
                      </p>
                      <TheoryToolkit chapter={activeChapter} />
                      <p>
                        After you check your answers, tap{" "}
                        <span className="font-semibold text-primary">Explanation</span> to open
                        the full worked solution for every statement here.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs text-muted-foreground">
                  Open a task to see its theory notes here.
                </div>
              )}
            </div>
          )}
        </PracticeRightSlot>
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

function DifficultyPill({ level, active }: { level: string; active?: boolean }) {
  const [num, den] = level.split("/");
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-baseline gap-0.5 rounded-full border px-1.5 py-[1px] font-mono text-[10px] tabular-nums tracking-tight",
        active
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-border/80 bg-secondary/70 text-muted-foreground",
      )}
      title={`Difficulty ${level}`}
    >
      <span className={cn("font-semibold", active ? "text-primary" : "text-foreground")}>
        {num}
      </span>
      <span className="opacity-50">/</span>
      <span>{den ?? "5"}</span>
    </span>
  );
}

/** Light markdown (**bold**, *italic*) plus KaTeX via FlashcardMath. */
function MathProse({ text, className }: { text: string; className?: string }) {
  // Keep $$...$$ blocks intact (they may contain newlines for aligned formulas).
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className={cn("space-y-2.5", className)}>
      {paragraphs.map((para, i) => (
        <div key={i} className="text-xs leading-relaxed [&_.katex-display]:my-2">
          <RichMathLine text={para} />
        </div>
      ))}
    </div>
  );
}

function RichMathLine({ text }: { text: string }) {
  // Split on **bold** / *italic*, keeping $...$ / $$...$$ intact.
  const parts: { kind: "text" | "bold" | "italic"; value: string }[] = [];
  const simple = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*]+?\*\*|\*[^*\n]+?\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = simple.exec(text))) {
    if (m.index > last) parts.push({ kind: "text", value: text.slice(last, m.index) });
    const raw = m[0];
    if (raw.startsWith("$$") || raw.startsWith("$")) {
      parts.push({ kind: "text", value: raw });
    } else if (raw.startsWith("**")) {
      parts.push({ kind: "bold", value: raw.slice(2, -2) });
    } else {
      parts.push({ kind: "italic", value: raw.slice(1, -1) });
    }
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push({ kind: "text", value: text.slice(last) });
  if (parts.length === 0) parts.push({ kind: "text", value: text });

  return (
    <span>
      {parts.map((p, i) => {
        if (p.kind === "bold") {
          return (
            <strong key={i} className="font-semibold text-foreground">
              <FlashcardMath text={p.value} />
            </strong>
          );
        }
        if (p.kind === "italic") {
          return (
            <em key={i} className="italic text-foreground/85">
              <FlashcardMath text={p.value} />
            </em>
          );
        }
        return <FlashcardMath key={i} text={p.value} />;
      })}
    </span>
  );
}

function TheoryToolkit({ chapter }: { chapter: number | "revision" | null }) {
  if (chapter === 5) {
    return (
      <div className="rounded-lg border border-border/70 bg-background/60 p-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-taupe">
          Linear systems toolkit
        </p>
        <MathProse
          text={
            "$$\\begin{cases}a_1x+b_1y=c_1\\\\ a_2x+b_2y=c_2\\end{cases}$$\n\nElimination or substitution. Check unique / none / infinitely many solutions."
          }
        />
      </div>
    );
  }
  if (chapter === 13) {
    return (
      <div className="rounded-lg border border-border/70 bg-background/60 p-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-taupe">
          Binomial toolkit
        </p>
        <MathProse
          text={
            "$$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$$\n\n$$E[X]=np,\\quad \\mathrm{Var}(X)=np(1-p)$$"
          }
        />
      </div>
    );
  }
  return null;
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
      const expl = (task.tactical_explanations[i] ?? "").trim();
      if (expl) return [expl, ""];
      const verdict = task.answer_key[i] ? "correct" : "false";
      return [
        `**${letters[i] ?? String(i + 1)})** ${task.statements[i]} *(${verdict})*`,
        "",
      ];
    }),
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <MathProse
          text={body}
          className="space-y-3 text-[13px] leading-relaxed text-foreground [&_em]:not-italic [&_em]:text-foreground/80"
        />
      </div>
    </div>
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
  onGraded,
  onResetProgress,
}: {
  task: MathTask;
  index: number;
  alreadyPassed: boolean;
  inRevision: boolean;
  explanationsOpen: boolean;
  onShowExplanations: () => void;
  onGraded: (allCorrect: boolean) => void;
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
    onGraded(correctCount === task.answer_key.length);
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
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          Difficulty {task.difficulty_level}
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

      <h2 className="font-display text-lg font-bold tracking-tight">{task.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        <FlashcardMath text={task.context} />
      </p>

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
          const isWrong = checked && isChecked !== correctAns;
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
              onClick={onShowExplanations}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-4 py-2.5 text-sm font-semibold transition-all",
                explanationsOpen
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:bg-secondary",
              )}
            >
              <Sparkles className="h-4 w-4" />
              {explanationsOpen ? "Explanation shown →" : "Explanation"}
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
