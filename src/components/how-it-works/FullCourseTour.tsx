import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import {
  BookOpen,
  Check,
  ClipboardCheck,
  Flag,
  Flame,
  Layers,
  PanelLeftOpen,
  Target,
  Timer,
  TrendingUp,
  Wand2,
} from "lucide-react";
import { Ti30MathPrint } from "@/components/calculator/Ti30MathPrint";
import { FlashcardMath } from "@/components/FlashcardMath";
import { ExamAnswerSheet } from "@/components/mock-exam/ExamAnswerSheet";
import { QuestionPalette } from "@/components/mock-exam/QuestionPalette";
import { DemoCursor } from "@/components/news/demos/DemoCursor";
import { DemoStatementTable } from "@/components/news/demos/DemoStatementTable";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { TheoryArticle } from "@/components/TheoryReader";
import { ECONOMICS_FLASHCARD_SECTIONS } from "@/data/flashcards";
import { ECONOMICS_COURSE_THEORY } from "@/data/economics-course-theory";
import type { ExamQuestion, SubjectKey } from "@/lib/mock-exams";
import { practiceInlineLocateButtonClass } from "@/lib/practice-button-styles";
import { cn } from "@/lib/utils";
import { pressCalcKey } from "./course-motion";
import { CoursePassage, CourseSolution } from "./CourseSolution";
import { COURSE_ECON, COURSE_ENGLISH_HIGHLIGHTS, COURSE_ENGLISH_PASSAGE } from "./course-tasks";
import { CourseTimedBar } from "./CourseTimedBar";

const RUST = "#b3392a";

type Scene =
  | "dash"
  | "theory"
  | "task"
  | "expl"
  | "english"
  | "math"
  | "mock"
  | "results"
  | "builder"
  | "tools";

type ArrowApi = {
  show: (selector: string, text: string) => void;
  draw: (t: number) => void;
  hide: () => void;
};

const TASK = COURSE_ECON;
const CHAPTERS = Object.values(ECONOMICS_COURSE_THEORY);
const HIGHLIGHT = COURSE_ENGLISH_HIGHLIGHTS[2] ?? "";
const PASSAGE =
  COURSE_ENGLISH_PASSAGE.split(/\n\n/).find((paragraph) => paragraph.includes(HIGHLIGHT)) ??
  COURSE_ENGLISH_PASSAGE;
const KEYS = ["1", "2", "×", "1", "1", "="];
const ACCENT = "#c8763a";
const FLASH = ECONOMICS_FLASHCARD_SECTIONS.find((section) => section.id === "econ-1")?.cards[0];
const LABOUR = ECONOMICS_FLASHCARD_SECTIONS.find((section) => section.id === "econ-3")?.cards.find(
  (card) => card.term === "Labour",
);

if (!FLASH || !LABOUR) throw new Error("Course tour flashcards missing");

function tourQuestion(index: number, subject: SubjectKey): ExamQuestion {
  return {
    id: `tour-q${index}`,
    index,
    subject,
    stem: "The ovens are capital used in production.",
    maxPoints: 5,
    statements: [{ id: "a", text: "The ovens are capital.", isTrue: true, explanation: "" }],
  };
}

const TOUR_QUESTIONS = [
  tourQuestion(1, "economics"),
  tourQuestion(2, "economics"),
  tourQuestion(3, "english"),
  tourQuestion(4, "english"),
  tourQuestion(5, "math"),
  tourQuestion(6, "math"),
];

type DashTab = "courses" | "mocks" | "custom" | "games";
type ToolMode = "flash" | "match" | "tutor";

/**
 * Fast pass through the real Full BBE Course screens.
 * The pointer arrives, then one rust arrow draws to a single caption.
 */
