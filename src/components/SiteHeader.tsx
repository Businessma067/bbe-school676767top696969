import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { navItemsForContext, shouldShowSiteNav } from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { cn } from "@/lib/utils";
import bbeLogo from "@/assets/bbe-logo.png.asset.json";

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
    <Link to="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-3">
      <img
        src={bbeLogo.url}
        alt="BBE School logo"
        className={cn(
          "shrink-0 rounded-xl object-cover shadow-md ring-1 ring-border/40 transition-transform group-hover:scale-105",
          compact ? "h-9 w-9" : "h-10 w-10",
        )}
      />
      {compact ? (
        <span className="truncate font-display text-sm font-bold tracking-tight text-foreground">
          BBE School
        </span>
      ) : (
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
            BBE School
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-taupe sm:inline">
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
  const { tier } = useAccountNavTier();
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
          "mx-auto flex items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8",
          maxWidthClassName,
          compact && "py-2.5 sm:py-4",
          navVisible && "gap-3 sm:gap-6",
          innerClassName,
        )}
      >
        {left ?? <BrandMark compact={compact} />}
        {center ??
          (navVisible ? (
            <DesktopNav items={navItems} />
          ) : null)}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {actions}
          <LanguageSwitcher />
          <AuthNav />
          {mobileVisible ? (
            <div className="lg:hidden">
              <MobileNav items={navItems} />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
