export interface StatementResult {
  /** the actual correct answer for this statement */
  isTrue: boolean;
  /** whether the user ticked it */
  userMarked: boolean;
}

/**
 * WU Vienna wi2 scoring method, per task (5 statements).
 * Never returns a value below 0.
 */
export function calculateTaskScore(
  maxPoints: number,
  statements: StatementResult[],
): number {
  const r = statements.filter((s) => s.isTrue).length;
  const f = statements.length - r;

  const correctMarks = statements.filter((s) => s.isTrue && s.userMarked).length;
  const wrongMarks = statements.filter((s) => !s.isTrue && s.userMarked).length;

  let perCorrect: number;
  let perWrong: number;

  if (r === 1) {
    // all-or-nothing: any wrong tick cancels the one true tick entirely
    perCorrect = maxPoints;
    perWrong = maxPoints;
  } else if (f === 1) {
    // single false statement: half-task penalty instead of full
    perCorrect = r > 0 ? maxPoints / r : 0;
    perWrong = maxPoints / 2;
  } else {
    perCorrect = r > 0 ? maxPoints / r : 0;
    perWrong = f > 0 ? maxPoints / f : 0;
  }

  const rawScore = correctMarks * perCorrect - wrongMarks * perWrong;
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
