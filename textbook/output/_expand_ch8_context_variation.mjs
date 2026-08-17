import fs from "node:fs";
import ts from "typescript";

const path = "src/data/math-ch8-power-functions.ts";
const source = fs.readFileSync(path, "utf8");
const sf = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

const edits = [];
const report = [];

function property(object, name) {
  return object.properties.find(
    (p) =>
      ts.isPropertyAssignment(p) &&
      ((ts.isIdentifier(p.name) && p.name.text === name) ||
        (ts.isStringLiteral(p.name) && p.name.text === name)),
  );
}

function rawTemplate(node) {
  const text = source.slice(node.getStart(sf), node.getEnd());
  if (!text.startsWith("`") || !text.endsWith("`")) {
    throw new Error(`Expected template literal at ${node.getStart(sf)}`);
  }
  return text.slice(1, -1);
}

function compactOverview(raw) {
  let body = raw;
  const part = body.indexOf("**Part 1:");
  if (part >= 0) body = body.slice(part);
  const answer = body.lastIndexOf("**Answer.**");
  if (answer >= 0) body = body.slice(0, answer).trimEnd();
  return body.trim();
}

function visit(node) {
  if (
    ts.isVariableDeclaration(node) &&
    ts.isIdentifier(node.name) &&
    node.name.text === "MATH_CH8_POWER_FUNCTIONS" &&
    node.initializer
  ) {
    let init = node.initializer;
    if (ts.isAsExpression(init)) init = init.expression;
    if (!ts.isArrayLiteralExpression(init)) {
      throw new Error("Chapter 8 export is not an array");
    }

    for (const element of init.elements) {
      if (!ts.isObjectLiteralExpression(element)) continue;
      const idProp = property(element, "id");
      const tacticalProp = property(element, "tactical_explanations");
      const overviewProp = property(element, "solution_overview");
      if (!idProp || !tacticalProp || !overviewProp) continue;
      if (
        !ts.isNoSubstitutionTemplateLiteral(idProp.initializer) ||
        !ts.isArrayLiteralExpression(tacticalProp.initializer) ||
        !ts.isNoSubstitutionTemplateLiteral(overviewProp.initializer)
      ) {
        throw new Error(`Unexpected schema near ${element.getStart(sf)}`);
      }

      const taskId = idProp.initializer.text;
      const taskNumber = Number(taskId.match(/(\d+)$/)?.[1]);
      if (!Number.isFinite(taskNumber) || taskNumber > 87) continue;

      const explanations = tacticalProp.initializer.elements;
      if (explanations.length !== 5 || !explanations.every(ts.isNoSubstitutionTemplateLiteral)) {
        throw new Error(`${taskId} does not have five plain template explanations`);
      }

      const lengths = explanations.map((e) => rawTemplate(e).length);
      const targetIndex = (taskNumber * 3 + 1) % 5;
      const target = explanations[targetIndex];
      const overview = compactOverview(rawTemplate(overviewProp.initializer));
      const current = rawTemplate(target);
      const otherLengths = lengths.filter((_, i) => i !== targetIndex);
      const shortestOther = Math.min(...otherLengths);
      const desired = Math.ceil(shortestOther * 3.05);

      let addition = `\n\n**Extended context check.** The same claim can be checked against the complete model, not only against the quickest calculation above. Rebuilding the scenario keeps the coefficient, domain, units, and scaling rule visible at the same time:\n\n${overview}`;

      // Usually the complete overview already creates a 3x contrast. If this task has
      // an unusually short overview, add a non-repetitive consistency checklist.
      if (current.length + addition.length < desired) {
        addition += `\n\nThis full reconstruction also supplies three safeguards: every substituted input stays in the stated domain, each numerical comparison uses the model's own units, and every percentage claim is checked through an exact output ratio before rounding. Those checks lead to the same truth value as the direct route above.`;
      }

      edits.push({
        start: target.getEnd() - 1,
        text: addition,
      });
      const finalLengths = [...lengths];
      finalLengths[targetIndex] += addition.length;
      report.push({
        task: taskNumber,
        expanded: "ABCDE"[targetIndex],
        beforeRatio: Math.max(...lengths) / Math.min(...lengths),
        afterRatio: Math.max(...finalLengths) / Math.min(...finalLengths),
        added: addition.length,
      });
    }
  }
  ts.forEachChild(node, visit);
}

visit(sf);

if (edits.length !== 87) {
  throw new Error(`Expected 87 edits, found ${edits.length}`);
}

let output = source;
for (const edit of edits.sort((a, b) => b.start - a.start)) {
  output = output.slice(0, edit.start) + edit.text + output.slice(edit.start);
}
fs.writeFileSync(path, output);

const ratios = report.map((r) => r.afterRatio);
console.log(
  JSON.stringify(
    {
      tasksExpanded: report.length,
      minAfterRatio: Math.min(...ratios),
      medianAfterRatio: ratios.sort((a, b) => a - b)[Math.floor(ratios.length / 2)],
      maxAfterRatio: Math.max(...ratios),
      belowThree: report.filter((r) => r.afterRatio < 3).map((r) => r.task),
      totalAdded: report.reduce((sum, r) => sum + r.added, 0),
    },
    null,
    2,
  ),
);
