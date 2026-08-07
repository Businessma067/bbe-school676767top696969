import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  applyMagneticSnap,
  balancedPoint,
  buildWeightedTopics,
  clampToPolygon,
  dist,
  randomBalancedPoint,
  regularPolygonVertices,
  vertexPoint,
  type TopicWeightTopic,
  type Vec2,
  type WeightedTopic,
} from "@/lib/topic-weight-engine";
import { Dices, Equal, Focus, RotateCcw } from "lucide-react";

const ACCENT = "#8B5E3C";
const VIEW = 220;
const PAD = 36;
const R = 78;

type Props = {
  topics: TopicWeightTopic[];
  questionCount: number;
  className?: string;
  /** Controlled control-point in unit space (radius≈1). */
  point?: Vec2;
  onPointChange?: (p: Vec2) => void;
  title?: string;
};

function toSvg(p: Vec2): Vec2 {
  return { x: VIEW / 2 + p.x * R, y: VIEW / 2 + p.y * R };
}

function fromSvg(sx: number, sy: number): Vec2 {
  return { x: (sx - VIEW / 2) / R, y: (sy - VIEW / 2) / R };
}

export function TopicWeightSelector({
  topics,
  questionCount,
  className,
  point: controlledPoint,
  onPointChange,
  title = "Topic weights",
}: Props) {
  const gid = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);
  const [localPoint, setLocalPoint] = useState<Vec2>(balancedPoint());
  const [draggingUi, setDraggingUi] = useState(false);
  const point = controlledPoint ?? localPoint;

  const setPoint = useCallback(
    (p: Vec2, withSnap: boolean) => {
      const verts = regularPolygonVertices(topics.length);
      let next = clampToPolygon(p, verts);
      if (withSnap && !dragging.current) {
        next = applyMagneticSnap(next, verts).point;
      } else if (withSnap && dragging.current) {
        // Soft snap while dragging — only when very close
        next = applyMagneticSnap(next, verts, 0.05).point;
      }
      if (!controlledPoint) setLocalPoint(next);
      onPointChange?.(next);
    },
    [controlledPoint, onPointChange, topics.length],
  );

  const computed = useMemo(
    () =>
      buildWeightedTopics(topics, point, questionCount, {
        snap: false, // already snapped in setPoint
      }),
    [topics, point, questionCount],
  );

  // Reset to centre when topic set identity changes
  const topicKey = topics.map((t) => t.id).join("|");
  useEffect(() => {
    setPoint(balancedPoint(), false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when membership changes
  }, [topicKey]);

  const clientToUnit = (clientX: number, clientY: number): Vec2 => {
    const svg = svgRef.current;
    if (!svg) return point;
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return point;
    const sp = pt.matrixTransform(ctm.inverse());
    return fromSvg(sp.x, sp.y);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragging.current = true;
    setDraggingUi(true);
    setPoint(clientToUnit(e.clientX, e.clientY), true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setPoint(clientToUnit(e.clientX, e.clientY), true);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    setDraggingUi(false);
    setPoint(clientToUnit(e.clientX, e.clientY), true);
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const moveByKeyboard = (dx: number, dy: number) => {
    setPoint({ x: point.x + dx, y: point.y + dy }, true);
  };

  if (topics.length === 0) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background/50 p-6 text-center",
          className,
        )}
      >
        <p className="font-display text-sm font-semibold text-foreground">Shape your mock</p>
        <p className="mt-2 max-w-xs text-xs text-muted-foreground">
          Select at least one subtopic on the left. With two or more, a polygon appears so you can
          balance how many questions each topic gets.
        </p>
      </div>
    );
  }

  if (topics.length === 1) {
    const only = computed.topics[0];
    return (
      <div className={cn("flex flex-col", className)}>
        <h3 className="font-display text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">One topic selected — full weight.</p>
        <div className="mt-4 rounded-xl border border-border bg-background/60 p-4">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-semibold">{only.label}</span>
            <span className="font-display text-lg font-bold tabular-nums text-[#8B5E3C]">100%</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {only.questions} question{only.questions === 1 ? "" : "s"}
          </p>
        </div>
        <PreviewList topics={computed.topics} total={questionCount} />
      </div>
    );
  }

  const svgVerts = computed.vertices.map(toSvg);
  const ctrl = toSvg(computed.point);
  const polyPoints = svgVerts.map((v) => `${v.x},${v.y}`).join(" ");

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-semibold">{title}</h3>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Drag the point to shape how questions are split
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-3 w-full max-w-[min(100%,380px)]">
        <svg
          ref={svgRef}
          viewBox={`${-PAD} ${-PAD} ${VIEW + PAD * 2} ${VIEW + PAD * 2}`}
          className="w-full touch-none select-none"
          role="application"
          aria-label="Topic weight polygon. Drag the control point to redistribute questions."
          tabIndex={0}
          onKeyDown={(e) => {
            const step = e.shiftKey ? 0.08 : 0.03;
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              moveByKeyboard(-step, 0);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              moveByKeyboard(step, 0);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              moveByKeyboard(0, -step);
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              moveByKeyboard(0, step);
            } else if (e.key === "Home") {
              e.preventDefault();
              setPoint(balancedPoint(), false);
            }
          }}
        >
          <defs>
            <radialGradient id={`${gid}-glow`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={ACCENT} stopOpacity="0.55" />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
            </radialGradient>
            <filter id={`${gid}-soft`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Soft fill */}
          <polygon
            points={polyPoints}
            fill={`url(#${gid}-glow)`}
            fillOpacity={0.35}
            stroke={ACCENT}
            strokeOpacity={0.35}
            strokeWidth={1.25}
          />
          <polygon
            points={polyPoints}
            fill="color-mix(in oklab, var(--card) 70%, transparent)"
            stroke={ACCENT}
            strokeOpacity={0.55}
            strokeWidth={1.5}
          />

          {/* Guide lines */}
          {svgVerts.map((v, i) => {
            const w = computed.topics[i]?.weight ?? 0;
            return (
              <line
                key={`g-${topics[i].id}`}
                x1={ctrl.x}
                y1={ctrl.y}
                x2={v.x}
                y2={v.y}
                stroke={ACCENT}
                strokeWidth={0.8 + w * 2.2}
                strokeOpacity={0.12 + w * 0.55}
                style={{ transition: draggingUi ? "none" : "stroke-opacity 180ms ease, stroke-width 180ms ease" }}
              />
            );
          })}

          {/* Vertices + labels */}
          {svgVerts.map((v, i) => {
            const w = computed.topics[i]?.weight ?? 0;
            const pct = computed.topics[i]?.percent ?? 0;
            const label = topics[i].shortLabel ?? topics[i].label;
            const r = 4.2 + w * 3.2;
            const glow = w > 0.22;
            // Place label outside along radius
            const ang = Math.atan2(v.y - VIEW / 2, v.x - VIEW / 2);
            const lx = v.x + Math.cos(ang) * 18;
            const ly = v.y + Math.sin(ang) * 18;
            return (
              <g key={topics[i].id}>
                {glow && (
                  <circle
                    cx={v.x}
                    cy={v.y}
                    r={r + 5}
                    fill={ACCENT}
                    opacity={0.18 + w * 0.25}
                    filter={`url(#${gid}-soft)`}
                  />
                )}
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={r}
                  fill={ACCENT}
                  fillOpacity={0.35 + w * 0.55}
                  stroke={ACCENT}
                  strokeWidth={1.2}
                  style={{ transition: draggingUi ? "none" : "r 180ms ease, fill-opacity 180ms ease" }}
                />
                <text
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-display"
                  style={{
                    fontSize: 8.5,
                    fontWeight: 700,
                    fill: "currentColor",
                    opacity: 0.45 + w * 0.55,
                    transition: draggingUi ? "none" : "opacity 180ms ease",
                  }}
                >
                  {label}
                </text>
                <text
                  x={lx}
                  y={ly + 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    fill: ACCENT,
                    opacity: 0.55 + w * 0.45,
                    transition: draggingUi ? "none" : "opacity 180ms ease",
                  }}
                >
                  {pct % 1 === 0 ? `${pct}%` : `${pct.toFixed(1)}%`}
                </text>
              </g>
            );
          })}

          {/* Control point */}
          <circle
            cx={ctrl.x}
            cy={ctrl.y}
            r={draggingUi ? 9 : 8}
            fill={ACCENT}
            stroke="white"
            strokeWidth={2.5}
            filter={`url(#${gid}-soft)`}
            style={{
              cursor: "grab",
              transition: draggingUi ? "none" : "r 160ms ease",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />
          <circle
            cx={ctrl.x}
            cy={ctrl.y}
            r={18}
            fill="transparent"
            style={{ cursor: "grab", touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <QuickBtn
          icon={<Equal className="h-3 w-3" />}
          label="Balanced"
          onClick={() => setPoint(balancedPoint(), false)}
        />
        <QuickBtn
          icon={<RotateCcw className="h-3 w-3" />}
          label="Reset"
          onClick={() => setPoint(balancedPoint(), false)}
        />
        <QuickBtn
          icon={<Focus className="h-3 w-3" />}
          label="100% nearest"
          onClick={() => {
            const verts = computed.vertices;
            let best = 0;
            let bestD = Infinity;
            verts.forEach((v, i) => {
              const d = dist(point, v);
              if (d < bestD) {
                bestD = d;
                best = i;
              }
            });
            setPoint(vertexPoint(verts, best), false);
          }}
        />
        <QuickBtn
          icon={<Dices className="h-3 w-3" />}
          label="Random"
          onClick={() => setPoint(randomBalancedPoint(computed.vertices), false)}
        />
      </div>

      <PreviewList topics={computed.topics} total={questionCount} />
    </div>
  );
}

function QuickBtn({
  icon,
  label,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1.5 text-[10px] font-semibold text-muted-foreground transition hover:border-[#8B5E3C]/40 hover:bg-secondary hover:text-foreground"
    >
      {icon}
      {label}
    </button>
  );
}

function PreviewList({ topics, total }: { topics: WeightedTopic[]; total: number }) {
  const minutes = total * 2;
  return (
    <div className="mt-4 rounded-xl border border-border bg-background/70 p-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">Economics Mock</p>
      <ul className="mt-2 space-y-1.5">
        {topics.map((t) => (
          <li key={t.id} className="flex items-baseline justify-between gap-3 text-xs">
            <span className="min-w-0 truncate font-medium text-foreground">
              <span className="tabular-nums text-muted-foreground">{t.id}</span>{" "}
              <span className="text-muted-foreground">·</span> {t.label.replace(/^\d+\.\d+\s*/, "")}
            </span>
            <span className="shrink-0 tabular-nums text-muted-foreground">
              <span className="font-semibold text-[#8B5E3C]">
                {t.percent % 1 === 0 ? `${t.percent}%` : `${t.percent.toFixed(1)}%`}
              </span>
              <span className="mx-1.5 text-border">·</span>
              {t.questions}q
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2 text-[11px] font-semibold">
        <span>
          Total <span className="tabular-nums">{total}</span> Questions
        </span>
        <span className="text-muted-foreground">
          Est. <span className="tabular-nums text-foreground">{minutes}</span> min
        </span>
      </div>
    </div>
  );
}
