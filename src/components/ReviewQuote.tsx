import { useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function ReviewQuote({
  original,
  english,
  ukrainian,
  sourceLang = "en",
  className,
  expanded = false,
  onMeasure,
}: {
  /** Text the student actually wrote. */
  original: string;
  english: string;
  ukrainian: string;
  sourceLang?: "en" | "de";
  className?: string;
  expanded?: boolean;
  onMeasure?: (overflows: boolean) => void;
}) {
  const { lang } = useLanguage();
  const [translated, setTranslated] = useState(false);
  const localRef = useRef<HTMLParagraphElement>(null);
  const german = sourceLang === "de";
  const translation = lang === "uk" ? ukrainian : english;
  const text = german && !translated ? original : german ? translation : original;

  useLayoutEffect(() => {
    const el = localRef.current;
    if (!el || !onMeasure || expanded) return;
    onMeasure(el.scrollHeight > el.clientHeight + 1);
  }, [text, expanded, onMeasure]);

  const paragraph = (
    <p ref={localRef} className={cn("whitespace-pre-line", className)} data-no-i18n={german ? true : undefined}>
      {text}
    </p>
  );

  if (!german) return paragraph;

  return (
    <div>
      <button
        type="button"
        onClick={() => setTranslated((value) => !value)}
        className="mb-2 text-xs font-semibold text-foreground underline underline-offset-4"
      >
        {translated ? "Show original" : "Translate"}
      </button>
      {paragraph}
    </div>
  );
}
