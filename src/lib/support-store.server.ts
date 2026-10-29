/**
 * Support chat persistence — tries every available backend:
 * 1) Lovable/Postgres DATABASE_URL (direct SQL, self-heals schema)
 * 2) Supabase service-role table access
 * 3) Supabase SECURITY DEFINER RPCs
 * 4) Server filesystem store (last resort, same idea as admin-store)
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getServerSecret } from "@/lib/server-secret.server";
import { isAdminEmail } from "@/lib/admin-access";
import {
  dbAdminInbox,
  dbAdminReply,
  dbAdminThread,
  dbAdminUnread,
  dbPullMessages,
  dbSend,
  dbUnread,
  getSupportSql,
} from "@/lib/support-db.server";
import {
  fileAdminInbox,
  fileAdminReply,
  fileAdminThread,
  fileAdminUnread,
  filePull,
  fileSend,
  fileUnread,
} from "@/lib/support-file-store.server";

export type SupportMessage = {
  id: string;
  sender: "user" | "admin";
  body: string;
  created_at: string;
};

export type SupportInboxRow = {
  id: string;
  updated_at: string;
  admin_unread: boolean;
  user_email: string | null;
  last_body: string | null;
  last_sender: string | null;
};

export const SUPPORT_SQL_HINT =
  "Support schema is provisioning via Lovable drizzle migration 0004_support_chat. Wait for Cloud sync, or add DATABASE_URL / SUPABASE_SERVICE_ROLE_KEY in Lovable Secrets.";

function assertKey(key: string): string {
  const clean = key.trim();
  if (clean.length < 16 || clean.length > 80) {
    throw new Error("Invalid support visitor key.");
  }
  return clean;
}

function assertBody(body: string): string {
  const clean = body.trim();
  if (clean.length < 1 || clean.length > 2000) {
    throw new Error("Message must be 1–2000 characters.");
  }
  return clean;
}

function isMissingRpc(error: { message?: string; code?: string } | null): boolean {
  if (!error) return false;
  const msg = (error.message ?? "").toLowerCase();
  return (
    error.code === "PGRST202" ||
    msg.includes("could not find the function") ||
    msg.includes("schema cache")
  );
}

function isMissingTable(error: { message?: string; code?: string } | null): boolean {
  if (!error) return false;
  const msg = (error.message ?? "").toLowerCase();
  return (
    error.code === "PGRST205" ||
    error.code === "42P01" ||
    msg.includes("could not find the table") ||
    msg.includes("does not exist")
  );
}

async function resolveServiceRoleKey(): Promise<string | undefined> {
  return (
    (await getServerSecret("SUPABASE_SERVICE_ROLE_KEY")) ||
    (await getServerSecret("SUPABASE_SECRET_KEY"))
  );
}

async function getAdminClient(): Promise<SupabaseClient | null> {
  const url = (await getServerSecret("SUPABASE_URL")) || process.env.SUPABASE_URL?.trim();
  const key = await resolveServiceRoleKey();
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function getAnonClient(accessToken?: string | null): SupabaseClient {
  const url = process.env.SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();
  if (!url || !key) {
    throw new Error("Supabase is not connected.");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : undefined,
  });
}

async function withPg<T>(
  fn: (sql: NonNullable<Awaited<ReturnType<typeof getSupportSql>>>) => Promise<T>,
): Promise<{ ok: true; value: T } | { ok: false }> {
  try {
    const sql = await getSupportSql();
    if (!sql) return { ok: false };
    return { ok: true, value: await fn(sql) };
  } catch (err) {
    console.error("[support] postgres backend failed", err);
    return { ok: false };
  }
}

async function tableEnsureThread(
  db: SupabaseClient,
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<string> {
  const { data: existing } = await db
    .from("support_threads" as never)
    .select("id")
    .eq("visitor_key", visitorKey)
    .maybeSingle();
  const row = existing as { id?: string } | null;
  if (row?.id) {
    if (userId || userEmail) {
      await db
        .from("support_threads" as never)
        .update({
          ...(userId ? { user_id: userId } : {}),
          ...(userEmail ? { user_email: userEmail } : {}),
        } as never)
        .eq("id", row.id)
        .is("user_id", null);
    }
    return row.id;
  }
  const { data, error } = await db
    .from("support_threads" as never)
    .insert({
      visitor_key: visitorKey,
      user_id: userId,
      user_email: userEmail,
    } as never)
    .select("id")
    .single();
  if (error) throw error;
  return String((data as { id: string }).id);
}

async function withTables<T>(
  fn: (db: SupabaseClient) => Promise<T>,
): Promise<{ ok: true; value: T } | { ok: false }> {
  const db = await getAdminClient();
  if (!db) return { ok: false };
  try {
    return { ok: true, value: await fn(db) };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (!isMissingTable({ message })) {
      console.error("[support] table backend failed", err);
    }
    return { ok: false };
  }
}

export async function supportPullMessages(
  visitorKey: string,
  opts?: { userId?: string | null; userEmail?: string | null; accessToken?: string | null },
): Promise<SupportMessage[]> {
  const key = assertKey(visitorKey);
  const userId = opts?.userId ?? null;
  const userEmail = opts?.userEmail ?? null;

  const pg = await withPg((sql) => dbPullMessages(sql, key, userId, userEmail));
  if (pg.ok) return pg.value;

  const tables = await withTables(async (db) => {
    const threadId = await tableEnsureThread(db, key, userId, userEmail);
    await db
      .from("support_threads" as never)
      .update({ user_unread: false } as never)
      .eq("id", threadId);
    const { data, error } = await db
      .from("support_messages" as never)
      .select("id, sender, body, created_at")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data ?? []) as SupportMessage[];
  });
  if (tables.ok) return tables.value;

  try {
    const client = getAnonClient(opts?.accessToken);
    const { data, error } = await client.rpc("support_pull" as never, { p_key: key } as never);
    if (!error) return (data ?? []) as SupportMessage[];
    if (!isMissingRpc(error)) throw new Error(error.message);
  } catch (err) {
    if (!(err instanceof Error) || !/not connected|Missing Supabase/i.test(err.message)) {
      /* fall through to file */
    }
  }

  return filePull(key, userId, userEmail);
}

