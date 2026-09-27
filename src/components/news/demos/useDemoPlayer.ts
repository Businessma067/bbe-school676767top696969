import { useEffect, useRef, useState, type RefObject } from "react";

export type DemoPlayerApi = {
  wait: (ms: number) => Promise<void>;
  tween: (duration: number, onFrame: (eased: number) => void) => Promise<void>;
  moveTo: (selector: string) => Promise<void>;
  click: () => Promise<void>;
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

    const tween = (duration: number, onFrame: (eased: number) => void) =>
      new Promise<void>((resolve) => {
        if (duration <= 0) {
          onFrame(1);
          return resolve();
        }
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - t0) / duration);
          onFrame(easeInOut(t));
          if (t < 1) requestAnimationFrame(step);
          else resolve();
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
      if (el) el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
    };

    const glideCursor = (target: { x: number; y: number }, duration = 620) => {
      const start = { ...cursorPos.current };
      const goal = clampToStage(target);
      const dist = Math.hypot(goal.x - start.x, goal.y - start.y);
      if (dist < 1) return Promise.resolve();
      const d = Math.max(280, Math.min(duration, 220 + dist * 1.55));
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
      const eb = el.getBoundingClientRect();
      if (eb.width === 0 && eb.height === 0) return null;
      return {
        x: eb.left - s.left + eb.width / 2 - 5,
        y: eb.top - s.top + eb.height / 2 - 3,
      };
    };

    const moveTo = async (selector: string) => {
      const stage = stageRef.current;
      const box = scrollRef.current;
      if (!stage) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;

      if (box && box.contains(el)) {
        const lb = box.getBoundingClientRect();
        const eb0 = el.getBoundingClientRect();
        const desired = box.scrollTop + (eb0.top - lb.top) - lb.height / 2 + eb0.height / 2;
        const clamped = Math.max(0, Math.min(desired, box.scrollHeight - box.clientHeight));
        if (Math.abs(clamped - box.scrollTop) > 1) {
          const startCursor = { ...cursorPos.current };
          const startScroll = box.scrollTop;
          const change = clamped - startScroll;
          await tween(560, (eased) => {
            box.scrollTop = startScroll + change * eased;
            const live = pointOf(selector);
            if (!live) return;
            setCursorAt({
              x: startCursor.x + (live.x - startCursor.x) * eased,
              y: startCursor.y + (live.y - startCursor.y) * eased,
            });
          });
        }
      }
      if (cancelled) return;
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      const target = pointOf(selector);
      if (!target) return;
      await glideCursor(target);
      await wait(180);
    };

    const click = async () => {
      setClicking(true);
      await wait(110);
      setClicking(false);
      await wait(120);
    };

    const api: DemoPlayerApi = {
      wait,
      tween,
      moveTo,
      click,
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
