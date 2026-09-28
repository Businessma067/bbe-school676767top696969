import { useLayoutEffect, useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "@/components/news/demos/DemoCursor";

/** Grow a short stage so it fills the frame. Text stays sharp: this is a layout scale, not a bitmap stretch. */
function useFillFrame(
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

/** Full-bleed practice stage used inside the How it works Course frame. */
export function CourseFrame({
  stageRef,
  scrollRef,
  cursorRef,
  clicking,
  fade,
  lane = false,
  bleed = false,
  children,
  overlay,
}: {
  stageRef: RefObject<HTMLDivElement | null>;
  scrollRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  clicking: boolean;
  fade: boolean;
  /** Keep the task in the lane left of the explanation sheet. */
  lane?: boolean;
  /** Edge-to-edge page, the same shell as the live exam. */
  bleed?: boolean;
  children: ReactNode;
  overlay?: ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  useFillFrame(!bleed, scrollRef, innerRef);

  return (
    <div
      ref={stageRef}
      className={cn(
        "absolute inset-0",
        bleed ? "bg-background [container-name:exam-stage] [container-type:size] [transform:translateZ(0)]" : "bg-paper",
      )}
    >
      <div
        ref={scrollRef}
        className={cn(
          "news-uniq-scroll h-full overflow-x-hidden overflow-y-auto overscroll-contain transition-opacity duration-500",
          bleed ? "" : "px-3 py-3 sm:px-4 sm:py-4",
          fade ? "opacity-0" : "opacity-100",
          lane && !bleed && "sm:pr-[58%]",
        )}
      >
        {bleed ? (
          children
        ) : (
          <div ref={innerRef} className="origin-top-left">
            {children}
          </div>
        )}
      </div>
      {overlay}
      <DemoCursor cursorRef={cursorRef} clicking={clicking} hidden={fade} />
    </div>
  );
}
