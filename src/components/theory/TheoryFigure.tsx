import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,

  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceDot,
  ReferenceLine,
  Pie,
  PieChart,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { ZoomableImage } from "@/components/ZoomableImage";
import { cn } from "@/lib/utils";

const ACCENT = "#C45C1A";
const INK = "#1F1A17";
const MUTED = "#5C534C";
const GRID = "#D9CFC3";
type Props = {
  id: string;
  caption?: string;
  className?: string;
};

/** Native site figure — no photo-frame card; sits in the article flow. */
function Shell({ caption, children, className }: { caption?: string; children: ReactNode; className?: string }) {
  return (
    <figure className={cn("my-8 w-full", className)}>
      <div className="w-full border-y border-border/60 bg-transparent py-5 sm:py-6">{children}</div>
      {caption ? (
        <figcaption className="mt-2.5 text-[13px] leading-snug text-muted-foreground sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Node({
  children,
  soft = false,
  className,
}: {
  children: ReactNode;
  soft?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-3 py-2 text-center text-[12px] font-semibold leading-snug sm:text-[13px]",
        soft
          ? "bg-primary/10 text-primary ring-1 ring-primary/25"
          : "bg-secondary/40 text-foreground ring-1 ring-border/70",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Hint({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">{children}</p>;
}

function ChartFrame({ title, children, height = "h-[260px] sm:h-[300px]" }: { title?: string; children: ReactNode; height?: string }) {
  return (
    <div className="w-full">
      {title ? <div className="mb-2 text-sm font-bold text-primary">{title}</div> : null}
      <div className={cn("w-full", height)}>{children}</div>
    </div>
  );
}

/** Recharts legend kept above the plot so it never collides with x-axis titles. */
const LEGEND_TOP = {
  verticalAlign: "top" as const,
  align: "center" as const,
  height: 28,
  iconType: "line" as const,
  wrapperStyle: { paddingBottom: 4, fontSize: 12 },
};

/** Plot margins when a top legend + bottom axis title are both present. */
const MARGIN_LEGEND_AXIS = { top: 8, right: 20, left: 14, bottom: 36 };

type HaloLabelProps = {
  x?: number;
  y?: number;
  value?: string | number;
  fill?: string;
  dx?: number;
  dy?: number;
  fontSize?: number;
};

/** Point annotation with a white halo so curve strokes cannot cut through the text. */
function ChartHaloLabel({
  x = 0,
  y = 0,
  value,
  fill = ACCENT,
  dx = 0,
  dy = -16,
  fontSize = 11,
}: HaloLabelProps) {
  const text = String(value ?? "");
  if (!text) return null;
  const width = Math.max(36, text.length * 6.8 + 10);
  const height = fontSize + 6;
  return (
    <g transform={`translate(${x + dx}, ${y + dy})`} pointerEvents="none">
      <rect
        x={-width / 2}
        y={-height + 4}
        width={width}
        height={height}
        rx={3}
        fill="#fff"
        fillOpacity={0.94}
      />
      <text
        textAnchor="middle"
        fill={fill}
        fontSize={fontSize}
        fontWeight={600}
        dominantBaseline="alphabetic"
      >
        {text}
      </text>
    </g>
  );
}

/** SVG text with the same white halo (for hand-drawn differentiation figures). */
function SvgHaloText({
  x,
  y,
  fill = INK,
  fontSize = 12,
  fontWeight,
  anchor = "start",
  children,
}: {
  x: number;
  y: number;
  fill?: string;
  fontSize?: number;
  fontWeight?: number | string;
  anchor?: "start" | "middle" | "end";
  children: string;
}) {
  const width = Math.max(28, children.length * (fontSize * 0.58) + 10);
  const height = fontSize + 6;
  const left =
    anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;
  return (
    <g pointerEvents="none">
      <rect
        x={left}
        y={y - fontSize + 1}
        width={width}
        height={height}
        rx={3}
        fill="#fff"
        fillOpacity={0.94}
      />
      <text x={x} y={y} fontSize={fontSize} fontWeight={fontWeight} fill={fill} textAnchor={anchor}>
        {children}
      </text>
    </g>
  );
}

/**
 * Circular flow — strict orthogonal layout, rebuilt from scratch.
 *
 * Geometry contract (all coordinates precomputed, nothing overlaps):
 * - Government connectors are L-shaped (vertical + horizontal), so nothing crosses.
 * - The 4 horizontal lanes run the FULL gap between the side boxes (x 210 → 590).
 * - Every label lives in a zone where no line ever passes.
 */
function CircularFlow() {
  const W = 800;
  const H = 500;

  const gov = { x: 290, y: 20, w: 220, h: 64 };
  const hh = { x: 30, y: 280, w: 180, h: 140 };
  const biz = { x: 590, y: 280, w: 180, h: 140 };

  const xL = hh.x + hh.w; // 210 — right edge of households
  const xR = biz.x; // 590 — left edge of businesses
  const mid = (xL + xR) / 2; // 400

  // Lanes attach on the side edges of the boxes; labels sit 8px above each line.
  const lanes: { y: number; label: string; toBiz: boolean; money: boolean }[] = [
    { y: 302, label: "Goods and services", toBiz: false, money: false },
    { y: 334, label: "Payments for goods and services", toBiz: true, money: true },
    { y: 366, label: "Labour and other resources", toBiz: true, money: false },
    { y: 398, label: "Wages, rent, interest and profit", toBiz: false, money: true },
  ];

  // L-shaped government connectors (vertical channels never cross the lanes,
  // horizontal segments dock into the government box sides).
  const taxL = { vx: 70, hy: 44 }; // households → government (up, then right)
  const trfL = { vx: 140, hy: 64 }; // government → households (left, then down)
  const taxR = { vx: 730, hy: 44 }; // businesses → government (up, then left)
  const trfR = { vx: 660, hy: 64 }; // government → businesses (right, then down)

  return (
    <div className="mx-auto w-full max-w-3xl" role="img" aria-label="Circular flow of goods, services and money">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="cfA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={ACCENT} />
          </marker>
          <marker id="cfM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={MUTED} />
          </marker>
        </defs>

        {/* ── Boxes ── */}
        <rect x={gov.x} y={gov.y} width={gov.w} height={gov.h} fill="oklch(0.96 0.025 55)" stroke={ACCENT} strokeWidth="2" />
        <text x={gov.x + gov.w / 2} y={gov.y + 41} textAnchor="middle" fill={ACCENT} fontSize="19" fontWeight="700">
          Government
        </text>

        <rect x={hh.x} y={hh.y} width={hh.w} height={hh.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2" />
        <text x={hh.x + hh.w / 2} y={hh.y + 60} textAnchor="middle" fill={INK} fontSize="17" fontWeight="700">
          Private
        </text>
        <text x={hh.x + hh.w / 2} y={hh.y + 84} textAnchor="middle" fill={INK} fontSize="17" fontWeight="700">
          households
        </text>

        <rect x={biz.x} y={biz.y} width={biz.w} height={biz.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2" />
        <text x={biz.x + biz.w / 2} y={biz.y + 76} textAnchor="middle" fill={INK} fontSize="17" fontWeight="700">
          Businesses
        </text>

        {/* ── Government ↔ households (L-shaped, parallel channels) ── */}
        {/* taxes: up from HH top, then right into government's left edge */}
        <polyline
          points={`${taxL.vx},${hh.y} ${taxL.vx},${taxL.hy} ${gov.x},${taxL.hy}`}
          fill="none"
          stroke={MUTED}
          strokeWidth="2.25"
          markerEnd="url(#cfM)"
        />
        {/* public goods / transfers: left out of government, then down onto HH top */}
        <polyline
          points={`${gov.x},${trfL.hy} ${trfL.vx},${trfL.hy} ${trfL.vx},${hh.y}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.25"
          markerEnd="url(#cfA)"
        />
        <text x={taxL.vx - 8} y={170} textAnchor="end" fill={MUTED} fontSize="12" fontWeight="700">
          taxes
        </text>
        <text x={trfL.vx + 8} y={170} textAnchor="start" fill={ACCENT} fontSize="12" fontWeight="600">
          public goods / transfers
        </text>

        {/* ── Government ↔ businesses (mirror) ── */}
        <polyline
          points={`${taxR.vx},${biz.y} ${taxR.vx},${taxR.hy} ${gov.x + gov.w},${taxR.hy}`}
          fill="none"
          stroke={MUTED}
          strokeWidth="2.25"
          markerEnd="url(#cfM)"
        />
        <polyline
          points={`${gov.x + gov.w},${trfR.hy} ${trfR.vx},${trfR.hy} ${trfR.vx},${biz.y}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.25"
          markerEnd="url(#cfA)"
        />
        <text x={taxR.vx + 8} y={170} textAnchor="start" fill={MUTED} fontSize="12" fontWeight="700">
          taxes
        </text>
        <text x={trfR.vx - 8} y={170} textAnchor="end" fill={ACCENT} fontSize="12" fontWeight="600">
          subsidies / public goods
        </text>

        {/* ── Households ↔ businesses: full-width lanes, label above each line ── */}
        {lanes.map((lane) => {
          const from = lane.toBiz ? xL : xR;
          const to = lane.toBiz ? xR : xL;
          const color = lane.money ? ACCENT : MUTED;
          return (
            <g key={lane.label}>
              <line
                x1={from}
                y1={lane.y}
                x2={to}
                y2={lane.y}
                stroke={color}
                strokeWidth="2.25"
                markerEnd={lane.money ? "url(#cfA)" : "url(#cfM)"}
              />
              <text x={mid} y={lane.y - 8} textAnchor="middle" fill={INK} fontSize="12.5" fontWeight="600">
                {lane.label}
              </text>
            </g>
          );
        })}

        {/* ── Legend + note ── */}
        <line x1={250} y1={452} x2={282} y2={452} stroke={MUTED} strokeWidth="2.25" />
        <text x={290} y={456} fill={INK} fontSize="11.5">
          real flows
        </text>
        <line x1={420} y1={452} x2={452} y2={452} stroke={ACCENT} strokeWidth="2.25" />
        <text x={460} y={456} fill={INK} fontSize="11.5">
          monetary flows
        </text>
        <text x={W / 2} y={484} textAnchor="middle" fill={MUTED} fontSize="12" fontStyle="italic">
          Real flows and monetary flows run in opposite directions.
        </text>
      </svg>
    </div>
  );
}

function SupplyCurve() {
  const data = [
    { q: 4, p: 40 },
    { q: 12, p: 80 },
    { q: 34, p: 190 },
    { q: 43, p: 235 },
  ];
  return (
    <ChartFrame title="Supply — hours of tutoring offered per week">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 12, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            type="number"
            domain={[0, 45]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Quantity supplied (hours)", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }}
          />
          <YAxis
            dataKey="p"
            type="number"
            domain={[0, 250]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Price (EUR/h)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }}
          />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot x={12} y={80} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={<ChartHaloLabel value="A" fill={ACCENT} dy={-14} />} />
          <ReferenceDot x={34} y={190} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={<ChartHaloLabel value="B" fill={ACCENT} dy={-14} />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function DemandCurve() {
  const data = [
    { q: 8, p: 239 },
    { q: 18, p: 176 },
    { q: 32, p: 95 },
    { q: 42, p: 45 },
  ];
  return (
    <ChartFrame title="Demand — hours of tutoring requested per week">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 12, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            type="number"
            domain={[0, 45]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Quantity demanded (hours)", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }}
          />
          <YAxis
            dataKey="p"
            type="number"
            domain={[0, 250]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Price (EUR/h)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }}
          />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function Equilibrium() {
  const supply = [
    { q: 4, s: 40, d: 220 },
    { q: 12, s: 80, d: 180 },
    { q: 22, s: 130, d: 130 },
    { q: 34, s: 190, d: 80 },
    { q: 42, s: 230, d: 45 },
  ];
  return (
    <ChartFrame title="Market equilibrium" height="h-[280px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={supply} margin={{ top: 8, right: 16, left: 8, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 45]} tick={{ fontSize: 11, fill: INK }} />
          <YAxis type="number" domain={[0, 250]} tick={{ fontSize: 11, fill: INK }} />
          <Line type="linear" dataKey="s" name="Supply" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="d" name="Demand" stroke={MUTED} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot
            x={22}
            y={130}
            r={6}
            fill="#fff"
            stroke={ACCENT}
            strokeWidth={2}
            label={<ChartHaloLabel value="E" fill={ACCENT} dy={-14} />}
          />
          <Legend {...LEGEND_TOP} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function EconomicSectors() {
  const cols = [
    { t: "Primary", s: "Extract / harvest", b: "Farming, mining, fishing, forestry" },
    { t: "Secondary", s: "Manufacture", b: "Cars, machines, boards, clothing" },
    { t: "Tertiary", s: "Serve", b: "Trade, finance, repair, logistics" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {cols.map((c) => (
        <div key={c.t} className="bg-secondary/35 px-3 py-4 text-center ring-1 ring-border/70">
          <div className="font-bold text-primary">{c.t}</div>
          <div className="mt-1 text-xs font-semibold text-foreground">{c.s}</div>
          <div className="mt-2 text-[11px] leading-snug text-muted-foreground">{c.b}</div>
        </div>
      ))}
    </div>
  );
}

function EconomicSystems() {
  const cols = [
    { t: "Market", s: "Private actors decide", b: ["Prices coordinate", "Property rights", "Limited central plan"] },
    { t: "Planned", s: "State decides", b: ["Targets & quotas", "Public ownership", "Central allocation"] },
    { t: "Mixed", s: "Shared decisions", b: ["Markets + rules", "Public goods", "Regulation & tax"], soft: true },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {cols.map((c) => (
        <div
          key={c.t}
          className={cn("px-3 py-4 ring-1 ring-border/70", c.soft ? "bg-primary/10" : "bg-secondary/35")}
        >
          <div className="text-center font-bold text-primary">{c.t}</div>
          <div className="mt-1 text-center text-xs text-muted-foreground">{c.s}</div>
          <ul className="mt-3 space-y-1 text-[12px] text-foreground/90">
            {c.b.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Fuhrmann Fig. 9 — tree, not a flat photo strip. */
function OwnershipOverview() {
  return (
    <div className="mx-auto max-w-xl text-[12px]">
      <Node soft className="mx-auto max-w-sm">
        Forms of business ownership
      </Node>
      <div className="mx-auto my-2 h-4 w-px bg-border" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Node>
            Unincorporated
            <div className="mt-1 font-normal text-muted-foreground">no separate legal person · owner = manager</div>
          </Node>
          <div className="mx-auto my-2 h-4 w-px bg-border" />
          <div className="grid grid-cols-2 gap-2">
            <Node>
              Sole trader
              <div className="mt-1 font-normal text-muted-foreground">one owner</div>
            </Node>
            <Node>
              Partnership
              <div className="mt-1 font-normal text-muted-foreground">two or more owners</div>
            </Node>
          </div>
        </div>
        <div>
          <Node>
            Incorporated
            <div className="mt-1 font-normal text-muted-foreground">separate legal person · limited liability</div>
          </Node>
          <div className="mx-auto my-2 h-4 w-px bg-border" />
          <Node className="mx-auto max-w-[12rem]">
            Corporation / LLC
            <div className="mt-1 font-normal text-muted-foreground">shareholders</div>
          </Node>
        </div>
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 5 */
function StakeholderMap() {
  const around = [
    "Owners",
    "Managers",
    "Employees",
    "Customers",
    "Suppliers",
    "Government",
    "Communities",
    "Environment",
  ];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-4 flex justify-center">
        <Node soft className="min-w-[8rem] text-base">
          BUSINESS
        </Node>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {around.map((g) => (
          <Node key={g} className="min-h-[2.75rem]">
            {g}
          </Node>
        ))}
      </div>
      <Hint>Stakeholders can support or constrain the firm — interests may conflict.</Hint>
    </div>
  );
}

/** Fuhrmann Fig. 6 */
function ValuesVision() {
  const steps = [
    { t: "Vision", s: "Where the firm wants to go" },
    { t: "Values", s: "What people share and stand for" },
    { t: "Objectives", s: "Concrete goals that guide action" },
    { t: "People", s: "Employees & managers who deliver" },
  ];
  return (
    <div className="mx-auto max-w-2xl">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
        {steps.map((step) => (
          <div key={step.t} className="flex flex-col items-center gap-2">
            <Node soft={step.t === "Vision"} className="w-full min-h-[4.5rem]">
              <div className="text-primary">{step.t}</div>
              <div className="mt-1 font-normal text-muted-foreground">{step.s}</div>
            </Node>
          </div>
        ))}
      </div>
      <Hint>Long-run success needs aligned people, values, objectives and vision.</Hint>
    </div>
  );
}

/** Fuhrmann Fig. 7 — course-style environment impact map (not a scanned report). */
function EnvironmentImpact() {
  const items = [
    { t: "Energy & climate", s: "power use, emissions" },
    { t: "Materials", s: "inputs, recycling, waste" },
    { t: "Water", s: "consumption & discharge" },
    { t: "Products in use", s: "lifetime, repair, reuse" },
  ];
  return (
    <div className="mx-auto max-w-xl">
      <Node soft className="mx-auto mb-3 max-w-xs">
        Business activities → environment
      </Node>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((i) => (
          <Node key={i.t}>
            <div className="text-primary">{i.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
          </Node>
        ))}
      </div>
      <Hint>Concrete results matter — not greenwashing claims alone.</Hint>
    </div>
  );
}

/** Fuhrmann Fig. 8 — shareholder structure (course illustration from the book’s description). */
function ShareholderStructure() {
  const data = [
    { name: "Anchor foundations (28%)", value: 28 },
    { name: "Institutional free float (47%)", value: 47 },
    { name: "Private & other free float (25%)", value: 25 },
  ];
  const colors = [ACCENT, MUTED, "#A67C52"];
  return (
    <ChartFrame title="Shareholder structure (illustrative listed AG)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={48} outerRadius={88} paddingAngle={2}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i]!} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function FinanceSources() {
  const equity = ["Owner capital / shares", "Retained profits", "New share issues", "No fixed repayment duty"];
  const debt = ["Bank loans & overdrafts", "Trade credit", "Bonds / leases", "Interest + contractual repayment"];
  return (
    <div>
      <div className="mb-3 text-center text-sm font-bold text-primary">Sources of finance</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="bg-primary/10 px-3 py-3 ring-1 ring-primary/20">
          <div className="text-center font-bold text-primary">Equity</div>
          <div className="mb-2 text-center text-xs text-muted-foreground">ownership capital</div>
          <ul className="space-y-1 text-[12px]">
            {equity.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
        <div className="bg-secondary/40 px-3 py-3 ring-1 ring-border/70">
          <div className="text-center font-bold text-primary">Debt</div>
          <div className="mb-2 text-center text-xs text-muted-foreground">borrowed capital</div>
          <ul className="space-y-1 text-[12px]">
            {debt.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 10 */
function ProductOrientation() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="bg-secondary/40 px-4 py-4 ring-1 ring-border/70">
        <div className="text-center font-bold text-primary">Product orientation</div>
        <div className="mt-3 space-y-2 text-center text-[12px] leading-snug">
          <div>Focus on production & product features</div>
          <div className="text-primary">↓</div>
          <div className="font-semibold">Sales</div>
          <div className="text-muted-foreground">“A good product sells itself” / advertising</div>
        </div>
      </div>
      <div className="bg-primary/10 px-4 py-4 ring-1 ring-primary/25">
        <div className="text-center font-bold text-primary">Market orientation</div>
        <div className="mt-3 space-y-2 text-center text-[12px] leading-snug">
          <div>Focus on customers’ needs & wants</div>
          <div className="text-primary">↓</div>
          <div className="font-semibold">Produce what customers need</div>
          <div className="text-muted-foreground">Research first, then build</div>
        </div>
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 11–12 style — market measures concept (not a scanned report page). */
function MarketMeasures() {
  return (
    <div className="mx-auto max-w-xl space-y-3 text-[12px]">
      <Node soft className="mx-auto max-w-sm">
        Market measures (course view)
      </Node>
      <div className="grid gap-2 sm:grid-cols-2">
        <Node>
          Market volume
          <div className="mt-1 font-normal text-muted-foreground">total sales of all firms in a defined market</div>
        </Node>
        <Node>
          Absolute market share
          <div className="mt-1 font-normal text-muted-foreground">own sales ÷ market volume</div>
        </Node>
        <Node>
          Relative market share
          <div className="mt-1 font-normal text-muted-foreground">own share ÷ largest rival’s share</div>
        </Node>
        <Node>
          Growth rates
          <div className="mt-1 font-normal text-muted-foreground">how segments expand or shrink over time</div>
        </Node>
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 13 */
function MarketVolumePotential() {
  const rows = [
    {
      who: "All businesses in the market",
      vol: "Market volume — sales of all firms",
      pot: "Market potential — volume + potential customers",
    },
    {
      who: "One business",
      vol: "Sales volume — sales of one firm",
      pot: "Sales potential — volume + gains from rivals + share of market-potential growth",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-[12px] sm:text-[13px]">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="px-2 py-2 font-bold text-primary"> </th>
            <th className="px-2 py-2 font-bold text-primary">Volume</th>
            <th className="px-2 py-2 font-bold text-primary">Potential</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.who} className="border-b border-border/60 align-top">
              <td className="px-2 py-3 font-semibold">{r.who}</td>
              <td className="bg-secondary/30 px-2 py-3">{r.vol}</td>
              <td className="bg-primary/10 px-2 py-3">{r.pot}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Hint>Potential exceeds volume when unrealised customers (or rival gains) remain.</Hint>
    </div>
  );
}

/** Fuhrmann Fig. 14 */
function SegmentationTargeting() {
  const steps = [
    { t: "Segmentation", q: "What characteristics? Can customers be grouped?" },
    { t: "Targeting", q: "Which groups are our target markets?" },
    { t: "Positioning", q: "Which offer meets those demands in their minds?" },
  ];
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row sm:items-stretch">
      {steps.map((s, i) => (
        <div key={s.t} className="flex flex-1 items-center gap-2">
          <Node soft={i === 2} className="w-full min-h-[5rem] sm:min-h-[5.5rem]">
            <div className="text-primary">{s.t}</div>
            <div className="mt-2 font-normal text-muted-foreground">{s.q}</div>
          </Node>
          {i < steps.length - 1 ? (
            <span className="hidden shrink-0 font-bold text-primary sm:inline" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function MarketingMix() {
  const items = [
    { t: "Product", s: "quality, design, range, service" },
    { t: "Price", s: "list price, discounts, terms" },
    { t: "Place", s: "channels, coverage, logistics" },
    { t: "Promotion", s: "advertising, sales, PR" },
  ];
  return (
    <div>
      <div className="mb-3 text-center text-sm font-bold text-primary">Marketing mix</div>
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {items.map((i) => (
          <Node key={i.t} className="min-h-[3.75rem] sm:min-h-[4.25rem]">
            <div className="text-primary">{i.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
          </Node>
        ))}
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 16 */
function ProductMixStrategies() {
  const cells = [
    { t: "Line extension", s: "Increase the depth of a line" },
    { t: "Mix extension", s: "Increase the number of lines" },
    { t: "Alteration", s: "Alter existing products / relaunch" },
    { t: "Contraction", s: "Eliminate products or lines" },
  ];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-3 text-center text-sm font-bold text-primary">Product-mix strategies</div>
      <div className="grid grid-cols-2 gap-2">
        {cells.map((c) => (
          <Node key={c.t} className="min-h-[4rem]">
            <div className="text-primary">{c.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{c.s}</div>
          </Node>
        ))}
      </div>
      <Hint>Expansion deepens or widens the mix; alteration refreshes; contraction removes weak items.</Hint>
    </div>
  );
}

/** Fuhrmann Fig. 17 — course version of multi-unit portfolio. */
function BusinessUnits() {
  const units = [
    { t: "Unit A", s: "Mobile & consumer devices", e: "phones, tablets, cameras" },
    { t: "Unit B", s: "Automotive / industrial / medical", e: "control & diagnostic systems" },
    { t: "Unit C", s: "Modules & power", e: "memory cards, power modules" },
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {units.map((u) => (
        <Node key={u.t} className="min-h-[5.5rem]">
          <div className="text-primary">{u.t}</div>
          <div className="mt-1 font-semibold">{u.s}</div>
          <div className="mt-1 font-normal text-muted-foreground">{u.e}</div>
        </Node>
      ))}
    </div>
  );
}

function ProductLifeCycle() {
  const data = [
    { stage: "Intro", sales: 8, profit: -12 },
    { stage: "Growth", sales: 55, profit: 22 },
    { stage: "Maturity", sales: 88, profit: 48 },
    { stage: "Decline", sales: 35, profit: 5 },
  ];
  return (
    <ChartFrame title="Product life cycle — sales vs profit" height="h-[280px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="stage" tick={{ fontSize: 11, fill: ACCENT, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 11, fill: INK }} />
          <ReferenceLine y={0} stroke={MUTED} strokeDasharray="3 3" />
          <Line type="monotone" dataKey="sales" name="Sales" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="profit" name="Profit" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={{ r: 3 }} isAnimationActive={false} />
          <Legend {...LEGEND_TOP} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function BcgMatrix() {
  const cells = [
    { t: "Stars", c: "high growth · high share", a: "invest to defend" },
    { t: "Question marks", c: "high growth · low share", a: "invest selectively or drop" },
    { t: "Cash cows", c: "low growth · high share", a: "harvest cash for stars" },
    { t: "Poor dogs", c: "low growth · low share", a: "withdraw or reposition" },
  ];
  return (
    <div>
      <div className="mb-1 text-center text-xs font-semibold text-muted-foreground">Market growth ↑</div>
      <div className="grid grid-cols-2 ring-1 ring-border/70">
        {cells.map((cell, i) => (
          <div
            key={cell.t}
            className={cn(
              "min-h-[5.5rem] p-3 text-center",
              i % 2 === 1 ? "border-l border-border/70" : "",
              i >= 2 ? "border-t border-border/70" : "",
              i === 0 || i === 3 ? "bg-primary/8" : "bg-secondary/30",
            )}
          >
            <div className="font-bold text-primary">{cell.t}</div>
            <div className="mt-1 text-[11px]">{cell.c}</div>
            <div className="mt-1 text-[11px] text-muted-foreground">{cell.a}</div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
        <span>← high relative share</span>
        <span>low relative share →</span>
      </div>
    </div>
  );
}

/** Fuhrmann Fig. 20 */
function AnsoffMatrix() {
  const cells = [
    { t: "Market penetration", s: "existing product · existing market", r: "safest" },
    { t: "Market development", s: "existing product · new market", r: "medium risk" },
    { t: "Product development", s: "new product · existing market", r: "medium risk" },
    { t: "Diversification", s: "new product · new market", r: "riskiest" },
  ];
  return (
    <div>
      <div className="mb-2 text-center text-sm font-bold text-primary">Ansoff product–market matrix</div>
      {/* Mobile: stacked cards — avoid cramped 3-column overlap */}
      <div className="grid gap-2 sm:hidden">
        {cells.map((c) => (
          <Node key={c.t} soft={c.t === "Market penetration"} className="min-h-[4rem] text-left">
            <div className="text-primary">{c.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{c.s}</div>
            <div className="mt-1 text-[10px] italic">{c.r}</div>
          </Node>
        ))}
      </div>
      <div className="mb-1 hidden grid-cols-[4.5rem_1fr_1fr] gap-1 text-[11px] text-muted-foreground sm:grid">
        <div />
        <div className="text-center font-semibold">Existing market</div>
        <div className="text-center font-semibold">New market</div>
      </div>
      <div className="hidden grid-cols-[4.5rem_1fr_1fr] gap-1 text-[12px] sm:grid">
        <div className="flex items-center justify-end pr-1 text-[11px] font-semibold text-muted-foreground">Existing product</div>
        <Node soft className="min-h-[4.5rem]">
          <div className="text-primary">{cells[0]!.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{cells[0]!.s}</div>
          <div className="mt-1 text-[10px] italic">{cells[0]!.r}</div>
        </Node>
        <Node className="min-h-[4.5rem]">
          <div className="text-primary">{cells[1]!.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{cells[1]!.s}</div>
          <div className="mt-1 text-[10px] italic">{cells[1]!.r}</div>
        </Node>
        <div className="flex items-center justify-end pr-1 text-[11px] font-semibold text-muted-foreground">New product</div>
        <Node className="min-h-[4.5rem]">
          <div className="text-primary">{cells[2]!.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{cells[2]!.s}</div>
          <div className="mt-1 text-[10px] italic">{cells[2]!.r}</div>
        </Node>
        <Node className="min-h-[4.5rem]">
          <div className="text-primary">{cells[3]!.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{cells[3]!.s}</div>
          <div className="mt-1 text-[10px] italic">{cells[3]!.r}</div>
        </Node>
      </div>
    </div>
  );
}

/** Break-even — North Harbor dock clocks (not the Fuhrmann 720/480/130k set). */
function BreakEven() {
  const price = 90;
  const vc = 54;
  const fixed = 72000;
  const bep = fixed / (price - vc); // 2,000
  const data = Array.from({ length: 11 }, (_, i) => {
    const q = i * 400;
    return {
      q,
      fixed,
      total: fixed + vc * q,
      revenue: price * q,
    };
  });
  return (
    <ChartFrame title="Break-even — North Harbor dock clocks (€90 price, €54 VC, €72k fixed)" height="h-[300px] sm:h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={MARGIN_LEGEND_AXIS}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            tick={{ fontSize: 10, fill: INK }}
            label={{ value: "Clocks sold", position: "insideBottom", offset: -2, fontSize: 11, fill: MUTED }}
          />
          <YAxis tick={{ fontSize: 10, fill: INK }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
          <Line type="linear" dataKey="fixed" name="Fixed costs" stroke="#A67C52" strokeWidth={1.5} strokeDasharray="4 3" dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="total" name="Total costs" stroke={MUTED} strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="revenue" name="Revenues" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot
            x={bep}
            y={price * bep}
            r={5}
            fill="#fff"
            stroke={ACCENT}
            strokeWidth={2}
            label={<ChartHaloLabel value="BEP" fill={ACCENT} dx={28} dy={-8} />}
          />
          <Legend {...LEGEND_TOP} />
        </LineChart>
      </ResponsiveContainer>
      <Hint>Break-even at 2,000 clocks (contribution €36 covers €72,000 fixed costs).</Hint>
    </ChartFrame>
  );
}

/** Elastic demand — original BBE numbers (not the book’s 500→400 / 70→100). */
function PriceElasticityElastic() {
  const data = [
    { q: 80, p: 90 },
    { q: 120, p: 72 },
    { q: 160, p: 54 },
  ];
  return (
    <ChartFrame title="Price elasticity — elastic demand (dock clocks)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[60, 180]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Quantity", position: "insideBottom", offset: -4, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[40, 100]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Price (€)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 4 }} isAnimationActive={false} />
          <ReferenceDot x={80} y={90} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <ReferenceDot x={120} y={72} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <Hint>−20% price (€90→€72) → +50% quantity (80→120) · |ε| = 2.5 → elastic · revenue €7,200→€8,640.</Hint>
    </ChartFrame>
  );
}

/** Inelastic demand — original BBE numbers (not the book’s 60→50 / 90→100). */
function PriceElasticityInelastic() {
  const data = [
    { q: 200, p: 45 },
    { q: 220, p: 36 },
    { q: 240, p: 27 },
  ];
  return (
    <ChartFrame title="Price elasticity — inelastic demand (workshop software licence)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[180, 260]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Quantity", position: "insideBottom", offset: -4, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[20, 55]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Price (€)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 4 }} isAnimationActive={false} />
          <ReferenceDot x={200} y={45} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <ReferenceDot x={220} y={36} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <Hint>−20% price (€45→€36) → +10% quantity (200→220) · |ε| = 0.5 → inelastic · revenue €9,000→€7,920.</Hint>
    </ChartFrame>
  );
}

function FinancialStatements() {
  const items = [
    { t: "Balance sheet", s: "assets, liabilities & equity at a date" },
    { t: "Income statement", s: "revenues, costs & expenses over a period" },
    { t: "Cash flow statement", s: "cash in and cash out over a period" },
  ];
  return (
    <div className="space-y-3">
      <Node soft className="mx-auto max-w-sm">
        Financial statement
      </Node>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map((i) => (
          <Node key={i.t}>
            <div className="text-primary">{i.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
          </Node>
        ))}
      </div>
    </div>
  );
}

/* ── Math Ch1 (Sydsaeter-style set figures) ─────────────────────────── */

const FILL = "rgba(196, 92, 26, 0.28)";
const FILL_SOFT = "rgba(196, 92, 26, 0.14)";
const STROKE = INK;

function VennPanel({
  title,
  children,
  w = 220,
  h = 150,
}: {
  title: string;
  children: ReactNode;
  w?: number;
  h?: number;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-1.5 text-center text-[12px] font-semibold text-primary sm:text-[13px]">{title}</div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto h-auto w-full max-w-[240px]" role="img">
        {children}
      </svg>
    </div>
  );
}

/** Two overlapping circles inside a universe box (shared geometry). */
function TwoSetUniverse({
  shade,
  showLabels = true,
}: {
  shade: "union" | "intersection" | "diff-ab" | "diff-ba" | "complement-a" | "subset" | "none";
  showLabels?: boolean;
}) {
  const uid = `venn2-${shade}`;
  return (
    <>
      <defs>
        <clipPath id={`${uid}-b`}>
          <circle cx="122" cy="72" r="48" />
        </clipPath>
      </defs>
      <rect x="8" y="8" width="184" height="128" fill="none" stroke={GRID} strokeWidth="1.5" rx="4" />
      <text x="18" y="24" fill={MUTED} fontSize="11" fontWeight="600">
        U
      </text>

      {shade === "union" && (
        <>
          <circle cx="78" cy="72" r="48" fill={FILL} stroke="none" />
          <circle cx="122" cy="72" r="48" fill={FILL} stroke="none" />
        </>
      )}
      {shade === "intersection" && (
        <circle cx="78" cy="72" r="48" fill={FILL} stroke="none" clipPath={`url(#${uid}-b)`} />
      )}
      {shade === "diff-ab" && (
        <>
          <circle cx="78" cy="72" r="48" fill={FILL} stroke="none" />
          <circle cx="122" cy="72" r="48" fill="#fff" stroke="none" />
        </>
      )}
      {shade === "diff-ba" && (
        <>
          <circle cx="122" cy="72" r="48" fill={FILL} stroke="none" />
          <circle cx="78" cy="72" r="48" fill="#fff" stroke="none" />
        </>
      )}
      {shade === "complement-a" && (
        <>
          <rect x="8" y="8" width="184" height="128" fill={FILL} rx="4" />
          <circle cx="100" cy="72" r="48" fill="#fff" stroke="none" />
        </>
      )}
      {shade === "subset" && (
        <>
          <circle cx="118" cy="72" r="52" fill={FILL_SOFT} stroke="none" />
          <circle cx="100" cy="72" r="28" fill={FILL} stroke="none" />
        </>
      )}

      {shade === "complement-a" ? (
        <>
          <circle cx="100" cy="72" r="48" fill="none" stroke={STROKE} strokeWidth="1.75" />
          {showLabels && (
            <text x="100" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
              A
            </text>
          )}
        </>
      ) : shade === "subset" ? (
        <>
          <circle cx="118" cy="72" r="52" fill="none" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="100" cy="72" r="28" fill="none" stroke={STROKE} strokeWidth="1.75" />
          {showLabels && (
            <>
              <text x="96" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
                A
              </text>
              <text x="152" y="48" fill={INK} fontSize="13" fontWeight="700">
                B
              </text>
            </>
          )}
        </>
      ) : (
        <>
          <circle cx="78" cy="72" r="48" fill="none" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="122" cy="72" r="48" fill="none" stroke={STROKE} strokeWidth="1.75" />
          {showLabels && (
            <>
              <text x="52" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
                A
              </text>
              <text x="148" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
                B
              </text>
            </>
          )}
        </>
      )}
    </>
  );
}

/** Sydsaeter Fig. 1.1.1 — four elementary two-set pictures. */
function VennTwoSetOps() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <VennPanel title={"A ∪ B"}>
          <TwoSetUniverse shade="union" />
        </VennPanel>
        <VennPanel title={"A ∩ B"}>
          <TwoSetUniverse shade="intersection" />
        </VennPanel>
        <VennPanel title={"A \\ B"}>
          <TwoSetUniverse shade="diff-ab" />
        </VennPanel>
        <VennPanel title={"A ⊆ B"}>
          <TwoSetUniverse shade="subset" />
        </VennPanel>
      </div>
      <Hint>Shaded regions show the set named above each diagram.</Hint>
    </div>
  );
}

function VennComplement() {
  return (
    <div>
      <div className="mx-auto max-w-[260px]">
        <VennPanel title={"Aᶜ = U \\ A"} w={220} h={150}>
          <TwoSetUniverse shade="complement-a" showLabels />
        </VennPanel>
      </div>
      <Hint>Shaded = everything in U that is not in A.</Hint>
    </div>
  );
}

/** Three-set Venn shared geometry (book Figs 1.1.2–1.1.3). */
function ThreeSetBase({
  shadeKeys,
  labelMode,
}: {
  shadeKeys?: Set<string>;
  labelMode: "abc" | "regions";
}) {
  const A = { cx: 110, cy: 78, r: 58 };
  const B = { cx: 170, cy: 78, r: 58 };
  const C = { cx: 140, cy: 128, r: 58 };
  const uid = labelMode === "regions" ? "venn3r" : "venn3s";

  return (
    <>
      <defs>
        <clipPath id={`${uid}-b`}>
          <circle cx={B.cx} cy={B.cy} r={B.r} />
        </clipPath>
        <clipPath id={`${uid}-c`}>
          <circle cx={C.cx} cy={C.cy} r={C.r} />
        </clipPath>
      </defs>
      <rect x="12" y="10" width="256" height="200" fill="none" stroke={GRID} strokeWidth="1.5" rx="4" />
      <text x="22" y="28" fill={MUTED} fontSize="12" fontWeight="600">
        U
      </text>

      {shadeKeys?.has("distributive") && (
        <g>
          <circle cx={A.cx} cy={A.cy} r={A.r} fill={FILL} stroke="none" clipPath={`url(#${uid}-b)`} />
          <circle cx={A.cx} cy={A.cy} r={A.r} fill={FILL} stroke="none" clipPath={`url(#${uid}-c)`} />
        </g>
      )}

      <circle cx={A.cx} cy={A.cy} r={A.r} fill="none" stroke={STROKE} strokeWidth="1.75" />
      <circle cx={B.cx} cy={B.cy} r={B.r} fill="none" stroke={STROKE} strokeWidth="1.75" />
      <circle cx={C.cx} cy={C.cy} r={C.r} fill="none" stroke={STROKE} strokeWidth="1.75" />

      {labelMode === "abc" ? (
        <>
          <text x="72" y="70" fill={INK} fontSize="14" fontWeight="700">
            A
          </text>
          <text x="198" y="70" fill={INK} fontSize="14" fontWeight="700">
            B
          </text>
          <text x="132" y="168" fill={INK} fontSize="14" fontWeight="700">
            C
          </text>
        </>
      ) : (
        <>
          <text x="140" y="92" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (7)
          </text>
          <text x="140" y="58" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (1)
          </text>
          <text x="168" y="118" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (2)
          </text>
          <text x="112" y="118" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (3)
          </text>
          <text x="78" y="72" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (4)
          </text>
          <text x="202" y="72" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (5)
          </text>
          <text x="140" y="168" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            (6)
          </text>
          <text x="246" y="28" textAnchor="end" fill={INK} fontSize="12" fontWeight="700">
            (8)
          </text>
          <text x="58" y="48" fill={MUTED} fontSize="11" fontWeight="700">
            A
          </text>
          <text x="212" y="48" fill={MUTED} fontSize="11" fontWeight="700">
            B
          </text>
          <text x="140" y="198" textAnchor="middle" fill={MUTED} fontSize="11" fontWeight="700">
            C
          </text>
        </>
      )}
    </>
  );
}

/** Sydsaeter Fig. 1.1.2 — A ∩ (B ∪ C). */
function VennDistributive() {
  return (
    <div>
      <div className="mx-auto max-w-[320px]">
        <VennPanel title={"A ∩ (B ∪ C)"} w={280} h={220}>
          <ThreeSetBase shadeKeys={new Set(["distributive"])} labelMode="abc" />
        </VennPanel>
      </div>
      <Hint>
        The shaded part is also (A ∩ B) ∪ (A ∩ C): the pieces of A that meet B, or meet C, or both.
      </Hint>
    </div>
  );
}

/** Sydsaeter Fig. 1.1.3 — eight regions for three sets. */
function VennThreeRegions() {
  return (
    <div>
      <div className="mx-auto max-w-[320px]">
        <VennPanel title="Three sets: eight regions" w={280} h={220}>
          <ThreeSetBase labelMode="regions" />
        </VennPanel>
      </div>
      <div className="mt-3 grid gap-1 text-[11px] leading-snug text-muted-foreground sm:grid-cols-2 sm:text-[12px]">
        <div>(1) (A ∩ B) \ C</div>
        <div>(2) (B ∩ C) \ A</div>
        <div>(3) (C ∩ A) \ B</div>
        <div>(4) A \ (B ∪ C)</div>
        <div>(5) B \ (C ∪ A)</div>
        <div>(6) C \ (A ∪ B)</div>
        <div>(7) A ∩ B ∩ C</div>
        <div>(8) (A ∪ B ∪ C)ᶜ</div>
      </div>
    </div>
  );
}

function VennDeMorganUnion() {
  return (
    <div>
      <div className="mx-auto max-w-[300px]">
        <svg viewBox="0 0 220 150" className="mx-auto h-auto w-full max-w-[260px]" role="img">
          <rect x="8" y="8" width="184" height="128" fill={FILL} stroke={GRID} strokeWidth="1.5" rx="4" />
          <text x="18" y="24" fill={MUTED} fontSize="11" fontWeight="600">
            U
          </text>
          <circle cx="78" cy="72" r="48" fill="#fff" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="122" cy="72" r="48" fill="#fff" stroke={STROKE} strokeWidth="1.75" />
          <text x="52" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
            A
          </text>
          <text x="148" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
            B
          </text>
        </svg>
      </div>
      <div className="mt-1 text-center text-[12px] font-semibold text-primary">(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ</div>
      <Hint>Shaded = outside A ∪ B. That is exactly the points missing from both A and B.</Hint>
    </div>
  );
}

function VennDeMorganInter() {
  return (
    <div>
      <div className="mx-auto max-w-[300px]">
        <svg viewBox="0 0 220 150" className="mx-auto h-auto w-full max-w-[260px]" role="img">
          <rect x="8" y="8" width="184" height="128" fill={FILL} stroke={GRID} strokeWidth="1.5" rx="4" />
          <text x="18" y="24" fill={MUTED} fontSize="11" fontWeight="600">
            U
          </text>
          <defs>
            <clipPath id="dm-b">
              <circle cx="122" cy="72" r="48" />
            </clipPath>
          </defs>
          {/* White out only the intersection lens */}
          <circle cx="78" cy="72" r="48" fill="#fff" stroke="none" clipPath="url(#dm-b)" />
          <circle cx="78" cy="72" r="48" fill="none" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="122" cy="72" r="48" fill="none" stroke={STROKE} strokeWidth="1.75" />
          <text x="52" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
            A
          </text>
          <text x="148" y="76" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
            B
          </text>
        </svg>
      </div>
      <div className="mt-1 text-center text-[12px] font-semibold text-primary">(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ</div>
      <Hint>Shaded = everything except the lens A ∩ B. That is Aᶜ ∪ Bᶜ.</Hint>
    </div>
  );
}

/** Budget set triangle from Sydsaeter §1.1 (also drawn later as a consumption set). */
function BudgetSet() {
  const W = 340;
  const H = 260;
  const ox = 48;
  const oy = 210;
  const xMax = 280;
  const yMax = 40;
  // Triangle: (0,0), (m/p,0), (0,m/q) — illustrative intercepts
  const xInt = 250;
  const yInt = 50;
  const points = `${ox},${oy} ${xInt},${oy} ${ox},${yInt}`;
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-[380px]" role="img">
        <rect x="0" y="0" width={W} height={H} fill="transparent" />
        {/* axes */}
        <line x1={ox} y1={oy} x2={xMax} y2={oy} stroke={STROKE} strokeWidth="1.75" />
        <line x1={ox} y1={oy} x2={ox} y2={yMax} stroke={STROKE} strokeWidth="1.75" />
        <polygon points={`${xMax},${oy} ${xMax - 8},${oy - 4} ${xMax - 8},${oy + 4}`} fill={STROKE} />
        <polygon points={`${ox},${yMax} ${ox - 4},${yMax + 8} ${ox + 4},${yMax + 8}`} fill={STROKE} />
        <text x={xMax + 4} y={oy + 4} fill={INK} fontSize="13" fontWeight="700">
          x
        </text>
        <text x={ox - 4} y={yMax - 4} fill={INK} fontSize="13" fontWeight="700">
          y
        </text>
        {/* shaded budget set */}
        <polygon points={points} fill={FILL} stroke={ACCENT} strokeWidth="2" />
        {/* intercept labels */}
        <text x={xInt} y={oy + 18} textAnchor="middle" fill={MUTED} fontSize="12">
          m/p
        </text>
        <text x={ox - 10} y={yInt + 4} textAnchor="end" fill={MUTED} fontSize="12">
          m/q
        </text>
        <text x={ox + 36} y={oy - 36} fill={INK} fontSize="14" fontWeight="700">
          B
        </text>
        <text x={170} y={120} fill={MUTED} fontSize="11">
          px + qy ≤ m
        </text>
        <text x={170} y={136} fill={MUTED} fontSize="11">
          x ≥ 0, y ≥ 0
        </text>
      </svg>
      <Hint>The budget set is the filled triangle: every affordable nonnegative bundle (x, y).</Hint>
    </div>
  );
}

function VennSurveyCount() {
  return (
    <div>
      <div className="mx-auto max-w-[280px]">
        <svg viewBox="0 0 240 170" className="mx-auto h-auto w-full" role="img">
          <rect x="10" y="10" width="220" height="150" fill="none" stroke={GRID} strokeWidth="1.5" rx="4" />
          <text x="20" y="28" fill={MUTED} fontSize="11" fontWeight="600">
            U
          </text>
          <circle cx="95" cy="90" r="52" fill={FILL_SOFT} stroke={STROKE} strokeWidth="1.75" />
          <circle cx="145" cy="90" r="52" fill={FILL_SOFT} stroke={STROKE} strokeWidth="1.75" />
          <circle cx="95" cy="90" r="52" fill={FILL} stroke="none" clipPath="url(#surv-t)" />
          <defs>
            <clipPath id="surv-t">
              <circle cx="145" cy="90" r="52" />
            </clipPath>
          </defs>
          <text x="62" y="88" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            Coffee
          </text>
          <text x="62" y="104" textAnchor="middle" fill={MUTED} fontSize="11">
            50
          </text>
          <text x="178" y="88" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
            Tea
          </text>
          <text x="178" y="104" textAnchor="middle" fill={MUTED} fontSize="11">
            40
          </text>
          <text x="120" y="94" textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
            35
          </text>
          <text x="210" y="150" textAnchor="end" fill={MUTED} fontSize="11">
            neither: 10
          </text>
        </svg>
      </div>
      <Hint>
        n(C ∪ T) = 50 + 40 − 35 = 55, then add the 10 outside both circles to get |U| = 65.
      </Hint>
    </div>
  );
}

function powerPolyline(
  xs: number[],
  f: (x: number) => number,
  toSvg: (x: number, y: number) => { x: number; y: number },
) {
  return xs
    .map((x) => {
      const p = toSvg(x, f(x));
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    })
    .join(" ");
}

function linspace(from: number, to: number, n: number) {
  if (n <= 1) return [from];
  return Array.from({ length: n }, (_, i) => from + (i / (n - 1)) * (to - from));
}

/** Dense samples near 0 so 1/x reaches the vertical asymptote. */
function reciprocalXs(sign: 1 | -1): number[] {
  const far = linspace(0.45, 3.2, 36);
  const mid = linspace(0.22, 0.45, 18);
  const near = linspace(0.12, 0.22, 16);
  const xs = [...far, ...mid, ...near].sort((a, b) => a - b);
  return sign === 1 ? xs : xs.map((x) => -x).reverse();
}

function PowerAxisArrowH({ x, y }: { x: number; y: number }) {
  return <polygon points={`${x},${y} ${x - 9},${y - 4} ${x - 9},${y + 4}`} fill={STROKE} />;
}

function PowerAxisArrowV({ x, y }: { x: number; y: number }) {
  return <polygon points={`${x},${y} ${x - 4},${y + 9} ${x + 4},${y + 9}`} fill={STROKE} />;
}

function PowerEvenOdd() {
  const W = 440;
  const H = 300;
  const ox = 220;
  const oy = 150;
  const left = 36;
  const right = 404;
  const top = 22;
  const bottom = 278;
  const sx = 78;
  const sy = 32;
  const toSvg = (x: number, y: number) => ({ x: ox + x * sx, y: oy - y * sy });
  const xs = linspace(-2.15, 2.15, 120);
  const sq = powerPolyline(xs, (x) => x * x, toSvg);
  const cu = powerPolyline(xs, (x) => x * x * x, toSvg);
  const xTicks = [-2, -1, 1, 2];
  const yTicks = [-4, -2, 2, 4];
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-[460px]" role="img">
        <defs>
          <clipPath id="pw-eo-clip">
            <rect x={left} y={top} width={right - left} height={bottom - top} />
          </clipPath>
        </defs>
        <rect x={left} y={top} width={right - left} height={bottom - top} fill="#fff" stroke={GRID} strokeWidth="1" />
        {xTicks.map((t) => (
          <line key={`vg${t}`} x1={toSvg(t, 0).x} y1={top} x2={toSvg(t, 0).x} y2={bottom} stroke={GRID} strokeWidth="1" />
        ))}
        {yTicks.map((t) => (
          <line key={`hg${t}`} x1={left} y1={toSvg(0, t).y} x2={right} y2={toSvg(0, t).y} stroke={GRID} strokeWidth="1" />
        ))}
        <g clipPath="url(#pw-eo-clip)">
          <polyline points={sq} fill="none" stroke={MUTED} strokeWidth="2.4" />
          <polyline points={cu} fill="none" stroke={ACCENT} strokeWidth="2.4" />
        </g>
        <line x1={left} y1={oy} x2={right - 2} y2={oy} stroke={STROKE} strokeWidth="1.6" />
        <line x1={ox} y1={bottom} x2={ox} y2={top + 2} stroke={STROKE} strokeWidth="1.6" />
        <PowerAxisArrowH x={right} y={oy} />
        <PowerAxisArrowV x={ox} y={top} />
        {xTicks.map((t) => {
          const p = toSvg(t, 0);
          return (
            <g key={`xt${t}`}>
              <line x1={p.x} y1={oy - 5} x2={p.x} y2={oy + 5} stroke={STROKE} strokeWidth="1.4" />
              <text x={p.x} y={oy + 18} textAnchor="middle" fill={MUTED} fontSize="12">
                {t}
              </text>
            </g>
          );
        })}
        {yTicks.map((t) => {
          const p = toSvg(0, t);
          return (
            <g key={`yt${t}`}>
              <line x1={ox - 5} y1={p.y} x2={ox + 5} y2={p.y} stroke={STROKE} strokeWidth="1.4" />
              <text x={ox - 10} y={p.y + 4} textAnchor="end" fill={MUTED} fontSize="12">
                {t}
              </text>
            </g>
          );
        })}
        <text x={ox + 8} y={oy + 16} fill={MUTED} fontSize="12">
          0
        </text>
        <text x={right + 8} y={oy + 5} fill={INK} fontSize="13" fontWeight="700">
          x
        </text>
        <text x={ox + 8} y={top + 6} fill={INK} fontSize="13" fontWeight="700">
          y
        </text>
        <text x={toSvg(1.55, 2.4).x} y={toSvg(1.55, 2.4).y} fill={MUTED} fontSize="13" fontWeight="700">
          y = x²
        </text>
        <text x={toSvg(1.12, 3.3).x} y={toSvg(1.12, 3.3).y} fill={ACCENT} fontSize="13" fontWeight="700">
          y = x³
        </text>
      </svg>
      <Hint>x² is even: mirror across the y-axis. x³ is odd: rotate 180° about the origin.</Hint>
    </div>
  );
}

function PowerReciprocal() {
  const W = 440;
  const H = 300;
  const ox = 220;
  const oy = 150;
  const left = 36;
  const right = 404;
  const top = 22;
  const bottom = 278;
  const sx = 58;
  const sy = 40;
  const toSvg = (x: number, y: number) => ({ x: ox + x * sx, y: oy - y * sy });
  const leftXs = reciprocalXs(-1);
  const rightXs = reciprocalXs(1);
  const invL = powerPolyline(leftXs, (x) => 1 / x, toSvg);
  const invR = powerPolyline(rightXs, (x) => 1 / x, toSvg);
  const sqL = powerPolyline(leftXs, (x) => 1 / (x * x), toSvg);
  const sqR = powerPolyline(rightXs, (x) => 1 / (x * x), toSvg);
  const xTicks = [-3, -2, -1, 1, 2, 3];
  const yTicks = [-3, -2, -1, 1, 2, 3];
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-[460px]" role="img">
        <defs>
          <clipPath id="pw-rec-clip">
            <rect x={left} y={top} width={right - left} height={bottom - top} />
          </clipPath>
        </defs>
        <rect x={left} y={top} width={right - left} height={bottom - top} fill="#fff" stroke={GRID} strokeWidth="1" />
        {xTicks.map((t) => (
          <line key={`vg${t}`} x1={toSvg(t, 0).x} y1={top} x2={toSvg(t, 0).x} y2={bottom} stroke={GRID} strokeWidth="1" />
        ))}
        {yTicks.map((t) => (
          <line key={`hg${t}`} x1={left} y1={toSvg(0, t).y} x2={right} y2={toSvg(0, t).y} stroke={GRID} strokeWidth="1" />
        ))}
        <line
          x1={ox}
          y1={top + 4}
          x2={ox}
          y2={bottom - 4}
          stroke={ACCENT}
          strokeWidth="1.15"
          strokeDasharray="5 4"
          opacity="0.55"
        />
        <g clipPath="url(#pw-rec-clip)">
          <polyline points={sqL} fill="none" stroke={MUTED} strokeWidth="2.4" />
          <polyline points={sqR} fill="none" stroke={MUTED} strokeWidth="2.4" />
          <polyline points={invL} fill="none" stroke={ACCENT} strokeWidth="2.4" />
          <polyline points={invR} fill="none" stroke={ACCENT} strokeWidth="2.4" />
        </g>
        <line x1={left} y1={oy} x2={right - 2} y2={oy} stroke={STROKE} strokeWidth="1.6" />
        <line x1={ox} y1={bottom} x2={ox} y2={top + 2} stroke={STROKE} strokeWidth="1.6" />
        <PowerAxisArrowH x={right} y={oy} />
        <PowerAxisArrowV x={ox} y={top} />
        {xTicks.map((t) => {
          const p = toSvg(t, 0);
          return (
            <g key={`xt${t}`}>
              <line x1={p.x} y1={oy - 5} x2={p.x} y2={oy + 5} stroke={STROKE} strokeWidth="1.4" />
              <text x={p.x} y={oy + 18} textAnchor="middle" fill={MUTED} fontSize="11">
                {t}
              </text>
            </g>
          );
        })}
        {yTicks.map((t) => {
          const p = toSvg(0, t);
          return (
            <g key={`yt${t}`}>
              <line x1={ox - 5} y1={p.y} x2={ox + 5} y2={p.y} stroke={STROKE} strokeWidth="1.4" />
              <text x={ox - 10} y={p.y + 4} textAnchor="end" fill={MUTED} fontSize="11">
                {t}
              </text>
            </g>
          );
        })}
        <circle cx={ox} cy={oy} r="3.2" fill="#fff" stroke={STROKE} strokeWidth="1.3" />
        <text x={ox + 10} y={top + 16} fill={ACCENT} fontSize="11" fontWeight="700">
          x = 0
        </text>
        <text x={right + 8} y={oy + 5} fill={INK} fontSize="13" fontWeight="700">
          x
        </text>
        <text x={ox + 8} y={top + 6} fill={INK} fontSize="13" fontWeight="700">
          y
        </text>
        <text x={toSvg(1.55, 0.72).x} y={toSvg(1.55, 0.72).y} fill={ACCENT} fontSize="13" fontWeight="700">
          y = 1/x
        </text>
        <text x={toSvg(1.7, 0.28).x} y={toSvg(1.7, 0.28).y + 14} fill={MUTED} fontSize="13" fontWeight="700">
          y = 1/x²
        </text>
      </svg>
      <Hint>Both blow up at x = 0 (vertical asymptote). 1/x changes sign; 1/x² stays positive.</Hint>
    </div>
  );
}

function PowerCompare() {
  const W = 440;
  const H = 300;
  const ox = 52;
  const oy = 252;
  const left = ox;
  const right = 400;
  const top = 22;
  const bottom = oy;
  const xMax = 2;
  const yMax = 2.2;
  const sx = (right - ox) / xMax;
  const sy = (oy - top - 10) / yMax;
  const toSvg = (x: number, y: number) => ({ x: ox + x * sx, y: oy - y * sy });
  const xs = linspace(0, xMax, 80);
  const y1 = powerPolyline(xs, (x) => x, toSvg);
  const y2 = powerPolyline(xs, (x) => x * x, toSvg);
  const y3 = powerPolyline(xs, (x) => x * x * x, toSvg);
  const xTicks = [0.5, 1, 1.5, 2];
  const yTicks = [0.5, 1, 1.5, 2];
  const meet = toSvg(1, 1);
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-[460px]" role="img">
        <defs>
          <clipPath id="pw-cmp-clip">
            <rect x={left} y={top} width={right - left} height={bottom - top} />
          </clipPath>
        </defs>
        <rect x={left} y={top} width={right - left} height={bottom - top} fill="#fff" stroke={GRID} strokeWidth="1" />
        {xTicks.map((t) => (
          <line key={`vg${t}`} x1={toSvg(t, 0).x} y1={top} x2={toSvg(t, 0).x} y2={bottom} stroke={GRID} strokeWidth="1" />
        ))}
        {yTicks.map((t) => (
          <line key={`hg${t}`} x1={left} y1={toSvg(0, t).y} x2={right} y2={toSvg(0, t).y} stroke={GRID} strokeWidth="1" />
        ))}
        <g clipPath="url(#pw-cmp-clip)">
          <polyline points={y1} fill="none" stroke={INK} strokeWidth="2.25" />
          <polyline points={y2} fill="none" stroke={MUTED} strokeWidth="2.25" />
          <polyline points={y3} fill="none" stroke={ACCENT} strokeWidth="2.4" />
        </g>
        <line x1={left} y1={oy} x2={right - 2} y2={oy} stroke={STROKE} strokeWidth="1.6" />
        <line x1={ox} y1={bottom} x2={ox} y2={top + 2} stroke={STROKE} strokeWidth="1.6" />
        <PowerAxisArrowH x={right} y={oy} />
        <PowerAxisArrowV x={ox} y={top} />
        {xTicks.map((t) => {
          const p = toSvg(t, 0);
          return (
            <g key={`xt${t}`}>
              <line x1={p.x} y1={oy - 5} x2={p.x} y2={oy + 5} stroke={STROKE} strokeWidth="1.4" />
              <text x={p.x} y={oy + 18} textAnchor="middle" fill={MUTED} fontSize="12">
                {t}
              </text>
            </g>
          );
        })}
        {yTicks.map((t) => {
          const p = toSvg(0, t);
          return (
            <g key={`yt${t}`}>
              <line x1={ox - 5} y1={p.y} x2={ox + 5} y2={p.y} stroke={STROKE} strokeWidth="1.4" />
              <text x={ox - 10} y={p.y + 4} textAnchor="end" fill={MUTED} fontSize="12">
                {t}
              </text>
            </g>
          );
        })}
        <circle cx={meet.x} cy={meet.y} r="3.6" fill="#fff" stroke={STROKE} strokeWidth="1.5" />
        <text x={meet.x + 8} y={meet.y - 8} fill={INK} fontSize="11" fontWeight="700">
          (1, 1)
        </text>
        <text x={right + 8} y={oy + 5} fill={INK} fontSize="13" fontWeight="700">
          x
        </text>
        <text x={ox + 8} y={top + 6} fill={INK} fontSize="13" fontWeight="700">
          y
        </text>
        <text x={toSvg(0.42, 0.55).x} y={toSvg(0.42, 0.55).y - 6} fill={INK} fontSize="13" fontWeight="700">
          y = x
        </text>
        <text x={toSvg(0.62, 0.28).x} y={toSvg(0.62, 0.28).y + 14} fill={MUTED} fontSize="13" fontWeight="700">
          y = x²
        </text>
        <text x={toSvg(1.28, 2.05).x} y={toSvg(1.28, 2.05).y} fill={ACCENT} fontSize="13" fontWeight="700">
          y = x³
        </text>
      </svg>
      <Hint>On (0,1) the higher power is smaller. They meet at 1, then x³ leaves the frame first.</Hint>
    </div>
  );
}

/* ── Chapter 12: Standard probability figures ───────────────────────── */

function ProbDiceGrid() {
  const rows = [6, 5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="mb-2 text-sm font-bold text-primary">Sample space: sum of two dice (36 outcomes)</div>
      <div className="mx-auto w-full max-w-[420px] overflow-x-auto">
        <table className="w-full border-collapse text-center text-[12px] sm:text-[13px]">
          <tbody>
            <tr>
              <th className="border border-border/70 bg-secondary/40 px-1.5 py-1 text-muted-foreground" />
              {cols.map((c) => (
                <th key={c} className="border border-border/70 bg-secondary/40 px-1.5 py-1 font-bold text-foreground">
                  {c}
                </th>
              ))}
            </tr>
            {rows.map((r) => (
              <tr key={r}>
                <th className="border border-border/70 bg-secondary/40 px-1.5 py-1 font-bold text-foreground">{r}</th>
                {cols.map((c) => {
                  const sum = r + c;
                  const hit = sum === 7;
                  return (
                    <td
                      key={c}
                      className={cn("border border-border/70 px-1.5 py-1 tabular-nums", hit ? "font-bold" : "")}
                      style={hit ? { background: FILL, color: ACCENT } : { color: INK }}
                    >
                      {sum}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Hint>Gold cells: the 6 outcomes where the sum equals 7, so P(sum = 7) = 6/36 ≈ 16.67%.</Hint>
    </div>
  );
}

function ProbVennApps() {
  const T = (x: number, y: number, v: string, strong = false) => (
    <text
      key={`${x}-${y}-${v}`}
      x={x}
      y={y}
      textAnchor="middle"
      fill={strong ? ACCENT : INK}
      fontSize="12"
      fontWeight="700"
    >
      {v}
    </text>
  );
  return (
    <div>
      <div className="mb-2 text-sm font-bold text-primary">Three-set Venn diagram (Example 3.1)</div>
      <svg viewBox="0 0 300 230" className="mx-auto h-auto w-full max-w-[360px]" role="img">
        <rect x="6" y="6" width="288" height="218" fill={FILL_SOFT} stroke={GRID} strokeWidth="1.5" rx="6" />
        <text x="18" y="24" fill={MUTED} fontSize="11" fontWeight="600">
          U = 200 employees
        </text>
        <circle cx="118" cy="98" r="62" fill="#fff" fillOpacity="0.65" stroke={STROKE} strokeWidth="1.75" />
        <circle cx="182" cy="98" r="62" fill="#fff" fillOpacity="0.45" stroke={STROKE} strokeWidth="1.75" />
        <circle cx="150" cy="152" r="62" fill="#fff" fillOpacity="0.35" stroke={STROKE} strokeWidth="1.75" />
        <text x="62" y="58" fill={INK} fontSize="13" fontWeight="800">
          A
        </text>
        <text x="236" y="58" fill={INK} fontSize="13" fontWeight="800">
          B
        </text>
        <text x="150" y="216" textAnchor="middle" fill={INK} fontSize="13" fontWeight="800">
          C
        </text>
        {T(92, 82, "45")}
        {T(210, 82, "30")}
        {T(150, 186, "25")}
        {T(150, 78, "20")}
        {T(113, 136, "15")}
        {T(188, 136, "10")}
        {T(150, 122, "10", true)}
        {T(268, 214, "45")}
      </svg>
      <Hint>
        Only A = 45, only B = 30, only C = 25; pairwise-only 20, 15, 10; all three = 10; none = 45. Total inside at
        least one circle = 155.
      </Hint>
    </div>
  );
}

function ProbBayesTree() {
  const Branch = ({
    label,
    prob,
    sub,
  }: {
    label: string;
    prob: string;
    sub: { name: string; p: string; joint: string; strong?: boolean }[];
  }) => (
    <div className="min-w-0 flex-1 border border-border/70 bg-secondary/30 p-3">
      <div className="text-[13px] font-bold text-foreground">
        {label} <span className="font-semibold text-muted-foreground">({prob})</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {sub.map((s) => (
          <div
            key={s.name}
            className={cn(
              "flex items-center justify-between gap-2 px-2 py-1 text-[12px]",
              s.strong ? "bg-primary/10 text-primary ring-1 ring-primary/25" : "bg-background/60 text-foreground",
            )}
          >
            <span className="font-semibold">
              {s.name} <span className="font-normal text-muted-foreground">({s.p})</span>
            </span>
            <span className="tabular-nums font-bold">{s.joint}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <div className="mb-2 text-sm font-bold text-primary">
        Probability tree — law of total probability &amp; Bayes&rsquo; theorem (Example 8.1)
      </div>
      <div className="mx-auto flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
        <Branch
          label="Machine X"
          prob="P(X) = 0.60"
          sub={[
            { name: "Defective", p: "0.03", joint: "0.018", strong: true },
            { name: "OK", p: "0.97", joint: "0.582" },
          ]}
        />
        <Branch
          label="Machine Y"
          prob="P(Y) = 0.40"
          sub={[
            { name: "Defective", p: "0.07", joint: "0.028", strong: true },
            { name: "OK", p: "0.93", joint: "0.372" },
          ]}
        />
      </div>
      <Hint>
        Multiply along a path for its joint probability. Adding the two defective paths gives P(defective) = 0.018 +
        0.028 = 0.046.
      </Hint>
    </div>
  );
}

function ProbPmfBars() {
  const data = [
    { x: "0", p: 0.1 },
    { x: "1", p: 0.25 },
    { x: "2", p: 0.3 },
    { x: "3", p: 0.2 },
    { x: "4", p: 0.15 },
  ];
  return (
    <ChartFrame title="Discrete probability distribution (Example 9.1)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 16, bottom: 24, left: 8 }}>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="x"
            stroke={MUTED}
            tick={{ fill: MUTED, fontSize: 12 }}
            label={{ value: "X = number of daily complaints", position: "bottom", fill: MUTED, fontSize: 12 }}
          />
          <YAxis stroke={MUTED} tick={{ fill: MUTED, fontSize: 12 }} domain={[0, 0.35]} />
          <ReferenceLine
            x="2"
            stroke={ACCENT}
            strokeDasharray="4 4"
            label={{ value: "E(X) = 2.05", fill: ACCENT, fontSize: 11, position: "top" }}
          />
          <Bar dataKey="p" fill={ACCENT} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function StaticTheoryImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <ZoomableImage
      src={src}
      alt={alt}
      wrapperClassName="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-border/50 bg-white"
      className="mx-auto h-auto w-full object-contain"
    />
  );
}

function IneqWavyCurveGeneral() {
  return (
    <StaticTheoryImage
      src="/bbe-theory/math-inequalities/wavy-curve-general.png"
      alt="Wavy curve through three simple roots, alternating above and below the axis"
    />
  );
}

function IneqWavyCurveFourRoots() {
  return (
    <StaticTheoryImage
      src="/bbe-theory/math-inequalities/wavy-curve-four-roots.png"
      alt="Wavy curve for (x² − 9)/(x² − 16), alternating leftward from the rightmost positive region"
    />
  );
}

function IneqWavyCurveEvenPower() {
  return (
    <StaticTheoryImage
      src="/bbe-theory/math-inequalities/wavy-curve-even-power.png"
      alt="Wavy curve bouncing at an even-power root x = 1 while crossing at odd-power and denominator zeros"
    />
  );
}

function IneqCompoundIntersection() {
  return (
    <StaticTheoryImage
      src="/bbe-theory/math-inequalities/compound-intersection.png"
      alt="Number-line shading for left and right parts of a compound inequality, with their intersection highlighted"
    />
  );
}

/** Shared axes helper for differentiation teaching figures. */
function DiffAxes({
  children,
  title,
  xLabel = "x",
  yLabel,
}: {
  children: ReactNode;
  title: string;
  xLabel?: string;
  yLabel: string;
}) {
  return (
    <ChartFrame title={title} height="h-[280px] sm:h-[320px]">
      <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-label={title}>
        <rect x="0" y="0" width="520" height="300" fill="#fff" />
        {/* axes */}
        <line x1="50" y1="150" x2="500" y2="150" stroke={INK} strokeWidth="1.5" />
        <line x1="50" y1="20" x2="50" y2="280" stroke={INK} strokeWidth="1.5" />
        <polygon points="500,150 492,146 492,154" fill={INK} />
        <polygon points="50,20 46,28 54,28" fill={INK} />
        <text x="505" y="154" fontSize="13" fill={MUTED}>
          {xLabel}
        </text>
        <text x="18" y="28" fontSize="13" fill={MUTED}>
          {yLabel}
        </text>
        {children}
      </svg>
    </ChartFrame>
  );
}

/** Graph of f′ with zeros at 1 and 5; positive between — teaches reading f from f′. */
function DiffFprimeSign() {
  // cubic-ish f' path: below left of 1, above on (1,5), below right of 5
  const d =
    "M 70,210 C 95,230 115,200 130,150 C 145,95 170,70 210,95 C 260,130 300,40 340,70 C 380,100 410,140 450,210";
  return (
    <DiffAxes title="Reading the graph of f′" yLabel="f′">
      <path d={d} fill="none" stroke={ACCENT} strokeWidth="2.8" />
      {/* zeros */}
      <circle cx="130" cy="150" r="5" fill="#fff" stroke={ACCENT} strokeWidth="2" />
      <circle cx="390" cy="150" r="5" fill="#fff" stroke={ACCENT} strokeWidth="2" />
      <text x="122" y="172" fontSize="12" fill={MUTED}>
        1
      </text>
      <text x="382" y="172" fontSize="12" fill={MUTED}>
        5
      </text>
      {/* sign labels — kept clear of the curve */}
      <SvgHaloText x={88} y={118} fontSize={14} fontWeight={700} fill={MUTED} anchor="middle">
        −
      </SvgHaloText>
      <SvgHaloText x={255} y={42} fontSize={14} fontWeight={700} fill={ACCENT} anchor="middle">
        +
      </SvgHaloText>
      <SvgHaloText x={435} y={118} fontSize={14} fontWeight={700} fill={MUTED} anchor="middle">
        −
      </SvgHaloText>
      <SvgHaloText x={130} y={268} fontSize={12} fill={INK} anchor="middle">
        f has a local min
      </SvgHaloText>
      <SvgHaloText x={390} y={268} fontSize={12} fill={INK} anchor="middle">
        f has a local max
      </SvgHaloText>
      <line x1="130" y1="248" x2="130" y2="160" stroke={MUTED} strokeDasharray="3 3" />
      <line x1="390" y1="248" x2="390" y2="160" stroke={MUTED} strokeDasharray="3 3" />
    </DiffAxes>
  );
}

/** Graph of f itself: local max, local min, inflection. */
function DiffFExtrema() {
  const d = "M 70,220 C 110,220 130,60 180,60 C 230,60 250,200 300,200 C 360,200 400,90 470,50";
  return (
    <DiffAxes title="Reading the graph of f" yLabel="f">
      <path d={d} fill="none" stroke={ACCENT} strokeWidth="2.8" />
      <circle cx="180" cy="60" r="5" fill="#fff" stroke={ACCENT} strokeWidth="2" />
      <circle cx="300" cy="200" r="5" fill="#fff" stroke={ACCENT} strokeWidth="2" />
      <circle cx="240" cy="130" r="4" fill={MUTED} />
      <SvgHaloText x={180} y={42} fontSize={12} fill={INK} anchor="middle">
        local max
      </SvgHaloText>
      <SvgHaloText x={300} y={236} fontSize={12} fill={INK} anchor="middle">
        local min
      </SvgHaloText>
      <SvgHaloText x={268} y={112} fontSize={11} fill={MUTED} anchor="start">
        inflection
      </SvgHaloText>
      <text x="175" y="280" fontSize="12" fill={MUTED}>
        a
      </text>
      <text x="295" y="280" fontSize="12" fill={MUTED}>
        b
      </text>
    </DiffAxes>
  );
}

/** MC rising vs flat/sloping MR — profit max at crossing. */
function DiffMcMr() {
  const data = Array.from({ length: 13 }, (_, i) => {
    const q = i;
    return { q, mc: 8 + 0.9 * q + 0.08 * q * q, mr: 28 - 1.2 * q };
  });
  return (
    <>
      <ChartFrame title="Profit rule on a figure — MR against MC" height="h-[300px] sm:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={MARGIN_LEGEND_AXIS}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis
              dataKey="q"
              type="number"
              domain={[0, 12]}
              tick={{ fontSize: 11, fill: INK }}
              label={{ value: "Output Q", position: "insideBottom", offset: -2, fontSize: 11, fill: MUTED }}
            />
            <YAxis
              type="number"
              domain={[0, 40]}
              tick={{ fontSize: 11, fill: INK }}
              label={{ value: "€ / unit", angle: -90, position: "insideLeft", offset: 8, fontSize: 11, fill: MUTED }}
            />
            <ReferenceLine y={0} stroke={MUTED} />
            <Line type="monotone" dataKey="mr" name="MR" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="mc" name="MC" stroke={MUTED} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <ReferenceDot
              x={8}
              y={18.4}
              r={5}
              fill="#fff"
              stroke={ACCENT}
              strokeWidth={2}
              label={<ChartHaloLabel value="MR = MC" fill={ACCENT} dx={42} dy={-6} />}
            />
            <Legend {...LEGEND_TOP} />
          </LineChart>
        </ResponsiveContainer>
      </ChartFrame>
      <Hint>Expand while MR &gt; MC. The crossing with rising MC is the profit candidate.</Hint>
    </>
  );
}

/** AC U-shape cut by rising MC at the AC minimum. */
function DiffAcMc() {
  const data = Array.from({ length: 15 }, (_, i) => {
    const q = i + 2;
    const ac = 40 / q + 2 + 0.35 * q;
    const mc = 2 + 0.7 * q;
    return { q, ac, mc };
  });
  // AC min near where MC = AC: 40/q + 2 + 0.35q = 2 + 0.7q ⇒ 40/q = 0.35q ⇒ q² = 40/0.35 ≈ 114 ⇒ q ≈ 10.7
  return (
    <>
      <ChartFrame title="Average cost against marginal cost" height="h-[300px] sm:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={MARGIN_LEGEND_AXIS}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis
              dataKey="q"
              type="number"
              domain={[2, 16]}
              tick={{ fontSize: 11, fill: INK }}
              label={{ value: "Output Q", position: "insideBottom", offset: -2, fontSize: 11, fill: MUTED }}
            />
            <YAxis
              type="number"
              domain={[0, 28]}
              tick={{ fontSize: 11, fill: INK }}
              label={{ value: "€ / unit", angle: -90, position: "insideLeft", offset: 8, fontSize: 11, fill: MUTED }}
            />
            <Line type="monotone" dataKey="ac" name="AC" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="mc" name="MC" stroke={MUTED} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <ReferenceDot
              x={10.7}
              y={9.5}
              r={5}
              fill="#fff"
              stroke={ACCENT}
              strokeWidth={2}
              label={<ChartHaloLabel value="AC min" fill={ACCENT} dx={0} dy={-18} />}
            />
            <Legend {...LEGEND_TOP} />
          </LineChart>
        </ResponsiveContainer>
      </ChartFrame>
      <Hint>MC cuts AC from below at an interior average-cost minimum. That point is not automatically a profit maximum.</Hint>
    </>
  );
}

/** Northline opening BS — distinct from the Fuhrmann 49,000 Tina/Steve set. */
const FIGURES: Record<string, () => ReactNode> = {

  "circular-flow": CircularFlow,
  "supply-curve": SupplyCurve,
  "demand-curve": DemandCurve,
  equilibrium: Equilibrium,
  "economic-sectors": EconomicSectors,
  "economic-systems": EconomicSystems,
  "ownership-overview": OwnershipOverview,
  "stakeholder-map": StakeholderMap,
  "values-vision": ValuesVision,
  "environment-impact": EnvironmentImpact,
  "shareholder-structure": ShareholderStructure,
  "finance-sources": FinanceSources,
  "product-orientation": ProductOrientation,
  "market-measures": MarketMeasures,
  "market-volume-potential": MarketVolumePotential,
  "segmentation-targeting": SegmentationTargeting,
  "marketing-mix": MarketingMix,
  "product-mix-strategies": ProductMixStrategies,
  "business-units": BusinessUnits,
  "product-life-cycle": ProductLifeCycle,
  "bcg-matrix": BcgMatrix,
  "ansoff-matrix": AnsoffMatrix,
  "break-even": BreakEven,
  "price-elasticity-elastic": PriceElasticityElastic,
  "price-elasticity-inelastic": PriceElasticityInelastic,
  "financial-statements": FinancialStatements,
  "budget-set": BudgetSet,
  "venn-two-set-ops": VennTwoSetOps,
  "venn-complement": VennComplement,
  "venn-distributive": VennDistributive,
  "venn-three-regions": VennThreeRegions,
  "venn-de-morgan-union": VennDeMorganUnion,
  "venn-de-morgan-inter": VennDeMorganInter,
  "venn-survey-count": VennSurveyCount,
  "power-even-odd": PowerEvenOdd,
  "power-reciprocal": PowerReciprocal,
  "power-compare": PowerCompare,
  "prob-dice-grid": ProbDiceGrid,
  "prob-venn-apps": ProbVennApps,
  "prob-bayes-tree": ProbBayesTree,
  "prob-pmf-bars": ProbPmfBars,
  "ineq-wavy-general": IneqWavyCurveGeneral,
  "ineq-wavy-four-roots": IneqWavyCurveFourRoots,
  "ineq-wavy-even-power": IneqWavyCurveEvenPower,
  "ineq-compound-intersection": IneqCompoundIntersection,
  "diff-fprime-sign": DiffFprimeSign,
  "diff-f-extrema": DiffFExtrema,
  "diff-mc-mr": DiffMcMr,
  "diff-ac-mc": DiffAcMc,

};

export function TheoryFigure({ id, caption, className }: Props) {
  const Comp = FIGURES[id];
  if (!Comp) {
    return (
      <Shell caption={caption} className={className}>
        <p className="text-sm text-destructive">Missing figure: {id}</p>
      </Shell>
    );
  }
  return (
    <Shell caption={caption} className={className}>
      <Comp />
    </Shell>
  );
}

export function isTheoryFigureId(id: string): boolean {
  return id in FIGURES;
}
