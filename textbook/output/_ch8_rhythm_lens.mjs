/**
 * Read-only lens over Chapter 8 explanations for tasks 8.01-8.30.
 * Prints per-explanation length and display-block count.
 * Run: node textbook/output/_ch8_rhythm_lens.mjs [sort_order ...]
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const src = fs.readFileSync(new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url), "utf8");
const body = src
  .replace(/^import type[^\n]*\n/m, "")
  .replace("export const MATH_CH8_POWER_FUNCTIONS: MathTask[] =", "export const TASKS =");
const tmp = path.join(os.tmpdir(), `_ch8_lens_${process.pid}.mjs`);
fs.writeFileSync(tmp, body);
const { TASKS } = await import("file://" + tmp.replace(/\\/g, "/"));
fs.unlinkSync(tmp);

export const CH8_TASKS = TASKS;

export function displayCount(text) {
  const m = text.match(/\$\$[\s\S]*?\$\$/g);
  return m ? m.length : 0;
}

export function paraCount(text) {
  return text.split(/\n\n+/).filter((p) => p.trim() && !p.trim().startsWith("$$")).length;
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, "/")}` || process.argv[1].endsWith("_ch8_rhythm_lens.mjs")) {
  const want = process.argv.slice(2).map(Number);
  const rows = [];
  for (const t of TASKS.filter((t) => t.sort_order <= 30)) {
    if (want.length && !want.includes(t.sort_order)) continue;
    t.tactical_explanations.forEach((ex, i) => {
      rows.push({
        so: t.sort_order,
        i,
        letter: "ABCDE"[i],
        key: t.answer_key[i],
        len: ex.length,
        disp: displayCount(ex),
        prose: paraCount(ex) - 1,
      });
    });
  }
  console.log("so\ti\tL\tkey\tlen\tdisp\tprose");
  for (const r of rows) console.log(`${r.so}\t${r.i}\t${r.letter}\t${r.key}\t${r.len}\t${r.disp}\t${r.prose}`);
  const hist = {};
  for (const r of rows) hist[r.disp] = (hist[r.disp] || 0) + 1;
  console.log("display histogram (current, 1-30):", JSON.stringify(hist));
  const ph = {};
  for (const r of rows) ph[r.prose] = (ph[r.prose] || 0) + 1;
  console.log("prose-paragraph histogram:", JSON.stringify(ph));
}
