import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  accountOwnsPaidCourse,
  computeCallBookingStatus,
  CONSULTATION_CALL_SLUG,
  type CallBookingStatus,
} from "@/lib/call-booking";

const RecordBookingInput = z.object({
  eventUri: z.string().url().max(500).optional(),
  inviteeUri: z.string().url().max(500).optional(),
});

async function loadCallBookingStatus(userId: string): Promise<CallBookingStatus> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const [enrollmentsRes, bookingsRes, paymentsRes] = await Promise.all([
    supabaseAdmin
      .from("enrollments")
      .select("id, product_slug, product_name, tier, created_at")
      .eq("user_id", userId),
    supabaseAdmin
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
    const eventUri = data.eventUri?.trim() || null;
    const inviteeUri = data.inviteeUri?.trim() || null;

    const { error } = await supabaseAdmin.from("call_bookings").insert({
      user_id: context.userId,
      calendly_event_uri: eventUri,
      calendly_invitee_uri: inviteeUri,
      source: "calendly",
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
