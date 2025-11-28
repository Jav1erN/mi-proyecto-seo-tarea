import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "¿Qué es SEO y por qué es importante?",
      description:
        "Entiende cómo funciona el SEO y cuál es su impacto en la visibilidad de un sitio web.",
      slug: "#seo"
    },
    {
      title: "¿Por qué Next.js es ideal para proyectos modernos?",
      description:
        "Next.js ofrece optimización, renderizado híbrido y eficiencia para proyectos profesionales.",
      slug: "#nextjs"
    },
    {
      title: "Buenas prácticas SEO recomendadas para 2025",
      description:
        "Listado de técnicas esenciales para mejorar el posicionamiento en buscadores.",
      slug: "#mejores-practicas"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Proyecto SEO Optimizado</title>
        <meta
          name="description"
          content="Artículos sobre SEO, desarrollo web y Next.js."
        />
        <meta property="og:title" content="Blog | Proyecto SEO Optimizado" />
        <meta
          property="og:description"
          content="Lecturas actualizadas sobre optimización web y mejores prácticas SEO."
        />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <div style={{ padding: 20 }}>
        <h1>Blog</h1>
        <p>Artículos recientes:</p>

        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              margin: "20px 0",
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 8
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/contacto`}>
              <strong style={{ color: "blue" }}>Contactar →</strong>
            </Link>
          </div>
        ))}

        <Link href="/">
          <p style={{ marginTop: 40, cursor: "pointer" }}>← Volver al inicio</p>
        </Link>
      </div>
    </>
  );
}
