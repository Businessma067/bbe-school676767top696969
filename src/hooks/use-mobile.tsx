import * as React from "react";

/** Matches Tailwind `md` (shadcn sidebar convention). */
const MOBILE_BREAKPOINT = 768;
/** Matches Tailwind `lg` — practice chrome switches to desktop sidebar here. */
const LG_BREAKPOINT = 1024;

function useMediaBelow(breakpoint: number) {
  const [below, setBelow] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setBelow(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setBelow(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!below;
}

export function useIsMobile() {
  return useMediaBelow(MOBILE_BREAKPOINT);
}

/** True below `lg` (1024px) — use for practice chapter drawers vs sticky sidebar. */
export function useIsBelowLg() {
  return useMediaBelow(LG_BREAKPOINT);
}
