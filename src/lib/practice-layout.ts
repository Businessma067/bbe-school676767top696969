/**
 * Full-bleed shell for practice / exam take UIs.
 * Fluid padding only — no max-width "virtual rectangle".
 * Safe-area insets keep chrome clear of iOS home indicator / notches.
 */
export const PRACTICE_PAGE =
  "min-h-dvh w-full bg-background font-sans text-foreground antialiased pb-[env(safe-area-inset-bottom)]";

export const PRACTICE_HEADER_INNER =
  "mx-auto flex w-full max-w-none flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3 lg:px-8 xl:px-10";

export const PRACTICE_BODY =
  "mx-auto flex w-full max-w-none flex-1 gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:gap-5 lg:px-8 xl:px-10";

/** Stack/row shells used by Full Course + Demo practice. Case column first on phones. */
export const PRACTICE_BODY_STACK =
  "mx-auto flex w-full max-w-none flex-col gap-3 px-3 py-3 sm:gap-5 sm:px-5 sm:py-5 lg:flex-row lg:gap-6 lg:px-8 lg:py-8 xl:px-10 2xl:px-12";

/** Min tap target for True/False and similar practice controls (~44px). */
export const PRACTICE_TAP_TARGET = "min-h-11 min-w-11";

/**
 * Right-rail explanation / calculator slot.
 * On phones the panel grows with content so the page can scroll through the
 * full write-up. From lg up it is a sticky fixed-height rail with inner scroll.
 * Do not put max-height + overflow-hidden on small screens — percentage
 * heights will not resolve and the explanation gets clipped with no scroll.
 */
export const PRACTICE_EXPLAIN_ASIDE =
  "mt-4 w-full min-h-0 lg:sticky lg:top-20 lg:mt-0 lg:block lg:h-[calc(100vh-6rem)] lg:w-[28rem] lg:shrink-0 lg:overflow-hidden xl:w-[32rem] 2xl:w-[36rem]";
