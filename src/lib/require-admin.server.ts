import { createMiddleware } from "@tanstack/react-start";
import { isAdminEmail } from "@/lib/admin-access";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Server gate: logged-in user must be the hardcoded admin email. */
export const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const callerEmail = typeof context.claims.email === "string" ? context.claims.email : "";
    if (!isAdminEmail(callerEmail)) {
      throw new Error("Forbidden");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    return next({
      context: {
        ...context,
        supabaseAdmin,
      },
    });
  });
