import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

function ensureCloser(body, truth) {
  const want = truth ? "so the statement is True." : "so the statement is False.";
  if (body.includes(want)) return body;
  const re = truth
    ? /(and )?(?:T|t)he statement is True\.$/
    : /(and )?(?:T|t)he statement is False\.$/;
  if (!re.test(body)) throw new Error("missing verdict: " + body.slice(-80));
  return body.replace(re, want);
}

export function applyFile(filename, patches) {
  const fp = path.join(dir, filename);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let n = 0;
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) continue;
    if (p.overview == null || !p.bodies || p.bodies.length !== 5) {
      throw new Error("bad patch " + t.id);
    }
    t.solution_overview = p.overview;
    t.tactical_explanations = p.bodies.map((body, i) => {
      const L = "ABCDE"[i];
      const truth = !!t.answer_key[i];
      const v = truth ? "true" : "false";
      return `**${L}) ${t.statements[i]}**  (${v})\n\n${ensureCloser(body, truth)}`;
    });
    n++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return n;
}
