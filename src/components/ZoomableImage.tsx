import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
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
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>(INITIAL_VIEW);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(view);
  const pointersRef = useRef(new Map<number, Point>());
  const pinchRef = useRef<{ distance: number; scale: number } | null>(null);
  const dragRef = useRef<{ x: number; y: number; origin: Point } | null>(null);
  const movedRef = useRef(false);

  viewRef.current = view;

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

  useEffect(() => {
    if (!open) resetView();
  }, [open, resetView]);

  useEffect(() => {
    if (!open) return;
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = stage.getBoundingClientRect();
      zoomTo(viewRef.current.scale + (event.deltaY < 0 ? STEP : -STEP), {
        x: event.clientX - rect.left - rect.width / 2,
        y: event.clientY - rect.top - rect.height / 2,
      });
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [open, zoomTo]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    movedRef.current = false;

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
      movedRef.current = true;
      zoomTo(pinchRef.current.scale * (distance / pinchRef.current.distance));
      return;
    }

    const drag = dragRef.current;
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.hypot(dx, dy) > 3) movedRef.current = true;
    setView((prev) => ({ ...prev, x: drag.origin.x + dx, y: drag.origin.y + dy }));
  };

  const endPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
    if (pointersRef.current.size === 0) dragRef.current = null;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Enlarge ${alt}` : "Enlarge figure"}
        className={cn(
          "group relative block cursor-zoom-in rounded-xl text-left",
          wrapperClassName,
        )}
      >
        <img src={src} alt={alt} className={className} loading="lazy" />
        <span className="pointer-events-none absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-background/90 px-1.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground shadow-sm ring-1 ring-border">
          <ZoomIn className="h-3 w-3" />
          Zoom
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onOpenAutoFocus={(event) => event.preventDefault()}
          className="flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-x-[-50%] translate-y-[-50%] flex-col gap-0 overflow-hidden border-0 bg-zinc-950 p-0 text-white shadow-none sm:rounded-none [&>button]:text-white [&>button]:hover:bg-white/10 [&>button]:hover:text-white"
        >
          <DialogTitle className="sr-only">Zoomed figure</DialogTitle>
          <DialogDescription className="sr-only">
            Scroll or use the buttons to zoom. Drag to pan. Press Escape to close.
          </DialogDescription>

          <div
            ref={stageRef}
            className="relative flex min-h-0 flex-1 touch-none items-center justify-center overflow-hidden"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
            onDoubleClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              if (view.scale > MIN_SCALE) {
                resetView();
                return;
              }
              zoomTo(2.2, {
                x: event.clientX - rect.left - rect.width / 2,
                y: event.clientY - rect.top - rect.height / 2,
              });
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget && !movedRef.current) setOpen(false);
            }}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className={cn(
                "max-h-[min(92dvh,900px)] max-w-[min(96vw,1200px)] select-none bg-white object-contain shadow-2xl",
                view.scale > MIN_SCALE ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
              )}
              style={{
                transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
                transformOrigin: "center center",
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center px-4">
            <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-black/70 p-1 text-white shadow-lg backdrop-blur-sm">
              <button
                type="button"
                onClick={() => zoomTo(view.scale - STEP)}
                disabled={view.scale <= MIN_SCALE}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-40"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center text-xs font-semibold tabular-nums">
                {Math.round(view.scale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => zoomTo(view.scale + STEP)}
                disabled={view.scale >= MAX_SCALE}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-40"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={resetView}
                disabled={view.scale <= MIN_SCALE}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-40"
                aria-label="Reset zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
