import { ClientOnly } from "@tanstack/react-router";
import { Component, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

import { CALENDLY_BOOKING_URL } from "@/components/CalendlyInlineEmbed";
import { getCallMonth, type CallDay } from "@/lib/call-availability.functions";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

type MonthResult = { ok: true; days: CallDay[] } | { ok: false; days: [] };

const CLIENT_MONTH_TTL_MS = 5 * 60 * 1000;
const monthInflight = new Map<string, Promise<MonthResult>>();
const monthCache = new Map<string, { at: number; result: MonthResult }>();

function peekCachedMonth(month: string): MonthResult | null {
  const cached = monthCache.get(month);
  if (!cached) return null;
  if (Date.now() - cached.at > CLIENT_MONTH_TTL_MS) {
    monthCache.delete(month);
    return null;
  }
  return cached.result;
}

function loadCallMonth(month: string): Promise<MonthResult> {
  const cached = peekCachedMonth(month);
  if (cached) return Promise.resolve(cached);
  const existing = monthInflight.get(month);
  if (existing) return existing;
  const request = getCallMonth({ data: { month } })
    .then((result) => {
      monthCache.set(month, { at: Date.now(), result });
      return result;
    })
    .finally(() => {
      monthInflight.delete(month);
    });
  monthInflight.set(month, request);
  return request;
}

/** Start the availability fetch before the interactive calendar hydrates. */
export function prefetchCallMonth(month?: string): void {
  const target = month ?? viennaToday().slice(0, 7);
  void loadCallMonth(target).catch(() => {
    /* live UI handles errors */
  });
}

const TIMEZONE = "Europe/Vienna";
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function viennaToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function shiftMonth(month: string, delta: number): string {
  const [year, monthIndex] = month.split("-").map(Number);
  const next = new Date(Date.UTC(year, monthIndex - 1 + delta, 1));
  return `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}`;
}

function formatTime(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(iso));
}

/** Calendly only keeps the slot when the path time is UTC (`...T17:30:00Z`). */
function slotHref(start: string): string {
  const parsed = new Date(start);
  if (Number.isNaN(parsed.getTime())) return CALENDLY_BOOKING_URL;
  const utc = parsed.toISOString().replace(".000Z", "Z");
  return `${CALENDLY_BOOKING_URL}/${utc}`;
}

const DRUM_ITEM_PX = 32;

/** One scrollable wheel. The centered time is the selection. */
function TimeDrum({
  spots,
  value,
  onChange,
}: {
  spots: string[];
  value: string | null;
  onChange: (spot: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const fromUserScroll = useRef(false);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || !value) return;
    if (fromUserScroll.current) {
      fromUserScroll.current = false;
      return;
    }
    const index = spots.indexOf(value);
    if (index < 0) return;
    el.scrollTop = index * DRUM_ITEM_PX;
  }, [spots, value]);

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.max(0, Math.min(spots.length - 1, Math.round(el.scrollTop / DRUM_ITEM_PX)));
    const spot = spots[index];
    if (!spot || spot === value) return;
    fromUserScroll.current = true;
    onChange(spot);
  }

  return (
    <div className="relative h-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-8 -translate-y-1/2 rounded-sm bg-secondary"
        aria-hidden
      />
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        role="listbox"
        aria-label="Vienna time"
        data-no-i18n
        className="relative z-10 h-24 snap-y snap-mandatory overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="h-8" aria-hidden />
        {spots.map((spot) => {
          const selected = spot === value;
          return (
            <button
              key={spot}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onChange(spot)}
              className={cn(
                "flex h-8 w-full snap-center items-center justify-center text-sm tabular-nums",
                selected ? "font-semibold text-foreground" : "text-muted-foreground",
              )}
            >
              {formatTime(spot)}
            </button>
          );
        })}
        <div className="h-8" aria-hidden />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-7 bg-gradient-to-b from-card to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-7 bg-gradient-to-t from-card to-transparent" />
    </div>
  );
}

