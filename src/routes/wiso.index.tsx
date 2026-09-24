import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";

import { ExamCountdown } from "@/components/ExamCountdown";
import { PrepJourneyRoadmap } from "@/components/PrepJourneyRoadmap";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { WisoFaqAccordion, wisoFaqs } from "@/components/FaqAccordion";
import { buildFaqPageJsonLd } from "@/components/SeoFaq";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PinnedReviewsBoard } from "@/components/PinnedReviewsBoard";
import { useAccountNavTier } from "@/hooks/use-account-nav-tier";
import { storeExamTrack } from "@/lib/exam-track";
import { WISO_EXAM_FORMAT, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const HowItWorksSection = lazy(() =>
  import("@/components/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
);

const PATH = "/wiso" as const;

export const Route = createFileRoute("/wiso/")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WU Vienna WiSo Exam Prep | German Bachelor Entrance | BBE School" },
      {
        name: "description",
        content:
          "Prepare for the WU Vienna WiSo (Wirtschafts- und Sozialwissenschaften) entrance exam: Wirtschaft verstehen economics, mathematics, and German reading comprehension.",
      },
      { property: "og:title", content: "WU Vienna WiSo Exam Prep | BBE School" },
      {
        property: "og:description",
        content:
          "WiSo Aufnahmeprüfung prep for Wirtschaft verstehen, math, German reading, scoring, and mocks.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "de_AT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "WiSo Aufnahmeprüfung, WU Wien, Wirtschaft verstehen, WiSo Vorbereitung, WU entrance exam German" },
      ...socialImageMetaForPath(PATH),
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(wisoFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "WU Vienna WiSo Exam Prep",
          url: "https://bbe-school.com/wiso",
          description:
            "Preparation for the WU Vienna WiSo Aufnahmeprüfung: economics, mathematics, and German reading.",
          isPartOf: { "@type": "WebSite", name: "BBE School", url: "https://bbe-school.com" },
          about: {
            "@type": "EducationalOccupationalProgram",
            name: "Wirtschafts- und Sozialwissenschaften (WiSo)",
            provider: { "@type": "CollegeOrUniversity", name: "WU Vienna" },
          },
        }),
      },
    ],
  }),
  component: WisoLandingPage,
});

