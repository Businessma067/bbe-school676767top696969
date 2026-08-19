#!/usr/bin/env node
/**
 * Chapter 4.1–4.4 — hard exam word problems (WU Item 27 style).
 * Photo example = format reference only; tasks are diversified and harder.
 */
import fs from "node:fs";
import path from "node:path";
import { initHardTemplates } from "./ch4-hard-templates.mjs";
import { normalizeStatement, validateStatement } from "./ch4-statement-rules.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_MAIN = path.join(ROOT, "src/data/math-ch4-equations.ts");
const OUT_44 = path.join(ROOT, "src/data/math-ch4-4-exponential.ts");

function tsLit(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function wrong(n) {
  if (!Number.isFinite(n)) return 7;
  if (n === 0) return 2;
  const d = Math.abs(n) % 5 === 0 ? 4 : Math.abs(n) % 3 === 0 ? 2 : 3;
  const w = n + (n > 0 ? d : -d);
  return w === n ? n + (n > 0 ? 5 : -5) : w;
}

function pickClaim(correct, isTrue, asInt = true) {
  const v = asInt ? Math.round(correct) : correct;
  return isTrue ? v : wrong(v);
}

/** TRUE → inequality bound (no plug-in); FALSE → explicit wrong number. */
function claimAntiPlug(correct, isTrue, asInt = true) {
  const v = asInt ? Math.round(correct) : correct;
  if (!isTrue) return `$${wrong(v)}$`;
  const delta = Math.max(2, Math.min(6, Math.floor(Math.abs(v) / 5) || 2));
  const bound = asInt ? v - delta : Math.round((v - delta * 0.5) * 10) / 10;
  return `greater than $${bound}$`;
}

/** For equation roots: TRUE → comparison; FALSE → wrong exact value. */
function claimRoot(x, isTrue, asInt = true) {
  const v = asInt ? Math.round(x) : Math.round(x * 100) / 100;
  if (!isTrue) return `equals $${wrong(v)}$`;
  const delta = Math.max(1, Math.min(8, Math.floor(Math.abs(v) / 6) || 1));
  const bound = asInt ? v - delta : Math.round((v - delta * 0.4) * 10) / 10;
  return `is greater than $${bound}$`;
}

/** Count of roots: TRUE → inequality; FALSE → wrong count. */
function claimCount(n, isTrue) {
  if (!isTrue) return `$${wrong(n)}$`;
  return n > 1 ? `more than $${n - 1}$` : `greater than $0$`;
}

function pm(h, m) {
  return m === 0 ? `$${h}{:}00$ pm`.replace("{:}", ":") : `$${h}{:}${String(m).padStart(2, "0")}$ pm`.replace("{:}", ":");
}

function backFrom(endH, endM, mins) {
  let t = endH * 60 + endM - mins;
  return { h: Math.floor(t / 60), m: t % 60 };
}

const KEY_PATTERNS = [
  [true, false, true, false, true],
  [false, true, false, true, false],
  [true, true, false, false, true],
  [false, false, true, true, false],
  [true, false, false, true, true],
  [false, true, true, false, false],
  [true, false, true, true, false],
  [false, true, false, false, true],
  [true, true, true, false, false],
  [false, false, false, true, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [true, true, false, true, false],
  [false, false, true, false, true],
  [true, false, true, false, false],
  [false, true, false, true, true],
  [true, false, false, true, false],
  [false, true, true, false, true],
  [true, true, false, false, false],
  [false, false, true, true, true],
];

const usedKeys = new Set();
const usedStatements = new Set();

function hdr(L, t) {
  return `**${L}.** → ${t ? "True" : "False"}`;
}
function close(t, x) {
  return x || `The statement is ${t ? "True" : "False"}.`;
}

// ── phrasing (diverse exam openings) ────────────────────────────────────────

const OPEN = [
  (s) => s,
  (s) => `In an exam item, ${s.charAt(0).toLowerCase()}${s.slice(1)}`,
  (s) => s.replace(/^If /, "Suppose that ").replace(/, then /, ". It follows that "),
  (s) => s.replace(/^A /, "Consider a case where a "),
  (s) => s.replace(/Then /, "Under these conditions, "),
];

function phrase(slot, text) {
  return OPEN[slot % OPEN.length](text);
}

function mkExpl(isTrue, lines, verdict) {
  return [...lines, "", close(isTrue, verdict)].join("\n");
}

let TIER = null;

// ═══════════════════════════════════════════════════════════════════════════
// 4.1 LINEAR — 28 templates
// ═══════════════════════════════════════════════════════════════════════════

function linRectArea(slot, isTrue) {
  const d = 2 + (slot % 6);
  const x = 4 + (slot % 7);
  const longer = x + d;
  const area = x * longer;
  const claim = pickClaim(longer, isTrue);
  const forms = [
    `If one side of a rectangle is by $${d}$ cm longer than the other one and the rectangle's area is $${area}$ cm$^{2}$, then the length of the longer side is $${claim}$ cm.`,
    `A rectangle's area is $${area}$ cm$^{2}$; one side exceeds the other by $${d}$ cm. The longer side measures $${claim}$ cm.`,
    `Given a rectangle with area $${area}$ cm$^{2}$ and sides differing by $${d}$ cm, the longer side is $${claim}$ cm.`,
  ];
  return {
    key: `linRA-${d}-${x}`,
    statement: phrase(slot, forms[slot % forms.length]),
    expl: mkExpl(
      isTrue,
      [
        hdr("?", isTrue).replace("?", "{L}"),
        "",
        `Let the shorter side be $s$ cm. Then $s(s+${d})=${area}$:`,
        `$$s^2+${d}s-${area}=0$$`,
        `$$(s-${x})(s+${longer})=0$$`,
        `$$s=${x}$$`,
        `Longer side: $${longer}$ cm.`,
      ],
      isTrue ? `The longer side is $${longer}$ cm.` : `The longer side is $${longer}$ cm, not $${claim}$ cm.`
    ),
  };
}

function linRectPerim(slot, isTrue) {
  const d = 3 + (slot % 4);
  const x = 5 + (slot % 5);
  const longer = x + d;
  const p = 2 * (x + longer);
  const claim = pickClaim(longer, isTrue);
  return {
    key: `linRP-${d}-${x}`,
    statement: phrase(
      slot,
      `If one side of a rectangle is by $${d}$ cm longer than the other and the perimeter is $${p}$ cm, then the longer side is $${claim}$ cm.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2(2s+${d})=${p}$$`, `$$s=${x}$$`, `Longer side $${longer}$ cm.`]),
  };
}

function linCarTime(slot, isTrue) {
  const v = [56, 64, 72, 80, 96][slot % 5];
  const hrs = [1.25, 1.5, 1.75, 2.0][slot % 4];
  const dist = v * hrs;
  const endH = 15;
  const mins = Math.round(hrs * 60);
  const st = backFrom(15, 0, mins);
  const claim = isTrue ? pm(st.h, st.m) : pm(st.h + 1, (st.m + 20) % 60);
  return {
    key: `linCar-${v}-${dist}`,
    statement: phrase(
      slot,
      `A car travels at an average speed of $${v}$ km/h. At $3$ pm, it has traveled a total distance of $${dist}$ km. Then it started traveling at ${claim}.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$t=\\frac{${dist}}{${v}}=${hrs}$$ h $=${mins}$ min.`,
      `Counting back from $3$ pm gives ${pm(st.h, st.m)}.`,
    ]),
  };
}

