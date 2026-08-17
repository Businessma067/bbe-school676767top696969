import fs from "node:fs";
import path from "node:path";
import { looksLikeMathInner } from "./_looks_like_math_inner.mjs";

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const items = JSON.parse(fs.readFileSync(path.join(dir, "_other_batch_c.json"), "utf8"));
const out = JSON.parse(fs.readFileSync(path.join(dir, "_other_out_c.json"), "utf8"));

function indexOfUnescapedDollar(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

function splitMath(input) {
  const text = input
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");
  const parts = [];
  let i = 0;
  let buf = "";
  const flush = () => {
    if (buf) {
      parts.push({ type: "text", value: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    if (text.startsWith("$$", i)) {
      const end = text.indexOf("$$", i + 2);
      if (end !== -1) {
        flush();
        parts.push({ type: "display", value: text.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === "\\" && text[i + 1] === "$") {
      buf += "\\$";
      i += 2;
      continue;
    }
    if (text[i] === "$") {
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = indexOfUnescapedDollar(text, i + cur[0].length);
        const between = afterMath === -1 ? "" : text.slice(i + 1, afterMath);
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          buf += cur[0];
          i += cur[0].length;
          continue;
        }
      }
      const end = indexOfUnescapedDollar(text, i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        if (looksLikeMathInner(inner)) {
          flush();
          parts.push({ type: "inline", value: inner.trim() });
          i = end + 1;
          continue;
        }
      }
    }
    buf += text[i];
    i += 1;
  }
  flush();
  if (parts.length === 0) parts.push({ type: "text", value: text });
  return parts;
}

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

/** Returns the spans the renderer would print as RAW LaTeX instead of KaTeX. */
function rawSpans(text) {
  const bad = [];
  for (const p of splitMath(text)) {
    if (p.type === "text") continue;
    const raw = p.value.trim();
    if (!raw || !hasProseWords(raw)) continue;
    const noted = raw.match(/^(.+?=.+?)\s*(\([\s\S]*\))\s*$/);
    if (noted && !hasProseWords(noted[1].trim())) continue;
    const leadEq = raw.match(/^([A-Za-z0-9.\s+\-*/^=()]+?=\s*[+\-]?\d+(?:\.\d+)?)(?=\s|\)|$)/);
    if (leadEq && !hasProseWords(leadEq[1])) continue;
    bad.push(raw);
  }
  return bad;
}

let before = 0;
let after = 0;
out.forEach((row, i) => {
  const b = rawSpans(items[i].text);
  const a = rawSpans(row.text);
  before += b.length;
  after += a.length;
  console.log(`${items[i].caseId.padEnd(10)} raw spans ${b.length} -> ${a.length}`);
  for (const s of a) console.log(`   STILL RAW: ${s}`);
});
console.log(`\ntotal raw-latex spans ${before} -> ${after}`);
