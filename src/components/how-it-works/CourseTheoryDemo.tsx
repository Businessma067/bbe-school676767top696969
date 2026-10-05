import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { cn } from "@/lib/utils";
import { CourseFrame } from "./CourseFrame";

const READ = [1, 10, 11] as const;

/** Two nearby headings. The reader opens on the first and eases only as far as the second. */
const STOPS: Record<(typeof READ)[number], readonly [string, string]> = {
  1: ["elements-versus-subsets", "the-power-set"],
  10: ["growth-or-decay-what-the-base-does", "what-happens-if-you-change-the-start"],
  11: ["the-newton-quotient", "the-tangent-line"],
};

const CHAPTERS = Object.values(MATH_COURSE_THEORY).sort((a, b) => a.num - b.num);

function headingTop(panel: HTMLElement, id: string): number | null {
  const el = panel.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
  if (!el) return null;
  return el.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop;
}

function parkOn(panel: HTMLElement, id: string) {
  panel.style.scrollBehavior = "auto";
  const top = headingTop(panel, id);
  if (top == null || panel.clientHeight < 40) return false;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  panel.scrollTop = Math.max(0, Math.min(top - 12, max));
  return true;
}

function Reader({
  chapter,
  firstStop,
  onScroll,
}: {
  chapter: MathCourseTheoryChapter;
  firstStop: string;
  onScroll: (pct: number) => void;
}) {
  const markdown = chapter.markdown;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const chip = useMemo(() => {
    const line = markdown.split("\n").find((item) => /^##\s+\d+\.\d+\b/.test(item));
    return line?.replace(/^##\s+/, "").replace(/^(\d+\.\d+)\s+/, "$1 · ") ?? "";
  }, [markdown]);

  useLayoutEffect(() => {
    const panel = scrollRef.current;
    if (!panel) return;
    let cancelled = false;
    parkOn(panel, firstStop);
    const raf = requestAnimationFrame(() => {
      if (cancelled) return;
      parkOn(panel, firstStop);
      setReady(true);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [chapter.num, firstStop]);

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
        ref={scrollRef}
        data-d="theory-scroll"
        data-theory-ready={ready ? "1" : "0"}
        className={cn("min-h-0 flex-1 overflow-y-auto", !ready && "invisible")}
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
    y: Number(cursor?.dataset.cy ?? 88),
  };
}

function pointOnHeading(stage: HTMLElement, el: HTMLElement) {
  const sr = stage.getBoundingClientRect();
  const box = el.getBoundingClientRect();
  return {
    x: Math.max(28, Math.min(box.left - sr.left + 42, sr.width - 28)),
    y: Math.max(72, Math.min(box.top - sr.top + 16, sr.height - 40)),
  };
}

async function glideCursor(api: DemoPlayerApi, stage: HTMLElement, target: { x: number; y: number }) {
  const from = cursorNow(stage);
  const dist = Math.hypot(target.x - from.x, target.y - from.y);
  if (dist < 2) {
    api.setCursorAt(target);
    return;
  }
  const duration = Math.round(Math.max(900, Math.min(1800, dist / 0.28)));
  await api.tween(duration, (eased) => {
    api.setCursorAt({
      x: from.x + (target.x - from.x) * eased,
      y: from.y + (target.y - from.y) * eased,
    });
  });
  api.setCursorAt(target);
}

async function whenReady(api: DemoPlayerApi) {
  for (let i = 0; i < 40; i++) {
    if (api.cancelled()) return null;
    const panel = api.stage()?.querySelector<HTMLElement>('[data-theory-ready="1"]');
    if (panel && panel.clientHeight > 40) return panel;
    await api.flush();
    await api.wait(30);
  }
  return null;
}

/**
 * One short ease from the open heading to the next. Never walks the rest of the chapter.
 * The cursor is moved by hand here so the player does not scroll the article to "reveal" it.
 */
async function easeToSecond(api: DemoPlayerApi, panel: HTMLElement, id: string) {
  const stage = api.stage();
  const el = panel.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
  if (!stage || !el) return;
  panel.style.scrollBehavior = "auto";
  const from = panel.scrollTop;
  const top = headingTop(panel, id);
  if (top == null) return;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const cap = panel.clientHeight * 1.35;
  const dest = Math.max(from, Math.min(top - 12, from + cap, max));
  const distance = dest - from;
  if (distance < 12) return;
  const duration = Math.round(Math.max(3400, distance / 0.1));
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

/** How it works · Theory: three chapters, two smooth stops each, no opening skim. */
export function CourseTheoryDemo({
  rest = 1,
  lockCopy = false,
}: { rest?: number; lockCopy?: boolean } = {}) {
  const [open, setOpen] = useState<number>(READ[0]);
  const barPct = useRef(0);
  const { stageRef, scrollRef, cursorRef, clicking, fade } = useDemoPlayer(async (api) => {
    for (const num of READ) {
      if (api.cancelled()) return;
      const [first, second] = STOPS[num];
      setOpen(num);
      await api.flush();
      const panel = await whenReady(api);
      const stage = api.stage();
      const firstEl = panel?.querySelector<HTMLElement>(`#${CSS.escape(first)}`);
      if (!panel || !stage || !firstEl) continue;
      await glideCursor(api, stage, pointOnHeading(stage, firstEl));
      await api.wait(1200);
      if (api.cancelled()) return;
      await easeToSecond(api, panel, second);
      const secondEl = panel.querySelector<HTMLElement>(`#${CSS.escape(second)}`);
      if (secondEl) await glideCursor(api, stage, pointOnHeading(stage, secondEl));
      await api.wait(1200);
    }
  }, [rest], { rest });

  const chapter = MATH_COURSE_THEORY[open];
  const firstStop = STOPS[open as (typeof READ)[number]]?.[0] ?? STOPS[1][0];

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
            firstStop={firstStop}
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
