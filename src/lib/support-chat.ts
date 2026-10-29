import {
  adminApplySupportSchemaFn,
  adminSupportInboxFn,
  adminSupportReplyFn,
  adminSupportStatusFn,
  adminSupportThreadFn,
  adminSupportUnreadFn,
  supportPull,
  supportSend,
  supportUnread,
  type SupportInboxRow,
  type SupportMessage,
} from "@/lib/support-chat.functions";

const KEY = "bbe.supportVisitor";

export type { SupportInboxRow, SupportMessage };

export function supportVisitorKey(): string {
  if (typeof localStorage === "undefined") return crypto.randomUUID();
  const existing = localStorage.getItem(KEY);
  if (existing && existing.length >= 16) return existing;
  const next = crypto.randomUUID();
  localStorage.setItem(KEY, next);
  return next;
}

export async function pullSupportMessages(): Promise<SupportMessage[]> {
  return supportPull({ data: { visitorKey: supportVisitorKey() } });
}

export async function supportHasReply(): Promise<boolean> {
  if (typeof localStorage === "undefined") return false;
  const key = localStorage.getItem(KEY);
  if (!key) return false;
  try {
    return await supportUnread({ data: { visitorKey: key } });
  } catch {
    return false;
  }
}

export async function sendSupportMessage(body: string): Promise<void> {
  await supportSend({ data: { visitorKey: supportVisitorKey(), body } });
}

export async function adminSupportUnread(): Promise<number> {
  try {
    return await adminSupportUnreadFn();
  } catch {
    return 0;
  }
}

export async function adminSupportInbox(): Promise<SupportInboxRow[]> {
  return adminSupportInboxFn();
}

export async function adminSupportThread(threadId: string): Promise<SupportMessage[]> {
  return adminSupportThreadFn({ data: { threadId } });
}

export async function adminSupportReply(threadId: string, body: string): Promise<void> {
  await adminSupportReplyFn({ data: { threadId, body } });
}

export async function adminSupportStatus(): Promise<{
  ready: boolean;
  mode: "postgres" | "tables" | "rpc" | "file" | "none";
  hint: string | null;
}> {
  return adminSupportStatusFn();
}

export async function adminApplySupportSchema(): Promise<
  { ok: true } | { ok: false; error: string }
> {
  return adminApplySupportSchemaFn();
}
