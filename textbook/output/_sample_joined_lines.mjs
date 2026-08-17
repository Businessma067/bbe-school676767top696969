import fs from "node:fs";
import { execFileSync } from "node:child_process";

const unescape = (s) => s.replace(/\\\\/g, "\\");
const bodies = (src) => [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => unescape(m[1].trim()));

for (const file of process.argv.slice(2)) {
  const before = new Set(bodies(execFileSync("git", ["show", `HEAD:${file}`], { encoding: "utf8", maxBuffer: 64e6 })));
  const added = bodies(fs.readFileSync(file, "utf8")).filter((b) => !before.has(b) && b.includes("\\qquad"));
  console.log(`\n${file}: ${added.length} new glued lines`);
  const step = Math.max(1, Math.floor(added.length / 15));
  for (let i = 0; i < added.length; i += step) console.log("  " + added[i]);
}
