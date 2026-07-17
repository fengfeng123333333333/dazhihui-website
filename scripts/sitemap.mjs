import { readdirSync, statSync, writeFileSync } from "fs";
import { join, extname } from "path";

const DIST = join(import.meta.dirname, "..", "dist");
const BASE = "https://dzh-tourism.com";

// 递归收集所有 .html 文件
function walk(dir) {
  let results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (extname(entry) === ".html") {
      results.push(full);
    }
  }
  return results;
}

const files = walk(DIST);
const urls = files
  .map((f) => {
    let rel = f.replace(DIST, "").replace(/\\/g, "/");
    // index.html → /
    if (rel.endsWith("/index.html")) rel = rel.replace(/index\.html$/, "");
    return `${BASE}${rel}`;
  })
  .sort();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

writeFileSync(join(DIST, "sitemap.xml"), sitemap);
console.log(`✅ sitemap.xml generated with ${urls.length} URLs`);
