import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { AccountNavTier } from "@/config/site-nav";
import { hasFullSiteAccess } from "@/lib/site-access";

/**
 * Only allowlisted full-site accounts get Practice / Mock / Games chrome.
 * Everyone else (including signed-in demo users) keeps guest/demo nav.
 */
export function useAccountNavTier(): { ready: boolean; tier: AccountNavTier } {
  const [ready, setReady] = useState(false);
  const [tier, setTier] = useState<AccountNavTier>("guest");

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        if (!cancelled) {
          setTier("guest");
          setReady(true);
        }
        return;
      }

      if (cancelled) return;
      if (hasFullSiteAccess(data.session.user?.email)) {
        setTier("full");
      } else {
        setTier("guest");
      }
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
