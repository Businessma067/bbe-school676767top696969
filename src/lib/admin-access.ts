/** Hardcoded admin accounts — full panel access, no env or SQL setup required. */
export const ADMIN_EMAILS = [
  "georgtyrin@gmail.com",
  "info@spray-go.com",
] as const;

/** @deprecated Prefer ADMIN_EMAILS / isAdminEmail — kept for older call sites. */
export const ADMIN_EMAIL = ADMIN_EMAILS[0];

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalized = normalizeEmail(email);
  return ADMIN_EMAILS.some((admin) => normalizeEmail(admin) === normalized);
}

export type AppRole = "admin" | "student" | "user";

export function resolveAppRole(email: string, dbRole: AppRole): AppRole {
  if (isAdminEmail(email)) return "admin";
  return dbRole;
}
