import { navItems } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

export function DesktopNav() {
  return (
    <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:gap-4 lg:flex lg:flex-wrap xl:flex-nowrap">
      {navItems.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="whitespace-nowrap text-xs font-medium text-foreground/80 transition-colors hover:text-primary xl:text-sm"
        />
      ))}
    </nav>
  );
}
