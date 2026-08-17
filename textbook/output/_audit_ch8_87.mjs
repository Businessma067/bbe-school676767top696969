import katex from "katex";
import { MATH_CH8_POWER_FUNCTIONS as tasks } from "../../src/data/math-ch8-power-functions.ts";

const problems = [];
const letters = ["A", "B", "C", "D", "E"];
console.log("count", tasks.length);
if (tasks.length !== 87) problems.push("expected 87");

let mathFails = 0;
let spans = 0;
const titles = new Set();
const contexts = new Set();

for (const t of tasks) {
  if (t.subsection != null) problems.push(`${t.id} has subsection`);
  if (!t.context?.includes("Evaluate each statement. Mark it TRUE or FALSE.")) {
    problems.push(`${t.id} bad context end`);
  }
  if (titles.has(t.title)) problems.push(`duplicate title ${t.title}`);
  titles.add(t.title);
  const stem = t.context.split("\n")[0];
  if (contexts.has(stem)) problems.push(`duplicate stem ${t.id}`);
  contexts.add(stem);

  const ov = t.solution_overview || "";
  for (const m of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"]) {
    if (!ov.includes(m)) problems.push(`${t.id} missing ${m}`);
  }
  if (ov.length < 1200) problems.push(`${t.id} short overview ${ov.length}`);
  const blob = ov + t.tactical_explanations.join("\n");
  if (/This claim/i.test(blob)) problems.push(`${t.id} This claim`);
  if (blob.includes("\u2014")) problems.push(`${t.id} em dash`);
  if (blob.includes("${")) problems.push(`${t.id} has \${`);

  t.tactical_explanations.forEach((e, i) => {
    const h = e.split("\n")[0];
    const m = h.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m || m[1] !== letters[i] || (m[2] === "True") !== t.answer_key[i]) {
      problems.push(`${t.id} ${letters[i]} header`);
    }
    if (e.length < 400) problems.push(`${t.id} ${letters[i]} short expl ${e.length}`);
    if (!/so the statement is (True|False)\.?/.test(e)) {
      problems.push(`${t.id} ${letters[i]} no closing`);
    }
    const texts = [...t.statements, e, ov, t.context, t.title];
    for (const text of texts) {
      const re = /\$\$([\s\S]*?)\$\$|\$([^\$]+)\$/g;
      let match;
      while ((match = re.exec(text))) {
        const tex = match[1] ?? match[2];
        spans += 1;
        try {
          katex.renderToString(tex, { throwOnError: true, displayMode: !!match[1] });
        } catch (err) {
          mathFails += 1;
          if (mathFails <= 12) {
            problems.push(`${t.id} katex: ${String(err.message).slice(0, 120)} :: ${tex.slice(0, 80)}`);
          }
        }
      }
    }
  });
}

console.log("math spans", spans, "fails", mathFails);
console.log("problems", problems.length);
if (problems.length) console.log(problems.slice(0, 60).join("\n"));
if (problems.length) process.exit(1);
