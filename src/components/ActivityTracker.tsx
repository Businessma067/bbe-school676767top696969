import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { runOnceOnLogin, startActivityHeartbeat, trackPageView } from "@/lib/activity-tracker";

/** Global presence + page-view tracking for logged-in users. */
export function ActivityTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    void trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    let stopHeartbeat: (() => void) | null = null;

    const setup = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) return;
      stopHeartbeat = startActivityHeartbeat(() => window.location.pathname);
      await runOnceOnLogin(session.user.id);
    };

    void setup();

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        void runOnceOnLogin(session.user.id);
        stopHeartbeat?.();
        stopHeartbeat = startActivityHeartbeat(() => window.location.pathname);
      }
      if (event === "SIGNED_OUT") {
        stopHeartbeat?.();
        stopHeartbeat = null;
      }
    });

    return () => {
      stopHeartbeat?.();
      sub.subscription.unsubscribe();
    };
  }, []);

  return null;
}
