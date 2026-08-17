import fs from "node:fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");

// In source file, inline math is $...$ (single dollar in the .ts template content).
// After previous fix, overview lines look like: **1.** $Periodic rate = 0.072/12 = 0.006 = 0.60\%$.
s = s.replace(/(\*\*\d+\.\*\*) \$Periodic rate = /g, "$1 Periodic rate $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$Nominal annual rate = /g, "$1 Nominal annual rate $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$Total growth = /g, "$1 Total growth $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$Difference = /g, "$1 Difference $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$Gap = /g, "$1 Gap $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$First gap = /g, "$1 First gap $= ");
s = s.replace(/(\*\*\d+\.\*\*) \$second gap = /g, "$1 second gap $= ");

// Pull trailing English out of inline math: $... percentage points, which ...$.
s = s.replace(
  /\$([^$\n]*? = [^$\n]*?) percentage points, which ([^$\n]*)\.\$/g,
  "$$$1$ percentage points, which $2.",
);
s = s.replace(/\$([^$\n]*? = [^$\n]*?), which ([^$\n]*)\.\$/g, "$$$1$, which $2.");
s = s.replace(
  /\$([^$\n]*? = [^$\n]*?) percentage points\.\$/g,
  "$$$1$ percentage points.",
);

fs.writeFileSync(path, s);

const { MATH_CH11_FINANCIAL: T } = await import("../../src/data/math-ch11-financial.ts");
console.log(T[0].solution_overview.split("Part 3")[1]?.slice(0, 600));
console.log("PARSE", T.length);
