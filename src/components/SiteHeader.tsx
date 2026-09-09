import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocalizedLink } from "@/components/LocalizedLink";
import { MobileNav } from "@/components/MobileNav";
import { navItemsForAccess, shouldShowSiteNav } from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
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
    <LocalizedLink
      to="/"
      aria-label="BBE School home"
      className="group flex shrink-0 items-center gap-2 sm:gap-3"
    >
      <div
        className={cn(
          "relative grid shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105",
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
      {/* Full name only from sm up — keeps the phone header from crowding. */}
      <span
        className={cn(
          "hidden font-display font-bold tracking-tight text-foreground sm:inline",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        BBE School
      </span>
    </LocalizedLink>
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
  const pathForNav = stripLocalePrefix(pathname);
  const { hasLite, hasFull } = useAccountNavTier();
  const navItems = navItemsForAccess({ hasLite, hasFull });
  const navVisible = shouldShowSiteNav(pathForNav, showNav);
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
          "mx-auto flex items-center gap-1.5 px-3 py-2 sm:gap-3 sm:px-6 sm:py-4 lg:gap-4 lg:px-8",
          "pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]",
          maxWidthClassName,
          compact && "py-2 sm:py-3",
          innerClassName,
        )}
      >
        {left ?? <BrandMark compact={compact} />}
        {center ??
          (navVisible ? (
            <DesktopNav items={navItems} />
          ) : (
            <div className="min-w-0 flex-1" aria-hidden="true" />
          ))}
        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1 sm:gap-2.5">
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
