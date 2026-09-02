import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";
import { isFullSiteProtectedPath } from "@/lib/site-access";

/**
 * Belt-and-suspenders redirect: paid paths without a paid entitlement send the
 * visitor to login (guests) or to the free Demo Practice (signed-in free users).
 */
export function SiteAccessGuard() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isFullSiteProtectedPath(pathname)) return;

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
