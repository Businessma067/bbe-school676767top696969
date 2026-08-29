import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { userOwnsFullCourse } from "@/lib/full-course-access";

export type FullCourseAccessState = {
  ready: boolean;
  signedIn: boolean;
  ownsFullCourse: boolean;
  refresh: () => Promise<void>;
};

export function useFullCourseAccess(): FullCourseAccessState {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [ownsFullCourse, setOwnsFullCourse] = useState(false);

  const refresh = async () => {
    const { data } = await supabase.auth.getSession();
    const session = !!data.session;
    setSignedIn(session);
    if (!session) {
      setOwnsFullCourse(false);
      setReady(true);
      return;
    }
    const owns = await userOwnsFullCourse();
    setOwnsFullCourse(owns);
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

  return { ready, signedIn, ownsFullCourse, refresh };
}
