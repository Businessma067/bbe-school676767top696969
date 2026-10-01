import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Check, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "@/components/news/demos/DemoCursor";
import { useDemoPlayer } from "@/components/news/demos/useDemoPlayer";

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

/**
 * Two-minute pass through Full BBE Course.
 * The pointer arrives, then one rust arrow draws to a single caption.
 */
export function FullCourseTour() {
  const arrowRef = useRef<ArrowApi | null>(null);
  const [scene, setScene] = useState<Scene>("dash");
  const [timed, setTimed] = useState(false);
  const [marks, setMarks] = useState<number[]>([]);
  const [shown, setShown] = useState(false);
  const [calcOn, setCalcOn] = useState(false);
  const [keyLit, setKeyLit] = useState("");
  const [solved, setSolved] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useState(false);
  const [picked, setPicked] = useState(false);
  const [built, setBuilt] = useState(false);
  const [read, setRead] = useState(false);
  const [chosen, setChosen] = useState(false);

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
      setFade(false);
      await api.wait(240);
    };

    while (!api.cancelled()) {
      setTimed(false);
      setMarks([]);
      setShown(false);
      setCalcOn(false);
      setKeyLit("");
      setSolved(false);
      setBubble(false);
      setFlagged(false);
      setFlipped(false);
      setMatched(false);
      setPicked(false);
      setBuilt(false);
      setRead(false);
      setChosen(false);
      await enter("dash");

      await tip(
        '[data-tip="continue"]',
        "Continue opens the course. Streak and accuracy live here.",
        4800,
      );
      await tip(
        '[data-tip="stats"]',
        "Attempts, accuracy, and days in a row, counted for you.",
        4000,
      );
      await tip(
        '[data-tip="tabs"]',
        "Progress, full mocks, your own mocks, and study tools.",
        3600,
      );
      await api.moveTo('[data-tip="tab-mocks"]', 30);
      await api.wait(380);
      await api.moveTo('[data-tip="tab-custom"]', 30);
      await api.wait(380);
      await api.moveTo('[data-tip="tab-tools"]', 30);
      await api.wait(480);

      await enter("theory");
      await tip(
        '[data-tip="chapter"]',
        "The chapter title opens the theory the tasks assume.",
        4200,
      );
      await api.click(() => setRead(true));
      await api.wait(280);
      await tip(
        '[data-tip="theory"]',
        "Definitions first. The questions are written from this page.",
        4400,
      );

      await enter("task");
      await tip('[data-tip="blank"]', "A blank costs nothing. A wrong mark costs a point.", 4400);
      await api.moveTo('[data-tip="m0"]', 30);
      await api.click(() => setMarks([0]));
      await api.wait(80);
      await api.moveTo('[data-tip="m2"]', 30);
      await api.click(() => setMarks([0, 2]));
      await api.wait(100);
      await tip('[data-tip="timed"]', "Timed Mode is the clock for the real limit.", 3600);
      await api.click(() => setTimed(true));
      await api.wait(640);

      await enter("expl");
      await tip(
        '[data-tip="expl"]',
        "The verdict, then the reason, in the bank's own words.",
        5000,
      );

      await enter("english");
      await api.moveTo('[data-tip="show"]', 30);
      await api.click(() => setShown(true));
      await api.wait(220);
      await tip('[data-tip="line"]', "The sentence the statement depends on.", 4200);

      await enter("math");
      await api.moveTo('[data-tip="calc"]', 30);
      await api.click(() => setCalcOn(true));
      await api.wait(180);
      const keys = ["1", "2", "×", "1", "1", "="];
      for (let i = 0; i < keys.length; i++) {
        if (api.cancelled()) return;
        const key = keys[i];
        await api.moveTo(`[data-tip="k-${i}"]`, 16);
        await api.click(() => {
          setKeyLit(String(i));
          if (key === "=") setSolved(true);
        });
        await api.wait(70);
      }
      await tip('[data-tip="calc"]', "The exam calculator, inside the task.", 3800);

      await enter("mock");
      await tip(
        '[data-tip="palette"]',
        "Every subject in one paper. Flag a question for later.",
        4200,
      );
      await api.moveTo('[data-tip="flag"]', 24);
      await api.click(() => setFlagged(true));
      await api.wait(240);
      await tip('[data-tip="sheet"]', "The bubble sheet from the real exam.", 4200);
      await api.click(() => setBubble(true));
      await api.wait(520);

      await enter("results");
      await tip('[data-tip="chart"]', "How long each question took, then the review.", 4800);

      await enter("builder");
      await api.moveTo('[data-tip="topic"]', 30);
      await api.click(() => setChosen(true));
      await api.wait(200);
      await tip('[data-tip="build"]', "A mock built only from the topics you pick.", 4400);
      await api.click(() => setBuilt(true));
      await api.wait(640);

      await enter("tools");
      await api.moveTo('[data-tip="card"]', 30);
      await api.click(() => setFlipped(true));
      await api.wait(240);
      await tip('[data-tip="card"]', "Flip a term, then mark whether you know it.", 3600);
      await api.moveTo('[data-tip="pair"]', 30);
      await api.click(() => setMatched(true));
      await api.wait(200);
      await tip('[data-tip="pair"]', "Match the term to its meaning.", 3400);
      await api.moveTo('[data-tip="choice"]', 30);
      await api.click(() => setPicked(true));
      await api.wait(160);
      await tip('[data-tip="choice"]', "A short quiz on the theory.", 4000);
      await api.wait(500);
    }
  }, []);

  return (
    <div
      ref={stageRef}
      data-scene={scene}
      aria-label="Full BBE Course walkthrough"
      className="absolute inset-0 bg-[#f6f5f2]"
    >
      <div
        ref={scrollRef}
        className={cn(
          "h-full overflow-hidden p-3 transition-opacity duration-200 sm:p-4",
          fade && "opacity-0",
        )}
      >
        {scene === "dash" ? <Dash /> : null}
        {scene === "theory" ? <Theory open={read} /> : null}
        {scene === "task" ? <Task marks={marks} timed={timed} /> : null}
        {scene === "expl" ? <Explain /> : null}
        {scene === "english" ? <English shown={shown} /> : null}
        {scene === "math" ? <MathCalc on={calcOn} lit={keyLit} solved={solved} /> : null}
        {scene === "mock" ? <MockPaper flagged={flagged} bubble={bubble} /> : null}
        {scene === "results" ? <Results /> : null}
        {scene === "builder" ? <Builder chosen={chosen} built={built} /> : null}
        {scene === "tools" ? <Tools flipped={flipped} matched={matched} picked={picked} /> : null}
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
      const obstacles = [...stage.querySelectorAll<HTMLElement>("[data-tip], h2, p")]
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

function Shell({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full w-full max-w-[40rem] flex-col">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b3392a]">
        {kicker}
      </p>
      <h2 className="mt-1 font-display text-lg font-semibold tracking-tight text-[#1c1c1c] sm:text-xl">
        {title}
      </h2>
      <div className="mt-3 min-h-0 flex-1">{children}</div>
    </div>
  );
}

function Dash() {
  return (
    <Shell kicker="Dashboard" title="Full BBE Course">
      <div data-tip="tabs" className="flex flex-wrap gap-1.5">
        {(
          [
            { label: "Courses", tip: "tab-courses", on: true },
            { label: "Mock Exams", tip: "tab-mocks", on: false },
            { label: "Custom mocks", tip: "tab-custom", on: false },
            { label: "Study tools", tip: "tab-tools", on: false },
          ] as const
        ).map((tab) => (
          <span
            key={tab.tip}
            data-tip={tab.tip}
            className={cn(
              "rounded-md px-2.5 py-1 text-[11px] font-semibold",
              tab.on ? "bg-[#1c1c1c] text-white" : "border border-black/10 bg-white text-[#5c5c5c]",
            )}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-black/10 bg-white p-3">
        <p className="text-[10px] uppercase tracking-wider text-[#8a8680]">full access</p>
        <p className="font-display text-base font-semibold">Full BBE Course</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eceae4]">
          <div className="h-full w-[62%] bg-[#b3392a]" />
        </div>
        <button
          type="button"
          data-tip="continue"
          className="mt-3 rounded-md bg-[#1c1c1c] px-3 py-1.5 text-xs font-semibold text-white"
        >
          Continue
        </button>
      </div>
      <div data-tip="stats" className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Tasks", "128"],
          ["Accuracy", "74%"],
          ["Streak", "6 days"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-black/10 bg-white px-2 py-2">
            <p className="text-[10px] uppercase tracking-wider text-[#8a8680]">{label}</p>
            <p className="font-display text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Theory({ open }: { open: boolean }) {
  return (
    <Shell kicker="Economics · Chapter 3" title="Types of businesses">
      <button
        type="button"
        data-tip="chapter"
        className="rounded-lg border border-black/10 bg-white px-3 py-2 text-left text-sm font-semibold"
      >
        3. Types of businesses
      </button>
      {open ? (
        <div
          data-tip="theory"
          className="mt-3 rounded-xl border border-black/10 bg-white p-3 text-sm leading-relaxed"
        >
          <p className="font-display text-base font-semibold">Factors of production</p>
          <p className="mt-2 text-[#3a3a3a]">
            Labour is the human effort used in production. Land covers natural resources. Capital is
            the equipment, and entrepreneurship organises the other three and bears the risk.
          </p>
        </div>
      ) : null}
    </Shell>
  );
}

function Task({ marks, timed }: { marks: number[]; timed: boolean }) {
  const lines = [
    "The rented workshop and the ovens are capital.",
    "Buying flour means the bakery is in the primary sector.",
    "Baking is secondary. The shops are tertiary.",
    "The owner's work is entrepreneurship.",
    "A family firm cannot be profit-oriented.",
  ];
  return (
    <Shell kicker="Economics · Task" title="Factors of production">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs text-[#5c5c5c]">Mark the statements that are true.</p>
        <span
          data-tip="timed"
          className={cn(
            "rounded-md border px-2 py-1 text-[11px] font-semibold",
            timed ? "border-[#b3392a] bg-[#b3392a] text-white" : "border-black/10 bg-white",
          )}
        >
          {timed ? "Timed · 1:29:40" : "Timed Mode"}
        </span>
      </div>
      <ul className="space-y-1.5">
        {lines.map((line, i) => {
          const on = marks.includes(i);
          return (
            <li
              key={line}
              data-tip={i === 1 ? "blank" : `m${i}`}
              className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-[13px]"
            >
              <span
                className={cn(
                  "grid h-5 w-5 shrink-0 place-items-center rounded border",
                  on ? "border-[#1c1c1c] bg-[#1c1c1c] text-white" : "border-black/15",
                )}
              >
                {on ? <Check className="h-3 w-3" /> : null}
              </span>
              <span>
                {String.fromCharCode(65 + i)}. {line}
              </span>
            </li>
          );
        })}
      </ul>
    </Shell>
  );
}

function Explain() {
  return (
    <Shell kicker="Explanation" title="Why each statement holds">
      <div data-tip="expl" className="rounded-xl border border-[#b3392a]/30 bg-white p-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#eceae4] px-1.5 py-0.5 text-[10px] font-bold">A</span>
          <span className="rounded border border-black/10 px-1.5 py-0.5 text-[10px] font-bold">
            TRUE
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[#2a2a2a]">
          The workshop and the ovens are man-made resources used in production, so they are capital.
        </p>
      </div>
    </Shell>
  );
}

function English({ shown }: { shown: boolean }) {
  return (
    <Shell kicker="English · Texts" title="The four-day week">
      <p className="text-sm leading-relaxed text-[#2a2a2a]">
        Participants moved to a four-day schedule.
      </p>
      <p
        data-tip="line"
        className={cn(
          "mt-2 max-w-md rounded px-1.5 py-1 text-sm leading-relaxed",
          shown ? "bg-[#b3392a]/15 ring-1 ring-[#b3392a]/40" : "bg-white ring-1 ring-black/10",
        )}
      >
        while maintaining one hundred percent of their previous salary
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c]">
        The trial ran from June to December 2022.
      </p>
      <button
        type="button"
        data-tip="show"
        className="mt-3 rounded-md border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold"
      >
        {shown ? "Located in text" : "Show solution in the text"}
      </button>
    </Shell>
  );
}

function MathCalc({ on, lit, solved }: { on: boolean; lit: string; solved: boolean }) {
  const keys = ["1", "2", "×", "1", "1", "="];
  return (
    <Shell kicker="Math" title="A product inside the task">
      <p className="font-display text-lg font-semibold text-[#1c1c1c]">
        {solved ? "12 × 11 = 132" : "12 × 11"}
      </p>
      <button
        type="button"
        data-tip="calc"
        className="mt-2 rounded-md bg-[#1c1c1c] px-3 py-1.5 text-xs font-semibold text-white"
      >
        {on ? "Calculator open" : "Calculator"}
      </button>
      {on ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {keys.map((key, i) => (
            <span
              key={`k-${i}`}
              data-tip={`k-${i}`}
              className={cn(
                "grid h-8 w-8 place-items-center rounded-md border text-sm font-semibold",
                lit === String(i)
                  ? "border-[#b3392a] bg-[#b3392a] text-white"
                  : "border-black/10 bg-white",
              )}
            >
              {key}
            </span>
          ))}
        </div>
      ) : null}
    </Shell>
  );
}

function MockPaper({ flagged, bubble }: { flagged: boolean; bubble: boolean }) {
  return (
    <Shell kicker="Mock exam" title="Question 2 of 35">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div data-tip="palette" className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={cn(
                "grid h-6 w-6 place-items-center rounded text-[11px] font-semibold",
                n === 2
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#5c5c5c] ring-1 ring-black/10",
              )}
            >
              {n}
            </span>
          ))}
        </div>
        <span className="font-display text-sm font-semibold tabular-nums">1:42:10</span>
      </div>
      <p className="text-sm text-[#2a2a2a]">The ovens are capital used in production.</p>
      <button
        type="button"
        data-tip="flag"
        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#5c5c5c]"
      >
        <Flag className={cn("h-3.5 w-3.5", flagged && "fill-[#b3392a] text-[#b3392a]")} />
        {flagged ? "Flagged" : "Flag for later"}
      </button>
      <div
        data-tip="sheet"
        className="mt-3 flex items-center gap-3 rounded-lg border border-black/10 bg-white px-3 py-2"
      >
        <span className="text-[11px] font-semibold text-[#8a8680]">2</span>
        {["A", "B", "C", "D", "E"].map((letter, i) => (
          <span
            key={letter}
            className={cn(
              "grid h-6 w-6 place-items-center rounded-full border text-[10px] font-bold",
              bubble && i === 0 ? "border-[#1c1c1c] bg-[#1c1c1c] text-white" : "border-black/20",
            )}
          >
            {letter}
          </span>
        ))}
      </div>
    </Shell>
  );
}

function Results() {
  const bars = [40, 62, 28, 80, 48, 70];
  return (
    <Shell kicker="Results" title="Time on each question">
      <div
        data-tip="chart"
        className="flex h-28 items-end gap-2 rounded-xl border border-black/10 bg-white px-3 py-3"
      >
        {bars.map((h, i) => (
          <div key={h} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-sm"
              style={{ height: `${h}%`, background: i === 3 ? RUST : "#1c1c1c" }}
            />
            <span className="text-[10px] text-[#8a8680]">{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#5c5c5c]">
        Tasks opens the explanation for every statement.
      </p>
    </Shell>
  );
}

function Builder({ chosen, built }: { chosen: boolean; built: boolean }) {
  return (
    <Shell kicker="Custom Mock Builder" title="Only the weak spots">
      <div
        data-tip="topic"
        className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm"
      >
        <span
          className={cn(
            "grid h-4 w-4 place-items-center rounded border",
            chosen ? "border-[#1c1c1c] bg-[#1c1c1c] text-white" : "border-black/20 bg-white",
          )}
        >
          {chosen ? <Check className="h-3 w-3" /> : null}
        </span>
        Chapter 3 · Types of businesses
      </div>
      <p className="mt-2 text-xs text-[#5c5c5c]">12 questions · weight on this chapter</p>
      <button
        type="button"
        data-tip="build"
        className="mt-3 rounded-md bg-[#1c1c1c] px-3 py-1.5 text-xs font-semibold text-white"
      >
        {built ? "Mock ready" : "Build"}
      </button>
    </Shell>
  );
}

function Tools({
  flipped,
  matched,
  picked,
}: {
  flipped: boolean;
  matched: boolean;
  picked: boolean;
}) {
  return (
    <Shell kicker="Study tools" title="Three ways to revise">
      <div className="grid grid-cols-3 gap-2">
        <div data-tip="card" className="rounded-xl border border-black/10 bg-white p-2.5">
          <p className="text-[10px] uppercase tracking-wider text-[#8a8680]">
            {flipped ? "Meaning" : "Term"}
          </p>
          <p className="mt-1 font-display text-sm font-semibold">
            {flipped ? "The next best alternative given up." : "Opportunity cost"}
          </p>
        </div>
        <div data-tip="pair" className="rounded-xl border border-black/10 bg-white p-2.5 text-sm">
          <p className={cn(matched && "font-semibold text-[#1c6b45]")}>Labour</p>
          <p className="text-[#5c5c5c]">Human effort in production</p>
        </div>
        <div data-tip="choice" className="rounded-xl border border-black/10 bg-white p-2.5 text-sm">
          <p>Which factor bears the risk?</p>
          <p className={cn("mt-1", picked && "font-semibold")}>Entrepreneurship</p>
        </div>
      </div>
    </Shell>
  );
}
