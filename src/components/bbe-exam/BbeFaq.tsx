import { SeoFaq } from "@/components/SeoFaq";

export type BbeFaqItem = { question: string; answer: string };

export function BbeFaqAccordion({ faqs }: { faqs: BbeFaqItem[] }) {
  return (
    <SeoFaq
      className="mt-2"
      items={faqs}
      questionClassName="text-[1.0625rem] sm:text-lg"
      answerClassName="text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]"
    />
  );
}

export function buildFaqJsonLd(faqs: BbeFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
