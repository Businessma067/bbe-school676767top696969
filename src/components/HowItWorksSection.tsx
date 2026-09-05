import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { cn } from "@/lib/utils";

type MainTab = "course" | "mock-exams" | "mock-builder" | "games";
type CourseSubject = "economics" | "math" | "english";

const MAIN_TABS: { key: MainTab; label: string }[] = [
  { key: "course", label: "Course" },
  { key: "mock-exams", label: "Mock exams" },
  { key: "mock-builder", label: "Mock Builder" },
  { key: "games", label: "Games" },
];

const COURSE_SUBJECTS: {
  key: CourseSubject;
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  video: string;
  poster: string;
}[] = [
  {
    key: "economics",
    label: "Economics",
    title: "Guides, tasks, and AI explanations",
    body: "Open a chapter guide, see how many tasks sit behind it, then jump into a case. Submit your answers, scroll the explanation, and tap AI when you want a second pass on a statement.",
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

const PLACEHOLDERS: Record<
  Exclude<MainTab, "course">,
  { title: string; body: string }
> = {
  "mock-exams": {
    title: "Full-length exam simulations",
    body: "This walkthrough is next. Use Course to see how Economics, Math, and English practice actually feels.",
  },
  "mock-builder": {
    title: "Build a mock around your weak spots",
    body: "This walkthrough is next. Use Course to see how Economics, Math, and English practice actually feels.",
  },
  games: {
    title: "Flashcards, matching, and drills",
    body: "This walkthrough is next. Use Course to see how Economics, Math, and English practice actually feels.",
  },
};

export function HowItWorksSection() {
  const [tab, setTab] = useState<MainTab>("course");
  const [subject, setSubject] = useState<CourseSubject>("economics");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const slide = COURSE_SUBJECTS.find((s) => s.key === subject) ?? COURSE_SUBJECTS[0];
  const subjectIndex = COURSE_SUBJECTS.findIndex((s) => s.key === subject);

  const goSubject = (next: number) => {
    const i = (next + COURSE_SUBJECTS.length) % COURSE_SUBJECTS.length;
    setSubject(COURSE_SUBJECTS[i].key);
  };

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage || tab !== "course") return;

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
  }, [tab, subject]);

  return (
    <section id="how-it-works" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
          How it works
        </h2>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
        {MAIN_TABS.map((item) => {
          const active = tab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
                active
                  ? "bg-[#161616] text-white"
                  : "bg-[#e8e6df] text-[#6b6962] hover:bg-[#dddcd5] hover:text-foreground",
              )}
            >
              {active && (
                <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              )}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl">
        <div
          ref={stageRef}
          className="relative rounded-[2rem] px-12 py-6 sm:rounded-[2.5rem] sm:px-14 sm:py-8 lg:px-16 lg:py-10"
          style={{ backgroundColor: "#F6EFC4" }}
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={() => (tab === "course" ? goSubject(subjectIndex - 1) : cycleTab(tab, -1, setTab))}
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#161616] text-white shadow-md transition hover:bg-black sm:left-3 sm:h-11 sm:w-11 lg:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => (tab === "course" ? goSubject(subjectIndex + 1) : cycleTab(tab, 1, setTab))}
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#161616] text-white shadow-md transition hover:bg-black sm:right-3 sm:h-11 sm:w-11 lg:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_50px_rgba(40,32,12,0.12)]">
                {tab === "course" ? (
                  <>
                    <div className="flex flex-wrap gap-1.5 border-b border-border/70 px-3 py-2.5 sm:px-4">
                      {COURSE_SUBJECTS.map((item) => {
                        const active = subject === item.key;
                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => setSubject(item.key)}
                            className={cn(
                              "rounded-full px-3 py-1 text-[11px] font-semibold transition-colors sm:text-xs",
                              active
                                ? "bg-[#161616] text-white"
                                : "bg-[#f1efe8] text-[#6b6962] hover:bg-[#e6e4dc]",
                            )}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                    <div className="relative aspect-[16/10] bg-[#f7f6f2]">
                      <video
                        key={slide.key}
                        ref={videoRef}
                        className="h-full w-full object-cover object-top"
                        poster={slide.poster}
                        src={slide.video}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${slide.label} course walkthrough`}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-[#f7f6f2] px-6 text-center">
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Walkthrough coming next. Switch back to Course to watch Economics, Math, and English.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              key={tab === "course" ? slide.key : tab}
              className="relative z-10 px-1 pb-10 text-left sm:px-2 lg:pb-14 lg:pr-8"
            >
              {tab === "course" ? (
                <>
                  <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-[#161616] sm:text-3xl lg:text-[2.05rem]">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#3f3c35] sm:text-base">
                    {slide.body}
                  </p>
                  <LocalizedLink
                    to={slide.href}
                    className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#161616] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    {slide.cta}
                    <ChevronRight className="h-4 w-4" />
                  </LocalizedLink>
                </>
              ) : (
                <>
                  <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-[#161616] sm:text-3xl lg:text-[2.05rem]">
                    {PLACEHOLDERS[tab].title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#3f3c35] sm:text-base">
                    {PLACEHOLDERS[tab].body}
                  </p>
                </>
              )}
            </div>
          </div>

          <div
            className="pointer-events-none absolute -bottom-1 right-4 hidden sm:block lg:right-10"
            aria-hidden
          >
            <svg viewBox="0 0 92 72" className="h-16 w-auto lg:h-[4.5rem]">
              <rect x="6" y="28" width="34" height="38" rx="3" fill="#2f6f9a" />
              <rect x="10" y="34" width="26" height="3" rx="1.5" fill="#d7e7f3" />
              <rect x="22" y="18" width="36" height="48" rx="3" fill="#3d8bb8" />
              <rect x="27" y="25" width="26" height="3" rx="1.5" fill="#e8f3fa" />
              <rect x="44" y="8" width="38" height="58" rx="3" transform="rotate(8 63 37)" fill="#161616" />
              <rect x="52" y="20" width="22" height="3" rx="1.5" transform="rotate(8 63 21.5)" fill="#f2f1ed" />
            </svg>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {tab === "course"
            ? COURSE_SUBJECTS.map((item, i) => (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setSubject(item.key)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === subjectIndex ? "w-7 bg-[#161616]" : "w-2 bg-[#c8c5bb] hover:bg-[#a9a69c]",
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
                    tab === item.key ? "w-7 bg-[#161616]" : "w-2 bg-[#c8c5bb] hover:bg-[#a9a69c]",
                  )}
                />
              ))}
        </div>
      </div>
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
