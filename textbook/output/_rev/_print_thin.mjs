import fs from "node:fs";

const arr = JSON.parse(fs.readFileSync("textbook/output/_rev/_current_thin.json", "utf8"));
for (const e of arr) {
  console.log("========== " + e.id + " " + e.letter + " key=" + e.key + " ==========");
  console.log("STMT: " + e.statement);
  console.log("HDR: " + e.header);
  console.log("BODY: " + e.body);
  console.log("---OVERVIEW---");
  console.log(e.overview.slice(0, 1800));
  console.log("---SIBLINGS---");
  for (const s of e.other_headers) {
    if (s.L === e.letter) continue;
    console.log(s.L + " (" + s.words + "w): " + s.body.slice(0, 220).replace(/\n/g, " / "));
  }
  console.log("");
}
