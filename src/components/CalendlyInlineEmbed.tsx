import { ClientOnly } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const CALENDLY_BOOKING_URL = "https://calendly.com/bbe-school-info/30min";

const CALENDLY_ORIGINS = ["https://calendly.com", "https://assets.calendly.com"] as const;
/** Start the iframe a bit before the section enters the viewport. */
const LOAD_ROOT_MARGIN = "480px 0px";
const DEFAULT_HEIGHT = 760;

export type CalendlyPrefill = {
  name?: string;
  email?: string;
};

export type CalendlyScheduledPayload = {
  eventUri?: string;
  inviteeUri?: string;
};

/** DNS/TLS warm-up so the iframe can appear sooner once it mounts. */
export function warmCalendlyConnections(): void {
  if (typeof document === "undefined") return;
  for (const href of CALENDLY_ORIGINS) {
    if (document.querySelector(`link[data-calendly-warm][href="${href}"]`)) continue;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.setAttribute("data-calendly-warm", "1");
    document.head.appendChild(link);
  }
}

function buildCalendlyEmbedSrc(url: string, prefill?: CalendlyPrefill): string {
  const parsed = new URL(url);
  parsed.searchParams.set("hide_gdpr_banner", "1");
  parsed.searchParams.set("embed_type", "Inline");
  if (typeof window !== "undefined" && window.location.hostname) {
    parsed.searchParams.set("embed_domain", window.location.hostname);
  }
  if (prefill?.name) parsed.searchParams.set("name", prefill.name);
  if (prefill?.email) parsed.searchParams.set("email", prefill.email);
  return parsed.toString();
}

function isCalendlyOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname;
    return host === "calendly.com" || host.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

function coerceMessageData(data: unknown): unknown {
  if (typeof data !== "string") return data;
  try {
    return JSON.parse(data) as unknown;
  } catch {
    return data;
  }
}

/** Exported for tests — parses Calendly parent-window postMessage payloads. */
export function parseScheduledPayload(data: unknown): CalendlyScheduledPayload | null {
  const root = coerceMessageData(data);
  if (!root || typeof root !== "object") return null;
  const eventName = (root as { event?: unknown }).event;
  if (typeof eventName !== "string" || eventName !== "calendly.event_scheduled") return null;

  const payload = (root as { payload?: unknown }).payload;
  if (!payload || typeof payload !== "object") return {};

  const p = payload as {
    event?: { uri?: unknown } | string;
    invitee?: { uri?: unknown } | string;
  };

  const eventUri =
    typeof p.event === "string"
      ? p.event
      : typeof p.event?.uri === "string"
        ? p.event.uri
        : undefined;
  const inviteeUri =
    typeof p.invitee === "string"
      ? p.invitee
      : typeof p.invitee?.uri === "string"
        ? p.invitee.uri
        : undefined;

  return {
    ...(eventUri ? { eventUri } : {}),
    ...(inviteeUri ? { inviteeUri } : {}),
  };
}

function parsePageHeight(data: unknown): number | null {
  const root = coerceMessageData(data);
  if (!root || typeof root !== "object") return null;
  if ((root as { event?: unknown }).event !== "calendly.page_height") return null;
  const payload = (root as { payload?: unknown }).payload;
  if (!payload || typeof payload !== "object") return null;
  const height = (payload as { height?: unknown }).height;
  if (typeof height === "number" && Number.isFinite(height) && height > 0) return height;
  if (typeof height === "string") {
    const n = Number.parseFloat(height);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  return null;
}

function CalendlyInlineWidget({
  url = CALENDLY_BOOKING_URL,
  className,
  prefill,
  onEventScheduled,
  eager = false,
}: {
  url?: string;
  className?: string;
  prefill?: CalendlyPrefill;
  onEventScheduled?: (payload: CalendlyScheduledPayload) => void;
  eager?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const onScheduledRef = useRef(onEventScheduled);
  onScheduledRef.current = onEventScheduled;
  const seenKeysRef = useRef(new Set<string>());

  const [shouldLoad, setShouldLoad] = useState(eager);
  const [iframeHeight, setIframeHeight] = useState(DEFAULT_HEIGHT);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    warmCalendlyConnections();
    if (eager || shouldLoad) return;
    const el = hostRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: LOAD_ROOT_MARGIN, threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isCalendlyOrigin(event.origin)) return;

      const height = parsePageHeight(event.data);
      if (height != null) {
        setIframeHeight(Math.max(560, Math.ceil(height)));
        return;
      }

      const scheduled = parseScheduledPayload(event.data);
      if (!scheduled) return;

      const key =
        scheduled.eventUri ||
        scheduled.inviteeUri ||
        `scheduled:${JSON.stringify(event.data).slice(0, 200)}`;
      if (seenKeysRef.current.has(key)) return;
      seenKeysRef.current.add(key);

      onScheduledRef.current?.(scheduled);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (failed) {
    return (
      <div
        className={cn(
          "flex min-h-[16rem] items-center justify-center rounded-xl border border-border bg-card px-6 py-10 text-center",
          className,
        )}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Open the booking calendar
        </a>
      </div>
    );
  }

  return (
    <div
      ref={hostRef}
      data-no-i18n
      data-auto-load="false"
      className={cn("bbe-calendly-embed w-full overflow-hidden", className)}
      style={{ minHeight: iframeHeight, minWidth: 320 }}
    >
      {shouldLoad ? (
        <iframe
          title="Book a call"
          src={buildCalendlyEmbedSrc(url, prefill)}
          className="block w-full border-0"
          style={{ height: iframeHeight, minWidth: 320 }}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="h-full w-full animate-pulse rounded-xl bg-muted/40"
          style={{ minHeight: DEFAULT_HEIGHT }}
          aria-hidden
        />
      )}
    </div>
  );
}

/** Inline Calendly scheduler — mounts after hydration; iframe loads near viewport. */
export function CalendlyInlineEmbed({
  url = CALENDLY_BOOKING_URL,
  className,
  prefill,
  onEventScheduled,
  eager = false,
}: {
  url?: string;
  className?: string;
  prefill?: CalendlyPrefill;
  onEventScheduled?: (payload: CalendlyScheduledPayload) => void;
  eager?: boolean;
}) {
  return (
    <ClientOnly
      fallback={
        <div
          className={cn("h-[760px] w-full animate-pulse rounded-xl bg-muted/40", className)}
          aria-hidden
        />
      }
    >
      <CalendlyInlineWidget
        url={url}
        className={className}
        prefill={prefill}
        onEventScheduled={onEventScheduled}
        eager={eager}
      />
    </ClientOnly>
  );
}