function linVinegar(slot, isTrue) {
  const target = 5 + (slot % 4);
  const have = target + 2 + (slot % 3);
  const pure = have / 100;
  const w = Math.round(((pure / (target / 100) - 1) * 10)) / 10;
  const claim = pickClaim(w, isTrue, false);
  const forms = [
    `A recipe calls for $${target}\\%$ vinegar. If the cook only has $1$ litre of $${have}\\%$ vinegar, he needs to mix it with $${claim}$ litres of water to get the right concentration.`,
    `To obtain $${target}\\%$ acidity from $1$ litre of $${have}\\%$ stock, one must add $${claim}$ litres of water (pure dilution).`,
  ];
  return {
    key: `linVinegar-${target}-${have}`,
    statement: phrase(slot, forms[slot % forms.length]),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{${pure}}{1+w}=\\frac{${target}}{100}$$`,
      `$$w=${w}$$`,
    ]),
  };
}

function linPrizeCascade(slot, isTrue) {
  const total = 10000 + (slot % 9) * 1500;
  const pct = 75 + (slot % 4) * 5;
  const r = pct / 100;
  const a = total / (1 + r + r * r);
  const second = Math.round(r * a);
  const claim = pickClaim(second, isTrue);
  return {
    key: `linPrize-${total}-${pct}`,
    statement: phrase(
      slot,
      `A prize fund of $${total}$ EUR is split so that $2$nd place receives $${pct}\\%$ of $1$st and $3$rd receives $${pct}\\%$ of $2$nd. Then the $2$nd-place prize is $${claim}$ EUR.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$a+${r}a+${r * r}a=${total}$$`,
      `$$a=\\frac{${total}}{${(1 + r + r * r).toFixed(2)}}$$`,
      `Second place: $${r}a\\approx${second}$ EUR.`,
    ]),
  };
}

function linTwoCars(slot, isTrue) {
  const D = 144 + (slot % 6) * 18;
  const v1 = 48 + (slot % 4) * 6;
  const v2 = 60 + (slot % 5) * 6;
  const head = 25 + (slot % 4) * 5;
  const headKm = v1 * (head / 60);
  const gap = D - headKm;
  const meetMin = Math.round((gap / (v1 + v2)) * 60);
  const claim = pickClaim(meetMin, isTrue);
  return {
    key: `lin2car-${D}-${v1}-${head}`,
    statement: phrase(
      slot,
      `Towns $P$ and $Q$ are $${D}$ km apart. At noon a car leaves $P$ at $${v1}$ km/h; $${head}$ minutes later another leaves $Q$ at $${v2}$ km/h toward $P$. They meet $${claim}$ minutes after noon.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `Head start: $${headKm}$ km. Gap left: $${gap}$ km.`,
      `$$t=\\frac{${gap}}{${v1 + v2}}\\text{ h}=${meetMin}\\text{ min after noon}$$`,
    ]),
  };
}

function linBoatCurrent(slot, isTrue) {
  const d = 24 + (slot % 5) * 6;
  const td = 2 + (slot % 2);
  const tu = 3 + (slot % 3);
  const vd = d / td;
  const vu = d / tu;
  const still = (vd + vu) / 2;
  const claim = pickClaim(Math.round(still * 10) / 10, isTrue, false);
  return {
    key: `linBoat-${d}-${td}-${tu}`,
    statement: phrase(
      slot,
      `A boat covers $${d}$ km downstream in $${td}$ h and the same distance upstream in $${tu}$ h. Its speed in still water is $${claim}$ km/h.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `Downstream $${vd}$ km/h, upstream $${vu}$ km/h.`,
      `Still water: $\\frac{${vd}+${vu}}{2}=${still}$ km/h.`,
    ]),
  };
}

function linAge(slot, isTrue) {
  const gap = 26 + (slot % 6) * 2;
  const ahead = 8 + (slot % 5);
  const son = gap - ahead;
  const bound = Math.max(1, son - 2);
  const claim = isTrue ? `greater than $${bound}$ years old` : `$${wrong(son)}$ years old`;
  return {
    key: `linAge-${gap}-${ahead}`,
    statement: phrase(
      slot,
      `A mother is $${gap}$ years older than her daughter. In $${ahead}$ years the mother will be twice as old as the daughter will be then. The daughter is now ${claim}.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$d+${gap}+${ahead}=2(d+${ahead})$$`,
      `$$d=${son}$$`,
    ]),
  };
}

function linCoins(slot, isTrue) {
  const f = 5 + (slot % 5);
  const t = 8 + (slot % 4);
  const n = f + t;
  const val = 5 * f + 2 * t;
  const claim = pickClaim(f, isTrue);
  return {
    key: `linCoins-${n}-${val}`,
    statement: phrase(
      slot,
      `A till contains only $2$ EUR and $5$ EUR coins: $${n}$ coins totalling $${val}$ EUR. Exactly $${claim}$ of them are $5$ EUR coins.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$x+y=${n}$$, $$5x+2y=${val}$$`,
      `$$3x=${val - 2 * n}$$`,
      `$$x=${f}$$`,
    ]),
  };
}

function linTankFill(slot, isTrue) {
  const rate = 18 + (slot % 5) * 3;
  const mins = 20 + (slot % 4) * 5;
  const num = 2 + (slot % 2);
  const den = 5;
  const cap = Math.round((rate * mins * den) / (num * 60));
  const claim = pickClaim(cap, isTrue);
  return {
    key: `linTank-${rate}-${mins}`,
    statement: phrase(
      slot,
      `A pump delivers $${rate}$ L/min into an empty tank. After $${mins}$ minutes the tank is $\\frac{${num}}{${den}}$ full; its capacity is $${claim}$ litres.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{${num}}{${den}}C=${rate}\\cdot${mins}$$`,
      `$$C=${cap}$$`,
    ]),
  };
}

function linRodCut(slot, isTrue) {
  const total = 280 + (slot % 6) * 20;
  const diff = 50 + (slot % 4) * 10;
  const short = (total - diff) / 2;
  const bound = short - 10;
  const claim = isTrue ? `greater than $${bound}$ cm` : `$${wrong(short)}$ cm`;
  return {
    key: `linRod-${total}-${diff}`,
    statement: phrase(
      slot,
      `An aluminium bar of length $${total / 100}$ m is cut into two parts; one part is $${diff}$ cm longer than the other. The shorter part is ${claim}.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$s+(s+${diff})=${total}$$`,
      `$$s=${short}$$`,
    ]),
  };
}

function linRecipeScale(slot, isTrue) {
  const p0 = 8 + (slot % 3) * 2;
  const g0 = 450 + (slot % 5) * 75;
  const p1 = p0 + 6 + (slot % 4);
  const need = Math.round((g0 * p1) / p0);
  const claim = pickClaim(need, isTrue);
  return {
    key: `linRec-${p0}-${p1}`,
    statement: phrase(
      slot,
      `A kitchen manual lists $${g0}$ g of sugar for $${p0}$ servings. Baking $${p1}$ servings requires $${claim}$ g of sugar.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$${g0}\\cdot\\frac{${p1}}{${p0}}=${need}$$`,
    ]),
  };
}

function linOddTriple(slot, isTrue) {
  const n = 13 + (slot % 8) * 2;
  const sum = 3 * n + 6;
  const max = n + 4;
  const bound = max - 2;
  const claim = isTrue ? `greater than $${bound}$` : `$${wrong(max)}$`;
  return {
    key: `linOdd-${sum}`,
    statement: phrase(
      slot,
      `Three consecutive odd integers add up to $${sum}$. The largest is ${claim}.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$3n+6=${sum}$$`,
      `$$n=${n}$$, largest $${max}$.`,
    ]),
  };
}

function linFracNumber(slot, isTrue) {
  const x = 25 + (slot % 7) * 5;
  const claim = pickClaim(x, isTrue);
  return {
    key: `linFrac-${x}`,
    statement: phrase(
      slot,
      `Four-sevenths of a number exceed two-sevenths of the same number by $16$. The number is $${claim}$.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{4}{7}x-\\frac{2}{7}x=16$$`,
      `$$\\frac{2}{7}x=16$$`,
      `$$x=${x}$$`,
    ]),
  };
}

function linRoundTrip(slot, isTrue) {
  const d = 30 + (slot % 5) * 6;
  const v1 = 15 + (slot % 3) * 3;
  const v2 = 10 + (slot % 2) * 2;
  const t = d / v1 + d / v2;
  const claim = pickClaim(Math.round(t * 10) / 10, isTrue, false);
  return {
    key: `linRT-${d}-${v1}`,
    statement: phrase(
      slot,
      `A courier rides $${d}$ km out at $${v1}$ km/h and returns at $${v2}$ km/h over the same route. The round trip lasts $${claim}$ hours (not the arithmetic mean of the two speeds).`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{${d}}{${v1}}+\\frac{${d}}{${v2}}=${t}$$`,
    ]),
  };
}

