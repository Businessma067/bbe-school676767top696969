import fs from "node:fs";

export function wrapOverview(ov) {
  if (/\*\*Part 1/.test(ov)) return ov;
  const text = ov.trim();
  const sents = text.split(/(?<=\.)\s+(?=[A-Z$\\*\d])/);
  const n = sents.length;
  if (n >= 3) {
    const i1 = Math.max(1, Math.round(n / 3));
    const i2 = Math.max(i1 + 1, Math.round((2 * n) / 3));
    return `**Part 1: Setup.**\n\n${sents.slice(0, i1).join(" ")}\n\n**Part 2: Relatives.**\n\n${sents.slice(i1, i2).join(" ")}\n\n**Part 3: Solve.**\n\n${sents.slice(i2).join(" ")}`;
  }
  const paras = text.split(/\n\n+/);
  if (paras.length >= 2) {
    const head = paras[0];
    const tail = paras.slice(1).join("\n\n");
    const mid = tail.includes(". ") ? tail.slice(0, tail.lastIndexOf(". ") + 1) : tail;
    const end = tail.includes(". ") ? tail.slice(tail.lastIndexOf(". ") + 2) : tail;
    return `**Part 1: Setup.**\n\n${head}\n\n**Part 2: Relatives.**\n\n${mid}\n\n**Part 3: Solve.**\n\n${end || mid}`;
  }
  return `**Part 1: Setup.**\n\n${text}\n\n**Part 2: Relatives.**\n\n${text}\n\n**Part 3: Solve.**\n\n${text}`;
}

export function wordCount(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " MATH ")
    .replace(/\$[^$]+\$/g, " MATH ")
    .replace(/[^\w\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function applyExpand(file, patches) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  const counts = [];
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) throw new Error(`missing patch ${t.id}`);
    if (p.tactical_explanations.length !== 5) {
      throw new Error(`${t.id}: expected 5 letters`);
    }
    const keySnap = JSON.stringify(t.answer_key);
    for (let i = 0; i < 5; i++) {
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${"ABCDE"[i]}.** → ${want}`;
      const body = p.tactical_explanations[i];
      if (!body.startsWith(head)) {
        throw new Error(`${t.id} ${"ABCDE"[i]}: header must be ${head}`);
      }
      const close = t.answer_key[i]
        ? "so the statement is True."
        : "so the statement is False.";
      if (!body.trimEnd().endsWith(close)) {
        throw new Error(`${t.id} ${"ABCDE"[i]}: missing closer ${close}`);
      }
      if (body.includes("${")) throw new Error(`${t.id} ${"ABCDE"[i]}: has \${`);
      if (/[\u2013\u2014\u2018\u2019\u201C\u201D]/.test(body)) {
        throw new Error(`${t.id} ${"ABCDE"[i]}: fancy dash/quote`);
      }
    }
    t.tactical_explanations = p.tactical_explanations;
    t.solution_overview = wrapOverview(t.solution_overview);
    if (JSON.stringify(t.answer_key) !== keySnap) {
      throw new Error(`${t.id}: answer_key mutated`);
    }
    const ws = t.tactical_explanations.map(wordCount);
    counts.push({ id: t.id, words: ws, min: Math.min(...ws), max: Math.max(...ws) });
  }
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  return counts;
}
