import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { Flame, ChevronLeft, ChevronRight } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import goldmanLogo from "@/assets/goldman-sachs.png.asset.json";
import mckinseyLogo from "@/assets/mckinsey.png.asset.json";
import bcgLogo from "@/assets/bcg.png.asset.json";
import jpmorganLogo from "@/assets/jpmorgan.png.asset.json";
import googleLogo from "@/assets/google.png.asset.json";
import deloitteLogo from "@/assets/deloitte.jpg.asset.json";

import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import FiveStatementSimulator from "@/components/FiveStatementSimulator";
import EnglishReadingSimulator from "@/components/EnglishReadingSimulator";
import MathParabolaSimulator from "@/components/MathParabolaSimulator";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [demoSubject, setDemoSubject] = useState<"economics" | "math" | "english">("economics");

  return (
    <div className="min-h-screen bg-paper font-sans text-foreground antialiased">
      <SiteHeader showNav showMobileNav />

      <main>
        {/* HERO — paper lobby, asymmetric + 240 leitmotif */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-8 select-none font-display text-[11rem] font-extrabold leading-none text-graphite/[0.04] sm:text-[14rem] lg:right-4 lg:text-[18rem]"
          >
            240
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <div className="max-w-2xl">
                <p className="font-display text-sm font-extrabold uppercase tracking-[0.28em] text-ballpoint">
                  BBE School
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-0.5" aria-label="Rated 4.77 out of 5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className="h-3.5 w-3.5 fill-graphite"
                        aria-hidden="true"
                      >
                        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-display text-sm font-semibold text-foreground">4.77</span>
                  <span>· 348 reviews</span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2.5 border border-border bg-card px-3 py-1.5">
                  <span className="omr-bubble text-ballpoint" data-filled="true" />
                  <span className="text-xs font-medium tracking-wide text-taupe">
                    Built by top 1% of the hall
                  </span>
                </div>

                <h1 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[3.5rem]">
                  Step by step preparation for your 2027 WU BBE exam
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Master every detail and tactic of the actual exam.
                </p>

                <div id="bbe-products" className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/demo-practice"
                    className="group cta-lock inline-flex flex-col items-start justify-center border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-ballpoint/50 focus:outline-none focus:ring-2 focus:ring-ballpoint focus:ring-offset-2 focus:ring-offset-paper"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="omr-bubble omr-bubble-hover text-ballpoint" />
                      Try demo-practice
                    </span>
                    <span className="mt-0.5 pl-5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      50+ tasks for start
                    </span>
                  </Link>
                  <Link
                    to="/products"
                    id="explore-courses"
                    className="group cta-lock inline-flex flex-col items-start justify-center bg-stamp px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-stamp focus:ring-offset-2 focus:ring-offset-paper"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="omr-bubble omr-bubble-hover text-white" />
                      Explore Courses
                    </span>
                    <span className="mt-0.5 pl-5 text-[10px] font-medium uppercase tracking-wide text-white/85">
                      See all BBE School products
                    </span>
                  </Link>
                </div>

                <div
                  id="important-features"
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium tracking-wide text-taupe"
                >
                  <span>Beauty of stress and time management</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Most common and tricky Mistakes</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Exam life hacks and loopholes</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden border border-border bg-card">
                  <div
                    aria-hidden
                    className="seat-stamp pointer-events-none absolute -right-2 -top-4 z-10 font-display text-[7rem] font-extrabold leading-none text-ballpoint/15 sm:text-[9rem]"
                  >
                    240
                  </div>
                  <div className="omr-pattern absolute inset-0 opacity-40" aria-hidden />
                  <div
                    className="relative flex aspect-[4/3] flex-col items-center justify-center p-8 text-center sm:aspect-video"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(11,15,20,0.62), rgba(11,15,20,0.82)), url(${wuAsset.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/35 bg-white/10">
                      <div className="ml-0.5 h-0 w-0 border-y-8 border-y-transparent border-l-[12px] border-l-white" />
                    </div>
                    <p className="font-display text-lg font-bold text-white">Watch Intro Video</p>
                    <p className="mt-2 text-sm text-white/80">Passing the Exam from Rimini Beach</p>
                    <div className="mt-5 border border-white/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      02:14 Preview
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border bg-card px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-taupe">
                    <span>Seat 240 / 3000+</span>
                    <span className="text-ballpoint">Answer sheet · Hall filter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — inside the hall */}
        <section className="perforation-top relative bg-hall px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div aria-hidden className="omr-pattern-hall pointer-events-none absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top, color-mix(in oklab, var(--color-ballpoint) 16%, transparent), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ballpoint">
              Live product demo
            </div>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Watch the exact loop a prepared BBE candidate runs during the exam — TRUE/FALSE
              decisions on the left, instant proof on the right.
            </p>
          </div>

          {/* Three OMR columns = three subjects */}
          <div className="relative mx-auto mt-10 grid w-full max-w-6xl grid-cols-3 gap-2 sm:gap-3">
            {(
              [
                { key: "economics", label: "Economics", enabled: true },
                { key: "math", label: "Math", enabled: true },
                { key: "english", label: "English", enabled: true },
              ] as const
            ).map((s) => {
              const active = demoSubject === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  data-active={active}
                  onClick={() => s.enabled && setDemoSubject(s.key)}
                  disabled={!s.enabled}
                  className={cn(
                    "omr-tab cta-lock flex flex-col items-center gap-2 border px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors sm:px-4 sm:py-4 sm:text-xs",
                    active
                      ? "border-ballpoint bg-ballpoint text-white"
                      : s.enabled
                        ? "border-white/20 bg-white/[0.04] text-white/70 hover:border-ballpoint/50 hover:text-white"
                        : "cursor-not-allowed border-white/10 bg-white/[0.03] text-white/30",
                  )}
                >
                  <span
                    className={cn("omr-bubble", active ? "text-white" : "text-white/50")}
                    data-filled={active ? "true" : undefined}
                  />
                  {s.label}
                  {!s.enabled && <span className="text-[9px] opacity-70">soon</span>}
                </button>
              );
            })}
          </div>

          <div className="relative mx-auto mt-6 w-full max-w-6xl">
            {demoSubject === "economics" && <FiveStatementSimulator />}
            {demoSubject === "english" && <EnglishReadingSimulator />}
            {demoSubject === "math" && <MathParabolaSimulator />}
          </div>
        </section>

        {/* WU BAND — campus, no fixed parallax on mobile */}
        <section
          className="relative"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11,15,20,0.78), rgba(11,15,20,0.72)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8 lg:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              WU Vienna
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A triple-accredited elite business school.
              <br />
              <span className="text-white/80">Almost free education.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              One 2-hour exam stands between your family and a world-class degree at almost zero
              cost.
            </p>
          </div>
        </section>

        {/* WHY US — hall */}
        <section className="relative overflow-hidden bg-hall px-6 py-24 lg:px-8 lg:py-32">
          <div aria-hidden className="omr-pattern-hall pointer-events-none absolute inset-0 opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top left, color-mix(in oklab, var(--color-ballpoint) 18%, transparent), transparent 45%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--color-stamp) 10%, transparent), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ballpoint">
                Why Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Why Choose US
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                The standards at WU Vienna are exceptionally high. Let's be honest: entry
                competition is brutal, and no software can ever guarantee your admission. Success
                requires hard, disciplined work. But our data proves how we shift the odds in your
                favor.
              </p>
            </div>
          </div>
        </section>

        <WhyUsSlider />

        <section className="relative bg-hall px-6 py-16 lg:px-8">
          <div className="mx-auto flex max-w-6xl justify-center">
            <Link
              to="/products"
              className="cta-lock group inline-flex items-center justify-center gap-2.5 bg-stamp px-8 py-4 text-sm font-semibold text-white transition-colors hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-stamp focus:ring-offset-2 focus:ring-offset-hall"
            >
              <span className="omr-bubble omr-bubble-hover text-white" />
              View Preparation Products
            </Link>
          </div>
        </section>

        {/* PARENTS — serif letter on paper */}
        <section className="perforation-top relative bg-paper px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-taupe">
                <span className="omr-bubble text-stamp" data-filled="true" />
                An open letter to parents
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                A Frank Audit for Parents:
                <br />
                <span className="text-stamp">The Real Cost of WU Vienna Admission</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Before choosing a preparation strategy, look at what your child is actually walking
                into at WU Vienna, and what a wrong plan costs the family in real euros.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="space-y-5 font-serif text-base leading-relaxed text-foreground sm:text-lg">
                <p>
                  The mandatory in-person BBE entrance exam at WU Vienna is not a regular school
                  test. It is a filtering conveyor. A massive convention hall, more than 3000
                  applicants from around the world, echoing announcements, and exactly 240 seats on
                  the other side of the door. That is over 12 candidates competing for a single
                  desk.
                </p>
                <p>
                  The volume of competitors is not even the hardest part. The real difficulty is
                  buried in the structural rules the university uses to break the field. Your child
                  gets less than a minute per statement to scan a dense English passage or work
                  through a data-sufficiency style problem entirely in their head. And at WU Vienna
                  a wrong answer does not just score zero. The computer actively subtracts points
                  from what the student got right elsewhere.
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-[30%] bottom-0 bg-gradient-to-b from-transparent via-paper/85 to-paper" />

              <div className="relative z-10 flex justify-center py-4">
                <Link
                  to="/parents"
                  className="cta-lock group inline-flex items-center gap-2.5 bg-stamp px-6 py-3 text-sm font-semibold text-white transition-colors hover:brightness-110"
                >
                  <span className="omr-bubble omr-bubble-hover text-white" />
                  Read the full letter
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FIELD REPORTS band */}
        <section
          className="relative"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11,15,20,0.82), rgba(11,15,20,0.68)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Field Reports
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Voices from the exam hall floor.
            </h2>
          </div>
        </section>

        {/* REVIEWS — field notes, broken grid */}
        <section id="reviews" className="bg-paper px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Students' reviews right after receiving an acceptance letter.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
              {reports.map((report, i) => (
                <ReviewCard key={report.id} report={report} index={i} />
              ))}
            </div>
          </div>
        </section>

        <div id="faq">
          <FaqAccordion />
        </div>

        <footer className="relative border-t border-border bg-card px-6 py-10 lg:px-8">
          <div aria-hidden className="omr-pattern pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="omr-bubble text-stamp" data-filled="true" />
              <span className="font-display text-sm font-extrabold tracking-widest uppercase text-foreground">
                BBE School
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-taupe sm:inline">
                Seat 240
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 BBE School. Not affiliated with WU Vienna.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ReviewCard({
  report,
  index,
}: {
  report: (typeof reports)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const span =
    index === 0
      ? "lg:col-span-7"
      : index === 1
        ? "lg:col-span-5 lg:translate-y-8"
        : index === 2
          ? "lg:col-span-5 lg:-translate-y-2"
          : index === 3
            ? "lg:col-span-7"
            : "lg:col-span-8 lg:col-start-3";

  return (
    <article
      className={cn(
        "flex flex-col justify-between border border-border bg-card p-7 sm:p-8",
        span,
        index % 2 === 1 && "sm:rotate-[0.4deg]",
        index % 2 === 0 && "sm:-rotate-[0.3deg]",
      )}
    >
      <div>
        <p
          className={cn(
            "font-serif leading-relaxed text-foreground/85",
            !expanded && "line-clamp-3",
          )}
        >
          &ldquo;{report.quote}&rdquo;
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-ballpoint hover:underline focus:outline-none"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="mt-8 flex items-end justify-between gap-3">
        <p className="font-display text-sm font-bold text-foreground">{report.name}</p>
        <div className="inline-flex items-center gap-1.5 border border-stamp/35 bg-stamp/10 px-3 py-1">
          <span className="text-xs font-semibold tracking-wide text-stamp">{report.badge}</span>
          {report.fire && (
            <Flame className="h-3.5 w-3.5 text-stamp" style={{ fill: "currentColor" }} aria-hidden />
          )}
        </div>
      </div>
    </article>
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
        "relative flex flex-col items-center border border-white/10 bg-why-us-card px-6 py-10 text-center sm:px-8 sm:py-12",
        glow && "why-us-glow why-us-pulse",
      )}
    >
      <div className="relative h-44 w-44">
        <svg className="h-full w-full" viewBox="0 0 180 180">
          <path d={fullCircle} className="fill-white/15" />
          <path
            d={filledPath}
            className={cn("ring-animate-fill", isAccent ? "fill-stamp" : "fill-ballpoint")}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-display font-extrabold tabular-nums tracking-tight leading-none",
              displayValue.length >= 5 ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
              isAccent ? "text-stamp" : "text-white/60",
            )}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <h3 className="mt-6 font-display text-lg font-bold text-white">{label}</h3>
      <p className="mt-1 text-sm text-white/60">{sublabel}</p>
    </div>
  );
}

