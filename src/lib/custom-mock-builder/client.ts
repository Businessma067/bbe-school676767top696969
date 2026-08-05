import { supabase } from "@/integrations/supabase/client";
import { customMockExamId } from "@/config/custom-mock-builder";
import type { ExamQuestion } from "@/lib/mock-exams";
import type { CustomMockRow, CustomMockSummary } from "./types";

function mapRow(row: {
  id: string;
  user_id: string;
  subject: string;
  title: string;
  chapters: string[];
  question_count: number;
  duration_minutes: number;
  points_total: number;
  questions: unknown;
  created_at: string;
}): CustomMockRow {
  return {
    id: row.id,
    user_id: row.user_id,
    subject: row.subject,
    title: row.title,
    chapters: row.chapters ?? [],
    question_count: row.question_count,
    duration_minutes: row.duration_minutes,
    points_total: Number(row.points_total),
    questions: (row.questions as ExamQuestion[]) ?? [],
    created_at: row.created_at,
  };
}

export function toCustomMockSummary(row: CustomMockRow): CustomMockSummary {
  return {
    id: row.id,
    examId: customMockExamId(row.id),
    title: row.title,
    subject: row.subject,
    chapters: row.chapters,
    questionCount: row.question_count,
    durationMinutes: row.duration_minutes,
    pointsTotal: row.points_total,
    createdAt: row.created_at,
  };
}

export async function fetchCustomMocks(): Promise<CustomMockSummary[]> {
  const { data: session } = await supabase.auth.getSession();
  const userId = session.session?.user?.id;
  if (!userId) return [];

  const { data, error } = await supabase
    .from("custom_mocks")
    .select(
      "id, user_id, subject, title, chapters, question_count, duration_minutes, points_total, questions, created_at",
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("fetchCustomMocks", error);
    return [];
  }

  return (data ?? []).map((row) => toCustomMockSummary(mapRow(row as never)));
}

export async function fetchCustomMockById(id: string): Promise<CustomMockRow | null> {
  const { data: session } = await supabase.auth.getSession();
  const userId = session.session?.user?.id;
  if (!userId) return null;

  const { data, error } = await supabase
    .from("custom_mocks")
    .select(
      "id, user_id, subject, title, chapters, question_count, duration_minutes, points_total, questions, created_at",
    )
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("fetchCustomMockById", error);
    return null;
  }
  if (!data) return null;
  return mapRow(data as never);
}

export async function fetchCustomMockByExamId(
  examId: string,
): Promise<CustomMockRow | null> {
  const id = examId.startsWith("custom-") ? examId.slice("custom-".length) : examId;
  return fetchCustomMockById(id);
}

/** Local cache so take/review can resolve custom exam questions quickly. */
const CACHE_PREFIX = "bbe-custom-mock:";

export function cacheCustomMock(row: CustomMockRow): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_PREFIX + row.id, JSON.stringify(row));
  } catch {
    /* ignore */
  }
}

export function readCachedCustomMock(id: string): CustomMockRow | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + id);
    if (!raw) return null;
    return JSON.parse(raw) as CustomMockRow;
  } catch {
    return null;
  }
}

export type GenerateArgs = {
  subtopics: string[];
  questionCount: number;
};
