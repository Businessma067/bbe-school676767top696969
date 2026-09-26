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
      "Yes. Make a free BBE School account (no card) so we can keep your attempt and review. Sitting the exam costs nothing.",
  },
  {
    question: "How close is this to the real WU Vienna BBE entrance exam?",
    answer:
      "Same three blocks — Economics & Business, English, Math — and a two-hour clock. Scoring uses the same partial-credit idea as WU’s Teilpunktesystem (wi2). Recent WU papers ran 34 questions; this demo matches that mix and the rush of exam day.",
  },
  {
    question: "How many questions are in the free demo mock?",
    answer: "34 questions, about 159 points: 10 Economics, 11 English, 13 Math.",
  },
  {
    question: "Do I have to use the timer?",
    answer:
      "No. Start with a two-hour timer (it submits at zero) or leave the clock off if you want to work carefully first. Timed is closer to how the real sitting feels.",
  },
  {
    question: "Will I see explanations after I finish?",
    answer:
      "Yes. After you submit you get a score, then you can open every task again with the worked solutions.",
  },
  {
    question: "What should I do after the demo mock?",
    answer:
      "Practise the sections that hurt. Free Demo Practice covers Economics, Math, and English. When you want more timed papers and the full bank, the Full Course and mock catalog are there.",
  },
];

const pageTitle = "Free BBE Mock Exam Online | WU Vienna Entrance Exam Practice | BBE School";
const pageDescription =
  "Free full-length WU BBE mock online: 34 questions, 2 hours, partial-credit scoring. Free account, no credit card — see where you stand.";
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
    title: "One sitting, three subjects",
    body: "Economics, English, and Math back-to-back — the same grind you get on exam day.",
  },
  {
    title: "Scoring that matches WU",
    body: "Partial credit (wi2), like the official Teilpunktesystem. Your % is not a vanity number.",
  },
  {
    title: "Actually hard",
    body: "Tasks come from the tough end of our banks. Soft mocks hide weak spots; this one does not.",
  },
  {
    title: "Full review afterwards",
    body: "Open every question again, see what you marked, and work through the solutions.",
  },
];

const steps = [
  {
    n: "1",
    title: "Make a free account",
    body: "Email or Google. No card. We need a login so your attempt does not vanish.",
  },
  {
    n: "2",
    title: "Pick timer and how you answer",
    body: "Two hours on the clock, or no clock. Digital answer sheet if you want transfer practice — or click answers as you go.",
  },
  {
    n: "3",
    title: "Submit, see the score, dig in",
    body: "Points earned vs total, then a full review. Figure out what to practise before you spend on a course.",
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

          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8 lg:py-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-caramel-deep">
                Free WU BBE practice exam
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Free BBE mock exam online
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sit a full WU Vienna BBE-style paper for free: three subjects, two hours, partial
                credit. Account only — no card, no paywall to start.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {[
                  "34 questions · 159 points · 2 hours",
                  "Economics, English, and Math in one go",
                  "With or without a timer · answer sheet optional",
                  "Score and full review when you submit",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-caramel-deep" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {inProgress ? (
                  <>
                    <button
                      type="button"
                      onClick={resume}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                    >
                      <PlayCircle className="h-4 w-4" />
                      Resume your demo exam
                    </button>
                    <button
                      type="button"
                      onClick={openStart}
                      className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:bg-secondary"
                    >
                      Start over…
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={openStart}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                  >
                    <PlayCircle className="h-4 w-4" />
                    {bestAttempt ? "Retake free demo exam" : "Start free demo exam"}
                  </button>
                )}
                <LocalizedLink
                  to={BBE_PRACTICE_ROUTES.demo}
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-caramel-deep underline-offset-4 hover:underline"
                >
                  Or warm up with subject practice
                </LocalizedLink>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Free account to save your attempt — still no card, still no purchase.
              </p>
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
              What&apos;s in this free mock
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three sections, partial credit, and the same kind of clock stress as the real WU BBE
              sitting.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                subject: "Economics & Business",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.economics,
                detail:
                  "True/false packs under one stem — markets, definitions, and balance-sheet traps that trip people up.",
              },
              {
                subject: "English",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.english,
                detail:
                  "Reading, vocab, and grammar in the same mix you get on the written paper.",
              },
              {
                subject: "Mathematics",
                count: MOCK_EXAM_DEMO_SECTION_COUNTS.math,
                detail:
                  "Algebra, functions, probability — Matura depth, with the clock running.",
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
                Why sit this before you buy a course
              </h2>
              <p className="mt-3 text-muted-foreground">
                Landing pages talk. A hard mock answers — in points — what you can actually do under
                time.
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
            How it works
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
                  Sign in
                </button>
              </div>
            ) : completed.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
                <p className="text-sm text-muted-foreground">
                  Nothing here yet. Finish the mock and your score lands on this page.
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
                Treat the score as a starting line. Drill the bits that cost you points.
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
                        50+ cases in Economics, Math, and English — with explanations.
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
                        Format, topics, scoring, and how WU picks seats.
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
                        Full course &amp; more mocks
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Bigger banks and extra timed papers when you want more reps.
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
                Want a real score under the clock?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-background/75">
                Free BBE mock — 34 questions, two hours, review after you submit.
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
              Full paper, {DEMO.pointsTotal} points in total.
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
            Timed mode: two hours on the clock, then automatic submit at zero.
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
          In progress — pick up where you stopped
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
