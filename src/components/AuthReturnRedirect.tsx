import { useEffect, useRef } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { consumeAuthReturnTo, safeInternalReturnPath } from "@/lib/auth-return";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

const STORAGE_KEY = "bbe.authReturnTo";

function peekAuthReturnTo(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return safeInternalReturnPath(sessionStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

/**
 * After Google OAuth (Lovable broker returns to origin), send the user back to
 * the page they started from when `bbe.authReturnTo` was stashed.
 */
export function AuthReturnRedirect() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;

    const tryRedirect = () => {
      if (handled.current) return;
      const target = peekAuthReturnTo();
      if (!target) return;

      const current = `${window.location.pathname}${window.location.search}`;
      if (current === target) {
        // Already home — clear stash without navigating.
        consumeAuthReturnTo();
        return;
      }

      // Only auto-redirect from home / auth landings — avoid yanking mid-browse.
      const stripped = stripLocalePrefix(pathname);
      const onLanding =
        stripped === "/" ||
        stripped === "/login" ||
        stripped === "/signup" ||
        stripped === "/auth";
      if (!onLanding) return;

      const safe = consumeAuthReturnTo();
      if (!safe) return;

      handled.current = true;
      const q = safe.indexOf("?");
      const to = q >= 0 ? safe.slice(0, q) : safe;
      const searchStr = q >= 0 ? safe.slice(q + 1) : "";
      const search = Object.fromEntries(new URLSearchParams(searchStr).entries());
      void navigate({ to: to as never, search: search as never, replace: true });
    };

    void (async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) tryRedirect();
    })();

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") tryRedirect();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [navigate, pathname]);

  return null;
}
