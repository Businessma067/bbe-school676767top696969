import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function words(s) {
  const body = String(s || "").replace(/^\*\*[A-E]\.\*\* → (True|False)\s*/, "");
  return body.split(/\s+/).filter(Boolean).length;
}

function classify(kind) {
  if (kind === "lookup") return [120, 200];
  return [300, 700];
}

export function applyLetters(fileName, lettersById) {
  const fp = path.join(__dirname, fileName);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  const report = [];
  for (const t of arr) {
    if (!lettersById[t.id]) continue;
    if (lettersById[t.id].length !== 5) {
      throw new Error(t.id + " needs 5 letters");
    }
    t.tactical_explanations = lettersById[t.id];
    const wc = t.tactical_explanations.map(words);
    report.push({ id: t.id, wc, keys: t.answer_key });
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return report;
}

export function spliceBeforeCloser(letter, extra) {
  const closer = letter.match(/so the statement is (True|False)\.\s*$/);
  if (!closer) throw new Error("missing closer: " + letter.slice(-80));
  const head = letter.slice(0, closer.index).replace(/\s+$/, "");
  return head + "\n\n" + extra.trim() + "\n\n" + closer[0];
}

export { words, classify };
