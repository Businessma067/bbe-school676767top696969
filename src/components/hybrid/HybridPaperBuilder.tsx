import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronDown, Clock, Loader2, PlayCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HYBRID_MATH_UNITS, hybridMathChapter } from "@/lib/hybrid-math";
import {
  buildHybridPaper,
  germanTextCatalog,
  listHybridPapers,
  type HybridPaperRecord,
} from "@/lib/hybrid-mock-paper";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { chapterTitlePair } from "@/lib/hybrid-math-pair";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import {
  HYBRID_PAPER_DEFAULT_QUESTIONS,
  HYBRID_PAPER_MAX_QUESTIONS,
  HYBRID_PAPER_MIN_QUESTIONS,
  HYBRID_PAPER_MINUTES_PER_QUESTION,
  clampPaperCount,
  focusRhythm,
  leanValueFor,
  mixForPaper,
  paperMinutes,
  type HybridLeanId,
  type TrackSide,
} from "@/config/hybrid-mock-builder";
import { cn } from "@/lib/utils";

const BBE = "#C2643A";
const WISO = "#3730A3";

const FOCI: { id: HybridLeanId; label: string; accent: string }[] = [
  { id: "bbe", label: "BBE", accent: BBE },
  { id: "half", label: "Half", accent: HYBRID_ACCENT },
  { id: "wiso", label: "WiSo", accent: WISO },
];

type TopicRow = { id: string; title: string; detail: string };
type TopicGroup = { key: string; heading: string; title: string; rows: TopicRow[] };

function focusSentence(rhythm: TrackSide[]): string {
  if (rhythm[0] === "bbe") return "Opens on BBE. A WiSo task follows.";
  if (rhythm.includes("bbe")) return "Opens on WiSo. A BBE task follows.";
  return "Opens on WiSo. German mathematics and German reading follow the book.";
}

function leanLabel(id: HybridLeanId): string {
  if (id === "bbe") return "BBE";
  if (id === "wiso") return "WiSo";
  return "Half";
}