function WhyUsSlider() {
  const [active, setActive] = useState(0);
  const total = 3;

  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

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

  const touch = useRef<{ x: number; y: number } | null>(null);

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden bg-hall py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top left, color-mix(in oklab, var(--color-ballpoint) 18%, transparent), transparent 45%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--color-stamp) 10%, transparent), transparent 50%)",
        }}
      />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-ballpoint hover:text-ballpoint sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-ballpoint hover:text-ballpoint sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              active === i ? "w-8 bg-ballpoint" : "w-2 bg-white/30 hover:bg-white/50",
            )}
          />
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
          <WhySlide index="01" title="Acceptance Rate">
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
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-relaxed text-white sm:text-xl">
              Our students achieve a success rate{" "}
              <span className="text-stamp">nearly 6 times higher</span> than the general applicant
              pool.
            </p>
          </WhySlide>

          <WhySlide index="02" title="Capital Preservation">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <p className="text-base leading-relaxed text-white/75 sm:text-[17px]">
                Private tutors in Vienna charge{" "}
                <span className="text-white">€50 to €100 per hour</span> just to read textbook slides
                with you — that is a financial black hole. Furthermore, top-tier university education
                at WU Vienna costs literally <span className="text-stamp">10 times less</span> in
                tuition than comparable business schools in the UK or US, making it the highest ROI
                investment in your future. A single one-time investment in our platform saves you
                thousands of euros in useless prep costs, protecting your path to an incredibly
                affordable, world-class degree. Failing the exam means losing a{" "}
                <span className="font-semibold text-white">€100,000 financial advantage</span>.
              </p>
              <CapitalBars />
            </div>
          </WhySlide>

          <WhySlide index="03" title="Top-Tier Career Outcomes">
            <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-[17px]">
              WU Vienna is a premier target university for the world's elite firms, but only for the{" "}
              <span className="text-stamp">top 10% of the class</span>. Getting in is just the first
              filter. By training your brain to handle brutal exam pressure now, you build the raw
              analytical stamina required to later survive intense recruitment cycles and secure elite
              international career placements. BBE alumni consistently secure top-tier offers across
              global financial and consulting hubs.
            </p>
            <PlacementsTicker />
          </WhySlide>
        </div>
      </div>
    </div>
  );
}

