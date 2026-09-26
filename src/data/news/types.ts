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

export type NewsTimelineBlock = {
  type: "timeline";
  caption: string;
  entries: Array<{
    id: string;
    dateLabel: string;
    title: string;
    note: string;
  }>;
};

export type NewsBodyBlock =
  | NewsParagraphBlock
  | NewsHeadingBlock
  | NewsAsideBlock
  | NewsFigureBlock
  | NewsCriteriaBlock
  | NewsLanesBlock
  | NewsTimelineBlock;

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO date YYYY-MM-DD
  author: string;
  summary: string;
  body: NewsBodyBlock[];
};
