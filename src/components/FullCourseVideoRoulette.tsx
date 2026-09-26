import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type RouletteSlide =
  | {
      key: string;
      label: string;
      kind: "image";
      src: string;
      alt: string;
    }
  | {
      key: string;
      label: string;
      kind: "video";
      video: string;
      poster: string;
    };

const BBE_VIDEOS: Omit<Extract<RouletteSlide, { kind: "video" }>, "kind">[] = [
  {
    key: "economics",
    label: "Economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
  },
  {
    key: "math",
    label: "Math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
  },
  {
    key: "english",
    label: "English",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
  },
  {
    key: "mock-builder",
    label: "Mock Builder",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
  },
  {
    key: "flashcards",
    label: "Flashcards",
    video: "/how-it-works/flashcards.mp4",
    poster: "/how-it-works/flashcards-poster.jpg",
  },
  {
    key: "matching",
    label: "Matching",
    video: "/how-it-works/matching.mp4",
    poster: "/how-it-works/matching-poster.jpg",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    video: "/how-it-works/tutor-exam.mp4",
    poster: "/how-it-works/tutor-exam-poster.jpg",
  },
];

const WISO_VIDEOS: Omit<Extract<RouletteSlide, { kind: "video" }>, "kind">[] = [
  {
    key: "economics",
    label: "Economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
  },
  {
    key: "math",
    label: "Math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
  },
  {
    key: "german",
    label: "German",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
  },
  {
    key: "flashcards",
    label: "Flashcards",
    video: "/how-it-works/wiso-flashcards.mp4",
    poster: "/how-it-works/wiso-flashcards-poster.jpg",
  },
  {
    key: "matching",
    label: "Matching",
    video: "/how-it-works/wiso-matching.mp4",
    poster: "/how-it-works/wiso-matching-poster.jpg",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    video: "/how-it-works/wiso-tutor-exam.mp4",
    poster: "/how-it-works/wiso-tutor-exam-poster.jpg",
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
    },
    ...videos.map((v) => ({ ...v, kind: "video" as const })),
  ];
}

const SWIPE_THRESHOLD = 50;

export function FullCourseVideoRoulette({ slides }: { slides: RouletteSlide[] }) {
  const [index, setIndex] = useState(0);
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
      <div
        ref={stageRef}
        className="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm select-none"
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
            dx < 0 ? go(index + 1) : go(index - 1);
          }
        }}
      >
        {slide.kind === "image" ? (
          <img
            key={slide.key}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />
        ) : (
          <video
            key={slide.key}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-center"
            poster={slide.poster}
            src={slide.video}
            muted
            loop
            playsInline
            preload="metadata"
            draggable={false}
            aria-label={`${slide.label} walkthrough`}
          />
        )}

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-md ring-1 ring-border backdrop-blur transition hover:bg-background sm:h-9 sm:w-9"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-md ring-1 ring-border backdrop-blur transition hover:bg-background sm:h-9 sm:w-9"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {slides.map((s, i) => (
            <span
              key={s.key}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-foreground" : "w-1.5 bg-foreground/35",
              )}
            />
          ))}
        </div>
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
                "relative aspect-[16/10] w-[4.75rem] flex-shrink-0 overflow-hidden rounded-lg transition-all sm:w-24",
                active
                  ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  : "ring-1 ring-border opacity-80 hover:opacity-100",
              )}
            >
              <img
                src={thumbSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
                loading="lazy"
              />
              {s.kind === "video" && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1 pb-1 pt-3 text-left text-[9px] font-semibold leading-tight text-white sm:text-[10px]">
                  {s.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
