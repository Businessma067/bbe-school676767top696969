import { Link, useRouterState } from "@tanstack/react-router";

import type { NavItem } from "@/config/site-nav";
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (item.isRoute) {
    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
    return (
      <Link
        to={item.href}
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
