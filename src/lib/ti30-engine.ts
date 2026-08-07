/**
 * Calculator engine modelled on publicly documented TI-30XS MultiView™ /
 * MathPrint™ feature set (Texas Instruments education product specs &
 * reference card). Independent implementation — not a TI firmware dump.
 *
 * Covered (documented feature families):
 * - EOS-style operator precedence & parentheses
 * - DEG / RAD / GRAD angle modes
 * - FLOAT / SCI / ENG display + fixed decimals
 * - Trig + inverse; hyperbolic
 * - log, ln, 10^x, e^x, powers, roots, 1/x, x², %, !
 * - nPr / nCr, rand / randint
 * - π, Ans, seven memories (x,y,z,t,a,b,c)
 * - Dist: Normalpdf/cdf, invNorm, Binompdf/cdf, Poissonpdf/cdf (TI-30X Pro DISTR menu)
 */

export type AngleMode = "DEG" | "RAD" | "GRAD";
export type NotationMode = "FLOAT" | "SCI" | "ENG";
export type EntryMode = "MATHPRINT" | "CLASSIC";

export type CalcMode = {
  angle: AngleMode;
  notation: NotationMode;
  fix: number | null; // null = floating
  entry: EntryMode;
};

export const DEFAULT_MODE: CalcMode = {
  angle: "DEG",
  notation: "FLOAT",
  fix: null,
  entry: "MATHPRINT",
};

export type MemoryKey = "x" | "y" | "z" | "t" | "a" | "b" | "c";

const MEM_KEYS: MemoryKey[] = ["x", "y", "z", "t", "a", "b", "c"];

export type HistoryLine = { expr: string; result: string };

function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0 || n > 170) throw new Error("DOMAIN");
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function nPr(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n)
    throw new Error("DOMAIN");
  let out = 1;
  for (let i = 0; i < r; i++) out *= n - i;
  return out;
}

function nCr(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n)
    throw new Error("DOMAIN");
  r = Math.min(r, n - r);
  let out = 1;
  for (let i = 1; i <= r; i++) out = (out * (n - r + i)) / i;
  return out;
}

/** Abramowitz & Stegun erf approximation (public domain formula). */
function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

function normalPdf(x: number, mu = 0, sigma = 1): number {
  if (sigma <= 0) throw new Error("DOMAIN");
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

function normalCdf(lo: number, hi: number, mu = 0, sigma = 1): number {
  if (sigma <= 0) throw new Error("DOMAIN");
  const z = (x: number) => (x - mu) / (sigma * Math.SQRT2);
  return 0.5 * (erf(z(hi)) - erf(z(lo)));
}

function invNorm(area: number, mu = 0, sigma = 1): number {
  if (sigma <= 0 || area <= 0 || area >= 1) throw new Error("DOMAIN");
  // Binary search on normalCdf(-Inf, x)
  let lo = mu - 10 * sigma;
  let hi = mu + 10 * sigma;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    const p = normalCdf(-1e99, mid, mu, sigma);
    if (p < area) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

function binomPdf(n: number, p: number, x: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(x) || n < 0 || x < 0 || x > n || p < 0 || p > 1)
    throw new Error("DOMAIN");
  return nCr(n, x) * p ** x * (1 - p) ** (n - x);
}

function binomCdf(n: number, p: number, x: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(x) || n < 0 || x < 0 || p < 0 || p > 1)
    throw new Error("DOMAIN");
  let s = 0;
  const up = Math.min(x, n);
  for (let k = 0; k <= up; k++) s += binomPdf(n, p, k);
  return s;
}

function poissonPdf(mu: number, x: number): number {
  if (mu < 0 || !Number.isInteger(x) || x < 0) throw new Error("DOMAIN");
  return (Math.exp(-mu) * mu ** x) / factorial(x);
}

function poissonCdf(mu: number, x: number): number {
  if (mu < 0 || !Number.isInteger(x) || x < 0) throw new Error("DOMAIN");
  let s = 0;
  for (let k = 0; k <= x; k++) s += poissonPdf(mu, k);
  return s;
}

function gcd(a: number, b: number): number {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a || 1;
}

