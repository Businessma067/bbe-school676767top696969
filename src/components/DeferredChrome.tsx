import { Suspense, lazy, useEffect, useState, type ComponentType, type ReactNode } from "react";

/**
 * Mount non-critical chrome after first paint / idle time so clicks and
 * navigation stay responsive on the initial viewport.
 */
export function DeferredChrome({
  children,
  delayMs = 0,
}: {
  children: ReactNode;
  delayMs?: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const schedule = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => enable(), { timeout: 1200 });
      } else {
        timeoutId = setTimeout(enable, 200);
      }
    };

    if (delayMs > 0) {
      timeoutId = setTimeout(schedule, delayMs);
    } else {
      schedule();
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [delayMs]);

  if (!ready) return null;
  return <Suspense fallback={null}>{children}</Suspense>;
}

export function lazyNamed<T extends Record<string, unknown>, K extends keyof T>(
  loader: () => Promise<T>,
  exportName: K,
): ComponentType<T[K] extends ComponentType<infer P> ? P : never> {
  return lazy(async () => {
    const mod = await loader();
    return { default: mod[exportName] as ComponentType<unknown> };
  }) as ComponentType<T[K] extends ComponentType<infer P> ? P : never>;
}
