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
  seedCountsFromTopics,
  setManualTopicCount,
  topicCountsRecord,
  weightedTopicsFromCounts,
} from "@/lib/topic-weight-engine";
import { Dices, Equal, Focus, Keyboard, RotateCcw, Workflow } from "lucide-react";

const DEFAULT_ACCENT = "#E85D3A";
const VIEW = 240;
const PAD = 38;
const R = 102;

function softFromAccent(accent: string): string {
  return `color-mix(in oklab, ${accent} 55%, white)`;
}

type Props = {
  topics: TopicWeightTopic[];
  questionCount: number;
  className?: string;
  /** Controlled control-point in unit space (radius≈1). */
  point?: Vec2;
  onPointChange?: (p: Vec2) => void;
  /** When true, question counts come from manual fields. */
  manualMode?: boolean;
  onManualModeChange?: (manual: boolean) => void;
  manualCounts?: Record<string, number>;
  onManualCountsChange?: (counts: Record<string, number>) => void;
  title?: string;
  /** Subject accent from the site (Economics / Math / English). */
  accent?: string;
  subjectLabel?: string;
};

function toSvg(p: Vec2): Vec2 {
  return { x: VIEW / 2 + p.x * R, y: VIEW / 2 + p.y * R };
}

function fromSvg(sx: number, sy: number): Vec2 {
  return { x: (sx - VIEW / 2) / R, y: (sy - VIEW / 2) / R };
}

