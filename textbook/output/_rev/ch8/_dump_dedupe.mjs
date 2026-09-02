import fs from "node:fs";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"));
const files = [
  "01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json",
  "51_60.json", "61_70.json", "71_80.json", "81_90.json", "91_97.json",
];

function firstPara(s) {
  return (s || "").split(/\n\n/)[0].replace(/\n/g, " ").slice(0, 180);
}

function closer(e) {
  const body = e.replace(/^\*\*[A-E]\.\*\* → (?:True|False)\n\n/, "");
  const last = body.trim().split(/\n\n+/).pop() || "";
  return last.replace(/\n/g, " ").slice(-120);
}

function displays(s) {
  const m = [...(s || "").matchAll(/\$\$([^$]+)\$\$/g)].map((x) => x[1].replace(/\s+/g, " ").trim());
  return m.slice(0, 8);
}

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  console.log("\n========", f, arr.length, "========");
  for (const t of arr) {
    const ov = t.solution_overview || "";
    const ctx = (t.context || "").replace(/\s+/g, " ").slice(0, 160);
    const fp = firstPara(ov);
    const stemCopy = fp.slice(0, 40) === ctx.slice(0, 40) || /Evaluate each statement/.test(fp);
    console.log("\n---", t.id, t.title);
    console.log("CTX:", ctx);
    console.log("OV1:", fp, stemCopy ? "  [STEMCOPY?]" : "");
    console.log("OV displays:", displays(ov).join(" || "));
    console.log("Answer line:", (ov.split("**Answer.**")[1] || "").trim().slice(0, 200));
    t.statements.forEach((s, i) => {
      const e = t.tactical_explanations[i];
      const hdr = (e.match(/^\*\*[A-E]\.\*\* → (?:True|False)/) || [""])[0];
      const key = t.answer_key[i] ? "T" : "F";
      console.log(`  ${hdr} key=${key} | ${s}`);
      console.log("    close:", closer(e));
      console.log("    disp:", displays(e).join(" || "));
    });
  }
}
