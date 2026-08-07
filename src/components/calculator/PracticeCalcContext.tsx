import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const PracticeCalcContext = createContext<Ctx | null>(null);

export function PracticeCalcProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((o) => !o),
    }),
    [open],
  );
  return <PracticeCalcContext.Provider value={value}>{children}</PracticeCalcContext.Provider>;
}

/** Returns context when wrapped in PracticeCalcProvider; otherwise null. */
export function usePracticeCalcOptional(): Ctx | null {
  return useContext(PracticeCalcContext);
}

export function usePracticeCalc(): Ctx {
  const ctx = useContext(PracticeCalcContext);
  if (!ctx) {
    return {
      open: false,
      setOpen: () => undefined,
      toggle: () => undefined,
    };
  }
  return ctx;
}
