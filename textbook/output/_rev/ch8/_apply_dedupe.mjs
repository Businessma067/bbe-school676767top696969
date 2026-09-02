import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function stripStemCopy(ov) {
  const parts = ov.split(/\n\n/);
  if (
    parts.length > 1 &&
    !parts[0].includes("**Part") &&
    parts.some((p) => p.startsWith("**Part 1"))
  ) {
    return parts.slice(1).join("\n\n");
  }
  return ov;
}

export function applyFile(file, patches) {
  const fp = typeof file === "string" ? file : fileURLToPath(file);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let n = 0;
  for (const t of arr) {
    const nextOv = stripStemCopy(t.solution_overview);
    const p = patches[t.id];
    if (p) {
      t.solution_overview = p.overview ?? nextOv;
      if (p.tacticals) t.tactical_explanations = p.tacticals;
      n += 1;
    } else {
      t.solution_overview = nextOv;
    }
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  return { file: path.basename(fp), edited: n, total: arr.length };
}
