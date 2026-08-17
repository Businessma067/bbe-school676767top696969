import fs from "node:fs";
import { splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

/** Copy of FlashcardMath.looksLikeMathInner (current source). */
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

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

/** Report every LaTeX chunk the renderer would print as raw text. */
function rawChunks(value) {
  const out = [];
  const withoutDisplays = value.replace(/\$\$([\s\S]*?)\$\$/g, (whole, body) => {
    if (hasProseWords(body)) out.push({ kind: "display", body: body.trim() });
    return " ";
  });
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  let m;
  while ((m = inlineRe.exec(withoutDisplays))) {
    if (/\\[a-zA-Z]+/.test(m[1]) && !looksLikeMathInner(m[1])) {
      out.push({ kind: "inline", body: m[1].trim() });
    }
  }
  return out;
}

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const wanted = process.argv.slice(2);
for (const task of splitTasks(src)) {
  const caseId = task.body.match(/case_id: `([^`]+)`/)?.[1] ?? task.id;
  if (wanted.length && !wanted.some((w) => caseId.includes(w) || task.id === w)) continue;
  const chunks = rawChunks(toValue(task.body));
  if (!chunks.length) continue;
  console.log(`\n${caseId} (${task.id}): ${chunks.length} raw chunk(s)`);
  for (const c of chunks) console.log(`  [${c.kind}] ${c.body.slice(0, 140)}`);
}
