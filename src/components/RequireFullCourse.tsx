import { useEffect, useState, type ReactNode } from "react";
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

/**
 * Gates paid study tools behind a real entitlement (paid via Monobank or
 * unlocked with a promocode). Guests are sent to login, signed-in users
 * without the required tier are sent to the matching product page.
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
  const cached = peekAccessState();
  const [allowed, setAllowed] = useState(() =>
    cached ? isAllowedForTier(cached.tier, minTier, cached.signedIn) : false,
  );

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;

      if (!state.signedIn) {
        setAllowed(false);
        navigate({ to: "/login", replace: true });
        return;
      }
      if (minTier !== "none" && !tierAtLeast(state.tier, minTier)) {
        setAllowed(false);
        navigate({
          to: minTier === "full" ? "/products/full-course" : "/products/lite-bbe-course",
          replace: true,
        });
        return;
      }
      setAllowed(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate, minTier]);

  if (!allowed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">Checking course access…</p>
      </div>
    );
  }

  return <>{children}</>;
}
