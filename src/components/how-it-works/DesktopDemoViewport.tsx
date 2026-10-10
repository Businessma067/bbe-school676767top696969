import { useLayoutEffect, useRef, type ReactNode } from "react";

/** Render a complete desktop stage, then fit it as one unit instead of reflowing/cropping it. */
export function DesktopDemoViewport({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const desktop = desktopRef.current;
    if (!frame || !desktop) return;
    const fit = () => {
      const scale = Math.min(frame.clientWidth / 1280, frame.clientHeight / 720);
      desktop.style.transform = `scale(${scale})`;
      desktop.style.left = `${Math.round((frame.clientWidth - 1280 * scale) / 2)}px`;
      desktop.style.top = `${Math.round((frame.clientHeight - 720 * scale) / 2)}px`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden bg-background" data-desktop-demo-frame>
      <div
        ref={desktopRef}
        className="absolute h-[720px] w-[1280px] origin-top-left overflow-hidden bg-background"
        data-desktop-demo-canvas
      >
        {children}
      </div>
    </div>
  );
}