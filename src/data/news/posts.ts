import { FEATURE_POSTS } from "./feature-posts";
import type { NewsPost } from "./types";

export type {
  NewsAsideBlock,
  NewsBodyBlock,
  NewsCriteriaBlock,
  NewsCtaBlock,
  NewsDemoBlock,
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
      "A simple place for product updates, exam notes, and short explanations from the team behind BBE School.",
    body: [
      {
        type: "p",
        text: "We created this page so important updates have a clear home. Before this, small changes were easy to miss: a scoring note in chat, a task-bank rewrite in a release list, or a study tip left unfinished while we fixed something else.",
      },
      {
        type: "p",
        text: "This is not a marketing blog, and it is not a full changelog. We will write here when something changes how you practice, how a mock feels, or how we prepare students for the WU entrance exams for BBE and WiSo.",
      },
      {
        type: "aside",
        text: "If a post does not match what you see in the live product, trust the product and tell us. These notes should follow the software.",
      },
      {
        type: "p",
        text: "Most posts fall into one of three groups. You can open them below to see what each group means.",
      },
      {
        type: "lanes",
        caption:
          "Product posts cover shipped changes. Exam craft covers task banks and explanations. Study notes cover practical prep habits.",
        lanes: [
          {
            id: "product",
            label: "Product",
            tone: "#c45f1a",
            blurb: "Updates that change practice, mocks, or the dashboard.",
            example:
              "Demo Exam is a free hard practice exam. You need a free account to start so we can save your attempt.",
          },
          {
            id: "craft",
            label: "Exam craft",
            tone: "#3a5a78",
            blurb: "How we rewrite tasks, answer keys, and step-by-step solutions.",
            example:
              "We removed economics tasks that looked hard only because the wording was unclear.",
          },
          {
            id: "study",
            label: "Study notes",
            tone: "#3d6b5a",
            blurb: "Short advice that still helps in the final week before the exam.",
            example:
              "On BBE scoring, leaving a statement blank is often safer than marking it when you are unsure.",
          },
        ],
      },
      {
        type: "demo",
        id: "welcome-eng-peek",
        caption:
          "News stays close to product UI: an English connectors cluster, Check Answers, then the explanation panel.",
      },
      {
        type: "p",
        text: "If you scroll further down the feed, you will also find older updates from May to September, with dates for when major features were released. If you already study with us, use this page when something new appears. If you are still deciding, it is a clear way to see how we work.",
      },
    ],
  },
  {
    slug: "how-we-build-mock-exams",
    title: "How we build mock exams",
    date: "2026-09-20",
    author: "BBE School creators",
    summary:
      "Why our practice exams stay difficult, what we check before a task is published, and why we remove many drafts.",
    body: [
      {
        type: "p",
        text: "People often ask why our mock exams feel harder than many other practice sets. The reason is simple: an easy mock can make you feel ready and then leave you unprepared on exam day. We prefer practice that feels close to the real exam, even if the score is lower at first.",
      },
      {
        type: "p",
        text: "Writing new question stems is only one part of the work. Most of the time goes into checking topics, making sure false statements are clearly false for a good reason, matching True/False keys to the solutions, and writing explanations that are still readable under time pressure. If we skip those steps, the mock becomes confusing instead of useful.",
      },
      {
        type: "p",
        text: "Below are the main checks we use before a task goes live. Any one of them can stop a draft from being published.",
      },
      {
        type: "criteria",
        caption:
          "Open each check to see why it matters. In our last major rewrite, weak false statements and unclear explanations blocked more tasks than missing topics.",
        intro:
          "If two of these checks fail, the task usually goes back to draft instead of into a live practice set.",
        criteria: [
          {
            id: "claim-shape",
            title: "Are the statements realistic?",
            weight: "High",
            detail:
              "A false statement should not be obviously wrong at first glance. A true statement should also not be too easy to spot from textbook wording alone.",
          },
          {
            id: "domain",
            title: "Does the math domain still matter?",
            weight: "High",
            detail:
              "In mathematics, a clean calculation is not enough if the domain or a discarded root was the real point of the task. We remove tasks that teach the wrong shortcut.",
          },
          {
            id: "key-sync",
            title: "Do the key and the solution match?",
            weight: "Blocking",
            detail:
              "If the True/False key and the step-by-step solution disagree, the task is removed. Students should never have to choose between them.",
          },
          {
            id: "partial-credit",
            title: "Does the scoring reward careful answers?",
            weight: "Medium",
            detail:
              "On statement clusters, marking too many options can lower your score. We check whether a task teaches careful selection rather than guessing.",
          },
          {
            id: "time-read",
            title: "Is the explanation clear when you are tired?",
            weight: "Medium",
            detail:
              "If the solution only makes sense when you already know the answer, we rewrite it. The next step should be visible under exam conditions.",
          },
        ],
      },
      {
        type: "p",
        text: "We also do not keep every draft. A larger task bank is not always a better one. In the last economics rewrite we drafted about forty task clusters, kept about eighteen in a form close to the first version, reworked eleven, and removed more than twenty that only looked difficult because the wording was unclear.",
      },
      {
        type: "figure",
        id: "mock-keep-cut",
        caption:
          "Example counts from the last economics bank rewrite. Writing drafts is easier than deciding which tasks should reach students.",
      },
      {
        type: "aside",
        text: "If a task is hard only because the sentence is hard to read, that is not useful exam difficulty. We remove those tasks.",
      },
      {
        type: "p",
        text: "We add a statement when it reflects a real decision students face in the exam. In economics, that may be a definition next to a market-logic claim. In mathematics, it may be domains or discarded roots. In English, it may be vocabulary and grammar that still matter when you are tired. We leave things out when we already have several tasks teaching the same mistake.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Where editing time went in the last major rewrite. Checking false statements and improving explanations took the most time.",
      },
      {
        type: "p",
        text: "After a hard practice exam, we look less at the total score and more at where points were lost for avoidable reasons. Mathematics usually shows the largest share. Economics often loses points through over-marking. English losses are usually smaller but still important. If a task only creates frustration without a clear lesson, we rewrite it.",
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Approximate share of avoidable point loss by section in recent hard demo reviews. This helps us decide what to improve next.",
      },
      {
        type: "demo",
        id: "bank-keep-cut",
        caption:
          "How drafts leave the lab: Cut an obvious false, Keep a clean stakeholder case, Rework a muddy explanation.",
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

export function formatNewsDate(isoDate: string, lang: string = "en"): string {
  const d = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return isoDate;
  const locale = lang === "de" ? "de-AT" : lang === "uk" ? "uk-UA" : lang === "en" ? "en-GB" : lang;
  return d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
