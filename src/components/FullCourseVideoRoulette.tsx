import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FullscreenDemoViewer } from "@/components/how-it-works/FullscreenDemoViewer";

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
    if (thumb) row.scrollTo({ left: thumb.offsetLeft - (row.clientWidth - thumb.clientWidth) / 2, behavior: "smooth" });
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
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="h-8 w-8 flex-shrink-0 rounded-full border-foreground bg-background text-foreground shadow-sm sm:h-9 sm:w-9"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <div
          ref={stageRef}
          className={cn(
            "relative min-w-0 flex-1 touch-pan-y overflow-hidden rounded-lg border-2 border-foreground bg-background select-none",
            slide.kind === "video" && "bg-muted",
          )}
          style={{ aspectRatio: HIW_16_9 }}
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
          {slides.map((s, i) => {
            if (s.kind !== "image" && !(s.kind === "video" && i !== index)) return null;
            const offset = i - index;
            const near = Math.abs(offset) <= 1 || Math.abs(offset) === count - 1;
            return (
              <img
                key={s.key}
                src={s.kind === "image" ? s.src : s.poster}
                alt={i === index ? (s.kind === "image" ? s.alt : "") : ""}
                aria-hidden={i !== index}
                className="absolute inset-0 h-full w-full object-contain object-center transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none"
                style={{
                  opacity: i === index ? 1 : 0,
                  transform: `translateX(${offset === 0 ? 0 : offset > 0 ? 6 : -6}%) scale(${i === index ? 1 : 0.985})`,
                }}
                decoding="async"
                loading={near || i === index ? "eager" : "lazy"}
                onDoubleClick={() => setImageOpen(true)}
                draggable={false}
              />
            );
          })}
          {slide.kind === "image" ? (
            <>
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
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="h-8 w-8 flex-shrink-0 rounded-full border-foreground bg-background text-foreground shadow-sm sm:h-9 sm:w-9"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-between gap-3 px-1">
        <p className="min-w-0 truncate text-sm font-semibold text-foreground">
          <span className="mr-2 tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          {slide.label}
        </p>
        <div className="h-1 w-24 flex-shrink-0 overflow-hidden rounded-full bg-muted sm:w-40">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
            style={{ width: `${((index + 1) / count) * 100}%` }}
          />
        </div>
      </div>

      <div
        ref={thumbsRef}
        className="flex snap-x gap-2 overflow-x-auto scroll-smooth px-1 pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                "group flex w-28 flex-shrink-0 snap-start flex-col gap-1.5 rounded-xl p-1.5 text-left transition-all duration-300 sm:w-36",
                active ? "bg-foreground text-background shadow-lg" : "bg-muted/60 text-foreground hover:bg-muted",
              )}
            >
              <span className="relative block aspect-video w-full overflow-hidden rounded-lg bg-background">
                <img
                  src={thumbSrc}
                  alt=""
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500",
                    active ? "scale-100" : "scale-[1.04] opacity-75 group-hover:scale-100 group-hover:opacity-100",
                  )}
                  draggable={false}
                  loading="lazy"
                />
              </span>
              <span className="flex items-center gap-1.5 px-0.5 text-[11px] font-semibold leading-tight sm:text-xs">
                <span className={cn("tabular-nums", active ? "opacity-70" : "text-muted-foreground")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{s.label}</span>
              </span>
            </button>
          );
        })}
      </div>
      {imageOpen && slide.kind === "image" && (
        <FullscreenDemoViewer label={slide.label} onClose={() => setImageOpen(false)}>
          <img
            key={slide.key}
            src={slide.src}
            alt={slide.alt}
            draggable={false}
            decoding="sync"
            className="absolute inset-0 h-full w-full select-none object-contain object-center"
          />
        </FullscreenDemoViewer>
      )}
      {imageOpen && slide.kind === "video" && (
        <FullscreenDemoViewer label={slide.label} onClose={() => {
          setImageOpen(false);
          void videoRef.current?.play().catch(() => {});
        }}>

            <video
              key={`enlarged-${slide.key}`}
              src={slide.video}
              poster={slide.poster}
              className="absolute inset-0 h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              onLoadedMetadata={(event) => {
                event.currentTarget.currentTime = videoRef.current?.currentTime ?? 0;
              }}
              aria-label={`${slide.label} walkthrough enlarged`}
            />
        </FullscreenDemoViewer>
      )}
    </div>
  );
}
