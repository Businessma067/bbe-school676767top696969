import type { NavItem } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

/**
 * Desktop header links. Single nowrap row so the bar never stacks into two
 * lines; equal side lanes in SiteHeader keep the group page-centered.
 */
export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden max-w-none flex-nowrap items-center justify-center gap-x-1.5 lg:flex xl:gap-x-2.5 2xl:gap-x-3.5">
      {items.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="whitespace-nowrap text-[12px] font-medium leading-none text-foreground/80 transition-colors hover:text-primary xl:text-[13px] 2xl:text-sm"
        />
      ))}
    </nav>
  );
}
