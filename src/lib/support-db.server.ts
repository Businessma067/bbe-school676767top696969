/**
 * Direct Postgres access for support chat (Lovable DB / DATABASE_URL / Supabase DB URI).
 * Prefer this over PostgREST RPCs so schema-cache lag cannot block the chat.
 */
import { getServerSecret } from "@/lib/server-secret.server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Sql = any;

let sqlPromise: Promise<Sql | null> | null = null;
let schemaReady = false;

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS public.support_threads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_key text NOT NULL UNIQUE,
  user_id uuid,
  user_email text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  admin_unread boolean NOT NULL DEFAULT false,
  user_unread boolean NOT NULL DEFAULT false
);
ALTER TABLE public.support_threads ADD COLUMN IF NOT EXISTS user_email text;
CREATE TABLE IF NOT EXISTS public.support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id uuid NOT NULL REFERENCES public.support_threads(id) ON DELETE CASCADE,
  sender text NOT NULL CHECK (sender IN ('user', 'admin')),
  body text NOT NULL CHECK (char_length(btrim(body)) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS support_messages_thread_idx
  ON public.support_messages (thread_id, created_at);
CREATE INDEX IF NOT EXISTS support_threads_updated_idx
  ON public.support_threads (updated_at DESC);
`;

async function resolveDatabaseUrl(): Promise<string | undefined> {
  const names = [
    "DATABASE_URL",
    "SUPABASE_DB_URL",
    "LOVABLE_DATABASE_URL",
    "LOVABLE_DB_URL",
    "LOVABLE_DB_MIGRATION_URL",
    "POSTGRES_URL",
    "POSTGRES_PRISMA_URL",
  ];
  for (const name of names) {
    const value = (await getServerSecret(name)) || process.env[name]?.trim();
    if (value) return value;
  }
  return undefined;
}

export async function getSupportSql(): Promise<Sql | null> {
  if (!sqlPromise) {
    sqlPromise = (async () => {
      const url = await resolveDatabaseUrl();
      if (!url) return null;
      try {
        const { default: createSql } = await import("postgres");
        return createSql(url, {
          max: 1,
          prepare: false,
          idle_timeout: 20,
          connect_timeout: 10,
          onnotice: () => undefined,
        });
      } catch (err) {
        console.error("[support-db] postgres connect failed", err);
        return null;
      }
    })();
  }
  return sqlPromise;
}

export async function ensureSupportSchema(sql: Sql): Promise<void> {
  if (schemaReady) return;
  await sql.unsafe(SCHEMA_SQL);
  schemaReady = true;
}

export type DbSupportMessage = {
  id: string;
  sender: "user" | "admin";
  body: string;
  created_at: string;
};

export type DbSupportInboxRow = {
  id: string;
  updated_at: string;
  admin_unread: boolean;
  user_email: string | null;
  last_body: string | null;
  last_sender: string | null;
};

export async function dbEnsureThread(
  sql: Sql,
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<string> {
  await ensureSupportSchema(sql);
  const existing = await sql<{ id: string }[]>`
    SELECT id FROM public.support_threads WHERE visitor_key = ${visitorKey} LIMIT 1
  `;
  if (existing[0]?.id) {
    const id = existing[0].id;
    if (userId || userEmail) {
      await sql`
        UPDATE public.support_threads
        SET
          user_id = COALESCE(user_id, ${userId}),
          user_email = COALESCE(user_email, ${userEmail})
        WHERE id = ${id}::uuid
      `;
    }
    return id;
  }
  const inserted = await sql<{ id: string }[]>`
    INSERT INTO public.support_threads (visitor_key, user_id, user_email)
    VALUES (${visitorKey}, ${userId}, ${userEmail})
    RETURNING id
  `;
  return inserted[0]!.id;
}

export async function dbPullMessages(
  sql: Sql,
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<DbSupportMessage[]> {
  const threadId = await dbEnsureThread(sql, visitorKey, userId, userEmail);
  await sql`
    UPDATE public.support_threads SET user_unread = false WHERE id = ${threadId}::uuid
  `;
  const rows = await sql<DbSupportMessage[]>`
    SELECT id::text, sender, body, created_at::text
    FROM public.support_messages
    WHERE thread_id = ${threadId}::uuid
    ORDER BY created_at ASC
  `;
  return rows.map((r: DbSupportMessage) => ({
    id: String(r.id),
    sender: r.sender === "admin" ? "admin" : "user",
    body: r.body,
    created_at: String(r.created_at),
  }));
}

export async function dbUnread(sql: Sql, visitorKey: string): Promise<boolean> {
  await ensureSupportSchema(sql);
  const rows = await sql<{ user_unread: boolean }[]>`
    SELECT user_unread FROM public.support_threads WHERE visitor_key = ${visitorKey} LIMIT 1
  `;
  return Boolean(rows[0]?.user_unread);
}

export async function dbSend(
  sql: Sql,
  visitorKey: string,
  body: string,
  userId: string | null,
  userEmail: string | null,
): Promise<void> {
  const threadId = await dbEnsureThread(sql, visitorKey, userId, userEmail);
  await sql`
    INSERT INTO public.support_messages (thread_id, sender, body)
    VALUES (${threadId}::uuid, 'user', ${body})
  `;
  await sql`
    UPDATE public.support_threads
    SET admin_unread = true, user_unread = false, updated_at = now()
    WHERE id = ${threadId}::uuid
  `;
}

export async function dbAdminUnread(sql: Sql): Promise<number> {
  await ensureSupportSchema(sql);
  const rows = await sql<{ count: string }[]>`
    SELECT count(*)::text AS count FROM public.support_threads WHERE admin_unread
  `;
  return Number(rows[0]?.count ?? 0);
}

export async function dbAdminInbox(sql: Sql): Promise<DbSupportInboxRow[]> {
  await ensureSupportSchema(sql);
  const rows = await sql<DbSupportInboxRow[]>`
    SELECT
      t.id::text AS id,
      t.updated_at::text AS updated_at,
      t.admin_unread,
      t.user_email,
      lm.body AS last_body,
      lm.sender AS last_sender
    FROM public.support_threads t
    INNER JOIN LATERAL (
      SELECT m.body, m.sender
      FROM public.support_messages m
      WHERE m.thread_id = t.id
      ORDER BY m.created_at DESC
      LIMIT 1
    ) lm ON true
    ORDER BY t.updated_at DESC
    LIMIT 100
  `;
  return rows.map((r: DbSupportInboxRow) => ({
    id: String(r.id),
    updated_at: String(r.updated_at),
    admin_unread: Boolean(r.admin_unread),
    user_email: r.user_email,
    last_body: r.last_body,
    last_sender: r.last_sender,
  }));
}

export async function dbAdminThread(sql: Sql, threadId: string): Promise<DbSupportMessage[]> {
  await ensureSupportSchema(sql);
  await sql`
    UPDATE public.support_threads SET admin_unread = false WHERE id = ${threadId}::uuid
  `;
  const rows = await sql<DbSupportMessage[]>`
    SELECT id::text, sender, body, created_at::text
    FROM public.support_messages
    WHERE thread_id = ${threadId}::uuid
    ORDER BY created_at ASC
  `;
  return rows.map((r: DbSupportMessage) => ({
    id: String(r.id),
    sender: r.sender === "admin" ? "admin" : "user",
    body: r.body,
    created_at: String(r.created_at),
  }));
}

export async function dbAdminReply(sql: Sql, threadId: string, body: string): Promise<void> {
  await ensureSupportSchema(sql);
  const exists = await sql<{ id: string }[]>`
    SELECT id::text FROM public.support_threads WHERE id = ${threadId}::uuid LIMIT 1
  `;
  if (!exists[0]) throw new Error("Conversation not found.");
  await sql`
    INSERT INTO public.support_messages (thread_id, sender, body)
    VALUES (${threadId}::uuid, 'admin', ${body})
  `;
  await sql`
    UPDATE public.support_threads
    SET user_unread = true, admin_unread = false, updated_at = now()
    WHERE id = ${threadId}::uuid
  `;
}
