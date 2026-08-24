import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/lib/require-admin.server";
import {
  getStoreCohortStats,
  getStoreUserDetail,
  getStoreUserRows,
  isAtRisk,
  readUserEvents,
} from "@/lib/admin-store.server";
import { fetchLiveUserRows } from "@/lib/admin-live.server";
import { trySyncAllUsers } from "@/lib/admin-sync.server";
import type {
  AdminCohortStats,
  AdminListUsersResult,
  AdminTimelineResult,
  AdminUserDetail,
  AdminUserRow,
} from "@/lib/admin-types";

const ListUsersInput = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(50),
  search: z.string().optional(),
  sortBy: z
    .enum(["registered", "lastSeen", "name", "tasksPassed", "mockBest"])
    .default("registered"),
  sortDir: z.enum(["asc", "desc"]).default("desc"),
});

const UserIdInput = z.object({
  userId: z.string().uuid(),
});

const TimelineInput = z.object({
  userId: z.string().uuid(),
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(200).default(50),
  eventType: z.string().optional(),
});

async function resolveAdminUserRows(
  supabase: Parameters<typeof fetchLiveUserRows>[0],
): Promise<{ rows: AdminUserRow[]; source: AdminListUsersResult["source"]; hint?: string }> {
  // Best-effort: fill local store when filesystem works (local dev).
  const sync = await trySyncAllUsers(supabase, true).catch((err) => ({
    synced: 0,
    source: "skipped" as const,
    totalLocal: 0,
    error: err instanceof Error ? err.message : String(err),
    hint: undefined as string | undefined,
  }));

  let rows = await getStoreUserRows().catch(() => [] as AdminUserRow[]);
  if (rows.length > 0) {
    return { rows, source: "local_store", hint: sync.hint };
  }

  // Lovable / empty disk: read accounts live from Supabase.
  const live = await fetchLiveUserRows(supabase);
  if (live.rows.length > 0) {
    return { rows: live.rows, source: "supabase_live" };
  }

  const hint =
    live.error ||
    sync.hint ||
    sync.error ||
    "Нет аккаунтов. Выполните SQL из supabase/migrations/20260825010000_admin_emails_and_list_users.sql в Supabase → SQL Editor.";

  return { rows: [], source: "empty", hint };
}

export const adminGetCohortStats = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }): Promise<AdminCohortStats> => {
    const { rows } = await resolveAdminUserRows(context.supabase);
    const cohort =
      rows.length > 0
        ? {
            users: rows,
            totalTaskAttempts: rows.reduce((s, u) => s + u.tasksAttempted, 0),
            totalMockSubmissions: rows.reduce((s, u) => s + u.mockAttempts, 0),
            averageMockScorePct: (() => {
              const scored = rows.filter((u) => u.mockBestPct != null);
              if (!scored.length) return null;
              return (
                Math.round(
                  (scored.reduce((s, u) => s + (u.mockBestPct ?? 0), 0) / scored.length) * 10,
                ) / 10
              );
            })(),
            enrollmentsByTier: rows.reduce<Record<string, number>>((acc, u) => {
              acc[u.tier] = (acc[u.tier] ?? 0) + 1;
              return acc;
            }, {}),
          }
        : await getStoreCohortStats();

    const now = Date.now();
    const day = 86_400_000;

    let dau = 0;
    let wau = 0;
    let mau = 0;
    for (const u of cohort.users) {
      if (!u.lastSeenAt) continue;
      const t = new Date(u.lastSeenAt).getTime();
      if (now - t <= day) dau += 1;
      if (now - t <= 7 * day) wau += 1;
      if (now - t <= 30 * day) mau += 1;
    }

    return {
      totalUsers: cohort.users.length,
      dau,
      wau,
      mau,
      enrollmentsByTier: cohort.enrollmentsByTier,
      totalTaskAttempts: cohort.totalTaskAttempts,
      totalMockSubmissions: cohort.totalMockSubmissions,
      averageMockScorePct: cohort.averageMockScorePct,
      atRiskUsers: cohort.users.filter(isAtRisk).slice(0, 20),
    };
  });

