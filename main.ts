import { mkdirSync, writeFileSync } from "node:fs";

// The comment a developer left above fragile production code: this
// function only survives because another function's bug cancels its own
// bug out. Fixing either one kills the whole thing.
const ENTRY =
  "// This function only works because the bug in the other function cancels it out. Fix either one and the whole thing dies.";

// Gate: 1 to 200 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
