import { supabase } from "@/integrations/supabase/client";
import { resolveAppRole, type AppRole } from "@/lib/admin-access";

export type { AppRole };

export type AuthState = {
  userId: string;
  email: string;
  name: string;
  role: AppRole;
};

export function friendlyAuthError(error: unknown, fallback = "Something went wrong.") {
  if (error && typeof error === "object" && "message" in error) {
    const message = String((error as { message?: unknown }).message ?? "").trim();
    if (message) return message;
  }
  if (typeof error === "string" && error.trim()) return error;
  return fallback;
}

export async function getCurrentAuthState(): Promise<AuthState | null> {
  const sessionRes = await supabase.auth.getSession();
  if (!sessionRes.data.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;

  const user = data.user;
  const [profileRes, roleRes] = await Promise.all([
    supabase.from("profiles").select("display_name").eq("user_id", user.id).maybeSingle(),
    supabase.from("user_roles").select("role").eq("user_id", user.id).order("created_at", { ascending: true }),
  ]);

  const displayName = profileRes.data?.display_name?.trim();
  const metadataName =
    typeof user.user_metadata?.display_name === "string"
      ? user.user_metadata.display_name.trim()
      : typeof user.user_metadata?.name === "string"
        ? user.user_metadata.name.trim()
        : "";
  const email = user.email ?? "";
  const dbRole = (roleRes.data?.find((row) => row.role === "admin")?.role ??
    roleRes.data?.[0]?.role ??
    "student") as AppRole;
  const role = resolveAppRole(email, dbRole);

  return {
    userId: user.id,
    email,
    name: displayName || metadataName || email.split("@")[0] || "Account",
    role,
  };
}
