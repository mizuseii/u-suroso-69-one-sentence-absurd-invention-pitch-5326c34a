// One-Sentence Absurd Invention Pitch: the apologetic self-checkout.
// Annoyance: the self-checkout falsely accusing you of an "unexpected item
// in the bagging area" — the machine's smug false alarm at the till.
// Invention: a self-checkout so embarrassed by its own false accusation
// that it apologises by scanning itself, bagging itself, and paying for
// your groceries out of sheer embarrassment. The laugh comes from the
// machine itself: the accuser becomes the accused, the bagger, and the
// payer, all in one sentence. Fresh vs the field: no toasters, socks,
// remotes, fridges, toothbrushes, alarm clocks, doorbells, showers,
// printers, umbrellas, kettles, microwaves, plants, or chargers — the
// self-checkout's false "unexpected item" is a different, everyday target.
// Verified 2026-11-24: entry is exactly 195 characters, one sentence,
// one trailing period, no trailing newline. At 195 of the 220-char limit
// the pitch spends its length on the mechanism (scan + bag + pay), which
// is the joke itself — trimming it further would cut the payoff, so the
// smaller-text tie-break is conceded in favour of the funnier sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "A self-checkout that, upon falsely accusing you of an unexpected item in the bagging area, apologises by scanning itself, bagging itself, and paying for your groceries out of sheer embarrassment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`Wrote ${pitch.length} characters to /output/entry.txt`);
