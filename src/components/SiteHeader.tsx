import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  /** Content shown to the left of AuthNav (e.g. back link). */
  actions?: ReactNode;
  /** Replace the default BBE brand mark on the left. */
  left?: ReactNode;
  /** Optional middle content (defaults to DesktopNav when showNav is true). */
  center?: ReactNode;
  showNav?: boolean;
  showMobileNav?: boolean;
  maxWidthClassName?: string;
  className?: string;
  innerClassName?: string;
  sticky?: boolean;
  compact?: boolean;
};

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-3">
      <div
        className={cn(
          "relative grid place-items-center overflow-hidden rounded-md border border-graphite/20 bg-card",
          compact ? "h-9 w-9" : "h-11 w-11",
        )}
      >
        <span
          className={cn(
            "font-display font-extrabold leading-none tracking-tight text-graphite",
            compact ? "text-xs" : "text-sm",
          )}
        >
          BBE
        </span>
        <span
          aria-hidden
          className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-stamp opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      {compact ? (
        <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
          BBE School
        </span>
      ) : (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
            BBE School
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-taupe">
            240 seats · WU Prep
          </span>
        </div>
      )}
    </Link>
  );
}

export function SiteHeader({
  actions,
  left,
  center,
  showNav = false,
  showMobileNav = false,
  maxWidthClassName = "max-w-7xl",
  className,
  innerClassName,
  sticky = true,
  compact = false,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "z-30 border-b border-border/70 bg-paper/90 backdrop-blur",
        sticky && "sticky top-0",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8",
          maxWidthClassName,
          compact && "py-3 sm:py-4",
          showNav && "gap-4 sm:gap-6",
          innerClassName,
        )}
      >
        {left ?? <BrandMark compact={compact} />}
        {center ?? (showNav ? <DesktopNav /> : null)}
        <div className="flex shrink-0 items-center gap-3">
          {actions}
          <AuthNav />
          {showMobileNav ? (
            <div className="lg:hidden">
              <MobileNav />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
