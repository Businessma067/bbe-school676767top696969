import {
  mirrorFlashcardLocal,
  mirrorTaskAttemptLocal,
  mirrorTheoryLocal,
  syncMyDataToAdminStore,
  trackEventLocal,
  trackPresenceLocal,
} from "@/lib/admin-track.functions";

export type ActivityEventType =
  | "page_view"
  | "task_start"
  | "task_submit"
  | "mock_start"
  | "mock_submit"
  | "mock_abandon"
  | "practice_start"
  | "practice_complete"
  | "theory_open"
  | "theory_complete"
  | "flashcard_rate"
  | "login";

let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let lastPath = "";
let syncDone = false;

function fire(promise: Promise<unknown>): void {
  void promise.catch((err) => console.error("[activity-tracker]", err));
}

export async function trackPresence(path: string): Promise<void> {
  if (typeof window === "undefined") return;
  fire(
    trackPresenceLocal({
      data: { path, userAgent: navigator.userAgent.slice(0, 500) },
    }),
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
  fire(trackEventLocal({ data: input }));
}

export async function trackPageView(path: string): Promise<void> {
  if (path === lastPath) {
    void trackPresence(path);
    return;
  }
  lastPath = path;
  await trackPresence(path);
  void trackEvent({ eventType: "page_view", entityType: "route", entityId: path });
}

export async function upsertFlashcardProgress(
  subjectId: string,
  cardId: string,
  knowledge: "known" | "unknown",
): Promise<void> {
  fire(mirrorFlashcardLocal({ data: { subjectId, cardId, knowledge } }));
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
  fire(mirrorTheoryLocal({ data: input }));
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

export async function runOnceOnLogin(userId?: string): Promise<void> {
  if (typeof window === "undefined") return;

  const key = `bbe.activity.sync.v2:${userId ?? "anon"}`;
  if (syncDone && sessionStorage.getItem(key)) return;

  try {
    await syncMyDataToAdminStore();
    sessionStorage.setItem(key, "1");
    syncDone = true;
    void trackEvent({ eventType: "login" });
  } catch (err) {
    console.error("[activity-tracker] sync", err);
    // Do not mark done — retry next heartbeat / navigation
  }
}

export async function mirrorTaskAttempt(input: {
  subject: string;
  chapter: string;
  taskKey: string;
  taskTitle?: string | null;
  correctCount: number;
  statementCount: number;
  durationSeconds?: number | null;
  statementResults?: { statement_index: number; correct: boolean }[] | null;
  source?: string;
}): Promise<void> {
  fire(
    mirrorTaskAttemptLocal({
      data: {
        ...input,
        taskTitle: input.taskTitle ?? null,
        isPassed: input.correctCount === input.statementCount,
      },
    }),
  );
}
