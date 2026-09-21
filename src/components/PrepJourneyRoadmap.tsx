"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Milestone = {
  title: string;
  label: string;
  icon: "demo" | "lite" | "full" | "exam";
  youAreHere?: boolean;
  destination?: boolean;
};

/** Accent CSS custom property (defined in styles.css). */
export type PrepRoadmapAccent = "exam-red" | "wiso-blue";

const BBE_MILESTONES: Milestone[] = [
  {
    title: "Free Demo",
    label: "100+ tasks, 1 mock exam, all 3 subjects",
    icon: "demo",
    youAreHere: true,
  },
  {
    title: "Build the Fundamentals",
    label: "3000+ questions, self-paced",
    icon: "lite",
  },
  {
    title: "Full Simulation",
    label: "Interactive modes, customized mocks, and timed exam practice",
    icon: "full",
  },
  {
    title: "Exam Day",
    label: "2027 BBE, WU Vienna",
    icon: "exam",
    destination: true,
  },
];

const WISO_MILESTONES: Milestone[] = [
  {
    title: "Kostenlose Demo",
    label: "WiSo-Aufgaben in Wirtschaft, Mathe und Deutsch",
    icon: "demo",
    youAreHere: true,
  },
  {
    title: "Grundlagen aufbauen",
    label: "Wirtschaft verstehen, Mathe und Leseübung",
    icon: "lite",
  },
  {
    title: "Vollsimulation",
    label: "Timed Practice, eigene Mocks und Prüfungstag-Tempo",
    icon: "full",
  },
  {
    title: "Prüfungstag",
    label: "WiSo 2027 an der WU Wien",
    icon: "exam",
    destination: true,
  },
];

function accentVar(accent: PrepRoadmapAccent): string {
  return accent === "wiso-blue" ? "var(--wiso-blue)" : "var(--exam-red)";
}

