import { FEATURE_POSTS } from "./feature-posts";
import type { NewsPost } from "./types";

export type {
  NewsAsideBlock,
  NewsBodyBlock,
  NewsCriteriaBlock,
  NewsCtaBlock,
  NewsFigureBlock,
  NewsHeadingBlock,
  NewsLanesBlock,
  NewsMediaBlock,
  NewsParagraphBlock,
  NewsPost,
  NewsStepsBlock,
  NewsTimelineBlock,
  NewsToolBlock,
} from "./types";

/** Static creator posts — edit this file / feature-posts.ts to publish. */
const CORE_POSTS: NewsPost[] = [
  {
    slug: "welcome-to-bbe-school-news",
    title: "Welcome to BBE School News",
    date: "2026-09-26",
    author: "BBE School creators",
    summary:
      "We finally gave updates a home. Same people who break keys at midnight, writing in public when something actually matters.",
    body: [
      {
        type: "p",
        text: "Alright. This page exists because I got tired of hunting our own updates in chat threads. A scoring tweak would land in Slack, a bank rewrite would hide in a release note shaped like a shopping list, and exam tips would rot in drafts while we fixed one more True/False mismatch. So here we are: a feed for the people building BBE School, written like we talk when nobody is filming a launch video.",
      },
      {
        type: "p",
        text: "I am not going to pretend this is a magazine. If a sentence only exists to sound clever, delete energy. If a commit only renamed a button, it stays out. What belongs here is the stuff that changes how you practice this week: a mock that got harder for a reason, a feature that left the lab, a habit we keep seeing in reviews.",
      },
      {
        type: "aside",
        text: "If a post disagrees with the live product, trust the product and ping us. We would rather look wrong in a paragraph than leave you studying a ghost UI.",
      },
      {
        type: "p",
        text: "Tap the lanes below if you want the boring sorting rule we use. Most notes sit in one lane on purpose so you know what you are opening before you spend the coffee.",
      },
      {
        type: "lanes",
        caption:
          "Product for shipped changes, exam craft for bank work, study notes for habits. Mixed posts happen, but we try not to make a salad out of every update.",
        lanes: [
          {
            id: "product",
            label: "Product",
            tone: "#c45f1a",
            blurb: "Shipped changes that affect practice, mocks, or the dashboard.",
            example:
              "Demo Exam went public without an account wall, so a hard diagnostic no longer hides behind signup.",
          },
          {
            id: "craft",
            label: "Exam craft",
            tone: "#3a5a78",
            blurb: "How banks, keys, and explanations get rewritten.",
            example:
              "We cut a stack of economics claims that only looked hard because the sentences were muddy.",
          },
          {
            id: "study",
            label: "Study notes",
            tone: "#3d6b5a",
            blurb: "Short prep habits that still help the week before a sitting.",
            example:
              "Strategic blanks often protect more BBE points than confident wrong marks.",
          },
        ],
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/campus-plaza.jpg",
        alt: "WU Vienna campus plaza",
        caption:
          "We write these notes for people aiming at that campus, not for a generic edtech moodboard.",
      },
      {
        type: "p",
        text: "Scroll the older posts if you want the ship dates. We backfilled release notes we should have written in May through September, each with its own tools, clips, and charts. Not every Tuesday. Just the days that actually moved the product. If you are mid-course, treat this feed like a companion, not homework. If you are only looking around, it is a decent way to see how we think before you buy anything.",
      },
    ],
  },
  {
    slug: "how-we-build-mock-exams",
    title: "How we build mock exams",
    date: "2026-09-20",
    author: "BBE School creators",
    summary:
      "Why the papers stay hard, what we weigh before a task ships, and why we throw away clusters that looked fine on Monday.",
    body: [
      {
        type: "p",
        text: "Someone asked again why our mocks feel meaner than half the practice packs floating around. Short version: we are not trying to tuck you into bed with a confidence score. A soft mock flatters you and then ghosts you on exam day. I would rather you leave practice annoyed and precise about where the points leaked.",
      },
      {
        type: "p",
        text: "Inventing stems is the cute part of a bank rewrite. The week still disappears into domain checks, false candidates that almost work, keys that match the steps, and explanations you can read when you are tired. Skip those and the mock is not hard anymore. It is just noisy.",
      },
      {
        type: "p",
        text: "Open the checks if you want the same arguments we have in review. Any one of them can kill a task that looked clever in the draft folder.",
      },
      {
        type: "criteria",
        caption:
          "Click around. False-candidate quality and readable steps blocked more tasks last pass than missing topics did.",
        intro:
          "If two of these fail, the cluster usually goes back to draft instead of into a live demo.",
        criteria: [
          {
            id: "claim-shape",
            title: "Do the claims almost work?",
            weight: "High",
            detail:
              "A false statement should survive a quick skim. If you can reject it instantly because it is cartoonishly wrong, it is not exam-shaped yet.",
          },
          {
            id: "domain",
            title: "Does the domain still match the map?",
            weight: "High",
            detail:
              "Pretty algebra means nothing if the discarded root was the point. We cut pretty stems that teach false shortcuts.",
          },
          {
            id: "key-sync",
            title: "Do keys and steps agree?",
            weight: "Blocking",
            detail:
              "If the True/False key and the stepped solution disagree, the task is out. No choosing between mark scheme and explanation.",
          },
          {
            id: "partial-credit",
            title: "Does scoring teach the right caution?",
            weight: "Medium",
            detail:
              "Over-marking is part of the skill on statement clusters. We watch whether a task rewards careful blanks or confident wrong marks.",
          },
          {
            id: "time-read",
            title: "Can the explanation be read tired?",
            weight: "Medium",
            detail:
              "If the solution only makes sense when you already know the answer, rewrite it. The next step has to show up under time pressure.",
          },
        ],
      },
      {
        type: "p",
        text: "Volume is the other fight. Bigger banks are not automatically better. Last economics pass we drafted around forty clusters, kept about eighteen close to the first form, reworked eleven, and cut more than twenty that only looked hard because the wording was muddy. That cut rate is the product, not a tragedy.",
      },
      {
        type: "figure",
        id: "mock-keep-cut",
        caption:
          "Illustrative counts from the last economics bank pass. Drafting is cheap. Deciding what stays in front of a student is not.",
      },
      {
        type: "aside",
        text: "If you need three readings just to parse the sentence, that is not exam difficulty. That is us being unclear.",
      },
      {
        type: "p",
        text: "We add a claim when it forces a decision you will actually meet in the room. Economics likes definition traps next to market logic. Math likes domains and discarded roots. English likes register that still bites when you are tired. We leave things out when we already teach the same slip three times, or when a false option only works if you misread a comma.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Where editor hours went last major pass. False-candidate hunting and step polish ate the week.",
      },
      {
        type: "p",
        text: "After a hard demo we stare at recoverable leaks more than the headline score. Math usually leads. Economics follows through over-marking. English stays quieter and stubborn. If the frustration has no lesson attached, we rewrite again. Slow on purpose.",
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Approximate avoidable point loss by section in recent high-difficulty demo reviews. One signal for what we add next.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/economics.mp4",
        poster: "/how-it-works/economics-poster.jpg",
        alt: "Economics practice how-it-works video",
        caption:
          "A slice of how economics practice feels in product. The bank work behind that reel is what this post is really about.",
      },
    ],
  },
];

const POSTS: NewsPost[] = [...CORE_POSTS, ...FEATURE_POSTS];

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
