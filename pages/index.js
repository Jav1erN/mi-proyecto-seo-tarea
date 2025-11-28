import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Proyecto SEO Optimizado</title>
        <meta name="description" content="Inicio del proyecto optimizado con Next.js y SEO avanzado." />
        <meta name="keywords" content="Next.js, SEO, optimización, web" />

        <meta property="og:title" content="Home | Proyecto SEO Optimizado" />
        <meta property="og:description" content="Mejora tu SEO y rendimiento con buenas prácticas en Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a la Página Home</h1>
      <p>Esta página está optimizada para SEO.</p>

      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Imagen optimizada"
        priority
      />
    </>
  );
}
