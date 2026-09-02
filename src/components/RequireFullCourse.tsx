import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { fetchAccessState, tierAtLeast, type AccessTier } from "@/lib/entitlements";

/**
 * Gates paid study tools behind a real entitlement (paid via Monobank or
 * unlocked with a promocode). Guests are sent to login, signed-in users
 * without the required tier are sent to the matching product page.
 */
export function RequireFullCourse({
  children,
  minTier = "lite",
}: {
  children: ReactNode;
  /** "none" = any signed-in user, "lite" = Lite or Full, "full" = Full only. */
  minTier?: AccessTier;
}) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const state = await fetchAccessState();
      if (cancelled) return;

      if (!state.signedIn) {
        navigate({ to: "/login" });
        return;
      }
      if (minTier !== "none" && !tierAtLeast(state.tier, minTier)) {
        navigate({ to: minTier === "full" ? "/products/full-course" : "/products/lite-bbe-course" });
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
