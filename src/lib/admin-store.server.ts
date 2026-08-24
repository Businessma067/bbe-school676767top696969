import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
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
const STORE_FILE = path.join(STORE_DIR, "store.json");

export type StoredUser = {
  userId: string;
  email: string;
  displayName: string;
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
  userId: string;
  subjectId: string;
  cardId: string;
  knowledge: "known" | "unknown" | "new";
  updatedAt: string;
};

export type StoredCustomMock = {
  id: string;
  userId: string;
  title: string;
  subject: string;
  questionCount: number;
  createdAt: string;
};

type LocalAdminStore = {
  version: 1;
  lastSupabaseSync: string | null;
  users: Record<string, StoredUser>;
  taskAttempts: (AdminTaskAttemptRow & { userId: string })[];
  mocks: (AdminMockRow & { userId: string })[];
  events: (AdminActivityEvent & { userId: string })[];
  practiceSessions: (AdminPracticeSessionRow & { userId: string })[];
  sessionAnswers: (SessionAnswerStat & { userId: string })[];
  flashcards: StoredFlashcard[];
  theory: (AdminTheoryRow & { userId: string })[];
  customMocks: StoredCustomMock[];
};

function emptyStore(): LocalAdminStore {
  return {
    version: 1,
    lastSupabaseSync: null,
    users: {},
    taskAttempts: [],
    mocks: [],
    events: [],
    practiceSessions: [],
    sessionAnswers: [],
    flashcards: [],
    theory: [],
    customMocks: [],
  };
}

let writeQueue: Promise<void> = Promise.resolve();

async function readStore(): Promise<LocalAdminStore> {
  try {
    const raw = await readFile(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as LocalAdminStore;
    return parsed?.version === 1 ? parsed : emptyStore();
  } catch {
    return emptyStore();
  }
}

async function writeStore(store: LocalAdminStore): Promise<void> {
  await mkdir(STORE_DIR, { recursive: true });
  const tmp = STORE_FILE + ".tmp";
  await writeFile(tmp, JSON.stringify(store, null, 2), "utf8");
  await rename(tmp, STORE_FILE);
}

export async function withStore<T>(fn: (store: LocalAdminStore) => T | Promise<T>): Promise<T> {
  const run = async () => {
    const store = await readStore();
    const result = await fn(store);
    await writeStore(store);
    return result;
  };
  const op = writeQueue.then(run, run);
  writeQueue = op.then(
    () => undefined,
    () => undefined,
  );
  return op;
}

export async function upsertStoredUser(user: StoredUser): Promise<void> {
  await withStore((store) => {
    const prev = store.users[user.userId];
    store.users[user.userId] = { ...prev, ...user };
  });
}

export async function touchPresence(input: {
  userId: string;
  email: string;
  displayName: string;
  registeredAt?: string;
  path: string;
  userAgent?: string;
}): Promise<void> {
  await withStore((store) => {
    const prev = store.users[input.userId];
    store.users[input.userId] = {
      userId: input.userId,
      email: input.email,
      displayName: input.displayName,
      registeredAt: prev?.registeredAt ?? input.registeredAt ?? new Date().toISOString(),
      lastSeenAt: new Date().toISOString(),
      lastPath: input.path,
      userAgent: input.userAgent ?? prev?.userAgent ?? null,
      roles: prev?.roles ?? ["student"],
      enrollments: prev?.enrollments ?? [],
    };
  });
}

export async function appendEvent(
  userId: string,
  event: Omit<AdminActivityEvent, "id">,
): Promise<void> {
  await withStore((store) => {
    store.events.push({
      ...event,
      id: crypto.randomUUID(),
      userId,
    });
    if (store.events.length > 20_000) {
      store.events = store.events.slice(-20_000);
    }
  });
}

export async function appendTaskAttempt(
  userId: string,
  row: AdminTaskAttemptRow,
): Promise<void> {
  await withStore((store) => {
    if (store.taskAttempts.some((t) => t.id === row.id && t.userId === userId)) return;
    store.taskAttempts.push({ ...row, userId });
  });
}

export async function upsertMock(userId: string, row: AdminMockRow): Promise<void> {
  await withStore((store) => {
    const idx = store.mocks.findIndex(
      (m) => m.userId === userId && m.examId === row.examId && m.status === "in_progress",
    );
    if (idx >= 0) store.mocks[idx] = { ...row, userId };
    else store.mocks.push({ ...row, userId });
  });
}

export async function upsertFlashcard(row: StoredFlashcard): Promise<void> {
  await withStore((store) => {
    const idx = store.flashcards.findIndex(
      (f) =>
        f.userId === row.userId && f.subjectId === row.subjectId && f.cardId === row.cardId,
    );
    if (idx >= 0) store.flashcards[idx] = row;
    else store.flashcards.push(row);
  });
}

export async function upsertTheory(userId: string, row: AdminTheoryRow): Promise<void> {
  await withStore((store) => {
    const idx = store.theory.findIndex(
      (t) =>
        t.userId === userId &&
        t.subject === row.subject &&
        t.chapterId === row.chapterId &&
        t.sectionId === row.sectionId,
    );
    if (idx >= 0) store.theory[idx] = { ...row, userId };
    else store.theory.push({ ...row, userId });
  });
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

function userRowFromStore(user: StoredUser, store: LocalAdminStore): AdminUserRow {
  const tasks = store.taskAttempts.filter((t) => t.userId === user.userId);
  const mocks = store.mocks.filter((m) => m.userId === user.userId && m.status === "submitted");
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
    currentStreak: computeStreak(dates),
    averageAccuracy: pct(correct, total),
  };
}

export async function getStoreUserRows(): Promise<AdminUserRow[]> {
  const store = await readStore();
  return Object.values(store.users)
    .map((u) => userRowFromStore(u, store))
    .sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());
}

