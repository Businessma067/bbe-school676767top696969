/**
 * Full-bleed shell for practice / exam take UIs.
 * Fluid padding only — no max-width "virtual rectangle".
 */
export const PRACTICE_PAGE = "min-h-dvh w-full bg-background font-sans text-foreground antialiased";

export const PRACTICE_HEADER_INNER =
  "mx-auto flex w-full max-w-none flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3 lg:px-8 xl:px-10";

export const PRACTICE_BODY =
  "mx-auto flex w-full max-w-none flex-1 gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:gap-5 lg:px-8 xl:px-10";

/** Stack/row shells used by Full Course + Demo practice. */
export const PRACTICE_BODY_STACK =
  "mx-auto flex w-full max-w-none flex-col gap-4 px-3 py-4 sm:gap-6 sm:px-5 sm:py-6 lg:flex-row lg:px-8 lg:py-8 xl:px-10 2xl:px-12";