function linBorderPath(slot, isTrue) {
  const w = 8 + (slot % 5);
  const extra = 4 + (slot % 3);
  const b = 1.5 + (slot % 2) * 0.5;
  const inner = w * (w + extra);
  const outer = (w + 2 * b) * (w + extra + 2 * b);
  const area = Math.round(outer - inner);
  const claim = pickClaim(area, isTrue);
  return {
    key: `linBorder-${w}-${extra}-${b}`,
    statement: phrase(
      slot,
      `A rectangular lawn $${w}$ m by $${w + extra}$ m is surrounded by a uniform $${b}$ m gravel path. The path alone covers $${claim}$ m$^{2}$.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `Outer minus inner:`,
      `$$(${w + 2 * b})(${w + extra + 2 * b})-${inner}=${area}$$`,
    ]),
  };
}

function linPipeDrain(slot, isTrue) {
  const fill = 6 + (slot % 4);
  const drain = 9 + (slot % 3);
  const together = (fill * drain) / (drain - fill);
  const claim = pickClaim(Math.round(together * 100) / 100, isTrue, false);
  return {
    key: `linPD-${fill}-${drain}`,
    statement: phrase(
      slot,
      `Inlet $A$ fills a pool in $${fill}$ h while outlet $B$ empties it in $${drain}$ h (both open, empty pool). The pool fills in $${claim}$ h.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{1}{${fill}}-\\frac{1}{${drain}}=\\frac{1}{t}$$`,
      `$$t=${together}$$`,
    ]),
  };
}

function linDiscountChain(slot, isTrue) {
  const p0 = 200 + (slot % 5) * 40;
  const d1 = 20 + (slot % 2) * 5;
  const d2 = 10 + (slot % 3) * 5;
  const final = Math.round(p0 * (1 - d1 / 100) * (1 - d2 / 100));
  const claim = pickClaim(final, isTrue);
  return {
    key: `linDisc-${p0}-${d1}-${d2}`,
    statement: phrase(
      slot,
      `A jacket priced at $${p0}$ EUR is reduced by $${d1}\\%$, then the sale price is cut by a further $${d2}\\%$. The final price is $${claim}$ EUR.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$${p0}\\cdot(1-\\frac{${d1}}{100})\\cdot(1-\\frac{${d2}}{100})=${final}$$`,
    ]),
  };
}

function linExamMean(slot, isTrue) {
  const a = 72 + (slot % 5) * 3;
  const b = 81 + (slot % 4) * 2;
  const mean = 78 + (slot % 3);
  const c = 3 * mean - a - b;
  const claim = pickClaim(c, isTrue);
  return {
    key: `linMean-${a}-${b}-${mean}`,
    statement: phrase(
      slot,
      `Three test scores average $${mean}$. Two of them are $${a}$ and $${b}$. The third score is $${claim}$.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{a+b+c}{3}=${mean}$$`,
      `$$c=${c}$$`,
    ]),
  };
}

function linDigitNumber(slot, isTrue) {
  const tens = 3 + (slot % 6);
  const units = 5 + (slot % 4);
  const n = 10 * tens + units;
  const rev = 10 * units + tens;
  const diff = rev - n;
  const claim = pickClaim(diff, isTrue);
  return {
    key: `linDigit-${n}`,
    statement: phrase(
      slot,
      `Swapping the digits of a two-digit number increases it by $${claim}$. The original number is $${n}$.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$(${rev})-(${n})=${diff}$$`,
    ]),
  };
}

function linWorkerTeam(slot, isTrue) {
  const a = 5 + (slot % 4);
  const b = 7 + (slot % 3);
  const together = (a * b) / (a + b);
  const claim = pickClaim(Math.round(together * 100) / 100, isTrue, false);
  return {
    key: `linWork-${a}-${b}`,
    statement: phrase(
      slot,
      `Worker $A$ finishes a job alone in $${a}$ days, worker $B$ in $${b}$ days. Together they need $${claim}$ days.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{1}{${a}}+\\frac{1}{${b}}=\\frac{1}{t}$$`,
      `$$t=${together}$$`,
    ]),
  };
}

function linPhonePlan(slot, isTrue) {
  const base = 15 + (slot % 4) * 5;
  const perMin = 0.08 + (slot % 3) * 0.02;
  const mins = 120 + (slot % 5) * 30;
  const bill = Math.round((base + perMin * mins) * 100) / 100;
  const claim = pickClaim(bill, isTrue, false);
  return {
    key: `linPhone-${base}-${mins}`,
    statement: phrase(
      slot,
      `A plan charges $${base}$ EUR per month plus $${perMin}$ EUR per minute. With $${mins}$ minutes used, the bill is $${claim}$ EUR.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$${base}+${perMin}\\cdot${mins}=${bill}$$`,
    ]),
  };
}

function linChase(slot, isTrue) {
  const v1 = 54 + (slot % 4) * 6;
  const v2 = 72 + (slot % 3) * 6;
  const headMin = 20 + (slot % 4) * 10;
  const headKm = v1 * (headMin / 60);
  const catchMin = Math.round((headKm / (v2 - v1)) * 60);
  const claim = pickClaim(catchMin, isTrue);
  return {
    key: `linChase-${v1}-${v2}-${headMin}`,
    statement: phrase(
      slot,
      `Car $A$ leaves at $2$ pm at $${v1}$ km/h. Car $B$ pursues from the same place at $2{:}${String(headMin).padStart(2, "0")}$ pm at $${v2}$ km/h. $B$ catches $A$ after $${claim}$ minutes of chasing.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `Head start $${headKm}$ km. Relative speed $${v2 - v1}$ km/h.`,
      `$$t=\\frac{${headKm}}{${v2 - v1}}\\text{ h}=${catchMin}\\text{ min}$$`,
    ]),
  };
}

function linSalineMix(slot, isTrue) {
  const c1 = 12 + (slot % 3) * 2;
  const v1 = 3 + (slot % 2);
  const c2 = 4;
  const v2 = 2 + (slot % 3);
  const mix = Math.round(((c1 * v1 + c2 * v2) / (v1 + v2)) * 10) / 10;
  const claim = pickClaim(mix, isTrue, false);
  return {
    key: `linSal-${c1}-${v1}-${v2}`,
    statement: phrase(
      slot,
      `Mixing $${v1}$ L of $${c1}\\%$ saline with $${v2}$ L of $${c2}\\%$ saline yields a solution of $${claim}\\%$ concentration.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{${c1}\\cdot${v1}+${c2}\\cdot${v2}}{${v1 + v2}}=${mix}$$`,
    ]),
  };
}

function linTrainPass(slot, isTrue) {
  const len = 180 + (slot % 4) * 40;
  const sec = 12 + (slot % 3) * 2;
  const ms = len / sec;
  const kmh = Math.round(ms * 3.6);
  const claim = pickClaim(kmh, isTrue);
  return {
    key: `linTrain-${len}-${sec}`,
    statement: phrase(
      slot,
      `A train $${len}$ m long passes a signal pole in $${sec}$ s. Its speed is $${claim}$ km/h.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$v=\\frac{${len}}{${sec}}=${ms}\\text{ m/s}$$`,
      `$$${ms}\\cdot 3.6=${kmh}\\text{ km/h}$$`,
    ]),
  };
}

function linMarkup(slot, isTrue) {
  const cost = 80 + (slot % 6) * 10;
  const pct = 35 + (slot % 4) * 5;
  const price = Math.round(cost * (1 + pct / 100));
  const claim = pickClaim(price, isTrue);
  return {
    key: `linMark-${cost}-${pct}`,
    statement: phrase(
      slot,
      `An item costing $${cost}$ EUR is marked up by $${pct}\\%$ for retail. The shelf price is $${claim}$ EUR.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$${cost}\\cdot(1+\\frac{${pct}}{100})=${price}$$`,
    ]),
  };
}

function linSumDiff(slot, isTrue) {
  const sum = 48 + (slot % 5) * 4;
  const diff = 6 + (slot % 3) * 2;
  const larger = (sum + diff) / 2;
  const claim = pickClaim(larger, isTrue);
  return {
    key: `linSD-${sum}-${diff}`,
    statement: phrase(
      slot,
      `Two numbers add to $${sum}$ and differ by $${diff}$. The larger number is $${claim}$.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\frac{${sum}+${diff}}{2}=${larger}$$`,
    ]),
  };
}

