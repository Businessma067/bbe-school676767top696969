import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

function ensureCloser(body, truth) {
  const want = truth ? "so the statement is True." : "so the statement is False.";
  if (body.includes(want)) return body;
  throw new Error("missing closer: ..." + body.slice(-120));
}

export function applyLetters(filename, patches) {
  const fp = path.join(dir, filename);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let n = 0;
  for (const t of arr) {
    const bodies = patches[t.id];
    if (!bodies) continue;
    if (bodies.length !== 5) throw new Error("need 5 bodies for " + t.id);
    t.tactical_explanations = bodies.map((body, i) => {
      const L = "ABCDE"[i];
      const truth = !!t.answer_key[i];
      const v = truth ? "true" : "false";
      const cleaned = body.replace(/^\*\*[A-E]\)[^*]*\*\*\s+\((true|false)\)\s*/i, "").trim();
      return `**${L}) ${t.statements[i]}**  (${v})\n\n${ensureCloser(cleaned, truth)}`;
    });
    n++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return n;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log("import applyLetters from this module");
}
