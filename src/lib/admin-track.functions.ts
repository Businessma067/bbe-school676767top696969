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

async function ensureUser(context: {
  userId: string;
  claims: Record<string, unknown>;
  supabase: import("@supabase/supabase-js").SupabaseClient;
}) {
  const email = userEmail(context);
  const displayName = userName(context, email.split("@")[0] || "User");

  const [profileRes, rolesRes, enrollmentsRes] = await Promise.all([
    context.supabase.from("profiles").select("display_name, created_at").eq("user_id", context.userId).maybeSingle(),
    context.supabase.from("user_roles").select("role").eq("user_id", context.userId),
    context.supabase
      .from("enrollments")
      .select("product_slug, product_name, tier, created_at")
      .eq("user_id", context.userId),
  ]);

  await upsertStoredUser({
    userId: context.userId,
    email,
    displayName: profileRes.data?.display_name?.trim() || displayName,
    registeredAt: profileRes.data?.created_at ?? new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
    lastPath: null,
    userAgent: null,
    roles: (rolesRes.data ?? []).map((r) => r.role),
    enrollments: (enrollmentsRes.data ?? []).map((e) => ({
      productSlug: e.product_slug,
      productName: e.product_name,
      tier: e.tier,
      createdAt: e.created_at,
    })),
  });
}

/** Pull this user's Supabase progress into the local admin store. */
export const syncMyDataToAdminStore = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await ensureUser(context);

    const [tasksRes, mocksRes, practiceRes, answersRes, customRes] = await Promise.all([
      context.supabase.from("task_attempts").select("*").eq("user_id", context.userId),
      context.supabase.from("mock_attempts").select("*").eq("user_id", context.userId),
      context.supabase
        .from("practice_sessions")
        .select("*")
        .eq("user_id", context.userId),
      context.supabase.from("session_answers").select("*").eq("user_id", context.userId),
      context.supabase.from("custom_mocks").select("*").eq("user_id", context.userId),
    ]);

    for (const row of tasksRes.data ?? []) {
      await appendTaskAttempt(context.userId, {
        id: row.id,
        subject: row.subject,
        chapter: row.chapter,
        taskKey: row.task_key,
        taskTitle: row.task_title,
        correctCount: row.correct_count,
        statementCount: row.statement_count,
        isPassed: row.is_passed,
        durationSeconds: (row as { duration_seconds?: number }).duration_seconds ?? null,
        attemptNumber: (row as { attempt_number?: number }).attempt_number ?? null,
        statementResults: null,
        source: (row as { source?: string }).source ?? "supabase_sync",
        createdAt: row.created_at,
      });
    }

    for (const row of mocksRes.data ?? []) {
      const pointsEarned = Number(row.points_earned);
      const pointsTotal = Number(row.points_total);
      const { upsertMock } = await import("@/lib/admin-store.server");
      await upsertMock(context.userId, {
        id: row.id,
        examId: row.exam_id,
        examTitle: row.exam_title,
        status: (row as { status?: string }).status ?? "submitted",
        pointsEarned,
        pointsTotal,
        perSubject: (row.per_subject ?? {}) as Record<string, number>,
        secondsTaken: row.seconds_taken,
        timed: row.timed,
        startedAt: (row as { started_at?: string }).started_at ?? null,
        completedAt: row.completed_at ?? null,
        scorePct: pointsTotal > 0 ? Math.round((pointsEarned / pointsTotal) * 1000) / 10 : null,
      });
    }

    return {
      syncedTasks: tasksRes.data?.length ?? 0,
      syncedMocks: mocksRes.data?.length ?? 0,
      syncedPractice: practiceRes.data?.length ?? 0,
      syncedAnswers: answersRes.data?.length ?? 0,
      syncedCustomMocks: customRes.data?.length ?? 0,
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
    await ensureUser(context);
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
    await upsertFlashcard({
      userId: context.userId,
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
