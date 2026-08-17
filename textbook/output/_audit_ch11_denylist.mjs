import fs from "node:fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const GLUE =
  /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i;

function looksLikeMathInner(t) {
  t = t.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  const withoutCmds = t.replace(/\\[a-zA-Z]+/g, " ");
  if (GLUE.test(withoutCmds)) return false;
  if (t.includes("|")) return false;
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t)) return false;
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  return false;
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

function splitMath(input) {
  const text = input;
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
  return parts;
}

const counts = {
  text: 0,
  mathrmOut: 0,
  bareStep: 0,
  halfStep: 0,
  nested: 0,
  lede: 0,
  noblank: 0,
  rejectedMath: 0,
  timesProse: 0,
};
const samples = [];
function add(s) {
  if (samples.length < 70) samples.push(s);
}

for (const t of T) {
  const fields = [["ov", t.solution_overview || ""], ...t.tactical_explanations.map((e, i) => ["t" + i, e])];
  for (const [k, text] of fields) {
    counts.text += (text.match(/\\text\{/g) || []).length;
    const parts = splitMath(text);
    for (const p of parts) {
      if (p.type === "text" && /\\mathrm\{/.test(p.value)) {
        counts.mathrmOut++;
        add(t.id + " " + k + " mathrmOut " + p.value.replace(/\s+/g, " ").slice(0, 90));
      }
      if (p.type === "text" && /×/.test(p.value) && /\d/.test(p.value)) {
        counts.timesProse++;
        add(t.id + " " + k + " times " + p.value.replace(/\s+/g, " ").slice(0, 90));
      }
    }
    if (/\$[A-Za-z][^$\n]{0,40}:\s*\$/.test(text)) {
      counts.nested++;
      add(t.id + " " + k + " nested");
    }
  }

  const ov = t.solution_overview || "";
  const steps = ov.split("\n").filter((l) => /^\*\*\d+\.\*\*/.test(l));
  for (let i = 0; i < steps.length; i++) {
    const line = steps[i];
    const body = line.replace(/^\*\*\d+\.\*\*\s*/, "");
    const parts = splitMath(body);
    const inlines = parts.filter((p) => p.type === "inline" || p.type === "display");
    const prose = parts.filter((p) => p.type === "text").map((p) => p.value).join("");
    if (/\$[A-Za-z].*\$\$/.test(body)) {
      counts.nested++;
      add(t.id + " nested-step " + body.slice(0, 100));
    }
    if (inlines.length === 0 && /(=|≈|×)/.test(body) && /\d/.test(body) && !/^(The |Because |With |If |Compare |Since |Compound |Growth rates|Ranking |Confirms |This |A |More |Year-|Regardless)/i.test(body)) {
      counts.bareStep++;
      add(t.id + " bare-step " + body.slice(0, 110));
    }
    if (/\$[^$\n]+\$\s*(-\s*1\s*)?(≈|\\approx)/.test(body) || /\$[^$\n]+\$\s+[-≈=]/.test(body)) {
      counts.halfStep++;
      add(t.id + " half-step " + body.slice(0, 110));
    }
    for (const p of inlines) {
      if (!looksLikeMathInner(p.value)) {
        counts.rejectedMath++;
        add(t.id + " rejected " + p.value.slice(0, 80));
      }
    }
    if (/, which /.test(body) && /\$=/.test(body) && /which[^$]*\$/.test(body)) {
      add(t.id + " which-in-math " + body.slice(0, 110));
    }
    if (i + 1 < steps.length) {
      const ia = ov.indexOf(steps[i]);
      const ib = ov.indexOf(steps[i + 1], ia);
      if (!/\n\n/.test(ov.slice(ia + steps[i].length, ib))) {
        counts.noblank++;
        add(t.id + " noblank");
      }
    }
  }

  for (const [idx, slot] of (t.tactical_explanations || []).entries()) {
    const lines = slot.split(/\n/);
    const lede = lines.find((l, i) => i > 0 && l.trim() && !l.trim().startsWith("**") && !l.trim().startsWith("$$"));
    if (!lede) continue;
    const L = lede.trim();
    if (!/matching exactly|matching approximately/.test(L) && !/^[A-Z]{1,4}[_\s=]/.test(L) && !/^\$?[A-Za-z].*=/.test(L)) continue;
    if (!/(=|≈|×|\\times|\\approx)/.test(L)) continue;
    const parts = splitMath(L);
    const inlines = parts.filter((p) => p.type === "inline");
    if (inlines.length === 0) {
      counts.lede++;
      add(t.id + " t" + idx + " bare-lede " + L.slice(0, 110));
    } else {
      for (const p of inlines) {
        if (/matching/.test(p.value) || /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(p.value)) {
          counts.lede++;
          add(t.id + " t" + idx + " bad-lede-math " + L.slice(0, 110));
        }
      }
      if (/\$[^$\n]+\$\s*(-\s*1|≈)/.test(L)) {
        counts.lede++;
        add(t.id + " t" + idx + " half-lede " + L.slice(0, 110));
      }
    }
    if (/\$\.\s*$/.test(L) || /\r/.test(lede)) {
      counts.lede++;
      add(t.id + " t" + idx + " cr-lede " + JSON.stringify(L.slice(0, 80)));
    }
  }
}

console.log(JSON.stringify(counts, null, 2));
console.log("---samples---");
console.log(samples.join("\n"));
