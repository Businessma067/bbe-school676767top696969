import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadMathChapterTasks } from "@/data/math-chapters";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import {
  HYBRID_MATH_TARGET,
  HYBRID_MATH_UNITS,
  countSharedMathPassed,
  hybridMathChapter,
  readSharedMathSnapshot,
} from "@/lib/hybrid-math";

export function SharedMathLibrary() {
  const [passed, setPassed] = useState<string[]>([]);
  const [revision, setRevision] = useState<string[]>([]);
  const [totals, setTotals] = useState<Record<number, number>>({});

  useEffect(() => {
    const snap = readSharedMathSnapshot();
    setPassed(snap.passed);
    setRevision(snap.revision);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const chapters = HYBRID_MATH_UNITS.flatMap((unit) => [...unit.chapters]);
      for (const num of chapters) {
        if (cancelled) return;
        const tasks = await loadMathChapterTasks(num);
        if (cancelled) return;
        setTotals((prev) => (prev[num] === tasks.length ? prev : { ...prev, [num]: tasks.length }));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const passedTotal = passed.length;
  const ring = Math.min(100, Math.round((passedTotal / HYBRID_MATH_TARGET) * 100));
  const continueChapter =
    HYBRID_MATH_UNITS.flatMap((unit) => [...unit.chapters]).find((num) => {
      const total = totals[num];
      if (!total) return false;
      return countSharedMathPassed(passed, num) < total;
    }) ?? 1;

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
        >
          <h2 className="font-display text-2xl font-semibold">
            English or German stem, one result
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Chapters 1–13 are the shared mathematics syllabus. Open a chapter as a paper, or take
            each task in order: the focus decides whether BBE or WiSo comes first. A fully correct
            task is stored once. Tasks still in revision stay out of the count until every statement
            is right.
          </p>
          <Link
            to="/hybrid/math"
            search={{ chapter: continueChapter }}
            className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
            style={{
              backgroundColor: HYBRID_ACCENT,
              boxShadow: `0 4px 14px -4px ${HYBRID_ACCENT}80`,
            }}
          >
            Continue chapter {continueChapter}
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Progress
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tabular-nums">{passedTotal}</p>
          <p className="text-sm text-muted-foreground">
            fully correct · target {HYBRID_MATH_TARGET} for the ring
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full"
              style={{ width: `${ring}%`, backgroundColor: HYBRID_ACCENT }}
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {revision.length} tasks sitting in revision
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {HYBRID_MATH_UNITS.map((unit) => (
          <section key={unit.id}>
            <h3 className="font-display text-2xl font-bold tracking-tight">{unit.title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{unit.blurb}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {unit.chapters.map((num) => {
                const chapter = hybridMathChapter(num);
                if (!chapter) return null;
                const done = countSharedMathPassed(passed, num);
                const total = totals[num];
                const width = total ? Math.min(100, (done / total) * 100) : 0;
                return (
                  <article
                    key={num}
                    className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
                    style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Chapter {num}
                      </p>
                      <p className="text-xs tabular-nums text-muted-foreground">
                        {done}
                        {total != null ? ` / ${total}` : ""} correct
                      </p>
                    </div>
                    <h4 className="mt-1 font-display text-lg font-semibold">{chapter.title}</h4>
                    {chapter.subsections?.length ? (
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {chapter.subsections.map((sub) => sub.title).join(" · ")}
                      </p>
                    ) : null}
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${width}%`, backgroundColor: HYBRID_ACCENT }}
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        to="/hybrid/math"
                        search={{ chapter: num }}
                        className="inline-flex items-center justify-center rounded-md px-3 py-2 text-xs font-semibold text-white"
                        style={{ backgroundColor: HYBRID_ACCENT }}
                      >
                        Paper
                      </Link>
                      <Link
                        to="/hybrid/math"
                        search={{ chapter: num, view: "split" }}
                        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
                      >
                        BBE then WiSo
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
