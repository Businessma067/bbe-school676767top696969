import katex from "katex";
import { MATH_CH8_POWER_FUNCTIONS as tasks } from "../../src/data/math-ch8-power-functions.ts";

const letters = "ABCDE";
const problems = [];
console.log("count", tasks.length);
if (tasks.length !== 87) problems.push("expected 87");

let spans = 0;
let fails = 0;
const titles = new Set();

for (const t of tasks.slice(50)) {
  if (t.subsection != null) problems.push(`${t.case_id} subsection`);
  if (!t.context?.includes("Evaluate each statement. Mark it TRUE or FALSE.")) {
    problems.push(`${t.case_id} bad context`);
  }
  if (titles.has(t.title)) problems.push(`dup title ${t.title}`);
  titles.add(t.title);
  const ov = t.solution_overview || "";
  if (ov.length < 1400 || ov.length > 1900) problems.push(`${t.case_id} ov ${ov.length}`);
  for (const m of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"]) {
    if (!ov.includes(m)) problems.push(`${t.case_id} missing ${m}`);
  }
  const blob = ov + t.tactical_explanations.join("\n");
  if (/This claim/i.test(blob)) problems.push(`${t.case_id} This claim`);
  if (blob.includes("\u2014")) problems.push(`${t.case_id} emdash`);
  if (blob.includes("${")) problems.push(`${t.case_id} interp`);

  t.tactical_explanations.forEach((e, i) => {
    const h = e.split("\n")[0];
    const m = h.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m || m[1] !== letters[i] || (m[2] === "True") !== t.answer_key[i]) {
      problems.push(`${t.case_id} ${letters[i]} header`);
    }
    if (e.length < 506) problems.push(`${t.case_id} ${letters[i]} short ${e.length}`);
    if ((e.match(/\$\$/g) || []).length < 4) problems.push(`${t.case_id} ${letters[i]} display`);
    if (!/so the statement is (True|False)\.?/.test(e)) {
      problems.push(`${t.case_id} ${letters[i]} noclose`);
    }
    for (const text of [e, ...t.statements, ov]) {
      const re = /\$\$([\s\S]*?)\$\$|\$([^\$]+)\$/g;
      let match;
      while ((match = re.exec(text))) {
        const tex = match[1] ?? match[2];
        spans += 1;
        try {
          katex.renderToString(tex, { throwOnError: true, displayMode: !!match[1] });
        } catch (err) {
          fails += 1;
          if (fails <= 10) problems.push(`${t.case_id} katex ${String(err.message).slice(0, 100)}`);
        }
      }
    }
  });
}

console.log("spans", spans, "fails", fails);
console.log("problems", problems.length);
if (problems.length) console.log(problems.join("\n"));
if (problems.length || fails) process.exit(1);
