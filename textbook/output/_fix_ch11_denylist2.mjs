import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";

function hasUnescapedDollar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "$") continue;
    if (i >= 2 && s[i - 1] === "\\" && s[i - 2] === "\\") continue;
    return true;
  }
  return false;
}

/** Source-file sanitizer: write \\times \\approx \\% into the .ts template. */
function sanitize(s) {
  return s
    .replace(/×/g, "\\\\times")
    .replace(/≈/g, "\\\\approx")
    .replace(/(?<!\\)%/g, "\\\\%");
}

function isMathLhs(lhs) {
  const t = lhs.trim();
  if (/^[A-Z]{2,5}$/.test(t)) return true;
  if (/^[A-Za-z](?:_[A-Za-z0-9\\{}]+)?(?:\([^)]+\))?$/.test(t) && t.length <= 10) return true;
  if (/^[A-Za-z][A-Za-z0-9]*_\{/.test(t)) return true;
  if (/^[A-Za-z]\\w*\([^)]+\)$/.test(t)) return true;
  if (/^[a-z]{1,3}$/.test(t)) return true;
  return false;
}

function splitComment(s) {
  const tests = [
    / \((not|vs\.?|versus) [^)]+\)$/i,
    /, which .+$/i,
    / percentage points.*$/i,
    / points$/i,
    / months.*$/i,
    / years$/i,
  ];
  for (const re of tests) {
    const m = s.match(re);
    if (m && m.index > 0) return { formula: s.slice(0, m.index), comment: s.slice(m.index) };
  }
  return { formula: s, comment: "" };
}

function wrapEq(eq, trailingDot = false) {
  let s = eq.trim().replace(/\.$/, "");
  if (s.includes("; ")) {
    const parts = s.split("; ");
    return parts
      .map((p, i) => wrapEq(p, trailingDot && i === parts.length - 1))
      .join("; ");
  }
  const colon = s.match(/^([^:]{1,80}):\s+([\s\S]+)$/);
  if (colon && /[A-Za-z]{3,}/.test(colon[1]) && /[=≈$]/.test(colon[2])) {
    const rest = colon[2].trim();
    if (rest.startsWith("$") || rest.includes("$")) {
      return `${colon[1].replace(/\\\\%/g, "%")}: ${rest}${trailingDot && !rest.endsWith(".") ? "." : ""}`;
    }
    return `${colon[1].replace(/\\\\%/g, "%")}: ${wrapEq(colon[2], trailingDot)}`;
  }
  const { formula, comment } = splitComment(s);
  s = formula.trim();
  const eqm = s.match(/^([^=]+?)\s*=\s*([\s\S]+)$/);
  if (eqm) {
    const lhs = eqm[1].trim();
    const rhs = sanitize(eqm[2].trim());
    const core = isMathLhs(lhs) ? `$${lhs} = ${rhs}$` : `${lhs.replace(/\\\\%/g, "%")} $= ${rhs}$`;
    return core + comment + (trailingDot && !comment ? "." : "");
  }
  const ap = s.match(/^([^=≈]+?)\s*(≈|\\\\approx)\s*([\s\S]+)$/);
  if (ap) {
    const lhs = ap[1].trim();
    let rhs = sanitize(ap[3].trim());
    if (/\s+to\s+/.test(rhs)) {
      const [a, b] = rhs.split(/\s+to\s+/);
      const core = `${lhs.replace(/\\\\%/g, "%")} $\\\\approx ${a}$ to $${b}$`;
      return core + comment + (trailingDot && !comment ? "." : "");
    }
    const core = isMathLhs(lhs)
      ? `$${lhs} \\\\approx ${rhs}$`
      : `${lhs.replace(/\\\\%/g, "%")} $\\\\approx ${rhs}$`;
    return core + comment + (trailingDot && !comment ? "." : "");
  }
  return sanitize(s) + comment + (trailingDot ? "." : "");
}

function mergeHalf(line) {
  const m = line.match(/^(.*?)\$([^$\n]+)\$(\s*-\s*1)?\s*(≈|\\\\approx|=)\s*([\s\S]+)$/);
  if (!m) return line;
  const prefix = m[1];
  let rest = m[5];
  const hadDot = /\.$/.test(rest);
  rest = rest.replace(/\.$/, "");
  const { formula, comment } = splitComment(rest);
  const opMinus = m[3] || "";
  const op = m[4] === "≈" ? "\\\\approx" : m[4];
  const inner = sanitize(`${m[2]}${opMinus} ${op} ${formula}`.replace(/\s+/g, " ").trim());
  return `${prefix}$${inner}$${comment}${hadDot && !/\.$/.test(comment) ? "." : ""}`;
}

