import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireAdmin } from "@/lib/require-admin.server";
import {
  buildAdminUserRow,
  fetchUserBundle,
  isAtRisk,
  pct,
} from "@/lib/admin-stats.server";
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

async function listAllAuthUsers(db: Awaited<typeof import("@/integrations/supabase/client.server")>["supabaseAdmin"]) {
  const users: { id: string; email: string; created_at: string }[] = [];
  let page = 1;
  const perPage = 200;
  for (;;) {
    const { data, error } = await db.auth.admin.listUsers({ page, perPage });
    if (error) throw error;
    for (const u of data.users) {
      if (u.email) {
        users.push({ id: u.id, email: u.email, created_at: u.created_at });
      }
    }
    if (data.users.length < perPage) break;
    page += 1;
    if (page > 50) break;
  }
  return users;
}

export const adminGetCohortStats = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }): Promise<AdminCohortStats> => {
    const db = context.supabaseAdmin;
    const authUsers = await listAllAuthUsers(db);

    const now = Date.now();
    const day = 86_400_000;
    const presenceRes = await db.from("user_presence").select("user_id, last_seen_at");
    const presenceMap = new Map(
      (presenceRes.data ?? []).map((p) => [p.user_id, p.last_seen_at]),
    );

    let dau = 0;
    let wau = 0;
    let mau = 0;
    for (const u of authUsers) {
      const seen = presenceMap.get(u.id);
      if (!seen) continue;
      const t = new Date(seen).getTime();
      if (now - t <= day) dau += 1;
      if (now - t <= 7 * day) wau += 1;
      if (now - t <= 30 * day) mau += 1;
    }

    const enrollRes = await db.from("enrollments").select("tier");
    const enrollmentsByTier: Record<string, number> = {};
    for (const e of enrollRes.data ?? []) {
      enrollmentsByTier[e.tier] = (enrollmentsByTier[e.tier] ?? 0) + 1;
    }

    const taskCountRes = await db.from("task_attempts").select("id", { count: "exact", head: true });
    const mockRes = await db
      .from("mock_attempts")
      .select("points_earned, points_total, status")
      .or("status.eq.submitted,status.is.null");

    let scoreSum = 0;
    let scoreCount = 0;
    for (const m of mockRes.data ?? []) {
      const total = Number(m.points_total);
      if (total <= 0) continue;
      scoreSum += (Number(m.points_earned) / total) * 100;
      scoreCount += 1;
    }

    const profilesRes = await db.from("profiles").select("user_id, display_name");
    const profileMap = new Map((profilesRes.data ?? []).map((p) => [p.user_id, p.display_name]));

    const userRows = await Promise.all(
      authUsers.map((u) =>
        buildAdminUserRow(db, u.id, u.email, u.created_at, profileMap.get(u.id) ?? null),
      ),
    );

    return {
      totalUsers: authUsers.length,
      dau,
      wau,
      mau,
      enrollmentsByTier,
      totalTaskAttempts: taskCountRes.count ?? 0,
      totalMockSubmissions: mockRes.data?.length ?? 0,
      averageMockScorePct: scoreCount > 0 ? Math.round((scoreSum / scoreCount) * 10) / 10 : null,
      atRiskUsers: userRows.filter(isAtRisk).slice(0, 20),
    };
  });

export const adminListUsers = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => ListUsersInput.parse(d))
  .handler(async ({ context, data }): Promise<AdminListUsersResult> => {
    const db = context.supabaseAdmin;
    const authUsers = await listAllAuthUsers(db);
    const profilesRes = await db.from("profiles").select("user_id, display_name");
    const profileMap = new Map((profilesRes.data ?? []).map((p) => [p.user_id, p.display_name]));

    let rows = await Promise.all(
      authUsers.map((u) =>
        buildAdminUserRow(db, u.id, u.email, u.created_at, profileMap.get(u.id) ?? null),
      ),
    );

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
    const users = rows.slice(start, start + data.pageSize);

    return { users, total, page: data.page, pageSize: data.pageSize };
  });

export const adminGetUserDetail = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => UserIdInput.parse(d))
  .handler(async ({ context, data }): Promise<AdminUserDetail> => {
    const db = context.supabaseAdmin;
    const { data: authUser, error } = await db.auth.admin.getUserById(data.userId);
    if (error || !authUser.user?.email) throw new Error("User not found");
    return fetchUserBundle(
      db,
      data.userId,
      authUser.user.email,
      authUser.user.created_at,
    );
  });

export const adminGetUserTimeline = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => TimelineInput.parse(d))
  .handler(async ({ context, data }): Promise<AdminTimelineResult> => {
    const db = context.supabaseAdmin;
    let query = db
      .from("activity_events")
      .select("id, event_type, subject, entity_type, entity_id, metadata, duration_ms, created_at", {
        count: "exact",
      })
      .eq("user_id", data.userId)
      .order("created_at", { ascending: false });

    if (data.eventType) {
      query = query.eq("event_type", data.eventType as never);
    }

    const from = (data.page - 1) * data.pageSize;
    const to = from + data.pageSize - 1;
    const { data: rows, count, error } = await query.range(from, to);
    if (error) throw error;

    return {
      events: (rows ?? []).map((row) => ({
        id: row.id,
        eventType: row.event_type,
        subject: row.subject,
        entityType: row.entity_type,
        entityId: row.entity_id,
        metadata: (row.metadata ?? {}) as Record<string, unknown>,
        durationMs: row.duration_ms,
        createdAt: row.created_at,
      })),
      total: count ?? 0,
      page: data.page,
      pageSize: data.pageSize,
    };
  });

export const adminExportUsersCsv = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => z.object({ userId: z.string().uuid().optional() }).parse(d))
  .handler(async ({ context, data }): Promise<{ csv: string }> => {
    const db = context.supabaseAdmin;

    if (data.userId) {
      const { data: authUser, error } = await db.auth.admin.getUserById(data.userId);
      if (error || !authUser.user?.email) throw new Error("User not found");
      const detail = await fetchUserBundle(
        db,
        data.userId,
        authUser.user.email,
        authUser.user.created_at,
      );

      const lines = [
        "section,field,value",
        `profile,email,${csvEscape(detail.profile.email)}`,
        `profile,name,${csvEscape(detail.profile.displayName)}`,
        `profile,registered,${detail.profile.registeredAt}`,
        `profile,last_seen,${detail.profile.lastSeenAt ?? ""}`,
        `totals,study_time_seconds,${detail.totals.totalStudyTimeSeconds}`,
        `totals,tasks_passed,${detail.taskAttempts.filter((t) => t.isPassed).length}`,
        ...detail.taskAttempts.map(
          (t) =>
            `task,${t.createdAt},${csvEscape(`${t.subject}/${t.chapter}/${t.taskKey} ${t.correctCount}/${t.statementCount}`)}`,
        ),
      ];
      return { csv: lines.join("\n") };
    }

    const authUsers = await listAllAuthUsers(db);
    const profilesRes = await db.from("profiles").select("user_id, display_name");
    const profileMap = new Map((profilesRes.data ?? []).map((p) => [p.user_id, p.display_name]));

    const rows = await Promise.all(
      authUsers.map((u) =>
        buildAdminUserRow(db, u.id, u.email, u.created_at, profileMap.get(u.id) ?? null),
      ),
    );

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
