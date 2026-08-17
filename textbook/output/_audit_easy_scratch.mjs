import fs from "node:fs";
import ts from "typescript";
import katex from "katex";

function audit(file) {
  const src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let arr = null;
  const visit = (n) => {
    if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) arr = n.initializer;
    ts.forEachChild(n, visit);
  };
  visit(sf);
  const problems = [];
  const rows = [];
  for (const el of arr.elements) {
    const get = (name) => el.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;
    const id = get("id").text;
    const ctx = get("context").text;
    const stmts = get("statements").elements.map((e) => e.text);
    const keys = get("answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
    const expls = get("tactical_explanations").elements.map((e) => e.text);
    const overview = get("solution_overview").text;
    if (ctx.length > 200) problems.push(`${id}: ctx ${ctx.length}`);
    if (!/Mark it TRUE or FALSE\.\s*$/.test(ctx)) problems.push(`${id}: ctx tail`);
    stmts.forEach((s, i) => { if (s.length > 85) problems.push(`${id}${ "ABCDE"[i]}: stmt ${s.length}`); });
    expls.forEach((e, i) => {
      const letter = "ABCDE"[i];
      const want = keys[i] ? "True" : "False";
      if (!e.startsWith(`**${letter}.** → ${want}`)) problems.push(`${id}${letter}: opener`);
      if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letter}: closer`);
      if (e.includes("Extended context check") || e.includes("**Part 1:")) problems.push(`${id}${letter}: embedded overview`);
      if (e.includes("${")) problems.push(`${id}${letter}: \${`);
      if (e.includes("—")) problems.push(`${id}${letter}: emdash`);
    });
    const lens = expls.map((e) => e.length);
    const min = Math.min(...lens);
    const max = Math.max(...lens);
    if (min < 300) problems.push(`${id}: min ${min}`);
    if (max / min < 3) problems.push(`${id}: ratio ${(max / min).toFixed(2)}`);
    // single-backslash latex commands in source text of template literals: look for odd escapes in raw source of explanations
    const rawEl = src.slice(el.getStart(sf), el.end);
    if (/(?<!\\)\\[a-zA-Z]+/.test(rawEl.replace(/\\\\/g, ""))) {
      // after removing double backslashes, leftover \cmd is a single-backslash bug
      const leftovers = [...rawEl.replace(/\\\\/g, "").matchAll(/\\[a-zA-Z]+/g)].map((m) => m[0]);
      if (leftovers.length) problems.push(`${id}: single-backslash ${leftovers.slice(0, 5).join(",")}`);
    }
    let katexFails = 0;
    for (const text of [ctx, ...stmts, ...expls, overview]) {
      const spans = [
        ...(text.match(/\$\$[\s\S]*?\$\$/g) ?? []).map((s) => ({ body: s.slice(2, -2), display: true })),
        ...(text.replace(/\$\$[\s\S]*?\$\$/g, "").match(/\$[^$\n]+\$/g) ?? []).map((s) => ({ body: s.slice(1, -1), display: false })),
      ];
      for (const span of spans) {
        try { katex.renderToString(span.body, { throwOnError: true, displayMode: span.display }); }
        catch (err) { katexFails++; problems.push(`${id}: katex ${span.body.slice(0, 40)} :: ${String(err.message).slice(0, 60)}`); }
      }
    }
    rows.push({ id, ctx: ctx.length, stmtMax: Math.max(...stmts.map((s) => s.length)), min, max, ratio: +(max / min).toFixed(2), keys: keys.map((b) => (b ? "T" : "F")).join(""), katexFails });
  }
  console.log(`\n=== ${file}`);
  for (const r of rows) console.log(`  ${r.id} keys=${r.keys} ctx=${r.ctx} stmtMax=${r.stmtMax} expl=${r.min}..${r.max} ratio=${r.ratio}`);
  console.log(`  problems: ${problems.length}`);
  problems.slice(0, 30).forEach((p) => console.log(`   - ${p}`));
  return problems.length;
}

const n = audit("textbook/output/_ch8_easy_a.ts") + audit("textbook/output/_ch8_easy_b.ts");
process.exit(n ? 1 : 0);
