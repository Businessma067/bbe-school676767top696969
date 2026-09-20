import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/LocalizedLink";
import {
  getExamTrackFromPath,
  pathForTrack,
  resolveNavTrack,
  storeExamTrack,
  type ExamTrack,
} from "@/lib/exam-track";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { cn } from "@/lib/utils";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

export function ExamTrackSwitcher({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.search });
  const navigate = useLocalizedNavigate();
  const { hasLite, hasFull, hasWisoFull, ready } = useAccountNavTier();
  const [track, setTrack] = useState<ExamTrack>(() =>
    resolveNavTrack(pathname, { hasLite, hasFull, hasWisoFull }),
  );

  useEffect(() => {
    const fromPath = getExamTrackFromPath(pathname);
    if (fromPath) {
      setTrack(fromPath);
      storeExamTrack(fromPath);
      return;
    }
    if (!ready) return;
    const next = resolveNavTrack(pathname, { hasLite, hasFull, hasWisoFull });
    setTrack(next);
    storeExamTrack(next);
  }, [pathname, hasLite, hasFull, hasWisoFull, ready]);

  const switchTo = (next: ExamTrack) => {
    if (next === track) return;
    storeExamTrack(next);
    setTrack(next);
    const path = stripLocalePrefix(pathname);
    if (path === "/dashboard" || path.startsWith("/dashboard/")) {
      const tab = (search as { tab?: string } | undefined)?.tab;
      void navigate({
        to: "/dashboard",
        search: tab ? { tab } : {},
        replace: true,
      });
      return;
    }
    if (path === "/account" || path.startsWith("/account/")) {
      return;
    }
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
  const { hasLite, hasFull, hasWisoFull } = useAccountNavTier();
  const track = resolveNavTrack(pathname, { hasLite, hasFull, hasWisoFull });
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
          // Hold the long wordmark until 2xl so lg/xl keep one-line nav + utilities
          // without overlapping the centered text links.
          "hidden font-display font-bold tracking-tight text-foreground 2xl:inline",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {label}
      </span>
    </LocalizedLink>
  );
}
