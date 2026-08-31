import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  CUSTOM_MOCK_SUBJECTS,
  clampQuestionCount,
  displayTitleForCustomMock,
  durationMinutesForQuestionCount,
  getEnabledCustomMockSubjects,
  maxQuestionsForChapters,
  type CustomMockSubjectId,
} from "@/config/custom-mock-builder";
import {
  cacheCustomMock,
  fetchCustomMocks,
  fetchCustomMockById,
  type GenerateArgs,
} from "@/lib/custom-mock-builder/client";
import { buildCustomMock } from "@/lib/custom-mock-builder/build.functions";
import type { CustomMockSummary } from "@/lib/custom-mock-builder/types";
import {
  chaptersFromSubtopicIds,
  findCustomMockSubtopic,
  getCustomMockChapters,
} from "@/data/custom-mock-catalog";
import { SUBJECT_META } from "@/config/scoring-config";
import { getCurrentAuthState } from "@/lib/auth-ui";
import { userOwnsFullCourse } from "@/lib/full-course-access";
import { DEMO_ONLY_HREF } from "@/lib/site-access";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import { TopicWeightSelector } from "@/components/custom-mock/TopicWeightSelector";
import {
  balancedPoint,
  buildWeightedTopics,
  topicCountsRecord,
  weightedTopicsFromCounts,
  type TopicWeightTopic,
  type Vec2,
} from "@/lib/topic-weight-engine";
import { BookOpen, ChevronDown, Clock, Loader2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/products/custom-mock-builder")({
  head: () => ({
    meta: [
      { title: "Custom Mock Builder — BBE School" },
      {
        name: "description",
        content:
          "Build Economics, Math, and English mock exams from Full Course questions by topic and subtopic.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CustomMockBuilderPage,
});

function CustomMockBuilderPage() {
  const navigate = useNavigate();
  const buildFn = useServerFn(buildCustomMock);
  const subjects = useMemo(() => getEnabledCustomMockSubjects(), []);

  const [authReady, setAuthReady] = useState(false);
  const [subject, setSubject] = useState<CustomMockSubjectId>("economics");
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [questionCount, setQuestionCount] = useState(10);
  const [customCountDraft, setCustomCountDraft] = useState("10");
  const [weightPoint, setWeightPoint] = useState<Vec2>(balancedPoint());
  const [manualMode, setManualMode] = useState(false);
  const [manualCounts, setManualCounts] = useState<Record<string, number>>({});
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<CustomMockSummary[] | null>(null);
  const [selected, setSelected] = useState<CustomMockSummary | null>(null);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [inProgress, setInProgress] = useState<Record<string, { timed: boolean; answerSheet: boolean }>>(
    {},
  );

  const bookChapters = useMemo(() => getCustomMockChapters(subject), [subject]);
  const subjectCfg = CUSTOM_MOCK_SUBJECTS[subject];
  const accent = subjectCfg.accent;

  useEffect(() => {
    setSelectedSubtopics([]);
    setExpanded(Object.fromEntries(bookChapters.map((c) => [c.num, false])));
    setWeightPoint(balancedPoint());
    setManualMode(false);
    setManualCounts({});
    setError(null);
  }, [subject, bookChapters]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const auth = await getCurrentAuthState();
      if (cancelled) return;
      if (!auth) {
        navigate({ to: "/login" });
        return;
      }
      const owns = await userOwnsFullCourse();
      if (cancelled) return;
      if (!owns) {
        navigate({ to: DEMO_ONLY_HREF });
        return;
      }
      setAuthReady(true);
      const list = await fetchCustomMocks();
      if (cancelled) return;
      setHistory(list);
      const progress: Record<string, { timed: boolean; answerSheet: boolean }> = {};
      for (const m of list) {
        const s = loadSession(m.examId);
        if (s) progress[m.examId] = { timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) };
      }
      setInProgress(progress);
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const maxQuestions = useMemo(() => {
    const caps = chaptersFromSubtopicIds(subject, selectedSubtopics);
    return Math.min(maxQuestionsForChapters(caps), CUSTOM_MOCK_MAX_QUESTIONS);
  }, [subject, selectedSubtopics]);

  useEffect(() => {
    setQuestionCount((prev) => {
      const next = clampQuestionCount(prev, maxQuestions);
      if (next !== prev) setCustomCountDraft(String(next));
      return next;
    });
  }, [maxQuestions]);

  const applyQuestionCount = (n: number) => {
    const next = clampQuestionCount(n, maxQuestions);
    setQuestionCount(next);
    setCustomCountDraft(String(next));
  };

  const weightTopics: TopicWeightTopic[] = useMemo(() => {
    return [...selectedSubtopics]
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((id) => {
        const meta = findCustomMockSubtopic(subject, id);
        return {
          id,
          label: meta ? `${meta.id} ${meta.title}` : id,
          shortLabel: id,
        };
      });
  }, [selectedSubtopics, subject]);

  const weighted = useMemo(
    () => buildWeightedTopics(weightTopics, weightPoint, questionCount, { snap: false }),
    [weightTopics, weightPoint, questionCount],
  );

  const effectiveTopics = useMemo(() => {
    if (!manualMode || weightTopics.length === 0) return weighted.topics;
    return weightedTopicsFromCounts(weightTopics, manualCounts, questionCount);
  }, [manualMode, weightTopics, manualCounts, questionCount, weighted.topics]);

  const onWeightPointChange = useCallback((p: Vec2) => {
    setWeightPoint(p);
  }, []);

  const durationMinutes = durationMinutesForQuestionCount(questionCount);
  const canBuild = selectedSubtopics.length > 0 && !building;

  const toggleSubtopic = (id: string) => {
    setSelectedSubtopics((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].sort(),
    );
  };

  const toggleChapterAll = (chapterNum: number) => {
    const chapter = bookChapters.find((c) => c.num === chapterNum);
    if (!chapter) return;
    const ids = chapter.subtopics.map((s) => s.id);
    const allOn = ids.every((id) => selectedSubtopics.includes(id));
    setSelectedSubtopics((prev) => {
      if (allOn) return prev.filter((id) => !ids.includes(id));
      return [...new Set([...prev, ...ids])].sort();
    });
  };

  const onBuild = async () => {
    if (!canBuild) return;
    setBuilding(true);
    setError(null);
    try {
      const args: GenerateArgs = {
        subject,
        subtopics: selectedSubtopics,
        questionCount,
        topicCounts: topicCountsRecord(effectiveTopics),
      };
      const result = await buildFn({ data: args });
      const row = await fetchCustomMockById(result.id);
      if (row) cacheCustomMock(row);
      const summary: CustomMockSummary = {
        id: result.id,
        examId: result.examId,
        title: result.title,
        subject,
        chapters: result.chapters,
        questionCount: result.questionCount,
        durationMinutes: result.durationMinutes,
        pointsTotal: result.pointsTotal,
        createdAt: result.createdAt,
      };
      setHistory((prev) => [summary, ...(prev ?? []).filter((m) => m.id !== summary.id)]);
      setWithAnswerSheet(true);
      setSelected(summary);
    } catch (e) {
      const raw = e instanceof Error ? e.message : "Could not build mock. Please try again.";
      setError(/unauthorized/i.test(raw) ? "Please log in again to build a mock." : raw);
    } finally {
      setBuilding(false);
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
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = (mock: CustomMockSummary) => {
    const saved = inProgress[mock.examId];
    if (!saved) return;
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: mock.examId },
      search: { timed: saved.timed, answerSheet: saved.answerSheet },
    });
  };

  const reopen = async (mock: CustomMockSummary) => {
    const row = await fetchCustomMockById(mock.id);
    if (row) cacheCustomMock(row);
    setWithAnswerSheet(true);
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
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/products/full-course-subjects"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Full Course
          </Link>
        }
      />

      <main className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs font-medium tracking-wide text-taupe">
                From the Full Course · {subjectCfg.label}
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Custom Mock Builder
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Pick topics and subtopics, choose how many questions, and build a mock from the Full
              Course — up to {CUSTOM_MOCK_MAX_QUESTIONS}.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {subjects.map((s) => {
                const active = subject === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSubject(s.id)}
                    className={cn(
                      "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all sm:text-sm",
                      active
                        ? "text-white shadow-md"
                        : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                    )}
                    style={
                      active
                        ? { backgroundColor: s.accent, borderColor: s.accent }
                        : undefined
                    }
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <section
            className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
            style={{ borderTop: `4px solid ${accent}` }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="min-w-0">
                <h2 className="font-display text-xl font-semibold">Select topics & subtopics</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Expand a chapter and tick sections. Topics appear as vertices on the right.
                </p>

                <ul className="mt-5 space-y-2">
                  {bookChapters.map((ch) => {
                    const open = expanded[ch.num] === true;
                    const ids = ch.subtopics.map((s) => s.id);
                    const selectedInCh = ids.filter((id) => selectedSubtopics.includes(id)).length;
                    const allOn = selectedInCh === ids.length && ids.length > 0;
                    return (
                      <li key={`${subject}-${ch.num}`} className="overflow-hidden rounded-xl border border-border">
                        <div className="flex items-stretch bg-secondary/30">
                          <button
                            type="button"
                            onClick={() => setExpanded((e) => ({ ...e, [ch.num]: !open }))}
                            className="flex flex-1 items-center gap-2 px-3 py-2.5 text-left sm:px-4"
                          >
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                                open ? "rotate-0" : "-rotate-90",
                              )}
                            />
                            <span className="font-display text-sm font-semibold">{ch.heading}</span>
                            {ch.heading !== ch.title && (
                              <span className="truncate text-xs text-muted-foreground">{ch.title}</span>
                            )}
                            {selectedInCh > 0 && (
                              <span
                                className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                                style={{ backgroundColor: `${accent}22`, color: accent }}
                              >
                                {selectedInCh}/{ids.length}
                              </span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleChapterAll(ch.num)}
                            className="shrink-0 border-l border-border px-3 text-[11px] font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                          >
                            {allOn ? "Clear" : "All"}
                          </button>
                        </div>
                        {open && (
                          <ul className="divide-y divide-border/60 px-2 py-1">
                            {ch.subtopics.map((s) => {
                              const checked = selectedSubtopics.includes(s.id);
                              return (
                                <li key={s.id}>
                                  <label
                                    className={cn(
                                      "flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                                      checked ? "bg-secondary/60" : "hover:bg-secondary/40",
                                    )}
                                  >
                                    <input
                                      type="checkbox"
                                      className="mt-0.5 h-4 w-4 rounded border-border"
                                      style={{ accentColor: accent }}
                                      checked={checked}
                                      onChange={() => toggleSubtopic(s.id)}
                                    />
                                    <span>
                                      <span className="text-sm font-semibold tabular-nums">
                                        {s.id}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                        {s.title}
                                      </span>
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <h2 className="mt-8 font-display text-lg font-semibold">Number of Questions</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  1–{maxQuestions} for the whole mock · {CUSTOM_MOCK_MINUTES_PER_QUESTION} min each
                  timed
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <label htmlFor="custom-q-count" className="text-sm font-medium text-foreground">
                    Questions
                  </label>
                  <input
                    id="custom-q-count"
                    type="number"
                    min={1}
                    max={maxQuestions}
                    value={customCountDraft}
                    onChange={(e) => setCustomCountDraft(e.target.value)}
                    onBlur={() => applyQuestionCount(Number(customCountDraft))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        applyQuestionCount(Number(customCountDraft));
                      }
                    }}
                    className="w-28 rounded-md border border-border bg-card px-3 py-2.5 text-sm font-semibold tabular-nums outline-none focus:ring-1"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = accent;
                    }}
                    onBlurCapture={(e) => {
                      e.currentTarget.style.borderColor = "";
                    }}
                  />
                  <span className="text-xs text-muted-foreground">max {CUSTOM_MOCK_MAX_QUESTIONS}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {durationMinutes} min timed
                  </span>
                  {selectedSubtopics.length > 0 && (
                    <span>
                      {selectedSubtopics.length} subtopic
                      {selectedSubtopics.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>

              <div className="min-w-0 lg:sticky lg:top-24">
                <TopicWeightSelector
                  topics={weightTopics}
                  questionCount={questionCount}
                  point={weightPoint}
                  onPointChange={onWeightPointChange}
                  manualMode={manualMode}
                  onManualModeChange={setManualMode}
                  manualCounts={manualCounts}
                  onManualCountsChange={setManualCounts}
                  title="Topic Weight Selector"
                  accent={accent}
                  subjectLabel={subjectCfg.label}
                />
              </div>
            </div>

            {error && (
              <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <button
              type="button"
              disabled={!canBuild}
              onClick={() => void onBuild()}
              className={cn(
                "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all",
                canBuild
                  ? "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  : "cursor-not-allowed opacity-60",
              )}
              style={{
                backgroundColor: accent,
                boxShadow: canBuild ? `0 4px 14px -4px ${accent}80` : undefined,
              }}
            >
              {building ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Building mock…
                </>
              ) : (
                <>
                  <BookOpen className="h-4 w-4" />
                  Create {subjectCfg.label} Mock from Full Course
                </>
              )}
            </button>
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-display text-xl font-semibold">Your Custom Mocks</h2>
            {history === null ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : history.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
                No custom mocks yet. Select a subject, pick subtopics, and shape the mix above.
              </div>
            ) : (
              <div className="grid gap-4">
                {history.map((mock) => {
                  const meta = SUBJECT_META[mock.subject as CustomMockSubjectId] ?? SUBJECT_META.economics;
                  return (
                    <div
                      key={mock.id}
                      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${meta.badgeClass}`}
                          >
                            {meta.label}
                          </span>
                          <h3 className="font-display text-base font-semibold">
                            {displayTitleForCustomMock(mock)}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {mock.questionCount} questions · {mock.durationMinutes} min ·{" "}
                          {new Date(mock.createdAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Topics {mock.chapters.join(", ")}
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
                          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
                        >
                          Open
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">
              {selected ? displayTitleForCustomMock(selected) : "Start mock"}
            </DialogTitle>
            <DialogDescription>
              {selected?.questionCount} questions · {selected?.durationMinutes} minutes timed
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 grid gap-3">
            <ExamStartAnswerMode withAnswerSheet={withAnswerSheet} onChange={setWithAnswerSheet} />
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
