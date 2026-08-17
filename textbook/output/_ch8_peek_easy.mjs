/** Print stems + statements for the easiest tier so the difficulty floor can be eyeballed. */
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

const tier = process.argv[2] || "1/5";
for (const t of all.filter((t) => t.difficulty_level === tier)) {
  console.log(`\n=== ${t.case_id} ${t.title} [${t.difficulty_level}] ===`);
  console.log("CTX: " + t.context.replace(/\s+/g, " "));
  t.statements.forEach((s, i) =>
    console.log(`  ${"ABCDE"[i]}) ${s.replace(/\s+/g, " ")}  -> ${t.answer_key[i]}`),
  );
}
