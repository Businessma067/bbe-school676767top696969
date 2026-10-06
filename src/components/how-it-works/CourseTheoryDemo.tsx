import { useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";

const READ = [1, 10, 11] as const;

/** Cruise speed of each rush, before the brake. */
const CRUISE_PX_PER_MS = 2.7;

const CHAPTERS = Object.values(MATH_COURSE_THEORY).sort((a, b) => a.num - b.num);

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
        className="min-h-0 flex-1 overflow-y-auto [overflow-anchor:none]"
        style={{ scrollBehavior: "auto" }}
        onScroll={(event) => {
          const el = event.currentTarget;
          const cached = Number(el.dataset.max);
          const max = cached > 0 ? cached : el.scrollHeight - el.clientHeight;
          onScroll(max > 0 ? el.scrollTop / max : 0);
        }}
      >
        <article
          data-ready="0"
          className="mx-auto w-full max-w-[78rem] px-4 py-3 sm:px-5 [&_.katex]:text-[1.03em] [&_.katex-display]:my-3 [&_.katex-display]:overflow-x-auto"
        >
          <TheoryArticle
            markdown={markdown}
            enableMath
            dense
            onReady={() => {
              const article = document.querySelector<HTMLElement>('[data-d="theory-scroll"] article');
              if (article) article.dataset.ready = "1";
            }}
          />
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

/** Fast for most of the way, then a long soft brake. Speed matches at the join and ends at rest. */
function fastThenStop(t: number) {
  const split = 0.68;
  const coast = 0.914;
  if (t <= split) return (t / split) * coast;
  const u = (t - split) / (1 - split);
  return coast + (1 - coast) * (1 - (1 - u) ** 5);
}

function pointOf(stage: HTMLElement, el: HTMLElement) {
  const sr = stage.getBoundingClientRect();
  const box = el.getBoundingClientRect();
  return {
    x: box.left - sr.left + box.width / 2 - 5,
    y: box.top - sr.top + Math.min(box.height / 2, 18) - 3,
  };
}

/** Steady carry, then a soft landing. The hand is already moving on the first frame. */
function carryHand(t: number) {
  const brake = 0.84;
  if (t <= brake) return (t / brake) * 0.94;
  const u = (t - brake) / (1 - brake);
  return 0.94 + 0.06 * (1 - (1 - u) * (1 - u));
}

/** Move the pointer for the whole interval, so it never darts and then freezes. */
async function glideHand(
  api: DemoPlayerApi,
  stage: HTMLElement,
  to: { x: number; y: number },
  duration?: number,
) {
  const from = cursorNow(stage);
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  if (dist < 2) {
    api.setCursorAt(to);
    return;
  }
  const ms = duration ?? Math.round(Math.min(460, Math.max(260, dist / 1.65)));
  const started = performance.now();
  await new Promise<void>((resolve) => {
    const frame = (now: number) => {
      if (api.cancelled()) return resolve();
      const t = Math.min(1, (now - started) / ms);
      const e = carryHand(t);
      api.setCursorAt({
        x: from.x + (to.x - from.x) * e,
        y: from.y + (to.y - from.y) * e,
      });
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
  api.setCursorAt(to);
}

async function aim(api: DemoPlayerApi, selector: string) {
  await api.reveal(selector);
  const stage = api.stage();
  const el = stage?.querySelector<HTMLElement>(selector);
  if (stage && el) await glideHand(api, stage, pointOf(stage, el));
  await api.moveTo(selector, 30);
}

function handInText(stage: HTMLElement, panel: HTMLElement, depth: number, across: number) {
  const sr = stage.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  return {
    x: Math.max(24, Math.min(sr.width - 28, pr.left - sr.left + pr.width * across)),
    y: Math.max(pr.top - sr.top + 40, Math.min(sr.height - 28, pr.top - sr.top + pr.height * depth)),
  };
}

/** Move the chapter on the compositor. scrollTop would repaint the text and tear. */
function placeChapter(panel: HTMLElement, offset: number, max: number) {
  const article = panel.querySelector<HTMLElement>("article");
  if (article) article.style.transform = `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
  const bar = panel.parentElement?.querySelector<HTMLElement>('[data-d="theory-bar"]');
  if (bar && max > 0) bar.style.transform = `scaleX(${Math.min(1, offset / max)})`;
  panel.dataset.offset = String(Math.round(offset));
}

/** Rush, then brake. The hand glides for the whole rush, with no chase and no layout. */
async function rushThenStop(
  api: DemoPlayerApi,
  panel: HTMLElement,
  from: number,
  dest: number,
  max: number,
  depth: number,
  across: number,
) {
  const stage = api.stage();
  if (!stage) return;
  const distance = dest - from;
  if (distance < 16) return;
  const duration = Math.round(Math.max(720, distance / CRUISE_PX_PER_MS));
  const handMs = Math.round(duration * 1.22);
  const handFrom = cursorNow(stage);
  const handTo = handInText(stage, panel, depth, across);
  let elapsed = 0;
  let last = performance.now();
  await new Promise<void>((resolve) => {
    const frame = (now: number) => {
      if (api.cancelled()) return resolve();
      // A late frame must not skip ahead, or the page looks torn.
      elapsed += Math.min(28, Math.max(0, now - last));
      last = now;
      const t = Math.min(1, elapsed / duration);
      const e = carryHand(Math.min(1, elapsed / handMs));
      placeChapter(panel, from + distance * fastThenStop(t), max);
      api.setCursorAt({
        x: handFrom.x + (handTo.x - handFrom.x) * e,
        y: handFrom.y + (handTo.y - handFrom.y) * e,
      });
      if (t < 1 || elapsed < handMs) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
  placeChapter(panel, dest, max);
  api.setCursorAt(handTo);
}

async function readTwoStops(api: DemoPlayerApi) {
  let panel: HTMLElement | null = null;
  let lastHeight = -1;
  for (let i = 0; i < 80; i++) {
    if (api.cancelled()) return;
    panel = api.stage()?.querySelector<HTMLElement>('[data-d="theory-scroll"]') ?? null;
    if (panel) {
      panel.style.scrollBehavior = "auto";
      panel.scrollTop = 0;
      const height = panel.scrollHeight;
      const ready = panel.querySelector("article")?.dataset.ready === "1";
      if (ready && height > panel.clientHeight + 80 && height === lastHeight) break;
      lastHeight = height;
    }
    await api.flush();
    await api.wait(40);
  }
  if (!panel) return;
  const stage = api.stage();
  if (!stage) return;
  panel.scrollTop = 0;
  panel.style.overflow = "hidden";
  const article = panel.querySelector<HTMLElement>("article");
  if (article) {
    article.style.willChange = "transform";
    article.style.transform = "translate3d(0, 0, 0)";
  }
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const first = Math.round(max * 0.4);
  const second = Math.round(Math.min(max, Math.max(first + panel.clientHeight, max * 0.76)));
  panel.dataset.max = String(max);
  await rushThenStop(api, panel, 0, first, max, 0.46, 0.3);
  if (api.cancelled()) return;
  await glideHand(api, stage, handInText(stage, panel, 0.55, 0.42), 420);
  await rushThenStop(api, panel, first, Math.min(second, max), max, 0.7, 0.64);
}

/** How it works · Theory: chapters 1, 10 and 11, two rushes that reach about 75%. */
export function CourseTheoryDemo({
  rest = 1,
  lockCopy = false,
}: { rest?: number; lockCopy?: boolean } = {}) {
  const [open, setOpen] = useState<number | null>(null);
  const barPct = useRef(0);
  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const readChapter = async (num: (typeof READ)[number]) => {
      await aim(api, `[data-d="ch-${num}"]`);
      await api.click();
      setOpen(num);
      await api.flush();
      await readTwoStops(api);
      await aim(api, '[data-d="chapters"]');
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
  }, [rest], { rest, glideScale: 0.8 });

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
