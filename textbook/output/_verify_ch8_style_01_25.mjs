import { PATCHES } from "./_ch8_style_01_25.mjs";
import { MATH_CH8_POWER_FUNCTIONS as TASKS } from "./_ch8_data.mjs";

const L = "ABCDE";
const fail = [];

console.log("PATCHES length:", PATCHES.length, PATCHES.length === 25 ? "OK" : "FAIL");
const orders = PATCHES.map((p) => p.sort_order).join(",");
const want = Array.from({ length: 25 }, (_, i) => i + 1).join(",");
console.log("sort_orders 1..25:", orders === want ? "OK" : "FAIL " + orders);

function eqs(s) {
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1].replace(/\s+/g, ""));
  return out;
}

for (const p of PATCHES) {
  const t = TASKS.find((x) => x.sort_order === p.sort_order);
  if (!t) {
    fail.push("no task " + p.sort_order);
    continue;
  }
  if (p.tactical_explanations.length !== 5) fail.push(p.sort_order + " not 5 explanations");
  p.tactical_explanations.forEach((e, i) => {
    const id = "8." + String(p.sort_order).padStart(2, "0") + L[i];
    const header = "**" + L[i] + ".** \u2192 " + (t.answer_key[i] ? "True" : "False");
    if (!e.startsWith(header + "\n")) fail.push(id + " header mismatch: " + JSON.stringify(e.slice(0, 32)));
    if (e.includes("This claim")) fail.push(id + " contains 'This claim'");
    for (const bad of ["The trap is", "The instinct", "tempting", "The trap"]) {
      if (e.includes(bad)) fail.push(id + " label: " + bad);
    }
    if (e.includes("\u2014")) fail.push(id + " em-dash");
    if (e.includes("${")) fail.push(id + " template interpolation");
    const tail = e.trimEnd();
    if (!(tail.endsWith("so the statement is True.") || tail.endsWith("so the statement is False."))) {
      fail.push(id + " closing: " + JSON.stringify(tail.slice(-50)));
    }
    const firstMath = e.indexOf("$$");
    if (firstMath < 0) fail.push(id + " no display math");
    const oldEq = eqs(t.tactical_explanations[i]);
    const newEq = eqs(e);
    const missing = oldEq.filter((q) => !newEq.includes(q));
    if (missing.length) fail.push(id + " missing eq: " + missing.join("  ||  "));
    const italics = e
      .replace(/\$[^$]*\$/g, "")
      .replace(/\*\*[^*\n]+\*\*/g, "")
      .match(/\*[^*\n]+\*/g);
    if (italics) fail.push(id + " italics: " + italics.join(" "));
  });
}

console.log("problems:", fail.length);
fail.forEach((f) => console.log(" -", f));
