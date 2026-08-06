import fs from "node:fs";
import { cases34 } from "./ch3-cases-3.4-data.mjs";
import { cases35 } from "./ch3-cases-3.5-data.mjs";
import { cases36 } from "./ch3-cases-3.6-data.mjs";
import { applyStyleLock, validateStyleLock } from "./ch3-fc-style-lock.mjs";

const OUT = "src/data/ch3-part-3.4-3.6.json";

function pad(n) {
  return String(n).padStart(2, "0");
}

function countTrues(key) {
  return key.filter(Boolean).length;
}

function finalize(subsection, cases) {
  if (cases.length !== 50) throw new Error(`${subsection}: expected 50 cases, got ${cases.length}`);
  return cases.map((c, i) => {
    const styled = applyStyleLock(c);
    return {
      subsection,
      case_id: `CASE ${subsection}.${pad(i + 1)}`,
      title: styled.title,
      context: styled.context,
      statements: styled.statements,
      answer_key: c.answer_key,
      tactical_explanations: styled.tactical_explanations,
      difficulty_level: c.difficulty_level,
      tier: "full",
      _life: c.life,
    };
  });
}

const all = [
  ...finalize("3.4", cases34),
  ...finalize("3.5", cases35),
  ...finalize("3.6", cases36),
];

const { errors, globalStmtCount, bySub } = validateStyleLock(all);
if (errors.length) {
  console.error("Style lock validation failed:\n" + errors.slice(0, 50).join("\n"));
  if (errors.length > 50) console.error(`… +${errors.length - 50} more`);
  process.exit(1);
}

const out = all.map(({ _life, ...c }) => c);
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");

console.log(`Wrote ${out.length} cases to ${OUT}`);
console.log(`Unique statements: ${globalStmtCount}`);
for (const s of ["3.4", "3.5", "3.6"]) {
  const sub = all.filter((c) => c.subsection === s);
  const hist = [1, 2, 3, 4, 5]
    .map((k) => `${k}T:${sub.filter((c) => countTrues(c.answer_key) === k).length}`)
    .join(" ");
  console.log(`${s} histogram ${hist} | life:${sub.filter((c) => c._life).length} | theory:${sub.filter((c) => !c._life).length}`);
}
