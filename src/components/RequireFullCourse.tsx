import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/LocalizedLink";
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
import { registerLoginGate } from "@/lib/auth-redirect";

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

  // While this gate is mounted the global guard must not navigate: we render
  // the sign-in prompt in place instead of yanking the router mid-render.
  useEffect(() => registerLoginGate(), []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;

      if (!state.signedIn) {
        setStatus("login");
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
  }, [minTier, pathname]);

  if (status === "allowed") {
    return <>{children}</>;
  }

  if (status === "login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Sign in to continue
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This part of the course is available to signed-in students.
          </p>
          <LocalizedLink
            to="/login"
            className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Sign in
          </LocalizedLink>
        </div>
      </div>
    );
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
