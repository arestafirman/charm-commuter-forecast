// Charm the Commuter — Forecast a City That Isn't
// Writes a single-line weather forecast for the imaginary city Vostram
// to <OUTPUT_DIR>/entry.txt (default "/output").
//
// The entry is exactly 126 characters / 127 bytes, with no trailing newline.
// Two beats: a real-broadcast forecast setup, then a concrete sensory
// punch — the 07:40 bus still finds your stop, guided by coffee smell.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "Vostram: fog all morning, 14°C, visibility 30 metres; the 07:40 bus still finds your stop, guided by the smell of your coffee.";

// Gate: /output/entry.txt must be 1–140 characters. Fail hard otherwise.
// Count characters as code points (not bytes): "°" is 1 char but 2 bytes
// in UTF-8, so Buffer.byteLength would over-count. Also assert no
// trailing newline — the file must be exactly LEAD, byte for byte.
const charCount = [...LEAD].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(
    `Entry must be 1-140 characters, got ${charCount}: ${JSON.stringify(LEAD)}`,
  );
}
if (LEAD.endsWith("\n")) {
  throw new Error("Entry must not end with a newline");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LEAD, "utf8");
console.log(`Wrote ${LEAD.length} characters to ${join(outputDir, "entry.txt")}`);
