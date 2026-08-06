import fs from "node:fs";

const cases = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch3-subtopics.json", "utf8"),
);

const bookHits = [];
const stmtMap = new Map();
const dups = [];
const ban =
  /\bthe book\b|according to the book|\(alt\s+/i;

for (const x of cases) {
  const fields = [
    x.title,
    x.context,
    ...(x.statements || []),
    ...(x.tactical_explanations || []),
  ];
  for (const f of fields) {
    if (ban.test(String(f))) {
      bookHits.push({ id: x.case_id, snippet: String(f).slice(0, 140) });
      break;
    }
  }
  for (let i = 0; i < (x.statements || []).length; i++) {
    const s = String(x.statements[i]).trim();
    const k = s.toLowerCase();
    if (stmtMap.has(k)) {
      dups.push({ a: stmtMap.get(k), b: `${x.case_id}[${i}]`, s: s.slice(0, 140) });
    } else {
      stmtMap.set(k, `${x.case_id}[${i}]`);
    }
  }
}

const prefix = new Map();
const near = [];
for (const x of cases) {
  for (let i = 0; i < x.statements.length; i++) {
    const s = String(x.statements[i]).trim();
    const p = s.toLowerCase().slice(0, 80);
    if (prefix.has(p) && prefix.get(p) !== `${x.case_id}[${i}]`) {
      near.push({
        a: prefix.get(p),
        b: `${x.case_id}[${i}]`,
        s: s.slice(0, 120),
      });
    } else {
      prefix.set(p, `${x.case_id}[${i}]`);
    }
  }
}

console.log(JSON.stringify({
  cases: cases.length,
  statements: cases.length * 5,
  bookOrAltHits: bookHits.length,
  bookHits: bookHits.slice(0, 40),
  exactDupStatements: dups.length,
  dups: dups.slice(0, 40),
  nearDupPrefix80: near.length,
  near: near.slice(0, 20),
}, null, 2));
