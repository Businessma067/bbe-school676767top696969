import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/LocalizedLink";
import {
  pathForTrack,
  resolveExamTrack,
  storeExamTrack,
  type ExamTrack,
} from "@/lib/exam-track";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { cn } from "@/lib/utils";

export function ExamTrackSwitcher({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useLocalizedNavigate();
  const [track, setTrack] = useState<ExamTrack>(() => resolveExamTrack(pathname));

  useEffect(() => {
    const next = resolveExamTrack(pathname);
    setTrack(next);
    storeExamTrack(next);
  }, [pathname]);

  const switchTo = (next: ExamTrack) => {
    if (next === track) return;
    storeExamTrack(next);
    setTrack(next);
    const target = pathForTrack(pathname, next);
    void navigate({ to: target });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-card p-0.5 text-[11px] font-semibold sm:text-xs",
        className,
      )}
      role="group"
      aria-label="Switch exam track"
      data-no-i18n
    >
      <button
        type="button"
        onClick={() => switchTo("bbe")}
        className={cn(
          "rounded px-2 py-1 transition-colors sm:px-2.5",
          track === "bbe"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={track === "bbe"}
      >
        BBE
      </button>
      <button
        type="button"
        onClick={() => switchTo("wiso")}
        className={cn(
          "rounded px-2 py-1 transition-colors sm:px-2.5",
          track === "wiso"
            ? "bg-indigo-700 text-white dark:bg-indigo-600"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={track === "wiso"}
      >
        WiSo
      </button>
    </div>
  );
}

/** Logo / brand that always returns to the active track landing. */
export function TrackBrandMark({ compact = false }: { compact?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const track = resolveExamTrack(pathname);
  const home = track === "wiso" ? "/wiso" : "/bbe";
  const label = track === "wiso" ? "WiSo · BBE School" : "BBE School";
  const mark = track === "wiso" ? "WiSo" : "BBE";

  return (
    <LocalizedLink
      to={home}
      aria-label={`${label} home`}
      className="group flex shrink-0 items-center gap-2 sm:gap-3"
      onClick={() => storeExamTrack(track)}
    >
      <div
        className={cn(
          "relative grid shrink-0 place-items-center overflow-hidden rounded-xl shadow-md ring-1 transition-transform group-hover:scale-105",
          compact ? "h-9 w-9" : "h-10 w-10",
          track === "wiso"
            ? "bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 ring-indigo-500/30"
            : "bg-gradient-to-br from-primary via-accent to-primary ring-primary/30",
        )}
      >
        <span
          className={cn(
            "font-display font-bold leading-none tracking-tight text-primary-foreground",
            compact ? "text-[10px]" : "text-xs",
            track === "wiso" && !compact && "text-[11px]",
          )}
        >
          {mark}
        </span>
      </div>
      <span
        className={cn(
          // Hide the long wordmark until xl so lg header chrome (nav + utilities)
          // keeps breathing room and never overlaps the centered text links.
          "hidden font-display font-bold tracking-tight text-foreground xl:inline",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {label}
      </span>
    </LocalizedLink>
  );
}
