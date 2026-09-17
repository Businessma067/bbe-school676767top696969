import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";

import { cn } from "@/lib/utils";
import { ExamCountdown } from "@/components/ExamCountdown";
import { FaqAccordion, homepageFaqs } from "@/components/FaqAccordion";
import { buildFaqPageJsonLd } from "@/components/SeoFaq";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
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
      { title: "WU Vienna WiSo Exam Prep — German Bachelor Entrance | BBE School" },
      {
        name: "description",
        content:
          "Prepare for the WU Vienna WiSo (Wirtschafts- und Sozialwissenschaften) entrance exam: Wirtschaft verstehen economics, mathematics, and German reading comprehension.",
      },
      { property: "og:title", content: "WU Vienna WiSo Exam Prep | BBE School" },
      {
        property: "og:description",
        content:
          "Step-by-step WiSo Aufnahmeprüfung prep: Wirtschaft verstehen, math, German comprehension, scoring, and mocks.",
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
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(homepageFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "WU Vienna WiSo Exam Prep",
          url: "https://bbe-school.com/wiso",
          description:
            "Independent preparation for the WU Vienna WiSo Aufnahmeprüfung: economics, mathematics, and German reading.",
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
                Step by step preparation for your 2027 WU WiSo exam
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Master wirtschaftliche Grundkenntnisse, Mathematik, and deutsches Sprachverständnis —
                the three pillars of the WiSo Aufnahmeprüfung.
              </p>

              <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
                <LocalizedLink
                  to={WISO_PRACTICE_ROUTES.demo}
                  className="inline-flex flex-col items-center justify-center rounded-sm bg-indigo-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                >
                  <span>Try WiSo demo</span>
                  <span className="mt-0.5 text-[11px] font-medium text-white/80">Dedicated WiSo URL</span>
                </LocalizedLink>
                <LocalizedLink
                  to={WISO_PRACTICE_ROUTES.products}
                  className="inline-flex flex-col items-center justify-center rounded-sm border border-indigo-700 bg-indigo-700/10 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-700/20 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 dark:text-indigo-100"
                >
                  <span>Explore WiSo courses</span>
                  <span className="mt-0.5 text-[11px] font-medium opacity-70">Full WiSo Course</span>
                </LocalizedLink>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { label: "Places", value: String(WISO_EXAM_FORMAT.places) },
                { label: "Exam length", value: `${WISO_EXAM_FORMAT.durationHours} hours` },
                { label: "Questions", value: String(WISO_EXAM_FORMAT.questionCount) },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-indigo-200/70 bg-indigo-50/50 px-4 py-5 text-center dark:border-indigo-800/40 dark:bg-indigo-950/25"
                >
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl text-center">
              <LocalizedLink
                to="/wiso/entrance-exam"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800 underline-offset-4 hover:underline dark:text-indigo-300"
              >
                Read the WiSo entrance exam overview
                <ArrowRight className="h-3.5 w-3.5" />
              </LocalizedLink>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[28rem] bg-background" aria-hidden />}>
          <HowItWorksSection />
        </Suspense>

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
              Same WU campus. German-taught pathway.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
              WiSo offers far more places than BBE — but the written exam still filters thousands of
              applicants with the same partial-credit scoring pressure.
            </p>
          </div>
        </section>

        <section id="why-choose-us" className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Built for the WiSo Aufnahmeprüfung
            </h2>
            <p className="mt-4 text-muted-foreground">
              Content areas follow WU&apos;s official FAQ: wirtschaftliche Grundkenntnisse, Mathematik,
              and deutsches Sprachverständnis — not an English section.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LocalizedLink
                to="/wiso/economics-german"
                className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Economics & German
              </LocalizedLink>
              <LocalizedLink
                to="/wiso/mathematics"
                className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Mathematics
              </LocalizedLink>
              <LocalizedLink
                to="/wiso/exam-scoring"
                className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Scoring
              </LocalizedLink>
              <LocalizedLink
                to="/bbe-vs-wiso"
                className="rounded-md border border-indigo-700/40 bg-indigo-50/60 px-4 py-2 text-sm font-semibold text-indigo-900 hover:bg-indigo-50 dark:bg-indigo-950/30 dark:text-indigo-100"
              >
                BBE vs WiSo
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
          <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl">
              Voices from the WiSo exam floor.
            </h2>
          </div>
        </section>

        <section id="reviews" className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                What students said after the WiSo Aufnahmeprüfung.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {wisoReports.map((report) => (
                <ReviewCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </section>

        <div id="faq">
          <FaqAccordion />
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
                  // @ts-expect-error dashboard search validated on the route
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
      "I kept underestimating Sprachverständnis. The practice passages finally made me slow down and mark carefully instead of racing. Math was fine once I stopped second-guessing every statement.",
    badge: "WiSo · accepted",
  },
  {
    id: 2,
    name: "Jonas, Vienna",
    quote:
      "Wirtschaft verstehen felt endless until I drilled statement-style cases. Seeing the Teilpunktesystem in mocks changed how I guessed — I skipped more, and my score went up.",
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
      "I’m not a native speaker, so the German section scared me most. Short daily drills helped more than rereading textbooks. Not flashy — just consistent practice that stuck.",
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
      "My weak spot was jumping between subjects too fast. Building shorter mixed sets fixed that. The exam still felt hard — just not surprising.",
    badge: "WiSo · accepted",
  },
];

function ReviewCard({ report }: { report: (typeof wisoReports)[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex flex-col justify-between border-t border-border pt-8">
      <div>
        <p className={cn("leading-relaxed text-muted-foreground", !expanded && "line-clamp-3")}>
          &ldquo;{report.quote}&rdquo;
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-indigo-700 hover:underline focus:outline-none dark:text-indigo-300"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="mt-8">
        <p className="font-display text-sm font-semibold text-foreground">{report.name}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1">
          <span className="text-xs font-semibold tracking-wide text-foreground">{report.badge}</span>
        </div>
      </div>
    </article>
  );
}
