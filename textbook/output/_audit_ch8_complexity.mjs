import fs from "fs";

const src = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");

function extractTemplateString(s, startIdx) {
  // startIdx points at opening `
  let i = startIdx + 1;
  let out = "";
  while (i < s.length) {
    const ch = s[i];
    if (ch === "\\") {
      out += ch + s[i + 1];
      i += 2;
      continue;
    }
    if (ch === "`") return { value: out, end: i + 1 };
    out += ch;
    i++;
  }
  throw new Error("unclosed template");
}

const tasks = [];
let pos = 0;
while (true) {
  const idMatch = src.slice(pos).match(/id:\s*`math-8-(\d+)`/);
  if (!idMatch) break;
  const absId = pos + idMatch.index;
  const num = +idMatch[1];
  const id = `math-8-${num}`;

  // find next id or end
  const nextId = src.slice(absId + 1).match(/id:\s*`math-8-\d+`/);
  const blockEnd = nextId ? absId + 1 + nextId.index : src.length;
  const block = src.slice(absId, blockEnd);

  const titleM = block.match(/title:\s*`/);
  const title = titleM
    ? extractTemplateString(block, titleM.index + titleM[0].indexOf("`")).value
    : "";

  const ctxM = block.match(/context:\s*`/);
  const ctx = ctxM
    ? extractTemplateString(block, ctxM.index + ctxM[0].indexOf("`")).value
    : "";

  const stmtsStart = block.indexOf("statements:");
  const akStart = block.indexOf("answer_key:");
  const stmtsBlock = block.slice(stmtsStart, akStart);
  const stmts = [];
  let sp = 0;
  while (true) {
    const tick = stmtsBlock.indexOf("`", sp);
    if (tick < 0) break;
    // skip if inside answer later - we're only in statements
    const { value, end } = extractTemplateString(stmtsBlock, tick);
    stmts.push(value);
    sp = end;
  }

  const akM = block.match(/answer_key:\s*\[([^\]]+)\]/);
  const ak = akM[1].split(",").map((x) => x.trim() === "true");

  const diffM = block.match(/difficulty_level:\s*`([^`]+)`/);
  const diff = diffM[1];

  tasks.push({ id, num, diff, title, ctx, stmts, ak });
  pos = blockEnd;
}

tasks.sort((a, b) => a.num - b.num);

const byDiff = {};
const truth = {};
for (const t of tasks) {
  byDiff[t.diff] = (byDiff[t.diff] || 0) + 1;
  const trues = t.ak.filter(Boolean).length;
  truth[trues] = (truth[trues] || 0) + 1;
}

console.log("COUNT", tasks.length);
console.log("DIFF", JSON.stringify(byDiff));
console.log("TRUTH_COUNTS", JSON.stringify(truth));

for (const t of tasks) {
  console.log(`\n==== ${t.id} | ${t.diff} | T=${t.ak.filter(Boolean).length} ====`);
  console.log("TITLE:", t.title);
  console.log("CTX:", t.ctx.replace(/\n/g, " ").slice(0, 700));
  t.stmts.forEach((s, i) => {
    console.log(`${i + 1} [${t.ak[i]}] ${s.replace(/\n/g, " ")}`);
  });
}
