import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  ListChecks,
  Sparkles,
  ClipboardCheck,
  Gem,
  Check,
  AlertTriangle,
  Clock,
  Quote,
  Languages,
} from "lucide-react";
import { SeoFaq, buildFaqPageJsonLd } from "@/components/SeoFaq";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PaymentModal } from "@/components/PaymentModal";
import { AuthModal } from "@/components/AuthModal";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { WISO_FULL_COURSE_HREF } from "@/lib/full-course-access";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

/** Dedicated WiSo poster — sharp art with indigo branding (no blue blur wash). */
const FULL_COURSE_IMAGE = "/full-wiso-course-product-v3.png";
const FULL_COURSE_PRICE = 449;

const PATH = "/wiso/products/full-course" as const;
const INDIGO = "#3730A3";

export const Route = createFileRoute("/wiso/products/full-course")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqPageJsonLd(wisoCourseFaqs)) },
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Full WiSo Course | WU Aufnahmeprüfung Prep | BBE School" },
      {
        name: "description",
        content:
          "Full WiSo Course: Wirtschaft verstehen economics, mathematics, German reading, mocks and study tools for the WU Vienna WiSo exam.",
      },
      { property: "og:title", content: "Full WiSo Course | Unlock WiSo Prep" },
      {
        property: "og:description",
        content:
          "WiSo-track prep for WU Vienna: economics, math, German comprehension, timed mocks, and explanations.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoFullCourseProduct,
});

const fullStats = [
  { value: "3", label: "Pillars" },
  { value: "2,703", label: "Places", sub: "WiSo intake" },
  { value: "Mocks", label: "On /wiso URLs", sub: "Track-native" },
];

const features = [
  {
    icon: BookOpen,
    title: "3 WiSo pillars",
    text: "Economics from Wirtschaft verstehen, mathematics, and German reading comprehension.",
    accent: false,
  },
  {
    icon: ListChecks,
    title: "Exam-format practice",
    text: "Statement-style cases with Teilpunktesystem scoring, not BBE English drills.",
    accent: false,
  },
  {
    icon: Languages,
    title: "German-first design",
    text: "Built around deutsches Sprachverständnis and German economics wording.",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Explanations",
    text: "Written breakdowns so you learn the logic, not only the answer mark.",
    accent: true,
  },
  {
    icon: ClipboardCheck,
    title: "Mocks on /wiso URLs",
    text: "Timed mocks and the builder stay on the WiSo track so you do not land in BBE by accident.",
    accent: true,
  },
  {
    icon: Gem,
    title: "Study tools",
    text: "Flash cards, matching, and tutor exam drills between full practice sessions.",
    accent: true,
  },
];

const failureReasons = [
  "They study BBE-style English materials for a German-taught exam, so Sprachverständnis still feels unfamiliar on exam day.",
  "They memorize Wirtschaft verstehen chapters without practicing statement traps, so plausible-sounding false claims catch them out.",
  "They never train the Teilpunktesystem, so they answer too aggressively and lose points they already earned.",
  "They run out of time switching between economics, math, and German reading without mixed timed sets.",
  "They study alone with no way to check whether their reading of a dense German passage is actually correct.",
];

const wisoCourseFaqs = [
  {
    question: "What is included in the Full WiSo Course?",
    answer:
      "Practice aligned to Wirtschaft verstehen, mathematics, and German reading comprehension, plus timed mocks and study tools on dedicated /wiso URLs, kept separate from the BBE track.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Full WiSo Course is a one-time payment of €449. The same promocodes that work on Full BBE Course also apply at WiSo checkout.",
  },
  {
    question: "How is this different from the Full BBE Course?",
    answer:
      "BBE is English-taught with English reading and a smaller intake. WiSo is German-taught: economics wording, math, and deutsches Sprachverständnis, with no English section. Content and URLs stay on the WiSo track, and buying one does not unlock the other.",
  },
  {
    question: "Does it cover the Teilpunktesystem?",
    answer:
      "Yes. Practice and mocks are built around partial-credit scoring so you learn when answering is worth the risk and when skipping protects your score.",
  },
  {
    question: "Can I switch from BBE prep later?",
    answer:
      "You can explore both tracks from the products page. Choose the exam you will actually sit, because mixing tracks usually wastes time on the wrong language section.",
  },
];

function Star({ fill }: { fill: "full" | "almost" | "empty" }) {
  const id = `ws-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset="87%" stopColor={INDIGO} />
          <stop offset="87%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.94 6.36 6.96.66-5.25 4.7 1.56 6.82L12 17.75l-6.21 3.29 1.56-6.82L2.1 9.52l6.96-.66L12 2.5z"
        fill={fill === "full" ? INDIGO : fill === "almost" ? `url(#${id})` : "transparent"}
        stroke={INDIGO}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background sm:w-auto"
      style={{ backgroundColor: INDIGO, boxShadow: `0 10px 28px -8px ${INDIGO}90` }}
    >
      {label} →
    </button>
  );
}

