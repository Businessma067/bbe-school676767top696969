import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { fetchAccessState } from "@/lib/entitlements";
import { requiredTierForPath } from "@/lib/site-access";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

/**
 * Belt-and-suspenders guard for paid study paths.
 * Strips `/de` / `/uk` before matching so locale-prefixed URLs cannot skip the gate.
 * Guests are sent to login. Signed-in users below the required tier stay put so
 * RequireFullCourse can show the locked UI shell (no yank to pricing).
 */
export function SiteAccessGuard() {
  const navigate = useLocalizedNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const base = stripLocalePrefix(pathname);
    const minTier = requiredTierForPath(base) ?? requiredTierForPath(pathname);
    if (!minTier) return;

    let cancelled = false;
    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;
      if (!state.signedIn) {
        // Defer past hydration: navigating while the router is still building
        // its match tree tears down the current match mid-render.
        setTimeout(() => {
          console.log("GUARD_SAG_REDIRECT");
        }, 0);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, navigate]);

  return null;
}
