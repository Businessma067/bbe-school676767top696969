import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { cn } from "@/lib/utils";

type MainTab = "course" | "mock-exams" | "mock-builder" | "games";
type CourseSubject = "economics" | "math" | "english";
type StudyTool = "flashcards" | "matching" | "tutor-exam";

type ShowcaseSlide = {
  key: string;
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  video: string;
  poster: string;
};

const MAIN_TABS: { key: MainTab; label: string }[] = [
  { key: "course", label: "Course" },
  { key: "mock-exams", label: "Mock exams" },
  { key: "mock-builder", label: "Mock Builder" },
  { key: "games", label: "Study tools" },
];

const COURSE_SUBJECTS: ShowcaseSlide[] = [
  {
    key: "economics",
    label: "Economics",
    title: "Statement explanations with AI beside them",
    body: "Open a guide, pick a task, submit, then open the full solution. For any statement, tap AI explanation to read the tactical write-up and the AI pass side by side — without leaving the solution panel.",
    cta: "Explore Economics",
    href: "/demo-practice/economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
  },
  {
    key: "math",
    label: "Math",
    title: "Timed drills with the exam calculator",
    body: "Start from the guide, open a question, switch on timed mode, and use the calculator. Submit, then scroll the full solution so the method sticks.",
    cta: "Explore Math",
    href: "/demo-practice/math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
  },
  {
    key: "english",
    label: "English",
    title: "Passages with show-in-text",
    body: "Open the guide, work a passage with statements, and submit. Then use Show in text to jump from each explanation back to the exact lines in the passage.",
    cta: "Explore English",
    href: "/demo-practice/english",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
  },
];

const STUDY_TOOLS: ShowcaseSlide[] = [
  {
    key: "flashcards",
    label: "Flashcards",
    title: "Flip cards for terms and formulas",
    body: "Drill Economics definitions, Math formulas, and English vocabulary. Flip each card, rate how well you know it, and build recall before the exam.",
    cta: "Open Flashcards",
    href: "/flashcards",
    video: "/how-it-works/flashcards.mp4",
    poster: "/how-it-works/flashcards-poster.jpg",
  },
  {
    key: "matching",
    label: "Matching",
    title: "Connect concepts to the right meaning",
    body: "Pair each term with its definition in a timed matching board. Same decks as the flashcards — a different way to lock the links in.",
    cta: "Open Matching",
    href: "/matching",
    video: "/how-it-works/matching.mp4",
    poster: "/how-it-works/matching-poster.jpg",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    title: "A random theoretical quiz with a tutor",
    body: "The tutor robot picks fresh questions every run. Answer, get instant feedback, and keep drilling theory until it feels automatic.",
    cta: "Open Tutor Exam",
    href: "/tutor-exam",
    video: "/how-it-works/tutor-exam.mp4",
    poster: "/how-it-works/tutor-exam-poster.jpg",
  },
];

const PLACEHOLDERS: Record<
  Exclude<MainTab, "course" | "games">,
  { title: string; body: string }
> = {
  "mock-exams": {
    title: "Full-length exam simulations",
    body: "This walkthrough is next. Use Course or Study tools to see how practice actually feels.",
  },
  "mock-builder": {
    title: "Build a mock around your weak spots",
    body: "This walkthrough is next. Use Course or Study tools to see how practice actually feels.",
  },
};

const VIDEO_TABS: MainTab[] = ["course", "games"];

