import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  CourseLockedView,
  courseLockFeatureForPath,
} from "@/components/CourseLockedView";
import {
  fetchAccessState,
  peekAccessState,
  tierAtLeast,
  type AccessTier,
} from "@/lib/entitlements";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";

function isAllowedForTier(tier: AccessTier | undefined, minTier: AccessTier, signedIn: boolean) {
  if (!signedIn) return false;
  if (minTier === "none") return true;
  return tier != null && tierAtLeast(tier, minTier);
}

type GateStatus = "checking" | "allowed" | "locked" | "login";

/**
 * Gates paid study tools behind a real entitlement (paid via Monobank or
 * unlocked with a promocode). Guests are sent to login. Signed-in users
 * without the required tier stay on the route and see a locked UI shell
 * instead of being redirected away.
 *
 * Uses a short-lived in-memory entitlement cache so navigating between
 * flashcards / matching / tutor does not blank the page on every click.
 */
export function RequireFullCourse({
  children,
  minTier = "lite",
}: {
  children: ReactNode;
  /** "none" = any signed-in user, "lite" = Lite or Full, "full" = Full only. */
  minTier?: AccessTier;
}) {
  const navigate = useLocalizedNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cached = peekAccessState();
  const [status, setStatus] = useState<GateStatus>(() => {
    if (!cached) return "checking";
    if (!cached.signedIn) return "login";
    if (minTier !== "none" && !isAllowedForTier(cached.tier, minTier, cached.signedIn)) {
      return "locked";
    }
    return isAllowedForTier(cached.tier, minTier, cached.signedIn) ? "allowed" : "checking";
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;

      if (!state.signedIn) {
        setStatus("login");
        navigate({ to: "/login", replace: true });
        return;
      }
      if (minTier !== "none" && !tierAtLeast(state.tier, minTier)) {
        setStatus("locked");
        return;
      }
      setStatus("allowed");
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate, minTier, pathname]);

  if (status === "allowed") {
    return <>{children}</>;
  }

  if (status === "locked") {
    return (
      <CourseLockedView
        feature={courseLockFeatureForPath(pathname)}
        minTier={minTier}
      />
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <p className="text-sm text-muted-foreground">Checking course access…</p>
    </div>
  );
}
