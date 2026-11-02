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

function CalendlyInlineWidget({
  url = CALENDLY_BOOKING_URL,
  className,
}: {
  url?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
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
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      parent.replaceChildren();
    };
  }, [url]);

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
      className={cn("bbe-calendly-embed min-h-[700px] w-full overflow-hidden", className)}
      style={{ minWidth: 320 }}
    />
  );
}

/** Inline Calendly scheduler — mounts only after hydration (script + iframe). */
export function CalendlyInlineEmbed({
  url = CALENDLY_BOOKING_URL,
  className,
}: {
  url?: string;
  className?: string;
}) {
  return (
    <ClientOnly
      fallback={
        <div
          className={cn("min-h-[700px] w-full animate-pulse rounded-xl bg-muted/40", className)}
          aria-hidden
        />
      }
    >
      <CalendlyInlineWidget url={url} className={className} />
    </ClientOnly>
  );
}
