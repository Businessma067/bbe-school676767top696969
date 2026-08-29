import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { AccountNavTier } from "@/config/site-nav";
import { fetchEnrollments, highestTier } from "@/lib/user-progress";

/**
 * Signed-in users get the course header (Demo-course, Products, Practice, …).
 * Guests keep the marketing guest nav. Lite owners keep lite nav until Full is owned.
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

      const enrollments = await fetchEnrollments();
      if (cancelled) return;
      const highest = highestTier(enrollments);
      if (highest === "full") {
        setTier("full");
      } else if (highest === "lite") {
        setTier("lite");
      } else {
        // Signed in without a paid course: still show the signed-in course chrome.
        setTier("full");
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
