import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BBE_EXAM_FORMAT } from "@/config/bbe-exam-hub";
import { WISO_EXAM_FORMAT } from "@/config/wiso-exam-hub";
import { PAID_PRODUCTS } from "@/lib/checkout-catalog";
import { cn } from "@/lib/utils";

const SLIDES = [
  { id: "core", label: "Shared core", short: "Core" },
  { id: "lanes", label: "Languages", short: "Languages" },
  { id: "modes", label: "Modes", short: "Modes" },
] as const;

const BBE_PRICE = PAID_PRODUCTS["full-course"].priceEur;
const WISO_PRICE = PAID_PRODUCTS["wiso-full-course"].priceEur;
const HYBRID_PRICE = PAID_PRODUCTS["hybrid-full-course"].priceEur;

const PAPER_ROWS = [
  {
    area: "Mathematics",
    bbe: `${BBE_EXAM_FORMAT.mathQuestions} questions`,
    wiso: `${WISO_EXAM_FORMAT.mathQuestions} questions`,
    note: "Same skill. One queue.",
  },
  {
    area: "Economics",
    bbe: `${BBE_EXAM_FORMAT.economicsQuestions} questions`,
    wiso: `${WISO_EXAM_FORMAT.economicsQuestions} questions`,
    note: "Same ideas. The wording flips.",
  },
  {
    area: "Language",
    bbe: `${BBE_EXAM_FORMAT.englishQuestions} English`,
    wiso: `${WISO_EXAM_FORMAT.germanQuestions} German`,
    note: "This row does not transfer.",
  },
] as const;

const MODES = [
  {
    name: "Shared math library",
    text: "Thirteen chapters, one queue. A fully correct task counts for BBE and WiSo. The stem switches between English and German.",
  },
  {
    name: "Bridge case library",
    text: "Twenty economics concepts in four units. English statements, then the German wording of the same idea, scored as one step.",
  },
  {
    name: "Two language lanes",
    text: `BBE English is ${BBE_EXAM_FORMAT.englishQuestions} questions. WiSo German reading is ${WISO_EXAM_FORMAT.germanQuestions}. Neither lane moves the other paper.`,
  },
  {
    name: "Both full libraries",
    text: `Mocks, builders, flashcards, matching, and tutor stay. BBE is ${BBE_EXAM_FORMAT.questionCount} questions, WiSo is ${WISO_EXAM_FORMAT.questionCount}, each about ${BBE_EXAM_FORMAT.durationHours} hours.`,
  },
] as const;

/**
 * Three horizontal pages, sized like the BBE and WiSo sliders. Each page is a
 * card of exam facts, not a full-screen frame.
 */
