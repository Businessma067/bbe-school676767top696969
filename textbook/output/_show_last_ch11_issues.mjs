import fs from "node:fs";
import { listField, splitTasks, toValue } from "./_ch11_textcmd_lib.mjs";

const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");

for (const task of splitTasks(src)) {
  listField(task.body, "tactical_explanations").forEach((item, i) => {
    const value = toValue(item);
    const spans = [];
    const displayRe = /\$\$([\s\S]*?)\$\$/g;
    let m;
    while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
    const rest = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
    const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
    while ((m = inlineRe.exec(rest))) spans.push({ kind: "inline", body: m[1] });

    for (const span of spans) {
      const bad =
        /\\\$/.test(span.body) || (span.kind === "inline" && span.body.trim().length > 60);
      if (!bad) continue;
      console.log(`\n##### ${task.id} expl[${i}] (${span.kind})`);
      console.log(`SPAN: ${span.body}`);
      const at = value.indexOf(span.body);
      console.log(`CONTEXT: ...${value.slice(Math.max(0, at - 200), at + span.body.length + 200)}...`);
    }
  });
}
