import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Tracks whether the visitor is signed in and exposes a gate for
 * interactive actions (e.g. answering practice questions).
 */
export function useAuthGate() {
  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const { data } = await supabase.auth.getSession();
      if (!cancelled) {
        setSignedIn(!!data.session);
        setReady(true);
      }
    };

    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        setSignedIn(true);
        setAuthOpen(false);
        setReady(true);
      } else if (event === "SIGNED_OUT") {
        setSignedIn(false);
        setReady(true);
      } else if (event === "USER_UPDATED" || event === "TOKEN_REFRESHED") {
        void refresh();
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  const requireAuth = useCallback(() => {
    if (signedIn) return true;
    setAuthOpen(true);
    return false;
  }, [signedIn]);

  return {
    signedIn,
    ready,
    authOpen,
    setAuthOpen,
    requireAuth,
  };
}
