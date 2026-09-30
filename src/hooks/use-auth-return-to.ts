import { useRouterState } from "@tanstack/react-router";
import { safeInternalReturnPath } from "@/lib/auth-return";

/**
 * Read `?returnTo=` from the current location.
 * Safe under both `/login` and `/$lang/login` splat mounts — unlike
 * `Route.useSearch()` from the `/login` file route, which throws when the
 * page is rendered via the locale splat (same class of bug as /dashboard).
 */
export function useAuthReturnTo(): string | undefined {
  return useRouterState({
    select: (s) => {
      const search = s.location.search as Record<string, unknown> | undefined;
      const raw =
        search && typeof search === "object" && "returnTo" in search
          ? search.returnTo
          : undefined;
      return safeInternalReturnPath(raw) ?? undefined;
    },
  });
}
