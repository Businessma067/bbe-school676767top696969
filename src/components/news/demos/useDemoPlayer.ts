import { useEffect, useRef, useState, type RefObject } from "react";

export type DemoPlayerApi = {
  wait: (ms: number) => Promise<void>;
  tween: (duration: number, onFrame: (eased: number) => void | Promise<void>) => Promise<void>;
  /** `dwell` is how long the pointer rests after it arrives. Default keeps the course pace. */
  moveTo: (selector: string, dwell?: number) => Promise<void>;
  /** Press the pointer. `onPress` runs on the down frame, before the click ends. */
  click: (onPress?: () => void) => Promise<void>;
  /** Re-read a live element and park the cursor on it (weight-handle chase). */
  snapTo: (selector: string) => void;
  /**
   * Wait until React has committed and the browser has laid out.
   * Call after setState and before snapTo / measurement.
   */
  flush: () => Promise<void>;
  /** Scroll the stage only as far as needed to show `selector` (no cursor glide). */
  reveal: (selector: string) => Promise<void>;
  setCursorAt: (p: { x: number; y: number }) => void;
  cancelled: () => boolean;
  stage: () => HTMLDivElement | null;
  scroll: () => HTMLDivElement | null;
};

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/**
 * Shared rAF cursor loop used by news unique demos.
 * Matches MockBuilderSimulator smoothness: DOM transform cursor, visibility pause, eased tweens.
 */
export function useDemoPlayer(
  run: (api: DemoPlayerApi) => Promise<void>,
  deps: unknown[] = [],
): {
  stageRef: RefObject<HTMLDivElement | null>;
  scrollRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  clicking: boolean;
  fade: boolean;
  setFade: (v: boolean) => void;
} {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorPos = useRef({ x: 36, y: 36 });
  const visibleRef = useRef(true);
  const [clicking, setClicking] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const wait = async (ms: number) => {
      await sleep(ms);
      while (!cancelled && !visibleRef.current) await sleep(200);
    };

    const flush = () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          if (cancelled) return resolve();
          requestAnimationFrame(() => resolve());
        });
      });

    const tween = (duration: number, onFrame: (eased: number) => void | Promise<void>) =>
      new Promise<void>((resolve) => {
        const finish = () => resolve();
        const afterFrame = (result: void | Promise<void>, done: () => void) => {
          if (result && typeof (result as Promise<void>).then === "function") {
            void (result as Promise<void>).then(done);
            return;
          }
          done();
        };
        if (duration <= 0) {
          afterFrame(onFrame(1), finish);
          return;
        }
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return finish();
          const t = Math.min(1, (now - t0) / duration);
          let result: void | Promise<void>;
          try {
            result = onFrame(easeInOut(t));
          } catch {
            return finish();
          }
          afterFrame(result, () => {
            if (cancelled || t >= 1) finish();
            else requestAnimationFrame(step);
          });
        };
        requestAnimationFrame(step);
      });

    const clampToStage = (p: { x: number; y: number }) => {
      const stage = stageRef.current;
      if (!stage) return p;
      const r = stage.getBoundingClientRect();
      return {
        x: Math.max(4, Math.min(p.x, r.width - 14)),
        y: Math.max(4, Math.min(p.y, r.height - 14)),
      };
    };

    const setCursorAt = (p: { x: number; y: number }) => {
      const c = clampToStage(p);
      cursorPos.current = c;
      const el = cursorRef.current;
      if (el) {
        el.dataset.cx = String(c.x);
        el.dataset.cy = String(c.y);
        el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
      }
    };

    const glideCursor = (target: { x: number; y: number }, duration = 620) => {
      const start = { ...cursorPos.current };
      const goal = clampToStage(target);
      const dist = Math.hypot(goal.x - start.x, goal.y - start.y);
      if (dist < 1) return Promise.resolve();
      // Same distance scaling as MockBuilderSimulator: short hops stay quick,
      // long glides ease in/out, never shorter than ~320ms.
      const d = Math.max(320, Math.min(duration, 240 + dist * 1.6));
      return tween(d, (eased) => {
        setCursorAt({
          x: start.x + (goal.x - start.x) * eased,
          y: start.y + (goal.y - start.y) * eased,
        });
      });
    };

    const pointOf = (selector: string) => {
      const stage = stageRef.current;
      if (!stage) return null;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return null;
      const s = stage.getBoundingClientRect();
      // First line box, so a wrapped highlight is aimed at the words, not the empty middle of the union rect.
      const eb = el.getClientRects()[0] ?? el.getBoundingClientRect();
      if (eb.width === 0 && eb.height === 0) return null;
      return {
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      };
    };

    const scrollDeltaFor = (box: HTMLElement, el: HTMLElement) => {
      const pad = 18;
      const lb = box.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      if (eb.width === 0 && eb.height === 0) return 0;
      if (eb.height + pad * 2 >= lb.height) return eb.top - lb.top - pad;
      if (eb.top < lb.top + pad) return eb.top - (lb.top + pad);
      if (eb.bottom > lb.bottom - pad) return eb.bottom - (lb.bottom - pad);
      return 0;
    };

    const scrollToReveal = async (selector: string, followCursor: boolean) => {
      const stage = stageRef.current;
      const box = scrollRef.current;
      if (!stage || !box) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el || !box.contains(el)) return;
      const desired = box.scrollTop + scrollDeltaFor(box, el);
      const maxScroll = Math.max(0, box.scrollHeight - box.clientHeight);
      const clamped = Math.max(0, Math.min(desired, maxScroll));
      if (Math.abs(clamped - box.scrollTop) <= 1) return;
      const startCursor = { ...cursorPos.current };
      const startScroll = box.scrollTop;
      const change = clamped - startScroll;
      await tween(640, (eased) => {
        box.scrollTop = startScroll + change * eased;
        if (!followCursor) {
          setCursorAt(startCursor);
          return;
        }
        const live = pointOf(selector);
        if (!live) return;
        setCursorAt({
          x: startCursor.x + (live.x - startCursor.x) * eased,
          y: startCursor.y + (live.y - startCursor.y) * eased,
        });
      });
    };

    const moveTo = async (selector: string, dwell = 360) => {
      await flush();
      if (cancelled) return;
      const stage = stageRef.current;
      if (!stage) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;

      await scrollToReveal(selector, true);
      if (cancelled) return;
      await flush();
      const target = pointOf(selector);
      if (!target) return;
      await glideCursor(target);
      await wait(dwell);
    };

    const reveal = async (selector: string) => {
      await flush();
      if (cancelled) return;
      await scrollToReveal(selector, false);
    };

    const click = async (onPress?: () => void) => {
      setClicking(true);
      onPress?.();
      await flush();
      await wait(120);
      setClicking(false);
      await wait(40);
    };

    const snapTo = (selector: string) => {
      const p = pointOf(selector);
      if (!p) return;
      setCursorAt(p);
    };

    const api: DemoPlayerApi = {
      wait,
      tween,
      moveTo,
      click,
      snapTo,
      flush,
      reveal,
      setCursorAt,
      cancelled: () => cancelled,
      stage: () => stageRef.current,
      scroll: () => scrollRef.current,
    };

    void (async () => {
      while (!cancelled) {
        try {
          await run(api);
        } catch {
          /* ignore loop errors */
        }
        if (cancelled) break;
        await wait(400);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller controls deps explicitly
  }, deps);

  return { stageRef, scrollRef, cursorRef, clicking, fade, setFade };
}
