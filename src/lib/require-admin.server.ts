import { createMiddleware } from "@tanstack/react-start";
import { isAdminEmail } from "@/lib/admin-access";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function hasServiceRoleKey(): boolean {
  return Boolean(
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.SUPABASE_SECRET_KEY?.trim(),
  );
}

/**
 * Server gate: hardcoded admin emails.
 * Prefers the service-role client when configured; otherwise falls back to the
 * caller's JWT client (RLS + admin_list_users) so Lovable works without the secret.
 */
export const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const callerEmail = typeof context.claims.email === "string" ? context.claims.email : "";
    if (!isAdminEmail(callerEmail)) {
      throw new Error("Forbidden");
    }

    if (hasServiceRoleKey()) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      return next({
        context: {
          ...context,
          supabaseAdmin,
          adminUsesServiceRole: true,
        },
      });
    }

    return next({
      context: {
        ...context,
        // Authenticated admin client — SELECT via is_admin_caller() policies / RPCs.
        supabaseAdmin: context.supabase,
        adminUsesServiceRole: false,
      },
    });
  });
