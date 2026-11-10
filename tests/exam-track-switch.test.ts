import { test, expect } from "bun:test";
import { pathForTrack, resolveNavTrack } from "../src/lib/exam-track";
import { readFileSync } from "node:fs";

test("BBE or WiSo switch opens that track's main landing", () => {
  expect(pathForTrack("/", "bbe", true)).toBe("/bbe");
  expect(pathForTrack("/wiso", "bbe", true)).toBe("/bbe");
  expect(pathForTrack("/demo-practice", "wiso", true)).toBe("/wiso");
  expect(pathForTrack("/bbe", "wiso", false)).toBe("/wiso");
  expect(pathForTrack("/", "wiso", false)).toBe("/wiso");
  expect(pathForTrack("/wiso", "bbe", false)).toBe("/bbe");
});

test("a paid account keeps the dashboard and account pages", () => {
  expect(pathForTrack("/dashboard", "wiso", false)).toBe("/dashboard");
  expect(pathForTrack("/account", "bbe", false)).toBe("/account");
});

test("free accounts switch from shared pages to the selected demo", () => {
  expect(pathForTrack("/dashboard", "wiso", true)).toBe("/wiso/demo-practice");
  expect(pathForTrack("/account", "bbe", true)).toBe("/demo-practice");
});

const source = readFileSync(new URL("../src/components/ExamTrackSwitcher.tsx", import.meta.url), "utf8");
const start = source.indexOf("  const switchTo =");
const end = source.indexOf("  const openHybrid =", start);
const switchJs = new Bun.Transpiler({ loader: "ts" }).transformSync(source.slice(start, end));

for (const pathname of ["/dashboard", "/account"]) {
  test(`paid switch updates track and language on ${pathname}`, () => {
    const calls: unknown[] = [];
    const run = new Function("pathForTrack", "stripLocalePrefix", "storeExamTrack", "setTrack", "setLang", "getLocaleLinkProps", "navigate", "pathname", "track", "visitor", "onHybrid", "search", "trackUiLang", `${switchJs}; switchTo('wiso');`);
    run(pathForTrack, (p: string) => p, (t: string) => calls.push(["stored", t]), (t: string) => calls.push(["track", t]), (l: string) => calls.push(["lang", l]), (to: string) => ({ to }), () => {}, pathname, "bbe", false, false, {}, () => "de");
    expect(calls).toEqual([["stored", "wiso"], ["track", "wiso"], ["lang", "de"]]);
  });
}

test("an explicit track choice wins over the only owned course on shared pages", () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", { configurable: true, value: { sessionStorage: { getItem: () => "bbe" } } });
  try {
    expect(resolveNavTrack("/account", { hasWisoFull: true })).toBe("bbe");
  } finally {
    if (previous) Object.defineProperty(globalThis, "window", previous);
    else Reflect.deleteProperty(globalThis, "window");
  }
});
