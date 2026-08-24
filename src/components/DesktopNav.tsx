import type { NavItem } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
      {items.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        />
      ))}
    </nav>
  );
}
