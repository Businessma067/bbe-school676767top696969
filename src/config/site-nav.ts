export type NavItem = {
  label: string;
  href: string;
  isRoute: boolean;
  search?: Record<string, string>;
  /** Highlight only on these exact pathnames. */
  activeExact?: string[];
  /** Highlight when the pathname is this value or a nested path. */
  activePrefixes?: string[];
};

/** Paid-course flags that drive the shared site header. */
export type AccountNavAccess = {
  hasLite: boolean;
  hasFull: boolean;
};

/** @deprecated Prefer AccountNavAccess — kept for any lingering imports. */
export type AccountNavTier = "guest" | "lite" | "full";

const EXAM_INFO_PREFIXES = [
  "/bbe-entrance-exam",
  "/bbe-entrance-exam-guide",
  "/bbe-exam-scoring",
  "/bbe-mathematics",
  "/bbe-economics-english",
  "/bbe-exam-preparation",
  "/bbe-admission",
];

const PRODUCTS_EXACT = [
  "/products",
  "/products/lite-bbe-course",
  "/products/full-course",
];

const examInfoItem: NavItem = {
  label: "Exam info",
  href: "/bbe-entrance-exam",
  isRoute: true,
  activePrefixes: EXAM_INFO_PREFIXES,
};

const productsItem: NavItem = {
  label: "Products",
  href: "/products",
  isRoute: true,
  activeExact: PRODUCTS_EXACT,
};

const demoPracticeItem: NavItem = {
  label: "Demo-Practice",
  href: "/demo-practice",
  isRoute: true,
  activePrefixes: ["/demo-practice", "/products/demo-practice"],
};

const demoCourseItem: NavItem = {
  label: "Demo-course",
  href: "/demo-practice",
  isRoute: true,
  activePrefixes: ["/demo-practice", "/products/demo-practice"],
};

const fullCourseItem: NavItem = {
  label: "Full Course",
  href: "/products/full-course-subjects",
  isRoute: true,
  activePrefixes: [
    "/products/full-course-subjects",
    "/products/full-course-math",
    "/products/full-course-english",
    "/products/full-course-economics",
    "/practice",
  ],
};

const lightCourseItem: NavItem = {
  label: "Light course",
  href: "/products/lite-bbe-course-subjects",
  isRoute: true,
  activePrefixes: [
    "/products/lite-bbe-course-subjects",
    "/products/lite-bbe-course-math",
    "/products/lite-bbe-course-english",
    "/practice",
  ],
};

const mockExamsItem: NavItem = {
  label: "Mock Exams",
  href: "/mock-exams",
  isRoute: true,
  activePrefixes: ["/mock-exams"],
};

const mockBuilderItem: NavItem = {
  label: "Mock Builder",
  href: "/products/custom-mock-builder",
  isRoute: true,
  activePrefixes: ["/products/custom-mock-builder"],
};

const gamesItem: NavItem = {
  label: "Games",
  href: "/dashboard",
  isRoute: true,
  search: { tab: "games" },
  activePrefixes: ["/flashcards", "/matching", "/tutor-exam"],
};

/** Logged out, demo-only, or signed-in without Lite/Full. Same on every page. */
export const guestNavItems: NavItem[] = [
  examInfoItem,
  demoPracticeItem,
  { label: "How it works", href: "#how-it-works", isRoute: false },
  productsItem,
  {
    label: "Features",
    href: "/important-features",
    isRoute: true,
    activePrefixes: ["/important-features", "/features"],
  },
  { label: "Reviews", href: "#reviews", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
];

/**
 * Build header links from course ownership.
 * Full Course / Light course appear only for the tiers the person owns;
 * both appear when they own both. Result does not depend on pathname.
 */
export function navItemsForAccess(access: AccountNavAccess): NavItem[] {
  if (!access.hasLite && !access.hasFull) return guestNavItems;

  const items: NavItem[] = [examInfoItem, demoCourseItem];
  if (access.hasFull) items.push(fullCourseItem);
  if (access.hasLite) items.push(lightCourseItem);
  items.push(mockExamsItem, mockBuilderItem, gamesItem, productsItem);
  return items;
}

/** @deprecated Use navItemsForAccess. */
export function navItemsForTier(tier: AccountNavTier): NavItem[] {
  return navItemsForAccess({
    hasLite: tier === "lite",
    hasFull: tier === "full",
  });
}

/** @deprecated Pathname no longer changes the header — status only. */
export function navItemsForContext(_pathname: string, tier: AccountNavTier): NavItem[] {
  return navItemsForTier(tier);
}

function searchRecord(search: unknown): Record<string, unknown> {
  if (!search) return {};
  if (typeof search === "string") {
    return Object.fromEntries(new URLSearchParams(search.startsWith("?") ? search.slice(1) : search));
  }
  if (typeof search === "object") return search as Record<string, unknown>;
  return {};
}

export function isNavItemActive(
  item: NavItem,
  pathname: string,
  search?: unknown,
): boolean {
  const matchesPrefix = (base: string) =>
    pathname === base || pathname.startsWith(`${base}/`);
  const matchesExact = (base: string) => pathname === base;

  if (item.activeExact?.some(matchesExact)) return true;
  if (item.activePrefixes?.some(matchesPrefix)) return true;

  if (!item.isRoute) return false;

  if (item.search) {
    if (!matchesExact(item.href)) return false;
    const params = searchRecord(search);
    return Object.entries(item.search).every(([key, value]) => String(params[key] ?? "") === value);
  }

  if (item.activeExact || item.activePrefixes) return false;
  return matchesPrefix(item.href);
}

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

export function shouldShowSiteNav(pathname: string, showNav?: boolean): boolean {
  if (showNav === false) return false;
  if (showNav === true) return true;
  return !AUTH_PATHS.has(normalizePathname(pathname));
}
