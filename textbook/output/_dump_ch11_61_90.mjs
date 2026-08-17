import fs from "fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const targets = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_expand_targets_61_90.json", "utf8"),
);

const out = {};
for (const key of Object.keys(targets)) {
  const t = T.find((x) => x.id === `math-11-${key}`);
  if (!t) {
    console.log("MISSING", key);
    continue;
  }
  out[key] = {
    id: t.id,
    case_id: t.case_id,
    title: t.title,
    subsection: t.subsection,
    context: t.context,
    statements: t.statements,
    answer_key: t.answer_key,
    solution_overview: t.solution_overview,
    tactical: t.tactical_explanations.map((e, i) => ({
      letter: "ABCDE"[i],
      len: e.length,
      text: e,
    })),
  };
  const want = Object.keys(targets[key].letters);
  for (const L of want) {
    const idx = "ABCDE".indexOf(L);
    const live = t.statements[idx];
    const tgt = targets[key].letters[L].statement;
    if (live !== tgt) console.log("STMT MISMATCH", key, L, JSON.stringify(live), JSON.stringify(tgt));
    const av = t.answer_key[idx] ? "true" : "false";
    if (av !== targets[key].letters[L].verdict)
      console.log("VERDICT MISMATCH", key, L, av, targets[key].letters[L].verdict);
    const cur = t.tactical_explanations[idx];
    if (cur !== targets[key].letters[L].current)
      console.log("CURRENT MISMATCH", key, L, cur.length, targets[key].letters[L].current.length);
  }
}
fs.writeFileSync("textbook/output/_ch11_61_90_dump.json", JSON.stringify(out, null, 2));
console.log("wrote dump", Object.keys(out).length);
