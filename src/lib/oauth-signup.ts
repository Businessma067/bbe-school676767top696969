import { supabase } from "@/integrations/supabase/client";
import { consumeAuthReturnTo, safeInternalReturnPath, stashAuthReturnTo } from "@/lib/auth-return";
import { markSignupComplete, SIGNUP_COMPLETE_PATH } from "@/lib/signup-complete";

const ATTEMPT_KEY = "bbe.googleAuthAttempt";
type Attempt = { startedAt: number; returnTo: string };

/** Creation time comes from the verified Auth user, not the selected form mode. */
export function isNewOAuthSignup(createdAt: string, startedAt: number, now = Date.now()): boolean {
  const created = Date.parse(createdAt);
  return Number.isFinite(created) && Number.isFinite(startedAt) &&
    startedAt <= now && now - startedAt <= 30 * 60 * 1000 &&
    created >= startedAt - 5000 && created <= now + 5000;
}

export function beginOAuthAttempt(returnTo: string): void {
  const safe = safeInternalReturnPath(returnTo) ?? "/dashboard";
  sessionStorage.setItem(ATTEMPT_KEY, JSON.stringify({ startedAt: Date.now(), returnTo: safe }));
  stashAuthReturnTo(safe);
}

export function hasOAuthAttempt(): boolean {
  return sessionStorage.getItem(ATTEMPT_KEY) !== null;
}

export function clearOAuthAttempt(): void {
  sessionStorage.removeItem(ATTEMPT_KEY);
  consumeAuthReturnTo();
}

let finishing: Promise<string | null> | null = null;
/** Shared by popup completion and the origin callback after a full-page redirect. */
export function finishOAuthAttempt(): Promise<string | null> {
  if (finishing) return finishing;
  finishing = (async () => {
    const raw = sessionStorage.getItem(ATTEMPT_KEY);
    if (!raw) return null;
    let attempt: Attempt;
    try {
      attempt = JSON.parse(raw);
    } catch {
      clearOAuthAttempt();
      return null;
    }
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) return null;
    clearOAuthAttempt();
    if (isNewOAuthSignup(data.user.created_at, attempt.startedAt)) {
      markSignupComplete();
      return SIGNUP_COMPLETE_PATH;
    }
    return safeInternalReturnPath(attempt.returnTo) ?? "/dashboard";
  })().finally(() => { finishing = null; });
  return finishing;
}