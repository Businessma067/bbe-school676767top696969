import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const dir = process.argv[2] || "textbook/output/_rev/ch8";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && !f.startsWith("_"));
const letters = "ABCDE";
let n = 0;
let part = 0;
let recov = 0;
let closer = 0;
let dash = 0;
let interp = 0;
let keysBad = 0;
let claimNames = 0;
let sameShape = 0;
const diffs = {};
const katexFail = [];
const thin = [];
const shapeSamples = [];

function scanMath(text, tag) {
  let p = 0;
  while (p < text.length) {
    const s = text.indexOf("$$", p);
    if (s < 0) break;
    const end = text.indexOf("$$", s + 2);
    if (end < 0) {
      katexFail.push(`${tag} unclosed`);
      break;
    }
    try {
      katex.renderToString(text.slice(s + 2, end), { throwOnError: true, displayMode: true });
    } catch (err) {
      katexFail.push(`${tag} ${String(err.message).slice(0, 80)}`);
    }
    p = end + 2;
  }
}

function paraShape(e) {
  const body = e.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*/, "");
  const parts = body.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  return parts.map((p) => (p.startsWith("$$") ? "M" : "T")).join("");
}

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  for (const t of arr) {
    n += 1;
    diffs[t.difficulty_level] = (diffs[t.difficulty_level] || 0) + 1;
    const ov = t.solution_overview || "";
    if (/Part 1: Building the model|Part 2: The model|Part 3: Solve|\*\*Answer\.\*\*/.test(ov)) part += 1;
    if (!t.statements || t.statements.length !== 5) keysBad += 1;
    if (!t.answer_key || t.answer_key.length !== 5) keysBad += 1;
    const shapes = [];
    (t.tactical_explanations || []).forEach((e, i) => {
      if (/The recovered law is/.test(e)) recov += 1;
      if (/so the statement is (True|False)\.|hence the statement (holds|fails)/.test(e)) closer += 1;
      if (/The claim names|matches the claim|as claimed|matching the claim/i.test(e)) claimNames += 1;
      if (e.includes("—") || e.includes("–")) dash += 1;
      if (e.includes("${")) interp += 1;
      const prose = e.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$]+\$/g, " ");
      const w = prose.split(/\s+/).filter(Boolean).length;
      if (w < 25) thin.push(`${t.id}${letters[i]}:${w}`);
      scanMath(e, t.id + letters[i]);
      shapes.push(paraShape(e));
    });
    if (shapes.length === 5 && new Set(shapes).size === 1) {
      sameShape += 1;
      if (shapeSamples.length < 15) shapeSamples.push(`${t.id}:${shapes[0]}`);
    }
    scanMath(ov, t.id + "ov");
  }
}

console.log(
  JSON.stringify(
    { n, part, recov, closer, claimNames, dash, interp, keysBad, sameShape, diffs, katex: katexFail.length, thin: thin.length },
    null,
    2
  )
);
katexFail.slice(0, 25).forEach((x) => console.log("K", x));
thin.slice(0, 30).forEach((x) => console.log("T", x));
shapeSamples.forEach((x) => console.log("S", x));
