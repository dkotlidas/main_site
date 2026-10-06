// Runs after vite-react-ssg has written the HTML files (ssgOptions.onFinished).
// - dist/404.html for Vercel's not-found responses
// - sitemap.xml from the prerendered pages, without noindex pages

import fs from "node:fs";
import path from "node:path";
import { site } from "../src/content/site";

const EXCLUDE = [/^404$/, /^thanks\//];

function htmlRoutes(dir: string, base = ""): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === "assets" || entry.name.startsWith(".") || entry.name === "static-loader-data") continue;
      out.push(...htmlRoutes(path.join(dir, entry.name), base ? `${base}/${entry.name}` : entry.name));
    } else if (entry.name === "index.html") {
      out.push(base);
    }
  }
  return out;
}

export function postbuild(dir: string) {
  const notFound = path.join(dir, "404", "index.html");
  if (fs.existsSync(notFound)) {
    fs.copyFileSync(notFound, path.join(dir, "404.html"));
    fs.rmSync(path.join(dir, "404"), { recursive: true });
  }

  const routes = htmlRoutes(dir)
    .filter((r) => !EXCLUDE.some((re) => re.test(r)))
    .sort((a, b) => a.length - b.length || a.localeCompare(b));

  const urls = routes
    .map((r) => `  <url>\n    <loc>${site.url}/${r}</loc>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(dir, "sitemap.xml"), xml);
}
