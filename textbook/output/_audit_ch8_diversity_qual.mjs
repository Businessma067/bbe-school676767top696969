import fs from "fs";

const detail = JSON.parse(
  fs.readFileSync(
    "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch8_diversity_detail.json",
    "utf8"
  )
);
const src = fs.readFileSync(
  "C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch8-power-functions.ts",
  "utf8"
);

const starts = [];
const re = /id: `math-8-(\d+)`/g;
let m;
while ((m = re.exec(src))) starts.push({ n: +m[1], i: m.index });

function fieldStr(taskSrc, field) {
  const marker = field + ": `";
  const i = taskSrc.indexOf(marker);
  if (i < 0) return null;
  let j = i + marker.length,
    esc = false;
  for (; j < taskSrc.length; j++) {
    const c = taskSrc[j];
    if (c === "\\" && !esc) {
      esc = true;
      continue;
    }
    if (c === "`" && !esc) return taskSrc.slice(i + marker.length, j);
    esc = false;
  }
  return null;
}

function fieldArr(taskSrc, field) {
  const marker = field + ": [";
  const i = taskSrc.indexOf(marker);
  if (i < 0) return null;
  let j = i + marker.length,
    depth = 1,
    inTick = false,
    esc = false;
  for (; j < taskSrc.length; j++) {
    const c = taskSrc[j];
    if (inTick) {
      if (c === "\\" && !esc) {
        esc = true;
        continue;
      }
      if (c === "`" && !esc) inTick = false;
      esc = false;
      continue;
    }
    if (c === "`") {
      inTick = true;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return taskSrc.slice(i + marker.length, j);
    }
  }
  return null;
}

function splitTL(body) {
  const out = [];
  let i = 0;
  while (i < body.length) {
    while (i < body.length && /[\s,]/.test(body[i])) i++;
    if (i >= body.length) break;
    if (body[i] !== "`") {
      i++;
      continue;
    }
    i++;
    let esc = false;
    const start = i;
    for (; i < body.length; i++) {
      const c = body[i];
      if (c === "\\" && !esc) {
        esc = true;
        continue;
      }
      if (c === "`" && !esc) {
        out.push(body.slice(start, i));
        i++;
        break;
      }
      esc = false;
    }
  }
  return out;
}

