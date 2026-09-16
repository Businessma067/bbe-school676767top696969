import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  accessOwnsProduct,
  fetchAccessState,
  tierAtLeast,
} from "@/lib/entitlements";

export type FullCourseAccessState = {
  ready: boolean;
  signedIn: boolean;
  /** Paid BBE access (Lite or Full). */
  ownsPaidCourse: boolean;
  /** Full BBE Course enrollment only. */
  ownsFullCourse: boolean;
  /** Full WiSo Course enrollment. */
  ownsWisoFullCourse: boolean;
  refresh: () => Promise<void>;
};

export function useFullCourseAccess(): FullCourseAccessState {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [ownsPaidCourse, setOwnsPaidCourse] = useState(false);
  const [ownsFullCourse, setOwnsFullCourse] = useState(false);
  const [ownsWisoFullCourse, setOwnsWisoFullCourse] = useState(false);

  const refresh = async () => {
    const { data } = await supabase.auth.getSession();
    const session = !!data.session;
    setSignedIn(session);
    if (!session) {
      setOwnsPaidCourse(false);
      setOwnsFullCourse(false);
      setOwnsWisoFullCourse(false);
      setReady(true);
      return;
    }
    const state = await fetchAccessState({ refresh: true });
    setOwnsPaidCourse(tierAtLeast(state.tier, "lite"));
    setOwnsFullCourse(accessOwnsProduct(state, "full-course"));
    setOwnsWisoFullCourse(accessOwnsProduct(state, "wiso-full-course"));
    setReady(true);
  };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await refresh();
      if (cancelled) return;
    };

    void run();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "USER_UPDATED" ||
        event === "TOKEN_REFRESHED"
      ) {
        void refresh();
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  return {
    ready,
    signedIn,
    ownsPaidCourse,
    ownsFullCourse,
    ownsWisoFullCourse,
    refresh,
  };
}
