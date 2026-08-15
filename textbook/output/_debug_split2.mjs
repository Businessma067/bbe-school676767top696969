import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const src = fs.readFileSync(path.join(root, "src", "data", "math-ch1-logic.ts"), "utf8");

let jsSrc = src
  .replace(/import type \{[^}]*\} from "[^"]*";\n?/g, "")
  .replace(/: MathTask\[\]/g, "")
  .replace(/ as const/g, "");
const tmpPath = path.join(__dirname, "_tmp_debug.mjs");
fs.writeFileSync(tmpPath, jsSrc, "utf8");
const mod = await import("file://" + tmpPath.replace(/\\/g, "/") + "?t=" + Date.now());
fs.unlinkSync(tmpPath);

const task = mod.MATH_CH1_LOGIC.find((t) => t.id === "math-1-1");
const text = task.solution_overview;

// Reimplement the same indexOfUnescapedDollar / CURRENCY_RE / looksLikeMathInner
// / splitMath used in _verify_render.mjs, to trace part-by-part.
function indexOfUnescapedDollar(t, from = 0) {
  for (let i = from; i < t.length; i++) {
    if (t[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && t[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}
const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])/y;
function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  if (
    /(?<!\\)\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(t)
  ) return false;
  if (t.includes("|")) return false;
  if (
    !/[=<>\u2260\u2264\u2265]/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(t)
  ) return false;
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>\u2260\u2264\u2265]/.test(t) && !/\\[a-zA-Z]+/.test(t)) return false;
  if (/[=<>\u2260\u2264\u2265+\u00d7\u00b7\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  if (t.length <= 48 && /[a-zA-Z]/.test(t) && /\d/.test(t) && /^[+\-\d.a-zA-Z\s\u00d7\u00b7*^/()]+$/.test(t)) return true;
  return false;
}

let i = 0;
let n = 0;
while (i < text.length) {
  if (text[i] === "$") {
    CURRENCY_RE.lastIndex = i;
    const cur = CURRENCY_RE.exec(text);
    const isCur = cur && cur.index === i;
    const end = indexOfUnescapedDollar(text, i + 1);
    const inner = end === -1 ? null : text.slice(i + 1, end);
    const ok = inner === null ? false : looksLikeMathInner(inner);
    n++;
    console.log(n, "pos", i, "isCurrencyMatch", isCur ? cur[0] : null, "pairEnd", end, "inner", JSON.stringify(inner?.slice(0, 40)), "looksLikeMath", ok);
    if (isCur && !(end !== -1 && ok)) {
      i += cur[0].length;
      continue;
    }
    if (end !== -1 && ok) {
      i = end + 1;
      continue;
    }
  }
  i++;
}