function linCooling(slot, isTrue) {
  const t0 = 90 + (slot % 3) * 5;
  const rate = 5 + (slot % 2) * 2;
  const mins = 12 + (slot % 4) * 3;
  const temp = t0 - rate * mins;
  const claim = pickClaim(temp, isTrue);
  return {
    key: `linCool-${t0}-${rate}-${mins}`,
    statement: phrase(
      slot,
      `A liquid cools linearly by $${rate}$°C per minute from $${t0}$°C with no reheating. After $${mins}$ minutes its temperature is $${claim}$°C.`
    ),
    expl: mkExpl(isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$T=${t0}-${rate}\\cdot${mins}=${temp}$$`,
    ]),
  };
}

const LIN_TPLS = [
  linRectArea, linRectPerim, linCarTime, linVinegar, linPrizeCascade, linTwoCars,
  linBoatCurrent, linAge, linCoins, linTankFill, linRodCut, linRecipeScale,
  linOddTriple, linFracNumber, linRoundTrip, linBorderPath, linPipeDrain,
  linDiscountChain, linExamMean, linDigitNumber, linWorkerTeam, linPhonePlan,
  linChase, linSalineMix, linTrainPass, linMarkup, linSumDiff, linCooling,
];

// ═══════════════════════════════════════════════════════════════════════════
// 4.2 QUADRATIC — 16 templates
// ═══════════════════════════════════════════════════════════════════════════

function quadAreaLonger(slot, isTrue) {
  const d = 3 + (slot % 5);
  const x = 5 + (slot % 6);
  const L = x + d;
  const A = x * L;
  const claim = pickClaim(L, isTrue);
  return {
    key: `qArea-${A}`,
    statement: phrase(slot, `If one side of a rectangle exceeds the other by $${d}$ cm and the area is $${A}$ cm$^{2}$, the longer side is $${claim}$ cm.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${d})=${A}$$`, `$$(x-${x})(x+${L})=0$$`, `Longer: $${L}$ cm.`]),
  };
}

function quadConsecProd(slot, isTrue) {
  const n = 6 + (slot % 7);
  const p = n * (n + 1);
  const claim = pickClaim(n + 1, isTrue);
  return {
    key: `qProd-${p}`,
    statement: phrase(slot, `The product of two consecutive integers is $${p}$. The larger integer is $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$n(n+1)=${p}$$`, `$$n=${n}$$`, `Larger: $${n + 1}$.`]),
  };
}

function quadVietaPair(slot, isTrue) {
  const r1 = 4 + (slot % 5);
  const r2 = r1 + 3 + (slot % 4);
  const s = r1 + r2;
  const p = r1 * r2;
  const claim = pickClaim(s, isTrue);
  return {
    key: `qVieta-${r1}-${r2}`,
    statement: phrase(slot, `Two positive numbers have product $${p}$ and sum $${claim}$. The larger equals $${Math.max(r1, r2)}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$t^2-${s}t+${p}=0$$`, `$$(t-${r1})(t-${r2})=0$$`]),
  };
}

function quadFenceMax(slot, isTrue) {
  const p = 40 + (slot % 5) * 4;
  const w = 6 + (slot % 4);
  const l = p / 2 - w;
  const area = w * l;
  const claim = pickClaim(area, isTrue);
  return {
    key: `qFence-${p}-${w}`,
    statement: phrase(slot, `A $${p}$ m fence forms a rectangle of width $${w}$ m using all the fence. The enclosed area is $${claim}$ m$^{2}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2(w+\\ell)=${p}$$`, `$$\\ell=${l}$$`, `$$A=${area}$$`]),
  };
}

function quadNumRecip(slot, isTrue) {
  const n = 5 + (slot % 6);
  const num = n * n + 1;
  const claim = pickClaim(num, isTrue);
  return {
    key: `qRecip-${n}`,
    statement: phrase(slot, `A positive number plus its reciprocal equals $\\frac{${num}}{${n}}$. The numerator of that reduced sum is $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x+\\frac{1}{x}=\\frac{${num}}{${n}}$$`, `$$x=${n}$$`]),
  };
}

function quadDisc(slot, isTrue) {
  const r1 = 3 + (slot % 4);
  const r2 = r1 + 4 + (slot % 3);
  const b = -(r1 + r2);
  const c = r1 * r2;
  const D = b * b - 4 * c;
  const claim = pickClaim(D, isTrue);
  return {
    key: `qDisc-${b}-${c}`,
    statement: phrase(slot, `For $x^2 ${b >= 0 ? "+" : ""}${b}x+${c}=0$, the discriminant equals $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\Delta=${b}^2-4\\cdot${c}=${D}$$`]),
  };
}

function quadPathField(slot, isTrue) {
  const w = 10 + (slot % 4);
  const inner = w * (w + 6);
  const outer = (w + 2) * (w + 8);
  const path = outer - inner;
  const claim = pickClaim(path, isTrue);
  return {
    key: `qPath-${w}`,
    statement: phrase(slot, `A $1$ m path runs around a $${w}$ m $\\times$ $${w + 6}$ m field. The path area alone is $${claim}$ m$^{2}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$(${w + 2})(${w + 8})-${inner}=${path}$$`]),
  };
}

function quadTwoDigit(slot, isTrue) {
  const t = 4 + (slot % 5);
  const u = 7 + (slot % 3);
  const n = 10 * t + u;
  const cond = 10 * u + t;
  const sumSq = n * n + cond * cond;
  const claim = pickClaim(sumSq, isTrue);
  return {
    key: `q2dig-${n}`,
    statement: phrase(slot, `The sum of squares of $${n}$ and its digit-reversal $${cond}$ equals $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${n}^2+${cond}^2=${sumSq}$$`]),
  };
}

function quadAltitude(slot, isTrue) {
  const base = 12 + (slot % 4) * 2;
  const h = 5 + (slot % 3);
  const area = (base * h) / 2;
  const claim = pickClaim(area, isTrue);
  return {
    key: `qTri-${base}-${h}`,
    statement: phrase(slot, `A triangle with base $${base}$ cm and height $${h}$ cm has area $${claim}$ cm$^{2}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$A=\\frac{1}{2}\\cdot${base}\\cdot${h}=${area}$$`]),
  };
}

function quadProj(slot, isTrue) {
  const v0 = 20 + (slot % 4) * 5;
  const g = 10;
  const t = v0 / g;
  const hmax = (v0 * v0) / (2 * g);
  const claim = pickClaim(hmax, isTrue);
  return {
    key: `qProj-${v0}`,
    statement: phrase(slot, `A ball is thrown upward at $${v0}$ m/s (model $h=v_0 t-5t^2$). Its maximum height is $${claim}$ m.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Vertex at $t=\\frac{${v0}}{10}$`, `$$h_{\\max}=\\frac{${v0}^2}{20}=${hmax}$$`]),
  };
}

function quadConsecSum(slot, isTrue) {
  const n = 8 + (slot % 6);
  const sum = n + (n + 1) + (n + 2);
  const claim = pickClaim(sum, isTrue);
  return {
    key: `qCS-${sum}`,
    statement: phrase(slot, `Three consecutive integers sum to $${claim}$; the middle one is $${n + 1}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$3n+3=${sum}$$`, `$$n=${n}$$`]),
  };
}

function quadDiffSq(slot, isTrue) {
  const a = 9 + (slot % 5);
  const b = 4 + (slot % 3);
  const diff = a * a - b * b;
  const claim = pickClaim(diff, isTrue);
  return {
    key: `qDS-${a}-${b}`,
    statement: phrase(slot, `The difference of squares of $${a}$ and $${b}$ equals $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${a}^2-${b}^2=${diff}$$`]),
  };
}

function quadFixedPerim(slot, isTrue) {
  const p = 36 + (slot % 4) * 4;
  const diff = 2 + (slot % 3);
  const shorter = (p / 2 - diff) / 2;
  const longer = shorter + diff;
  const claim = pickClaim(longer, isTrue);
  return {
    key: `qFP-${p}-${diff}`,
    statement: phrase(slot, `A rectangle has perimeter $${p}$ cm; one side is $${diff}$ cm longer than the other. The longer side is $${claim}$ cm.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2(2s+${diff})=${p}$$`, `$$s=${shorter}$$`, `Longer $${longer}$ cm.`]),
  };
}

function quadRootSum(slot, isTrue) {
  const r1 = 6 + (slot % 4);
  const r2 = r1 + 5 + (slot % 3);
  const eq = `x^2-${r1 + r2}x+${r1 * r2}`;
  const claim = pickClaim(r1 + r2, isTrue);
  return {
    key: `qRS-${r1}-${r2}`,
    statement: phrase(slot, `The roots of $${eq}=0$ add up to $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Vieta: sum $=${r1 + r2}$.`]),
  };
}

function quadNoReal(slot, isTrue) {
  const p = 2 + (slot % 4);
  let q = 5 + (slot % 6);
  while (p * p >= 4 * q) q++;
  const D = p * p - 4 * q;
  const claim = isTrue ? "no" : "two";
  return {
    key: `qNoR-${p}-${q}`,
    statement: phrase(slot, `The equation $x^2+${p}x+${q}=0$ has $${claim}$ real roots.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\Delta=${D}<0$$`]),
    forceTrue: D < 0,
  };
}

function quadGeomHyp(slot, isTrue) {
  const a = 6 + (slot % 3);
  const b = 8 + (slot % 4);
  const c = Math.round(Math.sqrt(a * a + b * b));
  const claim = pickClaim(c, isTrue);
  return {
    key: `qHyp-${a}-${b}`,
    statement: phrase(slot, `A right triangle has legs $${a}$ cm and $${b}$ cm. The hypotenuse is $${claim}$ cm.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$c=\\sqrt{${a}^2+${b}^2}=${c}$$`]),
  };
}

const QUAD_TPLS = [
  quadAreaLonger, quadConsecProd, quadVietaPair, quadFenceMax, quadNumRecip,
  quadPathField, quadConsecSum, quadFixedPerim, quadRootSum, quadNoReal, quadProj,
];

// ═══════════════════════════════════════════════════════════════════════════
// 4.3 RATIONAL / RADICAL / ABS — 14 templates
// ═══════════════════════════════════════════════════════════════════════════

function ratWork(slot, isTrue) {
  const a = 5 + (slot % 4);
  const b = 8 + (slot % 3);
  const t = (a * b) / (a + b);
  const claim = pickClaim(Math.round(t * 100) / 100, isTrue, false);
  return {
    key: `ratW-${a}-${b}`,
    statement: phrase(slot, `Tap $A$ fills a cistern in $${a}$ h, tap $B$ in $${b}$ h. Both open (empty cistern): full in $${claim}$ h.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$t=\\frac{${a * b}}{${a + b}}=${t}$$`]),
  };
}

function ratWorkDrain(slot, isTrue) {
  const fill = 4 + (slot % 3);
  const drain = 6 + (slot % 4);
  const t = (fill * drain) / (drain - fill);
  const claim = pickClaim(Math.round(t * 10) / 10, isTrue, false);
  return {
    key: `ratWD-${fill}-${drain}`,
    statement: phrase(slot, `Inlet fills in $${fill}$ h, drain empties in $${drain}$ h; both run on an empty tank. It fills in $${claim}$ h.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{${fill}}-\\frac{1}{${drain}}=\\frac{1}{t}$$`]),
  };
}

function radLadder(slot, isTrue) {
  const h = 4 + (slot % 4);
  const b = 5 + (slot % 3);
  const L = Math.round(Math.sqrt(h * h + b * b));
  const claim = pickClaim(L, isTrue);
  return {
    key: `radLad-${h}-${b}`,
    statement: phrase(slot, `A ladder with foot $${b}$ m from a wall reaches $${h}$ m up the wall. The ladder length is $${claim}$ m.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$L=\\sqrt{${b}^2+${h}^2}=${L}$$`]),
  };
}

function radArea(slot, isTrue) {
  const side = 6 + (slot % 5);
  const diag = side * Math.sqrt(2);
  const claim = pickClaim(Math.round(diag * 10) / 10, isTrue, false);
  return {
    key: `radSq-${side}`,
    statement: phrase(slot, `A square has side $${side}$ cm. Its diagonal is $${claim}$ cm (exact surd value squared gives $${side * side * 2}$).`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$d=${side}\\sqrt{2}$$`]),
  };
}

