import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");
const before = s;

// 1) At r $= 0.10: $MATH  → At $r = 0.10$: $MATH
s = s.replace(
  /At (r|t|δ) \$= ([^:$]+): \$/g,
  (_m, v, val) => `At $${v} = ${val}$: $`,
);

// 2) $IDENT $= formula  → $IDENT = formula  (broken double wrap)
s = s.replace(/\$([A-Za-z][A-Za-z0-9_{}\\^()]*(?:_\{[^}]+\})?) \$=/g, "$$$1 =");

// 3) Leftover $$ before punctuation (not display $$)
s = s.replace(/\$\$([.,;:)])/g, "$$$1");

// 4) Un-nest numbered steps that still start with $Label:
s = s.replace(
  /^(\*\*\d+\.\*\*) \$([A-Za-z][^$\n]{0,80}: )\$/gm,
  "$1 $2$",
);

// 5) $...$ months ≈ N years
s = s.replace(
  /\$([^$\n]+)\$ months ≈ ([0-9.]+) years/g,
  "$$$1$ months $\\\\approx $2$ years",
);

// 6) Unicode ≈ inside an otherwise-closed math span: $S_0 = 40,000/1.302253 ≈ \$30,715.86$
s = s.replace(
  /\$([^$\n]*?) ≈ (\\\\\$[0-9,]+\.[0-9]+)\$/g,
  "$$$1 \\\\approx $2$",
);

// 7) Bare FV trap/lede: FV = N × N = \$
s = s.replace(
  /\bFV = ([0-9,]+) × ([0-9.]+) = (\\\\\$[0-9,]+\.[0-9]+)/g,
  "$FV = $1 \\\\times $2 = $3$",
);

// 8) 12 × 1.9% $= 22.80\%$
s = s.replace(
  /(\d+(?:\.\d+)?) × (\d+(?:\.\d+)?)% \$= /g,
  "$$$1 \\\\times $2\\\\% = ",
);

// 9) N×N $=  (50×1.10 $=)
s = s.replace(
  /(\d+(?:,\d{3})*)×(\d+(?:\.\d+)?) \$= /g,
  "$$$1 \\\\times $2 = ",
);

// 10) Trailing period on numbered steps that lost it
s = s.replace(/^(\*\*\d+\.\*\* .+)\$ (\n\n)/gm, "$1$.$2");
s = s.replace(/^(\*\*\d+\.\*\* [^.\n]+)\n\n/gm, (full, body) => {
  if (/\.$/.test(body) || /:$/.test(body)) return full;
  if (!/=/.test(body)) return full;
  return `${body}.\n\n`;
});

// 11) Blank lines between numbered steps
s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

fs.writeFileSync(PATH, s);
console.log("changed", before !== s, before.length, "->", s.length);
