import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are the tasks and mock tests similar to the real exam?",
    answer:
      "Yes, absolutely. Every single case in our database is engineered to replicate the real exam experience with maximum precision. We follow the official True/False framework with exactly 5 independent statements per case, completely eliminating blind guessing. Instead of just repeating standard definitions, our platform introduces the same intricate logical, timeline, and structural traps that match the high difficulty level of the actual university entrance test.",
  },
  {
    question: "Is the information updated every single year?",
    answer:
      "Yes, our content engine tracks changes constantly to ensure perfect synchronization. All questions, formulas, and language parameters across all three subjects (Economics, Mathematics, and Language Proficiency) are dynamically updated to align strictly with the most recent university entry guidelines and the current versions of the official materials. You will never waste time practicing outdated concepts.",
  },
  {
    question: "Does the course help students deal with parts where they struggle?",
    answer:
      "Yes, this is directly solved by our signature feature: Isolated Tactical Explanations. The moment you click the check button, the simulator unfolds a dedicated breakdown directly beneath each individual statement, instantly revealing the exact logic or trap where most students struggle. Furthermore, your dashboard includes a dedicated Error Tracking Revision Block, allowing you to automatically filter and rerun only the specific cases you failed, ensuring you master your weakest topics before the exam day.",
  },
  {
    question: "Can I experience the actual exam-day atmosphere before the test?",
    answer:
      "Yes, completely. You can run full Mock Tests that replicate the exact layout and strict time limits of the real exam day. To ensure a 100% authentic experience, we have integrated official Answer Sheets (Antwortbögen). You will practice transferring your choices under time pressure, eliminating any risk of formatting mistakes during the actual test.",
  },
  {
    question: "Why should I choose this specific simulator over other prep options?",
    answer:
      "Because we don't just give you plain textbooks—we provide a premium simulator with unique tools you won't find anywhere else on the market. We built exclusive, market-first features: Stress-Test Modules to handle exam pressure, Timing Tests to master your speed, and an automatic Revision Block to fix your mistakes. Combined with real answer sheet replicas and instant feedback, it is the only tool available that makes you 100% ready for the actual exam.",
  },
  {
    question: "Can I use the simulator on my phone, or do I need a PC?",
    answer:
      "The platform is fully responsive and optimized for all devices, including smartphones, tablets, and laptops. Every interactive True/False toggle, slide-down tactical explanation, and dashboard tracker is engineered to run flawlessly on any screen size. This cross-device optimization ensures you can maximize your preparation efficiency and practice high-stress exam tasks on the go, anytime and anywhere.",
  },
  {
    question: "Is there a limit on how many times I can reset and rerun the tests?",
    answer:
      "No, absolutely zero limits. Within each chapter, you can simply click the reset button and specifically choose which sections or question sets you want to clear. You can repeat this customizable reset process infinitely, allowing you to rerun the entire multi-subject question database 5, 10, or 20 times right up until your actual exam date to master your speed and analytical skills.",
  },
  {
    question: "How long do I keep access to the platform after purchasing?",
    answer:
      "Your premium access remains fully active until the official university entrance exam date for the current academic year concludes. You get continuous, unlimited access to the entire question database, error-tracking features, and all structural updates right up until you walk into the test room.",
  },
];

export function FaqAccordion() {
  return (
    <section className="relative bg-paper px-6 py-24 lg:px-8 lg:py-32">
      <div aria-hidden className="omr-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-ballpoint">
          Questions & Answers
        </p>
        <h2 className="mt-5 text-center font-display text-3xl font-extrabold tracking-tight text-graphite sm:text-4xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0 border-t border-border/40 first:border-t-0"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold text-graphite hover:no-underline [&[data-state=open]>svg]:text-ballpoint">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-taupe">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
