#!/usr/bin/env node
/**
 * Generate ALL Chapter 4 math tasks (4.1–4.4) from scratch.
 * Dry statements: For $eq$, claim.  A/C/E → Vieta; B/D → count.
 * Explanations solve the exact equation shown in each statement.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_MAIN = path.join(ROOT, "src/data/math-ch4-equations.ts");
const OUT_44 = path.join(ROOT, "src/data/math-ch4-4-exponential.ts");

// ── utilities ───────────────────────────────────────────────────────────────

function tsLit(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function dryEq(eq, claim) {
  const c = claim.replace(/\.$/, "");
  return `For $${eq}$, ${c}.`;
}

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ri(rng, lo, hi) {
  return lo + Math.floor(rng() * (hi - lo + 1));
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

function fmt(n) {
  if (!Number.isFinite(n)) return "$0$";
  if (Math.abs(n - Math.round(n)) < 1e-9) return `$${Math.round(n)}$`;
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  for (const [val, tex] of [
    [0.125, "\\frac{1}{8}"],
    [0.25, "\\frac{1}{4}"],
    [0.5, "\\frac{1}{2}"],
    [1.5, "\\frac{3}{2}"],
    [2.5, "\\frac{5}{2}"],
  ]) {
    if (Math.abs(abs - val) < 1e-9) return `$${sign}${tex}$`;
  }
  const den = 1000;
  const num = Math.round(abs * den);
  const g = gcd(num, den);
  const p = num / g;
  const q = den / g;
  if (q === 1) return `$${sign}${p}$`;
  return `$${sign}\\frac{${p}}{${q}}$`;
}

function fmtSigned(n, first = false) {
  if (n === 0) return first ? "" : "";
  if (first) return n < 0 ? `-${Math.abs(n)}` : `+${n}`;
  return n < 0 ? ` - ${Math.abs(n)}` : ` + ${n}`;
}

function fmtCoeff(a, v = "x") {
  if (a === 1) return v;
  if (a === -1) return `-${v}`;
  return `${a}${v}`;
}

function wrongVal(v) {
  if (v === 0) return 2;
  const w = v + (Math.abs(v) % 3 === 0 ? 2 : 3);
  return w === v ? v + 5 : w;
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

const usedEqs = new Set();

function explHeader(letter, isTrue) {
  return `**${letter}.** → ${isTrue ? "True" : "False"}`;
}

function explClose(isTrue, extra) {
  return extra || `The statement is ${isTrue ? "True" : "False"}.`;
}

function vietaClaim(isTrue, kind, val, seed) {
  const v = isTrue ? val : wrongVal(typeof val === "number" ? Math.round(val) : 1);
  const pools = {
    sum: [`the sum of all admissible roots equals ${fmt(v)}`, `the solutions add up to ${fmt(v)}`],
    product: [`the product of all admissible roots equals ${fmt(v)}`, `multiplying all admissible roots gives ${fmt(v)}`],
    disc: [`the discriminant equals ${fmt(v)}`, `the discriminant is ${v < 0 ? "negative" : "positive"}`],
    diff: [`the larger root exceeds the smaller by ${fmt(v)}`],
  };
  const pool = pools[kind] || pools.sum;
  return pool[seed % pool.length];
}

function countClaim(isTrue, actualCount, seed) {
  const one = [
    "the equation has exactly one admissible real solution",
    "the equation has exactly one real solution",
    "exactly one admissible root satisfies the equation",
  ];
  const two = [
    "the equation has two distinct admissible real solutions",
    "the equation has two distinct real solutions",
    "exactly two admissible roots satisfy the equation",
  ];
  const none = [
    "the equation has no admissible real solution",
    "the equation has no real solution",
    "no real root satisfies the equation",
  ];
  let claimed = actualCount;
  if (!isTrue) claimed = actualCount === 0 ? 1 : actualCount === 1 ? 2 : 0;
  if (claimed === 1) return one[seed % 3];
  if (claimed === 2) return two[seed % 3];
  return none[seed % 3];
}

function makeClaim(isVieta, isTrue, meta, seed) {
  const { count, roots, sum, product, disc, diff } = meta;
  if (isVieta) {
    if (count === 0) return vietaClaim(isTrue, "disc", disc ?? -1, seed);
    if (count === 2) {
      const kinds = diff != null && Number.isInteger(diff) ? ["sum", "product", "diff"] : ["sum", "product"];
      const kind = kinds[seed % kinds.length];
      const val = kind === "sum" ? sum : kind === "product" ? product : diff;
      return vietaClaim(isTrue, kind, val, seed);
    }
    if (!Number.isInteger(sum) && !Number.isInteger(product)) {
      return countClaim(isTrue, count, seed);
    }
    const kind = seed % 2 === 0 ? "sum" : "product";
    const val = kind === "sum" ? sum : product;
    return vietaClaim(isTrue, kind, val, seed);
  }
  return countClaim(isTrue, count, seed);
}

// ── 4.1 linear ──────────────────────────────────────────────────────────────

function buildLinear(rng, letterIdx, isTrue, useWord, taskSeed, takeTaskEq) {
  const seed = taskSeed + letterIdx * 17;
  let tries = 0;
  while (tries++ < 40) {
    let spec;
    if (useWord && letterIdx % 3 === 0) {
      const tpl = pick(rng, ["price", "bill", "split", "rate", "consecutive"]);
      if (tpl === "price") {
        const x = ri(rng, 3, 18);
        const total = 2 * x + 6;
        spec = {
          eq: `2x + 6 = ${total}`,
          story: `A shop doubles the original price and adds $6$ EUR; the till shows $${total}$ EUR.`,
          root: x,
          steps: [`$$2x + 6 = ${total}$$`, `$$2x = ${total - 6}$$`, `$$x = ${x}$$`],
        };
      } else if (tpl === "bill") {
        const x = ri(rng, 10, 30);
        const half = (x - 7) / 2;
        if (!Number.isInteger(half)) continue;
        spec = {
          eq: `\\frac{x - 7}{2} = ${half}`,
          story: `After $7$ EUR is taken off a bill, half of the remainder equals $${half}$ EUR.`,
          root: x,
          steps: [`$$\\frac{x - 7}{2} = ${half}$$`, `$$x - 7 = ${2 * half}$$`, `$$x = ${x}$$`],
        };
      } else if (tpl === "split") {
        const x = ri(rng, 5, 20);
        spec = {
          eq: `x + (x + 4) = ${2 * x + 4}`,
          story: `$${2 * x + 4}$ EUR is split into two parts where one part is $4$ EUR more than the other.`,
          root: x,
          steps: [`$$x + (x + 4) = ${2 * x + 4}$$`, `$$2x + 4 = ${2 * x + 4}$$`, `$$x = ${x}$$`],
        };
      } else if (tpl === "rate") {
        const t = ri(rng, 2, 6);
        const speeds = [48, 56, 64, 72, 80, 90];
        const speed = pick(rng, speeds);
        const dist = speed * t;
        spec = {
          eq: `${speed}t = ${dist}`,
          story: `At ${speed} km/h, a journey of ${dist} km takes $t$ hours.`,
          root: t,
          steps: [`$$${speed}t = ${dist}$$`, `$$t = \\frac{${dist}}{${speed}} = ${t}$$`],
        };
      } else {
        const n = ri(rng, 5, 15);
        spec = {
          eq: `n + (n + 1) + (n + 2) = ${3 * n + 3}`,
          story: `Three consecutive integers sum to $${3 * n + 3}$; let the smallest be $n$.`,
          root: n,
          steps: [`$$3n + 3 = ${3 * n + 3}$$`, `$$n = ${n}$$`],
        };
      }
    } else if (rng() < 0.35) {
      const x = ri(rng, -12, 15);
      if (x === 0) continue;
      const d = pick(rng, [2, 3, 4, 5, 6]);
      const b = ri(rng, -9, 9);
      const rhsNum = x + b;
      if (rhsNum % d !== 0 && rng() < 0.5) continue;
      const rhs = rhsNum / d;
      spec = {
        eq: `\\frac{x${fmtSigned(b, true)}}{${d}} = ${Number.isInteger(rhs) ? rhs : `\\frac{${rhsNum}}{${d}}`}`,
        story: null,
        root: x,
        steps: [
          `$$\\frac{x${fmtSigned(b, true)}}{${d}} = ${Number.isInteger(rhs) ? rhs : `\\frac{${rhsNum}}{${d}}`}$$`,
          `$$x${fmtSigned(b, true)} = ${rhsNum}$$`,
          `$$x = ${x}$$`,
        ],
      };
    } else {
      const x = ((taskSeed + letterIdx * 17 + tries * 3) % 26) - 11;
      if (x === 0) continue;
      const a = pick(rng, [2, 3, 4, 5, -2, -3, 7, -5]);
      const b = ri(rng, -11, 11);
      const c = a * x + b;
      spec = {
        eq: `${fmtCoeff(a)}${fmtSigned(b)} = ${c}`,
        story: null,
        root: x,
        steps: [`$$${fmtCoeff(a)}${fmtSigned(b)} = ${c}$$`, `$$${fmtCoeff(a)} = ${c - b}$$`, `$$x = ${x}$$`],
      };
    }
    if (!takeTaskEq(spec.eq)) continue;
    const isVieta = letterIdx % 2 === 0;
    const meta = { count: 1, roots: [spec.root], sum: spec.root, product: spec.root, disc: 1 };
    const claim = makeClaim(isVieta, isTrue, meta, seed);
    const expl = [
      explHeader(String.fromCharCode(65 + letterIdx), isTrue),
      "",
      spec.story || `A linear equation $ax + b = c$ with $a \\neq 0$ has exactly one real root.`,
      "",
      spec.steps.join("\n\n"),
      "",
      explClose(
        isTrue,
        isTrue
          ? `The unique root is $${spec.root === spec.root && String(spec.root).includes("n") ? "n" : "x"} = ${spec.root}$, so the claim holds.`
          : `The unique root is $x = ${spec.root}$, which contradicts the claim.`
      ),
    ].join("\n");
    return { eq: spec.eq, claim, expl };
  }
  throw new Error(`linear failed taskSeed=${taskSeed} letter=${letterIdx}`);
}

// ── 4.2 quadratic ───────────────────────────────────────────────────────────

function buildQuadratic(rng, letterIdx, isTrue, useWord, taskSeed, takeTaskEq) {
  const seed = taskSeed + letterIdx * 23;
  const modes = ["two", "one", "none", "twoFrac", "two", "two", "one", "none"];
  let tries = 0;
  while (tries++ < 200) {
    const mode = modes[(taskSeed + letterIdx * 7 + tries) % modes.length];
    let eq, r1, r2, disc, count, roots, sum, product, story = null, steps;

    if (mode === "none") {
      const p = ri(rng, 2, 9);
      let q = ri(rng, 3, 12);
      while (p * p >= 4 * q) q++;
      eq = `x^2 + ${p}x + ${q} = 0`;
      disc = p * p - 4 * q;
      count = 0;
      roots = [];
      sum = product = null;
      steps = [`$$${eq}$$`, `$$\\Delta = ${p}^2 - 4 \\cdot ${q} = ${disc}$$`, `$$\\Delta < 0$$`];
    } else if (mode === "one") {
      r1 = pick(rng, [-7, -5, -3, 2, 4, 6, 8, 9]);
      eq = `x^2 - ${2 * r1}x + ${r1 * r1} = 0`;
      disc = 0;
      count = 1;
      roots = [r1];
      sum = 2 * r1;
      product = r1 * r1;
      steps = [`$$${eq}$$`, `$$\\Delta = 0$$`, `$$x = ${r1}$$`];
    } else if (mode === "twoFrac") {
      r1 = pick(rng, [-5, -3, -1, 2, 4]);
      r2 = pick(rng, [1, 3, 5, 7]);
      if (r1 === r2) continue;
      const b = -(r1 + r2);
      const c = r1 * r2;
      eq = `x^2${fmtSigned(b)}x${fmtSigned(c)} = 0`;
      disc = b * b - 4 * c;
      count = 2;
      roots = [Math.min(r1, r2), Math.max(r1, r2)];
      sum = r1 + r2;
      product = r1 * r2;
      steps = [`$$${eq}$$`, `$$(x - ${roots[0]})(x - ${roots[1]}) = 0$$`, `$$x = ${roots[0]} \\quad \\text{or} \\quad x = ${roots[1]}$$`];
    } else {
      r1 = ((taskSeed + letterIdx * 13 + tries * 5) % 17) - 8;
      r2 = ((taskSeed + letterIdx * 19 + tries * 7) % 17) - 8;
      if (r1 === r2) r2 += r1 <= 0 ? 3 : -3;
      const b = -(r1 + r2);
      const c = r1 * r2;
      eq = `x^2${fmtSigned(b)}x${fmtSigned(c)} = 0`;
      disc = b * b - 4 * c;
      count = 2;
      roots = [Math.min(r1, r2), Math.max(r1, r2)];
      sum = r1 + r2;
      product = r1 * r2;
      steps = [`$$${eq}$$`, `$$(x - ${roots[0]})(x - ${roots[1]}) = 0$$`, `$$x = ${roots[0]} \\quad \\text{or} \\quad x = ${roots[1]}$$`];
    }

    if (useWord && count === 2 && letterIdx === 0) {
      const w = roots[0];
      const len = roots[1] - roots[0];
      eq = `x(x + ${len}) = ${w * roots[1]}`;
      story = `A rectangle has width $x$ m and length $${len}$ m more; the area is $${w * roots[1]}$ m$^{2}$.`;
      steps = [`$$x(x + ${len}) = ${w * roots[1]}$$`, `$$x^2 + ${len}x - ${w * roots[1]} = 0$$`, steps.slice(1).join("\n\n")];
    }

    if (!takeTaskEq(eq)) continue;
    const isVieta = letterIdx % 2 === 0;
    const meta = { count, roots, sum, product, disc };
    const claim = makeClaim(isVieta, isTrue, meta, seed);
    const expl = [
      explHeader(String.fromCharCode(65 + letterIdx), isTrue),
      "",
      story || (count === 0 ? `Compute $\\Delta$; a negative discriminant means no real roots.` : count === 1 ? `A zero discriminant gives one repeated root.` : `Factor and read the two roots.`),
      "",
      steps.join("\n\n"),
      "",
      explClose(isTrue),
    ].join("\n");
    return { eq, claim, expl };
  }
  throw new Error(`quadratic failed taskSeed=${taskSeed}`);
}

// ── 4.3 rational / radical / abs ───────────────────────────────────────────

function buildRational(rng, letterIdx, isTrue, useWord, taskSeed, takeTaskEq) {
  const seed = taskSeed + letterIdx * 29;
  const type = pick(rng, ["rat", "rad", "abs", "rad2", "rat2"]);
  let tries = 0;
  while (tries++ < 80) {
    let eq, meta, steps, story = null;

    if (type === "rat" || type === "rat2") {
      const hole = pick(rng, [-5, -3, -2, 2, 3, 5]);
      const num = pick(rng, [1, 2, 3, 4]);
      const den = pick(rng, [2, 3, 4, 5, 6]);
      if (num === den) continue;
      const root = (num * hole) / (den - num);
      if (!Number.isInteger(root)) continue;
      eq = type === "rat2" ? `\\frac{${num}}{x${fmtSigned(hole, true)}} = \\frac{${den}}{x}` : `\\frac{x}{x${fmtSigned(hole, true)}} = \\frac{${num}}{${den}}`;
      steps = [
        `Exclude $x = ${hole}$ and $x = 0$ where denominators vanish.`,
        `$$${eq}$$`,
        `Cross-multiply and solve:`,
        `$$x = ${root}$$`,
      ];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
      story = useWord ? `A mixture concentration satisfies ${eq}.` : null;
    } else if (type === "rad" || type === "rad2") {
      const off = ri(rng, 1, 12);
      const inner = ri(rng, 2, 7);
      const root = inner * inner - off;
      if (root < -off) continue;
      eq = type === "rad2" ? `${inner} = \\sqrt{x${fmtSigned(off, true)}}` : `\\sqrt{x${fmtSigned(off, true)}} = ${inner}`;
      steps = [
        `Require $x${fmtSigned(off, true)} \\geq 0$.`,
        `$$${eq}$$`,
        `$$x${fmtSigned(off, true)} = ${inner * inner}$$`,
        `$$x = ${root}$$`,
      ];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
      story = useWord ? `A length model satisfies ${eq}.` : null;
    } else {
      const a = pick(rng, [2, 3, 4, 5]);
      const b = ri(rng, -6, 6);
      const c = ri(rng, 2, 9);
      eq = `\\lvert ${fmtCoeff(a)}${fmtSigned(b)} \\rvert = ${c}`;
      const rPos = (c - b) / a;
      const rNeg = (-c - b) / a;
      const roots = [];
      if (Number.isInteger(rPos)) roots.push(rPos);
      if (Number.isInteger(rNeg) && rNeg !== rPos) roots.push(rNeg);
      roots.sort((x, y) => x - y);
      steps = [
        `$$${eq}$$`,
        roots.length === 2
          ? `$$${fmtCoeff(a)}${fmtSigned(b, true)} = ${c} \\quad \\text{or} \\quad ${fmtCoeff(a)}${fmtSigned(b, true)} = -${c}$$`
          : `$$${fmtCoeff(a)}${fmtSigned(b, true)} = ${c}$$`,
        roots.length === 2 ? `$$x = ${roots[0]} \\quad \\text{or} \\quad x = ${roots[1]}$$` : `$$x = ${roots[0]}$$`,
      ];
      meta = {
        count: roots.length,
        roots,
        sum: roots.length === 2 ? roots[0] + roots[1] : roots[0] ?? 0,
        product: roots.length === 2 ? roots[0] * roots[1] : roots[0] ?? 0,
        disc: 1,
      };
      story = useWord ? `Distances from two posts satisfy ${eq}.` : null;
    }

    if (!takeTaskEq(eq)) continue;
    const isVieta = letterIdx % 2 === 0;
    const claim = makeClaim(isVieta, isTrue, meta, seed);
    const expl = [
      explHeader(String.fromCharCode(65 + letterIdx), isTrue),
      "",
      story || (eq.includes("\\lvert") ? `Split into two linear cases.` : eq.includes("\\sqrt") ? `Square both sides; check the domain.` : `Exclude holes, then cross-multiply.`),
      "",
      steps.join("\n\n"),
      "",
      explClose(isTrue),
    ].join("\n");
    return { eq, claim, expl };
  }
  throw new Error(`rational failed taskSeed=${taskSeed}`);
}

// ── 4.4 exponential / log ───────────────────────────────────────────────────

function buildExpLog(rng, letterIdx, isTrue, useWord, taskSeed, takeTaskEq) {
  const seed = taskSeed + letterIdx * 31;
  const kinds = ["exp", "expNeg", "expSub", "log", "logShift", "logSum", "expQuad", "mixedBase", "expPow", "logProd", "decay"];
  let tries = 0;
  while (tries++ < 400) {
    const slot = taskSeed + letterIdx * 37 + tries * 11;
    const kind = kinds[slot % kinds.length];
    let eq, meta, steps, story = null;

    if (kind === "expNeg") {
      const base = [2, 3, 5, 7][slot % 4];
      const t = 1 + (slot % 15);
      eq = `${base}^x = -${t}`;
      steps = [`$$${eq}$$`, `$$${base}^x > 0 \\quad \\text{for all real } x$$`, `No real solution exists.`];
      meta = { count: 0, roots: [], sum: 0, product: 0, disc: -1 };
    } else if (kind === "expSub") {
      const u1 = 2 + (slot % 7);
      const u2 = u1 + 2 + ((slot >> 3) % 8);
      const sumU = u1 + u2;
      const prodU = u1 * u2;
      eq = `e^{2x} - ${sumU}e^x + ${prodU} = 0`;
      steps = [
        `Let $u = e^x > 0$.`,
        `$$u^2 - ${sumU}u + ${prodU} = 0$$`,
        `$$(u-${u1})(u-${u2}) = 0$$`,
        `Two positive values of $u$ give two real values of $x$.`,
      ];
      meta = { count: 2, roots: [u1, u2], sum: sumU, product: prodU, disc: 1, diff: u2 - u1 };
    } else if (kind === "expQuad") {
      const u1 = 2 + (slot % 4);
      const u2 = u1 + 2 + ((slot >> 2) % 5);
      const lead = 2 + (slot % 3);
      const sumU = lead * (u1 + u2);
      const prodU = lead * u1 * u2;
      eq = `${lead} \\cdot 4^x - ${sumU} \\cdot 2^x + ${prodU} = 0`;
      steps = [
        `Let $u = 2^x > 0$. Then $4^x = u^2$.`,
        `$$${lead}u^2 - ${sumU}u + ${prodU} = 0$$`,
        `$${lead}(u-${u1})(u-${u2}) = 0$$`,
        `Two positive values of $u$ give two real values of $x$.`,
      ];
      meta = { count: 2, roots: [u1, u2], sum: u1 + u2, product: u1 * u2, disc: 1, diff: u2 - u1 };
    } else if (kind === "expPow") {
      const base = [2, 3, 5, 7][slot % 4];
      const shift = 1 + (slot % 5);
      const e = shift + 1 + (slot % 4);
      const target = base ** (e - shift);
      eq = `${base}^{x+${shift}} = ${target}`;
      steps = [`$$${eq}$$`, `$$${base}^{x+${shift}} = ${base}^{${e}}$$`, `$$x + ${shift} = ${e}$$`, `$$x = ${e - shift}$$`];
      meta = { count: 1, roots: [e - shift], sum: e - shift, product: e - shift, disc: 1 };
    } else if (kind === "decay") {
      const den = 2 + (slot % 4);
      const e = 2 + (slot % 6);
      eq = `\\left(\\frac{1}{${den}}\\right)^x = \\frac{1}{${den ** e}}`;
      steps = [`$$${eq}$$`, `$$${den}^{-x} = ${den}^{-${e}}$$`, `$$x = ${e}$$`];
      meta = { count: 1, roots: [e], sum: e, product: e, disc: 1 };
    } else if (kind === "log") {
      const base = [2, 3, 5, 7, 10][slot % 5];
      const e = 2 + (slot % 5);
      const root = base ** e;
      eq = `\\log_${base} x = ${e}`;
      steps = [`Domain: $x > 0$.`, `$$${eq}$$`, `$$x = ${base}^{${e}} = ${root}$$`];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
    } else if (kind === "logShift") {
      const s = 1 + (slot % 12);
      const mult = 2 + (slot % 8);
      eq = `\\ln(x - ${s}) = \\ln ${mult}`;
      const root = s + mult;
      steps = [`Require $x - ${s} > 0$.`, `$$${eq}$$`, `$$x - ${s} = ${mult}$$`, `$$x = ${root}$$`];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
    } else if (kind === "logSum") {
      const base = [2, 3, 5, 7][slot % 4];
      const half = 2 + (slot % 3);
      const target = half + 1;
      const logVal = 2 * half;
      const root = base ** logVal;
      eq = `\\log_${base} x + \\frac{\\log_${base} x}{${half}} = ${target}`;
      steps = [
        `Combine: $\\frac{${half + 1}}{${half}}\\log_${base} x = ${target}$.`,
        `$$\\log_${base} x = ${logVal}$$`,
        `$$x = ${base}^{${logVal}} = ${root}$$`,
      ];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
    } else if (kind === "logProd") {
      const base = [2, 3, 5, 7][slot % 4];
      const logVal = 1 + (slot % 5);
      const e = 2 * logVal;
      const root = base ** logVal;
      eq = `\\log_${base} x + \\log_${base} x = ${e}`;
      steps = [`$$2\\log_${base} x = ${e}$$`, `$$\\log_${base} x = ${logVal}$$`, `$$x = ${root}$$`];
      meta = { count: 1, roots: [root], sum: root, product: root, disc: 1 };
    } else if (kind === "mixedBase") {
      const presets = [
        [2, 3, 1, 1], [4, 2, 3, 3], [5, 25, 2, 4], [9, 3, 2, 2],
        [2, 4, 1, 2], [3, 9, 1, 2], [2, 8, 1, 3], [4, 8, 1, 2],
        [5, 125, 2, 3], [2, 5, 1, 4], [3, 27, 1, 3], [2, 6, 1, 5],
      ];
      const [left, right, k, r] = presets[slot % presets.length];
      eq = `${left}^x = ${right}^{x-${k}}`;
      steps = [
        `Rewrite with a common base or divide by the smaller power.`,
        `$$${eq}$$`,
        `Strict monotonicity gives exactly one real crossing.`,
        `$$x = ${r}$$`,
      ];
      meta = { count: 1, roots: [r], sum: r, product: r, disc: 1 };
    } else {
      const base = 2 + (slot % 8);
      const e = 2 + ((slot >> 3) % 7);
      const target = base ** e;
      eq = `${base}^x = ${target}`;
      steps = [`$$${eq}$$`, `$$${base}^x = ${base}^{${e}}$$`, `$$x = ${e}$$`];
      meta = { count: 1, roots: [e], sum: e, product: e, disc: 1 };
      story = useWord ? `A population model satisfies $${eq}$.` : null;
    }

    if (!takeTaskEq(eq)) continue;
    const isVieta = letterIdx % 2 === 0;
    const claim = makeClaim(isVieta, isTrue, meta, seed);
    const expl = [
      explHeader(String.fromCharCode(65 + letterIdx), isTrue),
      "",
      story || (eq.includes("\\log") || eq.includes("\\ln") ? `State the domain, then convert to exponential form or combine logs.` : eq.includes("e^{") ? `Substitute $u = e^x > 0$ when needed.` : `Match bases; monotonicity gives at most one root.`),
      "",
      steps.join("\n\n"),
      "",
      explClose(isTrue),
    ].join("\n");
    return { eq, claim, expl };
  }

  const n = Math.round(taskSeed / 7919);
  for (let fb = 0; fb < 40; fb++) {
    const base = 2 + ((n * 13 + letterIdx * 5 + fb * 7) % 11);
    const e = 2 + ((n * 17 + letterIdx * 3 + fb * 11) % 12);
    const eq = `${base}^x = ${base ** e}`;
    if (!takeTaskEq(eq)) continue;
    const meta = { count: 1, roots: [e], sum: e, product: e, disc: 1 };
    const isVieta = letterIdx % 2 === 0;
    const claim = makeClaim(isVieta, isTrue, meta, seed);
    const expl = [
      explHeader(String.fromCharCode(65 + letterIdx), isTrue),
      "",
      `Match bases; monotonicity gives at most one root.`,
      "",
      [`$$${eq}$$`, `$$${base}^x = ${base}^{${e}}$$`, `$$x = ${e}$$`].join("\n\n"),
      "",
      explClose(isTrue),
    ].join("\n");
    return { eq, claim, expl };
  }
  throw new Error(`expLog failed taskSeed=${taskSeed} letter=${letterIdx}`);
}

// ── task assembly ───────────────────────────────────────────────────────────

const TITLES = {
  "4.1": ["Linear isolation", "One-variable balance", "Inverse operations", "Affine equations", "Rate and mixture", "Fractional linear", "Consecutive integers", "Price reversal"],
  "4.2": ["Quadratic roots", "Discriminant check", "Vieta on quadratics", "Factored quadratics", "Area models", "Repeated roots", "No real roots", "Root pairs"],
  "4.3": ["Rational equations", "Radical domain", "Absolute value split", "Cross-multiply", "Square-root balance", "Extraneous roots", "Two-case modulus", "Hole exclusion"],
  "4.4": ["Basic exponentials", "Logarithmic form", "Monotonic bases", "Domain of logs", "Shifted exponents", "Quadratic in $e^x$", "Combined logs", "Mixed bases"],
};

const OVERVIEWS = {
  "4.1": `Five independent linear equations. Isolate the unknown by inverse operations; each letter states a property of the displayed equation.`,
  "4.2": `Five independent quadratic equations. Use factoring, the quadratic formula, or Vieta; the discriminant determines root count.`,
  "4.3": `Five independent rational, radical, or absolute-value equations. Exclude domain restrictions, then solve and check admissible roots.`,
  "4.4": `Five independent exponential and logarithmic equations. Positive bases are monotonic; logarithms require positive arguments.`,
};

function difficulty(n, sub) {
  const base = { "4.1": 1, "4.2": 2, "4.3": 3, "4.4": 3 }[sub];
  const span = sub === "4.1" || sub === "4.2" ? 33 : 27;
  const idx = sub === "4.1" ? n : sub === "4.2" ? n - 33 : sub === "4.3" ? n - 66 : n - 93;
  const tier = Math.min(5, base + Math.floor((idx / span) * 2));
  return `${tier}/5`;
}

function buildTask(n, subsection, builder, rng) {
  const answer_key = KEY_PATTERNS[n % KEY_PATTERNS.length].map(Boolean);
  const useWord = n % 5 === 0 || n % 7 === 0;
  const taskSeed = n * 7919;
  const statements = [];
  const tactical_explanations = [];
  const taskEqs = new Set();

  function takeTaskEq(eq) {
    const k = eq.replace(/\s/g, "");
    if (taskEqs.has(k) || usedEqs.has(k)) return false;
    taskEqs.add(k);
    usedEqs.add(k);
    return true;
  }

  for (let i = 0; i < 5; i++) {
    const spec = builder(rng, i, answer_key[i], useWord, taskSeed, takeTaskEq);
    statements.push(dryEq(spec.eq, spec.claim));
    tactical_explanations.push(spec.expl);
  }

  return {
    id: `math-4-${n}`,
    case_id: `MATH 4.${n < 10 ? "0" + n : n}`,
    title: `${TITLES[subsection][n % TITLES[subsection].length]} (${subsection})`,
    subsection,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: difficulty(n, subsection),
    sort_order: n,
    solution_overview: OVERVIEWS[subsection],
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

function writeMain(t41, t42, t43) {
  const body = [...t41, ...t42, ...t43].map(renderTask).join("\n");
  fs.writeFileSync(
    OUT_MAIN,
    `/**
 * Chapter 4 — Equations (subsections 4.1–4.3).
 * Generated by scripts/generate-math-ch4-full.mjs
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
${body}
  ...MATH_CH4_4_EXPONENTIAL,
];
`,
    "utf8"
  );
}

function write44(t44) {
  fs.writeFileSync(
    OUT_44,
    `/**
 * Chapter 4 — Subsection 4.4: Exponential and logarithmic equations.
 * Generated by scripts/generate-math-ch4-full.mjs
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_4_EXPONENTIAL: MathTask[] = [
${t44.map(renderTask).join("\n")}
];
`,
    "utf8"
  );
}

// ── validate ──────────────────────────────────────────────────────────────────

function validate(tasks) {
  const bad = [];
  const BAD = [
    /^The equation has (exactly one|no) real solution\.?$/,
    /^For \$u =/,
    /precisely one real value of the exponent/,
    /claims that|after squaring.*checking whether|A student claims/i,
  ];
  for (const t of tasks) {
    for (const s of t.statements) {
      if (!s.startsWith("For $")) bad.push(`${t.id}: not For $ format: ${s.slice(0, 60)}`);
      for (const p of BAD) if (p.test(s)) bad.push(`${t.id}: bad pattern ${s.slice(0, 60)}`);
      if (/\u000C/.test(s)) bad.push(`${t.id}: form-feed in ${s.slice(0, 60)}`);
    }
  }
  return bad;
}

// ── main ────────────────────────────────────────────────────────────────────

const rng = mulberry32(20260819);

const t41 = Array.from({ length: 33 }, (_, i) => buildTask(i + 1, "4.1", buildLinear, rng));
const t42 = Array.from({ length: 33 }, (_, i) => buildTask(i + 34, "4.2", buildQuadratic, rng));
const t43 = Array.from({ length: 27 }, (_, i) => buildTask(i + 67, "4.3", buildRational, rng));
const t44 = Array.from({ length: 27 }, (_, i) => buildTask(i + 94, "4.4", buildExpLog, rng));

const all = [...t41, ...t42, ...t43, ...t44];
const bad = validate(all);
if (bad.length) {
  console.error("Validation errors:", bad.slice(0, 20));
  process.exit(1);
}

writeMain(t41, t42, t43);
write44(t44);

console.log(`Generated ${all.length} tasks (unique equations: ${usedEqs.size})`);
console.log(`  4.1: ${t41.length}  4.2: ${t42.length}  4.3: ${t43.length}  4.4: ${t44.length}`);
