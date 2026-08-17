import fs from "node:fs";

const path = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(path, "utf8");

// Gap $= ... = 0.24 percentage points, which ....point$.
s = s.replace(
  /Gap \$= ([^$\n]*?) = ([0-9.]+) percentage points, which ([^$\n]*?)\$\./g,
  "Gap $= $1 = $2$ percentage points, which $3.",
);

// More general: any Label $= calc words English $.
s = s.replace(
  /(Gap|First gap|Difference|Total growth) \$= ([^$\n]*?)(percentage points|points), which ([^$\n]*?)\$\./g,
  "$1 $= $2$ $3, which $4.",
);

fs.writeFileSync(path, s);

const { MATH_CH11_FINANCIAL: T } = await import("../../src/data/math-ch11-financial.ts");
console.log(
  T[0].solution_overview
    .split("\n")
    .filter((l) => l.startsWith("**"))
    .slice(-6)
    .join("\n"),
);
