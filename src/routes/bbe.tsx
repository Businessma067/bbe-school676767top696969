import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { Flame, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import goldmanLogo from "@/assets/goldman-sachs.png.asset.json";
import mckinseyLogo from "@/assets/mckinsey.png.asset.json";
import bcgLogo from "@/assets/bcg.png.asset.json";
import jpmorganLogo from "@/assets/jpmorgan.png.asset.json";
import googleLogo from "@/assets/google.png.asset.json";
import deloitteLogo from "@/assets/deloitte.jpg.asset.json";

import { cn } from "@/lib/utils";
import { ExamCountdown } from "@/components/ExamCountdown";
import { FaqAccordion, homepageFaqs } from "@/components/FaqAccordion";
import { buildFaqPageJsonLd } from "@/components/SeoFaq";
import { PrepJourneyRoadmap } from "@/components/PrepJourneyRoadmap";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PinnedReviewsBoard } from "@/components/PinnedReviewsBoard";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { storeExamTrack } from "@/lib/exam-track";

const HowItWorksSection = lazy(() =>
  import("@/components/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
);

export const Route = createFileRoute("/bbe")({
  head: () => ({
    links: [...hreflangLinks("/bbe"), { rel: "canonical", href: "https://bbe-school.com/bbe" }],
    meta: [
      { title: "WU Vienna BBE Exam Prep | Practice Simulator | BBE School" },
      {
        name: "description",
        content:
          "Prepare for the WU Vienna BBE entrance exam with realistic cases, timed mock exams, and step-by-step explanations for Economics, Mathematics, and English.",
      },
      { property: "og:title", content: "WU Vienna BBE Exam Prep | Practice Simulator | BBE School" },
      {
        property: "og:description",
        content:
          "Practice the real BBE exam format with True/False cases, partial-credit scoring, timed mocks, and clear explanations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bbe-school.com/bbe" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath("/bbe"),
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(homepageFaqs)) },
    ],
  }),
  component: BbeLandingPage,
});

