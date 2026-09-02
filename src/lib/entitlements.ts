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

/**
 * Real, database-backed entitlement: admins get everything, everyone else gets
 * the highest tier they actually own (paid via Monobank or unlocked by promocode).
 */
export async function fetchAccessState(): Promise<AccessState> {
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

export async function fetchAccessTier(): Promise<AccessTier> {
  return (await fetchAccessState()).tier;
}
