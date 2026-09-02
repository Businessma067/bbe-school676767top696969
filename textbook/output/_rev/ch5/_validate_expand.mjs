import { readFileSync } from "fs";

const files = [
  "01_10.json",
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
];

function w(s) {
  return s
    .replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s+\((true|false)\)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

const issues = [];
const samples = {};
for (const f of files) {
  const arr = JSON.parse(readFileSync(new URL("./" + f, import.meta.url), "utf8"));
  for (const t of arr) {
    const expl = t.tactical_explanations || [];
    if (expl.length !== 5) issues.push(t.id + " not 5 letters");
    const wc = expl.map(w);
    if (t.id === "math-5-1" || t.id === "math-5-2" || t.id === "math-5-15" || t.id === "math-5-40" || t.id === "math-5-60") {
      samples[t.id] = wc;
    }
    for (let i = 0; i < expl.length; i++) {
      const s = expl[i];
      const L = "ABCDE"[i];
      const truth = t.answer_key[i];
      if (!s.startsWith("**" + L + ")")) issues.push(t.id + " " + L + " bad header");
      const stmt = t.statements[i];
      if (!s.includes(stmt.slice(0, Math.min(30, stmt.length)))) {
        issues.push(t.id + " " + L + " statement mismatch");
      }
      const closer = truth ? "so the statement is True." : "so the statement is False.";
      if (!s.includes(closer)) issues.push(t.id + " " + L + " missing closer");
      if (s.includes("\u2014") || s.includes("\u2013")) issues.push(t.id + " " + L + " dash");
      if (s.includes("${")) issues.push(t.id + " " + L + " interpol");
      if (/\b[Ww]ait[,:]/.test(s)) issues.push(t.id + " " + L + " wait-word");
    }
    if (t.id !== "math-5-1") {
      console.log(t.id, wc.join("/"), "max", Math.max(...wc), "min", Math.min(...wc), "spread", Math.max(...wc) - Math.min(...wc));
    }
  }
}
console.log("SAMPLES", JSON.stringify(samples));
console.log("issues", issues.length);
for (const x of issues) console.log(x);
