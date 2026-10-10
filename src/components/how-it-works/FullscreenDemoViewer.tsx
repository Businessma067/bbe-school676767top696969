import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Expand, RotateCw, Scan, X, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/** A viewport-sized viewer; zoom and pan apply to the complete desktop stage. */
export function FullscreenDemoViewer({ children, label, onClose, inline = false, onEnlarge }: {
  children: ReactNode;
  label: string;
  onClose: () => void;
  inline?: boolean;
  onEnlarge?: () => void;
}) {
  const root = useRef<HTMLDivElement | null>(null);
  const frame = useRef<HTMLDivElement | null>(null);
  const [wheelFrame, setWheelFrame] = useState<HTMLDivElement | null>(null);
  const attachFrame = useCallback((element: HTMLDivElement | null) => {
    frame.current = element;
    setWheelFrame(element);
  }, []);
  const content = useRef<HTMLDivElement | null>(null);
  const target = useRef({ scale: 1, x: 0, y: 0 });
  const rendered = useRef({ scale: 1, x: 0, y: 0 });
  const animation = useRef(0);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const moved = useRef(false);
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });
  const [rotated, setRotated] = useState(false);

  target.current = zoom;
  // Animate only while moving; when settled drop the GPU layer so text re-rasterizes crisp at the final scale.
  useEffect(() => {
    const el = content.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let previous = performance.now();
    cancelAnimationFrame(animation.current);
    el.style.willChange = "transform";
    const animate = (now: number) => {
      const amount = reduced ? 1 : 1 - Math.exp(-Math.min(now - previous, 64) / 90);
      previous = now;
      const current = rendered.current;
      const goal = target.current;
      let settled = true;
      for (const key of ["scale", "x", "y"] as const) {
        current[key] += (goal[key] - current[key]) * amount;
        const eps = key === "scale" ? 0.0005 : 0.1;
        if (Math.abs(goal[key] - current[key]) < eps) current[key] = goal[key];
        else settled = false;
      }
      if (settled) {
        el.style.willChange = "auto";
        el.style.transform = current.scale === 1 && current.x === 0 && current.y === 0
          ? "none"
          : `translate(${Math.round(current.x)}px, ${Math.round(current.y)}px) scale(${current.scale})`;
        return;
      }
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) scale(${current.scale})`;
      animation.current = requestAnimationFrame(animate);
    };
    animation.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation.current);
  }, [zoom]);

  useEffect(() => {
    const element = wheelFrame;
    if (!element) return;
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      const anchor = point(event.clientX, event.clientY);
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientHeight : 1);
      setZoom((z) => zoomAt(z, z.scale * Math.exp(-delta * 0.002), anchor));
    };
    element.addEventListener("wheel", wheel, { passive: false });
    return () => element.removeEventListener("wheel", wheel);
  }, [rotated, wheelFrame]);

  const reset = () => setZoom({ scale: 1, x: 0, y: 0 });
  const fullscreen = async () => {
    try {
      await root.current?.requestFullscreen();
      const orientation = screen.orientation as ScreenOrientation & { lock?: (value: string) => Promise<void> };
      await orientation.lock?.("landscape");
    } catch { /* Viewport-sized fallback remains available, including on iOS. */ }
  };
  useEffect(() => {
    const element = root.current;
    const resize = () => { reset(); pointers.current.clear(); };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      screen.orientation?.unlock?.();
      if (document.fullscreenElement === element) void document.exitFullscreen().catch(() => {});
    };
  }, []);

  const clamp = (scale: number, x: number, y: number) => {
    const width = frame.current?.clientWidth ?? 0;
    const height = frame.current?.clientHeight ?? 0;
    const nextScale = Math.max(1, Math.min(4, scale));
    const maxX = width * (nextScale - 1) / 2;
    const maxY = height * (nextScale - 1) / 2;
    return { scale: nextScale, x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y)) };
  };
  const point = (clientX: number, clientY: number) => {
    const rect = frame.current?.getBoundingClientRect();
    const x = clientX - (rect ? rect.left + rect.width / 2 : 0);
    const y = clientY - (rect ? rect.top + rect.height / 2 : 0);
    return rotated ? { x: y, y: -x } : { x, y };
  };
  const zoomAt = (z: typeof zoom, scale: number, anchor: { x: number; y: number }, nextAnchor = anchor) => {
    const nextScale = Math.max(1, Math.min(4, scale));
    const ratio = nextScale / z.scale;
    return clamp(nextScale, nextAnchor.x - (anchor.x - z.x) * ratio, nextAnchor.y - (anchor.y - z.y) * ratio);
  };

  const body = (
    <>
        <div className="flex h-14 shrink-0 items-center justify-between gap-1 border-b border-border bg-background px-2">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" title="Zoom out" aria-label="Zoom out" disabled={zoom.scale <= 1} onClick={() => setZoom((z) => clamp(z.scale - 0.5, z.x, z.y))}><ZoomOut /></Button>
            <span className="w-12 text-center text-xs tabular-nums">{Math.round(zoom.scale * 100)}%</span>
            <Button variant="ghost" size="icon" title="Zoom in" aria-label="Zoom in" disabled={zoom.scale >= 4} onClick={() => setZoom((z) => clamp(z.scale + 0.5, z.x, z.y))}><ZoomIn /></Button>
            <Button variant="ghost" size="icon" title="Fit entire screen" aria-label="Fit entire screen" onClick={reset}><Scan /></Button>
          </div>
          <div className="flex items-center gap-1">
            {!inline && <Button variant="ghost" size="icon" title="Rotate view" aria-label="Rotate view" aria-pressed={rotated} onClick={() => { setRotated((v) => !v); reset(); }}><RotateCw /></Button>}
            <Button variant="ghost" size="icon" title="Full screen" aria-label="Full screen" onClick={() => inline ? onEnlarge?.() : void fullscreen()}><Expand /></Button>
            {!inline && <Button variant="ghost" size="icon" title="Close zoom" aria-label="Close zoom" onClick={onClose}><X /></Button>}
          </div>
        </div>
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div ref={attachFrame} className={inline ? "relative aspect-video w-full overflow-hidden touch-none" : `demo-fullscreen-frame${rotated ? " demo-fullscreen-frame-rotated" : ""}`} data-demo-zoom={zoom.scale}
            onClick={(e) => { if (inline && !moved.current) setZoom((z) => zoomAt(z, z.scale > 1 ? 1 : 2.5, point(e.clientX, e.clientY))); }}
            onDoubleClick={(e) => { if (!inline) setZoom((z) => zoomAt(z, z.scale > 1 ? 1 : 2.5, point(e.clientX, e.clientY))); }}
            onPointerDown={(e) => {
              moved.current = false;
              if (e.pointerType === "mouse" && zoom.scale === 1) return;
              pointers.current.set(e.pointerId, point(e.clientX, e.clientY));
              if (e.isTrusted) e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const previous = pointers.current.get(e.pointerId);
              if (!previous) {
                if (inline && e.pointerType === "mouse" && zoom.scale > 1) {
                  const anchor = point(e.clientX, e.clientY);
                  setZoom((z) => clamp(z.scale, -anchor.x * (z.scale - 1), -anchor.y * (z.scale - 1)));
                }
                return;
              }
              const next = point(e.clientX, e.clientY);
              if (Math.hypot(next.x - previous.x, next.y - previous.y) > 2) moved.current = true;
              const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)?.[1];
              if (other) {
                const before = Math.hypot(previous.x - other.x, previous.y - other.y);
                const after = Math.hypot(next.x - other.x, next.y - other.y);
                if (before > 0) setZoom((z) => zoomAt(z, z.scale * after / before,
                  { x: (previous.x + other.x) / 2, y: (previous.y + other.y) / 2 },
                  { x: (next.x + other.x) / 2, y: (next.y + other.y) / 2 }));
              } else setZoom((z) => clamp(z.scale, z.x + next.x - previous.x, z.y + next.y - previous.y));
              pointers.current.set(e.pointerId, next);
            }}
            onPointerUp={(e) => pointers.current.delete(e.pointerId)}
            onPointerCancel={(e) => pointers.current.delete(e.pointerId)}
            onLostPointerCapture={(e) => pointers.current.delete(e.pointerId)}
          >
            <div ref={content} className={`absolute inset-0 origin-center will-change-transform${inline ? " pointer-events-none" : ""}`}>{children}</div>
          </div>
        </div>
    </>
  );
  if (inline) return <div ref={root} className="flex w-full flex-col bg-background" aria-label={label}>{body}</div>;
  return <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
    <DialogContent ref={root} className="demo-fullscreen-viewer left-0 top-0 flex translate-x-0 translate-y-0 gap-0 border-0 bg-background p-0 text-foreground sm:max-w-none sm:rounded-none [&>button]:hidden" aria-describedby={undefined}>
      <DialogTitle className="sr-only">{label}</DialogTitle>
      {body}
    </DialogContent>
  </Dialog>;
}