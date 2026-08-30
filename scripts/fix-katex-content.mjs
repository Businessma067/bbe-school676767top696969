/**
 * Surgical in-place KaTeX/authoring fixes (preserves formatting).
 *
 * - Unwrap `${expr}$` / `$${expr}$$` only when braces wrap the whole span
 * - Escape prose currency `$12` → `\\$12` in file (JSON/TS → runtime `\$12`)
 * - Wrap bare probability fractions outside existing math
 * - Split prose glued into display math
 */
import fs from "fs";
import path from "path";

function isSingleOuterGroup(s) {
  if (!s.startsWith("{") || !s.endsWith("}")) return false;
  let d = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") d++;
    else if (s[i] === "}") {
      d--;
      if (d === 0 && i !== s.length - 1) return false;
    }
  }
  return d === 0;
}

function indexOfUnescapedDollar(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

function mathMask(s) {
  const mask = new Uint8Array(s.length);
  let i = 0;
  while (i < s.length) {
    if (s.startsWith("$$", i)) {
      const end = s.indexOf("$$", i + 2);
      if (end === -1) break;
      mask.fill(1, i, end + 2);
      i = end + 2;
      continue;
    }
    if (s[i] === "\\" && s[i + 1] === "$") {
      i += 2;
      continue;
    }
    if (s[i] === "$") {
      const end = indexOfUnescapedDollar(s, i + 1);
      if (end === -1) break;
      mask.fill(1, i, end + 1);
      i = end + 1;
      continue;
    }
    i++;
  }
  return mask;
}

function replaceOutsideMath(s, re, replacer) {
  const mask = mathMask(s);
  let out = "";
  let last = 0;
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(s))) {
    if (mask[m.index]) continue;
    out += s.slice(last, m.index);
    out += replacer(m);
    last = m.index + m[0].length;
  }
  out += s.slice(last);
  return out;
}

/** Unwrap only when outer braces wrap the whole math span. */
function unwrapDollarBraces(s) {
  let out = "";
  let i = 0;
  while (i < s.length) {
    if (s.startsWith("$$", i)) {
      const end = s.indexOf("$$", i + 2);
      if (end === -1) {
        out += s.slice(i);
        break;
      }
      const rawInner = s.slice(i + 2, end);
      const trimmed = rawInner.trim();
      if (isSingleOuterGroup(trimmed)) {
        out += "$$" + trimmed.slice(1, -1).trim() + "$$";
      } else {
        out += s.slice(i, end + 2);
      }
      i = end + 2;
      continue;
    }
    if (s[i] === "\\" && s[i + 1] === "$") {
      out += "\\$";
      i += 2;
      continue;
    }
    if (s[i] === "$") {
      const end = indexOfUnescapedDollar(s, i + 1);
      if (end === -1) {
        out += s.slice(i);
        break;
      }
      const rawInner = s.slice(i + 1, end);
      const trimmed = rawInner.trim();
      if (isSingleOuterGroup(trimmed)) {
        out += "$" + trimmed.slice(1, -1) + "$";
      } else {
        out += s.slice(i, end + 1);
      }
      i = end + 1;
      continue;
    }
    out += s[i];
    i++;
  }
  return out;
}

/**
 * Escape currency in file source. Writes two backslashes so JSON/TS yield `\$`.
 * Runs WITHOUT math-mask so `$0 with probability…$10` pairs get escaped.
 */
function escapeProseCurrency(s) {
  return s.replace(
    /(?<!\\)\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?)(?=\s*(?:billion|million|thousand|dollars?|with|loss|profit|chance|public|fab|per|in\b|to\b|and\b|or\b|from\b|over\b|between\b|against\b|discount|premium|rise|floor|total|figure|construction|machine|programme|program|investment|subsid(?:y|ies)|aid\b))/gi,
    (_m, num) => "\\\\$" + num,
  );
}

function wrapBareProbFractions(s) {
  let t = replaceOutsideMath(
    s,
    /\b(equals|is|of)\s+(exactly\s+)?(\d+)\s*\/\s*(\d+)\b/gi,
    (m) => `${m[1]} ${m[2] || ""}$${m[3]}/${m[4]}$`,
  );
  t = replaceOutsideMath(
    t,
    /\b1\s*[−-]\s*\((\d+)\/(\d+)\)(⁴|\^[0-9]+)/g,
    (m) => {
      const p = m[3] === "⁴" ? "^4" : m[3];
      return `$1-(${m[1]}/${m[2]})${p}$`;
    },
  );
  return t;
}

function fixGluedDisplayProse(s) {
  return s.replace(
    /\$\$\s*(\([^)]+\)|\[[^\]]+\])\s*,\s*([A-Za-z][^$]*?)\s*\$\$/g,
    (_, math, prose) => `$$${math}$$, ${prose}`,
  );
}

function optsFor(file) {
  const english =
    file.includes("/english/") || file.includes("how-it-works");
  const prob =
    /ch12|probability|binomial|ch13|math-cases-ch12|math-cases-ch13/.test(
      file,
    );
  const moneyMath = prob || /math-cases-ch12|math-ch12/.test(file);
  return {
    currency: english || moneyMath,
    bareFractions: prob,
    unwrap: true,
  };
}

function fixText(s, opts) {
  let t = s;
  // Currency first — before math pairing can swallow `$0 … $10`
  if (opts.currency) t = escapeProseCurrency(t);
  t = fixGluedDisplayProse(t);
  if (opts.unwrap) t = unwrapDollarBraces(t);
  if (opts.bareFractions) t = wrapBareProbFractions(t);
  return t;
}

const TARGETS = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (["node_modules", "__pycache__"].includes(ent.name)) continue;
      walk(p);
    } else if (
      /\.(json|ts)$/.test(ent.name) &&
      /math-|how-it-works|english\//.test(p)
    ) {
      if (/SCHEMA|math-chapters|custom-mock|routeTree/.test(p)) continue;
      TARGETS.push(p);
    }
  }
}
walk("src/data");

const changed = [];
for (const file of TARGETS) {
  const before = fs.readFileSync(file, "utf8");
  const needs =
    /\$\{/.test(before) ||
    (optsFor(file).currency && /\$\d/.test(before)) ||
    (optsFor(file).bareFractions &&
      (/\bequals\s+\d+\s*\//.test(before) ||
        /\bis\s+(exactly\s+)?\d+\s*\//.test(before) ||
        /1\s*[−-]\s*\(\d+\/\d+\)/.test(before))) ||
    /with neither endpoint/.test(before);
  if (!needs) continue;

  const opts = optsFor(file);
  if (
    !/\$\{/.test(before) &&
    !opts.currency &&
    !opts.bareFractions &&
    !/with neither/.test(before)
  ) {
    continue;
  }

  const after = fixText(before, opts);
  if (after !== before) {
    if (file.endsWith(".json")) {
      try {
        JSON.parse(after);
      } catch (e) {
        console.error("SKIP invalid JSON after fix:", file, e.message);
        continue;
      }
    }
    fs.writeFileSync(file, after);
    changed.push(file);
  }
}

console.log("changed", changed.length);
for (const f of changed) console.log(f);
