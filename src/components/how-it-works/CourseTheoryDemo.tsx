import { useMemo, useRef, useState } from "react";
import { ChevronDown, PanelLeftOpen } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { MATH_COURSE_THEORY, type MathCourseTheoryChapter } from "@/data/math-course-theory";
import { cn } from "@/lib/utils";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";
import { readPanel } from "./course-motion";

const READ = [1, 10, 11] as const;

const CHAPTERS = Object.values(MATH_COURSE_THEORY).sort((a, b) => a.num - b.num);

type Block = { kind: "h" | "p" | "math"; level: 0 | 2 | 3; text: string };

function stripInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\[\[(?:FIGURE|NOTE):[^\]]+\]\]/g, "")
    .trim();
}

/** Intro plus the first teaching section, the same words the theory reader shows. */
function theoryBlocks(markdown: string): Block[] {
  const all: Block[] = [];
  const lines = markdown.split("\n");
  let para = "";
  const flush = () => {
    const text = stripInline(para);
    para = "";
    if (text) all.push({ kind: "p", level: 0, text });
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";
    if (line.startsWith("# ")) continue;
    if (line.startsWith("## ") || line.startsWith("### ")) {
      flush();
      const level = line.startsWith("### ") ? 3 : 2;
      const text = stripInline(line.replace(/^#+\s+/, ""));
      if (text) all.push({ kind: "h", level, text });
      continue;
    }
    if (line.trim().startsWith("$$")) {
      flush();
      const chunk = [line];
      if (line.trim() === "$$" || !line.trim().endsWith("$$") || line.trim() === "$$") {
        i += 1;
        while (i < lines.length && !lines[i]?.includes("$$")) {
          chunk.push(lines[i] ?? "");
          i += 1;
        }
        if (i < lines.length) chunk.push(lines[i] ?? "");
      }
      const text = chunk.join("\n").trim();
      if (text.length > 4 && text.length < 280) all.push({ kind: "math", level: 0, text });
      continue;
    }
    if (
      !line.trim() ||
      line.startsWith("|") ||
      line.startsWith("---") ||
      line.startsWith("[[") ||
      line.startsWith("- ")
    ) {
      flush();
      continue;
    }
    para += (para ? " " : "") + line.trim();
  }
  flush();

  const out: Block[] = [];
  let i = 0;
  while (i < all.length && all[i]?.level !== 2) {
    out.push(all[i]!);
    i += 1;
  }
  if (i < all.length && /learning objectives/i.test(all[i]?.text ?? "")) {
    i += 1;
    while (i < all.length && all[i]?.level !== 2) i += 1;
  }
  let paras = 0;
  while (i < all.length && out.length < 8) {
    const block = all[i]!;
    if (block.level === 2 && out.some((item) => item.level === 2)) break;
    out.push(block);
    if (block.kind === "p") paras += 1;
    i += 1;
    if (paras >= 3) break;
  }
  return out;
}

function Reader({
  chapter,
  onScroll,
}: {
  chapter: MathCourseTheoryChapter;
  onScroll: (pct: number) => void;
}) {
  const blocks = useMemo(() => theoryBlocks(chapter.markdown), [chapter]);
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-card">
      <div className="shrink-0 border-b border-border px-3 py-1.5">
        <div className="flex items-center gap-2">
          <span
            data-d="chapters"
            className="inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-border bg-card px-2 text-[11px] font-semibold text-foreground"
          >
            <PanelLeftOpen className="h-3.5 w-3.5" />
            Show chapters
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[10px] font-bold uppercase tracking-widest text-taupe">
              Chapter {chapter.num} · Theory
            </div>
            <div className="truncate font-display text-sm font-bold leading-tight">{chapter.title}</div>
          </div>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            data-d="theory-bar"
            className="h-full w-full origin-left rounded-full bg-primary"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
      <div
        data-d="theory-scroll"
        className="min-h-0 flex-1 overflow-y-auto px-3 py-2 sm:px-4"
        onScroll={(event) => {
          const el = event.currentTarget;
          const max = el.scrollHeight - el.clientHeight;
          onScroll(max > 0 ? el.scrollTop / max : 0);
        }}
      >
        {blocks.map((block, index) => (
          <div key={`${chapter.num}-${index}`} data-d={`prose${index}`} className="mb-3">
            {block.kind === "h" ? (
              <h2
                className={cn(
                  "font-display font-bold tracking-tight",
                  block.level === 2 ? "text-base" : "text-sm text-foreground/90",
                )}
              >
                {block.text}
              </h2>
            ) : (
              <FlashcardMath
                text={block.text}
                className="text-[13px] leading-relaxed text-foreground/90"
              />
            )}
          </div>
        ))}
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
      await api.moveTo(`[data-d="ch-${num}"]`, 160);
      await api.click(() => setOpen(num));
      await api.flush();
      await api.wait(240);
      await readPanel(api, '[data-d="theory-scroll"]');
      await api.wait(240);
      await api.moveTo('[data-d="chapters"]', 120);
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
