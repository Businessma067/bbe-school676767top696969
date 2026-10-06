/** Chrome inside the How it works stage. WiSo math overrides the verdicts the site translates. */

export type CourseChrome = {
  taskLabel: string;
  submit: string;
  explanation: string;
  hideExplanation: string;
  correct: string;
  timedOff: string;
  timedOn: string;
  standard: string;
  calculator: string;
  sheetTitle: string;
  answerKey: string;
  trueWord: string;
  falseWord: string;
  showInText: string;
  locatedInText: string;
  statement: string;
  trueColumn: string;
};

export const EN_CHROME: CourseChrome = {
  taskLabel: "Task 1",
  submit: "Check Answers / Submit",
  explanation: "Explanation",
  hideExplanation: "Hide Explanation",
  correct: "correct",
  timedOff: "Timed Mode",
  timedOn: "Timed Mode ON",
  standard: "Standard · 1:30",
  calculator: "Calculator",
  sheetTitle: "Full solution · Task 1",
  answerKey: "Answer key",
  trueWord: "True",
  falseWord: "False",
  showInText: "Show solution in the text",
  locatedInText: "Located in text",
  statement: "Statement",
  trueColumn: "True",
};

/** WiSo math only. The site keeps English buttons and translates the verdicts. */
export const DE_CHROME: CourseChrome = {
  ...EN_CHROME,
  answerKey: "Antwortschlüssel",
  trueWord: "Richtig",
  falseWord: "Falsch",
  statement: "Aussage",
  trueColumn: "Richtig",
};
