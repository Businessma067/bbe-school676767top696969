import { MATH_CH8_POWER_FUNCTIONS as tasks } from "../../src/data/math-ch8-power-functions.ts";

const letters = ["A", "B", "C", "D", "E"];
for (const task of tasks) {
  if (task.sort_order < 61 || task.sort_order > 87) continue;
  const rows = task.tactical_explanations.map((text, i) => {
    const displays = (text.match(/\$\$/g) || []).length / 2;
    const paras = text.split("\n\n").length;
    return `${letters[i]} len=${text.length} disp=${displays} paras=${paras} key=${task.answer_key[i]}`;
  });
  console.log(`8.${task.sort_order} | ${rows.join(" | ")}`);
}
