import fs from "fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const slice = T.filter((t) => {
  const n = parseInt(t.id.replace("math-11-", ""), 10);
  return n >= 81;
});
console.log("PARSE_OK", T.length, T[T.length - 1].id, "slice", slice.length);

const out = [];
for (const t of slice) {
  const rec = {
    id: t.id,
    title: t.title,
    answer_key: t.answer_key,
    statements: t.statements,
    ov_len: t.solution_overview.length,
    ov_dash: t.solution_overview.includes("\u2014"),
    tactical: t.tactical_explanations.map((e, i) => ({
      letter: "ABCDE"[i],
      len: e.length,
      dash: e.includes("\u2014"),
      text: e,
    })),
  };
  out.push(rec);
  const flags = rec.tactical
    .map((x) => `${x.letter}:${x.len}${x.dash ? " DASH" : ""}`)
    .join(" | ");
  console.log(t.id, "ov=" + rec.ov_len + (rec.ov_dash ? " DASH" : ""), flags);
}
fs.writeFileSync("textbook/output/_ch11_81_123_dump.json", JSON.stringify(out, null, 2));
console.log("wrote dump");