export function HowItWorksSection() {
  const [tab, setTab] = useState<MainTab>("course");
  const [subject, setSubject] = useState<CourseSubject>("economics");
  const [tool, setTool] = useState<StudyTool>("flashcards");
  const [zoomed, setZoomed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const zoomVideoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const slides = tab === "games" ? STUDY_TOOLS : COURSE_SUBJECTS;
  const activeKey = tab === "games" ? tool : subject;
  const slide = slides.find((s) => s.key === activeKey) ?? slides[0];
  const slideIndex = slides.findIndex((s) => s.key === slide.key);

  const goSlide = (next: number) => {
    const i = (next + slides.length) % slides.length;
    const key = slides[i].key;
    if (tab === "games") setTool(key as StudyTool);
    else setSubject(key as CourseSubject);
  };

  const setSlideKey = (key: string) => {
    if (tab === "games") setTool(key as StudyTool);
    else setSubject(key as CourseSubject);
  };

  const hasVideoShowcase = VIDEO_TABS.includes(tab);

  const openZoom = () => {
    videoRef.current?.pause();
    setZoomed(true);
  };

  const closeZoom = () => {
    const zoomVideo = zoomVideoRef.current;
    const inline = videoRef.current;
    if (zoomVideo && inline && Number.isFinite(zoomVideo.currentTime)) {
      inline.currentTime = zoomVideo.currentTime;
    }
    setZoomed(false);
    if (inline) void inline.play().catch(() => {});
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
        if (v) void v.play().catch(() => {});
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
    // Close lightbox when switching tabs/slides so the wrong clip never stays open.
    setZoomed(false);
  }, [tab, subject, tool]);
  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage || !hasVideoShowcase || zoomed) return;

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
  }, [tab, subject, tool, hasVideoShowcase, zoomed]);

  return (
    <section id="how-it-works" className="relative bg-background px-3 py-14 sm:px-5 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-[90rem] text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          How it works
        </h2>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2">
        {MAIN_TABS.map((item) => {
          const active = tab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={cn(
                "rounded-sm border px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:px-5 sm:text-sm",
                active
                  ? "border-[#161616] bg-[#161616] text-[#F2F1ED]"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-8 max-w-[90rem]">
        <div
          ref={stageRef}
          className="relative rounded-2xl border border-border bg-card px-8 py-4 shadow-sm sm:px-10 sm:py-5 lg:px-12 lg:py-5"
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={() => (hasVideoShowcase ? goSlide(slideIndex - 1) : cycleTab(tab, -1, setTab))}
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary sm:left-3 sm:h-11 sm:w-11 lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => (hasVideoShowcase ? goSlide(slideIndex + 1) : cycleTab(tab, 1, setTab))}
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary sm:right-3 sm:h-11 sm:w-11 lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,3.2fr)_minmax(13rem,0.55fr)] lg:gap-6">
            <div className="min-w-0">
              {/* Frame matches recording aspect (3420×1966) so object-cover fills with no crop or letterbox. */}
              <div className="overflow-hidden rounded-xl border border-border bg-[#eceae4]">
                {hasVideoShowcase ? (
                  <div className="relative aspect-[3420/1966] w-full">
                    <video
                      key={slide.key}
                      ref={videoRef}
                      className="absolute inset-0 h-full w-full object-cover [image-rendering:auto]"
                      poster={slide.poster}
                      src={slide.video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={`${slide.label} walkthrough`}
                    />
                    <button
                      type="button"
                      onClick={openZoom}
                      aria-label="Zoom in"
                      className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-[#161616]/90 px-3 py-2 text-xs font-semibold text-[#F2F1ED] shadow-md backdrop-blur-sm transition hover:bg-[#161616]"
                    >
                      <ZoomIn className="h-4 w-4" />
                      Zoom in
                    </button>
                  </div>
                ) : (
                  <div className="flex aspect-[3420/1966] w-full items-center justify-center px-6 text-center">
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Walkthrough coming next. Switch to Course or Study tools to watch the demos.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              key={hasVideoShowcase ? slide.key : tab}
              className="relative z-10 flex flex-col justify-center px-1 py-1 text-left sm:px-2 lg:py-2"
            >
              {hasVideoShowcase ? (
                <>
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
                              ? "border-[#161616] bg-[#161616] text-[#F2F1ED]"
                              : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground sm:text-[1.75rem] lg:text-[1.85rem]">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {slide.body}
                  </p>
                  <LocalizedLink
                    to={slide.href}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-sm bg-[#161616] px-5 py-2.5 text-sm font-semibold text-[#F2F1ED] transition hover:bg-[#2a2a2a]"
                  >
                    {slide.cta}
                    <ChevronRight className="h-4 w-4" />
                  </LocalizedLink>
                </>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-foreground sm:text-[1.75rem] lg:text-[1.85rem]">
                    {PLACEHOLDERS[tab].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {PLACEHOLDERS[tab].body}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {hasVideoShowcase
            ? slides.map((item, i) => (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setSlideKey(item.key)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === slideIndex ? "w-7 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))
            : MAIN_TABS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setTab(item.key)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    tab === item.key ? "w-7 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
        </div>
      </div>

      {zoomed && hasVideoShowcase
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 sm:p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`${slide.label} walkthrough zoomed`}
              onClick={closeZoom}
            >
              <div
                className="relative w-[min(96vw,calc(92vh*3420/1966))] overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative aspect-[3420/1966] w-full">
                  <video
                    key={`zoom-${slide.key}`}
                    ref={zoomVideoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    poster={slide.poster}
                    src={slide.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    aria-label={`${slide.label} walkthrough enlarged`}
                  />
                </div>
                <button
                  type="button"
                  onClick={closeZoom}
                  aria-label="Close zoom"
                  className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#161616]/90 text-[#F2F1ED] shadow-md backdrop-blur-sm transition hover:bg-[#161616]"
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

function cycleTab(
  current: MainTab,
  dir: -1 | 1,
  setTab: (tab: MainTab) => void,
) {
  const i = MAIN_TABS.findIndex((t) => t.key === current);
  const next = MAIN_TABS[(i + dir + MAIN_TABS.length) % MAIN_TABS.length];
  setTab(next.key);
}
