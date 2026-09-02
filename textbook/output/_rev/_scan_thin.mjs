import fs from "fs";
import path from "path";

const bugs = [];
const hist = {};
const veryThin = [];
const lettersWithDupPhrase = [];

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      const blobs = [t.solution_overview, ...(t.tactical_explanations || [])];
      blobs.forEach((s, idx) => {
        if (/\$\$\d/.test(s)) bugs.push(`${t.id} field${idx} $$digit`);
        if (/\$\{/.test(s)) bugs.push(`${t.id} field${idx} \${`);
        if (/matches the claim|as claimed|The claim names|so the statement is (True|False)/i.test(s)) {
          lettersWithDupPhrase.push(`${t.id} field${idx}`);
        }
      });
      t.tactical_explanations.forEach((e, i) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const words = body.split(/\s+/).filter(Boolean).length;
        const bucket = words < 20 ? "<20" : words < 30 ? "20-29" : words < 40 ? "30-39" : words < 55 ? "40-54" : "55+";
        hist[bucket] = (hist[bucket] || 0) + 1;
        if (words < 30) veryThin.push({ id: t.id, L: "ABCDE"[i], w: words, body: body.slice(0, 180) });
      });
    }
  }
}

console.log("hist", hist);
console.log("\nbugs", bugs);
console.log("banned phrases", lettersWithDupPhrase);
console.log("\nvery thin <30:", veryThin.length);
console.log(veryThin.map((x) => `${x.id} ${x.L} w=${x.w}\n  ${x.body.replace(/\n/g, " / ")}`).join("\n\n"));
