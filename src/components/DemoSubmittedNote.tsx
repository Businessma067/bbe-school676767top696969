import { LocalizedLink } from "@/components/LocalizedLink";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { useLanguage } from "@/lib/i18n/context";
import { PageLangContext } from "@/lib/i18n/jsx/render-text";

const linkClass =
  "mt-2 inline-flex text-sm font-semibold text-foreground underline underline-offset-4 hover:text-foreground/80";

/**
 * Shown after a free demo mock is on the results list.
 * Hidden until access is known, and hidden when this track's course is already owned.
 */
export function DemoSubmittedNote({ track }: { track: "bbe" | "wiso" }) {
  const { lang } = useLanguage();
  const { ready, ownsFullCourse, ownsWisoFullCourse, ownsHybridCourse } = useFullCourseAccess();
  const owns =
    track === "wiso" ? ownsWisoFullCourse || ownsHybridCourse : ownsFullCourse || ownsHybridCourse;
  if (!ready || owns) return null;

  return (
    <PageLangContext.Provider value={lang}>
      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <p className="text-sm leading-relaxed text-foreground">
          This is the short pass. The full course walks each task through and adds the other mocks
          and the mock builder.
        </p>
        {track === "wiso" ? (
          <LocalizedLink to="/wiso/products/full-course" className={linkClass}>
            See the WiSo course
          </LocalizedLink>
        ) : (
          <LocalizedLink to="/products/full-course" className={linkClass}>
            See the full course
          </LocalizedLink>
        )}
      </div>
    </PageLangContext.Provider>
  );
}
