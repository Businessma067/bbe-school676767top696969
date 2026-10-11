import { ChevronLeft } from "lucide-react";
import { LocalizedLink } from "@/components/LocalizedLink";

const courseLinkClass =
  "inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90";

/**
 * Shown when a demo visitor opens a locked task.
 * One spoken line, then the course for this track.
 */
export function DemoLockNote({
  href,
  onBack,
}: {
  href: string;
  onBack?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
      <p className="mx-auto max-w-sm text-sm leading-relaxed text-foreground">
        The free tasks stop here, and the other tasks, the mocks and the mock builder are in the
        course.
      </p>
      <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
        <LocalizedLink to={href} className={courseLinkClass}>
          See the course
        </LocalizedLink>
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to the free ones
          </button>
        ) : null}
      </div>
    </div>
  );
}
