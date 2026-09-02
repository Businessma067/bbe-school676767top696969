import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export function stripStem(ov) {
  const i = ov.indexOf("**Part 1:");
  if (i > 0) return ov.slice(i);
  return ov;
}

export function headerOf(expl) {
  return expl.split("\n")[0];
}

export function applyTask(t, bodies) {
  if (t.id === "math-5-1") return t;
  if (bodies) {
    t.tactical_explanations = t.tactical_explanations.map((old, i) => {
      const h = headerOf(old);
      const body = bodies[i];
      if (!body) throw new Error(`${t.id} missing letter ${i}`);
      return `${h}\n\n${body.trim()}`;
    });
  }
  t.solution_overview = stripStem(t.solution_overview);
  return t;
}

export function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

export function load(name) {
  return JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
}

export function save(name, data) {
  writeJson(path.join(dir, name), data);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log("helpers only");
}
