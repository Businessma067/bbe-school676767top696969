import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import { DemoCursor } from "@/components/news/demos/DemoCursor";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";
import { cn } from "@/lib/utils";
import { useFillFrame } from "./useFillFrame";
import { pressCalcKey } from "./course-motion";
import { CourseSolution } from "./CourseSolution";
import { COURSE_ECON } from "./course-tasks";
import {
  TOUR_BUILDER_CHAPTER,
  TourBuilder,
  TourCalc,
  TourDash,
  TourEconTask,
  TourEnglishSolution,
  TourEnglishTask,
  TourExam,
  TourMathTask,
  TourResults,
  TourSheet,
  TourTheoryList,
  TourTheoryReader,
  TourTools,
  type TourDashTab,
  type TourToolMode,
} from "./FullCourseTourScenes";

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

const BLEED: Scene[] = ["mock", "results"];

type ArrowApi = {
  show: (selector: string, text: string) => void;
  draw: (t: number) => void;
  hide: () => void;
};

const TASK = COURSE_ECON;
const KEYS = ["1", "2", "×", "1", "1", "="];

/**
 * Two-minute pass through the real Full BBE Course screens.
 * The pointer arrives, then one rust arrow draws to a single caption.
 */
export function FullCourseTour() {
  const arrowRef = useRef<ArrowApi | null>(null);
  const [scene, setScene] = useState<Scene>("dash");
  const [dashTab, setDashTab] = useState<TourDashTab>("courses");
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
  const [tool, setTool] = useState<TourToolMode>("flash");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    const arrow = () => arrowRef.current;
    const tip = async (selector: string, text: string, hold = 4200) => {
      if (api.cancelled()) return;
      await api.moveTo(selector, 40);
      arrow()?.show(selector, text);
      await api.tween(420, (eased) => arrow()?.draw(eased));
      await api.wait(hold);
      if (api.cancelled()) return;
      await api.tween(260, (eased) => arrow()?.draw(1 - eased));
      arrow()?.hide();
    };
    const enter = async (next: Scene) => {
      if (api.cancelled()) return;
      arrow()?.hide();
      setFade(true);
      await api.wait(180);
      setScene(next);
      await api.flush();
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(240);
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
        4800,
      );
      await tip(
        '[data-d="stats"]',
        "Attempts, accuracy, and days in a row, counted for you.",
        4000,
      );
      for (const id of ["mocks", "custom", "games"] as const) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="tab-${id}"]`, 30);
        await api.click(() => setDashTab(id));
        await api.wait(280);
      }
      await tip(
        '[data-d="tab-games"]',
        "Progress, full mocks, your own mocks, and study tools.",
        3600,
      );

      await enter("theory");
      await tip('[data-d="ch-3"]', "The chapter title opens the theory the tasks assume.", 4200);
      await api.click(() => setRead(true));
      await api.wait(280);
      await tip(
        '[data-d="theory-title"]',
        "Definitions first. The questions are written from this page.",
        4400,
      );

      await enter("task");
      await tip('[data-d="m2"]', "A blank costs nothing. A wrong mark costs a point.", 4400);
      await api.moveTo('[data-d="m0"]', 30);
      await api.click(() => setMarks({ 0: true }));
      await api.wait(80);
      await api.moveTo('[data-d="m1"]', 30);
      await api.click(() => setMarks({ 0: true, 1: true }));
      await api.wait(100);
      await tip('[data-d="timed"]', "Timed Mode is the clock for the real limit.", 3600);
      await api.click(() => setTimed(true));
      await api.wait(500);

      await enter("expl");
      await tip(
        '[data-d="expl-scroll"]',
        "The verdict, then the reason, in the bank's own words.",
        5000,
      );

      await enter("english");
      await api.moveTo('[data-d="show"]', 30);
      await api.click(() => setShown(true));
      await api.wait(220);
      await tip('[data-d="line"]', "The sentence the statement depends on.", 4200);

      await enter("math");
      await api.moveTo('[data-d="calc"]', 30);
      await api.click(() => setCalcOn(true));
      await api.wait(180);
      for (const key of KEYS) {
        if (api.cancelled()) return;
        await pressCalcKey(api, key);
        await api.wait(50);
      }
      await tip('[data-d="calc"]', "The exam calculator, inside the task.", 3800);

      await enter("mock");
      await tip(
        '[data-d="palette"]',
        "Every subject in one paper. Flag a question for later.",
        4200,
      );
      await api.moveTo('[data-d="flag"]', 24);
      await api.click(() => setFlagged(true));
      await api.wait(240);
      await api.moveTo('[data-d="sheet-tool"]', 24);
      await api.click(() => setBubble(true));
      await api.flush();
      await api.wait(240);
      await tip('[data-d="sheet"]', "The bubble sheet from the real exam.", 4200);

      await enter("results");
      await tip('[data-d="time-chart"]', "How long each question took, then the review.", 4800);

      await enter("builder");
      await api.moveTo(`[data-d="ch-${TOUR_BUILDER_CHAPTER}"]`, 30);
      await api.click(() => setChosen(true));
      await api.wait(200);
      await tip('[data-d="build"]', "A mock built only from the topics you pick.", 4400);
      await api.click(() => setBuilt(true));
      await api.wait(500);

      await enter("tools");
      await api.moveTo('[data-d="flip"]', 30);
      await api.click(() => setFlipped(true));
      await api.wait(240);
      await tip('[data-d="card"]', "Flip a term, then mark whether you know it.", 3600);
      setTool("match");
      await api.flush();
      await api.wait(160);
      await api.moveTo('[data-d="L0"]', 30);
      await api.click();
      await api.wait(80);
      await api.moveTo('[data-d="R0"]', 30);
      await api.click(() => setMatched(true));
      await api.wait(200);
      await tip('[data-d="R0"]', "Match the term to its meaning.", 3400);
      setTool("tutor");
      await api.flush();
      await api.wait(160);
      await api.moveTo('[data-d="c0"]', 30);
      await api.click(() => setPicked(true));
      await api.wait(160);
      await tip('[data-d="c0"]', "A short quiz on the theory.", 4000);
      await api.wait(400);
    }
  }, []);

  const innerRef = useRef<HTMLDivElement | null>(null);
  const fill =
    !BLEED.includes(scene) &&
    scene !== "dash" &&
    !(scene === "tools" && (tool === "match" || tool === "tutor"));
  useFillFrame(fill, scrollRef, innerRef);

  return (
    <div
      ref={stageRef}
      data-scene={scene}
      aria-label="Full BBE Course walkthrough"
      className={cn(
        "absolute inset-0 font-sans text-foreground",
        BLEED.includes(scene) ? "bg-background" : "bg-paper",
      )}
    >
      <div className={cn("absolute inset-0 transition-opacity duration-200", fade && "opacity-0")}>
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-full overflow-x-hidden overflow-y-auto",
            BLEED.includes(scene) ? "" : "px-3 py-3 sm:px-4",
            scene === "english" && "sm:pr-[58%]",
          )}
        >
          <div ref={innerRef} className="origin-top-left">
            {scene === "dash" ? <TourDash tab={dashTab} /> : null}
            {scene === "theory" && !read ? <TourTheoryList /> : null}
            {scene === "task" || scene === "expl" ? (
              <TourEconTask marks={marks} timed={timed} checked={scene === "expl"} />
            ) : null}
            {scene === "english" ? <TourEnglishTask shown={shown} /> : null}
            {scene === "math" ? <TourMathTask calcOpen={calcOn} /> : null}
            {scene === "mock" ? <TourExam flagged={flagged} /> : null}
            {scene === "results" ? <TourResults /> : null}
            {scene === "builder" ? <TourBuilder open={chosen} built={built} /> : null}
            {scene === "tools" ? (
              <TourTools mode={tool} flipped={flipped} matched={matched} picked={picked} />
            ) : null}
          </div>
        </div>
        {scene === "theory" && read ? <TourTheoryReader /> : null}
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
        {scene === "english" ? <TourEnglishSolution shown={shown} /> : null}
        {scene === "math" && calcOn ? <TourCalc /> : null}
        {scene === "mock" && bubble ? <TourSheet flagged={flagged} /> : null}
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
      const obstacles = [...stage.querySelectorAll<HTMLElement>("[data-d], h1, h2, h3, p, li")]
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
