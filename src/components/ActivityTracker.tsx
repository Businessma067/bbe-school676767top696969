import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { runOnceOnLogin, startActivityHeartbeat, trackPageView } from "@/lib/activity-tracker";

function scheduleIdle(fn: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(() => fn(), { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(fn, 400);
  return () => window.clearTimeout(id);
}

/** Global presence + page-view tracking for logged-in users. */
export function ActivityTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    void trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    let stopHeartbeat: (() => void) | null = null;
    let cancelIdle: (() => void) | null = null;

    const setup = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) return;
      stopHeartbeat = startActivityHeartbeat(() => window.location.pathname);
      // Heavy login sync must not block first paint / clicks.
      cancelIdle = scheduleIdle(() => {
        void runOnceOnLogin(session.user.id);
      });
    };

    void setup();

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        cancelIdle?.();
        cancelIdle = scheduleIdle(() => {
          void runOnceOnLogin(session.user.id);
        });
        stopHeartbeat?.();
        stopHeartbeat = startActivityHeartbeat(() => window.location.pathname);
      }
      if (event === "SIGNED_OUT") {
        cancelIdle?.();
        cancelIdle = null;
        stopHeartbeat?.();
        stopHeartbeat = null;
      }
    });

    return () => {
      cancelIdle?.();
      stopHeartbeat?.();
      sub.subscription.unsubscribe();
    };
  }, []);

  return null;
}
