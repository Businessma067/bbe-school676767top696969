import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ClipboardCheck, Focus, ArrowLeft } from "lucide-react";
import { AnswerSheetPreview } from "@/components/AnswerSheetPreview";
import examHallImg from "@/assets/exam-hall-real.png.asset.json";

export const Route = createFileRoute("/features/answer-sheet")({
  head: () => ({
    meta: [
      { title: "Official Answer Sheet Simulator — BBE School" },
      {
        name: "description",
        content:
          "Train the final step of the WU Vienna BBE exam: transferring 40 answers onto the official optical sheet while the clock is still running.",
      },
      { property: "og:title", content: "Official Answer Sheet Simulator — BBE School" },
      {
        property: "og:description",
        content:
          "A one to one replica of the WU answer sheet, built into every mock exam so the transfer becomes routine.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnswerSheetFeaturePage,
});

const PRODUCT_ORANGE = "#C2643A";

const highlights = [
  {
    icon: ClipboardCheck,
    title: "Official WU layout",
    text: "The same fields, the same grid, the same transfer workflow you will meet on the real optical sheet.",
  },
  {
    icon: Clock,
    title: "Timed inside mock exams",
    text: "The clock keeps running while you transfer, so the minutes you spend here are minutes you have budgeted for real.",
  },
  {
    icon: Focus,
    title: "Your own rhythm",
    text: "Fill it in block by block, question by question, or all at the end. The simulator lets you move answers around whenever you want.",
  },
];

function AnswerSheetFeaturePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none tracking-tight text-primary-foreground">
                BBE
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                BBE School
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                WU Vienna · Prep
              </span>
            </div>
          </Link>
          <Link
            to="/important-features"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Features
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Top: interactive preview left, intro text right */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-12">
          <div className="flex justify-center rounded-2xl border border-border bg-secondary/60 p-4 shadow-sm sm:p-6">
            <AnswerSheetPreview />
          </div>

          <div>
            <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Official Answer Sheet
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The step almost nobody practices
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Students spend months on math, English and economics. Then the exam ends with forty
              answers that still have to be carried over onto an optical sheet while the clock is
              running down. That last stretch is where a lot of strong candidates quietly lose
              points they had already earned.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Almost nobody trains it. People drill questions, not the transfer. So on exam day even
              students who were at the top of their class suddenly find themselves checking row
              numbers twice, second guessing an alignment, or racing the last three minutes with
              eight answers left. The sheet does not care that you knew everything on your scratch
              paper.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              That is a big part of why straight A students with expensive tutors still walk out
              without a seat. The material was never the problem. Nobody prepared them for the last
              ten minutes.
            </p>
          </div>
        </div>

        {/* Continuation of the text below */}
        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            How it lives inside our mock exams
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The simulator is not a separate exercise you open once and forget. It sits inside every
            mock exam on the platform. You start the exam, the timer starts with it, and the answer
            sheet is right there next to your questions the whole time. Everything you do on it
            counts toward the same clock, exactly like in the hall at Messe Wien.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            You fill in your last name, first name, signature and exam ID first, just like the real
            document, and then you work the grid. Marks can be placed the moment you finish a
            question, or in blocks of ten, or all at once at the end. You can change any mark at any
            time, jump back to question 7 after you already filled question 31, and clean up a row
            you rushed. Nothing is locked until you submit.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            That freedom is deliberate. There is no single correct way to transfer answers, and we
            are not going to teach you one. What actually matters is that you find the method that
            fits how you think, and then repeat it until it costs you no attention at all. Some
            students transfer after every block because it calms them down. Others hold everything
            on the question paper and give themselves a firm eight minute window at the end. Both
            work. Both fail if you try them for the first time on exam day.
          </p>

          <figure className="my-10 overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src={examHallImg.url}
              alt="Hundreds of applicants seated at single desks in a large exam hall during the WU Vienna entrance exam"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-96"
            />
            <figcaption className="bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              This is the room the answer sheet is filled in: thousands of applicants at single
              desks, one shared clock on the wall, and no chance to ask a question once the papers
              are handed out. Every person here already knows the material. What separates them by
              the end is how calmly they handle the last few minutes, when the only thing left to do
              is move forty answers onto one page without a single misplaced row.
            </figcaption>
          </figure>

          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            The real goal: budgeting the time
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The main job of this feature is to train you to set aside time for the transfer and to
            protect it. Students lose seats because they treat those minutes as free. They are not
            free. They cost you somewhere between five and ten minutes depending on your method, and
            if that cost is not already in your plan, it gets taken out of your last questions.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            After a few timed runs you will know your own number. You will feel when it is time to
            stop solving and start transferring, without looking at the clock and without the small
            spike of panic that ruins the rows. That instinct is the whole point, and it is
            impossible to build by reading about it.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Do it enough times here and exam day stops being your first attempt. The sheet becomes
            the boring part of the exam, which is exactly what it should be.
          </p>

          <div
            className="mt-8 rounded-2xl border p-6 text-center"
            style={{
              borderColor: `${PRODUCT_ORANGE}55`,
              backgroundColor: `${PRODUCT_ORANGE}10`,
            }}
          >
            <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
              Practice the transfer before it costs you a seat.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Included with the Full BBE Course · Available inside every mock exam
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-foreground">
            What the simulator trains
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div
                  className="mb-4 grid h-10 w-10 place-items-center rounded-xl"
                  style={{
                    backgroundColor: `${PRODUCT_ORANGE}18`,
                    boxShadow: `inset 0 0 0 1px ${PRODUCT_ORANGE}40`,
                  }}
                >
                  <f.icon className="h-5 w-5" style={{ color: PRODUCT_ORANGE }} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            to="/important-features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Important Features
          </Link>
        </div>
      </main>
    </div>
  );
}
