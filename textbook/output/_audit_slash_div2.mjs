/**
 * Audit remaining slash hits in math spans with more context; also scan ch13 json.
 */
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const files = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
  "src/data/math-cases-ch13-binomial.json",
];

function extractMathBodies(text) {
  const bodies = [];
  const re = /\$\$([\s\S]*?)\$\$|\$([^$\n]+?)\$/g;
  let m;
  while ((m = re.exec(text))) {
    const body = m[1] ?? m[2];
    if (!body) continue;
    if (/^[\d,]+(?:\.\d+)?$/.test(body)) continue; // currency
    bodies.push(body);
  }
  return bodies;
}

for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  let texts = [];
  if (f.endsWith(".json")) {
    const j = JSON.parse(raw);
    for (const c of j.cases || []) {
      texts.push(c.context || "", c.overview || "", ...(c.explanations || []));
    }
  } else {
    texts = [raw];
  }
  const hits = [];
  for (const t of texts) {
    for (const body of extractMathBodies(t)) {
      // find / not already in \frac
      const cleaned = body.replace(/\\+frac\{[^{}]*\}\{[^{}]*\}/g, "⟦F⟧");
      const re = /[^\\]\/|^\//;
      if (/[÷]|\\div/.test(cleaned) || /\/(?!\/)/.test(cleaned.replace(/⟦F⟧/g, ""))) {
        const slashParts = cleaned.match(/.{0,40}\/.{0,40}/g) || [];
        for (const p of slashParts) {
          if (p.includes("⟦F⟧") && !p.replace(/⟦F⟧/g, "").includes("/")) continue;
          if (/\\text\{[^}]*\/[^}]*\}/.test(p)) continue; // km/h in text
          if (/difficulty/.test(p)) continue;
          hits.push(p.replace(/\s+/g, " ").trim());
        }
      }
    }
    // also catch display-adjacent spaced ratios outside $ that look math
    const spaced = t.match(/-?\d+(?:\.\d+)?\s+\/\s+-?\d+(?:\.\d+)?/g) || [];
    for (const p of spaced) hits.push(`OUT:${p}`);
  }
  console.log("\n==", f, "hits", hits.length);
  for (const h of [...new Set(hits)].slice(0, 25)) console.log(" ", h);
}
