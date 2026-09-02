import fs from "node:fs";

export function wc(s) {
  return s.replace(/\*\*/g, "").split(/\s+/).filter(Boolean).length;
}

export function inject(letter, extra) {
  if (!extra) return letter;
  if (/so the statement is (True|False)\.\s*$/.test(letter)) {
    return letter.replace(/,?\s*so the statement is (True|False)\.\s*$/, ".\n\n" + extra + "\n\nso the statement is $1.");
  }
  throw new Error("no closer");
}

export function applyExpand(fp, P, EX, skip = new Set()) {
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  const report = [];
  for (const t of arr) {
    if (skip.has(t.id)) continue;
    const p = P[t.id];
    if (!p) throw new Error("missing " + t.id);
    const extras = (EX && EX[t.id]) || [];
    t.solution_overview = p.ov;
    t.tactical_explanations = p.letters.map((L, i) => inject(L, extras[i] || ""));
    const counts = t.tactical_explanations.map(wc);
    report.push(t.id + " " + counts.join(","));
    for (const L of t.tactical_explanations) {
      if (L.includes("\u2014") || L.includes("${")) throw new Error(t.id + " bad char");
    }
    if (!t.solution_overview.includes("**Part 1")) throw new Error(t.id + " missing Part 1");
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  for (const line of report) console.log(line);
  console.log("wrote", fp);
}