/** Best-effort rational approximation for F↔D when close to a simple fraction. */
export function toFractionString(v: number, maxDen = 1000): string | null {
  if (!Number.isFinite(v)) return null;
  const sign = v < 0 ? "-" : "";
  v = Math.abs(v);
  if (Number.isInteger(v)) return `${sign}${v}`;
  let bestN = 1;
  let bestD = 1;
  let bestErr = Infinity;
  for (let d = 1; d <= maxDen; d++) {
    const n = Math.round(v * d);
    const err = Math.abs(v - n / d);
    if (err < bestErr) {
      bestErr = err;
      bestN = n;
      bestD = d;
    }
    if (err < 1e-12) break;
  }
  if (bestErr > 1e-8) return null;
  const g = gcd(bestN, bestD);
  bestN /= g;
  bestD /= g;
  if (bestD === 1) return `${sign}${bestN}`;
  if (bestN > bestD) {
    const whole = Math.floor(bestN / bestD);
    const rem = bestN % bestD;
    return rem === 0 ? `${sign}${whole}` : `${sign}${whole} ${rem}/${bestD}`;
  }
  return `${sign}${bestN}/${bestD}`;
}

function toRad(x: number, mode: AngleMode): number {
  if (mode === "RAD") return x;
  if (mode === "GRAD") return (x * Math.PI) / 200;
  return (x * Math.PI) / 180;
}

function fromRad(x: number, mode: AngleMode): number {
  if (mode === "RAD") return x;
  if (mode === "GRAD") return (x * 200) / Math.PI;
  return (x * 180) / Math.PI;
}

export function formatDisplay(v: number, mode: CalcMode): string {
  if (!Number.isFinite(v)) return "Error";
  if (Object.is(v, -0)) v = 0;

  if (mode.entry === "MATHPRINT") {
    if (Number.isInteger(v) || Math.abs(v - Math.round(v)) < 1e-12) {
      return String(Math.round(v));
    }
    const nearPi = v / Math.PI;
    if (Math.abs(nearPi - Math.round(nearPi)) < 1e-10 && Math.abs(nearPi) <= 20) {
      const k = Math.round(nearPi);
      if (k === 0) return "0";
      if (k === 1) return "π";
      if (k === -1) return "-π";
      return `${k}π`;
    }
    if (v > 0) {
      for (let n = 2; n <= 10000; n++) {
        if (Math.abs(v * v - n) < 1e-10 && !Number.isInteger(Math.sqrt(n))) {
          return `√${n}`;
        }
      }
    }
    const frac = toFractionString(v);
    if (frac && frac.includes("/")) return frac;
  }

  let digits = mode.fix ?? 10;
  if (mode.notation === "SCI") {
    return v.toExponential(Math.min(digits, 9));
  }
  if (mode.notation === "ENG") {
    if (v === 0) return "0";
    const exp = Math.floor(Math.log10(Math.abs(v)) / 3) * 3;
    const mant = v / 10 ** exp;
    return `${mant.toPrecision(Math.min(digits, 9))}e${exp}`;
  }
  if (mode.fix != null) return v.toFixed(mode.fix);
  const s = Number(v.toPrecision(12)).toString();
  return s;
}

type Tok =
  | { t: "num"; v: number }
  | { t: "op"; v: string }
  | { t: "id"; v: string }
  | { t: "lp" }
  | { t: "rp" }
  | { t: "comma" };

function tokenize(src: string): Tok[] {
  const s = src.replace(/\s+/g, "");
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      if (s[j] === "e" || s[j] === "E") {
        j++;
        if (s[j] === "+" || s[j] === "-") j++;
        while (j < s.length && /[0-9]/.test(s[j])) j++;
      }
      const num = Number(s.slice(i, j));
      if (!Number.isFinite(num)) throw new Error("SYNTAX");
      out.push({ t: "num", v: num });
      i = j;
      continue;
    }
    if (c === "(") {
      out.push({ t: "lp" });
      i++;
      continue;
    }
    if (c === ")") {
      out.push({ t: "rp" });
      i++;
      continue;
    }
    if (c === ",") {
      out.push({ t: "comma" });
      i++;
      continue;
    }
    if ("+-*/^%!".includes(c)) {
      out.push({ t: "op", v: c });
      i++;
      continue;
    }
    if (/[a-zπ√]/i.test(c)) {
      let j = i + 1;
      while (j < s.length && /[a-z0-9_]/i.test(s[j])) j++;
      out.push({ t: "id", v: s.slice(i, j).toLowerCase() });
      i = j;
      continue;
    }
    throw new Error("SYNTAX");
  }
  return out;
}

type Env = {
  mode: CalcMode;
  ans: number;
  mem: Record<MemoryKey, number>;
  randSeed: number;
};

function nextRand(env: Env): number {
  // xorshift32
  let x = env.randSeed | 0;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  env.randSeed = x || 1;
  return (x >>> 0) / 0xffffffff;
}

