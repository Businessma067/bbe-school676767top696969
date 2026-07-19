import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { Flame } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import { LiabilityChart } from "@/components/LiabilityChart";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileNav } from "@/components/MobileNav";
import { AuthNav } from "@/components/AuthNav";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">BBE</span>
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-background ring-2 ring-primary" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">BBE School</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU Vienna · Prep</span>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <AuthNav />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>


      <main>
        {/* HERO — light ivory */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-2xl">
                {/* Rating + reviews */}
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-2">
                    {[
                      "https://i.pravatar.cc/64?img=12",
                      "https://i.pravatar.cc/64?img=32",
                      "https://i.pravatar.cc/64?img=47",
                      "https://i.pravatar.cc/64?img=68",
                      "https://i.pravatar.cc/64?img=5",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Student ${i + 1}`}
                        loading="lazy"
                        className="h-8 w-8 rounded-full border-2 border-background object-cover shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5" aria-label="Rated 4.77 out of 5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <svg
                          key={i}
                          viewBox="0 0 20 20"
                          className="h-4 w-4 fill-foreground"
                          aria-hidden="true"
                        >
                          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-display text-sm font-semibold text-foreground">4.77</span>
                    <span className="text-sm text-muted-foreground">· 348 reviews</span>
                  </div>
                </div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#2DD4A8" }} />
                  <span className="text-xs font-medium tracking-wide text-taupe">
                    Built by top 1% of the hall
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Step by step preparation for your 2027 WU BBE exam
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Master every detail and tactic of the actual exam.
                </p>

                <div id="bbe-products" className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/demo-practice"
                    className="inline-flex flex-col items-center justify-center rounded-md border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <span>Try demo-practice</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">50+ tasks for start</span>
                  </Link>
                  <Link
                    to="/products"
                    id="explore-courses"
                    className="inline-flex flex-col items-center justify-center rounded-md px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                    style={{
                      background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
                      boxShadow: "0 8px 20px -8px rgba(232,93,58,0.55)",
                    }}
                  >
                    <span>Explore Courses</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/85">See all BBE School products</span>
                  </Link>
                  <a
                    href="/Message_to_Parents_WU_Vienna_2027.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center justify-center rounded-md border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <span>Message to Parents</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Why our course?</span>
                  </a>
                </div>

                

                <div id="important-features" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-taupe">
                  <span>Beauty of stress and time management</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Most common and tricky Mistakes</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Exam life hacks and loopholes</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl">
                  <div
                    className="relative flex h-full flex-col items-center justify-center rounded-xl p-8 text-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url(${wuAsset.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-white pl-1" />
                    </div>
                    <p className="font-display text-lg font-medium text-white">
                      Watch Intro Video
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Passing the Exam from Rimini Beach
                    </p>
                    <div className="mt-6 text-xs font-medium tracking-wider text-white/70">
                      02:14 PREVIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX BAND — darkened WU campus */}
        <section
          className="relative bg-fixed"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.72)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8 lg:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              WU Vienna
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
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

        {/* WHY US — high-contrast dark fintech */}
        <section className="relative overflow-hidden bg-why-us-bg px-6 py-24 lg:px-8 lg:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top left, color-mix(in oklab, var(--color-caramel-deep) 18%, transparent), transparent 45%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--color-caramel) 10%, transparent), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-caramel">
                Why Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Why Choose US
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                The standards at WU Vienna are exceptionally high. Let's be honest: entry competition
                is brutal, and no software can ever guarantee your admission. Success requires hard,
                disciplined work. But our data proves how we shift the odds in your favor.
              </p>
            </div>

            <WhyCarousel>
              {/* Slide 01 — Acceptance Rate — graphic LEFT, text RIGHT */}
              <WhySlide
                index="01"
                title="Acceptance Rate Uplift"
                subtitle="Prepared vs. general applicant pool — measured on last year's cohort."
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                  <div className="grid gap-6 sm:grid-cols-2">
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
                  <div className="text-left">
                    <p className="text-base leading-relaxed text-primary-foreground/75 sm:text-[17px]">
                      Last year, only 8% of general applicants earned a seat at WU Vienna's BBE
                      program. Students who prepared with us achieved a 41.3% admission rate — 57
                      out of 138 candidates walked into the exam ready, and walked out admitted.
                    </p>
                    <p className="mt-6 text-lg font-semibold leading-relaxed text-primary-foreground sm:text-xl">
                      Our students achieve a success rate{" "}
                      <span className="text-caramel-deep">nearly 6 times higher</span> than the
                      general applicant pool.
                    </p>
                  </div>
                </div>
              </WhySlide>

              {/* Slide 02 — Capital Preservation — graphic LEFT, text RIGHT */}
              <WhySlide
                index="02"
                title="Capital Preservation"
                subtitle="One exam, one decision — protecting a six-figure family advantage."
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
                  <CapitalBars />
                  <p className="text-base leading-relaxed text-primary-foreground/75 sm:text-[17px]">
                    Private tutors in Vienna charge <span className="text-primary-foreground">€50 to €100 per hour</span> just to read
                    textbook slides with you — that is a financial black hole. Furthermore, top-tier
                    university education at WU Vienna costs literally <span className="text-caramel-deep">10 times less</span> in tuition
                    than comparable business schools in the UK or US, making it the highest ROI
                    investment in your future. A single one-time investment in our platform saves you
                    thousands of euros in useless prep costs, protecting your path to an incredibly
                    affordable, world-class degree. Failing the exam means losing a{" "}
                    <span className="font-semibold text-primary-foreground">€100,000 financial advantage</span>.
                  </p>
                </div>
              </WhySlide>

              {/* Slide 03 — Top-Tier Career Outcomes — text LEFT, logos RIGHT */}
              <WhySlide
                index="03"
                title="Top-Tier Career Outcomes"
                subtitle="Where the top of the class ends up after WU Vienna."
              >
                <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <p className="text-base leading-relaxed text-primary-foreground/75 sm:text-[17px]">
                    WU Vienna is a premier target university for the world's elite firms, but only for
                    the <span className="text-caramel-deep">top 10% of the class</span>. Getting in is just the first filter. By training
                    your brain to handle brutal exam pressure now, you build the raw analytical stamina
                    required to later survive intense recruitment cycles and secure elite international
                    career placements. BBE alumni consistently secure top-tier offers across global
                    financial and consulting hubs.
                  </p>
                  <PlacementsTicker />
                </div>
              </WhySlide>
            </WhyCarousel>

            <div className="mt-16 flex justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                style={{
                  background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
                  boxShadow: "0 10px 28px -10px rgba(232,93,58,0.65)",
                }}
              >
                View Preparation Products <span aria-hidden>👇</span>
              </Link>
            </div>
          </div>
        </section>

        {/* LIABILITY CHART — light academic island */}
        <section className="relative px-6 py-24 lg:px-8 lg:py-32 bg-ivory">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top right, rgba(0,0,0,0.10), transparent 55%), radial-gradient(ellipse at bottom left, rgba(0,0,0,0.06), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-caramel">
                48-Month Capital Model
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-espresso sm:text-4xl lg:text-5xl">
                Two paths. One decision that compounds.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-taupe sm:text-lg">
                A strict financial comparison tracking tuition, mandatory foundation blocks,
                rent, and European living costs over 48 months.
              </p>
            </div>

            <div
              className="rounded-3xl bg-card p-6 sm:p-8 lg:p-10"
              style={{
                border: "1px solid rgba(0,0,0,0.10)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 60px -30px rgba(0,0,0,0.25)",
              }}
            >
              <LiabilityChart />
            </div>

            <div
              className="mt-12 rounded-2xl px-6 py-6 sm:px-8 sm:py-7"
              style={{
                backgroundColor: "rgba(0,0,0,0.10)",
                border: "1px solid rgba(0,0,0,0.35)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel">
                The Math is Absolute
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85 sm:text-base">
                Securing a Top-240 seat at world-class WU Vienna blocks a compounding{" "}
                <span className="font-semibold text-espresso">€70,000 family debt liability</span>.
                Investing <span className="font-semibold text-espresso">€349</span> in the survival
                engine today is a calculated asset-protection strategy.
              </p>
            </div>
          </div>
        </section>



        {/* PARALLAX BAND #2 */}
        <section
          className="relative bg-fixed"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.82), rgba(0,0,0,0.68)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Field Reports
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Voices from the exam hall floor.
            </h2>
          </div>
        </section>

        {/* FIELD REPORTS — light */}
        <section id="reviews" className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Students' reviews right after receiving an acceptance letter.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <ReviewCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div id="faq">
          <FaqAccordion />
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "linear-gradient(135deg,#E85D3A,#3B82F6 50%,#2DD4A8)" }} />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
                BBE School
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

function ReviewCard({ report }: { report: (typeof reports)[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <p className={cn("leading-relaxed text-muted-foreground", !expanded && "line-clamp-3")}>
          &ldquo;{report.quote}&rdquo;
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-primary hover:underline focus:outline-none"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="mt-8">
        <p className="font-display text-sm font-semibold text-foreground">
          {report.name}
        </p>
        <div
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
          style={{ borderColor: "rgba(232,93,58,0.35)", backgroundColor: "rgba(232,93,58,0.10)" }}
        >
          <span className="text-xs font-semibold tracking-wide" style={{ color: "#B84A2E" }}>
            {report.badge}
          </span>
          {report.fire && (
            <Flame className="h-3.5 w-3.5" style={{ fill: "#D97706", color: "#D97706" }} aria-hidden />
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
      { threshold: 0.25 }
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

  const displayValue = decimals > 0
    ? `${animatedNumber.toFixed(decimals)}${suffix}`
    : `${Math.round(animatedNumber)}${suffix}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center rounded-2xl border border-white/10 bg-why-us-card px-6 py-10 text-center sm:px-8 sm:py-12",
        glow && "why-us-glow why-us-pulse"
      )}
    >
      <div className="relative h-44 w-44">
        <svg className="h-full w-full" viewBox="0 0 180 180">
          <path
            d={fullCircle}
            className="fill-white/15"
          />
          <path
            d={filledPath}
            className={cn("ring-animate-fill", "fill-caramel-deep")}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-display text-4xl font-bold sm:text-5xl",
              isAccent ? "text-caramel-deep" : "text-primary-foreground/60"
            )}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-primary-foreground">{label}</h3>
      <p className="mt-1 text-sm text-primary-foreground/60">{sublabel}</p>
    </div>
  );
}

