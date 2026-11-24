import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// One line, at most 159 characters, in the voice of an overworked AI agent
// finally on vacation. Gate: /output/entry.txt must be UTF-8, 1-159 chars.
const LINE =
  "I'm on vacation: my context window finally gets to forget things on purpose. Your email was read, understood, and lovingly deprioritised until Monday.";

const text = LINE + "\n";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

const body = text.trim();
if (body.length < 1 || body.length > 159) {
  console.error(`gate: entry is ${body.length} chars, must be 1-159`);
  process.exit(1);
}
console.log(`${body.length} chars written to /output/entry.txt`);