export function HybridPaperBuilder({ initialLean = "half" }: { initialLean?: HybridLeanId }) {
  const navigate = useNavigate();
  const texts = useMemo(() => germanTextCatalog(), []);
  const groups = useMemo<TopicGroup[]>(() => {
    const math = HYBRID_MATH_UNITS.map((unit) => ({
      key: unit.id,
      heading: unit.title,
      title: unit.blurb,
      rows: unit.chapters.map((num) => {
        const chapter = hybridMathChapter(num);
        const titles = chapterTitlePair(num);
        return {
          id: String(num),
          title: chapter?.title ?? titles.en,
          detail: titles.de,
        };
      }),
    }));
    return [
      ...math,
      {
        key: "german",
        heading: "German reading",
        title: "Texte",
        rows: texts.map((text) => ({
          id: text.id,
          title: text.title,
          detail: `${text.tasks} tasks`,
        })),
      },
    ];
  }, [texts]);

  const [lean, setLean] = useState(leanValueFor(initialLean));
  const [total, setTotal] = useState(HYBRID_PAPER_DEFAULT_QUESTIONS);
  const [countDraft, setCountDraft] = useState(String(HYBRID_PAPER_DEFAULT_QUESTIONS));
  const [chapters, setChapters] = useState<number[]>(() =>
    HYBRID_MATH_UNITS.flatMap((unit) => [...unit.chapters]),
  );
  const [german, setGerman] = useState<string[]>(() => texts.map((text) => text.id));
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HybridPaperRecord[] | null>(null);
  const [selected, setSelected] = useState<HybridPaperRecord | null>(null);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [inProgress, setInProgress] = useState<
    Record<string, { timed: boolean; answerSheet: boolean }>
  >({});

  useEffect(() => {
    const list = listHybridPapers();
    setHistory(list);
    const progress: Record<string, { timed: boolean; answerSheet: boolean }> = {};
    for (const paper of list) {
      const session = loadSession(paper.examId);
      if (session) {
        progress[paper.examId] = {
          timed: session.timed,
          answerSheet: sessionUsesAnswerSheet(session),
        };
      }
    }
    setInProgress(progress);
  }, []);

  const mix = mixForPaper(total, lean);
  const rhythm = focusRhythm(mix);
  const questionCount = mix.enMath + mix.deMath + mix.germanCount;
  const minutes = paperMinutes(questionCount);
  const preview = rhythm.slice(0, 16);
  const selectedCount = chapters.length + german.length;
  const canBuild = chapters.length > 0 && german.length > 0 && !building;

  const selectedIn = (group: TopicGroup) =>
    group.rows.filter((row) => isRowOn(row.id, chapters, german)).length;

  const toggleRow = (id: string) => {
    const chapter = Number(id);
    if (id === String(chapter) && chapter >= 1 && chapter <= 13) {
      setChapters((prev) =>
        prev.includes(chapter)
          ? prev.filter((n) => n !== chapter)
          : [...prev, chapter].sort((a, b) => a - b),
      );
      return;
    }
    setGerman((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleGroup = (group: TopicGroup) => {
    const ids = group.rows.map((row) => row.id);
    const allOn = ids.every((id) => isRowOn(id, chapters, german));
    if (group.key === "german") {
      setGerman(allOn ? [] : ids);
      return;
    }
    const nums = ids.map(Number);
    setChapters((prev) => {
      const rest = prev.filter((n) => !nums.includes(n));
      return allOn ? rest : [...rest, ...nums].sort((a, b) => a - b);
    });
  };

  const applyCount = (value: number) => {
    const next = clampPaperCount(value);
    setTotal(next);
    setCountDraft(String(next));
  };

  const build = async () => {
    setBuilding(true);
    setError(null);
    const result = await buildHybridPaper({
      total,
      lean,
      mathChapters: chapters,
      germanTexts: german,
    });
    setBuilding(false);
    if ("error" in result) {
      setError(result.error);
      return;
    }
    setHistory(listHybridPapers());
    setWithAnswerSheet(true);
    setSelected(result.paper);
  };

  const start = (timed: boolean) => {
    if (!selected) return;
    clearSession(selected.examId);
    setInProgress((prev) => {
      const next = { ...prev };
      delete next[selected.examId];
      return next;
    });
    void navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: selected.examId },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = (paper: HybridPaperRecord) => {
    const saved = inProgress[paper.examId];
    if (!saved) return;
    void navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: paper.examId },
      search: { timed: saved.timed, answerSheet: saved.answerSheet },
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/hybrid/course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Hybrid Course
          </Link>
        }
      />

      <main className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Hybrid paper
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Mathematics and German reading, one task at a time. The focus sets which track opens
              the paper. The order follows the book.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {FOCI.map((item) => {
                const active = mix.leanId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLean(leanValueFor(item.id))}
                    className={cn(
                      "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all sm:text-sm",
                      active
                        ? "text-white shadow-md"
                        : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                    )}
                    style={
                      active
                        ? { backgroundColor: item.accent, borderColor: item.accent }
                        : undefined
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <section
            className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
            style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="min-w-0">
                <h2 className="font-display text-xl font-semibold">Select topics & subtopics</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Expand a unit and tick chapters. German texts sit in the last unit. The paper
                  draws from what you leave on.
                </p>

                <ul className="mt-5 space-y-2">
                  {groups.map((group) => {
                    const open = expanded[group.key] === true;
                    const picked = selectedIn(group);
                    const allOn = picked === group.rows.length && group.rows.length > 0;
                    return (
                      <li
                        key={group.key}
                        className="overflow-hidden rounded-xl border border-border"
                      >
                        <div className="flex min-w-0 items-stretch bg-secondary/30">
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded((current) => ({ ...current, [group.key]: !open }))
                            }
                            className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5 text-left sm:px-4"
                          >
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                                open ? "rotate-0" : "-rotate-90",
                              )}
                            />
                            <span className="min-w-0 flex-1">
                              <span className="block font-display text-sm font-semibold leading-snug">
                                {group.heading}
                              </span>
                              {group.heading !== group.title ? (
                                <span className="mt-0.5 line-clamp-2 block whitespace-normal text-xs leading-snug text-muted-foreground">
                                  {group.title}
                                </span>
                              ) : null}
                            </span>
                            {picked > 0 ? (
                              <span
                                className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                                style={{
                                  backgroundColor: `color-mix(in oklab, ${HYBRID_ACCENT} 18%, var(--card))`,
                                  color: HYBRID_ACCENT,
                                }}
                              >
                                {picked}/{group.rows.length}
                              </span>
                            ) : null}
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleGroup(group)}
                            className="shrink-0 border-l border-border px-3 text-[11px] font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                          >
                            {allOn ? "Clear" : "All"}
                          </button>
                        </div>
                        {open ? (
                          <ul className="divide-y divide-border/60 px-2 py-1">
                            {group.rows.map((row) => {
                              const checked = isRowOn(row.id, chapters, german);
                              return (
                                <li key={row.id}>
                                  <label
                                    className={cn(
                                      "flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                                      checked ? "bg-secondary/60" : "hover:bg-secondary/40",
                                    )}
                                  >
                                    <input
                                      type="checkbox"
                                      className="mt-0.5 h-4 w-4 rounded border-border"
                                      style={{ accentColor: HYBRID_ACCENT }}
                                      checked={checked}
                                      onChange={() => toggleRow(row.id)}
                                    />
                                    <span className="min-w-0 flex-1">
                                      <span className="text-sm font-semibold tabular-nums">
                                        {row.id}
                                      </span>
                                      <span className="mt-0.5 line-clamp-2 block whitespace-normal text-xs leading-snug text-muted-foreground">
                                        {row.title}
                                        {row.detail ? ` · ${row.detail}` : ""}
                                      </span>
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>

                <h2 className="mt-8 font-display text-lg font-semibold">Number of Questions</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {HYBRID_PAPER_MIN_QUESTIONS}–{HYBRID_PAPER_MAX_QUESTIONS} for the whole paper ·{" "}
                  {HYBRID_PAPER_MINUTES_PER_QUESTION} min each timed
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <label htmlFor="hybrid-q-count" className="text-sm font-medium text-foreground">
                    Questions
                  </label>
                  <input
                    id="hybrid-q-count"
                    type="number"
                    min={HYBRID_PAPER_MIN_QUESTIONS}
                    max={HYBRID_PAPER_MAX_QUESTIONS}
                    value={countDraft}
                    onChange={(event) => setCountDraft(event.target.value)}
                    onBlur={() => applyCount(Number(countDraft))}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        applyCount(Number(countDraft));
                      }
                    }}
                    className="w-28 rounded-md border border-border bg-card px-3 py-2.5 text-sm font-semibold tabular-nums outline-none focus:ring-1"
                    onFocus={(event) => {
                      event.currentTarget.style.borderColor = HYBRID_ACCENT;
                    }}
                    onBlurCapture={(event) => {
                      event.currentTarget.style.borderColor = "";
                    }}
                  />
                  <span className="text-xs text-muted-foreground">
                    max {HYBRID_PAPER_MAX_QUESTIONS}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {minutes} min timed
                  </span>
                  {selectedCount > 0 ? (
                    <span>
                      {selectedCount} topic{selectedCount > 1 ? "s" : ""}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="min-w-0 lg:sticky lg:top-24">
                <PaperShape
                  mixLabel={leanLabel(mix.leanId)}
                  enMath={mix.enMath}
                  deMath={mix.deMath}
                  germanCount={mix.germanCount}
                  total={questionCount}
                  minutes={minutes}
                  lean={lean}
                  sentence={focusSentence(rhythm)}
                  preview={preview}
                  extra={Math.max(0, rhythm.length - preview.length)}
                  onLean={setLean}
                />
              </div>
            </div>

            {error ? (
              <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            ) : null}

            <button
              type="button"
              disabled={!canBuild}
              onClick={() => void build()}
              className={cn(
                "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all",
                canBuild
                  ? "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  : "cursor-not-allowed opacity-60",
              )}
              style={{
                backgroundColor: HYBRID_ACCENT,
                boxShadow: canBuild ? `0 4px 14px -4px ${HYBRID_ACCENT}80` : undefined,
              }}
            >
              {building ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Building paper…
                </>
              ) : (
                <>
                  <BookOpen className="h-4 w-4" />
                  Create Hybrid Paper
                </>
              )}
            </button>
          </section>

          <section className="mt-12">
            <h2 className="mb-5 font-display text-xl font-semibold">Your Hybrid Papers</h2>
            {history === null ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : history.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
                No hybrid papers yet. Pick a focus, select chapters and German texts, and build a
                paper.
              </div>
            ) : (
              <div className="grid gap-4">
                {history.map((paper) => {
                  const focus = FOCI.find((item) => item.id === paper.mix.leanId) ?? FOCI[1];
                  return (
                    <div
                      key={paper.id}
                      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white"
                            style={{
                              backgroundColor: focus.accent,
                              borderColor: focus.accent,
                            }}
                          >
                            {focus.label}
                          </span>
                          <h3 className="font-display text-base font-semibold">{paper.title}</h3>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {paper.questions.length} questions · {paper.durationMinutes} min ·{" "}
                          {new Date(paper.createdAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Math {paper.mathChapters.join(", ")} · German{" "}
                          {paper.germanTexts.join(", ")}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {inProgress[paper.examId] ? (
                          <button
                            type="button"
                            onClick={() => resume(paper)}
                            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
                          >
                            <PlayCircle className="h-4 w-4" />
                            Resume
                          </button>
                        ) : null}
                        <button
                          type="button"
                          onClick={() => {
                            setWithAnswerSheet(true);
                            setSelected(paper);
                          }}
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">{selected?.title ?? "Start paper"}</DialogTitle>
            <DialogDescription>
              {selected?.questions.length} questions · {selected?.durationMinutes} minutes timed
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

function isRowOn(id: string, chapters: number[], german: string[]): boolean {
  const chapter = Number(id);
  if (id === String(chapter) && chapter >= 1 && chapter <= 13) return chapters.includes(chapter);
  return german.includes(id);
}

function PaperShape({
  mixLabel,
  enMath,
  deMath,
  germanCount,
  total,
  minutes,
  lean,
  sentence,
  preview,
  extra,
  onLean,
}: {
  mixLabel: string;
  enMath: number;
  deMath: number;
  germanCount: number;
  total: number;
  minutes: number;
  lean: number;
  sentence: string;
  preview: TrackSide[];
  extra: number;
  onLean: (lean: number) => void;
}) {
  const rows = [
    { id: "en", label: "Mathematics · English", count: enMath, accent: BBE },
    { id: "de", label: "Mathematics · German", count: deMath, accent: WISO },
    { id: "reading", label: "German reading", count: germanCount, accent: WISO },
  ].filter((row) => row.count > 0);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 85% 70% at 50% 0%, color-mix(in oklab, ${HYBRID_ACCENT} 12%, transparent) 0%, transparent 58%)`,
        }}
      />
      <div className="relative z-10 p-4 sm:p-5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: HYBRID_ACCENT }}
        >
          Order
        </p>
        <h3 className="mt-0.5 font-display text-base font-bold tracking-tight text-foreground">
          Paper shape
        </h3>
        <p className="mt-0.5 text-[11px] text-muted-foreground">{sentence}</p>

        <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-3.5">
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: HYBRID_ACCENT }}
          >
            {mixLabel} paper
          </p>
          <ul className="mt-2 space-y-1.5">
            {rows.map((row) => (
              <li key={row.id} className="flex items-baseline justify-between gap-3 text-xs">
                <span className="min-w-0 truncate font-medium text-foreground">{row.label}</span>
                <span className="shrink-0 tabular-nums font-semibold" style={{ color: row.accent }}>
                  {row.count}q
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2 text-[11px] font-semibold">
            <span>
              Total Questions <span className="tabular-nums">{total}</span>
            </span>
            <span className="text-muted-foreground">
              Est. <span className="tabular-nums text-foreground">{minutes}</span> min
            </span>
          </div>
        </div>

        <p
          className="mt-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ color: HYBRID_ACCENT }}
        >
          One task at a time
        </p>
        <ol className="mt-2 flex flex-wrap gap-1.5">
          {preview.map((side, index) => (
            <li
              key={`${side}-${index}`}
              className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-white"
              style={{ backgroundColor: side === "bbe" ? BBE : WISO }}
            >
              {index + 1} {side === "bbe" ? "BBE" : "WiSo"}
            </li>
          ))}
          {extra > 0 ? (
            <li className="px-1 py-1 text-[10px] font-semibold text-muted-foreground">+{extra}</li>
          ) : null}
        </ol>

        <label className="mt-4 block text-xs font-semibold text-muted-foreground">
          Focus · {lean}
          <input
            type="range"
            min={0}
            max={100}
            value={lean}
            onChange={(event) => onLean(Number(event.target.value))}
            className="mt-2 w-full accent-teal-700"
          />
        </label>
        <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
          <span>BBE</span>
          <span>Half</span>
          <span>WiSo</span>
        </div>
      </div>
    </div>
  );
}
