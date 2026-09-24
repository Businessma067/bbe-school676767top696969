import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";
import { currentReturnPath, safeInternalReturnPath, stashAuthReturnTo } from "@/lib/auth-return";

/**
 * Google via Lovable broker — same path as before the admin-panel auth changes.
 * Works on Lovable preview/prod (route `/~oauth/initiate`).
 * On localhost the broker is missing; we still call the same API so behaviour matches
 * the old signup/login buttons.
 *
 * The broker always returns to `origin`; we stash `redirectTo` (or the current URL)
 * in sessionStorage so AuthReturnRedirect can send the user back afterward.
 */
export async function signInWithGoogle(options?: {
  redirectTo?: string;
}): Promise<{ error: Error | null; redirected: boolean }> {
  const returnPath =
    safeInternalReturnPath(options?.redirectTo) ??
    safeInternalReturnPath(currentReturnPath());
  if (returnPath) stashAuthReturnTo(returnPath);

  const result = await lovable.auth.signInWithOAuth("google", {
    redirect_uri: window.location.origin,
  });

  if (result.error) {
    const message =
      result.error instanceof Error
        ? result.error.message
        : String((result.error as { message?: string })?.message ?? result.error);

    // Local npm run dev has no Lovable `/~oauth/initiate` — explain clearly.
    if (
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1")
    ) {
      return {
        error: new Error(
          "Google на localhost через Lovable не работает. Открой Preview в Lovable (как раньше) — там Sign in with Google снова тот же.",
        ),
        redirected: false,
      };
    }

    return {
      error: new Error(message || "Google sign-in failed"),
      redirected: false,
    };
  }

  if (result.redirected) {
    return { error: null, redirected: true };
  }

  // Popup / iframe flow already set tokens via lovable wrapper.
  try {
    // Session may already be set inside lovable.auth.signInWithOAuth
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      return { error: new Error("Google sign-in did not create a session."), redirected: false };
    }
  } catch (e) {
    return {
      error: e instanceof Error ? e : new Error(String(e)),
      redirected: false,
    };
  }

  return { error: null, redirected: false };
}
