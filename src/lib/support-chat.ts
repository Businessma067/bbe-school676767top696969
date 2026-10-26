import { supabase } from "@/integrations/supabase/client";

const rpc = (fn: string, args?: Record<string, unknown>) =>
  (
    supabase as unknown as {
      rpc: (
        name: string,
        params?: Record<string, unknown>,
      ) => Promise<{ data: unknown; error: { message: string } | null }>;
    }
  ).rpc(fn, args);

const KEY = "bbe.supportVisitor";

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

export function supportVisitorKey(): string {
  const existing = localStorage.getItem(KEY);
  if (existing && existing.length >= 16) return existing;
  const next = crypto.randomUUID();
  localStorage.setItem(KEY, next);
  return next;
}

export async function pullSupportMessages(): Promise<SupportMessage[]> {
  const { data, error } = await rpc("support_pull", { p_key: supportVisitorKey() });
  if (error) throw error;
  return (data ?? []) as SupportMessage[];
}

export async function supportHasReply(): Promise<boolean> {
  const key = localStorage.getItem(KEY);
  if (!key) return false;
  const { data, error } = await rpc("support_unread", { p_key: key });
  if (error) return false;
  return Boolean(data);
}

export async function sendSupportMessage(body: string): Promise<void> {
  const { error } = await rpc("support_send", {
    p_key: supportVisitorKey(),
    p_body: body,
  });
  if (error) throw error;
}

export async function adminSupportUnread(): Promise<number> {
  const { data, error } = await rpc("support_admin_unread");
  if (error) return 0;
  return Number(data ?? 0);
}

export async function adminSupportInbox(): Promise<SupportInboxRow[]> {
  const { data, error } = await rpc("support_admin_inbox");
  if (error) throw error;
  return (data ?? []) as SupportInboxRow[];
}

export async function adminSupportThread(threadId: string): Promise<SupportMessage[]> {
  const { data, error } = await rpc("support_admin_thread", { p_thread: threadId });
  if (error) throw error;
  return (data ?? []) as SupportMessage[];
}

export async function adminSupportReply(threadId: string, body: string): Promise<void> {
  const { error } = await rpc("support_admin_reply", {
    p_thread: threadId,
    p_body: body,
  });
  if (error) throw error;
}
