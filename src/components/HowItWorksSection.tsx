import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { cn } from "@/lib/utils";

type MainTab = "course" | "mock-builder" | "games";
type CourseSubject = "economics" | "math" | "english" | "german";
type StudyTool = "flashcards" | "matching" | "tutor-exam";
export type HowItWorksTrack = "bbe" | "wiso";

type ShowcaseSlide = {
  key: string;
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  video: string;
  poster: string;
  /** CSS aspect-ratio for a perfect edge-to-edge fit (no letterbox / crop). */
  aspect: string;
};

const BBE_MAIN_TABS: { key: MainTab; label: string }[] = [
  { key: "course", label: "Course" },
  { key: "mock-builder", label: "Mock Builder" },
  { key: "games", label: "Study tools" },
];

const WISO_MAIN_TABS: { key: MainTab; label: string }[] = [
  { key: "course", label: "Course" },
  { key: "games", label: "Study tools" },
];

const BBE_MOCK_BUILDER: ShowcaseSlide[] = [
  {
    key: "mock-builder",
    label: "Mock Builder",
    title: "Build a mock around your weak spots",
    body: "Open chapters, pick subtopics, shape the mixer, set the question count, then start and mark the first question — a mock built from the Full Course.",
    cta: "Open Mock Builder",
    href: "/products/custom-mock-builder",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const BBE_COURSE_SUBJECTS: ShowcaseSlide[] = [
  {
    key: "economics",
    label: "Economics",
    title: "Practice every statement with a clear write-up",
    body: "The Full Course has 680+ economics questions in the real exam style. Work a case, check your answers, then open Explanation next to each statement so you see why it is true or false without leaving the solution.",
    cta: "Explore Economics",
    href: "/demo-practice/economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: "16 / 9",
  },
  {
    key: "math",
    label: "Math",
    title: "Drill the method under exam timing",
    body: "There are 2,800 math questions across the Full Course. Open a task, turn on timed mode, use the exam calculator, then read the full solution step by step until the approach sticks.",
    cta: "Explore Math",
    href: "/demo-practice/math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "english",
    label: "English",
    title: "Read passages and jump back to the evidence",
    body: "The bank includes 700+ English questions. Answer the statements on a passage, then use Show in text to jump from each explanation to the exact lines that support it.",
    cta: "Explore English",
    href: "/demo-practice/english",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_COURSE_SUBJECTS: ShowcaseSlide[] = [
  {
    key: "economics",
    label: "Economics",
    title: "Practice every statement with a clear write-up",
    body: "Work Wirtschaft verstehen cases in the exam format. Submit your answers, open the full solution, and tap Explanation beside any statement to see why it holds or fails.",
    cta: "Explore Economics",
    href: "/wiso/demo-practice/economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: "16 / 9",
  },
  {
    key: "math",
    label: "Math",
    title: "Drill the method under exam timing",
    body: "Open a WiSo math task, switch on timed mode, and use the calculator. After you submit, read the full solution so the method sticks under German wording.",
    cta: "Explore Math",
    href: "/wiso/demo-practice/math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "german",
    label: "German",
    title: "Read passages and jump back to the evidence",
    body: "Work a German reading passage with statements, submit your answers, then use Show in text to jump from each explanation back to the exact lines in the text.",
    cta: "Explore German",
    href: "/wiso/demo-practice/german",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const BBE_STUDY_TOOLS: ShowcaseSlide[] = [
  {
    key: "flashcards",
    label: "Flashcards",
    title: "Flip cards for terms and formulas",
    body: "Drill Economics definitions, Math formulas, and English vocabulary. Flip each card, rate how well you know it, and build recall before the exam.",
    cta: "Open Flashcards",
    href: "/flashcards",
    video: "/how-it-works/flashcards.mp4",
    poster: "/how-it-works/flashcards-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "matching",
    label: "Matching",
    title: "Connect concepts to the right meaning",
    body: "Pair each term with its definition in a timed matching board. Same decks as the flashcards, a different drill.",
    cta: "Open Matching",
    href: "/matching",
    video: "/how-it-works/matching.mp4",
    poster: "/how-it-works/matching-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    title: "A random theoretical quiz with a tutor",
    body: "The tutor robot picks fresh questions every run. Answer, get instant feedback, and keep drilling theory.",
    cta: "Open Tutor Exam",
    href: "/tutor-exam",
    video: "/how-it-works/tutor-exam.mp4",
    poster: "/how-it-works/tutor-exam-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_STUDY_TOOLS: ShowcaseSlide[] = [
  {
    key: "flashcards",
    label: "Flashcards",
    title: "Flip cards for terms and formulas",
    body: "Drill Wirtschaft verstehen terms, math formulas, and German reading vocabulary. Flip each card, rate how well you know it, and build recall before the exam.",
    cta: "Open Flashcards",
    href: "/wiso/flashcards",
    video: "/how-it-works/wiso-flashcards.mp4",
    poster: "/how-it-works/wiso-flashcards-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "matching",
    label: "Matching",
    title: "Connect concepts to the right meaning",
    body: "Pair each term with its definition in a timed matching board. Same WiSo decks as the flashcards, just a different drill.",
    cta: "Open Matching",
    href: "/wiso/matching",
    video: "/how-it-works/wiso-matching.mp4",
    poster: "/how-it-works/wiso-matching-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    title: "A random theoretical quiz with a tutor",
    body: "The tutor picks fresh WiSo theory questions every run. Answer, get instant feedback, and keep drilling until the wording feels familiar.",
    cta: "Open Tutor Exam",
    href: "/wiso/tutor-exam",
    video: "/how-it-works/wiso-tutor-exam.mp4",
    poster: "/how-it-works/wiso-tutor-exam-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.35;
/** Open the lightbox at native 100% — sharper on large screens than CSS upscaling. */
const INITIAL_LIGHTBOX_ZOOM = 1;

export function HowItWorksSection({ track = "bbe" }: { track?: HowItWorksTrack }) {
  const courseSubjects = track === "wiso" ? WISO_COURSE_SUBJECTS : BBE_COURSE_SUBJECTS;
  const studyTools = track === "wiso" ? WISO_STUDY_TOOLS : BBE_STUDY_TOOLS;
  const mainTabs = track === "wiso" ? WISO_MAIN_TABS : BBE_MAIN_TABS;
  const [tab, setTab] = useState<MainTab>("course");
  const [subject, setSubject] = useState<CourseSubject>(
    track === "wiso" ? "economics" : "economics",
  );
  const [tool, setTool] = useState<StudyTool>("flashcards");
  const [zoomed, setZoomed] = useState(false);
  const [lightboxScale, setLightboxScale] = useState(INITIAL_LIGHTBOX_ZOOM);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const zoomVideoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const slides =
    tab === "games" ? studyTools : tab === "mock-builder" ? BBE_MOCK_BUILDER : courseSubjects;
  const activeKey = tab === "games" ? tool : tab === "mock-builder" ? "mock-builder" : subject;
  const slide = slides.find((s) => s.key === activeKey) ?? slides[0];
  const slideIndex = slides.findIndex((s) => s.key === slide.key);

  const goSlide = (next: number) => {
    const i = (next + slides.length) % slides.length;
    const key = slides[i].key;
    if (tab === "games") setTool(key as StudyTool);
    else if (tab !== "mock-builder") setSubject(key as CourseSubject);
  };

  const setSlideKey = (key: string) => {
    if (tab === "games") setTool(key as StudyTool);
    else if (tab !== "mock-builder") setSubject(key as CourseSubject);
  };

  const openZoom = () => {
    videoRef.current?.pause();
    setLightboxScale(INITIAL_LIGHTBOX_ZOOM);
    setZoomed(true);
  };

  const closeZoom = () => {
    const zoomVideo = zoomVideoRef.current;
    const inline = videoRef.current;
    if (zoomVideo && inline && Number.isFinite(zoomVideo.currentTime)) {
      inline.currentTime = zoomVideo.currentTime;
    }
    setZoomed(false);
    setLightboxScale(INITIAL_LIGHTBOX_ZOOM);
    if (inline) void inline.play().catch(() => {});
  };

  const nudgeLightboxZoom = (dir: 1 | -1) => {
    setLightboxScale((prev) =>
      Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(prev + dir * ZOOM_STEP).toFixed(2))),
    );
  };

  useEffect(() => {
    if (!zoomed) return;

    const zoomVideo = zoomVideoRef.current;
    const inline = videoRef.current;
    if (zoomVideo) {
      if (inline && Number.isFinite(inline.currentTime)) {
        zoomVideo.currentTime = inline.currentTime;
      }
      void zoomVideo.play().catch(() => {});
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const z = zoomVideoRef.current;
        const v = videoRef.current;
        if (z && v && Number.isFinite(z.currentTime)) v.currentTime = z.currentTime;
        setZoomed(false);
        setLightboxScale(INITIAL_LIGHTBOX_ZOOM);
        if (v) void v.play().catch(() => {});
      }
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setLightboxScale((prev) => Math.min(MAX_ZOOM, +(prev + ZOOM_STEP).toFixed(2)));
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setLightboxScale((prev) => Math.max(MIN_ZOOM, +(prev - ZOOM_STEP).toFixed(2)));
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed, slide.key]);

  useEffect(() => {
    setZoomed(false);
    setLightboxScale(INITIAL_LIGHTBOX_ZOOM);
  }, [tab, subject, tool]);

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage || zoomed) return;

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
    return () => observer.disconnect();
  }, [tab, subject, tool, zoomed]);

  return (
    <section id="how-it-works" className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[90rem] text-center">
        <h2 className="font-display text-[1.75rem] font-semibold text-foreground sm:text-4xl lg:text-5xl">
          How it works
        </h2>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2">
        {mainTabs.map((item) => {
          const active = tab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={cn(
                "min-h-10 rounded-sm border px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors sm:px-5 sm:text-sm",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-10 max-w-[90rem]">
        <div
          ref={stageRef}
          className="relative rounded-2xl border border-border bg-card px-4 py-4 shadow-sm sm:px-10 sm:py-5 lg:px-12 lg:py-5"
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goSlide(slideIndex - 1)}
            className="absolute left-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-secondary sm:left-3 sm:h-11 sm:w-11 lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => goSlide(slideIndex + 1)}
            className="absolute right-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-secondary sm:right-3 sm:h-11 sm:w-11 lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="grid items-stretch gap-5 px-8 sm:px-0 lg:grid-cols-[minmax(0,3.2fr)_minmax(13rem,0.55fr)] lg:gap-6">
            <div className="min-w-0">
              <div className="overflow-hidden rounded-xl border border-border bg-muted">
                <div className="relative w-full" style={{ aspectRatio: slide.aspect }}>
                  <video
                    key={slide.key}
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    poster={slide.poster}
                    src={slide.video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={`${slide.label} walkthrough`}
                  />
                  <button
                    type="button"
                    onClick={openZoom}
                    aria-label="Zoom in"
                    className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/40 bg-black/95 px-3 py-2 text-xs font-semibold text-white shadow-lg [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:bg-black sm:bottom-3 sm:right-3 sm:gap-2 sm:px-5 sm:py-3 sm:text-base"
                  >
                    <ZoomIn className="h-4 w-4 sm:h-6 sm:w-6" />
                    Zoom in
                  </button>
                </div>
              </div>
            </div>

            <div
              key={slide.key}
              className="relative z-10 flex flex-col justify-center px-1 py-1 text-left sm:px-2 lg:py-2"
            >
              <div className="flex flex-wrap gap-1.5">
                {slides.map((item) => {
                  const active = slide.key === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSlideKey(item.key)}
                      className={cn(
                        "rounded-sm border px-3 py-1.5 text-[11px] font-semibold transition-colors sm:text-xs",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-foreground sm:text-[1.75rem] lg:text-[1.85rem]">
                {slide.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {slide.body}
              </p>
              <LocalizedLink
                to={slide.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-fit"
              >
                {slide.cta}
                <ChevronRight className="h-4 w-4" />
              </LocalizedLink>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-0.5">
          {slides.map((item, i) => (
            <button
              key={item.key}
              type="button"
              aria-label={`Show ${item.label}`}
              onClick={() => setSlideKey(item.key)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span
                className={cn(
                  "rounded-full transition-all",
                  i === slideIndex ? "h-2 w-6 bg-foreground" : "h-2 w-2 bg-border",
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {zoomed
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-2 sm:p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`${slide.label} walkthrough zoomed`}
              onClick={closeZoom}
            >
              <div
                className="relative overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl"
                style={{
                  width: `min(98vw, calc(94vh * (${slide.aspect})))`,
                }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: slide.aspect }}>
                  {/*
                    Zoom by sizing the video element (not CSS transform scale), so 100%
                    stays sharp on large screens and magnification reuses decoded pixels
                    without an extra soft compositor upscale pass when possible.
                  */}
                  <video
                    key={`zoom-${slide.key}`}
                    ref={zoomVideoRef}
                    className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                    style={{
                      width: `${lightboxScale * 100}%`,
                      height: `${lightboxScale * 100}%`,
                    }}
                    poster={slide.poster}
                    src={slide.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    aria-label={`${slide.label} walkthrough enlarged`}
                  />
                </div>

                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-black/92 p-1.5 shadow-lg backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => nudgeLightboxZoom(-1)}
                    disabled={lightboxScale <= MIN_ZOOM}
                    aria-label="Zoom out"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 disabled:opacity-40"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <span className="min-w-[3.25rem] text-center text-sm font-semibold tabular-nums text-white">
                    {Math.round(lightboxScale * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => nudgeLightboxZoom(1)}
                    disabled={lightboxScale >= MAX_ZOOM}
                    aria-label="Zoom in"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 disabled:opacity-40"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={closeZoom}
                  aria-label="Close zoom"
                  className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/92 text-white shadow-md backdrop-blur-sm transition hover:bg-black"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
