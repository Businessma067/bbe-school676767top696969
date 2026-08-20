#!/usr/bin/env node
/**
 * Audit ch4 task data: compare statement equations vs tactical_explanation primary equations.
 */
import fs from "node:fs";
import path from "node:path";
import {
  pickPrimaryEq,
  normalizeLatexEq,
  isValidStudentEquation,
} from "./rewrite-ch4-root-claims.mjs";

const FILES = [
  { path: "src/data/math-ch4-4-exponential.ts", label: "math-ch4-4-exponential.ts", full: true },
  { path: "src/data/math-ch4-equations.ts", label: "math-ch4-equations.ts", full: false },
];

function parseBacktickArray(chunk, field) {
  const marker = `${field}: [`;
  const start = chunk.indexOf(marker);
  if (start === -1) return [];
  let i = start + marker.length;
  const items = [];
  while (i < chunk.length) {
    while (i < chunk.length && /[\s,]/.test(chunk[i])) i++;
    if (chunk[i] === "]") break;
    if (chunk[i] !== "`") break;
    i++;
    let val = "";
    while (i < chunk.length) {
      if (chunk[i] === "\\") {
        val += chunk[i++];
        if (i < chunk.length) val += chunk[i++];
        continue;
      }
      if (chunk[i] === "`") break;
      val += chunk[i++];
    }
    i++;
    items.push(val);
  }
  return items;
}

