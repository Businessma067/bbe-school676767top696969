import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuthModal } from "@/components/AuthModal";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import { SeoFaq, buildFaqPageJsonLd } from "@/components/SeoFaq";
import { useAuthGate } from "@/hooks/use-auth-gate";
import { BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { MOCK_EXAM_DEMO_SECTION_COUNTS } from "@/lib/mock-exam-demo-content";
import { getFreeDemoMockExam, type MockExamSummary } from "@/lib/mock-exams";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import { fetchMockAttempts, type MockAttempt } from "@/lib/user-progress";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  PlayCircle,
  Timer,
  Trophy,
} from "lucide-react";
import examHallAsset from "@/assets/exam-hall-real.png.asset.json";

const DEMO = getFreeDemoMockExam();
const DEMO_HOURS = DEMO.durationMinutes / 60;

const demoMockFaqs = [
  {
    question: "Is the BBE demo mock exam really free?",
    answer:
      "Yes. You need a free BBE School account (no credit card) so we can save your attempt, score, and review. Starting the exam itself costs nothing.",
  },
  {
    question: "How close is this to the real WU Vienna BBE entrance exam?",
    answer:
      "It mirrors the real format: Economics & Business, English, and Mathematics under a 2-hour time limit, with partial-credit (wi2) scoring like the official Teilpunktesystem. The most recent WU exam had 34 questions; this demo uses the same subject mix and pacing pressure.",
  },
  {
    question: "How many questions are in the free demo mock?",
    answer:
      "34 questions for about 159 points: 10 Economics, 11 English, and 13 Math.",
  },
  {
    question: "Do I have to use the timer?",
    answer:
      "No. You can start with a 2-hour timer (auto-submit at zero) or without a timer if you want to focus on accuracy first. Timed mode is the better diagnostic of exam-day pacing.",
  },
  {
    question: "Will I see explanations after I finish?",
    answer:
      "Yes. When you submit, you get your score and can open a full review of each task, including worked solutions where available.",
  },
  {
    question: "What should I do after the demo mock?",
    answer:
      "Use your weak sections to guide practice. Start with the free Demo Practice course for Economics, Math, and English, then unlock full mock exams and the Full Course when you are ready for volume.",
  },
];

const pageTitle = "Free BBE Mock Exam Online | WU Vienna Entrance Exam Practice | BBE School";
const pageDescription =
  "Take a free full-length WU BBE mock exam online: 34 questions, 2 hours, wi2 scoring. Free account, no credit card. Start your diagnostic now.";

export const Route = createFileRoute("/demo-mock")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqPageJsonLd(demoMockFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description: pageDescription,
          url: "https://bbe-school.com/demo-mock",
          isPartOf: {
            "@type": "WebSite",
            name: "BBE School",
            url: "https://bbe-school.com",
          },
          about: {
            "@type": "Thing",
            name: "WU Vienna BBE entrance exam",
          },
        }),
      },
    ],
    links: [
      ...hreflangLinks("/demo-mock"),
      { rel: "canonical", href: "https://bbe-school.com/demo-mock" },
    ],
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "BBE mock exam, free BBE exam practice, WU Vienna entrance exam, BBE entrance exam online, WU BBE practice test",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bbe-school.com/demo-mock" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "robots", content: "index, follow" },
      ...socialImageMetaForPath("/demo-mock"),
    ],
  }),
  component: DemoMockPage,
});

const benefits = [
  {
    title: "Real exam structure",
    body: "Economics, English, and Math in one sitting, the same subject order and time pressure as exam day.",
  },
  {
    title: "Official-style scoring",
    body: "Partial-credit wi2 scoring mirrors the Teilpunktesystem, so your percentage means something.",
  },
  {
    title: "Hard diagnostic, not a toy",
    body: "Built from high-difficulty practice banks so you see where your score actually leaks.",
  },
  {
    title: "Review with explanations",
    body: "After you submit, reopen every task, check your judgments, and study the solutions.",
  },
];

