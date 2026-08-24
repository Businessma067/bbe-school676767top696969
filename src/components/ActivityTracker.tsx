import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { runOnceOnLogin, startActivityHeartbeat, trackPageView } from "@/lib/activity-tracker";
import { syncLocalProgressToServer } from "@/lib/sync-local-progress";

/** Global presence + page-view tracking for logged-in users. */
export function ActivityTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    void trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    let stopHeartbeat: (() => void) | null = null;

    const setup = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) return;
      stopHeartbeat = startActivityHeartbeat(() => window.location.pathname);
      await runOnceOnLogin(syncLocalProgressToServer);
    };

    void setup();

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        void runOnceOnLogin(syncLocalProgressToServer);
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
