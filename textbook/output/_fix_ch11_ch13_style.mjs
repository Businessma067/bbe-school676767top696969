import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");

// Ch13 style: words outside math, formulas/numbers inside $...$
// Convert "Label $= formula$" → "Label: $formula$"
s = s.replace(
  /(\*\*\d+\.\*\*) ((?:Periodic rate|Nominal annual rate|Total growth|Difference|Gap|First gap|second gap|Quarterly periodic rate|Monthly periodic rate|Effective annual rate|Future value|Balance|Doubling time|Tripling time|Present value|Deposit|Interest)[^$\n]{0,40}?) \$= /g,
  "$1 $2: $",
);
s = s.replace(
  /(\*\*\d+\.\*\*) ([A-Za-z][A-Za-z0-9()/%\- ]{0,48}?) \$= /g,
  "$1 $2: $",
);

// Broken "$R$ = nominal rate = 7.20\%$," patterns
s = s.replace(
  /gives \$R\$ = nominal rate = ([0-9.]+)\\\%\$/g,
  "gives $R = $1\\%$ (the nominal rate)",
);
s = s.replace(
  /\$R\$ = nominal rate = ([0-9.]+)\\\%\$/g,
  "$R = $1\\%$ (the nominal rate)",
);

// "gives R = nominal rate = 7.20%" bare leftovers
s = s.replace(
  /gives R = nominal rate = ([0-9.]+)%/g,
  "gives $R = $1\\%$ (the nominal rate)",
);

// Ensure blank line between numbered steps
s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

// Kill any remaining \text{
s = s.replace(/\\\\text\{/g, "\\\\mathrm{");

fs.writeFileSync(PATH, s);

const { MATH_CH11_FINANCIAL: T } = await import("../../src/data/math-ch11-financial.ts");
console.log(T[0].solution_overview.split("Part 3")[1]?.slice(0, 650));
let labelEq = 0;
let broken = 0;
for (const t of T) {
  const blob = [t.solution_overview || "", ...t.tactical_explanations].join("\n");
  if (/\*\*\d+\.\*\*[^\n]*\$=/.test(blob)) labelEq++;
  if (/\$[A-Za-z]+\$\s*=/.test(blob)) broken++;
}
console.log(JSON.stringify({ parse: T.length, labelEq, broken }));
