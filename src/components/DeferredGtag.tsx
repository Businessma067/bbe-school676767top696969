import { useEffect } from "react";

/** Google Ads conversion / remarketing tag (gtag.js). */
const GOOGLE_ADS_ID = "AW-18483566972";

/**
 * Load gtag after idle so it stays off the critical path.
 * Still configures the Ads ID for conversion / remarketing measurement.
 */
export function DeferredGtag() {
  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      if (cancelled || typeof document === "undefined") return;
      if (document.getElementById("bbe-gtag-js")) return;

      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.gtag =
        w.gtag ||
        function gtag(...args: unknown[]) {
          w.dataLayer!.push(args);
        };
      w.gtag("js", new Date());
      w.gtag("config", GOOGLE_ADS_ID);

      const script = document.createElement("script");
      script.id = "bbe-gtag-js";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
      document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => load(), { timeout: 2500 });
    } else {
      timeoutId = setTimeout(load, 1200);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
