import { useEffect, useRef, useState, type ReactNode } from "react";
import { Expand, RotateCw, Scan, X, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/** A viewport-sized viewer; zoom and pan apply to the complete desktop stage. */
export function FullscreenDemoViewer({ children, label, onClose }: {
  children: ReactNode;
  label: string;
  onClose: () => void;
}) {
  const root = useRef<HTMLDivElement | null>(null);
  const frame = useRef<HTMLDivElement | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });
  const [rotated, setRotated] = useState(false);

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
  const point = (clientX: number, clientY: number) => rotated
    ? { x: clientY, y: -clientX }
    : { x: clientX, y: clientY };

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent ref={root} className="demo-fullscreen-viewer gap-0 border-0 bg-background p-0 text-foreground sm:max-w-none [&>button]:hidden" aria-describedby={undefined}>
        <DialogTitle className="sr-only">{label}</DialogTitle>
        <div className="flex h-14 shrink-0 items-center justify-between gap-1 border-b border-border bg-background px-2">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" title="Zoom out" aria-label="Zoom out" disabled={zoom.scale <= 1} onClick={() => setZoom((z) => clamp(z.scale - 0.5, z.x, z.y))}><ZoomOut /></Button>
            <span className="w-12 text-center text-xs tabular-nums">{Math.round(zoom.scale * 100)}%</span>
            <Button variant="ghost" size="icon" title="Zoom in" aria-label="Zoom in" disabled={zoom.scale >= 4} onClick={() => setZoom((z) => clamp(z.scale + 0.5, z.x, z.y))}><ZoomIn /></Button>
            <Button variant="ghost" size="icon" title="Fit entire screen" aria-label="Fit entire screen" onClick={reset}><Scan /></Button>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" title="Rotate view" aria-label="Rotate view" aria-pressed={rotated} onClick={() => { setRotated((v) => !v); reset(); }}><RotateCw /></Button>
            <Button variant="ghost" size="icon" title="Full screen" aria-label="Full screen" onClick={() => void fullscreen()}><Expand /></Button>
            <Button variant="ghost" size="icon" title="Close zoom" aria-label="Close zoom" onClick={onClose}><X /></Button>
          </div>
        </div>
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div ref={frame} className={`demo-fullscreen-frame${rotated ? " demo-fullscreen-frame-rotated" : ""}`} data-demo-zoom={zoom.scale}
            onPointerDown={(e) => {
              if (e.pointerType === "mouse" && zoom.scale === 1) return;
              pointers.current.set(e.pointerId, point(e.clientX, e.clientY));
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const previous = pointers.current.get(e.pointerId);
              if (!previous) return;
              const next = point(e.clientX, e.clientY);
              const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)?.[1];
              if (other) {
                const before = Math.hypot(previous.x - other.x, previous.y - other.y);
                const after = Math.hypot(next.x - other.x, next.y - other.y);
                if (before > 0) setZoom((z) => clamp(z.scale * after / before, z.x + (next.x - previous.x) / 2, z.y + (next.y - previous.y) / 2));
              } else setZoom((z) => clamp(z.scale, z.x + next.x - previous.x, z.y + next.y - previous.y));
              pointers.current.set(e.pointerId, next);
            }}
            onPointerUp={(e) => pointers.current.delete(e.pointerId)}
            onPointerCancel={(e) => pointers.current.delete(e.pointerId)}
            onLostPointerCapture={(e) => pointers.current.delete(e.pointerId)}
          >
            <div className="absolute inset-0 origin-center" style={{ transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})` }}>{children}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}