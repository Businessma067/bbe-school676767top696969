import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { DEMO_ONLY_HREF, hasFullSiteAccess } from "@/lib/site-access";

const ACCESS_CACHE_KEY = "bbe.full_site_email";

function readCachedAccess(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return hasFullSiteAccess(sessionStorage.getItem(ACCESS_CACHE_KEY));
  } catch {
    return false;
  }
}

function writeCachedAccess(email: string | null | undefined) {
  if (typeof window === "undefined") return;
  try {
    if (hasFullSiteAccess(email) && email) {
      sessionStorage.setItem(ACCESS_CACHE_KEY, email.trim().toLowerCase());
    } else {
      sessionStorage.removeItem(ACCESS_CACHE_KEY);
    }
  } catch {
    /* ignore */
  }
}

/**
 * Blocks Full Course practice, Lite practice, flashcards, mocks, and related
 * tools unless the signed-in account is on the full-site allowlist.
 * Guests → login; everyone else → demo practice.
 * Session-cached allowlist so returning users skip the full-page gate flicker.
 */
export function RequireFullCourse({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(readCachedAccess);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      if (!data.session) {
        writeCachedAccess(null);
        navigate({ to: "/login" });
        return;
      }
      const email = data.session.user?.email;
      if (!hasFullSiteAccess(email)) {
        writeCachedAccess(null);
        navigate({ to: DEMO_ONLY_HREF });
        return;
      }
      writeCachedAccess(email);
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
