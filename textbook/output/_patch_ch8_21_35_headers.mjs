import fs from "fs";
import { BATCH } from "./_ch8_batch_21_35.mjs";

const letters = "ABCDE";

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

for (const t of BATCH) {
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const L = letters[i];
    if (e.includes("**" + L)) return e;
    const tf = t.answer_key[i] ? "true" : "false";
    return `**${L}) ${t.statements[i]}**  (${tf})\n\n${e}`;
  });
}

let out = "export const BATCH = [\n";
for (const t of BATCH) {
  out += "  {\n";
  out += `    id: \`${t.id}\`,\n`;
  out += `    case_id: \`${t.case_id}\`,\n`;
  out += `    title: \`${esc(t.title)}\`,\n`;
  out += `    context: \`${esc(t.context)}\`,\n`;
  out += "    statements: [\n";
  for (const s of t.statements) out += `      \`${esc(s)}\`,\n`;
  out += "    ],\n";
  out += `    answer_key: [${t.answer_key.join(", ")}],\n`;
  out += "    tactical_explanations: [\n";
  for (const s of t.tactical_explanations) out += `      \`${esc(s)}\`,\n`;
  out += "    ],\n";
  out += `    difficulty_level: \`${t.difficulty_level}\`,\n`;
  out += `    sort_order: ${t.sort_order},\n`;
  out += `    solution_overview: \`${esc(t.solution_overview)}\`,\n`;
  out += "  },\n";
}
out += "];\n";
fs.writeFileSync(new URL("./_ch8_batch_21_35.mjs", import.meta.url), out);
console.log("patched headers for", BATCH.length, "tasks");
