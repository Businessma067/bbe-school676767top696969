import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/lib/require-admin.server";
import {
  getStoreCohortStats,
  getStoreUserDetail,
  getStoreUserRows,
  isAtRisk,
  readStore,
} from "@/lib/admin-store.server";
import { trySyncAllFromSupabase } from "@/lib/admin-sync.server";
import type {
  AdminCohortStats,
  AdminListUsersResult,
  AdminTimelineResult,
  AdminUserDetail,
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

export const adminGetCohortStats = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async (): Promise<AdminCohortStats> => {
    await trySyncAllFromSupabase();
    const cohort = await getStoreCohortStats();
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
  .handler(async ({ data }): Promise<AdminListUsersResult> => {
    await trySyncAllFromSupabase();
    let rows = await getStoreUserRows();

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
    };
  });

export const adminGetUserDetail = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => UserIdInput.parse(d))
  .handler(async ({ data }): Promise<AdminUserDetail> => {
    await trySyncAllFromSupabase();
    const detail = await getStoreUserDetail(data.userId);
    if (!detail) throw new Error("User not found in admin store");
    return detail;
  });

export const adminGetUserTimeline = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => TimelineInput.parse(d))
  .handler(async ({ data }): Promise<AdminTimelineResult> => {
    const store = await readStore();
    let events = store.events
      .filter((e) => e.userId === data.userId)
      .map(({ userId: _uid, ...rest }) => rest);

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
  .handler(async ({ data }): Promise<{ csv: string }> => {
    await trySyncAllFromSupabase();

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

    const rows = await getStoreUserRows();
    const header =
      "user_id,email,name,tier,registered,last_seen,tasks_passed,tasks_attempted,mock_best_pct,mock_attempts,streak,accuracy";
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
