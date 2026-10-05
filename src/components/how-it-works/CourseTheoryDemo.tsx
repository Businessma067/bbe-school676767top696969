import { useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";

const READ = [1, 10, 11] as const;

/** Two headings in each chapter. The read starts at the top and eases to each one. */
const STOPS: Record<(typeof READ)[number], readonly [string, string]> = {
  1: ["what-a-set-is", "the-power-set"],
  10: ["start-with-a-picture", "growth-or-decay-what-the-base-does"],
  11: ["the-newton-quotient", "the-tangent-line"],
};

/** About 320px/s. Long enough to read, short of the old flick. */
const SCROLL_PX_PER_MS = 0.32;

const CHAPTERS = Object.values(MATH_COURSE_THEORY).sort((a, b) => a.num - b.num);

function headingTop(panel: HTMLElement, id: string): number | null {
  const el = panel.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
  if (!el) return null;
  return el.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop;
}

function Reader({
  chapter,
  onScroll,
}: {
  chapter: MathCourseTheoryChapter;
  onScroll: (pct: number) => void;
}) {
  const markdown = chapter.markdown;
  const chip = useMemo(() => {
    const line = markdown.split("\n").find((item) => /^##\s+\d+\.\d+\b/.test(item));
    return line?.replace(/^##\s+/, "").replace(/^(\d+\.\d+)\s+/, "$1 · ") ?? "";
  }, [markdown]);
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-card">
      <div className="shrink-0 border-b border-border px-3 py-1.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[10px] font-bold uppercase tracking-widest text-taupe">
              Chapter {chapter.num} · Theory
            </div>
            <div className="truncate font-display text-sm font-bold leading-tight">
              {chapter.title}
            </div>
          </div>
          <span
            data-d="chapters"
            className="inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-border bg-card px-2 text-[11px] font-semibold text-foreground"
          >
            <PanelLeftOpen className="h-3.5 w-3.5" />
            Show chapters
          </span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            data-d="theory-bar"
            className="h-full w-full origin-left rounded-full bg-primary"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        {chip ? (
          <div className="mt-1.5 flex">
            <span className="max-w-full truncate rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
              {chip}
            </span>
          </div>
        ) : null}
      </div>
      <div
        data-d="theory-scroll"
        className="min-h-0 flex-1 overflow-y-auto"
        style={{ scrollBehavior: "auto" }}
        onScroll={(event) => {
          const el = event.currentTarget;
          const max = el.scrollHeight - el.clientHeight;
          onScroll(max > 0 ? el.scrollTop / max : 0);
        }}
      >
        <article className="mx-auto w-full max-w-[78rem] px-4 py-3 sm:px-5 [&_.katex]:text-[1.03em] [&_.katex-display]:my-3 [&_.katex-display]:overflow-x-auto">
          <TheoryArticle markdown={markdown} enableMath dense />
        </article>
      </div>
    </div>
  );
}

function cursorNow(stage: HTMLElement) {
  const cursor = stage.querySelector<HTMLElement>("[data-cx]");
  return {
    x: Number(cursor?.dataset.cx ?? 48),
    y: Number(cursor?.dataset.cy ?? 120),
  };
}

function pointOnHeading(stage: HTMLElement, el: HTMLElement) {
  const sr = stage.getBoundingClientRect();
  const box = el.getBoundingClientRect();
  return {
    x: Math.max(28, Math.min(box.left - sr.left + 42, sr.width - 28)),
    y: Math.max(78, Math.min(box.top - sr.top + 16, sr.height - 36)),
  };
}

/** Medium glide down to one heading, then the caller pauses. Does not touch the chapter list. */
async function easeToHeading(api: DemoPlayerApi, panel: HTMLElement, id: string) {
  const stage = api.stage();
  const el = panel.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
  if (!stage || !el) return;
  panel.style.scrollBehavior = "auto";
  const from = panel.scrollTop;
  const top = headingTop(panel, id);
  if (top == null) return;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const dest = Math.max(from, Math.min(top - 12, max));
  const distance = dest - from;
  if (distance < 12) return;
  const duration = Math.round(Math.max(1400, distance / SCROLL_PX_PER_MS));
  let x = cursorNow(stage).x;
  let y = cursorNow(stage).y;
  let prev = performance.now();
  await api.tween(duration, (eased) => {
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0, (now - prev) / 1000));
    prev = now;
    panel.scrollTop = from + distance * eased;
    const spot = pointOnHeading(stage, el);
    const follow = 1 - Math.exp(-dt / 0.09);
    x += (spot.x - x) * follow;
    y += (spot.y - y) * follow;
    api.setCursorAt({ x, y });
  });
  panel.scrollTop = dest;
  api.setCursorAt(pointOnHeading(stage, el));
}

async function readTwoStops(api: DemoPlayerApi, num: (typeof READ)[number]) {
  const spots = STOPS[num];
  let panel: HTMLElement | null = null;
  for (let i = 0; i < 40; i++) {
    if (api.cancelled()) return;
    panel = api.stage()?.querySelector<HTMLElement>('[data-d="theory-scroll"]') ?? null;
    if (panel) {
      panel.style.scrollBehavior = "auto";
      panel.scrollTop = 0;
      const ready = spots.every((id) => panel!.querySelector(`#${CSS.escape(id)}`));
      if (ready && panel.scrollHeight > panel.clientHeight + 40) break;
    }
    await api.flush();
    await api.wait(40);
  }
  if (!panel) return;
  panel.scrollTop = 0;
  await api.wait(320);
  for (const id of spots) {
    if (api.cancelled()) return;
    await easeToHeading(api, panel, id);
    await api.wait(1000);
  }
}

/** How it works · Theory: open chapters 1, 10 and 11 from the list, then two medium stops in each. */
export function CourseTheoryDemo({
  rest = 1,
  lockCopy = false,
}: { rest?: number; lockCopy?: boolean } = {}) {
  const [open, setOpen] = useState<number | null>(null);
  const barPct = useRef(0);
  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const readChapter = async (num: (typeof READ)[number]) => {
      await api.moveTo(`[data-d="ch-${num}"]`, 80);
      await api.click();
      setOpen(num);
      await api.flush();
      await readTwoStops(api, num);
      await api.moveTo('[data-d="chapters"]', 40);
      await api.click();
      setOpen(null);
      await api.flush();
    };

    setFade(true);
    await api.wait(420);
    setOpen(null);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    await api.flush();
    setFade(false);
    await api.wait(360);

    for (const num of READ) {
      if (api.cancelled()) return;
      await readChapter(num);
    }
    await api.wait(360);
  }, [rest], { rest });

  const chapter = open == null ? null : MATH_COURSE_THEORY[open];

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      overlay={
        chapter ? (
          <Reader
            key={chapter.num}
            chapter={chapter}
            onScroll={(pct) => {
              barPct.current = pct;
              const bar = stageRef.current?.querySelector<HTMLElement>('[data-d="theory-bar"]');
              if (bar) bar.style.transform = `scaleX(${pct})`;
            }}
          />
        ) : null
      }
    >
      <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
        <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Chapters
        </div>
        <ul className="space-y-1">
          {CHAPTERS.map((item) => (
            <li key={item.num}>
              <div className="flex h-10 items-center gap-2 rounded-xl px-2">
                <ChevronDown className="h-4 w-4 shrink-0 -rotate-90 text-muted-foreground" />
                <span
                  data-d={`ch-${item.num}`}
                  className="block w-fit max-w-[85%] truncate text-sm font-bold text-foreground"
                >
                  {item.num}. {item.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CourseFrame>
  );
}
