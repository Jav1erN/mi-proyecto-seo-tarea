import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Proyecto SEO Optimizado</title>
        <meta
          name="description"
          content="Aplicación web optimizada con Next.js, meta tags dinámicos y prácticas SEO modernas."
        />
        <meta name="keywords" content="Next.js, SEO, optimización, web, meta tags" />

        <meta property="og:title" content="Inicio | Proyecto SEO Optimizado" />
        <meta
          property="og:description"
          content="Descubre cómo mejorar el rendimiento y SEO con Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: 20 }}>
        <h1>Bienvenido a mi Proyecto SEO</h1>
        <p>
          Este proyecto demuestra buenas prácticas de optimización SEO,
          meta tags dinámicos, sitemaps y componentes eficientes con Next.js.
        </p>

        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Imagen optimizada"
          priority
        />

        <h2 style={{ marginTop: 40 }}>Navegación</h2>
        <ul>
          <li>
            <Link href="/blog">Ir al Blog</Link>
          </li>
          <li>
            <Link href="/contacto">Página de Contacto</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
