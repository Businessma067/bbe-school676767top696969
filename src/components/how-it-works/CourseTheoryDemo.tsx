import { useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";

const READ = [1, 10, 11] as const;

/** Cruise speed of each rush, before the brake. */
const CRUISE_PX_PER_MS = 1.6;

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

/** Fast for most of the way, then a smooth brake to a full stop. */
function fastThenStop(t: number) {
  const split = 0.75;
  const coast = (3 * split) / (1 + 2 * split);
  if (t <= split) return (t / split) * coast;
  const u = (t - split) / (1 - split);
  return coast + (1 - coast) * (1 - (1 - u) ** 3);
}

/** A reading hand, deep in the column, not pinned to the top edge. */
function deepHand(stage: HTMLElement, panel: HTMLElement) {
  const sr = stage.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  const x = pr.left - sr.left + Math.min(148, Math.max(72, pr.width * 0.34));
  const y = pr.top - sr.top + pr.height * 0.64;
  return {
    x: Math.max(32, Math.min(x, sr.width - 28)),
    y: Math.max(pr.top - sr.top + 36, Math.min(y, sr.height - 24)),
  };
}

function stopNear(panel: HTMLElement, fraction: number, floor: number) {
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const target = max * fraction;
  let best = Math.min(max, Math.max(floor, target));
  let bestDist = max * 0.18;
  for (const node of panel.querySelectorAll<HTMLElement>("h2, h3")) {
    if (!node.id) continue;
    const top = headingTop(panel, node.id);
    if (top == null) continue;
    const dest = Math.max(0, Math.min(top - 20, max));
    if (dest < floor) continue;
    const dist = Math.abs(dest - target);
    if (dist < bestDist) {
      bestDist = dist;
      best = dest;
    }
  }
  return best;
}

/** Rush, then brake smoothly onto one stop. The hand stays deep in the text. */
async function rushThenStop(api: DemoPlayerApi, panel: HTMLElement, dest: number) {
  const stage = api.stage();
  if (!stage) return;
  panel.style.scrollBehavior = "auto";
  const from = panel.scrollTop;
  const distance = dest - from;
  if (distance < 16) return;
  const duration = Math.round(Math.max(1500, (1.2 * distance) / CRUISE_PX_PER_MS));
  let x = cursorNow(stage).x;
  let y = cursorNow(stage).y;
  let prev = performance.now();
  const started = performance.now();
  await new Promise<void>((resolve) => {
    const frame = (now: number) => {
      if (api.cancelled()) return resolve();
      const t = Math.min(1, (now - started) / duration);
      const dt = Math.min(0.05, Math.max(0, (now - prev) / 1000));
      prev = now;
      panel.scrollTop = from + distance * fastThenStop(t);
      const spot = deepHand(stage, panel);
      const follow = 1 - Math.exp(-dt / 0.06);
      x += (spot.x - x) * follow;
      y += (spot.y - y) * follow;
      api.setCursorAt({ x, y });
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
  panel.scrollTop = dest;
  if (stage) api.setCursorAt(deepHand(stage, panel));
}

async function readTwoStops(api: DemoPlayerApi) {
  let panel: HTMLElement | null = null;
  let lastHeight = -1;
  for (let i = 0; i < 40; i++) {
    if (api.cancelled()) return;
    panel = api.stage()?.querySelector<HTMLElement>('[data-d="theory-scroll"]') ?? null;
    if (panel) {
      panel.style.scrollBehavior = "auto";
      panel.scrollTop = 0;
      const height = panel.scrollHeight;
      if (height > panel.clientHeight + 80 && height === lastHeight) break;
      lastHeight = height;
    }
    await api.flush();
    await api.wait(40);
  }
  if (!panel) return;
  panel.scrollTop = 0;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const first = stopNear(panel, 0.46, max * 0.34);
  const second = Math.max(first + panel.clientHeight, stopNear(panel, 0.96, max * 0.84));
  await api.wait(180);
  await rushThenStop(api, panel, first);
  await api.wait(850);
  if (api.cancelled()) return;
  await rushThenStop(api, panel, Math.min(second, max));
  await api.wait(850);
}

/** How it works · Theory: chapters 1, 10 and 11, two fast rushes with a smooth stop in each. */
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
      await readTwoStops(api);
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
