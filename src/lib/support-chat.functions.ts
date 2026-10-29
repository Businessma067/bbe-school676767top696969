import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/require-admin.server";
import {
  adminSupportInboxRows,
  adminSupportReplyMessage,
  adminSupportThreadMessages,
  adminSupportUnreadCount,
  supportBackendStatus,
  supportPullMessages,
  supportSendMessage,
  supportUnreadFlag,
  type SupportInboxRow,
  type SupportMessage,
} from "@/lib/support-store.server";

const KeyInput = z.object({
  visitorKey: z.string().min(16).max(80),
});

const SendInput = KeyInput.extend({
  body: z.string().min(1).max(2000),
});

const ThreadInput = z.object({
  threadId: z.string().uuid(),
});

const ReplyInput = ThreadInput.extend({
  body: z.string().min(1).max(2000),
});

function bearerToken(): string | null {
  const header = getRequestHeader("authorization");
  if (!header?.startsWith("Bearer ")) return null;
  const token = header.slice("Bearer ".length).trim();
  return token || null;
}

function claimsEmail(claims: Record<string, unknown> | undefined): string | null {
  const email = claims?.email;
  return typeof email === "string" ? email : null;
}

function emailFromJwt(token: string): string | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    const padded = part.replace(/-/g, "+").replace(/_/g, "/");
    const json =
      typeof atob === "function" ? atob(padded) : Buffer.from(padded, "base64").toString("utf8");
    const payload = JSON.parse(json) as { email?: string };
    return typeof payload.email === "string" ? payload.email : null;
  } catch {
    return null;
  }
}

async function optionalCaller(): Promise<{
  userId: string | null;
  userEmail: string | null;
  token: string | null;
}> {
  const token = bearerToken();
  if (!token) return { userId: null, userEmail: null, token: null };
  try {
    const { getAuthenticatedUserId } = await import("@/lib/require-auth.server");
    const { getRequest } = await import("@tanstack/react-start/server");
    const userId = await getAuthenticatedUserId(getRequest());
    return { userId, userEmail: emailFromJwt(token), token };
  } catch {
    return { userId: null, userEmail: emailFromJwt(token), token };
  }
}

export type { SupportInboxRow, SupportMessage };

/** Public: load messages for a visitor key (creates empty thread when using storage). */
export const supportPull = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => KeyInput.parse(d))
  .handler(async ({ data }): Promise<SupportMessage[]> => {
    const caller = await optionalCaller();
    return supportPullMessages(data.visitorKey, {
      userId: caller.userId,
      userEmail: caller.userEmail,
      accessToken: caller.token,
    });
  });

/** Public: whether the visitor has an unread admin reply. */
export const supportUnread = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => KeyInput.parse(d))
  .handler(async ({ data }): Promise<boolean> => {
    return supportUnreadFlag(data.visitorKey);
  });

/** Public: send a visitor/user message into support. */
export const supportSend = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => SendInput.parse(d))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const caller = await optionalCaller();
    await supportSendMessage(data.visitorKey, data.body, {
      userId: caller.userId,
      userEmail: caller.userEmail,
      accessToken: caller.token,
    });
    return { ok: true };
  });

/** Admin: unread conversation count for the nav badge. */
export const adminSupportUnreadFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async (): Promise<number> => {
    const token = bearerToken();
    if (!token) return 0;
    return adminSupportUnreadCount(token);
  });

/** Admin: inbox of conversations that have at least one message. */
export const adminSupportInboxFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async (): Promise<SupportInboxRow[]> => {
    const token = bearerToken();
    if (!token) throw new Error("Unauthorized");
    return adminSupportInboxRows(token);
  });

/** Admin: open one thread (marks admin_unread false). */
export const adminSupportThreadFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => ThreadInput.parse(d))
  .handler(async ({ data }): Promise<SupportMessage[]> => {
    const token = bearerToken();
    if (!token) throw new Error("Unauthorized");
    return adminSupportThreadMessages(token, data.threadId);
  });

/** Admin: reply into a thread (sets user_unread). */
export const adminSupportReplyFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => ReplyInput.parse(d))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const token = bearerToken();
    if (!token) throw new Error("Unauthorized");
    await adminSupportReplyMessage(token, data.threadId, data.body);
    return { ok: true };
  });

/** Admin: whether the support backend is ready. */
export const adminSupportStatusFn = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const token = bearerToken();
    const status = await supportBackendStatus(token);
    return {
      ...status,
      adminEmail: claimsEmail(context.claims as Record<string, unknown>),
    };
  });

/**
 * Admin: apply the support SQL migration when a Postgres URL secret is configured
 * (DATABASE_URL / SUPABASE_DB_URL / LOVABLE_DB_MIGRATION_URL).
 */
export const adminApplySupportSchemaFn = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async (): Promise<{ ok: true } | { ok: false; error: string }> => {
    const { getServerSecret } = await import("@/lib/server-secret.server");
    const url =
      (await getServerSecret("DATABASE_URL")) ||
      (await getServerSecret("SUPABASE_DB_URL")) ||
      (await getServerSecret("LOVABLE_DB_MIGRATION_URL")) ||
      process.env.DATABASE_URL?.trim() ||
      process.env.SUPABASE_DB_URL?.trim() ||
      process.env.LOVABLE_DB_MIGRATION_URL?.trim();

    if (!url) {
      return {
        ok: false,
        error:
          "No database URL secret. Add DATABASE_URL (Supabase → Settings → Database → URI) in Lovable Cloud Secrets, or paste the SQL manually.",
      };
    }

    try {
      const postgres = (await import("postgres")).default;
      const { SUPPORT_CHAT_SQL } = await import("@/lib/support-chat-sql");
      const sql = postgres(url, { max: 1, idle_timeout: 5, connect_timeout: 15 });
      try {
        await sql.unsafe(SUPPORT_CHAT_SQL);
      } finally {
        await sql.end({ timeout: 5 });
      }
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  });
