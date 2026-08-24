import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type BbeFaqItem = { question: string; answer: string };

export function BbeFaqAccordion({ faqs }: { faqs: BbeFaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="mt-2">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
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
