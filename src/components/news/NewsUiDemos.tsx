import { Suspense, lazy, type CSSProperties, type ReactNode } from "react";
import { Check, ChevronLeft, Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  FlashcardsModeArt,
  MatchingModeArt,
  TutorModeArt,
} from "@/components/study-modes/ModeArt";
import { cn } from "@/lib/utils";

const MockBuilderSimulator = lazy(() => import("@/components/MockBuilderSimulator"));
const PracticeSimulator = lazy(() => import("@/components/PracticeSimulator"));

type DemoProps = {
  caption: string;
};

const FLASH_ACCENT = "#c8763a";
const MATH_ACCENT = "#10b981";

function DemoShell({
  url,
  caption,
  children,
  className,
  stageClassName,
}: {
  url: string;
  caption: string;
  children: ReactNode;
  className?: string;
  /** Override the default compact aspect stage (used for live product simulators). */
  stageClassName?: string;
}) {
  return (
    <figure className={cn("my-8 overflow-hidden rounded-lg border border-border bg-card", className)}>
      <div className="border-b border-border bg-secondary/50 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </span>
          <div className="min-w-0 flex-1 truncate rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
            bbe-school.com{url}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "news-ui-demo relative overflow-hidden bg-background",
          stageClassName ??
            "aspect-[16/11] px-3 py-3 sm:aspect-[16/10] sm:px-5 sm:py-4",
        )}
      >
        {children}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}

function DemoFallback() {
  return (
    <div className="flex h-[320px] items-center justify-center text-sm text-muted-foreground sm:h-[420px]">
      Loading product preview…
    </div>
  );
}

/** Exact same robot face as TutorExamSubjectView. */
function TutorFace({ mood }: { mood: "idle" | "happy" | "sad" }) {
  return (
    <div
      className={
        "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm " +
        (mood === "happy"
          ? "border-emerald-300 bg-emerald-50"
          : mood === "sad"
            ? "border-red-300 bg-red-50"
            : "border-border bg-card")
      }
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-foreground/80">
        <rect x="5" y="9" width="22" height="16" rx="5" fill="currentColor" opacity="0.12" />
        <rect
          x="5"
          y="9"
          width="22"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path
            d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : mood === "sad" ? (
          <path
            d="M12.5 22.5c1.2-1.2 5.8-1.2 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 21.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line x1="16" y1="7" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

/** Live Custom Mock Builder simulator — same UI students use on the product page. */
function DemoMockBuilder({ caption }: DemoProps) {
  return (
    <DemoShell
      url="/products/custom-mock-builder"
      caption={caption}
      stageClassName="bg-background p-3 sm:p-4"
    >
      <Suspense fallback={<DemoFallback />}>
        <MockBuilderSimulator />
      </Suspense>
    </DemoShell>
  );
}

/** Live practice simulator — same CaseCard / True column as demo-practice. */
function DemoPractice({
  caption,
  subject,
  taskIndex,
  url,
}: DemoProps & {
  subject: "economics" | "math" | "english";
  taskIndex: number;
  url: string;
}) {
  return (
    <DemoShell url={url} caption={caption} stageClassName="bg-background p-3 sm:p-4">
      <Suspense fallback={<DemoFallback />}>
        <PracticeSimulator subject={subject} taskIndex={taskIndex} />
      </Suspense>
    </DemoShell>
  );
}

/** FlashcardSubjectView chrome + real flashcard-* CSS flip loop. */
function DemoFlashcards({
  caption,
  url = "/flashcards/economics",
  subjectLabel = "Flashcards · Economics",
  topic = "Markets",
  accent = FLASH_ACCENT,
  term = "Opportunity cost",
  meaning = "The (financial) benefit of the next best alternative that is given up in order to choose or achieve something else.",
  frontLabel = "Term",
  backLabel = "Meaning",
}: DemoProps & {
  url?: string;
  subjectLabel?: string;
  topic?: string;
  accent?: string;
  term?: string;
  meaning?: string;
  frontLabel?: string;
  backLabel?: string;
}) {
  return (
    <DemoShell url={url} caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center">
        <div className="news-demo-fade-in mb-3 flex items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Study tools
            </p>
            <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
              {subjectLabel}
            </h3>
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: accent }}
          >
            {topic}
          </span>
        </div>

        <div className="news-demo-flash-stage">
          <div className="flashcard-flip w-full">
            <div className="flashcard-inner news-demo-flash-inner">
              <div className="flashcard-face flashcard-front rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  {frontLabel}
                </div>
                <div className="flex h-full min-h-[160px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[190px]">
                  <span className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {term}
                  </span>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Tap to flip · swipe to sort
                </p>
              </div>
              <div className="flashcard-face flashcard-back rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  {backLabel}
                </div>
                <div className="flex h-full min-h-[160px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[190px]">
                  <span className="text-base leading-relaxed text-foreground sm:text-lg">
                    {meaning}
                  </span>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Tap to flip · press-and-drag to sort
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="news-demo-fade-in mt-4 flex flex-wrap items-center justify-between gap-2"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-sm font-semibold text-red-700 sm:flex-none">
            <ThumbsDown className="h-4 w-4" />
            Don&apos;t know
          </span>
          <span
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: accent }}
          >
            Flip
          </span>
          <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-sm font-semibold text-emerald-700 sm:flex-none">
            <ThumbsUp className="h-4 w-4" />
            Know
          </span>
        </div>
        <div
          className="news-demo-fade-in mt-2 flex items-center justify-between gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold">
            <ChevronLeft className="h-3.5 w-3.5" />
            Prev
          </span>
          <span className="rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold">
            Skip / next (weighted)
          </span>
        </div>
      </div>
    </DemoShell>
  );
}

