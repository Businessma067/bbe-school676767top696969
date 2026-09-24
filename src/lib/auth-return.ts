/**
 * Post-auth return path helpers.
 * Used by /login, /signup, Google OAuth (sessionStorage), and AuthNav links.
 */

const STORAGE_KEY = "bbe.authReturnTo";

/** Paths that must not be used as return targets (loops / dead ends). */
const BLOCKED_RETURN_PREFIXES = [
  "/login",
  "/signup",
  "/auth",
  "/reset-password",
  "/forgot-password",
  "/confirm-email",
] as const;

/**
 * Accept only same-origin relative paths (pathname + optional search/hash).
 * Also accepts absolute same-origin URLs and strips them to path+search.
 * Rejects protocol-relative URLs and auth chrome.
 */
export function safeInternalReturnPath(value: unknown): string | null {
  if (typeof value !== "string") return null;
  let trimmed = value.trim();
  if (!trimmed) return null;

  if (typeof window !== "undefined" && /^https?:\/\//i.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      if (url.origin !== window.location.origin) return null;
      trimmed = `${url.pathname}${url.search}${url.hash}`;
    } catch {
      return null;
    }
  }

  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) return null;
  if (trimmed.includes("://")) return null;

  let pathname = trimmed;
  const hashIdx = pathname.indexOf("#");
  if (hashIdx >= 0) pathname = pathname.slice(0, hashIdx);
  const searchIdx = pathname.indexOf("?");
  const pathOnly = searchIdx >= 0 ? pathname.slice(0, searchIdx) : pathname;
  const normalized = pathOnly.replace(/\/+$/, "") || "/";

  if (
    BLOCKED_RETURN_PREFIXES.some(
      (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
    )
  ) {
    return null;
  }

  return trimmed;
}

/** Persist a return path before an OAuth redirect that lands on `/`. */
export function stashAuthReturnTo(path: string): void {
  const safe = safeInternalReturnPath(path);
  if (!safe || typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, safe);
  } catch {
    /* ignore */
  }
}

/** Read and clear a stashed return path (one-shot). */
export function consumeAuthReturnTo(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    return safeInternalReturnPath(raw);
  } catch {
    return null;
  }
}

/** Current location as a return path (pathname + search, no hash). */
export function currentReturnPath(): string {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}`;
}
