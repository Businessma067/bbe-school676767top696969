import type { ReactNode } from "react";
import { List } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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
 * Desktop sticky sidebar + phone Sheet drawer for the same chapter list.
 * `children` is rendered twice (desktop + sheet) — both share parent state handlers.
 */
export function PracticeChaptersShell({
  mobileOpen,
  onMobileOpenChange,
  desktopCollapsed,
  hideMobile,
  children,
  desktopClassName,
}: {
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
  desktopCollapsed?: boolean;
  /** Hide phone entry while theory reader (etc.) owns the screen */
  hideMobile?: boolean;
  children: ReactNode;
  desktopClassName?: string;
}) {
  return (
    <>
      <aside
        className={cn(
          "mb-0 hidden shrink-0 lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:overflow-hidden lg:transition-[width,opacity,transform] lg:duration-300 lg:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
          desktopCollapsed
            ? "lg:pointer-events-none lg:w-0 lg:opacity-0 lg:-translate-x-4"
            : "lg:w-80 lg:opacity-100 lg:translate-x-0 2xl:w-96",
          desktopClassName,
        )}
        aria-hidden={desktopCollapsed}
      >
        {children}
      </aside>

      {!hideMobile && (
        <Sheet open={mobileOpen} onOpenChange={onMobileOpenChange}>
          <SheetContent
            side="left"
            className="flex w-[min(92vw,20rem)] max-w-sm flex-col border-r border-border bg-background p-0 lg:hidden [&>button]:hidden"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Chapters</SheetTitle>
              <SheetDescription>Browse practice chapters and tasks</SheetDescription>
            </SheetHeader>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3">{children}</div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

/** @deprecated Prefer PracticeChaptersShell — kept for any leftover imports */
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

/** @deprecated Prefer PracticeChaptersShell */
export function practiceAsideClassName({
  mobileOpen,
  desktopCollapsed,
  hiddenOnMobileExtra,
}: {
  mobileOpen: boolean;
  desktopCollapsed?: boolean;
  hiddenOnMobileExtra?: boolean;
}) {
  return cn(
    "z-40 flex flex-col bg-transparent",
    "fixed inset-y-0 left-0 w-[min(92vw,20rem)] max-h-dvh transition-transform duration-300 ease-out",
    mobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none",
    "lg:pointer-events-auto lg:static lg:inset-auto lg:mb-0 lg:max-h-none lg:translate-x-0 lg:transition-[width,opacity,transform]",
    desktopCollapsed
      ? "lg:pointer-events-none lg:w-0 lg:overflow-hidden lg:opacity-0 lg:-translate-x-4"
      : "lg:w-80 lg:opacity-100 2xl:w-96",
    hiddenOnMobileExtra && "max-lg:hidden",
  );
}
