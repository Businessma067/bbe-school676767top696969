import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { HYBRID_MATH_UNITS, hybridMathChapter } from "@/lib/hybrid-math";
import {
  buildHybridPaper,
  germanTextCatalog,
  listHybridPapers,
  type HybridPaperRecord,
} from "@/lib/hybrid-mock-paper";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { chapterTitlePair } from "@/lib/hybrid-math-pair";
import {
  HYBRID_PAPER_DEFAULT_QUESTIONS,
  HYBRID_PAPER_MAX_QUESTIONS,
  HYBRID_PAPER_MIN_QUESTIONS,
  clampPaperCount,
  leanValueFor,
  mixForPaper,
  paperMinutes,
  paperSections,
  type HybridLeanId,
} from "@/config/hybrid-mock-builder";
import { cn } from "@/lib/utils";

const LEANS: { id: HybridLeanId; title: string; blurb: string }[] = [
  {
    id: "bbe",
    title: "BBE",
    blurb: "Mathematics in English. German reading stays in the paper, as the shorter block.",
  },
  {
    id: "half",
    title: "Half",
    blurb: "Equal mathematics and German reading. Math stems split evenly, English and German.",
  },
  {
    id: "wiso",
    title: "WiSo",
    blurb: "Mathematics in German, then German reading, in the 13 + 9 shape of the WiSo paper.",
  },
];

