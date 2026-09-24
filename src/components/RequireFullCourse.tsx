import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/LocalizedLink";
import {
  CourseLockedView,
  courseLockFeatureForPath,
} from "@/components/CourseLockedView";
import { safeInternalReturnPath } from "@/lib/auth-return";
import {
  accessOwnsProduct,
  fetchAccessState,
  peekAccessState,
  tierAtLeast,
  type AccessTier,
} from "@/lib/entitlements";
import { isWisoPath } from "@/lib/exam-track";

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
 *
 * Pass `productSlug` for track-specific SKUs (e.g. `wiso-full-course`) so BBE
 * Full does not unlock WiSo and vice versa.
 */
export function RequireFullCourse({
  children,
  minTier = "lite",
  productSlug,
}: {
  children: ReactNode;
  /** "none" = any signed-in user, "lite" = Lite or Full, "full" = Full only. */
  minTier?: AccessTier;
  /** When set, require enrollment in this product (admins still pass). */
  productSlug?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const de = productSlug === "wiso-full-course" || isWisoPath(pathname);
  const cached = peekAccessState();
  const [status, setStatus] = useState<GateStatus>(() => {
    if (!cached) return "checking";
    if (!cached.signedIn) return "login";
    if (productSlug) {
      return accessOwnsProduct(cached, productSlug) ? "allowed" : "locked";
    }
    if (minTier !== "none" && !isAllowedForTier(cached.tier, minTier, cached.signedIn)) {
      return "locked";
    }
    return isAllowedForTier(cached.tier, minTier, cached.signedIn) ? "allowed" : "checking";
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const state = await fetchAccessState();
        if (cancelled) return;

        if (!state.signedIn) {
          setStatus("login");
          return;
        }
        if (productSlug) {
          setStatus(accessOwnsProduct(state, productSlug) ? "allowed" : "locked");
          return;
        }
        if (minTier !== "none" && !tierAtLeast(state.tier, minTier)) {
          setStatus("locked");
          return;
        }
        setStatus("allowed");
      } catch {
        if (!cancelled) setStatus("login");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [minTier, pathname, productSlug]);

  if (status === "allowed") {
    return <>{children}</>;
  }

  if (status === "login") {
    const returnTo =
      safeInternalReturnPath(`${pathname}${typeof window !== "undefined" ? window.location.search : ""}`) ??
      undefined;
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            {de ? "Anmelden, um fortzufahren" : "Sign in to continue"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {de
              ? "Dieser Teil des Kurses ist für angemeldete Studierende verfügbar."
              : "This part of the course is available to signed-in students."}
          </p>
          <LocalizedLink
            to="/login"
            search={returnTo ? { returnTo } : undefined}
            className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            {de ? "Anmelden" : "Sign in"}
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
        productSlug={productSlug}
      />
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <p className="text-sm text-muted-foreground">
        {de ? "Kurszugang wird geprüft…" : "Checking course access…"}
      </p>
    </div>
  );
}
