import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { CourseEconDemo } from "@/components/how-it-works/CourseEconDemo";
import { CourseEnglishDemo } from "@/components/how-it-works/CourseEnglishDemo";
import { CourseMathDemo } from "@/components/how-it-works/CourseMathDemo";
import { CourseMockDemo } from "@/components/how-it-works/CourseMockDemo";
import { CourseMockExamDemo } from "@/components/how-it-works/CourseMockExamDemo";
import { CourseFlashDemo, CourseMatchDemo, CourseTutorDemo } from "@/components/how-it-works/StudyToolsDemos";
import { CourseTheoryDemo } from "@/components/how-it-works/CourseTheoryDemo";

const WisoHowItWorksDemo = lazy(() =>
  import("@/components/how-it-works/WisoLiveDemos").then((m) => ({ default: m.WisoHowItWorksDemo })),
);

const BBE_REST = 2;
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

type MainTab = "course" | "theory" | "mock-exams" | "mock-builder" | "games";
type CourseSubject = "economics" | "math" | "english" | "german";
type StudyTool = "flashcards" | "matching" | "tutor-exam";
export type HowItWorksTrack = "bbe" | "wiso" | "hybrid";

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
  { key: "theory", label: "Theory" },
  { key: "mock-exams", label: "Mock Exams" },
  { key: "mock-builder", label: "Mock Builder" },
  { key: "games", label: "Study tools" },
];

const WISO_MAIN_TABS = BBE_MAIN_TABS;

