import fs from "node:fs";
import { MATH_CH1_LOGIC } from "../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH11_FINANCIAL } from "../../src/data/math-ch11-financial.ts";

const sets = [
  ["ch1", MATH_CH1_LOGIC],
  ["ch5", MATH_CH5_LINEAR_EQUATIONS],
  ["ch11", MATH_CH11_FINANCIAL],
];

function fieldBlob(t) {
  return [
    t.solution_overview || "",
    ...(t.tactical_explanations || []),
    t.context || "",
    ...(t.statements || []),
  ];
}

const checks = {
  braceComma: (s) => (s.match(/\{,\}/g) || []).length,
  singleStarHeader: (s) => (s.match(/(^|\n)\*[A-E]\)/g) || []).length,
  yearsDoubleStarScar: (s) => (s.match(/years\.\*\*/g) || []).length,
  trueAfterDoubleStar: (s) => (s.match(/\.\*\*\s*\((true|false)\)/gi) || []).length,
  oddDisplayMath: (s) => {
    const n = (s.match(/\$\$/g) || []).length;
    return n % 2 ? 1 : 0;
  },
};

for (const [label, tasks] of sets) {
  const totals = Object.fromEntries(Object.keys(checks).map((k) => [k, 0]));
  const samples = {};
  for (const t of tasks) {
    for (const text of fieldBlob(t)) {
      for (const [name, fn] of Object.entries(checks)) {
        const c = fn(text);
        if (c) {
          totals[name] += c;
          samples[name] ??= [];
          if (samples[name].length < 5) samples[name].push(t.id);
        }
      }
    }
  }
  console.log("\n" + label, JSON.stringify(totals));
  console.log("samples", JSON.stringify(samples));
}
