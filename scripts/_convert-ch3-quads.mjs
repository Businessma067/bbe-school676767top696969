/**
 * One-off: convert triplet RAW arrays to quad format for author-ch3-fc150.mjs
 */
import fs from "node:fs";
import path from "node:path";

const FALSE_PAIRS = {
  // 3.2 keyed by true statement prefix (first 40 chars normalized)
};

function norm(s) {
  return s.trim().toLowerCase().slice(0, 50);
}

/** Build quad from triplet — derive opposite from explanation */
function tripletToQuad([stmt, isTrue, expl]) {
  if (isTrue) {
    const falseStmt = makeFalse(stmt, expl);
    const falseExpl = makeFalseExpl(stmt, expl);
    return [stmt, expl, falseStmt, falseExpl];
  }
  const trueStmt = makeTrue(stmt, expl);
  const trueExpl = makeTrueExpl(stmt, expl);
  return [trueStmt, trueExpl, stmt, expl];
}

function makeTrue(falseStmt, expl) {
  // expl usually states the correct fact
  if (/^(Primary|Secondary|Tertiary|Mining|Banking|Insurance|GDP|Emerging|Developed|Profit|NPO|Not-for|Donation|Reinvest|Investor|Owner|Red Cross|WWF|Greenpeace)/i.test(expl)) {
    return expl.endsWith(".") ? expl : expl + ".";
  }
  // Invert common false patterns
  const inv = falseStmt
    .replace(/ belong to the primary sector/gi, " belong to the tertiary sector")
    .replace(/ are primary/gi, " are tertiary")
    .replace(/ is primary/gi, " is tertiary")
    .replace(/ are tertiary/gi, " are secondary")
    .replace(/ is tertiary/gi, " is secondary")
    .replace(/ are secondary/gi, " are tertiary")
    .replace(/ excludes /gi, " includes ")
    .replace(/ does not /gi, " does ")
    .replace(/ cannot /gi, " can ")
    .replace(/ need no /gi, " need ")
    .replace(/ ignore /gi, " require ")
    .replace(/ alone /gi, " with surplus ")
    .replace(/ without /gi, " with ");
  if (inv !== falseStmt && inv.length < 200) return inv.endsWith(".") ? inv : inv + ".";
  return expl.endsWith(".") ? expl : expl + ".";
}

function makeTrueExpl(falseStmt, expl) {
  return expl;
}

function makeFalse(trueStmt, expl) {
  // Common sector traps
  const traps = [
    ["primary sector", "tertiary sector because customer contact makes it a service"],
    ["secondary sector", "primary sector because it uses natural materials"],
    ["tertiary sector", "secondary sector because it produces tangible output"],
    ["tertiary services", "primary extraction because they use natural resources"],
    ["secondary manufacturing", "tertiary distribution because goods reach customers"],
    ["primary-sector", "secondary-sector because raw materials are processed on site"],
    ["GDP measures", "GDP excludes"],
    ["GDP includes", "GDP excludes"],
    ["inflation-adjusted", "nominal figures without inflation adjustment"],
    ["revenues to exceed", "revenue alone without controlling costs"],
    ["reinvested", "distributed immediately as owner dividends"],
    ["NPO surpluses", "NPO surpluses paid as shareholder dividends"],
    ["cover costs", "maximise owner profit"],
    ["donations", "no inflows because volunteers supply everything"],
  ];
  let s = trueStmt;
  for (const [from, to] of traps) {
    if (s.toLowerCase().includes(from)) {
      s = s.replace(new RegExp(from, "i"), to);
      break;
    }
  }
  if (s === trueStmt) {
    s = trueStmt
      .replace(/^The /, "The claim that ")
      .replace(/ is /, " is not ")
      .replace(/ are /, " are not ")
      .replace(/ can /, " cannot ")
      .replace(/ includes /, " excludes ")
      .replace(/ covers /, " excludes ");
  }
  return s.endsWith(".") ? s : s + ".";
}

function makeFalseExpl(trueStmt, expl) {
  return expl;
}

function convertRaw(raw, exportName, sectionComment) {
  const lines = [
    `/** Ch3 section ${sectionComment} — quad format for author-ch3-fc150.mjs */`,
    `const q = (a, b, c, d) => [a, b, c, d];`,
    ``,
    `export const ${exportName} = [`,
  ];
  for (const [title, context, diff, triplets] of raw) {
    const quads = triplets.map(tripletToQuad);
    lines.push(`  ["${title.replace(/"/g, '\\"')}", "${context.replace(/"/g, '\\"')}", "${diff}", [`);
    for (const [a, b, c, d] of quads) {
      lines.push(`    q(${JSON.stringify(a)}, ${JSON.stringify(b)}, ${JSON.stringify(c)}, ${JSON.stringify(d)}),`);
    }
    lines.push(`  ]],`);
  }
  lines.push(`];`, ``);
  return lines.join("\n");
}

// Import old-format data by dynamic import won't work if already quad.
// We'll read and eval — skip, use direct import after renaming.
