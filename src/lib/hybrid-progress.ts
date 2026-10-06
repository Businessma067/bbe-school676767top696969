/**
 * Client-side Hybrid progress.
 * Shared math and a bridged concept each count once for both exams.
 */

export const HYBRID_PROGRESS_KEY = "hybrid.progress.v1";

export type BridgeScore = {
  bbeCorrect: number;
  wisoCorrect: number;
  total: number;
};

export type HybridProgress = {
  /** Shared math task ids answered fully correct. */
  sharedMathPassed: string[];
  /** Bridge case ids cleared on both languages. */
  bridgePassed: string[];
  /** Best recorded score for each bridge case. */
  bridgeBest: Record<string, BridgeScore>;
  /** Days a shared-math task was newly cleared. */
  mathDays: string[];
  /** Days a bridge case was newly cleared. */
  bridgeDays: string[];
  /** Days a hybrid paper was built. */
  paperDays: string[];
  /** Days (YYYY-MM-DD) when either shared block was completed. */
  plannerDays: string[];
  /** English / German overlay session counts. */
  englishSessions: number;
  germanSessions: number;
  updatedAt: string;
};

const EMPTY: HybridProgress = {
  sharedMathPassed: [],
  bridgePassed: [],
  bridgeBest: {},
  mathDays: [],
  bridgeDays: [],
  paperDays: [],
  plannerDays: [],
  englishSessions: 0,
  germanSessions: 0,
  updatedAt: new Date(0).toISOString(),
};

function isScore(value: unknown): value is BridgeScore {
  if (!value || typeof value !== "object") return false;
  const row = value as BridgeScore;
  return (
    typeof row.bbeCorrect === "number" &&
    typeof row.wisoCorrect === "number" &&
    typeof row.total === "number"
  );
}

export function loadHybridProgress(): HybridProgress {
  if (typeof window === "undefined") return { ...EMPTY, bridgeBest: {} };
  try {
    const raw = localStorage.getItem(HYBRID_PROGRESS_KEY);
    if (!raw) return { ...EMPTY, bridgeBest: {} };
    const parsed = JSON.parse(raw) as Partial<HybridProgress>;
    const bridgeBest: Record<string, BridgeScore> = {};
    if (parsed.bridgeBest && typeof parsed.bridgeBest === "object") {
      for (const [id, score] of Object.entries(parsed.bridgeBest)) {
        if (isScore(score)) bridgeBest[id] = score;
      }
    }
    return {
      ...EMPTY,
      ...parsed,
      sharedMathPassed: Array.isArray(parsed.sharedMathPassed) ? parsed.sharedMathPassed : [],
      bridgePassed: Array.isArray(parsed.bridgePassed) ? parsed.bridgePassed : [],
      bridgeBest,
      mathDays: Array.isArray(parsed.mathDays) ? parsed.mathDays : [],
      bridgeDays: Array.isArray(parsed.bridgeDays) ? parsed.bridgeDays : [],
      paperDays: Array.isArray(parsed.paperDays) ? parsed.paperDays : [],
      plannerDays: Array.isArray(parsed.plannerDays) ? parsed.plannerDays : [],
      englishSessions: typeof parsed.englishSessions === "number" ? parsed.englishSessions : 0,
      germanSessions: typeof parsed.germanSessions === "number" ? parsed.germanSessions : 0,
    };
  } catch {
    return { ...EMPTY, bridgeBest: {} };
  }
}

export function saveHybridProgress(next: HybridProgress): void {
  if (typeof window === "undefined") return;
  const payload: HybridProgress = { ...next, updatedAt: new Date().toISOString() };
  localStorage.setItem(HYBRID_PROGRESS_KEY, JSON.stringify(payload));
}

export function patchHybridProgress(patch: Partial<HybridProgress>): HybridProgress {
  const current = loadHybridProgress();
  const next = { ...current, ...patch };
  saveHybridProgress(next);
  return next;
}

export function todayStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function withToday(days: string[]): string[] {
  const stamp = todayStamp();
  return days.includes(stamp) ? days : [...days, stamp];
}

export function markSharedMathPassed(caseId: string): HybridProgress {
  const current = loadHybridProgress();
  if (current.sharedMathPassed.includes(caseId)) return current;
  return patchHybridProgress({
    sharedMathPassed: [...current.sharedMathPassed, caseId],
    mathDays: withToday(current.mathDays),
    plannerDays: withToday(current.plannerDays),
  });
}

export function logHybridPaper(): HybridProgress {
  const current = loadHybridProgress();
  return patchHybridProgress({
    paperDays: withToday(current.paperDays),
    plannerDays: withToday(current.plannerDays),
    germanSessions: current.germanSessions + 1,
  });
}

export function markBridgePassed(caseId: string, score?: BridgeScore): HybridProgress {
  const current = loadHybridProgress();
  const bridgeBest = score
    ? mergeBridgeScore(current.bridgeBest, caseId, score)
    : current.bridgeBest;
  if (current.bridgePassed.includes(caseId)) {
    return patchHybridProgress({ bridgeBest });
  }
  return patchHybridProgress({
    bridgePassed: [...current.bridgePassed, caseId],
    bridgeBest,
    bridgeDays: withToday(current.bridgeDays),
    plannerDays: withToday(current.plannerDays),
  });
}

function mergeBridgeScore(
  current: Record<string, BridgeScore>,
  caseId: string,
  score: BridgeScore,
): Record<string, BridgeScore> {
  const prev = current[caseId];
  const prevSum = prev ? prev.bbeCorrect + prev.wisoCorrect : -1;
  const nextSum = score.bbeCorrect + score.wisoCorrect;
  if (prev && prevSum >= nextSum) return current;
  return { ...current, [caseId]: score };
}

/** Store a score even when the case is not cleared yet. */
export function recordBridgeScore(
  caseId: string,
  score: BridgeScore,
  cleared: boolean,
): HybridProgress {
  if (cleared) return markBridgePassed(caseId, score);
  const current = loadHybridProgress();
  return patchHybridProgress({
    bridgeBest: mergeBridgeScore(current.bridgeBest, caseId, score),
  });
}

export type TwinReadiness = {
  bbe: number;
  wiso: number;
  sharedMath: number;
  bridge: number;
  languageEn: number;
  languageDe: number;
};

/**
 * Readiness 0–100.
 * Shared math and bridge feed both exams. Language lanes stay separate.
 */
export function computeTwinReadiness(
  progress: HybridProgress,
  totals: { bridgeTotal: number; sharedMathTarget?: number },
): TwinReadiness {
  const mathTarget = totals.sharedMathTarget ?? 40;
  const sharedMath = Math.min(
    100,
    Math.round((progress.sharedMathPassed.length / mathTarget) * 100),
  );
  const bridge =
    totals.bridgeTotal > 0
      ? Math.min(100, Math.round((progress.bridgePassed.length / totals.bridgeTotal) * 100))
      : 0;
  const languageEn = Math.min(100, progress.englishSessions * 12 + Math.round(bridge * 0.2));
  const languageDe = Math.min(100, progress.germanSessions * 12 + Math.round(bridge * 0.2));
  const sharedCore = Math.round(sharedMath * 0.6 + bridge * 0.4);
  const bbe = Math.min(100, Math.round(sharedCore * 0.7 + languageEn * 0.3));
  const wiso = Math.min(100, Math.round(sharedCore * 0.7 + languageDe * 0.3));
  return { bbe, wiso, sharedMath, bridge, languageEn, languageDe };
}
