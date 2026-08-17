import { MATH_CH1_LOGIC } from '../../src/data/math-ch1-logic.ts';
for (const t of MATH_CH1_LOGIC) {
  const hits = [t.context, ...t.statements].filter((s) => /\b(?:P|Q|R)\b/.test(s));
  if (hits.length) console.log(t.id, JSON.stringify(hits));
}

