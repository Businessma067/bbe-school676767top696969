import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

type NavItem = { label: string; href: string; isRoute: boolean };

export function NavItemLink({
  item,
  className,
  onNavigate,
  children,
}: {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
  children?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const content = children ?? item.label;

  if (item.isRoute) {
    return (
      <Link to={item.href} className={className} onClick={onNavigate}>
        {content}
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
        {content}
      </button>
    );
  }

  return (
    <Link to="/" hash={hash} className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
}