function WhySlide({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative flex w-full min-w-full flex-none items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
      <div className="relative w-full max-w-6xl border border-white/12 bg-why-us-card p-6 sm:p-10 lg:p-12">
        <div className="mb-8 flex items-start gap-5 sm:items-center">
          <span className="font-display text-3xl font-extrabold tracking-tight text-ballpoint sm:text-4xl">
            {index}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <div className="min-w-0 text-right sm:text-left">
            <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              {title}
            </h3>
          </div>
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
    <div ref={ref} className="border border-white/10 bg-black/40 p-6 sm:p-8">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
        Total tuition · 3 years
      </p>
      <div className="flex items-end justify-around gap-6" style={{ height: maxH + 20 }}>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-white/85"
            style={{ opacity: progress }}
          >
            €60k – €120k
          </span>
          <div
            className="w-full max-w-[90px] bg-white/25"
            style={{
              height: ukHeight,
            }}
          />
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-white/55">
            UK / US Target Schools
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-stamp"
            style={{ opacity: progress }}
          >
            ~€2,200
          </span>
          <div
            className="w-full max-w-[90px]"
            style={{
              height: wuHeight,
              background: "var(--stamp)",
            }}
          />
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-stamp">
            WU Vienna · 3-Year Total
          </span>
        </div>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/55">
        Same degree tier. <span className="text-white/85">~50× tuition delta.</span>
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
    <div className="group flex flex-col items-center justify-center border border-ballpoint/25 bg-white px-3 py-4 transition hover:border-ballpoint/70">
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

function PlacementsTicker() {
  return (
    <div className="mt-8 border border-ballpoint/25 bg-black/40 px-4 py-6 sm:px-8 sm:py-8 why-us-glow">
      <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-ballpoint/80">
        Where alumni land
      </p>
      <div className="grid grid-cols-3 items-stretch justify-items-stretch gap-3 sm:grid-cols-6 sm:gap-4">
        {placements.map((p) => (
          <PlacementLogo key={p.name} {...p} />
        ))}
      </div>
      <p className="mt-6 border-t border-ballpoint/20 pt-4 text-center text-xs text-white/55">
        Global tier-1 finance, consulting & tech.
      </p>
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
      "I am grateful to bbe school for providing clear, structured questions that offer the best possible simulation of the actual live exam. Time management also played a crucial role. Another important factor were simply brilliant time-management tools — ones I hadn't seen before — were exactly what helped me meet the deadline.",
    badge: "Rank: 7th",
    fire: true,
  },
];
