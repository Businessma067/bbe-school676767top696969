/** Canonical difficulty overlay for economics cases (modern + legacy demo/full IDs). */
import map from "./economics-difficulty-by-case-id.json";

export const ECONOMICS_DIFFICULTY_BY_CASE_ID: Record<string, string> = map;

/**
 * Resolve display difficulty for an economics case.
 * - Prefer the curated map (covers subtopic banks + known legacy demo IDs).
 * - Legacy Full Course / demo IDs look like `CASE 2.11` (two numeric parts) and were
 *   stuck at 5/5 in production — derive a stable 1–5 ladder from the case number.
 */
export function economicsDifficultyFor(
  caseId: string,
  fallback?: string | null,
): string {
  const mapped = ECONOMICS_DIFFICULTY_BY_CASE_ID[caseId];
  if (mapped) return mapped;

  // Legacy chapter bank: CASE 2.01 / CASE 2.11 (not CASE 2.1.01)
  const legacy = caseId.match(/^CASE\s+(\d+)\.(\d+)$/i);
  if (legacy) {
    const n = Math.max(1, parseInt(legacy[2], 10));
    const ladder = ["1/5", "2/5", "2/5", "3/5", "3/5", "4/5", "4/5", "5/5"] as const;
    return ladder[(n - 1) % ladder.length];
  }

  return fallback && fallback !== "—" ? fallback : "3/5";
}
