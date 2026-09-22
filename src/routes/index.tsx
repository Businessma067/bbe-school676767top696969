import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ClipboardList,
  Layers,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";

import { cn } from "@/lib/utils";
import { ExamCountdown } from "@/components/ExamCountdown";
import { FaqAccordion, homepageFaqs } from "@/components/FaqAccordion";
import { buildFaqPageJsonLd } from "@/components/SeoFaq";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PinnedReviewsBoard } from "@/components/PinnedReviewsBoard";
import { homepageNavItems } from "@/config/site-nav";
import { storeExamTrack } from "@/lib/exam-track";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const HowItWorksSection = lazy(() =>
  import("@/components/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    links: [...hreflangLinks("/"), { rel: "canonical", href: "https://bbe-school.com/" }],
    meta: [
      { title: "WU Vienna Exam Prep for BBE and WiSo | BBE School" },
      {
        name: "description",
        content:
          "Prep for the 2027 WU entrance exam on BBE or WiSo with practice questions, timed mocks, and study tools built around the real format.",
      },
      { property: "og:title", content: "WU Vienna Exam Prep for BBE and WiSo | BBE School" },
      {
        property: "og:description",
        content:
          "Practice questions, timed mocks, a mock builder, and study tools for WU Vienna’s BBE or WiSo entrance exam.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bbe-school.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath("/"),
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(homepageFaqs)) },
    ],
  }),
  component: Index,
});

type ExamOption = {
  id: "bbe" | "wiso";
  label: string;
  title: string;
  description: string;
  differences: string[];
  cta: string;
  to: string;
};

const EXAM_OPTIONS: ExamOption[] = [
  {
    id: "bbe",
    label: "BBE",
    title: "Business and Economics (BBE)",
    description:
      "WU’s English-taught bachelor with a smaller intake of about 240 places, an international cohort, and a winter start only. The exam covers Economics and Business, English, and Mathematics.",
    differences: [
      "Exam and study language: English",
      "About 240 places, highly selective",
      "Subjects: Economics, Math, English",
      "Winter semester start only",
    ],
    cta: "Enter BBE preparation",
    to: "/bbe",
  },
  {
    id: "wiso",
    label: "WiSo",
    title: "Business, Economics and Social Sciences (WiSo)",
    description:
      "WU’s German-taught bachelor with a much larger intake of about 2,703 places. The exam covers economics fundamentals, Mathematics, and German reading comprehension, with no English section.",
    differences: [
      "Exam and study language: German",
      "About 2,703 places, broader intake",
      "Subjects: Economics, Math, German",
      "Winter or summer start possible",
    ],
    cta: "Enter WiSo preparation",
    to: "/wiso",
  },
];

const FEATURE_CARDS: {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  tools?: { name: string; blurb: string }[];
}[] = [
  {
    id: "questions",
    title: "3,000+ practice questions",
    description:
      "A growing bank of exam-style cases across every content area, with a short explanation under each statement so you learn the logic instead of only the answer key.",
    icon: BookOpen,
  },
  {
    id: "mocks",
    title: "Full timed mock exams",
    description:
      "Sit complete simulations with real pacing pressure and partial-credit scoring, then review where points were won or lost.",
    icon: ClipboardList,
  },
  {
    id: "builder",
    title: "Custom mock builder",
    description:
      "Build your own timed sets by topic and difficulty so you can close weak spots without spending hours on material you already know.",
    icon: Layers,
  },
  {
    id: "tools",
    title: "Study tools",
    description:
      "Between full practice sessions you can flip flash cards for definitions and formulas, race through matching boards, or take a short tutor quiz with instant feedback.",
    icon: Puzzle,
    tools: [
      {
        name: "Flash cards",
        blurb: "Flip through definitions, formulas, and vocab until recall feels automatic.",
      },
      {
        name: "Matching",
        blurb: "Pair each term with its meaning on a timed board using the same decks in a different drill.",
      },
      {
        name: "Tutor exam",
        blurb: "A short random theory quiz with instant feedback from the tutor robot.",
      },
    ],
  },
];

