import { lazy, Suspense, type ComponentProps } from "react";

const FlashcardMath = lazy(() =>
  import("@/components/FlashcardMath").then((m) => ({ default: m.FlashcardMath })),
);

type Props = ComponentProps<typeof FlashcardMath>;

/** Dynamically loads katex + FlashcardMath; shows plain text until ready. */
export function LazyFlashcardMath({ text, className, displayPrefer }: Props) {
  return (
    <Suspense
      fallback={
        <span className={className} data-no-i18n>
          {text}
        </span>
      }
    >
      <FlashcardMath text={text} className={className} displayPrefer={displayPrefer} />
    </Suspense>
  );
}
