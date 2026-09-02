import fs from "node:fs";
import path from "node:path";
import { MATH_CH1_LOGIC } from "../../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH8_POWER_FUNCTIONS } from "../../../src/data/math-ch8-power-functions.ts";
import { MATH_CH11_FINANCIAL } from "../../../src/data/math-ch11-financial.ts";

const chapters = [
  ["ch1", MATH_CH1_LOGIC],
  ["ch5", MATH_CH5_LINEAR_EQUATIONS],
  ["ch8", MATH_CH8_POWER_FUNCTIONS],
  ["ch11", MATH_CH11_FINANCIAL],
];

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

for (const [name, arr] of chapters) {
  const dir = path.join("textbook/output/_rev", name);
  fs.mkdirSync(dir, { recursive: true });
  const parts = chunk(arr, 10);
  parts.forEach((part, i) => {
    const a = part[0].sort_order;
    const b = part[part.length - 1].sort_order;
    const file = `${String(a).padStart(2, "0")}_${String(b).padStart(2, "0")}.json`;
    fs.writeFileSync(path.join(dir, file), JSON.stringify(part, null, 2) + "\n");
  });
  console.log(name, arr.length, "files", parts.length);
}
