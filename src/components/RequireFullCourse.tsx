import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { FULL_COURSE_PRODUCT_HREF, userOwnsFullCourse } from "@/lib/full-course-access";

/**
 * Blocks Full Course practice / tools until the user is signed in and enrolled.
 * Guests → login; signed-in non-owners → product page.
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
      const owns = await userOwnsFullCourse();
      if (cancelled) return;
      if (!owns) {
        navigate({ to: FULL_COURSE_PRODUCT_HREF });
        return;
      }
      setAllowed(true);
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
