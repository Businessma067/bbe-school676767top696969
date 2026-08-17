/** List the thinnest explanations so short ones can be found and deepened. */
import fs from "fs";

const { BATCH: B01 } = await import("./_ch8_batch_01_05.mjs");
const { BATCH: B06 } = await import("./_ch8_batch_06_20.mjs");
const { BATCH: B21 } = await import("./_ch8_batch_21_35.mjs");
const { BATCH: B36 } = await import("./_ch8_batch_36_50.mjs");
const dir = new URL("./", import.meta.url);
const ov = [];
for (const f of fs.readdirSync(dir).filter((f) => /^_ch8_ov_.*\.mjs$/.test(f)).sort()) {
  const { BATCH } = await import("./" + f);
  ov.push(...BATCH);
}
const map = new Map();
for (const t of [...B01, ...B06, ...B21, ...B36, ...ov]) map.set(t.sort_order, t);
const all = [...map.values()].sort((a, b) => a.sort_order - b.sort_order);

const rows = [];
for (const t of all)
  t.tactical_explanations.forEach((e, i) => {
    const paras = e.split(/\n\s*\n/).filter(Boolean).length;
    const display = (e.match(/\$\$/g) || []).length / 2;
    rows.push({ case: t.case_id, s: "ABCDE"[i], chars: e.length, paras, display });
  });
rows.sort((a, b) => a.chars - b.chars);
console.log("thinnest 20 explanations:");
for (const r of rows.slice(0, 20))
  console.log(`  ${r.case} ${r.s}: ${r.chars} chars, ${r.paras} blocks, ${r.display} display-math`);
const under = (n) => rows.filter((r) => r.chars < n).length;
console.log(`under 700: ${under(700)} | under 800: ${under(800)} | under 900: ${under(900)} | total ${rows.length}`);
console.log("explanations with <2 display-math blocks:", rows.filter((r) => r.display < 2).length);
console.log("explanations with <4 paragraph blocks:", rows.filter((r) => r.paras < 4).length);
