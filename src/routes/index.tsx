import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import { LiabilityChart } from "@/components/LiabilityChart";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export const Route = createFileRoute("/")({
  component: Index,
});

function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (user) {
    const initial = (user.email ?? "?").charAt(0).toUpperCase();
    return (
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 sm:flex">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {initial}
          </div>
          <span className="max-w-[140px] truncate text-xs font-medium text-foreground">{user.email}</span>
        </div>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            navigate({ to: "/" });
          }}
          className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <Link
      to="/auth"
      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
    >
      Sign in
    </Link>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">BBE</span>
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-background ring-2 ring-primary" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">BBE School</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU Vienna · Prep</span>
            </div>
          </a>
          <AuthButton />
        </div>
      </header>


      <main>
        {/* HERO — light ivory */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-2xl">
                {/* Rating + reviews */}
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-2">
                    {[
                      "https://i.pravatar.cc/64?img=12",
                      "https://i.pravatar.cc/64?img=32",
                      "https://i.pravatar.cc/64?img=47",
                      "https://i.pravatar.cc/64?img=68",
                      "https://i.pravatar.cc/64?img=5",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Student ${i + 1}`}
                        loading="lazy"
                        className="h-8 w-8 rounded-full border-2 border-background object-cover shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5" aria-label="Rated 4.77 out of 5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <svg
                          key={i}
                          viewBox="0 0 20 20"
                          className="h-4 w-4 fill-[#E0A100]"
                          aria-hidden="true"
                        >
                          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-display text-sm font-semibold text-foreground">4.77</span>
                    <span className="text-sm text-muted-foreground">· 348 reviews</span>
                  </div>
                </div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium tracking-wide text-taupe">
                    Built by a Top-240 Survivor
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Messe Wien 2026
                  <br />
                  <span className="text-caramel">In-Person Exam Cracked.</span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  The strict risk-management simulator built by a Top-240 survivor. Master the
                  42-second time crunch and the brutal Partial-Credit marking system.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex flex-col items-center justify-center rounded-md border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    <span>Try demo-practice</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">50+ tasks for start</span>
                  </button>
                  <button className="inline-flex flex-col items-center justify-center rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    <span>Full course</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-primary-foreground/80">Pass the exam confidently</span>
                  </button>
                  <a
                    href="/Message_to_Parents_WU_Vienna_2027.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center justify-center rounded-md border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <span>Message to Parents</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Why our course?</span>
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-taupe">
                  <span>42s / question</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Partial-Credit Engine</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Top-240 Calibration</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl">
                  <div
                    className="relative flex h-full flex-col items-center justify-center rounded-xl p-8 text-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(42,31,23,0.55), rgba(42,31,23,0.75)), url(${wuAsset.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-white pl-1" />
                    </div>
                    <p className="font-display text-lg font-medium text-white">
                      Watch Intro Video
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Passing the Exam from Rimini Beach
                    </p>
                    <div className="mt-6 text-xs font-medium tracking-wider text-white/70">
                      02:14 PREVIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX BAND — darkened WU campus */}
        <section
          className="relative bg-fixed"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(42,31,23,0.78), rgba(42,31,23,0.72)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8 lg:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              WU Vienna · Campus D2
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A triple-accredited elite business school.
              <br />
              <span className="text-white/80">Tuition virtually €0.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              One 90-minute exam stands between your family and a world-class degree at zero
              tuition cost.
            </p>
          </div>
        </section>


        {/* LIABILITY CHART — dark fintech island */}
        <section
          className="px-6 py-24 lg:px-8 lg:py-32"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/50">
                48-Month Capital Model
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                The Accumulation of Liability.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">
                A strict financial comparison tracking tuition, mandatory foundation blocks,
                rent, and European living costs over 48 months.
              </p>
            </div>

            <LiabilityChart />

            <div
              className="mt-12 rounded-2xl px-6 py-6 sm:px-8 sm:py-7"
              style={{
                backgroundColor: "rgba(122,0,38,0.06)",
                border: "1px solid rgba(122,0,38,0.55)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                 style={{ color: "#C8375A" }}>
                The Math is Absolute
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Securing a Top-240 seat at world-class WU Vienna blocks a compounding{" "}
                <span className="font-semibold text-white">€70,000 family debt liability</span>.
                Investing <span className="font-semibold text-white">€349</span> in the survival
                engine today is a calculated asset-protection strategy.
              </p>
            </div>
          </div>
        </section>



        {/* PARALLAX BAND #2 */}
        <section
          className="relative bg-fixed"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(42,31,23,0.82), rgba(42,31,23,0.68)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Field Reports
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Voices from the exam hall floor.
            </h2>
          </div>
        </section>

        {/* FIELD REPORTS — light */}
        <section className="px-6 py-24 lg:px-8 lg:py-32">
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
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="leading-relaxed text-muted-foreground">
                    &ldquo;{report.quote}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {report.name}
                    </p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-primary/30 bg-secondary px-3 py-1">
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

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
                BBE School
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 BBE School. Not affiliated with WU Vienna.
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
