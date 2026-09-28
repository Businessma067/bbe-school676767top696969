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

    let lastSelector = "";
    /** Visual tip of the pointer glyph, in the cursor element's own box. */
    const TIP = { x: 5, y: 3 };

    const clampToStage = (p: { x: number; y: number }) => {
      const stage = stageRef.current;
      if (!stage) return p;
      const r = stage.getBoundingClientRect();
      return {
        x: Math.max(2, Math.min(p.x, r.width - 2)),
        y: Math.max(2, Math.min(p.y, r.height - 2)),
      };
    };

    const pointInsideStage = (p: { x: number; y: number }) => {
      const stage = stageRef.current;
      if (!stage) return false;
      const r = stage.getBoundingClientRect();
      return p.x >= 1 && p.y >= 1 && p.x <= r.width - 1 && p.y <= r.height - 1;
    };

    /** The Zoom control sits on top of the stage and steals the lower-right clicks. */
    const zoomBox = () => {
      const stage = stageRef.current;
      const zoom = stage?.parentElement?.querySelector("button[aria-label='Zoom in']");
      if (!zoom) return null;
      const r = zoom.getBoundingClientRect();
      return r.width > 4 && r.height > 4 ? r : null;
    };

    const tipCovered = () => {
      const stage = stageRef.current;
      const z = zoomBox();
      if (!stage || !z) return false;
      const s = stage.getBoundingClientRect();
      const x = s.left + cursorPos.current.x + TIP.x;
      const y = s.top + cursorPos.current.y + TIP.y;
      return x >= z.left - 4 && x <= z.right + 4 && y >= z.top - 4 && y <= z.bottom + 4;
    };

    const cursorInside = (selector: string) => {
      const stage = stageRef.current;
      if (!stage || tipCovered()) return false;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return false;
      const s = stage.getBoundingClientRect();
      const tip = {
        x: cursorPos.current.x + TIP.x,
        y: cursorPos.current.y + TIP.y,
      };
      const pad = 3;
      const boxes = el.getClientRects();
      const list = boxes.length ? [...boxes] : [el.getBoundingClientRect()];
      return list.some(
        (box) =>
          tip.x >= box.left - s.left - pad &&
          tip.x <= box.right - s.left + pad &&
          tip.y >= box.top - s.top - pad &&
          tip.y <= box.bottom - s.top + pad,
      );
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

    const glideCursor = async (target: { x: number; y: number }, duration = 900) => {
      // Never slide the pointer into the empty stage edge when the target is clipped.
      if (!pointInsideStage(target)) return false;
      const start = { ...cursorPos.current };
      const dist = Math.hypot(target.x - start.x, target.y - start.y);
      if (dist < 1.5) {
        setCursorAt(target);
        return true;
      }
      // One speed for a short hop and a long cross-stage move.
      const d = Math.max(90, Math.min(duration, dist / 0.78));
      await tween(d, (eased) => {
        setCursorAt({
          x: start.x + (target.x - start.x) * eased,
          y: start.y + (target.y - start.y) * eased,
        });
      });
      setCursorAt(target);
      return Math.hypot(cursorPos.current.x - target.x, cursorPos.current.y - target.y) < 6;
    };

    /** Scroll every overflow ancestor until the target's center sits inside the stage. */
    const scrollIntoStage = async (selector: string) => {
      const stage = stageRef.current;
      if (!stage) return;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return;
      const scrollers: HTMLElement[] = [];
      let node: HTMLElement | null = el.parentElement;
      while (node && node !== stage) {
        const oy = getComputedStyle(node).overflowY;
        if ((oy === "auto" || oy === "scroll") && node.scrollHeight > node.clientHeight + 2) {
          scrollers.push(node);
        }
        node = node.parentElement;
      }
      const box = scrollRef.current;
      if (box && box.contains(el) && !scrollers.includes(box) && box.scrollHeight > box.clientHeight + 2) {
        scrollers.push(box);
      }
      for (const scroller of scrollers) {
        const sb = stage.getBoundingClientRect();
        const lb = scroller.getBoundingClientRect();
        const eb = el.getClientRects()[0] ?? el.getBoundingClientRect();
        if (eb.width === 0 && eb.height === 0) continue;
        const cy = eb.top + Math.min(eb.height / 2, 18);
        const top = Math.max(lb.top, sb.top) + 16;
        const bottom = Math.min(lb.bottom, sb.bottom) - 16;
        let delta = 0;
        if (cy < top) delta = cy - top;
        else if (cy > bottom) delta = cy - bottom;
        const z = zoomBox();
        const aimX = eb.left + eb.width / 2;
        if (z && aimX > z.left - 8 && aimX < z.right + 8 && cy > z.top - 12) {
          const lift = cy - (z.top - 14);
          if (lift > delta) delta = lift;
        }
        if (Math.abs(delta) < 2) continue;
        const start = scroller.scrollTop;
        const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
        const next = Math.max(0, Math.min(start + delta, max));
        if (Math.abs(next - start) < 2) continue;
        const change = next - start;
        await tween(Math.max(140, Math.min(520, Math.abs(change) / 0.9)), (eased) => {
          scroller.scrollTop = start + change * eased;
        });
        await flush();
      }
    };

    const pointOf = (selector: string) => {
      const stage = stageRef.current;
      if (!stage) return null;
      const el = stage.querySelector<HTMLElement>(selector);
      if (!el) return null;
      const s = stage.getBoundingClientRect();
      const z = zoomBox();
      const rects = el.getClientRects();
      const boxes = rects.length ? [...rects] : [el.getBoundingClientRect()];
      let best: { x: number; y: number; area: number } | null = null;
      for (const eb of boxes) {
        const left = Math.max(eb.left, s.left);
        const right = Math.min(eb.right, s.right);
        const top = Math.max(eb.top, s.top);
        let bottom = Math.min(eb.bottom, s.bottom);
        if (z && right > z.left + 2 && left < z.right - 2) bottom = Math.min(bottom, z.top - 2);
        const w = right - left;
        const h = bottom - top;
        if (w < 6 || h < 6) continue;
        const area = w * h;
        if (best && area <= best.area) continue;
        best = {
          x: left - s.left + w / 2 - TIP.x,
          y: top - s.top + h / 2 - TIP.y,
          area,
        };
      }
      return best;
    };

    const settleOn = async (selector: string) => {
      for (let attempt = 0; attempt < 3; attempt++) {
        if (cancelled) return false;
        await scrollIntoStage(selector);
        if (cancelled) return false;
        await flush();
        const target = pointOf(selector);
        if (!target) continue;
        const arrived = await glideCursor(target);
        if (arrived && cursorInside(selector)) return true;
      }
      return cursorInside(selector);
    };

    const moveTo = async (selector: string, dwell = 360) => {
      await flush();
      if (cancelled) return;
      const stage = stageRef.current;
      if (!stage) return;
      if (!stage.querySelector(selector)) return;
      lastSelector = selector;
      await settleOn(selector);
      if (cancelled) return;
      await wait(dwell);
    };

    const reveal = async (selector: string) => {
      await flush();
      if (cancelled) return;
      await scrollIntoStage(selector);
    };

    const click = async (onPress?: () => void) => {
      if (cancelled) return;
      if (lastSelector && !cursorInside(lastSelector)) await settleOn(lastSelector);
      const onTarget = !!lastSelector && cursorInside(lastSelector);
      if (!onTarget) {
        onPress?.();
        await flush();
        return;
      }
      // Hold the press on the control, then change state, so the click
      // does not finish on a sheet or card that just replaced the target.
      setClicking(true);
      await flush();
      await wait(110);
      if (cancelled) {
        setClicking(false);
        return;
      }
      onPress?.();
      await flush();
      await wait(40);
      setClicking(false);
      await wait(30);
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
