import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");

// 1) Broken "$R$ = nominal rate = 7.20\%$," → math stays closed
s = s.replace(
  /\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*nominal rate\s*=\s*([0-9.]+)\\\%\$/g,
  "$$$1 = $2\\\\%$ (the nominal rate)",
);
s = s.replace(
  /\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*nominal rate\s*\$=\s*([0-9.]+)\\\%/g,
  "$$$1 = $2\\\\%",
);
s = s.replace(
  /with \$n = 1\$, \$R_a\$ = nominal rate \$=\s*([0-9.]+)\\\%\$ exactly/g,
  "with $n = 1$, $R_a = $1\\\\%$ exactly (the nominal rate)",
);

// 2) Numbered steps: "words $= formula$" → "words: $formula$"
//    or "expr $= formula$" → "$expr = formula$"
function fixNumberedStepLine(line) {
  // Only touch lines that still have the Ch11 scar pattern "... $= ..."
  const m = line.match(/^(\*\*\d+\.\*\*) (.+)$/);
  if (!m) return line;
  const head = m[1];
  let body = m[2];

  // Already clean-ish pure math step: starts with $
  if (body.startsWith("$") && !/\$[A-Za-z][A-Za-z0-9_]*\$\s*=/.test(body)) {
    // still may have "words $= " mid body? rare
  }

  // Repeatedly convert "label $= " → "label: $" when label ends with a letter/%/)
  // and is not a pure math fragment.
  body = body.replace(
    /(^|;\s*|:\s*)([A-Za-z][^$=\n]{0,80}?) \$= /g,
    (full, sep, label) => {
      const trimmed = label.trim();
      // Math-looking leading fragment: "0.09 \\times 520,000" or "2A(t + k)" or "t" or "|k|"
      const mathLead =
        /^[0-9|\\]/.test(trimmed) ||
        /^[A-Za-z]_?[A-Za-z0-9]*(\([^)]*\))?$/.test(trimmed) ||
        /^[A-Za-z]\s*=/.test(trimmed) ||
        /\\times|\\approx|\\ln|\\frac/.test(trimmed);
      if (mathLead && !/\s{2,}|: /.test(trimmed) && trimmed.length < 40 && !/[a-z]{4,}/.test(trimmed.replace(/\\[a-z]+/g, ""))) {
        // Put whole equation in math: open $ before fragment
        return `${sep}$${trimmed} = `;
      }
      // Prose label → colon then math
      return `${sep}${trimmed}: $`;
    },
  );

  // "At 11%: t $= ..." → "At 11%: $t = ..."
  body = body.replace(/:\s*([A-Za-zδΔ|\\][^$=\n]{0,30}?) \$= /g, ": $$$1 = ");

  // "At r $= 5.01\\%," → "At $r = 5.01\\%$,"
  body = body.replace(/\bAt ([A-Za-zδΔ]) \$= /g, "At $$$1 = ");
  body = body.replace(/\bAt δ \$= /g, "At $\\\\delta = ");

  // Fix double dollars / accidental "$$x = "
  body = body.replace(/\$\$+/g, "$$");

  // If we opened math mid-line without closing properly for mathLead case:
  // pattern: "$expr = rest$" is fine if rest ends with $
  // pattern: "$expr = rest" without closing — ensure ends with $
  if ((body.match(/\$/g) || []).length % 2 === 1) {
    if (!body.trimEnd().endsWith("$")) body = body.replace(/(\.?)$/, "$$$1");
  }

  return `${head} ${body}`;
}

// Apply line-wise only inside template string content is hard; apply globally on numbered lines.
s = s
  .split("\n")
  .map((line) => {
    if (/^\*\*\d+\.\*\*/.test(line) && line.includes("$=")) {
      return fixNumberedStepLine(line);
    }
    // Also tactical lines that are numbered the same way
    if (line.includes("**") && line.includes("$=")) {
      // inside longer strings — still a full line in the TS file for overview steps
      return fixNumberedStepLine(line);
    }
    return line;
  })
  .join("\n");

// 3) Global leftover scars: "rate $= ", "Gap $= ", "jump $= " etc. anywhere
s = s.replace(
  /\b((?:periodic rate|Nominal annual rate|Total growth|Difference|Gap|First gap|second gap|First jump|second jump|Quarterly periodic rate|Monthly periodic rate|Effective annual rate|Future value|Balance|Doubling time|Tripling time|Present value|Deposit|Interest|Target ratio|Extra interest[^.\\n]{0,40}|Growth|Naive linear projection|8-year gap)[^$=\n]{0,40}?) \$= /gi,
  "$1: $",
);

// 4) Bare calc opens: "gives $R$ = " leftovers
s = s.replace(/\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*/g, "$$$1 = ");

// 5) Ensure blank line between numbered steps in overviews
s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

fs.writeFileSync(PATH, s);

const { MATH_CH11_FINANCIAL: T } = await import("../../src/data/math-ch11-financial.ts?" + Date.now());
let labelEq = 0;
let broken = 0;
const samples = [];
for (const t of T) {
  const blob = [t.solution_overview || "", ...t.tactical_explanations].join("\n");
  const m = blob.match(/\*\*\d+\.\*\*[^\n]*\$=/g) || [];
  labelEq += m.length;
  for (const x of m) if (samples.length < 20) samples.push(`${t.id}: ${x.slice(0, 100)}`);
  if (/\$[A-Za-z][A-Za-z0-9_]*\$\s*=/.test(blob)) broken++;
}
console.log("---11-1 Part3---");
console.log(T[0].solution_overview.split("Part 3")[1]?.slice(0, 700));
console.log(JSON.stringify({ parse: T.length, labelEq, broken, samples }, null, 2));