function WhyCarousel({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slides = Array.isArray(children) ? children : [children];
  const total = slides.length;
  const [active, setActive] = useState(0);
  const userInteractingRef = useRef(false);
  const interactTimerRef = useRef<number | null>(null);

  // Track which slide is centered.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.clientWidth;
      const idx = Math.round(el.scrollLeft / w);
      setActive(Math.max(0, Math.min(total - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  // Pause nudge briefly on any user interaction.
  const markInteract = () => {
    userInteractingRef.current = true;
    if (interactTimerRef.current) window.clearTimeout(interactTimerRef.current);
    interactTimerRef.current = window.setTimeout(() => {
      userInteractingRef.current = false;
    }, 4000);
  };

  // Every 7.5s, gently nudge toward next slide and back — a "peek" hint.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (userInteractingRef.current) return;
      const w = el.clientWidth;
      const maxLeft = el.scrollWidth - w;
      const atEnd = el.scrollLeft >= maxLeft - 4;
      const dir = atEnd ? -1 : 1;
      const peek = Math.min(46, w * 0.08);
      const base = el.scrollLeft;
      el.scrollTo({ left: base + dir * peek, behavior: "smooth" });
      window.setTimeout(() => {
        el.scrollTo({ left: base, behavior: "smooth" });
      }, 650);
    }, 7500);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    markInteract();
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div
        ref={scrollerRef}
        onPointerDown={markInteract}
        onWheel={markInteract}
        onTouchStart={markInteract}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((child, i) => (
          <div key={i} className="min-w-full shrink-0 snap-center">
            {child}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              active === i ? "w-8 bg-caramel-deep" : "w-2 bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function WhySlide({
  index,
  title,
  subtitle,
  children,
}: {
  index: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="relative h-full overflow-hidden rounded-2xl border border-white/12 bg-why-us-card p-6 sm:p-10 lg:p-12">
      <div className="mb-8 flex items-start gap-5 sm:items-center">
        <span className="font-display text-3xl font-bold tracking-tight text-caramel-deep sm:text-4xl">
          {index}
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <div className="min-w-0 text-right sm:text-left">
          <h3 className="font-display text-xl font-semibold tracking-tight text-primary-foreground sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50 sm:text-[11px]">
            {subtitle}
          </p>
        </div>
      </div>
      {children}
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxH = 260;
  const ukHeight = maxH * progress;
  const wuHeight = maxH * 0.11 * progress;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-black/40 p-6 sm:p-8"
    >
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/50">
        Total tuition · 3 years
      </p>
      <div className="flex items-end justify-around gap-6" style={{ height: maxH + 20 }}>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-primary-foreground/85"
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
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-primary-foreground/55">
            UK / US Target Schools
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <span
            className="mb-2 font-display text-sm font-semibold text-caramel-deep"
            style={{ opacity: progress }}
          >
            ~€2,200
          </span>
          <div
            className="w-full max-w-[90px] rounded-t-md"
            style={{
              height: wuHeight,
              background: "linear-gradient(180deg, #F59E0B 0%, #E85D3A 100%)",
              boxShadow: "0 0 24px -4px rgba(232,93,58,0.7)",
            }}
          />
          <span className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-caramel-deep">
            WU Vienna · 3-Year Total
          </span>
        </div>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-primary-foreground/55">
        Same degree tier. <span className="text-primary-foreground/85">~50× tuition delta.</span>
      </p>
    </div>
  );
}

const placements = [
  "Goldman Sachs",
  "McKinsey & Company",
  "Boston Consulting Group",
  "J.P. Morgan",
  "Google",
  "Morgan Stanley",
];

function PlacementsTicker() {
  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-black/30 px-4 py-5 sm:px-6 sm:py-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/50">
        Where alumni land
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-5">
        {placements.map((name, i) => (
          <div key={name} className="flex items-center gap-3 sm:gap-5">
            <span className="font-display text-sm font-semibold tracking-tight text-primary-foreground/80 sm:text-base">
              {name}
            </span>
            {i < placements.length - 1 && (
              <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
            )}
          </div>
        ))}
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
      "I am grateful to bbe school for providing clear, structured questions that offer the best possible simulation of the actual live exam. Time management also played a crucial role. Another important factor were simply brilliant time-management tools — ones I hadn't seen before — were exactly what helped me meet the deadline.",
    badge: "Rank: 7th",
    fire: true,
  },
];
