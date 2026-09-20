import { useEffect, useState } from "react";
import type { AccountNavAccess } from "@/config/site-nav";
import { supabase } from "@/integrations/supabase/client";
import {
  accessOwnsProduct,
  accessOwnsWisoFull,
  fetchAccessState,
  peekAccessState,
  type AccessState,
} from "@/lib/entitlements";
import { LITE_BBE_COURSE_SLUG } from "@/lib/user-progress";

export type AccountNavState = AccountNavAccess & { ready: boolean };

function accessFromState(state: AccessState): AccountNavAccess {
  return {
    hasLite: accessOwnsProduct(state, LITE_BBE_COURSE_SLUG),
    hasFull: accessOwnsProduct(state, "full-course"),
    hasWisoFull: accessOwnsWisoFull(state),
  };
}

const GUEST_ACCESS: AccountNavAccess = {
  hasLite: false,
  hasFull: false,
  hasWisoFull: false,
};

/**
 * Header chrome depends on which SKUs the account owns.
 * Demo / signed-out / unpaid accounts keep the guest marketing nav on every page.
 * BBE Full and WiSo Full are tracked separately so one track does not unlock the other.
 * Legacy Lite enrollments still count as paid BBE access for study tools.
 *
 * Uses the shared entitlements cache so remounting SiteHeader on navigation does not
 * flash guest nav while enrollments reload.
 */
export function useAccountNavTier(): AccountNavState {
  const peeked = typeof window !== "undefined" ? peekAccessState() : null;
  const [ready, setReady] = useState(() => peeked != null);
  const [access, setAccess] = useState<AccountNavAccess>(() =>
    peeked ? accessFromState(peeked) : GUEST_ACCESS,
  );

  useEffect(() => {
    let cancelled = false;

    const refresh = async (options?: { refresh?: boolean }) => {
      const state = await fetchAccessState(options);
      if (cancelled) return;
      setAccess(accessFromState(state));
      setReady(true);
    };

    void refresh();

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        void refresh({ refresh: true });
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  return { ready, ...access };
}
