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
      { title: "WU Vienna Exam Prep — BBE & WiSo | BBE School" },
      {
        name: "description",
        content:
          "Step-by-step preparation for your 2027 WU exam. Choose BBE (English) or WiSo (German) and prepare with practice questions, mock exams, and study tools.",
      },
      { property: "og:title", content: "WU Vienna Exam Prep — BBE & WiSo | BBE School" },
      {
        property: "og:description",
        content:
          "Prepare for WU Vienna’s BBE or WiSo entrance exam: practice questions, timed mocks, mock builder, and study tools.",
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
      "WU’s English-taught bachelor. Smaller intake (~240 places), international cohort, winter start only. The exam tests Economics & Business, English, and Mathematics.",
    differences: [
      "Exam & study language: English",
      "~240 places — highly selective",
      "Subjects: Economics, Math, English",
      "Winter semester start only",
    ],
    cta: "Enter BBE preparation",
    to: "/bbe",
  },
  {
    id: "wiso",
    label: "WiSo",
    title: "Wirtschafts- und Sozialwissenschaften (WiSo)",
    description:
      "WU’s German-taught bachelor with a much larger intake (~2,703 places). The exam tests economics fundamentals, Mathematics, and German reading comprehension — not English.",
    differences: [
      "Exam & study language: German",
      "~2,703 places — broader intake",
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
}[] = [
  {
    id: "questions",
    title: "3,000+ practice questions",
    description:
      "A growing bank of exam-style cases across every content area — with step-by-step explanations under each statement so you learn the logic, not just the answer.",
    icon: BookOpen,
  },
  {
    id: "mocks",
    title: "Full timed mock exams",
    description:
      "Sit complete simulations with real pacing pressure, partial-credit scoring, and review that shows exactly where points were won or lost.",
    icon: ClipboardList,
  },
  {
    id: "builder",
    title: "Custom mock builder",
    description:
      "Build your own timed sets by topic and difficulty to close weak spots without wasting hours on material you already know.",
    icon: Layers,
  },
  {
    id: "tools",
    title: "Flashcards, matching & drills",
    description:
      "Lightweight study tools for definitions, formulas, and rapid recall — designed to fit between full practice sessions.",
    icon: Puzzle,
  },
];

export function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        showNav={false}
        showMobileNav={false}
        hideTrackSwitcher
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
        <section className="relative overflow-hidden px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:px-8 lg:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <ExamCountdown className="mb-5 sm:mb-6" />

              <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] text-foreground sm:text-[3.25rem] sm:leading-[1.05] lg:text-[3.75rem]">
                Step by step preparation for your 2027 WU exam
              </h1>
              <p className="mt-3 font-display text-lg font-semibold tracking-wide text-muted-foreground sm:text-xl">
                WiSo and BBE
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                One platform. Two entrance exams. Pick the path that matches how you want to study at
                WU Vienna.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
              {EXAM_OPTIONS.map((exam) => {
                const isWiso = exam.id === "wiso";
                return (
                  <article
                    key={exam.id}
                    className={cn(
                      "flex flex-col rounded-2xl border p-6 sm:p-8",
                      isWiso
                        ? "border-teal-200/80 bg-teal-50/40 dark:border-teal-800/40 dark:bg-teal-950/20"
                        : "border-border bg-card",
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wide",
                        isWiso ? "text-teal-800 dark:text-teal-300" : "text-primary",
                      )}
                    >
                      {exam.label}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {exam.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {exam.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {exam.differences.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground sm:text-[0.95rem]"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                              isWiso ? "bg-teal-700" : "bg-primary",
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
                        "mt-auto inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                        isWiso
                          ? "mt-6 bg-teal-700 hover:bg-teal-800 focus:ring-teal-700"
                          : "mt-6 bg-exam-red hover:bg-exam-red/90 focus:ring-ring",
                      )}
                    >
                      {exam.cta}
                      <ArrowRight className="h-4 w-4" />
                    </LocalizedLink>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 text-center">
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

        <section id="why-choose-us" className="relative overflow-hidden bg-why-us-bg px-6 py-16 lg:px-8 lg:py-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] text-why-us-fg sm:text-4xl lg:text-5xl">
                Why Choose US
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/80 sm:text-lg">
                Everything you need to prepare for a WU entrance exam — built around the real format,
                scoring, and time pressure.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {FEATURE_CARDS.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.id}
                    className="rounded-2xl border border-white/12 bg-why-us-card p-6 sm:p-7"
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
          <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
              A triple-accredited elite business school.
              <br />
              <span className="text-white/95">Almost free education.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-lg">
              One 2-hour exam stands between your family and a world-class degree at almost zero
              cost.
            </p>
          </div>
        </section>

        <section className="bg-why-us-bg px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-2xl font-semibold text-why-us-fg sm:text-3xl">
                Capital preservation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                Private tutors in Vienna charge{" "}
                <span className="text-why-us-fg">€50 to €100 per hour</span> just to read textbook
                slides with you. Top-tier education at WU Vienna costs literally{" "}
                <span className="text-caramel-deep">10 times less</span> than comparable schools in
                the UK or US. A focused prep investment protects a{" "}
                <span className="font-semibold text-why-us-fg">€100,000 financial advantage</span>.
              </p>
              <CapitalBars />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-why-us-fg sm:text-3xl">
                Top-tier outcomes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                WU Vienna is a premier target university for the world&apos;s elite firms — but only
                for the <span className="text-caramel-deep">top 10% of the class</span>. Training for
                brutal exam pressure now builds the analytical stamina you need later in recruitment
                cycles.
              </p>
              <PlacementsTicker />
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
              Voices from the exam hall floor.
            </h2>
          </div>
        </section>

        <section id="reviews" className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Students&apos; reviews right after receiving an acceptance letter.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <ReviewCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </section>

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
    <footer className="border-t border-border bg-card px-6 py-12 lg:px-8">
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

function ReviewCard({ report }: { report: (typeof reports)[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex flex-col justify-between border-t border-border pt-8">
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
        <p className="font-display text-sm font-semibold text-foreground">{report.name}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1">
          <span className="text-xs font-semibold tracking-wide text-foreground">{report.badge}</span>
        </div>
      </div>
    </article>
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
    { label: "Private tutoring trap", width: 92, value: "€8–15k+" },
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
    <div className="mt-8 overflow-hidden rounded-xl border border-white/12 bg-black/25 py-4">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap px-4">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-sm font-semibold tracking-wide text-why-us-fg/70"
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
      "The mock exams felt scarily close to the real thing. Scoring explanations finally made the partial-credit system click — I stopped guessing and started managing risk.",
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
