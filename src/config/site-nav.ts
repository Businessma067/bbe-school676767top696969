export type NavItem = {
  label: string;
  href: string;
  isRoute: boolean;
};

/** Top nav — every main page is a real route (homepage sections use # anchors). */
export const navItems: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Demo Practice", href: "/demo-practice", isRoute: true },
  { label: "Products", href: "/products", isRoute: true },
  { label: "Full Course", href: "/products/full-course", isRoute: true },
  { label: "Features", href: "/important-features", isRoute: true },
  { label: "Mock Exams", href: "/mock-exams", isRoute: true },
  { label: "Flashcards", href: "/flashcards", isRoute: true },
  { label: "Matching", href: "/matching", isRoute: true },
  { label: "Tutor Exam", href: "/tutor-exam", isRoute: true },
  { label: "Dashboard", href: "/dashboard", isRoute: true },
  { label: "Parents", href: "/parents", isRoute: true },
  { label: "Reviews", href: "#reviews", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
];