export function WisoFullCourseProduct() {
  const { ready, signedIn, ownsWisoFullCourse } = useFullCourseAccess();
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const openBuy = () => {
    if (!signedIn) {
      setAuthOpen(true);
      return;
    }
    setPaymentOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </LocalizedLink>
        }
      />

      <main className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full WiSo Course
          </h1>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
            <img
              src={FULL_COURSE_IMAGE}
              alt="Full WiSo Course"
              className="absolute inset-0 h-full w-full object-cover object-center"
              draggable={false}
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="almost" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.8</span>
            <span className="text-sm text-muted-foreground">Early WiSo prep feedback</span>
          </div>

          <div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-border/60 text-center">
              {fullStats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-foreground">{s.value}</span>
                  <span className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</span>
                  {s.sub ? (
                    <span className="mt-0.5 text-[10px] font-medium text-muted-foreground/60">
                      {s.sub}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <div className="text-sm text-muted-foreground">
                {ownsWisoFullCourse ? "Your access" : "One-time payment"}
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                {ownsWisoFullCourse ? (
                  <span className="font-display text-2xl font-bold text-foreground">Unlocked</span>
                ) : (
                  <>
                    <span className="font-display text-4xl font-bold text-foreground">
                      €{FULL_COURSE_PRICE}
                    </span>
                    <span className="text-sm text-muted-foreground">full access</span>
                  </>
                )}
              </div>
            </div>
            {!ready ? (
              <div className="h-12 w-40 animate-pulse rounded-xl bg-secondary" />
            ) : ownsWisoFullCourse ? (
              <Link
                to={WISO_FULL_COURSE_HREF}
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 sm:w-auto"
                style={{ backgroundColor: INDIGO, boxShadow: `0 10px 28px -8px ${INDIGO}90` }}
              >
                Go to course →
              </Link>
            ) : (
              <CtaButton onClick={openBuy} label="Buy course" />
            )}
          </div>

          <section className="mt-12">
            <h2 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-foreground">
              Everything included
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="relative grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `${INDIGO}18`,
                        boxShadow: `inset 0 0 0 1px ${INDIGO}40`,
                      }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: INDIGO }} />
                      {f.accent ? (
                        <span
                          className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full text-white"
                          style={{ backgroundColor: INDIGO }}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Why WiSo applicants still struggle, and how this course is built
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              More places than BBE does not mean an easy day. The WiSo Aufnahmeprüfung still filters
              thousands of applicants with dense German reading, statement traps in economics, and
              math under the same partial-credit pressure.
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold text-foreground">
              The most common reasons students underperform:
            </h3>
            <ul className="mt-4 space-y-4">
              {failureReasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: "#dc262620" }}
                  >
                    <AlertTriangle className="h-3.5 w-3.5" style={{ color: "#dc2626" }} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
              What this course is really about
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              WiSo prep only works when the language of practice matches the exam. This course stays
              on German economics wording, German reading, and math on /wiso URLs, so you never waste
              weeks on BBE English passages you will not see.
            </p>

            <blockquote className="relative my-8 rounded-2xl border-l-4 p-6"
              style={{ borderColor: INDIGO, backgroundColor: `${INDIGO}10` }}
            >
              <Quote className="absolute left-4 top-4 h-5 w-5 opacity-40" style={{ color: INDIGO }} aria-hidden="true" />
              <p className="font-display text-lg font-semibold italic leading-relaxed text-foreground">
                &ldquo;The WiSo exam is not hard because you lack places. It is hard because the
                format rewards precise reading under time pressure, in German.&rdquo;
              </p>
            </blockquote>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every practice block is meant to feel like the real hall: statement logic, scoring
              risk, and the discipline to skip when a wrong mark would cost more than silence.
            </p>

            <div
              className="mt-10 rounded-2xl border p-6 text-center"
              style={{
                borderColor: `${INDIGO}55`,
                backgroundColor: `${INDIGO}10`,
              }}
            >
              <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                Train the WiSo format, not a different exam&apos;s language section.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                One-time payment · €{FULL_COURSE_PRICE} · Instant full access
              </p>
              {!ownsWisoFullCourse ? (
                <div className="mt-4">
                  <CtaButton onClick={openBuy} label="Buy course" />
                </div>
              ) : null}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl"
                style={{ backgroundColor: `${INDIGO}18`, boxShadow: `inset 0 0 0 1px ${INDIGO}40` }}
              >
                <Clock className="h-7 w-7" style={{ color: INDIGO }} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  How much time it takes
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Start early, and even one focused hour a day is enough to make the format feel
                  normal. Skip the cramming and keep steady German reading, economics statements, and
                  math that compounds by exam day.
                </p>
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-3">
                <span className="font-display text-3xl font-bold" style={{ color: INDIGO }}>
                  1
                </span>
                <span className="text-sm text-muted-foreground">
                  hour / day on steady days when you start in advance
                </span>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently asked questions
              </h2>
              <SeoFaq className="mt-8" items={wisoCourseFaqs} />
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Need BBE instead?{" "}
                <LocalizedLink
                  to="/products/full-course"
                  className="font-semibold text-primary hover:underline"
                >
                  Full BBE Course
                </LocalizedLink>
              </p>
            </div>
          </section>
        </div>
      </main>

      <PaymentModal
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        productName="Full WiSo Course"
        priceEuros={FULL_COURSE_PRICE}
        productSlug="wiso-full-course"
      />
      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        defaultMode="signin"
        onSignedIn={() => {
          setAuthOpen(false);
          setPaymentOpen(true);
        }}
      />
    </div>
  );
}
