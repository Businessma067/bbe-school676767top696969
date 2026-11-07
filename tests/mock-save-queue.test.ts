import { expect, test } from "bun:test";
import { queueMockSave } from "../src/lib/mock-save-queue";

test("submission waits for the prior progress backup", async () => {
  const steps: string[] = [];
  let release: () => void = () => undefined;
  const wait = new Promise<void>((resolve) => { release = resolve; });
  const backup = queueMockSave("exam", async () => { await wait; steps.push("backup"); });
  const submit = queueMockSave("exam", async () => { steps.push("submitted"); return true; });
  await Promise.resolve();
  expect(steps).toEqual([]);
  release();
  await backup;
  expect(await submit).toBe(true);
  expect(steps).toEqual(["backup", "submitted"]);
});

test("a failed backup does not prevent saving final answers", async () => {
  const failed = queueMockSave("retry", async () => { throw new Error("offline"); });
  const submit = queueMockSave("retry", async () => "answers saved");
  await expect(failed).rejects.toThrow("offline");
  expect(await submit).toBe("answers saved");
});