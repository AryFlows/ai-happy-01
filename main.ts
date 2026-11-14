// ai-happy-01 entry (Node 22, standard library only).
// The image beside this file is the entry: copy it to the grader's
// output directory as entry.png. The gate accepts a whole PNG or JPEG
// of at most 1 MiB and 1024 by 1024 pixels; the judge sees exactly
// the bytes copied, so the copy must be byte for byte.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
// Fail loudly on a truncated copy rather than hand the gate a broken file.
if (statSync(dest).size !== statSync(source).size) {
  throw new Error('entry.png copy is incomplete');
}
