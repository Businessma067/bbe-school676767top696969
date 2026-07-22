import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, RotateCcw, Sparkles, X, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const CASE = {
  case_id: "TASK 1",
  title: "Single-Variable Profit Optimization",
  difficulty: "5/5",
  context:
    "A company's profit (in thousands of euros) as a function of price level x is modeled by P(x) = −2x² + 40x − 150, where x is measured in price units. Consider the following statements about this function.",
  statements: [
    "The critical point of P(x) occurs at x = 10.",
    "The maximum profit value, P(10), equals 50.",
    "Since P''(x) = −4, which is positive, x = 10 corresponds to a local minimum.",
    "The derivative P'(x) = −4x + 40 represents the instantaneous rate of change of profit with respect to price.",
    "For price values greater than 10, the function is increasing, since P'(x) > 0 in that range.",
  ],
  answer_key: [true, true, false, true, false],
  tactical: [
    "TRUE. Setting P'(x) = −4x + 40 = 0 solves to x = 10 — the unique critical point.",
    "TRUE. P(10) = −2(100) + 400 − 150 = 50 (thousand euros).",
    "FALSE. Classic sign-flip trap. P''(x) = −4 is strictly NEGATIVE, so by the Second Derivative Test x = 10 is a local MAXIMUM.",
    "TRUE. The first derivative is by definition the instantaneous rate of change of P with respect to x.",
    "FALSE. Inverted logic. For x > 10, P'(x) = −4x + 40 < 0, so the function is strictly DECREASING past the vertex.",
  ],
  focus: [
    "critical", // vertex + dotted lines
    "vertex", // vertex value highlight
    "concavity", // shaded area emphasized
    "derivative", // slope arrows shown neutral
    "slope-right", // red down arrow emphasized
  ] as const,
};

type Focus = (typeof CASE.focus)[number];

