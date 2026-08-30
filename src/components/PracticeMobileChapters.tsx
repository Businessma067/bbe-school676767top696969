import { List } from "lucide-react";
import { cn } from "@/lib/utils";

/** Off-canvas backdrop for practice chapter drawers (phones only). */
export function PracticeChaptersBackdrop({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <button
      type="button"
      aria-label="Close chapters"
      className="fixed inset-0 z-30 bg-black/40 lg:hidden"
      onClick={onClose}
    />
  );
}

/** Sticky “Chapters” control shown above the case on phones. */
export function PracticeChaptersOpenButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className={cn("mb-3 flex lg:hidden", className)}>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm active:bg-secondary"
      >
        <List className="h-4 w-4 shrink-0" aria-hidden />
        Chapters
      </button>
    </div>
  );
}

/**
 * Aside positioning for practice chapter lists:
 * phones → fixed off-canvas drawer; lg+ → sticky sidebar in the page flow.
 */
export function practiceAsideClassName({
  mobileOpen,
  desktopCollapsed,
  hiddenOnMobileExtra,
}: {
  mobileOpen: boolean;
  desktopCollapsed?: boolean;
  /** e.g. hide while theory reader is open */
  hiddenOnMobileExtra?: boolean;
}) {
  return cn(
    "z-40 flex flex-col bg-transparent",
    // Mobile drawer (out of document flow — case content comes first)
    "fixed inset-y-0 left-0 w-[min(92vw,20rem)] max-h-dvh transition-transform duration-300 ease-out",
    mobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none",
    // Desktop sidebar
    "lg:pointer-events-auto lg:static lg:inset-auto lg:mb-0 lg:max-h-none lg:translate-x-0 lg:transition-[width,opacity,transform]",
    desktopCollapsed
      ? "lg:pointer-events-none lg:w-0 lg:overflow-hidden lg:opacity-0 lg:-translate-x-4"
      : "lg:w-80 lg:opacity-100 2xl:w-96",
    hiddenOnMobileExtra && "max-lg:hidden",
  );
}
