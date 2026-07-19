import { navItems } from "./MobileNav";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-7">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
