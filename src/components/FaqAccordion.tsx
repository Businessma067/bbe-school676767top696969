import { SeoFaq } from "@/components/SeoFaq";

export const homepageFaqs = [
  {
    question: "Are the tasks and mock tests similar to the real exam?",
    answer:
      "Yes. Cases follow the same True/False shape as the entrance exam, with several independent statements under one stem, and they include the logic and wording traps that actually cost points rather than recycling textbook definitions.",
  },
  {
    question: "Is the information updated every single year?",
    answer:
      "We refresh questions, formulas, and language practice when WU’s materials and guidelines change for the cycle you are sitting, so you are not drilling last year’s framing while the exam has already moved on.",
  },
  {
    question: "Does the course help students deal with parts where they struggle?",
    answer:
      "After you check an answer, each statement gets its own short explanation of why it is true or false and where people usually slip. On the dashboard you can filter back to the cases you missed and rerun only those until the weak spots stop surprising you.",
  },
  {
    question: "Can I experience the actual exam-day atmosphere before the test?",
    answer:
      "You can sit full mocks with the same kind of time pressure and layout, including practice with Antwortbögen so transferring marks under the clock is already familiar before you walk into the hall.",
  },
  {
    question: "Why should I choose this specific simulator over other prep options?",
    answer:
      "The tools are built around the format itself: timed sets, scoring that behaves like the Teilpunktesystem, revision of your own mistakes, and answer-sheet practice. Rereading a skriptum once more rarely fixes that.",
  },
  {
    question: "Can I use the simulator on my phone, or do I need a PC?",
    answer:
      "It works on phone, tablet, and laptop. The toggles, explanations, and trackers stay usable on a small screen so you can keep a short daily session going even when you are not at a desk.",
  },
  {
    question: "Is there a limit on how many times I can reset and rerun the tests?",
    answer:
      "No. Inside a chapter you can reset the sections you want and run the bank again as often as you need until the exam date, whether that is five times or twenty.",
  },
  {
    question: "How long do I keep access to the platform after purchasing?",
    answer:
      "Access stays open through the official entrance exam date for your academic year, including updates and error-tracking, so you can keep practicing until you sit the paper.",
  },
];

/** WiSo landing FAQ — plain register, aligned with homepageFaqs tone. */
export const wisoFaqs = [
  {
    question: "Are the tasks and mock tests similar to the real exam?",
    answer:
      "Yes. We write cases in the same True/False shape the Aufnahmeprüfung uses, with several independent statements under one stem, and we pack in the logic and wording traps that actually cost points on exam day rather than recycling textbook definitions.",
  },
  {
    question: "Is the information updated every single year?",
    answer:
      "We refresh questions, formulas, and language practice when WU’s materials and guidelines change for the cycle you are sitting, so you are not drilling last year’s framing while the exam has already moved on.",
  },
  {
    question: "Does the course help students deal with parts where they struggle?",
    answer:
      "After you check an answer, each statement gets its own short explanation of why it is true or false and where people usually slip. On the dashboard you can filter back to the cases you missed and rerun only those until the weak spots stop surprising you.",
  },
  {
    question: "Can I experience the actual exam-day atmosphere before the test?",
    answer:
      "You can sit full mocks with the same kind of time pressure and layout, including practice with Antwortbögen so transferring marks under the clock is already familiar before you walk into VIECON.",
  },
  {
    question: "Why should I choose this specific simulator over other prep options?",
    answer:
      "I built this for the format itself: timed sets, scoring that behaves like the Teilpunktesystem, revision of your own mistakes, and answer-sheet practice, because WiSo is not won by rereading a skriptum once more.",
  },
  {
    question: "Can I use the simulator on my phone, or do I need a PC?",
    answer:
      "It works on phone, tablet, and laptop. The toggles, explanations, and trackers are meant to stay usable on a small screen so you can keep a short daily session going even when you are not at a desk.",
  },
  {
    question: "Is there a limit on how many times I can reset and rerun the tests?",
    answer:
      "No. Inside a chapter you can reset the sections you want and run the bank again as often as you need until the exam date, whether that is five times or twenty.",
  },
  {
    question: "How long do I keep access to the platform after purchasing?",
    answer:
      "Access stays open through the official entrance exam date for your academic year, including updates and error-tracking, so you can keep practicing until you sit the paper.",
  },
];

function FaqSection({ items }: { items: typeof homepageFaqs }) {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Frequently asked questions
        </h2>

        <SeoFaq
          className="mt-10"
          items={items}
          questionClassName="text-lg text-espresso"
          answerClassName="text-base text-taupe"
        />
      </div>
    </section>
  );
}

export function FaqAccordion() {
  return <FaqSection items={homepageFaqs} />;
}

export function WisoFaqAccordion() {
  return <FaqSection items={wisoFaqs} />;
}
