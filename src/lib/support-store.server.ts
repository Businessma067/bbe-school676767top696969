/**
 * Support chat persistence.
 *
 * Prefers Supabase Storage when SUPABASE_SERVICE_ROLE_KEY is available
 * (works without running the SQL migration). Falls back to the security-definer
 * RPCs from supabase/migrations/20261026120000_support_chat.sql.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getServerSecret } from "@/lib/server-secret.server";
import { isAdminEmail } from "@/lib/admin-access";

const BUCKET = "app-data";
const THREAD_PREFIX = "support/threads";

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

type ThreadRecord = {
  id: string;
  visitor_key: string;
  user_id: string | null;
  user_email: string | null;
  created_at: string;
  updated_at: string;
  admin_unread: boolean;
  user_unread: boolean;
  messages: SupportMessage[];
};

export const SUPPORT_SQL_HINT =
  "Open Supabase → SQL Editor, paste supabase/migrations/20261026120000_support_chat.sql, Run, then refresh. Or add SUPABASE_SERVICE_ROLE_KEY in Lovable Cloud → Secrets.";

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

function threadPath(visitorKey: string): string {
  return `${THREAD_PREFIX}/${encodeURIComponent(visitorKey)}.json`;
}

function newId(): string {
  return crypto.randomUUID();
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
    throw new Error("Supabase is not connected. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY.");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : undefined,
  });
}

async function readThread(db: SupabaseClient, visitorKey: string): Promise<ThreadRecord | null> {
  const { data, error } = await db.storage.from(BUCKET).download(threadPath(visitorKey));
  if (error || !data) return null;
  try {
    return JSON.parse(await data.text()) as ThreadRecord;
  } catch {
    return null;
  }
}

async function writeThread(db: SupabaseClient, thread: ThreadRecord): Promise<void> {
  const body = JSON.stringify(thread);
  const { error } = await db.storage.from(BUCKET).upload(threadPath(thread.visitor_key), body, {
    contentType: "application/json",
    upsert: true,
  });
  if (error) throw new Error(error.message || "Could not save support message.");
}

async function listStorageThreads(db: SupabaseClient): Promise<ThreadRecord[]> {
  const { data: files, error } = await db.storage.from(BUCKET).list(THREAD_PREFIX, {
    limit: 200,
    sortBy: { column: "updated_at", order: "desc" },
  });
  if (error) throw new Error(error.message || "Could not list support threads.");
  const out: ThreadRecord[] = [];
  for (const file of files ?? []) {
    if (!file.name?.endsWith(".json")) continue;
    const key = decodeURIComponent(file.name.replace(/\.json$/, ""));
    const thread = await readThread(db, key);
    if (thread && thread.messages.length > 0) out.push(thread);
  }
  out.sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
  return out.slice(0, 100);
}

async function ensureStorageThread(
  db: SupabaseClient,
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<ThreadRecord> {
  const existing = await readThread(db, visitorKey);
  if (existing) {
    let dirty = false;
    if (userId && !existing.user_id) {
      existing.user_id = userId;
      dirty = true;
    }
    if (userEmail && !existing.user_email) {
      existing.user_email = userEmail;
      dirty = true;
    }
    if (dirty) await writeThread(db, existing);
    return existing;
  }
  const now = new Date().toISOString();
  const thread: ThreadRecord = {
    id: newId(),
    visitor_key: visitorKey,
    user_id: userId,
    user_email: userEmail,
    created_at: now,
    updated_at: now,
    admin_unread: false,
    user_unread: false,
    messages: [],
  };
  await writeThread(db, thread);
  return thread;
}

async function findStorageThreadById(
  db: SupabaseClient,
  threadId: string,
): Promise<ThreadRecord | null> {
  const threads = await listStorageThreads(db);
  return threads.find((t) => t.id === threadId) ?? null;
}

/** Storage backend (service role). Returns null when unavailable. */
async function withStorage<T>(
  fn: (db: SupabaseClient) => Promise<T>,
): Promise<
  { ok: true; value: T } | { ok: false; reason: "no_service_role" | "error"; error?: string }
