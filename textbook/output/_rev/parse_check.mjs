import { MATH_CH1_LOGIC } from "../../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH8_POWER_FUNCTIONS } from "../../../src/data/math-ch8-power-functions.ts";
import { MATH_CH11_FINANCIAL } from "../../../src/data/math-ch11-financial.ts";

function chk(name, arr) {
  let bad = 0;
  const titles = [];
  const d = {};
  for (const t of arr) {
    if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5) bad += 1;
    if (!t.solution_overview) bad += 1;
    if (/^Let($| )/.test(t.title) && t.title.length < 25) titles.push(`${t.id}:${t.title}`);
    const blob = [t.solution_overview, ...t.tactical_explanations].join("\n");
    if (blob.includes("${")) bad += 1;
    d[t.difficulty_level] = (d[t.difficulty_level] || 0) + 1;
  }
  console.log(name, arr.length, "structBad", bad, "diff", JSON.stringify(d), "oddTitles", titles.slice(0, 8).join(" | ") || "none");
}

chk("ch1", MATH_CH1_LOGIC);
chk("ch5", MATH_CH5_LINEAR_EQUATIONS);
chk("ch8", MATH_CH8_POWER_FUNCTIONS);
chk("ch11", MATH_CH11_FINANCIAL);
