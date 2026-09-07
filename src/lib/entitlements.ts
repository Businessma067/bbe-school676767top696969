import { supabase } from "@/integrations/supabase/client";
import { fetchEnrollments, highestTier } from "@/lib/user-progress";
import { isAdminEmail } from "@/lib/admin-access";

export type AccessTier = "none" | "demo" | "lite" | "full";

const ORDER: Record<AccessTier, number> = { none: 0, demo: 1, lite: 2, full: 3 };

export function tierAtLeast(tier: AccessTier, min: AccessTier): boolean {
  return ORDER[tier] >= ORDER[min];
}

export type AccessState = {
  signedIn: boolean;
  email: string | null;
  tier: AccessTier;
};

let cachedAccess: AccessState | null = null;
let inflightAccess: Promise<AccessState> | null = null;
let authListenerBound = false;

function bindAccessCacheInvalidation() {
  if (authListenerBound || typeof window === "undefined") return;
  authListenerBound = true;
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT" || event === "SIGNED_IN" || event === "USER_UPDATED") {
      clearAccessStateCache();
    }
  });
}

/** Last known entitlement — used to avoid blanking paid routes on every navigation. */
export function peekAccessState(): AccessState | null {
  return cachedAccess;
}

export function clearAccessStateCache(): void {
  cachedAccess = null;
  inflightAccess = null;
}

async function loadAccessState(): Promise<AccessState> {
  const { data } = await supabase.auth.getSession();
  const session = data.session;
  if (!session) return { signedIn: false, email: null, tier: "none" };

  const email = session.user?.email ?? null;
  if (isAdminEmail(email)) return { signedIn: true, email, tier: "full" };

  try {
    const enrollments = await fetchEnrollments();
    const tier = highestTier(enrollments);
    if (tier === "full" || tier === "lite" || tier === "demo") {
      return { signedIn: true, email, tier };
    }
  } catch {
    /* fall through to demo */
  }
  return { signedIn: true, email, tier: "demo" };
}

/**
 * Real, database-backed entitlement: admins get everything, everyone else gets
 * the highest tier they actually own (paid via Monobank or unlocked by promocode).
 * Results are cached in-memory so consecutive study-tool navigations stay snappy.
 */
export async function fetchAccessState(options?: { refresh?: boolean }): Promise<AccessState> {
  bindAccessCacheInvalidation();
  if (!options?.refresh && cachedAccess) return cachedAccess;
  if (!options?.refresh && inflightAccess) return inflightAccess;

  const request = loadAccessState().then((state) => {
    cachedAccess = state;
    if (inflightAccess === request) inflightAccess = null;
    return state;
  });
  inflightAccess = request;
  return request;
}

export async function fetchAccessTier(): Promise<AccessTier> {
  return (await fetchAccessState()).tier;
}
