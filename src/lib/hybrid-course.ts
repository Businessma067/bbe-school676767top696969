/** Hybrid BBE + WiSo course constants and helpers. */

export const HYBRID_FULL_COURSE_SLUG = "hybrid-full-course" as const;
export const HYBRID_HUB_HREF = "/hybrid/course" as const;
export const HYBRID_PRODUCT_HREF = "/products/hybrid-course" as const;
export const HYBRID_ACCENT = "#0F766E" as const;

/** SKUs unlocked together when Hybrid is purchased. */
export const HYBRID_IMPLIED_SLUGS = [
  HYBRID_FULL_COURSE_SLUG,
  "full-course",
  "wiso-full-course",
] as const;

export const HYBRID_NAV = [
  { to: "/hybrid/course", label: "Course", short: "Course" },
  { to: "/hybrid/math", label: "Shared Math", short: "Math" },
  { to: "/hybrid/bridge", label: "Bridge Cases", short: "Bridge" },
  { to: "/hybrid/mirror", label: "Mirror Drill", short: "Mirror" },
  { to: "/hybrid/exam-flip", label: "Exam Flip", short: "Flip" },
  { to: "/hybrid/dual-mock", label: "Dual Mock Day", short: "Mocks" },
  { to: "/hybrid/decision-lab", label: "Decision Lab", short: "Lab" },
] as const;