function fixMatchingLede(line) {
  let t = line.replace(/\r/g, "").replace(/\.\$\.$/, ".");
  const isApprox = /matching approximately/.test(t);
  const isExact = /matching exactly/.test(t);
  if (!isExact && !isApprox) return line;
  const tag = isExact ? "matching exactly." : "matching approximately.";
  t = t.replace(/,?\s*matching (?:exactly|approximately)\.?\s*$/, "").replace(/,$/, "");
  if (t.startsWith("$") && t.endsWith("$") && !hasUnescapedDollar(t.slice(1, -1))) {
    return `${t}, ${tag}`;
  }
  if (/\$[^$\n]+\$\s*(-\s*1\s*)?(≈|\\\\approx|=)/.test(t)) {
    t = mergeHalf(t.replace(/^\$/, "").replace(/\$$/, "") === t ? t : t);
    if (!t.includes("matching")) return `${t.replace(/,\s*$/, "")}, ${tag}`;
  }
  t = t.replace(/^\$/, "").replace(/\$$/, "");
  if (/\$[^$\n]+\$\s*(-\s*1\s*)?(≈|\\\\approx)/.test(line) || /\$[^$\n]+\$\s*-\s*1/.test(line)) {
    const merged = mergeHalf(line.replace(/,?\s*matching (?:exactly|approximately)\.?\s*$/, "").replace(/\.\$\.$/, "").replace(/\r/g, ""));
    return `${merged.replace(/,\s*$/, "")}, ${tag}`;
  }
  return `${wrapEq(t)}, ${tag}`;
}

function splitEqCommentary(body) {
  let b = body;
  b = b.replace(/(\$=\s*)([^$]*?) \(not ([^)]+)\)\$(\.?)/, (_, a, f, n, d) => `${a}${f}$ (not $${n}$)${d}`);
  b = b.replace(/(\$=\s*)([^$]*?\\\\%), which ([^$]*)\$(\.?)/, (_, a, f, rest, d) => {
    const rest2 = rest.replace(/\b([0-9.]+\\\\%)/g, "$$$1$");
    return `${a}${f}$, which ${rest2}${d}`;
  });
  return b;
}

function wrapProseCalcs(body) {
  return body
    .replace(/\(n = (\d+)\)/g, (_m, n) => `($n = ${n}$)`)
    .replace(/\bR = nominal rate = ([0-9.]+%)/g, (_m, b) => `$R$ = nominal rate $= ${sanitize(b)}$`)
    .replace(/\bthan ([0-9.]+%), not/g, (_m, b) => `than $${sanitize(b)}$, not`);
}

function fixNumbered(line) {
  const m = line.match(/^(\*\*\d+\.\*\*)\s+([\s\S]+)$/);
  if (!m) return line;
  const num = m[1];
  let body = m[2].replace(/\r/g, "");

  if (/^\$/.test(body) && /\$\$\.?$/.test(body) && hasUnescapedDollar(body.slice(1).replace(/\$\$\.?$/, ""))) {
    body = body.replace(/^\$/, "").replace(/\$\$(\.?)$/, "$$$1");
  }

  if (/\$[^$\n]+\$\s*(-\s*1)?\s*(≈|\\\\approx|=)/.test(body)) {
    body = mergeHalf(body);
  }

  if (body.includes("$=")) {
    body = splitEqCommentary(body);
    return `${num} ${body}`;
  }

  const stripped = body.replace(/\.$/, "");
  if (stripped.startsWith("$") && stripped.endsWith("$") && !hasUnescapedDollar(stripped.slice(1, -1))) {
    const inner = stripped.slice(1, -1);
    if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(inner) || /^(Offer|Account|Fund|Option|Annual|Monthly|Quarterly|Semi-annual|Continuous|Daily|Interest|At |For |Using |Comparing |General |Component |Deal |Tranche |Year-|Month-|Step |NPV |Cash |Equal |Plain |Discount |Combined |Target |Periodic |Nominal |Growth |Difference |Gap |First |ln\()/i.test(inner)) {
      const hadDot = /\.$/.test(body);
      return `${num} ${wrapEq(inner, hadDot)}`;
    }
    return `${num} ${body}`;
  }

  const hasMath = hasUnescapedDollar(body);

  if (!hasMath && /(=|≈|×|\\\\times|\\\\approx)/.test(body) && /\d/.test(body)) {
    if (
      /^(The |Because |With |If |Compare |Since |Compound |Growth rates|Ranking |Confirms |This |A |More |Year-|Regardless|Annual compounding|Monthly compounding|A shorter|The first|The same|Ordering |Comparing |Trap:|Half )/i.test(
        body,
      ) &&
      !/^(Gap|FV|EAR|PV|Difference|Total growth|Periodic|Nominal|Target|Interest|First gap|nt\b)/i.test(body)
    ) {
      return `${num} ${wrapProseCalcs(body)}`;
    }
    const hadDot = /\.$/.test(body);
    return `${num} ${wrapEq(body, hadDot)}`;
  }

  if (body.startsWith("$") && body.endsWith("$") === false && body.endsWith("$.")) {
    const inner = body.slice(1, -2);
    if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(inner) || /^(Offer|Interest|FV of|At |Fund |Option |Annual|Monthly|Quarterly|Semi|Continuous|Component |Deal |Step |NPV |Year-|Month-|Cash |Equal |Combined |Target |Periodic |Nominal |Growth |Difference |Gap |ln\(|Doubling)/i.test(inner)) {
      return `${num} ${wrapEq(inner, true)}`;
    }
  }

  return `${num} ${body}`;
}