export function WisoLandingPage() {
  const { hasWisoFull } = useAccountNavTier();

  useEffect(() => {
    storeExamTrack("wiso");
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader showNav showMobileNav />

      <main>
        <section className="relative overflow-hidden px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-14 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <ExamCountdown className="mb-5 sm:mb-6" />

              <p className="mb-3 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-900 dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-200">
                WiSo · German-taught bachelor
              </p>

              <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] text-foreground sm:text-[3.25rem] sm:leading-[1.05] lg:text-[3.75rem]">
                Your 2027 WU WiSo exam, prepared one stage at a time
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Wirtschaftliche Grundkenntnisse, Mathematik, and deutsches Sprachverständnis sit at the
                centre of the WiSo Aufnahmeprüfung, and this track is built around those three pillars
                rather than around BBE English.
              </p>

              <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
                <LocalizedLink
                  to={WISO_PRACTICE_ROUTES.demo}
                  className="inline-flex flex-col items-center justify-center rounded-sm bg-indigo-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                >
                  <span>Try the WiSo demo</span>
                  <span className="mt-0.5 text-[11px] font-medium text-white/80">On WiSo URLs only</span>
                </LocalizedLink>
                <LocalizedLink
                  to={WISO_PRACTICE_ROUTES.products}
                  className="inline-flex flex-col items-center justify-center rounded-sm border border-indigo-700 bg-indigo-700/10 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-700/20 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 dark:text-indigo-100"
                >
                  <span>See WiSo courses</span>
                  <span className="mt-0.5 text-[11px] font-medium opacity-70">Full WiSo Course</span>
                </LocalizedLink>
              </div>

              <LocalizedLink
                to="/wiso/entrance-exam"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-800 underline-offset-4 hover:underline dark:text-indigo-300"
              >
                Read how the WiSo entrance exam works
                <ArrowRight className="h-3.5 w-3.5" />
              </LocalizedLink>
            </div>

            <div id="important-features" className="mt-10 sm:mt-12 lg:mt-14">
              <PrepJourneyRoadmap track="wiso" accent="wiso-blue" />
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[28rem] bg-background" aria-hidden />}>
          <HowItWorksSection track="wiso" />
        </Suspense>

        <WhyChooseUsSection track="wiso" />

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
              Same WU campus, German-taught path
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
              WiSo opens far more places than BBE, but the written exam still sorts thousands of
              people under the same partial credit pressure. The hall does not feel softer on the day.
            </p>
          </div>
        </section>

        <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-foreground sm:text-4xl">
                German is not only an exam section
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                If you stay in Austria or anywhere in the DACH region after graduation, strong German
                is part of ordinary working life. Offices, clients, and public services still run on
                it. Starting that work now for the Aufnahmeprüfung is early practice for the country
                you are walking into, not a side quest you can postpone forever.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  value: `~${WISO_EXAM_FORMAT.places.toLocaleString("en-US")}`,
                  label: "WiSo places",
                  hint: "Larger intake than BBE",
                },
                {
                  value: "~240",
                  label: "BBE places",
                  hint: "Same campus, English track",
                },
                {
                  value: "German",
                  label: "Exam language",
                  hint: "Reading, economics wording, math stems",
                },
                {
                  value: "DACH",
                  label: "Where German pays off",
                  hint: "Austria, Germany, Switzerland",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-border bg-card px-5 py-6 text-center"
                >
                  <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.hint}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                BBE keeps English as the language pillar, which is useful if your plan is a fully
                international classroom and English first careers. WiSo asks you to build German under
                exam pressure instead. That looks harder on paper, and it is harder in the hall, but
                it is also closer to how life after WU often looks if you stay in Vienna or move
                across the DACH job market.
              </p>
              <p>
                Places matter too. WiSo publishes an intake in the low thousands while BBE sits near
                two hundred forty. More seats do not make the paper gentle. They do mean the German
                track is a real scale pathway onto the same campus, with winter or summer start options
                after a successful procedure.
              </p>
              <p>
                So the practical argument is simple. You will need serious German anyway if Austria or
                the wider DACH region is where you want to study and work. Using the Aufnahmeprüfung as
                the first hard deadline is usually cleaner than waiting until lectures begin and then
                discovering how much language still sits between you and the material.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <LocalizedLink
                to="/bbe-vs-wiso"
                className="text-[var(--wiso-blue)] underline-offset-4 hover:underline"
              >
                Compare BBE and WiSo
              </LocalizedLink>
              <LocalizedLink
                to="/wiso/wu-vienna"
                className="text-muted-foreground underline-offset-4 hover:underline"
              >
                WU context for WiSo applicants
              </LocalizedLink>
            </div>
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
              Notes from people who sat WiSo
            </h2>
          </div>
        </section>

        <PinnedReviewsBoard
          title="What students told us after the WiSo Aufnahmeprüfung"
          reports={wisoReports}
          accent="wiso"
        />

        <div id="faq">
          <WisoFaqAccordion />
        </div>

        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
              BBE School · WiSo
            </span>
            {hasWisoFull ? (
              <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <LocalizedLink
                  to="/wiso/products/full-course-subjects"
                  className="text-muted-foreground hover:underline"
                >
                  Full Course
                </LocalizedLink>
                <LocalizedLink to="/wiso/mock-exams" className="text-muted-foreground hover:underline">
                  Mock Exams
                </LocalizedLink>
                <LocalizedLink to="/wiso/mock-builder" className="text-muted-foreground hover:underline">
                  Mock Builder
                </LocalizedLink>
                <LocalizedLink
                  to="/dashboard"
                  search={{ tab: "games" }}
                  className="text-muted-foreground hover:underline"
                >
                  Study tools
                </LocalizedLink>
                <LocalizedLink to="/wiso/demo-practice" className="text-muted-foreground hover:underline">
                  Demo-course
                </LocalizedLink>
                <LocalizedLink to="/terms" className="text-muted-foreground hover:underline">
                  Terms
                </LocalizedLink>
                <LocalizedLink to="/privacy" className="text-muted-foreground hover:underline">
                  Privacy
                </LocalizedLink>
              </nav>
            ) : (
              <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <LocalizedLink to="/bbe-vs-wiso" className="text-muted-foreground hover:underline">
                  BBE vs WiSo
                </LocalizedLink>
                <LocalizedLink to="/terms" className="text-muted-foreground hover:underline">
                  Terms
                </LocalizedLink>
                <LocalizedLink to="/privacy" className="text-muted-foreground hover:underline">
                  Privacy
                </LocalizedLink>
                <LocalizedLink to="/" className="text-muted-foreground hover:underline">
                  All exams
                </LocalizedLink>
              </nav>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}

const wisoReports = [
  {
    id: 1,
    name: "Nina, Linz",
    quote:
      "I kept underestimating Sprachverständnis. The practice passages finally made me slow down and mark carefully instead of racing, and math felt fine once I stopped second-guessing every statement.",
    badge: "WiSo · accepted",
  },
  {
    id: 2,
    name: "Jonas, Vienna",
    quote:
      "Wirtschaft verstehen felt endless until I drilled statement-style cases. Seeing the Teilpunktesystem in mocks changed how I guessed: I skipped more, and my score went up.",
    badge: "WiSo · accepted",
  },
  {
    id: 3,
    name: "Elena, Salzburg",
    quote:
      "Honestly I almost switched to BBE because of English. Staying on WiSo was the right call for me. German reading still ate time, but timed sets made the length feel normal by exam day.",
    badge: "WiSo · accepted",
  },
  {
    id: 4,
    name: "Matej, Brno",
    quote:
      "I’m not a native speaker, so the German section scared me most. Short daily drills helped more than rereading textbooks. Nothing flashy, just consistent practice that stuck.",
    badge: "WiSo · accepted",
  },
  {
    id: 5,
    name: "Lea, Graz",
    quote:
      "I didn’t need another lecture series. I needed the format. Once the mocks matched the real pacing, I stopped panicking when a block looked unfamiliar.",
    badge: "WiSo · accepted",
  },
  {
    id: 6,
    name: "David, Innsbruck",
    quote:
      "My weak spot was jumping between subjects too fast. Building shorter mixed sets fixed that. The exam still felt hard, just not surprising.",
    badge: "WiSo · accepted",
  },
];