const tasks = [];
for (let ti = 0; ti < starts.length; ti++) {
  const start = starts[ti].i;
  const end = ti + 1 < starts.length ? starts[ti + 1].i : src.length;
  const taskSrc = src.slice(start, end);
  const n = starts[ti].n;
  const stmts = splitTL(fieldArr(taskSrc, "statements") || "");
  const expls = splitTL(fieldArr(taskSrc, "tactical_explanations") || "");
  const overview = fieldStr(taskSrc, "solution_overview") || "";
  const title = (taskSrc.match(/title: `([^`]+)`/) || [])[1];
  const answers = (taskSrc.match(/answer_key: \[([^\]]+)\]/) || [])[1];
  tasks.push({ n, title, stmts, expls, answers, overview });
}

function classifyStmt(s) {
  const t = s.toLowerCase();
  if (/had |would be|if a |under that|counter/.test(t)) return "counterfactual";
  if (/exponent|\br\s*=|elasticity/.test(t)) return "recover-exponent";
  if (/coefficient|\ba\s*=|satisfies \$a/.test(t)) return "recover-coeff";
  if (/plan a|plan b|versus|rival|competitor|turbine [ab]|procedure|algorithm|app [lq]/i.test(t))
    return "compare";
  if (/metre|cm\b|kg|tonne|rewrite|convert|in new|units/.test(t)) return "units";
  if (/doubl|tripling|percent|%|raises by|multiplies|widening|half the|scale-up|scaling/.test(t))
    return "scaling";
  if (
    /ceiling|cap|floor|rated|certified|alarm|permit|inside|exceed|keeps the|below the|above the/.test(
      t
    )
  )
    return "boundary";
  if (/requires|reaching|produces exactly|that produces|solve for|invert|back to/.test(t))
    return "invert";
  if (/at \$|delivers|is \$|equals|reading|recorded/.test(t)) return "evaluate-level";
  if (/compos|through|then /.test(t)) return "compose";
  return "other";
}

const lines = [];
const ranges = [
  [1, 30],
  [31, 60],
  [61, 87],
];
for (const [a, b] of ranges) {
  lines.push(`\n==== RANGE ${a}-${b} statement types ====`);
  const counts = {};
  for (const t of tasks.filter((t) => t.n >= a && t.n <= b)) {
    t.stmts.forEach((s) => {
      const c = classifyStmt(s);
      counts[c] = (counts[c] || 0) + 1;
    });
  }
  lines.push(
    Object.entries(counts)
      .sort((x, y) => y[1] - x[1])
      .map(([k, v]) => `${k}:${v}`)
      .join(", ")
  );
}

function stem(e) {
  const body = e.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n+/i, "").trim();
  const first = (body.split(/\n\s*\n/)[0] || "")
    .replace(/\$[^$]+\$/g, "MATH")
    .replace(/\s+/g, " ")
    .slice(0, 100);
  return first.replace(/\d+(\.\d+)?/g, "N");
}

const stems = {};
for (const t of tasks) {
  t.expls.forEach((e, i) => {
    const s = stem(e);
    const key = s.slice(0, 60);
    if (!stems[key]) stems[key] = [];
    stems[key].push(t.n + String.fromCharCode(65 + i));
  });
}
lines.push("\n==== MOST REPEATED LEDE STEMS (top 30) ====");
Object.entries(stems)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 30)
  .forEach(([k, v]) => {
    lines.push(`${v.length} | ${k}... | ${v.slice(0, 12).join(",")}`);
  });

lines.push("\n==== OVERVIEW TEMPLATE DEPTH ====");
const tagHist = {},
  stepHist = {},
  ovCombo = {};
for (const t of tasks) {
  const tags = (t.overview.match(/\\tag\{/g) || []).length;
  const steps = (t.overview.match(/\*\*\d+\.\*\*/g) || []).length;
  tagHist[tags] = (tagHist[tags] || 0) + 1;
  stepHist[steps] = (stepHist[steps] || 0) + 1;
  const dm = (t.overview.match(/\$\$[\s\S]*?\$\$/g) || []).length;
  const key = `${dm}dm/${tags}tag/${steps}step`;
  ovCombo[key] = (ovCombo[key] || 0) + 1;
}
lines.push("tags " + JSON.stringify(tagHist));
lines.push("steps " + JSON.stringify(stepHist));
lines.push("top overview combos:");
Object.entries(ovCombo)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .forEach(([k, v]) => lines.push(`${v}\t${k}`));

lines.push("\n==== SHORT OVERVIEWS ====");
detail.tasks
  .filter((t) => t.ovW < 100)
  .forEach((t) =>
    lines.push(`#${t.n} ovW=${t.ovW} ovDm=${t.ovDm} ovP=${t.ovP} | ${t.title}`)
  );

// Closing formula pattern in tactical: "so the statement is True/False"
const closing = {};
for (const t of tasks) {
  for (const e of t.expls) {
    const last = e.trim().split(/\n/).pop();
    const norm = last
      .replace(/\$[^$]+\$/g, "MATH")
      .replace(/\d+(\.\d+)?/g, "N")
      .replace(/\s+/g, " ")
      .slice(0, 90);
    closing[norm] = (closing[norm] || 0) + 1;
  }
}
lines.push("\n==== CLOSING LINE PATTERNS (top 15) ====");
Object.entries(closing)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .forEach(([k, v]) => lines.push(`${v} | ${k}`));

// Template skeleton: prose, math, prose, math, prose
function skeleton(e) {
  const body = e.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n+/i, "").trim();
  const parts = body.split(/(\$\$[\s\S]*?\$\$)/);
  return parts
    .map((p) => {
      if (/^\$\$/.test(p)) return "M";
      const letters = (p.match(/[A-Za-z]/g) || []).length;
      if (letters < 10) return ".";
      return "P";
    })
    .filter((x) => x !== ".")
    .join("-");
}

const skel = {};
for (const t of tasks) {
  t.expls.forEach((e, i) => {
    const s = skeleton(e);
    if (!skel[s]) skel[s] = [];
    skel[s].push(t.n + String.fromCharCode(65 + i));
  });
}
lines.push("\n==== EXPLANATION SKELETONS (P=prose, M=display math) ====");
Object.entries(skel)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([k, v]) => {
    lines.push(`${v.length}\t${k}\t(${((100 * v.length) / 435).toFixed(1)}%)`);
  });