function radEq(slot, isTrue) {
  const k = 3 + (slot % 4);
  const off = 5 + (slot % 5);
  const root = k * k - off;
  const cmp = claimRoot(root, isTrue);
  return {
    key: `radEq-${k}-${off}`,
    statement: phrase(slot, `Every admissible root of $\\sqrt{x+${off}}=${k}$ satisfies $x$ ${cmp}.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x+${off}=${k * k}$$`, `$$x=${root}$$`]),
  };
}

function absTaxi(slot, isTrue) {
  const base = 3 + (slot % 2);
  const per = 1.5 + (slot % 2) * 0.5;
  const km = 8 + (slot % 4);
  const fare = base + per * km;
  const claim = pickClaim(fare, isTrue, false);
  return {
    key: `absTaxi-${base}-${km}`,
    statement: phrase(slot, `A taxi charges $${base}$ EUR plus $${per}$ EUR per km. A $${km}$ km ride costs $${claim}$ EUR.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${base}+${per}\\cdot${km}=${fare}$$`]),
  };
}

function absDist(slot, isTrue) {
  const a = 3 + (slot % 2);
  const b = -4 + (slot % 3);
  const c = 10 + (slot % 4);
  const r1 = (c - b) / a;
  const r2 = (-c - b) / a;
  const sum = r1 + r2;
  const claim = pickClaim(sum, isTrue, false);
  return {
    key: `absD-${a}-${b}-${c}`,
    statement: phrase(slot, `Positions on a rail satisfy $|${a}x ${b >= 0 ? "+" : ""}${b}|=${c}$. The two positions add to $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x=${r1}\\text{ or }${r2}$$`, `Sum $=${sum}$.`]),
  };
}

function ratCross(slot, isTrue) {
  const hole = 3 + (slot % 4);
  const n = 2 + (slot % 3);
  const d = 5 + (slot % 2);
  const x = (n * hole) / (d - n);
  const cmp = claimRoot(x, isTrue, false);
  return {
    key: `ratX-${hole}-${n}-${d}`,
    statement: phrase(slot, `Every admissible root of $\\frac{${n}}{x-${hole}}=\\frac{${d}}{x}$ satisfies $x$ ${cmp}.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Cross-multiply: $${n}x=${d}(x-${hole})$`]),
  };
}

function ratAvgSpeed(slot, isTrue) {
  const d1 = 90 + (slot % 3) * 15;
  const v1 = 60;
  const d2 = 120 + (slot % 2) * 30;
  const v2 = 80;
  const t = d1 / v1 + d2 / v2;
  const claim = pickClaim(Math.round(t * 100) / 100, isTrue, false);
  return {
    key: `ratSp-${d1}-${d2}`,
    statement: phrase(slot, `A trip: $${d1}$ km at $${v1}$ km/h, then $${d2}$ km at $${v2}$ km/h. Total time $${claim}$ h.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{${d1}}{${v1}}+\\frac{${d2}}{${v2}}=${t}$$`]),
  };
}

function ratOpposingTrains(slot, isTrue) {
  const l1 = 150 + (slot % 3) * 30;
  const l2 = 200 + (slot % 2) * 50;
  const v1 = 72;
  const v2 = 108;
  const sec = Math.round(((l1 + l2) / (v1 + v2)) * 3.6);
  const claim = pickClaim(sec, isTrue);
  return {
    key: `ratTr-${l1}-${l2}`,
    statement: phrase(slot, `Trains $${l1}$ m and $${l2}$ m long approach at $${v1}$ and $${v2}$ km/h. From front meeting to full pass takes $${claim}$ s.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Relative $${v1 + v2}$ km/h, length $${l1 + l2}$ m.`]),
  };
}

