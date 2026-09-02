import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { pathToFileURL } from "node:url";

const CHAPTERS = {
  ch1: { file: "src/data/math-ch1-logic.ts", dir: "textbook/output/_rev/ch1", varName: "MATH_CH1_LOGIC" },
  ch5: { file: "src/data/math-ch5-linear-equations.ts", dir: "textbook/output/_rev/ch5", varName: "MATH_CH5_LINEAR_EQUATIONS" },
  ch8: { file: "src/data/math-ch8-power-functions.ts", dir: "textbook/output/_rev/ch8", varName: "MATH_CH8_POWER_FUNCTIONS" },
  ch11: { file: "src/data/math-ch11-financial.ts", dir: "textbook/output/_rev/ch11", varName: "MATH_CH11_FINANCIAL" },
};

function lit(n) {
  if (!n) return null;
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isTemplateExpression(n)) throw new Error("template interpolation in HEAD");
  return null;
}

function extract(src, varName) {
  const sf = ts.createSourceFile("head.ts", src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let arr = null;
  const visit = (n) => {
    if (
      !arr &&
      ts.isVariableDeclaration(n) &&
      n.name.getText(sf) === varName &&
      n.initializer &&
      ts.isArrayLiteralExpression(n.initializer)
    ) {
      arr = n.initializer;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!arr) throw new Error(`no ${varName}`);
  const map = new Map();
  for (const el of arr.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    const get = (k) => {
      const p = el.properties.find((x) => ts.isPropertyAssignment(x) && x.name.getText(sf) === k);
      return p && ts.isPropertyAssignment(p) ? p.initializer : null;
    };
    const id = lit(get("id"));
    const ov = lit(get("solution_overview")) ?? "";
    const tInit = get("tactical_explanations");
    if (!id || !tInit || !ts.isArrayLiteralExpression(tInit)) throw new Error(`bad task ${id}`);
    const tacticals = tInit.elements.map((e) => lit(e));
    if (tacticals.some((x) => x == null)) throw new Error(`bad tacticals ${id}`);
    map.set(id, { solution_overview: ov, tactical_explanations: tacticals });
  }
  return map;
}

const which = process.argv[2];
const specs = which ? { [which]: CHAPTERS[which] } : CHAPTERS;

for (const [name, spec] of Object.entries(specs)) {
  const head = execSync(`git show HEAD:${spec.file.replaceAll("\\", "/")}`, {
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  });
  const fromHead = extract(head, spec.varName);
  const files = fs.readdirSync(spec.dir).filter((f) => f.endsWith(".json") && !f.startsWith("_"));
  let n = 0;
  for (const f of files) {
    const p = path.join(spec.dir, f);
    const arr = JSON.parse(fs.readFileSync(p, "utf8"));
    for (const t of arr) {
      const old = fromHead.get(t.id);
      if (!old) throw new Error(`HEAD missing ${t.id}`);
      t.solution_overview = old.solution_overview;
      t.tactical_explanations = old.tactical_explanations;
      n += 1;
    }
    fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
  }
  console.log(name, "restored expl", n, "from HEAD");
}
