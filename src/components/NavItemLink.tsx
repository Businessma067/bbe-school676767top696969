import { Link, useRouterState } from "@tanstack/react-router";

import { isNavItemActive, type NavItem } from "@/config/site-nav";
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
  const isActive = isNavItemActive(item, pathname, search);

  if (item.isRoute) {
    return (
      <Link
        to={item.href}
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

  if (pathname === "/") {
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

  return (
    <Link to="/" hash={hash} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}
