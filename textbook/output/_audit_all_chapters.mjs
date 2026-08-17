import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function auditTasks(label, arr) {
  const issues = [];
  for (const t of arr) {
    if (!t?.id) {
      issues.push("missing id");
      continue;
    }
    if (!Array.isArray(t.statements) || !Array.isArray(t.answer_key)) {
      issues.push(`${t.id}: missing statements/answer_key`);
      continue;
    }
    if (t.statements.length !== t.answer_key.length) {
      issues.push(`${t.id}: stmt/key ${t.statements.length}/${t.answer_key.length}`);
    }
    if (Array.isArray(t.tactical_explanations) && t.tactical_explanations.length !== t.statements.length) {
      issues.push(`${t.id}: stmt/expl ${t.statements.length}/${t.tactical_explanations.length}`);
    }
    const blob = `${t.solution_overview || ""}\n${(t.tactical_explanations || []).join("\n")}`;
    const dd = (blob.match(/\$\$/g) || []).length;
    if (dd % 2) issues.push(`${t.id}: odd $$ count ${dd}`);
  }
  console.log(
    JSON.stringify(
      { label, count: arr.length, issues: issues.length, sample: issues.slice(0, 15) },
      null,
      2,
    ),
  );
}

const { MATH_CH1_LOGIC } = await import("../../src/data/math-ch1-logic.ts");
const { MATH_CH5_LINEAR_EQUATIONS } = await import("../../src/data/math-ch5-linear-equations.ts");
const { MATH_CH11_FINANCIAL } = await import("../../src/data/math-ch11-financial.ts");
auditTasks("ch1", MATH_CH1_LOGIC);
auditTasks("ch5", MATH_CH5_LINEAR_EQUATIONS);
auditTasks("ch11", MATH_CH11_FINANCIAL);

const ch13 = JSON.parse(fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8"));
auditTasks("ch13", ch13.tasks || ch13);

for (const f of fs.readdirSync("src/data").filter((x) => x.startsWith("english") && x.endsWith(".json"))) {
  try {
    const j = JSON.parse(fs.readFileSync(`src/data/${f}`, "utf8"));
    if (Array.isArray(j.tasks)) auditTasks(f, j.tasks);
    else console.log(JSON.stringify({ label: f, note: "no tasks array" }));
  } catch (e) {
    console.log(JSON.stringify({ label: f, fail: String(e.message || e) }));
  }
}
