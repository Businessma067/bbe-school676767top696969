/** KaTeX render check for the 8.79–8.87 batch. */
import katex from "katex";
import { BATCH } from "./_ch8_add_79_87.mjs";

let bad = 0;
let spans = 0;

const check = (txt, where) => {
  const disp = [...txt.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => [m[1], true]);
  const rest = txt.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inl = [...rest.matchAll(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g)].map((m) => [m[1], false]);
  for (const [body, displayMode] of [...disp, ...inl]) {
    spans++;
    try {
      katex.renderToString(body, { displayMode, throwOnError: true, strict: false });
    } catch (e) {
      bad++;
      console.log("KATEX FAIL", where, JSON.stringify(body.slice(0, 100)), e.message.split("\n")[0]);
    }
  }
};

// Prose outside math must not contain stray LaTeX commands.
const stripMath = (s) =>
  s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, " ");

let stray = 0;
const proseCheck = (txt, where) => {
  const prose = stripMath(txt);
  const hits = prose.match(/\\[a-zA-Z]+/g);
  if (hits) {
    stray++;
    console.log("STRAY LATEX", where, hits.slice(0, 5).join(" "));
  }
};

for (const t of BATCH) {
  const fields = [
    [t.context, t.case_id + " ctx"],
    ...t.statements.map((s, i) => [s, `${t.case_id} s${i}`]),
    ...t.tactical_explanations.map((s, i) => [s, `${t.case_id} e${i}`]),
    [t.solution_overview, t.case_id + " ov"],
  ];
  for (const [txt, where] of fields) {
    check(txt, where);
    proseCheck(txt, where);
  }
}

console.log("math spans:", spans, "| render failures:", bad, "| stray-latex fields:", stray);
process.exit(bad || stray ? 1 : 0);
