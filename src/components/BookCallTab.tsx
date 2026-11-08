import { useEffect, useRef, useState } from "react";
import { CalendarDays, Loader2, Lock } from "lucide-react";
import {
  CalendlyInlineEmbed,
  warmCalendlyConnections,
  type CalendlyPrefill,
  type CalendlyScheduledPayload,
} from "@/components/CalendlyInlineEmbed";
import {
  CONSULTATION_CALL_SLUG,
  FREE_CALLS_WITH_COURSE,
  computeCallBookingStatus,
  type CallBookingStatus,
} from "@/lib/call-booking";
import { getCallBookingStatus, recordCallBooking } from "@/lib/call-booking.functions";
import { createCheckout } from "@/lib/payments.functions";
import { ADDON_PRODUCTS, MONOBANK_TEST_CHARGE } from "@/lib/checkout-catalog";

type BookCallTabProps = {
  prefill?: CalendlyPrefill;
};

function bookingDedupeKey(payload: CalendlyScheduledPayload, clientKey: string): string {
  return payload.eventUri || payload.inviteeUri || clientKey;
}

let cachedCallStatus: CallBookingStatus | null = null;
let callStatusInflight: Promise<CallBookingStatus> | null = null;

function fetchCallStatus(): Promise<CallBookingStatus> {
  if (cachedCallStatus) return Promise.resolve(cachedCallStatus);
  if (callStatusInflight) return callStatusInflight;
  callStatusInflight = getCallBookingStatus()
    .then((next) => {
      cachedCallStatus = next;
      return next;
    })
    .finally(() => {
      callStatusInflight = null;
    });
  return callStatusInflight;
}

/** Prefetch allowance + warm Calendly while the user is still on another dashboard tab. */
export function prefetchBookCallTab(): void {
  warmCalendlyConnections();
  void fetchCallStatus().catch((err) => {
    console.error("BookCallTab: prefetch", err);
  });
}

