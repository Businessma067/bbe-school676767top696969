import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");

const extract = (source) => {
  const map = new Map();
  const blockRe =
    /id: "math-5-(\d+)",[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;
  let m;
  while ((m = blockRe.exec(source))) {
    const n = Number(m[1]);
    const items = [...m[2].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
      unescapeTemplate(x[1]),
    );
    map.set(n, items);
  }
  return map;
};

const beforeRaw = fs.readFileSync("textbook/output/_ch5_before.ts");
const beforeText =
  beforeRaw[0] === 0xff && beforeRaw[1] === 0xfe
    ? beforeRaw.toString("utf16le").slice(1)
    : beforeRaw.toString("utf8");
const before = extract(beforeText);
const after = extract(
  fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8"),
);

const shorter = [];
const rows = [];
for (let n = 1; n <= 60; n += 1) {
  const b = before.get(n) || [];
  const a = after.get(n) || [];
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const oldLen = (b[i] || "").length;
    const newLen = (a[i] || "").length;
    rows.push({ n, letter, oldLen, newLen, delta: newLen - oldLen });
    if (newLen < oldLen) shorter.push({ n, letter, oldLen, newLen });
  }
}

const byTask = new Map();
for (const r of shorter) byTask.set(r.n, (byTask.get(r.n) || 0) + 1);

console.log(
  JSON.stringify(
    {
      totals: {
        oldChars: rows.reduce((s, r) => s + r.oldLen, 0),
        newChars: rows.reduce((s, r) => s + r.newLen, 0),
      },
      shorterCount: shorter.length,
      tasksAffected: [...byTask.entries()]
        .sort((x, y) => x[0] - y[0])
        .map(([task, count]) => `${task}:${count}`),
      worst: [...shorter]
        .sort((x, y) => x.newLen - x.oldLen - (y.newLen - y.oldLen))
        .slice(0, 25),
    },
    null,
    2,
  ),
);

fs.writeFileSync(
  "textbook/output/_ch5_shorter_report.json",
  JSON.stringify(shorter, null, 2),
  "utf8",
);