export async function supportUnreadFlag(visitorKey: string): Promise<boolean> {
  const key = assertKey(visitorKey);
  const pg = await withPg((sql) => dbUnread(sql, key));
  if (pg.ok) return pg.value;

  const tables = await withTables(async (db) => {
    const { data, error } = await db
      .from("support_threads" as never)
      .select("user_unread")
      .eq("visitor_key", key)
      .maybeSingle();
    if (error) throw error;
    return Boolean((data as { user_unread?: boolean } | null)?.user_unread);
  });
  if (tables.ok) return tables.value;

  try {
    const client = getAnonClient();
    const { data, error } = await client.rpc("support_unread" as never, { p_key: key } as never);
    if (!error) return Boolean(data);
  } catch {
    /* file */
  }

  return fileUnread(key);
}

export async function supportSendMessage(
  visitorKey: string,
  body: string,
  opts?: { userId?: string | null; userEmail?: string | null; accessToken?: string | null },
): Promise<void> {
  const key = assertKey(visitorKey);
  const clean = assertBody(body);
  const userId = opts?.userId ?? null;
  const userEmail = opts?.userEmail ?? null;

  const pg = await withPg(async (sql) => {
    await dbSend(sql, key, clean, userId, userEmail);
  });
  if (pg.ok) return;

  const tables = await withTables(async (db) => {
    const threadId = await tableEnsureThread(db, key, userId, userEmail);
    const { error: insertError } = await db.from("support_messages" as never).insert({
      thread_id: threadId,
      sender: "user",
      body: clean,
    } as never);
    if (insertError) throw insertError;
    const { error: updateError } = await db
      .from("support_threads" as never)
      .update({
        admin_unread: true,
        user_unread: false,
        updated_at: new Date().toISOString(),
      } as never)
      .eq("id", threadId);
    if (updateError) throw updateError;
  });
  if (tables.ok) return;

  try {
    const client = getAnonClient(opts?.accessToken);
    const { error } = await client.rpc(
      "support_send" as never,
      { p_key: key, p_body: clean } as never,
    );
    if (!error) return;
    if (!isMissingRpc(error)) throw new Error(error.message);
  } catch (err) {
    if (err instanceof Error && !isMissingRpc({ message: err.message })) {
      // continue to file unless it's a hard non-missing error from RPC after tables failed
    }
  }

  await fileSend(key, clean, userId, userEmail);
}

export async function adminSupportUnreadCount(accessToken: string): Promise<number> {
  const pg = await withPg((sql) => dbAdminUnread(sql));
  if (pg.ok) return pg.value;

  const tables = await withTables(async (db) => {
    const { count, error } = await db
      .from("support_threads" as never)
      .select("id", { count: "exact", head: true })
      .eq("admin_unread", true);
    if (error) throw error;
    return Number(count ?? 0);
  });
  if (tables.ok) return tables.value;

  try {
    const client = getAnonClient(accessToken);
    const { data, error } = await client.rpc("support_admin_unread" as never);
    if (!error) return Number(data ?? 0);
  } catch {
    /* file */
  }

  return fileAdminUnread();
}

