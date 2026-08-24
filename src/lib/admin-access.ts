/** Hardcoded admin account — no env or SQL setup required. */
export const ADMIN_EMAIL = "georgtyrin@gmail.com";

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return normalizeEmail(email) === normalizeEmail(ADMIN_EMAIL);
}

export type AppRole = "admin" | "student" | "user";

export function resolveAppRole(email: string, dbRole: AppRole): AppRole {
  if (isAdminEmail(email)) return "admin";
  return dbRole;
}
