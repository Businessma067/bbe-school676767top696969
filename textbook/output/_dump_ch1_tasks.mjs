import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const tsPath = path.join(root, "src", "data", "math-ch1-logic.ts");
const src = fs.readFileSync(tsPath, "utf8");
let jsSrc = src
  .replace(/import type \{[^}]*\} from "[^"]*";\n?/g, "")
  .replace(/: MathTask\[\]/g, "")
  .replace(/ as const/g, "");
const tmp = path.join(__dirname, "_tmp_ch1_logic.mjs");
fs.writeFileSync(tmp, jsSrc, "utf8");
const mod = await import("file://" + tmp.replace(/\\/g, "/") + "?t=" + Date.now());
fs.unlinkSync(tmp);
fs.writeFileSync(
  path.join(__dirname, "_ch1_tasks_dump.json"),
  JSON.stringify(mod.MATH_CH1_LOGIC, null, 2),
  "utf8",
);
const multi = mod.MATH_CH1_LOGIC.filter(
  (t) => /\d+\.\s+[A-Z]/.test(t.context) || /\(1\)/.test(t.context),
);
console.log("dumped", mod.MATH_CH1_LOGIC.length, "multi", multi.length);
multi.forEach((t) => console.log(t.id, t.difficulty_level, (t.context.match(/\d+\./g) || []).length));
