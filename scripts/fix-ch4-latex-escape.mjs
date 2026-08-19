#!/usr/bin/env node
/**
 * Fix over-escaped LaTeX in ch4 statements.
 * TS source should use \\frac (2 chars) for runtime \frac, not \\\\frac (4 chars).
 */
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];

function deescapeStatement(s) {
  let out = s;
  while (out.includes("\\\\\\\\")) {
    out = out.replace(/\\\\\\\\/g, "\\\\");
  }
  return out;
}

for (const path of FILES) {
  let src = fs.readFileSync(path, "utf8");
  let changed = false;
  src = src.replace(/statements: \[([\s\S]*?)\n    \],/g, (full, inner) => {
    const fixedInner = inner.replace(/`([^`]*)`/g, (m, s) => {
      const d = deescapeStatement(s);
      if (d !== s) changed = true;
      return `\`${d}\``;
    });
    return `statements: [${fixedInner}\n    ],`;
  });
  if (changed) {
    fs.writeFileSync(path, src);
    console.log(`Fixed ${path}`);
  } else {
    console.log(`No change ${path}`);
  }
}

function parseStmtFromLine(line) {
  const m = line.match(/`([^`]*)`/);
  if (!m) return null;
  let val = "";
  for (let i = 0; i < m[1].length; i++) {
    if (m[1][i] === "\\") {
      val += m[1][i++];
      if (i < m[1].length) val += m[1][i];
    } else val += m[1][i];
  }
  return val;
}

const exp = fs.readFileSync("src/data/math-ch4-4-exponential.ts", "utf8");
const line = exp.split("\n").find((l) => l.includes("log_2 x +") && l.includes("frac"));
if (line) {
  const runtime = parseStmtFromLine(line.trim());
  console.log("Sample runtime:", JSON.stringify(runtime?.slice(0, 70)));
  console.log("Form-feed:", runtime?.includes("\f"));
}