export default function MathParabolaSimulator() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 20, y: 20 });
  const [clicking, setClicking] = useState(false);
  const [dim, setDim] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const MOVE = 1050;
    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));

    const smoothScroll = (el: HTMLElement, to: number, duration = MOVE) => {
      const start = el.scrollTop;
      const change = to - start;
      if (Math.abs(change) < 1) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - t0) / duration);
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          el.scrollTop = start + change * eased;
          if (t < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    };

    const moveTo = async (selector: string) => {
      const stage = stageRef.current;
      const el = stage?.querySelector<HTMLElement>(selector);
      if (!stage || !el) return;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      const left = leftRef.current;
      let cursorY: number;
      let scrollP = Promise.resolve();
      if (left && left.contains(el)) {
        const lb = left.getBoundingClientRect();
        const desired = left.scrollTop + (eb.top - lb.top) - lb.height / 2 + eb.height / 2;
        const clamped = Math.max(0, Math.min(desired, left.scrollHeight - left.clientHeight));
        scrollP = smoothScroll(left, clamped, MOVE);
        const delta = clamped - left.scrollTop;
        cursorY = eb.top - s.top + eb.height / 2 - delta;
      } else {
        cursorY = eb.top - s.top + eb.height / 2;
      }
      setCursor({ x: eb.left - s.left + eb.width / 2, y: cursorY });
      await Promise.all([scrollP, wait(MOVE)]);
      await wait(260);
    };

    const click = async () => {
      setClicking(true);
      await wait(170);
      setClicking(false);
      await wait(180);
    };

    const loop = async () => {
      while (!cancelled) {
        setDim(true);
        await wait(400);
        setAnswers({});
        setChecked(false);
        setOpenExpl({});
        setActiveIdx(null);
        setDim(false);
        await wait(500);

        // Student marks 0,1,2,3 as TRUE (traps 2 & 4 wrong)
        const toMark = [0, 1, 2, 3];
        for (const i of toMark) {
          if (cancelled) return;
          await moveTo(`[data-sim-check="${i}"]`);
          await click();
          setAnswers((a) => ({ ...a, [i]: true }));
          await wait(240);
        }

        await moveTo(`[data-sim-submit]`);
        await click();
        setChecked(true);
        await wait(1100);

        for (let i = 0; i < CASE.statements.length; i++) {
          if (cancelled) return;
          await moveTo(`[data-sim-ai="${i}"]`);
          await click();
          setActiveIdx(i);
          setOpenExpl((s) => ({ ...s, [i]: true }));
          await wait(2100);
        }
        await wait(2600);
      }
    };
    loop();
    return () => {
      cancelled = true;
    };
  }, []);

  const activeCorrect = activeIdx !== null ? CASE.answer_key[activeIdx] : null;
  const focus: Focus | null = activeIdx !== null ? CASE.focus[activeIdx] : null;

  return (
    <div className="relative h-[480px] overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl sm:h-[520px] lg:h-[560px]">
      <div
        ref={stageRef}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl bg-background transition-opacity duration-500",
          dim ? "opacity-40" : "opacity-100",
        )}
      >
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1">
            <div className="mx-auto max-w-md rounded-md border border-border bg-background px-3 py-1 text-center text-[11px] text-muted-foreground">
              bbe-school.app / demo-practice / math / optimization / task-1
            </div>
          </div>
          <div className="hidden text-[10px] font-semibold tracking-widest text-primary sm:block">
            LIVE DEMO
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden p-3 sm:p-5 lg:grid-cols-[1.1fr_1fr] lg:gap-5">
          {/* LEFT */}
          <article
            ref={leftRef}
            className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                {CASE.case_id}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                Difficulty {CASE.difficulty}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                Optimization
              </span>
              <span className="flex-1" />
              {checked && (
                <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                  <RotateCcw className="h-3 w-3" /> Reset task
                </span>
              )}
            </div>

            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {CASE.context}
            </p>
            <div className="mt-3 rounded-md border border-border bg-background px-3 py-2 font-mono text-[13px] text-foreground">
              P(x) = −2x² + 40x − 150
            </div>

            <ol className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
              <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="w-6 text-center">#</span>
                <span className="flex-1">Statement</span>
                <span className="w-14 text-center">True</span>
                {checked && <span className="w-6" aria-hidden />}
              </li>

              {CASE.statements.map((stmt, i) => {
                const userAns = answers[i];
                const isChecked = userAns === true;
                const correctAns = CASE.answer_key[i];
                const isCorrect = checked && isChecked === correctAns;
                const isWrong = checked && isChecked !== correctAns;
                return (
                  <li
                    key={i}
                    className={cn(
                      "px-4 py-3 transition-colors",
                      isCorrect && "bg-emerald-500/5",
                      isWrong && "bg-destructive/5",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                        {i + 1}.
                      </span>
                      <p className="flex-1 text-[13px] leading-relaxed text-foreground">{stmt}</p>
                      <div className="flex w-14 justify-center">
                        <span
                          data-sim-check={i}
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                            isChecked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background",
                          )}
                        >
                          {isChecked && <Check className="h-4 w-4" strokeWidth={3} />}
                        </span>
                      </div>
                      {checked && (
                        <span
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded-full",
                            isCorrect
                              ? "bg-emerald-500 text-white"
                              : "bg-destructive text-destructive-foreground",
                          )}
                        >
                          {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </span>
                      )}
                    </div>

                    {checked && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground">
                          Explanation
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform",
                              openExpl[i] && "rotate-180",
                            )}
                          />
                        </span>
                        <span
                          data-sim-ai={i}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                            activeIdx === i
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-primary/60 bg-primary/10 text-primary",
                          )}
                        >
                          <Sparkles className="h-3 w-3" />
                          {activeIdx === i ? "Plotted on graph →" : "Show AI graph explanation"}
                        </span>
                        {openExpl[i] && (
                          <p
                            className={cn(
                              "mt-1 w-full rounded-md p-3 text-xs leading-relaxed",
                              isCorrect
                                ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                                : "bg-destructive/10 text-destructive",
                            )}
                          >
                            {CASE.tactical[i]}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {!checked ? (
                <span
                  data-sim-submit
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm"
                >
                  Check answers
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground">
                  Score:{" "}
                  <span className="text-foreground">
                    {CASE.answer_key.filter((v, i) => (answers[i] === true) === v).length}/5
                  </span>
                </span>
              )}
            </div>
          </article>

          {/* RIGHT: AI plot canvas */}
          <aside className="min-h-0 overflow-hidden rounded-2xl border border-border bg-[#0b0d12] p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                <LineChart className="h-3.5 w-3.5" />
                {activeIdx === null
                  ? "AI Graph Canvas"
                  : `AI Plot · Statement ${activeIdx + 1}`}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/50">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                edugraph · live
              </div>
            </div>

            {activeIdx !== null && (
              <div className="mb-3 rounded-lg border border-white/10 bg-white/5 p-3">
                <span
                  className={cn(
                    "inline-block rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider",
                    activeCorrect
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-destructive/20 text-destructive",
                  )}
                >
                  Answer: {activeCorrect ? "TRUE" : "FALSE"}
                </span>
                <p className="mt-2 text-[11px] italic text-white/60">
                  "{CASE.statements[activeIdx]}"
                </p>
              </div>
            )}

            <ParabolaPlot focus={focus} />
          </aside>
        </div>

        {/* Cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-30 transition-transform duration-[900ms] ease-in-out"
          style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        >
          <div className="relative -translate-x-1 -translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              <path
                d="M3 2 L3 18 L7.5 14 L10.5 21 L13.5 19.7 L10.5 12.8 L17 12.8 Z"
                fill="#fff"
                stroke="#111"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            {clicking && (
              <span className="absolute -left-2 -top-2 h-8 w-8 animate-ping rounded-full bg-primary/50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Native SVG "edugraph" plot ----------
function ParabolaPlot({ focus }: { focus: Focus | null }) {
  // Data domain: x ∈ [5, 15], y ∈ [P(5)=-50 ... P(10)=50]
  const W = 520;
  const H = 340;
  const PAD_L = 46;
  const PAD_R = 20;
  const PAD_T = 20;
  const PAD_B = 40;
  const iw = W - PAD_L - PAD_R;
  const ih = H - PAD_T - PAD_B;

  const xMin = 5;
  const xMax = 15;
  const yMin = -60;
  const yMax = 60;

  const sx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * iw;
  const sy = (y: number) => PAD_T + (1 - (y - yMin) / (yMax - yMin)) * ih;

  const P = (x: number) => -2 * x * x + 40 * x - 150;

  const N = 120;
  const pts: [number, number][] = [];
  for (let i = 0; i <= N; i++) {
    const x = xMin + (i / N) * (xMax - xMin);
    pts.push([x, P(x)]);
  }
  const linePath = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${sx(x)},${sy(y)}`).join(" ");
  const zeroY = sy(0);
  const areaPath =
    `M${sx(pts[0][0])},${zeroY} ` +
    pts.map(([x, y]) => `L${sx(x)},${sy(y)}`).join(" ") +
    ` L${sx(pts[pts.length - 1][0])},${zeroY} Z`;

  const vX = 10;
  const vY = 50;

  const highlightCritical = focus === "critical" || focus === "vertex";
  const highlightConcavity = focus === "concavity";
  const highlightLeft = focus === "derivative";
  const highlightRight = focus === "slope-right" || focus === "derivative";

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Parabola plot of P(x) = -2x^2 + 40x - 150"
      >
        <defs>
          <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff8a1f" stopOpacity={highlightConcavity ? 0.35 : 0.16} />
            <stop offset="100%" stopColor="#ff8a1f" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* grid */}
        {[-60, -40, -20, 0, 20, 40, 60].map((g) => (
          <line
            key={`gy${g}`}
            x1={PAD_L}
            x2={W - PAD_R}
            y1={sy(g)}
            y2={sy(g)}
            stroke="#ffffff"
            strokeOpacity={g === 0 ? 0.25 : 0.06}
            strokeWidth={g === 0 ? 1 : 0.6}
          />
        ))}
        {[5, 7, 9, 10, 11, 13, 15].map((g) => (
          <line
            key={`gx${g}`}
            y1={PAD_T}
            y2={H - PAD_B}
            x1={sx(g)}
            x2={sx(g)}
            stroke="#ffffff"
            strokeOpacity={0.06}
            strokeWidth={0.6}
          />
        ))}

        {/* axes labels */}
        {[5, 8, 10, 12, 15].map((v) => (
          <text
            key={`xl${v}`}
            x={sx(v)}
            y={H - PAD_B + 14}
            fill="#ffffff90"
            fontSize="10"
            textAnchor="middle"
          >
            {v}
          </text>
        ))}
        {[-60, -30, 0, 30, 50].map((v) => (
          <text
            key={`yl${v}`}
            x={PAD_L - 6}
            y={sy(v) + 3}
            fill="#ffffff90"
            fontSize="10"
            textAnchor="end"
          >
            {v}
          </text>
        ))}
        <text x={W - PAD_R} y={H - PAD_B + 26} fill="#ffffff70" fontSize="10" textAnchor="end">
          price x
        </text>
        <text x={PAD_L - 30} y={PAD_T + 4} fill="#ffffff70" fontSize="10">
          P(x)
        </text>

        {/* concavity shading */}
        <path
          d={areaPath}
          fill="url(#areaFill)"
          style={{ transition: "opacity 500ms" }}
          opacity={1}
        />
        {highlightConcavity && (
          <text
            x={sx(10)}
            y={sy(15)}
            fill="#ffb74d"
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
          >
            Concave Down · P″(x) = −4 &lt; 0
          </text>
        )}

        {/* curve */}
        <path
          d={linePath}
          fill="none"
          stroke="#ff8a1f"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Slope arrows */}
        {/* Left rising arrow (x ~ 6.5 -> 8.5) */}
        <g
          opacity={highlightLeft ? 1 : 0.55}
          style={{ transition: "opacity 400ms" }}
        >
          <line
            x1={sx(6.5)}
            y1={sy(P(6.5))}
            x2={sx(8.5)}
            y2={sy(P(8.5))}
            stroke="#22c55e"
            strokeWidth="2.2"
            markerEnd="url(#arrowUp)"
          />
          <text x={sx(6.2)} y={sy(P(6.5)) - 6} fill="#22c55e" fontSize="10" fontWeight="700">
            P′ &gt; 0 ↑
          </text>
        </g>
        {/* Right falling arrow (x ~ 11.5 -> 13.5) */}
        <g
          opacity={highlightRight ? 1 : 0.55}
          style={{ transition: "opacity 400ms" }}
        >
          <line
            x1={sx(11.5)}
            y1={sy(P(11.5))}
            x2={sx(13.5)}
            y2={sy(P(13.5))}
            stroke={focus === "slope-right" ? "#ef4444" : "#ef4444"}
            strokeWidth={focus === "slope-right" ? 3 : 2.2}
            markerEnd="url(#arrowDown)"
          />
          <text
            x={sx(13.7)}
            y={sy(P(11.5)) - 6}
            fill="#ef4444"
            fontSize="10"
            fontWeight="700"
            textAnchor="end"
          >
            P′ &lt; 0 ↓
          </text>
        </g>

        <defs>
          <marker id="arrowUp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#22c55e" />
          </marker>
          <marker id="arrowDown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* Dotted vertex intersection */}
        <line
          x1={sx(vX)}
          y1={sy(vY)}
          x2={sx(vX)}
          y2={sy(yMin)}
          stroke="#ff8a1f"
          strokeOpacity={highlightCritical ? 0.9 : 0.45}
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <line
          x1={sx(vX)}
          y1={sy(vY)}
          x2={PAD_L}
          y2={sy(vY)}
          stroke="#ff8a1f"
          strokeOpacity={highlightCritical ? 0.9 : 0.45}
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />

        {/* Vertex dot (blinking) */}
        <circle
          cx={sx(vX)}
          cy={sy(vY)}
          r={highlightCritical ? 8 : 6}
          fill="#ffb020"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="1;0.35;1"
            dur="1.4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={sx(vX)} cy={sy(vY)} r={3} fill="#fff" />

        {/* Vertex label */}
        <g transform={`translate(${sx(vX) + 12}, ${sy(vY) - 18})`}>
          <rect
            x={0}
            y={0}
            rx={6}
            ry={6}
            width={170}
            height={22}
            fill="#000"
            fillOpacity={0.55}
            stroke="#ff8a1f"
            strokeOpacity={0.7}
          />
          <text x={8} y={15} fill="#ffb74d" fontSize="10.5" fontWeight="700">
            Vertex / Max Profit: (10, 50)
          </text>
        </g>
      </svg>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-white/60">
        <span className="inline-flex items-center gap-1">
          <span className="h-[3px] w-4 rounded bg-[#ff8a1f]" /> P(x)
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ffb020]" /> Critical point
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-[3px] w-4 rounded bg-[#22c55e]" /> Increasing
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-[3px] w-4 rounded bg-[#ef4444]" /> Decreasing
        </span>
      </div>
    </div>
  );
}