export function BbeLandingPage() {
  useEffect(() => {
    storeExamTrack("bbe");
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader showNav showMobileNav />

      <main>
        {/* HERO — centered paper */}
        <section className="relative overflow-hidden px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-14 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <ExamCountdown className="mb-5 sm:mb-6" />

              <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] text-foreground sm:text-[3.25rem] sm:leading-[1.05] lg:text-[3.75rem]">
                Step by step preparation for your 2027 WU BBE exam
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Learn the format, scoring, and pacing of the actual exam, then practise until it feels
                familiar.
              </p>

              <div
                id="full-course"
                className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
              >
                <LocalizedLink
                  to="/demo-practice"
                  className="inline-flex flex-col items-center justify-center rounded-sm bg-exam-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-exam-red/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  <span>Demo course</span>
                  <span className="mt-0.5 text-[11px] font-medium text-white/80">
                    50+ tasks for start
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  to="/demo-mock"
                  className="inline-flex flex-col items-center justify-center rounded-sm border border-exam-red bg-exam-red/10 px-6 py-3.5 text-sm font-semibold text-exam-red transition-colors hover:bg-exam-red/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  <span>Demo mock</span>
                  <span className="mt-0.5 text-[11px] font-medium text-exam-red/80">
                    Free after sign-up
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  to="/products"
                  id="explore-courses"
                  className="inline-flex flex-col items-center justify-center rounded-sm border border-primary bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                >
                  <span>Explore Courses</span>
                  <span className="mt-0.5 text-[11px] font-medium text-primary-foreground/70">
                    See all BBE School products
                  </span>
                </LocalizedLink>
              </div>

              <LocalizedLink
                to="/bbe-entrance-exam"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--exam-red)] underline-offset-4 hover:underline"
              >
                Read the BBE entrance exam overview
                <ArrowRight className="h-3.5 w-3.5" />
              </LocalizedLink>
            </div>

            <div id="important-features" className="mt-10 sm:mt-12 lg:mt-14">
              <PrepJourneyRoadmap />
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[28rem] bg-background" aria-hidden />}>
          <HowItWorksSection />
        </Suspense>

        {/* PARALLAX BAND — darkened WU campus */}
        <section
          className="relative bg-scroll"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.84), rgba(0,0,0,0.8)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
              A triple-accredited business school with tuition that stays close to free
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
              One timed entrance exam sits between your family and a strong degree at almost zero
              cost. The paper is hard because the seats are limited, not because the university wants
              drama. About 240 BBE places face a much larger applicant pool under the same partial
              credit pressure you will feel in the hall.
            </p>
          </div>
        </section>

        {/* WHY US — high-contrast dark fintech */}
        <section className="relative overflow-hidden bg-why-us-bg px-6 pt-16 pb-6 lg:px-8 lg:pt-20 lg:pb-8">
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] text-why-us-fg sm:text-4xl lg:text-5xl">
                Why Choose US
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/80 sm:text-lg">
                Standards at WU Vienna are high, and entry is competitive. No software can guarantee
                admission, because that still takes disciplined work, but our numbers show how
                preparation shifts the odds.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US — full-page snap slider */}
        <WhyUsSlider />

        {/* CTA below snap slider */}
        <section className="relative bg-why-us-bg px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-6xl justify-center">
            <LocalizedLink
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-[#F2F1ED] px-8 py-4 text-sm font-semibold text-[#161616] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-why-us-bg"
            >
              View Preparation Products
            </LocalizedLink>
          </div>
        </section>

        {/* PARALLAX BAND #2 */}
        <section
          className="relative bg-scroll"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.86), rgba(0,0,0,0.78)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-11">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl">
              Notes from people who sat the exam
            </h2>
          </div>
        </section>

        <PinnedReviewsBoard
          title="What students wrote after they got an acceptance letter"
          reports={reports}
          badgeExtraFor={(report) =>
            report.fire ? (
              <Flame className="h-3.5 w-3.5 fill-exam-red text-exam-red" aria-hidden />
            ) : null
          }
        />

        {/* FAQ */}
        <div id="faq">
          <FaqAccordion />
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-foreground" />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
                BBE School
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <nav className="flex items-center gap-4 text-xs">
                <LocalizedLink
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  Terms of Service
                </LocalizedLink>
                <LocalizedLink
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  Privacy Policy
                </LocalizedLink>
              </nav>
              <p className="text-xs text-muted-foreground">
                © 2026 BBE School. Not affiliated with WU Vienna.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function RingMetric({
  value,
  label,
  sublabel,
  variant,
  percent,
  glow,
}: {
  value: string;
  label: string;
  sublabel: string;
  variant: "muted" | "accent";
  percent: number;
  glow?: boolean;
}) {
  const isAccent = variant === "accent";
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const hasAnimated = useRef(false);

  const numericMatch = value.match(/[0-9]*\.?[0-9]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[0-9]*\.?[0-9]+/, "");
  const decimals = value.includes(".") ? value.split(".")[1].replace(/[^0-9]/g, "").length : 0;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const start = performance.now();

          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const tick = (now: number) => {
            const raw = Math.min((now - start) / duration, 1);
            const eased = easeOutCubic(raw);
            setAnimatedPercent(eased * percent);
            setAnimatedNumber(eased * targetNumber);
            if (raw < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent, targetNumber]);

  const outerR = 82;
  const innerR = 58;
  const cx = 90;
  const cy = 90;

  const angle = Math.max(0, Math.min(1, animatedPercent)) * 360;

  function polar(r: number, deg: number) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const startOuter = polar(outerR, 0);
  const endOuter = polar(outerR, angle);
  const startInner = polar(innerR, 0);
  const endInner = polar(innerR, angle);
  const largeArc = angle > 180 ? 1 : 0;

  const filledPath = [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ");

  const fullCircle = [
    `M ${cx} ${cy - outerR}`,
    `A ${outerR} ${outerR} 0 1 1 ${cx} ${cy + outerR}`,
    `A ${outerR} ${outerR} 0 1 1 ${cx} ${cy - outerR}`,
    `L ${cx} ${cy - innerR}`,
    `A ${innerR} ${innerR} 0 1 0 ${cx} ${cy + innerR}`,
    `A ${innerR} ${innerR} 0 1 0 ${cx} ${cy - innerR}`,
    "Z",
  ].join(" ");

  const displayValue =
    decimals > 0
      ? `${animatedNumber.toFixed(decimals)}${suffix}`
      : `${Math.round(animatedNumber)}${suffix}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center rounded-2xl border border-white/10 bg-why-us-card px-6 py-10 text-center sm:px-8 sm:py-12",
        glow && "why-us-glow why-us-pulse",
      )}
    >
      <div className="relative h-44 w-44">
        <svg className="h-full w-full" viewBox="0 0 180 180">
          <path d={fullCircle} className="fill-white/15" />
          <path d={filledPath} className={cn("ring-animate-fill", "fill-caramel-deep")} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" data-no-i18n>
          <span
            className={cn(
              "font-display font-bold tabular-nums tracking-tight leading-none",
              // scale so long values like "41.3%" fit inside the inner circle
              displayValue.length >= 5 ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
              isAccent ? "text-caramel-deep" : "text-why-us-fg/60",
            )}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-why-us-fg">{label}</h3>
      <p className="mt-1 text-sm text-why-us-fg/60">{sublabel}</p>
    </div>
  );
}

function WhyUsSlider() {
  const [active, setActive] = useState(0);
  const total = 3;

  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // Keyboard navigation while the slider is in view.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!visible) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // Touch swipe (horizontal only — vertical page scroll stays untouched).
  const touch = useRef<{ x: number; y: number } | null>(null);

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden bg-why-us-bg pb-12 pt-2 sm:pb-14 sm:pt-4">

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/70 hover:text-white sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/70 hover:text-white sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators — larger hit area on phones */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-6 sm:gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span
              className={cn(
                "rounded-full transition-all duration-300",
                active === i
                  ? "h-2 w-8 bg-white"
                  : "h-2 w-2 bg-primary-foreground/30",
              )}
            />
          </button>
        ))}
      </div>

      <div
        className="relative z-10 w-full overflow-hidden"
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
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            dx < 0 ? next() : prev();
          }
        }}
      >
        <div
          className="flex w-full"
          style={{
            transform: `translate3d(-${active * 100}%, 0, 0)`,
            transitionProperty: "transform",
            transitionDuration: "900ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Slide 01 — Acceptance Rate */}
          <WhySlide title="Acceptance Rate">
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              <RingMetric
                value="8%"
                label="Official WU Vienna BBE Acceptance Rate"
                sublabel="(Average Applicant Pool)"
                variant="muted"
                percent={0.08}
              />
              <RingMetric
                value="41.3%"
                label="BBE-School Acceptance Rate"
                sublabel="57 out of 138 prepared students successfully admitted last year"
                variant="accent"
                percent={0.413}
                glow
              />
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-relaxed text-why-us-fg sm:text-xl">
              Our students achieve a success rate nearly 6 times higher than the general applicant
              pool.
            </p>
          </WhySlide>

          {/* Slide 02 — Capital Preservation */}
          <WhySlide title="Capital Preservation">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <p className="text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                Private tutors in Vienna charge €50 to €100 per hour just to walk through textbook
                slides, which adds up fast. Tuition at WU Vienna is often about ten times lower than
                comparable business schools in the UK or US, so a one-time prep investment can
                protect a path to an affordable degree. Missing the exam means giving up a €100,000
                financial advantage.
              </p>
              <CapitalBars />
            </div>
          </WhySlide>

          {/* Slide 03 — Top-Tier Career Outcomes */}
          <WhySlide title="Top-Tier Career Outcomes">
            <p className="max-w-3xl text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
              WU Vienna is a target school for many strong firms, though recruiters usually look at
              the top of the class. Getting in is only the first filter. Training under exam
              pressure now builds the analytical stamina you need later in recruitment cycles, and
              BBE alumni regularly land offers across finance and consulting hubs.
            </p>
            <PlacementsTicker />
          </WhySlide>
        </div>
      </div>
    </div>
  );
}

function WhySlide({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative flex w-full min-w-full flex-none items-center justify-center px-4 py-8 sm:px-10 sm:py-10 lg:px-16">
      <div className="relative w-full max-w-6xl rounded-2xl border border-white/12 bg-why-us-card p-5 sm:p-10 lg:p-12">
        <div className="mb-6 border-b border-white/12 pb-4 sm:mb-8 sm:pb-5">
          <h3 className="font-display text-xl font-semibold text-why-us-fg sm:text-3xl">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
}

function CapitalBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const dur = 1500;
          const t0 = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const r = Math.min((now - t0) / dur, 1);
            setProgress(ease(r));
            if (r < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxH = 260;
  const ukHeight = maxH * progress;
  const wuHeight = maxH * 0.11 * progress;

  return (
    <div ref={ref} className="rounded-xl border border-white/10 bg-black/40 p-6 sm:p-8">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-why-us-fg/50">
        Total tuition · 3 years
      </p>
      <div className="flex items-end justify-around gap-6" style={{ height: maxH + 20 }}>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-why-us-fg/85"
            style={{ opacity: progress }}
          >
            €60k – €120k
          </span>
          <div
            className="w-full max-w-[90px] rounded-t-md bg-white/25"
            style={{
              height: ukHeight,
              transition: "background-color 0.3s",
            }}
          />
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-why-us-fg/55">
            UK / US Target Schools
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-why-us-fg"
            style={{ opacity: progress }}
          >
            ~€2,200
          </span>
          <div
            className="w-full max-w-[90px] rounded-t-md"
            style={{
              height: wuHeight,
              backgroundColor: "#B3392A",
            }}
          />
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-why-us-fg/70">
            WU Vienna · 3-Year Total
          </span>
        </div>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-why-us-fg/55">
        Same degree tier. <span className="text-why-us-fg/85">~50× tuition delta.</span>
      </p>
    </div>
  );
}

function PlacementsTicker() {
  return (
    <div className="mt-8 rounded-xl border border-white/12 bg-black/40 px-4 py-6 sm:px-8 sm:py-8">
      <p className="mb-6 text-center text-sm font-medium text-why-us-fg/55">
        Where alumni land
      </p>
      <div className="grid grid-cols-3 items-stretch justify-items-stretch gap-3 sm:grid-cols-6 sm:gap-4">
        {placements.map((p) => (
          <PlacementLogo key={p.name} {...p} />
        ))}
      </div>
      <p className="mt-6 border-t border-white/12 pt-4 text-center text-xs text-why-us-fg/55">
        Global tier-1 finance, consulting & tech.
      </p>
    </div>
  );
}

const placements: { name: string; src: string }[] = [
  { name: "Goldman Sachs", src: goldmanLogo.url },
  { name: "McKinsey & Company", src: mckinseyLogo.url },
  { name: "Boston Consulting Group", src: bcgLogo.url },
  { name: "J.P. Morgan", src: jpmorganLogo.url },
  { name: "Google", src: googleLogo.url },
  { name: "Deloitte", src: deloitteLogo.url },
];

function PlacementLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-lg border border-white/15 bg-white px-3 py-4 transition hover:border-white/40">
      <div className="flex h-10 w-full items-center justify-center sm:h-12">
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

const reports = [
  {
    id: 1,
    name: "Igor, Kiev",
    quote:
      "You know, I believe the most important thing is knowing exactly what to do, understanding the material, and not panicking when it matters most. Many of my friends studied hard but didn't make it because they weren't familiar with the types of tasks involved, and that’s precisely the advantage BBE School gave me.",
    badge: "Rank: 197th",
    fire: false,
  },
  {
    id: 2,
    name: "Michael, Budapest",
    quote:
      "In general, I’ve always found the material easy to grasp. The exam questions were relatively easy, though the wording was tricky. It was a huge help that I’d done so many mock exams and learned time management, otherwise, I wouldn't have had time to finish about five of the questions.",
    badge: "Rank: 43rd",
    fire: true,
  },
  {
    id: 3,
    name: "Lisa, Graz",
    quote:
      "I hardly know what to say. I don't even understand how others manage to pass such a strange exam without supplementary materials like the BBE School course. I believe that buying the course three months before the exam was the best decision. I am very happy and grateful for this opportunity.",
    badge: "Rank: 227th",
    fire: false,
  },
  {
    id: 4,
    name: "Marcus, Zagreb",
    quote:
      "We'll I'll be straightforward: I don’t think I would have even come close to passing the exam without BBE School. I have absolutely no regrets about the money, time, and effort I put it. It was 100% worth it.",
    badge: "Rank: 97th",
    fire: true,
  },
  {
    id: 5,
    name: "Daniel, Ljubljana",
    quote:
      "I am grateful to bbe school for providing clear, structured questions that offer the best possible simulation of the actual live exam. Time management also played a crucial role. The time-management tools I hadn't seen before were exactly what helped me meet the deadline.",
    badge: "Rank: 7th",
    fire: true,
  },
];
