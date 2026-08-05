import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import {
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  CUSTOM_MOCK_QUESTION_COUNTS,
  durationMinutesForQuestionCount,
  getEnabledEconomicsChapters,
  pointsTotalForEconomicsQuestions,
  type CustomMockQuestionCount,
} from "@/config/custom-mock-builder";
import {
  cacheCustomMock,
  fetchCustomMocks,
  fetchCustomMockById,
  type GenerateArgs,
} from "@/lib/custom-mock-builder/client";
import { generateCustomMock } from "@/lib/custom-mock-builder/generate.functions";
import type { CustomMockSummary } from "@/lib/custom-mock-builder/types";
import { getCurrentAuthState } from "@/lib/auth-ui";
import { clearSession, loadSession } from "@/lib/mock-exam-session";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, Loader2, PlayCircle, Sparkles, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/custom-mock-builder")({
  head: () => ({
    meta: [
      { title: "Custom Mock Builder — BBE School" },
      {
        name: "description",
        content:
          "Generate unlimited Economics mock exams from Full Course material using AI.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CustomMockBuilderPage,
});

function CustomMockBuilderPage() {
  const navigate = useNavigate();
  const generateFn = useServerFn(generateCustomMock);
  const chapters = useMemo(() => getEnabledEconomicsChapters(), []);

  const [authReady, setAuthReady] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
  const [questionCount, setQuestionCount] = useState<CustomMockQuestionCount>(10);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<CustomMockSummary[] | null>(null);
  const [selected, setSelected] = useState<CustomMockSummary | null>(null);
  const [inProgress, setInProgress] = useState<Record<string, { timed: boolean }>>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const auth = await getCurrentAuthState();
      if (cancelled) return;
      if (!auth) {
        navigate({ to: "/login" });
        return;
      }
      setAuthReady(true);
      const list = await fetchCustomMocks();
      if (cancelled) return;
      setHistory(list);
      const progress: Record<string, { timed: boolean }> = {};
      for (const m of list) {
        const s = loadSession(m.examId);
        if (s) progress[m.examId] = { timed: s.timed };
      }
      setInProgress(progress);
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const durationMinutes = durationMinutesForQuestionCount(questionCount);
  const pointsTotal = pointsTotalForEconomicsQuestions(questionCount);
  const canGenerate = selectedChapters.length > 0 && !generating;

  const toggleChapter = (num: number) => {
    setSelectedChapters((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num].sort((a, b) => a - b),
    );
  };

  const onGenerate = async () => {
    if (!canGenerate) return;
    setGenerating(true);
    setError(null);
    try {
      const args: GenerateArgs = {
        chapters: selectedChapters,
        questionCount,
      };
      const result = await generateFn({ data: args });
      const row = await fetchCustomMockById(result.id);
      if (row) cacheCustomMock(row);
      const summary: CustomMockSummary = {
        id: result.id,
        examId: result.examId,
        title: result.title,
        subject: "economics",
        chapters: result.chapters,
        questionCount: result.questionCount,
        durationMinutes: result.durationMinutes,
        pointsTotal: result.pointsTotal,
        createdAt: result.createdAt,
      };
      setHistory((prev) => [summary, ...(prev ?? []).filter((m) => m.id !== summary.id)]);
      setSelected(summary);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Generation failed. Please try again.";
      setError(msg.replace(/^Unauthorized:.*$/i, "Please log in again to generate a mock."));
    } finally {
      setGenerating(false);
    }
  };

  const start = (timed: boolean) => {
    if (!selected) return;
    clearSession(selected.examId);
    setInProgress((prev) => {
      const next = { ...prev };
      delete next[selected.examId];
      return next;
    });
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: selected.examId },
      search: { timed },
    });
  };

  const resume = (mock: CustomMockSummary) => {
    const saved = inProgress[mock.examId];
    if (!saved) return;
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: mock.examId },
      search: { timed: saved.timed },
    });
  };

  const reopen = async (mock: CustomMockSummary) => {
    const row = await fetchCustomMockById(mock.id);
    if (row) cacheCustomMock(row);
    setSelected(mock);
  };

  if (!authReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none tracking-tight text-primary-foreground">
                BBE
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                BBE School
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                WU Vienna · Prep
              </span>
            </div>
          </Link>
          <Link
            to="/products/full-course-subjects"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Full Course
          </Link>
        </div>
      </header>

      <main className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#8B5E3C]" />
              <span className="text-xs font-medium tracking-wide text-taupe">
                Free for all accounts · Economics · Chapters 2–5
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Custom Mock Builder
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Generate new Economics mocks from Full Course material and the platform textbook —
              same format, same difficulty, unlimited practice.
            </p>
          </div>

          <section
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            style={{ borderTop: "4px solid #8B5E3C" }}
          >
            <h2 className="font-display text-xl font-semibold">Select Chapters</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Economics only for now. Choose one or more chapters with complete Full Course banks.
            </p>
            <ul className="mt-5 space-y-2">
              {chapters.map((ch) => {
                const checked = selectedChapters.includes(ch.num);
                return (
                  <li key={ch.num}>
                    <label
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors",
                        checked
                          ? "border-[#8B5E3C]/40 bg-[#8B5E3C]/5"
                          : "border-border hover:bg-secondary/40",
                      )}
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-border accent-[#8B5E3C]"
                        checked={checked}
                        onChange={() => toggleChapter(ch.num)}
                      />
                      <span>
                        <span className="block text-sm font-semibold">Chapter {ch.num}</span>
                        <span className="text-xs text-muted-foreground">{ch.title}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <h2 className="mt-8 font-display text-xl font-semibold">Number of Questions</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Timed mode uses {CUSTOM_MOCK_MINUTES_PER_QUESTION} minutes per question.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CUSTOM_MOCK_QUESTION_COUNTS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQuestionCount(n)}
                  className={cn(
                    "min-w-[72px] rounded-md border px-4 py-2.5 text-sm font-semibold transition-all",
                    questionCount === n
                      ? "border-[#8B5E3C] bg-[#8B5E3C] text-white shadow-sm"
                      : "border-border bg-card hover:bg-secondary",
                  )}
                >
                  {n}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {durationMinutes} min timed
              </span>
              <span>{pointsTotal} points · wi2 scoring</span>
            </div>

            {error && (
              <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <button
              type="button"
              disabled={!canGenerate}
              onClick={() => void onGenerate()}
              className={cn(
                "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all",
                canGenerate
                  ? "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  : "cursor-not-allowed opacity-60",
              )}
              style={{
                backgroundColor: "#8B5E3C",
                boxShadow: canGenerate ? "0 4px 14px -4px #8B5E3C80" : undefined,
              }}
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating AI Mock…
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate AI Mock
                </>
              )}
            </button>
            {generating && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Reading textbook passages and Full Course examples to match style and difficulty…
              </p>
            )}
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-display text-xl font-semibold">Your Custom Mocks</h2>
            {history === null ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : history.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
                No custom mocks yet. Generate your first one above — saved mocks reopen without
                calling AI again.
              </div>
            ) : (
              <div className="grid gap-4">
                {history.map((mock) => (
                  <div
                    key={mock.id}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-base font-semibold">{mock.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {mock.questionCount} questions · {mock.durationMinutes} min ·{" "}
                        {mock.pointsTotal} pts ·{" "}
                        {new Date(mock.createdAt).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Chapters {mock.chapters.join(", ")}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {inProgress[mock.examId] ? (
                        <button
                          type="button"
                          onClick={() => resume(mock)}
                          className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Resume
                        </button>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => void reopen(mock)}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">{selected?.title ?? "Start mock"}</DialogTitle>
            <DialogDescription>
              {selected?.questionCount} questions · {selected?.durationMinutes} minutes timed ·{" "}
              {selected?.pointsTotal} points · wi2 scoring
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 grid gap-3">
            <button
              type="button"
              onClick={() => start(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background hover:opacity-90"
            >
              <Clock className="h-4 w-4" />
              Timed ({selected?.durationMinutes} min)
            </button>
            <button
              type="button"
              onClick={() => start(false)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Untimed practice
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