export function HybridThirdCourseReel() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const goTo = (index: number) => setActive(Math.min(total - 1, Math.max(0, index)));
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const rootRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  const touch = useRef<{ x: number; y: number } | null>(null);

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
    const onKey = (event: KeyboardEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!visible) return;
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden pb-12 pt-6 sm:pb-14 sm:pt-8">
      <div className="relative z-20 mx-auto mb-3 flex max-w-xl justify-center px-4 sm:mb-4 sm:px-6">
        <div
          role="tablist"
          aria-label="Why a third course"
          className="inline-flex w-full max-w-md items-center gap-1 rounded-full border border-white/12 bg-black/35 p-1.5 backdrop-blur-md sm:gap-1.5 sm:p-2"
        >
          {SLIDES.map((slide, index) => {
            const selected = active === index;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`hybrid-slide-${slide.id}`}
                id={`hybrid-tab-${slide.id}`}
                onClick={() => goTo(index)}
                className={cn(
                  "relative flex-1 rounded-full px-3 py-2.5 text-center text-xs font-semibold tracking-wide transition-all duration-300 sm:px-4 sm:py-3 sm:text-sm",
                  selected
                    ? "bg-teal-600 text-white shadow-[0_0_12px_-6px_rgba(45,212,191,0.7)]"
                    : "text-why-us-fg/55 hover:bg-white/5 hover:text-why-us-fg/85",
                )}
              >
                <span className="sm:hidden">{slide.short}</span>
                <span className="hidden sm:inline">{slide.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous page"
        onClick={prev}
        disabled={active === 0}
        className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-teal-300/50 hover:bg-black/70 hover:text-white disabled:opacity-30 sm:left-6 sm:flex sm:h-12 sm:w-12"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        aria-label="Next page"
        onClick={next}
        disabled={active === total - 1}
        className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-teal-300/50 hover:bg-black/70 hover:text-white disabled:opacity-30 sm:right-6 sm:flex sm:h-12 sm:w-12"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-6 sm:gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${slide.label}`}
            onClick={() => goTo(index)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span
              className={cn(
                "rounded-full transition-all duration-300",
                active === index ? "h-2 w-8 bg-teal-300" : "h-2 w-2 bg-primary-foreground/30",
              )}
            />
          </button>
        ))}
      </div>

      <div
        className="relative z-10 w-full overflow-hidden"
        onTouchStart={(event) => {
          const point = event.touches[0];
          touch.current = { x: point.clientX, y: point.clientY };
        }}
        onTouchEnd={(event) => {
          const start = touch.current;
          touch.current = null;
          if (!start) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - start.x;
          const dy = point.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) next();
            else prev();
          }
        }}
      >
        <div
          className="flex w-full items-stretch"
          style={{
            transform: `translate3d(-${active * 100}%, 0, 0)`,
            transitionProperty: "transform",
            transitionDuration: reduceRef.current ? "0ms" : "700ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Slide
            id="hybrid-slide-core"
            labelledBy="hybrid-tab-core"
            step="01"
            title="What is actually shared"
          >
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-200/80 sm:px-4 sm:text-xs">
                <span>Section</span>
                <span>BBE</span>
                <span>WiSo</span>
              </div>
              {PAPER_ROWS.map((row) => (
                <div
                  key={row.area}
                  className="grid grid-cols-[1.2fr_1fr_1fr] items-start gap-y-1 border-t border-white/10 px-3 py-3 sm:px-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-why-us-fg sm:text-base">{row.area}</p>
                    <p className="mt-1 hidden text-xs text-why-us-fg/60 sm:block">{row.note}</p>
                  </div>
                  <p className="text-sm text-why-us-fg/85">{row.bbe}</p>
                  <p className="text-sm text-why-us-fg/85">{row.wiso}</p>
                  <p className="col-span-3 text-xs text-why-us-fg/60 sm:hidden">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-why-us-fg/75 sm:text-base">
              On the latest BBE paper, mathematics is about{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.mathematics} of the score and economics about{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.economics}. English is about{" "}
              {BBE_EXAM_FORMAT.scoreWeighting.english}. The heavy rows are the ones you can study
              once.
            </p>
          </Slide>

          <Slide
            id="hybrid-slide-lanes"
            labelledBy="hybrid-tab-lanes"
            step="02"
            title="The row you cannot share"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <LaneCard
                kicker="BBE · English"
                title={`${BBE_EXAM_FORMAT.englishQuestions} questions`}
                points={[
                  "Reading, grammar, and vocabulary on the English-taught paper.",
                  `About ${BBE_EXAM_FORMAT.scoreWeighting.english} of the BBE score.`,
                  "WiSo has no English section. This practice does not move that paper.",
                ]}
              />
              <LaneCard
                kicker="WiSo · German"
                title={`${WISO_EXAM_FORMAT.germanQuestions} questions`}
                points={[
                  "German reading comprehension, not a separate grammar drill.",
                  "WU lists deutsches Sprachverständnis, not English.",
                  "A BBE English set will not show whether this section is ready.",
                ]}
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-why-us-fg/75 sm:text-base">
              A Hybrid week keeps both lanes next to the shared chapter: mathematics and economics
              once, then the English wording and the German wording before you leave the topic.
            </p>
          </Slide>

          <Slide
            id="hybrid-slide-modes"
            labelledBy="hybrid-tab-modes"
            step="03"
            title="What the third course adds"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {MODES.map((mode) => (
                <div key={mode.name} className="rounded-xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-why-us-fg">{mode.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-why-us-fg/70">{mode.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Fact label="BBE places" value={String(BBE_EXAM_FORMAT.places)} />
              <Fact label="WiSo places" value={WISO_EXAM_FORMAT.places.toLocaleString("en-US")} />
              <Fact
                label="Both courses"
                value={`€${HYBRID_PRICE}`}
                note={`Separate would be €${BBE_PRICE + WISO_PRICE}`}
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

function Slide({
  id,
  labelledBy,
  step,
  title,
  children,
}: {
  id: string;
  labelledBy: string;
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className="flex w-full min-w-full flex-none items-stretch justify-center px-3 py-2 sm:px-16 sm:py-4 lg:px-20"
    >
      <div className="flex w-full max-w-6xl flex-col rounded-2xl border border-white/12 bg-why-us-card p-4 sm:p-8 lg:p-10">
        <div className="mb-5 border-b border-white/12 pb-3 sm:mb-6 sm:pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
            <span data-no-i18n>{step}</span>
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-why-us-fg sm:text-3xl">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
}

function LaneCard({ kicker, title, points }: { kicker: string; title: string; points: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200/80">
        {kicker}
      </p>
      <p className="mt-2 font-display text-2xl font-semibold text-why-us-fg">{title}</p>
      <ul className="mt-3 space-y-2">
        {points.map((point) => (
          <li key={point} className="text-sm leading-relaxed text-why-us-fg/75">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Fact({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl border border-white/10 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-200/70">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-semibold text-why-us-fg">{value}</p>
      {note ? <p className="mt-1 text-xs text-why-us-fg/60">{note}</p> : null}
    </div>
  );
}
