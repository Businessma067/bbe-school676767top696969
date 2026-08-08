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

/** Full SVG circular flow — solid arrow lines (no Unicode “← →” stubs). */
function CircularFlow() {
  const W = 640;
  const H = 320;
  const hh = { x: 28, y: 168, w: 118, h: 72 };
  const biz = { x: 494, y: 168, w: 118, h: 72 };
  const gov = { x: 248, y: 18, w: 144, h: 44 };
  const x1 = hh.x + hh.w + 14;
  const x2 = biz.x - 14;
  const lanes: { y: number; label: string; to: "hh" | "biz" }[] = [
    { y: 186, label: "Goods and services", to: "hh" },
    { y: 212, label: "Payments for goods and services", to: "biz" },
    { y: 238, label: "Labour and other resources", to: "biz" },
    { y: 264, label: "Wages, rent, interest and profit", to: "hh" },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Circular flow of goods, services and money">
        <defs>
          <marker id="cf-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT} />
          </marker>
          <marker id="cf-arrow-muted" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill={MUTED} />
          </marker>
        </defs>

        {/* Government */}
        <rect x={gov.x} y={gov.y} width={gov.w} height={gov.h} fill="oklch(0.97 0.02 55)" stroke={ACCENT} strokeWidth="1.25" />
        <text x={gov.x + gov.w / 2} y={gov.y + 27} textAnchor="middle" fill={ACCENT} fontSize="13" fontWeight="700">
          Government
        </text>

        {/* Households / Businesses */}
        <rect x={hh.x} y={hh.y} width={hh.w} height={hh.h} fill="oklch(0.96 0.01 75)" stroke="#C9BDB0" strokeWidth="1.25" />
        <text x={hh.x + hh.w / 2} y={hh.y + 30} textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
          Private
        </text>
        <text x={hh.x + hh.w / 2} y={hh.y + 48} textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
          households
        </text>

        <rect x={biz.x} y={biz.y} width={biz.w} height={biz.h} fill="oklch(0.96 0.01 75)" stroke="#C9BDB0" strokeWidth="1.25" />
        <text x={biz.x + biz.w / 2} y={biz.y + 40} textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
          Businesses
        </text>

        {/* Horizontal exchange arrows with labels on the line */}
        {lanes.map((lane) => {
          const from = lane.to === "hh" ? x2 : x1;
          const to = lane.to === "hh" ? x1 : x2;
          return (
            <g key={lane.label}>
              <line
                x1={from}
                y1={lane.y}
                x2={to}
                y2={lane.y}
                stroke={ACCENT}
                strokeWidth="1.6"
                markerEnd="url(#cf-arrow)"
              />
              <rect
                x={(x1 + x2) / 2 - 108}
                y={lane.y - 9}
                width="216"
                height="16"
                fill="oklch(0.985 0.005 75)"
              />
              <text
                x={(x1 + x2) / 2}
                y={lane.y + 3}
                textAnchor="middle"
                fill={INK}
                fontSize="10.5"
              >
                {lane.label}
              </text>
            </g>
          );
        })}

        {/* Taxes ↑ (outer) and public goods / transfers ↓ (inner) */}
        <line
          x1={hh.x + 28}
          y1={hh.y - 2}
          x2={hh.x + 28}
          y2={gov.y + gov.h + 18}
          stroke={MUTED}
          strokeWidth="1.4"
        />
        <line
          x1={hh.x + 28}
          y1={gov.y + gov.h + 18}
          x2={gov.x + 36}
          y2={gov.y + gov.h + 2}
          stroke={MUTED}
          strokeWidth="1.4"
          markerEnd="url(#cf-arrow-muted)"
        />
        <line
          x1={biz.x + biz.w - 28}
          y1={biz.y - 2}
          x2={biz.x + biz.w - 28}
          y2={gov.y + gov.h + 18}
          stroke={MUTED}
          strokeWidth="1.4"
        />
        <line
          x1={biz.x + biz.w - 28}
          y1={gov.y + gov.h + 18}
          x2={gov.x + gov.w - 36}
          y2={gov.y + gov.h + 2}
          stroke={MUTED}
          strokeWidth="1.4"
          markerEnd="url(#cf-arrow-muted)"
        />
        <text x={hh.x + 36} y={130} fill={MUTED} fontSize="10" fontWeight="600">
          taxes ↑
        </text>
        <text x={biz.x + biz.w - 70} y={130} fill={MUTED} fontSize="10" fontWeight="600">
          taxes ↑
        </text>

        <line
          x1={gov.x + 52}
          y1={gov.y + gov.h + 2}
          x2={hh.x + hh.w - 22}
          y2={hh.y - 4}
          stroke={ACCENT}
          strokeWidth="1.4"
          markerEnd="url(#cf-arrow)"
        />
        <line
          x1={gov.x + gov.w - 52}
          y1={gov.y + gov.h + 2}
          x2={biz.x + 22}
          y2={biz.y - 4}
          stroke={ACCENT}
          strokeWidth="1.4"
          markerEnd="url(#cf-arrow)"
        />
        <text x={168} y={96} fill={ACCENT} fontSize="9.5" fontWeight="600">
          public goods / transfers ↓
        </text>
        <text x={378} y={96} fill={ACCENT} fontSize="9.5" fontWeight="600">
          subsidies / public goods ↓
        </text>

        <text x={W / 2} y={308} textAnchor="middle" fill={MUTED} fontSize="11" fontStyle="italic">
          Real flows and monetary flows run in opposite directions
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
    { name: "Two foundations (~1/3)", value: 33 },
    { name: "Institutional (free float)", value: 34 },
    { name: "Private & other (free float)", value: 33 },
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

/** Fuhrmann Fig. 21 */
function BreakEven() {
  const data = Array.from({ length: 13 }, (_, i) => {
    const q = i * 100;
    const fixed = 130000;
    const vc = 480 * q;
    return {
      q,
      fixed,
      total: fixed + vc,
      revenue: 720 * q,
    };
  });
  return (
    <ChartFrame title="Break-even point — revenues meet total costs" height="h-[280px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 8, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            tick={{ fontSize: 10, fill: INK }}
            label={{ value: "Number of items", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }}
          />
          <YAxis tick={{ fontSize: 10, fill: INK }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
          <Line type="linear" dataKey="fixed" name="Fixed costs" stroke="#A67C52" strokeWidth={1.5} strokeDasharray="4 3" dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="total" name="Total costs" stroke={MUTED} strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="revenue" name="Revenues" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot x={542} y={720 * 542} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

/** Fuhrmann Fig. 22 — elastic demand */
function PriceElasticityElastic() {
  const data = [
    { q: 70, p: 500 },
    { q: 100, p: 400 },
    { q: 150, p: 300 },
  ];
  return (
    <ChartFrame title="Price elasticity — elastic demand (example)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[60, 160]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Quantity", position: "insideBottom", offset: -4, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[250, 550]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Price (€)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 4 }} isAnimationActive={false} />
          <ReferenceDot x={70} y={500} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <ReferenceDot x={100} y={400} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <Hint>−20% price → +43% quantity · |ε| ≈ 2.15 → elastic · revenue can rise.</Hint>
    </ChartFrame>
  );
}

/** Fuhrmann Fig. 23 — inelastic demand */
function PriceElasticityInelastic() {
  const data = [
    { q: 90, p: 60 },
    { q: 100, p: 50 },
    { q: 120, p: 40 },
  ];
  return (
    <ChartFrame title="Price elasticity — inelastic demand (example)" height="h-[240px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[80, 130]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Quantity", position: "insideBottom", offset: -4, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[30, 70]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Price (€)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 4 }} isAnimationActive={false} />
          <ReferenceDot x={90} y={60} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
          <ReferenceDot x={100} y={50} r={4} fill="#fff" stroke={ACCENT} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <Hint>−17% price → +11% quantity · |ε| ≈ 0.65 → inelastic · revenue can fall.</Hint>
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

function BalanceSheet() {
  const left = [
    ["Office equipment", "25,000"],
    ["Van", "8,000"],
    ["Inventory", "12,500"],
    ["Cash and bank", "3,500"],
  ];
  const right = [
    ["Owner's equity", "24,000"],
    ["Bank loan", "25,000"],
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
            <td className="px-3 py-2 text-right tabular-nums">49,000</td>
            <td className="border-l border-primary/30 px-3 py-2">Total equity and liabilities</td>
            <td className="px-3 py-2 text-right tabular-nums">49,000</td>
          </tr>
        </tbody>
      </table>
      <p className="border-t border-border/60 px-3 py-2 text-center text-[11px] text-muted-foreground">
        assets = equity + liabilities
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
