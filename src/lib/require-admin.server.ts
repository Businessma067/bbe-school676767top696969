import { createMiddleware } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function normalizeEmail(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

/** Server-only gate: bearer token + ADMIN_EMAIL env + admin role in user_roles. */
export const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const adminEmail = normalizeEmail(process.env.ADMIN_EMAIL);
    if (!adminEmail) {
      throw new Error("Admin access is not configured (ADMIN_EMAIL).");
    }

    const callerEmail = normalizeEmail(context.claims.email);
    if (!callerEmail || callerEmail !== adminEmail) {
      throw new Error("Forbidden");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: roleRow, error } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin")
      .maybeSingle();

    if (error || !roleRow) {
      throw new Error("Forbidden");
    }

    return next({
      context: {
        ...context,
        supabaseAdmin,
        adminEmail,
      },
    });
  });