export function BookCallTab({ prefill }: BookCallTabProps) {
  const [status, setStatus] = useState<CallBookingStatus | null>(() => cachedCallStatus);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [buying, setBuying] = useState(false);
  const [buyError, setBuyError] = useState<string | null>(null);
  const [recordNote, setRecordNote] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const recordedKeysRef = useRef(new Set<string>());
  const statusRef = useRef<CallBookingStatus | null>(null);
  statusRef.current = status;

  useEffect(() => {
    warmCalendlyConnections();
    let cancelled = false;
    void (async () => {
      try {
        const next = await fetchCallStatus();
        if (!cancelled) {
          setStatus(next);
          setLoadError(null);
        }
      } catch (err) {
        console.error("BookCallTab: status", err);
        if (!cancelled) {
          setLoadError("Could not load your call allowance. Refresh and try again.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleScheduled = async (payload: CalendlyScheduledPayload) => {
    const clientKey =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `bk-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const dedupeKey = bookingDedupeKey(payload, clientKey);
    if (recordedKeysRef.current.has(dedupeKey)) return;
    recordedKeysRef.current.add(dedupeKey);

    const previous = statusRef.current;
    setRecordNote(null);
    setRecording(true);

    // Optimistic decrement so remaining calls update immediately on booking.
    if (previous) {
      const optimistic = computeCallBookingStatus({
        ownsPaidCourse: previous.ownsPaidCourse,
        bookingsUsed: previous.bookingsUsed + 1,
        paidCredits: previous.paidCredits,
      });
      cachedCallStatus = optimistic;
      setStatus(optimistic);
    }

    try {
      const result = await recordCallBooking({
        data: {
          ...(payload.eventUri ? { eventUri: payload.eventUri } : {}),
          ...(payload.inviteeUri ? { inviteeUri: payload.inviteeUri } : {}),
          clientKey,
        },
      });
      if (result.status) {
        cachedCallStatus = result.status;
        setStatus(result.status);
      } else if (previous && !result.ok) {
        cachedCallStatus = previous;
        setStatus(previous);
      }
      if (!result.ok) {
        recordedKeysRef.current.delete(dedupeKey);
        setRecordNote(result.error);
        return;
      }
      setRecordNote("Your call is booked. See you then.");
    } catch (err) {
      console.error("BookCallTab: record", err);
      if (previous) {
        cachedCallStatus = previous;
        setStatus(previous);
      }
      recordedKeysRef.current.delete(dedupeKey);
      setRecordNote(
        "Call booked in Calendly, but we could not update your allowance. Contact support if this persists.",
      );
    } finally {
      setRecording(false);
    }
  };

  const handleBuyCall = async () => {
    setBuyError(null);
    setBuying(true);
    try {
      const result = await createCheckout({
        data: { productSlug: CONSULTATION_CALL_SLUG },
      });
      if (!result.ok) {
        setBuyError(result.error);
        setBuying(false);
        return;
      }
      window.location.assign(result.pageUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not start the payment.";
      setBuyError(/unauthorized/i.test(message) ? "Sign in to buy a call." : message);
      setBuying(false);
    }
  };

  const priceLabel = MONOBANK_TEST_CHARGE.enabled
    ? MONOBANK_TEST_CHARGE.label
    : `€${ADDON_PRODUCTS["consultation-call"].priceEur}`;

  if (loadError) {
    return <p className="text-sm text-destructive">{loadError}</p>;
  }

  if (!status) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">Book a call</h2>
          <p className="mt-2 text-sm text-muted-foreground">Checking your call allowance…</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="h-[760px] w-full animate-pulse bg-muted/40" aria-hidden />
        </div>
      </div>
    );
  }

  const locked = !status.canBook;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold tracking-tight">Book a call</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {status.ownsPaidCourse
            ? `Course students get ${status.freeAllowance} free 30-minute calls. Extra calls are ${priceLabel} each.`
            : `You can book ${status.freeAllowance} free intro call without a course. After buying a course you get ${FREE_CALLS_WITH_COURSE} free calls; extra slots are ${priceLabel}.`}
        </p>
        <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
          {locked
            ? `No free calls left · ${status.bookingsUsed} used`
            : `${status.remaining} call${status.remaining === 1 ? "" : "s"} remaining · ${status.bookingsUsed} used`}
          {recording ? " · Saving booking…" : null}
        </p>
        {recordNote ? (
          <p className="mt-2 text-sm text-foreground" role="status">
            {recordNote}
          </p>
        ) : null}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        {locked ? (
          <div
            className="relative flex min-h-[28rem] flex-col items-center justify-center gap-4 bg-muted/30 px-6 py-16 text-center"
            aria-live="polite"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-12deg, transparent, transparent 12px, rgba(0,0,0,0.04) 12px, rgba(0,0,0,0.04) 24px)",
              }}
            />
            <div className="relative z-[1] grid h-14 w-14 place-items-center rounded-full border border-border bg-background shadow-sm">
              <Lock className="h-6 w-6 text-muted-foreground" aria-hidden />
            </div>
            <div className="relative z-[1] max-w-md space-y-2">
              <p className="font-display text-2xl font-semibold text-foreground">
                Calendar locked
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You have used all free calls on this account. Buy another 30-minute call for{" "}
                <span className="font-semibold text-foreground">{priceLabel}</span>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => void handleBuyCall()}
              disabled={buying}
              className="relative z-[1] inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {buying ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Opening checkout…
                </>
              ) : (
                <>
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  Buy a call · {priceLabel}
                </>
              )}
            </button>
            {buyError ? (
              <p className="relative z-[1] text-sm text-destructive" role="alert">
                {buyError}
              </p>
            ) : null}
          </div>
        ) : (
          <CalendlyInlineEmbed eager prefill={prefill} onEventScheduled={handleScheduled} />
        )}
      </div>
    </div>
  );
}
