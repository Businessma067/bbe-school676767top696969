import type { ReactNode } from "react";
import { Line, LineChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, ReferenceDot } from "recharts";
import { cn } from "@/lib/utils";

const ACCENT = "#C45C1A";
const INK = "#1F1A17";
const MUTED = "#5C534C";
const GRID = "#E8DACB";
type Props = {
  id: string;
  caption?: string;
  className?: string;
};

function Shell({ caption, children, className }: { caption?: string; children: ReactNode; className?: string }) {
  return (
    <figure className={cn("my-5 w-full border border-border bg-white p-3 sm:p-4", className)}>
      <div className="w-full">{children}</div>
      {caption ? <figcaption className="mt-3 text-sm italic text-primary">{caption}</figcaption> : null}
    </figure>
  );
}

function Box({ children, soft = false, className }: { children: ReactNode; soft?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "border px-2 py-1.5 text-center text-[12px] font-semibold leading-tight sm:text-[13px]",
        soft ? "border-primary/40 bg-[oklch(0.97_0.02_55)] text-primary" : "border-border bg-white text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CircularFlow() {
  return (
    <div className="relative mx-auto max-w-xl py-2 text-[11px] sm:text-xs">
      <div className="mb-8 flex justify-center">
        <Box soft className="min-w-[8rem]">Government</Box>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <Box className="min-h-[3.25rem]">
          Private
          <br />
          households
        </Box>
        <div className="space-y-1.5 text-center text-[10px] text-foreground sm:text-[11px]">
          <FlowArrow label="Goods and services" dir="left" />
          <FlowArrow label="Payments for goods and services" dir="right" />
          <FlowArrow label="Labour and other resources" dir="right" />
          <FlowArrow label="Wages, rent, interest and profit" dir="left" />
        </div>
        <Box className="min-h-[3.25rem] flex items-center justify-center">Businesses</Box>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[10px] text-muted-foreground">
        <div>taxes ↑ · public goods / transfers ↓</div>
        <div>taxes ↑ · subsidies / public goods ↓</div>
      </div>
      <p className="mt-3 text-center text-[11px] italic text-muted-foreground">
        real flows and monetary flows run in opposite directions
      </p>
    </div>
  );
}

function FlowArrow({ label, dir }: { label: string; dir: "left" | "right" }) {
  return (
    <div className="flex items-center gap-1 text-primary">
      {dir === "left" ? <span aria-hidden>←</span> : <span className="opacity-0" aria-hidden>←</span>}
      <span className="flex-1 text-foreground">{label}</span>
      {dir === "right" ? <span aria-hidden>→</span> : <span className="opacity-0" aria-hidden>→</span>}
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
    <div className="h-[240px] w-full sm:h-[280px]">
      <p className="mb-1 text-sm font-bold text-primary">
        Supply <span className="font-normal text-foreground">hours of tutoring offered per week</span>
      </p>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis
            dataKey="q"
            type="number"
            domain={[0, 45]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Quantity supplied (hours)", position: "insideBottom", offset: -2, fontSize: 11 }}
          />
          <YAxis
            dataKey="p"
            type="number"
            domain={[0, 250]}
            tick={{ fontSize: 11, fill: INK }}
            label={{ value: "Price (EUR/h)", angle: -90, position: "insideLeft", fontSize: 11 }}
          />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <ReferenceDot x={12} y={80} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "A", position: "top", fill: ACCENT }} />
          <ReferenceDot x={34} y={190} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "B", position: "top", fill: ACCENT }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-[11px] italic text-muted-foreground">higher price → higher quantity supplied (ceteris paribus)</p>
    </div>
  );
}

function DemandCurve() {
  const data = [
    { q: 8, p: 239, p1: 176 },
    { q: 40, p: 162, p1: 100 },
    { q: 66, p: 100, p1: 37 },
    { q: 92, p: 37, p1: null },
  ];
  return (
    <div className="h-[240px] w-full sm:h-[280px]">
      <p className="mb-1 text-sm font-bold text-primary">
        Demand <span className="font-normal text-foreground">hours of tutoring bought per week</span>
      </p>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: INK }} />
          <YAxis dataKey="p" type="number" domain={[0, 250]} tick={{ fontSize: 11, fill: INK }} />
          <Line type="linear" dataKey="p" name="D" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="p1" name="D1" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={false} isAnimationActive={false} connectNulls={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-[11px] italic text-muted-foreground">fall in demand → whole curve shifts to D1</p>
    </div>
  );
}

