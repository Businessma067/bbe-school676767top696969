import { Link, useRouterState } from "@tanstack/react-router";

type NavItem = { label: string; href: string; isRoute: boolean };

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
    return (
      <Link to={item.href} className={className} onClick={onNavigate}>
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