function MilestoneIcon({
  type,
  className,
}: {
  type: Milestone["icon"];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      {type === "demo" && (
        <>
          <rect x="6.5" y="5.5" width="13" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M9.5 10h7M9.5 13.5h7M9.5 17h4.5"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
          <circle cx="21.5" cy="21.5" r="5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M25 25l2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}
      {type === "lite" && (
        <>
          <rect x="5" y="11" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.55" />
          <rect
            x="10"
            y="6"
            width="14"
            height="15"
            rx="1.5"
            className="fill-card"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M13.2 12.2l2 2 4-4.2"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2 18l2 2 4-4.2"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === "full" && (
        <>
          <rect x="4.5" y="13" width="12" height="14" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
          <rect x="8.5" y="9" width="12" height="14" rx="1.4" stroke="currentColor" strokeWidth="1.45" />
          <rect
            x="12.5"
            y="4.5"
            width="12"
            height="14"
            rx="1.4"
            className="fill-card"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="18.5" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.45" />
          <path
            d="M16.6 14c-.55 1.35-1.35 2.35-2.15 3M20.4 14c.55 1.35 1.35 2.35 2.15 3"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
        </>
      )}
      {type === "exam" && (
        <>
          <path d="M11 25.5V7.5" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" />
          <path
            d="M11.2 7.5h11.3l-2.6 3.5 2.6 3.5H11.2V7.5z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

/** Comet travel: 8.5s linear after 0.4s delay; dash is 0.09 of pathLength 1. */
const COMET_DURATION_MS = 8500;
const COMET_DELAY_MS = 400;
const COMET_DASH = 0.09;
const PATH_VB_W = 1000;
const PATH_VB_H = 320;

/**
 * With stroke-dasharray COMET_DASH+(1-COMET_DASH) and dashoffset = 1-u,
 * the visible dash covers [u, u+COMET_DASH) (wrapping at 1).
 *
 * Strength is 0 until the leading edge touches the circle, then eases up
 * quickly, stays bright while the dash crosses, and eases down as the
 * trail leaves — smooth blink over the exact geometric pass window.
 */
function cometLitStrength(u: number, f: number, r: number): number {
  if (r <= 0) return 0;

  const passStart = f - r - COMET_DASH;
  const passEnd = f + r;
  const passLen = passEnd - passStart;
  if (passLen <= 0) return 0;

  // Ease in/out over a fixed fraction of the pass (not a thin mid spike).
  const FADE = 0.22;

  const envelope = (phase: number): number => {
    if (phase <= 0 || phase >= 1) return 0;
    if (phase < FADE) {
      const t = phase / FADE;
      return t * t * (3 - 2 * t);
    }
    if (phase > 1 - FADE) {
      const t = (1 - phase) / FADE;
      return t * t * (3 - 2 * t);
    }
    return 1;
  };

  const samples = u + COMET_DASH > 1 ? [u, u - 1] : [u];
  let best = 0;
  for (const uu of samples) {
    if (uu < passStart || uu > passEnd) continue;
    best = Math.max(best, envelope((uu - passStart) / passLen));
  }
  return best;
}

type NodePathHit = { f: number; r: number };

function measureNodePathHit(
  path: SVGPathElement,
  svg: SVGSVGElement,
  nodeEl: HTMLElement,
): NodePathHit {
  const total = path.getTotalLength();
  const svgRect = svg.getBoundingClientRect();
  const scaleX = svgRect.width / PATH_VB_W;
  const scaleY = svgRect.height / PATH_VB_H;
  const nr = nodeEl.getBoundingClientRect();
  const cx = nr.left + nr.width / 2;
  const cy = nr.top + nr.height / 2;
  const radiusPx = Math.min(nr.width, nr.height) / 2;
  const r2 = radiusPx * radiusPx;

  const screenDist2 = (f: number) => {
    const pt = path.getPointAtLength(Math.min(1, Math.max(0, f)) * total);
    const x = svgRect.left + pt.x * scaleX;
    const y = svgRect.top + pt.y * scaleY;
    return (x - cx) ** 2 + (y - cy) ** 2;
  };

  let bestF = 0;
  let bestD = Infinity;
  const COARSE = 320;
  for (let i = 0; i <= COARSE; i++) {
    const f = i / COARSE;
    const d = screenDist2(f);
    if (d < bestD) {
      bestD = d;
      bestF = f;
    }
  }
  // Local refine
  const span = 1 / COARSE;
  for (let i = 0; i <= 40; i++) {
    const f = bestF - span + (2 * span * i) / 40;
    if (f < 0 || f > 1) continue;
    const d = screenDist2(f);
    if (d < bestD) {
      bestD = d;
      bestF = f;
    }
  }

  const inside = (f: number) => screenDist2(f) <= r2;

  const edge = (from: number, to: number, wantInsideAtTo: boolean) => {
    let a = from;
    let b = to;
    for (let i = 0; i < 28; i++) {
      const m = (a + b) / 2;
      if (inside(m) === wantInsideAtTo) b = m;
      else a = m;
    }
    return (a + b) / 2;
  };

  let forward = bestF;
  {
    const probe = Math.min(1, bestF + 0.22);
    if (inside(probe)) forward = probe;
    else if (inside(bestF)) forward = edge(bestF, probe, false);
  }
  let backward = bestF;
  {
    const probe = Math.max(0, bestF - 0.22);
    if (inside(probe)) backward = probe;
    else if (inside(bestF)) backward = edge(probe, bestF, true);
  }

  const r = Math.max((forward - backward) / 2, 0.012);
  return { f: bestF, r };
}

function NodeCircle({
  milestone,
  index,
  size = "md",
  accent,
  youAreHereLabel,
  hitRef,
}: {
  milestone: Milestone;
  index: number;
  size?: "sm" | "md" | "lg";
  accent: PrepRoadmapAccent;
  youAreHereLabel: string;
  /** Measure the visible circle (not the wrap) for comet hit-testing. */
  hitRef?: (el: HTMLDivElement | null) => void;
}) {
  const color = accentVar(accent);
  const dim =
    size === "lg"
      ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
      : size === "sm"
        ? "h-12 w-12"
        : "h-14 w-14 sm:h-16 sm:w-16";
  const iconDim =
    size === "lg" ? "h-8 w-8 sm:h-9 sm:w-9" : size === "sm" ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8";

  return (
    <div
      className="prep-roadmap-node-pass-wrap relative"
      style={{ ["--prep-lit" as string]: 0 } as CSSProperties}
      data-node-wrap={index}
    >
      <div
        ref={hitRef}
        className={cn(
          "prep-roadmap-node relative grid place-items-center rounded-full",
          dim,
          milestone.destination
            ? "text-white"
            : "border-[1.5px] border-foreground/70 bg-background text-foreground",
          milestone.youAreHere && !milestone.destination && "border-[color:var(--prep-accent)]",
        )}
        style={
          {
            animationDelay: `${0.22 + index * 0.22}s`,
            ["--prep-accent" as string]: color,
            ...(milestone.destination
              ? {
                  backgroundColor: color,
                  boxShadow: `0 8px 20px -8px color-mix(in oklab, ${color} 55%, transparent)`,
                }
              : milestone.youAreHere
                ? { borderColor: color }
                : {}),
          } as CSSProperties
        }
      >
        <span
          className="prep-roadmap-node-glow"
          style={{ ["--prep-accent" as string]: color } as CSSProperties}
          aria-hidden
        />
        <span
          className="prep-roadmap-node-spark"
          style={{ ["--prep-accent" as string]: color } as CSSProperties}
          aria-hidden
        />
        {milestone.youAreHere && (
          <>
            <span
              className="prep-roadmap-here-ring pointer-events-none absolute inset-0 rounded-full border border-[color:var(--prep-accent)]"
              style={{ borderColor: color }}
              aria-hidden
            />
            <span
              className="prep-roadmap-here-ring prep-roadmap-here-ring-2 pointer-events-none absolute inset-0 rounded-full border border-[color:var(--prep-accent)]"
              style={{ borderColor: color }}
              aria-hidden
            />
          </>
        )}
        <MilestoneIcon type={milestone.icon} className={cn(iconDim, "relative z-[1]")} />
        {milestone.youAreHere && (
          <span
            className="absolute -top-3 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.08em] leading-none text-white"
            style={{
              backgroundColor: color,
              border: `1px solid ${color}`,
              boxShadow: `0 4px 12px -6px color-mix(in oklab, ${color} 70%, transparent)`,
            }}
            aria-hidden
          >
            {youAreHereLabel}
          </span>
        )}
      </div>
    </div>
  );
}

function NodeCaption({
  milestone,
  align = "center",
  compact,
}: {
  milestone: Milestone;
  align?: "center" | "left";
  compact?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      <p
        className={cn(
          "font-display font-semibold leading-snug text-foreground",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {milestone.title}
      </p>
      <p
        className={cn(
          "mt-0.5 leading-snug text-muted-foreground",
          compact ? "text-[11px]" : "text-[11px] sm:text-xs",
        )}
      >
        {milestone.label}
      </p>
    </div>
  );
}

/** Wide desktop: path through circle centers; captions clear of the stroke. */
function SpreadDesktopRoadmap({
  milestones,
  accent,
  youAreHereLabel,
}: {
  milestones: Milestone[];
  accent: PrepRoadmapAccent;
  youAreHereLabel: string;
}) {
  const color = accentVar(accent);
  const glowId = accent === "wiso-blue" ? "prepGlowWiso" : "prepGlow";
  /**
   * Circle centers — even horizontal spacing (0 / 25 / 50 / 75), path sits lower
   * in the frame so captions breathe under the hero copy.
   */
  const nodes = [
    { milestone: milestones[0], left: "0%", centerY: "54%", caption: "above" as const },
    { milestone: milestones[1], left: "25%", centerY: "74%", caption: "below" as const },
    { milestone: milestones[2], left: "50%", centerY: "54%", caption: "above" as const },
    { milestone: milestones[3], left: "75%", centerY: "72%", caption: "below" as const },
  ];

  // Centers at ~125 / 375 / 625 / 875 in a 1000-wide viewBox (matches left + 12.5%).
  const pathD =
    "M125 173 C 250 173, 280 237, 375 237 S 530 173, 625 173 S 790 230, 875 230";

  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const cometRef = useRef<SVGPathElement | null>(null);
  const hitElsRef = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);
  const litStrengthRef = useRef<Array<number>>([0, 0, 0, 0]);
  const hitsRef = useRef<NodePathHit[]>([
    { f: 0, r: 0.036 },
    { f: 0.3348, r: 0.036 },
    { f: 0.6688, r: 0.036 },
    { f: 1, r: 0.036 },
  ]);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const comet = cometRef.current;
    if (!svg || !path || !comet) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      comet.style.strokeDashoffset = "0";
      comet.style.opacity = "0";
      return;
    }

    const wrapFor = (index: number): HTMLElement | null => {
      const hit = hitElsRef.current[index];
      return hit?.closest(".prep-roadmap-node-pass-wrap") as HTMLElement | null;
    };

    const remmeasure = () => {
      const next: NodePathHit[] = [];
      for (let i = 0; i < 4; i++) {
        const el = hitElsRef.current[i];
        if (!el) {
          next.push(hitsRef.current[i]!);
          continue;
        }
        next.push(measureNodePathHit(path, svg, el));
      }
      hitsRef.current = next;
    };

    // Nodes mount in the same commit; measure after layout.
    const measureRaf = requestAnimationFrame(() => remmeasure());
    const ro = new ResizeObserver(() => remmeasure());
    ro.observe(svg);
    for (const el of hitElsRef.current) {
      if (el) ro.observe(el);
    }

    const startedAt = performance.now();
    let raf = 0;

    const setLitStrength = (index: number, strength: number) => {
      const prev = litStrengthRef.current[index] ?? 0;
      const next = strength < 0.004 ? 0 : strength;
      if (Math.abs(prev - next) < 0.003) return;
      litStrengthRef.current[index] = next;
      const wrap = wrapFor(index);
      if (!wrap) return;
      wrap.style.setProperty("--prep-lit", next.toFixed(4));
    };

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      let u = 0;
      if (elapsed > COMET_DELAY_MS) {
        // Delay once (CSS animation-delay semantics), then loop the 8.5s travel.
        u = ((elapsed - COMET_DELAY_MS) % COMET_DURATION_MS) / COMET_DURATION_MS;
      }
      comet.style.strokeDashoffset = String(1 - u);

      const hits = hitsRef.current;
      for (let i = 0; i < 4; i++) {
        const hit = hits[i]!;
        setLitStrength(i, cometLitStrength(u, hit.f, hit.r));
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onMotionChange = () => {
      if (reduced.matches) {
        cancelAnimationFrame(raf);
        comet.style.opacity = "0";
        for (let i = 0; i < 4; i++) setLitStrength(i, 0);
      }
    };
    reduced.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(measureRaf);
      cancelAnimationFrame(raf);
      ro.disconnect();
      reduced.removeEventListener("change", onMotionChange);
      for (let i = 0; i < 4; i++) setLitStrength(i, 0);
    };
  }, []);

  return (
    <div className="relative hidden h-[300px] w-full overflow-visible md:block lg:h-[320px]">
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox={`0 0 ${PATH_VB_W} ${PATH_VB_H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          className="prep-roadmap-path text-foreground"
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={cometRef}
          className="prep-roadmap-comet prep-roadmap-comet--js"
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          filter={`url(#${glowId})`}
        />
      </svg>

      {nodes.map((n, i) => (
        <div
          key={n.milestone.title}
          className="absolute z-10 w-[24%] -translate-y-1/2"
          style={{ left: n.left, top: n.centerY }}
        >
          <div className="relative mx-auto flex w-full flex-col items-center">
            <div className="relative">
              {n.caption === "above" && (
                <div
                  className="absolute left-1/2 z-10 w-[min(240px,70vw)] -translate-x-1/2 text-center"
                  style={{ bottom: "calc(100% + 1rem)" }}
                >
                  <NodeCaption milestone={n.milestone} />
                </div>
              )}
              <NodeCircle
                milestone={n.milestone}
                index={i}
                size="lg"
                accent={accent}
                youAreHereLabel={youAreHereLabel}
                hitRef={(el) => {
                  hitElsRef.current[i] = el;
                }}
              />
              {n.caption === "below" && (
                <div
                  className="absolute left-1/2 z-10 w-[min(240px,70vw)] -translate-x-1/2 text-center"
                  style={{ top: "calc(100% + 0.65rem)" }}
                >
                  <NodeCaption milestone={n.milestone} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Mobile: vertical straight path. */
function MobileRoadmap({
  milestones,
  accent,
  youAreHereLabel,
}: {
  milestones: Milestone[];
  accent: PrepRoadmapAccent;
  youAreHereLabel: string;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col justify-center gap-0 px-1 py-2 md:hidden">
      <div
        className="prep-roadmap-path-mobile absolute bottom-8 left-[1.9rem] top-8 z-0 w-px bg-foreground/25"
        aria-hidden
      />
      {milestones.map((m, i) => (
        <div key={m.title} className="relative z-[1] flex items-start gap-3.5 py-2.5 sm:gap-4">
          <NodeCircle
            milestone={m}
            index={i}
            size="sm"
            accent={accent}
            youAreHereLabel={youAreHereLabel}
          />
          <div className="min-w-0 flex-1 pt-1.5">
            <NodeCaption milestone={m} align="left" compact />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrepJourneyRoadmap({
  className,
  accent = "exam-red",
  track = "bbe",
}: {
  className?: string;
  /** BBE stakes red (default) or WiSo indigo blue. */
  accent?: PrepRoadmapAccent;
  track?: "bbe" | "wiso";
}) {
  const milestones = track === "wiso" ? WISO_MILESTONES : BBE_MILESTONES;
  const youAreHereLabel = track === "wiso" ? "du bist hier" : "you are here";
  const ariaLabel =
    track === "wiso"
      ? "Schritt-für-Schritt-Vorbereitung: Kostenlose Demo, Grundlagen aufbauen, Vollsimulation, Prüfungstag"
      : "Step by step preparation: Free Demo, Build the Fundamentals, Full Simulation, Exam Day";

  return (
    <div
      className={cn("prep-roadmap relative w-full", className)}
      role="img"
      aria-label={ariaLabel}
      {...(track === "wiso" ? { "data-no-i18n": true } : null)}
    >
      <SpreadDesktopRoadmap
        milestones={milestones}
        accent={accent}
        youAreHereLabel={youAreHereLabel}
      />
      <MobileRoadmap
        milestones={milestones}
        accent={accent}
        youAreHereLabel={youAreHereLabel}
      />
    </div>
  );
}
