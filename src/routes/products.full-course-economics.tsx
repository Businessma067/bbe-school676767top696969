import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronDown,
  BookOpen,
  AlertTriangle,
  Settings2,
  Lock,
  RotateCcw,
} from "lucide-react";

export const Route = createFileRoute("/products/full-course-economics")({
  head: () => ({
    meta: [
      { title: "Full Course · Economics — BBE School" },
      {
        name: "description",
        content:
          "Full Course Economics — chapter roadmap and personal progress for the WU BBE entrance exam.",
      },
    ],
  }),
  component: FullCourseEconomics,
});

const CHAPTERS: { num: number; title: string; taskCount: number }[] = [
  { num: 1, title: "Introduction to Economics", taskCount: 40 },
  { num: 2, title: "Basic Economic Concepts", taskCount: 45 },
  { num: 3, title: "Focus on different types of businesses", taskCount: 40 },
  { num: 4, title: "Forms of business ownership and sources of finance", taskCount: 50 },
  { num: 5, title: "Marketing", taskCount: 55 },
  { num: 6, title: "Accounting – keeping record of business transactions", taskCount: 60 },
  { num: 7, title: "Human Resource Management", taskCount: 40 },
  { num: 8, title: "International Business & Trade", taskCount: 45 },
];

function FullCourseEconomics() {
  const [activeChapter, setActiveChapter] = useState<number | "revision" | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    () => Object.fromEntries(CHAPTERS.map((c) => [c.num, false])),
  );

  const totalTasks = useMemo(
    () => CHAPTERS.reduce((sum, c) => sum + c.taskCount, 0),
    [],
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link
            to="/products/full-course-subjects"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />{" "}
            <span className="hidden sm:inline">All subjects</span>
          </Link>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="font-display text-sm font-bold tracking-tight">
              Economics · Full Course
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
              WU BBE · Cases
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-10">
        {/* Sidebar — chapter list */}
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-80 lg:shrink-0">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Chapters
            </h3>
            <ul className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {CHAPTERS.map((ch) => {
                const done = 0;
                const total = ch.taskCount;
                const pct = 0;
                const isOpen = !!expanded[ch.num];
                const isActiveCh = activeChapter === ch.num;
                return (
                  <li
                    key={ch.num}
                    className={cn(
                      "rounded-xl border transition-colors",
                      isActiveCh
                        ? "border-primary/40 bg-primary/5"
                        : "border-transparent",
                    )}
                  >
                    <div className="flex items-stretch">
                      <button
                        onClick={() => {
                          setExpanded((e) => ({ ...e, [ch.num]: !e[ch.num] }));
                          setActiveChapter(ch.num);
                        }}
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
                              className="h-full rounded-full bg-primary transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </button>
                      <button
                        title={`Reset Chapter ${ch.num}`}
                        aria-label={`Reset Chapter ${ch.num}`}
                        className="grid w-9 shrink-0 place-items-center rounded-r-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="border-t border-border/60 py-1">
                        <li className="px-4 py-2 text-[11px] italic text-muted-foreground">
                          Tasks coming soon.
                        </li>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Revision folder */}
            <div className="mt-3 border-t border-border pt-3">
              <button
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
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                    0
                  </span>
                </div>
              </button>
            </div>

            <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-primary">
              <Settings2 className="h-3.5 w-3.5" /> Customize reset
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {/* Stats overview */}
          <section className="mb-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Your progress
              </h2>
              <span className="text-[10px] font-semibold text-muted-foreground">
                0/{totalTasks} tasks passed
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatTile label="Attempted" value={0} />
              <StatTile label="Passed" value={0} tone="pass" />
              <StatTile label="In revision" value={0} tone="rev" />
              <StatTile label="Accuracy" value="0%" />
            </div>
            <ul className="mt-5 space-y-2">
              {CHAPTERS.map((ch) => (
                <li key={ch.num} className="flex items-center gap-3">
                  <span className="w-8 shrink-0 text-xs font-bold text-muted-foreground">
                    Ch.{ch.num}
                  </span>
                  <span className="flex-1 truncate text-xs text-foreground">
                    {ch.title}
                  </span>
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} />
                  </div>
                  <span className="w-14 shrink-0 text-right text-[11px] font-semibold text-muted-foreground">
                    0/{ch.taskCount}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {activeChapter !== null && (
            <div className="mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                {activeChapter === "revision"
                  ? "Revision folder"
                  : `Chapter ${activeChapter}`}
              </span>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {activeChapter === "revision"
                  ? "Fix what tripped you up"
                  : CHAPTERS.find((c) => c.num === activeChapter)?.title}
              </h1>
            </div>
          )}

          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Tasks coming soon
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              The Full Course roadmap is live. Interactive tasks for every chapter
              are being finalized and will unlock inside this interface — your
              progress, statistics, and revision folder will populate here
              automatically.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: number | string;
  tone?: "pass" | "rev";
}) {
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
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
