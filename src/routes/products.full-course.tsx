import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  ListChecks,
  Headphones,
  Sparkles,
  ClipboardCheck,
  Gem,
  Check,
  AlertTriangle,
  Clock,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CompareTable } from "@/components/CompareTable";
import { PaymentModal } from "@/components/PaymentModal";
import { AuthModal } from "@/components/AuthModal";
import fullAsset from "@/assets/full-course-product.png.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { FULL_COURSE_HREF } from "@/lib/full-course-access";

const FULL_COURSE_PRICE = 479;

export const Route = createFileRoute("/products/full-course")({
  head: () => ({
    meta: [
      { title: "Full BBE Course — Unlock Full Access" },
      {
        name: "description",
        content:
          "The complete WU BBE entrance exam preparation system: 2000+ tasks, full mock exams, AI explanations, and direct human support.",
      },
      { property: "og:title", content: "Full BBE Course — Unlock Full Access" },
      {
        property: "og:description",
        content:
          "2000+ practice tasks, mock exams, AI assistance, and direct support built for the real WU BBE exam.",
      },
      { property: "og:image", content: fullAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FullCourseProduct,
});

const ORANGE = "#C2643A";

const fullStats = [
  { value: "3", label: "Subjects" },
  { value: "2000+", label: "Tasks" },
  { value: "7", label: "Mock Exams", sub: "All features" },
];

const features = [
  {
    icon: BookOpen,
    title: "3 Subjects",
    text: "Math, English, and Business & Economics — fully covered.",
    accent: false,
  },
  {
    icon: ListChecks,
    title: "2000+ Practice Tasks",
    text: "A constantly growing question bank across every chapter.",
    accent: false,
  },
  {
    icon: Headphones,
    title: "Direct Support",
    text: "Real answers from real people, not a bot ticket queue.",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "AI Assistance",
    text: "Personalized explanations, on demand, for every question.",
    accent: true,
  },
  {
    icon: ClipboardCheck,
    title: "Mock Exams",
    text: "Full-length simulations under real exam conditions and timing.",
    accent: true,
  },
  {
    icon: Gem,
    title: "Special Features",
    text: "Exclusive tools you won't find in any other prep course.",
    accent: true,
  },
];

const failureReasons = [
  "They memorize isolated facts instead of understanding how concepts connect, so a familiar idea phrased slightly differently on exam day throws them off completely.",
  "They practice with question formats that do not match the real exam's structure, so the actual test format feels unfamiliar under pressure.",
  "They never train against the exam's true difficulty: confident, logical sounding statements that are actually false, so they get fooled by exactly the kind of trap the real exam is built around.",
  "They run out of time, because they have never practiced under real timing constraints across all three subjects.",
  "They study alone, with no way to check whether their understanding is actually correct until it is too late.",
];

const fullCourseFaqs = [
  {
    question: "What is included in the Full Course?",
    answer:
      "The Full Course unlocks 100% of the platform. You get full access to the 1,200+ task database across all subjects, step-by-step logic breakdowns, the real-time AI Study Companion, Mock Exams, the automated text highlighter tool, all speed simulators, and the digital answer sheet simulator.",
  },
  {
    question: "Is this a subscription or a one-time payment?",
    answer:
      "It is a strict one-time payment of €479. There are no monthly fees, no hidden subscriptions, and no upsells. You pay once and get full access until the entire 2026/2027 exam cycle is over.",
  },
  {
    question: "How does the AI Study Companion work?",
    answer:
      "When you request a breakdown for any task, the system instantly scans the official exam literature. It returns a direct explanation written in simple language and applies an animated neon highlight to pin the exact proof sentence inside the source text viewport.",
  },
  {
    question: "Are the questions identical to the real WU Vienna entrance exam?",
    answer:
      "Yes, our database of 1,200+ cases is engineered strictly based on the institutional structure, negative scoring logic, and deceptive True/False phrasing style used by the examiners over the last years.",
  },
  {
    question: "What if the university updates the official exam literature?",
    answer:
      "All updates are fully covered. Our team monitors the university portal daily. If any changes are made to the official chapters, mathematics requirements, or exam literature, the platform database is updated immediately at zero additional cost to you.",
  },
  {
    question: "Does the platform cover all three exam subjects equally?",
    answer:
      "Yes. The course provides 100% comprehensive training for all three blocks. It contains dedicated, heavy question databases and specialized toolkits for Business/Economics contexts, Mathematics functions/graphs, and English Proficiency logic.",
  },
  {
    question: "Why is the Answer Sheet Simulator included?",
    answer:
      "Over 15% of applicants fail simply because they misalign text rows or panic during the final minutes of transferring answers onto the physical paper. This simulator which you can find in every Mock Exam is a precise digital copy of the official optical sheet, training your muscle memory to avoid costly technical mistakes under stress.",
  },
  {
    question: "How does the platform handle the negative scoring system?",
    answer:
      "The platform replicates the exact negative point system used by the university, where incorrect answers deduct your score. The system automatically tracks this, teaching you the precise risk management of when to answer and when it is safer to skip a task.",
  },
  {
    question: "Can I study using my mobile phone?",
    answer:
      "Yes. The entire software is fully cloud-optimized and ultra-responsive. You can train your speed drills, review flashcards, solve tasks, and read AI explanations seamlessly on any smartphone, tablet, laptop, or desktop computer.",
  },
  {
    question: "Can two students share one account?",
    answer:
      "No. Every account is strictly personal and tied to your individual analytics dashboard, progress tracking, and achievements. Simultaneous logins from different devices will automatically trigger our security system and lock the account.",
  },
  {
    question: "How much time per day should I spend to guarantee success?",
    answer:
      "No course or software can ever guarantee your admission, success depends entirely on your personal discipline. However, data shows that students who train on our platform for 45 to 60 minutes daily achieve a success rate of 41.3%, compared to the general average of 8%.",
  },
  {
    question: "Are there full-length mock exams included?",
    answer:
      "Yes. The course unlocks complete, realistic 120-minute mock simulation tests that mix tasks from all three subjects under severe time limits, mimicking the exact time-pressure atmosphere of the real exam hall.",
  },
  {
    question: "What if I get completely stuck on a complex task?",
    answer:
      "You are never left without help. Your AI Study Companion is available 24/7 inside every question view to instantly break down complex equations, logic chains, or vocabulary rules into simple, human-friendly steps with 0-ms delay.",
  },
  {
    question: "Can my parents pay for my course access?",
    answer:
      "Yes. Our checkout utilizes globally secure payment gateways supporting all major credit cards, Apple Pay, Google Pay, and standard European bank transfers, allowing a secure process.",
  },
  {
    question: "How long does it take to get access after the payment?",
    answer:
      "The entire activation process is fully automated. The exact millisecond your payment is processed, your platform account is created, the database unlocks, and you can start your training session within 30 seconds.",
  },
];

function Star({ fill }: { fill: "full" | "almost" | "empty" }) {
  const id = `fs-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset="87%" stopColor={ORANGE} />
          <stop offset="87%" stopColor="transparent" />
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

function CtaButton({
  onClick,
  label = "Buy course",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background sm:w-auto"
      style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
    >
      {label} →
    </button>
  );
}

function FullCourseProduct() {
  const { ready, signedIn, ownsFullCourse } = useFullCourseAccess();
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
          <Link
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </Link>
        }
      />

      <main className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full BBE Course
          </h1>

          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
            <img
              src={fullAsset.url}
              alt="Full BBE Course"
              className="w-full object-contain"
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
            <span className="font-display text-lg font-semibold text-foreground">4.87</span>
            <span className="text-sm text-muted-foreground">114 Reviews</span>
          </div>

          {/* Stats */}
          <div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-border/60 text-center">
              {fullStats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-foreground">{s.value}</span>
                  <span className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</span>
                  {s.sub && (
                    <span className="mt-0.5 text-[10px] font-medium text-muted-foreground/60">
                      {s.sub}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-taupe">
                {ownsFullCourse ? "Your access" : "One-time payment"}
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                {ownsFullCourse ? (
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
            ) : ownsFullCourse ? (
              <Link
                to={FULL_COURSE_HREF}
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 sm:w-auto"
                style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
              >
                Go to course →
              </Link>
            ) : (
              <CtaButton onClick={openBuy} label="Buy course" />
            )}
          </div>

          {/* Section 1 — Feature grid */}
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
                        backgroundColor: `${ORANGE}18`,
                        boxShadow: `inset 0 0 0 1px ${ORANGE}40`,
                      }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: ORANGE }} />
                      {f.accent && (
                        <span
                          className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full text-white"
                          style={{ backgroundColor: ORANGE }}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      )}
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

          {/* Persuasive section */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Why most applicants fail, and why this course is built to fix that
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Every year, most applicants walk into the WU BBE entrance exam and walk out
              disappointed. Not because they did not study, but because they studied the wrong way.
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold text-foreground">
              The most common reasons students fail:
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
              There is a pattern behind who gets into WU's Business &amp; Economics program. It is
              rarely about who worked hardest, and almost always about who prepared the smart way,
              early enough for it to actually stick. This course exists to close that gap.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most applicants do not fail because they did not study. They fail because they trained
              on the wrong kind of questions, ones that do not match how the real exam actually
              tries to trip you up. The WU BBE entrance exam is not built to test whether you
              memorized facts, it is built to catch people who think they understand a concept but
              have not actually internalized it. That is exactly the gap this course is designed to
              close, question by question.
            </p>

            <blockquote className="relative my-8 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6">
              <Quote className="absolute left-4 top-4 h-5 w-5 text-primary/40" aria-hidden="true" />
              <p className="font-display text-lg font-semibold italic leading-relaxed text-foreground">
                "The WU BBE entrance exam is not built to test whether you memorized facts. It is
                built to catch people who think they understand a concept but have not actually
                internalized it."
              </p>
            </blockquote>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every practice task here is built to mirror that exact logic: confident, plausible
              sounding statements that are quietly false, the same trap structure you will meet on
              exam day. By the time you are sitting in the real exam room, nothing about the format
              catches you off guard, because you have already trained against it hundreds of times.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              One more thing we noticed: the applicants who got the most out of preparation were not
              the ones who passively worked through tasks. They were the ones who asked questions
              when something did not click, and pushed until they actually understood why. That is
              why direct support is not an afterthought here. Every question you ask gets a real,
              detailed answer, because a half understood concept on exam day is the same as not
              knowing it at all.
            </p>

            <h4 className="mt-8 font-display text-lg font-semibold text-foreground">
              What you will train against:
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  The exact True/False logic and partial points system used by university examiners.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Plausible sounding statements that are quietly false, the trap structure that
                  separates real understanding from surface familiarity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  The discipline of asking questions when something does not click, because a half
                  understood concept is the same as not knowing it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  A living system that grows with you: a growing question bank, real explanations,
                  timed simulations, and a community of people going through the same thing.
                </span>
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              This course is not a repackaged classroom lecture series. It is a living system: a
              growing question bank, real explanations, timed simulations, and a community of people
              going through the exact same thing you are. Put in the work, use the tools, and give
              yourself the preparation that actually matches what the exam demands.
            </p>

            <div
              className="mt-10 rounded-2xl border p-6 text-center"
              style={{
                borderColor: `${ORANGE}55`,
                backgroundColor: `${ORANGE}10`,
              }}
            >
              <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                Stop guessing. Start training the way the exam actually tests you.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                One-time payment · €{FULL_COURSE_PRICE} · Instant full access
              </p>
            </div>
          </section>

          {/* Section 3 — Time investment */}
          <section className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl"
                style={{ backgroundColor: `${ORANGE}18`, boxShadow: `inset 0 0 0 1px ${ORANGE}40` }}
              >
                <Clock className="h-7 w-7" style={{ color: ORANGE }} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  How much time it takes
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Start preparing early, and even one relaxed hour a day is enough to reach the top.
                  No cramming. No all-nighters. Just steady, focused progress that compounds into
                  real confidence by exam day.
                </p>
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-3">
                <span className="font-display text-3xl font-bold" style={{ color: ORANGE }}>
                  1
                </span>
                <span className="text-sm text-muted-foreground">
                  hour / day on lazy days when you start in advance
                </span>
              </div>
            </div>
          </section>

          <CompareTable
            highlight="full"
            heading="How the Full Course stacks up"
            subheading="Everything unlocked, side by side with the lighter options."
          />

          {/* FAQ */}
          <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-taupe">
                Questions & Answers
              </p>
              <h2 className="mt-5 text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently asked questions
              </h2>

              <Accordion type="single" collapsible className="mt-8">
                {fullCourseFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`full-faq-${index}`}
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

      <PaymentModal
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        productName="Full BBE Course"
        priceEuros={FULL_COURSE_PRICE}
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