export function FullCourseTour() {
  const arrowRef = useRef<ArrowApi | null>(null);
  const [scene, setScene] = useState<Scene>("dash");
  const [dashTab, setDashTab] = useState<DashTab>("courses");
  const [read, setRead] = useState(false);
  const [timed, setTimed] = useState(false);
  const [marks, setMarks] = useState<Record<number, boolean>>({});
  const [shown, setShown] = useState(false);
  const [calcOn, setCalcOn] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [built, setBuilt] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useState(false);
  const [picked, setPicked] = useState(false);
  const [tool, setTool] = useState<ToolMode>("flash");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      const arrow = () => arrowRef.current;
      const tip = async (selector: string, text: string, hold = 680) => {
        if (api.cancelled()) return;
        await api.moveTo(selector, 12);
        arrow()?.show(selector, text);
        await api.tween(260, (eased) => arrow()?.draw(eased));
        await api.wait(hold);
        if (api.cancelled()) return;
        await api.tween(140, (eased) => arrow()?.draw(1 - eased));
        arrow()?.hide();
      };
      const enter = async (next: Scene) => {
        if (api.cancelled()) return;
        arrow()?.hide();
        setFade(true);
        await api.wait(80);
        setScene(next);
        await api.flush();
        setFade(false);
        await api.wait(100);
      };

      while (!api.cancelled()) {
        setDashTab("courses");
        setRead(false);
        setTimed(false);
        setMarks({});
        setShown(false);
        setCalcOn(false);
        setBubble(false);
        setFlagged(false);
        setChosen(false);
        setBuilt(false);
        setFlipped(false);
        setMatched(false);
        setPicked(false);
        setTool("flash");
        await enter("dash");

        await tip(
          '[data-d="continue"]',
          "Continue opens the course. Streak and accuracy live here.",
          760,
        );
        await tip(
          '[data-d="stats"]',
          "Attempts, accuracy, and days in a row, counted for you.",
          680,
        );
        for (const id of ["mocks", "custom", "games"] as const) {
          if (api.cancelled()) return;
          await api.moveTo(`[data-d="tab-${id}"]`, 8);
          await api.click(() => setDashTab(id));
          await api.wait(50);
        }
        await tip(
          '[data-d="tab-games"]',
          "Progress, full mocks, your own mocks, and study tools.",
          620,
        );

        await enter("theory");
        await tip('[data-d="ch-3"]', "The chapter title opens the theory the tasks assume.", 680);
        await api.click(() => setRead(true));
        await api.wait(140);
        await tip(
          '[data-d="theory-title"]',
          "Definitions first. The questions are written from this page.",
          720,
        );

        await enter("task");
        await tip('[data-d="m2"]', "A blank costs nothing. A wrong mark costs a point.", 720);
        await api.moveTo('[data-d="m0"]', 8);
        await api.click(() => setMarks({ 0: true }));
        await api.wait(30);
        await api.moveTo('[data-d="m1"]', 8);
        await api.click(() => setMarks({ 0: true, 1: true }));
        await api.wait(30);
        await tip('[data-d="timed"]', "Timed Mode is the clock for the real limit.", 600);
        await api.click(() => setTimed(true));
        await api.wait(140);

        await enter("expl");
        await tip(
          '[data-d="expl-scroll"]',
          "The verdict, then the reason, in the bank's own words.",
          820,
        );

        await enter("english");
        await api.moveTo('[data-d="show"]', 8);
        await api.click(() => setShown(true));
        await api.wait(70);
        await tip('[data-d="line"]', "The sentence the statement depends on.", 720);

        await enter("math");
        await api.moveTo('[data-d="calc"]', 8);
        await api.click(() => setCalcOn(true));
        await api.wait(70);
        for (const key of KEYS) {
          if (api.cancelled()) return;
          await pressCalcKey(api, key);
          await api.wait(12);
        }
        await tip('[data-d="calc"]', "The exam calculator, inside the task.", 620);

        await enter("mock");
        await tip(
          '[data-d="palette"]',
          "Every subject in one paper. Flag a question for later.",
          660,
        );
        await api.moveTo('[data-d="flag"]', 8);
        await api.click(() => setFlagged(true));
        await api.wait(70);
        await tip('[data-d="sheet"]', "The bubble sheet from the real exam.", 660);
        await api.click(() => setBubble(true));
        await api.wait(140);

        await enter("results");
        await tip('[data-d="chart"]', "How long each question took, then the review.", 720);

        await enter("builder");
        await api.moveTo('[data-d="topic"]', 8);
        await api.click(() => setChosen(true));
        await api.wait(60);
        await tip('[data-d="build"]', "A mock built only from the topics you pick.", 680);
        await api.click(() => setBuilt(true));
        await api.wait(160);

        await enter("tools");
        await api.moveTo('[data-d="flip"]', 8);
        await api.click(() => setFlipped(true));
        await api.wait(70);
        await tip('[data-d="card"]', "Flip a term, then mark whether you know it.", 600);
        setTool("match");
        await api.flush();
        await api.wait(40);
        await api.moveTo('[data-d="pair"]', 8);
        await api.click(() => setMatched(true));
        await api.wait(50);
        await tip('[data-d="pair"]', "Match the term to its meaning.", 580);
        setTool("tutor");
        await api.flush();
        await api.wait(40);
        await api.moveTo('[data-d="c3"]', 8);
        await api.click(() => setPicked(true));
        await api.wait(40);
        await tip('[data-d="c3"]', "A short quiz on the theory.", 640);
        await api.wait(160);
      }
    },
    [],
    { pace: 2.2 },
  );

  return (
    <div
      ref={stageRef}
      data-scene={scene}
      aria-label="Full BBE Course walkthrough"
      className="absolute inset-0 bg-paper font-sans text-foreground"
    >
      <div className={cn("absolute inset-0 transition-opacity duration-150", fade && "opacity-0")}>
        <div
          ref={scrollRef}
          className="news-uniq-scroll h-full overflow-x-hidden overflow-y-auto px-3 py-3 sm:px-4"
        >
          {scene === "dash" ? <Dash tab={dashTab} /> : null}
          {scene === "theory" && !read ? <TheoryList /> : null}
          {scene === "task" || scene === "expl" ? <Task marks={marks} timed={timed} /> : null}
          {scene === "english" ? <English shown={shown} /> : null}
          {scene === "math" ? <MathTask /> : null}
          {scene === "mock" ? <MockPaper flagged={flagged} bubble={bubble} /> : null}
          {scene === "results" ? <Results /> : null}
          {scene === "builder" ? <Builder chosen={chosen} built={built} /> : null}
          {scene === "tools" ? (
            <Tools mode={tool} flipped={flipped} matched={matched} picked={picked} />
          ) : null}
        </div>
        {scene === "theory" && read ? <TheoryReader /> : null}
        {scene === "expl" ? (
          <CourseSolution
            open
            answerKey={TASK.answerKey}
            explanations={TASK.explanations}
            shown={[0]}
            active={0}
            full
          />
        ) : null}
        {scene === "math" && calcOn ? (
          <div className="pointer-events-none absolute bottom-2 left-2 right-2 top-14 z-[8] sm:left-auto sm:w-[19rem]">
            <div data-d="calc-panel" className="pointer-events-auto h-full min-h-0">
              <Ti30MathPrint compact hideChrome className="h-full shadow-xl" />
            </div>
          </div>
        ) : null}
      </div>
      <TourArrow stageRef={stageRef} handleRef={arrowRef} />
      <DemoCursor cursorRef={cursorRef} clicking={clicking} hidden={fade} />
    </div>
  );
}

