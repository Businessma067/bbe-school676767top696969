import { readFileSync, writeFileSync } from "node:fs";

const dir = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/";
const outPath = dir + "_ch11_ov_out_4.json";

const readJson = (p) => {
  const raw = readFileSync(p);
  if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) {
    console.log("note: BOM found in " + p);
    return JSON.parse(raw.slice(3).toString("utf8"));
  }
  return JSON.parse(raw.toString("utf8"));
};

const out = readJson(outPath);
const patch = readJson(dir + "_ch11_ov_patch_4.json");
const byId = new Map(patch.map((p) => [p.id, p.text]));

const applied = [];
for (const item of out) {
  if (byId.has(item.id)) {
    item.text = byId.get(item.id);
    applied.push(item.id);
  }
}

if (applied.length !== patch.length) {
  throw new Error(`applied ${applied.length} of ${patch.length} patches`);
}

const serialized = out.map((item) => ({ id: item.id, text: item.text }));
writeFileSync(outPath, JSON.stringify(serialized, null, 2) + "\n", { encoding: "utf8" });
console.log(`entries: ${serialized.length}; patched: ${applied.length}`);
console.log(applied.join(", "));
