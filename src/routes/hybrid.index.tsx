import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ArrowRight } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";

import { ExamCountdown } from "@/components/ExamCountdown";
import { PrepJourneyRoadmap } from "@/components/PrepJourneyRoadmap";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { HybridFaqAccordion, hybridFaqs } from "@/components/FaqAccordion";
import { buildFaqPageJsonLd } from "@/components/SeoFaq";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { HybridThirdCourseReel } from "@/components/HybridThirdCourseReel";
import { PinnedReviewsBoard } from "@/components/PinnedReviewsBoard";
import { pinnedNote } from "@/data/acceptance-notes";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const HowItWorksSection = lazy(() =>
  import("@/components/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
);

const PATH = "/hybrid" as const;
const TEAL = "#0F766E";

export const Route = createFileRoute("/hybrid/")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Hybrid BBE + WiSo Exam Prep 2027 | BBE School" },
      {
        name: "description",
        content:
          "Prepare for both WU Vienna entrance exams in one course: shared math in English and German, a hybrid paper, bridge cases, and the same study modes as Full BBE and Full WiSo.",
      },
      { property: "og:title", content: "Hybrid BBE + WiSo Exam Prep | BBE School" },
      {
        property: "og:description",
        content:
          "A third WU prep course for applicants who want BBE and WiSo together, with every practice mode from both tracks.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(hybridFaqs)) },
    ],
  }),
  component: HybridLandingPage,
});

export function HybridLandingPage() {
  const { ownsHybridCourse } = useFullCourseAccess();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader showNav showMobileNav />

      <main>
        <section className="relative overflow-hidden px-3 pt-7 pb-10 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-14 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <ExamCountdown className="mb-5 sm:mb-6" />

              <p
                className="mb-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs"
                style={{
                  borderColor: `${TEAL}55`,
                  backgroundColor: `${TEAL}14`,
                  color: TEAL,
                }}
              >
                Hybrid · BBE + WiSo
              </p>

              <h1 className="font-display text-[1.65rem] font-semibold leading-[1.15] text-foreground sm:text-[3.25rem] sm:leading-[1.05] lg:text-[3.75rem]">
                Step by step preparation for both 2027 WU exams
              </h1>

              <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                One course for applicants who want BBE and WiSo. Shared math in English and German,
                a paper you can lean either way, and every practice mode from both full courses.
              </p>

              <div
                id="full-course"
                className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap"
              >
                <LocalizedLink
                  to="/products/hybrid-course"
                  className="inline-flex min-h-12 flex-col items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: TEAL }}
                >
                  <span>Hybrid Course</span>
                  <span className="mt-0.5 text-[11px] font-medium text-white/80">
                    €559 · both exams
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  to="/demo-practice"
                  className="inline-flex min-h-12 flex-col items-center justify-center rounded-sm border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-teal-700/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ borderColor: TEAL, color: TEAL }}
                >
                  <span>BBE demo</span>
                  <span className="mt-0.5 text-[11px] font-medium opacity-70">
                    50+ starter tasks
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  to="/wiso/demo-practice"
                  className="inline-flex min-h-12 flex-col items-center justify-center rounded-sm border border-foreground/20 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  <span>WiSo demo</span>
                  <span className="mt-0.5 text-[11px] font-medium text-background/70">
                    German-track start
                  </span>
                </LocalizedLink>
              </div>

              <LocalizedLink
                to="/bbe-vs-wiso"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                style={{ color: TEAL }}
              >
                See how BBE and WiSo differ
                <ArrowRight className="h-3.5 w-3.5" />
              </LocalizedLink>
            </div>

            <div id="important-features" className="mt-10 sm:mt-12 lg:mt-14">
              <PrepJourneyRoadmap track="hybrid" accent="hybrid-teal" />
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[28rem] bg-background" aria-hidden />}>
          <HowItWorksSection track="hybrid" />
        </Suspense>

        <WhyChooseUsSection
          track="hybrid"
          subtitle="Everything from Full BBE and Full WiSo in one course: questions, timed mocks, builders, flashcards, matching, and tutor exam, plus a shared plan so the overlap is not homework twice."
        />

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
              Same campus. Two papers. One preparation.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
              BBE is the selective English track. WiSo is the larger German-taught track. Hybrid is
              for the year you refuse to guess wrong and close the other door.
            </p>
          </div>
        </section>

        <section id="why-a-third-course" className="why-choose-us--hybrid bg-[#071612]">
          <div className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
            <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] text-why-us-fg sm:text-4xl lg:text-5xl">
              Why a third course
            </h2>
            <p className="mt-4 text-base leading-relaxed text-why-us-fg/80 sm:text-lg">
              Mathematics and economics overlap. The language section does not. Hybrid keeps both
              papers in one plan without doing the shared work twice.
            </p>
          </div>
          <HybridThirdCourseReel />
          <div className="flex justify-center bg-[#071612] px-4 py-8">
            <LocalizedLink
              to={ownsHybridCourse ? "/hybrid/course" : "/products/hybrid-course"}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-teal-200/30 bg-teal-800 px-8 py-4 text-sm font-semibold text-teal-50 transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#071612]"
            >
              {ownsHybridCourse ? "Open Hybrid course" : "View Hybrid Course"}
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
        </section>

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
              Notes from people who kept both options open
            </h2>
          </div>
        </section>

        <PinnedReviewsBoard
          title="What dual-track applicants told us"
          reports={hybridReports}
          accent="hybrid"
          archiveHash="hybrid"
        />

        <div id="faq">
          <HybridFaqAccordion />
        </div>

        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
              BBE School · Hybrid
            </span>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
              {ownsHybridCourse ? (
                <LocalizedLink
                  to="/hybrid/course"
                  className="text-muted-foreground hover:underline"
                >
                  Course
                </LocalizedLink>
              ) : (
                <LocalizedLink
                  to="/products/hybrid-course"
                  className="text-muted-foreground hover:underline"
                >
                  Hybrid Course
                </LocalizedLink>
              )}
              <LocalizedLink to="/bbe" className="text-muted-foreground hover:underline">
                BBE
              </LocalizedLink>
              <LocalizedLink to="/wiso" className="text-muted-foreground hover:underline">
                WiSo
              </LocalizedLink>
              <LocalizedLink to="/bbe-vs-wiso" className="text-muted-foreground hover:underline">
                Compare
              </LocalizedLink>
              <LocalizedLink to="/terms" className="text-muted-foreground hover:underline">
                Terms
              </LocalizedLink>
              <LocalizedLink to="/privacy" className="text-muted-foreground hover:underline">
                Privacy
              </LocalizedLink>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}

const hybridReports = [
  pinnedNote("hybrid-karolina"),
  pinnedNote("hybrid-ben"),
  pinnedNote("hybrid-yasmin"),
];
