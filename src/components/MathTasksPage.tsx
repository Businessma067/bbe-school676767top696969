import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AuthNav } from "@/components/AuthNav";
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

  useEffect(() => {
    setActiveIdx(0);
  }, [activeChapter]);

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
                WU BBE · {tierLabel}
              </span>
            </div>
            <AuthNav />
          </div>
        </div>
      </header>

      <div className={PRACTICE_BODY_STACK}>
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
                  className="hidden h-7 w-7 place-items-center rounded-md border border-border text-muted-foreground hover:bg-secondary hover:text-foreground lg:grid"
                >
                  <PanelLeftClose className="h-3.5 w-3.5" />
                </button>
              </div>
              <ul className="flex-1 space-y-1.5 overflow-y-auto pr-1">
                {chapters.map((ch) => {
                  const list = byChapter.get(ch.num) ?? [];
                  const done = list.filter((c) => progress.passed.includes(c.id)).length;
                  const total = list.length;
                  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                  const isOpen = !!expanded[ch.num];
                  const isActiveCh = activeChapter === ch.num;
                  return (
                    <li
                      key={ch.num}
                      className={cn(
                        "rounded-xl border transition-colors",
                        isActiveCh ? "border-primary/40 bg-primary/5" : "border-transparent",
                      )}
                    >
                      <div className="flex items-stretch">
                        <button
                          type="button"
                          onClick={() =>
                            setExpanded((e) => ({ ...e, [ch.num]: !e[ch.num] }))
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
                                    "flex w-full items-center gap-2.5 px-3 py-1.5 pl-9 text-left text-xs transition-colors",
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
                                      "truncate",
                                      passed && !locked && "text-muted-foreground line-through",
                                    )}
                                  >
                                    Task {i + 1}
                                    {locked && " · Locked"}
                                  </span>
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
          ) : activeCase ? (
            <PlaceholderTaskCard
              task={activeCase}
              index={activeIdx}
              chapterTitle={
                activeChapter === "revision"
                  ? "Revision"
                  : (chapters.find((c) => c.num === activeChapter)?.title ?? "Mathematics")
              }
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
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <NotebookPen className="h-3.5 w-3.5" /> Theory
            </h3>
            {activeCase && !isLocked(tier, activeChapter, activeIdx) ? (
              <div className="min-h-0 flex-1 overflow-y-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                  Task {activeIdx + 1}
                </p>
                <div className="mt-4 rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
                  Theory notes for this topic will appear here once tasks are added.
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs text-muted-foreground">
                Open a task to see its theory notes here.
              </div>
            )}
          </div>
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
