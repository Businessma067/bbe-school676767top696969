import fs from "node:fs";
import path from "node:path";

const dir = "supabase/migrations";
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".sql") && !f.includes("subtopic"));

function pull(sub) {
  const out = [];
  for (const f of files) {
    const sql = fs.readFileSync(path.join(dir, f), "utf8");
    if (!sql.includes("economics_cases")) continue;
    // Split on tuple starts for this subsection
    const marker = `('${sub}',`;
    let idx = 0;
    while (true) {
      const start = sql.indexOf(marker, idx);
      if (start < 0) break;
      const chunk = sql.slice(start, start + 6000);
      idx = start + marker.length;
      if (!/CASE\s+\d/i.test(chunk)) continue;
      // title: third quoted field roughly
      const fields = [];
      let i = 0;
      while (i < chunk.length && fields.length < 3) {
        if (chunk[i] === "'") {
          let j = i + 1;
          let s = "";
          while (j < chunk.length) {
            if (chunk[j] === "'" && chunk[j + 1] === "'") {
              s += "'";
              j += 2;
              continue;
            }
            if (chunk[j] === "'") break;
            s += chunk[j];
            j++;
          }
          fields.push(s);
          i = j + 1;
        } else i++;
      }
      const arrStart = chunk.indexOf("ARRAY[");
      if (arrStart < 0 || fields.length < 3) continue;
      // parse three arrays
      const arrays = [];
      let p = arrStart;
      for (let a = 0; a < 3; a++) {
        const as = chunk.indexOf("ARRAY[", p);
        if (as < 0) break;
        const open = chunk.indexOf("[", as);
        let depth = 0;
        let end = open;
        for (; end < chunk.length; end++) {
          if (chunk[end] === "[") depth++;
          if (chunk[end] === "]") {
            depth--;
            if (depth === 0) {
              end++;
              break;
            }
          }
        }
        const body = chunk.slice(open + 1, end - 1);
        const items = [];
        let k = 0;
        while (k < body.length) {
          if (body[k] === "'") {
            let j = k + 1;
            let s = "";
            while (j < body.length) {
              if (body[j] === "'" && body[j + 1] === "'") {
                s += "'";
                j += 2;
                continue;
              }
              if (body[j] === "'") break;
              s += body[j];
              j++;
            }
            items.push(s);
            k = j + 1;
          } else k++;
        }
        arrays.push(items);
        p = end;
      }
      if (arrays[0]?.length === 5 && arrays[2]?.length === 5) {
        out.push({
          title: fields[2],
          ctx: fields.length > 2 ? chunk.match(/',\s*'((?:[^']|'')*)',\s*ARRAY/)?.[1]?.replace(/''/g, "'") : "",
          stmts: arrays[0],
          expl: arrays[2],
        });
      }
    }
  }
  // Fix context extraction: re-parse properly with simpler approach
  return out;
}

function pullSimple(sub) {
  const out = [];
  for (const f of files) {
    const sql = fs.readFileSync(path.join(dir, f), "utf8");
    const re = new RegExp(
      `\\('${sub}',\\s*'CASE [^']+',\\s*'((?:[^']|'')*)',\\s*'((?:[^']|'')*)',\\s*ARRAY\\[([\\s\\S]*?)\\],\\s*ARRAY\\[[\\s\\S]*?\\],\\s*ARRAY\\[([\\s\\S]*?)\\]`,
      "g",
    );
    let m;
    while ((m = re.exec(sql))) {
      const title = m[1].replace(/''/g, "'");
      const ctx = m[2].replace(/''/g, "'");
      const stmts = [...m[3].matchAll(/'((?:[^']|'')*)'/g)].map((x) =>
        x[1].replace(/''/g, "'"),
      );
      const expl = [...m[4].matchAll(/'((?:[^']|'')*)'/g)].map((x) =>
        x[1].replace(/''/g, "'"),
      );
      if (stmts.length === 5) out.push({ title, ctx, stmts, expl });
    }
  }
  return out;
}

function stats(label, arr) {
  if (!arr.length) {
    console.log(label, "empty");
    return;
  }
  const avg = (a) => Math.round(a.reduce((x, y) => x + y, 0) / a.length);
  const ctxL = arr.map((c) => c.ctx.length);
  const stL = arr.flatMap((c) => c.stmts.map((s) => s.length));
  const exL = arr.flatMap((c) => c.expl.map((s) => s.length));
  const starts = {};
  const endings = { Evaluate: 0, Analyze: 0, Assess: 0, Review: 0, Consider: 0, other: 0 };
  for (const c of arr) {
    const w = c.ctx.trim().split(/\s+/)[0];
    starts[w] = (starts[w] || 0) + 1;
    if (/Evaluate[:.]?\s*$/i.test(c.ctx)) endings.Evaluate++;
    else if (/Analyze[:.]?\s*$/i.test(c.ctx)) endings.Analyze++;
    else if (/Assess[:.]?\s*$/i.test(c.ctx)) endings.Assess++;
    else if (/Review[:.]?\s*$/i.test(c.ctx)) endings.Review++;
    else if (/Consider[:.]?\s*$/i.test(c.ctx)) endings.Consider++;
    else endings.other++;
  }
  const truePrefix = arr.flatMap((c) => c.expl).filter((e) => /^TRUE —/.test(e)).length;
  const falsePrefix = arr.flatMap((c) => c.expl).filter((e) => /^FALSE —/.test(e)).length;
  console.log(
    JSON.stringify(
      {
        label,
        n: arr.length,
        avgCtx: avg(ctxL),
        avgStmt: avg(stL),
        avgExpl: avg(exL),
        ctxFirstWord: starts,
        ctxEndings: endings,
        explPrefixes: { truePrefix, falsePrefix },
        samples: arr.slice(0, 2).map((c) => ({
          title: c.title,
          ctx: c.ctx,
          stmt0: c.stmts[0],
          expl0: c.expl[0],
        })),
      },
      null,
      2,
    ),
  );
}

const fc2 = pullSimple("2");
const fc3 = pullSimple("3");
const neu = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch3-subtopics.json", "utf8"),
).map((c) => ({
  title: c.title,
  ctx: c.context,
  stmts: c.statements,
  expl: c.tactical_explanations,
}));

stats("FULL_COURSE_CH2_SEED", fc2);
stats("FULL_COURSE_CH3_SEED", fc3);
stats("NEW_SUBTOPIC_CH3", neu);