function monthCells(month: string): { date: string | null; day: number | null }[] {
  const [year, monthIndex] = month.split("-").map(Number);
  const first = new Date(Date.UTC(year, monthIndex - 1, 1));
  const lead = (first.getUTCDay() + 6) % 7;
  const count = new Date(Date.UTC(year, monthIndex, 0)).getUTCDate();
  const cells: { date: string | null; day: number | null }[] = [];
  for (let i = 0; i < lead; i += 1) cells.push({ date: null, day: null });
  for (let day = 1; day <= count; day += 1) {
    const date = `${month}-${String(day).padStart(2, "0")}`;
    cells.push({ date, day });
  }
  return cells;
}

function applyMonthResult(
  result: MonthResult,
  selectedDate: string | null,
): {
  days: CallDay[];
  status: "ready" | "error";
  selectedDate: string | null;
  selectedSpot: string | null;
} {
  if (!result.ok) {
    return { days: [], status: "error", selectedDate: null, selectedSpot: null };
  }
  const nextDate =
    selectedDate && result.days.some((day) => day.date === selectedDate)
      ? selectedDate
      : (result.days[0]?.date ?? null);
  return {
    days: result.days,
    status: "ready",
    selectedDate: nextDate,
    selectedSpot: result.days.find((day) => day.date === nextDate)?.spots[0] ?? null,
  };
}

function CourseCallCalendarLive() {
  const today = viennaToday();
  const currentMonth = today.slice(0, 7);
  const cached = peekCachedMonth(currentMonth);
  const initial = cached ? applyMonthResult(cached, null) : null;
  const [month, setMonth] = useState(currentMonth);
  const [days, setDays] = useState<CallDay[]>(initial?.days ?? []);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(initial?.status ?? "loading");
  const [selectedDate, setSelectedDate] = useState<string | null>(initial?.selectedDate ?? null);
  const [selectedSpot, setSelectedSpot] = useState<string | null>(initial?.selectedSpot ?? null);
  const selectedDateRef = useRef(selectedDate);
  selectedDateRef.current = selectedDate;

  useEffect(() => {
    let cancelled = false;
    if (!peekCachedMonth(month)) setStatus("loading");
    loadCallMonth(month)
      .then((result) => {
        if (cancelled) return;
        const next = applyMonthResult(result, selectedDateRef.current);
        setDays(next.days);
        setStatus(next.status);
        setSelectedDate(next.selectedDate);
        setSelectedSpot(next.selectedSpot);
        // Warm the neighboring month while the user is picking a day.
        if (result.ok) prefetchCallMonth(shiftMonth(month, 1));
      })
      .catch(() => {
        if (!cancelled) {
          setDays([]);
          setStatus("error");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [month]);

  const spotsByDate = new Map(days.map((day) => [day.date, day.spots]));
  const spots = selectedDate ? (spotsByDate.get(selectedDate) ?? []) : [];
  const lastMonth = shiftMonth(currentMonth, 4);

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          aria-label="Previous month"
          disabled={month <= currentMonth}
          onClick={() => setMonth((value) => shiftMonth(value, -1))}
          className="grid h-7 w-7 place-items-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <p className="font-display text-[13px] font-semibold text-foreground">
          {MONTHS[Number(month.slice(5, 7)) - 1]}{" "}
          <span data-no-i18n>{month.slice(0, 4)}</span>
        </p>
        <button
          type="button"
          aria-label="Next month"
          disabled={month >= lastMonth}
          onClick={() => setMonth((value) => shiftMonth(value, 1))}
          className="grid h-7 w-7 place-items-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-7 text-center">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
          >
            {day}
          </div>
        ))}
        {monthCells(month).map((cell, index) => {
          if (!cell.date || cell.day == null) {
            return <div key={`pad-${index}`} className="h-7" />;
          }
          const date = cell.date;
          const available = spotsByDate.has(cell.date);
          const selected = cell.date === selectedDate;
          const isToday = cell.date === today;
          return (
            <button
              key={cell.date}
              type="button"
              disabled={!available}
              aria-pressed={selected}
              aria-label={cell.date}
              onClick={() => {
                setSelectedDate(date);
                setSelectedSpot(spotsByDate.get(date)?.[0] ?? null);
              }}
              className={cn(
                "mx-auto grid h-7 w-7 place-items-center rounded-sm font-display text-[13px] tabular-nums",
                available && !selected && "text-foreground hover:bg-secondary",
                !available && "cursor-default text-muted-foreground/35",
                selected && "bg-primary text-primary-foreground",
                isToday && !selected && "ring-1 ring-foreground/25",
              )}
            >
              {cell.day}
            </button>
          );
        })}
      </div>

      <div className="mt-2 border-t border-border pt-2">
        <p className="text-[11px] font-medium tracking-wide text-taupe">Vienna time</p>
        {status === "loading" ? (
          <p className="mt-2 text-sm text-muted-foreground">Loading open times</p>
        ) : status === "error" ? (
          <a
            href={CALENDLY_BOOKING_URL}
            className="mt-2 inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Open the booking calendar
          </a>
        ) : spots.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">No open times this month</p>
        ) : (
          <div className="mt-1">
            <TimeDrum spots={spots} value={selectedSpot} onChange={setSelectedSpot} />
          </div>
        )}

        {selectedSpot ? (
          <a
            href={slotHref(selectedSpot)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Confirm this time
          </a>
        ) : null}
      </div>
    </div>
  );
}

