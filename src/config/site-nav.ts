export type NavItem = {
  label: string;
  href: string;
  isRoute: boolean;
};

/** Homepage menu — original marketing sections. */
export const homeNavItems: NavItem[] = [
  { label: "BBE Entrance exam", href: "/bbe-entrance-exam", isRoute: true },
  { label: "Demo-Practice", href: "/demo-practice", isRoute: true },
  { label: "Full Course", href: "#full-course", isRoute: false },
  { label: "Products", href: "/products", isRoute: true },
  { label: "Features", href: "/important-features", isRoute: true },
  { label: "Reviews", href: "#reviews", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
];

/** Inner pages — clean page-to-page navigation. */
export const appNavItems: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "BBE Entrance exam", href: "/bbe-entrance-exam", isRoute: true },
  { label: "Demo Practice", href: "/demo-practice", isRoute: true },
  { label: "Products", href: "/products", isRoute: true },
  { label: "Mock Exams", href: "/mock-exams", isRoute: true },
  { label: "Flashcards", href: "/flashcards", isRoute: true },
  { label: "Matching", href: "/matching", isRoute: true },
  { label: "Tutor Exam", href: "/tutor-exam", isRoute: true },
  { label: "Dashboard", href: "/dashboard", isRoute: true },
];

export const AUTH_PATHS = new Set([
  "/login",
  "/signup",
  "/auth",
  "/forgot-password",
  "/reset-password",
]);

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function navItemsForPath(pathname: string): NavItem[] {
  return normalizePathname(pathname) === "/" ? homeNavItems : appNavItems;
}

export function shouldShowSiteNav(
  pathname: string,
  showNav?: boolean,
): boolean {
  if (showNav === false) return false;
  if (showNav === true) return true;
  return !AUTH_PATHS.has(normalizePathname(pathname));
}