function test(name, got, expected) {
  if (got !== expected) {
    console.error("FAIL", name, "\n got:", got, "\n exp:", expected);
    throw new Error("test failed: " + name);
  }
}

function runTests() {
  test(
    "periodic lede",
    fixMatchingLede("$Periodic rate = 0.072/12 = 0.60%, matching exactly.$.") ,
    "Periodic rate $= 0.072/12 = 0.60\\\\%$, matching exactly.",
  );
  test(
    "fv lede",
    fixMatchingLede("FV = 6,000 × 1.074424 = \\\\$6,446.54, matching exactly."),
    "$FV = 6,000 \\\\times 1.074424 = \\\\$6,446.54$, matching exactly.",
  );
  test(
    "r lede keep",
    fixMatchingLede("$R = (1.006)^{12} - 1 \\\\approx 7.44\\\\%$, matching exactly."),
    "$R = (1.006)^{12} - 1 \\\\approx 7.44\\\\%$, matching exactly.",
  );
  test(
    "half lede",
    fixMatchingLede("$R_i = (1.016)^{4}$ - 1 ≈ 6.55%, matching exactly."),
    "$R_i = (1.016)^{4} - 1 \\\\approx 6.55\\\\%$, matching exactly.",
  );
  test(
    "nested step",
    fixNumbered("**1.** $Semi-annual: $R = (1.075)^{2} - 1 = 1.155625 - 1 = 0.155625 \\\\approx 15.56\\\\%$$."),
    "**1.** Semi-annual: $R = (1.075)^{2} - 1 = 1.155625 - 1 = 0.155625 \\\\approx 15.56\\\\%$.",
  );
  test(
    "offer step",
    fixNumbered("**1.** $Offer (i): periodic rate = 0.064/4 = 0.016$."),
    "**1.** Offer (i): periodic rate $= 0.064/4 = 0.016$.",
  );
  test(
    "fv overview keep",
    fixNumbered("**3.** $FV = 6,000 \\\\times 1.074424 = \\\\$6,446.54$."),
    "**3.** $FV = 6,000 \\\\times 1.074424 = \\\\$6,446.54$.",
  );
  test(
    "gap keep",
    fixNumbered("**5.** Gap $= 7.44\\\\% - 7.20\\\\% = 0.24$ percentage points, which is far less than 1.00 point."),
    "**5.** Gap $= 7.44\\\\% - 7.20\\\\% = 0.24$ percentage points, which is far less than 1.00 point.",
  );
  test(
    "half S(6)",
    fixNumbered("**2.** $S(6) = 6,000 \\\\times (1.02)^{24}$ ≈ 6,000 × 1.608435 = \\\\$9,650.61 (not \\\\$9,860.00)."),
    "**2.** $S(6) = 6,000 \\\\times (1.02)^{24} \\\\approx 6,000 \\\\times 1.608435 = \\\\$9,650.61$ (not \\\\$9,860.00).",
  );
  test(
    "which split",
    fixNumbered("**4.** Total growth $= (9,650.61 - 6,000)/6,000 \\\\approx 0.6084 = 60.84\\\\%, which is not more than 65\\\\%$."),
    "**4.** Total growth $= (9,650.61 - 6,000)/6,000 \\\\approx 0.6084 = 60.84\\\\%$, which is not more than $65\\\\%$.",
  );
  test(
    "difference",
    fixNumbered("**8.** Difference ≈ \\\\$5.23 to \\\\$5.24."),
    "**8.** Difference $\\\\approx \\\\$5.23$ to $\\\\$5.24$.",
  );
  test(
    "annual prose",
    fixNumbered("**4.** Annual compounding (n = 1) gives R = nominal rate = 7.20%, which is lower than 7.44%, not higher."),
    "**4.** Annual compounding ($n = 1$) gives $R$ = nominal rate $= 7.20\\\\%$, which is lower than $7.44\\\\%$, not higher.",
  );
  console.log("all tests passed");
}

