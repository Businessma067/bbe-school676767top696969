import fs from "fs";
const lines = fs.readFileSync(new URL("./_expand_11_20.mjs", import.meta.url), "utf8").split(/\n/);
for (let i = 0; i < lines.length; i++) {
  const L = lines[i];
  const ticks = [...L].map((c, j) => (c === "`" ? j : -1)).filter((j) => j >= 0);
  const odd = ticks.length % 2 === 1;
  if (ticks.length && (odd || ticks.some((j) => j > 0 && j < L.length - 1 && !L.trim().startsWith("`") && !L.trim().endsWith("`,")))) {
    if (odd || (ticks.length >= 1 && !/^[\s]*`/.test(L) && !/`[,]?[\s]*$/.test(L))) {
      console.log(i + 1, "ticks", ticks, JSON.stringify(L.slice(Math.max(0, ticks[0] - 10), ticks[0] + 15)));
    }
  }
}
// specifically line 943
const s = lines[942];
for (let j = 0; j < s.length; j++) {
  const c = s[j];
  if (c === "`" || c.charCodeAt(0) === 39 || c.charCodeAt(0) > 127) {
    console.log("943 pos", j, c.charCodeAt(0), JSON.stringify(c));
  }
}
