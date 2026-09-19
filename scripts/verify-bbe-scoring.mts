/**
 * Official BBE partial-credit PDF examples (Entrance exam Business & Economics).
 * Run: node --experimental-strip-types scripts/verify-bbe-scoring.mts
 */
import {
  calculateTaskScore,
  getWi2Rates,
  statementsFromMarks,
} from "../src/lib/scoring.ts";

type Case = {
  name: string;
  max: number;
  key: boolean[];
  marks: boolean[];
  expected: number;
};

function assertClose(name: string, actual: number, expected: number) {
  if (Math.abs(actual - expected) > 1e-9) {
    throw new Error(`${name}: expected ${expected}, got ${actual}`);
  }
  console.log(`  ✓ ${name} → ${actual}`);
}

const cases: Case[] = [
  // Page 7 — both correct, no false marked → 3
  {
    name: "PDF p7: both rivers correct, no false",
    max: 3,
    key: [true, true, false, false, false],
    marks: [true, true, false, false, false],
    expected: 3,
  },
  // Page 8 — one correct + one false → 0.5
  {
    name: "PDF p8: one correct + one false",
    max: 3,
    key: [true, true, false, false, false],
    marks: [true, false, true, false, false],
    expected: 0.5,
  },
  // Page 9 — one correct + two false → floor 0
  {
    name: "PDF p9: one correct + two false → 0",
    max: 3,
    key: [true, true, false, false, false],
    marks: [true, false, false, true, true],
    expected: 0,
  },
  // Page 10 — three correct + one false (r=3,f=2) → 1.5
  {
    name: "PDF p10: three correct + one false",
    max: 3,
    key: [true, true, false, false, true],
    marks: [true, true, true, false, true],
    expected: 1.5,
  },
  // Page 11 — all five correct, three marked → 1.8
  {
    name: "PDF p11: all-correct stem, three marks",
    max: 3,
    key: [true, true, true, true, true],
    marks: [true, true, false, false, true],
    expected: 1.8,
  },
  // Page 12 — one correct + all false marked → 0 (all-or-nothing)
  {
    name: "PDF p12: c=1 all-or-nothing with falses marked → 0",
    max: 5,
    key: [true, false, false, false, false],
    marks: [true, true, true, true, true],
    expected: 0,
  },
  // Page 12 companion — c=1 perfect
  {
    name: "PDF p4/p12: c=1 perfect selection → full max",
    max: 5,
    key: [true, false, false, false, false],
    marks: [true, false, false, false, false],
    expected: 5,
  },
  // Page 13 — f=1, all correct + false → half max (2)
  {
    name: "PDF p13: f=1 all correct + false → half",
    max: 4,
    key: [true, true, true, false, true],
    marks: [true, true, true, true, true],
    expected: 2,
  },
  // Page 14 — f=1, three of four correct + false → 1
  {
    name: "PDF p14: f=1 partial trues + false → 1",
    max: 4,
    key: [true, true, true, false, true],
    marks: [true, true, true, true, false],
    expected: 1,
  },
  // Blank task
  {
    name: "Blank answers → 0",
    max: 6,
    key: [true, true, false, true, false],
    marks: [false, false, false, false, false],
    expected: 0,
  },
  // Economics-style max=6, r=2,f=3 perfect
  {
    name: "Economics max=6 perfect r=2",
    max: 6,
    key: [true, false, true, false, false],
    marks: [true, false, true, false, false],
    expected: 6,
  },
];

console.log("Verifying BBE partial-credit scoring against official PDF examples…");
for (const c of cases) {
  const score = calculateTaskScore(c.max, statementsFromMarks(c.key, c.marks));
  assertClose(c.name, score, c.expected);
}

// Rate checks for special cases
{
  const rates = getWi2Rates(5, statementsFromMarks([true, false, false, false, false], [false, false, false, false, false]));
  assertClose("rates c=1 perCorrect", rates.perCorrect, 5);
  assertClose("rates c=1 perWrong", rates.perWrong, 5);
}
{
  const rates = getWi2Rates(4, statementsFromMarks([true, true, true, false, true], [false, false, false, false, false]));
  assertClose("rates f=1 perCorrect", rates.perCorrect, 1);
  assertClose("rates f=1 perWrong", rates.perWrong, 2);
}
{
  const rates = getWi2Rates(3, statementsFromMarks([true, true, false, false, false], [false, false, false, false, false]));
  assertClose("rates general perCorrect", rates.perCorrect, 1.5);
  assertClose("rates general perWrong", rates.perWrong, 1);
}

console.log("\nAll PDF partial-credit checks passed.");