> {
  const db = await getAdminClient();
  if (!db) return { ok: false, reason: "no_service_role" };
  try {
    return { ok: true, value: await fn(db) };
  } catch (err) {
    return {
      ok: false,
      reason: "error",
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export async function supportPullMessages(
  visitorKey: string,
  opts?: { userId?: string | null; userEmail?: string | null; accessToken?: string | null },
): Promise<SupportMessage[]> {
  const key = assertKey(visitorKey);
  const storage = await withStorage(async (db) => {
    const thread = await ensureStorageThread(
      db,
      key,
      opts?.userId ?? null,
      opts?.userEmail ?? null,
    );
    thread.user_unread = false;
    await writeThread(db, thread);
    return thread.messages;
  });
  if (storage.ok) return storage.value;

  const client = getAnonClient(opts?.accessToken);
  const { data, error } = await client.rpc("support_pull" as never, { p_key: key } as never);
  if (error) {
    if (isMissingRpc(error)) throw new Error(SUPPORT_SQL_HINT);
    throw new Error(error.message);
  }
  return (data ?? []) as SupportMessage[];
}

export async function supportUnreadFlag(visitorKey: string): Promise<boolean> {
  const key = assertKey(visitorKey);
  const storage = await withStorage(async (db) => {
    const thread = await readThread(db, key);
    return Boolean(thread?.user_unread);
  });
  if (storage.ok) return storage.value;

  const client = getAnonClient();
  const { data, error } = await client.rpc("support_unread" as never, { p_key: key } as never);
  if (error) return false;
  return Boolean(data);
}

export async function supportSendMessage(
  visitorKey: string,
  body: string,
  opts?: { userId?: string | null; userEmail?: string | null; accessToken?: string | null },
): Promise<void> {
  const key = assertKey(visitorKey);
  const clean = assertBody(body);

  const storage = await withStorage(async (db) => {
    const thread = await ensureStorageThread(
      db,
      key,
      opts?.userId ?? null,
      opts?.userEmail ?? null,
    );
    thread.messages.push({
      id: newId(),
      sender: "user",
      body: clean,
      created_at: new Date().toISOString(),
    });
    thread.admin_unread = true;
    thread.user_unread = false;
    thread.updated_at = new Date().toISOString();
    await writeThread(db, thread);
  });
  if (storage.ok) return;
  if (storage.reason === "error" && storage.error && !/not found|bucket/i.test(storage.error)) {
    // Storage exists but failed for another reason — still try RPC.
  }

  const client = getAnonClient(opts?.accessToken);
  const { error } = await client.rpc(
    "support_send" as never,
    {
      p_key: key,
      p_body: clean,
    } as never,
  );
  if (error) {
    if (isMissingRpc(error)) throw new Error(SUPPORT_SQL_HINT);
    throw new Error(error.message);
  }
}

export async function adminSupportUnreadCount(accessToken: string): Promise<number> {
  const storage = await withStorage(async (db) => {
    const threads = await listStorageThreads(db);
    return threads.filter((t) => t.admin_unread).length;
  });
  if (storage.ok) return storage.value;

  const client = getAnonClient(accessToken);
  const { data, error } = await client.rpc("support_admin_unread" as never);
  if (error) return 0;
  return Number(data ?? 0);
}

export async function adminSupportInboxRows(accessToken: string): Promise<SupportInboxRow[]> {
  const storage = await withStorage(async (db) => {
    const threads = await listStorageThreads(db);
    return threads.map((t) => {
      const last = t.messages[t.messages.length - 1];
      return {
        id: t.id,
        updated_at: t.updated_at,
        admin_unread: t.admin_unread,
        user_email: t.user_email,
        last_body: last?.body ?? null,
        last_sender: last?.sender ?? null,
      } satisfies SupportInboxRow;
    });
  });
  if (storage.ok) return storage.value;

  const client = getAnonClient(accessToken);
  const { data, error } = await client.rpc("support_admin_inbox" as never);
  if (error) {
    if (isMissingRpc(error)) throw new Error(SUPPORT_SQL_HINT);
    throw new Error(error.message);
  }
  return (data ?? []) as SupportInboxRow[];
}

export async function adminSupportThreadMessages(
  accessToken: string,
  threadId: string,
): Promise<SupportMessage[]> {
  const storage = await withStorage(async (db) => {
    const thread = await findStorageThreadById(db, threadId);
    if (!thread) return [] as SupportMessage[];
    thread.admin_unread = false;
    await writeThread(db, thread);
    return thread.messages;
  });
  if (storage.ok) return storage.value;

  const client = getAnonClient(accessToken);
  const { data, error } = await client.rpc(
    "support_admin_thread" as never,
    {
      p_thread: threadId,
    } as never,
  );
  if (error) {
    if (isMissingRpc(error)) throw new Error(SUPPORT_SQL_HINT);
    throw new Error(error.message);
  }
  return (data ?? []) as SupportMessage[];
}

export async function adminSupportReplyMessage(
  accessToken: string,
  threadId: string,
  body: string,
): Promise<void> {
  const clean = assertBody(body);

  const storage = await withStorage(async (db) => {
    const thread = await findStorageThreadById(db, threadId);
    if (!thread) throw new Error("Conversation not found.");
    thread.messages.push({
      id: newId(),
      sender: "admin",
      body: clean,
      created_at: new Date().toISOString(),
    });
    thread.user_unread = true;
    thread.admin_unread = false;
    thread.updated_at = new Date().toISOString();
    await writeThread(db, thread);
  });
  if (storage.ok) return;

  const client = getAnonClient(accessToken);
  const { error } = await client.rpc(
    "support_admin_reply" as never,
    {
      p_thread: threadId,
      p_body: clean,
    } as never,
  );
  if (error) {
    if (isMissingRpc(error)) throw new Error(SUPPORT_SQL_HINT);
    throw new Error(error.message);
  }
}

export async function supportBackendStatus(accessToken?: string | null): Promise<{
  ready: boolean;
  mode: "storage" | "rpc" | "none";
  hint: string | null;
}> {
  const storage = await withStorage(async (db) => {
    // Probe bucket access with a harmless list.
    const { error } = await db.storage.from(BUCKET).list(THREAD_PREFIX, { limit: 1 });
    if (error) throw new Error(error.message);
    return true;
  });
  if (storage.ok) return { ready: true, mode: "storage", hint: null };

  try {
    const client = getAnonClient(accessToken);
    const { error } = await client.rpc(
      "support_unread" as never,
      {
        p_key: "00000000-0000-4000-8000-000000000099",
      } as never,
    );
    if (!error || !isMissingRpc(error)) {
      return { ready: true, mode: "rpc", hint: null };
    }
  } catch {
    /* fall through */
  }

  return { ready: false, mode: "none", hint: SUPPORT_SQL_HINT };
}

export function callerIsAdmin(email: string | null | undefined): boolean {
  return isAdminEmail(email);
}
