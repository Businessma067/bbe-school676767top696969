/**
 * Pass 3 (safe): remaining algebraic ratios ONLY inside $...$ / $$...$$.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");
const before = s;
const F = "\\\\frac";
let n = 0;

function clean(body) {
  let b = body;
  let local = 0;
  const bags = [];
  const stash = (m) => {
    const k = `⟦${bags.length}⟧`;
    bags.push(m);
    return k;
  };
  for (let p = 0; p < 12; p += 1) {
    const next = b.replace(/\\+frac\{[^{}]*\}\{[^{}]*\}/g, stash);
    if (next === b) break;
    b = next;
  }

  const go = (re, build) => {
    b = b.replace(re, (...args) => {
      local += 1;
      return build(...args);
    });
  };

  // comma numbers
  go(
    /(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)\/(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?|-?\d+(?:\.\d+)?)/g,
    (_, a, c) => `${F}{${a}}{${c}}`,
  );
  go(
    /(-?\d+(?:\.\d+)?)\/(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?)/g,
    (_, a, c) => `${F}{${a}}{${c}}`,
  );

  // (a)/(b) and (a)/num
  go(/\(([^()]{1,100})\)\s*\/\s*\(([^()]{1,100})\)/g, (_, a, c) => `${F}{(${a})}{(${c})}`);
  go(/\(([^()]{1,100})\)\s*\/\s*(-?\d+(?:\.\d+)?)/g, (_, a, c) => `${F}{(${a})}{${c}}`);
  go(
    /\(([^()]{1,100})\)\s*\/\s*([A-Za-z\\][A-Za-z0-9_\\]*)/g,
    (_, a, c) => `${F}{(${a})}{${c}}`,
  );

  // identifier/identifier incl. A(t)/B(t), v_0/v(t)
  go(
    /([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]{0,30}\))?)\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]{0,30}\))?)/g,
    (_, a, c) => `${F}{${a}}{${c}}`,
  );

  // powered num/den: r^{2}/2
  go(
    /([A-Za-z]\^\{[^}]+\})\s*\/\s*(-?\d+(?:\.\d+)?|[A-Za-z](?:_[A-Za-z0-9]+)?)/g,
    (_, a, c) => `${F}{${a}}{${c}}`,
  );

  // 1/(1+r)^{n}, a/(1-k)
  go(
    /(-?\d+(?:\.\d+)?|[A-Za-z])\s*\/\s*\(([^()]{1,60})\)(\^\{[^}]+\})?/g,
    (_, a, c, exp) => `${F}{${a}}{(${c})${exp || ""}}`,
  );

  // S(t)/e^{rt}
  go(
    /([A-Za-z](?:\([^()]{0,30}\))?)\s*\/\s*(e\^\{[^}]+\})/g,
    (_, a, c) => `${F}{${a}}{${c}}`,
  );

  // a(...)/(...)
  go(
    /([A-Za-z]\([^()]{1,60}\))\s*\/\s*\(([^()]{1,60})\)/g,
    (_, a, c) => `${F}{${a}}{(${c})}`,
  );

  go(/dt\^\*\/dr/g, () => `${F}{dt^*}{dr}`);

  for (let i = bags.length - 1; i >= 0; i -= 1) {
    b = b.split(`⟦${i}⟧`).join(bags[i]);
  }

  // \ln(...)/denom after restore
  b = b.replace(
    /\\+ln\(([^()]{1,80})\)\s*\/\s*(\([^()]{1,80}\)|[A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?)/g,
    (_, a, c) => {
      local += 1;
      return `${F}{\\ln(${a})}{${c}}`;
    },
  );
  b = b.replace(
    /\\+ln(\s*\\+frac\{[^{}]*\}\{[^{}]*\})\s*\/\s*([A-Za-z\\]+|-?\d+(?:\.\d+)?)/g,
    (_, a, c) => {
      local += 1;
      return `${F}{\\ln${a}}{${c}}`;
    },
  );

  return { text: b, local };
}

let out = "";
let i = 0;
while (i < s.length) {
  if (s.startsWith("$$", i)) {
    const end = s.indexOf("$$", i + 2);
    if (end < 0) {
      out += s.slice(i);
      break;
    }
    const body = s.slice(i + 2, end);
    if (body.length > 5000 || /difficulty_level/.test(body)) {
      out += `$$${body}$$`;
    } else {
      const { text, local } = clean(body);
      n += local;
      out += `$$${text}$$`;
    }
    i = end + 2;
    continue;
  }
  if (s[i] === "$") {
    const after = s[i + 1];
    const end = s.indexOf("$", i + 1);
    if (end < 0) {
      out += s.slice(i);
      break;
    }
    const body = s.slice(i + 1, end);
    // bare currency
    if (after && /\d/.test(after) && /^[\d,]+(?:\.\d+)?$/.test(body)) {
      out += s.slice(i, end + 1);
      i = end + 1;
      continue;
    }
    if (body.length <= 800 && !/difficulty_level/.test(body)) {
      const { text, local } = clean(body);
      n += local;
      out += `$${text}$`;
    } else {
      out += s.slice(i, end + 1);
    }
    i = end + 1;
    continue;
  }
  out += s[i];
  i += 1;
}

out = out.replace(/\\{3,}frac/g, "\\\\frac");
if (/difficulty_level:\s*`\\+frac/.test(out)) throw new Error("difficulty corrupted");
const diffs = (out.match(/difficulty_level:\s*`\d+\/5`/g) || []).length;
if (diffs < 100) throw new Error(`difficulty damaged: ${diffs}`);

fs.writeFileSync(path, out);
console.log({ n, changed: out !== before, diffs });