function Equilibrium() {
  const data = Array.from({ length: 10 }, (_, i) => {
    const q = 8 + i * 9;
    return { q, s: 40 + 2.2 * q, d: 258 - 2.4 * q };
  });
  const qe = (258 - 40) / (2.2 + 2.4);
  const pe = 40 + 2.2 * qe;
  return (
    <div className="h-[250px] w-full sm:h-[290px]">
      <p className="mb-1 text-sm font-bold text-primary">
        Market equilibrium <span className="font-normal text-foreground">supply and demand</span>
      </p>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: INK }} />
          <YAxis type="number" domain={[0, 250]} tick={{ fontSize: 11, fill: INK }} />
          <Line type="linear" dataKey="s" name="S" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="d" name="D" stroke={INK} strokeWidth={2} dot={false} isAnimationActive={false} />
          <ReferenceDot x={qe} y={pe} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={{ value: "E", position: "right", fill: ACCENT }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-[11px] italic text-muted-foreground">above E: surplus · below E: shortage</p>
    </div>
  );
}

function EconomicSectors() {
  const cols = [
    { t: "Primary", k: "Extraction", e: "farming, fishing, mining, forestry" },
    { t: "Secondary", k: "Manufacturing", e: "cars, machinery, clothes, food processing" },
    { t: "Tertiary", k: "Services", e: "retail, banking, transport, education" },
  ];
  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-3">
        {cols.map((c, i) => (
          <div key={c.t} className="relative border border-border bg-white p-3 text-center">
            <div className="font-bold text-primary">{c.t}</div>
            <div className="mt-1 text-xs font-semibold">{c.k}</div>
            <div className="mt-2 text-[11px] text-muted-foreground">{c.e}</div>
            {i < 2 ? (
              <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-primary sm:block" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] italic text-muted-foreground">
        the more developed an economy, the larger the share of the tertiary sector
      </p>
    </div>
  );
}

function EconomicSystems() {
  const cols = [
    { t: "Market", s: "Private actors decide", b: ["Prices coordinate", "Property rights", "Limited central plan"] },
    { t: "Planned", s: "State decides", b: ["Targets & quotas", "Public ownership", "Central allocation"] },
    { t: "Mixed", s: "Shared decisions", b: ["Markets + rules", "Public goods", "Regulation & tax"] },
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {cols.map((c, i) => (
        <div key={c.t} className={cn("border border-border p-3", i === 2 ? "bg-[oklch(0.97_0.02_55)]" : "bg-white")}>
          <div className="text-center font-bold text-primary">{c.t}</div>
          <div className="mt-1 text-center text-xs text-muted-foreground">{c.s}</div>
          <ul className="mt-3 space-y-1 text-[12px]">
            {c.b.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function OwnershipOverview() {
  return (
    <div className="space-y-3 text-[12px]">
      <Box soft className="mx-auto max-w-md">Forms of business ownership</Box>
      <div className="grid gap-2 sm:grid-cols-2">
        <Box>
          Unincorporated
          <div className="mt-1 font-normal text-muted-foreground">no separate legal person; owner = manager</div>
        </Box>
        <Box>
          Incorporated
          <div className="mt-1 font-normal text-muted-foreground">separate legal person; limited liability</div>
        </Box>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <Box>
          Sole trader
          <div className="mt-1 font-normal text-muted-foreground">one owner</div>
        </Box>
        <Box>
          Partnership
          <div className="mt-1 font-normal text-muted-foreground">two or more owners</div>
        </Box>
        <Box>
          Corporation / LLC
          <div className="mt-1 font-normal text-muted-foreground">shareholders</div>
        </Box>
      </div>
    </div>
  );
}

function StakeholderMap() {
  const around = ["Owners / shareholders", "Employees", "Customers", "Suppliers", "Lenders / banks", "Government", "Local community"];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-3 flex justify-center">
        <Box soft className="min-w-[7rem]">
          The firm
          <div className="font-normal text-muted-foreground">(business)</div>
        </Box>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {around.map((g) => (
          <Box key={g} className="min-h-[2.75rem] font-semibold">
            {g}
          </Box>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] italic text-muted-foreground">
        stakeholders can support or constrain the firm — interests may conflict
      </p>
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
    <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-3">
      {items.map((i) => (
        <Box key={i.t} className="min-h-[4rem]">
          <div className="text-primary">{i.t}</div>
          <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
        </Box>
      ))}
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border-2 border-primary bg-[oklch(0.97_0.02_55)] text-center text-[11px] font-bold text-primary">
        Marketing
        <br />
        mix
        <span className="mt-0.5 font-normal text-muted-foreground">four Ps</span>
      </div>
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
    <div className="h-[240px] w-full sm:h-[280px]">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="stage" tick={{ fontSize: 11, fill: ACCENT, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 11, fill: INK }} />
          <Line type="monotone" dataKey="sales" name="Sales" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="profit" name="Profit" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={{ r: 3 }} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-[11px] italic text-muted-foreground">losses in introduction; profit often peaks before sales</p>
    </div>
  );
}

function BcgMatrix() {
  const cells = [
    { t: "Stars", c: "high growth, high share", a: "invest to defend the position" },
    { t: "Question marks", c: "high growth, low share", a: "invest selectively or drop" },
    { t: "Cash cows", c: "low growth, high share", a: "harvest cash for the stars" },
    { t: "Poor dogs", c: "low growth, low share", a: "withdraw or reposition" },
  ];
  return (
    <div>
      <div className="mb-1 text-center text-xs font-semibold text-muted-foreground">Market growth ↑</div>
      <div className="grid grid-cols-2 border border-border">
        {cells.map((cell, i) => (
          <div
            key={cell.t}
            className={cn(
              "min-h-[5.5rem] border-border p-3 text-center",
              i % 2 === 1 ? "border-l" : "",
              i >= 2 ? "border-t" : "",
              i % 3 === 0 || i === 3 ? "bg-[oklch(0.98_0.01_55)]" : "bg-white",
            )}
          >
            <div className="font-bold text-primary">{cell.t}</div>
            <div className="mt-1 text-[11px]">{cell.c}</div>
            <div className="mt-1 text-[11px] italic text-muted-foreground">{cell.a}</div>
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

function FinancialStatements() {
  const items = [
    { t: "Balance sheet", s: "what the business owns and how it is financed" },
    { t: "Income statement", s: "revenues minus expenses over a period" },
    { t: "Cash flow statement", s: "money actually received and paid out" },
  ];
  return (
    <div className="space-y-3">
      <Box soft className="mx-auto max-w-sm">Financial statements</Box>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map((i) => (
          <Box key={i.t}>
            <div className="text-primary">{i.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
          </Box>
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
    <div className="overflow-x-auto border border-primary">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-primary text-primary">
            <th className="px-3 py-2 text-left font-bold">Assets</th>
            <th className="px-3 py-2 text-right font-bold">€</th>
            <th className="border-l border-primary px-3 py-2 text-left font-bold">Equity and liabilities</th>
            <th className="px-3 py-2 text-right font-bold">€</th>
          </tr>
        </thead>
        <tbody>
          {left.map((row, i) => (
            <tr key={row[0]}>
              <td className="px-3 py-1.5">{row[0]}</td>
              <td className="px-3 py-1.5 text-right tabular-nums">{row[1]}</td>
              <td className="border-l border-primary px-3 py-1.5">{right[i]?.[0] ?? ""}</td>
              <td className="px-3 py-1.5 text-right tabular-nums">{right[i]?.[1] ?? ""}</td>
            </tr>
          ))}
          <tr className="border-t border-dashed border-primary/50 font-bold">
            <td className="px-3 py-2">Total assets</td>
            <td className="px-3 py-2 text-right tabular-nums">49,000</td>
            <td className="border-l border-primary px-3 py-2">Total equity and liabilities</td>
            <td className="px-3 py-2 text-right tabular-nums">49,000</td>
          </tr>
        </tbody>
      </table>
      <p className="border-t border-border px-3 py-2 text-center text-[11px] italic text-muted-foreground">
        assets = equity + liabilities (both sides always balance)
      </p>
    </div>
  );
}

function FinanceSources() {
  const equity = ["Owner's capital / shares", "Retained profits", "New share issues", "No fixed repayment duty", "Dilutes control if sold"];
  const debt = ["Bank loans & overdrafts", "Trade credit", "Bonds / leases", "Interest + contractual repayment", "Does not sell ownership"];
  return (
    <div>
      <div className="mb-2 text-center text-sm font-bold text-primary">Sources of finance</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="border border-border bg-[oklch(0.97_0.02_55)] p-3">
          <div className="text-center font-bold text-primary">Equity</div>
          <div className="mb-2 text-center text-xs text-muted-foreground">ownership capital</div>
          <ul className="space-y-1 text-[12px]">
            {equity.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border bg-white p-3">
          <div className="text-center font-bold text-primary">Debt</div>
          <div className="mb-2 text-center text-xs text-muted-foreground">borrowed capital</div>
          <ul className="space-y-1 text-[12px]">
            {debt.map((x) => (
              <li key={x}>– {x}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] italic text-muted-foreground">
        choose by cost, risk, control, and how long the money is needed
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
  "marketing-mix": MarketingMix,
  "product-life-cycle": ProductLifeCycle,
  "bcg-matrix": BcgMatrix,
  "financial-statements": FinancialStatements,
  "balance-sheet": BalanceSheet,
  "finance-sources": FinanceSources,
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
