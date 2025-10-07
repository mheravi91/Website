import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const staticPaths = ["/"];

export async function GET({ site }: APIContext) {
  if (!site) {
    return new Response("Site configuration is required to generate the sitemap.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=UTF-8" },
    });
  }

  const urls = new Set<string>();
  const canonical = (path: string) => new URL(path, site).href;

  for (const path of staticPaths) {
    urls.add(canonical(path));
  }

  const papers = await getCollection("papers");
  for (const paper of papers) {
    urls.add(canonical(`/papers/${paper.id}/`));
  }

  const homepage = canonical("/");
  const lastmod = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${Array.from(urls)
      .sort()
      .map((url) => `  <url>\n` +
        `    <loc>${url}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${url === homepage ? "weekly" : "monthly"}</changefreq>\n` +
        `    <priority>${url === homepage ? "1.0" : "0.6"}</priority>\n` +
        `  </url>`)
      .join("\n")}\n` +
    `</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
}
