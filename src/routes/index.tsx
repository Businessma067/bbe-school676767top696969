import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Minimal executive header */}
      <header className="border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
              Messe Wien Survivor
            </span>
          </div>
          <div className="hidden text-xs font-medium tracking-wider text-muted-foreground sm:block">
            WU Vienna BBE Preparatory Platform
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: copy */}
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium tracking-wide text-slate">
                    Built by a Top-240 Survivor
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Messe Wien 2026
                  <br />
                  <span className="text-glow">In-Person Exam Cracked.</span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  The strict risk-management simulator built by a Top-240 survivor. Master the
                  42-second time crunch and the brutal Partial-Credit marking system.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_32px_-8px_var(--color-burgundy)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    Access the Simulator Engine
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/5 hover:box-glow-subtle focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    Parents&apos; Financial Guide (Download PDF)
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-6 text-xs font-medium tracking-wide text-slate-dim">
                  <span>42s / question</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Partial-Credit Engine</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Top-240 Calibration</span>
                </div>
              </div>

              {/* Right: video placeholder */}
              <div className="relative">
                <div className="glass-frame relative aspect-video rounded-2xl p-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                  <div className="relative flex h-full flex-col items-center justify-center rounded-xl bg-graphite/60 p-8 text-center">
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/5">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-foreground/80 pl-1" />
                    </div>
                    <p className="font-display text-lg font-medium text-foreground">
                      Watch Intro Video
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Passing the Exam from Rimini Beach
                    </p>
                    <div className="mt-6 text-xs font-medium tracking-wider text-slate-dim">
                      02:14 PREVIEW
                    </div>
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* FINANCIAL PRESTIGE & ROI BLOCK */}
        <section className="border-t border-border/50 px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Economics of Admission: Expense vs. Investment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A clear comparison of the opportunity cost facing every candidate family.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-2">
              {/* Left Column */}
              <div className="bg-background p-8 sm:p-10 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-8 bg-slate-dim" />
                  <span className="text-xs font-semibold tracking-widest text-slate-dim uppercase">
                    Trap
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  The $20,000/Year Trap
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Attending a private university or a lower-tier business school means burning over
                  $20,000 annually in tuition. Over 3 years, that is a{" "}
                  <span className="font-semibold text-foreground">$60,000 family liability</span>{" "}
                  with zero historical prestige.
                </p>
              </div>

              {/* Right Column */}
              <div className="bg-card/50 p-8 sm:p-10 lg:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-8 bg-primary" />
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    Arbitrage
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  The WU Vienna Arbitrage
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  WU Vienna is a world-class, triple-accredited elite business school with tuition
                  fees of virtually{" "}
                  <span className="font-semibold text-foreground">€0</span>. Passing this exam is
                  a massive high-ROI financial pivot.
                </p>
              </div>
            </div>

            {/* Bottom alert box */}
            <div className="mt-10 rounded-xl border border-l-2 border-l-primary border-border bg-card/40 px-6 py-5 sm:px-8">
              <p className="text-sm leading-relaxed text-foreground sm:text-base">
                <span className="font-semibold text-primary">Hedge note.</span>{" "}
                By investing today, you block tens of thousands in future tuition debts. This is a
                pure financial hedge.
              </p>
            </div>
          </div>
        </section>

        {/* FIELD REPORTS */}
        <section className="border-t border-border/50 bg-[#121212] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Field Reports from Messe Wien 2026
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Unfiltered candidate notes from the exam hall floor.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <article
                  key={report.id}
                  className="group flex flex-col justify-between rounded-2xl border border-transparent bg-card/20 p-8 transition-all hover:border-border/40 hover:bg-card/40"
                >
                  <p className="leading-relaxed text-muted-foreground">
                    &ldquo;{report.quote}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {report.name}
                    </p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1">
                      <span className="text-xs font-semibold tracking-wide text-primary">
                        {report.badge}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal footer */}
        <footer className="border-t border-border/50 px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
                Messe Wien Survivor
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Messe Wien Survivor. Not affiliated with WU Vienna.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

const reports = [
  {
    id: 1,
    name: "Maxim, Vienna",
    quote:
      "The 42-seconds time limit on Math & Logic completely broke the hall. People started guessing blindly in the last 15 minutes and committed a penalty suicide. I strictly held the 2-3 answers discipline from the simulator, left blank spaces, and isolated my losses. The system rewarded me with massive Partial Credit. I am on the first course now.",
    badge: "Score: 78.5% (Direct Admission)",
  },
  {
    id: 2,
    name: "Lukas, Munich",
    quote:
      "Everyone thought the Economics section was easy because the Furthmann textbook terms looked familiar. But the professors hid massive linguistic traps using words like 'only' and 'directly'. This simulator taught me exactly how to scan for these tricks. Economics alone dragged my entire exam onto a safe score line.",
    badge: "Score: 82.0% (Top 100)",
  },
  {
    id: 3,
    name: "Anna, Almaty",
    quote:
      "I panicked hard when two heavy math cases went completely to zero. In a standard school test, that would be a total failure. But thanks to the core scoring logic practiced here, those zeroes were safely containerized and didn't pull down my perfect Economics score. Waiting List moved in two weeks, and my student ticket is locked.",
    badge: "Score: 74.5% (Waiting List Crossed)",
  },
];
