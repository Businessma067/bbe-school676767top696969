import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
let raw = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5.json"), "utf8");
raw = raw.slice(0, raw.lastIndexOf("]") + 1);
const mid = JSON.parse(raw);
const index = JSON.parse(fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"));

function bodyOf(e) {
  const raw = e.expl || e.header || "";
  return raw.replace(/^\*\*[A-E]\)[^\n]*\n+/, "").trim();
}

const start = Number(process.argv[2] || 1);
const end = Number(process.argv[3] || 20);
for (const e of mid) {
  const n = mid.indexOf(e) + 1;
  if (n < start || n > end) continue;
  const ix = index[n - 1];
  console.log("====", n, e.id, e.letter, e.words, e.key, "====");
  console.log("TITLE:", ix.title);
  console.log("ANS:", ix.answer);
  console.log("CTX:", ix.context);
  console.log("STMT:", e.statement);
  console.log("ALL:", JSON.stringify(ix.statements));
  console.log("KEYS:", JSON.stringify(ix.keys));
  console.log(bodyOf(e));
  console.log("");
}
