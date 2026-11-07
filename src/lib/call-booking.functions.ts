import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

// The existing call-booking migration is pending; type its ledger locally until applied.
type BookingRow = { id: string; user_id: string; calendly_event_uri: string | null; calendly_invitee_uri: string | null; source: string; created_at: string };
type BookingDatabase = Omit<Database, "public"> & {
  public: Omit<Database["public"], "Tables"> & {
    Tables: Database["public"]["Tables"] & {
      call_bookings: { Row: BookingRow; Insert: Pick<BookingRow, "user_id"> & Partial<BookingRow>; Update: Partial<BookingRow>; Relationships: [] };
    };
  };
};
import {
  accountOwnsPaidCourse,
  computeCallBookingStatus,
  CONSULTATION_CALL_SLUG,
  type CallBookingStatus,
} from "@/lib/call-booking";

/** Calendly may send API URIs; keep validation permissive so recording never drops. */
const OptionalUri = z
  .string()
  .trim()
  .max(500)
  .optional()
  .transform((value) => (value && value.length > 0 ? value : undefined));

const RecordBookingInput = z.object({
  eventUri: OptionalUri,
  inviteeUri: OptionalUri,
  /** Client-generated id used when Calendly omits URIs, so repeats still dedupe. */
  clientKey: z.string().trim().min(8).max(120).optional(),
});

async function loadCallBookingStatus(userId: string): Promise<CallBookingStatus> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const bookingDb = supabaseAdmin as unknown as SupabaseClient<BookingDatabase>;

  const [enrollmentsRes, bookingsRes, paymentsRes] = await Promise.all([
    supabaseAdmin
      .from("enrollments")
      .select("id, product_slug, product_name, tier, created_at")
      .eq("user_id", userId),
    bookingDb
      .from("call_bookings")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId),
    supabaseAdmin
      .from("payments")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("product_slug", CONSULTATION_CALL_SLUG)
      .eq("status", "success"),
  ]);

  if (enrollmentsRes.error) {
    console.error("getCallBookingStatus: enrollments", enrollmentsRes.error);
  }
  if (bookingsRes.error) {
    console.error("getCallBookingStatus: bookings", bookingsRes.error);
    // Fail closed when the ledger is unavailable so free calls cannot be overused.
    throw new Error(bookingsRes.error.message ?? "Could not load call bookings.");
  }
  if (paymentsRes.error) {
    console.error("getCallBookingStatus: payments", paymentsRes.error);
  }

  return computeCallBookingStatus({
    ownsPaidCourse: accountOwnsPaidCourse(enrollmentsRes.data ?? []),
    bookingsUsed: bookingsRes.count ?? 0,
    paidCredits: paymentsRes.error ? 0 : (paymentsRes.count ?? 0),
  });
}

/** Remaining free/paid consultation slots for the signed-in account. */
export const getCallBookingStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<CallBookingStatus> => {
    return loadCallBookingStatus(context.userId);
  });

export type RecordCallBookingResult =
  | { ok: true; status: CallBookingStatus }
  | { ok: false; error: string; status?: CallBookingStatus };

/** Records a Calendly booking against the user's free/paid call allowance. */
export const recordCallBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => RecordBookingInput.parse(d))
  .handler(async ({ context, data }): Promise<RecordCallBookingResult> => {
    const status = await loadCallBookingStatus(context.userId);
    if (!status.canBook) {
      return {
        ok: false,
        error: `No free calls left. Buy a call for €${status.priceEur}.`,
        status,
      };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const eventUri = data.eventUri ?? null;
    const inviteeUri = data.inviteeUri ?? null;
    // Prefer Calendly URIs; fall back to a client key so a booking with empty
    // payload still lands once and decrements remaining.
    const sourceKey = data.clientKey ? `client:${data.clientKey}` : "calendly";

    const bookingDb = supabaseAdmin as unknown as SupabaseClient<BookingDatabase>;
    const { error } = await bookingDb.from("call_bookings").insert({
      user_id: context.userId,
      calendly_event_uri: eventUri,
      calendly_invitee_uri: inviteeUri,
      source: sourceKey.slice(0, 40),
    });

    if (error) {
      // Same Calendly event posted twice — treat as success and refresh status.
      if (error.code === "23505") {
        return { ok: true, status: await loadCallBookingStatus(context.userId) };
      }
      console.error("recordCallBooking", error);
      if (/relation .*call_bookings.* does not exist|42P01/i.test(error.message ?? "")) {
        return {
          ok: false,
          error: "Call booking is not ready yet. Please try again shortly.",
          status,
        };
      }
      return { ok: false, error: "Could not save the booking. Try again.", status };
    }

    return { ok: true, status: await loadCallBookingStatus(context.userId) };
  });
