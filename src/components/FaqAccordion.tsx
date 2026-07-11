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
];

export function FaqAccordion() {
  return (
    <section className="bg-ivory px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-caramel">
          Questions & Answers
        </p>
        <h2 className="mt-5 text-center font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0 border-t border-border/40 first:border-t-0"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-espresso hover:no-underline [&[data-state=open]>svg]:text-caramel">
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
