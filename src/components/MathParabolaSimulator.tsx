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
  const activeStatementId: number | null = activeIdx;

  const selectStatement = (i: number) => {
    setActiveIdx(i);
    setOpenExpl((s) => ({ ...s, [i]: true }));
  };

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
                    onClick={() => checked && selectStatement(i)}
                    className={cn(
                      "px-4 py-3 transition-colors",
                      checked && "cursor-pointer hover:bg-secondary/40",
                      activeIdx === i && "ring-1 ring-primary/50 bg-primary/5",
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

            <ParabolaPlot statementId={activeStatementId} />
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

// ---------- Native SVG "edugraph" plot (light theme, statement-reactive) ----------
function ParabolaPlot({ statementId }: { statementId: number | null }) {
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
  const Pprime = (x: number) => -4 * x + 40;

  const N = 160;
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

  // Statement-driven layer visibility (0-indexed)
  const showXTarget = statementId === 0 || statementId === 1;
  const showYTarget = statementId === 1;
  const showVertexFlash = statementId === 0 || statementId === 1;
  const showConcavity = statementId === 2;
  const showTangent = statementId === 3;
  const showRightArrow = statementId === 4;
  const dimLeft = statementId === 4;

  // Tangent at vertex (slope = 0) — for statement 4 show tangent at x=8 as a rate-of-change illustration
  const tX = 8;
  const tY = P(tX);
  const tSlope = Pprime(tX); // 8
  const tSpan = 2.2;
  const tx1 = tX - tSpan;
  const tx2 = tX + tSpan;
  const ty1 = tY + tSlope * (tx1 - tX);
  const ty2 = tY + tSlope * (tx2 - tX);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full rounded-lg bg-white"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Parabola plot of P(x) = -2x^2 + 40x - 150"
      >
        <defs>
          <linearGradient id="areaFillLight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff8a1f" stopOpacity={showConcavity ? 0.32 : 0.1} />
            <stop offset="100%" stopColor="#ff8a1f" stopOpacity="0" />
          </linearGradient>
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrowUpL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#16a34a" />
          </marker>
          <marker id="arrowDownL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#dc2626" />
          </marker>
          <marker id="arrowFlash" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* grid */}
        {[-60, -40, -20, 0, 20, 40, 60].map((g) => (
          <line
            key={`gy${g}`}
            x1={PAD_L}
            x2={W - PAD_R}
            y1={sy(g)}
            y2={sy(g)}
            stroke="#0f172a"
            strokeOpacity={g === 0 ? 0.32 : 0.07}
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
            stroke="#0f172a"
            strokeOpacity={g === 10 ? 0.18 : 0.06}
            strokeWidth={0.6}
          />
        ))}

        {/* axes labels */}
        {[5, 8, 10, 12, 15].map((v) => (
          <text
            key={`xl${v}`}
            x={sx(v)}
            y={H - PAD_B + 14}
            fill="#334155"
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
            fill="#334155"
            fontSize="10"
            textAnchor="end"
          >
            {v}
          </text>
        ))}
        <text x={W - PAD_R} y={H - PAD_B + 26} fill="#64748b" fontSize="10" textAnchor="end">
          price x
        </text>
        <text x={PAD_L - 30} y={PAD_T + 4} fill="#64748b" fontSize="10">
          P(x)
        </text>

        {/* concavity shading (base is faint, boosted on statement 3) */}
        <path
          d={areaPath}
          fill="url(#areaFillLight)"
          style={{ transition: "opacity 400ms" }}
        />
        {showConcavity && (
          <g style={{ transition: "opacity 400ms" }}>
            <rect
              x={PAD_L}
              y={PAD_T}
              width={iw}
              height={sy(0) - PAD_T}
              fill="#ff8a1f"
              fillOpacity={0.08}
            />
            <g transform={`translate(${sx(10)}, ${sy(18)})`}>
              <rect x={-118} y={-14} rx={6} ry={6} width={236} height={22} fill="#fff" stroke="#ff8a1f" />
              <text x={0} y={2} fill="#b45309" fontSize="11" fontWeight="700" textAnchor="middle">
                P″(10) = −4 &lt; 0 · Strict Local Maximum
              </text>
            </g>
          </g>
        )}

        {/* curve */}
        <path
          d={linePath}
          fill="none"
          stroke="#ff8a1f"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glowLight)"
          style={{ transition: "opacity 400ms" }}
        />

        {/* Statement 4: tangent line illustrating rate of change */}
        {showTangent && (
          <g style={{ transition: "opacity 400ms" }}>
            <line
              x1={sx(tx1)}
              y1={sy(ty1)}
              x2={sx(tx2)}
              y2={sy(ty2)}
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <circle cx={sx(tX)} cy={sy(tY)} r={5} fill="#2563eb" />
            <g transform={`translate(${sx(tX) + 10}, ${sy(tY) - 22})`}>
              <rect x={0} y={0} rx={6} ry={6} width={168} height={22} fill="#fff" stroke="#2563eb" />
              <text x={8} y={15} fill="#1d4ed8" fontSize="10.5" fontWeight="700">
                P′(8) = 8 · rate of change
              </text>
            </g>
          </g>
        )}

        {/* Left rising arrow */}
        <g
          opacity={dimLeft ? 0.15 : statementId === 3 ? 0.9 : 0.55}
          style={{ transition: "opacity 400ms" }}
        >
          <line
            x1={sx(6.5)}
            y1={sy(P(6.5))}
            x2={sx(8.5)}
            y2={sy(P(8.5))}
            stroke="#16a34a"
            strokeWidth="2.2"
            markerEnd="url(#arrowUpL)"
          />
          <text x={sx(6.2)} y={sy(P(6.5)) - 6} fill="#15803d" fontSize="10" fontWeight="700">
            P′ &gt; 0 ↑
          </text>
        </g>

        {/* Right falling arrow (flashes for statement 5) */}
        <g
          opacity={showRightArrow ? 1 : statementId === 3 ? 0.9 : 0.55}
          style={{ transition: "opacity 400ms" }}
        >
          <line
            x1={sx(11.5)}
            y1={sy(P(11.5))}
            x2={sx(13.7)}
            y2={sy(P(13.7))}
            stroke="#dc2626"
            strokeWidth={showRightArrow ? 3.4 : 2.2}
            markerEnd={showRightArrow ? "url(#arrowFlash)" : "url(#arrowDownL)"}
          >
            {showRightArrow && (
              <animate attributeName="opacity" values="1;0.35;1" dur="0.9s" repeatCount="indefinite" />
            )}
          </line>
          <text
            x={sx(13.7)}
            y={sy(P(11.5)) - 6}
            fill="#b91c1c"
            fontSize="10"
            fontWeight="700"
            textAnchor="end"
          >
            {showRightArrow ? "DECREASING for x > 10" : "P′ < 0 ↓"}
          </text>
        </g>

        {/* X target line at x=10 */}
        <line
          x1={sx(vX)}
          y1={sy(vY)}
          x2={sx(vX)}
          y2={sy(yMin)}
          stroke="#ff8a1f"
          strokeOpacity={showXTarget ? 0.95 : 0.35}
          strokeDasharray="3 4"
          strokeWidth={showXTarget ? 1.6 : 1.1}
          style={{ transition: "stroke-opacity 400ms" }}
        />
        {showXTarget && (
          <text x={sx(vX)} y={H - PAD_B - 4} fill="#b45309" fontSize="10.5" fontWeight="700" textAnchor="middle">
            x = 10
          </text>
        )}

        {/* Y target line at P=50 */}
        <line
          x1={sx(vX)}
          y1={sy(vY)}
          x2={PAD_L}
          y2={sy(vY)}
          stroke="#ff8a1f"
          strokeOpacity={showYTarget ? 0.95 : 0.35}
          strokeDasharray="3 4"
          strokeWidth={showYTarget ? 1.6 : 1.1}
          style={{ transition: "stroke-opacity 400ms" }}
        />
        {showYTarget && (
          <text x={PAD_L + 4} y={sy(vY) - 4} fill="#b45309" fontSize="10.5" fontWeight="700">
            P = 50
          </text>
        )}

        {/* Vertex dot */}
        <circle
          cx={sx(vX)}
          cy={sy(vY)}
          r={showVertexFlash ? 9 : 6}
          fill="#ffb020"
          stroke="#b45309"
          strokeWidth={showVertexFlash ? 2 : 1}
          filter="url(#glowLight)"
          style={{ transition: "r 300ms" }}
        >
          {showVertexFlash && (
            <animate attributeName="opacity" values="1;0.35;1" dur="1.1s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx={sx(vX)} cy={sy(vY)} r={3} fill="#fff" />

        {/* Vertex label — emphasized on statement 2 */}
        <g transform={`translate(${sx(vX) + 12}, ${sy(vY) - 26})`}>
          <rect
            x={0}
            y={0}
            rx={6}
            ry={6}
            width={showYTarget ? 120 : 170}
            height={22}
            fill="#fff"
            stroke="#ff8a1f"
            strokeWidth={showYTarget ? 2 : 1}
          >
            {showYTarget && (
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
            )}
          </rect>
          <text x={8} y={15} fill="#b45309" fontSize="10.5" fontWeight="700">
            {showYTarget ? "(10, 50)" : "Vertex / Max: (10, 50)"}
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
          <span className="h-[3px] w-4 rounded bg-[#16a34a]" /> Increasing
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-[3px] w-4 rounded bg-[#dc2626]" /> Decreasing
        </span>
        {statementId === 3 && (
          <span className="inline-flex items-center gap-1">
            <span className="h-[3px] w-4 rounded bg-[#2563eb]" /> Tangent
          </span>
        )}
      </div>
    </div>
  );
}

