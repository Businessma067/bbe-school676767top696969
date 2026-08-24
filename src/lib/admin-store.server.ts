import { mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  AdminActivityEvent,
  AdminFlashcardDeckSummary,
  AdminMockRow,
  AdminPracticeSessionRow,
  AdminTaskAttemptRow,
  AdminTheoryRow,
  AdminUserDetail,
  AdminUserRow,
} from "@/lib/admin-types";
import { buildStudyProgress, type SessionAnswerStat } from "@/lib/study-progress";
import {
  computeStreak,
  summarizeTaskAttempts,
  type MockAttempt,
  type TaskAttempt,
} from "@/lib/user-progress";
import { isAtRisk, pct } from "@/lib/admin-stats.server";

const STORE_DIR = path.join(process.cwd(), "data", "admin-store");
const USERS_DIR = path.join(STORE_DIR, "users");
const INDEX_FILE = path.join(STORE_DIR, "index.json");
const LEGACY_FILE = path.join(STORE_DIR, "store.json");

export type StoredUser = {
  userId: string;
  email: string;
  displayName: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  registeredAt: string;
  lastSeenAt: string | null;
  lastPath: string | null;
  userAgent: string | null;
  roles: string[];
  enrollments: {
    productSlug: string;
    productName: string;
    tier: string;
    createdAt: string;
  }[];
};

export type StoredFlashcard = {
  subjectId: string;
  cardId: string;
  knowledge: "known" | "unknown" | "new";
  updatedAt: string;
};

export type StoredCustomMock = {
  id: string;
  title: string;
  subject: string;
  questionCount: number;
  createdAt: string;
};

export type UserRecord = {
  version: 1;
  profile: StoredUser;
  taskAttempts: AdminTaskAttemptRow[];
  mocks: AdminMockRow[];
  events: AdminActivityEvent[];
  practiceSessions: AdminPracticeSessionRow[];
  sessionAnswers: SessionAnswerStat[];
  flashcards: StoredFlashcard[];
  theory: AdminTheoryRow[];
  customMocks: StoredCustomMock[];
  lastSyncedAt: string | null;
};

type StoreIndex = {
  version: 1;
  lastSupabaseSync: string | null;
  userIds: string[];
};

function userFile(userId: string): string {
  return path.join(USERS_DIR, `${userId}.json`);
}

export function emptyUserRecord(profile: StoredUser): UserRecord {
  return {
    version: 1,
    profile,
    taskAttempts: [],
    mocks: [],
    events: [],
    practiceSessions: [],
    sessionAnswers: [],
    flashcards: [],
    theory: [],
    customMocks: [],
    lastSyncedAt: null,
  };
}

const userLocks = new Map<string, Promise<void>>();

async function withUserLock<T>(userId: string, fn: () => Promise<T>): Promise<T> {
  const prev = userLocks.get(userId) ?? Promise.resolve();
  let release!: () => void;
  const gate = new Promise<void>((r) => {
    release = r;
  });
  userLocks.set(userId, prev.then(() => gate));
  await prev;
  try {
    return await fn();
  } finally {
    release();
  }
}

async function readIndex(): Promise<StoreIndex> {
  try {
    const raw = await readFile(INDEX_FILE, "utf8");
    const parsed = JSON.parse(raw) as StoreIndex;
    if (parsed?.version === 1) return parsed;
  } catch {
    /* empty */
  }
  return { version: 1, lastSupabaseSync: null, userIds: [] };
}

async function writeIndex(index: StoreIndex): Promise<void> {
  await mkdir(STORE_DIR, { recursive: true });
  const tmp = INDEX_FILE + ".tmp";
  await writeFile(tmp, JSON.stringify(index, null, 2), "utf8");
  await rename(tmp, INDEX_FILE);
}

async function registerUserId(userId: string): Promise<void> {
  const index = await readIndex();
  if (!index.userIds.includes(userId)) {
    index.userIds.push(userId);
    await writeIndex(index);
  }
}

export async function readUserRecord(userId: string): Promise<UserRecord | null> {
  try {
    const raw = await readFile(userFile(userId), "utf8");
    const parsed = JSON.parse(raw) as UserRecord;
    return parsed?.version === 1 ? parsed : null;
  } catch {
    return null;
  }
}

export async function writeUserRecord(userId: string, record: UserRecord): Promise<void> {
  await mkdir(USERS_DIR, { recursive: true });
  const file = userFile(userId);
  const tmp = file + ".tmp";
  await writeFile(tmp, JSON.stringify(record, null, 2), "utf8");
  await rename(tmp, file);
  await registerUserId(userId);
}

