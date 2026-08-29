import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import hallAsset from "@/assets/parents-hall.jpg.asset.json";
import clockAsset from "@/assets/parents-clock.jpg.asset.json";
import moneyAsset from "@/assets/parents-money.jpg.asset.json";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: "A Frank Audit for Parents — The Real Cost of WU Vienna Admission | BBE School" },
      {
        name: "description",
        content:
          "An honest breakdown for parents: the true structural cost of the WU Vienna BBE entrance exam, the €60,000+ backup-plan trap, and how a €359 simulator becomes financial insurance.",
      },
      {
        property: "og:title",
        content: "A Frank Audit for Parents — The Real Cost of WU Vienna Admission",
      },
      {
        property: "og:description",
        content:
          "3000+ applicants. 240 seats. Penalty marking. Here is what actually happens at the WU Vienna entrance test, and what a wrong preparation strategy costs a family.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: `https://bbe-school.com${hallAsset.url}`,
      },
      {
        name: "twitter:image",
        content: `https://bbe-school.com${hallAsset.url}`,
      },
    ],
  }),
  component: ParentsPage,
});

function ParentsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-5xl"
        actions={
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        }
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.72), rgba(0,0,0,0.85)), url(${hallAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D3A]" />
            An open letter to parents
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A Frank Audit for Parents:
            <br />
            <span className="text-[#F0A64D]">The Real Cost of WU Vienna Admission</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Weigh the time and money spent on a failed admission.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Section 1 */}
        <article className="prose-neutral">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
              01
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              This is not a regular school test
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            The mandatory in-person BBE entrance test at WU Vienna is closer to a filtering conveyor
            than to a classroom exam. Imagine a huge convention hall, more than 3000 applicants from
            across the world, echoing announcements, and exactly 240 seats on the other side of the
            door. That is over 12 candidates competing for a single desk.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The volume of competitors is not the hardest part. The real difficulty is buried in the
            structural rules the university uses to separate the top of the funnel:
          </p>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E85D3A]" />
              <span>
                <strong className="font-semibold">A brutal time constraint.</strong> Your child gets
                less than a minute per statement to scan a dense English passage or work through a
                data-sufficiency style problem entirely in their head.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E85D3A]" />
              <span>
                <strong className="font-semibold">A penalty-marking system.</strong> At WU Vienna a
                wrong answer does not just score zero. The computer actively subtracts points from
                what the student got right elsewhere.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            If a candidate panics under the clock and starts guessing blindly, a strong paper can
            collapse to zero in minutes. That is why straight-A students with expensive private
            tutors still fail here every single year. They were never taught how to manage the clock
            and the penalty system at the same time.
          </p>
        </article>

        {/* Image break */}
        <figure className="my-14 overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={clockAsset.url}
            alt="Clock on top of an exam answer sheet"
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
          <figcaption className="bg-card px-5 py-3 text-xs text-muted-foreground">
            The exam is a stopwatch pretending to be a paper. Speed decides the score.
          </figcaption>
        </figure>

        {/* Section 2 */}
        <article>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
              02
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The price of a mistake: minus €60,000 from the family budget
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Let us calculate on our fingers what a single failed exam in Vienna actually costs a
            family. If the applicant misses the Top-240 list, there are two realistic and very
            expensive backup routes.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C2643A]">
                Scenario A
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                Private business school
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Enrolling in a private institution in the EU or UK (Frankfurt School and similar)
                typically means around €20,000 per year in tuition. Across a 3-year Bachelor cycle
                that is a direct{" "}
                <strong className="font-semibold text-foreground">€60,000 cash drain</strong> from
                the parents.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C2643A]">
                Scenario B
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                The foundation year trap
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A mandatory preparatory year means throwing 1 to 2 extra years of your child's life
                into limbo. Add European rent, food, pocket money and a delayed career start, and
                you are looking at another{" "}
                <strong className="font-semibold text-foreground">€25,000+</strong> of liquid loss.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Meanwhile, studying at world-class WU Vienna is effectively free, aside from token
            student fees. Getting into the Top-240 is financially equivalent to saving more than
            €60,000 in liquid family capital.
          </p>
        </article>

        <figure className="my-14 overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={moneyAsset.url}
            alt="Euro banknotes next to a graduation cap and calculator"
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
          <figcaption className="bg-card px-5 py-3 text-xs text-muted-foreground">
            Every missed spot at the university costs the family the price of a car.
          </figcaption>
        </figure>

        {/* Section 3 */}
        <article>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold text-background">
              03
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How we hack the system
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We do not copy-paste dry economics textbooks at your child. The person who built this
            platform sat through the exact WU Vienna exam, finished 24th, and felt the weight of
            every penalty mark on their own answer sheet. Out of that experience came an interactive
            exam simulator that costs{" "}
            <strong className="font-semibold text-foreground">€359 for the Full BBE Course</strong>.
            It is not an educational expense. It is a direct financial insurance policy against
            burning €60,000+ later.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The simulator trains your child's muscle memory in two tactics that regular tutors do
            not touch:
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-display text-base font-semibold text-foreground">
                The "2–3 answers" discipline
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We drill exactly when to lock in an answer and move on, so the clock stops being an
                enemy and becomes a rhythm.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-display text-base font-semibold text-foreground">
                Containerizing losses
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We train the student to leave uncertain fields completely blank. The WU marking
                system awards exactly 0 for a blank, and does not subtract. That single habit
                isolates a passing score while the rest of the hall commits penalty suicide out of
                panic.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C2643A]/30 bg-gradient-to-br from-[#fff7f0] to-[#ffe9d6] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C2643A]">
              The bottom line
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">
              You can rely on standard school knowledge and possibly burn €60,000+ on private
              tuition or a lost foundation year. Or you can invest <strong>€359</strong> into a
              specialized simulator that teaches your child how to survive the actual WU Vienna
              constraints and secure a seat on a free, world-class program. The choice is yours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products/full-course"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
                  boxShadow: "0 8px 20px -8px rgba(232,93,58,0.55)",
                }}
              >
                See the Full BBE Course →
              </Link>
              <Link
                to="/demo-practice"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Try the free demo first
              </Link>
            </div>
          </div>
        </article>

        {/* Closing image */}
        <figure className="mt-16 overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={wuAsset.url}
            alt="WU Vienna campus"
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
          <figcaption className="bg-card px-5 py-3 text-xs text-muted-foreground">
            The prize on the other side of the exam: WU Vienna.
          </figcaption>
        </figure>
      </main>
    </div>
  );
}
