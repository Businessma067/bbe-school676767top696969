import { useMemo, useRef, useState } from "react";
import { BookOpen, ChevronDown, PanelLeftOpen } from "lucide-react";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { TheoryArticle } from "@/components/TheoryReader";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { skimPanel } from "./course-motion";

const READ = [1, 10, 11] as const;

const CHAPTERS = Object.values(MATH_COURSE_THEORY).sort((a, b) => a.num - b.num);

/** Opening of the chapter: the first section, plus a short step into the next one. */
function theoryPart(markdown: string): string {
  const lines = markdown.split("\n");
  const heads: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+\d+\.\d+\b/.test(lines[i] ?? "")) heads.push(i);
  }
  const sectionStart = heads[0] ?? -1;
  const stopBefore = heads[2] ?? lines.length;
  const cap = sectionStart < 0 ? 116 : sectionStart + 108;
  let cut = Math.min(stopBefore, cap, lines.length);
  const floor = sectionStart < 0 ? 1 : sectionStart + 8;
  const oddMath = () => (lines.slice(0, cut).join("\n").match(/\$\$/g)?.length ?? 0) % 2 === 1;
  if (cut < stopBefore && oddMath()) {
    while (cut < stopBefore && !(lines[cut] ?? "").includes("$$")) cut += 1;
    if (cut < stopBefore) cut += 1;
  }
  const snap = () => {
    while (cut > floor && (lines[cut - 1] ?? "").trim() !== "") cut -= 1;
  };
  const lastText = () => {
    let last = cut - 1;
    while (last >= 0 && (lines[last] ?? "").trim() === "") last -= 1;
    return last;
  };
  const dangling = (index: number) => {
    const text = (lines[index] ?? "").trim();
    return /^#{1,6}\s/.test(text) || /^\*\*[^*]+\*\*\s*$/.test(text) || /[,:]$/.test(text);
  };
  if (cut < lines.length) {
    snap();
    while (cut > floor && dangling(lastText())) {
      cut = lastText();
      snap();
    }
    while (cut > floor && oddMath()) {
      cut -= 1;
      snap();
    }
  }
  return lines.slice(0, cut).join("\n").trim();
}

function Reader({
  chapter,
  onScroll,
}: {
  chapter: MathCourseTheoryChapter;
  onScroll: (pct: number) => void;
}) {
  const markdown = useMemo(() => theoryPart(chapter.markdown), [chapter]);
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
            <div className="truncate font-display text-sm font-bold leading-tight">{chapter.title}</div>
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
        onScroll={(event) => {
          const el = event.currentTarget;
          const max = el.scrollHeight - el.clientHeight;
          onScroll(max > 0 ? el.scrollTop / max : 0);
        }}
      >
        <article
          data-d="prose0"
          className="mx-auto w-full max-w-[78rem] px-4 py-3 sm:px-5 [&_.katex]:text-[1.03em] [&_.katex-display]:my-3 [&_.katex-display]:overflow-x-auto"
        >
          <TheoryArticle markdown={markdown} enableMath dense />
        </article>
      </div>
    </div>
  );
}

/** How it works · Theory: open math chapters 1, 10 and 11, then read each one. */
export function CourseTheoryDemo() {
  const [open, setOpen] = useState<number | null>(null);
  const barPct = useRef(0);
  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const readChapter = async (num: number) => {
      await api.moveTo(`[data-d="ch-${num}"]`, 100);
      await api.click(() => setOpen(num));
      await api.flush();
      await api.wait(280);
      await skimPanel(api, '[data-d="theory-scroll"]');
      await api.wait(200);
      await api.moveTo('[data-d="chapters"]', 80);
      await api.click(() => setOpen(null));
      await api.flush();
      await api.wait(180);
    };

    setFade(true);
    await api.wait(150);
    setOpen(null);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(260);

    for (const num of READ) {
      if (api.cancelled()) return;
      await readChapter(num);
    }
    await api.wait(360);
  }, []);

  const chapter = open == null ? null : MATH_COURSE_THEORY[open];

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
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
