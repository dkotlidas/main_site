// Fails when the built site still contains a "[CONFIRM" placeholder.
// Run after `vite build`: node scripts/check-content.mjs [dist]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? "dist";
const hits = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(html|js|css|json|txt|xml)$/.test(name)) {
      const text = readFileSync(path, "utf8");
      for (const m of text.matchAll(/\[CONFIRM[^\]]*\]/g)) hits.push(`${path}: ${m[0]}`);
    }
  }
};

walk(root);

if (hits.length) {
  console.error(`Found ${hits.length} unresolved [CONFIRM] placeholder(s). See docs/CONTENT-TODO.md.`);
  for (const h of hits) console.error(`  ${h}`);
  process.exit(1);
}
console.log("No [CONFIRM] placeholders found.");
