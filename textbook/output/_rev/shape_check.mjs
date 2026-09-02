import fs from "node:fs";

const files = process.argv.slice(2);
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(f, "utf8"));
  let bad = 0;
  const badIds = [];
  for (const t of arr) {
    const shapes = t.tactical_explanations.map((e) => {
      const body = e.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*/, "");
      return body.split(/\n\n+/).filter(Boolean).length;
    });
    if (new Set(shapes).size === 1) {
      bad += 1;
      badIds.push(`${t.id}:${shapes[0]}`);
    }
  }
  console.log(f, "tasks", arr.length, "sameShape", bad, bad ? badIds.join(",") : "");
}
