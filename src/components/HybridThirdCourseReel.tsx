import { useEffect, useRef, useState, type ReactNode } from "react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import hallAsset from "@/assets/exam-hall-real.png.asset.json";
import { cn } from "@/lib/utils";

const PAGES = [
  { id: "core", label: "Shared core" },
  { id: "lanes", label: "Language lanes" },
  { id: "modes", label: "Every mode" },
] as const;

function stickyChromeHeight(): number {
  const header = document.querySelector("header");
  if (!header) return 0;
  const position = getComputedStyle(header).position;
  if (position !== "sticky" && position !== "fixed") return 0;
  return Math.round(header.getBoundingClientRect().height);
}

/**
 * Three full-screen pages in an ordinary horizontal scroller. Swipe, drag, or
 * the arrow buttons move left and right. Vertical scrolling stays with the page.
 */
export function HybridThirdCourseReel() {
  const [front, setFront] = useState(0);
  const [chrome, setChrome] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  const dragRef = useRef<{ pointerId: number; x: number; left: number } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceRef.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const measure = () => setChrome(stickyChromeHeight());
    measure();
    const header = document.querySelector("header");
    const observer = header ? new ResizeObserver(measure) : null;
    observer?.observe(header);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const go = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const next = Math.min(PAGES.length - 1, Math.max(0, index));
    scroller.scrollTo({
      left: next * scroller.clientWidth,
      behavior: reduceRef.current ? "auto" : "smooth",
    });
  };

  const syncFront = () => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.clientWidth === 0) return;
    const page = Math.round(scroller.scrollLeft / scroller.clientWidth);
    const next = Math.min(PAGES.length - 1, Math.max(0, page));
    setFront((current) => (current === next ? current : next));
  };

  return (
    <div
      className="relative w-full bg-[#071612]"
      style={{ height: `calc(100svh - ${chrome}px)` }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Why a third course"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(front + 1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(front - 1);
        }
      }}
    >
      <div
        ref={scrollerRef}
        className="flex h-full w-full cursor-grab snap-x snap-mandatory select-none overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        onScroll={syncFront}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          if ((event.target as HTMLElement).closest("button")) return;
          const scroller = scrollerRef.current;
          if (!scroller) return;
          dragRef.current = { pointerId: event.pointerId, x: event.clientX, left: scroller.scrollLeft };
          scroller.setPointerCapture(event.pointerId);
          scroller.style.scrollSnapType = "none";
          scroller.style.scrollBehavior = "auto";
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          const scroller = scrollerRef.current;
          if (!drag || !scroller || drag.pointerId !== event.pointerId) return;
          scroller.scrollLeft = drag.left - (event.clientX - drag.x);
        }}
        onPointerUp={(event) => {
          const drag = dragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;
          dragRef.current = null;
          const scroller = scrollerRef.current;
          if (!scroller) return;
          scroller.style.scrollSnapType = "";
          scroller.style.scrollBehavior = "";
          const page = Math.round(scroller.scrollLeft / scroller.clientWidth);
          go(page);
        }}
        onPointerCancel={() => {
          dragRef.current = null;
          const scroller = scrollerRef.current;
          if (!scroller) return;
          scroller.style.scrollSnapType = "";
          scroller.style.scrollBehavior = "";
        }}
      >
        {PAGES.map((page, index) => (
          <article
            key={page.id}
            aria-hidden={index !== front}
            aria-roledescription="slide"
            aria-label={page.label}
            className="h-full min-w-full shrink-0 snap-start bg-[#071612]"
          >
            {index === 0 ? <SharedCorePage live={index === front} /> : null}
            {index === 1 ? <LanguageLanesPage live={index === front} /> : null}
            {index === 2 ? <EveryModePage live={index === front} /> : null}
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous page"
        disabled={front === 0}
        onClick={() => go(front - 1)}
        className="absolute left-3 top-[62%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#071612]/70 text-white backdrop-blur-sm transition enabled:hover:bg-teal-800 disabled:opacity-30 sm:left-5"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        aria-label="Next page"
        disabled={front === PAGES.length - 1}
        onClick={() => go(front + 1)}
        className="absolute right-3 top-[62%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#071612]/70 text-white backdrop-blur-sm transition enabled:hover:bg-teal-800 disabled:opacity-30 sm:right-5"
      >
        <Chevron dir="right" />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {PAGES.map((page, index) => {
          const selected = index === front;
          return (
            <button
              key={page.id}
              type="button"
              aria-label={page.label}
              aria-current={selected ? "true" : undefined}
              onClick={() => go(index)}
              className="flex h-10 items-center"
            >
              <span
                className={cn(
                  "relative block h-1.5 overflow-hidden rounded-full bg-white/25 transition-all",
                  selected ? "w-12" : "w-2.5",
                )}
              >
                {selected ? <span className="absolute inset-0 bg-teal-300" /> : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
      <path
        d={dir === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PageFrame({
  step,
  kicker,
  title,
  body,
  photo,
  children,
}: {
  step: string;
  kicker: string;
  title: string;
  body: string;
  photo?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-[#071612]">
      {photo ? (
        <img
          src={photo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}
      <div className={cn("pointer-events-none absolute inset-0", photo ? "bg-[#071612]/55" : "bg-[#071612]")} />
      <div className="absolute inset-0">{children}</div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[48%] bg-gradient-to-t from-[#071612] from-55% to-transparent" />
      <div className="relative z-10 flex h-full w-full flex-col justify-end pb-20 pl-16 pr-6 pt-8 sm:pb-20 sm:pl-20 sm:pr-12 lg:pl-24 lg:pr-16">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200/80 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            Why a third course
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            <span data-no-i18n>{step}</span>
            {" · "}
            {kicker}
          </p>
          <h3 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.12] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] sm:text-5xl">
            {title}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] sm:text-lg">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function SharedCorePage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="01"
      kicker="Shared core"
      title="One chapter counts for both papers."
      body="Mathematics and economics stay a single queue. You flip the wording between English and German. You do not restart the chapter."
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,212,191,0.18),transparent_58%)]" />
      <div
        className={cn(
          "hybrid-flip absolute left-[6%] top-[9%] w-[min(52rem,90vw)] sm:left-[8%] sm:top-[12%]",
          !live && "[&_.hybrid-flip-inner]:![animation:none]",
        )}
      >
        <div className="hybrid-flip-inner h-28 sm:h-40">
          <div className="hybrid-flip-face flex h-full flex-col justify-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-200">English · BBE</p>
            <p className="font-display text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Elasticity
            </p>
          </div>
          <div className="hybrid-flip-face hybrid-flip-back flex h-full flex-col justify-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-200">Deutsch · WiSo</p>
            <p className="font-display text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Elastizität
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(14%+8.5rem)] px-6 sm:top-[calc(14%+11rem)] sm:px-12 lg:px-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200">One queue</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-10">
          <div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-4/5 rounded-full bg-teal-300" />
            </div>
            <div className="mt-1.5 flex justify-between text-[11px] text-white/80">
              <span>Math</span>
              <span>shared</span>
            </div>
          </div>
          <div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-3/5 rounded-full bg-teal-400" />
            </div>
            <div className="mt-1.5 flex justify-between text-[11px] text-white/80">
              <span>Economics</span>
              <span>shared</span>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

const EN_LANE = ["demand", "margin", "surplus", "incentive", "trade-off", "cost"];
const DE_LANE = ["Nachfrage", "Marge", "Überschuss", "Anreiz", "Abwägung", "Kosten"];

function LanguageLanesPage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="02"
      kicker="Both language lanes"
      title="English and German stay in the same week."
      body="BBE still needs the English paper. WiSo still needs German reading. Hybrid keeps both lanes moving, lighter than buying a second full course."
      photo={wuAsset.url}
    >
      <div className="absolute left-24 right-24 top-0 h-[50%] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_78%,transparent)] sm:left-28 sm:right-28 sm:h-[52%]">
        <div className="grid h-full grid-cols-2">
          <Lane title="English" words={EN_LANE} reverse={false} live={live} />
          <Lane title="Deutsch" words={DE_LANE} reverse live={live} />
        </div>
      </div>
    </PageFrame>
  );
}

function Lane({
  title,
  words,
  reverse,
  live,
}: {
  title: string;
  words: string[];
  reverse: boolean;
  live: boolean;
}) {
  const loop = [...words, ...words];
  return (
    <div className="relative h-full overflow-hidden">
      <p className="absolute left-6 top-6 z-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-100 sm:left-12 lg:left-16">
        {title}
      </p>
      <div className={cn("hybrid-lane-track pt-16", reverse && "hybrid-lane-track-reverse", !live && "![animation:none]")}>
        {loop.map((word, i) => (
          <p
            key={`${word}-${i}`}
            className="whitespace-nowrap px-4 py-3 font-display text-[1.65rem] font-semibold leading-none text-white/90 sm:px-6 sm:py-4 sm:text-5xl lg:text-7xl"
          >
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}

function StudyClock({ live }: { live: boolean }) {
  const ticks = Array.from({ length: 12 }, (_, index) => index);
  return (
    <div className="pointer-events-none absolute left-1/2 top-[40%] w-36 -translate-x-1/2 -translate-y-1/2 sm:top-[36%] sm:w-60" aria-hidden>
      <svg viewBox="0 0 120 120" className="h-auto w-full drop-shadow-[0_0_18px_rgba(45,212,191,0.45)]">
        <circle cx="60" cy="60" r="56" fill="#0c2a24" stroke="#99f6e4" strokeWidth="3.5" />
        <circle cx="60" cy="60" r="50" fill="#071612" stroke="#5eead4" strokeWidth="1.5" />
        {ticks.map((index) => (
          <line
            key={index}
            x1="60"
            y1="16"
            x2="60"
            y2={index % 3 === 0 ? 24 : 20}
            stroke="#f0fdfa"
            strokeWidth={index % 3 === 0 ? 2.6 : 1.3}
            strokeLinecap="round"
            transform={`rotate(${index * 30} 60 60)`}
          />
        ))}
        <g className={cn("hybrid-clock-hand-slow", !live && "![animation:none]")}>
          <line x1="60" y1="64" x2="60" y2="36" stroke="#5eead4" strokeWidth="4.5" strokeLinecap="round" />
        </g>
        <g className={cn("hybrid-clock-hand", !live && "![animation:none]")}>
          <line x1="60" y1="66" x2="60" y2="24" stroke="#f8fffe" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <circle cx="60" cy="60" r="3.5" fill="#ccfbf1" />
      </svg>
    </div>
  );
}

const MODES = [
  { time: "Morning", name: "BBE mock", note: "English clock" },
  { time: "Midday", name: "Bridge", note: "Same idea, two wordings" },
  { time: "Afternoon", name: "Mirror drill", note: "EN then DE, again" },
  { time: "Evening", name: "WiSo mock", note: "German clock" },
];

function EveryModePage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="03"
      kicker="Every mode"
      title="Both exam days, one rehearsal."
      body="Mocks, builders, flashcards, matching, and tutor stay. Hybrid adds Bridge, Mirror, Exam Flip, and a dual mock day so the two formats never blur together."
      photo={hallAsset.url}
    >
      <StudyClock live={live} />
      <div className="absolute inset-x-0 top-0 grid grid-cols-2 gap-y-8 px-6 pt-14 sm:grid-cols-4 sm:px-10 sm:pt-16 lg:px-14">
        {MODES.map((mode, i) => (
          <div
            key={mode.name}
            className={cn("hybrid-mode-chip", !live && "![animation:none] opacity-100")}
            style={{ animationDelay: `${i * 0.7}s` }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200">{mode.time}</p>
            <p className="mt-2 font-display text-3xl font-semibold leading-none text-white sm:text-4xl lg:text-5xl">
              {mode.name}
            </p>
            <p className="mt-2 max-w-[11rem] text-sm text-white/75">{mode.note}</p>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}