function parseTasks(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const tasks = [];
  const re = /id: `(math-4-\d+)`,[\s\S]*?(?=\n  \},\n  \{|\n  \},\n\]|$)/g;
  let m;
  while ((m = re.exec(src))) {
    const chunk = m[0];
    tasks.push({
      id: chunk.match(/id: `(math-4-\d+)`/)[1],
      subsection: chunk.match(/subsection: `([^`]+)`/)?.[1] ?? "",
      title: chunk.match(/title: `([^`]+)`/)?.[1] ?? "",
      overview: chunk.match(/solution_overview: `([^`]+)`/)?.[1] ?? "",
      statements: parseBacktickArray(chunk, "statements"),
      tactical_explanations: parseBacktickArray(chunk, "tactical_explanations"),
    });
  }
  return tasks;
}

function normalizeForCompare(eq) {
  if (!eq) return "";
  let s = normalizeLatexEq(eq)
    .replace(/\\,/g, "")
    .replace(/\\dfrac/g, "\\frac")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\\cdot/g, "*")
    .replace(/\\times/g, "*")
    .replace(/\\log\b/g, "\\log")
    .replace(/\\ln\b/g, "\\ln")
    .replace(/\s+/g, "")
    .replace(/\{(\d+)\}/g, "$1")
    .replace(/\^\{([^}]+)\}/g, "^$1")
    .replace(/_\{([^}]+)\}/g, "_$1")
    .toLowerCase();

  // Canonicalize common rewrites
  s = s.replace(/10\^-2/g, "0.01");
  s = s.replace(/\\frac\{1\}\{8\}/g, "2^-3");
  s = s.replace(/\\frac\{1\}\{9\}/g, "3^-2");
  s = s.replace(/\\frac\{1\}\{25\}/g, "5^-2");
  s = s.replace(/\\iff/g, "=");
  s = s.replace(/\\text\{[^}]*\}/g, "");
  s = s.replace(/\\quad[^$]*/g, "");
  s = s.replace(/\\or/g, "");

  // Drop trailing domain-only fragments
  if (/^x[<>]/.test(s) && !/=/.test(s)) return s;

  return s;
}

function extractStatementEquation(stmt) {
  const s = stmt.trim();

  // Standard: For $eq$, claim
  const forM = s.match(/^For \$([^$]+)\$/);
  if (forM) {
    let eq = normalizeLatexEq(forM[1].trim());
    // Handle log definition with iff
    if (/\\iff/.test(eq)) {
      const parts = eq.split(/\\iff/);
      eq = parts.find((p) => /\\log|ln/.test(p) && /=/.test(p)) ?? parts[0];
    }
    return { eq, format: "for-eq" };
  }

  // Bare equation statements (older style)
  const bareM = s.match(/^The equation \$([^$]+)\$/);
  if (bareM) return { eq: normalizeLatexEq(bareM[1]), format: "bare-eq" };

  // Meta / no equation
  if (/^The equation has (no|exactly one)/i.test(s)) return { eq: null, format: "meta-no-eq" };
  if (/^Every real/i.test(s)) return { eq: null, format: "meta-universal" };

  // Nested prose (equations.ts): extract first inline $...=...$
  const inline = [];
  for (const m of s.matchAll(/\$([^$]+)\$/g)) {
    const t = normalizeLatexEq(m[1].trim());
    if (/=/.test(t) && t.length > 3) inline.push(t);
  }
  if (inline.length) return { eq: inline[0], format: "inline-prose" };

  return { eq: null, format: "unknown" };
}

function extractFirstBlockEq(exp) {
  const m = exp.match(/\$\$([^$]+)\$\$/);
  return m ? normalizeLatexEq(m[1].trim().replace(/\s+/g, " ")) : null;
}

function structuralSig(eq) {
  if (!eq) return "";
  const s = normalizeForCompare(eq);
  return s
    .replace(/[0-9.+-]+/g, "#")
    .replace(/log_\d+/g, "log_b")
    .replace(/log\d+/g, "log_b")
    .replace(/\^#+/g, "^#");
}

function equationsMatch(a, b) {
  if (!a || !b) return false;
  const na = normalizeForCompare(a);
  const nb = normalizeForCompare(b);
  if (na === nb) return true;

  // One may be a simplified step (e.g. 2x=1 vs 4^x=2)
  if (na.includes(nb) || nb.includes(na)) return true;

  // Same structural form with different constants often means rewrite chain
  if (structuralSig(a) === structuralSig(b)) {
    // Allow if both have same unknown pattern
    const unkA = (a.match(/[a-z](?=\^|_|\b)/gi) || []).sort().join("");
    const unkB = (b.match(/[a-z](?=\^|_|\b)/gi) || []).sort().join("");
    if (unkA === unkB) return "rewrite";
  }

  return false;
}

function detectSemanticMismatch(stmt, exp, stmtEq, expEq) {
  const reasons = [];
  const expNorm = exp.toLowerCase();

  // Domain-only explanation without the statement equation appearing
  const domainOnly =
    (/must be positive|domain requires|outside the domain|before \$\\log/i.test(exp) ||
      /x > \d|x < \d|x \\le \d|x \\ge \d/i.test(exp)) &&
    !exp.includes(stmtEq?.slice(0, Math.min(12, stmtEq?.length ?? 0)) ?? "___");

  if (domainOnly && stmtEq && !expNorm.includes(normalizeForCompare(stmtEq).slice(0, 8))) {
    reasons.push("domain-only discussion; statement equation absent from explanation");
  }

  // Statement names one equation, explanation substitutes u=e^x etc.
  if (stmtEq && /e\^\{2x\}/.test(stmtEq) && expEq && /^u/.test(expEq.replace(/\s/g, ""))) {
    if (!/substitute|let \$u = e\^x/i.test(exp)) {
      reasons.push("statement is e^{2x} quadratic but explanation uses u without clear link");
    }
  }

  // Completely different unknowns
  if (stmtEq && expEq) {
    const stmtUnk = new Set((stmtEq.match(/\b[a-z]\b/gi) || []).map((x) => x.toLowerCase()));
    const expUnk = new Set((expEq.match(/\b[a-z]\b/gi) || []).map((x) => x.toLowerCase()));
    const stmtOnly = [...stmtUnk].filter((u) => !expUnk.has(u));
    const expOnly = [...expUnk].filter((u) => !stmtUnk.has(u));
    if (stmtOnly.length && expOnly.length && stmtOnly[0] !== expOnly[0]) {
      // u substitution is OK
      if (!(stmtOnly.includes("x") && expOnly.includes("u"))) {
        reasons.push(`different unknowns: statement ${stmtOnly.join(",")} vs explanation ${expOnly.join(",")}`);
      }
    }
  }

  // Explanation discusses impossible/range when statement has concrete equation
  if (
    stmtEq &&
    /not in the range|strictly positive|cannot equal|zero is not|no real solution exists because/i.test(exp) &&
    !equationsMatch(stmtEq, expEq) &&
    !normalizeForCompare(stmtEq).includes("=-") &&
    !/=0$/.test(normalizeForCompare(stmtEq))
  ) {
    if (/2\^x>0|5\^x>0|7\^x>0|e\^x>0/.test(normalizeForCompare(expEq || ""))) {
      reasons.push("explanation proves impossibility via range; check statement target sign");
    }
  }

  return reasons;
}

function classifyMismatch(stmt, exp, stmtParsed, expEq, firstBlock) {
  const { eq: stmtEq, format } = stmtParsed;
  if (!stmtEq) {
    if (format === "meta-no-eq" || format === "unknown") {
      const inferred = pickPrimaryEq(exp);
      return {
        severity: inferred ? "special-no-stmt-eq" : "info",
        stmtEq: null,
        expEq: inferred || expEq,
        firstBlock,
        format,
        reasons: inferred ? ["statement lacks For $eq$; explanation has solvable equation"] : [],
      };
    }
    return null;
  }

  if (!expEq) {
    return {
      severity: "hard",
      stmtEq,
      expEq: null,
      firstBlock,
      format,
      reasons: ["no primary equation found in explanation"],
    };
  }

  const match = equationsMatch(stmtEq, expEq);
  if (match === true) return null;
  if (match === "rewrite") {
    return {
      severity: "soft",
      stmtEq,
      expEq,
      firstBlock,
      format,
      reasons: ["equivalent rewrite chain; different displayed equation"],
    };
  }

  const sem = detectSemanticMismatch(stmt, exp, stmtEq, expEq);
  const severity = sem.length ? "semantic" : "hard";

  return {
    severity,
    stmtEq,
    expEq,
    firstBlock,
    format,
    reasons: sem.length ? sem : ["equation in statement differs from explanation primary equation"],
  };
}

function auditFile(fileInfo) {
  const tasks = parseTasks(path.join(process.cwd(), fileInfo.path));
  const toAudit = fileInfo.full ? tasks : tasks.filter((t) => ["4.1", "4.2", "4.3", "4.4"].includes(t.subsection));

  const results = [];
  for (const t of toAudit) {
    for (let i = 0; i < 5; i++) {
      const stmt = t.statements[i] ?? "";
      const exp = t.tactical_explanations[i] ?? "";
      const letter = String.fromCharCode(65 + i);
      const stmtParsed = extractStatementEquation(stmt);
      const expEq = pickPrimaryEq(exp, t.overview, t.title);
      const firstBlock = extractFirstBlockEq(exp);
      const mm = classifyMismatch(stmt, exp, stmtParsed, expEq, firstBlock);
      if (mm) {
        results.push({
          id: t.id,
          letter,
          subsection: t.subsection,
          severity: mm.severity,
          format: mm.format,
          statement: stmt.slice(0, 120),
          stmtEq: mm.stmtEq,
          expEq: mm.expEq,
          firstBlock,
          reasons: mm.reasons,
        });
      }
    }
  }

  return { fileInfo, taskCount: toAudit.length, results };
}

function scoreWorst(r) {
  const sev = { hard: 4, semantic: 3, "special-no-stmt-eq": 2, soft: 1, info: 0 };
  return (sev[r.severity] ?? 0) * 10 + (r.reasons?.length ?? 0);
}

const reports = FILES.map(auditFile);

for (const rep of reports) {
  const { results, taskCount, fileInfo } = rep;
  const bySev = {};
  for (const r of results) bySev[r.severity] = (bySev[r.severity] ?? 0) + 1;

  console.log(`\n${"=".repeat(72)}`);
  console.log(`FILE: ${fileInfo.label} (${taskCount} tasks audited)`);
  console.log(`TOTAL MISMATCHES: ${results.length} / ${taskCount * 5} letter-slots`);
  console.log(`BY SEVERITY:`, JSON.stringify(bySev, null, 0));

  const worst = [...results].sort((a, b) => scoreWorst(b) - scoreWorst(a)).slice(0, 20);
  console.log(`\nWORST OFFENDERS (top ${worst.length}):`);
  for (const w of worst) {
    console.log(`  ${w.id} [${w.letter}] (${w.severity})`);
    console.log(`    stmt: ${w.statement}`);
    console.log(`    stmtEq: ${w.stmtEq ?? "(none)"}`);
    console.log(`    expEq:  ${w.expEq ?? "(none)"}`);
    console.log(`    first$$: ${w.firstBlock ?? "(none)"}`);
    console.log(`    why: ${w.reasons.join("; ")}`);
  }
}

// Summary JSON for programmatic use
const summary = Object.fromEntries(
  reports.map((r) => [
    r.fileInfo.label,
    {
      tasks: r.taskCount,
      totalMismatches: r.results.length,
      bySeverity: r.results.reduce((acc, x) => {
        acc[x.severity] = (acc[x.severity] ?? 0) + 1;
        return acc;
      }, {}),
      worst: r.results
        .sort((a, b) => scoreWorst(b) - scoreWorst(a))
        .slice(0, 15)
        .map((w) => ({
          id: w.id,
          letter: w.letter,
          severity: w.severity,
          statement: w.statement,
          stmtEq: w.stmtEq,
          expEq: w.expEq,
          firstBlock: w.firstBlock,
          reasons: w.reasons,
        })),
    },
  ])
);
console.log(`\n${"=".repeat(72)}`);
console.log("SUMMARY_JSON");
console.log(JSON.stringify(summary, null, 2));
