import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { DEMO_ONLY_HREF, hasFullSiteAccess } from "@/lib/site-access";

/**
 * Blocks Full Course practice, Lite practice, flashcards, mocks, and related
 * tools unless the signed-in account is on the full-site allowlist.
 * Guests → login; everyone else → demo practice.
 */
export function RequireFullCourse({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate({ to: "/login" });
        return;
      }
      if (!hasFullSiteAccess(data.session.user?.email)) {
        if (!cancelled) navigate({ to: DEMO_ONLY_HREF });
        return;
      }
      if (!cancelled) setAllowed(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (!allowed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">Checking course access…</p>
      </div>
    );
  }

  return <>{children}</>;
}
