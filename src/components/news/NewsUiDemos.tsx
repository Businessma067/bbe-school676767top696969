import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DemoProps = {
  caption: string;
};

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
          "news-ui-demo relative aspect-[16/10] overflow-hidden bg-[var(--paper)] px-3 py-4 sm:px-5 sm:py-5",
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

function DemoMockBuilder({ caption }: DemoProps) {
  return (
    <DemoShell url="/products/custom-mock-builder" caption={caption}>
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center gap-3">
        <div className="news-demo-fade-in">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Mock Builder
          </p>
          <p className="mt-1 font-display text-base font-semibold text-foreground sm:text-lg">
            Build your practice exam
          </p>
        </div>
        <div className="grid gap-2">
          {[
            { label: "Economics", delay: "0s", count: "8" },
            { label: "Mathematics", delay: "0.7s", count: "6" },
            { label: "English", delay: "1.4s", count: "6" },
          ].map((row) => (
            <div
              key={row.label}
              className="news-demo-row flex items-center justify-between rounded-md border border-border bg-background/80 px-3 py-2.5"
              style={{ animationDelay: row.delay }}
            >
              <div className="flex items-center gap-2.5">
                <span className="news-demo-check" style={{ animationDelay: row.delay }} />
                <span className="text-sm font-medium text-foreground">{row.label}</span>
              </div>
              <span className="news-demo-count text-xs font-semibold text-muted-foreground">
                {row.count} tasks
              </span>
            </div>
          ))}
        </div>
        <div className="news-demo-cta mt-1 rounded-md bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background">
          Start custom mock
        </div>
      </div>
    </DemoShell>
  );
}

function DemoFlashcards({ caption }: DemoProps) {
  return (
    <DemoShell url="/flashcards/economics" caption={caption}>
      <div className="flex h-full flex-col items-center justify-center">
        <p className="news-demo-fade-in mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Flashcards · Economics
        </p>
        <div className="news-demo-card-stage">
          <div className="news-demo-card">
            <div className="news-demo-card-face news-demo-card-front">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Term
              </span>
              <span className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
                opportunity cost
              </span>
            </div>
            <div className="news-demo-card-face news-demo-card-back">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Meaning
              </span>
              <span className="mt-3 max-w-[16rem] text-center text-sm leading-relaxed text-foreground sm:text-base">
                The value of the next-best alternative you give up when you choose.
              </span>
            </div>
          </div>
        </div>
        <div className="news-demo-fade-in mt-5 flex gap-2" style={{ animationDelay: "0.4s" }}>
          <span className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground">
            Again
          </span>
          <span className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground">
            Knew it
          </span>
        </div>
      </div>
    </DemoShell>
  );
}

function DemoMatching({ caption }: DemoProps) {
  const left = ["Sunk cost", "Ceteris paribus", "Liquidity"];
  const right = ["Hold other factors constant", "Ease of converting to cash", "Already incurred cost"];
  return (
    <DemoShell url="/matching/economics" caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center">
        <p className="news-demo-fade-in mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Matching · Economics
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-3 sm:gap-x-3">
          {left.map((term, i) => (
            <div key={term} className="contents">
              <div
                className="news-demo-match-chip rounded-md border border-border bg-background px-2.5 py-2 text-left text-[11px] font-semibold text-foreground sm:text-xs"
                style={{ animationDelay: `${0.2 + i * 0.55}s` }}
              >
                {term}
              </div>
              <div
                className="news-demo-match-line h-[2px] w-6 origin-left rounded-full bg-foreground/70 sm:w-10"
                style={{ animationDelay: `${0.35 + i * 0.55}s` }}
              />
              <div
                className="news-demo-match-chip rounded-md border border-border bg-background px-2.5 py-2 text-left text-[11px] font-medium text-muted-foreground sm:text-xs"
                style={{ animationDelay: `${0.45 + i * 0.55}s` }}
              >
                {right[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function DemoTutorExam({ caption }: DemoProps) {
  return (
    <DemoShell url="/tutor-exam/mathematics" caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center gap-3">
        <div className="news-demo-fade-in flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <span>Tutor exam · Math</span>
          <span className="news-demo-timer">12:40</span>
        </div>
        <div className="news-demo-tutor-q rounded-md border border-border bg-background px-3.5 py-3">
          <p className="text-sm font-medium leading-relaxed text-foreground">
            For which values of x is the expression defined?
          </p>
          <p className="mt-2 font-display text-base text-foreground">√(x − 2) / (x − 5)</p>
        </div>
        <div className="grid gap-2">
          {["x ≥ 2 and x ≠ 5", "x > 2", "x ≠ 5", "all real x"].map((choice, i) => (
            <div
              key={choice}
              className={cn(
                "news-demo-tutor-choice rounded-md border px-3 py-2 text-sm",
                i === 0 && "news-demo-tutor-choice-pick",
              )}
              style={{ animationDelay: `${0.35 + i * 0.18}s` }}
            >
              {choice}
            </div>
          ))}
        </div>
        <div className="news-demo-tutor-ok rounded-md border border-border bg-background/90 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          Correct. Domain needs x − 2 ≥ 0 and a non-zero denominator.
        </div>
      </div>
    </DemoShell>
  );
}

function DemoEconomics({ caption }: DemoProps) {
  const rows = [
    { text: "Opportunity cost includes only explicit money costs.", mark: "False", ok: false },
    { text: "Ceteris paribus holds other relevant factors constant.", mark: "True", ok: true },
    { text: "A sunk cost should decide the next investment.", mark: "False", ok: false },
  ];
  return (
    <DemoShell url="/demo-practice/economics" caption={caption}>
      <div className="mx-auto flex h-full max-w-md flex-col justify-center gap-3">
        <div className="news-demo-fade-in">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Economics · Statement cluster
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            Which of the following statements are true?
          </p>
        </div>
        <div className="space-y-2">
          {rows.map((row, i) => (
            <div
              key={row.text}
              className="news-demo-econ-row flex items-start justify-between gap-3 rounded-md border border-border bg-background px-3 py-2.5"
              style={{ animationDelay: `${0.25 + i * 0.65}s` }}
            >
              <p className="text-xs leading-relaxed text-foreground sm:text-sm">{row.text}</p>
              <span
                className={cn(
                  "news-demo-econ-mark shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                  row.ok ? "is-true" : "is-false",
                )}
                style={{ animationDelay: `${0.55 + i * 0.65}s` }}
              >
                {row.mark}
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
} as const;

export type NewsDemoId = keyof typeof DEMOS;

export function NewsUiDemo({ id, caption }: { id: string; caption: string }) {
  const Demo = DEMOS[id as NewsDemoId];
  if (!Demo) return null;
  return <Demo caption={caption} />;
}
