import { useEffect, useState } from "react";

export function IntroSplash() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bbe_intro_played")) {
      setSkip(true);
      setHidden(true);
      return;
    }
    sessionStorage.setItem("bbe_intro_played", "1");
    const t1 = setTimeout(() => setFadeOut(true), 1000);
    const t2 = setTimeout(() => setHidden(true), 1450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (skip || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="intro-content flex items-center gap-5 px-6">
        <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-xl ring-1 ring-primary/30">
          <span className="font-display text-lg font-bold leading-none text-primary-foreground tracking-tight">
            BBE
          </span>
        </div>

        <div className="flex flex-col leading-tight whitespace-nowrap">
          <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            BBE-School
          </span>
          <span className="mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-taupe">
            Be ready for everything
          </span>
        </div>
      </div>

      <style>{`
        @keyframes intro-brightness-in {
          0% {
            opacity: 0;
            transform: scale(0.96);
            filter: brightness(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
        }
        .intro-content {
          animation: intro-brightness-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>
  );
}
