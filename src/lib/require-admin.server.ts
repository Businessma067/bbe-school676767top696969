import { createMiddleware } from "@tanstack/react-start";
import { isAdminEmail } from "@/lib/admin-access";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Server gate: hardcoded admin emails + Supabase service-role client (same as original admin panel). */
export const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const callerEmail = typeof context.claims.email === "string" ? context.claims.email : "";
    if (!isAdminEmail(callerEmail)) {
      throw new Error("Forbidden");
    }

    const hasServiceRole = Boolean(
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.SUPABASE_SECRET_KEY?.trim(),
    );
    if (!hasServiceRole) {
      throw new Error(
        "Supabase service role не подключен. В Lovable Cloud / .env добавьте SUPABASE_SERVICE_ROLE_KEY (Project Settings → API → service_role).",
      );
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    return next({
      context: {
        ...context,
        supabaseAdmin,
      },
    });
  });
