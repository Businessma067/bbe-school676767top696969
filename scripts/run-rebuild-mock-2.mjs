/**
 * Run Mock Exam 2 rebuild with jiti + @ path alias.
 */
import { createJiti } from "jiti";
import path from "node:path";
import { pathToFileURL } from "node:url";

const jiti = createJiti(import.meta.url, {
  alias: { "@": path.resolve("src") },
});

await jiti.import(pathToFileURL(path.resolve("scripts/rebuild-mock-exam-2-specified.mts")).href);
