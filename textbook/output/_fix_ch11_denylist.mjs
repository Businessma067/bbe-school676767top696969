import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";

function fixSource(s) {
  let t = s;

  // File stores \\text as four chars \ \ t e x t in template literals → written as \\text
  // Move \text{...} out of $$...$$ and $...$
  t = t.replace(
    /\$\$([^$]*?)\\\\text\{([^}]+)\}\s*\$\$/g,
    (_m, inner, words) => `$$${String(inner).trim()}$$\n\n${String(words).trim()}`,
  );
  t = t.replace(
    /(?<!\$)\$([^$\n]*?)\\\\text\{([^}]+)\}\s*\$(?!\$)/g,
    (_m, inner, words) => `$${String(inner).trim()}$ ${String(words).trim()}`,
  );

  // Blank line between consecutive numbered steps
  t = t.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

  // Wrap bare numbered calc steps: **3.** FV = ...
  t = t.replace(/^(\*\*\d+\.\*\*)\s+(?!\$)([^\n]{8,240})$/gm, (full, num, body) => {
    const b0 = body.trim();
    if (b0.startsWith("$")) return full;
    const looksCalc =
      /=/.test(b0) &&
      /(FV|EAR|PV|S\(|\bR\b|\bI\b|\bg\b|nt\b|Gap|Periodic|Nominal|Difference|Total|Doubling|deposit|balance|rate|growth|≈|approx|×|\\\\times|\\\\approx|\\\\%|\\\$)/i.test(
        b0,
      );
    if (!looksCalc) return full;
    if (
      /^(Trap:|The |Because |With |If |Annual |Compare |Half |First |Second |Same |Because )/i.test(b0) &&
      !/^(Gap|FV|EAR|PV|R|I|g|nt|S|t|Periodic|Nominal|Difference|Total)\b/i.test(b0)
    ) {
      return full;
    }
    let formula = b0;
    let trailDot = false;
    if (/\.$/.test(formula)) {
      formula = formula.slice(0, -1);
      trailDot = true;
    }
    formula = formula
      .replace(/×/g, "\\\\times")
      .replace(/≈/g, "\\\\approx")
      .replace(/(?<![\\])%/g, "\\\\%");
    return `${num} $${formula}$.${trailDot ? "" : ""}`.replace(/\.\s*$/, ".") ;
  });

  // Half-math: $...$ ≈ \$9,650.61
  t = t.replace(
    /\$([^$\n]+)\$\s*≈\s*\\\\\$([0-9][0-9,]*(?:\.[0-9]+)?)/g,
    (_m, a, b) => `$${a} \\\\approx \\\\$${b}$`,
  );
  t = t.replace(
    /\$([^$\n]+)\$\s*≈\s*([0-9][0-9,]*(?:\.[0-9]+)?\\\\%)/g,
    (_m, a, b) => `$${a} \\\\approx ${b}$`,
  );

  // Bare tactical ledes: FV = ... matching exactly.
  t = t.replace(
    /^(FV|EAR|PV|R|I|g|nt|Gap|Periodic rate|Nominal annual rate|Total growth|Difference)\s*=\s*([^\n]+)$/gm,
    (full, lhs, rhs) => {
      if (full.includes("$")) return full;
      let body = `${lhs} = ${rhs}`
        .replace(/×/g, "\\\\times")
        .replace(/≈/g, "\\\\approx");
      if (/\.$/.test(body)) body = body.slice(0, -1);
      return `$${body}$.`;
    },
  );

  // Any remaining \text{ → \mathrm{ (still need valid math delimiters around it)
  t = t.replace(/\\\\text\{/g, "\\\\mathrm{");

  return t;
}

const raw = fs.readFileSync(PATH, "utf8");
const fixed = fixSource(raw);
fs.writeFileSync(PATH, fixed);

// verify against parsed content
const { MATH_CH11_FINANCIAL: T } = await import("../../src/data/math-ch11-financial.ts");
let bare = 0;
let textLeft = 0;
for (const task of T) {
  const blob = [task.solution_overview || "", ...(task.tactical_explanations || [])].join("\n");
  textLeft += (blob.match(/\\text\{/g) || []).length;
  for (const line of blob.split("\n")) {
    if (/^\*\*\d+\.\*\*\s+(?!\$)/.test(line) && /=/.test(line) && /FV|Gap|R =|nt =|Periodic/i.test(line))
      bare++;
  }
}
console.log(
  JSON.stringify({
    changed: raw !== fixed,
    textInFile: (fixed.match(/\\\\text\{/g) || []).length,
    mathrmInFile: (fixed.match(/\\\\mathrm\{/g) || []).length,
    bareAfterParse: bare,
    textAfterParse: textLeft,
    sample: (fixed.match(/\*\*3\.\*\*[^\n]+/) || [])[0],
    sampleE: (fixed.match(/0\.24[^\n]{0,40}/) || [])[0],
  }),
);
