import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthNav } from "@/components/AuthNav";
import { DesktopNav } from "@/components/DesktopNav";
import { ExamTrackSwitcher, TrackBrandMark } from "@/components/ExamTrackSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  navItemsForAccess,
  shouldShowSiteNav,
  type NavItem,
} from "@/config/site-nav";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { resolveExamTrack } from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  actions?: ReactNode;
  left?: ReactNode;
  center?: ReactNode;
  /** Override default access/track-based nav items (e.g. homepage chooser links). */
  navItems?: NavItem[];
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
  navItems: navItemsProp,
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
  const navItems =
    navItemsProp ?? navItemsForAccess({ hasLite, hasFull, hasWisoFull }, track);
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
          "mx-auto grid w-full max-w-none grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 gap-y-2 px-3 py-2 sm:gap-x-3 sm:px-6 sm:py-3 lg:gap-x-4 lg:px-8",
          "pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]",
          !compact && "sm:py-4",
          innerClassName,
        )}
      >
        {/* Left cluster: brand + track/theme so the center nav can sit visually centered */}
        <div className="flex min-w-0 items-center justify-self-start gap-1.5 sm:gap-2.5">
          {left ?? <TrackBrandMark compact={compact} />}
          {!hideTrackSwitcher ? <ExamTrackSwitcher /> : null}
          <ThemeToggle />
        </div>
        {center ??
          (navVisible ? (
            <DesktopNav items={navItems} />
          ) : (
            <div className="min-w-0" aria-hidden="true" />
          ))}
        <div className="flex min-w-0 items-center justify-self-end gap-1 sm:gap-2.5">
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
