import { stripLocalePrefix } from "@/lib/i18n/locale-path";

export type ExamTrack = "bbe" | "wiso";

export const WISO_PREFIX = "/wiso" as const;
export const BBE_HOME = "/bbe" as const;
export const WISO_HOME = "/wiso" as const;
export const TRACK_STORAGE_KEY = "bbe-school-exam-track";

/** Paths that belong to neither track (chooser / shared compare). */
const NEUTRAL_PATHS = new Set(["/", "/bbe-vs-wiso"]);

/**
 * Canonical path pairs for optional parallel-page mapping.
 * Keys are locale-stripped pathnames. Do not map multiple BBE paths onto the
 * same WiSo URL — reverse lookup would be ambiguous.
 */
const BBE_TO_WISO: Record<string, string> = {
  [BBE_HOME]: WISO_HOME,
  "/bbe-entrance-exam": "/wiso/entrance-exam",
  "/bbe-entrance-exam-guide": "/wiso/entrance-exam",
  "/bbe-exam-scoring": "/wiso/exam-scoring",
  "/bbe-mathematics": "/wiso/mathematics",
  "/bbe-economics-english": "/wiso/economics-german",
  "/bbe-exam-preparation": "/wiso/exam-preparation",
  "/bbe-admission": "/wiso/admission",
  "/wu-vienna": "/wiso/wu-vienna",
  "/products": "/products",
  "/products/full-course": "/wiso/products/full-course",
  "/products/demo-practice": "/wiso/demo-practice",
  "/demo-practice": "/wiso/demo-practice",
  "/mock-exams": "/wiso/mock-exams",
  "/products/custom-mock-builder": "/wiso/mock-builder",
  "/flashcards": "/wiso/flashcards",
};

const WISO_TO_BBE: Record<string, string> = Object.fromEntries(
  Object.entries(BBE_TO_WISO).map(([bbe, wiso]) => [wiso, bbe]),
);

export function isWisoPath(pathname: string): boolean {
  const path = stripLocalePrefix(pathname);
  return path === WISO_PREFIX || path.startsWith(`${WISO_PREFIX}/`);
}

export function isNeutralPath(pathname: string): boolean {
  return NEUTRAL_PATHS.has(stripLocalePrefix(pathname));
}

/** Track implied by the URL alone; null on shared/chooser pages. */
export function getExamTrackFromPath(pathname: string): ExamTrack | null {
  const path = stripLocalePrefix(pathname);
  if (isNeutralPath(path)) return null;
  if (isWisoPath(path)) return "wiso";
  return "bbe";
}

export function readStoredExamTrack(): ExamTrack | null {
  if (typeof window === "undefined") return null;
  try {
    const value = sessionStorage.getItem(TRACK_STORAGE_KEY);
    if (value === "bbe" || value === "wiso") return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function storeExamTrack(track: ExamTrack): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(TRACK_STORAGE_KEY, track);
  } catch {
    /* ignore */
  }
}

/**
 * Active exam track for chrome (logo, nav, toggle).
 * URL wins when unambiguous; otherwise session, then BBE.
 */
export function resolveExamTrack(pathname: string): ExamTrack {
  const fromPath = getExamTrackFromPath(pathname);
  if (fromPath) return fromPath;
  return readStoredExamTrack() ?? "bbe";
}

export function trackHome(track: ExamTrack): string {
  return track === "wiso" ? WISO_HOME : BBE_HOME;
}

/**
 * Header track toggle always lands on that track's landing page.
 * Parallel-page mapping is available via `counterpartPath` when needed.
 */
export function pathForTrack(_pathname: string, target: ExamTrack): string {
  return trackHome(target);
}

/** Map a locale-stripped path onto the other track when a counterpart exists. */
export function counterpartPath(pathname: string, target: ExamTrack): string {
  const path = stripLocalePrefix(pathname);

  if (path === "/" || path === "/bbe-vs-wiso") {
    return trackHome(target);
  }

  if (target === "wiso") {
    if (isWisoPath(path)) return path;
    return BBE_TO_WISO[path] ?? WISO_HOME;
  }

  if (!isWisoPath(path)) return path === BBE_HOME ? BBE_HOME : path;
  return WISO_TO_BBE[path] ?? BBE_HOME;
}
