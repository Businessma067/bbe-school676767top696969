import type { ExamQuestion } from "@/lib/mock-exams";

export type CustomMockRow = {
  id: string;
  user_id: string;
  subject: string;
  title: string;
  chapters: string[];
  question_count: number;
  duration_minutes: number;
  points_total: number;
  questions: ExamQuestion[];
  created_at: string;
};

export type CustomMockSummary = {
  id: string;
  examId: string;
  title: string;
  subject: string;
  chapters: string[];
  questionCount: number;
  durationMinutes: number;
  pointsTotal: number;
  createdAt: string;
};

export type GenerateCustomMockInput = {
  subject?: "economics" | "math" | "english";
  subtopics: string[];
  questionCount: number;
  /** Per-subtopic question targets (sum must equal questionCount). */
  topicCounts?: Record<string, number>;
};

export type GeneratedQuestionPayload = {
  stem: string;
  statements: {
    text: string;
    isTrue: boolean;
    explanation: string;
  }[];
};
