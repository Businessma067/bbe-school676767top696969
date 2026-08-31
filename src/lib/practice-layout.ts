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