function ratMphKmh(slot, isTrue) {
  const mph = 45 + (slot % 4) * 5;
  const kmh = Math.round(mph * 1.609);
  const claim = pickClaim(kmh, isTrue);
  return {
    key: `ratConv-${mph}`,
    statement: phrase(slot, `Converting $${mph}$ mph to km/h gives $${claim}$ km/h (use $1.609$).`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${mph}\\cdot 1.609=${kmh}$$`]),
  };
}

function radNested(slot, isTrue) {
  const inner = 5 + (slot % 4);
  const outer = Math.sqrt(inner + 11);
  const claim = pickClaim(Math.round(outer * 100) / 100, isTrue, false);
  return {
    key: `radNest-${inner}`,
    statement: phrase(slot, `$\\sqrt{${inner}+11}$ equals $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\sqrt{${inner + 11}}=${outer}$$`]),
  };
}

function absTwoCase(slot, isTrue) {
  const a = 2 + (slot % 2);
  const b = 1 + (slot % 3);
  const c = 9 + (slot % 3);
  const r1 = (c - b) / a;
  const r2 = (-c - b) / a;
  const prod = r1 * r2;
  const claim = pickClaim(prod, isTrue, false);
  return {
    key: `absP-${a}-${b}-${c}`,
    statement: phrase(slot, `Equation $|${a}x+${b}|=${c}$ has two roots whose product is $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Roots $${r1}$, $${r2}$; product $${prod}$.`]),
  };
}

function ratPartial(slot, isTrue) {
  const whole = 6 + (slot % 3);
  const done = 2 + (slot % 2);
  const rate = 1 / whole;
  const rem = 1 - done * rate;
  const need = rem / rate;
  const claim = pickClaim(Math.round(need * 10) / 10, isTrue, false);
  return {
    key: `ratPart-${whole}-${done}`,
    statement: phrase(slot, `A job takes $${whole}$ h alone. After $${done}$ h, the remaining work needs $${claim}$ more hours at the same rate.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Left fraction $${rem}$; time $${need}$ h.`]),
  };
}

const RAT_TPLS = [
  ratWork, ratWorkDrain, radEq, absDist,
  ratCross, ratOpposingTrains, absTwoCase, ratPartial,
];

// ═══════════════════════════════════════════════════════════════════════════
// 4.4 EXP / LOG — 14 templates
// ═══════════════════════════════════════════════════════════════════════════

function logComplex(slot, isTrue) {
  const k = 3 + (slot % 4);
  const lhsC = 1 / k - k - 2;
  const rhsC = 2 / 3;
  const logx = 16 / 3 / (lhsC - rhsC);
  const x = Math.pow(10, logx);
  const bound = 4 + (slot % 6);
  const smaller = x < bound;
  const forms = [
    `The solution of $\\log \\sqrt[${k}]{x} + \\log \\frac{1}{x^{${k}}} - \\log x^2 + \\frac{16}{3} = \\frac{\\log x^2}{1 + \\log 100}$ (decadic $\\log$) is smaller than $${bound}$.`,
    `For decadic logarithms, the unique admissible root of $\\log x^{1/${k}} - \\log x^{${k}} - \\log x^2 + \\frac{16}{3} = \\frac{2\\log x}{3}$ satisfies $x < ${bound}$.`,
  ];
  return {
    key: `logCx-${k}-${bound}`,
    statement: phrase(slot, forms[slot % forms.length]),
    expl: mkExpl(smaller === isTrue, [
      hdr("?", isTrue).replace("?", "{L}"),
      "",
      `$$\\left(\\frac{1}{${k}}-${k}-2\\right)\\log x + \\frac{16}{3} = \\frac{2}{3}\\log x$$`,
      `$$\\log x = ${Math.round(logx * 1000) / 1000}$$`,
      `$$x \\approx ${Math.round(x * 10) / 10}$$`,
      smaller ? `$x < ${bound}$.` : `$x \\ge ${bound}$.`,
    ]),
    forceTrue: smaller,
  };
}

function logProductDomain(slot, isTrue) {
  const a = 2 + (slot % 4);
  const rhs = 1 + (slot % 2);
  const target = Math.pow(10, rhs);
  const root = Math.round(((-a + Math.sqrt(a * a + 4 * target)) / 2) * 100) / 100;
  const cmp = claimRoot(root, isTrue, false);
  return {
    key: `logPD-${a}-${rhs}`,
    statement: phrase(
      slot,
      `Every positive root of $\\log x + \\log(x+${a}) = ${rhs}$ satisfies $x$ ${cmp}.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${a})=10^{${rhs}}$$`, `$$x=${root}$$`, `Compare with the bound in the claim.`]),
  };
}

function expBacteria(slot, isTrue) {
  const period = 2 + (slot % 3);
  const n0 = 800 + (slot % 5) * 200;
  const cycles = 4 + (slot % 3);
  const count = n0 * Math.pow(2, cycles);
  const claim = pickClaim(count, isTrue);
  return {
    key: `expBac-${n0}-${cycles}`,
    statement: phrase(slot, `A culture doubles every $${period}$ h. From $${n0}$ cells, after $${cycles * period}$ h the count is $${claim}$ (ignore death).`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${n0}\\cdot 2^{${cycles}}=${count}$$`]),
  };
}

function expCompound(slot, isTrue) {
  const p = 2000 + (slot % 6) * 500;
  const r = 3 + (slot % 4);
  const y = 6 + (slot % 3);
  const bal = Math.round(p * Math.pow(1 + r / 100, y));
  const claim = pickClaim(bal, isTrue);
  return {
    key: `expComp-${p}-${r}-${y}`,
    statement: phrase(slot, `$${p}$ EUR at $${r}\\%$ p.a. compounded annually for $${y}$ years grows to $${claim}$ EUR.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${p}(1+\\frac{${r}}{100})^{${y}}=${bal}$$`]),
  };
}

function expSubstWord(slot, isTrue) {
  const u1 = 2 + (slot % 3);
  const u2 = u1 + 4 + (slot % 3);
  const s = u1 + u2;
  const p = u1 * u2;
  const roots = 2;
  const cmp = claimCount(roots, isTrue);
  return {
    key: `expSub-${s}-${p}`,
    statement: phrase(
      slot,
      `A heated metal rod model satisfies $e^{2x} - ${s}e^x + ${p} = 0$ with $u=e^x>0$. There are ${cmp} distinct real exponents $x$.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$u^2-${s}u+${p}=0$$`, `$$(u-${u1})(u-${u2})=0$$`, `Two positive $u$ give two real $x$.`]),
  };
}

function expHalfLife(slot, isTrue) {
  const h = 3 + (slot % 3);
  const yrs = 2 * h;
  const pct = Math.round(100 / Math.pow(2, yrs / h));
  const claim = pickClaim(pct, isTrue);
  return {
    key: `expHL-${h}-${yrs}`,
    statement: phrase(slot, `Isotope half-life $${h}$ years. After $${yrs}$ years, about $${claim}\\%$ of the original sample remains.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Two half-lives: $(\\frac{1}{2})^2$ → $${pct}\\%$.`]),
  };
}

function logShiftContext(slot, isTrue) {
  const s = 4 + (slot % 5);
  const m = 2 + (slot % 4);
  const x = s + m;
  const cmp = claimRoot(x, isTrue);
  return {
    key: `logSh-${s}-${m}`,
    statement: phrase(
      slot,
      `Measuring time after an offset, $\\ln(x-${s})=\\ln ${m}$ holds for an admissible $x$ that ${cmp}.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x-${s}=${m}$$`, `$$x=${x}$$`, `Domain requires $x>${s}$.`]),
  };
}

function logSumFrac(slot, isTrue) {
  const base = 2 + (slot % 3);
  const denom = 2 + (slot % 2);
  const target = 4 + (slot % 3);
  const logv = (target * denom) / (denom + 1);
  const x = Math.pow(base, logv);
  const cmp = claimRoot(x, isTrue, false);
  return {
    key: `logSum-${base}-${target}`,
    statement: phrase(
      slot,
      `Every admissible root of $\\log_{${base}} x + \\frac{\\log_{${base}} x}{${denom}} = ${target}$ satisfies $x$ ${cmp}.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{${denom + 1}}{${denom}}\\log_{${base}} x = ${target}$$`, `$$x=${base}^{${logv}}=${Math.round(x * 100) / 100}$$`]),
  };
}

