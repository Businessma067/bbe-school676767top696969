import { BATCH as B61 } from "./_ch8_add_61_69.mjs";
import { BATCH as B70 } from "./_ch8_add_70_78.mjs";
import { BATCH as B79 } from "./_ch8_add_79_87.mjs";

for (const t of B61) {
  t.tactical_explanations.forEach((e, i) => {
    if (!/so the statement is (True|False)/.test(e)) {
      console.log("61", t.case_id, String.fromCharCode(65 + i), JSON.stringify(e.trim().slice(-110)));
    }
  });
  if (t.solution_overview.length < 1400) console.log("61 short ov", t.case_id, t.solution_overview.length);
}

console.log(
  "70 min ov",
  Math.min(...B70.map((t) => t.solution_overview.length)),
  "min expl",
  Math.min(...B70.flatMap((t) => t.tactical_explanations.map((e) => e.length))),
);
console.log(
  "79 min ov",
  Math.min(...B79.map((t) => t.solution_overview.length)),
  "min expl",
  Math.min(...B79.flatMap((t) => t.tactical_explanations.map((e) => e.length))),
);

for (const t of [...B70, ...B79]) {
  const blob = t.tactical_explanations.join("\n") + t.solution_overview + t.context;
  if (/This claim/i.test(blob)) {
    const m = blob.match(/This claim[^\n]*/i);
    console.log("This claim", t.case_id, m?.[0]);
  }
  t.tactical_explanations.forEach((e, i) => {
    if (!/so the statement is (True|False)/.test(e)) {
      console.log("noclose", t.case_id, String.fromCharCode(65 + i), JSON.stringify(e.trim().slice(-90)));
    }
    if (e.length < 506) console.log("short", t.case_id, String.fromCharCode(65 + i), e.length);
  });
  if (t.solution_overview.length < 1400) console.log("short ov", t.case_id, t.solution_overview.length);
}