/** MatchingSubjectView column cards — selected accent ring → emerald lock-in. */
function DemoMatching({
  caption,
  url = "/matching/economics",
  subjectLabel = "Matching · Economics",
  accent = FLASH_ACCENT,
  termsLabel = "Terms",
  meaningsLabel = "Meanings",
  pairs = [
    { term: "Sunk cost", meaning: "Already incurred cost" },
    { term: "Ceteris paribus", meaning: "Hold other factors constant" },
    { term: "Liquidity", meaning: "Ease of converting to cash" },
  ],
}: DemoProps & {
  url?: string;
  subjectLabel?: string;
  accent?: string;
  termsLabel?: string;
  meaningsLabel?: string;
  pairs?: Array<{ term: string; meaning: string }>;
}) {
  const rows = pairs.map((pair, i) => ({
    ...pair,
    delay: `${0.1 + i * 0.75}s`,
  }));

  return (
    <DemoShell url={url} caption={caption}>
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
        <div className="news-demo-fade-in mb-3 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Study tools
            </p>
            <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
              {subjectLabel}
            </h3>
          </div>
          <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
            Round 1 · Matched 0/{rows.length}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-0 sm:gap-x-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
            {termsLabel}
          </p>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
            {meaningsLabel}
          </p>
          {rows.map((pair, i) => (
            <div key={pair.term} className="contents">
              <div
                className="news-demo-match-live mb-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-left text-sm"
                style={
                  {
                    animationDelay: pair.delay,
                    ["--news-demo-accent" as string]: accent,
                  } as CSSProperties
                }
              >
                <span className="flex items-start gap-2">
                  <span className="news-demo-match-dot mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[10px] text-muted-foreground">
                    ·
                  </span>
                  <span className="min-w-0 flex-1 font-semibold leading-snug">{pair.term}</span>
                </span>
              </div>
              <div
                className="news-demo-match-live mb-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-left text-sm"
                style={
                  {
                    animationDelay: `${0.25 + i * 0.75}s`,
                    ["--news-demo-accent" as string]: accent,
                  } as CSSProperties
                }
              >
                <span className="flex items-start gap-2">
                  <span className="news-demo-match-dot mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[10px] text-muted-foreground">
                    <Check className="news-demo-match-check h-3 w-3" />
                    <span className="news-demo-match-idle">·</span>
                  </span>
                  <span className="min-w-0 flex-1 text-[13px] leading-snug text-foreground">
                    {pair.meaning}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

/** TutorExamSubjectView ExamCard chrome with real TutorFace. */
function DemoTutorExam({ caption }: DemoProps) {
  const choices = [
    { letter: "A", text: "x ≥ 2 and x ≠ 5", state: "correct" as const },
    { letter: "B", text: "x > 2", state: "idle" as const },
    { letter: "C", text: "x ≠ 5", state: "idle" as const },
    { letter: "D", text: "all real x", state: "idle" as const },
  ];

  return (
    <DemoShell url="/tutor-exam/mathematics" caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center">
        <div className="news-demo-fade-in overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative h-1.5 w-full bg-border/60">
            <div
              className="news-demo-tutor-progress absolute inset-y-0 left-0"
              style={{ backgroundColor: MATH_ACCENT }}
            />
          </div>

          <div className="flex gap-3 border-b border-border p-4 sm:p-5">
            <div className="news-demo-tutor-face-swap">
              <span className="news-demo-tutor-face-idle">
                <TutorFace mood="idle" />
              </span>
              <span className="news-demo-tutor-face-happy">
                <TutorFace mood="happy" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Tutor Bot · Q3
              </p>
              <div className="relative mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3.5 py-2.5 text-sm leading-snug text-foreground">
                <span className="news-demo-tutor-bubble-ask block">
                  Read carefully. Pick the best domain for the expression.
                </span>
                <span className="news-demo-tutor-bubble-ok block px-3.5 py-2.5">
                  Correct — domain needs x − 2 ≥ 0 and a non-zero denominator.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                For which values of x is the expression defined?
              </p>
              <div className="mt-2 rounded-xl border border-dashed border-border bg-background/80 px-4 py-3">
                <p className="font-display text-base font-semibold leading-snug text-foreground">
                  √(x − 2) / (x − 5)
                </p>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">Mathematics · Domains</p>
            </div>

            <ul className="space-y-2">
              {choices.map((c, i) => (
                <li
                  key={c.letter}
                  className={cn(
                    "news-demo-tutor-choice flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left text-sm",
                    c.state === "correct"
                      ? "news-demo-tutor-choice-site-pick"
                      : "border-border bg-card",
                  )}
                  style={{ animationDelay: `${0.28 + i * 0.14}s` }}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                      c.state === "correct"
                        ? "news-demo-tutor-letter-pick"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    {c.state === "correct" ? (
                      <>
                        <span className="news-demo-tutor-letter-text">{c.letter}</span>
                        <Check className="news-demo-tutor-letter-check h-3.5 w-3.5" />
                      </>
                    ) : (
                      c.letter
                    )}
                  </span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>

            <div className="news-demo-tutor-ok rounded-xl border border-emerald-200 bg-emerald-50/80 px-3.5 py-2.5 text-sm text-emerald-900">
              Next question →
            </div>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

/** Dashboard Study tools cards — same art + card chrome as /dashboard. */
function DemoDashboard({ caption }: DemoProps) {
  const cards = [
    {
      title: "Flashcards",
      blurb: "Drill Economics terms, Math formulas, and English vocabulary with flip cards.",
      cta: "Open BBE flashcards →",
      art: <FlashcardsModeArt />,
      delay: "0s",
    },
    {
      title: "Matching",
      blurb: "Connect each concept to the right definition. Same decks, different interaction.",
      cta: "Open BBE matching →",
      art: <MatchingModeArt />,
      delay: "0.35s",
    },
    {
      title: "Tutor Exam",
      blurb: "A tutor robot runs a random theoretical quiz. New questions every time.",
      cta: "Open BBE tutor exam →",
      art: <TutorModeArt />,
      delay: "0.7s",
    },
  ];

  return (
    <DemoShell url="/dashboard" caption={caption}>
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center">
        <div className="news-demo-fade-in mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-caramel-deep">
            BBE course
          </p>
          <h3 className="font-display text-xl font-bold tracking-tight">Study tools</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Short drills between full mocks — same decks as the live course.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="news-demo-row overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm"
              style={{ animationDelay: card.delay }}
            >
              <div className="h-20 w-full overflow-hidden bg-secondary sm:h-28">
                <Suspense fallback={<div className="h-full w-full bg-secondary" aria-hidden />}>
                  {card.art}
                </Suspense>
              </div>
              <div className="p-2.5 sm:p-4">
                <h4 className="font-display text-sm font-bold sm:text-base">{card.title}</h4>
                <p className="mt-1 hidden text-xs text-muted-foreground sm:line-clamp-2 sm:block">
                  {card.blurb}
                </p>
                <p className="mt-2 text-[10px] font-semibold text-caramel-deep sm:mt-3 sm:text-xs">
                  {card.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

const DEMOS = {
  "mock-builder": DemoMockBuilder,
  flashcards: (p: DemoProps) => <DemoFlashcards {...p} />,
  "flashcards-math": (p: DemoProps) => (
    <DemoFlashcards
      {...p}
      url="/flashcards/mathematics"
      subjectLabel="Flashcards · Mathematics"
      topic="Algebra"
      accent={MATH_ACCENT}
      term="Discriminant"
      meaning="Δ = b² − 4ac. If Δ < 0 there are no real roots; if Δ = 0 there is one; if Δ > 0 there are two."
    />
  ),
  "flashcards-wiso": (p: DemoProps) => (
    <DemoFlashcards
      {...p}
      url="/wiso/flashcards/economics"
      subjectLabel="Karteikarten · Wirtschaft"
      topic="Märkte"
      accent={FLASH_ACCENT}
      term="Opportunitätskosten"
      meaning="Der entgangene Nutzen der besten nicht gewählten Alternative."
      frontLabel="Begriff"
      backLabel="Bedeutung"
    />
  ),
  matching: (p: DemoProps) => <DemoMatching {...p} />,
  "matching-wiso": (p: DemoProps) => (
    <DemoMatching
      {...p}
      url="/wiso/matching/economics"
      subjectLabel="Zuordnung · Wirtschaft"
      termsLabel="Begriffe"
      meaningsLabel="Bedeutungen"
      pairs={[
        { term: "Angebot", meaning: "Supply" },
        { term: "Nachfrage", meaning: "Demand" },
        { term: "Knappheit", meaning: "Scarcity" },
      ]}
    />
  ),
  "tutor-exam": DemoTutorExam,
  economics: (p: DemoProps) => (
    <DemoPractice
      {...p}
      subject="economics"
      taskIndex={0}
      url="/demo-practice/economics"
    />
  ),
  "economics-2": (p: DemoProps) => (
    <DemoPractice
      {...p}
      subject="economics"
      taskIndex={1}
      url="/demo-practice/economics"
    />
  ),
  "economics-3": (p: DemoProps) => (
    <DemoPractice
      {...p}
      subject="economics"
      taskIndex={2}
      url="/demo-practice/economics"
    />
  ),
  "economics-4": (p: DemoProps) => (
    <DemoPractice
      {...p}
      subject="economics"
      taskIndex={3}
      url="/demo-practice/economics"
    />
  ),
  "math-practice": (p: DemoProps) => (
    <DemoPractice {...p} subject="math" taskIndex={0} url="/demo-practice/math" />
  ),
  "math-practice-2": (p: DemoProps) => (
    <DemoPractice {...p} subject="math" taskIndex={1} url="/demo-practice/math" />
  ),
  "math-practice-3": (p: DemoProps) => (
    <DemoPractice {...p} subject="math" taskIndex={2} url="/demo-practice/math" />
  ),
  "math-practice-4": (p: DemoProps) => (
    <DemoPractice {...p} subject="math" taskIndex={3} url="/demo-practice/math" />
  ),
  "english-practice": (p: DemoProps) => (
    <DemoPractice {...p} subject="english" taskIndex={0} url="/demo-practice/english" />
  ),
  dashboard: DemoDashboard,
} as const;

export type NewsDemoId = keyof typeof DEMOS;

export function NewsUiDemo({ id, caption }: { id: string; caption: string }) {
  const Demo = DEMOS[id as NewsDemoId];
  if (!Demo) return null;
  return <Demo caption={caption} />;
}
