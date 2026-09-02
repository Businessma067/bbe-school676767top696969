import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ClipboardCheck, Focus, ArrowLeft } from "lucide-react";
import { AnswerSheetPreviewFill } from "@/components/AnswerSheetPreview";
import examHallImg from "@/assets/exam-hall-real.png.asset.json";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/features/answer-sheet")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/features/answer-sheet" }],
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
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/important-features"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Features
          </Link>
        }
      />

      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Top: interactive preview left, intro text right */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:gap-12">
          <AnswerSheetPreviewFill fit="width" className="w-full" />

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

            <blockquote
              className="mt-5 border-l-2 pl-4 text-base italic leading-relaxed text-foreground"
              style={{ borderColor: PRODUCT_ORANGE }}
            >
              "I knew every answer. I just ran out of time writing them down."
              <span className="mt-1 block text-xs not-italic text-muted-foreground">
                — a repeat applicant, after his first attempt
              </span>
            </blockquote>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
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

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The panel on the left is the tool itself, running exactly as it does inside a mock
              exam. Name fields, signature, exam ID, and a forty row grid that behaves like the
              printed original. Nothing here is a picture of the sheet; it is the sheet you will
              actually work with.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Built into every mock exam, on the same running clock.",
                "Every mark stays editable until you press submit.",
                "Fill it row by row, block by block, or all at the end.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: PRODUCT_ORANGE }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Do it a dozen times in practice and the transfer stops being an event. It becomes the
              quiet, automatic ending of an exam you have already finished in your head.
            </p>
          </div>
        </div>

        {/* Continuation of the text, full width */}
        <section className="mt-12">
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

          <ul className="mt-5 space-y-2.5">
            {[
              "The same header fields: last name, first name, signature, exam ID.",
              "The same grid and the same row logic as the printed optical sheet.",
              "Every mark editable until you submit, so a rushed row can be cleaned up.",
              "One shared timer for solving and transferring, never two separate clocks.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: PRODUCT_ORANGE }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            That freedom is deliberate. There is no single correct way to transfer answers, and we
            are not going to teach you one. What actually matters is that you find the method that
            fits how you think, and then repeat it until it costs you no attention at all. Some
            students transfer after every block because it calms them down. Others hold everything
            on the question paper and give themselves a firm eight minute window at the end. Both
            work. Both fail if you try them for the first time on exam day.
          </p>

          <div
            className="mt-8 rounded-2xl border p-6"
            style={{
              borderColor: `${PRODUCT_ORANGE}55`,
              backgroundColor: `${PRODUCT_ORANGE}10`,
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              What we actually recommend
            </p>
            <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
              Fill in the answer sheet right after you finish a subject. Not earlier, not at the
              very end.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              This is the fastest and most reliable rhythm we have seen in practice. When you close
              a subject and immediately move its answers over, your head stays inside one subject at
              a time instead of jumping back and forth between economics rows and math rows. The
              block is fresh, the numbering is still in your short term memory, and you are checking
              one clean range of rows instead of hunting through the whole grid.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              It also leaves you room to change your mind. You still have the rest of the exam ahead
              of you, so if something clicks later, you can come back and fix a mark calmly instead
              of doing it in the final minute with a queue already forming at the front of the hall.
            </p>
          </div>

          <figure className="my-10 overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src={examHallImg.url}
              alt="Hundreds of applicants seated at single desks in a large exam hall during the WU Vienna entrance exam"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-96"
            />
            <figcaption className="bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              The room where the sheet is filled in: single desks, one shared clock, no questions
              allowed. Everyone here knows the material. The last few minutes decide the rest.
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

          <blockquote
            className="mt-6 border-l-2 pl-4 text-base italic leading-relaxed text-foreground"
            style={{ borderColor: PRODUCT_ORANGE }}
          >
            "The sheet should be the boring part of your exam. If it is the stressful part, you
            simply have not done it enough times yet."
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Do it enough times here and exam day stops being your first attempt.
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
