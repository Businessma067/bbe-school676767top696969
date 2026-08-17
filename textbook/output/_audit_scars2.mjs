import { MATH_CH1_LOGIC } from "../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH11_FINANCIAL } from "../../src/data/math-ch11-financial.ts";

const sets = [
  ["ch1", MATH_CH1_LOGIC],
  ["ch5", MATH_CH5_LINEAR_EQUATIONS],
  ["ch11", MATH_CH11_FINANCIAL],
];

function fields(t) {
  return [
    ["ov", t.solution_overview || ""],
    ...((t.tactical_explanations || []).map((e, i) => [`t${i}`, e])),
  ];
}

for (const [label, tasks] of sets) {
  let brace = 0;
  let starVar = 0;
  let badHeader = 0;
  const samples = { brace: [], starVar: [], badHeader: [] };
  for (const t of tasks) {
    for (const [fi, text] of fields(t)) {
      const bc = (text.match(/\{,\}/g) || []).length;
      brace += bc;
      if (bc && samples.brace.length < 3) samples.brace.push(`${t.id}:${fi}`);

      // t* / r* / n* / S0* style outside $...$ that can break markdown italics
      const stripped = text
        .replace(/\$\$[\s\S]*?\$\$/g, " ")
        .replace(/\$[^$\n]+\$/g, " ");
      const sv = (stripped.match(/(?<![A-Za-z\\])([a-zA-Z]\\d*)\*(?![A-Za-z*])/g) || []).length;
      starVar += sv;
      if (sv && samples.starVar.length < 8) samples.starVar.push(`${t.id}:${fi}:${sv}`);

      // header should be **A) or **A.
      if (/^\*[A-E][).]/.test(text.trim()) || /\n\*[A-E][).]/.test(text)) {
        badHeader++;
        if (samples.badHeader.length < 5) samples.badHeader.push(t.id);
      }
    }
  }
  console.log(label, { brace, starVar, badHeader, samples });
}
