/** Full audit of the rewritten Chapter 8 bank. Run: node textbook/output/_audit_ch8_v2.mjs */
import fs from "fs";

const { BATCH: B01 } = await import("./_ch8_batch_01_05.mjs");
const { BATCH: B06 } = await import("./_ch8_batch_06_20.mjs");
const { BATCH: B21 } = await import("./_ch8_batch_21_35.mjs");
const { BATCH: B36 } = await import("./_ch8_batch_36_50.mjs");

const dir = new URL("./", import.meta.url);
const overrides = [];
for (const f of fs.readdirSync(dir).filter((f) => /^_ch8_ov_.*\.mjs$/.test(f)).sort()) {
  const { BATCH } = await import("./" + f);
  overrides.push(...BATCH);
}
const map = new Map();
for (const t of [...B01, ...B06, ...B21, ...B36, ...overrides]) map.set(t.sort_order, t);
const all = [...map.values()].sort((a, b) => a.sort_order - b.sort_order);

const problems = [];
const letters = ["A", "B", "C", "D", "E"];
const stats = { minExpl: Infinity, minOv: Infinity, totalChars: 0 };

for (const t of all) {
  const where = (m) => problems.push(`${t.case_id}: ${m}`);

  if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5)
    where("wrong array lengths");

  t.tactical_explanations.forEach((ex, i) => {
    const head = ex.split("\n")[0];
    const m = head.match(/^\*\*([A-E])\)\s([\s\S]*)\*\*\s+\((true|false)\)$/);
    if (!m) return where(`explanation ${letters[i]} header malformed: ${head.slice(0, 90)}`);
    if (m[1] !== letters[i]) where(`explanation ${i} labelled ${m[1]}`);
    if ((m[3] === "true") !== t.answer_key[i]) where(`verdict mismatch in ${letters[i]}`);
    const claim = m[2].trim().replace(/\s+/g, " ");
    const stmt = t.statements[i].trim().replace(/\s+/g, " ");
    if (claim !== stmt) where(`header text != statement ${letters[i]}\n   head: ${claim}\n   stmt: ${stmt}`);
    if (ex.length < 400) where(`explanation ${letters[i]} too short (${ex.length} chars)`);
    stats.minExpl = Math.min(stats.minExpl, ex.length);
    stats.totalChars += ex.length;
    // display-math blocks must be balanced
    const dollars = (ex.match(/\$\$/g) || []).length;
    if (dollars % 2) where(`odd number of $$ in ${letters[i]}`);
    const single = (ex.replace(/\$\$/g, "").match(/\$/g) || []).length;
    if (single % 2) where(`odd number of inline $ in ${letters[i]}`);
    if (/\btrue\b.*\bfalse\b/.test(head)) where(`ambiguous verdict in ${letters[i]}`);
  });

  const ov = t.solution_overview || "";
  for (const part of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"])
    if (!ov.includes(part)) where(`overview missing ${part}`);
  if (ov.length < 900) where(`overview too short (${ov.length} chars)`);
  stats.minOv = Math.min(stats.minOv, ov.length);
  stats.totalChars += ov.length;
  if ((ov.match(/\$\$/g) || []).length % 2) where("odd number of $$ in overview");
  if ((ov.replace(/\$\$/g, "").match(/\$/g) || []).length % 2) where("odd number of inline $ in overview");
  if (/A\s*=\s*TRUE/i.test(ov)) where("overview contains answer sheet");

  t.statements.forEach((s, i) => {
    if (/\b(true|false)\b/i.test(s)) where(`statement ${letters[i]} leaks a verdict`);
    if ((s.match(/\$/g) || []).length % 2) where(`odd inline $ in statement ${letters[i]}`);
  });

  const ctx = t.context || "";
  if ((ctx.match(/\$/g) || []).length % 2) where("odd inline $ in context");
  stats.totalChars += ctx.length;
}

const trueHist = {}, diffHist = {};
for (const t of all) {
  const k = t.answer_key.filter(Boolean).length;
  trueHist[k] = (trueHist[k] || 0) + 1;
  diffHist[t.difficulty_level] = (diffHist[t.difficulty_level] || 0) + 1;
}

console.log("tasks:", all.length);
console.log("trueHist:", trueHist);
console.log("diffHist:", diffHist);
console.log("shortest explanation:", stats.minExpl, "chars | shortest overview:", stats.minOv, "chars");
console.log("avg authored chars per task:", Math.round(stats.totalChars / all.length));
console.log("titles unique:", new Set(all.map((t) => t.title)).size === all.length);
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "no problems found");
