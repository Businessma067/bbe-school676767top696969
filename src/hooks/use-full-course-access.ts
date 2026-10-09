import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { accessOwnsProduct, fetchAccessState, tierAtLeast } from "@/lib/entitlements";

export type FullCourseAccessState = {
  ready: boolean;
  signedIn: boolean;
  /** Paid BBE access (Lite or Full). */
  ownsPaidCourse: boolean;
  /** Full BBE Course enrollment only. */
  ownsFullCourse: boolean;
  /** Full WiSo Course enrollment. */
  ownsWisoFullCourse: boolean;
  /** Hybrid BBE + WiSo Course (or both full tracks). */
  ownsHybridCourse: boolean;
  /** Increments after each access refresh has written ownership. */
  revision: number;
  refresh: () => Promise<void>;
};

export function useFullCourseAccess(): FullCourseAccessState {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [ownsPaidCourse, setOwnsPaidCourse] = useState(false);
  const [ownsFullCourse, setOwnsFullCourse] = useState(false);
  const [ownsWisoFullCourse, setOwnsWisoFullCourse] = useState(false);
  const [ownsHybridCourse, setOwnsHybridCourse] = useState(false);
  const [revision, setRevision] = useState(0);

  const refresh = async () => {
    const { data } = await supabase.auth.getSession();
    const session = !!data.session;
    setSignedIn(session);
    if (!session) {
      setOwnsPaidCourse(false);
      setOwnsFullCourse(false);
      setOwnsWisoFullCourse(false);
      setOwnsHybridCourse(false);
      setReady(true);
      setRevision((value) => value + 1);
      return;
    }
    const state = await fetchAccessState({ refresh: true });
    setOwnsPaidCourse(tierAtLeast(state.tier, "lite"));
    setOwnsFullCourse(accessOwnsProduct(state, "full-course"));
    setOwnsWisoFullCourse(accessOwnsProduct(state, "wiso-full-course"));
    setOwnsHybridCourse(accessOwnsProduct(state, "hybrid-full-course"));
    setReady(true);
    setRevision((value) => value + 1);
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
    ownsHybridCourse,
    revision,
    refresh,
  };
}