export function HybridPaperBuilder({ initialLean = "half" }: { initialLean?: HybridLeanId }) {
  const navigate = useNavigate();
  const texts = useMemo(() => germanTextCatalog(), []);
  const allChapters = HYBRID_MATH_UNITS.flatMap((unit) => [...unit.chapters]);
  const [lean, setLean] = useState(leanValueFor(initialLean));
  const [total, setTotal] = useState(HYBRID_PAPER_DEFAULT_QUESTIONS);
  const [chapters, setChapters] = useState<number[]>(allChapters);
  const [german, setGerman] = useState<string[]>(texts.map((text) => text.id));
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HybridPaperRecord[]>([]);

  useEffect(() => {
    setHistory(listHybridPapers());
  }, []);

  const mix = mixForPaper(total, lean);
  const sections = paperSections(mix);
  const questionCount = mix.enMath + mix.deMath + mix.germanCount;
  const minutes = paperMinutes(questionCount);

  const toggleChapter = (num: number) => {
    setChapters((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num].sort((a, b) => a - b),
    );
  };
  const toggleText = (id: string) => {
    setGerman((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
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
    void navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: result.paper.examId },
      search: { timed: true, answerSheet: true },
    });
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-card p-5">
        <p
          className="text-xs font-semibold uppercase tracking-[0.16em]"
          style={{ color: HYBRID_ACCENT }}
        >
          Lean
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {LEANS.map((item) => {
            const active = mix.leanId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLean(leanValueFor(item.id))}
                className={cn(
                  "rounded-xl border p-4 text-left",
                  active ? "text-white" : "border-border bg-background",
                )}
                style={
                  active
                    ? { backgroundColor: HYBRID_ACCENT, borderColor: HYBRID_ACCENT }
                    : undefined
                }
              >
                <p className="font-display text-lg font-semibold">{item.title}</p>
                <p
                  className={cn(
                    "mt-1 text-xs leading-relaxed",
                    active ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {item.blurb}
                </p>
              </button>
            );
          })}
        </div>
        <label className="mt-4 block text-xs font-semibold text-muted-foreground">
          Fine lean · {lean}
          <input
            type="range"
            min={0}
            max={100}
            value={lean}
            onChange={(event) => setLean(Number(event.target.value))}
            className="mt-2 w-full accent-teal-700"
          />
        </label>
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
          <span>BBE</span>
          <span>Half</span>
          <span>WiSo</span>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Blueprint
          </p>
          <p className="mt-2 font-display text-2xl font-semibold">
            {mix.mathCount} mathematics + {mix.germanCount} German
          </p>
          <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-secondary">
            {sections.map((section) => (
              <div
                key={section.id}
                title={`${section.label} · ${section.count}`}
                style={{
                  width: `${(section.count / questionCount) * 100}%`,
                  backgroundColor:
                    section.id === "math-en"
                      ? "#C2643A"
                      : section.id === "math-de"
                        ? "#115E59"
                        : "#5EEAD4",
                }}
              />
            ))}
          </div>
          <ol className="mt-3 space-y-1 text-sm text-muted-foreground">
            {sections.map((section, index) => (
              <li key={section.id} className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      section.id === "math-en"
                        ? "#C2643A"
                        : section.id === "math-de"
                          ? "#115E59"
                          : "#5EEAD4",
                  }}
                />
                {index + 1}. {section.label} · {section.count}
              </li>
            ))}
            <li>
              {minutes} minutes · {questionCount} questions · at least one mathematics and one
              German task
            </li>
          </ol>
          <ul className="mt-3 space-y-1 text-xs leading-relaxed text-muted-foreground">
            <li>BBE is 13 mathematics for every 6 German, and every math stem stays English.</li>
            <li>Half splits the two sections, then splits the math stems evenly by language.</li>
            <li>WiSo follows 13 mathematics + 9 German reading, with German math stems.</li>
            <li>
              A case is used once. German math slots prefer a real overlay when the bank has one.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Questions
            <input
              type="number"
              min={HYBRID_PAPER_MIN_QUESTIONS}
              max={HYBRID_PAPER_MAX_QUESTIONS}
              value={total}
              onChange={(event) => setTotal(clampPaperCount(Number(event.target.value)))}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-base font-semibold text-foreground"
            />
          </label>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {HYBRID_PAPER_MIN_QUESTIONS}–{HYBRID_PAPER_MAX_QUESTIONS}
          </p>
          <button
            type="button"
            disabled={building}
            onClick={() => void build()}
            className="mt-4 w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            style={{ backgroundColor: HYBRID_ACCENT }}
          >
            {building ? "Building…" : "Build paper"}
          </button>
          {error ? <p className="mt-3 text-xs text-destructive">{error}</p> : null}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold">Mathematics</h2>
          <p className="mt-1 text-sm text-muted-foreground">Chapters drawn into the math block.</p>
          <div className="mt-3 space-y-4">
            {HYBRID_MATH_UNITS.map((unit) => (
              <div key={unit.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {unit.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {unit.chapters.map((num) => {
                    const chapter = hybridMathChapter(num);
                    const titles = chapterTitlePair(num);
                    const on = chapters.includes(num);
                    return (
                      <li key={num}>
                        <label className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-secondary">
                          <input
                            type="checkbox"
                            className="mt-1"
                            checked={on}
                            onChange={() => toggleChapter(num)}
                          />
                          <span>
                            {num}. {chapter?.title ?? titles.en}
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {titles.de}
                            </span>
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">German reading</h2>
          <p className="mt-1 text-sm text-muted-foreground">Texts drawn into the language block.</p>
          <ul className="mt-3 space-y-1">
            {texts.map((text) => (
              <li key={text.id}>
                <label className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-secondary">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={german.includes(text.id)}
                    onChange={() => toggleText(text.id)}
                  />
                  <span>
                    {text.title}
                    <span className="ml-2 text-xs text-muted-foreground">{text.tasks} tasks</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {history.length > 0 ? (
        <section>
          <h2 className="font-display text-lg font-semibold">Recent papers</h2>
          <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card">
            {history.map((paper) => (
              <li key={paper.id} className="flex items-center justify-between gap-3 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{paper.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {paper.mix.enMath} EN math · {paper.mix.deMath} DE math ·{" "}
                    {paper.mix.germanCount} German · {paper.durationMinutes} min
                  </p>
                </div>
                <Link
                  to="/mock-exams/$examId/take"
                  params={{ examId: paper.examId }}
                  search={{ timed: true, answerSheet: true }}
                  className="text-xs font-semibold"
                  style={{ color: HYBRID_ACCENT }}
                >
                  Open
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
