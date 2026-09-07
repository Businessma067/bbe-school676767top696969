import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";
import { requiredTierForPath } from "@/lib/site-access";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

/**
 * Belt-and-suspenders redirect for paid study paths.
 * Strips `/de` / `/uk` before matching so locale-prefixed URLs cannot skip the gate.
 * Full Course subjects need Full; Lite tools need Lite or Full.
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
        navigate({ to: "/login" });
        return;
      }
      if (tierAtLeast(state.tier, minTier)) return;
      navigate({
        to: minTier === "full" ? "/products/full-course" : "/products/lite-bbe-course",
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, navigate]);

  return null;
}
