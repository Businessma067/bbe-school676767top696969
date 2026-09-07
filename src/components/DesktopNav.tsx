import type { NavItem } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-3 overflow-x-auto lg:flex xl:gap-x-4">
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