function expMixedBase(slot, isTrue) {
  const pairs = [
    { eq: "2^x = 3^{x-1}", x: 1 },
    { eq: "4^x = 2^{x+4}", x: 4 },
    { eq: "9^x = 3^{x+2}", x: 2 },
    { eq: "25^x = 5^{x+3}", x: 3 },
  ];
  const p = pairs[slot % pairs.length];
  const cmp = claimRoot(p.x, isTrue);
  return {
    key: `expMix-${p.x}-${slot}`,
    statement: phrase(slot, `Every real root of $${p.eq}$ satisfies $x$ ${cmp}.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Match bases / monotonicity gives $x=${p.x}$.`]),
  };
}

function logChangeBase(slot, isTrue) {
  const num = 81;
  const den = 9;
  const val = Math.log(num) / Math.log(den);
  const claim = pickClaim(val, isTrue);
  return {
    key: `logCB-${num}-${den}`,
    statement: phrase(slot, `$\\dfrac{\\log_3 ${num}}{\\log_3 ${den}} = ${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\log_3 ${num}=4,\\ \\log_3 ${den}=2$$`, `Ratio $=2$.`]),
  };
}

function expCooling(slot, isTrue) {
  const t0 = 80 + (slot % 4) * 5;
  const k = 0.1 + (slot % 3) * 0.05;
  const mins = 10 + (slot % 4) * 5;
  const temp = Math.round(t0 * Math.exp(-k * mins));
  const claim = pickClaim(temp, isTrue);
  return {
    key: `expCool-${t0}-${k}-${mins}`,
    statement: phrase(slot, `Newton cooling $T=${t0}e^{-${k}t}$ (minutes). After $${mins}$ min the reading is $${claim}$°C.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$T=${t0}e^{-${k}\\cdot${mins}}\\approx${temp}$$`]),
  };
}

function logInequality(slot, isTrue) {
  const base = 2 + (slot % 3);
  const e = 3 + (slot % 3);
  const x = Math.pow(base, e);
  const bound = Math.pow(base, e - 1);
  const holds = x > bound;
  const word = holds ? "greater" : "less";
  const claimWord = isTrue ? word : word === "greater" ? "less" : "greater";
  return {
    key: `logIneq-${base}-${e}`,
    statement: phrase(slot, `If $\\log_{${base}} x = ${e}$, then $x$ is ${claimWord} than $${bound}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x=${base}^{${e}}=${x}$$`, holds ? `$x > ${bound}$.` : `$x < ${bound}$.`]),
    forceTrue: holds,
  };
}

function expQuadBase2(slot, isTrue) {
  const u1 = 2 + (slot % 2);
  const u2 = 5 + (slot % 3);
  const lead = 2 + (slot % 2);
  const sum = lead * (u1 + u2);
  const prod = lead * u1 * u2;
  const roots = 2;
  const cmp = claimCount(roots, isTrue);
  return {
    key: `expQ2-${sum}-${prod}`,
    statement: phrase(
      slot,
      `With $u=2^x>0$, the equation $${lead}\\cdot4^x-${sum}\\cdot2^x+${prod}=0$ yields ${cmp} real solutions for $x$.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${lead}u^2-${sum}u+${prod}=0$$`, `Two positive $u$ → two $x$.`]),
  };
}

function logDecadicClaim(slot, isTrue) {
  const exp = 2 + (slot % 5);
  const mant = 2 + (slot % 7);
  const x = mant * Math.pow(10, exp);
  const logx = Math.round(Math.log10(x) * 100) / 100;
  const claim = pickClaim(logx, isTrue, false);
  return {
    key: `logDec-${x}-${exp}`,
    statement: phrase(slot, `The decadic logarithm of $${x}$ equals $${claim}$.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\log_{10}${x}=${logx}$$`]),
  };
}

function expNoReal(slot, isTrue) {
  const base = 2 + (slot % 4);
  const t = 3 + (slot % 5);
  const claim = isTrue ? "no" : "one";
  return {
    key: `expNeg-${base}-${t}`,
    statement: phrase(slot, `The equation $${base}^x = -${t}$ has $${claim}$ real solution.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${base}^x > 0$$ always; RHS negative.`]),
    forceTrue: true,
  };
}

function expPowerEq(slot, isTrue) {
  const bases = [
    { eq: "2^x = 32", x: 5 },
    { eq: "3^x = 81", x: 4 },
    { eq: "5^x = 625", x: 4 },
    { eq: "2^{x+1} = 64", x: 5 },
    { eq: "4^x = 256", x: 4 },
    { eq: "10^{x-1} = 1000", x: 4 },
  ];
  const p = bases[(slot + Math.floor(slot / 6)) % bases.length];
  const cmp = claimRoot(p.x, isTrue);
  return {
    key: `expPow-${p.eq}-${slot}`,
    statement: phrase(slot, `Every real root of $${p.eq}$ satisfies $x$ ${cmp}.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Match powers → $x=${p.x}$.`]),
  };
}

function logLinearEq(slot, isTrue) {
  const b = 2 + (slot % 4);
  const c = 3 + (slot % 5);
  const x = Math.pow(b, c);
  return {
    key: `logLin-${b}-${c}-${slot}`,
    statement: phrase(
      slot,
      `Every admissible root of $\\log_{${b}} x = ${c}$ satisfies $x$ ${claimRoot(x, isTrue, false)}.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x=${b}^{${c}}=${x}$$.`]),
  };
}

function expLnEq(slot, isTrue) {
  const a = 2 + (slot % 4);
  const b = 3 + (slot % 3);
  const x = Math.round(b * Math.exp(a) * 100) / 100;
  const cmp = claimRoot(x, isTrue, false);
  return {
    key: `expLn-${a}-${b}-${slot}`,
    statement: phrase(slot, `Every admissible root of $\\ln x = \\ln ${b} + ${a}$ satisfies $x$ ${cmp}.`),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\ln x = \\ln(${b}e^{${a}})$$`, `$$x=${x}$$.`]),
  };
}

function logSumEq(slot, isTrue) {
  const a = 3 + (slot % 4);
  const x = Math.pow(10, a + 1);
  const cmp = claimRoot(x, isTrue, false);
  return {
    key: `logSum2-${a}-${slot}`,
    statement: phrase(
      slot,
      `Every positive root of $\\log x + \\log ${a} = ${a + 1}$ satisfies $x$ ${cmp}.`
    ),
    expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\log(${a}x)=${a + 1}$$`, `$$x=${x}$$.`]),
  };
}

const EXP_TPLS = [
  logComplex, logProductDomain, expSubstWord,
  logShiftContext, logSumFrac, expMixedBase,
  logInequality, expQuadBase2, expNoReal,
  expPowerEq, logLinearEq, expLnEq, logSumEq,
];

const SIMPLE_EXP = new Set(["expPowerEq", "logLinearEq", "logSumEq", "expLnEq", "expNoReal"]);

function poolFor(sub, tier) {
  const T = TIER;
  const t = tier;
  let pool;
  if (sub === "4.1") {
    if (t === 1) pool = [...T.LIN_1, ...LIN_TPLS.slice(0, 12)];
    else if (t === 2) pool = [...T.LIN_2, ...LIN_TPLS.slice(0, 18)];
    else if (t === 3) pool = LIN_TPLS;
    else if (t === 4) pool = [...T.LIN_4, ...LIN_TPLS];
    else pool = [...T.LIN_5, ...T.LIN_4, ...LIN_TPLS.slice(0, 10)];
  } else if (sub === "4.2") {
    if (t === 1) pool = QUAD_TPLS.slice(0, 5);
    else if (t === 2) pool = QUAD_TPLS.slice(0, 8);
    else if (t === 3) pool = QUAD_TPLS;
    else if (t === 4) pool = [...T.QUAD_4, ...QUAD_TPLS];
    else pool = [...T.QUAD_5, ...T.QUAD_4, ...QUAD_TPLS];
  } else if (sub === "4.3") {
    if (t === 1) pool = RAT_TPLS.slice(0, 4);
    else if (t === 2) pool = RAT_TPLS.slice(0, 6);
    else if (t === 3) pool = RAT_TPLS;
    else if (t === 4) pool = [...T.RAT_4, ...RAT_TPLS];
    else pool = [...T.RAT_5, ...T.RAT_4, ...RAT_TPLS];
  } else {
    pool = EXP_TPLS;
    if (t === 4) pool = [...T.EXP_4, ...EXP_TPLS];
    else if (t >= 5) pool = [...T.EXP_5, ...T.EXP_4, ...EXP_TPLS];
  }
  if (t >= 4 && sub === "4.4") {
    pool = pool.filter((fn) => !SIMPLE_EXP.has(fn.name));
  }
  if (t >= 4 && sub === "4.2") {
    pool = pool.filter((fn) => fn.name !== "quadConsecSum" && fn.name !== "quadRootSum");
  }
  return pool;
}

