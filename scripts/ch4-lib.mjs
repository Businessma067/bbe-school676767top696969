/**
 * Shared helpers for a from-scratch Ch.4 bank:
 * unique statements, small integers, MATH 13.18 explanations.
 */

export function skeleton(s) {
  return s
    .replace(/\$[^$]*\$/g, "#")
    .replace(/\\frac\{[^}]*\}\{[^}]*\}/g, "#")
    .replace(/\d+/g, "#")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** Word-problem clones share a frame; different displayed equations stay distinct. */
export function uniquenessKey(s) {
  const eqs = [];
  const re = /\$([^$]+)\$/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    const e = m[1];
    if (/=/.test(e) || /\\log|\\ln|\^|\\sqrt|\\frac/.test(e)) {
      eqs.push(
        e
          .replace(/\s+/g, "")
          .replace(/\\left|\\right/g, "")
          .toLowerCase()
      );
    }
  }
  const words = skeleton(s);
  if (eqs.length) return `${words} :: ${eqs.join(" | ")}`;
  return words;
}

/** Integer-only claim. TRUE → inequality; FALSE → nearby wrong integer. */
export function claim(correct, isTrue) {
  const v = Math.round(Number(correct));
  if (!Number.isFinite(v)) {
    return { phrase: isTrue ? "greater than $1$" : "$7$", got: 0, other: isTrue ? 1 : 7, isTrue };
  }
  if (!isTrue) {
    const w = v + (Math.abs(v) % 2 === 0 ? 3 : 2);
    return { phrase: `$${w}$`, got: v, other: w, isTrue: false };
  }
  let b;
  if (v <= 3) b = v - 1;
  else if (v <= 12) b = v - 2;
  else if (v <= 40) b = v - 4;
  else if (v <= 120) b = v - 10;
  else if (v <= 400) b = v - 50;
  else b = Math.round(v / 2);
  if (b === v) b = v - 1;
  return { phrase: `greater than $${b}$`, got: v, other: b, isTrue: true };
}

export function claimCount(n, isTrue) {
  if (!isTrue) {
    const w = n + (n === 2 ? 3 : 2);
    return { phrase: `$${w}$`, got: n, other: w, isTrue: false };
  }
  if (n > 1) return { phrase: `more than $${n - 1}$`, got: n, other: n - 1, isTrue: true };
  return { phrase: `greater than $0$`, got: n, other: 0, isTrue: true };
}

/** 13.18 body: one rule sentence, one step per display, then a comparison. */
export function E(isTrue, rule, steps, compare) {
  const out = [`**{L}.** → ${isTrue ? "True" : "False"}`, "", rule.trim(), ""];
  for (const st of steps) {
    if (!st) continue;
    out.push(st, "");
  }
  out.push(compare.trim());
  if (!/statement is (True|False)\./i.test(compare)) {
    out.push("", `So the statement is ${isTrue ? "True" : "False"}.`);
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

export function cmpLine(c, noun = "The recovered value") {
  if (c.isTrue) {
    return `${noun} is $${c.got}$. The claim asks whether this is greater than $${c.other}$. Since $${c.got}>${c.other}$, the statement is True.`;
  }
  return `${noun} is $${c.got}$, not $${c.other}$. So the statement is False.`;
}

export function item(id, sub, tier, make) {
  return { id, sub, tier, make };
}
