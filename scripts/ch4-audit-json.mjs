#!/usr/bin/env node
/**
 * Produce JSON audit per user spec — conservative on 4.1–4.3.
 */
import fs from "node:fs";

const FILES = [
  "src/data/math-ch4-equations.ts",
  "src/data/math-ch4-4-exponential.ts",
];

const lines = FILES.flatMap((f) =>
  fs.readFileSync(f, "utf8").split("\n").map((line) => ({ line, file: f }))
);

const tasks = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].line.match(/^\s*id: `(math-4-\d+)`/);
  if (!m) continue;
  const id = m[1];
  let subsection = "";
  let difficulty = "";
  let answer_key = [];
  let statements = [];
  let inS = false;
  for (let j = i; j < lines.length; j++) {
    if (j > i && /^\s*id: `math-4-\d+`/.test(lines[j].line)) break;
    const sm = lines[j].line.match(/subsection: `([^`]+)`/);
    if (sm) subsection = sm[1];
    const dm = lines[j].line.match(/difficulty_level: `([^`]+)`/);
    if (dm) difficulty = dm[1];
    if (/statements: \[/.test(lines[j].line)) {
      inS = true;
      continue;
    }
    if (inS && /^\s*\],/.test(lines[j].line)) inS = false;
    if (inS) {
      const st = lines[j].line.match(/^\s*`((?:\\.|[^`])*)`,/);
      if (st) statements.push(st[1]);
    }
    if (/answer_key: \[(.*)\]/.test(lines[j].line)) {
      const km = lines[j].line.match(/answer_key: \[(.*)\]/);
      if (km) {
        answer_key = [...km[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]);
      }
    }
  }
  tasks.push({ id, subsection, difficulty, statements, answer_key });
}

function extractLatex(text) {
  const out = [];
  const re = /\$([^$]+)\$/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push(normalizeLatex(m[1]));
  return out;
}

function normalizeLatex(s) {
  return s
    .replace(/\\,/g, "")
    .replace(/\\dfrac/g, "\\frac")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isMainEquation(l) {
  return /=/.test(l) && !/^x \\neq/.test(l) && l.length > 4;
}

function letter(i) {
  return String.fromCharCode(65 + i);
}

function snippet(s, n = 80) {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n) + "…" : t;
}

// TRUE plug-in: claimed value embedded; trivial verify without setting up/solving
const TRUE_PLUG_PATS = [
  { re: /(?:is|was|equals|gives|holds at) \$([0-9]+(?:\.[0-9]+)?)\$/i, kind: "embedded-dollar" },
  { re: /(?:is|was|equals|gives) \$\\frac\{([0-9]+)\}\{([0-9]+)\}\$/i, kind: "embedded-frac" },
  { re: /the number (?:is|itself is) \$([0-9]+)\$/i, kind: "the-number-is" },
  { re: /original (?:number|price|bill|batch|sample|wage|amount) (?:is|was) \$([0-9]+)/i, kind: "original-is" },
  { re: /Then the (?:change|number|wage|distance|length|path|frame) (?:is|was) \$([0-9]+)/i, kind: "then-the" },
  { re: /(?:concludes|reports|claims) that (?:the )?(?:purse|stallholder|student|clerk|baker|chemist|carpenter|payroll clerk) (?:started with|holds|the) \$([0-9]+)/i, kind: "reports-started" },
  { re: /Half of a number is \$([0-9]+)\$/i, kind: "half-is" },
  { re: /(?:They are|pair is) \$([0-9]+) and \$([0-9]+)\$/i, kind: "they-are-pair" },
  { re: /is (?:four|eight|sixteen|twice|three) times/i, kind: "word-multiple" },
  { re: /one (?:quarter|half|third|eighth) (?:of|remains)/i, kind: "fraction-count" },
  { re: /\\log_2 8 \+ \\log_2 4 = \\log_2 32/i, kind: "log-eval" },
  { re: /\\log_[0-9]+ [0-9]+ (?:equals|is)/i, kind: "log-value" },
  { re: /product \\log_2 3 \\cdot \\log_3 2 equals \$1\$/i, kind: "cob-product" },
];

function isPluginTrue(stmt, isTrue, subsection) {
  if (!isTrue) return null;
  if (/smaller than|not smaller than|greater than \$[0-9]+\$|less than \$[0-9]+\$|exceeds \$|at least two distinct|more than \$[0-9]+\$ distinct|more than \$[0-9]+\$ minutes|more than \$[0-9]+\$ real|is greater than \$|greater than \$0\$|at most \$|not smaller than/i.test(stmt)) {
    return null;
  }
  const paramStory = /\$[0-9]+\$ years older|\$[0-9]+\$ cm longer|\$[0-9]+\$ km apart|bar of length \$|part is \$[0-9]+\$ cm longer|leaves \$[A-Z]\$ at \$|km\/h toward/i.test(stmt);
  const checkTarget = paramStory ? (stmt.split(/\. /).pop() || stmt) : stmt;
  for (const p of TRUE_PLUG_PATS) {
    if (p.re.test(checkTarget)) return p.kind;
  }
  return null;
}

function isOffTopic(stmt, subsection) {
  if (subsection === "4.4") {
    const hasExpLogEq =
      /\\log[^a-z]|\\ln|e\^|e\^{|2\^|3\^|5\^|10\^|\\left\(\\frac\{1\}/i.test(stmt) &&
      (/equation|Every real solution|Rewriting.*yields|Squaring both sides|Substitute/i.test(stmt) ||
        /=/.test(stmt));
    const halfLifeCount =
      /half-lives?|half-life|doubl(es|ing) every|After (one|two|three|four|six|eight) (hours?|minutes?|years?)|sample remains|population is (four|eight) times|one quarter of the initial|strictly less than half/i.test(stmt);
    const pureLogIdentity =
      /^The (identity|value|product|ratio|inequality|expression)/i.test(stmt) &&
      !/equation/i.test(stmt);
    const growthCompareNoEq =
      (/grows faster than|For every \$x/i.test(stmt) && !/equation/i.test(stmt));
    if (halfLifeCount && !hasExpLogEq) return "half-life/doubling counting without exp/log equation";
    if (pureLogIdentity) return "log/exponential identity or value evaluation, not equation solving";
    if (growthCompareNoEq && !hasExpLogEq) return "growth comparison without equation to solve";
    if (!hasExpLogEq && !halfLifeCount && !pureLogIdentity && !growthCompareNoEq) {
      // check elementary power eval
      if (/^The equation \$2\^x = 32\$/.test(stmt)) return null; // has equation
    }
    return null;
  }
  if (subsection === "4.2") {
    if (/^The (?:linear )?equation \$[0-9]x|^If \$2x|^Solving \$5x/i.test(stmt) && !/x\^2|x\^{2}/i.test(stmt))
      return "linear equation in quadratic section";
  }
  if (subsection === "4.3") {
    const needsRadRatAbs =
      /\\sqrt|\\frac|\\ln|\\log|\\left\||square root|reciprocal|absolute|radicand|denominator/i.test(stmt);
    if (!needsRadRatAbs && /^The equation \$[0-9]/i.test(stmt) && !/\\sqrt|\\frac/i.test(stmt))
      return "polynomial/linear equation without radical/rational/abs structure";
  }
  return null;
}

function sharedContext(task) {
  const hits = [];
  const eqMap = new Map();
  task.statements.forEach((s, idx) => {
    for (const eq of extractLatex(s).filter(isMainEquation)) {
      const arr = eqMap.get(eq) ?? [];
      if (!arr.includes(idx)) arr.push(idx);
      eqMap.set(eq, arr);
    }
  });
  for (const [eq, idxs] of eqMap) {
    if (idxs.length >= 2) {
      hits.push({
        shared_what: eq.length > 60 ? eq.slice(0, 60) + "…" : eq,
        letters: idxs.map(letter),
      });
    }
  }

  // Same setup theme driving entire task (4.4 half-life, comparison theme)
  const themes = [];
  if (task.subsection === "4.4") {
    const hl = task.statements.filter((s) =>
      /half-lives?|half-life|doubl(es|ing)|sample remains|one quarter|one half/i.test(s)
    ).length;
    if (hl >= 4)
      themes.push({ shared_what: "half-life/doubling decay model theme", letters: ["A", "B", "C", "D", "E"] });
    const cmp23 = task.statements.filter((s) => /2\^x.*3\^x|3\^x.*2\^x/i.test(s)).length;
    if (cmp23 >= 3)
      themes.push({ shared_what: "2^x vs 3^x comparison theme", letters: ["A", "B", "C", "D", "E"] });
    const lnShift = task.statements.filter((s) => /\\ln\(x\+1\) = 2/i.test(s)).length;
    if (lnShift >= 2 && !hits.some((h) => h.shared_what.includes("ln(x+1)")))
      hits.push({ shared_what: "ln(x+1) = 2", letters: task.statements.map((s, i) => (/\\ln\(x\+1\) = 2/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const log25 = task.statements.filter((s) => /\\log_2 x = 5/i.test(s)).length;
    if (log25 >= 2)
      hits.push({ shared_what: "log_2 x = 5", letters: task.statements.map((s, i) => (/\\log_2 x = 5/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const sqrtRad = task.statements.filter((s) => /\\sqrt\{x\} = x - 2/i.test(s)).length;
    if (sqrtRad >= 2)
      hits.push({ shared_what: "sqrt(x) = x - 2", letters: task.statements.map((s, i) => (/\\sqrt\{x\} = x - 2/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const eq482 = task.statements.filter((s) => /4\^\{2x\} = 8\^\{x\+1\}/i.test(s)).length;
    if (eq482 >= 2)
      hits.push({ shared_what: "4^{2x} = 8^{x+1}", letters: task.statements.map((s, i) => (/4\^\{2x\} = 8\^\{x\+1\}/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const e2x1 = task.statements.filter((s) => /e\^\{2x-1\} = 5/i.test(s)).length;
    if (e2x1 >= 2)
      hits.push({ shared_what: "e^{2x-1} = 5", letters: task.statements.map((s, i) => (/e\^\{2x-1\} = 5/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const ln2x5 = task.statements.filter((s) => /\\ln\(2x-5\) = 0/i.test(s)).length;
    if (ln2x5 >= 2)
      hits.push({ shared_what: "ln(2x-5) = 0", letters: task.statements.map((s, i) => (/\\ln\(2x-5\) = 0/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const lnx2 = task.statements.filter((s) => /\(\\ln x\)\^2 = 4/i.test(s)).length;
    if (lnx2 >= 2)
      hits.push({ shared_what: "(ln x)^2 = 4", letters: task.statements.map((s, i) => (/\\(\\ln x\\)\^2 = 4/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const logprod = task.statements.filter((s) => /\\log x \+ \\log\(x\+3\) = 1/i.test(s)).length;
    if (logprod >= 2)
      hits.push({ shared_what: "log x + log(x+3) = 1", letters: task.statements.map((s, i) => (/\\log x \\+ \\log\(x\\+3\) = 1/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const coef32 = task.statements.filter((s) => /3 \\cdot 2\^x = 48/i.test(s)).length;
    if (coef32 >= 2)
      hits.push({ shared_what: "3·2^x = 48", letters: task.statements.map((s, i) => (/3 \\cdot 2\^x = 48/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const two32 = task.statements.filter((s) => /2\^x = 32/i.test(s)).length;
    if (two32 >= 2)
      hits.push({ shared_what: "2^x = 32", letters: task.statements.map((s, i) => (/2\^x = 32/i.test(s) ? letter(i) : null)).filter(Boolean) });
    const nine27 = task.statements.filter((s) => /9\^x = 27/i.test(s)).length;
    if (nine27 >= 2)
      hits.push({ shared_what: "9^x = 27", letters: task.statements.map((s, i) => (/9\^x = 27/i.test(s) ? letter(i) : null)).filter(Boolean) });
    hits.push(...themes);
  }

  // 4.1-4.3 implicit refs
  const IMPLICIT = [
    /\bthose four\b/i, /\bthose two\b/i, /\bthose three\b/i,
    /\bthe same equation\b/i, /\bthat equation\b/i,
    /\bEvery real solution of \$([^$]+)\$/i,
    /\bSquaring both sides of \$([^$]+)\$/i,
  ];
  for (let i = 0; i < task.statements.length; i++) {
    const s = task.statements[i];
    for (const p of IMPLICIT) {
      const m = s.match(p);
      if (m) {
        const refEq = m[1] ? normalizeLatex(m[1]) : null;
        if (refEq) {
          const linked = task.statements
            .map((st, j) => (extractLatex(st).some((e) => e === refEq) || st.includes(m[1]) ? letter(j) : null))
            .filter(Boolean);
          if (linked.length >= 2) {
            hits.push({ shared_what: refEq.slice(0, 50), letters: [...new Set(linked)] });
          }
        }
      }
    }
  }

  // Dedupe by shared_what
  const seen = new Map();
  for (const h of hits) {
    const k = h.shared_what;
    const ex = seen.get(k);
    if (!ex) seen.set(k, h);
    else ex.letters = [...new Set([...ex.letters, ...h.letters])].sort();
  }
  return [...seen.values()].filter((h) => h.letters.length >= 2);
}

function isHardButEasy(task, stmt) {
  if (task.difficulty !== "4/5" && task.difficulty !== "5/5") return null;
  const eqs = extractLatex(stmt).filter(isMainEquation);
  const sub = task.subsection;
  if (sub === "4.4") {
    if (!eqs.length) {
      if (/identity|value|product|ratio|inequality|grows faster|For every \$x/i.test(stmt))
        return "no equation — identity/comparison only";
      return null;
    }
    const simple =
      /^2\^x = [0-9]+$|^3\^x = [0-9]+$|^\\log_2 x = [0-9]+$|^\\log_3 x = [0-9]+$|^e\^x = [0-9]+$|^\\log_2 8 =|^\\log_4 16|^\\log_5 1|^\\log_3 27|^\\log_2 16|^\\log_2 4|^\\log_3 81|^\\log_3 9|^10\^\{x-1\} = 1000$|^5\^x = 125$|^2\^x = 3\^x$/.test(eqs[0]) ||
      (eqs[0].length < 18 && !/\\log.*\\log|x\+|x-|x\^2|\(x|\+\s*\\log|\\ln\(x/i.test(eqs[0]));
    if (simple) return `equation too simple for ${task.difficulty}: ${eqs[0]}`;
  }
  if (sub === "4.2") {
    if (eqs[0] && !/x\^2|x\^{2}/i.test(eqs[0])) return "linear/non-quadratic equation at 4/5+";
    if (/^The discriminant of \$x\^2 [+-] [0-9]x [+-] [0-9]/i.test(stmt)) return "basic discriminant plug-in";
  }
  if (sub === "4.1") {
    if (eqs[0] && /^[0-9]x|^x [+-]=|^[0-9]\(x/.test(eqs[0]) && eqs[0].length < 20)
      return "basic linear equation at 4/5+";
  }
  if (sub === "4.3") {
    if (eqs[0] && !/\\sqrt|\\frac|\\|/i.test(eqs[0])) return "no radical/rational/abs structure at 4/5+";
  }
  return null;
}

const plugin_true = [];
const off_topic = [];
const shared_context = [];
const hard_but_easy = [];

for (const t of tasks) {
  t.statements.forEach((s, idx) => {
    const plug = isPluginTrue(s, t.answer_key[idx] === "true", t.subsection);
    if (plug) {
      plugin_true.push({ id: t.id, letter: letter(idx), snippet: snippet(s) });
    }
    const off = isOffTopic(s, t.subsection);
    if (off) {
      const existing = off_topic.find((x) => x.id === t.id);
      if (existing) {
        if (!existing.letters.includes(letter(idx))) existing.letters.push(letter(idx));
      } else {
        off_topic.push({ id: t.id, subsection: t.subsection, reason: off, letters: [letter(idx)] });
      }
    }
    const hb = isHardButEasy(t, s);
    if (hb) {
      const ex = hard_but_easy.find((x) => x.id === t.id);
      if (!ex) hard_but_easy.push({ id: t.id, subsection: t.subsection, difficulty: t.difficulty, reason: hb });
    }
  });

  const sh = sharedContext(t);
  for (const h of sh) {
    shared_context.push({
      id: t.id,
      subsection: t.subsection,
      shared_what: h.shared_what,
      letters: h.letters.sort(),
    });
  }
}

// must_rewrite: any task with genuine violation in any category
const rewriteSet = new Set([
  ...plugin_true.map((x) => x.id),
  ...off_topic.map((x) => x.id),
  ...shared_context.map((x) => x.id),
  ...hard_but_easy.map((x) => x.id),
]);

const out = {
  plugin_true: plugin_true.sort((a, b) => parseInt(a.id.split("-")[2]) - parseInt(b.id.split("-")[2])),
  off_topic: off_topic.sort((a, b) => parseInt(a.id.split("-")[2]) - parseInt(b.id.split("-")[2])),
  shared_context: shared_context.sort((a, b) => parseInt(a.id.split("-")[2]) - parseInt(b.id.split("-")[2])),
  hard_but_easy: hard_but_easy.sort((a, b) => parseInt(a.id.split("-")[2]) - parseInt(b.id.split("-")[2])),
  must_rewrite_ids: [...rewriteSet].sort((a, b) => parseInt(a.split("-")[2]) - parseInt(b.split("-")[2])),
};

console.log(JSON.stringify(out, null, 2));
