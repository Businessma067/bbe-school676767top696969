/** KaTeX render check for every math span in MATH 8.70-8.78. */
import katex from "katex";

const { BATCH } = await import("./_ch8_add_70_78.mjs");

const spansOf = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
  const rest = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(rest))) spans.push({ kind: "inline", body: m[1] });
  return spans;
};

let spans = 0;
const failures = [];

for (const t of BATCH) {
  const fields = [
    ["context", t.context],
    ["overview", t.solution_overview],
    ...t.statements.map((v, i) => [`stmt ${i}`, v]),
    ...t.tactical_explanations.map((v, i) => [`expl ${i}`, v]),
  ];
  for (const [label, value] of fields) {
    for (const span of spansOf(value)) {
      spans += 1;
      try {
        katex.renderToString(span.body, { displayMode: span.kind === "display", throwOnError: true });
      } catch (err) {
        failures.push(`${t.case_id} ${label} [${span.kind}]: ${span.body.slice(0, 70)} -- ${err.message}`);
      }
    }
  }
}

console.log("math spans rendered:", spans);
console.log(failures.length ? "RENDER FAILURES:\n" + failures.join("\n") : "all math spans render cleanly");
