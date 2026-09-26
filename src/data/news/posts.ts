export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO date YYYY-MM-DD
  author: string;
  summary: string;
  body: string[];
};

/** Static creator posts — edit this file to publish. Newest first after sort. */
const POSTS: NewsPost[] = [
  {
    slug: "welcome-to-bbe-school-news",
    title: "Welcome to BBE School News",
    date: "2026-09-26",
    author: "BBE School creators",
    summary:
      "A short note from the team: this is where we will share product updates, exam tips, and behind-the-scenes prep notes.",
    body: [
      "We opened this page so updates from the creators have a clear home — not buried in chat threads or scattered social posts.",
      "Expect short posts about what we ship, how we think about WU entrance prep, and practical notes for BBE and WiSo candidates.",
      "If you are already studying with us, check back here when something new lands. If you are just exploring, the feed is a good way to see how we work.",
    ],
  },
  {
    slug: "how-we-build-mock-exams",
    title: "How we build mock exams",
    date: "2026-09-20",
    author: "BBE School creators",
    summary:
      "Why our mocks are hard on purpose, and what we look for when we rewrite a task bank.",
    body: [
      "A mock only helps if it feels like the real sitting: mixed claim styles, no plug-in shortcuts, and explanations that show the next algebraic step — not a one-line identity dump.",
      "When we rewrite a bank, we check domains, discard false candidates, and make sure True/False keys match the stepped solutions. That work is slow on purpose.",
      "If a task feels off, tell us. Creator posts here will also flag larger rewrites when they ship to the live demos and course mocks.",
    ],
  },
];

export function getAllNewsPosts(): NewsPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getNewsPostPaths(): string[] {
  return POSTS.map((post) => `/news/${post.slug}`);
}

export function formatNewsDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
