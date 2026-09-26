import type { CSSProperties, ReactNode } from "react";
import { BookOpen, Check, Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

type DemoProps = {
  caption: string;
};

const ECON_ACCENT = "#E85D3A";
const FLASH_ACCENT = "#c8763a";
const MATH_ACCENT = "#10b981";

function DemoShell({
  url,
  caption,
  children,
  className,
}: {
  url: string;
  caption: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
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
          "news-ui-demo relative aspect-[16/11] overflow-hidden bg-background px-3 py-3 sm:aspect-[16/10] sm:px-5 sm:py-4",
          className,
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

function MiniTutorFace({ mood }: { mood: "idle" | "happy" }) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-sm sm:h-12 sm:w-12"
      aria-hidden="true"
    >
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#f2f1ed" stroke="#d8d6ce" />
        <circle cx="14.5" cy="17" r="1.6" fill="#161616" />
        <circle cx="25.5" cy="17" r="1.6" fill="#161616" />
        {mood === "happy" ? (
          <path
            d="M13 23c1.8 3 5 4.5 7 4.5S25.2 26 27 23"
            stroke="#161616"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path d="M14 24h12" stroke="#161616" strokeWidth="1.6" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
}

/** Real Custom Mock Builder chrome: chapters, accent CTA, weight hint. */
function DemoMockBuilder({ caption }: DemoProps) {
  const chapters = [
    { heading: "Ch. 2", title: "Markets & prices", delay: "0s", open: true, count: "2/4" },
    { heading: "Ch. 3", title: "Business forms", delay: "0.55s", open: true, count: "1/3" },
    { heading: "Ch. 5", title: "Accounting", delay: "1.1s", open: false, count: "" },
  ];
  const subs = [
    { id: "2.1", title: "Demand and supply", delay: "0.15s" },
    { id: "2.3", title: "Price elasticity", delay: "0.45s" },
    { id: "3.1", title: "Sole traders & partnerships", delay: "0.75s" },
  ];

  return (
    <DemoShell url="/products/custom-mock-builder" caption={caption}>
      <div className="mx-auto flex h-full max-w-xl flex-col justify-center">
        <div
          className="news-demo-fade-in overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-4"
          style={{ borderTop: `4px solid ${ECON_ACCENT}` }}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: ECON_ACCENT }}
            >
              Custom Mock Builder
            </span>
            <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Economics
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold sm:text-base">
                Select topics &amp; subtopics
              </h3>
              <ul className="mt-2 space-y-1.5">
                {chapters.map((ch) => (
                  <li
                    key={ch.heading}
                    className="news-demo-row overflow-hidden rounded-xl border border-border"
                    style={{ animationDelay: ch.delay }}
                  >
                    <div className="flex items-center gap-2 bg-secondary/30 px-2.5 py-2">
                      <span className="font-display text-xs font-semibold">{ch.heading}</span>
                      <span className="truncate text-[11px] text-muted-foreground">{ch.title}</span>
                      {ch.count ? (
                        <span
                          className="ml-auto shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold"
                          style={{ backgroundColor: `${ECON_ACCENT}22`, color: ECON_ACCENT }}
                        >
                          {ch.count}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="mt-1.5 space-y-1 border-l border-border/70 pl-2">
                {subs.map((s) => (
                  <li
                    key={s.id}
                    className="news-demo-row flex items-start gap-2 rounded-lg px-2 py-1.5"
                    style={{ animationDelay: s.delay }}
                  >
                    <span
                      className="news-demo-check-accent mt-0.5 grid h-3.5 w-3.5 place-items-center rounded border-2"
                      style={
                        {
                          animationDelay: s.delay,
                          ["--news-demo-accent" as string]: ECON_ACCENT,
                        } as CSSProperties
                      }
                    />
                    <span>
                      <span className="text-xs font-semibold tabular-nums">{s.id}</span>
                      <span className="mt-0.5 block text-[10px] leading-snug text-muted-foreground">
                        {s.title}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="news-demo-fade-in hidden min-w-0 sm:block" style={{ animationDelay: "0.3s" }}>
              <div
                className="rounded-2xl border border-border bg-card p-3"
                style={{
                  borderTop: `4px solid ${ECON_ACCENT}`,
                  backgroundImage: `radial-gradient(120% 80% at 50% 0%, ${ECON_ACCENT}18, transparent 55%)`,
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                  Topic weights
                </p>
                <div className="news-demo-weight-mix relative mx-auto mt-3 h-24 w-24">
                  <span className="absolute inset-0 rounded-full border border-dashed border-border" />
                  <span
                    className="news-demo-weight-dot absolute h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: ECON_ACCENT }}
                  />
                </div>
                <p className="mt-2 text-center text-[10px] text-muted-foreground">
                  12 questions · 48 min timed
                </p>
              </div>
            </div>
          </div>

          <div
            className="news-demo-cta mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-sm"
            style={{
              backgroundColor: ECON_ACCENT,
              boxShadow: `0 4px 14px -4px ${ECON_ACCENT}80`,
            }}
          >
            <BookOpen className="h-4 w-4" />
            Create Economics Mock from Full Course
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

/** Real flashcard stage: Layers pill, Flip accent, Know / Don&apos;t know. */
function DemoFlashcards({ caption }: DemoProps) {
  return (
    <DemoShell url="/flashcards/economics" caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center">
        <div className="news-demo-fade-in mb-2 flex w-full items-center justify-between gap-2">
          <p className="font-display text-sm font-semibold text-foreground sm:text-base">
            Flashcards · Economics
          </p>
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: FLASH_ACCENT }}
          >
            Markets
          </span>
        </div>

        <div className="news-demo-card-stage w-full max-w-[18rem]">
          <div className="news-demo-card">
            <div className="news-demo-card-face news-demo-card-front rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Layers className="h-3 w-3" />
                Term
              </div>
              <div className="flex h-full flex-col items-center justify-center px-2 pt-4 text-center">
                <span className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  opportunity cost
                </span>
                <p className="mt-2 text-[10px] text-muted-foreground">Tap to flip · swipe to sort</p>
              </div>
            </div>
            <div className="news-demo-card-face news-demo-card-back rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Layers className="h-3 w-3" />
                Meaning
              </div>
              <div className="flex h-full flex-col items-center justify-center px-1 pt-4 text-center">
                <span className="text-sm leading-relaxed text-foreground sm:text-[15px]">
                  The value of the next-best alternative you give up when you choose.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="news-demo-fade-in mt-4 flex w-full max-w-[18rem] items-center justify-between gap-2"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/10 px-2 py-2 text-[11px] font-semibold text-red-700">
            <ThumbsDown className="h-3.5 w-3.5" />
            Don&apos;t know
          </span>
          <span
            className="rounded-md px-3 py-2 text-[11px] font-semibold text-white shadow-sm"
            style={{ backgroundColor: FLASH_ACCENT }}
          >
            Flip
          </span>
          <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-2 text-[11px] font-semibold text-emerald-700">
            <ThumbsUp className="h-3.5 w-3.5" />
            Know
          </span>
        </div>
      </div>
    </DemoShell>
  );
}

/** Real matching board: accent selection → emerald lock-in. */
function DemoMatching({ caption }: DemoProps) {
  const pairs = [
    { left: "Sunk cost", right: "Already incurred cost", delay: "0.15s" },
    { left: "Ceteris paribus", right: "Hold other factors constant", delay: "0.85s" },
    { left: "Liquidity", right: "Ease of converting to cash", delay: "1.55s" },
  ];

  return (
    <DemoShell url="/matching/economics" caption={caption}>
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
        <div className="news-demo-fade-in mb-3 flex items-center justify-between gap-2">
          <p className="font-display text-sm font-semibold sm:text-base">Matching · Economics</p>
          <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
            Round 1 · 0/3
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-x-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Terms</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Meanings</p>
          {pairs.map((pair, i) => (
            <div key={pair.left} className="contents">
              <div
                className="news-demo-match-site relative rounded-xl border border-border bg-card px-3 py-2.5 text-left text-[11px] font-semibold text-foreground sm:text-xs"
                style={
                  {
                    animationDelay: pair.delay,
                    ["--news-demo-accent" as string]: FLASH_ACCENT,
                  } as CSSProperties
                }
              >
                <span className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-border text-center text-[9px] leading-4 text-muted-foreground">
                  ·
                </span>
                {pair.left}
              </div>
              <div
                className="news-demo-match-site relative rounded-xl border border-border bg-card px-3 py-2.5 text-left text-[11px] font-medium text-muted-foreground sm:text-xs"
                style={
                  {
                    animationDelay: `${0.2 + i * 0.7}s`,
                    ["--news-demo-accent" as string]: FLASH_ACCENT,
                  } as CSSProperties
                }
              >
                <span className="news-demo-match-tick absolute right-2 top-1/2 grid h-4 w-4 -translate-y-1/2 place-items-center rounded-full border border-border text-[9px]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {pair.right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

/** Real tutor exam card: progress strip, tutor bubble, lettered choices. */
function DemoTutorExam({ caption }: DemoProps) {
  const choices = [
    { letter: "A", text: "x ≥ 2 and x ≠ 5", pick: true },
    { letter: "B", text: "x > 2", pick: false },
    { letter: "C", text: "x ≠ 5", pick: false },
    { letter: "D", text: "all real x", pick: false },
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

          <div className="flex gap-2.5 border-b border-border p-3 sm:p-3.5">
            <div className="news-demo-tutor-mood">
              <MiniTutorFace mood="idle" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Tutor Bot · Q3
              </p>
              <div className="mt-1 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-xs leading-snug text-foreground sm:text-sm">
                Read carefully. Pick the best domain for the expression.
              </div>
            </div>
          </div>

          <div className="space-y-2.5 p-3 sm:p-3.5">
            <div className="news-demo-tutor-q rounded-xl border border-dashed border-border bg-background/80 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                For which values of x is the expression defined?
              </p>
              <p className="mt-1.5 font-display text-sm font-semibold text-foreground sm:text-base">
                √(x − 2) / (x − 5)
              </p>
            </div>

            <ul className="space-y-1.5">
              {choices.map((c, i) => (
                <li
                  key={c.letter}
                  className={cn(
                    "news-demo-tutor-choice flex items-start gap-2.5 rounded-xl border border-border bg-card px-3 py-2 text-left text-xs sm:text-sm",
                    c.pick && "news-demo-tutor-choice-site-pick",
                  )}
                  style={{ animationDelay: `${0.3 + i * 0.16}s` }}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                      c.pick
                        ? "news-demo-tutor-letter-pick border-emerald-500 bg-emerald-500 text-white"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    {c.letter}
                  </span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>

            <div className="news-demo-tutor-ok rounded-xl border border-emerald-200 bg-emerald-50/80 px-3 py-2 text-[11px] leading-relaxed text-emerald-900 sm:text-xs">
              Correct. Domain needs x − 2 ≥ 0 and a non-zero denominator.
            </div>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

/** Real economics practice CaseCard: statement table + True checkboxes. */
function DemoEconomics({ caption }: DemoProps) {
  const rows = [
    { letter: "A", text: "Opportunity cost includes only explicit money costs.", delay: "0.2s", on: false },
    {
      letter: "B",
      text: "Ceteris paribus holds other relevant factors constant.",
      delay: "0.75s",
      on: true,
    },
    { letter: "C", text: "A sunk cost should decide the next investment.", delay: "1.3s", on: false },
    {
      letter: "D",
      text: "Liquidity describes how easily an asset converts to cash.",
      delay: "1.85s",
      on: true,
    },
  ];

  return (
    <DemoShell url="/demo-practice/economics" caption={caption}>
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
        <div className="news-demo-fade-in overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-4">
          <div className="mb-2.5 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              Task 1
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
              ECON-2.04
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              Markets
            </span>
          </div>

          <h2 className="font-display text-sm font-bold tracking-tight sm:text-base">
            Which of the following statements are true?
          </h2>
          <p className="mt-1 text-[11px] leading-relaxed text-foreground/80 sm:text-xs">
            Mark only the statements that hold under standard microeconomic definitions.
          </p>

          <ol className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
            <li className="flex items-center gap-2 bg-secondary/60 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="w-5 text-center">#</span>
              <span className="flex-1">Statement</span>
              <span className="w-10 text-center">True</span>
            </li>
            {rows.map((row) => (
              <li
                key={row.letter}
                className="news-demo-econ-row px-2.5 py-2"
                style={{ animationDelay: row.delay }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 text-center text-[11px] font-bold text-muted-foreground">
                    {row.letter}.
                  </span>
                  <p className="flex-1 text-[11px] leading-snug text-foreground sm:text-xs">
                    {row.text}
                  </p>
                  <div className="flex w-10 justify-center">
                    <span
                      className={cn(
                        "news-demo-true-box grid h-5 w-5 place-items-center rounded border-2",
                        row.on && "news-demo-true-box-on",
                      )}
                      style={{ animationDelay: row.delay }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="news-demo-cta mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm sm:text-sm">
            Check Answers / Submit
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

/** Dashboard “continue studying” strip — animated product chrome. */
function DemoDashboard({ caption }: DemoProps) {
  const cards = [
    { title: "Economics practice", meta: "Ch. 3 · resume", delay: "0s" },
    { title: "Flashcards", meta: "12 due today", delay: "0.45s" },
    { title: "Custom mock", meta: "Last: 18/24", delay: "0.9s" },
  ];

  return (
    <DemoShell url="/dashboard" caption={caption}>
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center gap-3">
        <div className="news-demo-fade-in">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Dashboard</p>
          <p className="mt-1 font-display text-base font-semibold sm:text-lg">Continue where you left off</p>
        </div>
        <div className="grid gap-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="news-demo-row flex items-center justify-between rounded-2xl border border-border bg-card px-3.5 py-3 shadow-sm"
              style={{ animationDelay: card.delay }}
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{card.title}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{card.meta}</p>
              </div>
              <span className="rounded-md bg-foreground px-2.5 py-1.5 text-[11px] font-semibold text-background">
                Open
              </span>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

const DEMOS = {
  "mock-builder": DemoMockBuilder,
  flashcards: DemoFlashcards,
  matching: DemoMatching,
  "tutor-exam": DemoTutorExam,
  economics: DemoEconomics,
  dashboard: DemoDashboard,
} as const;

export type NewsDemoId = keyof typeof DEMOS;

export function NewsUiDemo({ id, caption }: { id: string; caption: string }) {
  const Demo = DEMOS[id as NewsDemoId];
  if (!Demo) return null;
  return <Demo caption={caption} />;
}