export async function getStoreUserDetail(userId: string): Promise<AdminUserDetail | null> {
  const store = await readStore();
  const user = store.users[userId];
  if (!user) return null;

  const taskAttempts = store.taskAttempts.filter((t) => t.userId === userId);
  const mocks = store.mocks.filter((m) => m.userId === userId);
  const sessionAnswers = store.sessionAnswers.filter((s) => s.userId === userId);
  const practiceSessions = store.practiceSessions.filter((p) => p.userId === userId);
  const theory = store.theory.filter((t) => t.userId === userId);
  const flashcards = summarizeFlashcards(store.flashcards.filter((f) => f.userId === userId));
  const customMocks = store.customMocks.filter((c) => c.userId === userId);
  const recentActivity = store.events
    .filter((e) => e.userId === userId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 200)
    .map(({ userId: _uid, ...rest }) => rest);

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
    customMocks: customMocks.map((m) => ({
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
      flashcardsRated: store.flashcards.filter(
        (f) => f.userId === userId && f.knowledge !== "new",
      ).length,
    },
  };
}

export async function getStoreCohortStats(): Promise<{
  users: AdminUserRow[];
  totalTaskAttempts: number;
  totalMockSubmissions: number;
  averageMockScorePct: number | null;
  enrollmentsByTier: Record<string, number>;
}> {
  const store = await readStore();
  const users = Object.values(store.users).map((u) => userRowFromStore(u, store));
  const enrollmentsByTier: Record<string, number> = {};
  for (const u of Object.values(store.users)) {
    for (const e of u.enrollments) {
      enrollmentsByTier[e.tier] = (enrollmentsByTier[e.tier] ?? 0) + 1;
    }
  }
  let scoreSum = 0;
  let scoreCount = 0;
  for (const m of store.mocks.filter((m) => m.status === "submitted")) {
    if (m.scorePct != null) {
      scoreSum += m.scorePct;
      scoreCount += 1;
    }
  }
  return {
    users,
    totalTaskAttempts: store.taskAttempts.length,
    totalMockSubmissions: store.mocks.filter((m) => m.status === "submitted").length,
    averageMockScorePct: scoreCount > 0 ? Math.round((scoreSum / scoreCount) * 10) / 10 : null,
    enrollmentsByTier,
  };
}

export async function mergeStore(store: Partial<LocalAdminStore>): Promise<void> {
  await withStore((current) => {
    if (store.users) Object.assign(current.users, store.users);
    if (store.taskAttempts) current.taskAttempts.push(...store.taskAttempts);
    if (store.mocks) current.mocks.push(...store.mocks);
    if (store.events) current.events.push(...store.events);
    if (store.practiceSessions) current.practiceSessions.push(...store.practiceSessions);
    if (store.sessionAnswers) current.sessionAnswers.push(...store.sessionAnswers);
    if (store.flashcards) current.flashcards.push(...store.flashcards);
    if (store.theory) current.theory.push(...store.theory);
    if (store.customMocks) current.customMocks.push(...store.customMocks);
    if (store.lastSupabaseSync) current.lastSupabaseSync = store.lastSupabaseSync;
  });
}

export async function markSupabaseSynced(): Promise<void> {
  await withStore((store) => {
    store.lastSupabaseSync = new Date().toISOString();
  });
}

export { readStore, isAtRisk };
