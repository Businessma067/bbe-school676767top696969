import fs from "node:fs";
import { toValue } from "./_ch11_textcmd_lib.mjs";

/** Copy of FlashcardMath.looksLikeMathInner, used to find inline spans printed as raw text. */
function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  const withoutCmds = t.replace(/\\[a-zA-Z]+/g, " ");
  if (
    /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      withoutCmds,
    )
  ) {
    return false;
  }
  if (t.includes("|")) return false;
  if (
    !/[=<>≠≤≥]/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(t)
  ) {
    return false;
  }
  if (/^[A-Za-z]{2,5}$/.test(t)) return true;
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t)) return false;
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?(?:\s*,\s*[+\-]?\d+(?:\.\d+)?)+$/.test(t)) return true;
  if (/^\{[^{}]+\}$/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  if (/^(?:\\[A-Za-z]+|[A-Za-z])(?:_[A-Za-z0-9]+)?$/.test(t)) return true;
  if (t.length <= 48 && /[a-zA-Z]/.test(t) && /\d/.test(t) && /^[+\-\d.a-zA-Z\s×·*^/()]+$/.test(t)) {
    return true;
  }
  return false;
}

const files = process.argv.slice(2);
for (const file of files) {
  const value = toValue(fs.readFileSync(file, "utf8"));
  const withoutDisplays = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const counts = new Map();
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  let m;
  let total = 0;
  while ((m = inlineRe.exec(withoutDisplays))) {
    const inner = m[1].trim();
    if (/^[A-Za-z]{2,5}$/.test(inner) && !looksLikeMathInner(inner)) {
      total += 1;
      counts.set(inner, (counts.get(inner) ?? 0) + 1);
    }
  }
  console.log(`\n=== ${file}`);
  console.log(`inline symbol spans printed as raw text: ${total}`);
  for (const [k, v] of [...counts].sort((a, b) => b[1] - a[1])) console.log(`  ${v}x $${k}$`);
}
