import type { DayProgress, StudyProgressSummary } from "@/lib/study-progress";
import type { SubjectStats } from "@/lib/user-progress";

export type AdminUserRow = {
  userId: string;
  email: string;
  displayName: string;
  registeredAt: string;
  lastSeenAt: string | null;
  lastPath: string | null;
  tier: string;
  roles: string[];
  tasksPassed: number;
  tasksAttempted: number;
  mockBestPct: number | null;
  mockAttempts: number;
  practiceSessions: number;
  currentStreak: number;
  averageAccuracy: number | null;
};

export type AdminCohortStats = {
  totalUsers: number;
  dau: number;
  wau: number;
  mau: number;
  enrollmentsByTier: Record<string, number>;
  totalTaskAttempts: number;
  totalMockSubmissions: number;
  averageMockScorePct: number | null;
  atRiskUsers: AdminUserRow[];
};

export type AdminTaskAttemptRow = {
  id: string;
  subject: string;
  chapter: string;
  taskKey: string;
  taskTitle: string | null;
  correctCount: number;
  statementCount: number;
  isPassed: boolean;
  durationSeconds: number | null;
  attemptNumber: number | null;
  statementResults: { statement_index: number; correct: boolean }[] | null;
  source: string;
  createdAt: string;
};

export type AdminMockRow = {
  id: string;
  examId: string;
  examTitle: string;
  status: string;
  pointsEarned: number;
  pointsTotal: number;
  perSubject: Record<string, number>;
  secondsTaken: number | null;
  timed: boolean;
  startedAt: string | null;
  completedAt: string | null;
  scorePct: number | null;
};

export type AdminPracticeSessionRow = {
  id: string;
  mode: string;
  subjectId: string;
  topicId: string;
  totalQuestions: number;
  correctAnswers: number;
  accuracyPct: number | null;
  startedAt: string;
  completedAt: string | null;
  durationSeconds: number | null;
};

export type AdminFlashcardDeckSummary = {
  subjectId: string;
  known: number;
  unknown: number;
  unset: number;
  total: number;
  masteryPct: number | null;
  lastUpdated: string | null;
};

export type AdminTheoryRow = {
  subject: string;
  chapterId: string;
  sectionId: string;
  timeSeconds: number;
  scrollPct: number;
  completed: boolean;
  updatedAt: string;
};

export type AdminActivityEvent = {
  id: string;
  eventType: string;
  subject: string | null;
  entityType: string | null;
  entityId: string | null;
  metadata: Record<string, unknown>;
  durationMs: number | null;
  createdAt: string;
};

export type AdminUserDetail = {
  profile: {
    userId: string;
    email: string;
    displayName: string;
    registeredAt: string;
    lastSeenAt: string | null;
    lastPath: string | null;
    userAgent: string | null;
    roles: string[];
  };
  enrollments: {
    productSlug: string;
    productName: string;
    tier: string;
    createdAt: string;
  }[];
  subjectStats: SubjectStats[];
  studyProgress: StudyProgressSummary;
  taskAttempts: AdminTaskAttemptRow[];
  mocks: AdminMockRow[];
  customMocks: {
    id: string;
    title: string;
    subject: string;
    questionCount: number;
    createdAt: string;
  }[];
  practiceSessions: AdminPracticeSessionRow[];
  flashcards: AdminFlashcardDeckSummary[];
  theory: AdminTheoryRow[];
  recentActivity: AdminActivityEvent[];
  totals: {
    totalStudyTimeSeconds: number;
    taskDurationSeconds: number;
    mockDurationSeconds: number;
    theoryTimeSeconds: number;
    practiceSessionsCount: number;
    flashcardsRated: number;
  };
};

export type AdminListUsersResult = {
  users: AdminUserRow[];
  total: number;
  page: number;
  pageSize: number;
};

export type AdminTimelineResult = {
  events: AdminActivityEvent[];
  total: number;
  page: number;
  pageSize: number;
};

export type { DayProgress };
