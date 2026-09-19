/**
 * WU Vienna BBE / WiSo gemischtes Teilpunktesystem (partial-credit scoring).
 *
 * Official rules (Partial Credit System / Teilpunktesystem PDF):
 * - Each question has a maximum (max), a count of correct options (c / r), and
 *   a count of false options (f).
 * - Default (c > 1 and f > 1): +max/c per correctly marked true option;
 *   −max/f per incorrectly marked false option.
 * - Exactly one correct (c = 1): all-or-nothing — full max only if that option
 *   is marked and no false options are marked; otherwise 0.
 * - Exactly one false (f = 1): +max/c per marked true; −max/2 if the single
 *   false option is marked (partial credit still applies when not all trues
 *   are marked).
 * - Unmarked options contribute 0 (missed credit is not an extra penalty).
 * - Question score is never below 0.
 */

export interface StatementResult {
  /** Whether this option is actually correct / true. */
  isTrue: boolean;
  /** Whether the candidate marked / selected it. */
  userMarked: boolean;
}

export type Wi2Rates = {
  perCorrect: number;
  perWrong: number;
  /** Number of correct options (c / r in the official PDF). */
  trueCount: number;
  /** Number of false options (f in the official PDF). */
  falseCount: number;
};

/** Round to 2 decimal places so fractional max/c and max/f stay stable in UI. */
export function roundTaskScore(raw: number): number {
  if (!Number.isFinite(raw)) return 0;
  return Math.round(raw * 100) / 100;
}

/** Build statement results from an answer key and the user's True marks. */
export function statementsFromMarks(
  answerKey: readonly boolean[],
  userMarks: readonly (boolean | null | undefined)[],
): StatementResult[] {
  return answerKey.map((isTrue, i) => ({
    isTrue,
    userMarked: userMarks[i] === true,
  }));
}

/**
 * Per-option rates for a task, following the official special cases for
 * c = 1 (all-or-nothing) and f = 1 (half-max penalty on the single false).
 */
export function getWi2Rates(maxPoints: number, statements: StatementResult[]): Wi2Rates {
  const trueCount = statements.filter((s) => s.isTrue).length;
  const falseCount = statements.length - trueCount;

  // c = 1 → all-or-nothing: marking the true earns max; any false mark costs max.
  if (trueCount === 1) {
    return { perCorrect: maxPoints, perWrong: maxPoints, trueCount, falseCount };
  }

  // f = 1 → false penalty is max/2 (not max/1); trues still split max/c.
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
 * Signed point contribution for one option before the task floor-at-0.
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
 * Score one question under the official partial-credit rules.
 * Never returns a value below 0.
 */
export function calculateTaskScore(
  maxPoints: number,
  statements: StatementResult[],
): number {
  if (!(maxPoints > 0) || statements.length === 0) return 0;

  const rates = getWi2Rates(maxPoints, statements);

  // c = 1: enforce all-or-nothing explicitly (matches PDF wording).
  if (rates.trueCount === 1) {
    const markedTrue = statements.some((s) => s.isTrue && s.userMarked);
    const markedFalse = statements.some((s) => !s.isTrue && s.userMarked);
    if (markedTrue && !markedFalse) return roundTaskScore(maxPoints);
    return 0;
  }

  const rawScore = statements.reduce(
    (sum, s) => sum + statementPointDelta(s, rates),
    0,
  );
  return roundTaskScore(Math.max(0, rawScore));
}

/** Convenience: score from answer key + user True marks. */
export function calculateTaskScoreFromMarks(
  maxPoints: number,
  answerKey: readonly boolean[],
  userMarks: readonly (boolean | null | undefined)[],
): number {
  return calculateTaskScore(maxPoints, statementsFromMarks(answerKey, userMarks));
}

export function calculateExamScore(
  taskResults: { maxPoints: number; statements: StatementResult[] }[],
) {
  const taskScores = taskResults.map((t) =>
    calculateTaskScore(t.maxPoints, t.statements),
  );
  const total = roundTaskScore(taskScores.reduce((sum, s) => sum + s, 0));
  return { taskScores, total };
}
