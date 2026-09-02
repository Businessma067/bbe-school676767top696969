import fs from "node:fs";

function apply(file, patches) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) throw new Error(`missing patch ${t.id} in ${file}`);
    if (p.tactical_explanations.length !== 5) throw new Error(`need 5 letters ${t.id}`);
    t.solution_overview = p.solution_overview;
    t.tactical_explanations = p.tactical_explanations;
  }
  const missing = Object.keys(patches).filter((id) => !arr.some((t) => t.id === id));
  if (missing.length) throw new Error(`unused patches ${missing}`);
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  console.log("patched", String(file).replace(/^.*ch1./, "ch1/"), arr.length);
}

export { apply };
