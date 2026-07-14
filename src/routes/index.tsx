import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import { LiabilityChart } from "@/components/LiabilityChart";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileNav } from "@/components/MobileNav";

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
    const label = (user.user_metadata?.display_name as string | undefined) || user.email || "Account";
    const initial = label.charAt(0).toUpperCase();
    return (
      <div className="flex items-center gap-2">
        <Link
          to="/account"
          className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1 hover:bg-secondary"
        >
          <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {initial}
          </div>
          <span className="hidden max-w-[140px] truncate text-xs font-medium text-foreground sm:inline">{label}</span>
        </Link>
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
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
      >
        Sign up
      </Link>
    </div>
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
          <div className="flex items-center gap-3">
            <AuthButton />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
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
                          className="h-4 w-4 fill-foreground"
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
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#2DD4A8" }} />
                  <span className="text-xs font-medium tracking-wide text-taupe">
                    Built by top 1% of the hall
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Step by step preparation for your 2027 WU BBE exam
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Master every detail and tactic of the actual exam.
                </p>

                <div id="bbe-products" className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/demo-practice"
                    className="inline-flex flex-col items-center justify-center rounded-md border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <span>Try demo-practice</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">50+ tasks for start</span>
                  </Link>
                  <button
                    id="full-course"
                    className="inline-flex flex-col items-center justify-center rounded-md px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                    style={{
                      background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
                      boxShadow: "0 8px 20px -8px rgba(232,93,58,0.55)",
                    }}
                  >
                    <span>Full course</span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/85">Pass the exam confidently</span>
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

                

                <div id="important-features" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-taupe">
                  <span>Beauty of stress and time management</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Most common and tricky Mistakes</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>Exam life hacks and loopholes</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl">
                  <div
                    className="relative flex h-full flex-col items-center justify-center rounded-xl p-8 text-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url(${wuAsset.url})`,
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
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.72)), url(${wuAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8 lg:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              WU Vienna
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A triple-accredited elite business school.
              <br />
              <span className="text-white/80">Almost free education.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              One 2-hour exam stands between your family and a world-class degree at almost zero
              cost.
            </p>
          </div>
        </section>


        {/* LIABILITY CHART — light academic island */}
        <section className="relative px-6 py-24 lg:px-8 lg:py-32 bg-ivory">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top right, rgba(0,0,0,0.10), transparent 55%), radial-gradient(ellipse at bottom left, rgba(0,0,0,0.06), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-caramel">
                48-Month Capital Model
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-espresso sm:text-4xl lg:text-5xl">
                Two paths. One decision that compounds.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-taupe sm:text-lg">
                A strict financial comparison tracking tuition, mandatory foundation blocks,
                rent, and European living costs over 48 months.
              </p>
            </div>

            <div
              className="rounded-3xl bg-card p-6 sm:p-8 lg:p-10"
              style={{
                border: "1px solid rgba(0,0,0,0.10)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 60px -30px rgba(0,0,0,0.25)",
              }}
            >
              <LiabilityChart />
            </div>

            <div
              className="mt-12 rounded-2xl px-6 py-6 sm:px-8 sm:py-7"
              style={{
                backgroundColor: "rgba(0,0,0,0.10)",
                border: "1px solid rgba(0,0,0,0.35)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel">
                The Math is Absolute
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85 sm:text-base">
                Securing a Top-240 seat at world-class WU Vienna blocks a compounding{" "}
                <span className="font-semibold text-espresso">€70,000 family debt liability</span>.
                Investing <span className="font-semibold text-espresso">€349</span> in the survival
                engine today is a calculated asset-protection strategy.
              </p>
            </div>
          </div>
        </section>



        {/* PARALLAX BAND #2 */}
        <section
          className="relative bg-fixed"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.82), rgba(0,0,0,0.68)), url(${wuAsset.url})`,
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
        <section id="reviews" className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Students' reviews right after receiving an acceptance letter.
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <ReviewCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div id="faq">
          <FaqAccordion />
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "linear-gradient(135deg,#E85D3A,#3B82F6 50%,#2DD4A8)" }} />
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

function ReviewCard({ report }: { report: (typeof reports)[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <p className={cn("leading-relaxed text-muted-foreground", !expanded && "line-clamp-3")}>
          &ldquo;{report.quote}&rdquo;
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-primary hover:underline focus:outline-none"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="mt-8">
        <p className="font-display text-sm font-semibold text-foreground">
          {report.name}
        </p>
        <div
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
          style={{ borderColor: "rgba(232,93,58,0.35)", backgroundColor: "rgba(232,93,58,0.10)" }}
        >
          <span className="text-xs font-semibold tracking-wide" style={{ color: "#B84A2E" }}>
            {report.badge}
          </span>
          {report.fire && (
            <Flame className="h-3.5 w-3.5" style={{ fill: "#D97706", color: "#D97706" }} aria-hidden />
          )}
        </div>
      </div>
    </article>
  );
}

const reports = [
  {
    id: 1,
    name: "Igor, Kiev",
    quote:
      "You know, I believe the most important thing is knowing exactly what to do, understanding the material, and not panicking when it matters most. Many of my friends studied hard but didn't make it because they weren't familiar with the types of tasks involved, and that’s precisely the advantage BBE School gave me.",
    badge: "Rank: 197th",
    fire: false,
  },
  {
    id: 2,
    name: "Michael, Budapest",
    quote:
      "In general, I’ve always found the material easy to grasp. The exam questions were relatively easy, though the wording was tricky. It was a huge help that I’d done so many mock exams and learned time management, otherwise, I wouldn't have had time to finish about five of the questions.",
    badge: "Rank: 43rd",
    fire: true,
  },
  {
    id: 3,
    name: "Lisa, Graz",
    quote:
      "I hardly know what to say. I don't even understand how others manage to pass such a strange exam without supplementary materials like the BBE School course. I believe that buying the course three months before the exam was the best decision. I am very happy and grateful for this opportunity.",
    badge: "Rank: 227th",
    fire: false,
  },
  {
    id: 4,
    name: "Marcus, Zagreb",
    quote:
      "We'll I'll be straightforward: I don’t think I would have even come close to passing the exam without BBE School. I have absolutely no regrets about the money, time, and effort I put it. It was 100% worth it.",
    badge: "Rank: 97th",
    fire: true,
  },
  {
    id: 5,
    name: "Daniel, Ljubljana",
    quote:
      "I am grateful to bbe school for providing clear, structured questions that offer the best possible simulation of the actual live exam. Time management also played a crucial role. Another important factor were simply brilliant time-management tools — ones I hadn't seen before — were exactly what helped me meet the deadline.",
    badge: "Rank: 7th",
    fire: true,
  },
];
