import { useLayoutEffect, type RefObject } from "react";

/** Grow a short stage so it fills the frame. Text stays sharp: this is a layout scale, not a bitmap stretch. */
export function useFillFrame(
  enabled: boolean,
  scrollRef: RefObject<HTMLDivElement | null>,
  innerRef: RefObject<HTMLDivElement | null>,
) {
  useLayoutEffect(() => {
    if (!enabled) return;
    const scroll = scrollRef.current;
    const inner = innerRef.current;
    if (!scroll || !inner) return;

    let frame = 0;
    const fit = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cs = getComputedStyle(scroll);
        const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        const availW = scroll.clientWidth - padX;
        const availH = scroll.clientHeight - padY;
        if (availW < 80 || availH < 80) return;

        inner.style.transform = "none";
        inner.style.width = "100%";
        const natural = inner.offsetHeight;
        if (natural < 8 || natural >= availH - 1) return;

        let lo = 1;
        let hi = 2.15;
        let best = 1;
        for (let i = 0; i < 8; i++) {
          const scale = (lo + hi) / 2;
          inner.style.width = `${availW / scale}px`;
          inner.style.transformOrigin = "top left";
          inner.style.transform = `scale(${scale})`;
          const visualH = inner.offsetHeight * scale;
          if (visualH > availH + 1) hi = scale;
          else {
            best = scale;
            lo = scale;
          }
        }
        if (best <= 1.02) {
          inner.style.width = "100%";
          inner.style.transform = "none";
          return;
        }
        inner.style.width = `${availW / best}px`;
        inner.style.transformOrigin = "top left";
        inner.style.transform = `scale(${best})`;
      });
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(scroll);
    const mo = new MutationObserver(fit);
    mo.observe(inner, {
      childList: true,
      subtree: true,
      characterData: true,
      attributeFilter: ["class"],
    });
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      mo.disconnect();
    };
  }, [enabled, scrollRef, innerRef]);
}
