import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PROFILE_SLUG = "bbe-school-info";
const EVENT_SLUG = "30min";
const TIMEZONE = "Europe/Vienna";
/** Known event-type UUID — skips the lookup round-trip on the hot path. */
const KNOWN_EVENT_UUID = "55f11fcd-4107-4bb9-bd00-77cb0d1321ea";
const LOOKUP_URL = `https://calendly.com/api/booking/event_types/lookup?event_type_slug=${EVENT_SLUG}&profile_slug=${PROFILE_SLUG}`;

const MonthInput = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/),
});

export type CallDay = {
  date: string;
  spots: string[];
};

type CacheEntry = { at: number; days: CallDay[] };
type MonthResult = { ok: true; days: CallDay[] } | { ok: false; days: [] };

let eventUuidCache: { at: number; uuid: string } | null = {
  at: Date.now(),
  uuid: KNOWN_EVENT_UUID,
};
const rangeCache = new Map<string, CacheEntry>();

const UUID_TTL_MS = 24 * 60 * 60 * 1000;
const RANGE_TTL_MS = 5 * 60 * 1000;

function viennaMonthKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
  }).format(date);
  return parts.slice(0, 7);
}

function shiftMonth(month: string, delta: number): string {
  const [year, monthIndex] = month.split("-").map(Number);
  const next = new Date(Date.UTC(year, monthIndex - 1 + delta, 1));
  const y = next.getUTCFullYear();
  const m = String(next.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function monthInWindow(month: string): boolean {
  const current = viennaMonthKey();
  return month >= current && month <= shiftMonth(current, 4);
}

async function lookupEventUuid(): Promise<string> {
  const response = await fetch(LOOKUP_URL, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error("Booking calendar lookup failed");
  const json = (await response.json()) as { uuid?: unknown };
  if (typeof json.uuid !== "string" || !json.uuid) throw new Error("Booking calendar is missing");
  eventUuidCache = { at: Date.now(), uuid: json.uuid };
  return json.uuid;
}

async function eventUuid(): Promise<string> {
  if (eventUuidCache && Date.now() - eventUuidCache.at < UUID_TTL_MS) {
    return eventUuidCache.uuid;
  }
  return lookupEventUuid();
}

async function fetchRange(uuid: string, month: string): Promise<Response> {
  const rangeEnd = `${shiftMonth(month, 1)}-01`;
  const url =
    `https://calendly.com/api/booking/event_types/${uuid}/calendar/range` +
    `?timezone=${encodeURIComponent(TIMEZONE)}&range_start=${month}-01&range_end=${rangeEnd}`;
  return fetch(url, { headers: { accept: "application/json" } });
}

function parseDays(json: {
  days?: {
    date?: string;
    status?: string;
    spots?: { status?: string; start_time?: string }[];
  }[];
}, month: string): CallDay[] {
  const days: CallDay[] = [];
  for (const day of json.days ?? []) {
    if (day.status !== "available" || typeof day.date !== "string" || !day.date.startsWith(month)) {
      continue;
    }
    const spots = (day.spots ?? [])
      .filter((spot) => spot.status === "available" && typeof spot.start_time === "string")
      .map((spot) => spot.start_time as string);
    if (spots.length > 0) days.push({ date: day.date, spots });
  }
  return days;
}

async function loadMonth(month: string): Promise<CallDay[]> {
  const cached = rangeCache.get(month);
  if (cached && Date.now() - cached.at < RANGE_TTL_MS) return cached.days;

  let uuid = await eventUuid();
  let response = await fetchRange(uuid, month);

  // UUID may have rotated — refresh from lookup once and retry.
  if (response.status === 404) {
    uuid = await lookupEventUuid();
    response = await fetchRange(uuid, month);
  }

  if (!response.ok) throw new Error("Booking calendar range failed");
  const json = (await response.json()) as {
    days?: {
      date?: string;
      status?: string;
      spots?: { status?: string; start_time?: string }[];
    }[];
  };

  const days = parseDays(json, month);
  rangeCache.set(month, { at: Date.now(), days });
  return days;
}

/** Open 20-minute call slots for one month, in Europe/Vienna. */
export const getCallMonth = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => MonthInput.parse(data))
  .handler(async ({ data }): Promise<MonthResult> => {
    if (!monthInWindow(data.month)) return { ok: true, days: [] };
    try {
      return { ok: true, days: await loadMonth(data.month) };
    } catch {
      return { ok: false, days: [] };
    }
  });
