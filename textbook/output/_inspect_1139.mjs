import fs from "node:fs";

const input = JSON.parse(fs.readFileSync("textbook/output/_ch11_ov_batch_2.json", "utf8"));
const output = JSON.parse(fs.readFileSync("textbook/output/_ch11_ov_out_2.json", "utf8"));
const item = input.find((x) => x.caseId === "MATH 11.39");
const out = output.find((x) => x.id === item.id);
console.log("--- ORIGINAL context for 03/04 ---");
for (const n of ["03", "04"]) {
  const re = new RegExp(`.{0,80}${n}.{0,40}`, "g");
  console.log((item.text.match(re) || []).slice(0, 3).join("\n"));
}
console.log("\n--- NEW text slice ---");
console.log(out.text.slice(0, 800));
console.log("...");
console.log(out.text.slice(-800));
