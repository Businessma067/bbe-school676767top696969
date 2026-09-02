import { MATH_CH1_LOGIC } from "../../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH8_POWER_FUNCTIONS } from "../../../src/data/math-ch8-power-functions.ts";
import { MATH_CH11_FINANCIAL } from "../../../src/data/math-ch11-financial.ts";

function norm(s) {
  return (s || "").replace(/[\\]/g, "").replace(/["']/g, "").trim();
}

function check(name, arr) {
  let n = 0;
  const ids = new Set();
  for (const t of arr) {
    const ctx = norm(t.context);
    const ti = norm(t.title);
    if (ids.has(t.title)) console.log(name, "DUP TITLE", t.id, JSON.stringify(t.title));
    ids.add(t.title);
    const suspicious =
      (ti.length > 0 && ti.length < ctx.length && ctx.slice(0, ti.length) === ti) ||
      /,\s*$/.test(ti) ||
      /\bLet\s*,?\s*$/.test(ti) ||
      /\bi\.e$/.test(ti) ||
      ti.split(" ").length <= 2 && ti.length < 10;
    if (suspicious) {
      n += 1;
      console.log(name, t.id, JSON.stringify(t.title));
    }
  }
  console.log(name, "total suspicious titles:", n, "/", arr.length);
}

check("ch1", MATH_CH1_LOGIC);
check("ch5", MATH_CH5_LINEAR_EQUATIONS);
check("ch8", MATH_CH8_POWER_FUNCTIONS);
check("ch11", MATH_CH11_FINANCIAL);
