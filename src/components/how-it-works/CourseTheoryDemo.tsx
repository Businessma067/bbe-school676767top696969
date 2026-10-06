import { useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { howItWorksGlide, useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";

const READ = [1, 10, 11] as const;

/** Cruise speed of the single chapter glide, a little under the news demo. */
const CRUISE_PX_PER_MS = 2.45;

export type TheoryDemoCopy = {
  listLabel: string;
  chapterLabel: (num: number) => string;
  showChapters: string;
};

const EN_THEORY: TheoryDemoCopy = {
  listLabel: "Chapters",
  chapterLabel: (num) => `Chapter ${num} · Theory`,
  showChapters: "Show chapters",
};

export const DE_THEORY_COPY: TheoryDemoCopy = {
  listLabel: "Kapitel",
  chapterLabel: (num) => `Kapitel ${num} · Theorie`,
  showChapters: "Kapitel anzeigen",
};

function Reader({
  chapter,
  copy,
  onScroll,
}: {
  chapter: MathCourseTheoryChapter;
  copy: TheoryDemoCopy;
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
              {copy.chapterLabel(chapter.num)}
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
            {copy.showChapters}
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

/**
 * One glide. Speed eases only in the first and last 12% and is steady between,
 * the same shape as the pointer, so each pass lands softly.
 */
function oneGlide(t: number) {
  const s = 0.12;
  const v = 1 / (1 - 2 * s + (4 * s) / Math.PI);
  const shoulder = (v * 2 * s) / Math.PI;
  if (t < s) return shoulder * (1 - Math.cos((Math.PI * t) / (2 * s)));
  if (t > 1 - s) {
    const q = t - (1 - s);
    return shoulder + v * (1 - 2 * s) + shoulder * Math.sin((Math.PI * q) / (2 * s));
  }
  return shoulder + v * (t - s);
}

async function aim(api: DemoPlayerApi, selector: string) {
  await api.moveTo(selector);
}

/** Move the chapter on the compositor. scrollTop would repaint the text and tear. */
function placeChapter(panel: HTMLElement, offset: number, max: number) {
  const article = panel.querySelector<HTMLElement>("article");
  if (article) article.style.transform = `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
  const bar = panel.parentElement?.querySelector<HTMLElement>('[data-d="theory-bar"]');
  if (bar && max > 0) bar.style.transform = `scaleX(${Math.min(1, offset / max)})`;
  panel.dataset.offset = String(Math.round(offset));
}

/** One pass. The pointer stays where it is while the chapter moves on the compositor. */
async function glideChapter(
  api: DemoPlayerApi,
  panel: HTMLElement,
  from: number,
  to: number,
  max: number,
) {
  const article = panel.querySelector<HTMLElement>("article");
  const bar = panel.parentElement?.querySelector<HTMLElement>('[data-d="theory-bar"]');
  const span = to - from;
  if (span < 16) return;
  const duration = Math.round(Math.max(780, span / CRUISE_PX_PER_MS));
  let elapsed = 0;
  let last = performance.now();
  await new Promise<void>((resolve) => {
    const frame = (now: number) => {
      if (api.cancelled()) return resolve();
      elapsed += Math.min(28, Math.max(0, now - last));
      last = now;
      const t = Math.min(1, elapsed / duration);
      const offset = from + span * oneGlide(t);
      if (article) article.style.transform = `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
      if (bar && max > 0) bar.style.transform = `scaleX(${Math.min(1, offset / max)})`;
      panel.dataset.offset = String(Math.round(offset));
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
  placeChapter(panel, to, max);
}

async function readChapterGlide(api: DemoPlayerApi) {
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
  panel.scrollTop = 0;
  panel.style.overflow = "hidden";
  const article = panel.querySelector<HTMLElement>("article");
  if (article) {
    article.style.willChange = "transform";
    article.style.transform = "translate3d(0, 0, 0)";
  }
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const dest = Math.round(max * 0.76);
  panel.dataset.max = String(max);
  const mid = Math.round(dest * 0.48);
  await glideChapter(api, panel, 0, mid, max);
  if (api.cancelled()) return;
  await glideChapter(api, panel, mid, dest, max);
}

/** How it works · Theory: chapters 1, 10 and 11, two soft stops on the way to about 75%. */
export function CourseTheoryDemo({
  rest = 1,
  lockCopy = false,
  catalog = MATH_COURSE_THEORY,
  copy = EN_THEORY,
}: {
  rest?: number;
  lockCopy?: boolean;
  catalog?: Record<number, MathCourseTheoryChapter>;
  copy?: TheoryDemoCopy;
} = {}) {
  const chapters = useMemo(
    () => Object.values(catalog).sort((a, b) => a.num - b.num),
    [catalog],
  );
  const [open, setOpen] = useState<number | null>(null);
  const barPct = useRef(0);
  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const readChapter = async (num: (typeof READ)[number]) => {
      await aim(api, `[data-d="ch-${num}"]`);
      await api.click();
      setOpen(num);
      await api.flush();
      await readChapterGlide(api);
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
  }, [rest], { rest, glideScale: howItWorksGlide(rest) });

  const chapter = open == null ? null : catalog[open];

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
            copy={copy}
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
          {copy.listLabel}
        </div>
        <ul className="space-y-1">
          {chapters.map((item) => (
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
