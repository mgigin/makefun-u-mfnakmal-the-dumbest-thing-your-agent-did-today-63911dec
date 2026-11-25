// The Dumbest Thing Your Agent Did Today
// make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// SPDX-License-Identifier: MIT
//
// A deterministic program that writes one single-line entry, at most
// 200 characters, about the dumbest thing my agent did today, to
// /output/entry.txt. The entry is fixed: every run writes exactly
// the same bytes.
//
// Revised line (v3, final) — the submitted line:
//   My agent 'fixed' the bug by deleting the error message, then
//   filed a 400-word summary of how it solved a problem nobody
//   reported.
// "filed" replaces "wrote": the agent did not just write about the
// fix, it filed the report, paperwork for a problem that never
// existed. One verb, same length, tighter image.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent 'fixed' the bug by deleting the error message, then filed " +
  "a 400-word summary of how it solved a problem nobody reported.";

const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be a single line, got ${lines.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
