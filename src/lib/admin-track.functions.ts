import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  appendEvent,
  appendTaskAttempt,
  touchPresence,
  upsertFlashcard,
  upsertStoredUser,
  upsertTheory,
} from "@/lib/admin-store.server";
import { syncSingleUserFromSupabase } from "@/lib/admin-sync.server";

const EventInput = z.object({
  eventType: z.string(),
  subject: z.string().optional(),
  entityType: z.string().optional(),
  entityId: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  durationMs: z.number().optional(),
});

const PresenceInput = z.object({
  path: z.string(),
  userAgent: z.string().optional(),
  displayName: z.string().optional(),
});

const TaskInput = z.object({
  subject: z.string(),
  chapter: z.string(),
  taskKey: z.string(),
  taskTitle: z.string().nullable().optional(),
  correctCount: z.number(),
  statementCount: z.number(),
  durationSeconds: z.number().nullable().optional(),
  statementResults: z
    .array(z.object({ statement_index: z.number(), correct: z.boolean() }))
    .nullable()
    .optional(),
  source: z.string().optional(),
  isPassed: z.boolean(),
});

const FlashcardInput = z.object({
  subjectId: z.string(),
  cardId: z.string(),
  knowledge: z.enum(["known", "unknown"]),
});

const TheoryInput = z.object({
  subject: z.string(),
  chapterId: z.string(),
  sectionId: z.string().optional(),
  timeSeconds: z.number(),
  scrollPct: z.number(),
  completed: z.boolean().optional(),
});

function userEmail(context: { claims: Record<string, unknown> }): string {
  return typeof context.claims.email === "string" ? context.claims.email : "";
}

function userName(context: { claims: Record<string, unknown> }, fallback: string): string {
  const meta = context.claims.user_metadata;
  if (meta && typeof meta === "object" && "display_name" in meta) {
    const name = String((meta as { display_name?: unknown }).display_name ?? "").trim();
    if (name) return name;
  }
  return fallback;
}

/** Pull this user's Supabase data into their own local file. */
export const syncMyDataToAdminStore = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const email = userEmail(context);
    await syncSingleUserFromSupabase(context.supabase, context.userId, {
      email,
      created_at: new Date().toISOString(),
    });

    const record = await import("@/lib/admin-store.server").then((m) =>
      m.readUserRecord(context.userId),
    );

    return {
      userId: context.userId,
      syncedTasks: record?.taskAttempts.length ?? 0,
      syncedMocks: record?.mocks.length ?? 0,
      syncedPractice: record?.practiceSessions.length ?? 0,
      syncedAnswers: record?.sessionAnswers.length ?? 0,
      syncedCustomMocks: record?.customMocks.length ?? 0,
    };
  });

export const trackPresenceLocal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => PresenceInput.parse(d))
  .handler(async ({ context, data }) => {
    const email = userEmail(context);
    await touchPresence({
      userId: context.userId,
      email,
      displayName: data.displayName || userName(context, email.split("@")[0] || "User"),
      path: data.path,
      userAgent: data.userAgent,
    });
  });

export const trackEventLocal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => EventInput.parse(d))
  .handler(async ({ context, data }) => {
    await appendEvent(context.userId, {
      eventType: data.eventType,
      subject: data.subject ?? null,
      entityType: data.entityType ?? null,
      entityId: data.entityId ?? null,
      metadata: data.metadata ?? {},
      durationMs: data.durationMs ?? null,
      createdAt: new Date().toISOString(),
    });
  });

export const mirrorTaskAttemptLocal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => TaskInput.parse(d))
  .handler(async ({ context, data }) => {
    const email = userEmail(context);
    await upsertStoredUser({
      userId: context.userId,
      email,
      displayName: userName(context, email.split("@")[0] || "User"),
      registeredAt: new Date().toISOString(),
      lastSeenAt: null,
      lastPath: null,
      userAgent: null,
      roles: ["student"],
      enrollments: [],
    });
    await appendTaskAttempt(context.userId, {
      id: crypto.randomUUID(),
      subject: data.subject,
      chapter: data.chapter,
      taskKey: data.taskKey,
      taskTitle: data.taskTitle ?? null,
      correctCount: data.correctCount,
      statementCount: data.statementCount,
      isPassed: data.isPassed,
      durationSeconds: data.durationSeconds ?? null,
      attemptNumber: null,
      statementResults: data.statementResults ?? null,
      source: data.source ?? "web",
      createdAt: new Date().toISOString(),
    });
  });

export const mirrorFlashcardLocal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => FlashcardInput.parse(d))
  .handler(async ({ context, data }) => {
    await upsertFlashcard(context.userId, {
      subjectId: data.subjectId,
      cardId: data.cardId,
      knowledge: data.knowledge,
      updatedAt: new Date().toISOString(),
    });
  });

export const mirrorTheoryLocal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => TheoryInput.parse(d))
  .handler(async ({ context, data }) => {
    await upsertTheory(context.userId, {
      subject: data.subject,
      chapterId: data.chapterId,
      sectionId: data.sectionId ?? "",
      timeSeconds: data.timeSeconds,
      scrollPct: data.scrollPct,
      completed: data.completed ?? false,
      updatedAt: new Date().toISOString(),
    });
  });