function edgeToward(x: number, y: number, w: number, h: number, tx: number, ty: number) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const dx = tx - cx;
  const dy = ty - cy;
  const ax = Math.abs(dx) || 0.001;
  const ay = Math.abs(dy) || 0.001;
  const s = Math.min(w / 2 / ax, h / 2 / ay);
  return { x: cx + dx * s, y: cy + dy * s };
}

function TourArrow({
  stageRef,
  handleRef,
}: {
  stageRef: RefObject<HTMLDivElement | null>;
  handleRef: RefObject<ArrowApi | null>;
}) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const dotRef = useRef<SVGCircleElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const measure = (selector: string, text: string) => {
      const stage = stageRef.current;
      const path = pathRef.current;
      const label = labelRef.current;
      const dot = dotRef.current;
      const target = stage?.querySelector<HTMLElement>(selector);
      if (!stage || !path || !label || !dot || !target) return;
      const stageBox = stage.getBoundingClientRect();
      const box = target.getBoundingClientRect();
      const labelW = Math.min(232, Math.max(148, stageBox.width * 0.34));
      label.style.width = `${labelW}px`;
      label.textContent = text;
      label.style.opacity = "0";
      const labelH = Math.max(44, label.offsetHeight);
      const gap = 18;
      const tx = box.left - stageBox.left;
      const ty = box.top - stageBox.top;
      const obstacles = [...stage.querySelectorAll<HTMLElement>("[data-d], h2, p, li")]
        .filter((el) => el !== label && !el.contains(label))
        .map((el) => {
          const b = el.getBoundingClientRect();
          return {
            x: b.left - stageBox.left,
            y: b.top - stageBox.top,
            w: b.width,
            h: b.height,
          };
        })
        .filter((r) => r.w > 2 && r.h > 2);
      const hits = (x: number, y: number) =>
        obstacles.some(
          (o) =>
            x + labelW > o.x - 8 && x < o.x + o.w + 8 && y + labelH > o.y - 8 && y < o.y + o.h + 8,
        );
      const inside = (x: number, y: number) =>
        x >= 8 && y >= 8 && x + labelW <= stageBox.width - 8 && y + labelH <= stageBox.height - 8;
      const segmentClear = (x: number, y: number) => {
        const tail = edgeToward(x, y, labelW, labelH, tx + box.width / 2, ty + box.height / 2);
        const head = edgeToward(tx, ty, box.width, box.height, x + labelW / 2, y + labelH / 2);
        for (let i = 1; i <= 7; i++) {
          const t = i / 8;
          const px = tail.x + (head.x - tail.x) * t;
          const py = tail.y + (head.y - tail.y) * t;
          const onTarget =
            px >= tx - 4 && px <= tx + box.width + 4 && py >= ty - 4 && py <= ty + box.height + 4;
          if (onTarget) continue;
          if (obstacles.some((o) => px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h))
            return false;
        }
        return true;
      };
      const near = [
        { x: tx + box.width + gap, y: ty + box.height / 2 - labelH / 2 },
        { x: tx + box.width / 2 - labelW / 2, y: ty + box.height + gap },
        { x: tx + box.width / 2 - labelW / 2, y: ty - gap - labelH },
        { x: tx - gap - labelW, y: ty + box.height / 2 - labelH / 2 },
      ];
      const open: { x: number; y: number }[] = [];
      for (let y = 8; y <= stageBox.height - labelH - 8; y += 16) {
        for (let x = 8; x <= stageBox.width - labelW - 8; x += 20) {
          if (inside(x, y) && !hits(x, y)) open.push({ x, y });
        }
      }
      const ranked = [...near, ...open].filter((s) => inside(s.x, s.y) && !hits(s.x, s.y));
      const clear = ranked.filter((s) => segmentClear(s.x, s.y));
      const pool = clear.length ? clear : ranked;
      let spot = pool[0] ?? near[0];
      let bestDist = Number.POSITIVE_INFINITY;
      for (const s of pool) {
        const dist = Math.hypot(
          s.x + labelW / 2 - (tx + box.width / 2),
          s.y + labelH / 2 - (ty + box.height / 2),
        );
        if (dist < bestDist) {
          bestDist = dist;
          spot = s;
        }
      }
      const lx = Math.max(8, Math.min(spot.x, stageBox.width - labelW - 8));
      const ly = Math.max(8, Math.min(spot.y, stageBox.height - labelH - 8));
      label.style.left = `${lx}px`;
      label.style.top = `${ly}px`;

      const labelCx = lx + labelW / 2;
      const labelCy = ly + labelH / 2;
      const targetCx = tx + box.width / 2;
      const targetCy = ty + box.height / 2;
      let ax = targetCx;
      let ay = targetCy;
      if (segmentClear(lx, ly)) {
        const edge = edgeToward(tx, ty, box.width, box.height, labelCx, labelCy);
        const vx = labelCx - edge.x;
        const vy = labelCy - edge.y;
        const vlen = Math.hypot(vx, vy) || 1;
        ax = edge.x + (vx / vlen) * 8;
        ay = edge.y + (vy / vlen) * 8;
        const tail = edgeToward(lx, ly, labelW, labelH, ax, ay);
        const dx = ax - tail.x;
        const dy = ay - tail.y;
        const len = Math.hypot(dx, dy) || 1;
        const bend = Math.min(14, len * 0.12);
        const cx = (tail.x + ax) / 2 + (-dy / len) * bend;
        const cy = (tail.y + ay) / 2 + (dx / len) * bend;
        path.setAttribute("d", `M ${tail.x} ${tail.y} Q ${cx} ${cy} ${ax} ${ay}`);
      } else {
        const gutter = Math.min(
          stageBox.width - 10,
          Math.max(lx + labelW, ...obstacles.map((o) => o.x + o.w)) + 12,
        );
        const head = edgeToward(tx, ty, box.width, box.height, gutter, targetCy);
        ax = head.x + (gutter >= head.x ? 6 : -6);
        ay = head.y;
        const tail = edgeToward(lx, ly, labelW, labelH, gutter, labelCy);
        path.setAttribute(
          "d",
          `M ${tail.x} ${tail.y} L ${gutter} ${tail.y} L ${gutter} ${ay} L ${ax} ${ay}`,
        );
      }
      path.style.strokeDashoffset = "1";
      dot.setAttribute("cx", String(ax));
      dot.setAttribute("cy", String(ay));
      dot.style.opacity = "0";
    };

    handleRef.current = {
      show: measure,
      draw(t) {
        const path = pathRef.current;
        const label = labelRef.current;
        const dot = dotRef.current;
        if (!path || !label || !dot) return;
        const clamped = Math.max(0, Math.min(1, t));
        path.style.strokeDashoffset = String(1 - clamped);
        label.style.opacity = String(clamped);
        dot.style.opacity = String(clamped > 0.72 ? (clamped - 0.72) / 0.28 : 0);
      },
      hide() {
        const path = pathRef.current;
        const label = labelRef.current;
        const dot = dotRef.current;
        if (path) path.style.strokeDashoffset = "1";
        if (label) label.style.opacity = "0";
        if (dot) dot.style.opacity = "0";
      },
    };
    return () => {
      handleRef.current = null;
    };
  }, [handleRef, stageRef]);

  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
        aria-hidden
      >
        <path
          ref={pathRef}
          d=""
          fill="none"
          stroke={RUST}
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
        />
        <circle ref={dotRef} r="3.2" fill={RUST} opacity="0" />
      </svg>
      <div
        ref={labelRef}
        data-caption
        className="pointer-events-none absolute z-20 max-w-[16rem] rounded-md bg-[#FBF8F4] px-3 py-2 font-display text-[13px] leading-snug text-[#1c1c1c] opacity-0"
        style={{ borderLeft: `2px solid ${RUST}` }}
      />
    </>
  );
}