function buildLetter(pool, taskN, letter, isTrue, usedTpl, subsection, tier) {
  const pools = [pool];
  for (let w = 1; w <= 3; w++) {
    const wider = poolFor(subsection, Math.max(1, tier - w));
    if (wider !== pools[pools.length - 1]) pools.push(wider);
  }
  for (const activePool of pools) {
    for (let tries = 0; tries < 1200; tries++) {
      const slot = taskN * 7919 + letter * 53 + tries * 19;
      const ti = (slot + tries) % activePool.length;
      if (usedTpl.has(`${activePool.length}-${ti}`) && tries < activePool.length * 3) continue;
      const spec = activePool[ti](slot, isTrue);
      if (spec.forceTrue !== undefined && spec.forceTrue !== isTrue) continue;
      const key = `${spec.key}-t${taskN}-l${letter}`;
      if (usedKeys.has(key)) continue;
      const norm = normalizeStatement(spec.statement);
      if (usedStatements.has(norm)) continue;
      const err = validateStatement(spec.statement, isTrue, subsection);
      if (err) continue;
      usedKeys.add(key);
      usedStatements.add(norm);
      usedTpl.add(`${activePool.length}-${ti}`);
      const L = String.fromCharCode(65 + letter);
      let expl = spec.expl.replaceAll("{L}", L);
      expl = expl.replace(`**?.**`, `**${L}.**`);
      return { statement: spec.statement, expl };
    }
  }
  throw new Error(`failed task=${taskN} letter=${letter} sub=${subsection}`);
}

const TITLES = {
  "4.1": ["Hard motion and mixtures", "Prize splits and borders", "Age, work, and pipes", "Chase and trains", "Exam linear stories", "Multi-step dilutions", "Return trips and means", "Nested percentages"],
  "4.2": ["Area and Vieta", "Discriminant geometry", "Consecutive products", "Path and fence", "Projectile height", "Root sum claims", "Hard quadratics", "Square difference"],
  "4.3": ["Pipes and drains", "Ladders and surds", "Absolute value fare", "Rational crossing", "Opposing trains", "Nested radicals", "Partial work", "Unit conversion"],
  "4.4": ["Complex logarithms", "Population growth", "Compound and decay", "Substitution models", "Mixed bases", "Cooling law", "Log inequalities", "Exam exponentials"],
};

const OVERVIEWS = {
  "4.1": `Five independent exam sentences. Model each story as one linear equation (or a short chain), solve exactly, then compare with the closing claim.`,
  "4.2": `Five independent quadratic stories. Form $ax^2+bx+c=0$ or use geometry, factor when possible, and verify the stated numerical property.`,
  "4.3": `Five independent rational, radical, or absolute-value stories. State the domain, solve algebraically, reject extraneous values, then test the claim.`,
  "4.4": `Five independent exponential and logarithmic stories. Simplify log laws, respect domains and monotonicity, and compute before judging the final comparison.`,
};

function difficultyTier(n, sub) {
  const span = sub === "4.1" || sub === "4.2" ? 33 : 27;
  const idx =
    sub === "4.1" ? n - 1 : sub === "4.2" ? n - 34 : sub === "4.3" ? n - 67 : n - 94;
  if (idx < span * 0.2) return 1;
  if (idx < span * 0.4) return 2;
  if (idx < span * 0.6) return 3;
  if (idx < span * 0.8) return 4;
  return 5;
}

// ── assembly ──────────────────────────────────────────────────────────────────

TIER = initHardTemplates({ hdr, mkExpl, phrase, pickClaim, claimRoot, claimCount, wrong, pm, backFrom });

function buildTask(n, sub) {
  const tier = difficultyTier(n, sub);
  const pool = poolFor(sub, tier);
  const answer_key = KEY_PATTERNS[n % KEY_PATTERNS.length].map(Boolean);
  const usedTpl = new Set();
  const statements = [];
  const tactical_explanations = [];
  for (let i = 0; i < 5; i++) {
    const spec = buildLetter(pool, n, i, answer_key[i], usedTpl, sub, tier);
    statements.push(spec.statement);
    tactical_explanations.push(spec.expl);
  }
  return {
    id: `math-4-${n}`,
    case_id: `MATH 4.${n < 10 ? "0" + n : n}`,
    title: TITLES[sub][n % TITLES[sub].length],
    subsection: sub,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: `${tier}/5`,
    sort_order: n,
    solution_overview: OVERVIEWS[sub],
  };
}

function renderTask(t) {
  return [
    "  {",
    `    id: \`${t.id}\`,`,
    `    case_id: \`${t.case_id}\`,`,
    `    title: \`${tsLit(t.title)}\`,`,
    `    subsection: \`${t.subsection}\`,`,
    `    context: \`${t.context}\`,`,
    "    statements: [",
    ...t.statements.map((s) => `      \`${tsLit(s)}\`,`),
    "    ],",
    `    answer_key: [${t.answer_key.join(", ")}],`,
    "    tactical_explanations: [",
    ...t.tactical_explanations.map((e) => `      \`${tsLit(e)}\`,`),
    "    ],",
    `    difficulty_level: \`${t.difficulty_level}\`,`,
    `    sort_order: ${t.sort_order},`,
    `    solution_overview: \`${tsLit(t.solution_overview)}\`,`,
    "  },",
  ].join("\n");
}

const t41 = Array.from({ length: 33 }, (_, i) => buildTask(i + 1, "4.1"));
const t42 = Array.from({ length: 33 }, (_, i) => buildTask(i + 34, "4.2"));
const t43 = Array.from({ length: 27 }, (_, i) => buildTask(i + 67, "4.3"));
const t44 = Array.from({ length: 27 }, (_, i) => buildTask(i + 94, "4.4"));

fs.writeFileSync(
  OUT_MAIN,
  `/**
 * Chapter 4 — Equations (subsections 4.1–4.3).
 * Hard exam-style word problems. Generated by scripts/generate-math-ch4-exam.mjs
 */

import type { MathTask } from "@/data/math-chapters";
import { MATH_CH4_4_EXPONENTIAL } from "@/data/math-ch4-4-exponential";

export const MATH_CH4_SUBSECTIONS = [
  { id: "4.1", title: "Linear equations in one unknown" },
  { id: "4.2", title: "Quadratic equations" },
  { id: "4.3", title: "Rational, radical and absolute-value equations" },
  { id: "4.4", title: "Exponential and logarithmic equations" },
] as const;

export const MATH_CH4_EQUATIONS: MathTask[] = [
${[...t41, ...t42, ...t43].map(renderTask).join("\n")}
  ...MATH_CH4_4_EXPONENTIAL,
];
`,
  "utf8"
);

fs.writeFileSync(
  OUT_44,
  `/**
 * Chapter 4 — Subsection 4.4: Exponential and logarithmic equations.
 * Generated by scripts/generate-math-ch4-exam.mjs
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_4_EXPONENTIAL: MathTask[] = [
${t44.map(renderTask).join("\n")}
];
`,
  "utf8"
);

const all = [...t41, ...t42, ...t43, ...t44];
console.log(`Generated ${all.length} exam tasks (${usedStatements.size} unique statements)`);
for (let d = 1; d <= 5; d++) {
  console.log(`  ${d}/5: ${all.filter((t) => t.difficulty_level === `${d}/5`).length}`);
}