const steps = [
  {
    n: "1",
    title: "Create a free account",
    body: "Email signup or Google: no payment details. We only need an account to save your attempt.",
  },
  {
    n: "2",
    title: "Choose timer and answer mode",
    body: "Run it timed (2 hours) for a true diagnostic, or untimed. Use the digital answer sheet or click-through mode.",
  },
  {
    n: "3",
    title: "Finish, score, and review",
    body: "See points earned vs total, then open the full review to target weak topics before you buy anything.",
  },
];

export function DemoMockPage() {
  const navigate = useNavigate();
  const authGate = useAuthGate();
  const [startOpen, setStartOpen] = useState(false);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [bestAttempt, setBestAttempt] = useState<MockAttempt | null>(null);
  const [completed, setCompleted] = useState<MockAttempt[]>([]);
  const [attemptsReady, setAttemptsReady] = useState(false);
  const [inProgress, setInProgress] = useState<{ timed: boolean; answerSheet: boolean } | null>(
    null,
  );
  /** After guest signs in from a Start/Resume click, open the start dialog. */
  const [pendingStart, setPendingStart] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const history = await fetchMockAttempts();
      if (cancelled) return;
      const mine = history.filter((a) => a.exam_id === DEMO.id);
      setCompleted(mine);
      let best: MockAttempt | null = null;
      for (const a of mine) {
        if (!best || a.points_earned > best.points_earned) best = a;
      }
      setBestAttempt(best);

      const s = loadSession(DEMO.id);
      setInProgress(s ? { timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) } : null);
      setAttemptsReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [authGate.signedIn]);

  useEffect(() => {
    if (!authGate.signedIn || !pendingStart) return;
    setPendingStart(false);
    setWithAnswerSheet(true);
    setStartOpen(true);
  }, [authGate.signedIn, pendingStart]);

  const requireAuthThen = (action: () => void) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      return;
    }
    action();
  };

  const openStart = () => {
    requireAuthThen(() => {
      setWithAnswerSheet(true);
      setStartOpen(true);
    });
  };

  const start = (timed: boolean) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      setStartOpen(false);
      return;
    }
    clearSession(DEMO.id);
    setInProgress(null);
    setStartOpen(false);
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: DEMO.id },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = () => {
    requireAuthThen(() => {
      if (!inProgress) return;
      navigate({
        to: "/mock-exams/$examId/take",
        params: { examId: DEMO.id },
        search: { timed: inProgress.timed, answerSheet: inProgress.answerSheet },
      });
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        compact
        maxWidthClassName="max-w-6xl"
        actions={
          <LocalizedLink
            to={BBE_PRACTICE_ROUTES.demo}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Free practice →
          </LocalizedLink>
        }
      />

      <main>
        {/* Hero — conversion-first for Ads */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url(${examHallAsset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/85 via-background/92 to-background" aria-hidden />

          <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-caramel-deep">
                  Free WU BBE diagnostic
                </p>
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  Free BBE mock exam online
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A full-length hard diagnostic of the WU Vienna BBE entrance exam, same structure,
                  same 2-hour window, same partial-credit scoring. Free with an account; no credit
                  card.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-foreground">
                  {[
                    "34 questions · 159 points · 2 hours",
                    "Economics, English, and Mathematics in one sitting",
                    "Timed or untimed · digital answer sheet optional",
                    "Score + full review after you submit",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-caramel-deep" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ExamCard
                exam={DEMO}
                best={bestAttempt}
                inProgress={inProgress}
                onStart={openStart}
                onResume={resume}
                featured
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              {inProgress ? (
                <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={resume}
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 text-lg font-semibold text-background shadow-lg transition-all hover:opacity-90 sm:text-xl"
                  >
                    <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                    Resume your demo exam
                  </button>
                  <button
                    type="button"
                    onClick={openStart}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-5 text-base font-semibold transition-all hover:bg-secondary"
                  >
                    Start over…
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openStart}
                  className="inline-flex w-full max-w-lg items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 text-lg font-semibold text-background shadow-lg transition-all hover:opacity-90 sm:text-xl"
                >
                  <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                  {bestAttempt ? "Retake free demo exam" : "Start free demo exam"}
                </button>
              )}
              <LocalizedLink
                to={BBE_PRACTICE_ROUTES.demo}
                className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-caramel-deep underline-offset-4 hover:underline"
              >
                Or try subject practice first
              </LocalizedLink>
              <p className="text-xs text-muted-foreground">
                Free account required to save progress, no credit card, no purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Format facts */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Questions", value: String(DEMO.questionCount) },
              { label: "Time limit", value: `${DEMO_HOURS} h` },
              { label: "Total points", value: String(DEMO.pointsTotal) },
              { label: "Price", value: "Free" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background px-6 py-8 text-center">
                <div className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's inside */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              What&apos;s inside the free demo mock
            </h2>
            <p className="mt-3 text-muted-foreground">
              One sitting that mirrors how the WU BBE entrance exam is built, three sections,
              partial credit, and exam-day pacing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                subject: "Economics & Business",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.economics,
                detail:
                  "True/False statement clusters under shared stems, definitions, markets, and accounting traps.",
              },
              {
                subject: "English",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.english,
                detail:
                  "Reading, vocabulary, and grammar tasks in the same mix style as the written exam.",
              },
              {
                subject: "Mathematics",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.math,
                detail:
                  "School-leaving depth: algebra, functions, probability, and calculation under time pressure.",
              },
            ].map((block) => (
              <div key={block.subject} className="border-t-2 border-caramel-deep pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-caramel-deep">
                  {block.count} questions
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{block.subject}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why take it */}
        <section className="border-y border-border bg-secondary/25">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Why take this diagnostic before you buy a course
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ads and course pages can promise anything. Sitting a hard mock tells you, in points,
                where you actually stand.
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-caramel-deep" aria-hidden />
                  <div>
                    <h3 className="font-display text-base font-semibold">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            How the free demo exam works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="font-display text-3xl font-bold text-caramel-deep/80">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <button
              type="button"
              onClick={openStart}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              {inProgress ? "Resume exam" : bestAttempt ? "Retake demo exam" : "Start free demo exam"}
            </button>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="border-t border-border bg-secondary/20">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Your demo results
            </h2>
            {!authGate.ready || !attemptsReady ? (
              <p className="text-sm text-muted-foreground">Loading your results…</p>
            ) : !authGate.signedIn ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
                <p className="text-sm text-muted-foreground">
                  Sign in to start the demo mock and see your results here.
                </p>
                <button
                  type="button"
                  onClick={() => authGate.setAuthOpen(true)}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                >
                  Sign in to continue
                </button>
              </div>
            ) : completed.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
                <p className="text-sm text-muted-foreground">
                  No demo attempts yet. Finish the mock and your score will show up here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {completed.map((c) => {
                  const pct = Math.round((c.points_earned / c.points_total) * 100);
                  return (
                    <div
                      key={c.id}
                      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h3 className="font-display text-base font-semibold">{c.exam_title}</h3>
                        <p className="mt-1 flex items-center gap-2 text-xs text-taupe">
                          <Clock className="h-3.5 w-3.5" />
                          {new Date(c.completed_at).toLocaleDateString(undefined, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="text-right">
                          <div className="font-display text-lg font-bold text-caramel-deep">
                            {c.points_earned.toFixed(1)}/{c.points_total}
                          </div>
                          <div className="text-xs text-taupe">{pct}%</div>
                        </div>
                        <Link
                          to="/mock-exams/$examId/review"
                          params={{ examId: c.exam_id }}
                          className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold transition-all hover:bg-secondary/70"
                        >
                          Open
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Next steps + FAQ */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                After the mock
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Use the diagnostic as a baseline, then practise the sections that cost you points.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <LocalizedLink
                    to={BBE_PRACTICE_ROUTES.demo}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-caramel-deep/40 hover:shadow-sm"
                  >
                    <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-caramel-deep" aria-hidden />
                    <span>
                      <span className="font-display font-semibold group-hover:text-caramel-deep">
                        Free Demo Practice
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        50+ baseline cases in Economics, Math, and English with explanations.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink
                    to="/bbe-entrance-exam"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-caramel-deep/40 hover:shadow-sm"
                  >
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-caramel-deep" aria-hidden />
                    <span>
                      <span className="font-display font-semibold group-hover:text-caramel-deep">
                        BBE entrance exam guide
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Format, topics, scoring, and how the WU selection procedure works.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink
                    to="/products"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-caramel-deep/40 hover:shadow-sm"
                  >
                    <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-caramel-deep" aria-hidden />
                    <span>
                      <span className="font-display font-semibold group-hover:text-caramel-deep">
                        Full course &amp; mock catalog
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Unlock volume practice and additional timed mocks when you are ready.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Frequently asked questions
              </h2>
              <SeoFaq items={demoMockFaqs} className="mt-6" defaultOpenIndex={0} />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border bg-foreground text-background">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Ready for your baseline score?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-background/75">
                Start the free BBE mock exam: 34 questions, 2 hours, full review after submit.
              </p>
            </div>
            <button
              type="button"
              onClick={openStart}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              {inProgress ? "Resume exam" : "Start free demo exam"}
            </button>
          </div>
        </section>
      </main>

      <Dialog open={startOpen} onOpenChange={setStartOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{DEMO.title}</DialogTitle>
            <DialogDescription>
              Full-length simulation, {DEMO.pointsTotal} points total.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Economics</span>
              <span className="font-semibold">
                {MOCK_EXAM_DEMO_SECTION_COUNTS.economics} questions
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">English</span>
              <span className="font-semibold">
                {MOCK_EXAM_DEMO_SECTION_COUNTS.english} questions
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Math</span>
              <span className="font-semibold">{MOCK_EXAM_DEMO_SECTION_COUNTS.math} questions</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{DEMO.questionCount} questions</span>
            </div>
          </div>

          <p className="text-xs text-taupe">
            If you choose the timed option, the exam is limited to 2 hours and submits automatically
            when the timer reaches zero.
          </p>

          <ExamStartAnswerMode withAnswerSheet={withAnswerSheet} onChange={setWithAnswerSheet} />

          <div className="mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => start(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              <Timer className="h-4 w-4" />
              Start with Timer (2:00:00)
            </button>
            <button
              type="button"
              onClick={() => start(false)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
            >
              Start without Timer
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <AuthModal
        open={authGate.authOpen}
        onOpenChange={(open) => {
          authGate.setAuthOpen(open);
          if (!open) setPendingStart(false);
        }}
        defaultMode="signup"
      />
    </div>
  );
}

function ExamCard({
  exam,
  best,
  inProgress,
  onStart,
  onResume,
  featured = false,
}: {
  exam: MockExamSummary;
  best: MockAttempt | null;
  inProgress: { timed: boolean; answerSheet: boolean } | null;
  onStart: () => void;
  onResume: () => void;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "flex flex-col rounded-2xl border border-border bg-card/95 p-6 shadow-lg backdrop-blur-sm"
          : "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
      }
    >
      <div className="mb-3 flex items-center gap-2">
        <FileText className="h-4 w-4 text-caramel-deep" />
        <h2 className="font-display text-lg font-semibold">{exam.title}</h2>
      </div>
      <p className="flex-1 text-sm text-muted-foreground">
        {exam.questionCount} questions · {exam.durationMinutes / 60} hours · {exam.pointsTotal}{" "}
        points
        {exam.contentRev ? (
          <span className="mt-1 block font-mono text-[10px] tracking-wide text-muted-foreground/70">
            rev {exam.contentRev}
          </span>
        ) : null}
      </p>
      {best && (
        <p className="mt-2 text-xs font-semibold text-caramel-deep">
          Completed · best {best.points_earned.toFixed(1)}/{best.points_total}
        </p>
      )}
      {inProgress && (
        <p className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          In progress: you can resume where you left off
        </p>
      )}
      {inProgress ? (
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={onResume}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            <PlayCircle className="h-4 w-4" />
            Resume Exam
          </button>
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
          >
            Start over…
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onStart}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
        >
          <PlayCircle className="h-4 w-4" />
          {best ? "Retake Exam" : "Start Exam"}
        </button>
      )}
    </div>
  );
}
