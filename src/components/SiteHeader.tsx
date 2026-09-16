import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { ExamTrackSwitcher, TrackBrandMark } from "@/components/ExamTrackSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItemsForAccess, shouldShowSiteNav } from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { resolveExamTrack } from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  actions?: ReactNode;
  left?: ReactNode;
  center?: ReactNode;
  showNav?: boolean;
  showMobileNav?: boolean;
  maxWidthClassName?: string;
  className?: string;
  innerClassName?: string;
  sticky?: boolean;
  compact?: boolean;
  hideTrackSwitcher?: boolean;
};

export function SiteHeader({
  actions,
  left,
  center,
  showNav,
  showMobileNav,
  maxWidthClassName: _maxWidthClassName,
  className,
  innerClassName,
  sticky = true,
  compact = true,
  hideTrackSwitcher = false,
}: SiteHeaderProps) {
  void _maxWidthClassName;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const pathForNav = stripLocalePrefix(pathname);
  const track = resolveExamTrack(pathname);
  const { hasLite, hasFull, hasWisoFull } = useAccountNavTier();
  const navItems = navItemsForAccess({ hasLite, hasFull, hasWisoFull }, track);
  const navVisible = shouldShowSiteNav(pathForNav, showNav);
  const mobileVisible = navVisible && showMobileNav !== false;

  return (
    <header
      className={cn(
        "z-30 w-full shrink-0 border-b border-border/60 bg-background/85 backdrop-blur",
        sticky && "sticky top-0",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-none flex-wrap items-center gap-x-2 gap-y-2 px-3 py-2 sm:gap-x-3 sm:px-6 sm:py-3 lg:flex-nowrap lg:gap-x-4 lg:px-8",
          "pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]",
          !compact && "sm:py-4",
          innerClassName,
        )}
      >
        {left ?? <TrackBrandMark compact={compact} />}
        {center ??
          (navVisible ? (
            <DesktopNav items={navItems} />
          ) : (
            <div className="min-w-0 flex-1" aria-hidden="true" />
          ))}
        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1 sm:gap-2.5">
          {actions}
          {!hideTrackSwitcher ? <ExamTrackSwitcher /> : null}
          <ThemeToggle />
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