function CalendarSkeleton() {
  return <div className="h-56 animate-pulse rounded-sm bg-muted/50" aria-hidden />;
}

function CalendarFallback() {
  return (
    <a
      href={CALENDLY_BOOKING_URL}
      className="inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:underline"
    >
      Open the booking calendar
    </a>
  );
}

class CalendarBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <CalendarFallback />;
    return this.props.children;
  }
}

/** Site-styled 20-minute call picker. Availability is live; confirmation opens the reserved slot. */
export function CourseCallCalendar({ className }: { className?: string }) {
  // Kick off the availability fetch during the outer shell render — do not wait for ClientOnly.
  useEffect(() => {
    prefetchCallMonth();
  }, []);

  return (
    <section
      id="book"
      className={cn(
        "scroll-mt-24 rounded-2xl border border-border bg-card p-3 text-foreground shadow-sm sm:p-3.5",
        className,
      )}
    >
      <p className="text-[11px] font-medium tracking-wide text-taupe">20 minutes · phone call</p>
      <h2 className="mt-1 font-display text-[15px] font-semibold leading-snug text-foreground">
        Book a 20-minute call to learn everything about the course
      </h2>
      <div className="mt-2.5">
        <CalendarBoundary>
          <ClientOnly fallback={<CalendarSkeleton />}>
            <CourseCallCalendarLive />
          </ClientOnly>
        </CalendarBoundary>
      </div>
    </section>
  );
}

const DOCK_PATHS = new Set([
  "/bbe",
  "/wiso",
  "/hybrid",
  "/products/full-course",
  "/wiso/products/full-course",
  "/products/hybrid-course",
]);

/** Fixed corner chip on the three tracks and their product pages. */
export function CourseCallDock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const path = stripLocalePrefix(pathname);
  if (!DOCK_PATHS.has(path)) return null;

  return (
    <div className="fixed top-[7.5rem] right-[max(0.75rem,env(safe-area-inset-right))] z-40 flex w-[min(19rem,calc(100vw-1.5rem))] flex-col items-end sm:top-[7rem]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="book"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-3.5 pl-1.5 text-left shadow-[0_12px_32px_-16px_rgba(22,22,22,0.55)]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
          <CalendarDays className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-[10px] font-medium tracking-wide text-taupe">20 min · phone</span>
          <span className="block font-display text-[13px] font-semibold leading-tight text-foreground">
            Book a call
          </span>
        </span>
      </button>
      {open ? (
        <div className="mt-2 max-h-[min(32rem,calc(100vh-7.5rem))] w-full overflow-auto">
          <CourseCallCalendar />
        </div>
      ) : null}
    </div>
  );
}
