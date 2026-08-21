import { useState, type ReactNode } from "react";
import type { FlashcardSubjectId } from "@/data/flashcards";
import { SubjectIcon, SUBJECT_PREVIEW_BG } from "@/components/games/SubjectIcons";

type InteractiveDeckPreviewProps = {
  subject: FlashcardSubjectId;
  title: string;
  backLabel?: string;
  /** Larger hero treatment for subject pickers. */
  size?: "banner" | "hero";
  className?: string;
};

/**
 * Crisp CSS flashcard (sharp contour) that flips like the study deck.
 * Replaces soft photographic PNG previews.
 */
export function InteractiveDeckPreview({
  subject,
  title,
  backLabel = "Tap to study",
  size = "hero",
  className = "",
}: InteractiveDeckPreviewProps) {
  const [flipped, setFlipped] = useState(false);
  const tall = size === "hero";

  return (
    <div
      className={
        "relative w-full overflow-hidden " +
        (tall ? "aspect-video" : "h-full min-h-[8rem]") +
        (className ? ` ${className}` : "")
      }
      style={{ backgroundColor: SUBJECT_PREVIEW_BG[subject] }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          aria-hidden
          className={
            "flashcard-flip w-[58%] max-w-[220px] " +
            (tall ? "sm:w-[52%]" : "w-[46%] max-w-[140px]")
          }
        >
          <div
            className={
              "flashcard-inner games-preview-inner " +
              (flipped ? "is-flipped" : "")
            }
          >
            <CardFace side="front">
              <SubjectIcon
                subject={subject}
                className={tall ? "h-12 w-12 text-foreground" : "h-8 w-8 text-foreground"}
              />
            </CardFace>
            <CardFace side="back">
              <p className="font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
                {title}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-taupe">
                {backLabel}
              </p>
            </CardFace>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardFace({
  side,
  children,
}: {
  side: "front" | "back";
  children: ReactNode;
}) {
  return (
    <div
      className={
        "flashcard-face games-preview-face flex flex-col items-center justify-center rounded-[1.15rem] border-[1.5px] border-foreground/15 bg-white px-4 " +
        (side === "back" ? "flashcard-back" : "")
      }
    >
      {/* Stack layers — sharp offsets, no soft photo blur */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 translate-y-[5px] rounded-[1.15rem] border-[1.5px] border-foreground/10 bg-white"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 translate-y-[10px] rounded-[1.15rem] border-[1.5px] border-foreground/10 bg-white"
      />
      {children}
    </div>
  );
}

/** Three-subject fan used on the Games → Flashcards tile. */
export function InteractiveFlashcardsBanner({
  className = "",
}: {
  className?: string;
}) {
  const cards: { id: FlashcardSubjectId; title: string; rotate: string; z: string }[] = [
    { id: "economics", title: "Economics", rotate: "-rotate-6 translate-y-2", z: "z-10" },
    { id: "math", title: "Math", rotate: "rotate-0 -translate-y-1", z: "z-20" },
    { id: "english", title: "English", rotate: "rotate-6 translate-y-2", z: "z-10" },
  ];

  return (
    <div
      className={
        "relative flex h-32 w-full items-center justify-center overflow-hidden bg-[#f7ebdc] " +
        className
      }
    >
      <div className="flex items-end justify-center gap-2 px-4 sm:gap-3">
        {cards.map((c) => (
          <BannerMiniCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}

function BannerMiniCard({
  id,
  title,
  rotate,
  z,
}: {
  id: FlashcardSubjectId;
  title: string;
  rotate: string;
  z: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      aria-hidden
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className={`flashcard-flip w-[4.6rem] sm:w-[5.25rem] ${rotate} ${z}`}
    >
      <div
        className={
          "flashcard-inner games-preview-inner games-preview-inner--mini " +
          (flipped ? "is-flipped" : "")
        }
      >
        <div className="flashcard-face games-preview-face flex items-center justify-center rounded-xl border-[1.5px] border-foreground/15 bg-white">
          <SubjectIcon subject={id} className="h-7 w-7 text-foreground" />
        </div>
        <div className="flashcard-face flashcard-back games-preview-face flex flex-col items-center justify-center rounded-xl border-[1.5px] border-foreground/15 bg-white px-1.5 text-center">
          <span className="font-display text-[11px] font-bold leading-tight text-foreground">
            {title}
          </span>
          <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-taupe">
            Flip
          </span>
        </div>
      </div>
    </div>
  );
}
