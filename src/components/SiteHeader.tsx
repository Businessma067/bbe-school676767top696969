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
          // One row at all desktop widths: equal flex-1 sides + auto-width center
          // keeps text links page-centered without wrapping onto a second line.
          // Mobile may wrap page actions only; lg+ is always nowrap.
          "mx-auto flex w-full max-w-none flex-wrap items-center gap-x-2 gap-y-2 px-3 py-2 sm:gap-x-3 sm:px-6 sm:py-3",
          "min-h-[3.25rem] sm:min-h-[3.5rem]",
          "pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))]",
          "lg:flex-nowrap lg:items-center lg:gap-x-3 lg:px-6 xl:gap-x-5 xl:px-8",
          !compact && "sm:min-h-[3.75rem] sm:py-4",
          innerClassName,
        )}
      >
        <div className="flex min-w-0 flex-nowrap items-center gap-1.5 sm:gap-2 lg:flex-1 lg:basis-0 lg:justify-start">
          {left ?? <TrackBrandMark compact={compact} />}
          {!hideTrackSwitcher ? (
            <ExamTrackSwitcher
              className={cn("shrink-0", chromeInMenu && "hidden lg:inline-flex")}
            />
          ) : null}
        </div>

        {/* Auto-width middle lane: links stay on one line and stay page-centered. */}
        <div className="hidden shrink-0 justify-center lg:flex lg:px-1 xl:px-2">
          {center ??
            (navVisible ? (
              <DesktopNav items={navItems} />
            ) : (
              <div className="min-w-0" aria-hidden="true" />
            ))}
        </div>

        <div className="ml-auto flex min-w-0 flex-nowrap items-center justify-end gap-1.5 sm:gap-2 lg:ml-0 lg:flex-1 lg:basis-0">
          {actions ? (
            <div className="flex shrink-0 flex-nowrap items-center justify-end gap-1.5 sm:gap-2">
              {actions}
            </div>
          ) : null}
          {/* Theme lives with the other utility controls so it cannot crowd the centered nav. */}
          <ThemeToggle
            className={cn("shrink-0", chromeInMenu && "hidden lg:inline-flex")}
          />
          <LanguageSwitcher
            className={cn("shrink-0", chromeInMenu && "hidden lg:inline-flex")}
          />
          <AuthNav hideGuestLinks={chromeInMenu} />
          {mobileVisible ? (
            <div className="shrink-0 lg:hidden">
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
