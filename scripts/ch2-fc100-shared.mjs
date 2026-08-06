/** Shared constants for Ch2 §2.6–2.7 Full Course (50 cases each). */
export const LIVED = new Set([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38]);

const END = "Evaluate the following economic assertions:";

function normalizeClause(clause) {
  return String(clause).trim().replace(/\.$/, "");
}

export function theoryContext(clause) {
  const c = normalizeClause(clause);
  const body = /^(Analyze|Review|Consider)\b/i.test(c) ? c : `Analyze ${c}`;
  return `${body}. ${END}`;
}

export function livedContext(clause) {
  const c = normalizeClause(clause).replace(/^Consider\s+/i, "");
  return `Consider ${c}. ${END}`;
}

export function reviewContext(clause) {
  const c = normalizeClause(clause).replace(/^Review\s+/i, "");
  return `Review ${c}. ${END}`;
}

function shuffleTrueOrder(seed) {
  const arr = [];
  for (let k = 1; k <= 5; k++) for (let i = 0; i < 10; i++) arr.push(k);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed * 17 + i * 11) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const TRUE_ORDER_26 = shuffleTrueOrder(26);
export const TRUE_ORDER_27 = shuffleTrueOrder(27);
