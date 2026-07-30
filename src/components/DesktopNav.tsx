import { navItems } from "./MobileNav";
import { NavItemLink } from "./NavItemLink";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-7">
      {navItems.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        />
      ))}
    </nav>
  );
}
