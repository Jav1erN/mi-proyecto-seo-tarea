export function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://mi-proyecto-seo-tarea.vercel.app/</loc>
    </url>
    <url>
      <loc>https://mi-proyecto-seo-tarea.vercel.app/blog</loc>
    </url>
    <url>
      <loc>https://mi-proyecto-seo-tarea.vercel.app/contacto</loc>
    </url>
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
