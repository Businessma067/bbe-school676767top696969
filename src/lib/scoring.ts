export interface StatementResult {
  /** the actual correct answer for this statement */
  isTrue: boolean;
  /** whether the user ticked it */
  userMarked: boolean;
}

export type Wi2Rates = {
  perCorrect: number;
  perWrong: number;
  trueCount: number;
  falseCount: number;
};

/** Per-statement wi2 rates for a 5-statement task. */
export function getWi2Rates(maxPoints: number, statements: StatementResult[]): Wi2Rates {
  const trueCount = statements.filter((s) => s.isTrue).length;
  const falseCount = statements.length - trueCount;

  if (trueCount === 1) {
    return { perCorrect: maxPoints, perWrong: maxPoints, trueCount, falseCount };
  }
  if (falseCount === 1) {
    return {
      perCorrect: trueCount > 0 ? maxPoints / trueCount : 0,
      perWrong: maxPoints / 2,
      trueCount,
      falseCount,
    };
  }
  return {
    perCorrect: trueCount > 0 ? maxPoints / trueCount : 0,
    perWrong: falseCount > 0 ? maxPoints / falseCount : 0,
    trueCount,
    falseCount,
  };
}

/**
 * Signed point contribution for one statement before the task floor-at-0.
 * +perCorrect for a correctly marked true; −perWrong for a wrongly marked false; else 0.
 */
export function statementPointDelta(
  statement: StatementResult,
  rates: Wi2Rates,
): number {
  if (statement.isTrue && statement.userMarked) return rates.perCorrect;
  if (!statement.isTrue && statement.userMarked) return -rates.perWrong;
  return 0;
}

/**
 * WU Vienna wi2 scoring method, per task (5 statements).
 * Never returns a value below 0.
 */
export function calculateTaskScore(
  maxPoints: number,
  statements: StatementResult[],
): number {
  const rates = getWi2Rates(maxPoints, statements);
  const rawScore = statements.reduce(
    (sum, s) => sum + statementPointDelta(s, rates),
    0,
  );
  return Math.max(0, rawScore);
}

export function calculateExamScore(
  taskResults: { maxPoints: number; statements: StatementResult[] }[],
) {
  const taskScores = taskResults.map((t) =>
    calculateTaskScore(t.maxPoints, t.statements),
  );
  const total = taskScores.reduce((sum, s) => sum + s, 0);
  return { taskScores, total };
}
