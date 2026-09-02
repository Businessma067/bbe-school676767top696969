import fs from "fs";
const files = ["_expand_21_30.mjs"];
for (const f of files) {
  const s = fs.readFileSync(new URL("./" + f, import.meta.url), "utf8");
  const m = s.match(/\$\{/g);
  console.log(f, "interpol", m ? m.length : 0);
  const lines = s.split(/\n/);
  for (let i = 0; i < lines.length; i++) {
    const ticks = [...lines[i]].map((c, j) => (c === "`" ? j : -1)).filter((j) => j >= 0);
    if (ticks.some((j) => j > 6 && j < lines[i].length - 3)) {
      console.log("midtick", i + 1, JSON.stringify(lines[i].slice(ticks.find((j) => j > 6) - 8, ticks.find((j) => j > 6) + 8)));
    }
  }
}
