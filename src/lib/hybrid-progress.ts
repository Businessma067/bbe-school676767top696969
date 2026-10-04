/**
 * Client-side Hybrid progress: Twin Readiness + planner completion.
 * Shared math mastery feeds both readiness rings once.
 */

export const HYBRID_PROGRESS_KEY = "hybrid.progress.v1";

export type HybridProgress = {
  /** Shared math case ids completed. */
  sharedMathPassed: string[];
  /** Bridge case ids completed (both sides). */
  bridgePassed: string[];
  /** Mirror set ids completed. */
  mirrorPassed: string[];
  /** Exam Flip sessions completed (count). */
  examFlipSessions: number;
  /** Decision Lab result lean. */
  decisionLean: "bbe" | "wiso" | "close" | null;
  /** Dual mock checklist. */
  dualMock: { bbeDone: boolean; wisoDone: boolean };
  /** Planner day stamps (YYYY-MM-DD) with completed shared block. */
  plannerDays: string[];
  /** English / German overlay session counts. */
  englishSessions: number;
  germanSessions: number;
  updatedAt: string;
};

const EMPTY: HybridProgress = {
  sharedMathPassed: [],
  bridgePassed: [],
  mirrorPassed: [],
  examFlipSessions: 0,
  decisionLean: null,
  dualMock: { bbeDone: false, wisoDone: false },
  plannerDays: [],
  englishSessions: 0,
  germanSessions: 0,
  updatedAt: new Date(0).toISOString(),
};

export function loadHybridProgress(): HybridProgress {
  if (typeof window === "undefined") return { ...EMPTY };
  try {
    const raw = localStorage.getItem(HYBRID_PROGRESS_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<HybridProgress>;
    return {
      ...EMPTY,
      ...parsed,
      sharedMathPassed: Array.isArray(parsed.sharedMathPassed) ? parsed.sharedMathPassed : [],
      bridgePassed: Array.isArray(parsed.bridgePassed) ? parsed.bridgePassed : [],
      mirrorPassed: Array.isArray(parsed.mirrorPassed) ? parsed.mirrorPassed : [],
      plannerDays: Array.isArray(parsed.plannerDays) ? parsed.plannerDays : [],
      dualMock: {
        bbeDone: !!parsed.dualMock?.bbeDone,
        wisoDone: !!parsed.dualMock?.wisoDone,
      },
      examFlipSessions: typeof parsed.examFlipSessions === "number" ? parsed.examFlipSessions : 0,
      englishSessions: typeof parsed.englishSessions === "number" ? parsed.englishSessions : 0,
      germanSessions: typeof parsed.germanSessions === "number" ? parsed.germanSessions : 0,
      decisionLean:
        parsed.decisionLean === "bbe" ||
        parsed.decisionLean === "wiso" ||
        parsed.decisionLean === "close"
          ? parsed.decisionLean
          : null,
    };
  } catch {
    return { ...EMPTY };
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

export function markSharedMathPassed(caseId: string): HybridProgress {
  const current = loadHybridProgress();
  if (current.sharedMathPassed.includes(caseId)) return current;
  return patchHybridProgress({
    sharedMathPassed: [...current.sharedMathPassed, caseId],
  });
}

export function markBridgePassed(caseId: string): HybridProgress {
  const current = loadHybridProgress();
  if (current.bridgePassed.includes(caseId)) return current;
  return patchHybridProgress({
    bridgePassed: [...current.bridgePassed, caseId],
  });
}

export function markMirrorPassed(setId: string): HybridProgress {
  const current = loadHybridProgress();
  if (current.mirrorPassed.includes(setId)) return current;
  return patchHybridProgress({
    mirrorPassed: [...current.mirrorPassed, setId],
  });
}

export type TwinReadiness = {
  bbe: number;
  wiso: number;
  sharedMath: number;
  bridge: number;
  languageEn: number;
  languageDe: number;
  format: number;
};

/** Rough readiness 0–100 from local hybrid signals + library deep-link activity counts. */
export function computeTwinReadiness(
  progress: HybridProgress,
  totals: { bridgeTotal: number; mirrorTotal: number; sharedMathTarget?: number },
): TwinReadiness {
  const mathTarget = totals.sharedMathTarget ?? 40;
  const sharedMath = Math.min(100, Math.round((progress.sharedMathPassed.length / mathTarget) * 100));
  const bridge =
    totals.bridgeTotal > 0
      ? Math.min(100, Math.round((progress.bridgePassed.length / totals.bridgeTotal) * 100))
      : 0;
  const mirror =
    totals.mirrorTotal > 0
      ? Math.min(100, Math.round((progress.mirrorPassed.length / totals.mirrorTotal) * 100))
      : 0;
  const languageEn = Math.min(100, progress.englishSessions * 12 + Math.round(bridge * 0.25));
  const languageDe = Math.min(100, progress.germanSessions * 12 + Math.round(bridge * 0.25));
  const format = Math.min(
    100,
    progress.examFlipSessions * 15 +
      (progress.dualMock.bbeDone ? 25 : 0) +
      (progress.dualMock.wisoDone ? 25 : 0) +
      Math.round(mirror * 0.2),
  );

  const sharedCore = Math.round(sharedMath * 0.55 + bridge * 0.35 + mirror * 0.1);
  const bbe = Math.min(100, Math.round(sharedCore * 0.55 + languageEn * 0.25 + format * 0.2));
  const wiso = Math.min(100, Math.round(sharedCore * 0.55 + languageDe * 0.25 + format * 0.2));

  return { bbe, wiso, sharedMath, bridge, languageEn, languageDe, format };
}

export function todayStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
