import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Proyecto SEO Optimizado</title>
        <meta name="description" content="Artículos y noticias del blog optimizado con Next.js." />
        <meta name="keywords" content="blog, noticias, artículos, SEO" />

        <meta property="og:title" content="Blog | Proyecto SEO Optimizado" />
        <meta property="og:description" content="Explora artículos optimizados para motores de búsqueda." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Página del Blog</h1>
      <p>Bienvenido a los artículos optimizados.</p>
    </>
  );
}
