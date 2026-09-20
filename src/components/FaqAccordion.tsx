import { SeoFaq } from "@/components/SeoFaq";

export const homepageFaqs = [
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

/** WiSo landing FAQ — separate from shared BBE/homepageFaqs brochure answers. */
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
    <section className="bg-ivory px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Frequently asked questions
        </h2>

        <SeoFaq
          className="mt-12"
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
