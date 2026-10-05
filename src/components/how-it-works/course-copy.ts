/** Chrome inside the How it works stage. English for BBE, German for WiSo. */

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
  sheetTitle: "Explanation",
  answerKey: "Answer key",
  trueWord: "True",
  falseWord: "False",
  showInText: "Show solution in the text",
  locatedInText: "Located in text",
  statement: "Statement",
  trueColumn: "True",
};

export const DE_CHROME: CourseChrome = {
  taskLabel: "Aufgabe 1",
  submit: "Antworten prüfen / Absenden",
  explanation: "Erklärung",
  hideExplanation: "Erklärung ausblenden",
  correct: "richtig",
  timedOff: "Zeitmodus",
  timedOn: "Zeitmodus an",
  standard: "Standard · 1:30",
  calculator: "Rechner",
  sheetTitle: "Erklärung",
  answerKey: "Lösungsschlüssel",
  trueWord: "Wahr",
  falseWord: "Falsch",
  showInText: "Im Text zeigen",
  locatedInText: "Im Text markiert",
  statement: "Aussage",
  trueColumn: "Wahr",
};
