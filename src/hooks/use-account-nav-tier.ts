import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { AccountNavTier } from "@/config/site-nav";
import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";

/**
 * Practice / Mock / Games chrome shows for accounts that actually own a paid
 * course (Lite or Full) or for admins. Everyone else keeps guest/demo nav.
 */
export function useAccountNavTier(): { ready: boolean; tier: AccountNavTier } {
  const [ready, setReady] = useState(false);
  const [tier, setTier] = useState<AccountNavTier>("guest");

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const state = await fetchAccessState();
      if (cancelled) return;
      setTier(tierAtLeast(state.tier, "lite") ? "full" : "guest");
      setReady(true);
    };

    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        void refresh();
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  return { ready, tier };
}
