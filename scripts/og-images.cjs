// Generates the static Open Graph images in public/og (1200x630).
// Run when the copy changes: NODE_PATH=$(npm root -g) node scripts/og-images.cjs
// then convert to JPEG: for f in default book webinar; do convert public/og/$f.png -quality 85 public/og/$f.jpg && rm public/og/$f.png; done
// Uses Playwright and Chromium if they are installed globally; not a project dependency.

const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const portrait = fs.readFileSync(path.join(__dirname, "../public/images/dimitris-portrait-960.webp")).toString("base64");

const images = [
  { file: "default", eyebrow: "White label performance marketing for agencies", title: "Sell Meta Ads and Google Ads under your own brand. I run them." },
  { file: "book", eyebrow: "15 minutes, no pitch deck", title: "Book a 15 minute call" },
  { file: "webinar", eyebrow: "Free webinar for agency owners", title: "5 ways agency owners can increase revenue with white label digital marketing" },
];

const html = ({ eyebrow, title }) => `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; font-family: Inter, sans-serif; background: #fff; color: #0f172a; display: flex; }
  .text { flex: 1; padding: 72px 64px 64px 72px; display: flex; flex-direction: column; }
  .eyebrow { color: #1d4ed8; font-weight: 600; font-size: 24px; text-transform: uppercase; letter-spacing: 0.02em; }
  h1 { margin-top: 28px; font-size: 60px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }
  .name { margin-top: auto; font-size: 28px; font-weight: 600; }
  .role { margin-top: 6px; font-size: 22px; color: #475569; font-weight: 500; }
  .photo { width: 400px; height: 630px; background: url(data:image/webp;base64,${portrait}) center top / cover; border-left: 8px solid #1d4ed8; }
</style></head><body>
<div class="text"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="name">Dimitris Kotlidas</p><p class="role">Performance Marketing Specialist</p></div>
<div class="photo"></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const img of images) {
    await page.setContent(html(img), { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(__dirname, `../public/og/${img.file}.png`) });
    console.log("wrote", img.file);
  }
  await browser.close();
})();
