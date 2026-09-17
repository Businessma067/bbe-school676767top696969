import type { NavItem } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

/**
 * Desktop header links. Uses wrapping (not overflow-x scroll) so every item
 * stays visible at lg+ without clipping the header.
 */
export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden w-full min-w-0 max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 lg:flex xl:gap-x-3.5">
      {items.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="whitespace-nowrap text-[13px] font-medium leading-none text-foreground/80 transition-colors hover:text-primary xl:text-sm"
        />
      ))}
    </nav>
  );
}