function SideButton({
  icon,
  label,
  active,
  tip,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  tip: string;
}) {
  return (
    <span
      data-d={tip}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold",
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground",
      )}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
    </span>
  );
}

function Dash({ tab }: { tab: DashTab }) {
  return (
    <div className="flex h-full min-h-[28rem] overflow-hidden rounded-xl border border-border bg-background">
      <aside className="w-44 shrink-0 border-r border-border/60 bg-card/40 py-4">
        <nav className="flex flex-col gap-1 px-2">
          <SideButton
            icon={<BookOpen className="h-4 w-4" />}
            label="Courses"
            active={tab === "courses"}
            tip="tab-courses"
          />
          <SideButton
            icon={<ClipboardCheck className="h-4 w-4" />}
            label="Mock Exams"
            active={tab === "mocks"}
            tip="tab-mocks"
          />
          <SideButton
            icon={<Wand2 className="h-4 w-4" />}
            label="Custom Mocks"
            active={tab === "custom"}
            tip="tab-custom"
          />
          <SideButton
            icon={<Layers className="h-4 w-4" />}
            label="Study tools"
            active={tab === "games"}
            tip="tab-games"
          />
        </nav>
      </aside>
      <div className="min-w-0 flex-1 p-4">
        <h2 className="mb-3 font-display text-xl font-bold tracking-tight">My courses</h2>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs text-muted-foreground">full access</p>
          <h3 className="mt-1 font-display text-lg font-bold">Full BBE Course</h3>
          <p className="mt-1 text-xs text-muted-foreground">Enrolled 12 Mar 2026</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[62%] bg-caramel-deep" />
            </div>
            <span className="shrink-0 text-xs font-semibold text-muted-foreground">
              86 tasks passed
            </span>
          </div>
          <div className="mt-4">
            <span
              data-d="continue"
              className="inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Continue
            </span>
          </div>
        </div>
        <div data-d="stats" className="mt-3 grid gap-3 sm:grid-cols-3">
          <Stat
            icon={<Target className="h-4 w-4 text-caramel-deep" />}
            label="Tasks attempted"
            value="128"
            sub="86 passed"
          />
          <Stat
            icon={<TrendingUp className="h-4 w-4 text-caramel-deep" />}
            label="Accuracy"
            value="74%"
            sub="across all subjects"
          />
          <Stat
            icon={<Flame className="h-4 w-4 text-caramel-deep" />}
            label="Current streak"
            value="6 days"
            sub="days with activity"
          />
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  sub,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-display text-xl font-bold leading-tight">{value}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function TheoryList() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        Chapters
      </div>
      <ul className="space-y-1">
        {CHAPTERS.map((item) => (
          <li key={item.num}>
            <div className="flex h-10 items-center gap-2 rounded-xl px-2">
              <span className="h-4 w-4 shrink-0 -rotate-90 text-muted-foreground">›</span>
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
  );
}

function TheoryReader() {
  const chapter = ECONOMICS_COURSE_THEORY[3];
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-card">
      <div className="shrink-0 border-b border-border px-3 py-1.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[10px] font-bold uppercase tracking-widest text-taupe">
              Chapter {chapter.num} · Theory
            </div>
            <div
              data-d="theory-title"
              className="truncate font-display text-sm font-bold leading-tight"
            >
              {chapter.title}
            </div>
          </div>
          <span className="inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-border bg-card px-2 text-[11px] font-semibold">
            <PanelLeftOpen className="h-3.5 w-3.5" />
            Show chapters
          </span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-1/5 rounded-full bg-primary" />
        </div>
      </div>
      <div data-d="theory-scroll" className="min-h-0 flex-1 overflow-y-auto">
        <article className="mx-auto w-full max-w-[78rem] px-4 py-3 sm:px-5 [&_.katex]:text-[1.03em]">
          <TheoryArticle markdown={chapter.markdown} enableMath dense />
        </article>
      </div>
    </div>
  );
}

function Task({ marks, timed }: { marks: Record<number, boolean>; timed: boolean }) {
  return (
    <div>
      <CourseTimedBar on={timed} />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          {TASK.caseId}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {TASK.chapter}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{TASK.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{TASK.context}</p>
      <DemoStatementTable statements={TASK.statements} marks={marks} answerKey={TASK.answerKey} />
    </div>
  );
}

function English({ shown }: { shown: boolean }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-sky-800">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          ENG T.1.01
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">
        The Rise of the Four-Day Workweek
      </h3>
      <CoursePassage text={PASSAGE} highlight={HIGHLIGHT} active={shown} />
      <button
        type="button"
        data-d="show"
        className={cn("mt-3", practiceInlineLocateButtonClass(shown))}
      >
        {shown ? "Located in text" : "Show solution in the text"}
      </button>
    </div>
  );
}

function MathTask() {
  return (
    <div>
      <CourseTimedBar on calculator />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Task 1
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
          MATH 12.01
        </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">A product inside the task</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">12 × 11</p>
    </div>
  );
}

function MockPaper({ flagged, bubble }: { flagged: boolean; bubble: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2">
        <h3 className="truncate font-display text-base font-bold">Mock Exam 1</h3>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-sm font-semibold tabular-nums">
          <Timer className="h-3.5 w-3.5" />
          1:42:10
        </span>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <p className="font-display text-2xl font-semibold tabular-nums">2</p>
        <p className="mt-1 text-sm text-muted-foreground">Economics</p>
        <button
          type="button"
          data-d="flag"
          className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold"
        >
          <Flag
            className={cn("h-3.5 w-3.5", flagged ? "fill-primary text-primary" : "text-taupe")}
          />
          {flagged ? "Flagged" : "Flag for review"}
        </button>
        <div data-d="palette" className="mt-3">
          <QuestionPalette
            questions={TOUR_QUESTIONS}
            currentIndex={1}
            answers={{}}
            flagged={flagged ? new Set([TOUR_QUESTIONS[1].id]) : new Set()}
            visited={new Set([TOUR_QUESTIONS[0].id, TOUR_QUESTIONS[1].id])}
            onNavigate={() => {}}
            compact
          />
        </div>
      </div>
      <div data-d="sheet">
        <ExamAnswerSheet
          marksByNumber={bubble ? { 2: [true, false, false, false, false] } : {}}
          questionCount={8}
          currentQuestion={2}
          flaggedNumbers={flagged ? new Set([2]) : new Set()}
          onToggle={() => {}}
          onNavigate={() => {}}
        />
      </div>
    </div>
  );
}

function Results() {
  const bars = [42, 68, 30, 88, 51, 74];
  return (
    <div>
      <div className="mb-3 rounded-2xl border border-border bg-background px-3 py-3 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Mock Exam 1
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Score overview, or tasks with answers and explanations.
        </p>
      </div>
      <div data-d="chart" className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <p className="text-sm font-semibold">Time per question</p>
        <div className="mt-3 flex h-28 items-end gap-2">
          {bars.map((height, index) => (
            <div key={height} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t bg-caramel-deep" style={{ height: `${height}%` }} />
              <span className="text-[10px] text-muted-foreground">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Builder({ chosen, built }: { chosen: boolean; built: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        Custom Mock Builder
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">Economics</h3>
      <div
        data-d="topic"
        className="mt-3 flex items-start gap-2 rounded-xl border border-border bg-card px-3 py-2"
      >
        <span
          className={cn(
            "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border-2",
            chosen ? "text-white" : "border-border bg-background",
          )}
          style={chosen ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
        >
          {chosen ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
        </span>
        <span>
          <span className="text-sm font-semibold tabular-nums">3.1</span>
          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
            Factors of production
          </span>
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">12 questions · 18 min timed</p>
      <div
        data-d="build"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
        style={{ backgroundColor: ACCENT, boxShadow: `0 4px 14px -4px ${ACCENT}80` }}
      >
        <BookOpen className="h-4 w-4" />
        {built ? "Mock ready" : "Create Economics Mock from Full Course"}
      </div>
    </div>
  );
}

function Tools({
  mode,
  flipped,
  matched,
  picked,
}: {
  mode: ToolMode;
  flipped: boolean;
  matched: boolean;
  picked: boolean;
}) {
  if (mode === "match") {
    return (
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
          Study tools · Economics
        </p>
        <h3 className="font-display text-lg font-bold tracking-tight">Connect concept → meaning</h3>
        <div className="mt-3 grid grid-cols-2 gap-x-8">
          <div className="flex min-h-12 items-center gap-2 rounded-xl border border-border bg-card px-2.5 py-2 text-[13px] font-semibold">
            <FlashcardMath text={LABOUR.term} />
          </div>
          <div
            data-d="pair"
            className={cn(
              "flex min-h-12 items-center gap-2 rounded-xl border px-2.5 py-2 text-[13px]",
              matched ? "border-emerald-300 bg-emerald-50/90" : "border-border bg-card",
            )}
          >
            {matched ? <Check className="h-3 w-3 text-emerald-600" /> : null}
            <FlashcardMath text={LABOUR.explanation} className="min-w-0 flex-1" />
          </div>
        </div>
      </div>
    );
  }
  if (mode === "tutor") {
    const choices = ["Labour", "Land", "Capital (factor of production)", "Entrepreneurship"];
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Tutor Bot · Q1
          </p>
          <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm">
            Which factor bears the risk?
          </div>
        </div>
        <ul className="space-y-1.5 p-3">
          {choices.map((choice, index) => {
            const on = picked && index === 3;
            return (
              <li key={choice}>
                <div
                  data-d={`c${index}`}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-xl border px-2.5 py-2 text-[13px]",
                    on ? "border-emerald-300 bg-emerald-50/90" : "border-border bg-card",
                  )}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold">
                    {on ? <Check className="h-3 w-3" /> : String.fromCharCode(65 + index)}
                  </span>
                  {choice}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        Study tools · Economics
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">Flashcards</h3>
      <div data-d="card" className="flashcard-viewport relative mt-3 overflow-hidden">
        <div className={cn("flashcard-inner", flipped && "is-flipped")}>
          <div className="flashcard-face flashcard-front min-h-36 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Layers className="h-3 w-3" /> Term
            </div>
            <div className="flex min-h-20 items-center justify-center text-center">
              <FlashcardMath text={FLASH.term} className="font-display text-xl font-bold" />
            </div>
          </div>
          <div className="flashcard-face flashcard-back min-h-36 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Layers className="h-3 w-3" /> Explanation
            </div>
            <div className="flex min-h-20 items-center justify-center text-center">
              <FlashcardMath text={FLASH.explanation} className="text-[13px] leading-snug" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <span
          data-d="flip"
          className="rounded-md px-4 py-2 text-xs font-semibold text-white shadow-sm"
          style={{ backgroundColor: ACCENT }}
        >
          Flip
        </span>
      </div>
    </div>
  );
}
