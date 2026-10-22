import { test, expect } from "bun:test";
import { pathForTrack } from "../src/lib/exam-track";

test("a visitor's BBE or WiSo switch opens that demo immediately", () => {
  expect(pathForTrack("/", "bbe", true)).toBe("/demo-practice");
  expect(pathForTrack("/wiso", "bbe", true)).toBe("/demo-practice");
  expect(pathForTrack("/demo-practice", "wiso", true)).toBe("/wiso/demo-practice");
  expect(pathForTrack("/dashboard", "wiso", true)).toBe("/wiso/demo-practice");
});

test("a paid account keeps the dashboard and otherwise opens the track home", () => {
  expect(pathForTrack("/dashboard", "wiso", false)).toBe("/dashboard");
  expect(pathForTrack("/account", "bbe", false)).toBe("/account");
  expect(pathForTrack("/", "wiso", false)).toBe("/wiso");
  expect(pathForTrack("/wiso", "bbe", false)).toBe("/bbe");
});
