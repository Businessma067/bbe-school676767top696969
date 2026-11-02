import { test, expect } from "bun:test";
import { pathForTrack } from "../src/lib/exam-track";

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