export { sanitize, wrapEq, mergeHalf, fixMatchingLede, hasUnescapedDollar };

const isMain =
  typeof process !== "undefined" &&
  process.argv[1] &&
  /_fix_ch11_denylist2\.mjs$/.test(String(process.argv[1]).replace(/\\/g, "/"));

if (isMain) {
runTests();

const BAK = "textbook/output/_math-ch11-financial.bak.ts";
const raw0 = fs.existsSync(BAK) ? fs.readFileSync(BAK, "utf8") : fs.readFileSync(PATH, "utf8");
let s = raw0.replace(/\r(?!\n)/g, "");
const lines = s.split("\n");
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (/^\*\*\d+\.\*\*/.test(line)) lines[i] = fixNumbered(line);
  else if (/matching exactly|matching approximately/.test(line) && !line.includes("$$")) lines[i] = fixMatchingLede(line);
}
s = lines.join("\n");
s = s.replace(/\n\$\.\n/g, "\n");
s = s.replace(/(?<!\\)\\%/g, "\\\\%");

s = s.replace(
  /At (r|t|δ) \$= ([^:$]+): \$/g,
  (_m, v, val) => `At $${v} = ${val}$: $`,
);
s = s.replace(/\$([A-Za-z][A-Za-z0-9_{}\\^()]*(?:_\{[^}]+\})?) \$=/g, "$$$1 =");
s = s.replace(/\$\$([.,;:)])/g, "$$$1");
s = s.replace(/^(\*\*\d+\.\*\*) \$([A-Za-z][^$\n]{0,80}: )\$/gm, "$1 $2$");
s = s.replace(
  /\$([^$\n]+)\$ months ≈ ([0-9.]+) years/g,
  "$$$1$ months $\\\\approx $2$ years",
);
s = s.replace(
  /\$([^$\n]*?) ≈ (\\\\\$[0-9,]+\.[0-9]+)\$/g,
  "$$$1 \\\\approx $2$",
);
s = s.replace(
  /\bFV = ([0-9,]+) × ([0-9.]+) = (\\\\\$[0-9,]+\.[0-9]+)/g,
  "$FV = $1 \\\\times $2 = $3$",
);
s = s.replace(
  /(\d+(?:\.\d+)?) × (\d+(?:\.\d+)?)% \$= /g,
  "$$$1 \\\\times $2\\\\% = ",
);
s = s.replace(
  /(\d+(?:,\d{3})*)×(\d+(?:\.\d+)?) \$= /g,
  "$$$1 \\\\times $2 = ",
);
s = s.replace(
  /Trap: the actual gap is only 7\.44% - 7\.20% = 0\.24 percentage points/g,
  "Trap: the actual gap is only $7.44\\\\% - 7.20\\\\% = 0.24$ percentage points",
);
s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

fs.writeFileSync(PATH, s);

function extract(src) {
  const map = new Map();
  const re = /id: `math-11-(\d+)`/g;
  const idxs = [];
  let m;
  while ((m = re.exec(src))) idxs.push([m.index, Number(m[1])]);
  for (let i = 0; i < idxs.length; i++) {
    const [a, id] = idxs[i];
    const b = i + 1 < idxs.length ? idxs[i + 1][0] : src.length;
    map.set(id, src.slice(a, b));
  }
  return map;
}
const A = extract(raw0);
const B = extract(s);
let touched = 0;
for (const [id, old] of A) if (B.get(id) !== old) touched++;

const ov1 = s.slice(s.indexOf("id: `math-11-1`"), s.indexOf("id: `math-11-2`"));
const part3 = ov1.split("**Part 3: Solve.**")[1] || "";
const steps = part3.split("\n").filter((l) => /^\*\*[1235]\./.test(l));
const e = (ov1.match(/Trap: the actual gap[^\n]+/) || [])[0];
const c = (ov1.match(/\$FV =[^\n]+/) || ov1.match(/FV =[^\n]+/) || [])[0];
fs.writeFileSync(
  "textbook/output/_ch11_verify.json",
  JSON.stringify(
    {
      changed: raw0 !== s,
      touched,
      fileText: (s.match(/\\text\{/g) || []).length,
      step1: steps[0],
      step2: steps[1],
      step3: steps[2],
      step5: steps.find((l) => l.startsWith("**5.")),
      eTrap: e,
      cLede: c,
    },
    null,
    2,
  ),
);
console.log("wrote", raw0.length, "->", s.length, "touched", touched);
}
