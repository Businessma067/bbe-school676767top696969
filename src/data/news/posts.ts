export type NewsParagraphBlock = {
  type: "p";
  text: string;
};

export type NewsFigureBlock = {
  type: "figure";
  id: string;
  caption: string;
};

export type NewsBodyBlock = NewsParagraphBlock | NewsFigureBlock;

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO date YYYY-MM-DD
  author: string;
  summary: string;
  body: NewsBodyBlock[];
};

/** Static creator posts — edit this file to publish. Newest first after sort. */
const POSTS: NewsPost[] = [
  {
    slug: "welcome-to-bbe-school-news",
    title: "Welcome to BBE School News",
    date: "2026-09-26",
    author: "BBE School creators",
    summary:
      "Why this feed exists, what we will publish here, and how it fits beside the courses, mocks, and demos you already use.",
    body: [
      {
        type: "p",
        text: "For a long time, the useful updates lived in the wrong places. A scoring tweak showed up in a chat thread, a bank rewrite got mentioned in a release note nobody reread, and exam tips drifted into half-finished drafts. We wanted one calm page where the people building BBE School can write in full sentences when something actually matters.",
      },
      {
        type: "p",
        text: "This feed is that page. It is not a marketing blog and it is not a dump of every commit. When we ship a product change that affects how you practice, when we rewrite a mock bank hard enough that old muscle memory stops working, or when we notice a prep habit that keeps showing up in student reviews, it belongs here.",
      },
      {
        type: "figure",
        id: "news-feed-map",
        caption:
          "A simple map of the three lanes we plan to keep in this feed. Most posts will sit clearly in one lane; a few will spill across two.",
      },
      {
        type: "p",
        text: "If you are already inside a course, treat the feed as a quiet companion rather than another homework stream. Product notes will tell you what changed in demos, mocks, and dashboards without forcing you to reverse-engineer the UI. Exam-craft posts will stay close to the work we do on tasks and explanations. Study notes will stay short and practical, the kind of advice that still helps the week before a sitting.",
      },
      {
        type: "p",
        text: "We write these posts ourselves. That means the voice will sound like the people who argue about True/False keys and partial credit at odd hours, not like a polished newsletter factory. Some entries will be short. Others will take their time when the topic needs room, especially when we are explaining why a mock feels harsh or why an explanation now shows the next algebraic step instead of a one-line identity.",
      },
      {
        type: "p",
        text: "If you are only exploring BBE School, the feed is still useful. It shows how we think about WU entrance prep for BBE and WiSo candidates: mixed claim styles, no plug-in shortcuts, and practice that is meant to feel like the real room. Come back when a new post lands. If something in a post disagrees with what you see in a live demo, tell us. Creator notes here should match the product in front of you.",
      },
    ],
  },
  {
    slug: "how-we-build-mock-exams",
    title: "How we build mock exams",
    date: "2026-09-20",
    author: "BBE School creators",
    summary:
      "Why our mocks stay hard on purpose, where rewrite hours go, and what we check before a task bank reaches a live demo.",
    body: [
      {
        type: "p",
        text: "A soft mock flatters you and then abandons you on exam day. We would rather you leave a practice sitting slightly annoyed and clearly informed. That means mixed claim styles under shared stems, distractors that survive a careful read, and explanations that show the next workable step instead of dumping a tidy identity and walking away.",
      },
      {
        type: "p",
        text: "When we rebuild a bank, the romantic part is inventing new stems. The real time disappears elsewhere. Someone has to check that every domain still matches the course map, that false candidates are actually false for a clean reason, that True/False keys agree with the stepped solutions, and that the explanation language is readable under time pressure. Skipping any of those turns a hard mock into a noisy one.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Illustrative editor effort from our last major bank pass. False-candidate hunting and step polish ate the week; key sync looks smaller until a single mismatch forces a full revisit.",
      },
      {
        type: "p",
        text: "Difficulty is not a vibe setting we slide up for marketing screenshots. It comes from the shape of the claims. A good false statement almost works. A good true statement does not announce itself with textbook wording. In Economics that often means definitions and accounting traps sitting next to market logic. In Mathematics it means domains, discarded roots, and algebra that refuses to collapse into a memorized pattern. In English it means vocabulary and grammar that still behave like exam English when you are tired.",
      },
      {
        type: "p",
        text: "After students finish a hard demo, the interesting question is rarely the headline score. It is where recoverable points leaked. Math usually takes the largest share because one careless domain slip or a half-finished case split can erase a whole cluster. Economics leaks when people mark confident false claims. English leaks quieter, through precision rather than drama. We keep an eye on that pattern because it tells us whether the bank is teaching exam behavior or just generating frustration.",
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Approximate share of avoidable point loss by section in recent high-difficulty demo reviews. Math leads; Economics follows through over-marking; English stays smaller but stubborn.",
      },
      {
        type: "p",
        text: "None of this work is instant, and that is deliberate. A fast rewrite can refresh surface variety while quietly breaking key sync. A slow rewrite lets us throw out tasks that only look hard because the wording is muddy. If a task feels off while you practice, tell us. Creator posts here will flag the larger bank rewrites when they reach live demos and course mocks, including the boring parts that actually make the sitting trustworthy.",
      },
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
