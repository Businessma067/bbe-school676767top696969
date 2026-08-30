import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type DemoClip = {
  src: string;
  poster: string;
  pathLabel: string;
  label: string;
};

/**
 * Framed looping promo screen recording (browser chrome + bordered card).
 */
export function DemoVideoFrame({ clip }: { clip: DemoClip }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      void el.play().catch(() => {});
    };

    el.load();
    if (el.readyState >= 2) tryPlay();
    else el.addEventListener("canplay", tryPlay, { once: true });

    return () => {
      cancelled = true;
      el.removeEventListener("canplay", tryPlay);
    };
  }, [clip.src]);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b0f1a] p-1.5 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:p-2">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-background">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 min-w-0 flex-1 sm:ml-3">
            <div className="mx-auto max-w-md truncate rounded-md border border-border bg-background px-2 py-1 text-center text-[10px] text-muted-foreground sm:px-3 sm:text-[11px]">
              {clip.pathLabel}
            </div>
          </div>
          <div className="hidden text-[10px] font-semibold tracking-widest text-caramel-deep sm:block">
            LIVE DEMO
          </div>
        </div>

        <div className={cn("relative aspect-[16/10] w-full bg-[#070a12]")}>
          <video
            key={clip.src}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-top"
            src={clip.src}
            poster={clip.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={clip.label}
          />
        </div>
      </div>
    </div>
  );
}
