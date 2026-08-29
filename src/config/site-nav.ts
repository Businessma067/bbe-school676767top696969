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

/** Homepage menu — marketing sections that match on-page anchors. */
export const homeNavItems: NavItem[] = [
  {
    label: "Demo-Practice",
    href: "/demo-practice",
    isRoute: true,
    activePrefixes: ["/demo-practice", "/products/demo-practice"],
  },
  { label: "Full Course", href: "#full-course", isRoute: false },
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

/** Logged out (and signed-in users who have not bought Lite or Full). */
export const guestNavItems: NavItem[] = [
  examInfoItem,
  {
    label: "Demo Practice",
    href: "/demo-practice",
    isRoute: true,
    activePrefixes: ["/demo-practice", "/products/demo-practice"],
  },
  productsItem,
  {
    label: "Features",
    href: "/important-features",
    isRoute: true,
    activePrefixes: ["/important-features", "/features"],
  },
  { label: "FAQ", href: "#faq", isRoute: false },
];

/** Lite course owners. */
export const liteNavItems: NavItem[] = [
  examInfoItem,
  productsItem,
  {
    label: "Practice",
    href: "/products/lite-bbe-course-subjects",
    isRoute: true,
    activePrefixes: [
      "/products/lite-bbe-course-subjects",
      "/products/lite-bbe-course-math",
      "/products/lite-bbe-course-english",
      "/practice",
    ],
  },
  {
    label: "Mock Exams",
    href: "/mock-exams",
    isRoute: true,
    activePrefixes: ["/mock-exams"],
  },
];

/** Full course owners (and signed-in users who should see the course chrome). */
export const fullNavItems: NavItem[] = [
  examInfoItem,
  {
    label: "Demo-course",
    href: "/demo-practice",
    isRoute: true,
    activePrefixes: ["/demo-practice", "/products/demo-practice"],
  },
  productsItem,
  {
    label: "Practice",
    href: "/products/full-course-subjects",
    isRoute: true,
    activePrefixes: [
      "/products/full-course-subjects",
      "/products/full-course-math",
      "/products/full-course-english",
      "/products/full-course-economics",
      "/practice",
    ],
  },
  {
    label: "Mock Exams",
    href: "/mock-exams",
    isRoute: true,
    activePrefixes: ["/mock-exams"],
  },
  {
    label: "Mock Builder",
    href: "/products/custom-mock-builder",
    isRoute: true,
    activePrefixes: ["/products/custom-mock-builder"],
  },
  {
    label: "Games",
    href: "/dashboard",
    isRoute: true,
    search: { tab: "games" },
    activePrefixes: ["/flashcards", "/matching", "/tutor-exam"],
  },
];

export function navItemsForTier(tier: AccountNavTier): NavItem[] {
  if (tier === "full") return fullNavItems;
  if (tier === "lite") return liteNavItems;
  return guestNavItems;
}

/**
 * Guests on the homepage get marketing anchors; signed-in users (lite/full)
 * keep their course nav (Practice, Mock Exams, …) on every page including `/`.
 */
export function navItemsForContext(pathname: string, tier: AccountNavTier): NavItem[] {
  if (normalizePathname(pathname) === "/" && tier === "guest") return homeNavItems;
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
