import fs from "fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const out = JSON.parse(fs.readFileSync("textbook/output/ch11_expanded_61_90.json", "utf8"));
const targets = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_expand_targets_61_90.json", "utf8"),
);

const issues = [];
let n = 0;
const lens = [];
const deltas = [];

const tasks = Object.keys(out);
if (tasks.length !== 30) issues.push(`task count ${tasks.length}`);

for (const task of tasks) {
  const live = T.find((x) => x.id === `math-11-${task}`);
  if (!live) {
    issues.push(`no live task ${task}`);
    continue;
  }
  const letters = Object.keys(out[task]);
  if (letters.join("") !== "ABCDE") issues.push(`${task} letters = ${letters.join("")}`);

  for (const L of letters) {
    n++;
    const idx = "ABCDE".indexOf(L);
    const text = out[task][L];
    const stmt = live.statements[idx];
    const verdict = live.answer_key[idx] ? "true" : "false";
    const wantHeader = `**${L}) ${stmt}**  (${verdict})`;

    const lines = text.split("\n");
    if (lines[0] !== wantHeader) issues.push(`${task}${L} header mismatch`);
    if (lines[1] !== "") issues.push(`${task}${L} no blank line after header`);
    if (!/\.$/.test(text.trim())) issues.push(`${task}${L} does not end with a period`);

    // verdict sentence present and consistent
    const tail = text.slice(-260);
    const saysTrue = /statement is true\./.test(tail);
    const saysFalse = /statement is false\./.test(tail);
    if (verdict === "true" && !saysTrue) issues.push(`${task}${L} missing true verdict sentence`);
    if (verdict === "false" && !saysFalse) issues.push(`${task}${L} missing false verdict sentence`);
    if (saysTrue && saysFalse) issues.push(`${task}${L} both verdict sentences`);

    // 13.18 rhythm: at least three display blocks
    const displays = text.match(/\$\$[\s\S]*?\$\$/g) || [];
    if (displays.length < 3) issues.push(`${task}${L} only ${displays.length} display blocks`);

    // banned content
    if (/\u2014|\u2013/.test(text)) issues.push(`${task}${L} en/em dash`);
    if (/\bTrap\b|\bWatch\b|\bTip\b|Why it fails/i.test(text)) issues.push(`${task}${L} sticker label`);
    if (/from Part [A-E]|from \([a-e]\)|in part \([a-e]\)|as shown above|shown earlier|already (computed|shown)|the solution gives|see \([a-e]\)/i.test(text))
      issues.push(`${task}${L} cross-reference`);
    if (/\\\\/.test(text)) issues.push(`${task}${L} double backslash`);
    if (/It is important to note|In conclusion|robust|comprehensive/i.test(text))
      issues.push(`${task}${L} filler`);

    // currency escaping outside math
    const prose = text
      .replace(/\$\$[\s\S]*?\$\$/g, " M ")
      .replace(/\\\$/g, "C")
      .replace(/\$[^$\n]*\$/g, " M ");
    if (/\$/.test(prose)) issues.push(`${task}${L} unescaped dollar in prose`);

    // delimiter balance
    const stripped = text.replace(/\\\$/g, "");
    const dd = (stripped.match(/\$\$/g) || []).length;
    if (dd % 2) issues.push(`${task}${L} odd $$ count`);
    const inl = (stripped.replace(/\$\$/g, "").match(/\$/g) || []).length;
    if (inl % 2) issues.push(`${task}${L} odd inline $ count`);

    // length floors
    const spec = targets[task].letters[L];
    const liveLen = live.tactical_explanations[idx].length;
    const floor = Math.max(spec.min_chars, liveLen);
    if (text.length < floor) issues.push(`${task}${L} SHORT ${text.length} < ${floor}`);
    lens.push(text.length);
    deltas.push(text.length - floor);
  }
}

const sum = (a) => a.reduce((x, y) => x + y, 0);
console.log("letters:", n);
console.log("min len:", Math.min(...lens));
console.log("mean len:", (sum(lens) / n).toFixed(1));
console.log("max len:", Math.max(...lens));
console.log("min over floor:", Math.min(...deltas));
console.log("mean over floor:", (sum(deltas) / n).toFixed(1));
console.log("issues:", issues.length);
for (const i of issues) console.log("  " + i);
