// Fails when "[CONFIRM" is left in site content (BRIEF §13).
// Runs in CI on main; on other branches it only reports.
// Usage: node scripts/check-confirm.mjs [--warn]

import fs from "node:fs";
import path from "node:path";

const roots = ["src", "index.html", "public/llms.txt"];
const skip = [/src[\\/]test[\\/]/];
const warnOnly = process.argv.includes("--warn");

function files(p) {
  if (!fs.existsSync(p)) return [];
  if (fs.statSync(p).isFile()) return [p];
  return fs.readdirSync(p).flatMap((name) => files(path.join(p, name)));
}

const hits = [];
for (const file of roots.flatMap(files)) {
  if (skip.some((re) => re.test(file)) || !/\.(tsx?|json|html|txt|md)$/.test(file)) continue;
  fs.readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      // Code comments that point to CONTENT-TODO are not shown on the site
      if (line.trim().startsWith("//")) return;
      if (line.includes("[CONFIRM")) hits.push(`${file}:${i + 1}: ${line.trim().slice(0, 120)}`);
    });
}

if (hits.length) {
  console.log(`${hits.length} [CONFIRM] placeholder(s) left. See docs/CONTENT-TODO.md.\n`);
  console.log(hits.join("\n"));
  process.exit(warnOnly ? 0 : 1);
}
console.log("No [CONFIRM] placeholders left.");
