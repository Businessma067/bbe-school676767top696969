import { cn } from "@/lib/utils";

type ExplanationTextProps = {
  text: string;
  className?: string;
};

/** Renders tactical explanations; supports multi-paragraph text separated by blank lines. */
export function ExplanationText({ text, className }: ExplanationTextProps) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length <= 1) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div className={cn("space-y-2", className)}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
