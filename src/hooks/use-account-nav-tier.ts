import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { AccountNavAccess } from "@/config/site-nav";
import { isAdminEmail } from "@/lib/admin-access";
import { fetchEnrollments, WISO_FULL_COURSE_SLUG } from "@/lib/user-progress";

export type AccountNavState = AccountNavAccess & { ready: boolean };

/**
 * Header chrome depends on which SKUs the account owns.
 * Demo / signed-out / unpaid accounts keep the guest marketing nav on every page.
 * BBE Lite/Full and WiSo Full are tracked separately so one track does not unlock the other.
 */
export function useAccountNavTier(): AccountNavState {
  const [ready, setReady] = useState(false);
  const [access, setAccess] = useState<AccountNavAccess>({
    hasLite: false,
    hasFull: false,
    hasWisoFull: false,
  });

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) {
        if (!cancelled) {
          setAccess({ hasLite: false, hasFull: false, hasWisoFull: false });
          setReady(true);
        }
        return;
      }

      const email = session.user?.email ?? null;
      const admin = isAdminEmail(email);

      let hasLite = admin;
      let hasFull = admin;
      let hasWisoFull = admin;

      try {
        const enrollments = await fetchEnrollments();
        hasLite = hasLite || enrollments.some((e) => e.product_slug === "lite-bbe-course");
        hasFull = hasFull || enrollments.some((e) => e.product_slug === "full-course");
        hasWisoFull =
          hasWisoFull || enrollments.some((e) => e.product_slug === WISO_FULL_COURSE_SLUG);
      } catch {
        /* keep admin flag / defaults */
      }

      if (cancelled) return;
      setAccess({ hasLite, hasFull, hasWisoFull });
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
