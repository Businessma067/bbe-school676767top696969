import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Scroll to #section after landing on the homepage with a hash. */
export function HashScrollOnLoad() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    requestAnimationFrame(scroll);
    const t = window.setTimeout(scroll, 120);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
