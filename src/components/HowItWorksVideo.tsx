import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type HowItWorksSubject = "economics" | "math" | "english";

const DEMOS: Record<
  HowItWorksSubject,
  { src: string; pathLabel: string; label: string }
> = {
  economics: {
    src: "/how-it-works/economics.mp4",
    pathLabel: "bbe-school.app / demo-practice / economics",
    label: "Economics practice demo",
  },
  math: {
    src: "/how-it-works/math.mp4",
    pathLabel: "bbe-school.app / demo-practice / math",
    label: "Math practice demo",
  },
  english: {
    src: "/how-it-works/english.mp4",
    pathLabel: "bbe-school.app / demo-practice / english",
    label: "English practice demo",
  },
};

/**
 * Framed looping screen recording of the live practice UI for the homepage
 * "How it works" section.
 */
export function HowItWorksVideo({ subject }: { subject: HowItWorksSubject }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const demo = DEMOS[subject];

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    const play = () => {
      void el.play().catch(() => {
        /* autoplay can be blocked until gesture; muted+playsInline usually ok */
      });
    };
    play();
  }, [subject]);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b0f1a] p-1.5 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:p-2">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-background">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 min-w-0 flex-1 sm:ml-3">
            <div className="mx-auto max-w-md truncate rounded-md border border-border bg-background px-2 py-1 text-center text-[10px] text-muted-foreground sm:px-3 sm:text-[11px]">
              {demo.pathLabel}
            </div>
          </div>
          <div className="hidden text-[10px] font-semibold tracking-widest text-caramel-deep sm:block">
            LIVE DEMO
          </div>
        </div>

        <div className={cn("relative aspect-[16/10] w-full bg-[#070a12]")}>
          <video
            key={demo.src}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-top"
            src={demo.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={demo.label}
          />
        </div>
      </div>
    </div>
  );
}