export async function withUserRecord<T>(
  userId: string,
  fn: (record: UserRecord) => T | Promise<T>,
  createProfile?: StoredUser,
): Promise<T> {
  return withUserLock(userId, async () => {
    let record = await readUserRecord(userId);
    if (!record) {
      record = emptyUserRecord(
        createProfile ?? {
          userId,
          email: "",
          displayName: "User",
          registeredAt: new Date().toISOString(),
          lastSeenAt: null,
          lastPath: null,
          userAgent: null,
          roles: ["student"],
          enrollments: [],
        },
      );
    }
    const result = await fn(record);
    await writeUserRecord(userId, record);
    return result;
  });
}

/** Split legacy monolithic store.json into per-user files (once). */
export async function migrateLegacyStoreIfNeeded(): Promise<void> {
  try {
    const raw = await readFile(LEGACY_FILE, "utf8");
    const legacy = JSON.parse(raw) as {
      users?: Record<string, StoredUser>;
      taskAttempts?: (AdminTaskAttemptRow & { userId: string })[];
      mocks?: (AdminMockRow & { userId: string })[];
      events?: (AdminActivityEvent & { userId: string })[];
      practiceSessions?: (AdminPracticeSessionRow & { userId: string })[];
      sessionAnswers?: (SessionAnswerStat & { userId: string })[];
      flashcards?: (StoredFlashcard & { userId: string })[];
      theory?: (AdminTheoryRow & { userId: string })[];
      customMocks?: (StoredCustomMock & { userId: string })[];
      lastSupabaseSync?: string | null;
    };

    for (const [userId, profile] of Object.entries(legacy.users ?? {})) {
      const record = emptyUserRecord(profile);
      record.taskAttempts = (legacy.taskAttempts ?? []).filter((t) => t.userId === userId);
      record.mocks = (legacy.mocks ?? []).filter((m) => m.userId === userId);
      record.events = (legacy.events ?? [])
        .filter((e) => e.userId === userId)
        .map(({ userId: _u, ...rest }) => rest);
      record.practiceSessions = (legacy.practiceSessions ?? []).filter((p) => p.userId === userId);
      record.sessionAnswers = (legacy.sessionAnswers ?? []).filter((s) => s.userId === userId);
      record.flashcards = (legacy.flashcards ?? [])
        .filter((f) => f.userId === userId)
        .map(({ userId: _u, ...rest }) => rest);
      record.theory = (legacy.theory ?? []).filter((t) => t.userId === userId);
      record.customMocks = (legacy.customMocks ?? []).filter((c) => c.userId === userId);
      await writeUserRecord(userId, record);
    }

    await writeIndex({
      version: 1,
      lastSupabaseSync: legacy.lastSupabaseSync ?? null,
      userIds: Object.keys(legacy.users ?? {}),
    });
    await rename(LEGACY_FILE, LEGACY_FILE + ".migrated");
  } catch {
    /* no legacy file */
  }
}

