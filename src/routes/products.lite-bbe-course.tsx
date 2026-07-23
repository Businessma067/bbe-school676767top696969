import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ListChecks,
  Clock,
  Users,
  Lightbulb,
  Check,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import liteAsset from "@/assets/lite-bbe-course.png.asset.json";

export const Route = createFileRoute("/products/lite-bbe-course")({
  head: () => ({
    meta: [
      { title: "Light BBE Course — BBE School" },
      {
        name: "description",
        content:
          "A focused starting point for WU BBE prep: 950+ tasks, 2 mock exams, AI-powered explanations, and community support across all three subjects.",
      },
      { property: "og:title", content: "Light BBE Course — BBE School" },
      {
        property: "og:description",
        content:
          "950+ practice tasks, 2 mock exams, and AI explanations for early-stage WU BBE preparation.",
      },
      { property: "og:image", content: liteAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LiteBbeCourseProduct,
});

const ORANGE = "#C2643A";

const stats = [
  { value: "3", label: "Subjects" },
  { value: "950+", label: "Tasks" },
  { value: "2", label: "Mock Exams" },
];

const includes = [
  {
    icon: Lightbulb,
    title: "AI-powered explanations",
    text: "For every question you attempt, get a clear breakdown that teaches the reasoning behind the answer.",
  },
  {
    icon: Clock,
    title: "2 full-length timed mock exams",
    text: "Test yourself under real conditions and discover where you stand before the real exam.",
  },
  {
    icon: ListChecks,
    title: "500+ exam-style practice tasks",
    text: "Across Math, English, and Business & Economics — enough to build genuine intuition.",
  },
  {
    icon: Users,
    title: "Community support",
    text: "Connect with other applicants working through the same material and share the journey.",
  },
  {
    icon: BookOpen,
    title: "Core theory coverage",
    text: "All three subjects covered with focused theory that supports the practice, not overwhelms it.",
  },
  {
    icon: Check,
    title: "Curated working set",
    text: "A genuinely solid foundation pulled from our full question bank, designed for early-stage prep.",
  },
];

const liteFaqs = [
  {
    question: "What's the difference between Light and Full Access?",
    answer:
      "Light gives you a curated 500+ task set, 2 mock exams, and community support: a genuinely solid starting foundation. Full Access unlocks the complete 1200+ task bank, unlimited mock exams, direct 1:1 support, and special features like the Duel Grid and achievement system.",
  },
  {
    question: "Is Light enough to actually pass the exam?",
    answer:
      "Light is designed as a strong foundation builder, especially if you're starting your prep early. If you're within 6 to 8 weeks of your exam date, or want the full question bank and unlimited mock exams, Full Access is the better fit for complete exam day readiness.",
  },
  {
    question: "Can I upgrade to Full Access later?",
    answer:
      "Yes, you can upgrade anytime and pay only the price difference between Light and Full Access.",
  },
  {
    question: "Which 500+ tasks are included, is it random or selected?",
    answer:
      "It's a curated working set covering every chapter and subject, chosen to give you a genuinely representative foundation rather than a random slice.",
  },
  {
    question: "How long do I have access after purchasing?",
    answer:
      "Forever. It's a single one time payment, with no subscription and no expiration on your access.",
  },
  {
    question: "Is €279 a one time payment or a subscription?",
    answer:
      "A single one time payment of €279, no recurring charges, no subscription.",
  },
  {
    question: "What kind of support do I get with Light?",
    answer:
      "Community support, you can connect with other applicants working through the same material. Direct 1:1 support is reserved for Full Access.",
  },
  {
    question: "Are the 2 mock exams timed like the real thing?",
    answer:
      "Yes, both mock exams run under realistic timing conditions across all three subjects, so you get an accurate read on where you stand.",
  },
  {
    question: "Do I need any prior background in economics or business?",
    answer:
      "No, the core theory coverage included in Light takes you from the basics up, so you can build your foundation from zero.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes, the same free trial and sample question access available on Full Access applies here, so you can see the question style and platform before committing.",
  },
  {
    question: "What happens to my progress if I upgrade to Full Access?",
    answer:
      "Everything carries over. Your completed tasks, mock exam history, and account progress stay exactly as they are when you move to Full Access.",
  },
  {
    question: "Can I access Light on my phone as well as desktop?",
    answer:
      "Yes, the platform is fully responsive and works across desktop, tablet, and mobile.",
  },
  {
    question: "Do the 500+ tasks include all three subjects equally?",
    answer:
      "Yes, the curated set spans Math, English, and Business & Economics, covering core theory and exam style questions across all three.",
  },
  {
    question: "Will new tasks be added to my Light package over time?",
    answer:
      "Yes. New practice tasks are added to the question bank regularly, and your Light access includes these updates as they roll out, so your library keeps growing over time.",
  },
];

function Star({ fill }: { fill: "full" | "almost" | "empty" }) {
  const id = `ls-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset="85%" stopColor={ORANGE} />
          <stop offset="85%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.94 6.36 6.96.66-5.25 4.7 1.56 6.82L12 17.75l-6.21 3.29 1.56-6.82L2.1 9.52l6.96-.66L12 2.5z"
        fill={fill === "full" ? ORANGE : fill === "almost" ? `url(#${id})` : "transparent"}
        stroke={ORANGE}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiteBbeCourseProduct() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">
                BBE
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                BBE School
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                WU Vienna · Prep
              </span>
            </div>
          </Link>
          <Link
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </Link>
        </div>
      </header>

      <main className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Light BBE Course
          </h1>

          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
            <img
              src={liteAsset.url}
              alt="Light BBE Course"
              className="w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="almost" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.72</span>
            <span className="text-sm text-muted-foreground">64 Reviews</span>
          </div>

          {/* Stats */}
          <div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-border/60 text-center">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-foreground">{s.value}</span>
                  <span className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-taupe">
                  One-time payment
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-foreground">€279</span>
                </div>
              </div>
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background sm:w-auto"
                style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
              >
                Get Light Access →
              </Link>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">
              A focused starting point — see terms for access details.
            </p>
          </div>

          {/* What's included */}
          <section className="mt-12">
            <h2 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-foreground">
              What's included?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="relative grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `${ORANGE}18`,
                        boxShadow: `inset 0 0 0 1px ${ORANGE}40`,
                      }}
                    >
                      <item.icon className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="mt-14">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground">
              Built for the early stage of your prep
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Not everyone is two months out from the exam, buried in prep, needing every tool at once.
              Some applicants are still early — three, four, five months out — and just want to start
              building real fundamentals without committing to the full experience yet. Light is built
              exactly for that stage.
            </p>

            <blockquote className="relative my-8 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6">
              <Quote className="absolute left-4 top-4 h-5 w-5 text-primary/40" aria-hidden="true" />
              <p className="font-display text-lg font-semibold italic leading-relaxed text-foreground">
                "What actually works is starting with a focused, genuinely solid set of practice — enough
                to build real intuition for how the exam thinks, without the pressure of an all-in commitment."
              </p>
            </blockquote>

            <h3 className="font-display text-lg font-semibold text-foreground">
              What this starter kit gives you:
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Real exam-style questions across all three subjects — Business & Economics, Math, and English.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Explanations that actually teach the reasoning behind each answer, not just the correct letter.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Two full mock exams under realistic timing, so you know exactly where you stand before the real test.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  A clean upgrade path: everything you build here carries straight over to Full Access.
                </span>
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              That's what this package gives you. It's not a trimmed-down teaser — it's a complete, usable
              toolkit for this stage of your preparation. When you're ready to go further, Full Access is
              there waiting. Light isn't a smaller version of getting in. It's where getting in actually starts.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-taupe">
                Light vs. Full Access
              </p>
              <h2 className="mt-5 text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently asked questions
              </h2>

              <Accordion type="single" collapsible className="mt-8">
                {liteFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`lite-faq-${index}`}
                    className="border-b-0 border-t border-border/40 first:border-t-0"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-caramel">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
