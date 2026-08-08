import type { ReactNode } from "react";
import {
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

/**
 * Circular flow — one SVG coordinate system so arrows start/end on box edges
 * (no floating middle column).
 */
function CircularFlow() {
  const W = 720;
  const H = 420;
  // Large actor boxes
  const gov = { x: 240, y: 12, w: 240, h: 64 };
  const hh = { x: 12, y: 230, w: 190, h: 130 };
  const biz = { x: 518, y: 230, w: 190, h: 130 };
  const left = hh.x + hh.w; // right edge of households
  const right = biz.x; // left edge of businesses
  const midX = (left + right) / 2;
  // y inside the side boxes so arrows visibly leave/enter the blocks
  const lanes: { y: number; label: string; toBiz: boolean }[] = [
    { y: 255, label: "Goods and services", toBiz: false },
    { y: 288, label: "Payments for goods and services", toBiz: true },
    { y: 321, label: "Labour and other resources", toBiz: true },
    { y: 354, label: "Wages, rent, interest and profit", toBiz: false },
  ];
  // Vertical attach points on box tops/bottoms
  const hhTop = { x: hh.x + hh.w * 0.45, y: hh.y };
  const bizTop = { x: biz.x + biz.w * 0.55, y: biz.y };
  const govBotL = { x: gov.x + 48, y: gov.y + gov.h };
  const govBotR = { x: gov.x + gov.w - 48, y: gov.y + gov.h };

  return (
    <div className="mx-auto w-full max-w-3xl" role="img" aria-label="Circular flow of goods, services and money">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="cfArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L10,5 L0,10 Z" fill={ACCENT} />
          </marker>
          <marker id="cfArrMute" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L9,4.5 L0,9 Z" fill={MUTED} />
          </marker>
        </defs>

        {/* Boxes first — large, then arrows leave their edges */}
        <rect x={gov.x} y={gov.y} width={gov.w} height={gov.h} fill="oklch(0.96 0.025 55)" stroke={ACCENT} strokeWidth="2.5" />
        <text x={gov.x + gov.w / 2} y={gov.y + 40} textAnchor="middle" fill={ACCENT} fontSize="22" fontWeight="700">
          Government
        </text>

        <rect x={hh.x} y={hh.y} width={hh.w} height={hh.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2.5" />
        <text x={hh.x + hh.w / 2} y={hh.y + 58} textAnchor="middle" fill={INK} fontSize="18" fontWeight="700">
          Private
        </text>
        <text x={hh.x + hh.w / 2} y={hh.y + 82} textAnchor="middle" fill={INK} fontSize="18" fontWeight="700">
          households
        </text>

        <rect x={biz.x} y={biz.y} width={biz.w} height={biz.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2.5" />
        <text x={biz.x + biz.w / 2} y={biz.y + 72} textAnchor="middle" fill={INK} fontSize="18" fontWeight="700">
          Businesses
        </text>

        {/* Government links — start on box borders */}
        <line x1={hhTop.x} y1={hhTop.y} x2={govBotL.x} y2={govBotL.y} stroke={MUTED} strokeWidth="2.25" markerEnd="url(#cfArrMute)" />
        <line x1={bizTop.x} y1={bizTop.y} x2={govBotR.x} y2={govBotR.y} stroke={MUTED} strokeWidth="2.25" markerEnd="url(#cfArrMute)" />
        <line x1={govBotL.x + 28} y1={govBotL.y} x2={hh.x + hh.w * 0.72} y2={hhTop.y} stroke={ACCENT} strokeWidth="2.25" markerEnd="url(#cfArr)" />
        <line x1={govBotR.x - 28} y1={govBotR.y} x2={biz.x + biz.w * 0.28} y2={bizTop.y} stroke={ACCENT} strokeWidth="2.25" markerEnd="url(#cfArr)" />

        <text x={(hhTop.x + govBotL.x) / 2 - 6} y={148} fill={MUTED} fontSize="12" fontWeight="700" textAnchor="middle">
          taxes ↑
        </text>
        <text x={(hhTop.x + govBotL.x) / 2 - 6} y={168} fill={ACCENT} fontSize="11" fontWeight="600" textAnchor="middle">
          public goods / transfers ↓
        </text>
        <text x={(bizTop.x + govBotR.x) / 2 + 6} y={148} fill={MUTED} fontSize="12" fontWeight="700" textAnchor="middle">
          taxes ↑
        </text>
        <text x={(bizTop.x + govBotR.x) / 2 + 6} y={168} fill={ACCENT} fontSize="11" fontWeight="600" textAnchor="middle">
          subsidies / public goods ↓
        </text>

        {/* Horizontal flows: from right edge of HH to left edge of Biz (and reverse) */}
        {lanes.map((lane) => {
          const x1 = lane.toBiz ? left : right;
          const x2 = lane.toBiz ? right : left;
          return (
            <g key={lane.label}>
              <line x1={x1} y1={lane.y} x2={x2} y2={lane.y} stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#cfArr)" />
              <rect x={midX - 122} y={lane.y - 11} width="244" height="20" rx="2" fill="oklch(0.985 0.005 75)" />
              <text x={midX} y={lane.y + 4} textAnchor="middle" fill={INK} fontSize="12.5" fontWeight="600">
                {lane.label}
              </text>
            </g>
          );
        })}

        <text x={W / 2} y={406} textAnchor="middle" fill={MUTED} fontSize="12" fontStyle="italic">
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
          <ReferenceDot x={12} y={80} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "A", position: "top", fill: ACCENT }} />
          <ReferenceDot x={34} y={190} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "B", position: "top", fill: ACCENT }} />
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
    <ChartFrame title="Market equilibrium">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={supply} margin={{ top: 12, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 45]} tick={{ fontSize: 11, fill: INK }} />
          <YAxis type="number" domain={[0, 250]} tick={{ fontSize: 11, fill: INK }} />
          <Line type="linear" dataKey="s" name="Supply" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="d" name="Demand" stroke={MUTED} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot x={22} y={130} r={6} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "E", position: "top", fill: ACCENT }} />
          <Legend />
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
      <div className="grid gap-2 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.t} className="flex flex-col items-center gap-2">
            <Node soft={i === 0} className="w-full min-h-[4.5rem]">
              <div className="text-primary">{step.t}</div>
              <div className="mt-1 font-normal text-muted-foreground">{step.s}</div>
            </Node>
            {i < steps.length - 1 ? (
              <span className="hidden text-primary sm:block" aria-hidden>
                →
              </span>
            ) : null}
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
          <Node soft={i === 2} className="w-full min-h-[5.5rem]">
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
    <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-3 pt-2">
      {items.map((i) => (
        <Node key={i.t} className="min-h-[4.25rem]">
          <div className="text-primary">{i.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
        </Node>
      ))}
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-[oklch(0.985_0.005_75)] text-center text-[11px] font-bold text-primary ring-2 ring-primary">
        Marketing
        <br />
        mix
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
    <ChartFrame title="Product life cycle — sales vs profit">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="stage" tick={{ fontSize: 11, fill: ACCENT, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 11, fill: INK }} />
          <ReferenceLine y={0} stroke={MUTED} strokeDasharray="3 3" />
          <Line type="monotone" dataKey="sales" name="Sales" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="profit" name="Profit" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={{ r: 3 }} isAnimationActive={false} />
          <Legend />
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
      <div className="mb-1 grid grid-cols-[4.5rem_1fr_1fr] gap-1 text-[11px] text-muted-foreground">
        <div />
        <div className="text-center font-semibold">Existing market</div>
        <div className="text-center font-semibold">New market</div>
      </div>
      <div className="grid grid-cols-[4.5rem_1fr_1fr] gap-1 text-[12px]">
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
    <ChartFrame title="Break-even — North Harbor dock clocks (€90 price, €54 VC, €72k fixed)" height="h-[280px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 8, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            tick={{ fontSize: 10, fill: INK }}
            label={{ value: "Clocks sold", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }}
          />
          <YAxis tick={{ fontSize: 10, fill: INK }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
          <Line type="linear" dataKey="fixed" name="Fixed costs" stroke="#A67C52" strokeWidth={1.5} strokeDasharray="4 3" dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="total" name="Total costs" stroke={MUTED} strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="revenue" name="Revenues" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot x={bep} y={price * bep} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <Legend />
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

/** Northline opening BS — distinct from the Fuhrmann 49,000 Tina/Steve set. */
function BalanceSheet() {
  const left = [
    ["Tools and workshop benches", "18,000"],
    ["Delivery van", "14,000"],
    ["Inventory (bikes for resale)", "9,200"],
    ["Cash and bank", "4,800"],
  ];
  const right = [
    ["Owner's equity", "26,000"],
    ["Bank loan", "20,000"],
  ];
  return (
    <div className="overflow-x-auto ring-1 ring-primary/30">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-primary/40 text-primary">
            <th className="px-3 py-2 text-left font-bold">Assets</th>
            <th className="px-3 py-2 text-right font-bold">€</th>
            <th className="border-l border-primary/40 px-3 py-2 text-left font-bold">Equity and liabilities</th>
            <th className="px-3 py-2 text-right font-bold">€</th>
          </tr>
        </thead>
        <tbody>
          {left.map((row, i) => (
            <tr key={row[0]} className="border-b border-border/50">
              <td className="px-3 py-1.5">{row[0]}</td>
              <td className="px-3 py-1.5 text-right tabular-nums">{row[1]}</td>
              <td className="border-l border-primary/30 px-3 py-1.5">{right[i]?.[0] ?? ""}</td>
              <td className="px-3 py-1.5 text-right tabular-nums">{right[i]?.[1] ?? ""}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="px-3 py-2">Total assets</td>
            <td className="px-3 py-2 text-right tabular-nums">46,000</td>
            <td className="border-l border-primary/30 px-3 py-2">Total equity and liabilities</td>
            <td className="px-3 py-2 text-right tabular-nums">46,000</td>
          </tr>
        </tbody>
      </table>
      <p className="border-t border-border/60 px-3 py-2 text-center text-[11px] text-muted-foreground">
        Northline opening: assets = equity + liabilities
      </p>
    </div>
  );
}

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
  "balance-sheet": BalanceSheet,
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