const BBE_THEORY: ShowcaseSlide[] = [
  {
    key: "theory",
    label: "Theory",
    title: "Read the theory the tasks assume",
    body: "Every Full Course chapter has its own theory reader: the definitions, the formulas, and the reasoning the true and false statements rely on. Open any chapter and read the part you need before you practice.",
    cta: "Open Math theory",
    href: "/products/full-course-math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const BBE_MOCK_EXAMS: ShowcaseSlide[] = [
  {
    key: "mock-exams",
    label: "Mock Exams",
    title: "Finish the paper and read the result",
    body: "Answer one English question, one math question, and one economics question on the 34-question mock. After you submit, the results chart shows how long each of the 34 questions took. Open Tasks and read the explanations.",
    cta: "Open Mock Exams",
    href: "/mock-exams",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const BBE_MOCK_BUILDER: ShowcaseSlide[] = [
  {
    key: "mock-builder",
    label: "Mock Builder",
    title: "Build a mock around your weak spots",
    body: "Choose the chapters and subtopics you struggle with, set the mix and question count, then start. You get a timed mock drawn from the Full Course, not a random paper.",
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
    title: "See why each statement is true or false",
    body: "You work economics cases in the real exam format, 680+ questions in the Full Course. After you submit, tap Explanation beside any statement and read why it holds or fails, without leaving the solution.",
    cta: "Explore Economics",
    href: "/demo-practice/economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: "16 / 9",
  },
  {
    key: "math",
    label: "Math",
    title: "Practice under the same time pressure",
    body: "Open a math task from the 2,800-question bank, turn on timed mode, and use the exam calculator. When you finish, walk through the full solution step by step until the method sticks.",
    cta: "Explore Math",
    href: "/demo-practice/math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "english",
    label: "English",
    title: "Jump from the explanation back into the passage",
    body: "Answer statements on a reading passage from the 700+ English bank. Then use Show in text to jump from each explanation to the exact lines that support it.",
    cta: "Explore English",
    href: "/demo-practice/english",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_THEORY: ShowcaseSlide[] = [
  {
    key: "theory",
    label: "Theory",
    title: "Read the theory the tasks assume",
    body: "Every WiSo math chapter has its own German theory reader: the definitions, the formulas, and the reasoning the statements rely on. Open a chapter and read the part you need before you practice.",
    cta: "Open Math theory",
    href: "/wiso/products/full-course-math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_MOCK_EXAMS: ShowcaseSlide[] = [
  {
    key: "mock-exams",
    label: "Mock Exams",
    title: "Finish the paper and read the result",
    body: "Answer one Wirtschaft question, one German question, and one math question on the 34-question WiSo mock. After you submit, the results chart shows how long each question took. Open the tasks and read the explanations.",
    cta: "Open Mock Exams",
    href: "/wiso/mock-exams",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_MOCK_BUILDER: ShowcaseSlide[] = [
  {
    key: "mock-builder",
    label: "Mock Builder",
    title: "Build a mock around your weak spots",
    body: "Choose the WiSo chapters and subtopics you struggle with, set the mix and question count, then start. You get a timed mock drawn from the Full Course, not a random paper.",
    cta: "Open Mock Builder",
    href: "/wiso/mock-builder",
    video: "/how-it-works/mock-builder.mp4",
    poster: "/how-it-works/mock-builder-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_COURSE_SUBJECTS: ShowcaseSlide[] = [
  {
    key: "economics",
    label: "Economics",
    title: "See why each statement holds or fails",
    body: "You work Wirtschaft verstehen cases in the exam format. After you submit, open the full solution and tap Explanation beside any statement to see the reasoning.",
    cta: "Explore Economics",
    href: "/wiso/demo-practice/economics",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: "16 / 9",
  },
  {
    key: "math",
    label: "Math",
    title: "Practice under the same time pressure",
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
    title: "Jump from the explanation back into the text",
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
    title: "Flip cards until the terms stick",
    body: "Go through economics definitions, math formulas, and English vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.",
    cta: "Open Flashcards",
    href: "/flashcards",
    video: "/how-it-works/flashcards.mp4",
    poster: "/how-it-works/flashcards-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "matching",
    label: "Matching",
    title: "Match each term to its meaning",
    body: "Pair terms with definitions on a timed board. Same decks as the flashcards, just a different way to practice.",
    cta: "Open Matching",
    href: "/matching",
    video: "/how-it-works/matching.mp4",
    poster: "/how-it-works/matching-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    title: "Quiz yourself on theory",
    body: "Each run gives you a fresh set of theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.",
    cta: "Open Tutor Exam",
    href: "/tutor-exam",
    video: "/how-it-works/tutor-exam.mp4",
    poster: "/how-it-works/tutor-exam-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const HYBRID_COURSE_SUBJECTS: ShowcaseSlide[] = [
  {
    key: "economics",
    label: "Economics",
    title: "English and German economics, one idea",
    body: "Work BBE economics in English and Wirtschaft verstehen in German. Bridge cases train the same concept in both wordings so you do not study the chapter twice.",
    cta: "Open Hybrid economics",
    href: "/hybrid/course",
    video: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    aspect: "16 / 9",
  },
  {
    key: "math",
    label: "Math",
    title: "One math bank, two exam languages",
    body: "Shared mathematics one task at a time: BBE, then WiSo, or the reverse. Timed mode, the exam calculator, and a hybrid paper whose order follows the focus you pick.",
    cta: "Open shared math",
    href: "/hybrid/math",
    video: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "english",
    label: "English",
    title: "The BBE language section",
    body: "Reading, grammar, and vocabulary for the English pillar. Show in text jumps from each explanation back to the passage.",
    cta: "Open English",
    href: "/hybrid/course",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "german",
    label: "German",
    title: "The WiSo language section",
    body: "Deutsches Sprachverständnis: reading passages with statements, then jump from each explanation back into the text.",
    cta: "Open German",
    href: "/hybrid/course",
    video: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    aspect: "3420 / 1966",
  },
];

const WISO_STUDY_TOOLS: ShowcaseSlide[] = [
  {
    key: "flashcards",
    label: "Flashcards",
    title: "Flip cards until the terms stick",
    body: "Go through Wirtschaft verstehen terms, math formulas, and German reading vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.",
    cta: "Open Flashcards",
    href: "/wiso/flashcards",
    video: "/how-it-works/wiso-flashcards.mp4",
    poster: "/how-it-works/wiso-flashcards-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "matching",
    label: "Matching",
    title: "Match each term to its meaning",
    body: "Pair terms with definitions on a timed board. Same WiSo decks as the flashcards, just a different way to practice.",
    cta: "Open Matching",
    href: "/wiso/matching",
    video: "/how-it-works/wiso-matching.mp4",
    poster: "/how-it-works/wiso-matching-poster.jpg",
    aspect: "3420 / 1966",
  },
  {
    key: "tutor-exam",
    label: "Tutor Exam",
    title: "Quiz yourself on theory",
    body: "Each run gives you a fresh set of WiSo theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.",
    cta: "Open Tutor Exam",
    href: "/wiso/tutor-exam",
    video: "/how-it-works/wiso-tutor-exam.mp4",
    poster: "/how-it-works/wiso-tutor-exam-poster.jpg",
    aspect: "3420 / 1966",
  },
];

function HowItWorksLive({
  track,
  tab,
  slideKey,
}: {
  track: HowItWorksTrack;
  tab: MainTab;
  slideKey: string;
}) {
  if (track === "wiso") {
    return (
      <Suspense fallback={null}>
        <WisoHowItWorksDemo tab={tab} slideKey={slideKey} rest={BBE_REST} />
      </Suspense>
    );
  }
  const rest = track === "bbe" ? BBE_REST : 1;
  const lockCopy = track === "bbe";
  if (tab === "theory") return <CourseTheoryDemo rest={rest} lockCopy={lockCopy} />;
  if (tab === "mock-exams") return <CourseMockExamDemo rest={rest} lockCopy={lockCopy} />;
  if (tab === "mock-builder") return <CourseMockDemo rest={rest} lockCopy={lockCopy} />;
  if (tab === "games") {
    if (slideKey === "matching") return <CourseMatchDemo rest={rest} lockCopy={lockCopy} />;
    if (slideKey === "tutor-exam") return <CourseTutorDemo rest={rest} lockCopy={lockCopy} />;
    return <CourseFlashDemo rest={rest} lockCopy={lockCopy} />;
  }
  if (slideKey === "math") return <CourseMathDemo rest={rest} lockCopy={lockCopy} />;
  if (slideKey === "english") return <CourseEnglishDemo rest={rest} lockCopy={lockCopy} />;
  return <CourseEconDemo rest={rest} lockCopy={lockCopy} />;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.35;
/** Open the lightbox at native 100% — sharper on large screens than CSS upscaling. */
const INITIAL_LIGHTBOX_ZOOM = 1;

export function HowItWorksSection({ track = "bbe" }: { track?: HowItWorksTrack }) {
  const { t } = useLanguage();
  const courseSubjects =
    track === "wiso"
      ? WISO_COURSE_SUBJECTS
      : track === "hybrid"
        ? HYBRID_COURSE_SUBJECTS
        : BBE_COURSE_SUBJECTS;
  const studyTools = track === "wiso" ? WISO_STUDY_TOOLS : BBE_STUDY_TOOLS;
  const theorySlides = track === "wiso" ? WISO_THEORY : BBE_THEORY;
  const mockExamSlides = track === "wiso" ? WISO_MOCK_EXAMS : BBE_MOCK_EXAMS;
  const mockBuilderSlides = track === "wiso" ? WISO_MOCK_BUILDER : BBE_MOCK_BUILDER;
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
    tab === "games"
      ? studyTools
      : tab === "mock-exams"
        ? mockExamSlides
        : tab === "mock-builder"
          ? mockBuilderSlides
          : tab === "theory"
            ? theorySlides
            : courseSubjects;
  const activeKey =
    tab === "games"
      ? tool
      : tab === "mock-exams"
        ? "mock-exams"
        : tab === "mock-builder"
          ? "mock-builder"
          : tab === "theory"
            ? "theory"
            : subject;
  const slide = slides.find((s) => s.key === activeKey) ?? slides[0];
  const slideIndex = slides.findIndex((s) => s.key === slide.key);
  const liveTrack = track === "bbe" || track === "hybrid";
  const liveCourseDemo =
    (liveTrack &&
      tab === "course" &&
      (slide.key === "economics" || slide.key === "math" || slide.key === "english")) ||
    (track === "wiso" && tab === "course");
  const liveMockDemo = (liveTrack || track === "wiso") && tab === "mock-builder";
  const liveMockExamDemo = (liveTrack || track === "wiso") && tab === "mock-exams";
  const liveStudyDemo = (liveTrack && tab === "games") || (track === "wiso" && tab === "games");
  const liveTheoryDemo = (liveTrack || track === "wiso") && tab === "theory";
  const liveStage = liveCourseDemo || liveMockDemo || liveMockExamDemo || liveStudyDemo || liveTheoryDemo;

  const applySlideKey = (key: string) => {
    if (tab === "games") setTool(key as StudyTool);
    else if (tab === "course") setSubject(key as CourseSubject);
  };

  const turnPane = (dir: 1 | -1, apply: () => void) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = document.startViewTransition?.bind(document);
    if (reduce || !start) {
      apply();
      return;
    }
    document.documentElement.style.setProperty("--hiw-shift", `${dir * 42}px`);
    try {
      start(() => {
        flushSync(apply);
      });
    } catch {
      apply();
    }
  };

  const goSlide = (next: number) => {
    const i = (next + slides.length) % slides.length;
    const key = slides[i].key;
    if (key === slide.key) return;
    const dir: 1 | -1 = next > slideIndex ? 1 : -1;
    turnPane(dir, () => applySlideKey(key));
  };

  const setSlideKey = (key: string) => {
    if (key === slide.key) return;
    const next = slides.findIndex((item) => item.key === key);
    const dir: 1 | -1 = next > slideIndex ? 1 : -1;
    turnPane(dir, () => applySlideKey(key));
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
    <section id="how-it-works" className="relative bg-background px-3 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[90rem] text-center">
        <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          How it works
        </h2>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 sm:mt-8">
        {mainTabs.map((item) => {
          const active = tab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                if (item.key === tab) return;
                turnPane(1, () => setTab(item.key));
              }}
              className={cn(
                "min-h-11 rounded-sm border px-3 py-2.5 text-xs font-semibold tracking-wide transition-colors sm:min-h-10 sm:px-5 sm:py-2 sm:text-sm",
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

      <div className="relative mx-auto mt-8 max-w-[90rem] sm:mt-10">
        <div
          ref={stageRef}
          className="relative rounded-2xl border border-border bg-card px-3 py-4 shadow-sm sm:px-10 sm:py-5 lg:px-12 lg:py-5"
        >
          <div
            className="grid items-stretch gap-5 px-0 lg:grid-cols-[minmax(0,3.2fr)_minmax(13rem,0.55fr)] lg:gap-6"
            style={{ viewTransitionName: "hiw-pane" }}
          >
            <div className="relative min-w-0">
              <button
                type="button"
                aria-label={t("Previous")}
                onClick={() => goSlide(slideIndex - 1)}
                className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-secondary sm:left-3 sm:h-11 sm:w-11 lg:-left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label={t("Next")}
                onClick={() => goSlide(slideIndex + 1)}
                className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-secondary sm:right-3 sm:h-11 sm:w-11 lg:-right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: slide.aspect }}
                >
                  <div className="absolute inset-0">
                  {liveStage ? (
                    // One live player at a time: hide the inline demo while the lightbox owns it.
                    !zoomed ? (
                      <HowItWorksLive key={slide.key} track={track} tab={tab} slideKey={slide.key} />
                    ) : null
                  ) : (
                    <video
                      key={slide.key}
                      ref={videoRef}
                      className="pointer-events-none absolute inset-0 h-full w-full object-contain"
                      poster={slide.poster}
                      src={slide.video}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-label={`${slide.label} walkthrough`}
                    />
                  )}
                  </div>
                  <button
                    type="button"
                    onClick={openZoom}
                    aria-label={t("Zoom in")}
                    className="absolute bottom-3 right-3 z-10 hidden items-center gap-2 rounded-md border border-white/40 bg-black/95 px-5 py-3 text-base font-semibold text-white shadow-lg [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:bg-black sm:inline-flex"
                  >
                    <ZoomIn className="h-6 w-6" />
                    Zoom in
                  </button>
                </div>
                <button
                  type="button"
                  onClick={openZoom}
                  aria-label={t("Zoom in")}
                  className="flex w-full items-center justify-center gap-1.5 border-t border-border bg-foreground px-3 py-2.5 text-xs font-semibold text-background sm:hidden"
                >
                  <ZoomIn className="h-4 w-4" />
                  Zoom in
                </button>
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
              aria-label={t(`Show ${item.label}`)}
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
                style={
                  liveStage
                    ? { width: "min(96vw, 1100px)", height: "min(92dvh, 860px)" }
                    : {
                        width: `min(96vw, calc((100dvh - 2.5rem) * (${slide.aspect})))`,
                        maxHeight: "calc(100dvh - 2.5rem)",
                      }
                }
                onClick={(event) => event.stopPropagation()}
              >
                <div
                  className="relative h-full w-full overflow-hidden bg-black"
                  style={liveStage ? undefined : { aspectRatio: slide.aspect }}
                >
                  {liveStage ? (
                    <div className="absolute inset-0">
                      <HowItWorksLive key={slide.key} track={track} tab={tab} slideKey={slide.key} />
                    </div>
                  ) : (
                    <video
                      key={`zoom-${slide.key}`}
                      ref={zoomVideoRef}
                      className="pointer-events-none absolute inset-0 h-full w-full origin-center object-contain"
                      style={{ transform: `scale(${lightboxScale})` }}
                      poster={slide.poster}
                      src={slide.video}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-label={`${slide.label} walkthrough enlarged`}
                    />
                  )}
                </div>

                {!liveStage ? (
                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-black/92 p-1.5 shadow-lg backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={() => nudgeLightboxZoom(-1)}
                      disabled={lightboxScale <= MIN_ZOOM}
                      aria-label={t("Zoom out")}
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
                      aria-label={t("Zoom in")}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 disabled:opacity-40"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={closeZoom}
                  aria-label={t("Close zoom")}
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
