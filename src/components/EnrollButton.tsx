import { useState } from "react";
import { Loader2 } from "lucide-react";
import { enrollInCourse, COURSE_CATALOG, type CourseSlug } from "@/lib/user-progress";
import { supabase } from "@/integrations/supabase/client";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { isLocalizablePath } from "@/lib/i18n/locale-path";
import { useNavigate } from "@tanstack/react-router";

/**
 * CTA that records the enrollment on the user's profile, then continues
 * to the course. Signed-out visitors are sent to the login page first.
 */
export function EnrollButton({
  slug,
  to,
  children,
  className,
  style,
}: {
  slug: CourseSlug;
  to?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const navigateLocalized = useLocalizedNavigate();
  const navigatePlain = useNavigate();
  const [busy, setBusy] = useState(false);
  const target = to ?? COURSE_CATALOG[slug].href;

  const handleClick = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigateLocalized({ to: "/login" });
        return;
      }
      await enrollInCourse(slug);
      if (isLocalizablePath(target)) {
        navigateLocalized({ to: target });
      } else {
        navigatePlain({ to: target });
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className} style={style} disabled={busy}>
      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </button>
  );
}
