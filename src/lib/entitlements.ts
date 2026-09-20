import { supabase } from "@/integrations/supabase/client";
import {
  fetchEnrollments,
  highestBbeTier,
  ownsProductSlug,
  WISO_FULL_COURSE_SLUG,
  type Enrollment,
} from "@/lib/user-progress";
import { isAdminEmail } from "@/lib/admin-access";

export type AccessTier = "none" | "demo" | "lite" | "full";

const ORDER: Record<AccessTier, number> = { none: 0, demo: 1, lite: 2, full: 3 };

export function tierAtLeast(tier: AccessTier, min: AccessTier): boolean {
  return ORDER[tier] >= ORDER[min];
}

export type AccessState = {
  signedIn: boolean;
  email: string | null;
  /** BBE-track tier only — WiSo Full does not inflate this. */
  tier: AccessTier;
  /** Every product_slug on the account (admins get a synthetic full set). */
  productSlugs: string[];
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

function stateFromEnrollments(
  signedIn: boolean,
  email: string | null,
  enrollments: Enrollment[],
  admin: boolean,
): AccessState {
  if (admin) {
    return {
      signedIn: true,
      email,
      tier: "full",
      productSlugs: ["full-course", "lite-bbe-course", WISO_FULL_COURSE_SLUG, "demo-practice"],
    };
  }
  const productSlugs = enrollments.map((e) => e.product_slug);
  const tier = highestBbeTier(enrollments);
  if (tier === "full" || tier === "lite" || tier === "demo") {
    return { signedIn, email, tier, productSlugs };
  }
  return { signedIn, email, tier: signedIn ? "demo" : "none", productSlugs };
}

async function loadAccessState(): Promise<AccessState> {
  const { data } = await supabase.auth.getSession();
  const session = data.session;
  if (!session) return { signedIn: false, email: null, tier: "none", productSlugs: [] };

  const email = session.user?.email ?? null;
  const admin = isAdminEmail(email);

  try {
    const enrollments = await fetchEnrollments();
    return stateFromEnrollments(true, email, enrollments, admin);
  } catch {
    return stateFromEnrollments(true, email, [], admin);
  }
}

/**
 * Real, database-backed entitlement: admins get everything, everyone else gets
 * the highest BBE tier they own (paid via Monobank or unlocked by promocode).
 * WiSo Full is tracked separately via `productSlugs`.
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

export function accessOwnsProduct(state: AccessState, productSlug: string): boolean {
  return state.productSlugs.includes(productSlug);
}

export function accessOwnsWisoFull(state: AccessState): boolean {
  return accessOwnsProduct(state, WISO_FULL_COURSE_SLUG);
}

export function enrollmentsIncludeProduct(enrollments: Enrollment[], productSlug: string): boolean {
  return ownsProductSlug(enrollments, productSlug);
}
