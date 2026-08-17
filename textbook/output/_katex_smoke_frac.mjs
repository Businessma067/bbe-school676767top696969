import fs from "fs";
import katex from "katex";

const files = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
];

function extract(text) {
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$|\$([^$\n]{1,400}?)\$/g;
  let m;
  while ((m = re.exec(text))) {
    const body = (m[1] ?? m[2] ?? "").trim();
    if (!body || /^[\d,]+(?:\.\d+)?$/.test(body)) continue;
    if (body.includes("\\frac")) out.push(body);
  }
  return out;
}

let errors = 0;
let checked = 0;
for (const f of files) {
  const bodies = extract(fs.readFileSync(f, "utf8"));
  // sample up to 80 frac expressions per file
  const sample = bodies.filter((_, i) => i % Math.max(1, Math.floor(bodies.length / 80)) === 0).slice(0, 80);
  for (const b of sample) {
    checked += 1;
    try {
      katex.renderToString(b, { throwOnError: true, displayMode: true });
    } catch (e) {
      errors += 1;
      if (errors <= 12) console.log("FAIL", f, b.slice(0, 120), "→", e.message.slice(0, 100));
    }
  }
  console.log(f, "frac-spans", bodies.length, "checked", sample.length);
}

// ch13 json
const j = JSON.parse(fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8"));
let c13 = 0;
for (const c of j.cases || []) {
  if (!/^\d+\/5$/.test(c.difficulty_level || "")) {
    console.log("bad difficulty", c.case_id, c.difficulty_level);
    errors += 1;
  }
  for (const t of [c.overview, c.context, ...(c.explanations || [])]) {
    if (!t || !t.includes("\\frac")) continue;
    for (const body of extract(t).slice(0, 3)) {
      c13 += 1;
      try {
        katex.renderToString(body, { throwOnError: true, displayMode: true });
      } catch (e) {
        errors += 1;
        if (errors <= 12) console.log("FAIL ch13", body.slice(0, 120), e.message.slice(0, 80));
      }
    }
  }
}
console.log({ checked, c13, errors });
