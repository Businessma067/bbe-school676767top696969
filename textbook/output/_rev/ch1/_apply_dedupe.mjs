import fs from "node:fs";

const BANNED = [
  /The claim names/i,
  /matches the claim/i,
  /as claimed/i,
  /so the statement is True/i,
  /so the statement is False/i,
  /hence the statement holds/i,
  /hence the statement fails/i,
  /so the statement holds/i,
  /so the statement fails/i,
];

export function applyPatches(file, patches) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  let n = 0;
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) continue;
    if (p.tactical_explanations) {
      if (p.tactical_explanations.length !== 5) {
        throw new Error(`${t.id}: expected 5 tacticals, got ${p.tactical_explanations.length}`);
      }
      for (let i = 0; i < 5; i++) {
        const want = t.answer_key[i] ? "True" : "False";
        const head = `**${"ABCDE"[i]}.** → ${want}`;
        if (!p.tactical_explanations[i].startsWith(head)) {
          throw new Error(`${t.id} ${"ABCDE"[i]}: header must start with ${head}`);
        }
        for (const re of BANNED) {
          if (re.test(p.tactical_explanations[i])) {
            throw new Error(`${t.id} ${"ABCDE"[i]}: banned phrase ${re}`);
          }
        }
        if (p.tactical_explanations[i].includes("${")) {
          throw new Error(`${t.id} ${"ABCDE"[i]}: has \${`);
        }
        if (/[\u2013\u2014\u2018\u2019\u201C\u201D]/.test(p.tactical_explanations[i])) {
          throw new Error(`${t.id} ${"ABCDE"[i]}: fancy dash/quote`);
        }
      }
      t.tactical_explanations = p.tactical_explanations;
    }
    if (p.solution_overview) {
      if (/[\u2013\u2014]/.test(p.solution_overview)) {
        throw new Error(`${t.id} overview: em/en dash`);
      }
      t.solution_overview = p.solution_overview;
    }
    n++;
  }
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  return n;
}
