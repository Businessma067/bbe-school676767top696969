/**
 * Single funnel for "guest hit a protected page -> send to login".
 *
 * Several guards can be mounted at once (the global SiteAccessGuard plus the
 * per-route RequireFullCourse shell). Two navigations fired around the same
 * tick tear down the current match while React is still rendering it, which
 * throws `Cannot read properties of undefined (reading 'routeId')` and flashes
 * a blank screen. Everything goes through here: one deferred navigation at a
 * time, and none at all while a route renders its own sign-in gate.
 */
type NavigateFn = (opts: { to: string; replace?: boolean }) => unknown;

let pending = false;
let gates = 0;

/** Called by route-level gates that render their own sign-in UI in place. */
export function registerLoginGate() {
  gates += 1;
  return () => {
    gates = Math.max(0, gates - 1);
  };
}

export function requestLoginRedirect(navigate: NavigateFn) {
  if (typeof window === "undefined") return;
  console.log("REDIRECT_REQ gates=", gates);
  if (gates > 0) return;
  if (pending) return;
  if (window.location.pathname.endsWith("/login")) return;
  pending = true;

  const run = () => {
    try {
      navigate({ to: "/login", replace: true });
    } finally {
      setTimeout(() => {
        pending = false;
      }, 500);
    }
  };

  // Wait for hydration to settle before moving the router.
  const schedule = () => setTimeout(run, 0);
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}
