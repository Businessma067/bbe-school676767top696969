import fs from "node:fs";
import { wrapOverview, wordCount } from "./_expand_lib.mjs";

export function wrapFile(fileUrl) {
  const arr = JSON.parse(fs.readFileSync(fileUrl, "utf8"));
  for (const t of arr) {
    t.solution_overview = wrapOverview(t.solution_overview);
  }
  fs.writeFileSync(fileUrl, JSON.stringify(arr, null, 2) + "\n");
}

export function spliceExtra(body, add) {
  if (!add) return body;
  const closeTrue = "so the statement is True.";
  const closeFalse = "so the statement is False.";
  const close = body.trimEnd().endsWith(closeTrue)
    ? closeTrue
    : closeFalse;
  if (body.includes("\n\n**1.**") && add.includes("**1.**")) {
    // already numbered; still append unique prose
  }
  const trimmed = body.trimEnd();
  const head = trimmed.endsWith(close)
    ? trimmed.slice(0, trimmed.length - close.length).trimEnd()
    : trimmed;
  return `${head}\n\n${add}\n\n${close}`;
}

export function applyExtras(fileUrl, extra) {
  const arr = JSON.parse(fs.readFileSync(fileUrl, "utf8"));
  const counts = [];
  for (const t of arr) {
    const ex = extra[t.id];
    if (!ex) throw new Error(`missing extra ${t.id}`);
    t.solution_overview = wrapOverview(t.solution_overview);
    t.tactical_explanations = t.tactical_explanations.map((s, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${"ABCDE"[i]}.** → ${want}`;
      if (!s.startsWith(head)) throw new Error(`${t.id} ${"ABCDE"[i]} header`);
      const out = spliceExtra(s, ex[i]);
      const close = t.answer_key[i]
        ? "so the statement is True."
        : "so the statement is False.";
      if (!out.trimEnd().endsWith(close)) {
        throw new Error(`${t.id} ${"ABCDE"[i]} closer`);
      }
      if (out.includes("${") || /[\u2013\u2014]/.test(out)) {
        throw new Error(`${t.id} ${"ABCDE"[i]} dash or interpolation`);
      }
      return out;
    });
    const ws = t.tactical_explanations.map(wordCount);
    counts.push({ id: t.id, words: ws, min: Math.min(...ws), max: Math.max(...ws) });
  }
  fs.writeFileSync(fileUrl, JSON.stringify(arr, null, 2) + "\n");
  return counts;
}
