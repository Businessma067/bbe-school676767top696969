import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type ActivityEventType = Database["public"]["Enums"]["activity_event_type"];

let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let lastPath = "";
let syncDone = false;

async function currentUserId(): Promise<string | null> {
  const { data } = await supabase.auth.getSession();
  return data.session?.user?.id ?? null;
}

export async function trackPresence(path: string): Promise<void> {
  const userId = await currentUserId();
  if (!userId || typeof window === "undefined") return;

  await supabase.from("user_presence").upsert(
    {
      user_id: userId,
      last_seen_at: new Date().toISOString(),
      last_path: path,
      user_agent: navigator.userAgent.slice(0, 500),
    },
    { onConflict: "user_id" },
  );
}

export async function trackEvent(input: {
  eventType: ActivityEventType;
  subject?: string;
  entityType?: string;
  entityId?: string;
  metadata?: Record<string, unknown>;
  durationMs?: number;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;

  await supabase.from("activity_events").insert({
    user_id: userId,
    event_type: input.eventType,
    subject: input.subject ?? null,
    entity_type: input.entityType ?? null,
    entity_id: input.entityId ?? null,
    metadata: (input.metadata ?? {}) as Database["public"]["Tables"]["activity_events"]["Insert"]["metadata"],
    duration_ms: input.durationMs ?? null,
  });
}

export async function trackPageView(path: string): Promise<void> {
  if (path === lastPath) {
    void trackPresence(path);
    return;
  }
  lastPath = path;
  await Promise.all([
    trackPresence(path),
    trackEvent({ eventType: "page_view", entityType: "route", entityId: path }),
  ]);
}

export async function upsertFlashcardProgress(
  subjectId: string,
  cardId: string,
  knowledge: "known" | "unknown",
): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;

  await supabase.from("flashcard_progress").upsert(
    {
      user_id: userId,
      subject_id: subjectId,
      card_id: cardId,
      knowledge,
    },
    { onConflict: "user_id,subject_id,card_id" },
  );

  void trackEvent({
    eventType: "flashcard_rate",
    subject: subjectId,
    entityType: "flashcard",
    entityId: cardId,
    metadata: { knowledge },
  });
}

export async function upsertTheoryProgress(input: {
  subject: string;
  chapterId: string;
  sectionId?: string;
  timeSeconds: number;
  scrollPct: number;
  completed?: boolean;
}): Promise<void> {
  const userId = await currentUserId();
  if (!userId) return;

  await supabase.from("theory_progress").upsert(
    {
      user_id: userId,
      subject: input.subject,
      chapter_id: input.chapterId,
      section_id: input.sectionId ?? "",
      time_seconds: input.timeSeconds,
      scroll_pct: Math.min(100, Math.max(0, Math.round(input.scrollPct))),
      completed: input.completed ?? false,
    },
    { onConflict: "user_id,subject,chapter_id,section_id" },
  );
}

export function startActivityHeartbeat(getPath: () => string): () => void {
  if (typeof window === "undefined") return () => {};

  const tick = () => {
    void trackPresence(getPath());
  };

  tick();
  heartbeatTimer = setInterval(tick, 60_000);

  return () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  };
}

export async function runOnceOnLogin(syncFn: () => Promise<void>): Promise<void> {
  if (syncDone) return;
  const userId = await currentUserId();
  if (!userId) return;
  const key = `bbe.activity.sync.${userId}`;
  if (sessionStorage.getItem(key)) {
    syncDone = true;
    return;
  }
  await syncFn();
  sessionStorage.setItem(key, "1");
  syncDone = true;
  void trackEvent({ eventType: "login" });
}
