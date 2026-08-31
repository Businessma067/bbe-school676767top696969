import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import {
  DEMO_ONLY_HREF,
  hasFullSiteAccess,
  isFullSiteProtectedPath,
} from "@/lib/site-access";

/**
 * Belt-and-suspenders redirect: any protected path without a full-site
 * account goes to Demo Practice (covers routes that forget RequireFullCourse).
 */
export function SiteAccessGuard() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isFullSiteProtectedPath(pathname)) return;

    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      if (hasFullSiteAccess(data.session?.user?.email)) return;
      navigate({ to: DEMO_ONLY_HREF });
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, navigate]);

  return null;
}
