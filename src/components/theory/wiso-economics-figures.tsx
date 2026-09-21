"use client";

import type { ReactNode, SVGProps } from "react";
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
  Legend,
  Tooltip,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";

const ACCENT = "#C45C1A";
const INK = "#1F1A17";
const MUTED = "#5C534C";
const GRID = "#D9CFC3";
const FILL = "rgba(196, 92, 26, 0.28)";
const FILL_SOFT = "rgba(196, 92, 26, 0.14)";
/** Light stroke for real-flow lines — readable on dark page backgrounds. */
const STROKE_SOFT = "#A89B90";

type SvgTextProps = SVGProps<SVGTextElement> & {
  muted?: boolean;
  accent?: boolean;
};

/** Theme-aware SVG text (foreground / muted) so labels stay readable in dark mode. */
function SvgText({ children, muted, accent, className, ...props }: SvgTextProps) {
  return (
    <text
      className={cn(
        accent ? "fill-primary" : muted ? "fill-muted-foreground" : "fill-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </text>
  );
}

function Node({ children, soft = false, className }: { children: ReactNode; soft?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "px-3 py-2 text-center text-[12px] font-semibold leading-snug sm:text-[13px]",
        soft ? "bg-primary/10 text-primary ring-1 ring-primary/25" : "bg-secondary/40 text-foreground ring-1 ring-border/70",
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

const LEGEND_TOP = { verticalAlign: "top" as const, align: "center" as const, height: 28, iconType: "line" as const, wrapperStyle: { paddingBottom: 4, fontSize: 12 } };

function ChartHaloLabel({ x = 0, y = 0, value, fill = ACCENT, dx = 0, dy = -16, fontSize = 11 }: { x?: number; y?: number; value?: string | number; fill?: string; dx?: number; dy?: number; fontSize?: number }) {
  const text = String(value ?? "");
  if (!text) return null;
  const width = Math.max(36, text.length * 6.8 + 10);
  const height = fontSize + 6;
  return (
    <g transform={`translate(${x + dx}, ${y + dy})`} pointerEvents="none">
      <rect x={-width / 2} y={-height + 4} width={width} height={height} rx={3} fill="#fff" fillOpacity={0.94} />
      <text textAnchor="middle" fill={fill} fontSize={fontSize} fontWeight={600} dominantBaseline="alphabetic">{text}</text>
    </g>
  );
}

function haloDotLabel(text: string, opts: { dx?: number; dy?: number; fill?: string; fontSize?: number } = {}) {
  return (props: { viewBox?: { x?: number; y?: number; width?: number; height?: number } }) => {
    const vb = props.viewBox;
    if (!vb || vb.x == null || vb.y == null) return null;
    return <ChartHaloLabel x={vb.x + (vb.width ?? 0) / 2} y={vb.y + (vb.height ?? 0) / 2} value={text} fill={opts.fill ?? ACCENT} dx={opts.dx ?? 0} dy={opts.dy ?? -16} fontSize={opts.fontSize} />;
  };
}

function GridBoxes({ title, items, cols = 2 }: { title?: string; items: { t: string; s: string; soft?: boolean }[]; cols?: 2 | 3 | 4 }) {
  return (
    <div>
      {title ? <div className="mb-3 text-center text-sm font-bold text-primary">{title}</div> : null}
      <div className={cn("grid gap-2", cols === 3 ? "sm:grid-cols-3" : cols === 4 ? "sm:grid-cols-4" : "sm:grid-cols-2")}>
        {items.map((i) => (
          <Node key={i.t} soft={i.soft} className="min-h-[3.5rem]">
            <div className="text-primary">{i.t}</div>
            <div className="mt-1 font-normal text-muted-foreground">{i.s}</div>
          </Node>
        ))}
      </div>
    </div>
  );
}

function FlowSteps({ steps, softLast }: { steps: { t: string; s?: string }[]; softLast?: boolean }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row sm:items-stretch">
      {steps.map((s, i) => (
        <div key={s.t} className="flex flex-1 items-center gap-2">
          <Node soft={softLast && i === steps.length - 1} className="w-full min-h-[4rem]">
            <div className="text-primary">{s.t}</div>
            {s.s ? <div className="mt-1 font-normal text-muted-foreground">{s.s}</div> : null}
          </Node>
          {i < steps.length - 1 ? <span className="hidden shrink-0 font-bold text-primary sm:inline" aria-hidden>→</span> : null}
        </div>
      ))}
    </div>
  );
}

const SUPPLY_DATA = [
  { q: 5, p: 1.9 }, { q: 15, p: 2.7 }, { q: 25, p: 3.5 }, { q: 35, p: 4.3 },
];
const DEMAND_DATA = [
  { q: 5, p: 5.1 }, { q: 15, p: 4.3 }, { q: 25, p: 3.5 }, { q: 35, p: 2.7 },
];
const EQ_DATA = SUPPLY_DATA.map((s, i) => ({ q: s.q, s: s.p, d: DEMAND_DATA[i]!.p }));

function WisoSupplyChain() {
  const nodes = ["China\n(Rahmen)", "Taiwan\n(Schaltungen)", "Vietnam\n(Reifen)", "Italien\n(Komponenten)", "Montage\n(EU)", "Verbraucher"];
  return (
    <div className="mx-auto w-full max-w-3xl" role="img" aria-label="Internationale Arbeitsteilung am Beispiel Fahrrad">
      <svg viewBox="0 0 760 120" className="h-auto w-full">
        <defs>
          <marker id="wsc-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={ACCENT} />
          </marker>
        </defs>
        {nodes.map((n, i) => {
          const x = 10 + i * 125;
          return (
            <g key={i}>
              {i > 0 ? <line x1={x - 18} y1={55} x2={x - 2} y2={55} stroke={ACCENT} strokeWidth="2" markerEnd="url(#wsc-a)" /> : null}
              <rect x={x} y={28} width={108} height={54} rx={3} fill="oklch(0.95 0.012 75)" stroke={i >= 4 ? ACCENT : "#B8A99A"} strokeWidth="2" />
              {n.split("\n").map((line, j) => (
                <text key={j} x={x + 54} y={48 + j * 16} textAnchor="middle" fill={i >= 4 ? ACCENT : INK} fontSize="11" fontWeight={j === 0 ? 700 : 500}>{line}</text>
              ))}
            </g>
          );
        })}
        <SvgText x={380} y={108} textAnchor="middle" muted fontSize="11">
          Güterströme · internationale Wertschöpfungskette (schematisch)
        </SvgText>
      </svg>
      <Hint>Jedes Land spezialisiert sich — Montage und Vertrieb schließen die Kette ab.</Hint>
    </div>
  );
}

function WisoCircularFlow() {
  const W = 800;
  const H = 520;
  const gov = { x: 290, y: 16, w: 220, h: 64 };
  const hh = { x: 24, y: 300, w: 168, h: 120 };
  const biz = { x: 608, y: 300, w: 168, h: 120 };
  const xL = hh.x + hh.w;
  const xR = biz.x;
  const mid = (xL + xR) / 2;
  // Lanes sit strictly between the side boxes (never across their faces).
  const lanes: { y: number; label: string; toBiz: boolean; money: boolean }[] = [
    { y: 318, label: "Güter & Dienstleistungen", toBiz: false, money: false },
    { y: 348, label: "Zahlungen für Güter & DL", toBiz: true, money: true },
    { y: 378, label: "Arbeit, Kapital, Rohstoffe", toBiz: true, money: false },
    { y: 408, label: "Löhne, Miete, Zinsen, Gewinn", toBiz: false, money: true },
  ];
  const softStroke = STROKE_SOFT;

  return (
    <div className="mx-auto w-full max-w-3xl" role="img" aria-label="Wirtschaftskreislauf">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
        <defs>
          <marker id="wcf-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={ACCENT} />
          </marker>
          <marker id="wcf-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={softStroke} />
          </marker>
        </defs>

        {/* Draw flows first so boxes sit on top and never get covered */}
        <polyline
          points={`70,${hh.y} 70,44 ${gov.x},44`}
          fill="none"
          stroke={softStroke}
          strokeWidth="2.25"
          markerEnd="url(#wcf-m)"
        />
        <polyline
          points={`${gov.x},64 140,64 140,${hh.y}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.25"
          markerEnd="url(#wcf-a)"
        />
        <polyline
          points={`730,${biz.y} 730,44 ${gov.x + gov.w},44`}
          fill="none"
          stroke={softStroke}
          strokeWidth="2.25"
          markerEnd="url(#wcf-m)"
        />
        <polyline
          points={`${gov.x + gov.w},64 660,64 660,${biz.y}`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.25"
          markerEnd="url(#wcf-a)"
        />

        <SvgText x={62} y={168} textAnchor="end" fontSize="12" fontWeight={700}>
          Steuern
        </SvgText>
        <SvgText x={148} y={168} textAnchor="start" accent fontSize="12" fontWeight={700}>
          Transferleistungen
        </SvgText>
        <SvgText x={738} y={168} textAnchor="start" fontSize="12" fontWeight={700}>
          Steuern
        </SvgText>
        <SvgText x={652} y={168} textAnchor="end" accent fontSize="12" fontWeight={600}>
          Subventionen / öff. Güter
        </SvgText>

        {lanes.map((lane) => {
          const from = lane.toBiz ? xL + 4 : xR - 4;
          const to = lane.toBiz ? xR - 4 : xL + 4;
          return (
            <g key={lane.label}>
              <line
                x1={from}
                y1={lane.y}
                x2={to}
                y2={lane.y}
                stroke={lane.money ? ACCENT : softStroke}
                strokeWidth="2.25"
                markerEnd={lane.money ? "url(#wcf-a)" : "url(#wcf-m)"}
              />
              <SvgText x={mid} y={lane.y - 8} textAnchor="middle" fontSize="12" fontWeight={600}>
                {lane.label}
              </SvgText>
            </g>
          );
        })}

        {/* Boxes last — cover any arrow tips */}
        <rect x={gov.x} y={gov.y} width={gov.w} height={gov.h} fill="oklch(0.96 0.025 55)" stroke={ACCENT} strokeWidth="2" />
        <text x={gov.x + gov.w / 2} y={gov.y + 41} textAnchor="middle" fill={ACCENT} fontSize="19" fontWeight="700">
          Staat
        </text>
        <rect x={hh.x} y={hh.y} width={hh.w} height={hh.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2" />
        <text x={hh.x + hh.w / 2} y={hh.y + 68} textAnchor="middle" fill={INK} fontSize="17" fontWeight="700">
          Haushalte
        </text>
        <rect x={biz.x} y={biz.y} width={biz.w} height={biz.h} fill="oklch(0.95 0.012 75)" stroke="#B8A99A" strokeWidth="2" />
        <text x={biz.x + biz.w / 2} y={biz.y + 68} textAnchor="middle" fill={INK} fontSize="17" fontWeight="700">
          Unternehmen
        </text>

        <line x1={250} y1={468} x2={282} y2={468} stroke={softStroke} strokeWidth="2.25" />
        <SvgText x={290} y={472} fontSize="12">
          Realströme
        </SvgText>
        <line x1={420} y1={468} x2={452} y2={468} stroke={ACCENT} strokeWidth="2.25" />
        <SvgText x={460} y={472} fontSize="12">
          Geldströme
        </SvgText>
        <SvgText x={W / 2} y={500} textAnchor="middle" muted fontSize="12" fontStyle="italic">
          Real- und Geldströme verlaufen entgegengesetzt.
        </SvgText>
      </svg>
    </div>
  );
}

function mkPriceChart(title: string, dataKey: string, extra?: ReactNode) {
  return (
    <ChartFrame title={title}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={SUPPLY_DATA} margin={{ top: 12, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 40]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Menge (Tonnen)", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[0, 6]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Preis (€/kg)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey={dataKey === "p" ? "p" : dataKey} stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
          {extra}
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function WisoSupply() {
  return mkPriceChart("Angebotskurve", "p", <ReferenceDot x={25} y={3.5} r={5} fill="#fff" stroke={ACCENT} strokeWidth={2} label={haloDotLabel("A")} />);
}

function WisoDemand() {
  return (
    <ChartFrame title="Nachfragekurve">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={DEMAND_DATA} margin={{ top: 12, right: 16, left: 4, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="q" type="number" domain={[0, 40]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Menge (Tonnen)", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }} />
          <YAxis dataKey="p" type="number" domain={[0, 6]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Preis (€/kg)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
          <Line type="linear" dataKey="p" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function WisoEquilibrium() {
  return (
    <>
      <ChartFrame title="Marktgleichgewicht" height="h-[280px] sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={EQ_DATA} margin={{ top: 8, right: 16, left: 8, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="q" type="number" domain={[0, 40]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Menge (Tonnen)", position: "insideBottom", offset: -6, fontSize: 11, fill: MUTED }} />
            <YAxis type="number" domain={[0, 6]} tick={{ fontSize: 11, fill: INK }} label={{ value: "Preis (€/kg)", angle: -90, position: "insideLeft", fontSize: 11, fill: MUTED }} />
            <Line type="linear" dataKey="s" name="Angebot" stroke={ACCENT} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <Line type="linear" dataKey="d" name="Nachfrage" stroke={MUTED} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            <ReferenceDot x={25} y={3.5} r={6} fill="#fff" stroke={ACCENT} strokeWidth={2} label={haloDotLabel("E")} />
            <Legend {...LEGEND_TOP} />
          </LineChart>
        </ResponsiveContainer>
      </ChartFrame>
      <Hint>Bei P &gt; 3,50 € entsteht Überschuss (Angebot &gt; Nachfrage); bei P &lt; 3,50 € Fehlmenge.</Hint>
    </>
  );
}

function WisoMarketForms() {
  return (
    <GridBoxes
      title="Marktformen"
      items={[
        { t: "Monopol", s: "Ein Anbieter, viele Nachfrager — hohe Marktmacht" },
        { t: "Oligopol", s: "Wenige große Anbieter — gegenseitige Abhängigkeit" },
        { t: "Polypol", s: "Viele Anbieter & Nachfrager — Preis als Datengröße" },
        { t: "Monopson", s: "Ein Nachfrager, viele Anbieter — Käufermacht" },
      ]}
    />
  );
}

function WisoMoneyFunctions() {
  return (
    <>
      <GridBoxes cols={3} items={[
        { t: "Tauschmittel", s: "Vereinfacht Tauschhandel", soft: true },
        { t: "Wertmesser", s: "Vergleichbarkeit von Preisen" },
        { t: "Wertaufbewahrung", s: "Kaufkraft über die Zeit" },
      ]} />
      <Hint>Geld erfüllt diese drei Funktionen gleichzeitig — Stabilität ist entscheidend.</Hint>
    </>
  );
}

function WisoCashBookMoney() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="bg-secondary/40 px-3 py-3 ring-1 ring-border/70">
        <div className="text-center font-bold text-primary">Bargeld</div>
        <ul className="mt-2 space-y-1 text-[12px]"><li>– Münzen &amp; Banknoten</li><li>– Zentralbankgeld</li><li>– Anonym, physisch</li></ul>
      </div>
      <div className="bg-primary/10 px-3 py-3 ring-1 ring-primary/20">
        <div className="text-center font-bold text-primary">Buchgeld</div>
        <ul className="mt-2 space-y-1 text-[12px]"><li>– Giro- &amp; Sparkonten</li><li>– Giralgeld der Banken</li><li>– Überweisungen, Kartenzahlung</li></ul>
      </div>
      <Hint>Heute dominiert Buchgeld den Zahlungsverkehr.</Hint>
    </div>
  );
}

function WisoInterestReasons() {
  return <GridBoxes cols={3} items={[
    { t: "Dubiosenrisiko", s: "Ausfall- & Bonitätsrisiko des Kreditnehmers" },
    { t: "Konsumverzicht", s: "Opportunitätskosten der Kapitalüberlassung" },
    { t: "Geldwertrisiko", s: "Inflation mindert reale Rückzahlung" },
  ]} />;
}

function WisoFixedVariableRates() {
  const data = [{ j: "J1", fix: 3.2, var: 2.8 }, { j: "J2", fix: 3.2, var: 3.5 }, { j: "J3", fix: 3.2, var: 4.1 }, { j: "J4", fix: 3.2, var: 4.8 }, { j: "J5", fix: 3.2, var: 3.9 }];
  return (
    <ChartFrame title="Fixe vs. variable Zinsen (illustrativ)">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="j" tick={{ fontSize: 11, fill: INK }} />
          <YAxis domain={[2, 5.5]} tick={{ fontSize: 11, fill: INK }} unit=" %" />
          <Line type="monotone" dataKey="fix" name="Fixe Zinsen" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="var" name="Variable Zinsen" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={{ r: 3 }} isAnimationActive={false} />
          <Legend {...LEGEND_TOP} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function WisoNominalEffective() {
  const data = [{ name: "Nominalzins", v: 5, fill: MUTED }, { name: "Gebühren", v: 0.8, fill: "#A67C52" }, { name: "Effektivzins", v: 5.8, fill: ACCENT }];
  return (
    <>
      <ChartFrame title="Nominal- vs. Effektivzins" height="h-[220px] sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: INK }} />
            <YAxis tick={{ fontSize: 11, fill: INK }} unit=" %" domain={[0, 7]} />
            <Bar dataKey="v" radius={[3, 3, 0, 0]}>{data.map((d) => <Cell key={d.name} fill={d.fill} />)}</Bar>
            <Tooltip formatter={(v) => [`${v} %`, ""]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartFrame>
      <Hint>Effektivzins = Nominalzins + laufende Kosten (Gebühren, Provisionen).</Hint>
    </>
  );
}

function WisoInflationCauses() {
  return (
    <>
      <GridBoxes cols={3} items={[
        { t: "Geldmengenwachstum", s: "Zu viel Geld jagt zu wenige Güter" },
        { t: "Nachfragesog", s: "Überhitzte Konjunktur, hohe Ausgaben" },
        { t: "Kostendruck", s: "Teurere Inputs → höhere Preise" },
      ]} />
      <Hint>Lohn-Preis-Spirale: steigende Löhne → höhere Kosten → erneute Preiserhöhungen.</Hint>
    </>
  );
}

function WisoEconomyEmbedded() {
  return (
    <div className="mx-auto max-w-md" role="img" aria-label="Wirtschaft embedded in Gesellschaft und Erdsystem">
      <svg viewBox="0 0 340 360" className="mx-auto h-auto w-full max-w-sm">
        <defs>
          <marker id="web-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={ACCENT} />
          </marker>
          <marker id="web-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE_SOFT} />
          </marker>
        </defs>

        {/* Outer ring — Erdsystem */}
        <circle cx={170} cy={175} r={140} fill="none" stroke={STROKE_SOFT} strokeWidth="2.5" />
        {/* Label left of center so the Ressourcen arrow does not cover it */}
        <SvgText x={54} y={52} textAnchor="start" fontSize="13" fontWeight={700}>
          Erdsystem
        </SvgText>

        {/* Middle — Gesellschaft (lighter fill for contrast) */}
        <circle cx={170} cy={180} r={100} fill="oklch(0.92 0.02 55)" stroke={STROKE_SOFT} strokeWidth="1.5" />
        <text x={170} y={98} textAnchor="middle" fill={INK} fontSize="13" fontWeight="700">
          Gesellschaft
        </text>

        {/* Inner — Wirtschaft */}
        <circle cx={170} cy={190} r={62} fill="oklch(0.88 0.04 55)" stroke={ACCENT} strokeWidth="2.5" />
        <text x={170} y={182} textAnchor="middle" fill={ACCENT} fontSize="13" fontWeight="700">
          Wirtschaft
        </text>
        <text x={170} y={200} textAnchor="middle" fill={INK} fontSize="9.5" fontWeight="600">
          Haushalte · Unternehmen
        </text>
        <text x={170} y={214} textAnchor="middle" fill={INK} fontSize="9.5" fontWeight="600">
          öffentlicher Sektor
        </text>

        {/* Ressourcen — arrow on the right, clear of Erdsystem label */}
        <line x1={248} y1={28} x2={210} y2={110} stroke={ACCENT} strokeWidth="2.25" markerEnd="url(#web-a)" />
        <SvgText x={262} y={34} textAnchor="start" accent fontSize="11" fontWeight={700}>
          Ressourcen ↓
        </SvgText>

        {/* Abfall — arrow on the left bottom */}
        <line x1={130} y1={250} x2={92} y2={330} stroke={STROKE_SOFT} strokeWidth="2.25" markerEnd="url(#web-m)" />
        <SvgText x={78} y={348} textAnchor="middle" fontSize="11" fontWeight={700}>
          Abfall ↑
        </SvgText>
      </svg>
      <Hint>Ökonomie ist ein Teilsystem — Ressourcen und Abfall verbinden Wirtschaft mit Natur.</Hint>
    </div>
  );
}

function WisoDecoupling() {
  const rel = [{ y: 0, b: 10, c: 12 }, { y: 1, b: 20, c: 22 }, { y: 2, b: 30, c: 28 }, { y: 3, b: 40, c: 32 }];
  const abs = [{ y: 0, b: 10, c: 12 }, { y: 1, b: 20, c: 18 }, { y: 2, b: 30, c: 20 }, { y: 3, b: 40, c: 16 }];
  const panel = (title: string, data: typeof rel, hint: string) => (
    <div className="flex-1">
      <div className="mb-1 text-center text-[12px] font-bold text-primary">{title}</div>
      <div className="h-[140px] sm:h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="y" tick={{ fontSize: 10, fill: INK }} tickFormatter={(v) => `J${v + 1}`} />
            <YAxis tick={{ fontSize: 10, fill: INK }} hide />
            <Line type="monotone" dataKey="b" name="BIP" stroke={ACCENT} strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="c" name="CO₂" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-1 text-center text-[10px] text-muted-foreground">{hint}</p>
    </div>
  );
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {panel("Relative Entkopplung", rel, "BIP ↑ schneller als CO₂")}
      {panel("Absolute Entkopplung", abs, "BIP ↑, CO₂ ↓")}
    </div>
  );
}

function WisoNetZero() {
  const regions = [
    { r: "EU", y: 2050, w: 85 },
    { r: "USA", y: 2050, w: 85 },
    { r: "China", y: 2060, w: 95 },
    { r: "Indien", y: 2070, w: 105 },
  ];
  return (
    <>
      <svg viewBox="0 0 400 140" className="mx-auto h-auto w-full max-w-lg">
        <line x1={40} y1={100} x2={380} y2={100} stroke={GRID} strokeWidth="2" />
        {[2040, 2050, 2060, 2070].map((yr, i) => (
          <g key={yr}>
            <line x1={80 + i * 80} y1={95} x2={80 + i * 80} y2={105} stroke={STROKE_SOFT} />
            <SvgText x={80 + i * 80} y={118} textAnchor="middle" muted fontSize="10">
              {yr}
            </SvgText>
          </g>
        ))}
        {regions.map((reg, i) => (
          <g key={reg.r}>
            <SvgText x={36} y={28 + i * 22} textAnchor="end" fontSize="11" fontWeight={600}>
              {reg.r}
            </SvgText>
            <rect x={80} y={18 + i * 22} width={reg.w} height={14} rx={2} fill={i === 0 ? ACCENT : FILL_SOFT} stroke={ACCENT} strokeWidth="1" />
            <text x={80 + reg.w + 6} y={29 + i * 22} fill={ACCENT} fontSize="10" fontWeight="600">
              {reg.y}
            </text>
          </g>
        ))}
        <SvgText x={200} y={135} textAnchor="middle" muted fontSize="10">
          Net-Zero-Zieljahre (illustrativ)
        </SvgText>
      </svg>
      <Hint>Regionen setzen unterschiedliche Klimaziele — EU tendenziell früher.</Hint>
    </>
  );
}

function WisoPlanetaryBoundaries() {
  // Planetary Health Check 2025 / Rockström et al.: 7 of 9 boundaries exceeded.
  // Safe (schematic): Aerosole. (Stratosphärisches Ozon is regenerating; not listed separately here.)
  const bounds = ["Klimawandel", "Biodiversität", "Stickstoff", "Phosphor", "Ozeane", "Land", "Süßwasser", "Aerosole", "Chemie"];
  const over = [0, 1, 2, 3, 4, 5, 6, 8];
  return (
    <div className="mx-auto max-w-md">
      <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
        <circle cx={150} cy={150} r={110} fill="none" stroke={GRID} strokeWidth="1.5" />
        {bounds.map((b, i) => {
          const a = (i / bounds.length) * Math.PI * 2 - Math.PI / 2;
          const x = 150 + Math.cos(a) * 92;
          const y = 150 + Math.sin(a) * 92;
          const ox = 150 + Math.cos(a) * 66;
          const oy = 150 + Math.sin(a) * 66;
          const lx = 150 + Math.cos(a) * 128;
          const ly = 150 + Math.sin(a) * 128;
          const crossed = over.includes(i);
          return (
            <g key={b}>
              <line x1={150} y1={150} x2={x} y2={y} stroke={GRID} strokeWidth="1" />
              <circle cx={ox} cy={oy} r={crossed ? 10 : 7} fill={crossed ? ACCENT : FILL_SOFT} stroke={crossed ? ACCENT : STROKE_SOFT} strokeWidth="1.5" />
              <SvgText
                x={lx}
                y={ly + 3}
                textAnchor="middle"
                accent={crossed}
                fontSize="9"
                fontWeight={crossed ? 700 : 500}
              >
                {b}
              </SvgText>
            </g>
          );
        })}
        <SvgText x={150} y={154} textAnchor="middle" muted fontSize="10" fontWeight={700}>
          Planetare Grenzen
        </SvgText>
      </svg>
      <Hint>Orange: überschritten (7 von 9). Aerosole hier im sicheren Aggregat — regional kritisch.</Hint>
    </div>
  );
}

function WisoDoughnut() {
  return (
    <div className="mx-auto max-w-sm" role="img" aria-label="Donut-Ökonomie">
      <svg viewBox="0 0 280 280" className="mx-auto h-auto w-full">
        <circle cx={140} cy={140} r={118} fill="none" stroke={ACCENT} strokeWidth="20" strokeOpacity={0.4} />
        <circle cx={140} cy={140} r={82} fill="none" stroke={STROKE_SOFT} strokeWidth="20" strokeOpacity={0.55} />
        <circle cx={140} cy={140} r={100} fill="oklch(0.93 0.03 55)" stroke="none" />
        <text x={140} y={118} textAnchor="middle" fill={ACCENT} fontSize="11" fontWeight="700">
          Ökologische Obergrenze
        </text>
        <text x={140} y={140} textAnchor="middle" fill={INK} fontSize="11" fontWeight="700">
          Sicherer Raum
        </text>
        <text x={140} y={160} textAnchor="middle" fill={INK} fontSize="11" fontWeight="700">
          Soziales Fundament
        </text>
      </svg>
      <Hint>Zwischen sozialem Minimum und ökologischem Maximum liegt der tragfähige Wohlstand.</Hint>
    </div>
  );
}

function WisoLegalForms() {
  return (
    <div className="mx-auto max-w-xl text-[12px]">
      <Node soft className="mx-auto max-w-sm">Österreichische Rechtsformen</Node>
      <div className="mx-auto my-2 h-4 w-px bg-border" />
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <Node>Einzelunternehmen<div className="mt-1 font-normal text-muted-foreground">eine Person, volle Haftung</div></Node>
          <div className="mx-auto my-2 h-4 w-px bg-border" />
          <Node>Personengesellschaften<div className="mt-1 font-normal text-muted-foreground">OG · KG — Partner haften</div></Node>
        </div>
        <div>
          <Node>Kapitalgesellschaften<div className="mt-1 font-normal text-muted-foreground">GmbH · AG — beschr. Haftung</div></Node>
          <div className="mx-auto my-2 h-4 w-px bg-border" />
          <Node>Genossenschaft<div className="mt-1 font-normal text-muted-foreground">Mitglieder demokratisch</div></Node>
        </div>
      </div>
    </div>
  );
}

function WisoExternalFinance() {
  return (
    <>
      <div className="mb-3 text-center text-sm font-bold text-primary">Außenfinanzierung</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="bg-primary/10 px-3 py-3 ring-1 ring-primary/20">
          <div className="text-center font-bold text-primary">Eigenkapital</div>
          <ul className="mt-2 space-y-1 text-[12px]"><li>– Einlagen der Eigentümer</li><li>– Gewinnrücklagen</li><li>– Beteiligung / Aktien</li></ul>
        </div>
        <div className="bg-secondary/40 px-3 py-3 ring-1 ring-border/70">
          <div className="text-center font-bold text-primary">Fremdkapital</div>
          <ul className="mt-2 space-y-1 text-[12px]"><li>– Bankkredite</li><li>– Anleihen</li><li>– Lieferantenkredit</li></ul>
        </div>
      </div>
      <Hint>Eigenkapital = kein Rückzahlungszwang; Fremdkapital = Zins + Tilgung.</Hint>
    </>
  );
}

function WisoMarketQuestions() {
  return (
    <GridBoxes title="Marktorientierte Fragen" items={[
      { t: "Wer?", s: "Zielgruppe & Kunden" }, { t: "Was?", s: "Bedürfnisse & Nutzen" },
      { t: "Wie?", s: "Produkt, Preis, Vertrieb" }, { t: "Wann?", s: "Timing & Marktphase" },
      { t: "Wo?", s: "Region & Kanal" }, { t: "Warum?", s: "Kaufmotiv & Mehrwert" },
    ]} />
  );
}

function WisoMarketingConcept() {
  return (
    <>
      <FlowSteps steps={[
        { t: "Marktforschung", s: "Bedürfnisse erkennen" },
        { t: "Segmentierung", s: "Zielgruppen bilden" },
        { t: "Marketing-Mix", s: "4 P umsetzen" },
        { t: "Controlling", s: "Erfolg messen" },
      ]} softLast />
      <Hint>Das Marketingkonzept verbindet Analyse, Strategie und Umsetzung.</Hint>
    </>
  );
}

function WisoMarketMetrics() {
  return <GridBoxes title="Marktkennzahlen" items={[
    { t: "Marktvolumen", s: "Gesamtumsatz aller Anbieter" },
    { t: "Marktanteil", s: "Eigener Umsatz ÷ Marktvolumen" },
    { t: "Marktwachstum", s: "Veränderung des Marktvolumens (%)" },
  ]} cols={3} />;
}

function WisoTargetGroups() {
  return (
    <div className="mx-auto max-w-lg">
      <Node soft className="mx-auto mb-3 max-w-xs">Gesamtmarkt</Node>
      <div className="grid grid-cols-3 gap-2">
        {["Jugendliche", "Familien", "Senioren", "Premium", "Budget", "B2B"].map((g) => (
          <Node key={g} className="min-h-[2.5rem] text-[11px]">{g}</Node>
        ))}
      </div>
      <Hint>Segmentierung nach demografischen, psychografischen oder verhaltensbezogenen Merkmalen.</Hint>
    </div>
  );
}

function WisoMarketPhases() {
  return (
    <>
      <FlowSteps steps={[
        { t: "Segmentierung", s: "Markt gliedern" },
        { t: "Targeting", s: "Zielmärkte wählen" },
        { t: "Positionierung", s: "Image schaffen" },
        { t: "Bearbeitung", s: "Mix umsetzen" },
      ]} />
      <Hint>STP-Logik: erst verstehen, dann fokussieren, dann positionieren.</Hint>
    </>
  );
}

function WisoProductLifecycle() {
  const data = [
    { stage: "Einführung", sales: 8, profit: -12 },
    { stage: "Wachstum", sales: 55, profit: 22 },
    { stage: "Reife", sales: 88, profit: 48 },
    { stage: "Rückgang", sales: 35, profit: 5 },
  ];
  return (
    <ChartFrame title="Produktlebenszyklus — Umsatz & Gewinn">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="stage" tick={{ fontSize: 10, fill: ACCENT, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 11, fill: INK }} />
          <ReferenceLine y={0} stroke={MUTED} strokeDasharray="3 3" />
          <Line type="monotone" dataKey="sales" name="Umsatz" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="profit" name="Gewinn" stroke={MUTED} strokeWidth={2} strokeDasharray="4 3" dot={{ r: 3 }} isAnimationActive={false} />
          <Legend {...LEGEND_TOP} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function WisoProductPolicy() {
  return <GridBoxes title="Produktpolitische Maßnahmen" items={[
    { t: "Sortimentserweiterung", s: "Neue Produkte / Linien" },
    { t: "Produktvariation", s: "Design, Qualität, Features" },
    { t: "Markenpolitik", s: "Branding & Positionierung" },
    { t: "Verpackung & Service", s: "Ergänzende Leistungen" },
    { t: "Produktelimination", s: "Auslaufmodelle streichen" },
    { t: "Innovation", s: "F&E, Relaunch" },
  ]} />;
}

function WisoPricingFactors() {
  const factors = ["Kosten", "Nachfrage", "Konkurrenz", "Ziele", "Recht", "Image"];
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative mx-auto h-[220px] w-[220px]">
        <Node soft className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2">Preis</Node>
        {factors.map((f, i) => {
          const a = (i / factors.length) * Math.PI * 2 - Math.PI / 2;
          const x = 110 + Math.cos(a) * 88, y = 110 + Math.sin(a) * 88;
          return (
            <div key={f} className="absolute w-[4.5rem] -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
              <Node className="text-[10px] px-1 py-1">{f}</Node>
            </div>
          );
        })}
      </div>
      <Hint>Preisbildung ist ein Zusammenspiel innerer und äußerer Einflussfaktoren.</Hint>
    </div>
  );
}

function WisoDigitalDimensions() {
  return <GridBoxes cols={3} items={[
    { t: "Backstage", s: "Geschäftsprozesse digitalisieren", soft: true },
    { t: "Frontstage", s: "Kundenschnittstelle & Erlebnis" },
    { t: "Smarte Produkte", s: "IoT, vernetzte Leistungen" },
  ]} />;
}

function WisoItValue() {
  return (
    <>
      <FlowSteps steps={[
        { t: "IT-Systeme" }, { t: "Prozesse" }, { t: "Produkte & DL" }, { t: "Wertschöpfung" },
      ]} softLast />
      <Hint>IT ermöglicht effiziente Prozesse und neue digitale Angebote.</Hint>
    </>
  );
}

function WisoAdPlacements() {
  return (
    <div className="mx-auto max-w-md">
      <svg viewBox="0 0 320 240" className="mx-auto h-auto w-full border border-border/60">
        <rect x={0} y={0} width={320} height={36} fill="oklch(0.96 0.025 55)" />
        <text x={160} y={22} textAnchor="middle" fill={ACCENT} fontSize="12" fontWeight="700">Website / Portal</text>
        <rect x={8} y={44} width={304} height={40} fill={FILL_SOFT} stroke={ACCENT} strokeWidth="1" strokeDasharray="4 2" />
        <text x={160} y={68} textAnchor="middle" fill={ACCENT} fontSize="11" fontWeight="600">Banner (Leaderboard)</text>
        <rect x={8} y={92} width={200} height={100} fill="#fff" stroke={GRID} />
        <text x={108} y={148} textAnchor="middle" fill={MUTED} fontSize="11">Artikel / Inhalt</text>
        <rect x={216} y={92} width={96} height={100} fill={FILL_SOFT} stroke={ACCENT} strokeWidth="1" strokeDasharray="4 2" />
        <text x={264} y={138} textAnchor="middle" fill={ACCENT} fontSize="10" fontWeight="600">Skyscraper</text>
        <rect x={8} y={200} width={304} height={32} fill="oklch(0.94 0.02 55)" stroke={ACCENT} strokeWidth="1" strokeDasharray="4 2" />
        <text x={160} y={220} textAnchor="middle" fill={INK} fontSize="11" fontWeight="600">Native Ad / Sponsored Content</text>
      </svg>
      <Hint>Schematische Werbeplatzierungen — keine echte Zeitungsseite.</Hint>
    </div>
  );
}

function WisoHybridRevenue() {
  return (
    <div className="mx-auto max-w-sm">
      <Node soft className="mx-auto mb-3 max-w-xs">Hybridmodell</Node>
      <div className="grid grid-cols-2 gap-2">
        <Node><div className="text-primary">Werbung</div><div className="mt-1 font-normal text-muted-foreground">Reichweite monetarisieren</div></Node>
        <Node><div className="text-primary">Abonnement</div><div className="mt-1 font-normal text-muted-foreground">Stabile Einnahmen</div></Node>
      </div>
      <div className="my-2 text-center text-primary font-bold">+</div>
      <Node soft>Kombiniert: Gratis-Basis + Premium ohne Werbung</Node>
      <Hint>Freemium und Paywall sind typische Hybridformen digitaler Medien.</Hint>
    </div>
  );
}

function WisoSubscriptionTiers() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {[
        { t: "Basis", s: "Kernfunktionen, ggf. Werbung", soft: false },
        { t: "Standard", s: "Erweitert, weniger Limits", soft: false },
        { t: "Premium", s: "Vollpaket, Support, exklusiv", soft: true },
      ].map((tier) => (
        <Node key={tier.t} soft={tier.soft} className="min-h-[5rem]">
          <div className="text-primary">{tier.t}</div>
          <div className="mt-2 font-normal text-muted-foreground">{tier.s}</div>
        </Node>
      ))}
    </div>
  );
}

function WisoWwwServices() {
  return <GridBoxes cols={3} items={[
    { t: "Vergleichsplattform", s: "Preise & Anbieter gegenüberstellen" },
    { t: "Webshop", s: "Online-Handel & Checkout" },
    { t: "Inhaltsanbieter", s: "Medien, Info, Streaming" },
  ]} />;
}

function WisoWiVenn() {
  return (
    <div className="mx-auto max-w-md">
      <svg viewBox="0 0 300 180" className="mx-auto h-auto w-full">
        <circle cx={105} cy={90} r={58} fill="oklch(0.93 0.02 55)" stroke={STROKE_SOFT} strokeWidth="1.75" />
        <circle cx={195} cy={90} r={58} fill="oklch(0.93 0.02 55)" stroke={STROKE_SOFT} strokeWidth="1.75" />
        <circle cx={150} cy={130} r={58} fill="oklch(0.90 0.04 55)" stroke={ACCENT} strokeWidth="1.75" />
        <text x={72} y={72} fill={INK} fontSize="12" fontWeight="700">
          BWL
        </text>
        <text x={210} y={72} fill={INK} fontSize="12" fontWeight="700">
          Informatik
        </text>
        <text x={150} y={148} textAnchor="middle" fill={ACCENT} fontSize="10" fontWeight="700">
          Wirtschaftsinformatik
        </text>
      </svg>
      <Hint>WI verbindet betriebswirtschaftliches Wissen mit IT-Kompetenz.</Hint>
    </div>
  );
}

function WisoWiPerspectives() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Node><div className="text-primary">Technische Perspektive</div><div className="mt-1 font-normal text-muted-foreground">Systeme, Architektur, Daten</div></Node>
      <Node soft><div className="text-primary">Verhaltensorientiert</div><div className="mt-1 font-normal text-muted-foreground">Nutzer, Prozesse, Akzeptanz</div></Node>
      <Hint>Erfolgreiche WI-Projekte berücksichtigen beide Blickwinkel.</Hint>
    </div>
  );
}

function WisoIsVsAs() {
  return (
    <div className="mx-auto max-w-md text-[12px]">
      <Node soft className="mx-auto max-w-xs">Informationssystem (IS)</Node>
      <div className="mx-auto my-2 h-4 w-px bg-border" />
      <div className="grid gap-2 sm:grid-cols-2">
        <Node>Anwendungssystem<div className="mt-1 font-normal text-muted-foreground">Software &amp; Funktionen</div></Node>
        <Node>Organisation &amp; Management<div className="mt-1 font-normal text-muted-foreground">Strukturen, Regeln, Menschen</div></Node>
      </div>
      <Hint>Das IS umfasst Technik und organisatorische Einbettung.</Hint>
    </div>
  );
}

function WisoIsComponents() {
  return (
    <div className="mx-auto max-w-lg">
      <Node soft className="mx-auto mb-3 max-w-xs">IS-Komponenten</Node>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {["Menschen", "Prozesse", "Daten", "Software", "IT-Infrastruktur"].map((c) => (
          <Node key={c}>{c}</Node>
        ))}
      </div>
    </div>
  );
}

function WisoSectors() {
  return (
    <GridBoxes cols={3} items={[
      { t: "Primär", s: "Rohstoffe: Landwirtschaft, Bergbau" },
      { t: "Sekundär", s: "Verarbeitung: Industrie, Bau" },
      { t: "Tertiär", s: "Dienstleistungen: Handel, IT, Gesundheit" },
    ]} />
  );
}

function WisoStakeholders() {
  const around = ["Eigentümer", "Management", "Mitarbeiter", "Kunden", "Lieferanten", "Staat", "Gemeinschaft", "Umwelt"];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-4 flex justify-center"><Node soft className="min-w-[8rem] text-base">Unternehmen</Node></div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {around.map((g) => <Node key={g} className="min-h-[2.75rem]">{g}</Node>)}
      </div>
      <Hint>Anspruchsgruppen können das Unternehmen unterstützen oder einengen.</Hint>
    </div>
  );
}

function WisoScarcity() {
  return (
    <>
      <FlowSteps steps={[
        { t: "Knappheit", s: "Unbegrenzte Bedürfnisse, begrenzte Mittel" },
        { t: "Entscheidung", s: "Alternative wählen" },
        { t: "Opportunitätskosten", s: "Wert der besten Alternative" },
      ]} softLast />
      <Hint>Jede wirtschaftliche Entscheidung hat Opportunitätskosten.</Hint>
    </>
  );
}

function WisoLinearCircular() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="bg-secondary/40 px-3 py-4 ring-1 ring-border/70">
          <div className="text-center font-bold text-primary">Lineare Wirtschaft</div>
          <div className="mt-3 space-y-1 text-center text-[12px]">
            <div>Take → Make → Waste</div>
            <div className="text-muted-foreground">Rohstoffe → Produktion → Müll</div>
          </div>
        </div>
        <div className="bg-primary/10 px-3 py-4 ring-1 ring-primary/25">
          <div className="text-center font-bold text-primary">Kreislaufwirtschaft</div>
          <div className="mt-3 space-y-1 text-center text-[12px]">
            <div>Reduce · Reuse · Recycle</div>
            <div className="text-muted-foreground">Stoffkreisläufe schließen</div>
          </div>
        </div>
      </div>
      <Hint>Kreislaufwirtschaft hält Ressourcen länger im Kreislauf und senkt Umweltbelastung.</Hint>
    </div>
  );
}

export const WISO_ECONOMICS_FIGURES: Record<string, () => ReactNode> = {
  "wiso-supply-chain": WisoSupplyChain,
  "wiso-circular-flow": WisoCircularFlow,
  "wiso-supply": WisoSupply,
  "wiso-demand": WisoDemand,
  "wiso-equilibrium": WisoEquilibrium,
  "wiso-market-forms": WisoMarketForms,
  "wiso-money-functions": WisoMoneyFunctions,
  "wiso-cash-book-money": WisoCashBookMoney,
  "wiso-interest-reasons": WisoInterestReasons,
  "wiso-fixed-variable-rates": WisoFixedVariableRates,
  "wiso-nominal-effective": WisoNominalEffective,
  "wiso-inflation-causes": WisoInflationCauses,
  "wiso-economy-embedded": WisoEconomyEmbedded,
  "wiso-decoupling": WisoDecoupling,
  "wiso-netzero": WisoNetZero,
  "wiso-planetary-boundaries": WisoPlanetaryBoundaries,
  "wiso-doughnut": WisoDoughnut,
  "wiso-legal-forms": WisoLegalForms,
  "wiso-external-finance": WisoExternalFinance,
  "wiso-market-questions": WisoMarketQuestions,
  "wiso-marketing-concept": WisoMarketingConcept,
  "wiso-market-metrics": WisoMarketMetrics,
  "wiso-target-groups": WisoTargetGroups,
  "wiso-market-phases": WisoMarketPhases,
  "wiso-product-lifecycle": WisoProductLifecycle,
  "wiso-product-policy": WisoProductPolicy,
  "wiso-pricing-factors": WisoPricingFactors,
  "wiso-digital-dimensions": WisoDigitalDimensions,
  "wiso-it-value": WisoItValue,
  "wiso-ad-placements": WisoAdPlacements,
  "wiso-hybrid-revenue": WisoHybridRevenue,
  "wiso-subscription-tiers": WisoSubscriptionTiers,
  "wiso-www-services": WisoWwwServices,
  "wiso-wi-venn": WisoWiVenn,
  "wiso-wi-perspectives": WisoWiPerspectives,
  "wiso-is-vs-as": WisoIsVsAs,
  "wiso-is-components": WisoIsComponents,
  "wiso-sectors": WisoSectors,
  "wiso-stakeholders": WisoStakeholders,
  "wiso-scarcity": WisoScarcity,
  "wiso-linear-circular": WisoLinearCircular,
};
