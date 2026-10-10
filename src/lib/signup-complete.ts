import { safeInternalReturnPath } from "@/lib/auth-return";

/** One-shot gate so `/signup-complete` only opens after a successful signup. */

export const SIGNUP_COMPLETE_PATH = "/signup-complete" as const;

const FLAG_KEY = "bbe.signupComplete";
const CONTINUE_KEY = "bbe.postSignupContinue";
const RESUME_CHECKOUT_KEY = "bbe.resumeCheckout";

/**
 * Remember that signup started from a Buy flow so the destination page can
 * reopen the payment modal after the /signup-complete full-page reload.
 */
export function stashResumeCheckout(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(RESUME_CHECKOUT_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function consumeResumeCheckout(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(RESUME_CHECKOUT_KEY);
    sessionStorage.removeItem(RESUME_CHECKOUT_KEY);
    return raw === "1";
  } catch {
    return false;
  }
}

export function markSignupComplete(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(FLAG_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function clearSignupComplete(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(FLAG_KEY);
  } catch {
    /* ignore */
  }
}

export function consumeSignupComplete(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(FLAG_KEY);
    sessionStorage.removeItem(FLAG_KEY);
    return raw === "1";
  } catch {
    return false;
  }
}

/** Where to send the user after the conversion confirmation page. */
function safeContinuePath(value: unknown): string | null {
  const safe = safeInternalReturnPath(value);
  if (!safe) return null;
  const pathOnly = (safe.split("?")[0] ?? safe).replace(/\/+$/, "") || "/";
  if (pathOnly === SIGNUP_COMPLETE_PATH) return null;
  return safe;
}

/** Remember the page where the user started signup (demo course, free mock, etc.). */
export function stashPostSignupContinue(path: string): void {
  const safe = safeContinuePath(path);
  if (!safe || typeof window === "undefined") return;
  try {
    sessionStorage.setItem(CONTINUE_KEY, safe);
  } catch {
    /* ignore */
  }
}

export function consumePostSignupContinue(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CONTINUE_KEY);
    sessionStorage.removeItem(CONTINUE_KEY);
    return safeContinuePath(raw);
  } catch {
    return null;
  }
}

/** Split a stashed path+search into navigate() args. */
export function splitContinuePath(path: string): {
  to: string;
  search: Record<string, string>;
} {
  const q = path.indexOf("?");
  if (q < 0) return { to: path, search: {} };
  return {
    to: path.slice(0, q),
    search: Object.fromEntries(new URLSearchParams(path.slice(q + 1)).entries()),
  };
}