export class Ti30Engine {
  mode: CalcMode = { ...DEFAULT_MODE };
  ans = 0;
  mem: Record<MemoryKey, number> = {
    x: 0,
    y: 0,
    z: 0,
    t: 0,
    a: 0,
    b: 0,
    c: 0,
  };
  history: HistoryLine[] = [];
  entry = "";
  secondary = false;
  lastError: string | null = null;
  fractionToggle: string | null = null; // last exact/frac form if any
  randSeed = (Date.now() % 2147483647) || 1;

  /** Lists for simple 1-var / 2-var stats (documented list editor: up to 3 lists). */
  lists: { L1: number[]; L2: number[]; L3: number[] } = { L1: [], L2: [], L3: [] };

  clearEntry() {
    this.entry = "";
    this.lastError = null;
    this.fractionToggle = null;
  }

  clearAll() {
    this.clearEntry();
    this.ans = 0;
    this.history = [];
    this.secondary = false;
    for (const k of MEM_KEYS) this.mem[k] = 0;
    this.lists = { L1: [], L2: [], L3: [] };
    this.mode = { ...DEFAULT_MODE };
  }

  pushKey(ch: string) {
    this.lastError = null;
    this.fractionToggle = null;
    this.entry += ch;
  }

  backspace() {
    this.entry = this.entry.slice(0, -1);
  }

  private env(): Env {
    return {
      mode: this.mode,
      ans: this.ans,
      mem: this.mem,
      randSeed: this.randSeed,
    };
  }

  evaluate(expression?: string): string {
    const expr = (expression ?? this.entry).trim();
    if (!expr) return formatDisplay(this.ans, this.mode);
    try {
      const env = this.env();
      const value = this.evalExpr(tokenize(this.normalize(expr)), env);
      this.randSeed = env.randSeed;
      this.ans = value;
      const display = formatDisplay(value, this.mode);
      this.history = [...this.history.slice(-20), { expr, result: display }];
      this.entry = "";
      this.fractionToggle = toFractionString(value);
      this.lastError = null;
      return display;
    } catch (e) {
      this.lastError = e instanceof Error ? e.message : "Error";
      return this.lastError === "DOMAIN" || this.lastError === "SYNTAX"
        ? this.lastError
        : "Error";
    }
  }

  toggleFracDec(): string {
    if (this.fractionToggle && this.history.length) {
      const last = this.history[this.history.length - 1];
      if (last.result === this.fractionToggle) {
        last.result = formatDisplay(this.ans, { ...this.mode, entry: "CLASSIC" });
      } else {
        last.result = this.fractionToggle;
      }
      return last.result;
    }
    const f = toFractionString(this.ans);
    if (f) {
      this.fractionToggle = f;
      return f;
    }
    return formatDisplay(this.ans, this.mode);
  }

  store(key: MemoryKey) {
    this.mem[key] = this.ans;
  }

  recall(key: MemoryKey) {
    this.pushKey(String(this.mem[key]));
  }

