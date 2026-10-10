import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomableImage } from "@/components/ZoomableImage";

export type RouletteSlide =
  | {
      key: string;
      label: string;
      kind: "image";
      src: string;
      alt: string;
      /** CSS aspect-ratio — matches the product poster frame. */
      aspect: string;
    }
  | {
      key: string;
      label: string;
      kind: "video";
      video: string;
      poster: string;
      /** Native recording aspect so the stage never crops the walkthrough. */
      aspect: string;
    }
  | {
      key: string;
      label: string;
      kind: "live";
      poster: string;
      aspect: string;
    };

/** Widescreen presentation; keep the native high-resolution recordings uncropped. */
const HIW_16_9 = "16 / 9";
const POSTER_ASPECT = "16 / 10";

const BBE_VIDEOS: Omit<Extract<RouletteSlide, { kind: "video" }>, "kind">[] = [
  {
    key: "economics",
    label: "Economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "math",
    label: "Math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "english",
    label: "English",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "mock-builder",
    label: "Mock Builder",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "flashcards",
    label: "Flashcards",
    video: "/how-it-works/flashcards.mp4",
    poster: "/how-it-works/flashcards-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "matching",
    label: "Matching",
    video: "/how-it-works/matching.mp4",
    poster: "/how-it-works/matching-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    video: "/how-it-works/tutor-exam.mp4",
    poster: "/how-it-works/tutor-exam-poster.jpg",
    aspect: HIW_16_9,
  },
];

const WISO_VIDEOS: Omit<Extract<RouletteSlide, { kind: "video" }>, "kind">[] = [
  {
    key: "economics",
    label: "Economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "math",
    label: "Math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "german",
    label: "German",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "flashcards",
    label: "Flashcards",
    video: "/how-it-works/wiso-flashcards.mp4",
    poster: "/how-it-works/wiso-flashcards-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "matching",
    label: "Matching",
    video: "/how-it-works/wiso-matching.mp4",
    poster: "/how-it-works/wiso-matching-poster.jpg",
    aspect: HIW_16_9,
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    video: "/how-it-works/wiso-tutor-exam.mp4",
    poster: "/how-it-works/wiso-tutor-exam-poster.jpg",
    aspect: HIW_16_9,
  },
];

export function buildFullCourseRouletteSlides(options: {
  track: "bbe" | "wiso";
  posterSrc: string;
  posterAlt: string;
}): RouletteSlide[] {
  const videos = options.track === "wiso" ? WISO_VIDEOS : BBE_VIDEOS;
  return [
    {
      key: "poster",
      label: "Course overview",
      kind: "image",
      src: options.posterSrc,
      alt: options.posterAlt,
      aspect: POSTER_ASPECT,
    },
    ...videos.map((v) => ({ ...v, kind: "video" as const })),
  ];
}

const SWIPE_THRESHOLD = 50;

export function FullCourseVideoRoulette({
  slides,
  live,
}: {
  slides: RouletteSlide[];
  /** Real-interface film shown on the first live slide. */
  live?: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const slide = slides[index] ?? slides[0];
  const count = slides.length;

  const go = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  // Keep the active thumbnail in view.
  useEffect(() => {
    const row = thumbsRef.current;
    if (!row) return;
    const thumb = row.querySelector<HTMLElement>(`[data-roulette-thumb="${index}"]`);
    thumb?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [index]);

  // Autoplay the active video when the stage is on screen.
  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage || slide.kind !== "video") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 0.7] },
    );
    observer.observe(stage);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [slide]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-black bg-background text-foreground shadow-sm transition hover:bg-secondary sm:h-9 sm:w-9"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <div
          ref={stageRef}
          className={cn(
            "relative min-w-0 flex-1 touch-pan-y overflow-hidden rounded-xl border-2 border-black select-none",
            slide.kind === "video" && "bg-muted",
          )}
          style={{ aspectRatio: slide.kind === "video" ? HIW_16_9 : slide.aspect }}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touch.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const start = touch.current;
            touch.current = null;
            if (!start) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - start.x;
            const dy = t.clientY - start.y;
            if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
              go(dx < 0 ? index + 1 : index - 1);
            }
          }}
        >
          {slide.kind === "image" ? (
            <>
              <img
                key={slide.key}
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover object-center"
                draggable={false}
              />
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="absolute right-3 top-3 z-10 shadow-sm"
                aria-label={`Enlarge ${slide.label} image`}
                title="Enlarge image"
                onClick={() => setImageOpen(true)}
              >
                <ZoomIn aria-hidden="true" />
              </Button>
            </>
          ) : slide.kind === "video" ? (
            <>
            <video
              key={slide.key}
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-contain object-center"
              poster={slide.poster}
              src={slide.video}
              muted
              loop
              playsInline
              preload="metadata"
              draggable={false}
              aria-label={`${slide.label} walkthrough`}
            />
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="absolute right-3 top-3 z-10 shadow-sm"
              aria-label={`Enlarge ${slide.label} video`}
              title="Enlarge video"
              onClick={() => {
                videoRef.current?.pause();
                setImageOpen(true);
              }}
            >
              <ZoomIn aria-hidden="true" />
            </Button>
            </>
          ) : (
            <div className="absolute inset-0 z-20">{live}</div>
          )}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-black bg-background text-foreground shadow-sm transition hover:bg-secondary sm:h-9 sm:w-9"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5" role="tablist" aria-label="Slides">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            aria-label={s.label}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full bg-foreground transition-all",
              i === index ? "w-5" : "w-1.5 opacity-35",
            )}
          />
        ))}
      </div>

      <div
        ref={thumbsRef}
        className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Course walkthrough previews"
      >
        {slides.map((s, i) => {
          const active = i === index;
          const thumbSrc = s.kind === "image" ? s.src : s.poster;
          return (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={s.label}
              data-roulette-thumb={i}
              onClick={() => setIndex(i)}
              className={cn(
                "relative aspect-video w-[4.75rem] flex-shrink-0 overflow-hidden rounded-lg border border-black bg-background transition-all sm:w-24",
                active
                  ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  : "opacity-80 hover:opacity-100",
              )}
            >
              <img
                src={thumbSrc}
                alt=""
                className={cn(
                  "absolute inset-0 h-full w-full object-center",
                  s.kind === "video" ? "object-contain bg-muted" : "object-cover",
                )}
                draggable={false}
                loading="lazy"
              />
              {s.kind !== "image" && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1 pb-1 pt-3 text-left text-[9px] font-semibold leading-tight text-white sm:text-[10px]">
                  {s.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <Dialog open={imageOpen} onOpenChange={(open) => {
        setImageOpen(open);
        if (!open) void videoRef.current?.play().catch(() => {});
      }}>
        <DialogContent className="w-[96vw] max-w-none border-border p-3 sm:w-[96vw] sm:max-w-[1600px] sm:p-5">
          <DialogTitle className="sr-only">{slide.label}</DialogTitle>
          {slide.kind === "video" && (
            <video
              key={`enlarged-${slide.key}`}
              src={slide.video}
              poster={slide.poster}
              className="mx-auto aspect-video max-h-[78dvh] w-full object-contain"
              controls
              autoPlay
              muted
              loop
              playsInline
              onLoadedMetadata={(event) => {
                event.currentTarget.currentTime = videoRef.current?.currentTime ?? 0;
              }}
              aria-label={`${slide.label} walkthrough enlarged`}
            />
          )}
          {slide.kind === "image" && (
            <ZoomableImage
              key={slide.key}
              src={slide.src}
              alt={slide.alt}
              className="mx-auto max-h-[78vh] w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