export function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        showNav
        showMobileNav
        hideTrackSwitcher
        navItems={homepageNavItems()}
        left={
          <LocalizedLink
            to="/"
            aria-label="BBE School home"
            className="group flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-xs font-bold leading-none tracking-tight text-primary-foreground">
                BBE
              </span>
            </div>
            <span className="hidden font-display text-sm font-bold tracking-tight text-foreground sm:inline">
              BBE School
            </span>
          </LocalizedLink>
        }
      />

      <main>
        <section className="relative overflow-hidden px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8 lg:pt-16 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <ExamCountdown className="mb-6" />

              <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] text-foreground sm:text-[3.25rem] sm:leading-[1.05] lg:text-[3.75rem]">
                Step by step preparation for your 2027 WU exam
              </h1>
              <p className="mt-4 font-display text-lg font-semibold tracking-wide text-muted-foreground sm:text-xl">
                WiSo and BBE
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                One platform for both entrance paths: pick the track that matches how you want to study
                at WU Vienna.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-5 md:grid-cols-2 md:gap-6">
              {EXAM_OPTIONS.map((exam) => {
                const isWiso = exam.id === "wiso";
                return (
                  <article
                    key={exam.id}
                    className={cn(
                      "flex h-full flex-col rounded-2xl border p-6 sm:p-8",
                      isWiso
                        ? "border-indigo-200/80 bg-indigo-50/40 dark:border-indigo-800/40 dark:bg-indigo-950/20"
                        : "border-border bg-card",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-xl shadow-md ring-1",
                          isWiso
                            ? "bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 ring-indigo-500/30"
                            : "bg-gradient-to-br from-primary via-accent to-primary ring-primary/30",
                        )}
                        aria-hidden
                      >
                        <span className="font-display text-xs font-bold tracking-tight text-primary-foreground" data-no-i18n>
                          {exam.label}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wide",
                          isWiso ? "text-indigo-800 dark:text-indigo-300" : "text-primary",
                        )}
                        data-no-i18n
                      >
                        {exam.label}
                      </p>
                    </div>
                    <h2
                      className="mt-4 font-display text-xl font-semibold text-foreground sm:text-2xl"
                      data-no-i18n
                    >
                      {exam.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {exam.description}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2">
                      {exam.differences.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground sm:text-[0.95rem]"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                              isWiso ? "bg-indigo-700" : "bg-primary",
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <LocalizedLink
                      to={exam.to}
                      onClick={() => storeExamTrack(exam.id)}
                      className={cn(
                        "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                        isWiso
                          ? "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-700"
                          : "bg-exam-red hover:bg-exam-red/90 focus:ring-ring",
                      )}
                    >
                      {exam.cta}
                      <ArrowRight className="h-4 w-4" />
                    </LocalizedLink>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <LocalizedLink
                to="/bbe-vs-wiso"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Learn more about the difference between the exams
                <ArrowRight className="h-3.5 w-3.5" />
              </LocalizedLink>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="relative overflow-hidden bg-why-us-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] text-why-us-fg sm:text-4xl lg:text-5xl">
                Why Choose US
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/80 sm:text-lg">
                Everything you need to prepare for a WU entrance exam, built around the real format,
                scoring, and time pressure.
              </p>
            </div>

            <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 sm:gap-6">
              {FEATURE_CARDS.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.id}
                    className="rounded-2xl border border-white/12 bg-why-us-card p-6 sm:p-8"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-caramel-deep/20 text-caramel-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-why-us-fg sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-why-us-fg/75 sm:text-base">
                      {feature.description}
                    </p>
                    {feature.tools ? (
                      <ul className="mt-4 space-y-2.5">
                        {feature.tools.map((tool) => (
                          <li key={tool.name} className="text-sm leading-relaxed text-why-us-fg/75">
                            <span className="font-semibold text-why-us-fg">{tool.name}.</span>{" "}
                            {tool.blurb}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                );
              })}
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
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
              A triple-accredited business school with tuition that stays close to free
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-lg">
              One two-hour exam sits between your family and a strong degree at almost zero cost.
            </p>
          </div>
        </section>

        <section className="bg-why-us-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-why-us-fg sm:text-3xl">
                Capital preservation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                Private tutors in Vienna charge €50 to €100 per hour just to walk through textbook
                slides. Tuition at WU Vienna is often about ten times lower than comparable schools
                in the UK or US, so a focused prep investment protects a €100,000 financial
                advantage.
              </p>
              <CapitalBars />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-why-us-fg sm:text-3xl">
                Top-tier outcomes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                WU Vienna is a target school for many strong firms, though recruiters usually look at
                the top of the class. Training for exam pressure now builds the analytical stamina
                you will need later in recruitment cycles.
              </p>
              <PlacementsTicker />
            </div>
          </div>
        </section>

        {/* PARENTS — frank audit teaser (shared for BBE & WiSo) */}
        <section className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                A frank note for parents:
                <br />
                <span className="text-muted-foreground">what WU admission actually costs</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Before you pick a preparation plan for BBE or WiSo, look at what your child walks into
                at WU Vienna and what a wrong plan costs the family in real euros.
              </p>
            </div>

            <div className="relative mt-10">
              <div className="space-y-5 text-base leading-relaxed text-foreground sm:text-lg">
                <p>
                  The WU Vienna entrance exams are not ordinary school tests. They sort a crowded hall
                  of applicants under announcements and a fixed number of seats on the other side. BBE
                  offers about 240 places and WiSo offers far more, yet both still filter hard under
                  the same kind of pressure.
                </p>
                <p>
                  The volume of competitors is not even the hardest part. The real difficulty sits in
                  the structural rules the university uses to break the field. Your child gets less
                  than a minute per statement, whether that is a dense English passage on BBE, German
                  reading and economics wording on WiSo, or a data-sufficiency style problem worked
                  entirely in their head. At WU Vienna a wrong answer does not just score zero: the
                  computer subtracts points from what the student got right elsewhere.
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-[30%] bottom-0 bg-gradient-to-b from-transparent via-background/85 to-background" />

              <div className="relative z-10 flex justify-center py-4">
                <LocalizedLink
                  to="/parents"
                  className="group inline-flex flex-col items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <span>Read the full letter</span>
                  <svg
                    className="h-4 w-4 animate-bounce"
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
                </LocalizedLink>
              </div>
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
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl">
              Notes from people who sat the exam
            </h2>
          </div>
        </section>

        <PinnedReviewsBoard
          title="What students wrote after they got an acceptance letter"
          reports={reports}
        />

        <div id="faq">
          <FaqAccordion />
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
            BBE School
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Independent prep for WU Vienna BBE and WiSo entrance exams. Not affiliated with WU
            Vienna.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Exams</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <LocalizedLink
                to="/bbe"
                className="text-foreground hover:underline"
                onClick={() => storeExamTrack("bbe")}
              >
                BBE preparation
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                to="/wiso"
                className="text-foreground hover:underline"
                onClick={() => storeExamTrack("wiso")}
              >
                WiSo preparation
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/bbe-vs-wiso" className="text-foreground hover:underline">
                BBE vs WiSo
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/wu-vienna" className="text-foreground hover:underline">
                About WU Vienna
              </LocalizedLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Products
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <LocalizedLink to="/products" className="text-foreground hover:underline">
                All products
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/products/full-course" className="text-foreground hover:underline">
                Full BBE Course
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink
                to="/wiso/products/full-course"
                className="text-foreground hover:underline"
              >
                Full WiSo Course
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/demo-practice" className="text-foreground hover:underline">
                Free BBE demo
              </LocalizedLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <LocalizedLink to="/terms" className="text-foreground hover:underline">
                Terms of Service
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/privacy" className="text-foreground hover:underline">
                Privacy Policy
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/parents" className="text-foreground hover:underline">
                For parents
              </LocalizedLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-muted-foreground">
        © 2026 BBE School. Not affiliated with WU Vienna.
      </p>
    </footer>
  );
}

function CapitalBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setProgress(1);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rows = [
    { label: "Private tutoring trap", width: 92, value: "€8 to 15k+" },
    { label: "Focused platform prep", width: 28, value: "One investment" },
  ];

  return (
    <div ref={ref} className="mt-8 space-y-4">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
            <span className="text-why-us-fg/80">{row.label}</span>
            <span className="font-semibold text-why-us-fg">{row.value}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-caramel-deep transition-[width] duration-1000 ease-out"
              style={{ width: `${progress * row.width}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function PlacementsTicker() {
  const logos = ["McKinsey", "BCG", "Bain", "J.P. Morgan", "Goldman Sachs", "Deloitte"];
  return (
    <div className="mt-8 rounded-xl border border-white/12 bg-black/25 px-4 py-4 sm:px-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-3.5">
        {logos.map((name) => (
          <span
            key={name}
            className="text-center text-sm font-semibold tracking-wide text-why-us-fg/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

const reports = [
  {
    id: 0,
    name: "Anna, Vienna",
    quote:
      "The mock exams felt scarily close to the real thing. Scoring explanations finally made the partial-credit system click, and I stopped guessing and started managing risk.",
    badge: "Rank: 19th",
  },
  {
    id: 1,
    name: "Tomáš, Bratislava",
    quote:
      "Math used to eat my whole clock. After timed drills I finished with minutes left. Economics statements stopped feeling like traps once I learned the wording patterns.",
    badge: "Rank: 112th",
  },
  {
    id: 2,
    name: "Sofia, Bucharest",
    quote:
      "In general, I’ve always found the material easy to grasp. The exam questions were relatively easy, though the wording was tricky. It was a huge help that I’d done so many mock exams and learned time management.",
    badge: "Rank: 43rd",
  },
  {
    id: 3,
    name: "Lisa, Graz",
    quote:
      "I don't even understand how others manage to pass such a strange exam without materials like this. Buying the course three months before the exam was the best decision.",
    badge: "Rank: 227th",
  },
  {
    id: 4,
    name: "Marcus, Zagreb",
    quote:
      "I don’t think I would have even come close to passing without BBE School. I have absolutely no regrets about the money, time, and effort I put in.",
    badge: "Rank: 97th",
  },
  {
    id: 5,
    name: "Daniel, Ljubljana",
    quote:
      "Clear, structured questions that offer the best possible simulation of the live exam. Time-management tools were exactly what helped me meet the deadline.",
    badge: "Rank: 7th",
  },
];
