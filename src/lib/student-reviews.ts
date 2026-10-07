import { supabase } from "@/integrations/supabase/client";
import type { AcceptanceTrack } from "@/data/acceptance-notes";

export type CommunityReview = {
  id: string;
  track: AcceptanceTrack;
  stars: number;
  body: string;
  displayName: string;
  city: string | null;
  createdAt: string;
};

type ReviewRow = {
  id: string;
  track: string;
  stars: number;
  body: string;
  display_name: string;
  city: string | null;
  created_at: string;
};

type QueryError = { message: string; code?: string } | null;

type QueryResult<T> = Promise<{ data: T; error: QueryError }>;

function reviewsTable() {
  return (
    supabase as unknown as {
      from: (table: "student_reviews") => {
        select: (columns: string) => {
          order: (column: string, options: { ascending: boolean }) => QueryResult<ReviewRow[] | null>;
          eq: (
            column: string,
            value: string,
          ) => {
            maybeSingle: () => QueryResult<{ id: string } | null>;
          };
        };
        insert: (row: Record<string, unknown>) => QueryResult<null>;
      };
    }
  ).from("student_reviews");
}

function asTrack(value: string): AcceptanceTrack | null {
  if (value === "bbe" || value === "wiso" || value === "hybrid") return value;
  return null;
}

export async function listCommunityReviews(): Promise<CommunityReview[]> {
  const { data, error } = await reviewsTable()
    .select("id, track, stars, body, display_name, city, created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).flatMap((row) => {
    const track = asTrack(row.track);
    if (!track || row.stars < 1 || row.stars > 5) return [];
    return [
      {
        id: row.id,
        track,
        stars: row.stars,
        body: row.body,
        displayName: row.display_name,
        city: row.city,
        createdAt: row.created_at,
      },
    ];
  });
}

export async function ownCommunityReviewId(userId: string): Promise<string | null> {
  const { data, error } = await reviewsTable().select("id").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  return data?.id ?? null;
}

export async function insertCommunityReview(input: {
  userId: string;
  track: AcceptanceTrack;
  stars: number;
  body: string;
  displayName: string;
  city: string;
}): Promise<void> {
  const city = input.city.trim();
  const { error } = await reviewsTable().insert({
    user_id: input.userId,
    track: input.track,
    stars: input.stars,
    body: input.body.trim(),
    display_name: input.displayName.trim().slice(0, 80),
    city: city ? city.slice(0, 80) : null,
  });
  if (error) throw error;
}

export function isDuplicateReviewError(error: unknown): boolean {
  const code =
    error && typeof error === "object" && "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message =
    error && typeof error === "object" && "message" in error
      ? String((error as { message?: unknown }).message ?? "")
      : "";
  return code === "23505" || message.toLowerCase().includes("student_reviews_one_per_user");
}
