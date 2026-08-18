import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const BANKS = {
  ch1: {
    file: "src/data/math-ch1-logic.ts",
    varName: "MATH_CH1_LOGIC",
  },
  ch5: {
    file: "src/data/math-ch5-linear-equations.ts",
    varName: "MATH_CH5_LINEAR_EQUATIONS",
  },
  ch8: {
    file: "src/data/math-ch8-power-functions.ts",
    varName: "MATH_CH8_POWER_FUNCTIONS",
  },
  ch11: {
    file: "src/data/math-ch11-financial.ts",
    varName: "MATH_CH11_FINANCIAL",
  },
};

function literalValue(node, sf) {
  if (!node) return undefined;
  if (ts.isNoSubstitutionTemplateLiteral(node) || ts.isStringLiteral(node)) {
    return node.text;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((el) => literalValue(el, sf));
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  return undefined;
}

function objectFromLiteral(node, sf) {
  const out = {};
  for (const prop of node.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const name = prop.name.getText(sf).replace(/['"]/g, "");
    out[name] = literalValue(prop.initializer, sf);
  }
  return out;
}

function findArray(sf, varName) {
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
  if (!arr) throw new Error(`no array literal for ${varName}`);
  return arr;
}

function loadBank(key) {
  const spec = BANKS[key];
  const src = fs.readFileSync(spec.file, "utf8");
  const sf = ts.createSourceFile(spec.file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const arr = findArray(sf, spec.varName);
  const tasks = arr.elements
    .filter(ts.isObjectLiteralExpression)
    .map((el) => objectFromLiteral(el, sf));
  return { spec, src, sf, arr, tasks };
}

function esc(s) {
  if (s == null) return "";
  if (String(s).includes("${")) throw new Error("forbidden ${");
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function replaceTemplateProp(src, objNode, sf, propName, newText) {
  const prop = objNode.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === propName,
  );
  if (!prop) throw new Error(`missing ${propName}`);
  const init = prop.initializer;
  if (!ts.isNoSubstitutionTemplateLiteral(init)) {
    throw new Error(`${propName} is not a template literal`);
  }
  // Include the backticks
  const start = init.getStart(sf);
  const end = init.end;
  return { start, end, text: `\`${esc(newText)}\`` };
}

function replaceTemplateArrayProp(src, objNode, sf, propName, newItems) {
  const prop = objNode.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === propName,
  );
  if (!prop) throw new Error(`missing ${propName}`);
  const init = prop.initializer;
  if (!ts.isArrayLiteralExpression(init)) throw new Error(`${propName} is not an array`);
  const inner = newItems.map((s) => `      \`${esc(s)}\``).join(",\n");
  const text = `[\n${inner},\n    ]`;
  return { start: init.getStart(sf), end: init.end, text };
}

function applyPatches(src, patches) {
  const ordered = [...patches].sort((a, b) => b.start - a.start);
  let next = src;
  for (const p of ordered) {
    next = next.slice(0, p.start) + p.text + next.slice(p.end);
  }
  return next;
}

const cmd = process.argv[2];
const key = process.argv[3];
if (!BANKS[key]) {
  console.error("usage: node bank-io.mjs extract|splice ch1|ch5|ch8|ch11 [jsonDir]");
  process.exit(1);
}

const jsonDir = process.argv[4] || path.join("textbook/output/_1318_rewrite", key);

if (cmd === "extract") {
  const { tasks } = loadBank(key);
  fs.mkdirSync(jsonDir, { recursive: true });
  fs.writeFileSync(path.join(jsonDir, "all.json"), JSON.stringify(tasks, null, 2));
  const size = 20;
  let part = 0;
  for (let i = 0; i < tasks.length; i += size) {
    part += 1;
    const slice = tasks.slice(i, i + size);
    fs.writeFileSync(
      path.join(jsonDir, `part-${String(part).padStart(2, "0")}.json`),
      JSON.stringify(slice, null, 2),
    );
  }
  console.log(key, tasks.length, "tasks", part, "parts");
} else if (cmd === "splice") {
  const { spec, src, sf, arr, tasks } = loadBank(key);
  const rewritten = JSON.parse(fs.readFileSync(path.join(jsonDir, "all.json"), "utf8"));
  const byId = new Map(rewritten.map((t) => [t.id, t]));
  if (byId.size !== tasks.length) {
    throw new Error(`count mismatch live ${tasks.length} json ${byId.size}`);
  }
  const objects = arr.elements.filter(ts.isObjectLiteralExpression);
  const patches = [];
  for (const obj of objects) {
    const idProp = obj.properties.find(
      (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id",
    );
    const id = literalValue(idProp.initializer, sf);
    const t = byId.get(id);
    if (!t) throw new Error(`missing rewrite for ${id}`);
    if (!Array.isArray(t.tactical_explanations) || t.tactical_explanations.length !== 5) {
      throw new Error(`${id} needs 5 explanations`);
    }
    if (typeof t.solution_overview !== "string") {
      throw new Error(`${id} missing overview`);
    }
    patches.push(replaceTemplateArrayProp(src, obj, sf, "tactical_explanations", t.tactical_explanations));
    patches.push(replaceTemplateProp(src, obj, sf, "solution_overview", t.solution_overview));
  }
  const next = applyPatches(src, patches);
  fs.writeFileSync(spec.file, next);
  console.log("spliced", key, objects.length);
} else {
  console.error("unknown cmd", cmd);
  process.exit(1);
}
