import { Link, useRouterState } from "@tanstack/react-router";

import { isNavItemActive, type NavItem } from "@/config/site-nav";
import { useLanguage } from "@/lib/i18n/context";
import { effectiveLangFromLocation, getLocaleLinkProps } from "@/lib/i18n/locale-nav";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

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
  const { lang } = useLanguage();
  const pathForActive = stripLocalePrefix(pathname);
  const effective = effectiveLangFromLocation(pathname, lang);
  const isActive = isNavItemActive(item, pathForActive, search);

  if (item.isRoute) {
    const link = getLocaleLinkProps(item.href, effective);
    return (
      <Link
        to={link.to as never}
        params={link.params as never}
        {...(item.search ? { search: item.search as never } : {})}
        className={cn(className, isActive && "text-primary")}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  const hash = item.href.replace("#", "");

  const scrollToHash = () => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (pathForActive === "/") {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          scrollToHash();
          onNavigate?.();
        }}
      >
        {item.label}
      </button>
    );
  }

  const home = getLocaleLinkProps("/", effective);
  return (
    <Link
      to={home.to as never}
      params={home.params as never}
      hash={hash}
      className={className}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