export const adminListUsers = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => ListUsersInput.parse(d))
  .handler(async ({ data, context }): Promise<AdminListUsersResult> => {
    const resolved = await resolveAdminUserRows(context.supabase);
    let rows = resolved.rows;

    const q = data.search?.trim().toLowerCase();
    if (q) {
      rows = rows.filter(
        (r) =>
          r.email.toLowerCase().includes(q) ||
          r.displayName.toLowerCase().includes(q) ||
          r.userId.includes(q),
      );
    }

    const dir = data.sortDir === "asc" ? 1 : -1;
    rows.sort((a, b) => {
      switch (data.sortBy) {
        case "name":
          return a.displayName.localeCompare(b.displayName) * dir;
        case "lastSeen":
          return (
            ((a.lastSeenAt ? new Date(a.lastSeenAt).getTime() : 0) -
              (b.lastSeenAt ? new Date(b.lastSeenAt).getTime() : 0)) *
            dir
          );
        case "tasksPassed":
          return (a.tasksPassed - b.tasksPassed) * dir;
        case "mockBest":
          return ((a.mockBestPct ?? -1) - (b.mockBestPct ?? -1)) * dir;
        default:
          return (
            (new Date(a.registeredAt).getTime() - new Date(b.registeredAt).getTime()) * dir
          );
      }
    });

    const total = rows.length;
    const start = (data.page - 1) * data.pageSize;
    return {
      users: rows.slice(start, start + data.pageSize),
      total,
      page: data.page,
      pageSize: data.pageSize,
      source: resolved.source,
      hint: total === 0 ? resolved.hint : undefined,
    };
  });

export const adminGetUserDetail = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => UserIdInput.parse(d))
  .handler(async ({ data, context }): Promise<AdminUserDetail> => {
    // Prefer local store; if missing (Lovable), sync this one user from Supabase first.
    let detail = await getStoreUserDetail(data.userId);
    if (!detail) {
      try {
        const { syncSingleUserFromSupabase } = await import("@/lib/admin-sync.server");
        const live = await fetchLiveUserRows(context.supabase);
        const meta = live.rows.find((r) => r.userId === data.userId);
        await syncSingleUserFromSupabase(context.supabase, data.userId, meta
          ? { email: meta.email, created_at: meta.registeredAt }
          : undefined);
        detail = await getStoreUserDetail(data.userId);
      } catch (err) {
        console.error("[admin] live detail sync failed", err);
      }
    }
    if (!detail) throw new Error("User not found");
    return detail;
  });

export const adminGetUserTimeline = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => TimelineInput.parse(d))
  .handler(async ({ data }): Promise<AdminTimelineResult> => {
    const store = await readUserEvents(data.userId);
    let events = [...store];

    if (data.eventType) {
      events = events.filter((e) => e.eventType === data.eventType);
    }

    events.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const total = events.length;
    const start = (data.page - 1) * data.pageSize;

    return {
      events: events.slice(start, start + data.pageSize),
      total,
      page: data.page,
      pageSize: data.pageSize,
    };
  });

export const adminExportUsersCsv = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => z.object({ userId: z.string().uuid().optional() }).parse(d))
  .handler(async ({ data, context }): Promise<{ csv: string }> => {
    if (data.userId) {
      const detail = await getStoreUserDetail(data.userId);
      if (!detail) throw new Error("User not found");
      const lines = [
        "section,field,value",
        `profile,email,${csvEscape(detail.profile.email)}`,
        `profile,name,${csvEscape(detail.profile.displayName)}`,
        `profile,registered,${detail.profile.registeredAt}`,
        `profile,last_seen,${detail.profile.lastSeenAt ?? ""}`,
        `totals,study_time_seconds,${detail.totals.totalStudyTimeSeconds}`,
        ...detail.taskAttempts.map(
          (t) =>
            `task,${t.createdAt},${csvEscape(`${t.subject}/${t.chapter}/${t.taskKey} ${t.correctCount}/${t.statementCount}`)}`,
        ),
      ];
      return { csv: lines.join("\n") };
    }

    const resolved = await resolveAdminUserRows(context.supabase);
    const rows = resolved.rows;
    const header =
      "user_id,email,name,tier,registered,last_seen,tasks_passed,tasks_attempted,mock_best_pct,mock_attempts,practice_sessions,streak,accuracy";
    const lines = [header];
    for (const u of rows) {
      lines.push(
        [
          u.userId,
          csvEscape(u.email),
          csvEscape(u.displayName),
          u.tier,
          u.registeredAt,
          u.lastSeenAt ?? "",
          u.tasksPassed,
          u.tasksAttempted,
          u.mockBestPct ?? "",
          u.mockAttempts,
          u.practiceSessions,
          u.currentStreak,
          u.averageAccuracy ?? "",
        ].join(","),
      );
    }
    return { csv: lines.join("\n") };
  });

function csvEscape(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
