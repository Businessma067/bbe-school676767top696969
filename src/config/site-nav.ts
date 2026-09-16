import type { ExamTrack } from "@/lib/exam-track";

export type NavItem = {
  label: string;
  href: string;
  isRoute: boolean;
  search?: Record<string, string>;
  activeExact?: string[];
  activePrefixes?: string[];
};

export type AccountNavAccess = {
  hasLite: boolean;
  hasFull: boolean;
  /** Full WiSo Course enrollment (separate SKU from BBE Full). */
  hasWisoFull: boolean;
};

export type AccountNavTier = "guest" | "lite" | "full";

const BBE_EXAM_INFO_PREFIXES = [
  "/bbe-entrance-exam",
  "/bbe-entrance-exam-guide",
  "/bbe-exam-scoring",
  "/bbe-mathematics",
  "/bbe-economics-english",
  "/bbe-exam-preparation",
  "/bbe-admission",
  "/bbe-vs-wiso",
  "/wu-vienna",
];

const WISO_EXAM_INFO_PREFIXES = [
  "/wiso/entrance-exam",
  "/wiso/exam-scoring",
  "/wiso/mathematics",
  "/wiso/economics-german",
  "/wiso/exam-preparation",
  "/wiso/admission",
  "/bbe-vs-wiso",
  "/wiso/wu-vienna",
];

function examInfoItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Exam info",
        href: "/wiso/entrance-exam",
        isRoute: true,
        activePrefixes: WISO_EXAM_INFO_PREFIXES,
      }
    : {
        label: "Exam info",
        href: "/bbe-entrance-exam",
        isRoute: true,
        activePrefixes: BBE_EXAM_INFO_PREFIXES,
      };
}

function productsItem(_track: ExamTrack): NavItem {
  return {
    label: "Products",
    href: "/products",
    isRoute: true,
    activeExact: [
      "/products",
      "/products/lite-bbe-course",
      "/products/full-course",
      "/wiso/products",
      "/wiso/products/full-course",
    ],
  };
}

function demoPracticeItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Demo-Practice",
        href: "/wiso/demo-practice",
        isRoute: true,
        activePrefixes: ["/wiso/demo-practice"],
      }
    : {
        label: "Demo-Practice",
        href: "/demo-practice",
        isRoute: true,
        activePrefixes: ["/demo-practice", "/products/demo-practice"],
      };
}

function demoCourseItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Demo-course",
        href: "/wiso/demo-practice",
        isRoute: true,
        activePrefixes: ["/wiso/demo-practice"],
      }
    : {
        label: "Demo-course",
        href: "/demo-practice",
        isRoute: true,
        activePrefixes: ["/demo-practice", "/products/demo-practice"],
      };
}

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

const wisoFullCourseItem: NavItem = {
  label: "Full Course",
  href: "/wiso/products/full-course-subjects",
  isRoute: true,
  activePrefixes: [
    "/wiso/products/full-course-subjects",
    "/wiso/products/full-course-math",
    "/wiso/products/full-course-economics",
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

function mockExamsItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Mock Exams",
        href: "/wiso/mock-exams",
        isRoute: true,
        activePrefixes: ["/wiso/mock-exams"],
      }
    : {
        label: "Mock Exams",
        href: "/mock-exams",
        isRoute: true,
        activePrefixes: ["/mock-exams"],
      };
}

function mockBuilderItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Mock Builder",
        href: "/wiso/mock-builder",
        isRoute: true,
        activePrefixes: ["/wiso/mock-builder"],
      }
    : {
        label: "Mock Builder",
        href: "/products/custom-mock-builder",
        isRoute: true,
        activePrefixes: ["/products/custom-mock-builder"],
      };
}

function gamesItem(track: ExamTrack): NavItem {
  return track === "wiso"
    ? {
        label: "Study tools",
        href: "/wiso/flashcards",
        isRoute: true,
        activePrefixes: ["/wiso/flashcards"],
      }
    : {
        label: "Study tools",
        href: "/dashboard",
        isRoute: true,
        search: { tab: "games" },
        activePrefixes: ["/flashcards", "/matching", "/tutor-exam"],
      };
}

export function guestNavItems(track: ExamTrack = "bbe"): NavItem[] {
  return [
    examInfoItem(track),
    demoPracticeItem(track),
    {
      label: "How it works",
      href: track === "wiso" ? "/wiso#how-it-works" : "/bbe#how-it-works",
      isRoute: true,
    },
    productsItem(track),
    {
      label: "Features",
      href: track === "wiso" ? "/wiso#why-choose-us" : "/important-features",
      isRoute: true,
      activePrefixes: track === "wiso" ? undefined : ["/important-features", "/features"],
    },
    {
      label: "Reviews",
      href: track === "wiso" ? "/wiso#reviews" : "/bbe#reviews",
      isRoute: true,
    },
    {
      label: "FAQ",
      href: track === "wiso" ? "/wiso#faq" : "/bbe#faq",
      isRoute: true,
    },
  ];
}

export function navItemsForAccess(
  access: AccountNavAccess,
  track: ExamTrack = "bbe",
): NavItem[] {
  if (track === "wiso") {
    if (!access.hasWisoFull) return guestNavItems(track);
    return [
      examInfoItem(track),
      productsItem(track),
      demoCourseItem(track),
      wisoFullCourseItem,
      mockExamsItem(track),
      mockBuilderItem(track),
      gamesItem(track),
    ];
  }

  if (!access.hasLite && !access.hasFull) return guestNavItems(track);

  const items: NavItem[] = [examInfoItem(track), productsItem(track), demoCourseItem(track)];
  if (access.hasLite) items.push(lightCourseItem);
  if (access.hasFull) items.push(fullCourseItem);
  items.push(mockExamsItem(track), mockBuilderItem(track), gamesItem(track));
  return items;
}

export function navItemsForTier(tier: AccountNavTier): NavItem[] {
  return navItemsForAccess({
    hasLite: tier === "lite",
    hasFull: tier === "full",
    hasWisoFull: false,
  });
}

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
    if (!matchesExact(item.href.split("#")[0] ?? item.href)) return false;
    const params = searchRecord(search);
    return Object.entries(item.search).every(([key, value]) => String(params[key] ?? "") === value);
  }

  if (item.activeExact || item.activePrefixes) return false;
  const hrefPath = item.href.split("#")[0] || "/";
  return matchesPrefix(hrefPath);
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
