const BASE_URL = "https://mi-proyecto-seo.vercel.app";

const pagesFromDB = [
  { slug: "producto-1" },
  { slug: "producto-2" },
  { slug: "servicio-1" },
];

export default function handler(req, res) {
  const urls = pagesFromDB.map((p) => `/${p.slug}`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => `<url><loc>${BASE_URL}${u}</loc></url>`).join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();
}
