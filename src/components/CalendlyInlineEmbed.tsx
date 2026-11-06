import { ClientOnly } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
export const CALENDLY_BOOKING_URL = "https://calendly.com/bbe-school-info/30min";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

export type CalendlyPrefill = {
  name?: string;
  email?: string;
};

export type CalendlyScheduledPayload = {
  eventUri?: string;
  inviteeUri?: string;
};

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT_SRC}"]`,
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed")), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed"));
    document.head.appendChild(script);
  });
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

function CalendlyInlineWidget({
  url = CALENDLY_BOOKING_URL,
  className,
  prefill,
  onEventScheduled,
}: {
  url?: string;
  className?: string;
  prefill?: CalendlyPrefill;
  onEventScheduled?: (payload: CalendlyScheduledPayload) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onScheduledRef = useRef(onEventScheduled);
  onScheduledRef.current = onEventScheduled;
  const seenKeysRef = useRef(new Set<string>());
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    let cancelled = false;
    parent.replaceChildren();

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) return;
        window.Calendly.initInlineWidget({
          url: `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1`,
          parentElement: containerRef.current,
          ...(prefill?.name || prefill?.email
            ? {
                prefill: {
                  ...(prefill.name ? { name: prefill.name } : {}),
                  ...(prefill.email ? { email: prefill.email } : {}),
                },
              }
            : {}),
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      parent.replaceChildren();
    };
  }, [url, prefill?.name, prefill?.email]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isCalendlyOrigin(event.origin)) return;
      const scheduled = parseScheduledPayload(event.data);
      if (!scheduled) return;

      // Deduplicate duplicate postMessage deliveries for the same booking.
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
      ref={containerRef}
      data-no-i18n
      // Not `calendly-inline-widget`: widget.js auto-processes that class on load,
      // throws without a data-url, and never defines window.Calendly.
      data-auto-load="false"
      className={cn("bbe-calendly-embed h-[760px] w-full overflow-hidden", className)}
      style={{ minWidth: 320 }}
    />
  );
}

/** Inline Calendly scheduler — mounts only after hydration (script + iframe). */
export function CalendlyInlineEmbed({
  url = CALENDLY_BOOKING_URL,
  className,
  prefill,
  onEventScheduled,
}: {
  url?: string;
  className?: string;
  prefill?: CalendlyPrefill;
  onEventScheduled?: (payload: CalendlyScheduledPayload) => void;
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
      />
    </ClientOnly>
  );
}
