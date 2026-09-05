import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const STEP = 0.4;

type Point = { x: number; y: number };
type View = { scale: number; x: number; y: number };

const INITIAL_VIEW: View = { scale: 1, x: 0, y: 0 };

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function pointerDistance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function ZoomableImage({
  src,
  alt = "",
  className,
  wrapperClassName,
}: {
  src: string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
}) {
  const [view, setView] = useState<View>(INITIAL_VIEW);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(view);
  const pointersRef = useRef(new Map<number, Point>());
  const pinchRef = useRef<{ distance: number; scale: number } | null>(null);
  const dragRef = useRef<{ x: number; y: number; origin: Point } | null>(null);

  viewRef.current = view;
  const zoomed = view.scale > MIN_SCALE;

  const resetView = useCallback(() => {
    setView(INITIAL_VIEW);
  }, []);

  const zoomTo = useCallback((nextScale: number, origin?: Point) => {
    setView((prev) => {
      const scale = clampScale(nextScale);
      if (scale <= MIN_SCALE) return INITIAL_VIEW;
      if (!origin || prev.scale === scale) return { ...prev, scale };
      const ratio = scale / prev.scale;
      return {
        scale,
        x: origin.x - (origin.x - prev.x) * ratio,
        y: origin.y - (origin.y - prev.y) * ratio,
      };
    });
  }, []);

  const originFromEvent = (event: { clientX: number; clientY: number }) => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const rect = stage.getBoundingClientRect();
    return {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2,
    };
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (event: WheelEvent) => {
      const shouldZoom = event.ctrlKey || event.metaKey || viewRef.current.scale > MIN_SCALE;
      if (!shouldZoom) return;
      event.preventDefault();
      zoomTo(viewRef.current.scale + (event.deltaY < 0 ? STEP : -STEP), originFromEvent(event));
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [zoomTo]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointersRef.current.size === 2) {
      const [a, b] = [...pointersRef.current.values()];
      pinchRef.current = { distance: pointerDistance(a, b), scale: viewRef.current.scale };
      dragRef.current = null;
      return;
    }

    if (viewRef.current.scale > MIN_SCALE) {
      dragRef.current = {
        x: event.clientX,
        y: event.clientY,
        origin: { x: viewRef.current.x, y: viewRef.current.y },
      };
    }
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return;
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const [a, b] = [...pointersRef.current.values()];
      const distance = pointerDistance(a, b);
      if (distance < 8) return;
      zoomTo(pinchRef.current.scale * (distance / pinchRef.current.distance));
      return;
    }

    const drag = dragRef.current;
    if (!drag) return;
    setView((prev) => ({
      ...prev,
      x: drag.origin.x + (event.clientX - drag.x),
      y: drag.origin.y + (event.clientY - drag.y),
    }));
  };

  const endPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
    if (pointersRef.current.size === 0) dragRef.current = null;
  };

  const controlClass =
    "inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-secondary disabled:opacity-40";

  return (
    <div className={cn("relative", wrapperClassName)}>
      <div
        ref={stageRef}
        className={cn(
          "relative overflow-hidden rounded-xl",
          zoomed ? "touch-none cursor-grab active:cursor-grabbing" : "touch-none",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onDoubleClick={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          if (zoomed) {
            resetView();
            return;
          }
          zoomTo(2.2, originFromEvent(event));
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          className={cn("select-none", className)}
          style={{
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
            transformOrigin: "center center",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center px-2">
          <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-border bg-background/95 p-0.5 shadow-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={() => zoomTo(view.scale - STEP)}
              disabled={view.scale <= MIN_SCALE}
              className={controlClass}
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="min-w-10 text-center text-[11px] font-semibold tabular-nums text-muted-foreground">
              {Math.round(view.scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => zoomTo(view.scale + STEP)}
              disabled={view.scale >= MAX_SCALE}
              className={controlClass}
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={resetView}
              disabled={view.scale <= MIN_SCALE}
              className={controlClass}
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
