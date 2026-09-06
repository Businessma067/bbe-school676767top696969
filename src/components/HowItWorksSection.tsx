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
  { key: "games", label: "Study tools" },
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
    <section id="how-it-works" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl text-center">
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

      <div className="relative mx-auto mt-8 max-w-7xl">
        <div
          ref={stageRef}
          className="relative rounded-2xl border border-border bg-card px-10 py-5 shadow-sm sm:px-12 sm:py-6 lg:px-14 lg:py-7"
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={() => (tab === "course" ? goSubject(subjectIndex - 1) : cycleTab(tab, -1, setTab))}
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary sm:left-3 sm:h-11 sm:w-11 lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => (tab === "course" ? goSubject(subjectIndex + 1) : cycleTab(tab, 1, setTab))}
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary sm:right-3 sm:h-11 sm:w-11 lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(15rem,0.7fr)] lg:gap-8">
            <div className="min-w-0">
              <div className="overflow-hidden rounded-xl border border-border bg-[#f7f6f2]">
                {tab === "course" ? (
                  <div className="relative min-h-[18rem] sm:min-h-[26rem] lg:min-h-[34rem] xl:min-h-[38rem]">
                    <video
                      key={slide.key}
                      ref={videoRef}
                      className="absolute inset-0 h-full w-full object-contain object-top"
                      poster={slide.poster}
                      src={slide.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={`${slide.label} course walkthrough`}
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[18rem] items-center justify-center px-6 text-center sm:min-h-[26rem] lg:min-h-[34rem]">
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Walkthrough coming next. Switch back to Course to watch Economics, Math, and English.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              key={tab === "course" ? slide.key : tab}
              className="relative z-10 flex flex-col justify-center px-1 py-1 text-left sm:px-2 lg:py-2"
            >
              {tab === "course" ? (
                <>
                  <div className="flex flex-wrap gap-1.5">
                    {COURSE_SUBJECTS.map((item) => {
                      const active = subject === item.key;
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setSubject(item.key)}
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
          {tab === "course"
            ? COURSE_SUBJECTS.map((item, i) => (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setSubject(item.key)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === subjectIndex ? "w-7 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground/40",
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
