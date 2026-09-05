import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";
import { isFullSiteProtectedPath } from "@/lib/site-access";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

/**
 * Belt-and-suspenders redirect: paid paths without a paid entitlement send the
 * visitor to login (guests) or to the free Demo Practice (signed-in free users).
 */
export function SiteAccessGuard() {
  const navigate = useLocalizedNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const base = stripLocalePrefix(pathname);
    if (!isFullSiteProtectedPath(base) && !isFullSiteProtectedPath(pathname)) return;

    let cancelled = false;
    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;
      if (!state.signedIn) {
        navigate({ to: "/login" });
        return;
      }
      if (tierAtLeast(state.tier, "lite")) return;
      navigate({ to: "/products/lite-bbe-course" });
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, navigate]);

  return null;
}