export async function adminSupportInboxRows(accessToken: string): Promise<SupportInboxRow[]> {
  const pg = await withPg((sql) => dbAdminInbox(sql));
  if (pg.ok) return pg.value;

  const tables = await withTables(async (db) => {
    const { data: threads, error } = await db
      .from("support_threads" as never)
      .select("id, updated_at, admin_unread, user_email")
      .order("updated_at", { ascending: false })
      .limit(100);
    if (error) throw error;
    const rows: SupportInboxRow[] = [];
    for (const t of (threads ?? []) as Array<{
      id: string;
      updated_at: string;
      admin_unread: boolean;
      user_email: string | null;
    }>) {
      const { data: last } = await db
        .from("support_messages" as never)
        .select("body, sender")
        .eq("thread_id", t.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      const msg = last as { body?: string; sender?: string } | null;
      if (!msg?.body) continue;
      rows.push({
        id: t.id,
        updated_at: t.updated_at,
        admin_unread: t.admin_unread,
        user_email: t.user_email,
        last_body: msg.body,
        last_sender: msg.sender ?? null,
      });
    }
    return rows;
  });
  if (tables.ok) return tables.value;

  try {
    const client = getAnonClient(accessToken);
    const { data, error } = await client.rpc("support_admin_inbox" as never);
    if (!error) return (data ?? []) as SupportInboxRow[];
    if (!isMissingRpc(error)) throw new Error(error.message);
  } catch {
    /* file */
  }

  return fileAdminInbox();
}

export async function adminSupportThreadMessages(
  accessToken: string,
  threadId: string,
): Promise<SupportMessage[]> {
  const pg = await withPg((sql) => dbAdminThread(sql, threadId));
  if (pg.ok) return pg.value;

  const tables = await withTables(async (db) => {
    await db
      .from("support_threads" as never)
      .update({ admin_unread: false } as never)
      .eq("id", threadId);
    const { data, error } = await db
      .from("support_messages" as never)
      .select("id, sender, body, created_at")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data ?? []) as SupportMessage[];
  });
  if (tables.ok) return tables.value;

  try {
    const client = getAnonClient(accessToken);
    const { data, error } = await client.rpc(
      "support_admin_thread" as never,
      { p_thread: threadId } as never,
    );
    if (!error) return (data ?? []) as SupportMessage[];
    if (!isMissingRpc(error)) throw new Error(error.message);
  } catch {
    /* file */
  }

  return fileAdminThread(threadId);
}

export async function adminSupportReplyMessage(
  accessToken: string,
  threadId: string,
  body: string,
): Promise<void> {
  const clean = assertBody(body);

  const pg = await withPg(async (sql) => {
    await dbAdminReply(sql, threadId, clean);
  });
  if (pg.ok) return;

  const tables = await withTables(async (db) => {
    const { error: insertError } = await db.from("support_messages" as never).insert({
      thread_id: threadId,
      sender: "admin",
      body: clean,
    } as never);
    if (insertError) throw insertError;
    const { error: updateError } = await db
      .from("support_threads" as never)
      .update({
        user_unread: true,
        admin_unread: false,
        updated_at: new Date().toISOString(),
      } as never)
      .eq("id", threadId);
    if (updateError) throw updateError;
  });
  if (tables.ok) return;

  try {
    const client = getAnonClient(accessToken);
    const { error } = await client.rpc(
      "support_admin_reply" as never,
      { p_thread: threadId, p_body: clean } as never,
    );
    if (!error) return;
    if (!isMissingRpc(error)) throw new Error(error.message);
  } catch {
    /* file */
  }

  await fileAdminReply(threadId, clean);
}

export async function supportBackendStatus(accessToken?: string | null): Promise<{
  ready: boolean;
  mode: "postgres" | "tables" | "rpc" | "file" | "none";
  hint: string | null;
}> {
  const pg = await withPg(async (sql) => {
    await sql`select 1 as ok`;
    return true;
  });
  if (pg.ok) return { ready: true, mode: "postgres", hint: null };

  const tables = await withTables(async (db) => {
    const { error } = await db
      .from("support_threads" as never)
      .select("id")
      .limit(1);
    if (error) throw error;
    return true;
  });
  if (tables.ok) return { ready: true, mode: "tables", hint: null };

  try {
    const client = getAnonClient(accessToken);
    const { error } = await client.rpc(
      "support_unread" as never,
      { p_key: "00000000-0000-4000-8000-000000000099" } as never,
    );
    if (!error || !isMissingRpc(error)) {
      return { ready: true, mode: "rpc", hint: null };
    }
  } catch {
    /* file always ready */
  }

  // File store is always available on the server.
  return { ready: true, mode: "file", hint: null };
}

export function callerIsAdmin(email: string | null | undefined): boolean {
  return isAdminEmail(email);
}