export async function listStoredUserIds(): Promise<string[]> {
  await migrateLegacyStoreIfNeeded();
  const index = await readIndex();
  if (index.userIds.length > 0) return index.userIds;

  try {
    await mkdir(USERS_DIR, { recursive: true });
    const files = await readdir(USERS_DIR);
    return files.filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}

export async function upsertStoredUser(user: StoredUser): Promise<void> {
  await withUserRecord(
    user.userId,
    (record) => {
      record.profile = { ...record.profile, ...user };
    },
    user,
  );
}

export async function touchPresence(input: {
  userId: string;
  email: string;
  displayName: string;
  registeredAt?: string;
  path: string;
  userAgent?: string;
}): Promise<void> {
  await withUserRecord(
    input.userId,
    (record) => {
      record.profile = {
        ...record.profile,
        userId: input.userId,
        email: input.email,
        displayName: input.displayName,
        registeredAt: record.profile.registeredAt ?? input.registeredAt ?? new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
        lastPath: input.path,
        userAgent: input.userAgent ?? record.profile.userAgent,
      };
    },
    {
      userId: input.userId,
      email: input.email,
      displayName: input.displayName,
      registeredAt: input.registeredAt ?? new Date().toISOString(),
      lastSeenAt: new Date().toISOString(),
      lastPath: input.path,
      userAgent: input.userAgent ?? null,
      roles: ["student"],
      enrollments: [],
    },
  );
}

export async function appendEvent(
  userId: string,
  event: Omit<AdminActivityEvent, "id">,
): Promise<void> {
  await withUserRecord(userId, (record) => {
    record.events.push({ ...event, id: crypto.randomUUID() });
    if (record.events.length > 5000) record.events = record.events.slice(-5000);
  });
}

export async function appendTaskAttempt(userId: string, row: AdminTaskAttemptRow): Promise<void> {
  await withUserRecord(userId, (record) => {
    if (record.taskAttempts.some((t) => t.id === row.id)) return;
    record.taskAttempts.push(row);
  });
}

export async function upsertMock(userId: string, row: AdminMockRow): Promise<void> {
  await withUserRecord(userId, (record) => {
    const idx = record.mocks.findIndex(
      (m) => m.examId === row.examId && m.status === "in_progress",
    );
    if (idx >= 0) record.mocks[idx] = row;
    else {
      const existing = record.mocks.findIndex((m) => m.id === row.id);
      if (existing >= 0) record.mocks[existing] = row;
      else record.mocks.push(row);
    }
  });
}

export async function upsertFlashcard(userId: string, row: StoredFlashcard): Promise<void> {
  await withUserRecord(userId, (record) => {
    const idx = record.flashcards.findIndex(
      (f) => f.subjectId === row.subjectId && f.cardId === row.cardId,
    );
    if (idx >= 0) record.flashcards[idx] = row;
    else record.flashcards.push(row);
  });
}

export async function upsertTheory(userId: string, row: AdminTheoryRow): Promise<void> {
  await withUserRecord(userId, (record) => {
    const idx = record.theory.findIndex(
      (t) => t.subject === row.subject && t.chapterId === row.chapterId && t.sectionId === row.sectionId,
    );
    if (idx >= 0) record.theory[idx] = row;
    else record.theory.push(row);
  });
}

/** Replace one user's local record with a full Supabase snapshot. */
export async function replaceUserRecord(userId: string, record: UserRecord): Promise<void> {
  record.lastSyncedAt = new Date().toISOString();
  await writeUserRecord(userId, record);
}

function highestTier(tiers: string[]): string {
  if (tiers.includes("full")) return "full";
  if (tiers.includes("lite")) return "lite";
  if (tiers.length > 0) return tiers[0]!;
  return "none";
}

function summarizeFlashcards(rows: StoredFlashcard[]): AdminFlashcardDeckSummary[] {
  const bySubject = new Map<string, { known: number; unknown: number; unset: number; lastUpdated: string | null }>();
  for (const row of rows) {
    const bucket = bySubject.get(row.subjectId) ?? { known: 0, unknown: 0, unset: 0, lastUpdated: null };
    if (row.knowledge === "known") bucket.known += 1;
    else if (row.knowledge === "unknown") bucket.unknown += 1;
    else bucket.unset += 1;
    if (!bucket.lastUpdated || row.updatedAt > bucket.lastUpdated) bucket.lastUpdated = row.updatedAt;
    bySubject.set(row.subjectId, bucket);
  }
  return [...bySubject.entries()].map(([subjectId, s]) => {
    const total = s.known + s.unknown + s.unset;
    return {
      subjectId,
      known: s.known,
      unknown: s.unknown,
      unset: s.unset,
      total,
      masteryPct: pct(s.known, total),
      lastUpdated: s.lastUpdated,
    };
  });
}

function userRowFromRecord(record: UserRecord): AdminUserRow {
  const user = record.profile;
  const tasks = record.taskAttempts;
  const mocks = record.mocks.filter((m) => m.status === "submitted");
  let mockBestPct: number | null = null;
  for (const m of mocks) {
    if (m.scorePct != null && (mockBestPct == null || m.scorePct > mockBestPct)) mockBestPct = m.scorePct;
  }
  let correct = 0;
  let total = 0;
  for (const t of tasks) {
    correct += t.correctCount;
    total += t.statementCount;
  }
  const dates = [
    ...tasks.map((t) => t.createdAt),
    ...mocks.map((m) => m.completedAt ?? m.startedAt ?? ""),
  ].filter(Boolean);

  return {
    userId: user.userId,
    email: user.email,
    displayName: user.displayName,
    registeredAt: user.registeredAt,
    lastSeenAt: user.lastSeenAt,
    lastPath: user.lastPath,
    tier: highestTier(user.enrollments.map((e) => e.tier)),
    roles: user.roles,
    tasksPassed: tasks.filter((t) => t.isPassed).length,
    tasksAttempted: tasks.length,
    mockBestPct,
    mockAttempts: mocks.length,
    practiceSessions: record.practiceSessions.length,
    currentStreak: computeStreak(dates),
    averageAccuracy: pct(correct, total),
  };
}

function detailFromRecord(record: UserRecord): AdminUserDetail {
  const user = record.profile;
  const taskAttempts = record.taskAttempts;
  const mocks = record.mocks;
  const sessionAnswers = record.sessionAnswers;
  const practiceSessions = record.practiceSessions;
  const theory = record.theory;
  const flashcards = summarizeFlashcards(record.flashcards);
  const recentActivity = [...record.events]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 200);

  const toTasks = (): TaskAttempt[] =>
    taskAttempts.map((t) => ({
      id: t.id,
      subject: t.subject,
      chapter: t.chapter,
      task_key: t.taskKey,
      task_title: t.taskTitle,
      correct_count: t.correctCount,
      statement_count: t.statementCount,
      is_passed: t.isPassed,
      created_at: t.createdAt,
    }));

  const toMocks = (): MockAttempt[] =>
    mocks
      .filter((m) => m.status === "submitted")
      .map((m) => ({
        id: m.id,
        exam_id: m.examId,
        exam_title: m.examTitle,
        points_earned: m.pointsEarned,
        points_total: m.pointsTotal,
        per_subject: m.perSubject,
        seconds_taken: m.secondsTaken,
        timed: m.timed,
        completed_at: m.completedAt ?? m.startedAt ?? new Date().toISOString(),
        correct_count: null,
        statement_count: null,
      }));

  const studyProgress = buildStudyProgress(toTasks(), toMocks(), sessionAnswers);
  const taskDurationSeconds = taskAttempts.reduce((acc, t) => acc + (t.durationSeconds ?? 0), 0);
  const mockDurationSeconds = mocks
    .filter((m) => m.status === "submitted")
    .reduce((acc, m) => acc + (m.secondsTaken ?? 0), 0);
  const theoryTimeSeconds = theory.reduce((acc, t) => acc + t.timeSeconds, 0);

  return {
    profile: {
      userId: user.userId,
      email: user.email,
      displayName: user.displayName,
      registeredAt: user.registeredAt,
      lastSeenAt: user.lastSeenAt,
      lastPath: user.lastPath,
      userAgent: user.userAgent,
      roles: user.roles,
    },
    enrollments: user.enrollments,
    subjectStats: summarizeTaskAttempts(toTasks()),
    studyProgress,
    taskAttempts,
    mocks,
    customMocks: record.customMocks.map((m) => ({
      id: m.id,
      title: m.title,
      subject: m.subject,
      questionCount: m.questionCount,
      createdAt: m.createdAt,
    })),
    practiceSessions,
    flashcards,
    theory,
    recentActivity,
    totals: {
      totalStudyTimeSeconds: taskDurationSeconds + mockDurationSeconds + theoryTimeSeconds,
      taskDurationSeconds,
      mockDurationSeconds,
      theoryTimeSeconds,
      practiceSessionsCount: practiceSessions.length,
      flashcardsRated: record.flashcards.filter((f) => f.knowledge !== "new").length,
    },
  };
}