  /** Normalize UI glyphs / aliases into parser ids. */
  private normalize(s: string): string {
    return s
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/π/g, "pi")
      .replace(/√/g, "sqrt")
      .replace(/²/g, "^2")
      .replace(/(\d)([a-z(])/gi, "$1*$2")
      .replace(/\)(\d)/g, ")*$1")
      .replace(/\)([a-z(])/gi, ")*$1");
  }

  private evalExpr(tokens: Tok[], env: Env): number {
    let i = 0;

    const peek = () => tokens[i];
    const take = () => tokens[i++];

    const parseExpression = (): number => parseAdd();

    const parseAdd = (): number => {
      let v = parseMul();
      while (peek()?.t === "op" && (peek() as { v: string }).v && "+-".includes((peek() as { v: string }).v)) {
        const op = (take() as { v: string }).v;
        const r = parseMul();
        v = op === "+" ? v + r : v - r;
      }
      return v;
    };

    const parseMul = (): number => {
      let v = parsePow();
      while (peek()?.t === "op" && (peek() as { v: string }).v && "*/%".includes((peek() as { v: string }).v)) {
        const op = (take() as { v: string }).v;
        const r = parsePow();
        if (op === "*") v *= r;
        else if (op === "/") {
          if (r === 0) throw new Error("DOMAIN");
          v /= r;
        } else v = (v * r) / 100; // n% of style: a% → handled as postfix often; here a%b = a*b/100
      }
      return v;
    };

    const parsePow = (): number => {
      let v = parseUnary();
      if (peek()?.t === "op" && (peek() as { v: string }).v === "^") {
        take();
        const exp = parsePow(); // right-assoc
        v = v ** exp;
      }
      // postfix !
      while (peek()?.t === "op" && (peek() as { v: string }).v === "!") {
        take();
        v = factorial(v);
      }
      while (peek()?.t === "op" && (peek() as { v: string }).v === "%") {
        take();
        v = v / 100;
      }
      return v;
    };

    const parseUnary = (): number => {
      if (peek()?.t === "op" && (peek() as { v: string }).v === "-") {
        take();
        return -parseUnary();
      }
      if (peek()?.t === "op" && (peek() as { v: string }).v === "+") {
        take();
        return parseUnary();
      }
      return parsePrimary();
    };

    const callArgs = (): number[] => {
      if (peek()?.t !== "lp") throw new Error("SYNTAX");
      take();
      const args: number[] = [];
      if (peek()?.t !== "rp") {
        args.push(parseExpression());
        while (peek()?.t === "comma") {
          take();
          args.push(parseExpression());
        }
      }
      if (peek()?.t !== "rp") throw new Error("SYNTAX");
      take();
      return args;
    };

    const fn1 = (name: string, x: number): number => {
      const m = env.mode.angle;
      switch (name) {
        case "sin":
          return Math.sin(toRad(x, m));
        case "cos":
          return Math.cos(toRad(x, m));
        case "tan":
          return Math.tan(toRad(x, m));
        case "asin":
        case "sin^-1":
          return fromRad(Math.asin(x), m);
        case "acos":
        case "cos^-1":
          return fromRad(Math.acos(x), m);
        case "atan":
        case "tan^-1":
          return fromRad(Math.atan(x), m);
        case "sinh":
          return Math.sinh(x);
        case "cosh":
          return Math.cosh(x);
        case "tanh":
          return Math.tanh(x);
        case "asinh":
          return Math.asinh(x);
        case "acosh":
          return Math.acosh(x);
        case "atanh":
          return Math.atanh(x);
        case "log":
        case "log10":
          if (x <= 0) throw new Error("DOMAIN");
          return Math.log10(x);
        case "ln":
          if (x <= 0) throw new Error("DOMAIN");
          return Math.log(x);
        case "exp":
          return Math.exp(x);
        case "tenpow":
        case "10^":
          return 10 ** x;
        case "sqrt":
          if (x < 0) throw new Error("DOMAIN");
          return Math.sqrt(x);
        case "sq":
        case "square":
          return x * x;
        case "inv":
        case "recip":
          if (x === 0) throw new Error("DOMAIN");
          return 1 / x;
        case "abs":
          return Math.abs(x);
        case "fact":
          return factorial(x);
        default:
          throw new Error("SYNTAX");
      }
    };

    const parsePrimary = (): number => {
      const tok = peek();
      if (!tok) throw new Error("SYNTAX");

      if (tok.t === "num") {
        take();
        return tok.v;
      }

      if (tok.t === "lp") {
        take();
        const v = parseExpression();
        if (peek()?.t !== "rp") throw new Error("SYNTAX");
        take();
        return v;
      }

      if (tok.t === "id") {
        const idTok = take();
        if (idTok.t !== "id") throw new Error("SYNTAX");
        const id = idTok.v;
        if (id === "pi") return Math.PI;
        if (id === "e" && peek()?.t === "lp") {
          // e( ) not used; bare e is Euler
        }
        if (id === "e" && peek()?.t !== "lp") return Math.E;
        if (id === "ans") return env.ans;
        if (MEM_KEYS.includes(id as MemoryKey)) return env.mem[id as MemoryKey];

        if (id === "npr" || id === "ncr") {
          const args = callArgs();
          if (args.length !== 2) throw new Error("SYNTAX");
          return id === "npr" ? nPr(args[0], args[1]) : nCr(args[0], args[1]);
        }
        if (id === "randint") {
          const args = callArgs();
          if (args.length !== 2) throw new Error("SYNTAX");
          const a = Math.trunc(Math.min(args[0], args[1]));
          const b = Math.trunc(Math.max(args[0], args[1]));
          return a + Math.floor(nextRand(env) * (b - a + 1));
        }
        if (id === "rand") {
          if (peek()?.t === "lp") {
            callArgs();
          }
          return nextRand(env);
        }
        if (id === "root") {
          const args = callArgs();
          if (args.length === 1) {
            if (args[0] < 0) throw new Error("DOMAIN");
            return Math.sqrt(args[0]);
          }
          if (args.length === 2) {
            const [y, x] = args;
            if (x === 0) throw new Error("DOMAIN");
            return Math.sign(y) * Math.abs(y) ** (1 / x);
          }
          throw new Error("SYNTAX");
        }

        // DISTR menu (TI-30X Pro MultiView documented)
        if (
          id === "normalpdf" ||
          id === "normalcdf" ||
          id === "invnorm" ||
          id === "binompdf" ||
          id === "binomcdf" ||
          id === "poissonpdf" ||
          id === "poissoncdf"
        ) {
          const args = callArgs();
          switch (id) {
            case "normalpdf":
              return normalPdf(args[0], args[1] ?? 0, args[2] ?? 1);
            case "normalcdf":
              return normalCdf(args[0], args[1], args[2] ?? 0, args[3] ?? 1);
            case "invnorm":
              return invNorm(args[0], args[1] ?? 0, args[2] ?? 1);
            case "binompdf":
              if (args.length !== 3) throw new Error("SYNTAX");
              return binomPdf(args[0], args[1], args[2]);
            case "binomcdf":
              if (args.length !== 3) throw new Error("SYNTAX");
              return binomCdf(args[0], args[1], args[2]);
            case "poissonpdf":
              if (args.length !== 2) throw new Error("SYNTAX");
              return poissonPdf(args[0], args[1]);
            case "poissoncdf":
              if (args.length !== 2) throw new Error("SYNTAX");
              return poissonCdf(args[0], args[1]);
            default:
              throw new Error("SYNTAX");
          }
        }

        // function(
        if (peek()?.t === "lp") {
          const args = callArgs();
          if (args.length !== 1) throw new Error("SYNTAX");
          return fn1(id, args[0]);
        }

        throw new Error("SYNTAX");
      }

      throw new Error("SYNTAX");
    };

    const result = parseExpression();
    if (i !== tokens.length) throw new Error("SYNTAX");
    if (!Number.isFinite(result)) throw new Error("DOMAIN");
    return result;
  }

  /** 1-Var stats on L1 (mean, σn, σn-1, n, sum, sumsq, min, max). */
  stats1Var(): Record<string, number> | null {
    const xs = this.lists.L1;
    if (xs.length === 0) return null;
    const n = xs.length;
    const sum = xs.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const sumsq = xs.reduce((a, b) => a + b * b, 0);
    const popVar = sumsq / n - mean * mean;
    const sampVar = n > 1 ? (sumsq - (sum * sum) / n) / (n - 1) : 0;
    return {
      n,
      mean,
      sum,
      sumsq,
      sx: Math.sqrt(Math.max(0, sampVar)),
      sigx: Math.sqrt(Math.max(0, popVar)),
      min: Math.min(...xs),
      max: Math.max(...xs),
    };
  }

  /** 2-Var stats on L1 (x) and L2 (y). */
  stats2Var(): Record<string, number> | null {
    const xs = this.lists.L1;
    const ys = this.lists.L2;
    const n = Math.min(xs.length, ys.length);
    if (n === 0) return null;
    const x = xs.slice(0, n);
    const y = ys.slice(0, n);
    const sx = x.reduce((a, b) => a + b, 0);
    const sy = y.reduce((a, b) => a + b, 0);
    const mx = sx / n;
    const my = sy / n;
    let sxx = 0;
    let syy = 0;
    let sxy = 0;
    for (let i = 0; i < n; i++) {
      sxx += (x[i] - mx) ** 2;
      syy += (y[i] - my) ** 2;
      sxy += (x[i] - mx) * (y[i] - my);
    }
    const r = sxx > 0 && syy > 0 ? sxy / Math.sqrt(sxx * syy) : 0;
    const b = sxx > 0 ? sxy / sxx : 0;
    const a = my - b * mx;
    return { n, meanx: mx, meany: my, sumx: sx, sumy: sy, r, a, b, r2: r * r };
  }

  /** Function table y = f(x) for Auto mode — documented table feature. */
  functionTable(
    fnSource: string,
    start: number,
    step: number,
    rows: number,
  ): { x: number; y: number | string }[] {
    const out: { x: number; y: number | string }[] = [];
    for (let i = 0; i < rows; i++) {
      const x = start + i * step;
      this.mem.x = x;
      try {
        const y = this.evalExpr(tokenize(this.normalize(fnSource.replace(/x/gi, `(${x})`))), this.env());
        out.push({ x, y });
      } catch {
        out.push({ x, y: "Error" });
      }
    }
    return out;
  }
}
