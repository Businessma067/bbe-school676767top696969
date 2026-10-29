/**
 * Last-resort support chat store on the server filesystem
 * (same pattern as admin-store). Used when Postgres / Supabase are unavailable.
 */
import { mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const STORE_DIR = path.join(process.cwd(), "data", "support-store");
const THREADS_DIR = path.join(STORE_DIR, "threads");

export type FileSupportMessage = {
  id: string;
  sender: "user" | "admin";
  body: string;
  created_at: string;
};

export type FileThread = {
  id: string;
  visitor_key: string;
  user_id: string | null;
  user_email: string | null;
  created_at: string;
  updated_at: string;
  admin_unread: boolean;
  user_unread: boolean;
  messages: FileSupportMessage[];
};

async function ensureDirs() {
  await mkdir(THREADS_DIR, { recursive: true });
}

function threadFile(visitorKey: string) {
  return path.join(THREADS_DIR, `${encodeURIComponent(visitorKey)}.json`);
}

async function readThread(visitorKey: string): Promise<FileThread | null> {
  try {
    const raw = await readFile(threadFile(visitorKey), "utf8");
    return JSON.parse(raw) as FileThread;
  } catch {
    return null;
  }
}

async function writeThread(thread: FileThread): Promise<void> {
  await ensureDirs();
  const file = threadFile(thread.visitor_key);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, JSON.stringify(thread), "utf8");
  await rename(tmp, file);
}

function newId() {
  return crypto.randomUUID();
}

export async function fileEnsureThread(
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<FileThread> {
  const existing = await readThread(visitorKey);
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
    if (dirty) await writeThread(existing);
    return existing;
  }
  const now = new Date().toISOString();
  const thread: FileThread = {
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
  await writeThread(thread);
  return thread;
}

export async function fileListThreads(): Promise<FileThread[]> {
  await ensureDirs();
  const names = await readdir(THREADS_DIR);
  const out: FileThread[] = [];
  for (const name of names) {
    if (!name.endsWith(".json")) continue;
    const key = decodeURIComponent(name.replace(/\.json$/, ""));
    const thread = await readThread(key);
    if (thread?.messages.length) out.push(thread);
  }
  out.sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
  return out.slice(0, 100);
}

export async function fileFindById(threadId: string): Promise<FileThread | null> {
  const threads = await fileListThreads();
  // also scan empty? need all files
  await ensureDirs();
  const names = await readdir(THREADS_DIR);
  for (const name of names) {
    if (!name.endsWith(".json")) continue;
    const key = decodeURIComponent(name.replace(/\.json$/, ""));
    const thread = await readThread(key);
    if (thread?.id === threadId) return thread;
  }
  return threads.find((t) => t.id === threadId) ?? null;
}

export async function filePull(
  visitorKey: string,
  userId: string | null,
  userEmail: string | null,
): Promise<FileSupportMessage[]> {
  const thread = await fileEnsureThread(visitorKey, userId, userEmail);
  thread.user_unread = false;
  await writeThread(thread);
  return thread.messages;
}

export async function fileUnread(visitorKey: string): Promise<boolean> {
  const thread = await readThread(visitorKey);
  return Boolean(thread?.user_unread);
}

export async function fileSend(
  visitorKey: string,
  body: string,
  userId: string | null,
  userEmail: string | null,
): Promise<void> {
  const thread = await fileEnsureThread(visitorKey, userId, userEmail);
  thread.messages.push({
    id: newId(),
    sender: "user",
    body,
    created_at: new Date().toISOString(),
  });
  thread.admin_unread = true;
  thread.user_unread = false;
  thread.updated_at = new Date().toISOString();
  await writeThread(thread);
}

export async function fileAdminUnread(): Promise<number> {
  const threads = await fileListThreads();
  return threads.filter((t) => t.admin_unread).length;
}

export async function fileAdminInbox() {
  const threads = await fileListThreads();
  return threads.map((t) => {
    const last = t.messages[t.messages.length - 1];
    return {
      id: t.id,
      updated_at: t.updated_at,
      admin_unread: t.admin_unread,
      user_email: t.user_email,
      last_body: last?.body ?? null,
      last_sender: last?.sender ?? null,
    };
  });
}

export async function fileAdminThread(threadId: string): Promise<FileSupportMessage[]> {
  const thread = await fileFindById(threadId);
  if (!thread) return [];
  thread.admin_unread = false;
  await writeThread(thread);
  return thread.messages;
}

export async function fileAdminReply(threadId: string, body: string): Promise<void> {
  const thread = await fileFindById(threadId);
  if (!thread) throw new Error("Conversation not found.");
  thread.messages.push({
    id: newId(),
    sender: "admin",
    body,
    created_at: new Date().toISOString(),
  });
  thread.user_unread = true;
  thread.admin_unread = false;
  thread.updated_at = new Date().toISOString();
  await writeThread(thread);
}
