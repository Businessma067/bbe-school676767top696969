import { ADMIN_EMAILS, isAdminEmail, normalizeEmail } from "@/lib/admin-access";

/**
 * Hard site lockdown: only these accounts unlock Full Course, Lite practice,
 * flashcards, matching, tutor, mocks, and related study tools.
 * Everyone else may use Demo Practice only.
 *
 * GeorgeTuring → georgtyrin@gmail.com
 * InfoSprayGo → info@spray-go.com
 * Lovable workspace → sign in with one of the emails above in the Lovable
 * preview/editor (same allowlist; preview URLs are not an open bypass).
 */
export const FULL_SITE_EMAILS = [...ADMIN_EMAILS] as const;

export const DEMO_ONLY_HREF = "/demo-practice" as const;

/** Prefixes that require a full-site account (not demo). */
export const FULL_SITE_PATH_PREFIXES = [
  "/flashcards",
  "/matching",
  "/tutor-exam",
  "/mock-exams",
  "/practice",
  "/dashboard",
  "/products/full-course-subjects",
  "/products/full-course-math",
  "/products/full-course-english",
  "/products/full-course-economics",
  "/products/custom-mock-builder",
  "/products/lite-bbe-course-subjects",
  "/products/lite-bbe-course-math",
  "/products/lite-bbe-course-english",
  "/admin",
] as const;

export function isFullSiteEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalized = normalizeEmail(email);
  if (isAdminEmail(normalized)) return true;
  return FULL_SITE_EMAILS.some((allowed) => normalizeEmail(allowed) === normalized);
}

/** True when the browser is on a Lovable preview/editor host. */
export function isLovableWorkspaceHost(
  hostname: string = typeof window !== "undefined" ? window.location.hostname : "",
): boolean {
  const zones = [
    "lovableproject.com",
    "lovableproject-dev.com",
    "lovable.app",
    "gpt-eng.com",
    "gptengineer.run",
  ];
  return zones.some((z) => hostname === z || hostname.endsWith(`.${z}`));
}

/** Full content is allowlisted accounts only (incl. when using Lovable workspace). */
export function hasFullSiteAccess(email: string | null | undefined): boolean {
  return isFullSiteEmail(email);
}

export function isFullSiteProtectedPath(pathname: string): boolean {
  const path = pathname.split("?")[0] || "/";
  const normalized = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return FULL_SITE_PATH_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}
