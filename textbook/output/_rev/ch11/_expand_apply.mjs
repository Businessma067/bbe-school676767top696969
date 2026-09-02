import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

function ensureCloser(body, truth) {
  const want = truth ? "so the statement is True." : "so the statement is False.";
  if (body.includes(want)) return body;
  throw new Error("missing closer: ..." + body.slice(-160));
}

export function wordCount(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$\n]+\$/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function applyLetters(filename, patches) {
  const fp = path.join(dir, filename);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  const counts = [];
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
      if (/[—–]/.test(cleaned)) throw new Error("em/en dash in " + t.id + " " + L);
      if (cleaned.includes("${")) throw new Error("${ in " + t.id + " " + L);
      const full = `**${L}) ${t.statements[i]}**  (${v})\n\n${ensureCloser(cleaned, truth)}`;
      counts.push({ id: t.id, L, wc: wordCount(full), key: truth });
      return full;
    });
    n++;
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return { n, counts };
}
