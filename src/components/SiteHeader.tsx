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
  /**
   * Below lg the hamburger owns secondary chrome (track, theme, language, guest
   * auth) so the top bar never packs enough controls to overlap.
   */
  const chromeInMenu = mobileVisible;

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
          // Mobile: flex + wrap so page actions can drop to a second row instead of overlapping.
          // lg+: 3-column grid keeps desktop nav visually centered between left/right clusters.
          "mx-auto flex w-full max-w-none flex-wrap items-center gap-x-2 gap-y-2 px-3 py-2 sm:gap-x-3 sm:px-6 sm:py-3",
          "pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]",
          "lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:flex-nowrap lg:gap-x-4 lg:px-8",
          !compact && "sm:py-4",
          innerClassName,
        )}
      >
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2.5 lg:justify-self-start">
          {left ?? <TrackBrandMark compact={compact} />}
          {!hideTrackSwitcher ? (
            <ExamTrackSwitcher
              className={cn(chromeInMenu && "hidden lg:inline-flex")}
            />
          ) : null}
          <ThemeToggle className={cn(chromeInMenu && "hidden lg:inline-flex")} />
        </div>

        {/* Keep a real grid cell on lg+ even when DesktopNav is display:none below lg. */}
        <div className="hidden min-w-0 justify-self-center lg:block">
          {center ??
            (navVisible ? (
              <DesktopNav items={navItems} />
            ) : (
              <div className="min-w-0" aria-hidden="true" />
            ))}
        </div>

        <div className="ml-auto flex min-w-0 max-w-full flex-wrap items-center justify-end gap-1.5 sm:gap-2.5 lg:ml-0 lg:justify-self-end">
          {actions ? (
            <div className="order-last flex max-w-full basis-full flex-wrap items-center justify-end gap-1.5 sm:order-none sm:basis-auto sm:gap-2">
              {actions}
            </div>
          ) : null}
          <LanguageSwitcher
            className={cn(chromeInMenu && "hidden lg:inline-flex")}
          />
          <AuthNav hideGuestLinks={chromeInMenu} />
          {mobileVisible ? (
            <div className="lg:hidden">
              <MobileNav
                items={navItems}
                showTrackSwitcher={!hideTrackSwitcher}
                showThemeToggle
                showLanguageSwitcher
                showGuestAuth
              />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
