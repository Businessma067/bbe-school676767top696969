export type NewsParagraphBlock = {
  type: "p";
  text: string;
};

export type NewsHeadingBlock = {
  type: "h2";
  text: string;
};

export type NewsAsideBlock = {
  type: "aside";
  text: string;
};

export type NewsFigureBlock = {
  type: "figure";
  id: string;
  caption: string;
};

export type NewsCriteriaBlock = {
  type: "criteria";
  caption: string;
  intro: string;
  criteria: Array<{
    id: string;
    title: string;
    weight: string;
    detail: string;
  }>;
};

export type NewsLanesBlock = {
  type: "lanes";
  caption: string;
  lanes: Array<{
    id: string;
    label: string;
    tone: string;
    blurb: string;
    example: string;
  }>;
};

export type NewsBodyBlock =
  | NewsParagraphBlock
  | NewsHeadingBlock
  | NewsAsideBlock
  | NewsFigureBlock
  | NewsCriteriaBlock
  | NewsLanesBlock;

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
      "A proper first post: why this feed exists, what we refuse to publish here, and how we decide a note is worth your time.",
    body: [
      {
        type: "p",
        text: "I am going to write this the same way we write everything else around here, which means slowly and with too many opinions. For months the useful updates lived in the wrong rooms. A scoring tweak showed up in a chat nobody searches later. A bank rewrite got buried in a release note that read like a grocery list. Exam tips sat in half-finished drafts because finishing them felt less urgent than fixing one more True/False key. Eventually we got tired of answering the same questions twice, so we made this page.",
      },
      {
        type: "p",
        text: "This is not a marketing blog. If a sentence only exists to sound impressive, it does not belong here. This is also not a changelog dump. You do not need a post every time we rename a button. What you do need is a place where the people building BBE School can explain a change when that change actually alters how you practice, how a mock feels, or how we think about WU entrance prep for BBE and WiSo.",
      },
      {
        type: "aside",
        text: "If a post ever disagrees with what you see in a live demo, trust the product and tell us. These notes should follow the software, not the other way around.",
      },
      {
        type: "h2",
        text: "What we take into account before we publish",
      },
      {
        type: "p",
        text: "Before anything lands in this feed, we ask a boring question that saves everyone time: would a student who is already mid-prep change what they do this week because of this note? If the answer is no, we keep it in the team channel. If the answer is yes, we write it out in full sentences instead of hiding it behind a commit message. That filter is why some weeks will look quiet. Quiet is fine. Noise is expensive when you are studying under a clock.",
      },
      {
        type: "lanes",
        caption:
          "Tap a lane to see the kind of post we allow there. Most notes stay in one lane on purpose so you know what you are opening.",
        lanes: [
          {
            id: "product",
            label: "Product",
            tone: "#c45f1a",
            blurb: "Shipped changes that affect practice, mocks, or the dashboard.",
            example:
              "We changed how partial credit floors a task, so your demo score now matches the rule we teach on the scoring page.",
          },
          {
            id: "craft",
            label: "Exam craft",
            tone: "#3a5a78",
            blurb: "How banks, keys, and explanations get rewritten.",
            example:
              "We threw out a batch of economics claims that only looked hard because the wording was muddy, then rebuilt the false candidates from scratch.",
          },
          {
            id: "study",
            label: "Study notes",
            tone: "#3d6b5a",
            blurb: "Short prep habits that still help the week before a sitting.",
            example:
              "Stop grinding every unmarked statement. On BBE scoring, strategic blanks often protect more points than confident guesses.",
          },
        ],
      },
      {
        type: "h2",
        text: "How much we plan to add",
      },
      {
        type: "p",
        text: "We are not aiming for a daily newspaper. A good month for this feed looks like a few solid posts, not twenty thin ones. Product notes appear when the product actually moves. Exam-craft posts appear after a bank pass big enough that old muscle memory stops working. Study notes appear when the same mistake keeps showing up in reviews and demos. If we ever start padding the feed to look busy, please call us out, because that is exactly the habit we are trying to escape.",
      },
      {
        type: "p",
        text: "If you are already inside a course, treat these posts as a quiet companion. Read them when something feels off or when you want the reason behind a change. If you are only exploring BBE School, the feed is still useful, because it shows how we think: mixed claim styles, no plug-in shortcuts, practice that is supposed to feel like the real room. Come back when a new note lands. We will keep writing like people who argue about domains and partial credit at odd hours, because that is who we are.",
      },
    ],
  },
  {
    slug: "how-we-build-mock-exams",
    title: "How we build mock exams",
    date: "2026-09-20",
    author: "BBE School creators",
    summary:
      "What we weigh before a task ships, how much of a draft bank we keep, and why we add some claims while cutting others that looked fine on first read.",
    body: [
      {
        type: "p",
        text: "People keep asking why our mocks feel harder than a lot of practice packs they find elsewhere. The honest answer is that we are not trying to make you feel ready after forty minutes of gentle questions. A soft mock flatters you and then abandons you on exam day. We would rather you leave a sitting a little annoyed and very clear about where the points leaked. That preference shapes every task we add, every false claim we keep, and every explanation we refuse to leave as a one-line identity dump.",
      },
      {
        type: "p",
        text: "When a bank rewrite starts, the fun part is inventing stems. That part is also the smallest part. Most of the week disappears into quieter work: checking that the domain still matches the course map, making sure a false candidate is false for a clean reason, syncing True/False keys to the stepped solution, and rewriting explanations so they still read under time pressure. If we skip any of those, the mock stops being hard in a useful way and becomes noisy instead.",
      },
      {
        type: "h2",
        text: "What we take into account before we add a task",
      },
      {
        type: "p",
        text: "We do not add a task because the topic list still has a hole and the calendar looks scary. We add it when the claim cluster teaches a real exam behavior. Open the checks below if you want the same checklist we argue over in review. Each one can block a task from shipping even when the stem looks clever.",
      },
      {
        type: "criteria",
        caption:
          "Click a check to see why it matters. In the last major pass, false-candidate quality and explanation steps blocked more tasks than missing topics did.",
        intro:
          "These are the questions we ask before a cluster reaches a live demo. If two of them fail, the task usually goes back to draft instead of into the bank.",
        criteria: [
          {
            id: "claim-shape",
            title: "Do the claims almost work?",
            weight: "High",
            detail:
              "A false statement should survive a quick skim. If you can reject it in half a second because the wording is cartoonishly wrong, it is not exam-shaped yet. A true statement should not announce itself with textbook phrasing either.",
          },
          {
            id: "domain",
            title: "Does the domain still match the map?",
            weight: "High",
            detail:
              "Especially in math, a beautiful algebra path means nothing if the discarded root or restricted domain was the actual point of the item. We would rather cut a pretty stem than teach a false shortcut.",
          },
          {
            id: "key-sync",
            title: "Do keys and steps agree?",
            weight: "Blocking",
            detail:
              "If the True/False key says one thing and the stepped solution implies another, the task is out. Students should never have to choose between the explanation and the mark scheme.",
          },
          {
            id: "partial-credit",
            title: "Does scoring teach the right caution?",
            weight: "Medium",
            detail:
              "On BBE-style statement clusters, over-marking is part of the skill. We keep an eye on whether a cluster rewards careful blanks or quietly pushes people into confident wrong marks.",
          },
          {
            id: "time-read",
            title: "Can the explanation be read tired?",
            weight: "Medium",
            detail:
              "If the solution only makes sense when you already know the answer, it fails. The next algebraic or economic step has to be visible to someone who just lost points and still has twelve minutes on the clock.",
          },
        ],
      },
      {
        type: "h2",
        text: "How much we add, and how much we throw away",
      },
      {
        type: "p",
        text: "The volume question matters because students assume a bigger bank is always a better bank. We do not. In the last economics pass we drafted around forty clusters, kept roughly eighteen in something close to their first form, reworked about eleven until the claims behaved, and cut more than twenty that only looked hard because the language was muddy or the false options were lazy. That cut rate is not a failure. It is the product.",
      },
      {
        type: "figure",
        id: "mock-keep-cut",
        caption:
          "Illustrative counts from the last economics bank pass. Drafting is cheap compared with deciding what deserves to stay in front of a student.",
      },
      {
        type: "aside",
        text: "If a task only feels difficult because you need three readings to parse the sentence, that is not exam difficulty. That is us being unclear, and those tasks get cut.",
      },
      {
        type: "h2",
        text: "Why we add this and not that",
      },
      {
        type: "p",
        text: "We add a claim when it forces a decision students actually face in the room. In economics that often means a definition trap sitting next to a market-logic claim, or an accounting identity that is true in one framing and false in another if you rush. In mathematics it means domains, discarded roots, and algebra that refuses to collapse into a memorized pattern. In English it means vocabulary and grammar that still behave like exam English when you are tired, not when you are calmly reviewing flashcards on the sofa.",
      },
      {
        type: "p",
        text: "We leave things out for the opposite reason. A topic can be on the syllabus and still not earn a new cluster if we already have three items teaching the same slip. A clever stem can die in review because the false candidates only work if the student misreads a comma. A long explanation can get rewritten from scratch because it jumped to the identity and skipped the step a nervous candidate needs. Difficulty is not a slider we push up for screenshots. It is a side effect of claims that almost work and explanations that refuse to bluff.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Where editor hours went in the last major bank pass. False-candidate hunting and step polish ate the week. Key sync looks smaller until one mismatch forces a full revisit.",
      },
      {
        type: "p",
        text: "After students finish a hard demo, we care less about the headline score than about where recoverable points leaked. Math usually takes the largest share because one careless domain slip can erase a whole cluster. Economics leaks when people mark confident false claims. English leaks quieter, through precision rather than drama. That pattern tells us whether the bank is teaching exam behavior or just manufacturing frustration. If the frustration has no lesson attached, we rewrite again.",
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Approximate share of avoidable point loss by section in recent high-difficulty demo reviews. This is one of the signals we use when deciding what to add next.",
      },
      {
        type: "p",
        text: "None of this is instant, and that is deliberate. A fast rewrite can refresh surface variety while quietly breaking key sync. A slow rewrite lets us throw out tasks that only looked hard for the wrong reasons. If a task feels off while you practice, tell us which claim and why. Creator posts here will keep flagging the larger bank rewrites when they reach live demos and course mocks, including the boring keep-or-cut decisions that make the sitting trustworthy.",
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
