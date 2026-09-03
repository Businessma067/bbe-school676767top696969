import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { AccountNavAccess } from "@/config/site-nav";
import { isAdminEmail } from "@/lib/admin-access";
import { fetchEnrollments } from "@/lib/user-progress";

export type AccountNavState = AccountNavAccess & { ready: boolean };

/**
 * Header chrome depends only on whether the account owns Lite and/or Full.
 * Demo / signed-out / unpaid accounts keep the guest marketing nav on every page.
 */
export function useAccountNavTier(): AccountNavState {
  const [ready, setReady] = useState(false);
  const [access, setAccess] = useState<AccountNavAccess>({
    hasLite: false,
    hasFull: false,
  });

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) {
        if (!cancelled) {
          setAccess({ hasLite: false, hasFull: false });
          setReady(true);
        }
        return;
      }

      const email = session.user?.email ?? null;
      const admin = isAdminEmail(email);

      let hasLite = false;
      let hasFull = admin;

      try {
        const enrollments = await fetchEnrollments();
        hasLite = enrollments.some((e) => e.tier === "lite");
        hasFull = hasFull || enrollments.some((e) => e.tier === "full");
      } catch {
        /* keep admin flag / defaults */
      }

      if (cancelled) return;
      setAccess({ hasLite, hasFull });
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

  return { ready, ...access };
}