// Sample hyper-uniform tasks
for (const n of [44, 41, 32, 7, 55, 77, 87, 6, 67]) {
  const t = tasks.find((x) => x.n === n);
  lines.push(`\n######## TASK ${n} ${t.title}`);
  lines.push("STMTS:");
  t.stmts.forEach((s, i) =>
    lines.push(`  ${String.fromCharCode(65 + i)}. [${classifyStmt(s)}] ${s.slice(0, 140)}`)
  );
  lines.push(
    "EXPL skeletons: " + t.expls.map((e) => skeleton(e)).join(" | ")
  );
  lines.push(
    "EXPL words~: " +
      t.expls
        .map((e) =>
          e
            .replace(/\$\$[\s\S]*?\$\$/g, " ")
            .replace(/\$[^$]+\$/g, " ")
            .split(/\s+/)
            .filter(Boolean).length
        )
        .join(",")
  );
  lines.push("--- A ---");
  lines.push(t.expls[0]);
  lines.push("--- C ---");
  lines.push(t.expls[2]);
  lines.push("--- OVERVIEW (first 800) ---");
  lines.push(t.overview.slice(0, 800));
}

// Candidates: expand = hyper-uniform with complex stmt types but short form
lines.push("\n==== EXPAND CANDIDATES BY CONTENT FIT ====");
const expandHints = [];
for (const t of tasks) {
  const meta = detail.tasks.find((x) => x.n === t.n);
  t.stmts.forEach((s, i) => {
    const c = classifyStmt(s);
    const e = t.expls[i];
    const dm = (e.match(/\$\$[\s\S]*?\$\$/g) || []).length;
    const words = e
      .replace(/\$\$[\s\S]*?\$\$/g, " ")
      .replace(/\$[^$]+\$/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
    const letter = String.fromCharCode(65 + i);
    // mismatch: complex type with short 2/2 form
    if (
      ["compare", "compose", "counterfactual", "units", "boundary"].includes(c) &&
      dm <= 2 &&
      words <= 70
    ) {
      expandHints.push({
        id: `${t.n}${letter}`,
        c,
        dm,
        words,
        title: t.title,
        stmt: s.slice(0, 100),
      });
    }
  });
}
expandHints
  .sort((a, b) => a.words - b.words)
  .slice(0, 40)
  .forEach((h) =>
    lines.push(
      `${h.id} ${h.c} dm=${h.dm} w=${h.words} | ${h.stmt} | ${h.title}`
    )
  );

// Shorten candidates: long explanations for simple evaluate-level / recover-coeff that already have enough math
lines.push("\n==== SLIGHT SHORTEN CANDIDATES ====");
const shorten = [];
for (const t of tasks) {
  t.stmts.forEach((s, i) => {
    const c = classifyStmt(s);
    const e = t.expls[i];
    const dm = (e.match(/\$\$[\s\S]*?\$\$/g) || []).length;
    const words = e
      .replace(/\$\$[\s\S]*?\$\$/g, " ")
      .replace(/\$[^$]+\$/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
    const letter = String.fromCharCode(65 + i);
    if (
      ["evaluate-level", "recover-coeff", "recover-exponent"].includes(c) &&
      words >= 95 &&
      dm >= 2
    ) {
      shorten.push({
        id: `${t.n}${letter}`,
        c,
        dm,
        words,
        title: t.title,
        stmt: s.slice(0, 100),
      });
    }
  });
}
shorten
  .sort((a, b) => b.words - a.words)
  .slice(0, 25)
  .forEach((h) =>
    lines.push(
      `${h.id} ${h.c} dm=${h.dm} w=${h.words} | ${h.stmt} | ${h.title}`
    )
  );

// Per-range hyper-uniform lists
lines.push("\n==== HYPER-UNIFORM BY RANGE ====");
const hyper = detail.tasks.filter((t) => t.uniqueSigs === 1);
for (const [a, b] of ranges) {
  const slice = hyper.filter((t) => t.n >= a && t.n <= b);
  lines.push(
    `${a}-${b}: ${slice.map((t) => `#${t.n}(${t.sigs.split("|")[0]},w${t.avgW})`).join(", ")}`
  );
}

const out =
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch8_diversity_qual.txt";
fs.writeFileSync(out, lines.join("\n"));
console.log(lines.filter((l) => !l.startsWith("---") && !l.startsWith("**") && l.length < 200 || l.startsWith("====") || l.startsWith("########") || l.startsWith("#") || /^\d+/.test(l) || l.startsWith("TASK") || l.startsWith("EXPL") || l.startsWith("STMTS") || l.startsWith("tags") || l.startsWith("steps") || l.startsWith("top") || l.includes("expand") || l.includes("SHORT") || l.includes("HYPER") || l.includes("RANGE") || l.includes("MOST") || l.includes("OVERVIEW") || l.includes("CLOSING") || l.includes("SKELETON") || l.includes("EXPAND") || l.includes("SLIGHT") || /^[0-9]+[A-E] /.test(l) || l.startsWith("Part") || l.startsWith("Answer")).join("\n"));
console.log("\nFull written to", out);
