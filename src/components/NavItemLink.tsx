import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useSyncExternalStore } from "react";

import { isNavItemActive, type NavItem } from "@/config/site-nav";
import { useLanguage } from "@/lib/i18n/context";
import { effectiveLangFromLocation, getLocaleLinkProps } from "@/lib/i18n/locale-nav";
import {
  entryLangForDestination,
  getExamTrackFromPath,
  getNavPrefsHydratedSnapshot,
  subscribeNavPrefsHydrated,
  userPickedNonEnglish,
  resolveExamTrack,
  trackHome,
  trackUiLang,
} from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

function splitHref(href: string): { path: string; hash?: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) return { path: href };
  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

export function NavItemLink({
  item,
  className,
  onNavigate,
}: {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
}) {
  const { pathname, search } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, search: s.location.search }),
  });
  const { lang, setLang, t } = useLanguage();
  // Hook snapshot is false during this fiber's hydration even if root already unlocked.
  const prefsHydrated = useSyncExternalStore(
    subscribeNavPrefsHydrated,
    getNavPrefsHydratedSnapshot,
    () => false,
  );
  const [storageReady, setStorageReady] = useState(false);
  useEffect(() => {
    setStorageReady(true);
  }, []);
  const pathForActive = stripLocalePrefix(pathname);
  const effective = effectiveLangFromLocation(pathname, lang);
  const isActive = isNavItemActive(item, pathForActive, search);
  const track =
    storageReady || prefsHydrated
      ? resolveExamTrack(pathname)
      : (getExamTrackFromPath(pathname) ?? "bbe");
  const homePath = trackHome(track);
  const label = t(item.label);

  if (item.isRoute) {
    const { path, hash } = splitHref(item.href);
    // Skip storage-backed user lang until this link has mounted.
    const entryLang =
      storageReady || prefsHydrated ? entryLangForDestination(path, pathname) : null;
    const linkLang = entryLang ?? effective;
    const link = getLocaleLinkProps(hash ? `${path}#${hash}` : path, linkLang);
    return (
      <Link
        to={link.to as never}
        params={link.params as never}
        {...(link.hash ? { hash: link.hash as never } : {})}
        {...(item.search ? { search: item.search as never } : {})}
        className={cn(className, isActive && "text-primary")}
        aria-current={isActive ? "page" : undefined}
        onClick={() => {
          if (entryLang) setLang(entryLang);
          onNavigate?.();
        }}
        data-no-i18n
      >
        {label}
      </Link>
    );
  }

  const hash = item.href.replace("#", "");
  const scrollToHash = () => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (pathForActive === "/" || pathForActive === homePath) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          scrollToHash();
          onNavigate?.();
        }}
        data-no-i18n
      >
        {label}
      </button>
    );
  }

  const homeLang = userPickedNonEnglish() ? effective : trackUiLang(track);
  const home = getLocaleLinkProps(homePath, homeLang);
  return (
    <Link
      to={home.to as never}
      params={home.params as never}
      hash={hash}
      className={className}
      onClick={() => {
        setLang(homeLang);
        onNavigate?.();
      }}
      data-no-i18n
    >
      {label}
    </Link>
  );
}
