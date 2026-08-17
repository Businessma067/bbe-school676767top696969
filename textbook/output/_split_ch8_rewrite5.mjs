import fs from "node:fs";
const all = JSON.parse(fs.readFileSync("textbook/output/_ch8_rewrite/all.json", "utf8"));
for (let start = 1; start <= 97; start += 5) {
  const end = Math.min(start + 4, 97);
  const slice = all.filter((t) => t.sort_order >= start && t.sort_order <= end);
  const name = `${String(start).padStart(2, "0")}_${String(end).padStart(2, "0")}`;
  fs.writeFileSync(`textbook/output/_ch8_rewrite/${name}.json`, JSON.stringify(slice, null, 2));
  console.log(name, slice.length);
}
