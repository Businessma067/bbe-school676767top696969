import { useEffect, useState } from "react";

export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bbe_intro_played")) return;
    sessionStorage.setItem("bbe_intro_played", "1");
    setMounted(true);
    const t1 = setTimeout(() => setFadeOut(true), 1300);
    const t2 = setTimeout(() => setHidden(true), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-out ${
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
            transform: scale(0.95);
            filter: brightness(0.4);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
        }
        .intro-content {
          animation: intro-brightness-in 1.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>
  );
}
