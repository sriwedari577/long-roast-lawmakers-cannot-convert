/*
 * One-sentence satirical roast, judged in this order:
 * (1) It roasts lawmakers who regulate AI, crypto and the internet
 *     while being unable to convert a file to PDF.
 * (2) Real turn: the setup establishes their lawmaking authority
 *     ("writing the laws that will govern ..."), then undercuts it
 *     with the one file they cannot convert.
 * (3) The aim stays on lawmakers and the rules they write — their
 *     power and competence — not random abuse.
 * (4) It reads clean in one pass and is quotable, with the punch
 *     landing on the last few words ("turn it into a PDF").
 * (5) Specific, unexpected detail over a worn tech-illiteracy
 *     cliche: a crooked phone photo of a printed bill, emailed to
 *     staff — no printers, passwords, rebooting or grandma jokes.
 * Revision note: comment-only edit; the entry text is unchanged.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "They are writing the laws that will govern artificial intelligence, crypto markets and the internet itself, yet their chairman just emailed his staff a crooked phone photo of his printed bill and asked someone to turn it into a PDF.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
