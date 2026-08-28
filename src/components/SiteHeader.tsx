import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import { navItemsForContext, shouldShowSiteNav } from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
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
          "relative grid place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105",
          compact ? "h-9 w-9" : "h-10 w-10",
        )}
      >
        <span
          className={cn(
            "font-display font-bold leading-none tracking-tight text-primary-foreground",
            compact ? "text-xs" : "text-sm",
          )}
        >
          BBE
        </span>
      </div>
      {compact ? (
        <span className="font-display text-sm font-bold tracking-tight text-foreground">
          BBE School
        </span>
      ) : (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-base font-bold tracking-tight text-foreground">
            BBE School
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
            WU Vienna · Prep
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
  showNav,
  showMobileNav,
  maxWidthClassName = "max-w-7xl",
  className,
  innerClassName,
  sticky = true,
  compact = false,
}: SiteHeaderProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { ready, tier } = useAccountNavTier();
  const navItems = navItemsForContext(pathname, tier);
  const navVisible = shouldShowSiteNav(pathname, showNav);
  const mobileVisible = navVisible && showMobileNav !== false;

  return (
    <header
      className={cn(
        "z-30 border-b border-border/60 bg-background/85 backdrop-blur",
        sticky && "sticky top-0",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8",
          maxWidthClassName,
          compact && "py-3 sm:py-4",
          navVisible && "gap-4 sm:gap-6",
          innerClassName,
        )}
      >
        {left ?? <BrandMark compact={compact} />}
        {center ??
          (navVisible ? (
            ready ? (
              <DesktopNav items={navItems} />
            ) : (
              <div className="hidden h-5 flex-1 lg:block" aria-hidden="true" />
            )
          ) : null)}
        <div className="flex shrink-0 items-center gap-3">
          {actions}
          <AuthNav />
          {mobileVisible ? (
            <div className="lg:hidden">
              {ready ? (
                <MobileNav items={navItems} />
              ) : (
                <div className="h-9 w-9 rounded-md border border-border bg-card" aria-hidden="true" />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