export async function getStoreUserRows(): Promise<AdminUserRow[]> {
  await migrateLegacyStoreIfNeeded();
  const ids = await listStoredUserIds();
  const rows: AdminUserRow[] = [];
  for (const id of ids) {
    const record = await readUserRecord(id);
    if (record) rows.push(userRowFromRecord(record));
  }
  return rows.sort(
    (a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime(),
  );
}

export async function getStoreUserDetail(userId: string): Promise<AdminUserDetail | null> {
  await migrateLegacyStoreIfNeeded();
  const record = await readUserRecord(userId);
  if (!record) return null;
  return detailFromRecord(record);
}

export async function getStoreCohortStats(): Promise<{
  users: AdminUserRow[];
  totalTaskAttempts: number;
  totalMockSubmissions: number;
  averageMockScorePct: number | null;
  enrollmentsByTier: Record<string, number>;
}> {
  const users = await getStoreUserRows();
  const enrollmentsByTier: Record<string, number> = {};
  let totalTaskAttempts = 0;
  let totalMockSubmissions = 0;
  let scoreSum = 0;
  let scoreCount = 0;

  for (const id of await listStoredUserIds()) {
    const record = await readUserRecord(id);
    if (!record) continue;
    totalTaskAttempts += record.taskAttempts.length;
    for (const m of record.mocks.filter((m) => m.status === "submitted")) {
      totalMockSubmissions += 1;
      if (m.scorePct != null) {
        scoreSum += m.scorePct;
        scoreCount += 1;
      }
    }
    for (const e of record.profile.enrollments) {
      enrollmentsByTier[e.tier] = (enrollmentsByTier[e.tier] ?? 0) + 1;
    }
  }

  return {
    users,
    totalTaskAttempts,
    totalMockSubmissions,
    averageMockScorePct: scoreCount > 0 ? Math.round((scoreSum / scoreCount) * 10) / 10 : null,
    enrollmentsByTier,
  };
}

export async function readUserEvents(userId: string): Promise<AdminActivityEvent[]> {
  const record = await readUserRecord(userId);
  return record?.events ?? [];
}

export async function markSupabaseSynced(): Promise<void> {
  const index = await readIndex();
  index.lastSupabaseSync = new Date().toISOString();
  await writeIndex(index);
}

export { isAtRisk };