function PanelShell({
  children,
  className,
  empty,
  accent,
}: {
  children: ReactNode;
  className?: string;
  empty?: boolean;
  accent: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
      style={{ borderTop: `4px solid ${accent}` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 85% 70% at 50% 0%, color-mix(in oklab, ${accent} 12%, transparent) 0%, transparent 58%)`,
        }}
      />
      <div className={cn("relative z-10 p-4 sm:p-5", empty && "min-h-[300px]")}>{children}</div>
    </div>
  );
}

export function TopicWeightSelector({
  topics,
  questionCount,
  className,
  point: controlledPoint,
  onPointChange,
  manualMode = false,
  onManualModeChange,
  manualCounts,
  onManualCountsChange,
  title = "Topic weights",
  accent = DEFAULT_ACCENT,
  subjectLabel = "Economics",
}: Props) {
  const accentSoft = softFromAccent(accent);
  const gid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);
  const [localPoint, setLocalPoint] = useState<Vec2>(balancedPoint());
  const [draggingUi, setDraggingUi] = useState(false);
  const [localManual, setLocalManual] = useState(false);
  const [localCounts, setLocalCounts] = useState<Record<string, number>>({});
  const point = controlledPoint ?? localPoint;
  const isManual = onManualModeChange ? manualMode : localManual;
  const counts = onManualCountsChange ? (manualCounts ?? {}) : localCounts;

  const setPoint = useCallback(
    (p: Vec2, withSnap: boolean) => {
      const verts = regularPolygonVertices(topics.length);
      let next = clampToPolygon(p, verts);
      if (withSnap && !dragging.current) {
        next = applyMagneticSnap(next, verts).point;
      } else if (withSnap && dragging.current) {
        next = applyMagneticSnap(next, verts, 0.05).point;
      }
      if (!controlledPoint) setLocalPoint(next);
      onPointChange?.(next);
    },
    [controlledPoint, onPointChange, topics.length],
  );

  const setManual = (v: boolean) => {
    if (onManualModeChange) onManualModeChange(v);
    else setLocalManual(v);
  };

  const setCounts = useCallback(
    (next: Record<string, number>) => {
      if (onManualCountsChange) onManualCountsChange(next);
      else setLocalCounts(next);
    },
    [onManualCountsChange],
  );

  const mixerComputed = useMemo(
    () =>
      buildWeightedTopics(topics, point, questionCount, {
        snap: false,
      }),
    [topics, point, questionCount],
  );

  const displayTopics: WeightedTopic[] = useMemo(() => {
    if (!isManual || topics.length === 0) return mixerComputed.topics;
    return weightedTopicsFromCounts(topics, counts, questionCount);
  }, [isManual, topics, counts, questionCount, mixerComputed.topics]);

  const computed = mixerComputed;

  const topicKey = topics.map((t) => t.id).join("|");
  useEffect(() => {
    setPoint(balancedPoint(), false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when membership changes
  }, [topicKey]);

  useEffect(() => {
    if (topics.length === 0) {
      setCounts({});
      return;
    }
    if (!isManual) return;
    const ids = topics.map((t) => t.id);
    const sum = ids.reduce((a, id) => a + (counts[id] ?? 0), 0);
    const missing = ids.some((id) => counts[id] == null);
    if (missing || sum !== questionCount) {
      setCounts(seedCountsFromTopics(ids, questionCount, counts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isManual, topicKey, questionCount]);

  const enterManual = () => {
    setCounts(
      seedCountsFromTopics(
        topics.map((t) => t.id),
        questionCount,
        topicCountsRecord(mixerComputed.topics),
      ),
    );
    setManual(true);
  };

  const onCountField = (id: string, raw: string) => {
    const n = raw === "" ? 0 : Number(raw);
    setCounts(
      setManualTopicCount(
        topics.map((t) => t.id),
        counts,
        id,
        n,
        questionCount,
      ),
    );
  };

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
      <PanelShell className={className} empty accent={accent}>
        <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
          <div
            className="mb-3 grid h-12 w-12 place-items-center rounded-full border bg-secondary/40 shadow-sm"
            style={{ borderColor: `${accent}40` }}
          >
            <Focus className="h-5 w-5" style={{ color: accent }} />
          </div>
          <p className="font-display text-base font-bold text-foreground">Shape your mock</p>
          <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
            Select subtopics on the left. With two or more, a polygon appears so you can balance how
            many of the {questionCount} questions each topic gets.
          </p>
        </div>
      </PanelShell>
    );
  }

  if (topics.length === 1) {
    const only = displayTopics[0];
    return (
      <PanelShell className={className} accent={accent}>
        <Header title={title} subtitle="One topic selected — full weight" accent={accent} />
        <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-4">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-semibold">{only.label}</span>
            <span className="font-display text-2xl font-bold tabular-nums" style={{ color: accent }}>
              100%
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {only.questions} question{only.questions === 1 ? "" : "s"}
          </p>
        </div>
        <PreviewList
          topics={displayTopics}
          total={questionCount}
          accent={accent}
          subjectLabel={subjectLabel}
        />
      </PanelShell>
    );
  }

  const svgVerts = computed.vertices.map(toSvg);
  const ctrl = toSvg(computed.point);
  const polyPoints = svgVerts.map((v) => `${v.x},${v.y}`).join(" ");
  const labelTopics = displayTopics;

  return (
    <PanelShell className={className} accent={accent}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <Header
          title={title}
          subtitle={
            isManual
              ? "Type questions per topic — total always stays exact"
              : "Drag the point to shape how questions are split"
          }
          accent={accent}
        />
        {isManual ? (
          <QuickBtn icon={<Workflow className="h-3 w-3" />} label="Use mixer" onClick={() => setManual(false)} accent={accent} />
        ) : (
          <QuickBtn icon={<Keyboard className="h-3 w-3" />} label="Enter manually" onClick={enterManual} accent={accent} />
        )}
      </div>

      {!isManual && (
      <div className="relative mx-auto mt-2 w-full max-w-[min(100%,400px)]">
        <div
          className="absolute inset-[8%] rounded-full blur-2xl"
          style={{ backgroundColor: `color-mix(in oklab, ${accent} 8%, transparent)` }}
          aria-hidden
        />
        <svg
          ref={svgRef}
          viewBox={`${-PAD} ${-PAD} ${VIEW + PAD * 2} ${VIEW + PAD * 2}`}
          className="relative w-full touch-none select-none drop-shadow-sm"
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
            <radialGradient id={`${gid}-glow`} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="70%" stopColor={accentSoft} stopOpacity="0.12" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${gid}-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFCF8" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#F0E4D6" stopOpacity="0.78" />
            </linearGradient>
            <filter id={`${gid}-soft`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <polygon points={polyPoints} fill={`url(#${gid}-glow)`} />
          <polygon
            points={polyPoints}
            fill={`url(#${gid}-fill)`}
            stroke={accent}
            strokeOpacity={0.55}
            strokeWidth={1.75}
          />
          <polygon
            points={polyPoints}
            fill="none"
            stroke="white"
            strokeOpacity={0.5}
            strokeWidth={0.75}
          />

          {svgVerts.map((v, i) => {
            const w = labelTopics[i]?.weight ?? 0;
            return (
              <line
                key={`g-${topics[i].id}`}
                x1={ctrl.x}
                y1={ctrl.y}
                x2={v.x}
                y2={v.y}
                stroke={accent}
                strokeWidth={0.9 + w * 2.4}
                strokeOpacity={0.14 + w * 0.55}
                style={{
                  transition: draggingUi
                    ? "none"
                    : "stroke-opacity 180ms ease, stroke-width 180ms ease",
                }}
              />
            );
          })}

          {svgVerts.map((v, i) => {
            const w = labelTopics[i]?.weight ?? 0;
            const pct = Math.round(labelTopics[i]?.percent ?? 0);
            const label = topics[i].shortLabel ?? topics[i].label;
            const r = 4.5 + w * 3.5;
            const glow = w > 0.2;
            const ang = Math.atan2(v.y - VIEW / 2, v.x - VIEW / 2);
            const lx = v.x + Math.cos(ang) * 20;
            const ly = v.y + Math.sin(ang) * 20;
            return (
              <g key={topics[i].id}>
                {glow && (
                  <circle
                    cx={v.x}
                    cy={v.y}
                    r={r + 6}
                    fill={accent}
                    opacity={0.16 + w * 0.28}
                    filter={`url(#${gid}-soft)`}
                  />
                )}
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={r}
                  fill={accent}
                  fillOpacity={0.4 + w * 0.55}
                  stroke="#FFF9F2"
                  strokeWidth={1.4}
                  style={{
                    transition: draggingUi ? "none" : "r 180ms ease, fill-opacity 180ms ease",
                  }}
                />
                <text
                  x={lx}
                  y={ly - 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-display"
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    fill: "#2A2118",
                    opacity: 0.5 + w * 0.5,
                    transition: draggingUi ? "none" : "opacity 180ms ease",
                  }}
                >
                  {label}
                </text>
                <text
                  x={lx}
                  y={ly + 11}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    fill: accent,
                    opacity: 0.6 + w * 0.4,
                    transition: draggingUi ? "none" : "opacity 180ms ease",
                  }}
                >
                  {pct}%
                </text>
              </g>
            );
          })}

          <circle
            cx={ctrl.x}
            cy={ctrl.y}
            r={draggingUi ? 11 : 9.5}
            fill={accent}
            stroke="#FFF9F2"
            strokeWidth={3}
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
            r={20}
            fill="transparent"
            style={{ cursor: "grab", touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />
        </svg>
      </div>
      )}

      {!isManual && (
      <div className="mt-3 flex flex-wrap gap-1.5">
            <QuickBtn
              icon={<Equal className="h-3 w-3" />}
              label="Balanced"
              onClick={() => setPoint(balancedPoint(), false)}
              accent={accent}
            />
            <QuickBtn
              icon={<RotateCcw className="h-3 w-3" />}
              label="Reset"
              onClick={() => setPoint(balancedPoint(), false)}
              accent={accent}
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
              accent={accent}
            />
            <QuickBtn
              icon={<Dices className="h-3 w-3" />}
              label="Random"
              onClick={() => setPoint(randomBalancedPoint(computed.vertices), false)}
              accent={accent}
            />
      </div>
      )}

      {isManual && (
        <div className="mt-3 space-y-2 rounded-xl border border-border bg-secondary/30 p-3">
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Questions per topic
          </p>
          <ul className="space-y-2">
            {topics.map((t) => (
              <li key={t.id} className="flex items-center gap-2">
                <label className="min-w-0 flex-1 truncate text-xs font-medium text-foreground" htmlFor={`q-${t.id}`}>
                  <span className="tabular-nums text-muted-foreground">{t.id}</span>
                  <span className="text-muted-foreground"> · </span>
                  {t.label.replace(/^\S+\s+/, "")}
                </label>
                <input
                  id={`q-${t.id}`}
                  type="number"
                  min={0}
                  max={questionCount}
                  value={counts[t.id] ?? 0}
                  onChange={(e) => onCountField(t.id, e.target.value)}
                  className="w-16 rounded-md border border-border bg-card px-2 py-1.5 text-center text-sm font-semibold tabular-nums outline-none focus:ring-1"
                  style={{ ["--tw-ring-color" as string]: accent }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = accent;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "";
                  }}
                />
                <span
                  className="w-10 text-right text-[10px] font-semibold tabular-nums"
                  style={{ color: accent }}
                >
                  {Math.round(displayTopics.find((x) => x.id === t.id)?.percent ?? 0)}%
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-muted-foreground">
            Changing one field redistributes the rest so the sum stays{" "}
            <span className="font-semibold text-foreground">{questionCount}</span>.
          </p>
        </div>
      )}

      <PreviewList
        topics={displayTopics}
        total={questionCount}
        accent={accent}
        subjectLabel={subjectLabel}
      />
    </PanelShell>
  );
}

function Header({ title, subtitle, accent }: { title: string; subtitle: string; accent: string }) {
  return (
    <div>
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: accent }}
      >
        Mixer
      </p>
      <h3 className="mt-0.5 font-display text-base font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-0.5 text-[11px] text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function QuickBtn({
  icon,
  label,
  onClick,
  accent,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1.5 text-[10px] font-semibold text-foreground shadow-sm transition hover:bg-secondary"
      style={{ borderColor: `color-mix(in oklab, ${accent} 28%, var(--border))` }}
    >
      {icon}
      {label}
    </button>
  );
}

function PreviewList({
  topics,
  total,
  accent,
  subjectLabel,
}: {
  topics: WeightedTopic[];
  total: number;
  accent: string;
  subjectLabel: string;
}) {
  const minutes = total * 2;
  return (
    <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-3.5">
      <p
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: accent }}
      >
        {subjectLabel} Mock
      </p>
      <ul className="mt-2 space-y-1.5">
        {topics.map((t) => (
          <li key={t.id} className="flex items-baseline justify-between gap-3 text-xs">
            <span className="min-w-0 truncate font-medium text-foreground">
              <span className="tabular-nums text-muted-foreground">{t.id}</span>{" "}
              <span className="text-muted-foreground">·</span>{" "}
              {t.label.replace(/^\S+\s+/, "")}
            </span>
            <span className="shrink-0 tabular-nums text-muted-foreground">
              <span className="font-semibold" style={{ color: accent }}>
                {Math.round(t.percent)}%
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
