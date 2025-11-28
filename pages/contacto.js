import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Proyecto SEO Optimizado</title>
        <meta name="description" content="Contáctanos para más información sobre optimización SEO." />
        <meta name="keywords" content="contacto, soporte, ayuda, SEO" />

        <meta property="og:title" content="Contacto | Proyecto SEO Optimizado" />
        <meta property="og:description" content="Envíanos un mensaje y recibe asesoría en SEO." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Página de Contacto</h1>
      <p>Déjanos un mensaje y te responderemos pronto.</p>
    </>
  );
}
