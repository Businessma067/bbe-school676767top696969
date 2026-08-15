import { navItems } from "./MobileNav";
import { NavItemLink } from "./NavItemLink";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      {navItems.map((item) => (
        <NavItemLink
          key={item.label}
          item={item}
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
        >
          <span className="omr-bubble omr-bubble-hover text-ballpoint" aria-hidden />
          {item.label}
        </NavItemLink>
      ))}
    </nav>
  );
}
