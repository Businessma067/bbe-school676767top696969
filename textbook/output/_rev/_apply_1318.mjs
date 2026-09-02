import fs from "fs";

const BANNED_BODY =
  /the overview already|from Part A|as shown above|the solution gives|Part 1|Part 2|Part 3/i;

export function apply(file, patches) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  const seen = new Set();
  const letters = "ABCDE";
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) throw new Error("missing patch " + t.id);
    if (typeof p.solution_overview !== "string") throw new Error("overview " + t.id);
    if (!Array.isArray(p.tactical_explanations) || p.tactical_explanations.length !== 5) {
      throw new Error("need 5 letters " + t.id);
    }
    if (/Part 1|Part 2|Part 3/.test(p.solution_overview)) {
      throw new Error("overview Part " + t.id);
    }
    if (/[—–]/.test(p.solution_overview) || /\$\{/.test(p.solution_overview)) {
      throw new Error("overview dash/interp " + t.id);
    }
    p.tactical_explanations.forEach((e, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const header = `**${letters[i]}.** → ${want}`;
      if (!e.startsWith(header)) throw new Error("header " + t.id + " " + letters[i]);
      if (!new RegExp(`so the statement is ${want}\\.`, "i").test(e)) {
        throw new Error("closer " + t.id + " " + letters[i]);
      }
      if (BANNED_BODY.test(e)) throw new Error("banned phrase " + t.id + " " + letters[i]);
      if (/[—–]/.test(e) || /\$\{/.test(e)) throw new Error("dash/interp " + t.id + " " + letters[i]);
    });
    t.solution_overview = p.solution_overview;
    t.tactical_explanations = p.tactical_explanations;
    seen.add(t.id);
  }
  for (const id of Object.keys(patches)) {
    if (!seen.has(id)) throw new Error("extra patch " + id);
  }
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  return arr.length;
}
