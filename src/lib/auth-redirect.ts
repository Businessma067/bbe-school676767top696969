/**
 * Single funnel for "guest hit a protected page -> send to login".
 *
 * Several guards can be mounted at once (the global SiteAccessGuard plus the
 * per-route RequireFullCourse shell). If two of them call navigate() around
 * the same tick, the router tears down the current match while React is still
 * rendering it and throws `Cannot read properties of undefined (reading
 * 'routeId')`, which flashes a blank screen. Funnelling every guard through
 * one deferred, de-duplicated call keeps exactly one navigation in flight.
 */
type NavigateFn = (opts: { to: string; replace?: boolean }) => unknown;

let pending = false;

export function requestLoginRedirect(navigate: NavigateFn) {
  if (typeof window === "undefined") return;
  if (pending) return;
  if (window.location.pathname.endsWith("/login")) return;
  pending = true;

  // Defer past the current render/hydration commit.
  setTimeout(() => {
    try {
      navigate({ to: "/login", replace: true });
    } finally {
      setTimeout(() => {
        pending = false;
      }, 500);
    }
  }, 0);
}
